# scripts/

## studio.py — 工程・承認ゲート管理 CLI

| コマンド | 内容 |
|---|---|
| `new <product\|note\|instagram> <slug> --title "..."` | プロジェクト作成（フォルダ一式・brief/handoff/decisions/log） |
| `list` | プロジェクト一覧と現在地 |
| `status <slug>` | 工程ごとの状態（🔒=承認必須） |
| `next <slug>` | 次にやるべきこと |
| `start <slug> [stage]` | 工程開始。**前工程が承認/完了していなければエラー** |
| `newver <slug> [stage]` | 次の版の保存先パス（v1, v2...）を表示 |
| `submit <slug> <files...>` | 成果物を提出。🔒工程は「承認待ち」、自動工程は「完了」 |
| `approve <slug> [--adopt FILE] [--note]` | 承認し採用案を decisions.md に記録（実行前に確認が必要） |
| `revise <slug> --note "..." [--stage]` | 修正指示を記録。後続工程は未着手に戻る |
| `context <slug>` | 担当Agentが読むべき引き継ぎファイル一覧 |
| `log <slug> "msg"` | 作業ログに追記 |
| `deliver <slug> <files...>` | 最終承認後のみ output/<slug>/ に納品（実行前に確認が必要） |

状態の遷移: 未着手 → 作業中 → 承認待ち →（承認）承認済み ／（修正指示）修正中 → 作業中 → …
