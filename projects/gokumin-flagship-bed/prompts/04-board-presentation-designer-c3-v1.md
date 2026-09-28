# 依頼: STEP 4 A3プレゼンボード（04-board）— コンセプト③ 掃除が楽になるベッド

あなたは presentation-designer です。`.claude/agents/presentation-designer.md`、`workflows/_agent-protocol.md`、`workflows/product-design.md` に従ってください。
作業ディレクトリ: /home/user/LUX 、プロジェクト: `projects/gokumin-flagship-bed/`
このプロジェクトは3コンセプト × 10案。**あなたの担当はコンセプト③ 掃除が楽になるベッドの10案（C3-01〜C3-10）のボードだけ**。

## 入力
- `product/03-design-v1-c3.md`（10案の12項目、自己レビュー、推奨3案、ボード工程への申し送り）
- `product/designs/v1/c3/`（3Dレンダー画像。文字なし）
- `research/research.md`（開発背景・ユーザー課題の根拠）、`product/02-planning-v1.md`
- 見本: `templates/board/example/boards.json`

## 作るもの
- `product/board/v1/c3/boards.json` → `node scripts/board.mjs product/board/v1/c3/boards.json`
  - 各案1枚（board-C3-01 … のように `no` は `C3-01` 形式）＋一覧ボード（overview）＋ `boards-all.pdf`
  - `project` は「GOKUMIN Flagship Bed — ③ 掃除が楽になるベッド」、`overview_title` はコンセプト名がわかる英文、`overview_tagline` はコンセプトの一言コピー（企画書より）
  - 推奨3案に `recommended: true`、`score` は自己レビューの加重平均
- 画像の割り当て（パスは boards.json からの相対パス `../../../designs/v1/c3/...`）: メイン: `-three-quarter`。構造: `-structure`（脚を抜いた分解状態）。**床下カット `-robot` は必ず大きく見せる**（使用シーン欄に使う）。ディテール: `-side` と `-front`
- 各ボードの `evidence` に research.md の根拠を短く
- **組立工数（開梱〜就寝の時間・工具0など）はフラッグシップの必須条件なので、機能（features）の1つ目に必ず入れる**
- 報告書: `product/04-board-v1-c3.md`（エージェント定義「7. 成果物」の形式）

## 注意
- `board.mjs` の ⚠ が出なくなるまで直し、PNG を目で確認する（Read ツール）
- 画像に文字を入れない。足りない画像は `product/board/v1/c3/img/` に作ってよい（render3d.mjs や SVG）
- 他コンセプトのフォルダに書き込まない。`scripts/studio.py` の start/submit/approve は実行しない
- 完了したら、overview.png と boards-all.pdf のパス、⚠ の有無、懸念点を短く報告
