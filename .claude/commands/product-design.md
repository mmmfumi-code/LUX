---
description: A: PRODUCT DESIGN WORKFLOW を起動する（市場リサーチ → 商品企画 → デザイン10案 → A3ボード → 承認 → グラフィック → 承認 → 動画 → 承認 → Web → デプロイ準備）
argument-hint: <デザインしたいもの（例: 折りたたみ傘 / LUXアプリ）> または <既存のslug>
---
A: PRODUCT DESIGN WORKFLOW を実行します。CLAUDE.md、`workflows/product-design.md`、`workflows/workflows.json` の `product` 定義に厳密に従ってください。

入力: $ARGUMENTS

## 1. 新規か続きかを判定
- `python3 scripts/studio.py list` を実行する
- 入力が既存の product プロジェクトの slug・タイトルに一致する → **続き**。`/next <slug>` の手順で再開する（承認待ちなら何もせず、承認待ちの内容を再掲して判断を求める）
- 入力が空 → 進行中の product プロジェクトが1つなら再開、複数なら一覧を示して選んでもらう、無ければ「何のデザインを提案しますか？」と尋ねる
- それ以外 → **新規**（以下へ）

## 2. 新規プロジェクトの作成
1. 入力（〇〇）からデザインの対象を取り出す。「〇〇のデザインを提案してください」の形なら 〇〇 の部分
2. project-name（slug）を決める: 半角英小文字・数字・ハイフン（例: 「折りたたみ傘」→ `folding-umbrella`）。同名があれば `-2` などを付ける
3. `python3 scripts/studio.py new product <slug> --title "<〇〇>"`
4. ユーザーの発言の原文を `projects/<slug>/research/00-input.md` に保存する
5. `projects/<slug>/brief.md` を埋める。**ユーザーに質問せず**、分からない条件（ターゲット・価格帯・用途など）は「仮説」と明記して埋める。`projects/_studio/` の好みも反映する
6. `git commit`（例: `<slug>: プロジェクト作成`）

## 3. STEP 1〜4 を連続実行（自動）
`/next <slug>` の手順（start → context → 依頼文を `prompts/` に保存 → 担当Agent → 品質チェック → submit → handoff 更新）を、次の順番で **止まらずに** 実行する。
1. STEP 1 `01-research` 市場リサーチ（market-researcher）
2. STEP 2 `02-planning` 商品企画（product-planner）
3. STEP 3 `03-design` プロダクトデザイン10案（product-designer）
4. STEP 4 `04-board` A3プレゼンボード生成（presentation-designer）

各ステップの後に進捗を1行で報告する（例: `✅ STEP 1 市場リサーチ完了 → research/research.md`）。
品質チェックでは、完了条件（`workflows/product-design.md`）を満たしているか、ファイルが実際に保存されているか、画像の書き出しが成功しているかを確認し、足りなければ同じAgentにやり直させる。

## 4. 🔒 STEP 5 USER APPROVAL で必ず停止
- `04-board` を submit したら **そこで止まる。STEP 6 には絶対に進まない。**
- 一覧ボード `product/board/vN/overview.png` と、全ボードをまとめた `boards-all.pdf` をユーザーに見せる（ファイルを送れる環境なら送る）。推奨3案のボードの PNG も添える
- CLAUDE.md §3 の承認依頼テンプレートで、次を尋ねる:
  - 10案のうちどれを採用するか（番号。組み合わせも可）
  - brief の仮説で違うところはあるか
- ターンを終えてユーザーの返答を待つ

## 5. 承認後の進め方（ユーザーが承認したとき）
- ユーザーの返答を `/approve` の手順で記録してから、次の工程へ進む
  - STEP 5 承認 → STEP 6 `06-graphic` を実行 → 🔒 STEP 7 で停止（`graphic/board/vN/overview.png` と `boards-all.pdf` を見せ、A／B／C のどれを採用するかを尋ねる）
  - STEP 7 承認 → STEP 8 `08-video` を実行 → 🔒 STEP 9 で停止
  - STEP 9 承認 → STEP 10 `10-web` → STEP 11 `11-deploy` を連続で実行 → 🔒 最終確認で停止
- 最終確認の承認後も **実際のデプロイ（外部への公開）は、ユーザーが公開を明示的に指示するまで行わない**
- 修正の指示なら `/revise` の手順で、新しい版を作って改めて承認を求める
