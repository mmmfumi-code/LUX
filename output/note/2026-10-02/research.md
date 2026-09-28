# Research — 2026-10-02（金＝収益・980円）T08
「デザインレビューに出すA3提案シートのテンプレ一式 Illustratorの設定・グリッド・記入例つき」（P6×P1）

- 確認日: 2026-09-28
- ターゲット: メーカーのインハウス・プロダクトデザイナー（入社2年目）。DR資料を毎回ゼロからレイアウトして半日以上かかり、「何を見ればいいか分からない」と差し戻される
- **調査環境の制約**: WebFetch / curl は外部ドメインで 403（EGRESS_BLOCKED）。本文は開かず、**WebSearch の検索結果（タイトル・要旨）だけで確認**した。
  - 「未確認A（公式要旨で一致・本文未読）」＝公式ドメインの検索要旨で内容が一致したもの。記事に使ってよいが、公開前に本文で文言を確認すること
  - 「未確認」＝まとめブログ等しか見つからない／公式要旨でも一致しないもの。記事で断定しない


## 使える体験（原文引用）

**該当なし。** `note/data/experience_bank.md` は P1〜P10 すべて `<!-- ここに追記 -->` のまま（2026-09-28 時点）。P6（Adobe）・P1（プロダクトデザイン）・P2（企業デザイナー）にもエントリは無い。
→ 本文の「僕は〜」の体験・数値・作例はすべて `【要記入】` にする。下の質問リストを本人に回す。

## 本人への質問（【要記入】候補）

（後で追記）

## 裏取り済みファクト（事実 / 出典URL / 確認日）

※ 確認はすべて 2026-09-28、WebSearch の検索結果（タイトル・要旨）のみ。本文は未読。
「区分」列: **A**＝未確認A（公式ドメインの要旨で一致・本文未読）。記事に使ってよいが、公開前に本文で文言確認。

