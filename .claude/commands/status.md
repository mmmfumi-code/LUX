---
description: スタジオ全体またはプロジェクトの進捗・承認待ち状況を表示する
argument-hint: [slug]
---
進捗を報告します。

対象: $ARGUMENTS

- 引数なし: `python3 scripts/studio.py list` を実行し、プロジェクトごとに「現在の工程・状態」を表にまとめる。**承認待ちの工程を先頭で強調する**
- slug あり: `python3 scripts/studio.py status <slug>` を実行し、`handoff.md` を読んで、完了した工程・採用案・現在地・次にやること・未解決の論点を簡潔に報告する

報告のみで、工程は進めない。
