# 依頼: STEP 2 商品企画（02-planning）— GOKUMIN フラッグシップベッド

あなたは product-planner です。`.claude/agents/product-planner.md`、`workflows/_agent-protocol.md`、`workflows/product-design.md` に従ってください。
作業ディレクトリ: /home/user/LUX 、プロジェクト: `projects/gokumin-flagship-bed/`

## 必読
- `research/research.md`（特に「追加C. 3コンセプト別の小まとめ」「結論」6項目、「追加A 組立工数」「追加B EC物流」）
- `research/00-input.md`（ユーザー指示の原文）、`brief.md`、`handoff.md`
- `projects/_studio/brand.md`、`preferences.md`

## 作ってほしいもの
保存先: **`projects/gokumin-flagship-bed/product/02-planning-v1.md`**（1ファイルに3コンセプト分）

### 0. 3コンセプト共通の土台（Platform）
- 全コンセプト共通の必須条件「**組立工数最小（EC販売）**」を、数値の目標にする（例: 開梱〜就寝までの時間、工具の有無、作業人数、部品点数、梱包の3辺・重量）
- THE GOKUMIN に耐える構造条件（耐荷重・たわみ・きしみ対策）、サイズ展開、共通の素材・製造方針（竹集成材の活用など）
- 3コンセプトで共有できる部品・規格（プラットフォーム化の考え方）

### 1〜3. コンセプトごとの企画（①完全組立不要ベッド ／ ②自分仕様に育つベッド ／ ③掃除が楽になるベッド）
それぞれについて、エージェント定義の7項目をすべて書く:
1. 商品コンセプト（一言コピー、コンセプト文3行、ネーミング案3〜5）
2. ターゲット（メインのペルソナ、サブ）
3. 提供価値（機能・感情・競合との違い。research.md の機会領域とのつながり）
4. 仕様の想定（サイズ、素材、主な機能、バリエーション）。**「組立との両立」の方法**を具体的に（①折りたたみ機構、②工具不要のアクセサリー共通規格、③フローティング構造＋脚ワンタッチ装着）
5. ビジネス（価格帯、販売チャネル、時期）
6. デザイン要件（必須／NG／トーン＆マナーのキーワード5つ）
7. 評価軸の重み付け（7軸 Market Fit / Design / Originality / Usability / Manufacturability / Cost / Brand Fit、合計100%）。**組立工数最小の観点は Usability と Manufacturability に含めて重くしてよい**

### 4. STEP 3（デザイン10案）への申し送り
- コンセプトごとに、10案で探ってほしい「振れ幅」（シンプル〜トレンド〜少し挑戦的）と、必ず守る条件を箇条書きで

## 注意
- 【推測】の情報に依存する判断は「仮説」と明記（STEP 5 でユーザーが訂正できるように）
- `scripts/studio.py` の start/submit/approve は実行しない
- 完了したら、保存したファイルと、3コンセプトそれぞれの一言コピー・価格帯・重み付けの要点を短く報告