### N. note のファイル配布・価格・手数料（重点1）
| # | 事実 | 区分 | 出典 | 確認日 |
|---|------|:-:|------|--------|
| N1 | 有料記事の**有料エリアにファイルを添付して販売できる**。添付方法は、記事エディタの段落左の「＋」→「ファイル」→ファイルを選択 | A | [noteヘルプ: 動画やファイルを販売する](https://www.help-note.com/hc/ja/articles/19598976562457) | 2026-09-28 |
| N2 | ファイルは**1ファイルにつき50MBまで** | A | [noteヘルプ: ファイルアップロード機能について](https://www.help-note.com/hc/ja/articles/360016349894) / [note公式: 【noteカイゼン】ファイルをアップロードできるようになりました](https://note.com/info/n/n0362e8c94e5f) | 2026-09-28 |
| N3 | 対応環境はPC・スマートフォンの**Webブラウザ**。1日にアップロードできるのは**10回まで**（公式お知らせ時点の記載） | A | [note公式: 【noteカイゼン】](https://note.com/info/n/n0362e8c94e5f) | 2026-09-28 |
| N4 | 公式お知らせの例示: PDF・プレゼンテーション用テンプレートファイル・Excel/Word・**Sketchファイル・Photoshopのブラシなどのデザインデータ**。「あらゆるファイル」をアップロードできる、と案内 | A | 同上 | 2026-09-28 |
| N5 | アップロードした画像ファイルは本文に表示されず、ダウンロード形式になる（＝見本画像は「画像挿入」、配布データは「ファイル」と使い分ける） | A | [noteヘルプ: ファイルアップロード機能について](https://www.help-note.com/hc/ja/articles/360016349894) | 2026-09-28 |
| N6 | テキスト記事に挿入できる画像形式は JPG / PNG / GIF / HEIC | A | [noteヘルプ: テキスト記事に画像を挿入する方法](https://www.help-note.com/hc/ja/articles/36909557565337) | 2026-09-28 |
| N7 | 有料記事の価格は**100円〜50,000円**（一般会員）。プレミアム・note pro は上限100,000円 | A | [noteヘルプ: 価格の設定とお支払い方法について](https://www.help-note.com/hc/ja/articles/360011270114) | 2026-09-28 |
| N8 | 販売時の手数料: **事務手数料**（クレジットカード5%・キャリア決済15%・PayPay7%）＋**プラットフォーム利用料**＝（売上−事務手数料）×10%（定期購読マガジンは20%）。いずれも小数点以下切り捨て。例: 1,000円・カード決済で 50円＋95円＝145円 | A | [noteヘルプ: コンテンツを販売する際に引かれる手数料](https://www.help-note.com/hc/ja/articles/360011358873) | 2026-09-28 |
| N9 | 振込手数料は1回270円（売上の受け取り時） | A | 同上／[noteヘルプ: 売上金を受け取る](https://www.help-note.com/hc/ja/articles/360010430873) | 2026-09-28 |

→ **ファイル配布の結論**: **可能（未確認A）**。980円の本記事は、有料エリアに ZIP（.ai＋PDF＋PNG）を添付する形で配布できる見込み。
- `.ai` 拡張子が個別に受け付けられるかは公式要旨に明記なし（→未確認）。note公式は「アップロードできない場合は zip に圧縮」と案内している（要旨）ので、**最初から ZIP にまとめる**のが安全。公開前に下書きで実際にアップロードして確認すること
- 50MB を超えないよう、.ai は「PDF互換ファイルを作成」を外す・埋め込み画像を減らす等で軽くする（→本人に容量を実測してもらう）
- **代替案（配布できない／.ai を持っていない読者向け）**: 本文に「寸法表（A3・余白・カラム・ガター・文字サイズ）」と「グリッド図のPNG」「記入例のPNG」を載せ、数値だけで Illustrator 上に再現できるようにする。Illustrator 以外（PowerPoint / Keynote / Figma）の読者も寸法表で再現可能。**本文の寸法表だけでも完結する作り**にしておけば、添付が万一使えなくても商品として成立する
- 手取り試算（N8 を 980円に当てはめた計算、カード決済・1件）: 事務手数料 49円 ＋ プラットフォーム利用料 (980−49)×10%=93円 → 手数料 142円／手取り 838円（振込手数料270円は振込1回ごと）。キャリア決済なら 147円＋83円＝230円 → 750円

### S. 用紙寸法（重点2の前提）
| # | 事実 | 区分 | 出典 | 確認日 |
|---|------|:-:|------|--------|
| S1 | A3 は **297×420mm**（A列。JIS P 0138「紙加工仕上寸法」。A列は国際規格 ISO 216 と同一、B列は JIS 独自で ISO と互換なし） | A | [JSA Webdesk: JIS P 0138:1998 紙加工仕上寸法](https://webdesk.jsa.or.jp/books/W11M0090/index/?bunsyo_id=JIS+P+0138:1998) / [ISO 216:2007](https://www.iso.org/standard/36631.html) | 2026-09-28 |
| S2 | A列は縦横比 1:√2 で、半分に折ると次の番号（A3の半分＝A4 210×297mm）。→ A3 を A4 に縮小するときの倍率は約70.7%（1/√2、コピー機の「71%」）。**計算による派生値** | A（S1から計算） | 同上 | 2026-09-28 |

### I. Illustrator の機能名とメニュー位置（重点2）
※ 英語版ヘルプの要旨で確認したものは日本語UI名を併記（日本語名は日本語ヘルプ要旨で一致したものに◎、英語からの対訳は○）。
| # | 機能（日本語UI名 / 英語UI名） | メニュー位置・要点 | 区分 | 出典 | 確認日 |
|---|------|------|:-:|------|--------|
| I1 | 新規ドキュメント（New Document）ダイアログ | ファイル＞新規。タブ: 最近使用したもの／保存済み／モバイル／Web／印刷 など。カラーモード（RGB/CMYK）とラスタライズ効果の解像度を指定できる。**Web系は72ppi、印刷系は300ppi** | A ○ | [Illustrator の新規ドキュメントダイアログの概要](https://helpx.adobe.com/illustrator/desktop/add-and-import-files/start-a-new-file/new-document-dialog-overview.html) | 2026-09-28 |
| I2 | カスタムのドキュメントプリセットの保存 | 新規ドキュメントダイアログで設定を保存し「保存済み」から再利用（＝「A3横・CMYK・300ppi・グリッド」をプリセット化） | A ○ | [Create and save custom document presets](https://helpx.adobe.com/illustrator/desktop/add-and-import-files/start-a-new-file/create-and-save-custom-document-presets.html) | 2026-09-28 |
| I3 | テンプレート（.ait） | テンプレートを開くと .ai の新規ドキュメントとして開き、元の .ait は変更されない。→ **配布は .ait が安全**（上書き事故を防げる）。「テンプレートとして保存」のメニュー位置はヘルプ要旨では確認できず（→未確認） | A ○ | [Illustrator でアートワークを保存する方法](https://helpx.adobe.com/illustrator/using/saving-artwork.html) / [New Document dialog (files-templates)](https://helpx.adobe.com/hk_en/illustrator/using/files-templates.html) | 2026-09-28 |
| I4 | アートボードオプション（Artboard Options） | アートボードパネル・プロパティパネル・コントロールパネルから開く。プリセット／幅・高さ／方向（縦・横）／位置／名前。表示: 中心マーク・十字線・ビデオセーフエリア | A ○ | [Create and add new artboards](https://helpx.adobe.com/illustrator/desktop/create-manage-artboards/add-edit-artboards/add-new-artboards.html) / [Artboard tool](https://helpx.adobe.com/illustrator/using/tool-techniques/artboard-tool.html) | 2026-09-28 |
| I5 | 環境設定「ガイドとグリッド」 | Win: 編集＞環境設定＞ガイドとグリッド／Mac: Illustrator＞設定＞ガイドとグリッド。グリッドの色・スタイル（ライン／ドット）・**グリッド間隔（Gridline every）**・**分割数（Subdivisions）** | A ◎ | [Illustrator で定規、グリッド、ガイドを使用する方法](https://helpx.adobe.com/illustrator/desktop/measure-and-align/grids-and-guides/about-rulers.html) | 2026-09-28 |
| I6 | ガイドを作成／ガイドをロック | 表示＞ガイド＞ガイドを作成（選択したベクターオブジェクトをガイドに変換）、表示＞ガイド＞ガイドを表示・隠す、表示＞ガイド＞ガイドをロック | A ○ | [How to use rulers, grids, and guides](https://helpx.adobe.com/sg/illustrator/using/rulers-grids-guides-crop-marks.html) / [Align objects with guides](https://helpx.adobe.com/illustrator/desktop/measure-and-align/grids-and-guides/align-graphic-objects-with-guides.html) | 2026-09-28 |
| I7 | グリッドに分割（Split Into Grid） | オブジェクト＞パス＞グリッドに分割。行数・列数、高さ・幅、**間隔（ガター）**、合計サイズを数値で指定。「**ガイドを追加**」で行・列の境界にガイドを引ける。→ **版面の長方形を描く→グリッドに分割→ガイドを追加** で12カラム等のレイアウトグリッドが数値どおりに作れる（本記事の核の手順） | A ○ | [Divide objects and split into grids](https://helpx.adobe.com/ca/illustrator/desktop/manage-objects/edit-objects/divide-or-split-objects.html) | 2026-09-28 |
| I8 | 文字スタイル／段落スタイル | ウィンドウ＞書式＞文字スタイル／段落スタイル。段落の書式は ウィンドウ＞書式＞段落 | A ◎ | [Illustrator での文字スタイルと段落スタイル](https://helpx.adobe.com/jp/illustrator/using/character-paragraph-styles1.html) / [Illustrator で段落の書式設定を行う方法](https://helpx.adobe.com/jp/illustrator/using/formatting-paragraphs.html) | 2026-09-28 |
| I9 | シンボル | ウィンドウ＞シンボル。オブジェクトをシンボルパネルの「新規シンボル」にドラッグで登録（Alt/Option＋ドラッグでダイアログ省略）。→ 評価マーク・凡例・ロゴ・注記の矢印をシンボル化し、差し替えを一括で | A ◎ | [シンボルの使用方法（Illustrator CC）](https://helpx.adobe.com/jp/illustrator/kb/5535.html) / [Create and place symbols](https://helpx.adobe.com/illustrator/desktop/manage-objects/traces-mockups-symbols/create-and-place-symbols.html) | 2026-09-28 |
| I10 | ドキュメントのカラーモード | ファイル＞ドキュメントのカラーモード＞CMYK カラー／RGB カラー。カラーパネルの表示切替は**ドキュメントのカラーモードを変えない**（よくある誤解） | A ○ | [Convert color modes in Illustrator](https://helpx.adobe.com/illustrator/desktop/manage-colors/select-and-adjust-colors/convert-color-modes.html) | 2026-09-28 |
| I11 | ドキュメントのラスタライズ効果設定 | 効果＞ドキュメントのラスタライズ効果設定。画面ではきれいでも印刷でドロップシャドウ等が粗い場合は解像度を上げる | A ○ | [How to apply effects in Illustrator](https://helpx.adobe.com/illustrator/using/effects.html) | 2026-09-28 |

### C. 解像度・カラーモード（重点3）
| # | 事実 | 区分 | 出典 | 確認日 |
|---|------|:-:|------|--------|
| C1 | Illustrator は画面（Web）用のラスタライズ効果に **72ppi**、印刷用に **300ppi** を使う（新規ドキュメントのプリセット） | A | I1 と同じ | 2026-09-28 |
| C2 | Adobe PDF プリセット「高品質印刷」「PDF/X-1a」等は、カラー・グレースケール画像を **300ppi**、白黒画像を **1200ppi** にダウンサンプル。「プレス品質」は CMYK に変換。「最小ファイルサイズ」は Web・メール向けで画質を下げる | A | [How to create Adobe PDF files in Illustrator](https://helpx.adobe.com/illustrator/using/creating-pdf-files.html) / [Adobe PDF options](https://helpx.adobe.com/illustrator/using/pdf-options.html) | 2026-09-28 |
| C3 | CMYK は印刷（インクの減法混色）、RGB は画面（光の加法混色）。RGB のネオンカラー等は CMYK で再現できない | A | [Color models and color spaces: RGB, CMYK, HSB, Lab](https://helpx.adobe.com/creative-cloud/apps/colors/understand-color-modes.html) / I10 | 2026-09-28 |
| C4 | sRGB は IEC 61966-2-1 で規格化された「デフォルトRGB色空間」。W3C がインターネット標準の既定色空間として提案（1996年） | A | [W3C: A Standard Default Color Space for the Internet - sRGB](https://www.w3.org/Graphics/Color/sRGB.html) / [IEC 61966-2-1:1999](https://webstore.iec.ch/en/publication/6169) | 2026-09-28 |
| C5 | 印刷通販の入稿仕様（各社の自社仕様＝その会社にとっての一次情報）: ラクスル＝塗り足し3mm、画像は原寸で350〜400dpi（350dpi未満は再入稿依頼の場合あり）、カラーモードは CMYK | A | [ラクスルマガジン: 印刷用データの作り方(後編)](https://raksul.com/magazine/column/140127-design/) / [ラクスル: ポスターの印刷用データ作成方法](https://raksul.com/guide/create-data/item/poster/guide/) | 2026-09-28 |

→ **記事での整理（推奨値の出し方）**: 「社内DRで**画面投影・PDF共有だけ**なら RGB（sRGB）・ラスタライズ効果150ppi程度で軽く」「**社内プリンタでA3出力**するなら CMYK・300ppi」「**印刷所に出す**（展示会パネル等）ならその印刷所の入稿仕様（例: 塗り足し3mm・350dpi）に従う」の3パターンで示す。150ppi は Adobe 公式の既定値ではない（72と300の中間の実務値）ので、本人の運用値で置き換えるか「目安」と明記する（→未確認欄）。
