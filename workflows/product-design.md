# A: PRODUCT DESIGN WORKFLOW

市場リサーチから、プロダクトデザイン・グラフィック・プロモーション動画・Webサイト・デプロイ準備までを一気通貫で制作する。
工程の正本は `workflows/workflows.json` の `product`。

## トリガー

次のどちらかで開始する。
- ユーザーの発言が **「〇〇のデザインを提案してください」**（「〇〇のデザイン案を出して」「〇〇をデザインして」など同じ意図の言い回しも含む）
- コマンド **`/product-design 〇〇`**

〇〇 が商品テーマになる。追加の質問はせずに開始する。不明な条件は仮説として `brief.md` に書き、STEP 5 の承認時にユーザーが修正できるようにする。

## 全体フロー

```
STEP 1 市場リサーチ ─→ STEP 2 商品企画 ─→ STEP 3 プロダクトデザイン10案 ─→ STEP 4 A3プレゼンボード
   （ここまで自動で連続実行）
                                                     ↓
                                   🔒 STEP 5 USER APPROVAL（10案から採用案を決定）
                                                     ↓
                                   STEP 6 グラフィックデザイン3案
                                                     ↓
                                   🔒 STEP 7 USER APPROVAL（グラフィック案を決定）
                                                     ↓
                                   STEP 8 プロモーション動画2案
                                                     ↓
                                   🔒 STEP 9 USER APPROVAL（動画案を決定）
                                                     ↓
                     STEP 10 Webサイト制作 ─→ STEP 11 デプロイ準備
                                                     ↓
                                   🔒 最終確認（公開の可否。実際のデプロイは承認後にユーザーの指示で行う）
```

| STEP | 工程ID | 名称 | 担当Agent | 保存先 | ゲート |
|---|---|---|---|---|---|
| 1 | 01-research | 市場リサーチ | market-researcher | `research/` | 自動 |
| 2 | 02-planning | 商品企画 | product-planner | `product/` | 自動 |
| 3 | 03-design | プロダクトデザイン10案 | product-designer | `product/` | 自動 |
| 4 | 04-board | A3プレゼンボード生成 | presentation-designer | `product/` | 🔒 → STEP 5 |
| 5 | — | **USER APPROVAL** | （ユーザー） | `decisions.md` | — |
| 6 | 06-graphic | グラフィックデザイン3案 | graphic-designer | `graphic/` | 🔒 → STEP 7 |
| 7 | — | **USER APPROVAL** | （ユーザー） | `decisions.md` | — |
| 8 | 08-video | プロモーション動画2案 | video-director | `video/` | 🔒 → STEP 9 |
| 9 | — | **USER APPROVAL** | （ユーザー） | `decisions.md` | — |
| 10 | 10-web | Webサイト制作 | web-developer | `web/` | 自動 |
| 11 | 11-deploy | デプロイ準備 | deploy-engineer | `final/` | 🔒 最終確認 |

**承認ステップ（5・7・9・最終確認）では絶対に自動で次へ進まない。** オーケストレーターは承認依頼を出した時点でターンを終え、ユーザーの返答を待つ。

## プロジェクトのフォルダ構成

```
projects/<project-name>/
├── project.json / brief.md / handoff.md / decisions.md / log.md   # 進行管理（studio.py）
├── research/
│   ├── 00-input.md                 # ユーザーの指示の原文
│   ├── research.md                 # STEP 1 市場リサーチ（常に最新版）
│   ├── versions/research-vN.md     # 提出ごとの版（自動保存）
│   ├── positioning-map.(svg|png)   # ポジショニングマップ
│   └── notes/                      # 調査の生データ・出典（URL・取得日つき）
├── product/
│   ├── 02-planning-vN.md           # STEP 2 商品企画書
│   ├── 03-design-vN.md             # STEP 3 10案の一覧・比較
│   ├── designs/vN/design-01〜10.(html|svg|png), contact-sheet.png
│   ├── 04-board-vN.md              # STEP 4 ボードの説明・承認依頼の内容
│   ├── board/vN/board.html, board.pdf, board.png
│   └── 04-board-adopted.md         # STEP 5 で採用された案（承認時に作成）
├── graphic/
│   ├── 06-graphic-vN.md            # STEP 6 3案の説明
│   ├── vN/A|B|C/ logo.svg, key-visual.(html|png), package.(html|png), ...
│   ├── vN/overview.png             # 3案の比較用画像
│   └── 06-graphic-adopted.md       # STEP 7 で採用された案
├── video/
│   ├── 08-video-vN.md              # STEP 8 2案の説明
│   ├── vN/A|B/ script.md, storyboard.(html|png), promo.html, promo.webm
│   └── 08-video-adopted.md         # STEP 9 で採用された案
├── web/
│   ├── 10-web-vN.md                # STEP 10 サイト仕様・確認結果
│   ├── site/                       # 公開用の静的サイト（index.html が入口）
│   └── screenshots/                # desktop.png / mobile.png
├── final/
│   ├── 11-deploy-vN.md             # STEP 11 デプロイ準備レポート
│   ├── site/                       # デプロイする完成版サイト
│   ├── DEPLOY.md                   # デプロイ手順
│   └── deliverables/               # 納品物一式（ボード・グラフィック・動画）
└── prompts/                        # Agentへの依頼文、画像生成AI用プロンプト（すべて保存）
```

