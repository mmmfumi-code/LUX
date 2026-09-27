#!/usr/bin/env python3
"""output/note/YYYY-MM-DD/ の成果物が揃っているか・形式が正しいかを検証する。

  python3 scripts/note/validate_output.py output/note/2026-09-28 [--strict]

--strict を付けると【要記入】が残っている場合も失敗にする（公開直前用）。
"""
import argparse
import re
import struct
import sys
from pathlib import Path

# 煽りすぎ表現（note-writer.md の「タイトルのルール」と揃える）
HYPE_WORDS = ["絶対", "必ず", "誰でも", "簡単に", "しないと損", "ヤバい", "完全攻略",
              "最強", "爆速", "放置で", "バレない", "9割が知らない", "稼げる"]
HYPE_PATTERNS = [r"たった\d+[日秒分時]", r"神(ツール|アプリ|テンプレ|記事|ガジェット|機能|設定)"]


def hype_hits(text: str) -> list:
    hits = [w for w in HYPE_WORDS if w in text]
    hits += [m.group(0) for p in HYPE_PATTERNS for m in re.finditer(p, text)]
    return hits


REQUIRED = ["article.md", "title.txt", "lead.txt", "thumbnail.png", "hashtags.txt", "price.txt", "references.md"]


def png_size(p: Path):
    with p.open("rb") as f:
        head = f.read(24)
    if head[:8] != b"\x89PNG\r\n\x1a\n":
        return None
    return struct.unpack(">II", head[16:24])


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("dir")
    ap.add_argument("--strict", action="store_true")
    args = ap.parse_args()
    d = Path(args.dir)
    errors, warns = [], []

    if not re.fullmatch(r"\d{4}-\d{2}-\d{2}", d.name):
        errors.append(f"ディレクトリ名が YYYY-MM-DD ではありません: {d.name}")

    for name in REQUIRED:
        p = d / name
        if not p.exists() or p.stat().st_size == 0:
            errors.append(f"missing/empty: {name}")

    if (d / "title.txt").exists():
        title = (d / "title.txt").read_text(encoding="utf-8").splitlines()[0].strip()
        if not (15 <= len(title) <= 60):
            warns.append(f"title.txt: {len(title)}字（目安 20〜45字）")
        if hype_hits(title):
            errors.append(f"title.txt: 煽り表現 {hype_hits(title)}")
    if (d / "lead.txt").exists():
        n = len((d / "lead.txt").read_text(encoding="utf-8").strip())
        if not (80 <= n <= 260):
            warns.append(f"lead.txt: {n}字（目安 120〜200字）")
    if (d / "hashtags.txt").exists():
        tags = [t.strip() for t in (d / "hashtags.txt").read_text(encoding="utf-8").splitlines() if t.strip()]
        bad = [t for t in tags if not t.startswith("#") or " " in t]
        if bad:
            errors.append(f"hashtags.txt: 形式不正 {bad}")
        if not (3 <= len(tags) <= 10):
            warns.append(f"hashtags.txt: {len(tags)}個（目安 5〜10個）")
    if (d / "price.txt").exists():
        txt = (d / "price.txt").read_text(encoding="utf-8")
        m = re.search(r"^price:\s*(\d+)", txt, re.M)
        if not m:
            errors.append("price.txt: 'price: <数値>' がありません")
        elif int(m.group(1)) > 0 and (d / "article.md").exists():
            if "<!-- PAID_LINE -->" not in (d / "article.md").read_text(encoding="utf-8"):
                errors.append("有料記事なのに article.md に <!-- PAID_LINE --> がありません")
    if (d / "thumbnail.png").exists():
        size = png_size(d / "thumbnail.png")
        if size is None:
            errors.append("thumbnail.png: PNG ではありません")
        elif size != (1280, 670):
            warns.append(f"thumbnail.png: {size[0]}x{size[1]}（推奨 1280x670）")
    if (d / "references.md").exists():
        if "http" not in (d / "references.md").read_text(encoding="utf-8"):
            warns.append("references.md: URL がありません")

    if (d / "article.md").exists():
        body = (d / "article.md").read_text(encoding="utf-8")
        for h in re.findall(r"^#{1,3} .+$", body, re.M):
            if hype_hits(h):
                warns.append(f"見出しに煽り表現 {hype_hits(h)}: {h[:40]}")
        holes = re.findall(r"【要記入[:：][^】]*】", body)
        chars = len(re.sub(r"\s", "", body))
        print(f"article.md: {chars:,}字 / 【要記入】{len(holes)}箇所")
        if holes:
            (errors if args.strict else warns).append(f"【要記入】が {len(holes)} 箇所残っています")

    for w in warns:
        print(f"WARN  {w}")
    for e in errors:
        print(f"ERROR {e}")
    print("OK" if not errors else "NG")
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
