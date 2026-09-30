# 依頼: STEP 4 A3プレゼンボード v2（ヘッドボード込みのやり直し）— コンセプト② 自分仕様に育つベッド（着せ替えヘッドボード HEAD DOCK）

あなたは presentation-designer です。`.claude/agents/presentation-designer.md`、`workflows/_agent-protocol.md`、`workflows/product-design.md` に従ってください。
作業ディレクトリ: /home/user/LUX 、プロジェクト: `projects/gokumin-flagship-bed/`
**担当はコンセプト② 自分仕様に育つベッド（着せ替えヘッドボード HEAD DOCK）の10案（C2-01〜C2-10）のボードだけ**。

## 背景
v1 は全案ヘッドレスで差し戻され、v2 は全案ヘッドボード込み・10万円帯で作り直した。ボードでも **ヘッドボードが主役として伝わる** ことを重視する。

## 入力
- `product/03-design-v2-c2.md`（10案の12項目＋ヘッドボード仕様、自己レビュー、推奨3案）
- `product/designs/v2/c2/`（3Dレンダー。文字なし）
- `research/research.md`（v2）、`product/02-planning-v2.md`
- 書式の見本: v1 のボード `product/board/v1/c2/`（boards.json、img/crop.mjs・crops.json による部分拡大のやり方）。**画像と内容は v2 のものを使う**

## 作るもの
- `product/board/v2/c2/boards.json` → `node scripts/board.mjs product/board/v2/c2/boards.json`（最初に boards.json を保存してから画像の切り抜き・書き出しへ）
  - 各案1枚（`no` は `C2-01` 形式）＋一覧（overview）＋ `boards-all.pdf`
  - `project`: 「GOKUMIN Flagship Bed v2 — ② 自分仕様に育つベッド（着せ替えヘッドボード HEAD DOCK）」、`overview_tagline`: 企画書 v2 の一言コピー
  - 推奨3案に `recommended: true`、`score` は自己レビューの加重平均
- 画像（パスは `../../../designs/v2/c2/...`）: メイン `-three-quarter`（寝具込み・ヘッドボードが見える）／構造: `-structure`（支柱だけの状態と別の顔への差し替え）／ディテールはヘッドボードの拡大を1枚目にする（`-frame` や `-front` から切り抜き、`product/board/v2/c2/img/` に保存）／`overview_visual` は `-frame`（寝具なしでヘッドボードと形の違いが見える）
- 機能（features）の1つ目は組立工数（ヘッドボード込みの開梱〜就寝の動作数・時間・工具0）、2つ目はヘッドボードの特徴（型・高さ・もたれ・洗える等）
- 報告書: `product/04-board-v2-c2.md`

## 注意
- `board.mjs` の ⚠ が出なくなるまで直し、PNG を目で確認する（一覧と全10枚）
- 画像に文字を入れない。他コンセプトのフォルダに書き込まない。`scripts/studio.py` の start/submit/approve は実行しない
- 完了したら、overview.png と boards-all.pdf のパス、⚠ の有無、懸念点を短く報告
