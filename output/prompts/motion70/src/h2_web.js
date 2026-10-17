/* ===== WEBSITE 11-20 ===== */
defH({no:'11',cat:'SHOP',name:'ラグジュアリー',en:'Black & Gold Luxury',lead:'黒と金、細い線、ゆったりした余白。ジュエリー・高級品の世界観。',text:'MAISON LUNE',bg:'#0b0a08',
use:'<b>ジュエリー・時計・高級化粧品・オーダーメイド</b>に。「高いけれど欲しい」と思わせる世界観づくりに。',
tips:['金色は単色ではなく、明るい金→暗い金のグラデーションにすると本物らしい','文字は細く、字間を広く（0.2〜0.3em）とると高級感が出ます','動きはゆっくり（1.5秒以上）。速い動きは安っぽく見えます'],
p:`黒と金を基調にした、ゆったりと上品な「ラグジュアリー」スタイルのブランドサイトを作ってください。
・ブランド名：{T}（ハンドメイドジュエリーのブランドという想定）
・配色：背景 #0B0A08、金 #D9B76E → #8C6A2F のグラデーション、文字 #EFE9DD、サブ文字 #8F877A
・フォント：欧文 Cormorant Garamond（字間0.25em）、日本語 Shippori Mincho B1 500
・ファーストビュー：
　・中央に、宝石の代わりの円形のビジュアル（金のグラデーションの輪の中に、光がゆっくり回る radial-gradient）。その周りを細い金の円（1px）が2重に回る
　・上に小さく「COLLECTION 2026」、中央に大きくブランド名、下に日本語のコピー「ひとつの光を、一生ものに。」
　・左右の端に、縦書きの細い文字「HANDMADE IN KYOTO」「SINCE 2012」
　・下部中央に、細い縦線がゆっくり伸び縮みする「SCROLL」
・セクション：ブランドストーリー → コレクション（商品カード、ホバーで光が走る）→ 職人のこだわり → 取扱店舗・オンラインストア → ニュースレター → フッター
・動き：すべてゆっくり（1.5秒以上）。光の反射（白い帯）が数秒に1回、金の文字や枠を斜めに走る`,
run(H,t){const gold='linear-gradient(135deg,#f3dfa2,#d9b76e 40%,#8c6a2f)';nav(H,{logo:'',items:['COLLECTION','STORY','STORE'],f:F.serif});
  const c=H.abs({left:'650px',top:'200px',width:'300px',height:'300px',borderRadius:'50%',background:gold,boxShadow:'0 0 80px rgba(217,183,110,.35)'});const in1=H.abs({inset:'14px',borderRadius:'50%',background:'radial-gradient(circle at 30% 30%,#fff7d6,#0b0a08 70%)'},c);H.a(in1,[{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{d:8000,e:E.lin,i:Infinity});H.a(c,[{opacity:0,transform:'scale(.8)'},{opacity:1,transform:'scale(1)'}],{d:1800});
  [380,460].forEach((s,i)=>{const r=H.abs({left:800-s/2+'px',top:350-s/2+'px',width:s+'px',height:s+'px',borderRadius:'50%',border:'1px solid rgba(217,183,110,.5)',borderTopColor:'transparent'});H.a(r,[{transform:'rotate(0)'},{transform:`rotate(${i?-360:360}deg)`}],{d:14000,e:E.lin,i:Infinity})});
  const T=H.abs({left:'0',right:'0',top:'590px',textAlign:'center',display:'flex',flexDirection:'column',gap:'14px',alignItems:'center'});H.el('div',{fontFamily:F.serif,fontSize:'18px',letterSpacing:'.4em',color:'#8f877a'},T,'COLLECTION 2026');
  const nm=H.el('div',{fontFamily:F.serif,fontWeight:'500',fontSize:'84px',letterSpacing:'.25em',backgroundImage:gold,WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'},T,t);H.el('div',{fontFamily:F.min,fontWeight:'500',fontSize:'24px',letterSpacing:'.2em',color:'#efe9dd'},T,'ひとつの光を、一生ものに。');H.a(T,[{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{d:1800,dl:600});
  [['HANDMADE IN KYOTO',{left:'60px'}],['SINCE 2012',{right:'60px'}]].forEach(([x,css])=>H.abs(Object.assign({top:'300px',writingMode:'vertical-rl',fontFamily:F.serif,fontSize:'16px',letterSpacing:'.4em',color:'#8f877a'},css),null,x));
}});

defH({no:'12',cat:'SHOP',name:'Y2Kポップ',en:'Y2K Chrome Pop',lead:'クロームの文字、キラキラ、パステル。平成レトロなアパレル向け。',text:'GLITTER CLUB',bg:'#f6e8ff',
use:'<b>アパレル・アクセサリー・コスメ・Z世代向けブランド</b>に。2000年代のキラキラ感は、今の10〜20代に刺さるトレンドです。',
tips:['クロームの文字は「白→灰→白→濃い灰」の縞のグラデーションで作れます','キラキラ（4方向の星）は数個を点滅させるだけで十分','角の丸いシャボン玉のような図形をふわふわ浮かべると一気にY2K'],
p:`クロームの文字とキラキラ、パステルカラーが特徴の「Y2Kポップ」スタイルのアパレルブランドサイトを作ってください。
・ブランド名：{T}（10〜20代向けのアパレル・雑貨ブランドという想定）
・配色：背景 #F6E8FF → #DDF3FF のグラデーション、ピンク #FF6FD8、水色 #7FD8FF、文字 #2B1B3D
・フォント：ロゴはクローム風（太い欧文 Dela Gothic One に、白〜灰の縞のグラデーションを background-clip: text）、本文 Zen Kaku Gothic New
・ファーストビュー：
　・中央に巨大なクロームのロゴ。数秒ごとに光が横切る
　・ロゴのまわりに4方向の星（✦）のキラキラを8個、ばらばらのタイミングで点滅・回転
　・シャボン玉のような半透明の丸（虹色の縁）が5個ふわふわ上昇
　・下にピンクの丸いボタン「NEW ARRIVALS」、左下に「2026 SUMMER COLLECTION」
・セクション：新作アイテム（ステッカー風の傾いたカード）→ ルックブック → ショップ一覧 → インスタグラムの投稿風グリッド → ニュースレター → フッター
・動き：カードはホバーで少し回転して浮く。ボタンはホバーでぷるっと揺れる`,
run(H,t){H.abs({inset:'0',background:'linear-gradient(135deg,#f6e8ff,#ddf3ff)'});nav(H,{logo:'✦',items:['SHOP','LOOKBOOK','ABOUT'],c:'#2b1b3d',f:F.smono});
  for(let i=0;i<5;i++){const s=rnd(90,180);const b=H.abs({left:rnd(100,1500)+'px',top:'950px',width:s+'px',height:s+'px',borderRadius:'50%',border:'3px solid rgba(255,255,255,.9)',background:'radial-gradient(circle at 30% 30%,rgba(255,255,255,.8),rgba(127,216,255,.2) 50%,rgba(255,111,216,.25))',boxShadow:'inset 0 0 20px rgba(255,111,216,.4)'});H.a(b,[{transform:'translateY(0)'},{transform:'translateY(-1150px)'}],{d:rnd(6000,9000),dl:rnd(0,2000),e:E.lin,i:Infinity})}
  const chrome='linear-gradient(180deg,#ffffff 0%,#9aa0ad 32%,#ffffff 48%,#3f4452 54%,#b9bdc8 78%,#ffffff 100%)';const sz=fs(t,190,1350);
  const L=H.abs({left:'0',right:'0',top:'270px',textAlign:'center'});const lg=H.el('div',{fontFamily:F.heavy,fontSize:sz+'px',backgroundImage:chrome,WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',WebkitTextStroke:'3px #2b1b3d',filter:'drop-shadow(0 6px 0 #ff6fd8) drop-shadow(0 12px 20px rgba(43,27,61,.25))',display:'inline-block'},L,t);H.a(lg,[{transform:'scale(.6)',opacity:0},{transform:'scale(1)',opacity:1}],{d:900,e:E.back});
  for(let i=0;i<8;i++){const s=H.abs({left:rnd(250,1350)+'px',top:rnd(180,620)+'px',fontSize:rnd(30,70)+'px',color:i%2?'#ff6fd8':'#7fd8ff'},null,'✦');H.a(s,[{transform:'scale(0) rotate(0)',opacity:0},{transform:'scale(1) rotate(90deg)',opacity:1},{transform:'scale(0) rotate(180deg)',opacity:0}],{d:1600,dl:rnd(0,1600),i:Infinity,e:'ease-in-out'})}
  const bt=H.abs({left:'0',right:'0',top:'600px',display:'flex',justifyContent:'center'});H.el('div',{padding:'18px 44px',borderRadius:'999px',background:'#ff6fd8',color:'#fff',fontFamily:F.smono,fontSize:'22px',boxShadow:'0 8px 0 #c94aa8'},bt,'NEW ARRIVALS ✦');rise(H,bt,700);
  H.abs({left:'70px',bottom:'50px',fontFamily:F.smono,fontSize:'18px',color:'#2b1b3d'},null,'2026 SUMMER COLLECTION');
}});

defH({no:'13',cat:'SHOP',name:'オーガニックカフェ',en:'Organic Cafe',lead:'やわらかい曲線と葉っぱ、湯気。手しごと感のあるお店に。',text:'木もれび珈琲',bg:'#e7e9df',
use:'<b>カフェ・パン屋・自然食品・ハンドメイドのお店</b>に。角のない形とやさしい色で、「行ってみたい」と思わせる温かさを出します。',
tips:['写真の枠を丸みのある有機的な形（blob）にするだけで、ぐっと手しごと感が出ます','緑は彩度を落としたセージグリーンにすると落ち着いた印象に','湯気や葉のゆらぎなど「小さな動き」を1つだけ入れると心地いい'],
p:`やわらかい曲線と葉っぱのモチーフが温かい「オーガニックカフェ」スタイルのお店のサイトを作ってください。
・店名：{T}（自家焙煎のコーヒーと焼き菓子のカフェという想定）
・配色：背景 #E7E9DF、セージグリーン #6E8B6B、深緑 #2F3E2E、テラコッタ #C77B58、白 #FBFBF7
・フォント：見出し Zen Kaku Gothic New 700（またはやわらかい丸ゴシック）、英字 Cormorant Garamond の斜体
・ファーストビュー：
　・右側に、有機的なかたち（角のない不定形、border-radius の8値で作る）の大きな写真枠（グラデーションで代用）。枠の形がゆっくり呼吸するように変わる
　・枠の上に、カップから立ちのぼる湯気（白い半透明の曲線3本がゆらゆら上昇）
　・左側に、英字の斜体「slow coffee, slow days」と見出し「ひと息つける、まちの小さな珈琲店。」、営業時間と「メニューを見る」ボタン
　・葉っぱのイラスト（SVG）を2〜3枚、ゆっくり揺らす
・セクション：お店のこだわり → メニュー（写真付きカード、価格）→ 焼き菓子のオンライン注文 → アクセス（地図の枠と営業時間）→ Instagram → フッター
・動き：ふわっとしたフェードインのみ。激しい動きは使わない`,
run(H,t){nav(H,{logo:t,items:['メニュー','こだわり','アクセス'],c:'#2f3e2e',lf:F.zen,cta:'オンラインショップ',cb:'#2f3e2e',cc:'#fbfbf7'});
  const fr=H.abs({left:'820px',top:'150px',width:'640px',height:'640px',background:'linear-gradient(160deg,#c9a27a,#7b5a3c 55%,#3b2c22)',overflow:'hidden'});H.a(fr,[{borderRadius:'58% 42% 55% 45% / 45% 55% 45% 55%'},{borderRadius:'45% 55% 42% 58% / 55% 45% 58% 42%'},{borderRadius:'58% 42% 55% 45% / 45% 55% 45% 55%'}],{d:7000,e:'ease-in-out',i:Infinity});H.a(fr,[{opacity:0,transform:'scale(.92)'},{opacity:1,transform:'scale(1)'}],{d:1400,f:'none'});
  const cup=H.abs({left:'1040px',top:'470px',width:'200px',height:'130px',borderRadius:'0 0 90px 90px',background:'#fbfbf7'});H.abs({left:'190px',top:'20px',width:'60px',height:'60px',borderRadius:'50%',border:'14px solid #fbfbf7'},cup);
  const sv=H.svg(1600,900);for(let i=0;i<3;i++){const p=H.sv('path',{d:`M ${1100+i*40} 450 C ${1080+i*40} 400, ${1130+i*40} 360, ${1105+i*40} 300`,fill:'none',stroke:'rgba(255,255,255,.7)','stroke-width':6,'stroke-linecap':'round'},sv);H.a(p,[{transform:'translateY(20px)',opacity:0},{transform:'translateY(-10px)',opacity:.9,offset:.5},{transform:'translateY(-40px)',opacity:0}],{d:3000,dl:i*600,i:Infinity,e:'ease-in-out'})}
  const L=H.abs({left:'120px',top:'250px',width:'640px',display:'flex',flexDirection:'column',gap:'22px',color:'#2f3e2e'});H.el('div',{fontFamily:F.serif,fontStyle:'italic',fontSize:'34px',color:'#c77b58'},L,'slow coffee, slow days');const h=H.el('div',{fontFamily:F.zen,fontWeight:'700',fontSize:'60px',lineHeight:'1.35'},L,'ひと息つける、\nまちの小さな珈琲店。');h.style.whiteSpace='pre-line';
  H.el('div',{fontSize:'20px',color:'#6e8b6b'},L,'OPEN 8:00 – 18:00 ／ 水曜定休');H.el('div',{alignSelf:'flex-start',padding:'16px 32px',borderRadius:'999px',background:'#6e8b6b',color:'#fbfbf7',fontWeight:'700',fontSize:'19px'},L,'メニューを見る');[...L.children].forEach((e,i)=>rise(H,e,300+i*180,1200));
  [[90,700,20],[700,120,-30]].forEach(([x,y,r],i)=>{const lf=H.abs({left:x+'px',top:y+'px',width:'120px',height:'60px',borderRadius:'0 100% 0 100%',background:'#6e8b6b',transform:`rotate(${r}deg)`});H.a(lf,[{transform:`rotate(${r}deg)`},{transform:`rotate(${r+10}deg)`},{transform:`rotate(${r}deg)`}],{d:4000+i*800,e:'ease-in-out',i:Infinity})});
}});

defH({no:'14',cat:'SHOP',name:'スキンケアD2C',en:'Clean Beauty D2C',lead:'淡い色、透明感のあるボトル、成分のタグ。コスメ通販の王道。',text:'hada lab.',bg:'#f8eeee',
use:'<b>スキンケア・コスメ・サプリ・D2Cブランド</b>の通販サイトに。清潔感と「成分へのこだわり」を同時に伝えられます。',
tips:['商品写真の後ろに、淡い色の大きな円を置くと商品が引き立ちます','成分は丸いタグ（チップ）にして並べると、こだわりが一目で伝わります','購入ボタンは画面下に固定すると、スマホでの購入率が上がります'],
p:`透明感のある淡い色づかいと、商品ボトルが主役の「クリーンビューティー」スタイルのスキンケア通販サイトを作ってください。
・ブランド名：{T}（敏感肌向けのスキンケアブランドという想定）
・配色：背景 #F8EEEE、淡いピンク #F2D4D4、くすみローズ #C9878A、文字 #3D2F30、白 #FFFFFF
・フォント：英字 Cormorant Garamond、日本語 Zen Kaku Gothic New（細め、字間0.08em）
・ファーストビュー：
　・中央右に、CSSで描いた化粧水のボトル（すりガラスのような半透明のボトル＋白いキャップ、光の反射の線）。後ろに淡いピンクの大きな円。ボトルはゆっくり上下に浮遊
　・ボトルのまわりに、小さな泡（白い丸）がゆっくり立ちのぼる
　・左に、英字の小見出し「for sensitive skin」と見出し「肌が、ほっとする。」、説明文、「購入する ¥3,980」ボタン
　・成分のタグ（丸い枠）「セラミド」「ヒアルロン酸」「無香料」「アルコールフリー」を並べる
・セクション：ブランドの想い → 商品ラインナップ → 成分のこだわり（図解）→ 使い方3ステップ → お客様の声（星評価）→ 定期便の案内 → FAQ → フッター。スマホでは画面下に購入ボタンを固定
・動き：やわらかいフェードと浮遊のみ`,
run(H,t){nav(H,{logo:t,items:['商品','成分','定期便'],c:'#3d2f30',lf:F.serif,ls:'32px',cta:'カート (0)',cb:'#3d2f30',cc:'#fff'});
  H.abs({left:'920px',top:'150px',width:'560px',height:'560px',borderRadius:'50%',background:'#f2d4d4'});
  const bt=H.abs({left:'1100px',top:'230px',width:'200px',height:'440px'});H.abs({left:'60px',top:'0',width:'80px',height:'70px',borderRadius:'10px 10px 4px 4px',background:'#fff',boxShadow:'0 4px 10px rgba(0,0,0,.08)'},bt);
  const body=H.abs({left:'0',top:'60px',width:'200px',height:'380px',borderRadius:'40px',background:'linear-gradient(90deg,rgba(255,255,255,.55),rgba(255,255,255,.85) 30%,rgba(255,255,255,.5) 70%,rgba(255,255,255,.75))',border:'1px solid rgba(255,255,255,.9)',boxShadow:'0 30px 60px rgba(201,135,138,.35)',display:'flex',alignItems:'center',justifyContent:'center'},bt);H.el('div',{fontFamily:F.serif,fontSize:'30px',color:'#c9878a',writingMode:'vertical-rl',letterSpacing:'.2em'},body,t);H.abs({left:'30px',top:'40px',width:'10px',height:'280px',borderRadius:'5px',background:'rgba(255,255,255,.9)'},body);
  H.a(bt,[{transform:'translateY(0)'},{transform:'translateY(-18px)'},{transform:'translateY(0)'}],{d:4000,e:'ease-in-out',i:Infinity});H.a(bt,[{opacity:0},{opacity:1}],{d:1200,f:'none'});
  for(let i=0;i<8;i++){const s=rnd(10,26);const b=H.abs({left:rnd(950,1450)+'px',top:'760px',width:s+'px',height:s+'px',borderRadius:'50%',border:'2px solid #fff',background:'rgba(255,255,255,.4)'});H.a(b,[{transform:'translateY(0)',opacity:0},{opacity:1,offset:.2},{transform:'translateY(-600px)',opacity:0}],{d:rnd(4000,6000),dl:rnd(0,3000),i:Infinity,e:E.lin})}
  const L=H.abs({left:'120px',top:'240px',width:'680px',display:'flex',flexDirection:'column',gap:'24px',color:'#3d2f30'});H.el('div',{fontFamily:F.serif,fontStyle:'italic',fontSize:'30px',color:'#c9878a'},L,'for sensitive skin');H.el('div',{fontFamily:F.zen,fontWeight:'700',fontSize:'66px',letterSpacing:'.04em',whiteSpace:'nowrap'},L,'肌が、ほっとする。');
  H.el('div',{fontSize:'20px',lineHeight:'1.9',color:'#6e5a5b'},L,'皮膚科医と共同開発した、6つの成分だけの化粧水。ゆらぎやすい季節の肌を、やさしく整えます。');
  const tg=H.el('div',{display:'flex',flexWrap:'wrap',gap:'10px'},L);['セラミド','ヒアルロン酸','無香料','アルコールフリー'].forEach(x=>H.el('span',{border:'1px solid #c9878a',borderRadius:'999px',padding:'6px 16px',fontSize:'17px',color:'#c9878a'},tg,x));
  H.el('div',{alignSelf:'flex-start',padding:'18px 40px',borderRadius:'999px',background:'#3d2f30',color:'#fff',fontWeight:'700',fontSize:'20px'},L,'購入する ¥3,980');[...L.children].forEach((e,i)=>rise(H,e,200+i*150,1100));
}});

defH({no:'15',cat:'SHOP',name:'イベントLP',en:'Festival Countdown',lead:'大きなカウントダウンと出演者の帯。フェス・セミナーの告知に。',text:'SUNSET BEAT FES',bg:'#1a0b2e',
use:'<b>音楽フェス・ライブ・セミナー・オンラインイベント</b>の告知ページに。カウントダウンは「今申し込まないと」という気持ちを後押しします。',
tips:['カウントダウンは等幅の数字にして、1秒ごとに数字だけがパタッと変わるように','出演者名は横に流れる帯にすると、たくさんいても華やかに見せられます','チケットボタンはページ内で3回以上出すのが申込率を上げるコツ'],
p:`開催日までのカウントダウンが主役の、勢いのある「イベントLP（ランディングページ）」を作ってください。
・イベント名：{T}（夏の野外音楽フェスという想定。開催日は 2027年8月14日）
・配色：背景 #1A0B2E → #FF5E3A → #FFC24B の夕焼けグラデーション（上から下）、文字 #FFFFFF、アクセント #1A0B2E
・フォント：見出し Dela Gothic One、数字 Space Mono
・ファーストビュー：
　・画面下に大きな夕日（円）が沈んでいくような半円と、波線のシルエット
　・イベント名を特大で、少し傾けて（−4°）配置
　・その下に開催日までのカウントダウン「DAYS / HOURS / MIN / SEC」（数字は1秒ごとに更新、変わるときに上から落ちてくる）
　・「チケットを購入」ボタン（白、ホバーで揺れる）と「出演者を見る」
　・画面最下部に、出演者名が流れる黒い帯（マーキー）
・セクション：出演者（写真枠のグリッド）→ タイムテーブル → チケット料金（3種）→ 会場アクセス → 注意事項 → スポンサー → フッター
・動き：スクロールで夕日の位置が下がる。カードはホバーで少し回転`,
run(H,t){H.abs({inset:'0',background:'linear-gradient(#1a0b2e 0%,#5b1f5c 35%,#ff5e3a 75%,#ffc24b 100%)'});const sun=H.abs({left:'500px',top:'560px',width:'600px',height:'600px',borderRadius:'50%',background:'radial-gradient(#fff2b0,#ffc24b 60%,#ff8a3d)'});H.a(sun,[{transform:'translateY(-40px)'},{transform:'translateY(40px)'}],{d:7000,e:'ease-in-out'});
  const sea=H.svg(1600,900);H.sv('path',{d:'M0 760 Q 200 730 400 760 T 800 760 T 1200 760 T 1600 760 V 900 H 0 Z',fill:'#1a0b2e'},sea);
  nav(H,{logo:'☀',items:['LINE UP','TICKET','ACCESS'],f:F.smono,cta:'TICKET',cb:'#fff',cc:'#1a0b2e'});
  const ttl=H.abs({left:'0',right:'0',top:'140px',textAlign:'center',fontFamily:F.heavy,fontSize:fs(t,130,1400)+'px',color:'#fff',transform:'rotate(-4deg)',textShadow:'0 8px 0 #1a0b2e'},null,t);H.a(ttl,[{transform:'rotate(-4deg) scale(1.3)',opacity:0},{transform:'rotate(-4deg) scale(1)',opacity:1}],{d:700,e:E.back});
  H.abs({left:'0',right:'0',top:'320px',textAlign:'center',fontFamily:F.smono,fontSize:'26px',color:'#fff',letterSpacing:'.2em'},null,'2027.08.14 SAT — 15 ODAIBA BEACH');
  const cd=H.abs({left:'0',right:'0',top:'390px',display:'flex',justifyContent:'center',gap:'26px'});const lab=['DAYS','HOURS','MIN','SEC'];const box=lab.map(l=>{const b=H.el('div',{width:'170px',padding:'16px 0',background:'rgba(26,11,46,.55)',border:'2px solid rgba(255,255,255,.4)',borderRadius:'16px',textAlign:'center',overflow:'hidden'},cd);const n=H.el('div',{fontFamily:F.smono,fontSize:'64px',color:'#fff',lineHeight:'1'},b,'00');H.el('div',{fontFamily:F.smono,fontSize:'15px',color:'rgba(255,255,255,.7)',letterSpacing:'.2em',marginTop:'6px'},b,l);return n});rise(H,cd,400);
  const target=new Date('2027-08-14T15:00:00+09:00').getTime();let last='';H.raf(()=>{let d=Math.max(0,target-Date.now());const v=[Math.floor(d/864e5),Math.floor(d/36e5)%24,Math.floor(d/6e4)%60,Math.floor(d/1e3)%60].map(x=>String(x).padStart(2,'0'));if(v.join()!==last){v.forEach((x,i)=>{if(box[i].textContent!==x){box[i].textContent=x;if(last)H.a(box[i],[{transform:'translateY(-30px)',opacity:0},{transform:'translateY(0)',opacity:1}],{d:300})}});last=v.join()}});
  const bt=H.abs({left:'0',right:'0',top:'600px',display:'flex',justifyContent:'center',gap:'18px'});H.el('div',{padding:'18px 44px',borderRadius:'999px',background:'#fff',color:'#1a0b2e',fontFamily:F.heavy,fontSize:'22px'},bt,'チケットを購入');H.el('div',{padding:'18px 44px',borderRadius:'999px',border:'2px solid #fff',color:'#fff',fontFamily:F.heavy,fontSize:'22px'},bt,'出演者を見る');rise(H,bt,600);
  const mq=H.abs({left:'0',right:'0',bottom:'0',height:'64px',background:'#000',display:'flex',alignItems:'center',overflow:'hidden'});const tr=H.el('div',{display:'flex',whiteSpace:'nowrap',fontFamily:F.heavy,fontSize:'26px',color:'#ffc24b'},mq);for(let i=0;i<8;i++)H.el('span',{paddingRight:'50px'},tr,'THE MIDNIGHTS ★ 夕凪バンド ★ DJ KAI ★ LUNA SOUND ★');H.a(tr,[{transform:'translateX(0)'},{transform:'translateX(-25%)'}],{d:9000,e:E.lin,i:Infinity});
}});

defH({no:'16',cat:'LOCAL',name:'和モダン旅館',en:'Japanese Modern Inn',lead:'藍色、縦書き、金の細線、霧。旅館・料亭・和菓子店に。',text:'湯宿 しずく',bg:'#14213d',
use:'<b>旅館・料亭・和菓子店・神社仏閣・着物レンタル</b>に。日本の美意識を、モダンに上品に伝えられます。',
tips:['縦書きの見出しを1つ置くだけで、一気に和の格が出ます','色は藍・生成り・金の3色まで。多色にすると和の静けさが消えます','霧（白いぼかし）をゆっくり流すと、温泉や山の空気感が出ます'],
p:`藍色と縦書き、金の細い線が美しい「和モダン」スタイルの旅館のサイトを作ってください。
・宿の名前：{T}（山あいの温泉旅館という想定）
・配色：藍 #14213D、生成り #F3EEE3、金 #C9A45C、墨 #1A1A1A
・フォント：Shippori Mincho B1（見出し800、本文500）。英字は Cormorant Garamond
・ファーストビュー：
　・全面に、藍色の夜の山並みのシルエット（SVGの重なった山、奥ほど明るい藍）と、ゆっくり左右に流れる白い霧（ぼかした白い楕円、不透明度0.15）
　・右側に、縦書きの大きな見出し「湯けむりに、ほどける夜。」（1文字ずつ上からにじむように現れる）
　・左下に、宿の名前と「ONSEN RYOKAN — SINCE 1925」、金の細い線（左から伸びる）
　・右下に、縦長の「ご予約」ボタン（金の枠線）
　・空に、小さな月（生成り色の円、光のにじみ）
・セクション：宿について（縦書きの文章と写真枠）→ 客室（3タイプ、料金）→ 温泉 → お料理（季節の献立）→ アクセス → ご予約 → フッター
・動き：すべてゆっくり（1.5〜2秒）。和紙のようなざらつきを全体にうっすら重ねる`,
run(H,t){const sv=H.svg(1600,900);[['#1f3157',560],['#18284a',650],['#101a33',740]].forEach(([c,y],i)=>{let d=`M0 ${y}`;for(let x=0;x<=1600;x+=200)d+=` Q ${x+100} ${y-120+i*20+Math.sin(x+i)*40} ${x+200} ${y}`;d+=' V900 H0Z';H.sv('path',{d,fill:c},sv)});
  const moon=H.abs({left:'1240px',top:'120px',width:'90px',height:'90px',borderRadius:'50%',background:'#f3eee3',boxShadow:'0 0 60px rgba(243,238,227,.5)'});H.a(moon,[{opacity:0},{opacity:1}],{d:2000});
  for(let i=0;i<3;i++){const m=H.abs({left:'-400px',top:500+i*100+'px',width:'1400px',height:'160px',borderRadius:'50%',background:'#fff',opacity:.12,filter:'blur(40px)'});H.a(m,[{transform:'translateX(0)'},{transform:'translateX(900px)'},{transform:'translateX(0)'}],{d:14000+i*3000,e:'ease-in-out',i:Infinity})}
  nav(H,{logo:'',items:['宿について','客室','温泉','お料理'],f:F.min,c:'#f3eee3'});
  const v=H.abs({left:'1030px',top:'140px',writingMode:'vertical-rl',fontFamily:F.min,fontWeight:'800',fontSize:'76px',color:'#f3eee3',lineHeight:'1.6',height:'640px'});H.chars('湯けむりに、ほどける夜。',v).forEach((c,i)=>H.a(c,[{opacity:0,filter:'blur(8px)',transform:'translateY(-20px)'},{opacity:1,filter:'blur(0)',transform:'translateY(0)'}],{d:1400,dl:600+i*140,e:E.soft}));
  const L=H.abs({left:'110px',bottom:'110px',color:'#f3eee3',display:'flex',flexDirection:'column',gap:'14px'});H.el('div',{fontFamily:F.min,fontWeight:'800',fontSize:'56px',letterSpacing:'.15em'},L,t);H.el('div',{fontFamily:F.serif,fontSize:'18px',letterSpacing:'.35em',color:'#c9a45c'},L,'ONSEN RYOKAN — SINCE 1925');const gl=H.el('div',{width:'360px',height:'1px',background:'#c9a45c',transformOrigin:'0 50%'},L);H.a(gl,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:1800,dl:1200,e:'cubic-bezier(.65,0,.35,1)'});H.a(L,[{opacity:0},{opacity:1}],{d:1800,dl:400});
  const rv=H.abs({right:'110px',bottom:'110px',writingMode:'vertical-rl',padding:'30px 18px',border:'1px solid #c9a45c',color:'#c9a45c',fontFamily:F.min,fontWeight:'800',fontSize:'24px',letterSpacing:'.4em'},null,'ご予約');H.a(rv,[{opacity:0},{opacity:1}],{d:1800,dl:1600});
}});

defH({no:'17',cat:'LOCAL',name:'クリニック',en:'Clean Clinic',lead:'白と青緑、丸いカード、予約ボタンが目立つ。医療・整体・歯科に。',text:'みどり皮フ科クリニック',bg:'#f4fbfa',
use:'<b>クリニック・歯科・整骨院・動物病院・保育施設</b>に。清潔感と安心感、そして「すぐ予約できる」導線を重視した型です。',
tips:['予約ボタンと電話番号は、ファーストビューの右上と中央の2か所に置く','色は白＋青緑（ティール）の1色だけ。安心感を最優先に','診療時間の表は、いちばん見られる情報なので必ず上の方に'],
p:`清潔感と安心感を最優先にした、予約しやすい「クリニック」スタイルの医療機関サイトを作ってください。
・名称：{T}（駅前の皮膚科クリニックという想定）
・配色：背景 #F4FBFA、白 #FFFFFF、ティール #1E9E8E、濃いティール #0F5E57、文字 #23322F
・フォント：Zen Kaku Gothic New（見出し700、本文400、本文は18px以上で読みやすく）
・ファーストビュー：
　・左に見出し「肌の悩みに、ていねいに寄り添う。」、説明文、大きな「Web予約」ボタン（ティール塗り）と「電話する 03-0000-0000」ボタン（枠線）
　・右に、角丸40pxの大きな写真枠（院内の写真の代わりに淡いティールのグラデーション）と、その上に重なる白いカード「本日の診療 9:00–18:00／待ち時間 約15分」（ゆっくり浮遊）
　・下に、丸いアイコン付きのバッジ3つ「駅から徒歩2分」「土曜も診療」「キャッシュレス対応」
・セクション：お知らせ → 診療時間の表（曜日×午前/午後、休診は「—」）→ 診療内容（アイコン付きカード6つ）→ 医師紹介 → 初めての方へ（流れ4ステップ）→ アクセス（地図枠）→ フッター。スマホでは画面下に「Web予約」「電話」を固定
・動き：控えめなフェードインのみ`,
run(H,t){nav(H,{logo:'✚ '+t,items:['診療案内','医師紹介','アクセス'],c:'#23322f',lf:F.zen,ls:'24px',cta:'Web予約',cb:'#1e9e8e',cc:'#fff'});
  const L=H.abs({left:'110px',top:'200px',width:'700px',display:'flex',flexDirection:'column',gap:'24px',color:'#23322f'});H.el('div',{fontFamily:F.zen,fontWeight:'700',fontSize:'64px',lineHeight:'1.35'},L,'肌の悩みに、\nていねいに寄り添う。').style.whiteSpace='pre-line';
  H.el('div',{fontSize:'21px',lineHeight:'1.9',color:'#4f615d'},L,'ニキビ・湿疹・アトピーなど、肌のことなら何でもご相談ください。小さなお子さまの診療も行っています。');
  const bt=H.el('div',{display:'flex',gap:'16px'},L);H.el('div',{padding:'20px 40px',borderRadius:'14px',background:'#1e9e8e',color:'#fff',fontWeight:'700',fontSize:'22px'},bt,'Web予約');H.el('div',{padding:'20px 32px',borderRadius:'14px',border:'2px solid #1e9e8e',color:'#0f5e57',fontWeight:'700',fontSize:'20px'},bt,'☎ 03-0000-0000');
  const bg=H.el('div',{display:'flex',gap:'14px',marginTop:'10px'},L);['駅から徒歩2分','土曜も診療','キャッシュレス対応'].forEach(x=>{const b=H.el('div',{display:'flex',alignItems:'center',gap:'8px',background:'#fff',borderRadius:'999px',padding:'8px 16px 8px 8px',fontSize:'16px',boxShadow:'0 4px 14px rgba(15,94,87,.08)'},bg);H.el('span',{width:'28px',height:'28px',borderRadius:'50%',background:'#d5f0ec',display:'inline-block'},b);H.el('span',{},b,x)});[...L.children].forEach((e,i)=>rise(H,e,200+i*150,1000));
  const ph=H.abs({left:'900px',top:'150px',width:'600px',height:'640px',borderRadius:'40px',background:'linear-gradient(160deg,#d5f0ec,#9bd6cd 60%,#5fb7aa)'});H.a(ph,[{opacity:0,transform:'translateY(30px)'},{opacity:1,transform:'translateY(0)'}],{d:1200});
  const cd=H.abs({left:'820px',top:'560px',width:'380px',padding:'24px 28px',borderRadius:'24px',background:'#fff',boxShadow:'0 20px 50px rgba(15,94,87,.15)',color:'#23322f'});H.el('div',{fontSize:'16px',color:'#1e9e8e',fontWeight:'700'},cd,'● 本日の診療');H.el('div',{fontFamily:F.mono,fontSize:'34px',fontWeight:'700',margin:'6px 0'},cd,'9:00 – 18:00');H.el('div',{fontSize:'17px',color:'#4f615d'},cd,'現在の待ち時間 約15分');
  H.a(cd,[{transform:'translateY(0)'},{transform:'translateY(-12px)'},{transform:'translateY(0)'}],{d:4000,dl:1200,e:'ease-in-out',i:Infinity});rise(H,cd,700);
}});

defH({no:'18',cat:'LOCAL',name:'フィットネスジム',en:'Dynamic Fitness',lead:'黒と赤、斜めの帯、太い斜体文字。勢いで入会させるジム向け。',text:'IRON PULSE GYM',bg:'#0c0c0c',
use:'<b>ジム・パーソナルトレーニング・格闘技・スポーツチーム</b>に。斜めの構図と太い文字で、エネルギーと勢いを伝えます。',
tips:['見出しは太い斜体（italic）にするだけでスピード感が出ます','背景に斜めの帯を1本入れると、画面全体に動きが生まれます','「体験無料」「入会金0円」など数字の特典は大きく、赤で'],
p:`黒と赤、斜めの構図と太い斜体の文字で勢いを出す「ダイナミック・フィットネス」スタイルのジムのサイトを作ってください。
・ジム名：{T}（24時間営業のトレーニングジムという想定）
・配色：背景 #0C0C0C、赤 #E63946、白 #FFFFFF、グレー #8A8A8A
・フォント：見出し Dela Gothic One（transform: skewX(−10°) で斜体風に）、英字 Anton または Archivo Black、数字 Space Mono
・ファーストビュー：
　・画面を斜め（−12°）に横切る赤い太帯。帯の上に白い大文字「NO LIMIT.」が流れる
　・左に、特大の斜体見出し「昨日の自分を、超えていけ。」と、赤い丸のバッジ「体験 0円」
　・右に、トレーニングする人の写真枠（暗いグラデーションと赤い光）を斜めに切り抜いて配置（clip-path）
　・下に、実績の数字3つ「会員 2,400人」「24時間営業」「マシン 80台」（カウントアップ）
　・「無料体験を予約」ボタン（赤、ホバーで矢印が右へ動く）
・セクション：選ばれる理由（3つ）→ 料金プラン（3つ、おすすめを赤で強調）→ トレーナー紹介 → 会員のビフォーアフター → 施設紹介 → アクセス → フッター
・動き：要素は斜め下から勢いよく入ってくる（translate と skew を戻す）`,
run(H,t){const band=H.abs({left:'-200px',top:'560px',width:'2000px',height:'130px',background:'#e63946',transform:'rotate(-12deg)',overflow:'hidden',display:'flex',alignItems:'center'});const tr=H.el('div',{display:'flex',whiteSpace:'nowrap',fontFamily:F.heavy,fontSize:'74px',color:'#0c0c0c',fontStyle:'italic'},band);for(let i=0;i<8;i++)H.el('span',{paddingRight:'60px'},tr,'NO LIMIT. PUSH HARDER.');H.a(tr,[{transform:'translateX(0)'},{transform:'translateX(-25%)'}],{d:8000,e:E.lin,i:Infinity});
  H.a(band,[{transform:'rotate(-12deg) translateX(-2000px)'},{transform:'rotate(-12deg) translateX(0)'}],{d:800,dl:200});
  const ph=H.abs({left:'900px',top:'0',width:'700px',height:'900px',clipPath:'polygon(25% 0,100% 0,100% 100%,0 100%)',background:'linear-gradient(200deg,#3a1215,#0c0c0c 70%)'});H.abs({left:'250px',top:'200px',width:'380px',height:'380px',borderRadius:'50%',background:'#e63946',filter:'blur(110px)',opacity:.6},ph);H.a(ph,[{transform:'translateX(300px)',opacity:0},{transform:'translateX(0)',opacity:1}],{d:900});
  nav(H,{logo:t,items:['料金','トレーナー','施設'],lf:F.heavy,cta:'無料体験',cb:'#e63946',cc:'#fff'});
  const h=H.abs({left:'100px',top:'150px',fontFamily:F.heavy,fontSize:'96px',lineHeight:'1.15',color:'#fff',transform:'skewX(-10deg)'},null,'昨日の自分を、\n超えていけ。');h.style.whiteSpace='pre-line';H.a(h,[{transform:'skewX(-25deg) translate(-120px,60px)',opacity:0},{transform:'skewX(-10deg) translate(0,0)',opacity:1}],{d:700,dl:300,e:E.out});
  const bd=H.abs({left:'760px',top:'130px',width:'150px',height:'150px',borderRadius:'50%',background:'#e63946',color:'#fff',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:'22px',transform:'rotate(12deg)'});H.el('div',{},bd,'体験');H.el('div',{fontSize:'52px',lineHeight:'1'},bd,'0円');H.a(bd,[{transform:'rotate(12deg) scale(0)'},{transform:'rotate(12deg) scale(1)'}],{d:500,dl:900,e:E.back});
  const st=H.abs({left:'100px',bottom:'70px',display:'flex',gap:'60px'});const nums=[];[['会員',2400,'人'],['営業',24,'時間'],['マシン',80,'台']].forEach(([l,n,u])=>{const b=H.el('div',{},st);H.el('div',{fontSize:'17px',color:'#8a8a8a'},b,l);const v=H.el('div',{fontFamily:F.smono,fontSize:'52px',color:'#fff'},b,'0');nums.push([v,n,u])});rise(H,st,600);
  H.raf(s=>{const k=Math.min(1,Math.max(0,(s-.8)/1.4));const e=1-Math.pow(1-k,3);nums.forEach(([v,n,u])=>v.textContent=Math.round(n*e).toLocaleString()+u)});
}});

defH({no:'19',cat:'LOCAL',name:'レストラン',en:'Fullscreen Dining',lead:'全画面の料理写真がゆっくり寄っていく。予約を取りたい飲食店に。',text:'Trattoria Sole',bg:'#120c08',
use:'<b>レストラン・バー・ビストロ・ホテルのダイニング</b>に。写真の力で「食べたい」「行きたい」を直感的に引き出します。',
tips:['写真がゆっくり拡大していく（Ken Burns効果）だけで、映像のような高級感が出ます','文字は写真の上に置くので、下から黒のグラデーションを敷いて読みやすく','予約ボタンは、ページのどこにいても押せるように右上に固定'],
p:`全画面の料理写真がゆっくり寄っていく、映画のような「フルスクリーン・ダイニング」スタイルのレストランサイトを作ってください。
・店名：{T}（薪窯のあるイタリアンレストランという想定）
・配色：背景 #120C08、文字 #F5EBDD、アクセント #D98E48（薪の火の色）
・フォント：店名 Cormorant Garamond の斜体、日本語 Shippori Mincho B1
・ファーストビュー：
　・画面全体に料理の写真（今は暖色のグラデーションと、皿に見える円で代用）。8秒かけて scale 1 → 1.12 へゆっくり拡大（Ken Burns効果）
　・写真の下半分に、黒への縦グラデーションを敷く
　・左下に、斜体の店名（特大）と「薪窯で焼く、ナポリの味。」、営業時間
　・右上に固定の「ご予約」ボタン（アクセント色）、右下に「MENU ／ COURSE ／ ACCESS」
　・薪の火の粉のような小さな光の点が、下からゆっくり舞い上がる
・セクション：シェフのこだわり → メニュー（前菜・パスタ・ピッツァ・ドルチェ、価格付き）→ コース料理 → 店内の様子（写真ギャラリー）→ アクセスと営業時間 → ご予約フォーム → フッター
・動き：ゆっくりしたフェードとズームのみ`,
run(H,t){const ph=H.abs({inset:'0',background:'radial-gradient(circle at 60% 45%,#6b3a1d,#2b170c 60%,#120c08)'});H.abs({left:'760px',top:'160px',width:'560px',height:'560px',borderRadius:'50%',background:'radial-gradient(circle at 45% 40%,#f2e6d4,#d9c4a5 55%,#a88660 70%,transparent 72%)'},ph);H.abs({left:'880px',top:'280px',width:'320px',height:'320px',borderRadius:'50%',background:'radial-gradient(circle,#c8452b,#9a2f1c 60%,#e8b04b 70%,transparent 72%)'},ph);
  H.a(ph,[{transform:'scale(1)'},{transform:'scale(1.12)'}],{d:7000,e:E.lin});H.abs({inset:'0',background:'linear-gradient(transparent 35%,rgba(18,12,8,.95))'});
  const c=H.canvas();const x=c.getContext('2d');const P=[...Array(40)].map(()=>({x:rnd(0,1600),y:rnd(300,900),v:rnd(20,60),r:rnd(1.5,3.5)}));let last=0;H.raf(s=>{const dt=s-last;last=s;x.clearRect(0,0,1600,900);P.forEach(p=>{p.y-=p.v*dt;if(p.y<200)p.y=900;x.globalAlpha=(p.y-200)/700;x.fillStyle='#d98e48';x.beginPath();x.arc(p.x+Math.sin(s+p.r)*10,p.y,p.r,0,7);x.fill()})});
  nav(H,{logo:'',items:['MENU','COURSE','ACCESS'],f:F.serif,cta:'ご予約',cb:'#d98e48',cc:'#120c08'});
  const L=H.abs({left:'100px',bottom:'90px',color:'#f5ebdd',display:'flex',flexDirection:'column',gap:'14px'});H.el('div',{fontFamily:F.serif,fontStyle:'italic',fontWeight:'700',fontSize:fs(t,140,1100)+'px',lineHeight:'1'},L,t);H.el('div',{fontFamily:F.min,fontWeight:'800',fontSize:'32px',letterSpacing:'.1em'},L,'薪窯で焼く、ナポリの味。');H.el('div',{fontFamily:F.mono,fontSize:'18px',color:'#d98e48',letterSpacing:'.1em'},L,'LUNCH 11:30–14:30 ／ DINNER 17:30–22:00');
  [...L.children].forEach((e,i)=>H.a(e,[{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{d:1600,dl:400+i*250,e:E.soft}));
}});

defH({no:'20',cat:'LOCAL',name:'手描きナチュラル',en:'Hand-drawn Kids',lead:'クレヨンのような線と、ぽよんと弾む図形。教室・保育・子ども向けに。',text:'こどもアトリエ そらいろ',bg:'#fffaf0',
use:'<b>子ども向け教室・保育園・学童・習い事・家族向けイベント</b>に。手描きの線とカラフルな形で、親しみやすさと楽しさを伝えます。',
tips:['線をわざとガタガタ（SVGのノイズ）にすると、手描きのぬくもりが出ます','色は4〜5色のパステルを、図形ごとに使い分けると楽しい','図形がぽよんと弾む動きは、子ども向けサイトとの相性が抜群'],
p:`クレヨンで描いたような線と、ぽよんと弾むカラフルな図形が楽しい「手描きナチュラル」スタイルの子ども教室のサイトを作ってください。
・名前：{T}（3〜12歳向けのアート教室という想定）
・配色：背景 #FFFAF0、文字 #3B3B3B、黄 #FFC94A、水色 #7CC6FE、ピンク #FF8FAB、緑 #8BD17C
・フォント：見出し Mochiy Pop One、本文 Zen Kaku Gothic New（大きめ）
・ファーストビュー：
　・中央に見出し「すきなものを、すきなだけ。」。見出しの下に、手描き風の波線（SVG、線がガタガタ揺れる、左から描かれる）
　・画面のあちこちに、カラフルな図形（丸・三角・星・雲）を8個。ぽよんと弾みながら登場し、その後ゆっくり揺れ続ける
　・クレヨンで描いたような太陽（SVG、線の端が丸く少しかすれる）がゆっくり回る
　・「無料体験に申し込む」ボタン（黄色、手描き風の枠線、ホバーでぷるっと揺れる）
・セクション：教室の特徴（手描きのアイコン付き）→ クラスと料金（年齢別）→ 1日の流れ → 作品ギャラリー → 保護者の声 → 体験の申し込みフォーム → アクセス → フッター
・動き：やさしく弾むアニメーション（cubic-bezier(.34,1.56,.64,1)）を多めに`,
run(H,t){const sv=H.svg(1600,900);const id='cr'+Math.floor(Math.random()*1e6);const f=H.sv('filter',{id},H.sv('defs',{},sv));H.sv('feTurbulence',{type:'fractalNoise',baseFrequency:'.04',numOctaves:2,result:'n'},f);H.sv('feDisplacementMap',{in:'SourceGraphic',in2:'n',scale:5},f);
  const sun=H.sv('g',{filter:`url(#${id})`},sv);sun.style.transformOrigin='1380px 170px';H.sv('circle',{cx:1380,cy:170,r:60,fill:'#ffc94a'},sun);for(let i=0;i<10;i++){const a=i/10*Math.PI*2;H.sv('line',{x1:1380+Math.cos(a)*80,y1:170+Math.sin(a)*80,x2:1380+Math.cos(a)*115,y2:170+Math.sin(a)*115,stroke:'#ffc94a','stroke-width':10,'stroke-linecap':'round'},sun)}H.a(sun,[{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{d:20000,e:E.lin,i:Infinity});
  nav(H,{logo:t,items:['クラス','料金','ギャラリー'],c:'#3b3b3b',lf:F.pop,ls:'24px'});
  const shapes=[['50%','#7cc6fe',180,250,110],['0','#ff8fab',260,650,90],['50%','#8bd17c',1250,620,120],['0','#ffc94a',1150,330,80],['50%','#ff8fab',520,760,70],['0','#7cc6fe',1440,500,70]];
  shapes.forEach(([r,c,x,y,s],i)=>{const e=H.abs({left:x+'px',top:y+'px',width:s+'px',height:s+'px',borderRadius:r,background:c,transform:`rotate(${i*17}deg)`});H.a(e,[{scale:0},{scale:1}],{d:600,dl:300+i*120,e:E.back});H.a(e,[{translate:'0 0'},{translate:'0 -16px'},{translate:'0 0'}],{d:2400+i*300,dl:1000,e:'ease-in-out',i:Infinity})});
  const C=H.abs({left:'0',right:'0',top:'300px',display:'flex',flexDirection:'column',alignItems:'center',gap:'20px',color:'#3b3b3b'});const h=H.el('div',{fontFamily:F.pop,fontSize:'84px'},C,'すきなものを、すきなだけ。');H.a(h,[{transform:'scale(.7)',opacity:0},{transform:'scale(1)',opacity:1}],{d:700,dl:200,e:E.back});
  const ws=H.svg(820,40,C,{position:'relative'});const wp=H.sv('path',{d:'M10 20 Q 60 0 110 20 T 210 20 T 310 20 T 410 20 T 510 20 T 610 20 T 710 20 T 810 20',fill:'none',stroke:'#ff8fab','stroke-width':10,'stroke-linecap':'round',filter:`url(#${id})`,'stroke-dasharray':1000,'stroke-dashoffset':1000},ws);H.a(wp,[{strokeDashoffset:1000},{strokeDashoffset:0}],{d:1200,dl:700});
  H.el('div',{fontSize:'24px',color:'#6b6b6b',marginTop:'10px'},C,'3〜12歳のアート教室。絵の具も、ねんども、ぜんぶ自由。');const bt=H.el('div',{padding:'20px 44px',borderRadius:'24px',background:'#ffc94a',border:'4px solid #3b3b3b',fontFamily:F.pop,fontSize:'24px',boxShadow:'0 6px 0 #3b3b3b'},C,'無料体験に申し込む');rise(H,bt,1000);
}});
