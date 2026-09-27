---
description: B: NOTE CONTENT WORKFLOW（note記事の企画・執筆・見出し画像）を開始・再開する
argument-hint: <新しいテーマ or 既存のslug>（省略時は進行中のnoteプロジェクト）
---
B: NOTE CONTENT WORKFLOW を実行します。CLAUDE.md と `workflows/workflows.json` の `note` 定義に従ってください。

入力: $ARGUMENTS

1. `python3 scripts/studio.py list` を実行する
2. 入力が既存の slug、または既存の note プロジェクトの説明に一致する → そのプロジェクトで `/next` と同じ手順を実行する
3. 入力が新しいテーマ → `/new note <テーマ>` と同じ手順で新規作成し、01-brief を実行する
4. 入力が空 → 進行中の note プロジェクトが1つならそれを再開、複数なら一覧を示して選んでもらう、無ければテーマを尋ねる
5. 🔒工程を提出したら承認依頼を出して **停止** する。承認済みの範囲を超えて進めない
