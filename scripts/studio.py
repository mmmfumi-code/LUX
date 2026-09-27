#!/usr/bin/env python3
"""AI Design Studio — プロジェクト・工程・承認ゲート管理 CLI

工程の状態は projects/<slug>/project.json に保存される。
gate=true の工程は `approve` されるまで次工程を `start` できない。

使い方:
  python3 scripts/studio.py new <product|note|instagram> <slug> [--title "タイトル"]
  python3 scripts/studio.py list
  python3 scripts/studio.py status [slug]
  python3 scripts/studio.py next <slug>
  python3 scripts/studio.py start <slug> [stage]
  python3 scripts/studio.py newver <slug> [stage]
  python3 scripts/studio.py submit <slug> <file> [file ...] [--stage STAGE]
  python3 scripts/studio.py approve <slug> [--stage STAGE] [--adopt FILE] [--note "メモ"]
  python3 scripts/studio.py revise <slug> --note "修正指示" [--stage STAGE]
  python3 scripts/studio.py context <slug>
  python3 scripts/studio.py log <slug> "メッセージ"
  python3 scripts/studio.py deliver <slug> <file> [file ...]
"""
from __future__ import annotations

import argparse
import json
import re
import shutil
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PROJECTS = ROOT / "projects"
OUTPUT = ROOT / "output"
WORKFLOWS = ROOT / "workflows" / "workflows.json"

STATUS_LABEL = {
    "pending": "未着手",
    "in_progress": "作業中",
    "awaiting_approval": "承認待ち",
    "revision": "修正中",
    "approved": "承認済み",
    "done": "完了",
}
FINISHED = {"approved", "done"}


def now() -> str:
    return datetime.now().strftime("%Y-%m-%d %H:%M")


def die(msg: str) -> None:
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(1)


def load_workflows() -> dict:
    data = json.loads(WORKFLOWS.read_text(encoding="utf-8"))
    return {k: v for k, v in data.items() if not k.startswith("_")}


def project_dir(slug: str) -> Path:
    return PROJECTS / slug


def load(slug: str) -> dict:
    path = project_dir(slug) / "project.json"
    if not path.exists():
        die(f"プロジェクト '{slug}' が見つかりません（python3 scripts/studio.py list で確認）")
    return json.loads(path.read_text(encoding="utf-8"))


