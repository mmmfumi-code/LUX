# 依頼: STEP 1 市場リサーチ（01-research）— GOKUMIN フラッグシップベッド

あなたは market-researcher です。`.claude/agents/market-researcher.md` と `workflows/_agent-protocol.md`、`workflows/product-design.md` に従ってください。
作業ディレクトリ: /home/user/LUX 、プロジェクト: `projects/gokumin-flagship-bed/`

## まず読むもの
- projects/gokumin-flagship-bed/research/00-input.md（ユーザー指示の原文）
- projects/gokumin-flagship-bed/brief.md
- projects/_studio/brand.md、projects/_studio/preferences.md

## 調査テーマ
GOKUMIN（寝具ブランド）のフラッグシップ・ベッドフレーム。**全コンセプト共通の必須条件は「組立工数最小（EC販売）」**。
次の3コンセプトすべてについて、市場で売れる商品を開発するための調査をしてください。

1. **① 完全組立不要ベッド**: 折畳バンブーベッドの基本機能を使い、THE GOKUMIN（同社マットレス）に耐えられる仕様
   - 参照商品ページを必ず確認: https://gokumin.co.jp/products/t-fdbb-s-na-01 （折畳バンブーベッド。仕様・サイズ・耐荷重・重量・価格・レビュー）
   - **THE GOKUMIN の仕様**（サイズ、厚み、重量、構造）を gokumin.co.jp で確認し、フレームに必要な耐荷重・寸法条件を整理
   - 折りたたみベッド／組立不要ベッド／ワンタッチベッド市場（国内EC・海外）
2. **② 自分仕様に育つベッド（パーソナライズ）**: 本体完成後に工具不要でアクセサリーを追加できる共通規格
   - モジュール家具・拡張型ベッド・アクセサリー規格の事例（国内外）、ユーザーがベッドに後から足したいもの
3. **③ 掃除が楽になるベッド（清掃性）**: フローティング構造＋脚ユニットのワンタッチ装着
   - フローティングベッド、脚付きベッドの床下高さ（ロボット掃除機の対応高さ）、ホコリ・掃除に関する不満

## 必須の調査項目
エージェント定義の16項目（主要ブランド、売れ筋、価格帯、ECランキング、レビュー、不満、購入理由、素材／カラー／形状／機能トレンド、海外市場、SNSトレンド、競合のメリット／デメリット、空白領域）を、**3コンセプトを横断して** 調べてください。
加えて次を必ず含めてください:
- **組立工数の実態**: 競合ベッドの組立時間・工具・部品点数・人数、組立に関するレビューの不満（件数・割合）
- **EC物流の条件**: 梱包サイズ・重量（宅配便の上限、一人で運べるか）、返品の実態
- **3コンセプトごとの小まとめ**（そのコンセプト固有の機会とリスク）

## 保存先
- 本体: `projects/gokumin-flagship-bed/research/research.md`（エージェント定義のフォーマット。最後に結論6項目）
- 生データ・出典: `projects/gokumin-flagship-bed/research/notes/*.md`
- ポジショニングマップ: `projects/gokumin-flagship-bed/research/positioning-map.svg` と `.png`

## 注意
- 【調査】【推測】【未確認】のラベルと出典番号を厳守。アクセスできないサイトは代替手段を試し、【未確認】に記録
- `scripts/studio.py` の start/submit/approve は実行しないこと
- 完了したら、保存したファイル、勝ち筋（1文）、結論6項目の要点、3コンセプト別の要点を短く報告

## v2 追記（再実行）
- 前回の実行は途中で停止し、何も保存されなかった。**調べた内容はこまめに `research/notes/*.md` に保存し、途中でも research.md の骨組みを先に作ってから埋めていく**こと
- **gokumin.co.jp は、この環境のネットワーク設定により直接アクセスできない**（CONNECT 403）。WebFetch で取得できないサイトは、WebSearch の検索結果・スニペット、比較記事、他の EC（楽天・Amazon・Yahoo! の GOKUMIN ストア）、プレスリリースなどから情報を集め、公式サイトで確認できなかった点は【未確認】と明記する
- THE GOKUMIN の仕様が確認できない場合は、一般的な高密度・厚手マットレス（例: 厚み 20〜30cm、シングルで 15〜30kg）の範囲を【推測】として示し、フレームの設計条件（耐荷重の目安）を仮置きする
