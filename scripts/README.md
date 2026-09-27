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

## render.mjs — HTML を PNG / PDF / 動画に書き出す（Playwright）

| コマンド | 内容 |
|---|---|
| `node scripts/render.mjs png <in.html> <out.png> [--width 1200 --height 800 --scale 2 --full]` | 画像に書き出し（デザイン案・キービジュアル・スクリーンショット） |
| `node scripts/render.mjs pdf <in.html> <out.pdf> [--format A3 --portrait]` | PDFに書き出し（既定は A3 横） |
| `node scripts/render.mjs board <in.html> <out-basename>` | A3横プレゼンボードを `<out>.pdf` と `<out>.png` に同時出力 |
| `node scripts/render.mjs video <in.html> <out.webm> [--width 1920 --height 1080 --duration 15]` | HTMLアニメーションを動画（webm）として録画 |

- 日本語フォントは HTML 側で Google Fonts（Noto Sans JP など）を読み込む（書き出し前にフォントの読み込み完了を待つ）
- MP4 が必要な場合は、ffmpeg を入れて `ffmpeg -i promo.webm -c:v libx264 -pix_fmt yuv420p promo.mp4` で変換する
