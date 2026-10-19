/* ===== OPENING 01-15 ===== */
CUR_SEC='a';
const defA=o=>{o.bg=o.bg||'#000';o.text=o.text||'nobu movie';o.loop=o.loop||7000;def(o)};
const fadeAll=(H,el,at,d)=>H.a(el,[{opacity:1},{opacity:0}],{d:d||600,dl:at,f:'forwards'});
const titleSz=(t,max,w)=>Math.round(Math.min(max,w/Math.max(4,[...t].length*.62)));

/* CINEMA */
defA({no:'01',cat:'CINEMA',name:'赤いリボンの“ターダム”',en:'Ribbon Burst',lead:'動画配信サービスの冒頭でおなじみ。赤いロゴに飛び込み、光の帯がほどける。',loop:6000,
use:'<b>YouTubeの冒頭・自主制作ドラマ・Vlogのシリーズ物</b>に。たった3秒で「作品が始まる」期待感をつくれます。',
tips:['ロゴは太くて縦長の書体（Bebas Neue など）にすると、それらしさが出ます','光の帯は赤・ピンク・紫・青を混ぜると華やか','「ターダム」の効果音を、ロゴが光る瞬間に合わせて'],
p:`動画配信サービスの冒頭のような、赤いロゴに一気に寄って、ロゴの中から無数の光の帯がほどけて流れる「リボンバースト」のオープニングを作ってください。
・タイトル：「{T}」（大文字）
・背景：真っ黒
・0.0〜1.2秒：太く縦長の書体（Bebas Neue）で、赤 #E50914 のタイトルを中央に表示。下に同じ色の影を落として、少し立体的に。scale 1.2 → 1 でゆっくり引く
・1.2秒：タイトルが一瞬白く光る（効果音の「ドン」のタイミング）
・1.6〜3.4秒：タイトルの最初の1文字に向かってカメラが急速に寄る（scale 1 → 30、cubic-bezier(.7,0,.84,0)）
・寄りきった瞬間から、画面を縦の細い光の帯（赤・ピンク・紫・青・オレンジ、幅2〜14px、200本）で埋め、それぞれを違う速さで縦に流しながら、奥へ吸い込まれるように消す
・最後に黒へフェード
・尺：6秒`,
run(H,t){const T=t.toUpperCase();const B=H.box();const el=H.el('div',{fontFamily:"'Bebas Neue','Dela Gothic One',sans-serif",fontSize:titleSz(T,260,1300)+'px',color:'#e50914',letterSpacing:'.02em',textShadow:'0 10px 0 #7a0008,0 20px 40px rgba(0,0,0,.6)',whiteSpace:'nowrap',lineHeight:'1'},B,T);
  H.a(el,[{transform:'scale(1.2)',opacity:0},{transform:'scale(1)',opacity:1}],{d:1200,e:E.out});H.a(el,[{filter:'brightness(1)'},{filter:'brightness(2.2)'},{filter:'brightness(1)'}],{d:300,dl:1200,f:'none'});
  el.style.transformOrigin='4% 50%';
  H.a(el,[{transform:'scale(1)'},{transform:'scale(30)'}],{d:1800,dl:1600,e:E.in,f:'forwards'});
  const S=H.abs({inset:'0',overflow:'hidden',opacity:0});const cols=['#e50914','#ff3d6e','#b81d8f','#5b2bd6','#2b6cff','#ff8a00'];for(let i=0;i<200;i++){const b=H.abs({left:rnd(0,1600)+'px',top:'-100px',width:rnd(2,14)+'px',height:'1100px',background:`linear-gradient(transparent,${pick(cols)},transparent)`},S);H.a(b,[{transform:'translateY(-400px) scaleY(.5)'},{transform:'translateY(400px) scaleY(1.4)'}],{d:rnd(600,1400),i:Infinity,e:E.lin})}
  H.a(S,[{opacity:0,transform:'scale(1.4)'},{opacity:1,transform:'scale(1.2)',offset:.2},{opacity:1,offset:.7},{opacity:0,transform:'scale(.4)'}],{d:2400,dl:3000,f:'forwards'})}});

defA({no:'02',cat:'CINEMA',name:'青空のスマイル矢印',en:'Smile Swoosh',lead:'通販系の動画配信でおなじみ。白い文字の下に、笑顔のような矢印がシュッと描かれる。',loop:5000,bg:'#00a8e1',
use:'<b>サービス紹介・チャンネルの冒頭・明るいバラエティ</b>に。さわやかで親しみやすい始まり方です。',
tips:['矢印は文字の下で、左から右へ弧を描きながら描くのがポイント','背景の青は明るい空色（#00A8E1）にすると、それらしい印象に','描き終わりに矢印の先が少し跳ねると、笑顔らしくなります'],
p:`動画配信サービスの冒頭のような、明るい青の背景に白いタイトルが浮かび、その下に笑顔のような弧の矢印がシュッと描かれる「スマイルスウッシュ」のオープニングを作ってください。
・タイトル：「{T}」（小文字）
・背景：明るい空色 #00A8E1 から、少し濃い #0077B6 への斜めのグラデーション。画面の奥に、白い光の筋がゆっくり横切る
・0.2〜1.0秒：タイトルを、白・太めの丸みのある書体（Nunito 800 など）で中央に、下から20px上がりながらフェードイン
・1.0〜1.6秒：タイトルの下に、黄 #FF9900 の弧の矢印（左端は細く、右に行くほど太く、右端に小さな矢じり）を、左から右へ笑顔の形に描く（SVG の stroke-dashoffset）
・1.6秒：矢印の先がポンと少し跳ね上がって戻る
・その後、全体がほんの少しずつ寄っていく（scale 1 → 1.04）
・尺：5秒`,
run(H,t){H.abs({inset:'0',background:'linear-gradient(135deg,#00a8e1,#0077b6)'});const sh=H.abs({left:'-400px',top:'0',width:'300px',height:'900px',background:'linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent)',transform:'skewX(-20deg)'});H.a(sh,[{transform:'translateX(0) skewX(-20deg)'},{transform:'translateX(2400px) skewX(-20deg)'}],{d:4000,e:'ease-in-out'});
  const G=H.box({flexDirection:'column'});const el=H.el('div',{fontFamily:"'Nunito','Mochiy Pop One',sans-serif",fontWeight:'800',fontSize:titleSz(t,200,1100)+'px',color:'#fff',lineHeight:'1',whiteSpace:'nowrap'},G,t.toLowerCase());
  const svg=H.svg(700,140,G,{position:'relative'});const p=H.sv('path',{d:'M30 30 Q350 150 640 40',fill:'none',stroke:'#ff9900','stroke-width':22,'stroke-linecap':'round'},svg);const L=p.getTotalLength();p.setAttribute('stroke-dasharray',L);const tip=H.sv('path',{d:'M610 20 L668 34 L630 78 Z',fill:'#ff9900',opacity:0},svg);
  H.a(el,[{transform:'translateY(20px)',opacity:0},{transform:'translateY(0)',opacity:1}],{d:800,dl:200});H.a(p,[{strokeDashoffset:L},{strokeDashoffset:0}],{d:600,dl:1000,e:'ease-in-out'});H.a(tip,[{opacity:0,transform:'translateY(0)'},{opacity:1,transform:'translateY(-12px)',offset:.5},{opacity:1,transform:'translateY(0)'}],{d:300,dl:1600});
  H.a(G,[{transform:'scale(1)'},{transform:'scale(1.04)'}],{d:3000,dl:1800,e:E.lin});fadeAll(H,G,4300)}});