def save(p: dict) -> None:
    p["updated"] = now()
    path = project_dir(p["slug"]) / "project.json"
    path.write_text(json.dumps(p, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def stage_defs(p: dict) -> list[dict]:
    return load_workflows()[p["workflow"]]["stages"]


def stage_def(p: dict, sid: str) -> dict:
    for s in stage_defs(p):
        if s["id"] == sid:
            return s
    die(f"工程 '{sid}' はこのワークフローに存在しません")


def append(path: Path, text: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as f:
        f.write(text)


def log(p: dict, msg: str) -> None:
    append(project_dir(p["slug"]) / "log.md", f"- {now()} {msg}\n")


def rel(path: Path) -> str:
    return str(path.resolve().relative_to(ROOT))


def blocking_stage(p: dict, sid: str) -> dict | None:
    """sid より前にある未完了の工程を返す（なければ None）"""
    for s in stage_defs(p):
        if s["id"] == sid:
            return None
        if p["stages"][s["id"]]["status"] not in FINISHED:
            return s
    return None


def next_stage(p: dict) -> dict | None:
    for s in stage_defs(p):
        if p["stages"][s["id"]]["status"] not in FINISHED:
            return s
    return None


def resolve_stage(p: dict, sid: str | None, want: set[str] | None = None) -> str:
    if sid:
        stage_def(p, sid)
        return sid
    if want:
        for s in stage_defs(p):
            if p["stages"][s["id"]]["status"] in want:
                return s["id"]
        die(f"対象となる工程がありません（状態: {', '.join(STATUS_LABEL[w] for w in want)}）")
    s = next_stage(p)
    if not s:
        die("すべての工程が完了しています")
    return s["id"]


def next_version_path(p: dict, sid: str) -> Path:
    d = project_dir(p["slug"]) / "stages" / sid
    d.mkdir(parents=True, exist_ok=True)
    nums = [int(m.group(1)) for f in d.iterdir() if (m := re.match(r"v(\d+)", f.name))]
    return d / f"v{max(nums, default=0) + 1}.md"


# ---------------------------------------------------------------- commands

def cmd_new(a) -> None:
    wfs = load_workflows()
    if a.workflow not in wfs:
        die(f"ワークフローは {', '.join(wfs)} のいずれかです")
    if not re.fullmatch(r"[a-z0-9][a-z0-9-]*", a.slug):
        die("slug は半角英小文字・数字・ハイフンのみ（例: lux-app, note-2026-10-saving）")
    d = project_dir(a.slug)
    if d.exists():
        die(f"プロジェクト '{a.slug}' は既に存在します")
    wf = wfs[a.workflow]
    title = a.title or a.slug
    for sub in ["research", "prompts", "assets", "stages"]:
        (d / sub).mkdir(parents=True, exist_ok=True)
        (d / sub / ".gitkeep").touch()
    for s in wf["stages"]:
        (d / "stages" / s["id"]).mkdir(exist_ok=True)

    (d / "brief.md").write_text(
        f"# ブリーフ: {title}\n\n"
        f"- ワークフロー: {wf['name']}\n- 作成日: {now()}\n\n"
        "## 目的・ゴール\n（未記入）\n\n## ターゲット\n（未記入）\n\n"
        "## 成果物\n（未記入）\n\n## 制約・前提（期限・トーン・NG事項）\n（未記入）\n\n"
        "## 参考・インプット\n（未記入）\n",
        encoding="utf-8",
    )
    (d / "handoff.md").write_text(
        f"# 引き継ぎメモ: {title}\n\n"
        "各工程の完了時に更新する。次の担当Agentはまずこのファイルを読む。\n\n"
        "## 現在地\n- 工程: 01 未着手\n\n## これまでの決定事項（要約）\n- なし\n\n"
        "## 未解決の論点・次工程への申し送り\n- なし\n",
        encoding="utf-8",
    )
    (d / "decisions.md").write_text(
        f"# 採用案・承認記録: {title}\n\nユーザーが承認した内容のみを記録する（追記専用）。\n",
        encoding="utf-8",
    )
    (d / "log.md").write_text(f"# 作業ログ: {title}\n\n", encoding="utf-8")

    p = {
        "slug": a.slug,
        "title": title,
        "workflow": a.workflow,
        "created": now(),
        "updated": now(),
        "stages": {
            s["id"]: {"status": "pending", "versions": [], "adopted": None,
                      "approved_at": None, "feedback": []}
            for s in wf["stages"]
        },
    }
    save(p)
    log(p, f"プロジェクト作成（{wf['name']}）")
    print(f"作成しました: {rel(d)}  [{wf['name']}]")
    print(f"次の工程: {wf['stages'][0]['id']} {wf['stages'][0]['title']}")


def cmd_list(a) -> None:
    rows = []
    for f in sorted(PROJECTS.glob("*/project.json")):
        p = json.loads(f.read_text(encoding="utf-8"))
        if p["slug"].startswith("_"):
            continue
        ns = next_stage(p)
        where = f"{ns['id']} {STATUS_LABEL[p['stages'][ns['id']]['status']]}" if ns else "全工程完了"
        rows.append(f"{p['slug']:<28} {p['workflow']:<10} {where:<24} 更新 {p['updated']}  {p['title']}")
    print("\n".join(rows) if rows else "プロジェクトはまだありません")


def cmd_status(a) -> None:
    if not a.slug:
        return cmd_list(a)
    p = load(a.slug)
    wf = load_workflows()[p["workflow"]]
    print(f"{p['title']}  ({p['slug']} / {wf['name']})\n")
    for s in wf["stages"]:
        st = p["stages"][s["id"]]
        gate = "🔒承認必須" if s["gate"] else "  自動進行"
        extra = f"  採用: {st['adopted']}" if st["adopted"] else ""
        if not extra and st["versions"]:
            extra = f"  最新: {st['versions'][-1]}"
        print(f"  {s['id']:<13} {STATUS_LABEL[st['status']]:<6} {gate}  {s['title']} [{s['agent']}]{extra}")
    print()
    cmd_next(a)


def cmd_next(a) -> None:
    p = load(a.slug)
    s = next_stage(p)
    if not s:
        print("次のアクション: すべての工程が完了しています。必要なら deliver で output/ に納品してください。")
        return
    st = p["stages"][s["id"]]["status"]
    msg = {
        "pending": f"{s['id']} を開始できます（担当: {s['agent']}）",
        "in_progress": f"{s['id']} は作業中です。成果物を保存して submit してください",
        "revision": f"{s['id']} は修正指示を受けています（stages/{s['id']}/feedback.md）。修正版を作成してください",
        "awaiting_approval": f"{s['id']} はユーザーの承認待ちです。承認（/approve）か修正指示（/revise）が出るまで先へ進めません",
    }[st]
    print(f"次のアクション: {msg}")


def cmd_start(a) -> None:
    p = load(a.slug)
    sid = resolve_stage(p, a.stage)
    blk = blocking_stage(p, sid)
    if blk:
        bst = p["stages"][blk["id"]]["status"]
        die(f"{sid} は開始できません。前工程 {blk['id']}（{blk['title']}）が「{STATUS_LABEL[bst]}」です。"
            + ("ユーザーの承認が必要です。" if blk["gate"] else ""))
    st = p["stages"][sid]
    if st["status"] in FINISHED:
        die(f"{sid} は既に{STATUS_LABEL[st['status']]}です。やり直す場合はユーザーの修正指示（revise）を受けてください")
    if st["status"] == "awaiting_approval":
        die(f"{sid} は承認待ちです。ユーザーの判断を待ってください")
    was_revision = st["status"] == "revision"
    st["status"] = "in_progress"
    save(p)
    log(p, f"{sid} 開始" + ("（修正対応）" if was_revision else ""))
    d = stage_def(p, sid)
    print(f"開始: {sid} {d['title']}（担当Agent: {d['agent']}）")
    print(f"保存先: {rel(next_version_path(p, sid))}")
    if was_revision:
        print(f"修正指示: {rel(project_dir(p['slug']) / 'stages' / sid / 'feedback.md')}")


def cmd_newver(a) -> None:
    p = load(a.slug)
    sid = resolve_stage(p, a.stage, {"in_progress", "revision"})
    print(rel(next_version_path(p, sid)))


def cmd_submit(a) -> None:
    p = load(a.slug)
    sid = resolve_stage(p, a.stage, {"in_progress"})
    st = p["stages"][sid]
    if st["status"] != "in_progress":
        die(f"{sid} は作業中ではありません（現在: {STATUS_LABEL[st['status']]}）")
    files = []
    for f in a.files:
        path = (ROOT / f) if not Path(f).is_absolute() else Path(f)
        if not path.exists():
            die(f"ファイルがありません: {f}")
        files.append(rel(path))
    st["versions"].extend(files)
    gate = stage_def(p, sid)["gate"]
    st["status"] = "awaiting_approval" if gate else "done"
    save(p)
    log(p, f"{sid} 提出: {', '.join(files)}" + ("（承認待ち）" if gate else "（自動進行工程のため完了）"))
    if gate:
        print(f"{sid} を提出しました。🔒 ユーザーの承認待ちです。ここで作業を止めてください。")
    else:
        print(f"{sid} を完了しました（自動進行工程）。次の工程へ進めます。")


def cmd_approve(a) -> None:
    p = load(a.slug)
    sid = resolve_stage(p, a.stage, {"awaiting_approval"})
    st = p["stages"][sid]
    if st["status"] != "awaiting_approval":
        die(f"{sid} は承認待ちではありません（現在: {STATUS_LABEL[st['status']]}）")
    adopted = a.adopt or (st["versions"][-1] if st["versions"] else None)
    st.update(status="approved", adopted=adopted, approved_at=now())
    save(p)
    d = stage_def(p, sid)
    append(project_dir(p["slug"]) / "decisions.md",
           f"\n## {sid} {d['title']} — 承認 {now()}\n- 採用案: {adopted or '（ファイルなし）'}\n"
           + (f"- ユーザーコメント: {a.note}\n" if a.note else ""))
    log(p, f"{sid} ユーザー承認（採用: {adopted}）")
    print(f"✅ {sid} を承認しました。採用案: {adopted}")
    cmd_next(a)


def cmd_revise(a) -> None:
    p = load(a.slug)
    sid = resolve_stage(p, a.stage, {"awaiting_approval"})
    st = p["stages"][sid]
    if st["status"] not in {"awaiting_approval", "approved", "done"}:
        die(f"{sid} は修正指示を受けられる状態ではありません（現在: {STATUS_LABEL[st['status']]}）")
    st["status"] = "revision"
    st["feedback"].append({"at": now(), "note": a.note})
    # 後続工程は前提が変わるため未着手に戻す（成果物ファイルは残す）
    reset = False
    for s in stage_defs(p):
        if reset and p["stages"][s["id"]]["status"] != "pending":
            p["stages"][s["id"]]["status"] = "pending"
            log(p, f"{s['id']} を未着手に戻しました（{sid} の修正のため）")
        if s["id"] == sid:
            reset = True
    save(p)
    append(project_dir(p["slug"]) / "stages" / sid / "feedback.md", f"\n## {now()}\n{a.note}\n")
    log(p, f"{sid} 修正指示: {a.note}")
    print(f"🔁 {sid} に修正指示を記録しました。")


def cmd_context(a) -> None:
    """担当Agentに渡すべき引き継ぎファイル一覧を出力する"""
    p = load(a.slug)
    d = project_dir(p["slug"])
    items = [d / "brief.md", d / "handoff.md", d / "decisions.md",
             PROJECTS / "_studio" / "brand.md", PROJECTS / "_studio" / "preferences.md"]
    print("# 必読（引き継ぎ）")
    for f in items:
        if f.exists():
            print(f"- {rel(f)}")
    print("# 承認済み・完了工程の採用成果物")
    for s in stage_defs(p):
        st = p["stages"][s["id"]]
        if st["status"] in FINISHED:
            f = st["adopted"] or (st["versions"][-1] if st["versions"] else None)
            if f:
                print(f"- {s['id']}: {f}")
    ns = next_stage(p)
    if ns:
        fb = d / "stages" / ns["id"] / "feedback.md"
        if fb.exists():
            print(f"# 現工程への修正指示\n- {rel(fb)}")
    research = [f for f in sorted((d / "research").glob("*")) if f.name != ".gitkeep"]
    if research:
        print("# 調査資料")
        for f in research:
            print(f"- {rel(f)}")


def cmd_log(a) -> None:
    p = load(a.slug)
    log(p, a.message)
    print("記録しました")


def cmd_deliver(a) -> None:
    p = load(a.slug)
    last = stage_defs(p)[-1]
    if p["stages"][last["id"]]["status"] != "approved":
        die(f"最終工程 {last['id']} がユーザー承認されていないため納品できません")
    out = OUTPUT / p["slug"]
    out.mkdir(parents=True, exist_ok=True)
    for f in a.files:
        src = ROOT / f
        if not src.exists():
            die(f"ファイルがありません: {f}")
        dst = out / src.name
        (shutil.copytree(src, dst, dirs_exist_ok=True) if src.is_dir() else shutil.copy2(src, dst))
        print(f"納品: {rel(dst)}")
    log(p, f"output/ に納品: {', '.join(a.files)}")


def main() -> None:
    ap = argparse.ArgumentParser(description="AI Design Studio CLI")
    sub = ap.add_subparsers(dest="cmd", required=True)

    s = sub.add_parser("new"); s.add_argument("workflow"); s.add_argument("slug"); s.add_argument("--title")
    s.set_defaults(fn=cmd_new)
    sub.add_parser("list").set_defaults(fn=cmd_list)
    s = sub.add_parser("status"); s.add_argument("slug", nargs="?"); s.set_defaults(fn=cmd_status)
    s = sub.add_parser("next"); s.add_argument("slug"); s.set_defaults(fn=cmd_next)
    s = sub.add_parser("start"); s.add_argument("slug"); s.add_argument("stage", nargs="?"); s.set_defaults(fn=cmd_start)
    s = sub.add_parser("newver"); s.add_argument("slug"); s.add_argument("stage", nargs="?"); s.set_defaults(fn=cmd_newver)
    s = sub.add_parser("submit"); s.add_argument("slug"); s.add_argument("files", nargs="+"); s.add_argument("--stage")
    s.set_defaults(fn=cmd_submit)
    s = sub.add_parser("approve"); s.add_argument("slug"); s.add_argument("--stage"); s.add_argument("--adopt")
    s.add_argument("--note"); s.set_defaults(fn=cmd_approve)
    s = sub.add_parser("revise"); s.add_argument("slug"); s.add_argument("--stage"); s.add_argument("--note", required=True)
    s.set_defaults(fn=cmd_revise)
    s = sub.add_parser("context"); s.add_argument("slug"); s.set_defaults(fn=cmd_context)
    s = sub.add_parser("log"); s.add_argument("slug"); s.add_argument("message"); s.set_defaults(fn=cmd_log)
    s = sub.add_parser("deliver"); s.add_argument("slug"); s.add_argument("files", nargs="+"); s.set_defaults(fn=cmd_deliver)

    a = ap.parse_args()
    a.fn(a)


if __name__ == "__main__":
    main()
