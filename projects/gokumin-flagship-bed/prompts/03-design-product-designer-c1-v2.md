# 依頼: STEP 3 プロダクトデザイン10案（03-design）— コンセプト① 完全組立不要ベッド

あなたは product-designer です。`.claude/agents/product-designer.md`、`workflows/_agent-protocol.md`、`workflows/product-design.md` に従ってください。
作業ディレクトリ: /home/user/LUX 、プロジェクト: `projects/gokumin-flagship-bed/`
このプロジェクトは3コンセプト × 10案。**あなたの担当はコンセプト① 完全組立不要ベッドの10案だけ**（他の2コンセプトは別の担当者が同時に作業中。他のフォルダに書き込まない）。

## 必読
- `research/research.md`（結論6項目、追加A 組立工数、追加B EC物流、追加C の該当コンセプト）
- `product/02-planning-v1.md`（**0章 共通の土台** と **1章（あなたのコンセプト）**、4章 STEP 3 への申し送り、評価軸の重み）
- `research/00-input.md`（ユーザー指示の原文）、`brief.md`、`handoff.md`
- `scripts/render3d/README.md`（3Dレンダーの書き方）

## ユーザーの要望（原文の要点）
- 各コンセプト × 約10案のデザイン案（**イメージ画像**）
- **必須: 組立工数最小（EC販売のため）**。すべての案で、開梱から就寝までの手順・時間・工具の有無・部品点数・梱包（3辺・重量）を示す
- シンプルなものから、トレンドをおさえたもの、少し挑戦的なものまで、いろいろな視点で
- コンセプトの条件: 折りたたみバンブーベッドの基本機能（三つ折り・開くだけ）を使い、THE GOKUMIN（最重量 ユーロトップマスターズ28cm・シングル約26.1kg を仮置き）に耐える仕様

## 10案の構成
エージェント定義の10タイプ（01 王道・市場適合型 ／ 02 ミニマル ／ 03 プレミアム ／ 04 トレンド ／ 05 機能特化 ／ 06 素材特化 ／ 07 UX改善 ／ 08 構造革新 ／ 09 少し挑戦的 ／ 10 コンセプトモデル）で構成する。
案番号は **C1-01 〜 C1-10**。各案の12項目（名称〜デザイン意図）を書き、research.md の根拠を示す。

## イメージ画像（最重要）
- 3Dレンダー `node scripts/render3d.mjs` で作る。scene JSON と画像はすべて **`product/designs/v1/c1/`** に保存
  - ファイル名: `C1-01.scene.json` → `node scripts/render3d.mjs product/designs/v1/c1/C1-01.scene.json product/designs/v1/c1/C1-01 --views three-quarter,front,side`
  - メインビジュアルは `C1-XX-three-quarter.png`。**THE GOKUMIN を想定したマットレス（厚み約280mm、シングル 970×1950）を載せた状態**で描く
  - 寸法は仕様と一致させる（シングル基準）。竹は `bamboo`（長手の部材は `"grain": "z"` の素材を別に定義）、スチールは `metal` など、CMF を素材で表現する
- 構造がわかる追加カット（1案につき最低1枚）: 折りたたんだ状態（梱包・収納時）の scene と、開きかけの状態の scene を追加で描く（折りたたみ機構が一目で伝わるように）。部品を離した分解状態の scene でもよい。ファイル名は `C1-XX-structure.png` などわかりやすく
- 10案を並べた一覧画像: `product/designs/v1/c1/contact-sheet.html` → `contact-sheet.png`（`node scripts/render.mjs png ... --width 2000 --height 900 --scale 1`）。一覧画像には案番号程度の欧文・数字以外の文字を入れない
- **画像に日本語の文字を描き込まない**
- 画像生成AI用のプロンプト（案ごと、末尾に no text 等）: `prompts/03-design-image-prompts-c1-v1.md`
- 描画したら必ず PNG を目で確認し（Read ツール）、形の破綻・部品の浮き・めり込みがあれば scene を直して描き直す

## 保存先
- 本文: **`product/03-design-v1-c1.md`**（エージェント定義「7. 出力」のフォーマット。10案の一覧・差分表・各案12項目・7軸の自己レビュー・推奨上位3案）
- 画像: `product/designs/v1/c1/`

## 注意
- `scripts/studio.py` の start/submit/approve は実行しない
- 完了したら、保存したファイル、推奨上位3案（各1行）、自己レビューの要点を短く報告

## v2 追記（再実行）
- 前回は利用上限で途中停止し、何も保存されなかった。**途中で止まっても成果が残るように進める**こと:
  1. 最初に本文ファイル（`product/03-design-v1-<担当>.md`）の骨組み（見出し・10案の一覧表の枠）を保存する
  2. 1案ずつ「scene JSON 作成 → レンダー → 目視確認 → 本文にその案の12項目を追記」を完了させてから次の案へ進む
  3. 10案がそろってから、差分表・自己レビュー・推奨3案・一覧画像を仕上げる
- 途中から再開する場合は、既にある scene JSON・PNG・本文を確認し、足りない案から続ける
