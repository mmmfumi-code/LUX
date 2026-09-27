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
| `node scripts/render.mjs png <in.html> <out.png> [--width 1200 --height 800 --scale 2 --full --transparent]` | 画像に書き出し（`--transparent` で背景を透明に） |
| `node scripts/render.mjs pdf <in.html> <out.pdf> [--format A3 --portrait]` | PDFに書き出し（既定は A3 横） |
| `node scripts/render.mjs board <in.html> <out-basename>` | A3横プレゼンボードを `<out>.pdf` と `<out>.png` に同時出力 |
| `node scripts/render.mjs video <in.html> <out.webm> [--width 1920 --height 1080 --duration 15]` | HTMLアニメーションを動画（webm）として録画 |

- 日本語フォントは HTML 側で Google Fonts（Noto Sans JP など）を読み込む（書き出し前にフォントの読み込み完了を待つ）
- MP4 が必要な場合は、ffmpeg を入れて `ffmpeg -i promo.webm -c:v libx264 -pix_fmt yuv420p promo.mp4` で変換する

## board.mjs — A3横プロダクトデザイン・プレゼンボードを生成

```
node scripts/board.mjs <boards.json> [--only 01,03] [--no-render]
```

- `"layout"` で種類を選ぶ: `product`（STEP 4、見本 `templates/board/example/`）／`graphic`（STEP 6、見本 `example-graphic/`）／`video`（STEP 8、見本 `example-video/`）
- `boards.json` から、1案1枚のボード `board-XX`、一覧ボード `overview`、まとめPDF `boards-all.pdf` を HTML・PNG・PDF で出力する
- レイアウトは共通テンプレート `templates/board/board.css`（A3横 420×297mm、12カラム、白〜ライトグレー）
- 文字はすべて HTML で組み、画像には文字を入れない（画像とテキストの分離）
- 文字数の上限超過、画像の欠落、枠からの文字あふれを「⚠」で警告する

## render-apps.sh — グラフィックの展開物をまとめて PNG に

```
bash scripts/render-apps.sh graphic/v1/A
```

- フォルダ内の `kv` `poster` `sns-feed` `sns-story` `ec-banner` `web-hero` の HTML を、決まったサイズで PNG に書き出す
- 展開物の共通キットは `templates/graphic/`（`tokens.css` に色・書体・余白・モチーフを定義し、6点すべてが参照する）
- 製品画像は `node scripts/render.mjs png <in.svg> product.png --transparent` で背景を透明にして使う

## lib/browser.mjs

render.mjs・board.mjs が共通で使う Chromium の起動処理。プロキシのある環境では、外部リソース（Google Fonts など）を
Node 側で取得して Chromium に渡す（証明書は NODE_EXTRA_CA_CERTS で検証。TLS の検証は無効にしない）。

## web-check.mjs — Webサイトを Desktop／Tablet／Mobile で確認

```
node scripts/web-check.mjs web/site web/check [--video] [--base /repo-name]
```

- 静的サイトを localhost で配信し、1440×900／834×1194／390×844 で開く
- ページを少しずつスクロールしてスクロール演出を発火させ、ファーストビュー・全体・セクションごと（`section[id]`）のスクリーンショットを保存（`--video` でスクロール動画も）
- 横スクロール、コンソールエラー、読み込み失敗、表示できない画像、alt、h1 の数、タップ領域（モバイル）をチェックし `report.md` にまとめる

## Webサイトの雛形（templates/web/starter/）

Next.js（App Router・静的書き出し）＋ TypeScript ＋ Tailwind CSS ＋ GSAP ScrollTrigger ＋ Lenis。
`web/app/` にコピーし、`npm install` → `npm run export` で `web/site/` に書き出す。

## render3d.mjs — プロダクトの3Dコンセプトレンダー

```
node scripts/render3d.mjs <scene.json> <out-basename> [--views three-quarter,front,side]
```

部品（板・角丸ブロック・円柱・繰り返し）を寸法 mm で組み立てた scene JSON を、竹・木・布・金属などの質感と柔らかい影つきで PNG に描画する。詳細は `scripts/render3d/README.md`。
