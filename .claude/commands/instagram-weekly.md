---
description: @fumiya_mainac の週3投稿（月・水・金）を2名体制で企画・作成し output/instagram/YYYY-MM-DD/ に保存する
argument-hint: "[対象週の月曜日 YYYY-MM-DD（省略時は次の月曜日）]"
---

# INSTAGRAM CONTENT WORKFLOW を実行する

対象週：$ARGUMENTS（空なら今日以降で最初の月曜日）。投稿日は その週の **月・水・金**。

1. `docs/instagram/WORKFLOW.md` と `docs/instagram/POST_TEMPLATE.md`、
   `output/instagram/README.md`（過去の投稿一覧。テーマ・商品カテゴリの重複を避け、テイスト配分と動物テーマの不足を確認する）を読む。
2. **instagram-growth-strategist** エージェントに、3投稿分のテーマ候補（各曜日3案、
   季節性・共感度・タイアップ適性で採点）と、各曜日の投稿の型・フォーマット・KPI を出させる。
3. **sns-product-designer** エージェントに、その候補に対する解決案（各2案以上）・
   推奨案・CG で見せられるかの評価を返させる。案には8観点・テイスト（メイン/サブ）・動物タグを付けさせ、配分ルール（WORKFLOW.md §6）を満たすよう調整する。
4. 両者の意見を突き合わせて企画会議を行う（必要なら SendMessage で往復させる）。
   合意事項（採用案 / 見せ場 / 削ったもの）を決める。
5. 各投稿について
   - Designer：解決方法 / 商品コンセプト / 商品デザイン（CMF）/ CG
   - Strategist：投稿構成 / キャプション / CTA / ハッシュタグ（本採用5個以内）/ タイアップ視点・KPI
   を作成し、テンプレートの全項目を埋めて `output/instagram/YYYY-MM-DD/post.md` に保存する。
   会議ログは §0 に残す。
6. WORKFLOW.md §6 のチェックリストで相互レビューし、修正する。
7. `output/instagram/README.md` の一覧に3投稿（テイスト・動物欄を含む）を追記し、配分状況の表を更新する（シリーズ番号は連番）。