描画ツール: `node scripts/render.mjs png|pdf|board|video ...`（Playwright）。HTML/SVG で作ったデザインを PNG・PDF・動画(webm) に書き出す。

---

## STEP 1 市場リサーチ（01-research / market-researcher / 自動）
- **入力**: `research/00-input.md`、`brief.md`、`_studio/` の記憶
- **目的**: 単なる検索ではなく「市場で売れる商品を開発するための調査」
- **必須の16項目**: 主要ブランド／売れ筋商品／価格帯／ECランキング／Amazon等のレビュー／ユーザーの不満／購入理由／素材トレンド／カラートレンド／形状トレンド／機能トレンド／海外市場／SNSトレンド／競合のメリット／競合のデメリット／市場の空白領域
- **必須の結論6項目**: 1. 市場で現在売れている理由 2. 避けるべきデザイン 3. 狙うべきターゲット 4. 狙うべき価格 5. 狙うべきデザイン方向 6. 新商品の勝ち筋
- **出力**: `research/research.md`（提出ごとに `research/versions/research-vN.md` へ自動で版を保存）、`research/notes/*.md`（生データ・出典）、`research/positioning-map.(svg|png)`
- **完了条件**: すべての主張に【調査】【推測】【未確認】のラベルがあり、【調査】には出典番号（URL・取得日つき）がある。出典15件以上。不満と購入理由は件数・割合で集計。詳細は `.claude/agents/market-researcher.md`

## STEP 2 商品企画（02-planning / product-planner / 自動）
- **入力**: STEP 1
- **作業**: 商品コンセプト（一言コピー）、ターゲット・ペルソナ、提供価値、仕様（サイズ・素材・機能の想定）、価格帯と販売チャネル、差別化ポイント、デザインの要件（必須/NG）
- **出力**: `product/02-planning-vN.md`
- **完了条件**: STEP 3 の自己レビュー7軸（Market Fit / Design / Originality / Usability / Manufacturability / Cost / Brand Fit）の重み付けが理由つきで決まっている

## STEP 3 プロダクトデザイン10案（03-design / product-designer / 自動）
- **入力**: `research/research.md`（必読。市場分析を根拠にする）、STEP 2 の企画・評価軸の重み
- **考慮する観点**: 市場性・量産性・コスト・ユーザビリティ・ブランド性・デザイン性・商品としての分かりやすさ
- **10案の構成**: 01 王道・市場適合型／02 ミニマル／03 プレミアム／04 トレンド／05 機能特化／06 素材特化／07 UX改善／08 構造革新／09 少し挑戦的／10 コンセプトモデル（似た案にしない。差分表で確認）
- **各案の項目**: 名称・デザインコンセプト・ターゲット・解決する課題・形状・素材・CMF・機能・競合優位性・製造方法・想定価格・デザイン意図（research.md の根拠つき）
- **自己レビュー**: 提出前に7軸（Market Fit / Design / Originality / Usability / Manufacturability / Cost / Brand Fit）を1〜5点で採点し、基準に届かない案は直してから提出
- **ビジュアル**: 各案のコンセプトビジュアル（SVG/HTML → PNG）、10案の一覧画像（contact-sheet.png）、画像生成AI用のプロンプト（`prompts/03-design-image-prompts-vN.md`、日本語で意図＋英語のプロンプト）
- **出力**: `product/03-design-vN.md`、`product/designs/vN/`
- **完了条件**: 10案すべてに12項目・ビジュアル・7軸の採点がある、差分表で似た案がない、推奨上位3案を理由つきで示している。詳細は `.claude/agents/product-designer.md`

## STEP 4 A3プレゼンボード生成（04-board / presentation-designer / 🔒）
- **入力**: STEP 1〜3
- **作業**: A3横（420×297mm）のプレゼンボードをHTMLで制作し、PDFとPNGを書き出す
  - 構成（標準）: タイトル・コンセプト／市場の示唆（要点3つ）／10案の一覧（サムネイル＋一言）／推奨3案の詳細／評価の比較表／次のステップ
  - `node scripts/render.mjs board product/board/vN/board.html product/board/vN/board`
