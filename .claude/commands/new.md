---
description: 新規プロジェクトを作成し、ブリーフ工程（01-brief）まで実行する
argument-hint: <product|note|instagram> <テーマ・一言の説明>
---
新規プロジェクトを作成します。CLAUDE.md の規約に従ってください。

入力: $ARGUMENTS

1. 先頭の語からワークフローを判定する（product / note / instagram。「アプリ」「note」「インスタ」などの日本語も可。省略されていたら内容から推定する）
2. テーマから slug を決める（半角英小文字・数字・ハイフン。例: `lux-app`, `note-supermarket-saving`）
3. `python3 scripts/studio.py new <workflow> <slug> --title "<日本語タイトル>"`
4. ユーザーの説明と関連資料（README など）を `projects/<slug>/research/00-input.md` に原文のまま保存する
5. `/next <slug>` と同じ手順で 01-brief を実行する（start → context → 依頼文を prompts/ に保存 → 担当Agent → submit → handoff 更新）
6. 🔒 承認依頼テンプレート（CLAUDE.md §3）で報告して **停止** する