defA({no:'03',cat:'CINEMA',name:'星が輪を描く山',en:'Starry Peak',lead:'映画会社のロゴのような、雪をかぶった山を星の輪が囲む荘厳な始まり。',loop:7000,bg:'#04122e',
use:'<b>本格的な自主映画・卒業制作・記念動画</b>の冒頭に。重厚で「映画が始まる」雰囲気が一気に出ます。',
tips:['星は画面の外から弧を描いて集まってくるのが見せ場','山は青のグラデーションと白い雪で、写実寄りに','星が並び終わった瞬間に、全体を少し明るく光らせて締める'],
p:`映画会社のロゴのような、雪をかぶった山の頂上のまわりを、星が弧を描いて飛んできて輪になる「スターリーピーク」のオープニングを作ってください。
・タイトル：「{T}」
・背景：深い紺 #04122E から、地平線付近が明るい青 #1D4E9E のグラデーション。うっすら雲がたなびく
・山：画面中央に、ひときわ高い山（青のグラデーション＋白い雪の稜線）。SVG で描く
・0.0〜1.5秒：山を下からゆっくりせり上げ、カメラがゆっくり寄る（scale 1.15 → 1）
・1.2〜3.6秒：白く光る星（小さな5角の星）22個が、画面の外から1つずつ弧を描いて飛んできて、山の頂上を囲む楕円の輪に並ぶ（時計回りに順番に、各0.6秒、尾を引く）
・3.6〜4.4秒：輪の中、山の手前にタイトルを、銀色のグラデーション文字（細身のセリフ体 Cinzel など）でフェードイン。下に小さく「A NOBU PRODUCTION」
・4.4秒：全体を一瞬明るく光らせる
・尺：7秒`,
run(H,t){H.abs({inset:'0',background:'linear-gradient(#04122e 0%,#0b2a63 60%,#1d4e9e 100%)'});const W=H.abs({inset:'0'});H.a(W,[{transform:'scale(1.15)'},{transform:'scale(1)'}],{d:3000,e:E.out});
  const svg=H.svg(1600,900,W);const g=H.sv('linearGradient',{id:'mt',x1:0,y1:0,x2:0,y2:1},H.sv('defs',{},svg));H.sv('stop',{offset:0,'stop-color':'#8fb7ff'},g);H.sv('stop',{offset:1,'stop-color':'#0b2a63'},g);
  const M=H.sv('g',{},svg);H.sv('path',{d:'M200 900 L650 480 L800 300 L950 470 L1400 900 Z',fill:'url(#mt)'},M);H.sv('path',{d:'M720 400 L800 300 L880 395 L840 380 L810 410 L780 385 Z',fill:'#fff'},M);H.a(M,[{transform:'translateY(200px)'},{transform:'translateY(0)'}],{d:1500,e:E.out});
  for(let i=0;i<22;i++){const a=-Math.PI/2+i/22*Math.PI*2;const x=800+Math.cos(a)*420,y=360+Math.sin(a)*170;const s=H.abs({left:'0',top:'0',fontSize:'34px',color:'#fff',textShadow:'0 0 12px #fff,0 0 24px #8fb7ff'},W,'★');
    const sx=x+(x<800?-900:900),sy=y-400;H.a(s,[{transform:`translate(${sx}px,${sy}px) scale(.4)`,opacity:0},{transform:`translate(${(sx+x)/2}px,${sy+120}px) scale(.8)`,opacity:1,offset:.5},{transform:`translate(${x-14}px,${y-20}px) scale(1)`,opacity:1}],{d:600,dl:1200+i*110,e:E.out})}
  const T=H.abs({left:'0',right:'0',top:'540px',textAlign:'center'},W);H.el('div',{fontFamily:"'Cinzel','Cormorant Garamond',serif",fontWeight:'700',fontSize:titleSz(t,130,1000)+'px',backgroundImage:'linear-gradient(#fff,#a9b9d6 60%,#fff)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',letterSpacing:'.08em'},T,t.toUpperCase());H.el('div',{fontFamily:F.serif,fontSize:'26px',letterSpacing:'.5em',color:'#c9d6f0',marginTop:'10px'},T,'A NOBU PRODUCTION');
  H.a(T,[{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{d:800,dl:3600});H.a(W,[{filter:'brightness(1)'},{filter:'brightness(1.6)'},{filter:'brightness(1)'}],{d:600,dl:4400,f:'none'});fadeAll(H,W,6200,700)}});

defA({no:'04',cat:'CINEMA',name:'サーチライトの記念碑',en:'Searchlight Monument',lead:'夜空をサーチライトが行き交い、黄金の巨大な立体ロゴがそびえ立つ。',loop:7000,bg:'#071029',
use:'<b>大作感を出したい映像・イベントのオープニング・記念動画</b>に。ファンファーレが似合う、王道のハリウッド風。',
tips:['ロゴは厚みのある金色の立体（text-shadow を何層も重ねる）にすると迫力が出ます','サーチライトは5本以上、交差させながら左右にゆっくり振る','カメラを下から見上げる角度（perspective + rotateX）にするのがコツ'],
p:`夜空をサーチライトの光が何本も行き交い、黄金の巨大な立体ロゴが記念碑のようにそびえ立つ「サーチライトの記念碑」のオープニングを作ってください。
・タイトル：「{T}」（大文字、2行に分けてもよい）
・背景：濃紺 #071029 の夜空。下に暗い街並みのシルエット
・サーチライト：画面下から上へ伸びる、白い光の細長い三角形（グラデーションで先端に向かって透明）を6本。それぞれ ±25° の範囲で、違う速さでゆっくり左右に振る
・ロゴ：太いブロック体（Anton など）の金色の文字。text-shadow を下方向に20層重ねて厚みを出し、面ごとに明るい金・暗い金で立体的に。perspective(800px) rotateX(25°) で、下から見上げる角度にする
・0.0〜3.0秒：カメラがロゴの下から、ゆっくり上昇しながら引いていく（translateY 200px → 0、scale 1.3 → 1）
・ロゴの台座：同じ金色の台形を下に置く
・3.0秒：サーチライトがロゴの後ろで交差し、全体がわずかに光る
・尺：7秒`,
run(H,t){const W=H.abs({inset:'0'});const L=H.abs({inset:'0'},W);for(let i=0;i<6;i++){const b=H.abs({left:200+i*240+'px',top:'0',width:'120px',height:'900px',background:'linear-gradient(transparent,rgba(255,255,240,.35))',clipPath:'polygon(0 0,100% 0,55% 100%,45% 100%)',transformOrigin:'50% 100%',filter:'blur(4px)'},L);H.a(b,[{transform:`rotate(${-25+i*8}deg)`},{transform:`rotate(${25-i*6}deg)`},{transform:`rotate(${-25+i*8}deg)`}],{d:rnd(3000,5000),e:'ease-in-out',i:Infinity})}
  const svg=H.svg(1600,900,W);let d='M0 900';for(let x=0;x<=1600;x+=80)d+=` L${x} ${780-rnd(0,90)} L${x+80} ${780-rnd(0,90)}`;H.sv('path',{d:d+' L1600 900 Z',fill:'#03081a'},svg);
  const C=H.abs({left:'0',right:'0',top:'200px',textAlign:'center',perspective:'800px'},W);const tx=H.el('div',{fontFamily:"'Anton','Dela Gothic One',sans-serif",fontSize:titleSz(t,190,1200)+'px',lineHeight:'1',color:'#f6d77a',transform:'rotateX(25deg)',textShadow:[...Array(20)].map((_,i)=>`0 ${i+1}px 0 ${i<10?'#c9962c':'#8a6418'}`).join(',')+',0 40px 60px rgba(0,0,0,.6)',letterSpacing:'.04em'},C,t.toUpperCase());
  H.el('div',{width:'70%',height:'90px',margin:'40px auto 0',background:'linear-gradient(#e8c25a,#8a6418)',clipPath:'polygon(8% 0,92% 0,100% 100%,0 100%)',transform:'rotateX(25deg)'},C);
  H.a(C,[{transform:'translateY(200px) scale(1.3)'},{transform:'translateY(0) scale(1)'}],{d:3000,e:E.out});H.a(W,[{filter:'brightness(1)'},{filter:'brightness(1.3)'},{filter:'brightness(1)'}],{d:800,dl:3000,f:'none'});fadeAll(H,W,6200,700)}});

defA({no:'05',cat:'CINEMA',name:'夜空の城と光のアーチ',en:'Castle Arc',lead:'夢の国のような、城のシルエットの上を光の弧が魔法のように描かれる。',loop:7000,bg:'#0a1442',
use:'<b>家族の記念動画・結婚式・子どもの成長記録</b>のオープニングに。夢と魔法のような、やさしくきらめく始まり。',
tips:['光の弧は、先端に強い光の点＋後ろにきらめく粒の尾、の組み合わせ','城はシルエットだけにして、窓の明かりを少しだけ灯すと上品','最後に花火を2〜3発上げると、一気に華やかになります'],
p:`夜空に浮かぶ城のシルエットの上を、光の点が魔法のように弧を描いて飛び、きらめく粒の尾を残す「キャッスルアーク」のオープニングを作ってください。
・タイトル：「{T}」
・背景：上 #0A1442 → 下 #3B4BA8 のグラデーション。星が瞬き、遠くに雲がたなびく。下に湖面の反射
・城：画面中央に、尖塔がいくつもある城のシルエット（濃い紺）。窓に小さな黄色い明かり
・1.0〜3.0秒：画面左下から、白く強く光る点が、城の上を大きな弧を描いて右下へ飛ぶ（SVG パスに沿って移動）。通った跡に、金色と白のきらめく粒（200個）を残し、ゆっくり消していく
・3.0〜3.6秒：城の上に花火を3発（金・ピンク・水色の放射状の線）
・3.4〜4.4秒：城の下にタイトルを、手書き風の筆記体（Great Vibes など、白、光のにじみ付き）で、左から書くように現す（clip-path）
・尺：7秒`,
run(H,t){H.abs({inset:'0',background:'linear-gradient(#0a1442,#2b3a8c 70%,#3b4ba8)'});for(let i=0;i<60;i++){const s=dot(H,rnd(0,1600),rnd(0,500),rnd(1,2.5),'#fff');H.a(s,[{opacity:.2},{opacity:1},{opacity:.2}],{d:rnd(1000,2500),dl:-rnd(0,2000),i:Infinity})}
  const svg=H.svg(1600,900);H.sv('path',{d:'M560 700 L560 470 L600 470 L600 400 L620 330 L640 400 L640 470 L700 470 L700 380 L730 260 L760 380 L760 450 L800 450 L800 300 L830 150 L860 300 L860 450 L900 450 L900 380 L930 270 L960 380 L960 470 L1000 470 L1000 400 L1020 330 L1040 400 L1040 470 L1060 470 L1060 700 Z',fill:'#0b123a'},svg);
  [[640,520],[830,380],[930,500],[730,560],[1000,540]].forEach(([x,y])=>H.sv('rect',{x,y,width:14,height:22,rx:7,fill:YE,opacity:.85},svg));H.sv('rect',{x:0,y:700,width:1600,height:200,fill:'#141f5a',opacity:.7},svg);
  const path='M120 760 Q800 -60 1480 760';const c=H.abs({left:'0',top:'0',offsetPath:`path("${path}")`});dot(H,0,0,16,'#fff',c,{boxShadow:'0 0 30px 10px #fff,0 0 60px 20px #ffd78a'});H.a(c,[{offsetDistance:'0%',opacity:0},{offsetDistance:'0%',opacity:1,offset:.01},{offsetDistance:'100%',opacity:1,offset:.99},{offsetDistance:'100%',opacity:0}],{d:2000,dl:1000,e:'ease-in-out'});
  const tmp=H.sv('path',{d:path,fill:'none'},svg);const TL=tmp.getTotalLength();for(let i=0;i<200;i++){const k=i/200;const pt=tmp.getPointAtLength(TL*k);const e=k<.5?2*k*k:1-Math.pow(-2*k+2,2)/2;const sp=dot(H,pt.x+rnd(-14,14),pt.y+rnd(-14,14),rnd(1.5,4),pick(['#fff','#ffd78a','#ffe9b8']));H.a(sp,[{opacity:0},{opacity:1,offset:.05},{opacity:0,transform:`translateY(${rnd(20,80)}px)`}],{d:2200,dl:1000+e*2000})}
  [[600,200,'#ffd78a'],[1000,170,'#ff8fab'],[800,120,'#8fe3ff']].forEach(([x,y,c],j)=>{for(let i=0;i<24;i++){const a=i/24*Math.PI*2;const l=H.abs({left:x+'px',top:y+'px',width:'90px',height:'3px',background:c,transformOrigin:'0 50%',transform:`rotate(${a}rad)`,opacity:0});H.a(l,[{transform:`rotate(${a}rad) translateX(0) scaleX(.2)`,opacity:1},{transform:`rotate(${a}rad) translateX(60px) scaleX(1)`,opacity:0}],{d:900,dl:3000+j*250,e:E.out})}});
  const T=H.abs({left:'0',right:'0',top:'740px',textAlign:'center',fontFamily:"'Great Vibes','Yuji Syuku',cursive",fontSize:titleSz(t,120,1000)+'px',color:'#fff',textShadow:'0 0 20px #ffd78a'},null,t);H.a(T,[{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0 0 0)'}],{d:1000,dl:3400,e:'ease-in-out'})}});

defA({no:'06',cat:'CINEMA',name:'三日月に腰かけて',en:'Moon Fisher',lead:'アニメ映画のロゴのような、三日月に腰かけた子どもが雲の上で釣り糸を垂らす。',loop:7000,bg:'#2b6cb0',
use:'<b>子ども向け作品・ファンタジー・やさしい物語</b>の始まりに。絵本のような温かさと、映画らしい壮大さを両立できます。',
tips:['カメラが雲の間を抜けて、三日月に近づいていく動きが見せ場','人物はシルエットにすると、上品でオリジナルに作れます','釣り糸の先を小さく揺らすと、ぐっと生き生きします'],
p:`雲の間をカメラが抜けていくと、空に浮かぶ三日月に子どもが腰かけて釣り糸を垂らしている「ムーンフィッシャー」のオープニングを作ってください。
・タイトル：「{T}」
・背景：夕暮れから夜へのグラデーション（上 #1E3A8A → 下 #F6AD55）
・雲：白〜淡いピンクのふわふわした雲を、手前・中・奥の3層。0.0〜2.5秒でカメラが前進するように、雲を外側へ大きくしながら流して消す（パララックス）
・三日月：画面右上に、大きな淡い黄色の三日月（光のにじみ付き）
・子ども：三日月の内側のカーブに腰かけたシルエット（紺）。手に釣りざお、細い釣り糸が下へ垂れて、先が小さく揺れる
・2.5〜3.5秒：子どもと三日月がふわっと現れる（不透明度、少し上下に浮遊）
・3.5〜4.5秒：画面下にタイトルを、やさしい丸みのある太字（白、紺の縁取り）で、1文字ずつ跳ねるように出す
・尺：7秒`,
run(H,t){H.abs({inset:'0',background:'linear-gradient(#1e3a8a,#7c5cbf 55%,#f6ad55)'});const M=H.abs({left:'900px',top:'90px',width:'380px',height:'380px'});H.abs({inset:'0',borderRadius:'50%',boxShadow:'-70px 30px 0 0 #fff3c4',filter:'drop-shadow(0 0 30px #fff3c4)'},M);
  const kid=H.svg(200,240,M,{left:'60px',top:'200px'});H.sv('circle',{cx:80,cy:40,r:28,fill:'#1a2552'},kid);H.sv('path',{d:'M55 70 L105 70 L115 150 L45 150 Z',fill:'#1a2552'},kid);H.sv('path',{d:'M60 150 L40 200 M100 150 L120 200',stroke:'#1a2552','stroke-width':16,'stroke-linecap':'round'},kid);H.sv('path',{d:'M100 90 L190 10',stroke:'#1a2552','stroke-width':6},kid);
  const line=H.abs({left:'250px',top:'210px',width:'2px',height:'260px',background:'rgba(255,255,255,.8)',transformOrigin:'50% 0'},M);H.a(line,[{transform:'rotate(-4deg)'},{transform:'rotate(4deg)'},{transform:'rotate(-4deg)'}],{d:2400,e:'ease-in-out',i:Infinity});
  H.a(M,[{opacity:0,transform:'translateY(30px)'},{opacity:0,offset:.36},{opacity:1,transform:'translateY(0)',offset:.5},{transform:'translateY(-12px)',offset:.75},{transform:'translateY(0)'}],{d:7000,e:'ease-in-out'});
  for(let i=0;i<14;i++){const lay=i%3;const c=H.abs({left:rnd(-100,1500)+'px',top:rnd(100,800)+'px',width:rnd(300,500)+'px',height:'120px',borderRadius:'60px',background:pick(['#fff','#ffe4ec']),opacity:.9,filter:'blur(2px)',boxShadow:'80px -40px 0 10px currentColor'});c.style.color=c.style.background;
    const dx=(parseFloat(c.style.left)-800)*1.5;H.a(c,[{transform:'scale(1)',opacity:.95},{transform:`translate(${dx}px,${(parseFloat(c.style.top)-450)*1.5}px) scale(${3+lay})`,opacity:0}],{d:2500-lay*300,dl:lay*200,e:'ease-in',f:'forwards'})}
  const T=H.abs({left:'0',right:'0',top:'690px',textAlign:'center',fontFamily:F.pop,fontSize:titleSz(t,110,1000)+'px',color:'#fff',WebkitTextStroke:'8px #1a2552',paintOrder:'stroke fill'});H.chars(t,T).forEach((c,i)=>H.a(c,[{transform:'translateY(40px) scale(.5)',opacity:0},{transform:'translateY(-14px) scale(1.1)',opacity:1,offset:.6},{transform:'translateY(0) scale(1)',opacity:1}],{d:450,dl:3500+i*70,e:E.out}))}});

defA({no:'07',cat:'CINEMA',name:'跳ねるランプ',en:'Hopping Lamp',lead:'3DCGアニメのロゴのように、デスクライトがぴょこぴょこ跳ねてきて文字をつぶす。',loop:7000,bg:'#000',
use:'<b>コミカルな作品・ものづくり・3DCG作品</b>の冒頭に。キャラクターのような小道具が主役になる、遊び心のある始まり。',
tips:['ランプは「ため → 跳ぶ → 着地で潰れる」のアニメーション原則で動かすと、生きているように見えます','つぶされる文字は「i」などの細い文字が◎','最後にランプがこちらを向いて光を当てると、キャラクターらしさが出ます'],
p:`デスクライト（電気スタンド）が、キャラクターのようにぴょこぴょこ跳ねてきて、タイトルの1文字の上に飛び乗ってつぶし、こちらを向く「ホッピングランプ」のオープニングを作ってください。
・タイトル：「{T}」
・背景：黒から、床に白い光のスポットが当たるグラデーション
・タイトル：床の上に、白く太い立体的な文字（Fredoka 700 など）を並べる（少し影）
・ランプ：銀色のデスクライト（丸い台座、2本のアーム、円すい形のかさ、中に光る電球）を CSS/SVG で描き、関節ごとに回転できるようにする
・0.5〜3.0秒：ランプが画面右から3回ぴょんぴょん跳ねて、タイトルの「i」（なければ最後の文字）の上へ。跳ぶ前に体を縮め（ため）、着地で台座が潰れる
・3.0秒：文字の上に着地して、その文字を上から押しつぶす（scaleY 1 → 0.2）。ランプはぴょこっと文字の後ろに降りる
・3.6秒：ランプがかさをこちらに向けて、光を画面に当てる（白い光の円が広がる）
・尺：7秒`,
run(H,t){H.abs({inset:'0',background:'radial-gradient(ellipse at 50% 85%,#3a3a3a,#000 60%)'});const row=H.abs({left:'0',right:'0',top:'470px',display:'flex',justifyContent:'center',alignItems:'flex-end',fontFamily:"'Fredoka','Mochiy Pop One',sans-serif",fontWeight:'700',fontSize:titleSz(t,170,1100)+'px',color:'#fff',textShadow:'0 8px 0 #999,0 20px 30px rgba(0,0,0,.5)',lineHeight:'1'});
  const cs=H.chars(t,row,{transformOrigin:'50% 100%'});let ti=[...t].lastIndexOf('i');if(ti<0)ti=cs.length-1;
  H.wait(30,()=>{const r=cs[ti].getBoundingClientRect(),s=H.S.getBoundingClientRect(),k=1600/s.width;const tx=(r.left-s.left+r.width/2)*k,ty=(r.top-s.top)*k;
    const L=H.abs({left:'0',top:'0',width:'160px',height:'200px'});const lb=H.svg(160,200,L);H.sv('ellipse',{cx:80,cy:190,rx:60,ry:12,fill:'#c8ccd6'},lb);H.sv('path',{d:'M80 185 L60 110 L105 50',stroke:'#c8ccd6','stroke-width':10,fill:'none','stroke-linecap':'round'},lb);H.sv('path',{d:'M95 20 L150 45 L120 95 Z',fill:'#e1e4ea'},lb);H.sv('circle',{cx:132,cy:72,r:12,fill:'#fff6c8'},lb);
    const land=ty-200;const sx=1700;const k2=[];const hops=[[sx,land+130],[sx-280,land+130],[(sx-280+tx-80)/2+120,land+130],[tx-80,land]];
    hops.forEach(([x,y],i)=>{const o=i/3*.4;k2.push({transform:`translate(${x}px,${y}px) scale(1,1)`,offset:.07+o},{transform:`translate(${x}px,${y}px) scale(1.15,.8)`,offset:.07+o+.03})});
    const kk=[{transform:`translate(${sx}px,${land+130}px)`,offset:0}];for(let i=0;i<hops.length-1;i++){const [x1,y1]=hops[i],[x2,y2]=hops[i+1];const o=.07+i/3*.4;kk.push({transform:`translate(${x1}px,${y1}px) scale(1.15,.8)`,offset:o+.03},{transform:`translate(${(x1+x2)/2}px,${Math.min(y1,y2)-200}px) scale(.9,1.15)`,offset:o+.09},{transform:`translate(${x2}px,${y2}px) scale(1.15,.8)`,offset:o+.13})}
    kk.push({transform:`translate(${tx-80}px,${land}px) scale(1,1)`,offset:.48},{transform:`translate(${tx+60}px,${land+130}px) scale(1,1)`,offset:.55},{transform:`translate(${tx+60}px,${land+130}px) scale(1,1)`,offset:1});H.a(L,kk,{d:7000,e:'ease-in-out'});
    H.a(cs[ti],[{transform:'scaleY(1)'},{transform:'scaleY(1)',offset:.43},{transform:'scaleY(.2)',offset:.47},{transform:'scaleY(.2)'}],{d:7000});
    const glow=H.abs({left:'0',right:'0',top:'0',bottom:'0',background:'radial-gradient(circle at 60% 40%,rgba(255,246,200,.6),transparent 40%)',opacity:0});H.a(glow,[{opacity:0},{opacity:0,offset:.52},{opacity:1,offset:.6},{opacity:.8}],{d:7000})})}});

defA({no:'08',cat:'CINEMA',name:'雲間の金の盾',en:'Golden Shield',lead:'映画会社のロゴのように、雲が晴れて金色の盾のエンブレムが現れる。',loop:7000,bg:'#5e86b8',
use:'<b>重厚なドラマ・家族の歴史・会社の周年記念</b>の映像に。格調高く「伝統ある作品」の印象を与えます。',
tips:['盾は金属の質感（明るい金→暗い金の縦グラデーション＋縁取り）が命','雲は手前から外へ流して、カメラが雲を抜ける感覚に','盾の中の文字は、頭文字2つを組み合わせたモノグラムにするとそれらしい'],
p:`空の雲の間をカメラが抜けると、金色に輝く盾のエンブレムが現れ、その中にタイトルの頭文字が刻まれている「ゴールデンシールド」のオープニングを作ってください。
・タイトル：「{T}」
・背景：夕暮れの空（上 #5E86B8 → 下 #F2D7A6）。太陽の光の筋が斜めに差し込む
・雲：白い雲を何層も重ね、0.0〜2.0秒でカメラが前進するように外側へ流して晴らす
・盾：画面中央に、上が平ら・下がとがった盾の形。金色の縦グラデーション（#FFF1B5 → #D4A23A → #8A6418）と、外側に太い金の縁取り。SVG で描く
・盾の中：タイトルの頭文字（2文字）を、太いセリフ体で重ねたモノグラム（濃い金）
・2.0〜3.5秒：盾が遠くから手前へ近づき（scale 0.4 → 1）、光の反射が斜めに1回走る
・3.6秒：盾の下に、タイトルを太いセリフ体（Playfair Display 900、濃い紺）で横長の帯の中に表示
・尺：7秒`,
run(H,t){H.abs({inset:'0',background:'linear-gradient(#5e86b8,#a8bfdc 55%,#f2d7a6)'});for(let i=0;i<3;i++)H.abs({left:200+i*400+'px',top:'-100px',width:'120px',height:'1100px',background:'linear-gradient(rgba(255,255,255,.35),transparent)',transform:'rotate(20deg)',filter:'blur(6px)'});
  const S=H.abs({left:'560px',top:'130px',width:'480px',height:'560px'});const svg=H.svg(480,560,S);const gd=H.sv('linearGradient',{id:'gs',x1:0,y1:0,x2:0,y2:1},H.sv('defs',{},svg));[['0','#fff1b5'],['.5','#d4a23a'],['1','#8a6418']].forEach(([o,c])=>H.sv('stop',{offset:o,'stop-color':c},gd));
  H.sv('path',{d:'M20 20 H460 V260 Q460 450 240 540 Q20 450 20 260 Z',fill:'url(#gs)',stroke:'#7a5510','stroke-width':14},svg);H.sv('path',{d:'M50 50 H430 V260 Q430 420 240 505 Q50 420 50 260 Z',fill:'none',stroke:'#fff1b5','stroke-width':4,opacity:.7},svg);
  const ini=(t.match(/\b\w/g)||[t[0]]).slice(0,2).join('').toUpperCase();const tx=H.sv('text',{x:240,y:330,'text-anchor':'middle','font-family':"'Playfair Display',serif",'font-weight':900,'font-size':ini.length>1?200:260,fill:'#7a5510'},svg);tx.textContent=ini;
  const sh=H.abs({inset:'0',background:'linear-gradient(110deg,transparent 40%,rgba(255,255,255,.7) 50%,transparent 60%)',backgroundSize:'250% 100%',backgroundPosition:'150% 0',clipPath:'path("M20 20 H460 V260 Q460 450 240 540 Q20 450 20 260 Z")'},S);
  H.a(S,[{transform:'scale(.4)',opacity:0},{transform:'scale(.4)',opacity:0,offset:.25},{transform:'scale(1)',opacity:1,offset:.5},{transform:'scale(1.03)'}],{d:7000,e:E.out});H.a(sh,[{backgroundPosition:'150% 0'},{backgroundPosition:'-50% 0'}],{d:900,dl:3000});
  for(let i=0;i<16;i++){const c=H.abs({left:rnd(-200,1400)+'px',top:rnd(0,800)+'px',width:rnd(400,700)+'px',height:'180px',borderRadius:'90px',background:'#fff',filter:'blur(14px)'});const dx=(parseFloat(c.style.left)+200-800)*2;H.a(c,[{transform:'scale(1)',opacity:1},{transform:`translate(${dx}px,${(parseFloat(c.style.top)-450)*2}px) scale(3)`,opacity:0}],{d:2000,dl:i*30,e:'ease-in',f:'forwards'})}
  const B=H.abs({left:'0',right:'0',top:'720px',display:'flex',justifyContent:'center'});H.el('div',{background:'#f2d7a6',border:'4px solid #7a5510',padding:'10px 60px',fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:titleSz(t,80,900)+'px',color:'#1b2a4a',letterSpacing:'.06em'},B,t.toUpperCase());H.a(B,[{opacity:0,transform:'scaleX(.6)'},{opacity:1,transform:'scaleX(1)'}],{d:600,dl:3600})}});

defA({no:'09',cat:'CINEMA',name:'砂嵐からロゴ',en:'Static Reveal',lead:'有料チャンネルの冒頭のような、テレビの砂嵐が晴れて銀色のロゴが現れる。',loop:6000,bg:'#000',
use:'<b>大人向けドラマ・ドキュメンタリー・ミステリー</b>の冒頭に。ザーッという音とともに始まる、クールで硬派な演出。',
tips:['砂嵐は Canvas で毎フレームランダムな白黒の点を描くと本物らしい','砂嵐が「ロゴの形にだけ」晴れていくのが見せ場','低い「ブーン」という音を合わせると、一気に雰囲気が出ます'],
p:`テレビの砂嵐（ノイズ）の画面から、だんだんノイズが晴れていき、銀色のロゴが浮かび上がる「スタティックリビール」のオープニングを作ってください。
・タイトル：「{T}」（大文字）
・0.0〜1.5秒：画面全体を白黒の砂嵐（Canvas で毎フレーム、ランダムな明るさの2px角の点を描く）で埋める。ときどき横に走る白い帯（ノイズのゆがみ）
・1.5〜3.0秒：砂嵐の中央から、ロゴの形の部分だけノイズが晴れていき（文字の形で切り抜き）、同時に周りの砂嵐はだんだん暗く薄くなる
・ロゴ：太く幅広のセリフ体（Abril Fatface など）、銀色のグラデーション（#FFFFFF → #8A8F98 → #FFFFFF）。文字の中にもごく薄くノイズが残る
・3.0秒：砂嵐が完全に消えて黒背景になり、ロゴが一瞬強く光る（白いにじみ）
・3.0〜5.0秒：ロゴの前を、光の反射が横に1回ゆっくり走る
・尺：6秒`,
run(H,t){const T=t.toUpperCase();const c=H.canvas();const x=c.getContext('2d');const im=x.createImageData(400,225);const off=document.createElement('canvas');off.width=400;off.height=225;const ox=off.getContext('2d');
  const L=H.box();const el=H.el('div',{fontFamily:"'Abril Fatface','Shippori Mincho B1',serif",fontSize:titleSz(T,220,1300)+'px',backgroundImage:'linear-gradient(#fff,#8a8f98 55%,#fff)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',letterSpacing:'.04em',whiteSpace:'nowrap',lineHeight:'1'},L,T);
  H.a(el,[{opacity:0,filter:'blur(8px)'},{opacity:0,offset:.25},{opacity:1,filter:'blur(0)',offset:.5},{opacity:1,filter:'drop-shadow(0 0 30px #fff)',offset:.53},{opacity:1,filter:'drop-shadow(0 0 0 #fff)',offset:.6},{opacity:1}],{d:6000});
  const sh=H.box();BIG(H,T,{fontFamily:"'Abril Fatface',serif",fontSize:titleSz(T,220,1300)+'px',color:'transparent',backgroundImage:'linear-gradient(110deg,transparent 42%,rgba(255,255,255,.9) 50%,transparent 58%)',backgroundSize:'250% 100%',WebkitBackgroundClip:'text',backgroundClip:'text',letterSpacing:'.04em'},sh);H.a(sh.firstChild,[{backgroundPosition:'150% 0'},{backgroundPosition:'-50% 0'}],{d:2000,dl:3000,e:'ease-in-out'});
  H.raf(s=>{const k=Math.max(0,Math.min(1,(s-1.5)/1.5));if(s>3.1){c.style.opacity=0;return}const d=im.data;for(let i=0;i<d.length;i+=4){const v=Math.random()*255*(1-k*.9);d[i]=d[i+1]=d[i+2]=v;d[i+3]=255}ox.putImageData(im,0,0);x.imageSmoothingEnabled=false;x.drawImage(off,0,0,1600,900);
    if(Math.random()<.3){x.fillStyle='rgba(255,255,255,.4)';x.fillRect(0,rnd(0,900),1600,rnd(4,20))}c.style.opacity=1-k*.7})}});

defA({no:'10',cat:'CINEMA',name:'銀幕のクロームロゴ',en:'Chrome Title',lead:'大作映画のような、鏡のように光る金属のタイトルが暗闇から回り込んでくる。',loop:6500,bg:'#000',
use:'<b>アクション・SF・ゲーム実況の冒頭</b>に。重厚な金属の光沢で、「大作」の空気をまとえます。',
tips:['金属は「明・暗・明・暗」と細かい縞のグラデーションで反射を表現','文字を奥から回り込ませる（rotateY）と、カメラが回る映画的な動きに','レンズフレアを1つ足すと、劇場版らしさが一気に増します'],
p:`暗闇の奥から、鏡のように光るクローム（金属）のタイトルが、ゆっくり回り込みながら手前に現れる「クロームタイトル」のオープニングを作ってください。
・タイトル：「{T}」（大文字）
・背景：黒。中央にうっすら青い光のもや
・タイトル：太いブロック体（Bebas Neue など）。塗りは金属の縞のグラデーション（#FFFFFF 0%, #9BA3AF 30%, #2F343B 48%, #E5E7EB 52%, #6B7280 75%, #FFFFFF 100%）を background-clip: text で。後ろに text-shadow を10層重ねて厚みを出す
・0.0〜3.0秒：perspective(1000px) で、rotateY 70° → 0、translateZ −1500px → 0、不透明度 0 → 1 へ、ゆっくり回り込みながら手前に来る（cubic-bezier(.16,1,.3,1)）
・2.6秒：タイトルの左上から右下へ、強い光の反射（白い斜めの帯）が走り、右上にレンズフレア（光の玉と横に伸びる光の筋）が一瞬光る
・3.0〜5.5秒：タイトルがゆっくり寄り続ける（scale 1 → 1.05）
・尺：6.5秒`,
run(H,t){const T=t.toUpperCase();H.abs({inset:'0',background:'radial-gradient(ellipse at center,rgba(60,90,160,.35),transparent 60%)'});const P=H.box({perspective:'1000px'});const metal='linear-gradient(180deg,#fff 0%,#9ba3af 30%,#2f343b 48%,#e5e7eb 52%,#6b7280 75%,#fff 100%)';
  const W=H.el('div',{position:'relative'},P);const sz=titleSz(T,240,1300);H.el('div',{fontFamily:"'Bebas Neue','Dela Gothic One',sans-serif",fontSize:sz+'px',lineHeight:'1',backgroundImage:metal,WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',filter:'drop-shadow(0 6px 0 #1a1d22) drop-shadow(0 20px 30px rgba(0,0,0,.7))',letterSpacing:'.04em',whiteSpace:'nowrap'},W,T);
  const sh=H.el('div',{position:'absolute',left:'0',top:'0',fontFamily:"'Bebas Neue',sans-serif",fontSize:sz+'px',lineHeight:'1',backgroundImage:'linear-gradient(120deg,transparent 42%,rgba(255,255,255,.95) 50%,transparent 58%)',backgroundSize:'250% 100%',backgroundPosition:'150% 0',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',letterSpacing:'.04em',whiteSpace:'nowrap'},W,T);
  H.a(W,[{transform:'rotateY(70deg) translateZ(-1500px)',opacity:0},{transform:'rotateY(0) translateZ(0)',opacity:1,offset:.46},{transform:'scale(1.05)'}],{d:6500,e:E.out});H.a(sh,[{backgroundPosition:'150% 0'},{backgroundPosition:'-50% 0'}],{d:900,dl:2600,f:'none'});
  const fl=H.abs({left:'1150px',top:'250px'});dot(H,0,0,30,'#fff',fl,{boxShadow:'0 0 60px 30px rgba(180,210,255,.8)'});H.abs({left:'-500px',top:'-2px',width:'1000px',height:'4px',background:'linear-gradient(90deg,transparent,#cfe0ff,transparent)'},fl);H.a(fl,[{opacity:0,transform:'scale(.4)'},{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(1.4)'}],{d:900,dl:2600});fadeAll(H,P,5700,700)}});

/* SHOW */
defA({no:'11',cat:'SHOW',name:'夜景タイムラプスとリアリティ番組',en:'City Timelapse',lead:'恋愛リアリティ番組の冒頭のような、街の夜景が流れて、細い白文字のタイトルがすっと出る。',loop:8000,bg:'#0b1026',
use:'<b>Vlog・ルームツアー・シェアハウス企画・日常系のシリーズ</b>に。おしゃれで、等身大の「物語が始まる」空気をつくれます。',
tips:['タイトルは細く小さめ・小文字にするのが、こなれた雰囲気のコツ','車のライトの光の筋を流すと、一気にタイムラプスらしくなります','BGMは軽いポップスやインディーロックが合います'],
p:`恋愛リアリティ番組の冒頭のような、都会の夜景がタイムラプスで流れ、車のライトが光の筋になって走る中に、細い白文字のタイトルとナレーション風の一文がすっと現れる「シティタイムラプス」のオープニングを作ってください。
・タイトル：「{T}」（小文字）
・背景：夕暮れから夜へ空の色がゆっくり変わる（紫 → 濃紺）。ビル群のシルエット（窓の明かりがランダムに点いたり消えたりする＝タイムラプス感）
・手前の道路：車のライトを、白とオレンジ・赤の細長い光の筋（長さ200〜500px、ぼかし）にして、左右に速く流し続ける
・雲：空を速く流れる（タイムラプス感）
・1.0〜2.0秒：画面中央に、小さな一文「この物語に、台本はありません。」を、細いゴシック（Noto Sans JP 300、白、字間広め）でフェードイン → 1.5秒後にフェードアウト
・3.5〜4.5秒：タイトルを、細身の欧文（Montserrat 300、小文字、字間0.15em）で中央にフェードイン。下に細い白い線が左右に伸びる
・尺：8秒`,
run(H,t){const sky=H.abs({inset:'0'});H.a(sky,[{background:'linear-gradient(#6b4a8c,#e98a7a)'},{background:'linear-gradient(#0b1026,#2b3a6e)'}],{d:6000,e:'ease-in-out'});
  for(let i=0;i<6;i++){const c=H.abs({left:'0',top:rnd(40,260)+'px',width:rnd(300,600)+'px',height:'50px',borderRadius:'25px',background:'rgba(255,255,255,.18)',filter:'blur(8px)'});H.a(c,[{transform:'translateX(1700px)'},{transform:'translateX(-700px)'}],{d:rnd(3000,5000),dl:-rnd(0,4000),e:E.lin,i:Infinity})}
  const wins=[];let x=0;while(x<1600){const w=rnd(80,180),h=rnd(220,520);const b=H.abs({left:x+'px',top:740-h+'px',width:w+'px',height:h+'px',background:'#0a0f24'});for(let r=0;r<h/36-1;r++)for(let c=0;c<w/28-1;c++)wins.push(H.abs({left:10+c*28+'px',top:16+r*36+'px',width:'12px',height:'16px',background:'#ffd27a',opacity:Math.random()<.4?1:0},b));x+=w+rnd(4,20)}
  let k=-1;H.raf(s=>{const q=Math.floor(s/.15);if(q!==k){k=q;for(let i=0;i<25;i++){const w=pick(wins);w.style.opacity=w.style.opacity==='1'?0:1}}});H.abs({left:'0',right:'0',top:'740px',bottom:'0',background:'#05081a'});
  for(let i=0;i<24;i++){const red=i%2;const l=H.abs({left:'0',top:760+rnd(0,120)+'px',width:rnd(200,500)+'px',height:'4px',borderRadius:'2px',background:red?'linear-gradient(90deg,transparent,#ff3b3b)':'linear-gradient(90deg,transparent,#fff,#ffd27a)',filter:'blur(1px)'});H.a(l,red?[{transform:'translateX(1700px)'},{transform:'translateX(-600px)'}]:[{transform:'translateX(-600px)'},{transform:'translateX(1700px)'}],{d:rnd(600,1200),dl:-rnd(0,1200),e:E.lin,i:Infinity})}
  const n=H.abs({left:'0',right:'0',top:'420px',textAlign:'center',fontFamily:F.sans,fontWeight:'400',fontSize:'38px',letterSpacing:'.3em',color:'#fff'},null,'この物語に、台本はありません。');H.a(n,[{opacity:0},{opacity:1,offset:.25},{opacity:1,offset:.75},{opacity:0}],{d:2500,dl:1000});
  const T=H.abs({left:'0',right:'0',top:'380px',display:'flex',flexDirection:'column',alignItems:'center',gap:'24px'});H.el('div',{fontFamily:"'Montserrat','Zen Kaku Gothic New',sans-serif",fontWeight:'300',fontSize:titleSz(t,110,1100)+'px',letterSpacing:'.15em',color:'#fff'},T,t.toLowerCase());const ul=H.el('div',{width:'420px',height:'2px',background:'#fff'},T);
  H.a(T,[{opacity:0},{opacity:1}],{d:1000,dl:3800});H.a(ul,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:1000,dl:4200,e:'ease-in-out'})}});

defA({no:'12',cat:'SHOW',name:'密着ドキュメンタリー',en:'Documentary Portrait',lead:'人物密着番組のような、白黒の人物のシルエットに筆記体の名前が流れるように書かれる。',loop:7000,bg:'#0d0d0d',
use:'<b>人物紹介・職人の密着・社長インタビュー・自己紹介動画</b>に。1人の人生に寄り添う、情熱的で品のある始まり。',
tips:['人物は横顔か後ろ姿のシルエットにすると、誰でも使えて品が出ます','タイトルの筆記体は、線を描くように左から現すのがポイント','バイオリンのような情熱的なBGMがよく合います'],
p:`人物に密着するドキュメンタリー番組の冒頭のような、白黒の人物のシルエットがゆっくり歩き、筆記体のタイトルが流れるように書かれていく「ドキュメンタリーポートレート」のオープニングを作ってください。
・タイトル：「{T}」
・背景：ほぼ黒 #0D0D0D に、左から差し込む白い光（斜めの光の帯、ぼかし）。フィルムのざらつき（ノイズ）を薄く重ねる
・人物：画面右寄りに、横向きの人物の上半身シルエット（濃い灰色、光が当たる輪郭だけ白く光る）。0.0〜5.0秒でゆっくり左へ歩くように動き、カメラもゆっくり寄る
・1.5〜3.5秒：画面左に、タイトルを流れるような筆記体（Great Vibes など、白）で、ペンで書くように左から現す（clip-path を少しずつ広げる）
・3.5秒：タイトルの下に、小さく「─ 情熱の、その先へ ─」（明朝体、白、字間広め）をフェードイン
・画面全体に、時々ちらつく光（明るさ 0.95〜1.05）
・尺：7秒`,
run(H,t){const W=H.abs({inset:'0'});H.abs({left:'-200px',top:'-200px',width:'700px',height:'1400px',background:'linear-gradient(90deg,rgba(255,255,255,.18),transparent)',transform:'rotate(-20deg)',filter:'blur(30px)'},W);
  const P=H.svg(600,800,W,{left:'900px',top:'120px'});H.sv('path',{d:'M300 40 C360 40 400 90 400 150 C400 200 380 230 360 250 L420 300 C500 330 540 400 560 520 L580 800 L60 800 L80 520 C100 400 150 330 230 300 L250 260 C220 240 200 200 200 150 C200 90 240 40 300 40 Z',fill:'#262626',stroke:'#ddd','stroke-width':3},P);
  H.a(P,[{transform:'translateX(0) scale(1)'},{transform:'translateX(-120px) scale(1.06)'}],{d:7000,e:E.lin});
  const T=H.abs({left:'120px',top:'330px',width:'800px'},W);const tt=H.el('div',{fontFamily:"'Great Vibes','Yuji Syuku',cursive",fontSize:titleSz(t,150,800)+'px',color:'#fff',lineHeight:'1.1'},T,t);H.a(tt,[{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0 0 0)'}],{d:2000,dl:1500,e:'cubic-bezier(.4,0,.2,1)'});
  const sub=H.el('div',{fontFamily:F.min,fontSize:'30px',letterSpacing:'.4em',color:'#bbb',marginTop:'24px'},T,'─ 情熱の、その先へ ─');H.a(sub,[{opacity:0},{opacity:1}],{d:1000,dl:3500});
  const c=H.canvas();const x=c.getContext('2d');c.style.opacity=.08;H.raf(()=>{const im=x.createImageData(320,180);for(let i=0;i<im.data.length;i+=4){const v=Math.random()*255;im.data[i]=im.data[i+1]=im.data[i+2]=v;im.data[i+3]=255}const o=document.createElement('canvas');o.width=320;o.height=180;o.getContext('2d').putImageData(im,0,0);x.drawImage(o,0,0,1600,900);W.style.filter=`grayscale(1) brightness(${rnd(.95,1.05).toFixed(2)})`});fadeAll(H,W,6200,700)}});

defA({no:'13',cat:'SHOW',name:'しずくと波紋',en:'Water Drop',lead:'仕事の流儀を描く番組のような、水面に落ちたしずくの波紋からタイトルが浮かぶ。',loop:7000,bg:'#02060f',
use:'<b>プロの仕事紹介・インタビュー・企業のブランド動画</b>に。静けさと緊張感のある、凛とした始まり方です。',
tips:['しずくが落ちる瞬間までは、音を消して静かにするのが効果的','波紋は3重にして、外側ほど薄く・遅く広げると美しい','タイトルは明朝体の太字にすると、凛とした印象に'],
p:`暗い水面にひとしずくが落ち、広がる波紋の中からタイトルがゆっくり浮かび上がる「ウォータードロップ」のオープニングを作ってください。
・タイトル：「{T}」
・背景：ほぼ黒の深い紺 #02060F。画面下半分は水面（奥に向かって暗くなるグラデーション、かすかに揺れる光の反射）
・0.0〜1.0秒：画面上から、白く光る小さなしずく（涙型）がゆっくり落ちてくる
・1.0秒：水面に当たった瞬間、白い光が一瞬広がり、楕円の波紋（線幅3px、白）を3重に、時間差（0.25秒）で広げながら消す（2.5秒）
・水面から小さな水しぶきの点が数個跳ね上がって落ちる
・2.0〜3.5秒：波紋の中心の上に、タイトルを太い明朝体（Shippori Mincho B1 800、白）で、下から水が引くように現す（mask を下から上へ）
・タイトルの下に、細い横線と小さな英字のサブタイトル「THE PROFESSIONAL WAY」
・尺：7秒`,
run(H,t){H.abs({left:'0',right:'0',top:'500px',bottom:'0',background:'linear-gradient(#0a1830,#02060f)'});for(let i=0;i<8;i++){const r=H.abs({left:rnd(100,1300)+'px',top:rnd(520,880)+'px',width:rnd(80,200)+'px',height:'3px',background:'rgba(255,255,255,.12)',borderRadius:'2px'});H.a(r,[{opacity:.1,transform:'translateX(0)'},{opacity:.4,transform:'translateX(30px)'},{opacity:.1,transform:'translateX(0)'}],{d:rnd(2000,3500),i:Infinity})}
  const dp=H.abs({left:'788px',top:'0',width:'24px',height:'36px',borderRadius:'50% 50% 50% 50% / 60% 60% 40% 40%',background:'#fff',boxShadow:'0 0 20px #9fd0ff'});H.a(dp,[{transform:'translateY(-60px)',opacity:1},{transform:'translateY(560px)',opacity:1,offset:.98},{transform:'translateY(560px)',opacity:0}],{d:1000,e:'cubic-bezier(.55,0,1,.45)'});
  const fl=H.abs({left:'500px',top:'440px',width:'600px',height:'240px',borderRadius:'50%',background:'radial-gradient(#fff,transparent 60%)',opacity:0});H.a(fl,[{opacity:.9,transform:'scale(.3)'},{opacity:0,transform:'scale(1.4)'}],{d:600,dl:1000,f:'none'});
  for(let i=0;i<3;i++){const r=H.abs({left:'700px',top:'560px',width:'200px',height:'60px',borderRadius:'50%',border:'3px solid rgba(255,255,255,.9)',opacity:0});H.a(r,[{transform:'scale(.2)',opacity:1},{transform:'scale(6)',opacity:0}],{d:2500,dl:1000+i*250,e:E.out})}
  for(let i=0;i<7;i++){const s=dot(H,800,590,rnd(3,6),'#cfe8ff');const dx=rnd(-120,120);H.a(s,[{transform:'translate(0,0)',opacity:0},{transform:`translate(${dx*.5}px,-${rnd(80,160)}px)`,opacity:1,offset:.45},{transform:`translate(${dx}px,0)`,opacity:0}],{d:900,dl:1000,e:'ease-out'})}
  const T=H.abs({left:'0',right:'0',top:'250px',textAlign:'center'});H.el('div',{fontFamily:F.min,fontWeight:'800',fontSize:titleSz(t,120,1100)+'px',color:'#fff',letterSpacing:'.1em'},T,t);const ln=H.el('div',{width:'300px',height:'1px',background:'#fff',margin:'24px auto 14px'},T);H.el('div',{fontFamily:F.serif,fontSize:'26px',letterSpacing:'.5em',color:'#9fb6d6'},T,'THE PROFESSIONAL WAY');
  H.a(T,[{clipPath:'inset(100% 0 0 0)'},{clipPath:'inset(0 0 0 0)'}],{d:1500,dl:2000,e:'cubic-bezier(.4,0,.2,1)'});H.a(ln,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:800,dl:3000})}});

defA({no:'14',cat:'SHOW',name:'車窓から',en:'Train Window',lead:'鉄道の旅番組のような、列車の窓の外を景色が流れ、タイトルがやさしく出る。',loop:8000,bg:'#2a1d14',
use:'<b>旅行Vlog・帰省の記録・のんびり系の番組</b>の冒頭に。ゆったりと流れる時間を感じさせる、穏やかな始まり。',
tips:['窓枠を手前に置くだけで、一気に「車内から見ている」感じになります','景色は遠く（山）をゆっくり、近く（電柱）を速く流すのがコツ','列車の揺れを表すため、全体をほんの少し上下に揺らします'],
p:`列車の窓から外の景色が流れていくのを眺めているような、のどかな「トレインウィンドウ」のオープニングを作ってください。
・タイトル：「{T}」
・手前：木目調の窓枠（角の丸い窓、茶色の枠、下に小さなテーブルの縁）。窓ガラスにうっすら反射の光
・窓の外（すべて右から左へ流す・パララックス）：空と雲（ゆっくり）、遠くの山（16秒で1周期）、田んぼと林（6秒）、電柱（1.2秒、時々通過）
・季節は初夏：空は水色、山は青緑、田んぼは黄緑
・列車の揺れ：画面全体を ±2px、0.4秒周期で小さく上下させる。レールのつなぎ目のリズム（タタン、タタン）で時々カクッと揺らす
・2.0〜3.0秒：窓の下部に、タイトルをやわらかい明朝体（Shippori Mincho B1、白、うっすら影）でフェードイン。上に小さく「THE WORLD THROUGH THE WINDOW」
・尺：8秒`,
run(H,t){const V=H.abs({left:'200px',top:'90px',width:'1200px',height:'620px',borderRadius:'60px',overflow:'hidden',background:'#9fd6ff'});const svg=H.svg(1200,620,V);
  const lay=(build,T)=>{const g=H.sv('g',{},svg);build(g,0);build(g,1200);H.a(g,[{transform:'translateX(0)'},{transform:'translateX(-1200px)'}],{d:T,e:E.lin,i:Infinity})};
  lay((g,o)=>{for(let i=0;i<3;i++)H.sv('ellipse',{cx:o+i*400+150,cy:90+i*20,rx:120,ry:30,fill:'#fff',opacity:.8},g)},24000);lay((g,o)=>H.sv('path',{d:`M${o} 360 L${o+180} 220 L${o+360} 330 L${o+560} 190 L${o+800} 340 L${o+1000} 230 L${o+1200} 340 V620 H${o}Z`,fill:'#5c9e8f'},g),16000);
  lay((g,o)=>{H.sv('rect',{x:o,y:400,width:1200,height:220,fill:'#b6d96a'},g);for(let i=0;i<6;i++)H.sv('circle',{cx:o+i*220+60,cy:400,r:rnd(40,70),fill:'#3f8a4a'},g)},6000);
  lay((g,o)=>{H.sv('rect',{x:o+300,y:120,width:14,height:500,fill:'#4a3a2c'},g);H.sv('line',{x1:o,y1:160,x2:o+1200,y2:180,stroke:'#333','stroke-width':2},g)},1200);
  H.abs({inset:'0',background:'linear-gradient(120deg,rgba(255,255,255,.18),transparent 40%)'},V);H.abs({left:'150px',top:'40px',width:'1300px',height:'720px',borderRadius:'90px',border:'50px solid #6b4426',boxSizing:'border-box',boxShadow:'inset 0 0 30px rgba(0,0,0,.5)'});H.abs({left:'0',right:'0',top:'760px',bottom:'0',background:'linear-gradient(#5a3a22,#2a1d14)'});
  H.a(V,[{transform:'translateY(0)'},{transform:'translateY(2px)'},{transform:'translateY(0)'},{transform:'translateY(0)',offset:.8},{transform:'translateY(3px)',offset:.85},{transform:'translateY(0)'}],{d:800,i:Infinity});
  const T=H.abs({left:'0',right:'0',top:'500px',textAlign:'center',color:'#fff',textShadow:'0 2px 12px rgba(0,0,0,.6)'});H.el('div',{fontFamily:F.serif,fontSize:'22px',letterSpacing:'.4em'},T,'THE WORLD THROUGH THE WINDOW');H.el('div',{fontFamily:F.min,fontWeight:'800',fontSize:titleSz(t,100,900)+'px',letterSpacing:'.08em'},T,t);H.a(T,[{opacity:0},{opacity:1}],{d:1000,dl:2000})}});

defA({no:'15',cat:'SHOW',name:'ニュース番組',en:'News Open',lead:'報道番組のような、地球と光の帯が回り込み、赤いバーとタイトルがバシッと決まる。',loop:6000,bg:'#020b1f',
use:'<b>情報発信・ニュース解説・週間まとめ・社内報</b>の冒頭に。「今から大事なことを伝える」信頼感が出ます。',
tips:['地球は点の集まり（ドット地球儀）にすると、今っぽい報道感に','光の帯は青と赤の2色で、画面を横切らせる','タイトルが決まる瞬間に「ジャン！」のジングルを合わせます'],
p:`報道番組のオープニングのような、点で描かれた地球がゆっくり回り、光の帯がその周りを回り込んで、赤いバーとタイトルがバシッと決まる「ニュースオープン」を作ってください。
・タイトル：「{T}」
・背景：深い紺 #020B1F に、細い格子の線（不透明度0.06）
・地球：画面中央やや右に、点（ドット）で描いた地球儀（直径600px、青白い点、Canvas）。ゆっくり自転させる
・光の帯：青 #1E90FF と赤 #E60012 の細長い光の帯（グラデーション、ぼかし）が、0.0〜2.0秒に地球の周りを楕円を描いて回り込み、画面の外へ抜ける
・2.0秒：画面の左下から、赤いバー（高さ90px）が左から伸び、白い帯（高さ130px）が続いて伸びる
・2.2秒：白い帯の中に、タイトルを太いゴシック（Noto Sans JP 900、紺 #0B1F44）でバシッと出す（scale 1.2 → 1）。赤いバーの中に白い文字で「NEWS」
・画面右上に、時刻（実際の時刻）を白で表示
・尺：6秒`,
run(H,t){H.abs({inset:'0',backgroundImage:'linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)',backgroundSize:'80px 80px'});const c=H.canvas();const x=c.getContext('2d');const pts=[];for(let i=0;i<1400;i++){const u=Math.acos(2*Math.random()-1),v=Math.random()*Math.PI*2;pts.push([u,v])}
  H.raf(s=>{x.clearRect(0,0,1600,900);pts.forEach(([u,v])=>{const vv=v+s*.4;const X=Math.sin(u)*Math.cos(vv),Y=Math.cos(u),Z=Math.sin(u)*Math.sin(vv);if(Z<0)return;x.fillStyle=`rgba(140,190,255,${.3+Z*.7})`;x.fillRect(980+X*300,450+Y*300,3,3)})});
  [['#1e90ff',0],['#e60012',300]].forEach(([col,dl])=>{const b=H.abs({left:'0',top:'0',width:'600px',height:'14px',borderRadius:'7px',background:`linear-gradient(90deg,transparent,${col})`,filter:'blur(2px)',boxShadow:`0 0 20px ${col}`,offsetPath:'path("M-400 700 C 400 900 1500 700 1300 300 S 400 0 2000 200")',offsetRotate:'auto'});H.a(b,[{offsetDistance:'0%'},{offsetDistance:'100%'}],{d:2000,dl,e:'ease-in-out'})});
  const W=H.abs({left:'0',top:'620px'});const red=H.abs({left:'0',top:'0',width:'240px',height:'90px',background:'#e60012',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:'44px',color:'#fff',transformOrigin:'0 50%'},W,'NEWS');const wh=H.abs({left:'240px',top:'-20px',width:'1100px',height:'130px',background:'#fff',transformOrigin:'0 50%',display:'flex',alignItems:'center',padding:'0 40px',boxSizing:'border-box',overflow:'hidden'},W);
  const tt=H.el('div',{fontFamily:F.sans,fontWeight:'900',fontSize:titleSz(t,80,900)+'px',color:'#0b1f44',whiteSpace:'nowrap'},wh,t);H.a(red,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:300,dl:2000,e:E.out});H.a(wh,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:400,dl:2100,e:E.out});H.a(tt,[{transform:'scale(1.2)',opacity:0},{transform:'scale(1)',opacity:1}],{d:300,dl:2300,e:E.out});
  const ck=H.abs({right:'60px',top:'40px',fontFamily:F.smono,fontSize:'40px',color:'#fff'});H.raf(()=>{ck.textContent=new Date().toTimeString().slice(0,5)})}});
