#!/usr/bin/env python3
"""note の公開記事一覧を取得して note/data/past_articles.csv に保存する。

note の公開 API（非公式・仕様変更の可能性あり）を使う:
  https://note.com/api/v2/creators/{urlname}/contents?kind=note&page=N

使い方:
  python3 scripts/note/sync_past_articles.py [--urlname fumiya_mainac]
"""
import argparse
import csv
import json
import sys
import time
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "note" / "data" / "past_articles.csv"
FIELDS = ["date", "title", "url", "pillar", "keywords", "price", "likes"]

# タイトルからピラーを推定するための簡易辞書（手で直してよい）
PILLAR_KEYWORDS = {
    "P1": ["プロダクトデザイン", "工業デザイン", "インダストリアル", "スケッチ", "モックアップ"],
    "P2": ["企業デザイナー", "インハウス", "就活", "転職", "ポートフォリオ", "メーカー"],
    "P3": ["フリーランス", "独立", "開業", "案件", "単価"],
    "P4": ["生成AI", "AI", "ChatGPT", "Claude", "Midjourney", "Firefly", "Vizcom", "Stable Diffusion"],
    "P5": ["3DCG", "Blender", "KeyShot", "レンダリング", "3D"],
    "P6": ["Adobe", "Illustrator", "Photoshop", "イラレ", "フォトショ"],
    "P7": ["CAD", "Fusion", "SolidWorks", "Rhino", "図面"],
    "P8": ["副業", "確定申告", "会社員"],
    "P9": ["ココナラ", "coconala"],
    "P10": ["ガジェット", "iPad", "Mac", "モニター", "キーボード", "マウス", "左手デバイス", "ペンタブ"],
}


def guess_pillars(title: str) -> str:
    t = title.lower()
    hits = [p for p, kws in PILLAR_KEYWORDS.items() if any(k.lower() in t for k in kws)]
    return "|".join(hits)


def fetch(urlname: str, page: int) -> dict:
    url = f"https://note.com/api/v2/creators/{urlname}/contents?kind=note&page={page}"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 note-workflow"})
    with urllib.request.urlopen(req, timeout=20) as r:
        return json.load(r)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--urlname", default="fumiya_mainac")
    ap.add_argument("--max-pages", type=int, default=50)
    args = ap.parse_args()

    # 既存行の pillar / keywords は手修正を尊重して残す
    existing = {}
    if OUT.exists():
        with OUT.open(encoding="utf-8") as f:
            for row in csv.DictReader(f):
                existing[row["url"]] = row

    rows = []
    for page in range(1, args.max_pages + 1):
        try:
            data = fetch(args.urlname, page).get("data", {})
        except Exception as e:  # noqa: BLE001
            print(f"ERROR: 取得に失敗しました（page {page}）: {e}", file=sys.stderr)
            print("note.com に接続できない環境では、past_articles.csv を手で編集してください。", file=sys.stderr)
            return 1
        for c in data.get("contents", []):
            url = c.get("noteUrl") or f"https://note.com/{args.urlname}/n/{c.get('key', '')}"
            title = c.get("name", "")
            prev = existing.get(url, {})
            tags = [h.get("hashtag", {}).get("name", "").lstrip("#") for h in c.get("hashtags", []) or []]
            rows.append({
                "date": (c.get("publishAt") or "")[:10],
                "title": title,
                "url": url,
                "pillar": prev.get("pillar") or guess_pillars(title),
                "keywords": prev.get("keywords") or "|".join(t for t in tags if t),
                "price": c.get("price", 0),
                "likes": c.get("likeCount", 0),
            })
        if data.get("isLastPage", True):
            break
        time.sleep(1)

    rows.sort(key=lambda r: r["date"], reverse=True)
    with OUT.open("w", encoding="utf-8", newline="") as f:
        w = csv.DictWriter(f, fieldnames=FIELDS)
        w.writeheader()
        w.writerows(rows)
    print(f"{len(rows)} 件を {OUT.relative_to(ROOT)} に保存しました")
    return 0


if __name__ == "__main__":
    sys.exit(main())
