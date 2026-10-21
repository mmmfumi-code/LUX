/* ===== PRESENTATION 01-09 ===== */
CUR_SEC='p';
const defP=o=>{o.bg='#d5d8de';o.loop=4000;o.p=o.p+`

【私の情報】（分かる範囲で箇条書きに。空欄のままでもOK）
・${o.info.join('\n・')}`;def(o)};
const MY=(...a)=>a.map(s=>s+'：');
const SLX=[60,820],SLY=[30,465];
const slide=(H,i,th,dark)=>sheet(H,720,405,{background:dark?th.cbg:th.bg,borderRadius:'6px',color:dark?th.cfg:th.fg},SLX[i%2],SLY[i>>1],i*120);
const shd=(H,s,th,h,n)=>{R(H,s,{left:'36px',top:'34px',width:'6px',height:'30px',background:th.ac,borderRadius:'3px'});T(H,s,{left:'54px',top:'30px',fontFamily:th.hf||F.sans,fontWeight:'700',fontSize:'24px',color:th.fg},h);T(H,s,{right:'26px',bottom:'16px',fontFamily:F.sans,fontSize:'12px',color:th.sub||'#999'},String(n))};
const SLD={
  cover(H,s,th,o,t){if(th.cimg)R(H,s,{right:'0',top:'0',width:'300px',height:'405px',background:th.cimg});R(H,s,{left:'40px',top:'60px',width:'60px',height:'5px',background:th.ac});T(H,s,{left:'40px',top:'84px',fontFamily:F.sans,fontWeight:'700',fontSize:'14px',letterSpacing:'.2em',color:th.ac},o.k||'');
    T(H,s,{left:'40px',top:'112px',width:th.cimg?'360px':'640px',whiteSpace:'pre-line',fontFamily:th.hf||F.sans,fontWeight:'900',fontSize:o.fs||'40px',lineHeight:'1.3',color:th.cfg},o.t);T(H,s,{left:'40px',bottom:'40px',fontFamily:F.sans,fontSize:'15px',color:th.cfg,opacity:.8},t)},
  list(H,s,th,o,t,n){shd(H,s,th,o.h,n);o.items.forEach((it,i)=>{const y=96+i*(270/o.items.length);const c=R(H,s,{left:'40px',top:y+'px',width:'640px',height:(270/o.items.length-12)+'px',background:th.ac2,borderRadius:'10px'});H.el('div',{position:'absolute',left:'18px',top:'50%',transform:'translateY(-50%)',width:'34px',height:'34px',borderRadius:'50%',background:th.ac,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.sans,fontWeight:'700',fontSize:'16px'},c,String(i+1));H.el('div',{position:'absolute',left:'68px',top:'50%',transform:'translateY(-50%)',fontFamily:F.sans,fontWeight:'700',fontSize:'18px',color:th.fg,whiteSpace:'nowrap'},c,it)})},
  bars(H,s,th,o,t,n){shd(H,s,th,o.h,n);const mx=Math.max(...o.v);o.v.forEach((v,i)=>{const w=520/o.v.length;const h=v/mx*220;R(H,s,{left:80+i*w+w*.2+'px',top:330-h+'px',width:w*.6+'px',height:h+'px',background:i===o.v.length-1?th.ac:th.ac+'88',borderRadius:'4px 4px 0 0'});T(H,s,{left:80+i*w+'px',width:w+'px',textAlign:'center',top:338+'px',fontFamily:F.sans,fontSize:'13px',color:th.sub||'#777'},o.l[i]);T(H,s,{left:80+i*w+'px',width:w+'px',textAlign:'center',top:306-h+'px',fontFamily:F.sans,fontWeight:'700',fontSize:'14px',color:th.fg},o.vl?o.vl[i]:'')});R(H,s,{left:'70px',top:'330px',width:'560px',height:'2px',background:th.fg,opacity:.3})},
  kpi(H,s,th,o,t,n){shd(H,s,th,o.h,n);o.v.forEach((q,i)=>{const w=640/o.v.length;const c=R(H,s,{left:40+i*w+'px',top:'110px',width:w-16+'px',height:'200px',background:th.ac2,borderRadius:'12px'});H.el('div',{position:'absolute',left:'0',right:'0',top:'50px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'44px',color:th.ac},c,q[0]);H.el('div',{position:'absolute',left:'0',right:'0',top:'120px',textAlign:'center',fontFamily:F.sans,fontSize:'15px',color:th.fg},c,q[1])})},
  table(H,s,th,o,t,n){shd(H,s,th,o.h,n);o.rows.forEach((r,i)=>r.forEach((c,j)=>{const w=640/r.length;T(H,s,{left:40+j*w+'px',width:w+'px',top:96+i*52+'px',height:'46px',lineHeight:'46px',textAlign:j?'center':'left',paddingLeft:j?'0':'14px',boxSizing:'border-box',background:i===0?th.ac:(j===r.length-1?th.ac2:'transparent'),borderBottom:'1px solid rgba(0,0,0,.08)',fontFamily:F.sans,fontWeight:i===0||j===r.length-1?'700':'400',fontSize:'15px',color:i===0?'#fff':th.fg},c)}))},
  flow(H,s,th,o,t,n){shd(H,s,th,o.h,n);o.steps.forEach((st,i)=>{const w=640/o.steps.length;const c=R(H,s,{left:40+i*w+'px',top:'140px',width:w-24+'px',height:'150px',background:i===o.steps.length-1?th.ac:th.ac2,borderRadius:'12px'});H.el('div',{position:'absolute',left:'0',right:'0',top:'26px',textAlign:'center',fontFamily:F.sans,fontWeight:'700',fontSize:'13px',color:i===o.steps.length-1?'#fff':th.ac},c,'STEP '+(i+1));H.el('div',{position:'absolute',left:'0',right:'0',top:'62px',textAlign:'center',fontFamily:F.sans,fontWeight:'700',fontSize:'18px',color:i===o.steps.length-1?'#fff':th.fg},c,st);if(i<o.steps.length-1)T(H,s,{left:40+i*w+w-22+'px',top:'196px',fontSize:'20px',color:th.ac},'▶')})},
  photo(H,s,th,o,t,n){shd(H,s,th,o.h,n);R(H,s,{left:'40px',top:'92px',width:'300px',height:'270px',borderRadius:'12px',background:o.img});o.items.forEach((it,i)=>{T(H,s,{left:'370px',top:100+i*88+'px',fontFamily:F.sans,fontWeight:'700',fontSize:'18px',color:th.ac},it[0]);T(H,s,{left:'370px',top:128+i*88+'px',width:'320px',whiteSpace:'normal',fontFamily:F.sans,fontSize:'14px',lineHeight:'1.5',color:th.fg},it[1])})},
  map(H,s,th,o,t,n){shd(H,s,th,o.h,n);R(H,s,{left:'200px',top:'90px',width:'2px',height:'280px',background:th.fg,opacity:.3});R(H,s,{left:'60px',top:'230px',width:'280px',height:'2px',background:th.fg,opacity:.3});[[110,140,'#bbb','A社'],[270,300,'#bbb','B社'],[130,300,'#bbb','C社'],[280,130,th.ac,t]].forEach(q=>{T(H,s,{left:q[0]-14+'px',top:q[1]-14+'px',width:'28px',height:'28px',borderRadius:'50%',background:q[2]},'',0,'pop');T(H,s,{left:q[0]+20+'px',top:q[1]-10+'px',fontFamily:F.sans,fontWeight:'700',fontSize:'13px',color:th.fg},q[3])});
    o.items.forEach((it,i)=>T(H,s,{left:'390px',top:110+i*70+'px',width:'300px',whiteSpace:'normal',fontFamily:F.sans,fontSize:'15px',lineHeight:'1.5',color:th.fg,borderLeft:'3px solid '+th.ac,paddingLeft:'12px'},it))}
};
const deck=(H,t,th,sl)=>{desk(H);sl.forEach((d,i)=>{const s=slide(H,i,th,d[0]==='cover');SLD[d[0]](H,s,th,d[1],t,i+1)})};
const PIMG='linear-gradient(135deg,#e9e4dc,#c9bfb1)';

/* BIZ：事業計画 */
defP({no:'01',cat:'BIZ',name:'カフェの創業計画書',en:'Startup Business Plan',text:'café nobu',lead:'融資や補助金の申請で求められる項目をすべて押さえた、誠実で読みやすい創業計画書。',
use:'<b>日本政策金融公庫などの創業融資、補助金の申請、物件オーナーや家族への説明</b>に。飲食店以外の小さなお店の開業にも使えます。',
tips:['審査する人が見るのは「経験」「数字の根拠」「返せるか」。この3つのスライドに力を入れます','売上は「客単価×客数×営業日数」の式で見せると、根拠のある計画に見えます','自分の経歴は、事業に関係する経験だけを具体的な年数と一緒に書きます'],
info:MY('お店の名前と業態','開業予定の場所・時期','これまでの経験（年数）','メニューと価格','席数・営業時間','必要な資金と、自己資金・借入の内訳','想定の客単価・1日の客数'),
p:`カフェの「創業計画書」のプレゼン資料を、13枚で作ってください。金融機関の融資担当者に、誠実で信頼できる印象を与えるものにします。
・お店の名前：「{T}」
・配色：背景は生成り #FAF7F2、文字はこげ茶 #3B2F2A、メインは深緑 #2F5D50、差し色はテラコッタ #C47A5A
・フォント：見出しは Noto Serif JP（太め）、本文は Noto Sans JP
・スライド構成：
　1. 表紙（店名・「創業計画書」・日付・代表者名）
　2. 事業の概要を一言で（どんなお店か、誰のためのお店か）
　3. 創業の動機と、これまでの経験（年表の図）
　4. 市場とターゲット（商圏の範囲と、来てほしいお客さまの人物像）
　5. 競合と強み（近くの店との比較表。自店の列を色付けして強調）
　6. 商品・メニューと価格（主力3品を写真の枠つきで）
　7. 集客・販売の計画（開業前／開業後に分けて）
　8. 店舗の計画（立地・席数・営業時間・定休日）
　9. 売上計画（客単価×客数×営業日数の式と、1〜3年目の表と棒グラフ）
　10. 資金計画（必要な資金と調達方法の2列の表。合計が一致すること）
　11. 収支と返済の計画（毎月の利益から返済できることを示す）
　12. 開業までのスケジュール（横長の工程表）
　13. リスクと対策（3つ）
・トーン：誇張せず、根拠のある言い方にする`});

defP({no:'02',cat:'BIZ',name:'スタートアップの資金調達ピッチ',en:'Investor Pitch Deck',text:'nobu tech',lead:'投資家が見たい順番で並べた、10枚の資金調達ピッチ。大きな数字と少ない文字で、一気に伝える。',
use:'<b>ベンチャーキャピタルやエンジェル投資家への資金調達、ピッチイベント、アクセラレーターの応募</b>に。',
tips:['1枚目の次に「課題」。投資家は最初の3枚で興味を持つかを決めます','市場規模は TAM・SAM・SOM の3重の円で見せるのが定番','「なぜこのチームなのか」を経歴の一言で示すと、信頼が一気に上がります'],
info:MY('サービス名と一言の説明','解決する課題と、困っている人','現在の実績（ユーザー数・売上・継続率など）','ビジネスモデル（誰からいくら）','チームの経歴','調達したい金額と使い道'),
p:`スタートアップの資金調達用の「ピッチ資料」を、11枚で作ってください。投資家に3分で伝わる、大きな数字と少ない文字の資料にします。
・会社名・サービス名：「{T}」
・配色：表紙と章の区切りは濃紺 #0B1530 に白文字、本文スライドは白 #FFFFFF に濃紺の文字、アクセントはエレクトリックブルー #3D6BFF
・フォント：見出しは Noto Sans JP 900、数字は Inter（太字）
・スライド構成：
　1. 表紙（サービス名と、一言で言うと何かのキャッチコピー）
　2. 課題（誰が・何に・どれくらい困っているか。大きな数字を1つ）
　3. 解決策（サービスで何が変わるか。ビフォー・アフターの図）
　4. プロダクト（画面のモックアップの枠と、主な機能3つ）
　5. 市場規模（TAM・SAM・SOM の3重の円）
　6. ビジネスモデル（お金の流れの図と、料金）
　7. トラクション（実績の推移グラフ。右肩上がりの所を強調）
　8. 競合とポジショニング（2軸のマップで、自社が右上に来るように）
　9. チーム（顔写真の丸い枠と、名前・役割・経歴の一言）
　10. 調達額と資金の使い道（円グラフ）と、次の目標（マイルストーン）
　11. ビジョン（一文のメッセージだけの締め）
・1枚の文字は最小限。数字は大きく、単位は小さく`});

defP({no:'03',cat:'BIZ',name:'3か年の中期経営計画',en:'Mid-term Management Plan',text:'nobu株式会社',lead:'振り返り→現状分析→戦略→数値目標の流れで組んだ、社員にも金融機関にも伝わる中期経営計画。',
use:'<b>社内の方針発表会、金融機関への説明、株主・取引先への報告</b>に。事業承継や新体制のスタートにも。',
tips:['最初に「前の計画の振り返り」を入れると、新しい計画に説得力が出ます','重点戦略は3つまで。多いと社員が覚えられません','数値目標はグラフ1枚にまとめ、3年後の数字だけを大きく'],
info:MY('会社名・業種・社員数','直近3年の売上・利益','強みと課題','これからやりたいこと（新事業・設備投資・採用など）','3年後の目標の数字'),
p:`会社の「中期経営計画（3か年）」のプレゼン資料を、12枚で作ってください。社員にも金融機関にも伝わる、端正で信頼感のある資料にします。
・会社名：「{T}」
・配色：背景は白、文字はチャコール #2B2B2B、メインはコーポレートネイビー #1F3A68、差し色はゴールド #B8975A（強調の数字だけ）
・フォント：見出しは Noto Serif JP、本文は Noto Sans JP
・スライド構成：
　1. 表紙（「中期経営計画 2026–2028」と会社名）
　2. トップメッセージ（代表の言葉を3行で）
　3. 前の計画の振り返り（目標と実績の比較表。できたこと・できなかったこと）
　4. 現状分析（SWOT の4マス）
　5. 3年後に目指す姿（ビジョンを一文で、大きく）
　6. 重点戦略の全体像（3本の柱の図）
　7〜9. 重点戦略1〜3（それぞれ「目的・主な施策・KPI」の3段）
　10. 数値目標（売上・営業利益の3年間の棒グラフと、主要KPIの表）
　11. 実行ロードマップ（3年分の横長の工程表）
　12. まとめ（社員へのメッセージ）`});

/* PLAN：新商品立案 */
defP({no:'04',cat:'PLAN',name:'食品の新商品企画書',en:'New Product Proposal',text:'nobu食品',lead:'背景→ターゲット→コンセプト→売れる根拠→決めてほしいこと。社内の企画会議で通る型。',
use:'<b>食品・日用品メーカーの企画会議、商品開発の提案、上司への稟議</b>に。飲食店の新メニュー提案にも応用できます。',
tips:['コンセプトは「誰の、どんな場面を、どう変えるか」を一文で','最後に「今日決めてほしいこと」を書くと、会議が前に進みます','パッケージ案はラフの絵でOK。イメージがあるだけで通りやすくなります'],
info:MY('会社名・商品のジャンル','思いついたきっかけ（トレンド・お客さまの声）','ターゲット','味・容量・価格の案','売りたい場所（スーパー・コンビニ・ECなど）','発売したい時期'),
p:`食品の「新商品企画書」のプレゼン資料を、12枚で作ってください。社内の企画会議で承認をもらうための資料です。
・会社名：「{T}」（新商品の名前は仮で考えてOK）
・配色：背景は白、文字は #2D2A26、メインはオレンジ #F28C28、サブはクリーム #FFF3E0
・フォント：Noto Sans JP（見出し 900、本文 400）
・スライド構成：
　1. 表紙（商品の仮の名前・「新商品企画書」・提案部署・日付）
　2. 提案の要約（何を・誰に・いつ・いくらで、を1枚で）
　3. 企画の背景（市場のトレンドとお客さまの声。【要確認】のデータ枠つき）
　4. ターゲット（人物像のカード：年齢・暮らし・困りごと）
　5. 商品コンセプト（一文のコンセプトと、ポジショニングマップ）
　6. 商品の仕様（味・容量・価格・保存方法の表）
　7. パッケージ案（パッケージのラフの枠を2案並べる）
　8. 差別化のポイント（他社商品との比較表）
　9. 販売とプロモーション（売り場・SNS・試食などの施策）
　10. 売上目標と原価（1年目の数量・売上・粗利の表）
　11. 発売までのスケジュール
　12. 今日決めてほしいこと（3つ）`});

defP({no:'05',cat:'PLAN',name:'新規事業コンテストの提案',en:'New Business Proposal',text:'nobu株式会社',lead:'現場の課題から始めて、小さく試す計画で締める。社内の新規事業コンテストで評価される流れ。',
use:'<b>社内の新規事業コンテスト、ビジネスプランコンテスト、経営会議での新サービス提案</b>に。',
tips:['いきなり大きな計画ではなく「まず3か月で小さく試す」計画にすると通りやすい','課題は、アンケートやインタビューの「生の声」を引用すると説得力が増します','「お願いしたいこと（予算・人・期間）」をはっきり書いて終わります'],
info:MY('会社名・自分の部署','気づいた課題と、そのきっかけ','考えた解決策（サービス）','お客さまになる人','試してみたいこと（期間・予算）'),
p:`社内の「新規事業コンテスト」用の事業提案資料を、11枚で作ってください。審査員（経営陣）に「やってみよう」と思わせる資料にします。
・会社名：「{T}」（新サービスの名前は仮で考えてOK）
・配色：背景は白、文字は #1E2A2E、メインはティール #0F9D8A、差し色はイエロー #FFC93C
・フォント：Noto Sans JP（見出し 900、本文 400）。アイコンを多めに使う
・スライド構成：
　1. 表紙（サービスの仮の名前と、一言のキャッチコピー）
　2. 現場で見つけた課題（お客さまの「生の声」を吹き出しで3つ）
　3. なぜ今やるべきか（市場や社会の変化）
　4. 解決策（サービスの概要と、使う流れの図）
　5. お客さまにとっての価値（ビフォー・アフター）
　6. ビジネスモデル（お金の流れの図）
　7. 市場の大きさ（【要確認】のデータ枠つき）
　8. 小さく試す計画（3か月の検証計画：何を・どう測るか）
　9. 収支の見込み（3年分の簡単な表）
　10. 体制（必要な人数と役割）
　11. お願いしたいこと（予算・人・期間）`});

defP({no:'06',cat:'PLAN',name:'新ブランドの立ち上げ企画',en:'Brand Launch Plan',text:'nobu cosme',lead:'世界観のムードボードから、ローンチ計画まで。雑誌のように美しい、ブランドの企画書。',
use:'<b>コスメ・アパレル・雑貨・食品などの新ブランド立ち上げ、D2Cブランドの企画、デザイナーや工場への説明</b>に。',
tips:['最初に写真だけの「ムードボード」を見せると、言葉より早く世界観が伝わります','ターゲットは1人の具体的な人物（ペルソナ）にしぼって描きます','色・フォント・写真のトーンを「ブランドのルール」として1枚にまとめておくと、後がぶれません'],
info:MY('ブランド名（仮でOK）・カテゴリ','届けたい人','ブランドで大事にしたいこと','最初に出したい商品と価格帯','売る場所（EC・SNS・店舗）','発売したい時期'),
p:`新しい「コスメブランドの立ち上げ企画書」を、12枚で作ってください。雑誌のように美しく、世界観が伝わる資料にします。
・ブランド名：「{T}」
・配色：背景はベージュ #F3ECE4、文字は黒 #1C1C1C、差し色はくすみピンク #C98E8E
・フォント：見出しは Shippori Mincho B1、英字は Cormorant Garamond、本文は Noto Sans JP（細め）
・スライド構成：
　1. 表紙（ブランド名を大きく、余白たっぷり）
　2. ムードボード（世界観を表す写真の枠を6つ、雑誌のようにレイアウト）
　3. 届けたい人（ペルソナ：年齢・暮らし・価値観・悩み）
　4. ブランドコンセプト（一文のコンセプトと、大事にする3つの言葉）
　5. ネーミングとロゴの考え方
　6. 商品ラインナップ（3品の写真の枠と、価格）
　7. パッケージ・デザインのルール（色・フォント・写真のトーン）
　8. 価格の考え方（競合との価格帯の比較）
　9. 販売チャネル（EC・SNS・ポップアップ）
　10. ローンチ計画（発売前3か月〜発売後3か月の SNS・PR の流れ）
　11. 目標（KPI：フォロワー・売上・リピート率）
　12. スケジュールと次のステップ`});

/* SALES：商品紹介 */
defP({no:'07',cat:'SALES',name:'法人向けサービスの営業資料',en:'B2B Sales Deck',text:'nobu cloud',lead:'「こんなお悩みありませんか」から始まる、商談でそのまま使える営業資料。',
use:'<b>法人向けのITツール・サービスの商談、オンライン商談、問い合わせ後に送る資料</b>に。',
tips:['最初の3枚で「お悩み→解決→効果」を見せ、詳しい機能はその後に','導入効果は「月20時間の削減」のように、時間やお金の数字で','最後のスライドに、次にしてほしい行動（無料トライアル・相談予約）を1つだけ'],
info:MY('サービス名・一言の説明','解決できる悩み','主な機能','導入の実績・事例','料金プラン','導入までの流れ'),
p:`法人向けサービスの「営業資料」を、11枚で作ってください。商談でそのまま画面共有して使える資料にします。
・サービス名：「{T}」
・配色：背景は白、文字は #1F2937、メインはブルー #2563EB、サブは淡いブルー #EFF4FF
・フォント：Noto Sans JP（見出し 700、本文 400）、数字は Inter
・スライド構成：
　1. 表紙（サービス名と、一言のベネフィット）
　2. こんなお悩みありませんか？（悩みを4つ、イラストアイコンつきで）
　3. 解決します（サービスの概要を1枚で）
　4. 主な機能（3つ。画面のモックアップの枠つき）
　5. 導入の効果（大きな数字を3つ。【要確認】の数値）
　6. 導入事例（会社の業種・課題・結果の3段）
　7. 他の方法との比較（表。自社の列を色付け）
　8. 料金プラン（3プランの表。真ん中をおすすめとして強調）
　9. 導入の流れ（4ステップ）
　10. よくある質問（4つ）
　11. お問い合わせ・無料トライアルのご案内`});

defP({no:'08',cat:'SALES',name:'バイヤー向けの商品提案',en:'Buyer Proposal',text:'nobu食品',lead:'商品の魅力に加えて「売場でどう売れるか」まで見せる、小売店のバイヤーとの商談資料。',
use:'<b>スーパー・百貨店・セレクトショップ・ECモールのバイヤーとの商談、展示会での商談</b>に。',
tips:['バイヤーが知りたいのは「売れる根拠」と「売場のイメージ」。棚に並んだ絵を必ず入れます','規格・JANコード・ケース入数・賞味期限などの情報は、1枚の表にまとめて渡します','販促の支援（試食・POP・SNS）を書くと、採用されやすくなります'],
info:MY('会社名・商品名','商品の特長と、売れている実績','規格（容量・ケース入数・賞味期限など）','卸価格・希望小売価格','販促でお手伝いできること'),
p:`小売店のバイヤー向けの「商品提案書」を、10枚で作ってください。商談で「置いてみよう」と思ってもらうための資料です。
・会社名：「{T}」
・配色：背景は白、文字は #2B2B2B、メインは赤 #C8322B、サブは木目のベージュ #EFE4D2
・フォント：Noto Sans JP（見出し 900、本文 400）
・スライド構成：
　1. 表紙（商品の写真の枠を大きく、商品名と会社名）
　2. 会社の紹介（一言・創業・こだわり）
　3. 商品ラインナップ（写真の枠つきで4品）
　4. いちばんのおすすめ商品（写真と、3つの特長）
　5. 売れる理由（販売実績・口コミ・メディア掲載。【要確認】の枠）
　6. 売場の提案（棚に並んだイメージの枠と、POP の案）
　7. 販促の支援（試食・POP・SNS 投稿）
　8. 商品の規格（容量・JAN・ケース入数・賞味期限・保存方法の表）
　9. お取引の条件（価格・最小ロット・納期）
　10. 今後のスケジュールとご連絡先`});

defP({no:'09',cat:'SALES',name:'新製品の発表資料',en:'Product Launch Keynote',text:'nobu AIR',lead:'黒い背景に、大きな製品写真と一言。ミニマルで印象に残る、新製品の発表スライド。',
use:'<b>新製品の発表会、展示会のステージ、プレスリリースの説明会、社内の製品説明会</b>に。家電・ガジェット・アプリにも。',
tips:['1枚に1つのことだけ。「特長1」「特長2」…と1枚ずつ見せると印象に残ります','背景は黒、文字は白、強調の数字だけ色を付けるとミニマルで高級に','最後は価格と発売日だけを大きく。ここで拍手が起きる構成です'],
info:MY('製品名・ジャンル','開発の背景','いちばんの特長3つ','主な仕様','カラー','価格・発売日'),
p:`新製品の「発表資料」を、10枚で作ってください。ステージで発表する、ミニマルで印象に残るスライドにします。
・製品名：「{T}」
・配色：背景は黒 #000000、文字は白、強調の数字だけ製品のテーマカラー（例：ミントグリーン #3DDC97）
・フォント：見出しは Noto Sans JP 700（大きく、字間少し狭め）、英字と数字は Inter
・スライド構成：
　1. 表紙（製品の写真の枠を中央に大きく、製品名だけ）
　2. 開発の背景（一文だけ）
　3. 製品コンセプト（一文のキャッチコピー）
　4〜6. 特長1〜3（各1枚。大きな数字か短い一文と、製品の写真の枠）
　7. 主な仕様（細い線の表）
　8. カラーバリエーション（製品を色違いで並べた写真の枠）
　9. 使うシーン（写真の枠を3つ）
　10. 価格と発売日（大きく2行だけ）
・装飾はしない。余白と文字の大きさだけで見せる`});

Object.assign(ITEMS.p[0],{run(H,t){deck(H,t,{bg:'#faf7f2',fg:'#3b2f2a',ac:'#2f5d50',ac2:'#eef2ee',cbg:'#2f5d50',cfg:'#fff',hf:"'Noto Serif JP','Shippori Mincho B1',serif"},[['cover',{k:'BUSINESS PLAN',t:'創業計画書\n〜まちの、ひと休み〜'}],['list',{h:'3つの強みで、地域の常連をつくる',items:['店長は飲食店勤務 10年の経験','駅から徒歩2分・朝7時から営業','焼き菓子のテイクアウトで客単価UP']}],['bars',{h:'3年目に月商 280万円を目指す',v:[150,220,280],l:['1年目','2年目','3年目'],vl:['150万','220万','280万']}],['table',{h:'必要資金 900万円の内訳',rows:[['必要な資金','金額','調達方法'],['内装・設備','600万円','借入'],['運転資金','300万円','自己資金']]}]])}});
Object.assign(ITEMS.p[1],{run(H,t){deck(H,t,{bg:'#fff',fg:'#0b1530',ac:'#3d6bff',ac2:'#eef2ff',cbg:'#0b1530',cfg:'#fff'},[['cover',{k:'SEED ROUND',t:'働く時間を、\n半分にする。',fs:'44px'}],['kpi',{h:'月間ユーザーは半年で 8倍',v:[['8x','ユーザー数'],['92%','継続率'],['¥1.2M','月の売上']]}],['map',{h:'「かんたん×本格的」の空白を取る',items:['競合は「多機能だが難しい」か「簡単だが機能不足」','私たちは、5分で使える本格的なツール']}],['bars',{h:'調達額 1億円の使い道',v:[50,30,20],l:['開発','採用','マーケ'],vl:['50%','30%','20%']}]])}});
Object.assign(ITEMS.p[2],{run(H,t){deck(H,t,{bg:'#fff',fg:'#2b2b2b',ac:'#1f3a68',ac2:'#eef1f6',cbg:'#1f3a68',cfg:'#fff',hf:"'Noto Serif JP','Shippori Mincho B1',serif"},[['cover',{k:'MID-TERM PLAN 2026–2028',t:'中期経営計画\n地域とともに、次の100年へ',fs:'34px'}],['list',{h:'3本の柱で、成長と安定を両立する',items:['既存事業の生産性を 20%向上','新事業で売上の柱をもう1本','人が育つ仕組みをつくる']}],['bars',{h:'2028年に売上 30億円を目指す',v:[22,25,27,30],l:['2025','2026','2027','2028'],vl:['22億','25億','27億','30億']}],['flow',{h:'3年間のロードマップ',steps:['基盤づくり','展開','拡大']}]])}});
Object.assign(ITEMS.p[3],{run(H,t){deck(H,t,{bg:'#fff',fg:'#2d2a26',ac:'#f28c28',ac2:'#fff3e0',cbg:'#f28c28',cfg:'#fff',cimg:'radial-gradient(circle at 50% 50%,#ffd8a8,#f6a04d 60%,#d9761b)'},[['cover',{k:'NEW PRODUCT',t:'朝のたんぱく質\nスープ（仮）'}],['map',{h:'「手軽×栄養」の空いた場所を狙う',items:['朝食を抜く30代の働く人がターゲット','温めるだけで、たんぱく質15g']}],['photo',{h:'パッケージは2案で検討',img:'linear-gradient(135deg,#ffe0b8,#f28c28)',items:[['A案：毎日のごほうび','明るいオレンジで、店頭で目立つ'],['B案：シンプル','白地に大きく「15g」'],['価格：198円（税込）','コンビニの棚を想定']]}],['list',{h:'今日決めてほしいこと',items:['試作に進むかどうか','開発予算 300万円','発売時期：来年9月']}]])}});
Object.assign(ITEMS.p[4],{run(H,t){deck(H,t,{bg:'#fff',fg:'#1e2a2e',ac:'#0f9d8a',ac2:'#e7f6f3',cbg:'#0f9d8a',cfg:'#fff'},[['cover',{k:'NEW BUSINESS PROPOSAL',t:'現場の「探す時間」を\nゼロにする'}],['list',{h:'現場の声：探すだけで1日1時間',items:['「資料がどこにあるか分からない」','「詳しい人が休むと止まる」','「同じ質問に何度も答えている」']}],['flow',{h:'まず3か月、1部署で小さく試す',steps:['ヒアリング','試作','1部署で検証','効果を測定']}],['kpi',{h:'お願いしたいこと',v:[['300万','予算'],['2名','メンバー'],['3か月','期間']]}]])}});
Object.assign(ITEMS.p[5],{run(H,t){deck(H,t,{bg:'#f3ece4',fg:'#1c1c1c',ac:'#c98e8e',ac2:'#ebe0d6',cbg:'#e9dfd4',cfg:'#1c1c1c',hf:"'Shippori Mincho B1',serif",cimg:'linear-gradient(160deg,#e8d6cc,#c98e8e)'},[['cover',{k:'BRAND LAUNCH',t:'肌に、\n余白を。',fs:'48px'}],['photo',{h:'届けたい人：がんばりすぎない30代',img:'linear-gradient(160deg,#efe4da,#d4b8a8)',items:[['33歳・会社員','平日は忙しく、休日はゆっくり'],['大事にしていること','少なくても、いいものを'],['悩み','肌の調子が気分に出る']]}],['bars',{h:'まずは3品でスタート',v:[3800,4800,5800],l:['化粧水','美容液','クリーム'],vl:['¥3,800','¥4,800','¥5,800']}],['flow',{h:'発売前から、ファンをつくる',steps:['世界観の発信','先行予約','発売','レビュー']}]])}});
Object.assign(ITEMS.p[6],{run(H,t){deck(H,t,{bg:'#fff',fg:'#1f2937',ac:'#2563eb',ac2:'#eff4ff',cbg:'#2563eb',cfg:'#fff'},[['cover',{k:'SERVICE GUIDE',t:'請求書の作業を、\nボタン1つに。'}],['list',{h:'こんなお悩みありませんか？',items:['毎月の請求書づくりに丸2日かかる','入金の確認が手作業でミスが出る','担当者しかやり方が分からない']}],['kpi',{h:'導入した会社の平均の効果',v:[['−20h','月の作業時間'],['0件','入力ミス'],['3日','導入まで']]}],['table',{h:'3つのプランから選べます',rows:[['','ライト','スタンダード'],['月額','¥3,000','¥8,000'],['ユーザー数','3人','無制限'],['サポート','メール','電話・メール']]}]])}});
Object.assign(ITEMS.p[7],{run(H,t){deck(H,t,{bg:'#fff',fg:'#2b2b2b',ac:'#c8322b',ac2:'#f6ece0',cbg:'#efe4d2',cfg:'#2b2b2b',cimg:'radial-gradient(circle,#f3c9a0,#c8322b 75%)'},[['cover',{k:'PROPOSAL FOR BUYERS',t:'地元素材の\nおかずシリーズ'}],['photo',{h:'いちばんのおすすめ：だし巻き',img:'linear-gradient(135deg,#ffe9a8,#e8b04a)',items:[['売れている理由','地元の直売所で月3,000個'],['特長','国産卵とかつおだし'],['価格','希望小売価格 398円']]}],['photo',{h:'売場の提案：お惣菜の棚の横に',img:'repeating-linear-gradient(90deg,#efe4d2 0 60px,#e0d2bc 60px 64px)',items:[['POP','「地元の味」を大きく'],['試食','週末の試食をお手伝い'],['SNS','お店の告知を投稿します']]}],['table',{h:'商品の規格',rows:[['項目','内容'],['内容量','200g'],['ケース入数','12個'],['賞味期限','製造から7日']]}]])}});
Object.assign(ITEMS.p[8],{run(H,t){deck(H,t,{bg:'#000',fg:'#fff',ac:'#3ddc97',ac2:'#111',cbg:'#000',cfg:'#fff',sub:'#666'},[['cover',{k:'INTRODUCING',t:t,fs:'64px'}],['kpi',{h:'1回の充電で、30時間。',v:[['30h','連続再生'],['4.5g','片耳の重さ'],['10min','急速充電']]}],['photo',{h:'4つの色から選べる',img:'radial-gradient(circle at 30% 50%,#3ddc97 0 14%,transparent 15%),radial-gradient(circle at 70% 50%,#eee 0 14%,transparent 15%),radial-gradient(circle at 30% 80%,#ff8fab 0 10%,transparent 11%),radial-gradient(circle at 70% 80%,#333 0 10%,transparent 11%),#111',items:[['Mint','さわやかな新色'],['White / Black','定番の2色'],['Pink','限定カラー']]}],['kpi',{h:'価格と発売日',v:[['¥14,800','税込'],['11.20','発売日']]}]])}});

defP({no:'10',cat:'SALES',name:'セミナー・講座の説明会資料',en:'Course Info Session',text:'nobu塾',lead:'共感→変化→中身→実績→参加方法。個人の講師やコンサルが、説明会や体験会でそのまま使える資料。',
use:'<b>オンライン講座・コンサル・スクール・コーチング</b>の説明会、無料体験会、ウェビナーの後半の案内に。個人で教える仕事をしている人向けです。',
tips:['最初に「こんなお悩みありませんか」で共感してから、講師の自己紹介へ。いきなり講座の説明から入らないのがコツ','受講後の変化は「ビフォー→アフター」の2列で見せると、参加する理由がはっきりします','受講生の声は、名前（イニシャル可）・職業・具体的な変化をセットで。本人の了承を取ったものだけを使います'],
info:MY('講座・サービスの名前','教えている内容と、対象の人','講師の経歴・実績','講座の期間・回数・形式（オンライン／対面）','受講料と特典','受講生の声（了承済みのもの）','申込方法・締切'),
p:`個人の講師・コンサルタント向けに、セミナー・講座の「説明会資料」を12枚で作ってください。説明会や無料体験会のあとで「受けてみたい」と思ってもらうための資料です。
・講座の名前：「{T}」（講座の名前がない場合は、教える内容から仮で考えてOK）
・配色：背景は白、文字は #2B2B2B、メインはディープグリーン #2E6B5A、サブは淡いグリーン #EEF5F1、差し色はイエロー #F6C344（強調だけ）
・フォント：見出しは Zen Kaku Gothic New（太め）、本文は Noto Sans JP
・スライド構成：
　1. 表紙（講座の名前と、一言で何が変わるかのキャッチコピー。講師の写真の枠）
　2. こんなお悩みありませんか？（チェックボックス付きで4つ）
　3. その悩み、こう変えられます（ビフォー→アフターの2列）
　4. 講師の自己紹介（写真の枠・経歴・この仕事をしている理由を短く）
　5. 講座で身につくこと（3つの柱。アイコン付き）
　6. カリキュラム（全6回などの表：回・テーマ・内容）
　7. 学び方（オンライン／対面、動画・ワーク・個別相談など、受け方の図）
　8. 受講生の声（3人。イニシャル・職業・具体的な変化。【要確認】の枠）
　9. よくある質問（4つ：時間が取れるか・初心者でも大丈夫か・返金・サポート）
　10. 受講料と特典（料金の表。説明会参加者だけの特典を強調）
　11. お申し込みの流れ（4ステップと締切）
　12. 最後のメッセージ（講師から一言と、申込用のQRコードの枠）
・トーン：売り込みすぎず、やさしく誠実に。誇大な表現（「必ず稼げる」など）は使わない`});
Object.assign(ITEMS.p[9],{run(H,t){deck(H,t,{bg:'#fff',fg:'#2b2b2b',ac:'#2e6b5a',ac2:'#eef5f1',cbg:'#2e6b5a',cfg:'#fff',cimg:'radial-gradient(circle at 50% 38%,#e9c9b0 0 16%,transparent 17%),radial-gradient(circle at 50% 100%,#3a4a44 0 40%,transparent 41%),linear-gradient(160deg,#eef5f1,#bcd6ca)'},[['cover',{k:'INFO SESSION',t:'好きなことを、\n仕事にする3か月。'}],['list',{h:'こんなお悩みありませんか？',items:['発信しているのに、お客さまが来ない','何から始めればいいか分からない','ひとりで続けられるか不安']}],['table',{h:'全6回のカリキュラム',rows:[['回','テーマ'],['1〜2','自分の強みを見つける'],['3〜4','発信と集客の仕組み'],['5〜6','初めての売上をつくる']]}],['flow',{h:'お申し込みの流れ',steps:['説明会','個別相談','お申し込み','受講スタート']}]])}});
