/* ===== WEDDING PROFILE 01-10 ===== */
CUR_SEC='f';
const PCHAP=`　・オープニング（20秒）：タイトルとふたりの名前
　・新郎の生い立ち（約2分）：写真15枚、1枚6〜8秒。年齢・年号とコメント付き
　・新婦の生い立ち（約2分）：写真15枚、同じ形で
　・ふたりの歩み（約1分30秒）：出会い〜プロポーズまで、写真10枚
　・ゲストへの感謝（約40秒）：メッセージと、ゲストとの写真
　・エンディング（10秒）：「これからも よろしくお願いします」と日付`;

/* WSTREAM：配信・SNS風 */
defW({no:'01',cat:'WSTREAM',name:'配信サービス風「ドキュメンタリーシリーズ」',en:'Streaming Docuseries',lead:'あの配信サービスのドキュメンタリーのように、生い立ちが「エピソード一覧」になって再生されていく。',
use:'<b>いちばん人気の“配信サービス風”のプロフィール</b>に。オープニング No.01 と合わせると、シリーズ物として統一できます。',
tips:['エピソード名を「第1話 誕生」「第4話 反抗期」のように付けると、笑いと共感が生まれます','各話の「再生時間」に年齢を入れる（例「0〜6歳」）と分かりやすい','最終話を「第10話 本日」にして、エンディングで“続きは本日の披露宴で”と締めましょう'],
p:`動画配信サービスのドキュメンタリーシリーズの作品ページとエピソード一覧の雰囲気で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：黒 #141414、赤 #E50914 に近い赤（進行バー・選択枠だけ）、白、グレー #B3B3B3
・フォント：英字は Bebas Neue、日本語は Noto Sans JP（700/400）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 新郎・新婦それぞれの章の始まりは「作品ページ」：背景いっぱいに子どもの頃の写真、左にシリーズ名（例「新郎 ○○ ── 誕生から今日まで」）、「全5話」、短いあらすじ
　2. 続いて「エピソード一覧」：左にサムネイル（写真）、右に「第1話 誕生（1995年）」のようなタイトル・1行のあらすじ・「0〜3歳」の時間表示。今のエピソードに赤い枠と、サムネイルの下に赤い進行バー
　3. エピソードが選ばれると、その写真が全画面で再生されるように大きくなり、下に字幕風のコメント（白い文字、黒いふち）
　4. ふたりの章は「シーズン2：ふたりの物語」として同じ形で
　5. 最後は「すべてのエピソードを視聴しました」→「シーズン3 制作決定。」と日付`,
run(H,t){const [a,b]=nm(t);const S=H.abs({inset:'0',background:'#141414'});
  T(H,S,{left:'70px',top:'50px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'28px',letterSpacing:'.3em',color:'#e50914'},'DOCUSERIES',200,'fade');T(H,S,{left:'66px',top:'84px',fontFamily:F.sans,fontWeight:'900',fontSize:'60px',color:'#fff'},`新郎 ${a} ── 誕生から今日まで`,400);
  T(H,S,{left:'70px',top:'170px',fontFamily:F.sans,fontSize:'24px',color:'#b3b3b3'},null,600,'fade').innerHTML='<span style="color:#46d369;font-weight:700">マッチ度99%</span>　全5話　1995-2025';
  const eps=[['第1話　誕生','0〜3歳','元気な産声とともに。','baby'],['第2話　わんぱく時代','4〜12歳','虫取りと自転車の毎日。','boy'],['第3話　青春','13〜18歳','部活に打ち込んだ3年間。','boy'],['第4話　旅立ち','19〜25歳','初めての一人暮らし。','man']];
  eps.forEach((e,i)=>{const y=240+i*150;const row=R(H,S,{left:'70px',top:y+'px',width:'1460px',height:'130px',borderRadius:'8px',background:i===1?'#2a2a2a':'transparent'},800+i*200,'left');pho(H,row,14,10,200,112,e[3],null,{borderRadius:'6px'});
    H.el('div',{position:'absolute',left:'240px',top:'18px',fontFamily:F.sans,fontWeight:'700',fontSize:'30px',color:'#fff'},row,e[0]);H.el('div',{position:'absolute',left:'240px',top:'66px',fontFamily:F.sans,fontSize:'22px',color:'#b3b3b3'},row,e[2]);H.el('div',{position:'absolute',right:'30px',top:'22px',fontFamily:F.sans,fontSize:'24px',color:'#b3b3b3'},row,e[1]);
    const pb=H.el('div',{position:'absolute',left:'14px',top:'118px',width:'200px',height:'5px',background:'#555'},row);const f=H.el('div',{height:'100%',background:'#e50914',transformOrigin:'left'},pb);H.a(f,[{transform:'scaleX(0)'},{transform:`scaleX(${i<1?1:i===1?.6:0})`}],{d:1500,dl:1800})});
  const fs=H.abs({inset:'0',opacity:0});H.a(fs,[{opacity:0,transform:'scale(.4) translate(-300px,-60px)'},{opacity:1,transform:'none'}],{d:900,dl:5200,e:E.io});const ph=pho(H,fs,0,0,1600,900,'boy');kb(H,ph,5200,4800);
  H.abs({left:'0',right:'0',top:'740px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'46px',color:'#fff',textShadow:OUT},fs,'8歳　夏休みは毎日、虫取りでした');H.abs({left:'60px',top:'50px',fontFamily:F.sans,fontWeight:'700',fontSize:'30px',color:'#fff',textShadow:'0 2px 6px #000'},fs,'第2話　わんぱく時代')}});

defW({no:'02',cat:'WSTREAM',name:'写真SNSのフィード風',en:'Social Feed',lead:'写真共有SNSのプロフィール画面のように。投稿をたどると、ふたりの成長記録になっている。',bg:'#fff',
use:'<b>写真がたくさんあるふたり、SNS世代のゲストが多い披露宴</b>に。「いいね」の数やコメントで、自然に笑いが生まれます。',
tips:['投稿のキャプションにハッシュタグ（#1995 #誕生 #初めての笑顔）を付けると、SNSらしさが一気に出ます','「いいね」の数を年齢や体重にするなど、数字で小ネタを仕込むのがおすすめ','コメント欄に、家族や友人の名前で「この頃から食いしん坊」などを入れると会場が沸きます'],
p:`写真共有SNSのプロフィール画面と投稿の雰囲気で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・画面：16:9 の中央に、縦長のスマホ画面（9:16）。左右の余白は、今の投稿の写真を大きくぼかして敷く
・配色：白・黒・グレー #8E8E8E、ハートの赤 #FF3040、アイコンの枠はピンク〜オレンジ〜紫のグラデーション
・フォント：Noto Sans JP（700/400）、英字は Montserrat
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 章の始まりは「プロフィール画面」：丸いアイコン、アカウント名（例「nobu_1995」）、「投稿 15　フォロワー ○○　フォロー ○○」（数字はネタにしてよい：フォロワー＝家族の人数など）、自己紹介文（出身地・趣味・好きな食べ物）、その下に写真の3列グリッド
　2. グリッドの写真が1枚ずつタップされて「投稿画面」になる：上にアカウント名、正方形の写真、♥・コメント・送信のアイコン、「いいね！○○件」、キャプション（コメント＋ハッシュタグ）、「コメント○件をすべて見る」と、家族や友人からのコメント1〜2件
　3. 投稿が表示されると、少し遅れてハートがダブルタップされたように大きく弾む
　4. ふたりの章は、ふたりの共同アカウント（例「nobu_yui_wedding」）として同じ形で
　5. 最後は「新しい投稿があります」→ 結婚式の日付の投稿「今日、結婚しました。」に「いいね！」が増え続けて終わる
・実在のSNSのロゴは使わない`,
run(H,t){const [a,b]=nm(t);const bg=pho(H,null,0,0,1600,900,'boy');bg.style.filter='blur(30px) brightness(.85)';bg.style.transform='scale(1.2)';
  const ph=H.abs({left:'545px',top:'20px',width:'510px',height:'860px',borderRadius:'26px',overflow:'hidden',background:'#fff',boxShadow:'0 30px 80px rgba(0,0,0,.4)'});
  const pf=H.abs({inset:'0'},ph);const av=H.abs({left:'24px',top:'40px',width:'110px',height:'110px',borderRadius:'50%',border:'4px solid transparent',background:'linear-gradient(#fff,#fff) padding-box,linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf) border-box'},pf);pho(H,av,6,6,90,90,'boy',null,{borderRadius:'50%'});
  [['15','投稿'],['4','フォロワー'],['1','フォロー']].forEach((q,i)=>{const c=H.abs({left:170+i*110+'px',top:'62px',width:'100px',textAlign:'center',fontFamily:F.sans,color:'#222'},pf);H.el('div',{fontWeight:'900',fontSize:'30px'},c,q[0]);H.el('div',{fontSize:'16px'},c,q[1])});
  H.abs({left:'24px',top:'170px',fontFamily:F.sans,fontWeight:'700',fontSize:'20px',color:'#222'},pf,a.toLowerCase()+'_1995');H.abs({left:'24px',top:'198px',width:'460px',fontFamily:F.sans,fontSize:'17px',lineHeight:'1.5',color:'#333'},pf,'〇〇県出身｜趣味：キャンプ｜好物：からあげ');
  const ks=['baby','boy','boy','boy','man','man','man','couple','man'];ks.forEach((k,i)=>{const c=pho(H,pf,(i%3)*170,270+Math.floor(i/3)*170,168,168,k);H.a(c,[{opacity:0},{opacity:1}],{d:300,dl:500+i*120})});
  const post=H.abs({inset:'0',background:'#fff',opacity:0},ph);H.a(post,[{opacity:0,transform:'translateY(40px)'},{opacity:1,transform:'none'}],{d:500,dl:3800});
  H.abs({left:'20px',top:'24px',fontFamily:F.sans,fontWeight:'700',fontSize:'20px',color:'#222'},post,a.toLowerCase()+'_1995');const pp=pho(H,post,0,70,510,510,'boy');kb(H,pp,4000,6000);
  H.abs({left:'20px',top:'596px',fontSize:'34px',color:'#222'},post,'♡　💬　➤');H.abs({left:'20px',top:'650px',fontFamily:F.sans,fontWeight:'700',fontSize:'20px',color:'#222'},post,'いいね！ 1,995件');
  H.abs({left:'20px',top:'684px',width:'470px',fontFamily:F.sans,fontSize:'19px',lineHeight:'1.5',color:'#222'},post,'8歳。夏休みは毎日、虫取り。 #1995 #わんぱく #今と同じ顔').style.whiteSpace='normal';
  H.abs({left:'20px',top:'770px',fontFamily:F.sans,fontSize:'17px',color:'#8e8e8e'},post,'母：この頃から食いしん坊でした');
  const ht=H.abs({left:'155px',top:'225px',fontSize:'200px',color:'#fff',textShadow:'0 4px 20px rgba(0,0,0,.3)',opacity:0},post,'♥');H.a(ht,[{opacity:0,transform:'scale(.2)'},{opacity:1,transform:'scale(1.15)',offset:.3},{opacity:1,transform:'scale(1)',offset:.6},{opacity:0,transform:'scale(1)'}],{d:1200,dl:5200})}});

/* WGAME：ゲーム・番組風 */
defW({no:'03',cat:'WGAME',name:'レトロRPG風「ぼうけんのきろく」',en:'Retro RPG Status',lead:'ステータス画面とレベルアップで生い立ちを紹介。「Lv.8 むしとりの わざを おぼえた！」',bg:'#000',
use:'<b>ゲーム好きのふたり</b>に。オープニング No.04 と合わせると、RPGの世界観で統一できます。',
tips:['年齢＝レベルにすると、自然に生い立ちの順番になります','「おぼえた わざ」に特技や資格を入れると、自己紹介がそのままゲームのネタになります','ステータスの数値（やさしさ 999 など）は、家族や友人に決めてもらうと盛り上がります'],
p:`昔の携帯ゲーム機のRPGのステータス画面と冒険の記録の雰囲気で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・見た目：ドット絵（くっきり表示）。黒い背景に、白い二重線の角丸ウィンドウ。色数は少なめのレトロな配色
・フォント：DotGothic16。文章は「ひらがな＋全角スペース」で、1文字ずつ表示
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 章の始まりは「キャラクターせんたく」画面：新郎（または新婦）のドット絵と、「なまえ：○○」「しゅっしん：○○」「タイプ：やさしい／くいしんぼう」
　2. 写真1枚ごとに「レベルアップ画面」：左に写真（ドット絵風の枠）、右にステータスのウィンドウ
　　・「Lv.8（8さい）」とレベルの数字がカウントアップ
　　・ステータス（ちから・すばやさ・かしこさ・やさしさ）のバーが伸びる
　　・下のメッセージウィンドウに「むしとりの わざを おぼえた！」のような、その年のエピソード
　3. 大きな出来事（入学・卒業・就職）は「イベント発生！」と画面が光る
　4. ふたりの章は「なかまに なった！」から始まり、ふたり並んだステータス画面に
　5. 最後は「ぼうけんの きろくを かきこみますか？ ▶はい いいえ」→「はい」→ 日付とメッセージ
・実在のゲームのキャラクター、ロゴ、効果音は使わない`,
run(H,t){const [a,b]=nm(t);const S=H.abs({inset:'0',background:'#000'});const win=(x,y,w,h)=>H.abs({left:x+'px',top:y+'px',width:w+'px',height:h+'px',border:'6px solid #fff',borderRadius:'12px',boxShadow:'inset 0 0 0 4px #000,inset 0 0 0 8px #fff'},S);
  const pw=win(70,60,620,520);const ph=pho(H,pw,24,24,560,460,'boy');ph.style.imageRendering='pixelated';ph.style.filter='contrast(1.2)';
  const sw=win(740,60,790,520);const lv=H.abs({left:'40px',top:'30px',fontFamily:F.dot,fontSize:'52px',color:'#fff'},sw);let n=0;const tick=()=>{if(n<8){n++;lv.textContent=`${a.toUpperCase()}　Lv.${n}`;H.wait(220,tick)}};lv.textContent=`${a.toUpperCase()}　Lv.0`;H.wait(600,tick);
  [['ちから',.55],['すばやさ',.8],['かしこさ',.4],['やさしさ',.95]].forEach((q,i)=>{H.abs({left:'40px',top:140+i*80+'px',fontFamily:F.dot,fontSize:'38px',color:'#fff'},sw,q[0]);const bb=H.abs({left:'260px',top:152+i*80+'px',width:'460px',height:'30px',border:'4px solid #fff',boxSizing:'border-box'},sw);const f=H.el('div',{height:'100%',background:i===3?'#ff6b9a':'#5ad65a',transformOrigin:'left'},bb);H.a(f,[{transform:`scaleX(${q[1]*.6})`},{transform:`scaleX(${q[1]})`}],{d:1200,dl:2400+i*150,e:'steps(8)'})});
  const lu=H.abs({left:'40px',top:'450px',fontFamily:F.dot,fontSize:'34px',color:'#ffd400',opacity:0},sw,'レベルが　あがった！');H.a(lu,[{opacity:0},{opacity:1}],{d:300,dl:2400,i:5,dir:'alternate',f:'forwards'});
  const mw=win(70,620,1460,220);const tx=H.abs({left:'50px',top:'40px',right:'50px',fontFamily:F.dot,fontSize:'44px',lineHeight:'1.6',color:'#fff',whiteSpace:'pre-wrap'},mw);
  [`${a.toUpperCase()}は　むしとりの　わざを\nおぼえた！`,`${a.toUpperCase()}は　じてんしゃに\nのれるように　なった！`].forEach((m,mi)=>H.wait(3600+mi*3000,()=>{tx.textContent='';let i=0;const ch=[...m];const tk=()=>{if(i<ch.length){tx.textContent+=ch[i++];H.wait(50,tk)}};tk()}))}});

defW({no:'04',cat:'WGAME',name:'ニュース特集「ふたりの歩み」',en:'News Feature',lead:'夕方のニュースの特集コーナーのように、年表とインタビュー風テロップでふたりの歩みを伝える。',bg:'#0b1d3a',
use:'<b>年代を問わず楽しめる、分かりやすいプロフィール</b>に。オープニング No.05（ニュース速報風）と合わせると統一感が出ます。',
tips:['年表を「その年の出来事（流行・ニュース）」と並べると、同世代のゲストが懐かしがります','両親や友人のコメントを「関係者の話」として入れると、ニュースらしさと温かさが両立します','画面下のテロップは、句点で区切った短い文が読みやすい'],
p:`夕方のニュース番組の特集コーナーの雰囲気で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：紺 #0B1D3A、白、赤 #D7001D（ラベル）、黄色 #FFD400（強調）
・フォント：Noto Sans JP（900/700）、数字は Roboto Condensed
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 左上に特集のロゴ「特集　ふたりの歩み」、右上に「LIVE」ではなく「VTR」の小さなラベル
　2. 写真の下に、ニュースの白い帯のテロップ（大きな見出し＋小さな説明）。例：見出し「1995年　〇〇県に誕生」説明「3,200gの元気な男の子」
　3. 時代の区切りでは、年表のグラフィック：横に伸びる線に年号の目盛りが流れ、その年の世の中の出来事（流行語・ヒット曲の年など）と、本人の出来事を上下に並べる
　4. 家族・友人のコメントは「インタビュー」風：写真の左下に名前と関係（例「新郎の母」）、話した言葉をカギカッコで
　5. ふたりの章は「現地からの中継」風：思い出の場所の写真に「LIVE」のラベルと地名
　6. 最後は「以上、特集でした」→ ふたりの写真とメッセージ → 番組のエンドカード`,
run(H,t){const [a,b]=nm(t);const S=H.abs({inset:'0',background:'#0b1d3a'});const ph=pho(H,S,0,0,1600,900,'boy');kb(H,ph,0,10000);
  const lg=T(H,S,{left:'50px',top:'40px',background:'#d7001d',color:'#fff',fontFamily:F.sans,fontWeight:'900',fontSize:'30px',padding:'8px 22px'},'特集　ふたりの歩み',200,'left');T(H,S,{right:'50px',top:'44px',background:'rgba(0,0,0,.6)',color:'#fff',fontFamily:F.sans,fontWeight:'700',fontSize:'22px',padding:'6px 14px'},'VTR',300,'fade');
  const tb=H.abs({left:'60px',right:'60px',top:'640px',height:'160px',background:'#fff',transformOrigin:'left'});H.a(tb,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:500,dl:800});
  H.abs({left:'0',top:'0',width:'26px',height:'160px',background:'#d7001d'},tb);T(H,tb,{left:'60px',top:'16px',fontFamily:F.sans,fontWeight:'900',fontSize:'60px',color:'#0b1d3a'},'1995年　〇〇県に誕生',1200);T(H,tb,{left:'64px',top:'100px',fontFamily:F.sans,fontWeight:'700',fontSize:'32px',color:'#444'},'3,200gの元気な男の子',1500,'fade');
  const tl=H.abs({left:'0',right:'0',top:'440px',height:'140px',background:'rgba(11,29,58,.85)',opacity:0});H.a(tl,[{opacity:0},{opacity:1}],{d:500,dl:4200});H.abs({left:'0',right:'0',top:'68px',height:'4px',background:'#ffd400'},tl);
  const yr=H.abs({left:'0',top:'0',width:'4000px',height:'140px'},tl);[1995,2000,2005,2010,2015,2020,2025].forEach((y,i)=>{H.abs({left:200+i*500+'px',top:'56px',width:'28px',height:'28px',borderRadius:'50%',background:'#ffd400'},yr);H.abs({left:170+i*500+'px',top:'92px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'34px',color:'#fff'},yr,String(y));H.abs({left:120+i*500+'px',top:'6px',fontFamily:F.sans,fontWeight:'700',fontSize:'24px',color:'#ffd400'},yr,['誕生','小学校入学','中学で野球部','高校卒業','社会人に','ふたりが出会う','本日、結婚'][i])});H.a(yr,[{transform:'translateX(0)'},{transform:'translateX(-2500px)'}],{d:5500,dl:4400,e:E.soft})}});

defW({no:'05',cat:'WGAME',name:'クイズ番組風「ふたりのこと、どこまで知ってる？」',en:'Quiz Show',lead:'4択クイズで生い立ちを紹介。正解発表のたびに会場から「えー！」の声が上がる参加型。',bg:'#1b0f4a',
use:'<b>ゲストと一緒に盛り上がりたいふたり</b>に。歓談中でもつい画面を見てしまう、参加型のプロフィールムービーです。',
tips:['問題は「答えが写真で分かる」ものにすると、正解発表の写真で笑いが起きます','1問につき考える時間を5秒、正解発表を5秒にすると、テンポよく進みます','最後の問題を「ふたりからゲストへの質問」にすると、温かい締めになります'],
p:`テレビのクイズ番組の雰囲気で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：濃い紫 #1B0F4A の背景に光のライン、選択肢のパネルは青 #2D5BFF、正解は黄色 #FFD400、不正解はグレー
・フォント：Noto Sans JP（900）、数字は Montserrat（800）
・全体の流れ：
${PCHAP}
　（それぞれの章を「クイズ」＋「正解発表の写真」で進める。新郎・新婦の章はそれぞれ5問、ふたりの章は3問）
・見た目の決まり：
　1. タイトル「ふたりのこと、どこまで知ってる？ クイズ」がスポットライトの中に現れる
　2. 問題画面：上に「Q.3」と問題文（例「新郎が小学生のときになりたかったものは？」）、下に4つの選択肢パネル「A〜D」、右上に5秒のカウントダウンの円
　3. 正解発表：正解のパネルが黄色に光り、他はグレーに。続いて答えの写真が大きく現れ、コメント（例「正解は B. 電車の運転士。毎日、駅で手を振っていました」）
　4. 問題と問題の間に、その時代の写真を2〜3枚、短いコメント付きで見せる
　5. ふたりの章の最後の問題は「Q. ふたりがいちばん伝えたいことは？」→ 答え「来てくれて、ありがとう」
　6. エンディング：「全問正解したあなたは、ふたりの大親友です」と日付`,
run(H,t){const S=H.abs({inset:'0',background:'radial-gradient(circle at 50% 30%,#3a2a9a,#1b0f4a 70%)'});for(let i=0;i<8;i++){const l=H.abs({left:'800px',top:'-200px',width:'6px',height:'1400px',background:'linear-gradient(transparent,rgba(255,255,255,.25),transparent)',transformOrigin:'50% 0',rotate:(i-3.5)*12+'deg'},S);H.a(l,[{opacity:.3},{opacity:.9}],{d:1200,dir:'alternate',i:Infinity,dl:i*150,f:'none'})}
  T(H,S,{left:'90px',top:'60px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'90px',color:'#ffd400'},'Q.3',200,'pop');
  T(H,S,{left:'300px',top:'78px',width:'1100px',whiteSpace:'normal',fontFamily:F.sans,fontWeight:'900',fontSize:'52px',lineHeight:'1.3',color:'#fff'},'新郎が小学生のとき、なりたかったものは？',500);
  const cd=H.abs({right:'90px',top:'240px',width:'130px',height:'130px',borderRadius:'50%',border:'10px solid #ffd400',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'60px',color:'#fff',boxSizing:'border-box'},S,'5');for(let k=1;k<=5;k++)H.wait(800+k*700,()=>{cd.textContent=String(5-k)});
  const ch=['A. 宇宙飛行士','B. 電車の運転士','C. パン屋さん','D. 忍者'];const pans=ch.map((c,i)=>T(H,S,{left:120+(i%2)*700+'px',top:420+Math.floor(i/2)*160+'px',width:'660px',height:'130px',borderRadius:'65px',background:'#2d5bff',border:'5px solid #fff',display:'flex',alignItems:'center',paddingLeft:'50px',boxSizing:'border-box',fontFamily:F.sans,fontWeight:'900',fontSize:'46px',color:'#fff'},c,900+i*150,'pop'));
  pans.forEach((p,i)=>H.a(p,i===1?[{background:'#2d5bff',color:'#fff'},{background:'#ffd400',color:'#1b0f4a'}]:[{opacity:1},{opacity:.35}],{d:400,dl:4600,f:'forwards'}));
  const ans=H.abs({inset:'0',opacity:0});H.a(ans,[{opacity:0},{opacity:1}],{d:600,dl:6200});const ap=pho(H,ans,0,0,1600,900,'boy');kb(H,ap,6200,3800);H.abs({left:'0',right:'0',top:'700px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'48px',color:'#fff',textShadow:OUT},ans,'正解は B. 電車の運転士！');H.abs({left:'0',right:'0',top:'780px',textAlign:'center',fontFamily:F.sans,fontWeight:'700',fontSize:'32px',color:'#ffd400',textShadow:OUT},ans,'毎日、駅で電車に手を振っていました')}});

defW({no:'06',cat:'WSTREAM',name:'スマホの写真アプリ「思い出」風',en:'Photo Memories',lead:'スマホの写真アプリが自動で作る「思い出」のように、年ごとのアルバムからふたりの軌跡がよみがえる。',bg:'#000',
use:'<b>シンプルで上品にまとめたいふたり</b>に。写真が主役なので、写真の多いふたりにぴったり。編集の手間も少なめです。',
tips:['章のタイトルを「〇年前の今日」「〇〇の思い出」のように、写真アプリの言い方にするとそれらしくなります','写真はゆっくり寄るだけで十分。切り替えはクロスフェードで統一すると上品です','最後に「新しい思い出が作成されました」で結婚式当日につなげると、じんわり感動します'],
p:`スマートフォンの写真アプリが自動で作る「思い出（メモリー）」ムービーの雰囲気で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：黒・白、グレー #8E8E93、アクセントは青 #0A84FF（小さく）
・フォント：英字は Inter（太さを変えて）、日本語は Noto Sans JP（300/700）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 最初は「ライブラリ」画面：年ごとの写真のグリッド（「1995」「2005」「2015」「2025」の大きな年号と、写真が細かく並ぶ）が上にスクロールし、1つの年がタップされる
　2. 章のタイトル：写真の上に大きな白い文字で「新郎 ○○」、その下に細い文字で「1995 – 2025」。写真の写る場所の地名を小さく
　3. 写真：1枚ずつゆっくり寄りながらクロスフェード。ときどき3枚を並べたコラージュの画面も入れる
　4. コメントは画面左下に小さく、細い白い文字で（例「7歳・運動会」）
　5. 区切りに「〇年前の今日」のカード（角丸の白いカードに写真と日付）
　6. 最後は「新しい思い出が作成されました」の通知 → 結婚式の日付のタイトルカード「{T} ── 本日」
・実在のアプリのロゴや画面は使わず、雰囲気だけを参考にする`,
run(H,t){const [a,b]=nm(t);const S=H.abs({inset:'0',background:'#000'});
  const lib=H.abs({left:'0',top:'0',width:'1600px',height:'2400px'},S);const yrs=['1995','2005','2015','2025'];yrs.forEach((y,yi)=>{H.abs({left:'60px',top:40+yi*560+'px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'80px',color:'#fff'},lib,y);for(let i=0;i<16;i++)pho(H,lib,60+(i%8)*186,150+yi*560+Math.floor(i/8)*186,180,180,['baby','boy','man','couple'][yi]);});
  H.a(lib,[{transform:'translateY(0)'},{transform:'translateY(-1200px)'}],{d:3000,e:E.io,f:'forwards'});
  const m=H.abs({inset:'0',opacity:0});H.a(m,[{opacity:0},{opacity:1}],{d:700,dl:3200});const p1=pho(H,m,0,0,1600,900,'boy');kb(H,p1,3200,6800);H.abs({inset:'0',background:'linear-gradient(transparent 50%,rgba(0,0,0,.6))'},m);
  const ti=H.abs({left:'0',right:'0',top:'330px',textAlign:'center',color:'#fff',opacity:0},m);H.el('div',{fontFamily:F.sans,fontWeight:'700',fontSize:'90px',letterSpacing:'.04em'},ti,'新郎 '+a);H.el('div',{fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'40px',letterSpacing:'.3em',marginTop:'10px'},ti,'1995 – 2025');H.a(ti,[{opacity:0},{opacity:1,offset:.12},{opacity:1,offset:.88},{opacity:0}],{d:5600,dl:3600});
  T(H,m,{left:'60px',bottom:'60px',fontFamily:F.sans,fontWeight:'300',fontSize:'34px',color:'#fff'},'7歳・運動会',7400,'fade');
  const nt=H.abs({left:'50%',top:'30px',width:'640px',marginLeft:'-320px',background:'rgba(40,40,44,.92)',borderRadius:'26px',padding:'18px 26px',display:'flex',gap:'16px',alignItems:'center',fontFamily:F.sans,color:'#fff',opacity:0},null);H.el('div',{width:'54px',height:'54px',borderRadius:'12px',background:'linear-gradient(135deg,#ffcc66,#ff6b8a,#7b6bff)'},nt);const tx=H.el('div',{},nt);H.el('div',{fontWeight:'700',fontSize:'22px'},tx,'新しい思い出が作成されました');H.el('div',{fontSize:'18px',color:'#bbb'},tx,t+' ── 本日');H.a(nt,[{opacity:0,transform:'translateY(-40px)'},{opacity:1,transform:'none'}],{d:500,dl:8600,e:E.back})}});

/* WSTORY：映画・物語風 */
defW({no:'07',cat:'WSTORY',name:'8ミリフィルム風',en:'Vintage Film',lead:'カタカタと回るフィルムのざらつきと、セピア色の思い出。いちばん泣ける、王道のプロフィール。',bg:'#120d08',
use:'<b>感動的に仕上げたいふたり、両親への感謝を伝えたいふたり</b>に。古い写真ほど味が出るので、子どもの頃の写真が多い方におすすめ。',
tips:['子どもの頃はセピア、大人になるにつれて色が戻っていく演出にすると、時間の流れが伝わります','フィルムの傷や揺れは「少しだけ」。強すぎると写真が見にくくなります','コメントは明朝体で短く。「ありがとう」を言いたい相手を最後にまとめると泣けます'],
p:`古い8ミリフィルムの映写の雰囲気で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・見た目：フィルムのざらつき（ノイズ）、細い縦の傷、ゆっくりした明るさのちらつき、画面のわずかな揺れ。画面の左右にフィルムの送り穴の帯
・色：子どもの頃の写真はセピア、10代は色あせたカラー、大人〜ふたりの写真は自然なカラー（年代とともに色が戻っていく）
・フォント：英字は Cormorant Garamond、日本語は Shippori Mincho B1（500）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 最初に、映写機のカウントダウン（円と線が回る「5・4・3・2・1」のリーダー）
　2. 章のタイトル：黒い画面に、白い明朝体で「新郎　○○」と生年月日、小さく英字で「Chapter 1」
　3. 写真：1枚6〜8秒、ゆっくり寄る。写真の下に明朝体の短いコメント（例「1995年　春　〇〇病院にて」）
　4. 場面の区切りでは、フィルムが焼けるように白く光ってから次の章へ
　5. ゲストへの感謝：写真をフィルムの帯のように横に流し、その上にメッセージ
　6. エンディング：フィルムが終わり、送り穴の帯がカタカタと流れ去って、「Fin. ── and our story continues」`,
run(H,t){const S=H.abs({inset:'0',background:'#120d08'});
  const ld=H.abs({inset:'0',display:'flex',alignItems:'center',justifyContent:'center',background:'#d9cdb4'},S);const ci=H.el('div',{width:'520px',height:'520px',borderRadius:'50%',border:'8px solid #222',position:'relative',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.serif,fontWeight:'700',fontSize:'300px',color:'#222'},ld,'3');const sw=H.abs({left:'252px',top:'0',width:'8px',height:'252px',background:'#222',transformOrigin:'50% 100%'},ci);H.a(sw,[{rotate:'0deg'},{rotate:'360deg'}],{d:800,i:3,e:E.lin});H.wait(800,()=>{ci.firstChild.textContent='2'});H.wait(1600,()=>{ci.firstChild.textContent='1'});
  ci.firstChild||ci.insertBefore(document.createTextNode('3'),sw);H.a(ld,[{opacity:1},{opacity:0}],{d:200,dl:2400,f:'forwards'});
  const fl=H.abs({left:'90px',right:'90px',top:'0',bottom:'0',opacity:0},S);H.a(fl,[{opacity:0},{opacity:1}],{d:600,dl:2500});const ph=pho(H,fl,0,0,1420,900,'baby');ph.style.filter='sepia(.9) contrast(1.1) brightness(.95)';kb(H,ph,2500,7500);
  T(H,fl,{left:'0',right:'0',top:'760px',textAlign:'center',fontFamily:F.min,fontWeight:'500',fontSize:'44px',letterSpacing:'.2em',color:'#f6efdf',textShadow:'0 2px 10px #000'},'1995年　春　〇〇病院にて',4000,'fade');
  [0,1].forEach(i=>{const s=H.abs({left:i?'1510px':'0',top:'-100px',width:'90px',height:'1100px',background:'#0a0704',backgroundImage:'linear-gradient(#e8dcc0 0 40px,transparent 40px)',backgroundSize:'40px 110px',backgroundPosition:'25px 0',backgroundRepeat:'repeat-y'},S);H.a(s,[{transform:'translateY(0)'},{transform:'translateY(110px)'}],{d:300,i:Infinity,e:E.lin})});
  const gr=H.abs({inset:'0',pointerEvents:'none',opacity:.18,background:'repeating-radial-gradient(circle at 30% 40%,#fff 0 1px,transparent 1px 3px)'});H.a(gr,[{transform:'translate(0,0)'},{transform:'translate(-6px,4px)'},{transform:'translate(4px,-3px)'}],{d:150,i:Infinity,e:'steps(3)'});
  for(let i=0;i<3;i++){const sc=H.abs({left:rnd(200,1400)+'px',top:'0',width:'2px',height:'900px',background:'rgba(255,255,255,.35)'});H.a(sc,[{opacity:0},{opacity:1},{opacity:0}],{d:400,dl:rnd(2500,9000),i:3})}
  const fk=H.abs({inset:'0',background:'#000',pointerEvents:'none'});H.a(fk,[{opacity:0},{opacity:.12},{opacity:.02},{opacity:.1}],{d:400,i:Infinity,e:'steps(4)'})}});

defW({no:'08',cat:'WSTORY',name:'めくれるアルバム',en:'Photo Album',lead:'革のアルバムのページがめくれ、手書きのメモと写真が並ぶ。家族みんなで見返したくなるナチュラル系。',bg:'#5a3b2a',
use:'<b>ナチュラル・ガーデン・レストランウエディング</b>に。手作り感があり、両親世代にも好評の定番スタイルです。',
tips:['1ページに写真2〜3枚。少し傾けて、角にフォトコーナーやマスキングテープを付けるとアルバムらしくなります','手書き風の文字で、家族のひとこと（母より）を添えると温かくなります','ページの端に年号のインデックス（つまみ）を付けると、どの時代か一目で分かります'],
p:`革の表紙のフォトアルバムをめくっていく雰囲気で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・見た目：木の机の上に置いた、開いたアルバムを少し斜め上から見た構図。ページはクラフト紙色 #EFE4D0、表紙はこげ茶の革
・フォント：手書き風の Klee One（600）、英字は Great Vibes（タイトル用）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 最初は閉じたアルバム：革の表紙に、金の箔押し風の文字「Our Story」と「{T}」。表紙が開く
　2. 見開きごとに写真2〜4枚：少し傾けて、角に黒いフォトコーナーやマスキングテープ。写真の下に手書きのメモ（年齢・ひとこと）
　3. 写真が1枚ずつ、手で置かれたように少し回転しながら着地。最後に置かれた写真へゆっくり寄って、次のページへ
　4. ページのめくりは、紙のたわみと影のある立体的な動き
　5. ページの右端に、年代のインデックスのつまみ（「0〜6歳」「7〜12歳」…）。今の章のつまみが少し飛び出す
　6. ふたりの章は、写真の周りにシールやチケットの半券、押し花の素材をあしらう
　7. 最後のページは空白で「ここからの ページは、みなさんと一緒に」→ アルバムが閉じて終わる`,
run(H,t){const S=H.abs({inset:'0',background:'repeating-linear-gradient(90deg,#8a5a3c 0 140px,#7d5034 140px 144px)'});
  const al=H.abs({left:'120px',top:'70px',width:'1360px',height:'760px',background:'#4a2c1e',borderRadius:'16px',boxShadow:'0 30px 60px rgba(0,0,0,.4)'},S);
  const L=H.abs({left:'20px',top:'20px',width:'660px',height:'720px',background:'#efe4d0'},al),Rp=H.abs({left:'680px',top:'20px',width:'660px',height:'720px',background:'#efe4d0'},al);
  const put=(pg,x,y,w,h,k,r,dl,memo)=>{const c=H.abs({left:x+'px',top:y+'px',width:w+'px',height:h+'px',background:'#fff',padding:'12px',boxSizing:'border-box',boxShadow:'0 6px 14px rgba(0,0,0,.2)',rotate:r+'deg'},pg);pho(H,c,12,12,w-24,h-24,k);H.a(c,[{opacity:0,transform:'translateY(-60px) scale(1.15) rotate(8deg)'},{opacity:1,transform:'none'}],{d:600,dl,e:E.back});
    [[0,0],[1,0],[0,1],[1,1]].forEach(q=>H.abs({left:q[0]?w-28+'px':'0',top:q[1]?h-28+'px':'0',width:'28px',height:'28px',background:'#222',clipPath:q[0]===q[1]?'polygon(0 0,100% 0,0 100%)':'polygon(0 0,100% 0,100% 100%)',transform:q[0]===q[1]&&q[0]?'rotate(180deg)':q[0]?'none':'rotate(-90deg)'},c));
    T(H,pg,{left:x+10+'px',top:y+h+14+'px',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'26px',color:'#5a4030',rotate:r+'deg'},memo,dl+400,'fade')};
  put(L,60,60,330,250,'baby',-4,400,'0歳　はじめての笑顔');put(L,300,380,320,240,'boy',3,1000,'5歳　七五三');
  put(Rp,60,60,330,250,'boy',2,1800,'8歳　虫取りの夏');put(Rp,320,360,300,260,'boy',-3,2500,'12歳　卒業式');
  ['0〜6歳','7〜12歳','13〜18歳','19歳〜'].forEach((x,i)=>{const tb=H.abs({left:i===1?'1340px':'1328px',top:100+i*120+'px',width:'60px',height:'100px',background:['#e8b4a0','#a7c4a0','#a0b8d8','#e8d39a'][i],borderRadius:'0 10px 10px 0',writingMode:'vertical-rl',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'20px',color:'#4a2c1e',display:'flex',alignItems:'center',justifyContent:'center'},al,x)});
  const fl=H.abs({left:'680px',top:'20px',width:'660px',height:'720px',background:'#efe4d0',transformOrigin:'0 50%',boxShadow:'0 0 40px rgba(0,0,0,.3)',opacity:0},al);H.a(fl,[{opacity:1,transform:'perspective(2600px) rotateY(0deg)'},{opacity:1,transform:'perspective(2600px) rotateY(-180deg)'}],{d:1500,dl:6500,e:E.io});H.a(fl,[{opacity:1},{opacity:0}],{d:10,dl:7300,f:'forwards'})}});

defW({no:'09',cat:'WSTORY',name:'地図をたどる旅',en:'Journey Map',lead:'生まれた町から式場まで、地図の上に線が伸びていく。ふたりの道がひとつになる瞬間が見どころ。',bg:'#f3ecdf',
use:'<b>出身地が離れているふたり、遠方からのゲストが多い披露宴</b>に。地元の友人が「うちの町だ！」と喜びます。',
tips:['地図は正確でなくてOK。手描き風の簡単な地図のほうが温かく、見やすくなります','ピンの場所には写真を丸く切り抜いて、吹き出しのように出すと楽しい','ふたりの線が合流する場所（出会いの地）で、ハートのマークを弾ませましょう'],
p:`地図の上を旅していくような演出で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・見た目：アンティークの紙の地図風。背景はクリーム色 #F3ECDF、海は淡い水色、陸地は淡いベージュ、細い茶色の線で道や川。地図は手描き風に簡略化（実在の地図の正確さは不要）
・フォント：英字は Playfair Display（イタリック）、日本語は Zen Maru Gothic（500/900）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 最初は地図の全体：ふたりの出身地と式場にピンが立ち、タイトル「ふたりの道のり」
　2. 新郎の章：新郎の出身地に寄って、点線の道が少しずつ伸びていく。道の途中のピン（生まれた病院・小学校・部活の大会の場所・大学の町など）で止まり、写真が丸い吹き出しで出て、コメントが表示される
　3. 新婦の章：別の色の点線で、同じように
　4. ふたりの章：2本の線が出会いの場所で合流し、ハートが弾む。そこからは1本の太い線になって、デートの場所・旅行先・プロポーズの場所をたどる
　5. 最後は式場のピンに着き、地図が引いて全体が見える。2本の道が1本になった軌跡の上に「ここから、ふたりの新しい道へ」と日付
　6. 地図の移動は、ゆっくり寄ったり引いたりするカメラワークで（急な移動はしない）`,
run(H,t){const S=H.abs({inset:'0',background:'#bfdbe8'});const W=H.abs({left:'0',top:'0',width:'1600px',height:'900px',transformOrigin:'50% 50%'},S);
  const sv=H.svg(1600,900,W);H.sv('path',{d:'M180,820 C200,640 320,560 420,520 C520,480 560,380 700,330 C820,290 900,200 1060,170 C1200,140 1320,90 1460,120 C1540,200 1480,300 1380,360 C1260,430 1160,470 1080,560 C980,660 860,700 720,760 C560,830 380,880 180,820 Z',fill:'#f3ecdf',stroke:'#c9b79a','stroke-width':4},sv);
  const pth=(d,c,dl)=>{const p=H.sv('path',{d,stroke:c,'stroke-width':10,fill:'none','stroke-linecap':'round','stroke-dasharray':'2 22'},sv);const L=1400;p.style.clipPath='none';const m=H.sv('path',{d,stroke:'#f3ecdf','stroke-width':16,fill:'none'},sv);m.style.strokeDasharray=L;m.style.strokeDashoffset=0;m.animate([{strokeDashoffset:0},{strokeDashoffset:-L}],{duration:3000,delay:dl,fill:'both',easing:'linear'});sv.appendChild(m)};
  pth('M300,760 C400,700 520,640 640,560 C720,500 760,470 820,440','#3a6ea5',800);pth('M1300,330 C1200,350 1100,380 1020,400 C940,420 880,430 820,440','#d9637a',1600);
  const pin=(x,y,c,lab,k,dl)=>{const p=R(H,W,{left:x-30+'px',top:y-80+'px',width:'60px',height:'80px'},dl,'drop');H.abs({left:'0',top:'0',width:'60px',height:'60px',borderRadius:'50% 50% 50% 0',rotate:'-45deg',background:c},p);T(H,W,{left:x-90+'px',top:y+6+'px',width:'180px',textAlign:'center',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'24px',color:'#5a4030'},lab,dl+200,'fade');if(k){const b=pho(H,W,x-80,y-260,160,160,k,dl+300,{borderRadius:'50%',border:'6px solid #fff',boxShadow:'0 6px 16px rgba(0,0,0,.2)'})}};
  pin(300,760,'#3a6ea5','新郎の町','boy',600);pin(1300,330,'#d9637a','新婦の町','girl',1400);pin(820,440,'#e8a33a','出会いの場所','couple',4800);
  const hh=H.abs({left:'790px',top:'400px',fontSize:'70px',color:'#ff4f7a',opacity:0},W,'♥');H.a(hh,[{opacity:0,transform:'scale(0)'},{opacity:1,transform:'scale(1.4)'},{opacity:1,transform:'scale(1)'}],{d:700,dl:5400,e:E.back});
  T(H,S,{left:'60px',top:'40px',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'56px',color:'#5a4030'},'ふたりの道のり',200,'left');T(H,S,{left:'64px',top:'110px',fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'30px',color:'#8a6a4a'},t,500,'fade');
  H.a(W,[{transform:'scale(1)'},{transform:'scale(1.25) translate(-40px,40px)',offset:.5},{transform:'scale(1)'}],{d:10000,e:E.soft})}});

defW({no:'10',cat:'WSTORY',name:'雑誌の表紙風',en:'Magazine Covers',lead:'各年の自分が、ファッション誌の表紙に。「1998年 夏号」「特集：わんぱく盛り」の見出しで笑いを誘う。',bg:'#e9e4dc',
use:'<b>おしゃれに、少し笑いも取りたいふたり</b>に。1枚ずつの写真が「表紙」になるので、写真の枚数が少なくても成立します。',
tips:['雑誌の名前をふたりの名前にして（例「NOBU」）、号数を年号にすると統一感が出ます','見出しは「特集：〇〇」「人気No.1 〇〇」など雑誌の言い回しで、小ネタを仕込むのがコツ','表紙は1枚6秒、ページをめくる動きでつなぐとテンポよく見られます'],
p:`ファッション誌の表紙が次々に切り替わる演出で、結婚式のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・見た目：画面の中央に、縦長の雑誌の表紙（A4の比率）。背景は淡いグレージュ #E9E4DC で、表紙に少し影。表紙が切り替わるときは、ページをめくる動き
・フォント：雑誌名は Playfair Display（900）または Bodoni 風、見出しは Noto Sans JP（900）と Montserrat
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 新郎の雑誌名は新郎の名前（例「NOBU」）、新婦の雑誌名は新婦の名前で、表紙の上部に大きく。写真が文字の手前に少し重なる配置
　2. 表紙ごとに「1998年 夏号」「Vol.3」、バーコード風の飾り、価格の代わりに年齢（例「8歳」）
　3. 見出しは3〜4本：特集の大見出し（例「特集：わんぱく盛り、夏。」）と、小見出し（例「人気No.1 虫取りスポット」「今月の好物：からあげ」）
　4. 時代ごとに表紙のデザインの色を変える（子ども：ポップ、10代：ストリート、大人：モード）
　5. ふたりの章は、ふたりの名前を合わせた雑誌（例「NOBU & YUI」）の特別号：「創刊記念号」「総力特集：ふたりの歩み」
　6. 最後は「最新号：本日発売」と結婚式の日付の表紙`,
run(H,t){const [a,b]=nm(t);const S=H.abs({inset:'0',background:'#e9e4dc'});
  const cov=(k,yr,age,head,subs,col,dl,dur)=>{const c=H.abs({left:'540px',top:'40px',width:'520px',height:'735px',background:col,overflow:'hidden',boxShadow:'0 30px 60px rgba(0,0,0,.25)',opacity:0},S);
    const ph=pho(H,c,0,120,520,615,k);H.abs({left:'0',right:'0',top:'14px',textAlign:'center',fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:'128px',lineHeight:'1',letterSpacing:'-.02em',color:'#fff',mixBlendMode:'normal',textShadow:'0 2px 10px rgba(0,0,0,.15)'},c,a.toUpperCase());
    H.abs({left:'24px',top:'150px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'20px',color:'#fff',textShadow:'0 1px 6px rgba(0,0,0,.4)'},c,yr);
    H.abs({left:'24px',top:'440px',width:'300px',fontFamily:F.sans,fontWeight:'900',fontSize:'40px',lineHeight:'1.2',color:'#fff',textShadow:'0 2px 10px rgba(0,0,0,.4)',whiteSpace:'pre-line'},c,head);
    subs.forEach((s,i)=>H.abs({right:'24px',top:200+i*80+'px',width:'190px',textAlign:'right',fontFamily:F.sans,fontWeight:'700',fontSize:'20px',lineHeight:'1.3',color:'#fff',textShadow:'0 1px 6px rgba(0,0,0,.5)'},c,s));
    H.abs({right:'24px',bottom:'22px',width:'90px',height:'50px',background:'repeating-linear-gradient(90deg,#000 0 3px,#fff 3px 5px,#000 5px 6px,#fff 6px 9px)',border:'4px solid #fff'},c);H.abs({left:'24px',bottom:'26px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'24px',color:'#fff'},c,age);
    H.a(c,[{opacity:0,transform:'perspective(2000px) rotateY(60deg) translateX(200px)'},{opacity:1,transform:'none',offset:.12},{opacity:1,transform:'none',offset:.88},{opacity:0,transform:'perspective(2000px) rotateY(-70deg) translateX(-200px)'}],{d:dur,dl,e:E.io});kb(H,ph,dl,dur)};
  cov('baby','1995年 春号 Vol.1','0歳','特集：\nはじめまして、\nこの世界。',['人気No.1\nミルクの時間','今月の好物：\nおかゆ'],'#f6b4a0',0,3600);
  cov('boy','2003年 夏号 Vol.8','8歳','特集：\nわんぱく盛り、\n夏。',['人気No.1\n虫取りスポット','今月の好物：\nからあげ','付録：\n夏休みの絵日記'],'#7cc4e8',3300,3600);
  cov('man','2020年 秋号 Vol.25','25歳','特集：\n大人の\nはじまり。',['この秋の\n通勤コーデ','運命の出会い\nまで、あと1年'],'#2b2b2b',6600,3600);
  T(H,S,{left:'90px',top:'360px',fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'52px',color:'#5a4a3c'},'Profile',200,'left');T(H,S,{left:'92px',top:'430px',fontFamily:F.sans,fontWeight:'700',fontSize:'26px',color:'#5a4a3c'},'新郎 '+a,400,'fade')}});