- **出力**: `product/04-board-vN.md`（ボードの要点と承認依頼の内容）、`product/board/vN/board.(html|pdf|png)`
- **完了条件**: 印刷して読める文字サイズ（本文9pt相当以上）、PNGで見て崩れがない
- **提出後は STEP 5 で停止**

## STEP 5 USER APPROVAL 🔒
ユーザーに確認すること: **10案のうちどれを採用するか**（1案、または組み合わせ）、修正したい点、brief の仮説の訂正
- 採用 → 採用案を `product/04-board-adopted.md` にまとめ、`studio.py approve --adopt product/04-board-adopted.md`
- 組み合わせや修正の指示（「3番の形に7番の色で」など） → `revise` で STEP 3〜4 の修正版を作る（前の版は残す）

## STEP 6 グラフィックデザイン3案（06-graphic / graphic-designer / 🔒）
- **入力**: 採用されたプロダクトデザイン、STEP 2 の企画
- **作業**: 方向性の異なる **3案**。各案: ブランド名の扱い、ロゴ（SVG）、カラーパレット（HEX）、書体、キービジュアル、パッケージ／ラベル（該当する場合）、Web・SNSへの展開例
- **出力**: `graphic/06-graphic-vN.md`、`graphic/vN/A|B|C/`、`graphic/vN/overview.png`（3案の比較）
- **完了条件**: 3案とも同じ項目がそろい、比較画像で違いが一目で分かる
- **提出後は STEP 7 で停止**

## STEP 7 USER APPROVAL 🔒
確認すること: **3案のどれを採用するか**、修正点 → 採用案を `graphic/06-graphic-adopted.md` にまとめて承認記録

## STEP 8 プロモーション動画2案（08-video / video-director / 🔒）
- **入力**: 採用プロダクト・採用グラフィック
- **作業**: 切り口の異なる **2案**（例: 情緒・ストーリー型／機能訴求型）。各案:
  - 企画意図、尺（15〜30秒）、構成台本（秒数・映像・テロップ・ナレーション・音の指示）
  - 絵コンテ（storyboard.html → PNG）
  - HTML/CSSアニメーションで作った動画（`promo.html` → `node scripts/render.mjs video ... --duration <秒>` で `promo.webm`、1920×1080。必要なら縦型 1080×1920 も）
  - 実写撮影や動画生成AIで作り直す場合の指示書・プロンプトは `prompts/08-video-*.md` に保存
- **出力**: `video/08-video-vN.md`、`video/vN/A|B/`
- **完了条件**: 2案とも実際に再生できる動画ファイルがある
- **提出後は STEP 9 で停止**

## STEP 9 USER APPROVAL 🔒
確認すること: **2案のどちらを採用するか**、修正点 → 採用案を `video/08-video-adopted.md` にまとめて承認記録

## STEP 10 Webサイト制作（10-web / web-developer / 自動）
- **入力**: 採用されたプロダクト・グラフィック・動画、商品企画
- **作業**: 商品のプロモーション用サイト（LP）。構成例: ヒーロー（キービジュアル＋動画）、コンセプト、特徴、デザイン詳細、スペック、ストーリー、購入・問い合わせのCTA、フッター
  - HTML/CSS/JS の静的サイト（外部依存は最小限。フォントは Google Fonts）
  - レスポンシブ対応、アクセシビリティ（alt、コントラスト、見出し構造）、OGP・favicon
  - desktop（1440幅）と mobile（390幅）のスクリーンショットで表示を確認
- **出力**: `web/site/`、`web/screenshots/`、`web/10-web-vN.md`
- 自動進行のため、完了後はそのまま STEP 11 へ

## STEP 11 デプロイ準備（11-deploy / deploy-engineer / 🔒 最終確認）
- **作業**:
  - `web/site/` を `final/site/` にまとめる（画像の最適化、リンク切れ・パス・メタ情報のチェック）
  - 公開先の候補（GitHub Pages / Netlify / Vercel など）と設定ファイル、`final/DEPLOY.md`（手順・必要なアカウント・独自ドメインの設定）
  - 納品物一式を `final/deliverables/` に集める（A3ボードPDF、採用グラフィック、採用動画、企画書）
  - 公開前チェックリスト
- **出力**: `final/11-deploy-vN.md`、`final/site/`、`final/DEPLOY.md`、`final/deliverables/`
- **実際のデプロイ（外部への公開）はこの工程では行わない。** 最終確認で承認され、ユーザーが公開を指示したときにだけ行う
