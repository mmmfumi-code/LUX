#!/usr/bin/env python3
"""テーマ候補 CSV を 8 観点 × 曜日別の重みで採点し、重複チェック結果つきのランキングを出す。

  python3 scripts/note/score_themes.py output/note/plans/2026-W41_candidates.csv

CSV 列: id,title,pillar,keywords,search,sns,expertise,rarity,authenticity,paid_fit,purchase,series,notes
  - 各観点は 1〜5 の整数
  - keywords は "|" 区切り

出力（標準出力・Markdown）: 候補一覧（重複判定つき）と、月/水/金それぞれのランキング。
足切り条件に当たる候補は順位を付けず、理由を表示する。最終決定は note-strategist が行う。
"""
import argparse
import csv
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from check_duplicate import find_similar  # noqa: E402

AXES = ["search", "sns", "expertise", "rarity", "authenticity", "paid_fit", "purchase", "series"]
LABELS = {
    "search": "検索", "sns": "拡散", "expertise": "専門", "rarity": "希少",
    "authenticity": "本人", "paid_fit": "有料", "purchase": "購買", "series": "連載",
}

# note/templates/theme_scoring.md の重み表と同じにしておくこと
WEIGHTS = {
    "mon": {"search": 3, "sns": 3, "expertise": 1, "rarity": 1, "authenticity": 2, "paid_fit": -1, "purchase": 0, "series": 2},
    "wed": {"search": 1, "sns": 1, "expertise": 3, "rarity": 3, "authenticity": 3, "paid_fit": 1, "purchase": 1, "series": 2},
    "fri": {"search": 1, "sns": 1, "expertise": 2, "rarity": 2, "authenticity": 3, "paid_fit": 3, "purchase": 3, "series": 1},
}
DAY_LABEL = {"mon": "月＝集客", "wed": "水＝専門性", "fri": "金＝収益"}


def cell(text) -> str:
    return str(text).replace("|", "\\|")


def weighted(row: dict, day: str) -> int:
    total = 0
    for axis, w in WEIGHTS[day].items():
        v = row[axis]
        total += abs(w) * ((6 - v) if w < 0 else v)  # 負の重み = 反転（無料向きほど高得点）
    return total


def max_score(day: str) -> int:
    return sum(abs(w) * 5 for w in WEIGHTS[day].values())


def gate(row: dict, day: str) -> str:
    """足切り理由（該当なしなら空文字）。"""
    if row["dup"] == "DUPLICATE":
        return "重複（DUPLICATE）"
    if row["authenticity"] <= 2:
        return "本人だから書けるか ≦2"
    if day == "fri" and row["paid_fit"] <= 2:
        return "有料適性 ≦2"
    if day == "mon" and row["search"] <= 2 and row["sns"] <= 2:
        return "検索需要・拡散性ともに ≦2"
    return ""


def load(path: Path) -> list:
    rows = []
    with path.open(encoding="utf-8") as f:
        for i, r in enumerate(csv.DictReader(f), 2):
            try:
                for a in AXES:
                    r[a] = int(r[a])
                    if not 1 <= r[a] <= 5:
                        raise ValueError(f"{a}={r[a]}")
            except (KeyError, ValueError) as e:
                sys.exit(f"{path}:{i} 採点が不正です（1〜5の整数が必要）: {e}")
            rows.append(r)
    return rows


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("csv")
    ap.add_argument("--min", type=int, default=10, help="必要な候補数（既定10）")
    args = ap.parse_args()

    rows = load(Path(args.csv))
    if len(rows) < args.min:
        print(f"⚠ 候補が {len(rows)} 本しかありません（最低 {args.min} 本）\n")

    past_synced = True
    for r in rows:
        verdict, scored, n_past = find_similar(r["title"], r.get("keywords", ""))
        past_synced = past_synced and n_past > 0
        r["dup"] = verdict
        r["dup_top"] = f"{scored[0][0]:.2f} {scored[0][5][:24]}" if scored else "-"

    if not past_synced:
        print("⚠ past_articles.csv が空です。重複チェックは topic_log のみで実施しています\n")

    print("## 候補一覧（採点・重複判定）\n")
    print("| ID | テーマ | ピラー | " + " | ".join(LABELS[a] for a in AXES) + " | 重複 | 最も近い既存 |")
    print("|----|--------|--------|" + "|".join(":-:" for _ in AXES) + "|------|--------------|")
    for r in rows:
        print(f"| {r['id']} | {cell(r['title'])} | {cell(r['pillar'])} | "
              + " | ".join(str(r[a]) for a in AXES) + f" | {r['dup']} | {cell(r['dup_top'])} |")

    for day in ("mon", "wed", "fri"):
        print(f"\n## ランキング：{DAY_LABEL[day]}（満点 {max_score(day)}）\n")
        print("| 順位 | ID | 点 | テーマ | 備考 |")
        print("|:---:|----|---:|--------|------|")
        ranked = sorted(rows, key=lambda r: (gate(r, day) != "", -weighted(r, day)))
        n = 0
        for r in ranked:
            g = gate(r, day)
            if g:
                print(f"| 除外 | {r['id']} | {weighted(r, day)} | {cell(r['title'])} | {g} |")
            else:
                n += 1
                note = "SIMILAR：切り口の違いを要説明" if r["dup"] == "SIMILAR" else ""
                print(f"| {n} | {r['id']} | {weighted(r, day)} | {cell(r['title'])} | {note} |")
    return 0


if __name__ == "__main__":
    sys.exit(main())
