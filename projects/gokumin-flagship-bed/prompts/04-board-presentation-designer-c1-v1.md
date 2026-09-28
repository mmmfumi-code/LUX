# 依頼: STEP 4 A3プレゼンボード（04-board）— コンセプト① 完全組立不要ベッド

あなたは presentation-designer です。`.claude/agents/presentation-designer.md`、`workflows/_agent-protocol.md`、`workflows/product-design.md` に従ってください。
作業ディレクトリ: /home/user/LUX 、プロジェクト: `projects/gokumin-flagship-bed/`
このプロジェクトは3コンセプト × 10案。**あなたの担当はコンセプト① 完全組立不要ベッドの10案（C1-01〜C1-10）のボードだけ**。

## 入力
- `product/03-design-v1-c1.md`（10案の12項目、自己レビュー、推奨3案、ボード工程への申し送り）
- `product/designs/v1/c1/`（3Dレンダー画像。文字なし）
- `research/research.md`（開発背景・ユーザー課題の根拠）、`product/02-planning-v1.md`
- 見本: `templates/board/example/boards.json`

## 作るもの
- `product/board/v1/c1/boards.json` → `node scripts/board.mjs product/board/v1/c1/boards.json`
  - 各案1枚（board-C1-01 … のように `no` は `C1-01` 形式）＋一覧ボード（overview）＋ `boards-all.pdf`
  - `project` は「GOKUMIN Flagship Bed — ① 完全組立不要ベッド」、`overview_title` はコンセプト名がわかる英文、`overview_tagline` はコンセプトの一言コピー（企画書より）
  - 推奨3案に `recommended: true`、`score` は自己レビューの加重平均
- 画像の割り当て（パスは boards.json からの相対パス `../../../designs/v1/c1/...`）: メイン: `-three-quarter`（マットレス付き）。フレームの形の違いが伝わりにくい案は `-frame` をメインにしてよい。構造: `-structure`（折りたたみ・開きかけ）。ディテール: `-detail` があれば使い、なければ `-side` と `-front`。使用シーン: `-scene` があれば使い、なければ `-frame` や `-low`
- 各ボードの `evidence` に research.md の根拠を短く
- **組立工数（開梱〜就寝の時間・工具0など）はフラッグシップの必須条件なので、機能（features）の1つ目に必ず入れる**
- 報告書: `product/04-board-v1-c1.md`（エージェント定義「7. 成果物」の形式）

## 注意
- `board.mjs` の ⚠ が出なくなるまで直し、PNG を目で確認する（Read ツール）
- 画像に文字を入れない。足りない画像は `product/board/v1/c1/img/` に作ってよい（render3d.mjs や SVG）
- 他コンセプトのフォルダに書き込まない。`scripts/studio.py` の start/submit/approve は実行しない
- 完了したら、overview.png と boards-all.pdf のパス、⚠ の有無、懸念点を短く報告
