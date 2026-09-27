#!/usr/bin/env python3
"""企画タイトルが過去記事・企画済みテーマと重複していないか判定する。

類似度 = タイトルの文字 bigram Jaccard と キーワード重なり率 の大きい方。
  >= 0.55  DUPLICATE（不採用）
  >= 0.30  SIMILAR（切り口の違いを説明できなければ不採用）
  それ未満  OK

使い方:
  python3 scripts/note/check_duplicate.py --title "..." --keywords "ココナラ,価格設定"
  終了コード: OK=0 / SIMILAR=1 / DUPLICATE=2
"""
import argparse
import csv
import re
import sys
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SOURCES = [ROOT / "note" / "data" / "past_articles.csv", ROOT / "note" / "data" / "topic_log.csv"]
DUP, SIM = 0.55, 0.30

STOP = set("のをにはがとでやもへ、。・「」『』【】！？!?：:　 ｜|-—〜~")


def norm(s: str) -> str:
    s = unicodedata.normalize("NFKC", s).lower()
    s = re.sub(r"\d+", "#", s)  # 数字の違いだけの焼き直しを検出する
    return "".join(ch for ch in s if ch not in STOP and not ch.isspace())


def bigrams(s: str) -> set:
    s = norm(s)
    return {s[i:i + 2] for i in range(len(s) - 1)} or {s}


def jaccard(a: set, b: set) -> float:
    return len(a & b) / len(a | b) if a and b else 0.0


def split_kw(s: str) -> set:
    return {norm(k) for k in re.split(r"[|,、]", s or "") if k.strip()}


def find_similar(title: str, keywords: str = "", exclude_date: str = ""):
    """(verdict, [(score, s_title, s_kw, source, date, title), ...], n_past) を返す。"""
    tb, tk = bigrams(title), split_kw(keywords)
    scored = []
    for src in SOURCES:
        if not src.exists():
            continue
        with src.open(encoding="utf-8") as f:
            for row in csv.DictReader(f):
                if exclude_date and row.get("date") == exclude_date and src.name == "topic_log.csv":
                    continue
                t = row.get("title", "")
                s_title = jaccard(tb, bigrams(t))
                rk = split_kw(row.get("keywords", ""))
                s_kw = len(tk & rk) / min(len(tk), len(rk)) if tk and rk else 0.0
                scored.append((max(s_title, s_kw * 0.8), s_title, s_kw, src.name, row.get("date", ""), t))
    scored.sort(reverse=True)
    n_past = sum(1 for s in scored if s[3] == "past_articles.csv")
    top = scored[0][0] if scored else 0.0
    verdict = "DUPLICATE" if top >= DUP else "SIMILAR" if top >= SIM else "OK"
    return verdict, scored, n_past


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--title", required=True)
    ap.add_argument("--keywords", default="")
    ap.add_argument("--exclude-date", default="", help="自分自身（同じ日付の topic_log 行）を除外")
    ap.add_argument("--top", type=int, default=5)
    args = ap.parse_args()

    verdict, scored, n_past = find_similar(args.title, args.keywords, args.exclude_date)
    if n_past == 0:
        print("⚠ past_articles.csv が空です。sync_past_articles.py を実行してください（topic_log のみで判定）")
    top = scored[0][0] if scored else 0.0
    print(f"{verdict}  (max score {top:.2f})  title: {args.title}")
    for score, st, sk, src, date, t in scored[: args.top]:
        print(f"  {score:.2f}  [title {st:.2f} / kw {sk:.2f}]  {src}  {date}  {t}")
    return {"OK": 0, "SIMILAR": 1, "DUPLICATE": 2}[verdict]


if __name__ == "__main__":
    sys.exit(main())
