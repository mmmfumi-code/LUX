/* ===== GRAPHIC 16-30 ===== */
const BN=(H,css)=>{desk(H);return sheet(H,1200,628,css)};
const SQ=(H,css)=>{desk(H);return sheet(H,720,720,css)};
const cards=(H,fc,bc)=>{desk(H);const f=sheet(H,600,363,Object.assign({borderRadius:'10px'},fc),130,250),b=sheet(H,600,363,Object.assign({borderRadius:'10px'},bc),870,250,350);
  [['表',430],['裏',1170]].forEach(q=>T(H,null,{left:q[1]-300+'px',width:'600px',top:'640px',textAlign:'center',fontFamily:F.sans,fontSize:'18px',letterSpacing:'.4em',color:'#7d828c'},q[0],600,'fade'));return [f,b]};
const qr=(H,p,x,y,s,c,bg,dl)=>R(H,p,{left:x+'px',top:y+'px',width:s+'px',height:s+'px',background:`repeating-conic-gradient(${c} 0 25%,${bg} 0 50%) 0 0/${s/4}px ${s/4}px`,borderRadius:'4px',outline:`4px solid ${bg}`},dl,'pop');

/* POSTER：バナー */
defG({no:'16',cat:'POSTER',name:'ECサイトのセールバナー',en:'EC Sale Banner',text:'nobu store',lead:'赤からピンクのグラデーションに「最大70%OFF」。クリックしたくなるセールバナー。',
use:'<b>ネットショップ・ECモール・SNS広告</b>のセール告知に。1200×628px は、多くのSNSや広告でそのまま使えるサイズです。',
tips:['数字（70%）はバナーの高さの半分くらいの大きさに。数字が主役です','残り時間のカウントダウンを入れると「今買わなきゃ」につながります','ボタンは背景と反対の色（白や黄色）にして、押せる場所だと分かるように'],
p:`ネットショップの「MEGA SALE」バナーを、1200×628px で作ってください。
・ショップ名：「{T}」
・配色：背景は赤 #FF1E56 → ピンク #FF4FA3 → オレンジ #FF8A3D の斜めグラデーション、文字は白、ボタンは黄色 #FFE14D に黒文字
・フォント：英字と数字は Anton、日本語は Noto Sans JP 900
・左側：白で「MEGA SALE」、その下に巨大な「最大 70%OFF」（「70」をいちばん大きく、高さの45%）
・右側：商品の写真の枠を3つ、少し傾けて重ねたカード風に（白い枠と影）
・下部：「12.1 mon 0:00 — 12.3 wed 23:59」と、「残り 23:59:59」のカウントダウン風の数字（白い角丸の箱に1桁ずつ）
・ボタン：黄色の角丸ボタン「今すぐチェック →」
・装飾：背景に白い半透明の丸や紙吹雪をちらす。左上にショップ名
・SNS広告用に、文字の量は画像全体の20%以内に収める（重要な文字だけ）
・Web版の場合：紙吹雪がゆっくり落ち、カウントダウンが1秒ずつ減る`,
run(H,t){const s=BN(H,{background:'linear-gradient(120deg,#ff1e56,#ff4fa3 55%,#ff8a3d)'});
  for(let i=0;i<26;i++){const c=H.abs({left:rnd(0,1200)+'px',top:'-20px',width:rnd(8,16)+'px',height:rnd(14,24)+'px',background:pick(['#fff','#ffe14d','rgba(255,255,255,.6)']),borderRadius:'2px'},s);H.a(c,[{transform:'translateY(0) rotate(0)'},{transform:`translateY(680px) rotate(${rnd(200,700)}deg)`}],{d:rnd(4000,7000),dl:rnd(0,4000),e:E.lin,i:Infinity})}
  [[900,80,240],[60,480,180],[1080,460,160]].forEach((q,i)=>R(H,s,{left:q[0]+'px',top:q[1]+'px',width:q[2]+'px',height:q[2]+'px',borderRadius:'50%',background:'rgba(255,255,255,.12)'},200+i*100,'pop'));
  T(H,s,{left:'60px',top:'40px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'22px',color:'#fff',letterSpacing:'.1em'},t,300,'fade');
  T(H,s,{left:'60px',top:'86px',fontFamily:"'Anton',sans-serif",fontSize:'72px',color:'#fff',letterSpacing:'.04em'},'MEGA SALE',500,'left');
  const big=T(H,s,{left:'56px',top:'170px',fontFamily:"'Anton',sans-serif",color:'#fff',lineHeight:'1',textShadow:'0 8px 0 rgba(0,0,0,.12)'},null,800,'pop');H.el('span',{fontFamily:F.sans,fontWeight:'900',fontSize:'48px',marginRight:'10px'},big,'最大');H.el('span',{fontSize:'260px'},big,'70');H.el('span',{fontSize:'110px'},big,'%OFF');
  T(H,s,{left:'60px',top:'470px',fontFamily:"'Anton',sans-serif",fontSize:'26px',color:'#fff',letterSpacing:'.06em'},'12.1 MON 0:00 — 12.3 WED 23:59',1300,'fade');
  const cd=T(H,s,{left:'60px',top:'514px',display:'flex',gap:'6px',alignItems:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'18px',color:'#fff'},null,1500);H.el('span',{marginRight:'8px'},cd,'残り');const dg=[];'23:59:59'.split('').forEach(ch=>{if(ch===':'){H.el('span',{fontFamily:"'Anton',sans-serif",fontSize:'34px'},cd,':');return}dg.push(H.el('span',{background:'#fff',color:'#ff1e56',fontFamily:"'Anton',sans-serif",fontSize:'34px',width:'34px',textAlign:'center',borderRadius:'6px',padding:'2px 0'},cd,ch))});
  [[760,150,-10,'linear-gradient(135deg,#ffe0ec,#ff9cc2)'],[880,120,4,'linear-gradient(135deg,#fff3c4,#ffc65c)'],[990,170,12,'linear-gradient(135deg,#d8f2ff,#7cc8ff)']].forEach((q,i)=>{const c=R(H,s,{left:q[0]+'px',top:q[1]+'px',width:'180px',height:'230px',background:'#fff',borderRadius:'14px',padding:'12px',boxSizing:'border-box',boxShadow:'0 20px 40px rgba(0,0,0,.25)',rotate:q[2]+'deg'},1000+i*150,'pop');H.abs({left:'12px',top:'12px',right:'12px',height:'150px',borderRadius:'8px',background:q[3]},c);H.abs({left:'12px',top:'172px',width:'90px',height:'10px',borderRadius:'5px',background:'#eee'},c);H.el('div',{position:'absolute',left:'12px',top:'190px',fontFamily:"'Anton',sans-serif",fontSize:'22px',color:'#ff1e56'},c,['-70%','-50%','-30%'][i])});
  const bt=T(H,s,{left:'820px',top:'470px',padding:'20px 46px',borderRadius:'999px',background:'#ffe14d',color:'#111',fontFamily:F.sans,fontWeight:'900',fontSize:'28px',boxShadow:'0 10px 0 rgba(0,0,0,.15)'},'今すぐチェック →',1800,'pop');H.a(bt,[{scale:'1'},{scale:'1.06'},{scale:'1'}],{d:1000,dl:2500,i:Infinity,f:'none'})}});

defG({no:'17',cat:'POSTER',name:'ウェビナー告知バナー',en:'Webinar Banner',text:'nobu inc.',lead:'濃紺に光る線、登壇者の丸い写真。信頼感のある、ビジネスセミナーの告知。',
use:'<b>ウェビナー・オンラインセミナー・展示会・勉強会</b>の告知に。Peatix、connpass、SNS投稿、メルマガのヘッダーにも使えます。',
tips:['タイトルは2行まで。1行目に「誰の・何の」、2行目に「どうなれる」を書くと伝わります','登壇者の写真は丸く切り抜き、名前と肩書きをセットで','「参加無料」「録画あり」など、参加の不安を消す言葉をバッジにします'],
p:`オンラインセミナー（ウェビナー）の告知バナーを、1200×628px で、信頼感のあるビジネス向けデザインで作ってください。
・主催：「{T}」
・配色：背景は濃紺 #0B1D3A → 青 #1E4FD8 の斜めグラデーション、アクセントはシアン #3DDCFF、文字は白
・フォント：日本語は Noto Sans JP（700/900）、英字と数字は Montserrat（800）
・背景：右側に細い光の線（ネットワークのような点と線）を薄く。ゆっくり点が光る
・左上：シアンの枠のバッジ「FREE WEBINAR」と「参加無料」
・タイトル（2行）：「中小企業のための / 生成AI 活用入門」（2行目を大きく、「生成AI」だけシアン）
・日時：「11.20 THU 19:00 – 20:30」をシアンの細い線の下に、Montserrat で大きく
・右側：登壇者2名の丸い写真の枠（白い細枠）＋名前と肩書き（例：〇〇 〇〇 ／ 株式会社〇〇 代表）
・右下：白い角丸のボタン「今すぐ申し込む」
・左下：主催者名と「Zoomで開催 ／ 録画配信あり」
・全体：余白を保ち、情報は左揃え。派手にせず、信頼感を優先`,
run(H,t){const s=BN(H,{background:'linear-gradient(130deg,#0b1d3a,#123a8f 60%,#1e4fd8)'});const CY='#3ddcff';
  const sv=H.svg(1200,628,s);const pts=[];for(let i=0;i<22;i++)pts.push([rnd(640,1200),rnd(0,628)]);pts.forEach((a,i)=>pts.slice(i+1).forEach(b=>{if(Math.hypot(a[0]-b[0],a[1]-b[1])<170)H.sv('line',{x1:a[0],y1:a[1],x2:b[0],y2:b[1],stroke:'rgba(61,220,255,.18)','stroke-width':1},sv)}));pts.forEach(a=>{const c=H.sv('circle',{cx:a[0],cy:a[1],r:3,fill:CY},sv);c.animate([{opacity:.2},{opacity:1},{opacity:.2}],{duration:rnd(1500,3000),delay:rnd(0,2000),iterations:Infinity})});
  T(H,s,{left:'70px',top:'60px',border:'1.5px solid '+CY,color:CY,padding:'6px 14px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'16px',letterSpacing:'.15em'},'FREE WEBINAR',300,'fade');T(H,s,{left:'260px',top:'60px',background:CY,color:'#0b1d3a',padding:'7px 14px',fontFamily:F.sans,fontWeight:'900',fontSize:'16px'},'参加無料',450,'fade');
  T(H,s,{left:'70px',top:'120px',fontFamily:F.sans,fontWeight:'700',fontSize:'36px',color:'#fff'},'中小企業のための',600);const h=T(H,s,{left:'66px',top:'168px',fontFamily:F.sans,fontWeight:'900',fontSize:'76px',color:'#fff'},null,800);H.el('span',{color:CY},h,'生成AI');H.el('span',{},h,' 活用入門');
  R(H,s,{left:'70px',top:'290px',width:'80px',height:'3px',background:CY,transformOrigin:'left'},1100,'grow');
  T(H,s,{left:'70px',top:'310px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'48px',color:'#fff',letterSpacing:'.02em'},'11.20 THU 19:00 – 20:30',1200,'left');
  [['〇〇 〇〇','株式会社〇〇 代表',790],['〇〇 〇〇','AIコンサルタント',990]].forEach((q,i)=>{R(H,s,{left:q[2]+'px',top:'130px',width:'150px',height:'150px',borderRadius:'50%',border:'3px solid #fff',background:i?'linear-gradient(160deg,#b8c7e6,#5b74a8)':'linear-gradient(160deg,#d7e1f2,#7b90ba)',boxSizing:'border-box'},1400+i*150,'pop');T(H,s,{left:q[2]-25+'px',width:'200px',textAlign:'center',top:'296px',fontFamily:F.sans,fontWeight:'700',fontSize:'20px',color:'#fff'},q[0],1550+i*150);T(H,s,{left:q[2]-25+'px',width:'200px',textAlign:'center',top:'326px',fontFamily:F.sans,fontSize:'13px',color:'#a9bce0'},q[1],1600+i*150,'fade')});
  const bt=T(H,s,{left:'860px',top:'470px',padding:'20px 40px',borderRadius:'12px',background:'#fff',color:'#0b1d3a',fontFamily:F.sans,fontWeight:'900',fontSize:'24px'},'今すぐ申し込む →',2000,'pop');
  T(H,s,{left:'70px',top:'500px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'22px',color:'#fff'},'主催：'+t,2100,'fade');T(H,s,{left:'70px',top:'536px',fontFamily:F.sans,fontSize:'15px',color:'#a9bce0'},'Zoomで開催 ／ 録画配信あり',2200,'fade')}});

defG({no:'18',cat:'POSTER',name:'アプリのダウンロードバナー',en:'App Download Banner',text:'nobu app',lead:'紫のグラデーションにスマホの画面。特典を前面に出した、アプリ紹介のバナー。',
use:'<b>スマホアプリ・会員サービス・ポイントカードのアプリ化</b>の告知に。店頭POP やWebサイトのバナーにも。',
tips:['スマホの画面は少し傾けて浮かせると、平面のバナーでも立体感が出ます','特典（500ポイント）は丸いバッジに入れて、スマホのすぐ横に','ダウンロードボタンは公式のバッジ画像を使うのがルール。ここでは黒い角丸の枠で場所を確保'],
p:`スマホアプリの「ダウンロード」告知バナーを、1200×628px で作ってください。
・アプリ名：「{T}」
・配色：背景は紫 #6C3BFF → ピンク #FF5FA2 の斜めグラデーション、文字は白、特典バッジは黄色 #FFD84D
・フォント：日本語は Noto Sans JP 900、英字は Montserrat 800
・左側：アプリのアイコン（角丸の正方形、白地に紫のマーク）＋アプリ名、大きな見出し「毎日のお買い物が、もっとおトクに。」
・特典：黄色い円のバッジに「今なら 初回 500pt プレゼント」。少し傾けて、ゆっくり脈打つ
・ダウンロードボタンの場所：黒い角丸の枠を2つ（「App Store」「Google Play」と書く。公開時は公式バッジ画像に差し替え）
・右側：スマホの画面のモックアップ（角丸40px、黒い枠、ノッチ）を少し傾けて浮かせる。画面の中は、ポイントカードやクーポンのダミーUI
・スマホの後ろに、白い半透明の大きな円を2つ
・Web版の場合：スマホがゆっくり上下にふわふわ浮く`,
run(H,t){const s=BN(H,{background:'linear-gradient(125deg,#6c3bff,#a64dff 50%,#ff5fa2)'});
  [[780,40,420],[960,300,300]].forEach((q,i)=>R(H,s,{left:q[0]+'px',top:q[1]+'px',width:q[2]+'px',height:q[2]+'px',borderRadius:'50%',background:'rgba(255,255,255,.12)'},200+i*120,'pop'));
  const ic=R(H,s,{left:'70px',top:'60px',width:'70px',height:'70px',borderRadius:'18px',background:'#fff'},300,'pop');H.abs({left:'18px',top:'18px',width:'34px',height:'34px',borderRadius:'50%',border:'8px solid #6c3bff',boxSizing:'border-box'},ic);
  T(H,s,{left:'160px',top:'78px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'30px',color:'#fff'},t,400,'fade');
  T(H,s,{left:'70px',top:'170px',fontFamily:F.sans,fontWeight:'900',fontSize:'58px',lineHeight:'1.3',color:'#fff',whiteSpace:'pre-line'},'毎日のお買い物が、\nもっとおトクに。',600);
  ['App Store','Google Play'].forEach((w,i)=>T(H,s,{left:70+i*220+'px',top:'460px',width:'200px',height:'64px',lineHeight:'64px',textAlign:'center',borderRadius:'12px',background:'#111',color:'#fff',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'20px'},w,1200+i*150,'pop'));
  const ph=R(H,s,{left:'840px',top:'60px',width:'250px',height:'510px',borderRadius:'40px',background:'#111',padding:'12px',boxSizing:'border-box',rotate:'8deg',boxShadow:'0 40px 80px rgba(0,0,0,.35)'},900,'up');const sc=H.abs({left:'12px',top:'12px',right:'12px',bottom:'12px',borderRadius:'30px',background:'#f6f3ff',overflow:'hidden'},ph);H.abs({left:'76px',top:'0',width:'74px',height:'20px',borderRadius:'0 0 12px 12px',background:'#111'},sc);
  H.abs({left:'16px',top:'40px',right:'16px',height:'120px',borderRadius:'16px',background:'linear-gradient(125deg,#6c3bff,#ff5fa2)'},sc);H.el('div',{position:'absolute',left:'30px',top:'56px',color:'#fff',fontFamily:F.sans,fontSize:'12px'},sc,'保有ポイント');const pt=H.el('div',{position:'absolute',left:'30px',top:'80px',color:'#fff',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'40px'},sc,'0');
  for(let i=0;i<3;i++){H.abs({left:'16px',right:'16px',top:180+i*80+'px',height:'64px',borderRadius:'14px',background:'#fff',boxShadow:'0 4px 10px rgba(108,59,255,.1)'},sc);H.abs({left:'28px',top:192+i*80+'px',width:'40px',height:'40px',borderRadius:'10px',background:['#ffd84d','#ff5fa2','#6c3bff'][i]},sc);H.abs({left:'80px',top:200+i*80+'px',width:'90px',height:'10px',borderRadius:'5px',background:'#ddd'},sc);H.abs({left:'80px',top:218+i*80+'px',width:'60px',height:'8px',borderRadius:'4px',background:'#eee'},sc)}
  pt.textContent='500 pt';
  H.a(ph,[{translate:'0 0'},{translate:'0 -14px'}],{d:1800,dl:1700,dir:'alternate',i:Infinity,f:'none',e:E.soft});
  const bd=T(H,s,{left:'640px',top:'330px',width:'170px',height:'170px',borderRadius:'50%',background:'#ffd84d',color:'#111',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'16px',lineHeight:'1.2',rotate:'-10deg',boxShadow:'0 10px 30px rgba(0,0,0,.2)'},null,1600,'pop');H.el('div',{},bd,'今なら 初回');H.el('div',{fontFamily:"'Montserrat',sans-serif",fontSize:'54px'},bd,'500');H.el('div',{},bd,'pt プレゼント');H.a(bd,[{scale:'1'},{scale:'1.07'},{scale:'1'}],{d:1100,dl:2300,i:Infinity,f:'none'})}});

defG({no:'19',cat:'POSTER',name:'求人・採用のバナー',en:'Recruit Banner',text:'nobu株式会社',lead:'明るい黄色と大きな「仲間募集」。働く人の笑顔が浮かぶ、採用のバナー。',
use:'<b>求人サイト・Indeed・SNSの採用広告・自社サイトの採用ページ</b>に。アルバイト募集のポスターにも転用できます。',
tips:['「仲間募集」「一緒に働きませんか」など、呼びかける言葉を一番大きく','時給・休日・未経験OKなど、応募の決め手になる条件を3つだけアイコン付きで','人物は丸い写真を3〜4人並べると、職場の雰囲気が伝わります'],
p:`求人・採用のバナーを、1200×628px で、明るく元気なデザインで作ってください。
・会社名：「{T}」
・配色：背景は黄色 #FFD23F、白、文字は黒 #1D1D1D、アクセントは青 #2F6BFF
・フォント：見出しは Dela Gothic One、本文は Noto Sans JP 900
・左側：白い吹き出しに「一緒に働きませんか？」、その下に巨大な黒い文字で「仲間募集」（「仲間」を青に）
・職種：「カフェスタッフ ／ 正社員・アルバイト」
・条件：白い角丸の札を3つ横並び（「時給 1,200円〜」「未経験OK」「週2日〜」）。各札にシンプルなアイコン
・右側：スタッフの丸い写真の枠を4つ、大小をつけて並べる（白い太い枠）。1つの写真の横に「先輩の声：みんな優しいです！」の吹き出し
・右下：青いボタン「くわしくはこちら →」
・背景：白い水玉やギザギザの線をあしらって、にぎやかに
・Web版の場合：写真の丸がぽよんと弾みながら順番に現れる`,
run(H,t){const s=BN(H,{background:'#ffd23f'});const K='#1d1d1d',B='#2f6bff';
  R(H,s,{inset:'0',backgroundImage:'radial-gradient(rgba(255,255,255,.55) 6px,transparent 7px)',backgroundSize:'48px 48px'},200);
  T(H,s,{left:'70px',top:'56px',background:'#fff',padding:'12px 26px',borderRadius:'30px',fontFamily:F.sans,fontWeight:'900',fontSize:'26px',color:K},'一緒に働きませんか？',300,'pop');
  const h=T(H,s,{left:'64px',top:'120px',fontFamily:F.heavy,fontSize:'150px',lineHeight:'1.1',color:K},null,600,'pop');H.el('span',{color:B},h,'仲間');H.el('span',{},h,'募集');
  T(H,s,{left:'72px',top:'306px',fontFamily:F.sans,fontWeight:'900',fontSize:'26px',color:K},'カフェスタッフ ／ 正社員・アルバイト',1000);
  [['¥','時給 1,200円〜'],['★','未経験OK'],['◎','週2日〜']].forEach((q,i)=>{const c=T(H,s,{left:70+i*196+'px',top:'366px',width:'184px',height:'84px',borderRadius:'16px',background:'#fff',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'19px',color:K},null,1200+i*150,'pop');H.el('div',{color:B,fontSize:'24px',lineHeight:'1'},c,q[0]);H.el('div',{},c,q[1])});
  T(H,s,{left:'70px',top:'486px',fontFamily:F.heavy,fontSize:'30px',color:K},t,1700,'fade');
  [[780,60,200,'#f6c7a8'],[1000,90,150,'#cfe3ff'],[760,300,150,'#ffe0e9'],[930,270,220,'#d7f0d2']].forEach((q,i)=>{const c=R(H,s,{left:q[0]+'px',top:q[1]+'px',width:q[2]+'px',height:q[2]+'px',borderRadius:'50%',border:'8px solid #fff',background:`radial-gradient(circle at 50% 38%,#5a4033 0 18%,transparent 19%),radial-gradient(circle at 50% 110%,#5a4033 0 42%,transparent 43%),${q[3]}`,boxSizing:'border-box'},900+i*180,'pop')});
  T(H,s,{left:'900px',top:'236px',background:'#fff',padding:'10px 16px',borderRadius:'16px 16px 16px 0',fontFamily:F.sans,fontWeight:'700',fontSize:'15px',color:K,boxShadow:'0 6px 0 rgba(0,0,0,.08)'},'先輩の声：みんな優しいです！',1800,'pop');
  const bt=T(H,s,{left:'860px',top:'520px',padding:'18px 38px',borderRadius:'999px',background:B,color:'#fff',fontFamily:F.sans,fontWeight:'900',fontSize:'22px'},'くわしくはこちら →',2000,'pop');H.a(bt,[{translate:'0 0'},{translate:'6px 0'},{translate:'0 0'}],{d:900,dl:2600,i:Infinity,f:'none'})}});

defG({no:'20',cat:'POSTER',name:'Instagramの新商品投稿',en:'Instagram New Arrival',text:'nobu cosme',lead:'くすみベージュに商品と影。正方形の、洗練された新商品のお知らせ投稿。',
use:'<b>Instagram・Threads・X の投稿、ECサイトの商品画像</b>に。コスメ・雑貨・アパレル・食品など、どんな商品にも使えます。',
tips:['背景は商品の色と同系色のくすみカラーに。商品が浮かずになじみます','文字は商品から離して、四隅のどこかにまとめるとInstagramらしい','影は真下ではなく、斜めに長く伸ばすと「午後の光」のような雰囲気に'],
p:`Instagram の新商品のお知らせ投稿を、1080×1080px の正方形で、洗練されたデザインで作ってください。
・ブランド名：「{T}」
・配色：背景はくすみベージュ #E9DED2 → #D8C7B6 のグラデーション、文字はブラウン #5A4636、差し色にテラコッタ #B8735A
・フォント：英字は Playfair Display（イタリックも）、日本語は Shippori Mincho B1
・中央：商品の写真の枠（ここでは美容液のボトル。角丸の瓶とスポイトのキャップを CSS で描く）。ボトルの右下に、斜めに長く伸びる影
・ボトルの後ろ：アーチ型の明るい面（光が当たっているように）
・左上：英字のイタリックで「New Arrival」、その下に明朝体で「肌に、ひとしずくの余白を。」
・右下：商品名「Moist Serum 30ml」と価格「¥4,180（税込）」、小さく「10.1 release」
・左下：ブランド名を英字で小さく
・枠：外周から40pxの位置に、細いブラウンの線の枠
・カルーセル投稿にする場合は、2枚目以降に成分・使い方・レビューのページも同じデザインで作る`,
run(H,t){const s=SQ(H,{background:'linear-gradient(160deg,#e9ded2,#d8c7b6)'});const C='#5a4636';
  R(H,s,{left:'26px',top:'26px',right:'26px',bottom:'26px',border:'1px solid rgba(90,70,54,.5)'},300);
  R(H,s,{left:'230px',top:'150px',width:'260px',height:'420px',borderRadius:'130px 130px 0 0',background:'linear-gradient(#f6efe7,#e9ded2)'},500,'up');
  const sh=R(H,s,{left:'360px',top:'500px',width:'260px',height:'70px',background:'linear-gradient(90deg,rgba(90,70,54,.35),transparent)',filter:'blur(8px)',transform:'skewX(-50deg)'},1500,'fade');
  const bt=R(H,s,{left:'300px',top:'250px',width:'120px',height:'320px'},900,'up');H.abs({left:'44px',top:'0',width:'32px',height:'60px',borderRadius:'16px 16px 4px 4px',background:'#3b2d24'},bt);H.abs({left:'30px',top:'56px',width:'60px',height:'30px',borderRadius:'6px',background:'#c9a27e'},bt);H.abs({left:'0',top:'84px',width:'120px',height:'236px',borderRadius:'26px',background:'linear-gradient(90deg,rgba(184,115,90,.85),rgba(232,170,140,.9) 40%,rgba(184,115,90,.95))',boxShadow:'inset 10px 0 20px rgba(255,255,255,.3)'},bt);H.abs({left:'20px',top:'170px',width:'80px',height:'60px',borderRadius:'4px',background:'rgba(255,255,255,.85)'},bt);H.el('div',{position:'absolute',left:'0',right:'0',top:'186px',textAlign:'center',fontFamily:"'Playfair Display',serif",fontSize:'12px',color:C,letterSpacing:'.1em'},bt,'SERUM');
  T(H,s,{left:'60px',top:'60px',fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'52px',color:C},'New Arrival',1100,'left');T(H,s,{left:'64px',top:'130px',fontFamily:F.min,fontWeight:'500',fontSize:'18px',color:C,letterSpacing:'.12em'},'肌に、ひとしずくの余白を。',1300,'fade');
  T(H,s,{right:'60px',top:'574px',textAlign:'right',fontFamily:"'Playfair Display',serif",fontSize:'26px',color:C},'Moist Serum 30ml',1700);T(H,s,{right:'60px',top:'612px',textAlign:'right',fontFamily:F.min,fontSize:'18px',color:'#b8735a'},'¥4,180（税込）',1800,'fade');T(H,s,{right:'60px',top:'644px',textAlign:'right',fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontSize:'14px',color:C},'10.1 release',1900,'fade');
  T(H,s,{left:'60px',top:'640px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'16px',letterSpacing:'.3em',color:C},t,2000,'fade')}});

/* CARD：ショップカード */
defG({no:'21',cat:'CARD',name:'美容室のクラフト紙ショップカード',en:'Kraft Salon Card',text:'hair room nobu',lead:'クラフト紙に、透かしのようなはさみの線画。ナチュラルで大人っぽい美容室のカード。',
use:'<b>美容室・バーバー・トリミングサロン・アトリエ</b>のショップカードに。紙の質感だけで「こだわりのあるお店」に見えます。',
tips:['はさみなどの道具の線画を、薄い色で大きく敷くと「透かし」のような上品さが出ます','クラフト紙には、こげ茶1色の印刷がいちばん映えます','裏面に「次回のご予約」欄を入れると、予約カードとしても使えて捨てられにくくなります'],
p:'',
run(H,t){const kr={background:'#c9a77c',backgroundImage:'radial-gradient(rgba(62,42,30,.12) 1px,transparent 1.5px),radial-gradient(rgba(255,255,255,.12) 1px,transparent 1.5px)',backgroundSize:'5px 5px,7px 7px',backgroundPosition:'0 0,2px 3px'};const [f,b]=cards(H,kr,{background:'#fff'});const C='#4a3020';
  const sc=R(H,f,{left:'260px',top:'40px',width:'330px',height:'200px'},700,'fade');const sv=H.svg(330,200,sc,{opacity:'.22'});H.sv('circle',{cx:260,cy:60,r:38,stroke:C,'stroke-width':6,fill:'none'},sv);H.sv('circle',{cx:260,cy:150,r:38,stroke:C,'stroke-width':6,fill:'none'},sv);H.sv('path',{d:'M225,78 L10,118 L222,132 M225,132 L40,96',stroke:C,'stroke-width':6,fill:'none','stroke-linecap':'round'},sv);
  T(H,f,{left:'36px',top:'26px',fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:'40px',lineHeight:'1',color:C},t,800,'fade');T(H,f,{left:'38px',top:'74px',fontFamily:F.zen,fontSize:'13px',color:C},'ヘアサロン',900,'fade');
  T(H,f,{left:'40px',top:'206px',fontFamily:F.zen,fontSize:'14px',color:C},'スタイリスト',1000,'fade');T(H,f,{left:'38px',top:'228px',fontFamily:F.zen,fontWeight:'700',fontSize:'28px',letterSpacing:'.1em',color:C},'〇〇 〇〇',1100);
  T(H,f,{right:'30px',top:'290px',textAlign:'right',fontFamily:F.zen,fontSize:'12px',lineHeight:'1.7',color:C,whiteSpace:'pre-line'},'TEL 000-000-0000\n〇〇市〇〇町0-0-0',1300,'fade');
  T(H,b,{left:'40px',top:'34px',fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:'22px',color:C},t,1000,'fade');
  ['〇〇市〇〇町0-0-0','TEL 000-000-0000','10:00 – 20:00（火曜定休）'].forEach((w,i)=>T(H,b,{left:'40px',top:84+i*30+'px',fontFamily:F.zen,fontSize:'15px',color:'#333'},w,1100+i*100,'left'));
  qr(H,b,470,80,90,'#333','#fff',1400);T(H,b,{left:'450px',width:'130px',textAlign:'center',top:'178px',fontFamily:F.zen,fontSize:'11px',color:'#777'},'ご予約はこちら',1500,'fade');
  T(H,b,{left:'40px',top:'250px',width:'520px',border:'1px solid #c9a77c',padding:'14px 18px',fontFamily:F.zen,fontSize:'15px',color:C,boxSizing:'border-box'},'次回のご予約　　＿月　＿日（　）　＿時',1600,'fade')}});

defG({no:'22',cat:'CARD',name:'ネイルサロンの金箔スタンプカード',en:'Gold Foil Stamp Card',text:'nail salon nobu',lead:'グレージュに金のグラデーション文字。裏がスタンプカードになった、サロンのカード。',
use:'<b>ネイル・まつげ・エステ・リラクゼーションサロン</b>のショップカード兼スタンプカードに。リピートのきっかけになります。',
tips:['金色はベタ塗りより、明るい金→暗い金のグラデーションにすると箔押しのように見えます','スタンプ枠は10個がいちばん一般的。最後の1つだけ特典のマークにすると楽しみが増えます','印刷所で箔押しを頼む場合は、金の部分だけ別のレイヤー（K100%）にしておきます'],
p:`ネイルサロンのショップカード（表）とスタンプカード（裏）を、名刺サイズ（91×55mm、横向き）の2面で、金箔のような上品なデザインで作ってください。
・店名：「{T}」
・配色：表はグレージュ #D9CFC6、裏はアイボリー #FAF6F1、金は #F3E3B5 → #C9A45C → #A07A35 のグラデーション（箔押し風）、文字はブラウン #6B5A4E
・フォント：英字は Great Vibes（筆記体）と Cormorant Garamond、日本語は Shippori Mincho B1
・表面：中央に店名を金のグラデーションの筆記体で大きく。その上に金の細い線で描いた小さな花の飾り、下に「nail & eyelash」
・表面の背景：うっすら大理石の模様（CSS の radial-gradient を重ねて）
・裏面：上に「STAMP CARD」と、名前を書く線（Name ______）
・スタンプ枠：直径11mmの丸を5個×2段。枠は金の細い線。10個目だけ金の塗りで「GIFT」
・裏面の下部：「10個たまると、ハンドケア1回無料」、住所 〇〇市〇〇町0-0-0、電話 000-000-0000、予約の QRコード
・印刷用：表と裏をそれぞれ1ページ、@page 91×55mm、塗り足し3mm。画面確認用には横に並べて表示`,
run(H,t){const [f,b]=cards(H,{background:'radial-gradient(circle at 20% 30%,rgba(255,255,255,.5),transparent 40%),radial-gradient(circle at 80% 80%,rgba(255,255,255,.35),transparent 45%),#d9cfc6'},{background:'#faf6f1'});const G='linear-gradient(100deg,#a07a35,#f3e3b5 30%,#c9a45c 55%,#f3e3b5 75%,#a07a35)',BR='#6b5a4e';
  const gold=(el)=>{Object.assign(el.style,{background:G,backgroundSize:'200% 100%',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'});H.a(el,[{backgroundPosition:'0% 0'},{backgroundPosition:'200% 0'}],{d:3000,dl:1500,i:Infinity,e:E.lin,f:'none'});return el};
  gold(T(H,f,{left:'0',width:'600px',top:'60px',textAlign:'center',fontSize:'40px'},'❦',700,'fade'));
  gold(T(H,f,{left:'0',width:'600px',top:'110px',textAlign:'center',fontFamily:"'Great Vibes',cursive",fontSize:t.length>12?'58px':'70px',lineHeight:'1.3'},t,900,'fade'));
  T(H,f,{left:'0',width:'600px',top:'240px',textAlign:'center',fontFamily:F.serif,fontSize:'18px',letterSpacing:'.4em',color:BR},'nail & eyelash',1300,'fade');
  T(H,b,{left:'40px',top:'28px',fontFamily:F.serif,fontWeight:'700',fontSize:'20px',letterSpacing:'.3em',color:'#a07a35'},'STAMP CARD',1000,'fade');T(H,b,{left:'300px',top:'34px',width:'260px',borderBottom:'1px solid '+BR,fontFamily:F.serif,fontSize:'14px',color:BR},'Name',1100,'fade');
  for(let i=0;i<10;i++){const last=i===9;const c=T(H,b,{left:52+(i%5)*104+'px',top:84+Math.floor(i/5)*92+'px',width:'76px',height:'76px',borderRadius:'50%',border:'1.5px solid #c9a45c',background:last?G:'transparent',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.serif,fontWeight:'700',fontSize:last?'16px':'18px',color:last?'#fff':'rgba(160,122,53,.5)',boxSizing:'border-box'},last?'GIFT':String(i+1),1200+i*80,'pop');
    if(i<4)H.wait(2400+i*300,()=>{const st=H.el('div',{position:'absolute',inset:'8px',borderRadius:'50%',border:'3px solid #c97b84',color:'#c97b84',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Great Vibes',cursive",fontSize:'22px',rotate:'-15deg'},c,'nobu');H.a(st,[{opacity:0,transform:'scale(1.8)'},{opacity:1,transform:'scale(1)'}],{d:300,e:E.in})})}
  T(H,b,{left:'40px',top:'280px',fontFamily:F.min,fontSize:'14px',color:BR},'10個たまると、ハンドケア1回無料',2000,'fade');T(H,b,{left:'40px',top:'310px',fontFamily:F.min,fontSize:'11px',color:BR},'〇〇市〇〇町0-0-0 ／ TEL 000-000-0000',2100,'fade');qr(H,b,500,272,60,BR,'#faf6f1',2100)}});

defG({no:'23',cat:'CARD',name:'カフェの線画と地図のカード',en:'Line Art Café Card',text:'Café nobu',lead:'クラフト紙に、こげ茶のハンコのようなロゴ。手作り感のあるカフェのカード。',
use:'<b>カフェ・コーヒースタンド・焼き菓子店・雑貨店</b>のショップカードに。紙袋やコーヒー豆の袋に添えても似合います。',
tips:['クラフト紙は印刷所で選べます。AIで作るときは「クラフト紙の質感」と書くだけで雰囲気が出ます','ロゴはハンコのように丸く囲むと、手作り感とお店らしさが出ます','地図は正確さより「駅からの道順」がわかるシンプルな線画で十分'],
p:`カフェのショップカードを、名刺サイズ（91×55mm、横向き）の表・裏2面で、クラフト紙に印刷したような手作り感のあるデザインで作ってください。
・店名：「{T}」
・配色：背景はクラフト紙 #C9A77C（細かい点で紙の繊維を表現）、インクはこげ茶 #3E2A1E 1色だけ（実際の印刷でも1色刷りにできるように）
・フォント：英字は Playfair Display（イタリック）、日本語は Klee One
・表面：中央に、二重の丸で囲んだハンコ風のロゴ。円の中に店名、上の弧に「COFFEE & BAKE」、下の弧に「since 2025」（SVG の textPath で円に沿わせる）。中心にコーヒーカップの線画
・ロゴは少しだけかすれた質感（不透明度のムラ）にする
・裏面：左半分に、駅からお店までの簡単な線画の地図（駅・道・お店の位置に★）
・裏面の右半分：住所「〇〇市〇〇町0-0-0」、営業時間「8:00 – 18:00」、定休日「水曜日」、電話、Instagram
・裏面の下部：「コーヒー1杯ごとにスタンプ1つ」の小さな丸を8つ（スタンプカードとしても使える）`,
run(H,t){const kr={background:'#c9a77c',backgroundImage:'radial-gradient(rgba(62,42,30,.12) 1px,transparent 1.5px),radial-gradient(rgba(255,255,255,.12) 1px,transparent 1.5px)',backgroundSize:'5px 5px,7px 7px',backgroundPosition:'0 0,2px 3px'};const [f,b]=cards(H,kr,kr);const C='#3e2a1e';
  const lg=R(H,f,{left:'170px',top:'51px',width:'260px',height:'260px'},800,'pop');const sv=H.svg(260,260,lg);H.sv('circle',{cx:130,cy:130,r:122,stroke:C,'stroke-width':4,fill:'none'},sv);H.sv('circle',{cx:130,cy:130,r:112,stroke:C,'stroke-width':1.5,fill:'none'},sv);
  H.sv('path',{id:'arcT',d:'M30,130 A100,100 0 0,1 230,130',fill:'none'},sv);H.sv('path',{id:'arcB',d:'M40,130 A90,90 0 0,0 220,130',fill:'none'},sv);
  const t1=H.sv('text',{fill:C,'font-family':'Montserrat, sans-serif','font-size':15,'font-weight':800,'letter-spacing':4,'text-anchor':'middle'},sv);const tp=H.sv('textPath',{href:'#arcT',startOffset:'50%'},t1);tp.textContent='COFFEE & BAKE';
  const t2=H.sv('text',{fill:C,'font-family':'Playfair Display, serif','font-size':14,'font-style':'italic','text-anchor':'middle',dy:14},sv);const tp2=H.sv('textPath',{href:'#arcB',startOffset:'50%'},t2);tp2.textContent='since 2025';
  H.sv('path',{d:'M105,92 h46 v26 a23,23 0 0,1 -46,0 z M151,98 a10,10 0 0,1 0,18',stroke:C,'stroke-width':3,fill:'none','stroke-linejoin':'round'},sv);[115,128,141].forEach(x=>H.sv('path',{d:`M${x},84 q-5,-8 0,-16`,stroke:C,'stroke-width':2,fill:'none','stroke-linecap':'round'},sv));
  const nm=H.sv('text',{x:130,y:176,fill:C,'font-family':'Playfair Display, serif','font-size':t.length>10?22:28,'font-style':'italic','font-weight':900,'text-anchor':'middle'},sv);nm.textContent=t;
  const mp=R(H,b,{left:'24px',top:'24px',width:'260px',height:'230px'},1100,'fade');const ms=H.svg(260,230,mp);const ln=(d,w)=>{const p=H.sv('path',{d,stroke:C,'stroke-width':w||3,fill:'none','stroke-linecap':'round'},ms);const L=p.getTotalLength?p.getTotalLength():400;p.style.strokeDasharray=L;p.animate([{strokeDashoffset:L},{strokeDashoffset:0}],{duration:1200,delay:1300,fill:'both'})};
  ln('M10,170 H250',6);ln('M60,20 V220');ln('M60,90 H200 V170');ln('M200,90 V20',2);H.sv('rect',{x:20,y:180,width:70,height:26,fill:C},ms);const st=H.sv('text',{x:55,y:198,fill:'#c9a77c','font-size':14,'font-family':'Klee One, serif','text-anchor':'middle'},ms);st.textContent='〇〇駅';
  const star=H.sv('text',{x:200,y:84,fill:C,'font-size':30,'text-anchor':'middle'},ms);star.textContent='★';star.animate([{opacity:0},{opacity:1}],{duration:400,delay:2500,fill:'both'});
  ['〇〇市〇〇町0-0-0','8:00 – 18:00 ／ 水曜定休','TEL 000-000-0000','Instagram @cafe_nobu'].forEach((w,i)=>T(H,b,{left:'306px',top:40+i*36+'px',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'16px',color:C},w,1400+i*120,'left'));
  T(H,b,{left:'306px',top:'200px',fontFamily:"'Klee One',serif",fontSize:'12px',color:C},'コーヒー1杯ごとにスタンプ1つ',1900,'fade');
  for(let i=0;i<8;i++)R(H,b,{left:30+i*68+'px',top:'280px',width:'52px',height:'52px',borderRadius:'50%',border:'1.5px dashed '+C,boxSizing:'border-box'},2000+i*70,'pop')}});

defG({no:'24',cat:'CARD',name:'和食店の外観イラストカード',en:'Shopfront Illustration Card',text:'飯家 のぶ',lead:'和紙に、お店の外観の色鉛筆イラストと手描きの地図。思わず行きたくなる和食店のカード。',
use:'<b>居酒屋・和食店・蕎麦屋・小料理屋・和菓子店・古民家カフェ</b>のショップカードに。外観のイラストがあると「このお店だ」と迷わず来てもらえます。',
tips:['外観のイラストは、入口と看板がわかる正面からの絵がいちばん伝わります','地図は正確さより「駅の出口」と「目印のお店」。手描きの線のほうが親しみやすい','色は墨色＋イラストだけ。和紙の質感と合わせると一気に本格的に'],
p:'',
run(H,t){const wa={background:'#f2ebdc',backgroundImage:'radial-gradient(rgba(120,100,70,.08) 1px,transparent 1.5px)',backgroundSize:'6px 6px'};const [f,b]=cards(H,wa,wa);const K='#222';
  T(H,f,{left:'0',width:'600px',top:'24px',textAlign:'center',fontFamily:F.brush,fontSize:'34px',color:K},t,700,'fade');
  const sh=R(H,f,{left:'190px',top:'90px',width:'220px',height:'230px'},900,'up');H.abs({left:'0',top:'0',width:'220px',height:'34px',background:'#5c5c5c',borderRadius:'2px'},sh);H.abs({left:'60px',top:'8px',width:'100px',height:'18px',background:'#d9c9a8',fontSize:'11px',textAlign:'center',lineHeight:'18px',fontFamily:F.sans,fontWeight:'700',color:K},sh,'NOBU');H.abs({left:'10px',top:'34px',width:'200px',height:'170px',background:'#8a6a4c'},sh);H.abs({left:'110px',top:'48px',width:'80px',height:'156px',background:'repeating-linear-gradient(90deg,#3a3a3a 0 3px,#cfe0e8 3px 18px),#cfe0e8',backgroundBlendMode:'normal'},sh);H.abs({left:'110px',top:'48px',width:'80px',height:'156px',backgroundImage:'repeating-linear-gradient(#3a3a3a 0 3px,transparent 3px 26px)'},sh);H.abs({left:'24px',top:'60px',width:'72px',height:'70px',background:'#e9e2d0',border:'3px solid #5c4636',boxSizing:'border-box'},sh);H.abs({left:'0',top:'204px',width:'220px',height:'18px',background:'#6b4a33'},sh);H.abs({left:'40px',top:'150px',width:'30px',height:'40px',borderRadius:'50% 50% 4px 4px',background:'#5f7d5a'},sh);
  const lg=R(H,b,{left:'40px',top:'50px',width:'110px',height:'110px',borderRadius:'50%',background:K},1000,'pop');for(let k=0;k<6;k++)H.abs({left:'45px',top:'14px',width:'20px',height:'40px',borderRadius:'50%',background:'#f2ebdc',transformOrigin:'50% 41px',rotate:k*60+'deg'},lg);
  T(H,b,{left:'40px',top:'176px',fontFamily:F.brush,fontSize:'30px',color:K},t,1100,'fade');
  const mp=R(H,b,{left:'260px',top:'24px',width:'316px',height:'210px'},1200,'fade');const ms=H.svg(316,210,mp);[['M10,60 H306',7],['M10,150 H306',5],['M90,0 V210',6],['M220,0 V210',5]].forEach((q,i)=>{const p=H.sv('path',{d:q[0],stroke:'#333','stroke-width':q[1],fill:'none','stroke-linecap':'round',opacity:.85},ms);const L=400;p.style.strokeDasharray=L;p.animate([{strokeDashoffset:L},{strokeDashoffset:0}],{duration:900,delay:1300+i*150,fill:'both'})});
  [['〇〇駅 A4',20,40],['目印のコンビニ',110,120],['のぶ ★',230,96]].forEach(q=>{const e=H.sv('text',{x:q[1],y:q[2],fill:'#333','font-size':14,'font-family':'Klee One, serif'},ms);e.textContent=q[0]});
  T(H,b,{left:'40px',top:'252px',fontFamily:F.min,fontSize:'14px',lineHeight:'1.7',color:K,whiteSpace:'pre-line'},'OPEN 17:00 – 25:00\nCLOSE 日・祝\nTEL 000-000-0000',1700,'fade');T(H,b,{left:'300px',top:'296px',fontFamily:F.min,fontSize:'12px',color:K},'〇〇市〇〇町0-0-0',1800,'fade');qr(H,b,510,262,64,K,'#f2ebdc',1900)}});

defG({no:'25',cat:'CARD',name:'イタリアンのトリコロールカード',en:'Trattoria Card',text:'Trattoria nobu',lead:'クリーム色に緑・白・赤のライン。陽気でおいしそうな、イタリアンのカード。',
use:'<b>イタリアン・ピッツェリア・ワインバー・パスタ専門店・ジェラート店</b>のショップカードに。',
tips:['緑・白・赤の3色は、細いラインとしてだけ使うと上品にまとまります','店名は太めのセリフ体（Playfair Display）で、イタリアの老舗の看板風に','裏面に「本日のおすすめ」や「ランチ営業」など、来店の理由を1つ入れると効果的'],
p:`イタリアンレストランのショップカードを、名刺サイズ（91×55mm、横向き）の表・裏2面で、陽気でおいしそうなデザインで作ってください。
・店名：「{T}」
・配色：背景はクリーム #FFF6E6、イタリアの緑 #1F8A4C・白・赤 #D0312D、文字はダークブラウン #3B2A20
・フォント：店名は Playfair Display（900）、英字の小見出しは Cormorant Garamond（イタリック）、日本語は Zen Kaku Gothic New
・表面：上端と下端に、緑・白・赤の細いライン（各2mm）。中央に店名を大きく、上に小さく「Cucina Italiana」、下に「Pizza・Pasta・Vino」
・表面の左右：オリーブの枝の線画（SVG）を店名の両側に対称に
・裏面：左側に、ピザのイラスト（円＋6等分の線＋トマトとバジルの丸）
・裏面の右側：住所、電話、営業時間「Lunch 11:30 – 14:30 ／ Dinner 17:30 – 22:00」、定休日
・裏面の下：赤い帯に白文字で「このカードのご提示で、グラスワイン1杯サービス」
・印刷用：表と裏をそれぞれ1ページ、@page 91×55mm、塗り足し3mm`,
run(H,t){const [f,b]=cards(H,{background:'#fff6e6'},{background:'#fff6e6'});const C='#3b2a20',GN='#1f8a4c',RD='#d0312d';
  const tri=(p,y,dl)=>R(H,p,{left:'0',width:'600px',top:y+'px',height:'18px',background:`linear-gradient(${GN} 0 33%,#fff 33% 66%,${RD} 66%)`,transformOrigin:'left'},dl,'grow');tri(f,0,700);tri(f,345,800);
  T(H,f,{left:'0',width:'600px',top:'92px',textAlign:'center',fontFamily:F.serif,fontStyle:'italic',fontSize:'22px',color:GN},'Cucina Italiana',1000,'fade');
  T(H,f,{left:'0',width:'600px',top:'128px',textAlign:'center',fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:t.length>14?'46px':'54px',color:C},t,1100,'pop');
  T(H,f,{left:'0',width:'600px',top:'214px',textAlign:'center',fontFamily:F.serif,fontSize:'18px',letterSpacing:'.2em',color:C},'Pizza ・ Pasta ・ Vino',1300,'fade');
  [[40,1],[490,-1]].forEach(q=>{const o=R(H,f,{left:q[0]+'px',top:'110px',width:'70px',height:'140px',scale:q[1]+' 1'},1400,'fade');const sv=H.svg(70,140,o);H.sv('path',{d:'M60,135 Q20,80 50,5',stroke:GN,'stroke-width':2,fill:'none'},sv);for(let k=0;k<5;k++){const y=120-k*25;H.sv('ellipse',{cx:k%2?30:48,cy:y,rx:12,ry:5,fill:GN,transform:`rotate(${k%2?-35:35} ${k%2?30:48} ${y})`},sv)}});
  const pz=R(H,b,{left:'30px',top:'60px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,#e85d3a 0 70%,#e7b46a 71%)'},1000,'pop');H.a(pz,[{rotate:'0deg'},{rotate:'360deg'}],{d:12000,e:E.lin,i:Infinity,f:'none'});for(let k=0;k<3;k++)H.abs({left:'99px',top:'0',width:'2px',height:'200px',background:'rgba(255,246,230,.7)',rotate:k*60+'deg'},pz);[[60,60,'#fff3d6'],[130,70,'#2e8b57'],[70,130,'#2e8b57'],[130,130,'#fff3d6'],[100,40,'#b71c1c']].forEach(q=>H.abs({left:q[0]-12+'px',top:q[1]-12+'px',width:'24px',height:'24px',borderRadius:'50%',background:q[2]},pz));
  T(H,b,{left:'260px',top:'40px',fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:'22px',color:C},t,1200,'fade');
  ['〇〇市〇〇町0-0-0','TEL 000-000-0000','Lunch 11:30 – 14:30','Dinner 17:30 – 22:00 ／ 月曜定休'].forEach((w,i)=>T(H,b,{left:'260px',top:84+i*32+'px',fontFamily:F.zen,fontSize:'15px',color:C},w,1300+i*120,'left'));
  R(H,b,{left:'0',bottom:'0',width:'600px',height:'56px',background:RD,transformOrigin:'left'},1900,'grow');T(H,b,{left:'0',width:'600px',top:'322px',textAlign:'center',fontFamily:F.zen,fontWeight:'700',fontSize:'16px',color:'#fff'},'このカードのご提示で、グラスワイン1杯サービス',2100,'fade')}});

/* CARD：ビジネス名刺 */
defG({no:'26',cat:'CARD',name:'ミニマルなコーポレート名刺',en:'Minimal Corporate',text:'nobu design',lead:'白地に黒の文字、アクセントは1本の線だけ。どんな業種にも使える、端正な名刺。',
use:'<b>会社員・フリーランス・士業・コンサルタント</b>など、業種を問わない「失敗しない名刺」に。',
tips:['名前は14〜16pt、それ以外は7〜8pt。名前だけを大きくするのが基本','色はロゴの色を1色だけ、細い線や小さな四角でアクセントに','英語表記を裏面に入れると、海外の取引先にもそのまま渡せます'],
p:`ビジネス名刺を、名刺サイズ（91×55mm、横向き）の表・裏2面で、白地のミニマルで端正なデザインで作ってください。
・会社名：「{T}」
・名前：「${NM}」（ふりがな／英語表記：${NMEN}）、肩書き「代表取締役」
・配色：白 #FFFFFF、文字は黒 #1A1A1A、グレー #8A8A8A、アクセントはネイビー #1F3A93（1か所だけ）
・フォント：日本語は Noto Sans JP（400/700）、英字は Montserrat（300/800）
・表面：左上に会社名（英字の太い文字）とロゴの代わりの小さなネイビーの四角。中央左寄りに名前（大きく、字間広め）、その上に肩書き、下に英語表記
・表面の下部：ネイビーの細い横線（幅20mm）の下に、住所・電話・メール・URL を小さく2段で
・裏面：中央に会社名とロゴ、その下にコーポレートサイトのURL。背景は白のまま、または薄いグレー #F4F4F4
・文字はすべて左端をそろえ、カードの端から5mm以上内側に
・印刷用：表と裏をそれぞれ1ページ、@page 91×55mm、塗り足し3mm`,
run(H,t){const [f,b]=cards(H,{background:'#fff'},{background:'#f4f4f4'});const K='#1a1a1a',G='#8a8a8a',NV='#1f3a93';
  R(H,f,{left:'40px',top:'38px',width:'14px',height:'14px',background:NV},700,'pop');T(H,f,{left:'64px',top:'32px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'18px',letterSpacing:'.1em',color:K},t,800,'fade');
  T(H,f,{left:'40px',top:'106px',fontFamily:F.sans,fontSize:'14px',color:G},'代表取締役',1000,'fade');T(H,f,{left:'38px',top:'128px',fontFamily:F.sans,fontWeight:'700',fontSize:'44px',letterSpacing:'.2em',color:K},NM,1100);T(H,f,{left:'40px',top:'194px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'15px',letterSpacing:'.2em',color:G},NMEN,1300,'fade');
  R(H,f,{left:'40px',top:'250px',width:'80px',height:'2px',background:NV,transformOrigin:'left'},1500,'grow');
  T(H,f,{left:'40px',top:'266px',fontFamily:F.sans,fontSize:'12px',lineHeight:'1.9',color:K,whiteSpace:'pre-line'},'〒000-0000 〇〇市〇〇町0-0-0\nTEL 000-000-0000 ／ mail@example.com ／ www.example.com',1600,'fade');
  R(H,b,{left:'268px',top:'120px',width:'64px',height:'64px',background:NV},1200,'pop');T(H,b,{left:'0',width:'600px',top:'204px',textAlign:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'24px',letterSpacing:'.2em',color:K},t,1400,'fade');T(H,b,{left:'0',width:'600px',top:'244px',textAlign:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'13px',letterSpacing:'.2em',color:G},'www.example.com',1600,'fade')}});

defG({no:'27',cat:'CARD',name:'IT・スタートアップのグラデ名刺',en:'Startup Gradient',text:'nobu tech',lead:'裏一面の鮮やかなグラデーション。テック企業らしい、記憶に残る名刺。',
use:'<b>IT企業・スタートアップ・Webエンジニア・デザイナー・マーケター</b>の名刺に。交流会で「その名刺きれいですね」と話のきっかけになります。',
tips:['表は白でシンプル、裏をグラデーション一面に。両面とも派手にしないのがコツ','SNSやGitHubなど、ネットでつながれる情報を入れるとテック系らしい','QRコードでポートフォリオやLinkedInに飛べるようにすると便利'],
p:`IT企業・スタートアップの名刺を、名刺サイズ（91×55mm、横向き）の表・裏2面で、鮮やかなグラデーションが記憶に残るデザインで作ってください。
・会社名：「{T}」
・名前：「${NM}」（${NMEN}）、肩書き「Product Designer」
・配色：表は白、文字は #111；裏はグラデーション（#5B5BF7 → #A855F7 → #F472B6 → #FB923C の斜め）。アクセントにグラデーションの細い線
・フォント：英字は Montserrat（800/300）、日本語は Noto Sans JP（700/400）
・表面：左上に会社名（英字、小文字、太字）＋ロゴの代わりのグラデーションの丸。中央に名前（日本語・大）と英語名、肩書き
・表面の下部：メール、電話、X（旧Twitter）の @ID、GitHub の ID を、小さなアイコン付きで2列に
・表面の右下：ポートフォリオに飛ぶ QRコード（黒、15mm角）
・裏面：グラデーション一面の中央に、白で会社名とキャッチコピー「Build what's next.」。うっすら光の粒（ノイズ）
・画面確認用には、グラデーションがゆっくり流れるように動かす（印刷用は止まった状態）
・印刷用：表と裏をそれぞれ1ページ、@page 91×55mm、塗り足し3mm`,
run(H,t){const GR='linear-gradient(120deg,#5b5bf7,#a855f7 35%,#f472b6 65%,#fb923c)';const [f,b]=cards(H,{background:'#fff'},{background:GR,backgroundSize:'200% 200%'});const K='#111';
  H.a(b,[{backgroundPosition:'0% 50%'},{backgroundPosition:'100% 50%'}],{d:4000,dl:800,dir:'alternate',i:Infinity,f:'none',e:E.soft});
  R(H,f,{left:'40px',top:'34px',width:'22px',height:'22px',borderRadius:'50%',background:GR},700,'pop');T(H,f,{left:'72px',top:'32px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'20px',color:K},t.toLowerCase(),800,'fade');
  T(H,f,{left:'40px',top:'100px',fontFamily:F.sans,fontWeight:'700',fontSize:'40px',letterSpacing:'.12em',color:K},NM,1000);T(H,f,{left:'40px',top:'158px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'15px',letterSpacing:'.15em',color:'#555'},NMEN+'　|　Product Designer',1200,'fade');
  R(H,f,{left:'40px',top:'204px',width:'120px',height:'3px',background:GR,transformOrigin:'left'},1300,'grow');
  [['✉','mail@example.com'],['☎','000-000-0000'],['𝕏','@nobu_tech'],['⌘','github.com/nobu']].forEach((q,i)=>T(H,f,{left:40+(i%2)*220+'px',top:236+Math.floor(i/2)*34+'px',fontFamily:"'Montserrat',sans-serif",fontSize:'13px',color:K},q[0]+'  '+q[1],1400+i*100,'left'));
  qr(H,f,476,236,84,K,'#fff',1700);
  for(let i=0;i<30;i++){const d=H.abs({left:rnd(0,600)+'px',top:rnd(0,363)+'px',width:'3px',height:'3px',borderRadius:'50%',background:'rgba(255,255,255,.7)'},b);H.a(d,[{opacity:0},{opacity:1},{opacity:0}],{d:rnd(1500,3000),dl:rnd(0,2000),i:Infinity})}
  T(H,b,{left:'0',width:'600px',top:'130px',textAlign:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'44px',color:'#fff'},t.toLowerCase(),1200,'pop');T(H,b,{left:'0',width:'600px',top:'196px',textAlign:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'16px',letterSpacing:'.3em',color:'rgba(255,255,255,.9)'},"Build what's next.",1500,'fade')}});

defG({no:'28',cat:'CARD',name:'士業・コンサルの上品な名刺',en:'Professional Navy & Gold',text:'nobu法律事務所',lead:'濃紺に金の細い線と明朝体。信頼と格式を感じる、士業・コンサルタントの名刺。',
use:'<b>弁護士・税理士・行政書士・社労士・コンサルタント・不動産・保険</b>など、信頼が第一の職業の名刺に。',
tips:['明朝体を使うと「誠実・格式」の印象に。ゴシック体よりも落ち着いて見えます','金は細い線と事務所のマークだけ。面積を小さくするほど上品です','資格名（例：弁護士、税理士）は名前の真上に、名前より小さく必ず入れます'],
p:`士業・コンサルタントの名刺を、名刺サイズ（91×55mm、横向き）の表・裏2面で、濃紺と金の、信頼と格式を感じるデザインで作ってください。
・事務所名：「{T}」
・名前：「${NM}」（${NMEN}）、資格・肩書き「弁護士」「代表」
・配色：表は生成り #FAF8F3、文字は濃紺 #14274E；裏は濃紺 #14274E に金 #C5A55A の文字。金は細い線（0.3mm）とマークだけ
・フォント：日本語は Shippori Mincho B1（500/800）、英字は Cormorant Garamond
・表面：左上に事務所のマーク（金の細い線の円の中に、天秤や頭文字のシンプルな図形）と事務所名。中央に「弁護士」（小）→ 名前（大、字間広め）→ 英語名（小）
・表面の下部：金の細い横線の下に、住所・電話・FAX・メール・URL を明朝体で小さく
・裏面：濃紺の中央に、金のマークと事務所名（明朝体）、英語の事務所名。四隅に金の細いL字の飾り
・裏面の下部：取扱分野を金の小さな文字で1行（例：企業法務｜相続｜不動産｜労務）
・印刷用：表と裏をそれぞれ1ページ、@page 91×55mm、塗り足し3mm。金の部分は箔押し用に別レイヤーにできるよう、CSSのクラスを分ける`,
run(H,t){const [f,b]=cards(H,{background:'#faf8f3'},{background:'#14274e'});const NV='#14274e',GD='#c5a55a';
  const mark=(p,x,y,s,dl)=>{const m=R(H,p,{left:x+'px',top:y+'px',width:s+'px',height:s+'px',borderRadius:'50%',border:'1.5px solid '+GD,boxSizing:'border-box'},dl,'pop');const sv=H.svg(s,s,m);const k=s/60;H.sv('path',{d:`M${30*k},${14*k} V${46*k} M${18*k},${46*k} H${42*k} M${14*k},${20*k} H${46*k} M${14*k},${20*k} L${9*k},${32*k} H${19*k} Z M${46*k},${20*k} L${41*k},${32*k} H${51*k} Z`,stroke:GD,'stroke-width':1.5,fill:'none'},sv);return m};
  mark(f,40,32,46,700);T(H,f,{left:'98px',top:'44px',fontFamily:F.min,fontWeight:'800',fontSize:'17px',letterSpacing:'.12em',color:NV},t,800,'fade');
  T(H,f,{left:'40px',top:'118px',fontFamily:F.min,fontSize:'14px',letterSpacing:'.3em',color:NV},'弁護士　代表',1000,'fade');T(H,f,{left:'38px',top:'140px',fontFamily:F.min,fontWeight:'800',fontSize:'44px',letterSpacing:'.25em',color:NV},NM,1100);T(H,f,{left:'40px',top:'202px',fontFamily:F.serif,fontSize:'17px',letterSpacing:'.25em',color:'#6a7591'},NMEN,1300,'fade');
  R(H,f,{left:'40px',width:'520px',top:'250px',height:'1px',background:GD,transformOrigin:'left'},1400,'grow');
  T(H,f,{left:'40px',top:'264px',fontFamily:F.min,fontSize:'12px',lineHeight:'1.9',color:NV,whiteSpace:'pre-line'},'〒000-0000 〇〇市〇〇町0-0-0 〇〇ビル5F\nTEL 000-000-0000　FAX 000-000-0000　mail@example.com',1500,'fade');
  [[16,16,'tl'],[564,16,'tr'],[16,327,'bl'],[564,327,'br']].forEach((c,i)=>R(H,b,{left:c[0]+'px',top:c[1]+'px',width:'20px',height:'20px',borderTop:c[2][0]==='t'?'1px solid '+GD:'none',borderBottom:c[2][0]==='b'?'1px solid '+GD:'none',borderLeft:c[2][1]==='l'?'1px solid '+GD:'none',borderRight:c[2][1]==='r'?'1px solid '+GD:'none'},900+i*80));
  mark(b,265,70,70,1100);T(H,b,{left:'0',width:'600px',top:'160px',textAlign:'center',fontFamily:F.min,fontWeight:'800',fontSize:'26px',letterSpacing:'.2em',color:GD},t,1300,'fade');T(H,b,{left:'0',width:'600px',top:'206px',textAlign:'center',fontFamily:F.serif,fontSize:'15px',letterSpacing:'.3em',color:'rgba(197,165,90,.8)'},'NOBU LAW OFFICE',1500,'fade');
  T(H,b,{left:'0',width:'600px',top:'282px',textAlign:'center',fontFamily:F.min,fontSize:'13px',letterSpacing:'.2em',color:GD},'企業法務 ｜ 相続 ｜ 不動産 ｜ 労務',1700,'fade')}});

defG({no:'29',cat:'CARD',name:'線画の似顔絵イラスト名刺',en:'Line Portrait Card',text:'nobu writing',lead:'黒い線1本で描いた似顔絵と、細い明朝体。余白たっぷりの、覚えてもらえる名刺。',
use:'<b>ライター・デザイナー・カウンセラー・講師・個人事業主</b>の名刺に。似顔絵があると、交流会のあとでも顔と名前を思い出してもらえます。',
tips:['似顔絵は「線1本＋服だけ黒く塗る」くらいシンプルにすると、名刺の小ささでもきれいに見えます','名前は細い明朝体で大きく。イラストと文字の間に余白をたっぷり','仕事をしている姿（パソコン・カメラ・本など）を描くと、職業がひと目で伝わります'],
p:'',
run(H,t){const [f,b]=cards(H,{background:'#fff'},{background:'#fff'});const K='#1a1a1a';
  T(H,f,{left:'50px',top:'50px',fontFamily:F.min,fontSize:'14px',color:K},'ライター',700,'fade');T(H,f,{left:'48px',top:'74px',fontFamily:F.min,fontWeight:'500',fontSize:'42px',letterSpacing:'.12em',color:K},NM,800);
  const il=R(H,f,{left:'350px',top:'70px',width:'220px',height:'240px'},1000,'fade');const sv=H.svg(220,240,il);
  const ln=(d,dl)=>{const p=H.sv('path',{d,stroke:K,'stroke-width':3,fill:'none','stroke-linecap':'round','stroke-linejoin':'round'},sv);p.style.strokeDasharray=600;p.animate([{strokeDashoffset:600},{strokeDashoffset:0}],{duration:1200,delay:dl,fill:'both'})};
  ln('M70,90 C60,40 140,30 140,80 C142,110 130,128 105,130 C82,130 70,115 70,90 Z',1100);ln('M68,82 C70,50 100,36 132,52 C120,60 95,62 70,80',1200);ln('M98,96 h2 M120,96 h2 M102,114 q8,5 14,0',1300);
  H.sv('path',{d:'M40,240 C40,170 70,145 105,145 C140,145 165,170 170,200 L170,240 Z',fill:K},sv);H.sv('path',{d:'M120,170 L215,170 L200,215 L110,215 Z',fill:'#fff',stroke:K,'stroke-width':3},sv);
  qr(H,f,50,250,64,K,'#fff',1500);T(H,f,{left:'130px',top:'252px',fontFamily:"'Montserrat',sans-serif",fontSize:'13px',lineHeight:'1.75',color:K,whiteSpace:'pre-line'},'☎ 000-000-0000\n✉ mail@example.com\n⌂ www.example.com',1600,'fade');
  T(H,b,{left:'0',width:'600px',top:'130px',textAlign:'center',fontFamily:F.min,fontWeight:'500',fontSize:'32px',letterSpacing:'.15em',color:K},t,1100,'fade');T(H,b,{left:'0',width:'600px',top:'186px',textAlign:'center',fontFamily:F.min,fontSize:'15px',letterSpacing:'.15em',color:'#666'},'取材・インタビュー・Webコラム',1300,'fade');T(H,b,{left:'0',width:'600px',top:'290px',textAlign:'center',fontFamily:F.min,fontSize:'12px',color:'#888'},'お仕事のご相談はお気軽に',1500,'fade')}});

defG({no:'30',cat:'CARD',name:'顔写真入りの営業名刺',en:'Sales Card with Photo',text:'nobu不動産',lead:'丸い顔写真とひとことメッセージ。「人」で選ばれる、営業・接客の名刺。',
use:'<b>不動産・保険・車の販売・住宅メーカー・美容部員・地域密着のお店</b>など、「担当者の顔」で選ばれる仕事の名刺に。',
tips:['顔写真は笑顔で、背景を明るく。丸く切り抜くと親しみやすさが増します','「ひとことメッセージ」や趣味を入れると、商談の話のきっかけになります','裏面に「お客様の声」や「得意なこと3つ」を入れると、名刺がそのまま営業資料に'],
p:`営業担当者の、顔写真入りの名刺を、名刺サイズ（91×55mm、横向き）の表・裏2面で、親しみやすく信頼感のあるデザインで作ってください。
・会社名：「{T}」
・名前：「${NM}」（${NMEN}）、肩書き「営業部 住まいのアドバイザー」、資格「宅地建物取引士」
・配色：白 #FFFFFF、メインの青緑 #0F8B8D、薄い青緑 #E6F4F4、文字はダークグレー #2B2B2B、差し色に黄色 #F6C344（小さく）
・フォント：Zen Kaku Gothic New（400/700）、数字と英字は Montserrat
・表面：左側に丸い顔写真の枠（直径30mm、青緑の太い枠）。写真は差し替え用の <img>、今は人のシルエット
・表面の右側：会社名とロゴ（小）→ 肩書き → 名前（大）→ ふりがな → 資格。その下に、黄色のマーカーを引いたような「ひとこと：地元〇〇市で10年、住まい探しのお手伝いをしています」
・表面の下部：薄い青緑の帯に、携帯電話・メール・店舗の電話・LINE の QRコード（小）
・裏面：「私の得意なこと」として、アイコン付きで3つ（「はじめての家探し」「住宅ローンのご相談」「お子さまのいるご家族の住まい」）。下に店舗の住所と営業時間、地図の QRコード
・印刷用：表と裏をそれぞれ1ページ、@page 91×55mm、塗り足し3mm`,
run(H,t){const [f,b]=cards(H,{background:'#fff'},{background:'#e6f4f4'});const TL='#0f8b8d',K='#2b2b2b';
  const ph=R(H,f,{left:'30px',top:'40px',width:'190px',height:'190px',borderRadius:'50%',border:'7px solid '+TL,background:'radial-gradient(circle at 50% 38%,#6b5446 0 20%,transparent 21%),radial-gradient(circle at 50% 108%,#2f5d7c 0 44%,transparent 45%),linear-gradient(#f3efe8,#dfe9ea)',boxSizing:'border-box'},700,'pop');
  T(H,f,{left:'246px',top:'30px',fontFamily:F.zen,fontWeight:'700',fontSize:'16px',color:TL},t,800,'fade');T(H,f,{left:'246px',top:'66px',fontFamily:F.zen,fontSize:'13px',color:K},'営業部 住まいのアドバイザー',900,'fade');
  T(H,f,{left:'244px',top:'88px',fontFamily:F.zen,fontWeight:'700',fontSize:'40px',letterSpacing:'.12em',color:K},NM,1000);T(H,f,{left:'246px',top:'144px',fontFamily:"'Montserrat',sans-serif",fontSize:'13px',letterSpacing:'.15em',color:'#777'},NMEN+'　｜　宅地建物取引士',1100,'fade');
  const hl=R(H,f,{left:'244px',top:'184px',width:'330px',height:'44px',background:'linear-gradient(transparent 55%,#f6c344 55%)',transformOrigin:'left'},1300,'grow');T(H,f,{left:'246px',top:'180px',fontFamily:F.zen,fontSize:'12px',lineHeight:'1.55',color:K,whiteSpace:'pre-line'},'ひとこと：地元〇〇市で10年、\n住まい探しのお手伝いをしています',1400,'fade');
  R(H,f,{left:'0',bottom:'0',width:'600px',height:'92px',background:'#e6f4f4'},1500,'fade');T(H,f,{left:'30px',top:'288px',fontFamily:"'Montserrat',sans-serif",fontSize:'13px',lineHeight:'1.8',color:K,whiteSpace:'pre-line'},'携帯 000-0000-0000　｜　店舗 000-000-0000\nmail@example.com',1600,'fade');qr(H,f,516,284,60,TL,'#e6f4f4',1700);
  T(H,b,{left:'40px',top:'30px',fontFamily:F.zen,fontWeight:'700',fontSize:'20px',color:TL},'私の得意なこと',1000,'fade');
  ['はじめての家探し','住宅ローンのご相談','お子さまのいるご家族の住まい'].forEach((w,i)=>{R(H,b,{left:'40px',top:80+i*56+'px',width:'38px',height:'38px',borderRadius:'50%',background:TL},1200+i*150,'pop');T(H,b,{left:'40px',top:84+i*56+'px',width:'38px',textAlign:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'20px',color:'#fff'},String(i+1),1250+i*150,'fade');T(H,b,{left:'94px',top:86+i*56+'px',fontFamily:F.zen,fontWeight:'700',fontSize:'20px',color:K},w,1300+i*150,'left')});
  T(H,b,{left:'40px',top:'270px',fontFamily:F.zen,fontSize:'13px',lineHeight:'1.8',color:K,whiteSpace:'pre-line'},'〒000-0000 〇〇市〇〇町0-0-0\n営業 10:00 – 19:00（水曜定休）',1800,'fade');qr(H,b,500,262,64,K,'#e6f4f4',1900)}});
