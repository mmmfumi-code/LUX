---
description: 前回の続きから再開する。引き継ぎメモと成果物を読み直して状況を要約し、次のアクションを提案する
argument-hint: [slug]（省略時は直近に更新したプロジェクト）
---
前回の作業を再開します。

対象: $ARGUMENTS

1. 対象プロジェクトを特定する（省略時は `python3 scripts/studio.py list` で直近に更新したもの）
2. `python3 scripts/studio.py status <slug>` と `python3 scripts/studio.py context <slug>` を実行し、出てきたファイルと `log.md` の末尾を読む
3. 次の形で要約する:
   - プロジェクトの目的（1行）
   - ここまでに決まったこと（採用案）
   - 現在地（工程・状態）
   - 未解決の論点
   - 次のアクション候補（承認待ちなら判断のポイント）
4. 工程は進めずにユーザーの指示を待つ
