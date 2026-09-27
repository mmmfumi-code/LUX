# Research — 2026-09-30（水）生成AI × 3DCG × CAD 実務フロー

## 使える体験（原文引用）
- experience_bank.md の P4 / P5 / P7 は未記入 → 【要記入】で対応

## 本人への質問（【要記入】候補）
1. スケッチ→AIレンダー導入前後で、案出しの枚数/時間はどう変わったか（Before/After）
2. AIの3Dメッシュを実務で使って失敗した具体例
3. 社内でのAIツール利用ルール（許可ツール・禁止事項・申請の有無）
4. 実際に使っているツール構成（Vizcom / Firefly / Blender / KeyShot / Fusion / SolidWorks 等）

## 裏取り済みファクト
| 事実 | 出典 | 確認日 |
|------|------|--------|
| Vizcom はスケッチから3Dモデルを生成でき、Standard / Detailed の品質設定がある | Vizcom Docs "Types of 3D Generations" | 2026-09-27 |
| Vizcom の Multiview 3D は 2〜5枚の視点レイヤーから生成 | Vizcom Docs "2D to 3D" | 2026-09-27 |
| Vizcom で生成した3Dはエクスポートして他ツールで使える | Vizcom Blog "Introducing generative 3D" | 2026-09-27 |
| Fusion for personal use は非商用・自宅利用限定。企業環境や本業での利用は不可、年間売上1,000USD未満の個人 | Autodesk "Compare Fusion vs Fusion for Personal Use" / Help "Changes to Fusion for personal use" | 2026-09-27 |
| Fusion 個人版は編集可能ドキュメント10個まで。STEP書き出しは維持 | Autodesk Fusion Blog "Fusion for Personal Use Changes" | 2026-09-27 |

## 未確認・変動しやすい情報（記事で断定しない）
- 各AIツールの料金プラン・クレジット数
- 各AIサービスの「入力データを学習に使うか」の規約 → **各社の最新規約と社内規程を確認** と書く
- Fusion のメッシュ→BRep 変換機能の個人版での可否

## 競合の穴（独自性）
1. 「AIで3Dができた」で終わる紹介記事が大半。**AIメッシュはCADに変換せず、下敷きにして引き直す** という境界線を明示した記事がほぼ無い
2. 企業デザイナー目線の **機密（未発表製品のスケッチを外部AIに入れてよいか）** の線引き表が無い
3. 工程ごとに **入力・出力・所要時間・判断基準** を1枚にした工程表が無い

## 数値候補
- 7ステップ / 手描きサムネイル20〜30枚 / 評価で3案に絞る / Multiview 2〜5枚
- Fusion 個人版 10ドキュメント・1,000USD
- 単位ミスで1000倍（mm↔m）
- 【要記入】Before/After の時間、案数
