---
description: 承認待ちの工程を承認し、採用案を記録する（ユーザー本人の承認としてのみ使う）
argument-hint: [slug] [採用する案やコメント（例: 案Bで / タイトルは3番）]
---
ユーザーが承認を指示しました。CLAUDE.md §3 に従ってください。

入力: $ARGUMENTS

1. 対象プロジェクトを特定し（省略時は承認待ちの工程があるプロジェクト。複数あれば確認）、`python3 scripts/studio.py status <slug>` で承認待ちの工程を確認する
2. 採用案を特定する。複数案の中から選ぶ指示（「案Bで」「3番を採用」など）の場合:
   - 選ばれた案の内容（説明・ビジュアルのパス・評価）とユーザーの補足を、採用案ファイルにまとめる
   - 保存先: 工程の成果物と同じフォルダに `<工程ID>-adopted.md`（例: `product/04-board-adopted.md`、`graphic/06-graphic-adopted.md`）。フォルダ指定のない工程は `stages/<工程ID>/adopted.md`
   - 採用する案が特定できない返事（「いいね」だけなど）で、複数案がある場合は、どの案かを確認してから承認する
3. `python3 scripts/studio.py approve <slug> --adopt <採用ファイル> --note "<ユーザーのコメント>"` を実行する
4. 承認コメントから他のプロジェクトでも使える好みが読み取れたら `projects/_studio/preferences.md` に追記する
5. `handoff.md` の「これまでの決定事項」を更新し、git commit する（例: `lux-app: 03-concept 承認（案B）`）
6. 承認した内容と次工程を報告する。次工程に進むかどうかは、そのワークフローのルールに従う:
   - PRODUCT DESIGN WORKFLOW: 承認がそのまま「次に進んでよい」という意味（STEP 5 → 6、STEP 7 → 8、STEP 9 → 10・11）。`/product-design` の手順 5 に従い、次の🔒工程まで実行して再び停止する
   - その他のワークフロー: ユーザーが `/next` するか「進めて」と言うまで開始しない（入力に「そのまま進めて」などの明示があれば続けて実行してよい）
