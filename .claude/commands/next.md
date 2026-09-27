---
description: プロジェクトの次の工程を実行する（承認済みの範囲のみ。🔒工程を提出したら停止）
argument-hint: [slug]（省略時は直近に更新したプロジェクト）
---
次の工程を実行します。CLAUDE.md §6 の標準手順に厳密に従ってください。

対象: $ARGUMENTS

1. slug が省略されていたら `python3 scripts/studio.py list` で直近に更新したプロジェクトを選び、対象を宣言する
2. `python3 scripts/studio.py status <slug>` で次の工程を確認する
   - 「承認待ち」なら **何もせず**、承認待ちの成果物の要点を再掲して承認か修正指示を求める
3. `python3 scripts/studio.py start <slug>` を実行する。エラーなら理由をユーザーに伝えて止まる（回避しない）
4. `python3 scripts/studio.py context <slug>` で引き継ぎファイルを把握する
5. 担当Agent向けの依頼文を作る。含める内容: 工程ID・工程名、プロジェクトの要点、引き継ぎファイル一覧、保存先パス（start の出力）、`workflows/*.md` にある該当工程の Definition of Done、修正対応なら feedback.md の内容
6. 依頼文を `projects/<slug>/prompts/<工程ID>-<agent>-v<N>.md` に保存し、Agentツール（subagent_type = 担当Agent名）で依頼する
7. 戻ってきた成果物を確認する（保存されているか、DoD を満たすか、decisions.md と矛盾しないか）。足りなければ同じAgentに差し戻す
8. `python3 scripts/studio.py submit <slug> <成果物パス...>` → `handoff.md` を更新（現在地・決定事項・申し送り）
9. 🔒工程 → 承認依頼テンプレートで報告して **停止**。自動進行工程 → 手順 2 に戻り、次の工程を続けて実行する
10. 区切りで git commit する（例: `lux-app: 02-research v1 提出`）
