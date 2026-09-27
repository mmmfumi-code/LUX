---
name: note-weekly
description: NOTE CONTENT WORKFLOW。note（fumiya_mainac）の月・水・金の週3記事を、strategist→researcher→writer→editor→thumbnail-designer の順で企画・執筆・レビューし、output/note/YYYY-MM-DD/ に成果物を出力する。「今週のnote」「note記事を作って」「/note-weekly」で使う。
---

# NOTE CONTENT WORKFLOW

引数: 対象週の月曜日 `YYYY-MM-DD`（省略時は次の月曜日）。`--day mon|wed|fri` で1本だけ作ることもできる。

## 0. 準備
1. 過去記事を同期（note.com に接続できる環境の場合）:
   ```
   python3 scripts/note/sync_past_articles.py
   ```
   接続できない場合はスキップし、企画書に「過去記事未同期」と明記する。
2. `pip install -r scripts/note/requirements.txt`（Pillow）

## 1. 企画 — `note-strategist`
Agent(subagent_type="note-strategist") に対象週を渡す。
→ `output/note/plans/YYYY-Www.md` と `topic_log.csv`（planned）

## 2〜5. 記事ごと（月・水・金の3本。互いに独立なので並列でよい）
各日付 `D` について順に:

| # | 担当 | 入力 | 出力 |
|---|------|------|------|
| 2 | `note-researcher` | 企画書の D | `output/note/D/research.md`, `references.md` |
| 3 | `note-writer` | 企画書, research.md | `article.md`, `title.txt`, `lead.txt`, `hashtags.txt`, `price.txt` |
| 4 | `note-editor` | 上記すべて | `review.md`（PASS / REVISE / HOLD） |
| 4' | `note-writer` | review.md の修正指示 | 上書き（REVISE の間、最大3ラウンド） |
| 5 | `thumbnail-designer` | title.txt, ピラー | `thumbnail.png` |

## 6. 仕上げ
1. 全日付で検証:
   ```
   python3 scripts/note/validate_output.py output/note/D
   ```
2. `topic_log.csv` の status を `drafted`（PASS）または `hold`（要記入あり）に更新
3. ユーザーへの報告: 3本のタイトル・価格・判定・残っている `【要記入】` の数と場所

## 最終成果物（1記事あたり）
```
output/note/YYYY-MM-DD/
  article.md      本文（有料ラインは <!-- PAID_LINE -->）
  title.txt       タイトル
  lead.txt        リード文
  thumbnail.png   1280x670
  hashtags.txt    ハッシュタグ
  price.txt       価格・有料ライン位置・根拠
  references.md   出典（確認日つき）
  research.md     （作業用）リサーチメモ
  review.md       （作業用）500円レビュー結果
```

## 公開後
note に公開したら `note/data/past_articles.csv` に1行追加（または sync を再実行）し、
`topic_log.csv` の status を `published` にする。使った体験には experience_bank の `used_in:` に日付を追記する。
