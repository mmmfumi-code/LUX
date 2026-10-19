/* ===== OPENING 16-30 ===== */
defA({no:'16',cat:'SHOW',name:'恋愛ドラマのタイトルバック',en:'Romance Drama',lead:'月曜夜の恋愛ドラマのような、きらめく光の玉の中に、やさしい筆記体のタイトル。',loop:7000,bg:'#2a0f2e',
use:'<b>ウェディング・カップル動画・恋愛系ショートドラマ</b>の冒頭に。胸がときめく、キラキラした始まり方です。',
tips:['光の玉（ボケ）はピンク・白・金を混ぜて、ゆっくり漂わせる','英語の筆記体＋日本語の細い明朝の組み合わせが、ドラマらしさのコツ','バラード調のピアノのBGMを合わせると完成度が上がります'],
p:`恋愛ドラマのタイトルバックのような、きらめく光の玉（ボケ）がふわふわ漂う中に、やさしい筆記体のタイトルと日本語の副題が浮かぶ「ロマンスドラマ」のオープニングを作ってください。
・タイトル：「{T}」
・背景：深いワインレッド #2A0F2E から、中央が明るいピンク #B0457A への円形グラデーション
・光の玉：直径30〜180pxの円を40個。色はピンク・白・金色、半透明（0.15〜0.5）、ぼかし4〜20px、mix-blend-mode: screen。ゆっくり上へ漂いながら、明るさを点滅させる
・キラキラ：小さな4方向の星を20個、ランダムに瞬かせる
・1.0〜2.5秒：タイトルを、筆記体（Great Vibes、白、ピンクの光のにじみ）で左から書くように現す
・2.5秒：タイトルの下に、日本語の副題「この恋は、きっと運命だった。」を細い明朝体（白、字間広め）でフェードイン
・3.0秒〜：全体をゆっくり寄せる（scale 1 → 1.05）
・尺：7秒`,
run(H,t){H.abs({inset:'0',background:'radial-gradient(circle,#b0457a,#2a0f2e 70%)'});const W=H.abs({inset:'0'});for(let i=0;i<40;i++){const s=rnd(30,180);const b=dot(H,rnd(0,1600),rnd(0,900),s/2,pick(['#ffb3d1','#fff','#ffd98a']),W,{opacity:rnd(.15,.5),filter:`blur(${rnd(4,20)}px)`,mixBlendMode:'screen'});H.a(b,[{transform:'translateY(0)'},{transform:`translateY(-${rnd(60,200)}px)`}],{d:7000,e:E.lin})}
  for(let i=0;i<20;i++){const s=H.abs({left:rnd(0,1600)+'px',top:rnd(0,900)+'px',fontSize:rnd(20,40)+'px',color:'#fff'},W,'✦');H.a(s,[{opacity:0,transform:'scale(.3)'},{opacity:1,transform:'scale(1)'},{opacity:0,transform:'scale(.3)'}],{d:rnd(1200,2000),dl:rnd(0,3000),i:Infinity})}
  const T=H.abs({left:'0',right:'0',top:'300px',textAlign:'center'},W);const tt=H.el('div',{fontFamily:"'Great Vibes',cursive",fontSize:titleSz(t,170,1100)+'px',color:'#fff',textShadow:'0 0 30px #ff7ab8'},T,t);H.a(tt,[{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0 0 0)'}],{d:1500,dl:1000,e:'ease-in-out'});
  const sub=H.el('div',{fontFamily:F.min,fontSize:'34px',letterSpacing:'.3em',color:'#fff',marginTop:'20px'},T,'この恋は、きっと運命だった。');H.a(sub,[{opacity:0},{opacity:1}],{d:1000,dl:2500});H.a(W,[{transform:'scale(1)'},{transform:'scale(1.05)'}],{d:4000,dl:3000,e:E.lin})}});

defA({no:'17',cat:'SHOW',name:'日曜夜の重厚ドラマ',en:'Heavy Drama',lead:'日曜夜の社会派ドラマのような、墨の筆文字が叩きつけられ、金の線が走る。',loop:6500,bg:'#060606',
use:'<b>ビジネス系の真剣な動画・挑戦の記録・決意表明</b>に。「ここから本気の物語が始まる」重みを出せます。',
tips:['筆文字は大きく、画面からはみ出すくらいがインパクト大','叩きつけの瞬間に画面を揺らし、墨しぶきを飛ばすのがポイント','オーケストラの重低音を合わせると、ぐっと重厚に'],
p:`日曜夜の社会派ドラマのタイトルバックのような、暗闇に墨の筆文字のタイトルが叩きつけられ、墨しぶきが飛び、金色の細い線が走る「ヘビードラマ」のオープニングを作ってください。
・タイトル：「{T}」
・背景：ほぼ黒 #060606 に、上からうっすらスポットライト。煙のようなもや（灰色、ぼかし、ゆっくり動く）
・0.0〜1.0秒：静かな暗闇。画面中央に細い金色 #C9A45C の横線が、中央から左右へゆっくり伸びる
・1.2秒：タイトルを、毛筆体（Yuji Syuku など、白）の大きな文字で、scale 2.5・blur 10px → scale 1・blur 0 へ0.25秒で叩きつける（cubic-bezier(.7,0,.84,0)）
・叩きつけの瞬間：画面を12px・0.3秒揺らし、文字のまわりに白い墨しぶき（大小の点と細長い飛沫）を飛ばす
・2.0秒〜：金の線が文字の上下に1本ずつ走り、文字の上を金の光がゆっくり横切る
・最後に、右下に小さく「第一話」を縦書きで
・尺：6.5秒`,
run(H,t){const W=H.abs({inset:'0'});H.abs({left:'400px',top:'-300px',width:'800px',height:'900px',background:'radial-gradient(ellipse,rgba(255,255,255,.12),transparent 60%)'},W);for(let i=0;i<5;i++){const m=H.abs({left:rnd(0,1200)+'px',top:rnd(300,800)+'px',width:'600px',height:'200px',borderRadius:'50%',background:'rgba(160,160,160,.08)',filter:'blur(40px)'},W);H.a(m,[{transform:'translateX(0)'},{transform:'translateX(200px)'}],{d:6500,e:E.lin})}
  const g1=H.abs({left:'300px',right:'300px',top:'449px',height:'2px',background:'#c9a45c',transformOrigin:'50% 50%'},W);H.a(g1,[{transform:'scaleX(0)',opacity:1},{transform:'scaleX(1)',opacity:1,offset:.8},{transform:'scaleX(1)',opacity:0}],{d:1300,e:'ease-out'});
  const B=H.box({},W);const el=H.el('div',{fontFamily:F.brush,fontSize:titleSz(t,260,1300)+'px',color:'#fff',whiteSpace:'nowrap',lineHeight:'1'},B,t);H.a(el,[{transform:'scale(2.5)',filter:'blur(10px)',opacity:0},{transform:'scale(1)',filter:'blur(0)',opacity:1}],{d:250,dl:1200,e:E.in});H.shake(B,1450,12,300);
  for(let i=0;i<30;i++){const a=rnd(0,Math.PI*2);const s=rnd(4,22);const sp=H.abs({left:'800px',top:'450px',width:s+'px',height:s*rnd(1,3)+'px',borderRadius:'50%',background:'#fff'},W);H.a(sp,[{transform:'translate(0,0)',opacity:0},{transform:'translate(0,0)',opacity:1,offset:.01},{transform:`translate(${Math.cos(a)*rnd(300,700)}px,${Math.sin(a)*rnd(150,350)}px) rotate(${a}rad)`,opacity:.9}],{d:300,dl:1450,e:E.out})}
  [330,570].forEach((y,i)=>{const l=H.abs({left:'200px',right:'200px',top:y+'px',height:'2px',background:'linear-gradient(90deg,transparent,#c9a45c,transparent)',transformOrigin:i?'100% 50%':'0 50%'},W);H.a(l,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:900,dl:2000+i*150,e:'ease-in-out'})});
  const sh=H.box({},W);BIG(H,t,{fontFamily:F.brush,fontSize:titleSz(t,260,1300)+'px',color:'transparent',backgroundImage:'linear-gradient(100deg,transparent 40%,rgba(255,215,140,.9) 50%,transparent 60%)',backgroundSize:'250% 100%',WebkitBackgroundClip:'text',backgroundClip:'text'},sh);H.a(sh.firstChild,[{backgroundPosition:'150% 0'},{backgroundPosition:'-50% 0'}],{d:1800,dl:2600,e:'ease-in-out'});
  const ep=H.abs({right:'140px',bottom:'90px',writingMode:'vertical-rl',fontFamily:F.min,fontWeight:'800',fontSize:'40px',color:'#c9a45c',letterSpacing:'.3em'},W,'第一話');H.a(ep,[{opacity:0},{opacity:1}],{d:800,dl:3400});fadeAll(H,W,5800,700)}});

defA({no:'18',cat:'SHOW',name:'ゴールデン帯のバラエティ',en:'Variety Pop',lead:'バラエティ番組のような、カラフルな図形がはじけて、ぷるぷる弾むロゴがドーン！',loop:5000,bg:'#ffd23f',
use:'<b>企画もの・ゲーム実況・家族のイベント動画</b>の冒頭に。見た瞬間に「楽しそう！」と思わせる、にぎやかな始まり。',
tips:['図形は原色を4色以上使って、画面いっぱいにはじけさせる','ロゴは太いフチ取り＋ずらした影で、ステッカー風に','「ジャジャーン！」の効果音とともに、ロゴを弾ませます'],
p:`ゴールデン帯のバラエティ番組のオープニングのような、カラフルな図形がはじけ飛び、中央に太いフチのロゴがぷるぷる弾んでドーンと決まる「バラエティポップ」を作ってください。
・タイトル：「{T}」
・背景：黄 #FFD23F に、中心から放射状の光線（白とオレンジの交互、ゆっくり回転）
・0.0〜0.8秒：画面の外から、丸・星・三角・ハート・ジグザグの図形（赤・青・ピンク・緑・紫）が20個、中心へ向かって飛び込んでくる
・0.8秒：図形が一斉に外側へはじけ飛ぶ（回転しながら）。同時に中央にロゴがドーン！
・ロゴ：太い丸ゴシック（Mochiy Pop One、白）、太い黒のフチ（10px）と、右下にずらした赤い影。1文字ずつ色を変えてもよい。scale 0 → 1.3 → 0.9 → 1.05 → 1 で、ぷるぷる弾んで止まる
・ロゴのまわりに紙吹雪を降らせる
・最後にロゴが左右に少し揺れ続ける
・尺：5秒`,
run(H,t){const R=H.abs({left:'-400px',top:'-850px',width:'2400px',height:'2400px',background:'repeating-conic-gradient(#fff 0 10deg,#ffb020 10deg 20deg)',opacity:.45});H.a(R,[{transform:'rotate(0)'},{transform:'rotate(60deg)'}],{d:5000,e:E.lin});
  const cols=['#ff3b3b','#3b82ff','#ff5fb0','#22c55e','#a855f7'],shp=['●','★','▲','♥','◆'];for(let i=0;i<20;i++){const a=i/20*Math.PI*2;const e=H.abs({left:'770px',top:'420px',fontSize:rnd(60,120)+'px',color:pick(cols),lineHeight:'1'},null,pick(shp));
    H.a(e,[{transform:`translate(${Math.cos(a)*1100}px,${Math.sin(a)*700}px) rotate(0)`},{transform:`translate(${Math.cos(a)*120}px,${Math.sin(a)*80}px) rotate(180deg)`,offset:.16},{transform:`translate(${Math.cos(a)*rnd(600,1000)}px,${Math.sin(a)*rnd(400,600)}px) rotate(540deg)`,offset:.4},{transform:`translate(${Math.cos(a)*rnd(600,1000)}px,${Math.sin(a)*rnd(400,600)}px) rotate(540deg)`}],{d:5000,e:'ease-out'})}
  const B=H.box();const lg=H.el('div',{fontFamily:F.pop,fontSize:titleSz(t,190,1200)+'px',color:'#fff',WebkitTextStroke:'10px #111',paintOrder:'stroke fill',textShadow:'14px 14px 0 #ff3b3b',whiteSpace:'nowrap'},B,t);
  H.a(lg,[{transform:'scale(0)'},{transform:'scale(0)',offset:.16},{transform:'scale(1.3)',offset:.22},{transform:'scale(.9)',offset:.27},{transform:'scale(1.05)',offset:.31},{transform:'scale(1)',offset:.35},{transform:'rotate(-2deg)',offset:.6},{transform:'rotate(2deg)',offset:.8},{transform:'rotate(0)'}],{d:5000,e:'ease-out'});
  for(let i=0;i<50;i++){const c=H.abs({left:rnd(0,1600)+'px',top:'-30px',width:'16px',height:'10px',background:pick(cols)});H.a(c,[{transform:'translateY(0) rotate(0)'},{transform:`translateY(980px) rotate(${rnd(300,900)}deg)`}],{d:rnd(1800,3000),dl:900+rnd(0,1500),e:E.lin})}}});

defA({no:'19',cat:'SHOW',name:'朝の情報番組',en:'Morning Show',lead:'朝の情報番組のような、日が昇り、時計が時を刻み、さわやかなロゴが元気に出る。',loop:6000,bg:'#bfe6ff',
use:'<b>朝のルーティン動画・日報・毎日更新のシリーズ</b>の冒頭に。明るく元気な1日の始まりを演出します。',
tips:['太陽が昇る動きと、空の色が明るくなる変化を同時に','時刻の表示を入れると、ぐっと「朝の番組」らしくなります','ロゴの最後の文字の上に太陽を乗せるなど、遊びを入れると◎'],
p:`朝の情報番組のオープニングのような、地平線から太陽が昇って空が明るくなり、時計が時を刻み、さわやかなロゴが元気に出てくる「モーニングショー」を作ってください。
・タイトル：「{T}」
・背景：空のグラデーションを、0.0〜2.0秒で 淡いオレンジ → 明るい水色 に変える。白い雲がゆっくり流れる
・太陽：地平線（画面下から30%）の向こうから、黄 #FFC93C の大きな太陽が昇る（光線が回転、光のにじみ）
・街：地平線に、明るい色（白・水色・黄色の壁）の街並みのシルエット
・時計：画面右上に、白い丸いアナログ時計。秒針がチクタク動き、長針が 5:59 → 6:00 になる瞬間（1.5秒）にポンと弾む。下に「AM 6:00」
・2.0〜3.0秒：中央にロゴを、太い丸ゴシック（Zen Maru Gothic 900、オレンジ #FF7A00、白いフチ）で、下から跳ねるように1文字ずつ出す
・ロゴの下に「おはようございます！」の帯（水色の角丸）
・尺：6秒`,
run(H,t){const sky=H.abs({inset:'0'});H.a(sky,[{background:'linear-gradient(#ffcf9a,#ffe9d0)'},{background:'linear-gradient(#5fb8ff,#cdeeff)'}],{d:2000});for(let i=0;i<4;i++){const c=H.abs({left:'0',top:rnd(60,300)+'px',width:'260px',height:'60px',borderRadius:'30px',background:'#fff',boxShadow:'70px -24px 0 8px #fff'});H.a(c,[{transform:`translateX(${rnd(-300,1600)}px)`},{transform:`translateX(${rnd(-300,1600)+300}px)`}],{d:6000,e:E.lin})}
  const sun=H.abs({left:'650px',top:'0'});dot(H,150,150,120,YE,sun,{boxShadow:'0 0 80px '+YE});const ry=H.abs({left:'150px',top:'150px'},sun);for(let i=0;i<12;i++)H.abs({left:'-6px',top:'-200px',width:'12px',height:'50px',borderRadius:'6px',background:YE,transformOrigin:'6px 200px',transform:`rotate(${i*30}deg)`},ry);H.a(ry,[{transform:'rotate(0)'},{transform:'rotate(90deg)'}],{d:6000,e:E.lin});
  H.a(sun,[{transform:'translateY(700px)'},{transform:'translateY(160px)'}],{d:2200,e:E.out});const svg=H.svg(1600,900);let d='M0 900 L0 640';for(let x=0;x<1600;x+=100){const h=rnd(40,140);d+=` L${x} ${640-h} L${x+90} ${640-h} L${x+90} 640 L${x+100} 640`}H.sv('path',{d:d+' L1600 900Z',fill:'#e7f2ff'},svg);H.sv('rect',{x:0,y:640,width:1600,height:260,fill:'#9fd38a'},svg);
  const ck=H.abs({right:'90px',top:'60px',width:'180px',height:'180px',borderRadius:'50%',background:'#fff',boxShadow:'0 6px 20px rgba(0,0,0,.15)'});const hand=(w,h,c)=>H.abs({left:90-w/2+'px',top:90-h+'px',width:w+'px',height:h+'px',borderRadius:w/2+'px',background:c,transformOrigin:'50% 100%'},ck);const hh=hand(10,50,'#333'),mm=hand(7,72,'#333'),ss=hand(3,76,'#ff3b3b');hh.style.transform='rotate(180deg)';
  H.a(mm,[{transform:'rotate(354deg)'},{transform:'rotate(360deg)'}],{d:300,dl:1500,e:E.back});H.a(ss,[{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{d:6000,e:'steps(60)'});H.a(ck,[{transform:'scale(1)'},{transform:'scale(1.12)'},{transform:'scale(1)'}],{d:300,dl:1500,f:'none'});H.abs({right:'90px',top:'250px',width:'180px',textAlign:'center',fontFamily:F.smono,fontSize:'34px',color:'#1b3a5c'},null,'AM 6:00');
  const T=H.abs({left:'0',right:'0',top:'300px',textAlign:'center'});const tt=H.el('div',{fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:titleSz(t,170,1100)+'px',color:'#ff7a00',WebkitTextStroke:'10px #fff',paintOrder:'stroke fill',filter:'drop-shadow(0 8px 0 rgba(0,0,0,.12))'},T);H.chars(t,tt).forEach((c,i)=>H.a(c,[{transform:'translateY(80px)',opacity:0},{transform:'translateY(-20px)',opacity:1,offset:.6},{transform:'translateY(0)',opacity:1}],{d:450,dl:2000+i*60,e:E.out}));
  const sb=H.el('div',{display:'inline-block',marginTop:'20px',background:'#29a3ff',color:'#fff',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'44px',padding:'10px 40px',borderRadius:'40px'},T,'おはようございます！');H.a(sb,[{transform:'scale(0)'},{transform:'scale(1)'}],{d:400,dl:3000,e:E.back})}});

defA({no:'20',cat:'SHOW',name:'深夜アニメのOP',en:'Anime Opening',lead:'深夜アニメのオープニングのような、集中線と色のフラッシュの中で、タイトルがスタンプのように決まる。',loop:5500,bg:'#0b0b16',
use:'<b>ゲーム実況・ショートアニメ・推し活動画</b>の冒頭に。疾走感のあるアップテンポな曲と合わせると最高に映えます。',
tips:['ビートに合わせて背景色を2〜3回フラッシュさせると、アニメOPらしさが出ます','タイトルは日本語の太字＋小さな英字のサブタイトルの組み合わせ','キャラクターの代わりに、シルエットや目のアップを入れても雰囲気が出ます'],
p:`深夜アニメのオープニングのような、集中線が走り、背景色がビートに合わせてフラッシュする中で、タイトルがスタンプのように叩きつけられる「アニメオープニング」を作ってください。
・タイトル：「{T}」
・0.0〜1.6秒：集中線（Canvas、毎フレーム描き直す白い細い三角形100本）の中を、人物の横顔のシルエット（紺）が画面の右から左へスッと横切る
・0.4・0.8・1.2秒：背景色を ピンク #FF3D7F → 水色 #23D5FF → 黄 #FFE14D に、ハードカットでフラッシュ（ビートのタイミング）
・1.6秒：画面が白く光り、背景が夜空色（紺 #0B0B16）に変わる
・1.7秒：タイトルを、太いゴシック（Dela Gothic One、白、ピンクの影を斜めにずらす）で scale 2 → 1 に叩きつけ、画面を揺らす。文字の後ろに、斜めの帯（ピンク）が走る
・2.0秒：タイトルの下に、英字のサブタイトル「NOBU MOVIE THE ANIMATION」を細い字で
・キラキラした光の粒が、ゆっくり舞い続ける
・尺：5.5秒`,
run(H,t){const c=H.canvas();const x=c.getContext('2d');let mode=0;H.raf(s=>{x.clearRect(0,0,1600,900);if(s>1.6)return;x.fillStyle='rgba(255,255,255,.9)';for(let i=0;i<100;i++){const a=Math.random()*Math.PI*2,w=rnd(.003,.01),r0=rnd(250,350);x.beginPath();x.moveTo(800+Math.cos(a-w)*1200,450+Math.sin(a-w)*1200);x.lineTo(800+Math.cos(a)*r0,450+Math.sin(a)*r0);x.lineTo(800+Math.cos(a+w)*1200,450+Math.sin(a+w)*1200);x.fill()}});
  [[0,'#0b0b16'],[400,'#ff3d7f'],[800,'#23d5ff'],[1200,'#ffe14d'],[1600,'#fff'],[1700,'#0b0b16']].forEach(([ms,cl])=>H.wait(ms,()=>{H.S.style.background=cl}));
  const sv=H.svg(500,600,null,{left:'0',top:'200px'});H.sv('path',{d:'M260 40 C330 40 380 90 380 160 C380 200 400 230 420 250 L380 270 C390 300 370 330 340 330 L330 380 C330 420 300 440 260 460 L240 600 L0 600 L0 300 C40 200 120 60 260 40 Z',fill:'#1a1a3a'},sv);H.a(sv,[{transform:'translateX(1700px)'},{transform:'translateX(-600px)'}],{d:1600,e:'cubic-bezier(.65,0,.35,1)',f:'forwards'});
  const band=H.abs({left:'-200px',top:'360px',width:'2000px',height:'180px',background:'#ff3d7f',transform:'rotate(-8deg) scaleX(0)'});H.a(band,[{transform:'rotate(-8deg) scaleX(0)'},{transform:'rotate(-8deg) scaleX(1)'}],{d:300,dl:1700,e:E.out});
  const B=H.box();const tt=H.el('div',{fontFamily:F.heavy,fontSize:titleSz(t,200,1300)+'px',color:'#fff',textShadow:'10px 10px 0 #ff3d7f,20px 20px 0 #23d5ff',whiteSpace:'nowrap'},B,t);H.a(tt,[{transform:'scale(2)',opacity:0},{transform:'scale(1)',opacity:1}],{d:220,dl:1700,e:E.in});H.shake(B,1920,14,300);
  const sub=H.abs({left:'0',right:'0',top:'600px',textAlign:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'30px',letterSpacing:'.4em',color:'#fff'},null,'NOBU MOVIE THE ANIMATION');H.a(sub,[{opacity:0},{opacity:1}],{d:500,dl:2000});
  for(let i=0;i<30;i++){const p=H.abs({left:rnd(0,1600)+'px',top:rnd(0,900)+'px',fontSize:rnd(16,34)+'px',color:pick(['#fff','#ffe14d','#23d5ff'])},null,'✦');H.a(p,[{opacity:0},{opacity:0,offset:.33},{opacity:1,offset:.5},{opacity:0,transform:'translateY(-60px)'}],{d:5500,dl:rnd(0,800)})}}});

/* GENRE */
defA({no:'21',cat:'GENRE',name:'宇宙叙事詩の幕開け',en:'Space Saga Crawl',lead:'宇宙映画のような、青い一文 → 巨大なタイトルが遠ざかり → あらすじが奥へ流れる。',loop:12000,bg:'#000',
use:'<b>シリーズ動画の第1話・壮大な自己紹介・ネタ動画</b>に。誰もが知っている「あの始まり方」で、一気に盛り上がります。',
tips:['最初の青い一文の後、2秒ほど真っ暗な「間」を置くのがポイント','タイトルは黄色い太い輪郭文字で、画面からはみ出す大きさから遠ざける','あらすじの文章は、自分の動画の内容に書き換えて楽しんで'],
p:`宇宙を舞台にした映画の幕開けのような、「青い一文 → 巨大なタイトルが奥へ遠ざかる → あらすじの文章が奥へ流れていく」3段構成の「スペースサーガクロール」のオープニングを作ってください。
・タイトル：「{T}」
・背景：黒い宇宙。白い星（大小300個）を散らし、ゆっくり瞬かせる
・0.0〜3.0秒：中央に、水色 #4BD5EE の細いゴシックで「遠い昔、はるか彼方の銀河系で……」を、フェードイン → 2秒表示 → フェードアウト
・3.0〜3.5秒：真っ暗な「間」
・3.5〜7.0秒：黄 #FFE81F の太い輪郭だけの文字（塗りなし、線幅4px）でタイトルを、画面からはみ出す大きさ（scale 3）から、遠く小さく（scale 0.1）へゆっくり遠ざけて消す（ease-in）
・5.0〜12.0秒：画面下から、黄色の文章（あらすじ、3段落、中央揃え）を、床に寝かせた遠近（perspective: 400px、rotateX 25°）で、手前から奥へ流していく。冒頭に「エピソード I」と章タイトル
・あらすじ例：「動画クリエイター・ノブは、新たな企画を胸に旅立った。……」
・尺：12秒`,
run(H,t){for(let i=0;i<300;i++){const s=dot(H,rnd(0,1600),rnd(0,900),rnd(.5,2),'#fff');H.a(s,[{opacity:.3},{opacity:1},{opacity:.3}],{d:rnd(1500,3000),dl:-rnd(0,3000),i:Infinity})}
  const a=H.abs({left:'0',right:'0',top:'420px',textAlign:'center',fontFamily:F.sans,fontWeight:'400',fontSize:'44px',color:'#4bd5ee'},null,'遠い昔、はるか彼方の銀河系で……');H.a(a,[{opacity:0},{opacity:1,offset:.2},{opacity:1,offset:.8},{opacity:0}],{d:3000});
  const B=H.box();const tt=H.el('div',{fontFamily:"'Anton',sans-serif",fontSize:titleSz(t,260,1300)+'px',color:'transparent',WebkitTextStroke:'5px #ffe81f',letterSpacing:'.06em',whiteSpace:'nowrap',lineHeight:'1',opacity:0},B,t.toUpperCase());H.a(tt,[{transform:'scale(3)',opacity:1},{transform:'scale(.1)',opacity:0}],{d:3500,dl:3500,e:'ease-in'});
  const P=H.abs({inset:'0',perspective:'400px',overflow:'hidden'});const cr=H.abs({left:'350px',width:'900px',top:'0',textAlign:'center',color:'#ffe81f',fontFamily:F.sans,fontWeight:'700',fontSize:'48px',lineHeight:'1.6',transformOrigin:'50% 100%'},P);
  H.el('div',{fontSize:'40px'},cr,'エピソード I');H.el('div',{fontSize:'76px',fontWeight:'900',margin:'10px 0 30px'},cr,'はじまりの企画');['動画クリエイター・ノブは、新たな企画を胸に旅立った。','カメラ一台と、ひとつの夢。それだけを手に、まだ見ぬ視聴者のもとへ。','いま、伝説の第一話が幕を開ける……。'].forEach(s=>H.el('p',{margin:'0 0 40px',textAlign:'justify'},cr,s));
  H.a(cr,[{transform:'rotateX(25deg) translateY(1000px)'},{transform:'rotateX(25deg) translateY(-1500px)'}],{d:7000,dl:5000,e:E.lin})}});

defA({no:'22',cat:'GENRE',name:'スパイ映画の銃口',en:'Spy Barrel',lead:'スパイ映画のような、白い点が横切り、丸いレンズの中にタイトルが現れて赤く染まる。',loop:7500,bg:'#000',
use:'<b>クールな自己紹介・潜入取材・ミッション系企画</b>の冒頭に。誰もが知る「あの緊張感」を、オリジナルで表現できます。',
tips:['白い点は等間隔に並べて、左から右へ「トン、トン、トン」と横切らせる','丸いレンズの内側にらせん状の溝（同心円）を描くと本物らしい','最後に赤い色がレンズの上から流れ落ちる演出で締める'],
p:`スパイ映画の冒頭のような、黒い画面を白い丸い点が等間隔に横切り、最後の点が丸いレンズ（のぞき穴）に広がって、その中にタイトルが現れ、上から赤く染まっていく「スパイバレル」のオープニングを作ってください。
・タイトル：「{T}」
・背景：真っ黒
・0.0〜1.6秒：画面中央の高さを、白い丸い点（直径60px）が左から右へ、0.2秒おきに8個「トン、トン、トン」と横切る（各点は移動しながら残り、最後に全部消える）
・1.6〜2.4秒：最後の点が画面中央で止まり、直径600pxの丸いレンズに広がる。レンズの中は暗い灰色に、らせん状の溝（同心円の細い線、濃淡交互）を描き、ゆっくり回転させる
・2.4〜3.6秒：レンズの中央に、タイトルを細身の大文字（Montserrat 300、白、字間0.4em）でフェードイン
・3.6〜5.0秒：レンズの上から、赤 #B00000 の液体が波打ちながら流れ落ちて、レンズの中を赤く染める
・5.0秒：レンズが揺れながら下へ落ちて消える
・尺：7.5秒`,
run(H,t){for(let i=0;i<8;i++){const d=dot(H,0,450,30,'#fff');const X=100+i*190;H.a(d,[{transform:'translateX(-100px)',opacity:1},{transform:`translateX(${X}px)`,opacity:1,offset:.5},{transform:`translateX(${X}px)`,opacity:1,offset:.95},{transform:`translateX(${X}px)`,opacity:0}],{d:1600-i*150,dl:i*200,e:E.out,f:'forwards'})}
  const L=H.abs({left:'500px',top:'150px',width:'600px',height:'600px',borderRadius:'50%',overflow:'hidden',background:'repeating-radial-gradient(circle,#2a2a2a 0 18px,#3a3a3a 18px 36px)',transform:'scale(.1)',opacity:0});const g=H.abs({inset:'-100px',background:'repeating-conic-gradient(rgba(0,0,0,.25) 0 6deg,transparent 6deg 30deg)'},L);H.a(g,[{transform:'rotate(0)'},{transform:'rotate(180deg)'}],{d:6000,e:E.lin});
  H.a(L,[{transform:'scale(.1)',opacity:1},{transform:'scale(1)',opacity:1}],{d:800,dl:1600,e:E.out});const T=H.abs({inset:'0',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:titleSz(t,70,520)+'px',letterSpacing:'.4em',color:'#fff',textAlign:'center'},L,t.toUpperCase());H.a(T,[{opacity:0},{opacity:1}],{d:1200,dl:2400});
  const blood=H.abs({left:'-50px',top:'-650px',width:'700px',height:'650px',background:'#b00000',borderRadius:'0 0 45% 55% / 0 0 20% 25%',mixBlendMode:'multiply'},L);H.a(blood,[{transform:'translateY(0)'},{transform:'translateY(700px)'}],{d:1400,dl:3600,e:'ease-in'});
  H.a(L,[{transform:'translateY(0) rotate(0)'},{transform:'translateY(0) rotate(-6deg)',offset:.3},{transform:'translateY(1100px) rotate(10deg)'}],{d:1200,dl:5000,e:'ease-in',f:'forwards'})}});

defA({no:'23',cat:'GENRE',name:'ヒーロー映画のコミックめくり',en:'Comic Flip',lead:'ヒーロー映画のロゴのような、コミックのコマが高速でめくれ、赤いブロックのロゴが決まる。',loop:6000,bg:'#000',
use:'<b>ゲーム実況・スポーツのハイライト・仲間紹介</b>の冒頭に。高揚感がすごい、ヒーロー登場の演出です。',
tips:['コマは0.08秒ごとに、色や構図の違うパネルを高速で切り替える','最後は赤い長方形の中に白い太い文字、というシンプルなロゴで締める','重低音の「ドン！」と、ロゴの決まる瞬間を合わせます'],
p:`ヒーロー映画のロゴのような、コミックのコマ（パネル）が高速でパラパラとめくれていき、最後に赤い長方形の中に白い太文字のタイトルがバシッと決まる「コミックフリップ」のオープニングを作ってください。
・タイトル：「{T}」（大文字）
・0.0〜2.4秒：コミック風のパネルを0.08秒ごとに切り替える（30枚）。各パネルは、CSS で描いた抽象的なコミックの1コマ（集中線、網点、爆発の形、拳のシルエット、ビルのシルエット、「POW!」「BAM!」の吹き出しなど）を、赤・青・黄の原色でランダムに組み合わせる
・パネルは毎回、少し角度（±6°）と大きさ（1〜1.15倍）を変え、カメラがゆっくり引いていく（scale 1.4 → 1）
・2.4〜2.8秒：パネルが画面の奥へ一気に縮み、赤 #E62429 の長方形のロゴ枠に変わる
・2.8秒：枠の中に、タイトルを太く縦長のブロック体（Bebas Neue、白）でバシッと出し、画面を揺らす
・ロゴの上を、光の反射が1回走る
・尺：6秒`,
run(H,t){const P=H.abs({inset:'0',overflow:'hidden'});const bang=['POW!','BAM!','ZAP!','WHAM!'];const cols=['#e62429','#1e5bff','#ffd400','#111','#fff'];
  for(let i=0;i<30;i++)H.wait(i*80,()=>{P.innerHTML='';const bg=pick(cols.slice(0,3));const p=H.abs({inset:'0',background:bg,transform:`rotate(${rnd(-6,6)}deg) scale(${rnd(1,1.15)})`},P);
    H.abs({inset:'0',background:`repeating-conic-gradient(rgba(255,255,255,.25) 0 4deg,transparent 4deg 12deg)`},p);H.abs({inset:'0',backgroundImage:'radial-gradient(rgba(0,0,0,.3) 3px,transparent 4px)',backgroundSize:'18px 18px'},p);
    const k=i%4;if(k===0)H.abs({left:rnd(300,900)+'px',top:'200px',width:'400px',height:'400px',background:'#ffd400',clipPath:'polygon(50% 0,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)'},p);
    if(k===1){let x=0;while(x<1600){const h=rnd(200,600);H.abs({left:x+'px',top:900-h+'px',width:'120px',height:h+'px',background:'#111'},p);x+=130}}
    if(k===2)H.abs({left:'500px',top:'250px',width:'600px',height:'400px',borderRadius:'50%',background:'#fff',border:'10px solid #111'},p);
    H.abs({left:rnd(200,900)+'px',top:rnd(150,500)+'px',fontFamily:F.heavy,fontSize:rnd(120,200)+'px',color:pick(['#fff','#ffd400','#e62429']),WebkitTextStroke:'8px #111',paintOrder:'stroke fill',transform:`rotate(${rnd(-12,12)}deg)`},p,pick(bang))});
  H.a(P,[{transform:'scale(1.4)'},{transform:'scale(1)',offset:.4},{transform:'scale(1)',offset:.4},{transform:'scale(.35,.28)',offset:.46},{transform:'scale(.35,.28)',opacity:0,offset:.47},{opacity:0}],{d:6000,e:'ease-in'});
  const B=H.box();const lg=H.el('div',{background:'#e62429',padding:'10px 50px',fontFamily:"'Bebas Neue',sans-serif",fontSize:titleSz(t,230,1200)+'px',lineHeight:'1',color:'#fff',letterSpacing:'.02em',position:'relative',overflow:'hidden'},B,t.toUpperCase());H.a(lg,[{opacity:0,transform:'scale(1.15)'},{opacity:0,offset:.46},{opacity:1,transform:'scale(1)',offset:.47},{opacity:1}],{d:6000});H.shake(B,2820,14,300);
  const sh=H.abs({inset:'0',background:'linear-gradient(110deg,transparent 40%,rgba(255,255,255,.6) 50%,transparent 60%)',backgroundSize:'250% 100%',backgroundPosition:'150% 0'},lg);H.a(sh,[{backgroundPosition:'150% 0'},{backgroundPosition:'-50% 0'}],{d:800,dl:3400})}});

defA({no:'24',cat:'GENRE',name:'ホラーのタイトル',en:'Horror Title',lead:'ホラー映画のような、蛍光灯がまたたき、ひっかき傷のような赤い文字がにじむ。',loop:7000,bg:'#050505',
use:'<b>怪談・肝試し・ハロウィン・ミステリー企画</b>の冒頭に。見る人の背筋をぞくっとさせる演出です。',
tips:['明滅は不規則に。規則的だと怖さが半減します','文字はひっかいたような、かすれた書体（Creepster など）か、手書きの筆文字で','静寂 → 突然の大きな音、の落差が一番怖さを生みます'],
p:`ホラー映画のタイトルのような、古い蛍光灯がまたたく暗い部屋で、ひっかき傷のような赤い文字がじわっとにじみ出てくる「ホラータイトル」のオープニングを作ってください。
・タイトル：「{T}」
・背景：ほぼ黒の古い壁（ざらついたノイズのテクスチャ、灰緑がかった色）。画面の端を強く暗くする（ビネット）
・0.0〜2.5秒：画面全体の明るさを、蛍光灯のように不規則にまたたかせる（0.05〜0.3秒の間隔で brightness 0.1 ⇄ 1.2）。またたきの合間に、一瞬だけ人影のシルエットが部屋の奥に映る
・2.5〜4.5秒：壁に、タイトルを赤 #8B0000 の、ひっかいたようなかすれた書体（Creepster など）で、上から下へにじみ出すように現す（mask で上から少しずつ）。文字の下端から、赤い液体のしずくを数本、ゆっくり垂らす
・4.5秒：画面が一瞬真っ白に光って（0.1秒）、すぐ暗くなる
・画面全体に細かいフィルムのざらつきと縦の傷を重ねる
・尺：7秒`,
run(H,t){const W=H.abs({inset:'0',background:'#1a1f1a'});const c=H.canvas(W);const x=c.getContext('2d');c.style.opacity=.25;H.abs({inset:'0',background:'radial-gradient(ellipse,transparent 30%,#000 80%)'},W);
  const sh=H.abs({left:'1100px',top:'280px',width:'120px',height:'420px',borderRadius:'60px 60px 10px 10px',background:'#000',opacity:0},W);let next=0,on=1;H.raf(s=>{const im=x.createImageData(320,180);for(let i=0;i<im.data.length;i+=4){const v=Math.random()*255;im.data[i]=im.data[i+1]=im.data[i+2]=v;im.data[i+3]=255}const o=document.createElement('canvas');o.width=320;o.height=180;o.getContext('2d').putImageData(im,0,0);x.drawImage(o,0,0,1600,900);
    if(s<2.5&&s>next){on=!on;next=s+rnd(.05,.3);W.style.filter=`brightness(${on?1.2:.1})`;sh.style.opacity=!on&&Math.random()<.3?.8:0}else if(s>=2.5&&s<4.5){W.style.filter='brightness(.9)';sh.style.opacity=0}});
  const T=H.box({},W);const tt=H.el('div',{fontFamily:"'Creepster','Yuji Syuku',cursive",fontSize:titleSz(t,200,1200)+'px',color:'#8b0000',textShadow:'0 0 12px #4a0000',whiteSpace:'nowrap'},T,t);H.a(tt,[{clipPath:'inset(0 0 100% 0)'},{clipPath:'inset(0 0 0 0)'}],{d:2000,dl:2500,e:'ease-in-out'});
  for(let i=0;i<7;i++){const d=H.abs({left:rnd(350,1250)+'px',top:'520px',width:'10px',height:'0',borderRadius:'0 0 6px 6px',background:'#8b0000'},W);H.a(d,[{height:'0'},{height:rnd(60,220)+'px'}],{d:2000,dl:3500+rnd(0,800),e:'ease-in'})}
  const fl=H.abs({inset:'0',background:'#fff',opacity:0});H.a(fl,[{opacity:1},{opacity:0}],{d:120,dl:4500,f:'none'});for(let i=0;i<4;i++){const s=H.abs({left:rnd(0,1600)+'px',top:'0',bottom:'0',width:'2px',background:'rgba(255,255,255,.15)'});H.a(s,[{transform:'translateX(0)'},{transform:`translateX(${rnd(-40,40)}px)`}],{d:300,i:Infinity,dir:'alternate'})}}});

defA({no:'25',cat:'GENRE',name:'金曜夜の映画劇場',en:'Friday Cinema',lead:'金曜夜の映画番組のような、夕暮れの空と影絵の人物、懐かしいメロディが聞こえてくる。',loop:7000,bg:'#2a1530',
use:'<b>家族で観る動画・思い出のスライドショー・映画レビュー</b>の冒頭に。「さあ、今夜の映画が始まる」わくわく感。',
tips:['夕焼けのオレンジ → 紫のグラデーションが、ノスタルジーの決め手','影絵の人物は動かさず、雲と光だけゆっくり動かすと上品','トランペットのような郷愁のあるメロディが似合います'],
p:`金曜夜の映画番組のオープニングのような、大きな夕日が沈む空と、遠くを見つめる人物の影絵、懐かしい雰囲気のタイトルが浮かぶ「フライデーシネマ」のオープニングを作ってください。
・タイトル：「{T}」
・空：上 #2A1530（紫）→ 中 #C2456B（ピンク）→ 下 #FF9F43（オレンジ）のグラデーション。横に長くたなびく雲（紫がかった灰色、ゆっくり右へ）
・夕日：地平線の上に、大きな太陽（直径360px、黄〜オレンジのグラデーション、光のにじみ）が、ゆっくり沈んでいく（7秒で 80px）
・地上：地平線に、街並みと丘のシルエット（黒に近い紫）。丘の上に、帽子をかぶった人物が夕日を見つめて立つ影絵
・1.5〜3.0秒：画面上部に、タイトルを太いセリフ体（Playfair Display 900、白、うっすら影）でフェードイン。上に小さく「今夜の映画は」
・画面全体に、古いフィルムのようなやさしいざらつき
・尺：7秒`,
run(H,t){H.abs({inset:'0',background:'linear-gradient(#2a1530 0%,#c2456b 55%,#ff9f43 80%)'});const sun=dot(H,800,560,180,'#ffcf5a',null,{background:'radial-gradient(#fff3b0,#ffb347 60%,#ff7a3c)',boxShadow:'0 0 120px 40px rgba(255,170,80,.6)'});H.a(sun,[{transform:'translateY(0)'},{transform:'translateY(80px)'}],{d:7000,e:E.lin});
  for(let i=0;i<5;i++){const c=H.abs({left:rnd(-200,1200)+'px',top:rnd(150,450)+'px',width:rnd(500,900)+'px',height:'30px',borderRadius:'15px',background:'rgba(110,70,120,.6)'});H.a(c,[{transform:'translateX(0)'},{transform:'translateX(120px)'}],{d:7000,e:E.lin})}
  const svg=H.svg(1600,900);H.sv('path',{d:'M0 900 L0 680 Q300 600 600 660 Q900 720 1100 640 Q1350 560 1600 650 L1600 900Z',fill:'#1a0d1f'},svg);H.sv('circle',{cx:1180,cy:540,r:22,fill:'#1a0d1f'},svg);H.sv('path',{d:'M1150 525 L1210 525 L1200 512 L1160 512 Z',fill:'#1a0d1f'},svg);H.sv('path',{d:'M1160 560 L1200 560 L1210 650 L1150 650 Z',fill:'#1a0d1f'},svg);
  const T=H.abs({left:'0',right:'0',top:'130px',textAlign:'center',color:'#fff',textShadow:'0 4px 20px rgba(0,0,0,.4)'});H.el('div',{fontFamily:F.min,fontSize:'34px',letterSpacing:'.3em'},T,'今夜の映画は');H.el('div',{fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:titleSz(t,140,1100)+'px',letterSpacing:'.04em'},T,t);H.a(T,[{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{d:1500,dl:1500})}});

defA({no:'26',cat:'GENRE',name:'映画の予告編',en:'Movie Trailer',lead:'映画の予告編のような、黒い画面に短い言葉が雷鳴とともに1つずつ打ち込まれる。',loop:9000,bg:'#000',
use:'<b>新企画の告知・イベントの予告・動画シリーズの予告編</b>に。「近日公開」の期待感を最大限に高めます。',
tips:['言葉は短く、句読点で区切って3〜4枚に分けるのがコツ','言葉と言葉の間は真っ暗にして、雷のフラッシュでつなぐ','最後の「COMING SOON」は小さく、タイトルは大きく'],
p:`映画の予告編のような、黒い画面に短い言葉が1枚ずつ雷鳴とともに打ち込まれ、最後にタイトルと「COMING SOON」が出る「ムービートレーラー」のオープニングを作ってください。
・タイトル：「{T}」
・背景：黒。画面の奥で、雷雲のような灰色のもやがゆっくり動く
・言葉のカード（白、細身の明朝体 Shippori Mincho B1、中央、字間広め）を、1.2秒ずつ順に表示：「この秋、」→「ひとつの企画が、」→「すべてを変える。」
・各カードの切り替えで：画面全体を白く一瞬光らせる（雷のフラッシュ、0.08秒）＋カードを scale 1.05 → 1 でゆっくり引く。カードとカードの間に、0.3秒の真っ暗な間
・4.5〜6.0秒：タイトルを、太いセリフ体（Cinzel 700、銀色のグラデーション）で大きく、ゆっくり寄りながら（scale 0.9 → 1）フェードイン
・6.0秒：タイトルの下に、小さく「COMING SOON」と公開日「2026.12.24」
・尺：9秒`,
run(H,t){for(let i=0;i<4;i++){const m=H.abs({left:rnd(0,1200)+'px',top:rnd(0,700)+'px',width:'700px',height:'300px',borderRadius:'50%',background:'rgba(120,120,140,.12)',filter:'blur(50px)'});H.a(m,[{transform:'translateX(0)'},{transform:'translateX(160px)'}],{d:9000,e:E.lin})}
  const fl=H.abs({inset:'0',background:'#fff',opacity:0});['この秋、','ひとつの企画が、','すべてを変える。'].forEach((s,i)=>{const at=200+i*1500;const c=H.abs({left:'0',right:'0',top:'410px',textAlign:'center',fontFamily:F.min,fontWeight:'500',fontSize:'64px',letterSpacing:'.3em',color:'#fff',opacity:0},null,s);
    H.a(c,[{opacity:0,transform:'scale(1.05)'},{opacity:1,offset:.05},{opacity:1,transform:'scale(1)',offset:.8},{opacity:0,transform:'scale(1)'}],{d:1200,dl:at});H.a(fl,[{opacity:.9},{opacity:0}],{d:120,dl:at,f:'none'})});
  const T=H.abs({left:'0',right:'0',top:'330px',textAlign:'center'});H.el('div',{fontFamily:"'Cinzel',serif",fontWeight:'700',fontSize:titleSz(t,150,1200)+'px',letterSpacing:'.08em',backgroundImage:'linear-gradient(#fff,#9ba3af 60%,#fff)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'},T,t.toUpperCase());
  H.a(T,[{opacity:0,transform:'scale(.9)'},{opacity:1,transform:'scale(1)'}],{d:1500,dl:4800,e:E.out});H.a(fl,[{opacity:.9},{opacity:0}],{d:150,dl:4800,f:'none'});const cs=H.abs({left:'0',right:'0',top:'560px',textAlign:'center',color:'#bbb',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',letterSpacing:'.6em'});H.el('div',{fontSize:'34px'},cs,'COMING SOON');H.el('div',{fontSize:'24px',marginTop:'10px'},cs,'2026.12.24');H.a(cs,[{opacity:0},{opacity:1}],{d:1000,dl:6300})}});

defA({no:'27',cat:'GENRE',name:'YouTuberのオープニング',en:'Creator Intro',lead:'人気YouTuberのような、3秒でテンポよく弾けるポップなチャンネルロゴ。',loop:4000,bg:'#ff4f6d',
use:'<b>YouTubeチャンネルの毎回の冒頭・ショート動画の頭</b>に。短くテンポがよいので、視聴者が離れずに本編へ入れます。',
tips:['全体を3秒以内に収めるのが、最後まで見てもらうコツ','背景色を2回ハードカットで切り替えると、テンポよく見えます','チャンネル登録ボタンをポンと出すと、自然に登録をうながせます'],
p:`人気YouTuberのチャンネルのような、3秒でテンポよく弾けるポップなロゴ演出「クリエイターイントロ」を作ってください。
・タイトル：「{T}」
・0.0〜0.4秒：背景がピンク #FF4F6D → 0.2秒で黄 #FFD23F → 0.4秒で水色 #3ED1FF にハードカットで切り替わる。そのたびに中央の白い円が scale 0 → 1.2 で広がる
・0.4秒：白い円の中に、タイトルを太い丸ゴシック（Mochiy Pop One、黒）で1文字ずつ0.04秒おきにポンポンと出す（scale 0 → 1.3 → 1）
・0.8秒：タイトルの下から、赤い「チャンネル登録」ボタン（角丸、白い文字、再生マークのアイコン）がぴょんと出る
・1.4秒：ボタンにマウスカーソルが動いてきてクリック → ボタンが灰色の「登録済み」に変わり、ベルのアイコンが揺れる
・まわりに丸と星の図形がはじける
・2.8秒〜：全体がくるっと回りながら小さくなって消える
・尺：4秒`,
run(H,t){[[0,'#ff4f6d'],[200,'#ffd23f'],[400,'#3ed1ff']].forEach(([ms,c])=>H.wait(ms,()=>{H.S.style.background=c}));const W=H.abs({inset:'0'});const ci=dot(H,800,400,300,'#fff',W);[0,200,400].forEach(ms=>H.a(ci,[{transform:'scale(0)'},{transform:'scale(1.2)',offset:.7},{transform:'scale(1)'}],{d:220,dl:ms,f:'none'}));
  const row=H.abs({left:'0',right:'0',top:'330px',textAlign:'center',fontFamily:F.pop,fontSize:titleSz(t,140,560)+'px',color:'#111'},W);H.chars(t,row).forEach((c,i)=>H.a(c,[{transform:'scale(0)'},{transform:'scale(1.3)',offset:.6},{transform:'scale(1)'}],{d:300,dl:400+i*40,e:E.back}));
  const bt=H.abs({left:'620px',top:'560px',width:'360px',height:'90px',borderRadius:'45px',background:'#ff0033',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',gap:'14px',fontFamily:F.sans,fontWeight:'900',fontSize:'34px'},W);const bi=H.el('span',{},bt,'▶');const bx=H.el('span',{},bt,'チャンネル登録');H.a(bt,[{transform:'translateY(60px) scale(.5)',opacity:0},{transform:'translateY(0) scale(1)',opacity:1}],{d:400,dl:800,e:E.back});
  const cur=H.abs({left:'0',top:'0',fontSize:'60px',color:'#111'},W,'➤');H.a(cur,[{transform:'translate(1300px,850px) rotate(-120deg)',opacity:0},{transform:'translate(1300px,850px) rotate(-120deg)',opacity:1,offset:.3},{transform:'translate(880px,600px) rotate(-120deg)',offset:.65},{transform:'translate(870px,590px) rotate(-120deg) scale(.85)',offset:.75},{transform:'translate(880px,600px) rotate(-120deg)'}],{d:1500,e:'ease-in-out'});
  H.wait(1450,()=>{bt.style.background='#888';bx.textContent='登録済み';bi.textContent='🔔';H.a(bi,[{transform:'rotate(0)'},{transform:'rotate(20deg)'},{transform:'rotate(-20deg)'},{transform:'rotate(0)'}],{d:500})});
  for(let i=0;i<14;i++){const a=i/14*Math.PI*2;const s=H.abs({left:'790px',top:'390px',fontSize:rnd(30,60)+'px',color:pick(['#fff','#ffd23f','#ff4f6d','#111'])},W,pick(['●','★','▲']));H.a(s,[{transform:'translate(0,0) scale(0)'},{transform:`translate(${Math.cos(a)*560}px,${Math.sin(a)*380}px) scale(1)`,opacity:0}],{d:700,dl:400,e:E.out})}
  H.a(W,[{transform:'rotate(0) scale(1)',opacity:1},{transform:'rotate(360deg) scale(0)',opacity:0}],{d:600,dl:2800,e:E.in,f:'forwards'})}});

defA({no:'28',cat:'GENRE',name:'レトロゲームの起動画面',en:'Game Boot',lead:'昔のゲーム機のような、ドット絵のロゴが上から降りてきて「PRESS START」が点滅。',loop:7000,bg:'#000',
use:'<b>ゲーム実況・レトロ好き向け・企画の始まり</b>に。電子音の「ピロン♪」と合わせると、懐かしさで一気に引き込めます。',
tips:['フォントは DotGothic16 や Press Start 2P などのドット書体で','ロゴが止まる瞬間に、画面を一瞬白く光らせると起動音っぽくなります','「PRESS START」は0.5秒間隔の点滅が定番'],
p:`昔の家庭用ゲーム機の起動画面のような、ドット絵のロゴが上からゆっくり降りてきて止まり、「PRESS START」が点滅する「ゲームブート」のオープニングを作ってください。
・タイトル：「{T}」
・背景：黒。画面全体に走査線（横線、不透明度0.2）と、四隅が少し暗いブラウン管の丸み
・0.0〜2.0秒：画面上から、タイトルをドット書体（DotGothic16、大きく、文字ごとに虹色のグラデーション：赤→橙→黄→緑→青）で、ゆっくり等速で降ろす。画像が粗く見えるよう、image-rendering: pixelated や 4px単位の位置移動にする
・2.0秒：ロゴが止まった瞬間、画面を一瞬白く光らせ、ロゴの文字を上から1行ずつ光らせる（キラッ）
・2.5秒〜：下に「PRESS START」（白、ドット書体）を0.5秒間隔で点滅させる
・最下部に小さく「© 2026 NOBU MOVIE」
・ロゴの周りに、ドットの星（白い四角）をいくつか瞬かせる
・尺：7秒`,
run(H,t){const W=H.abs({inset:'0'});const L=H.abs({left:'0',right:'0',top:'0',textAlign:'center',fontFamily:F.dot,fontSize:titleSz(t,150,1200)+'px',lineHeight:'1'},W);const cols=['#ff3b3b','#ff9f1c','#ffe14d','#3ddc84','#3b82ff','#a855f7'];H.chars(t,L).forEach((c,i)=>{c.style.color=cols[i%6];c.style.textShadow='6px 6px 0 #222'});
  H.raf(s=>{const k=Math.min(1,s/2);const y=Math.round((-200+k*500)/4)*4;L.style.transform=`translateY(${y}px)`});const fl=H.abs({inset:'0',background:'#fff',opacity:0});H.a(fl,[{opacity:.8},{opacity:0}],{d:200,dl:2000,f:'none'});H.a(L,[{filter:'brightness(1)'},{filter:'brightness(2)'},{filter:'brightness(1)'}],{d:400,dl:2100,f:'none'});
  const ps=H.abs({left:'0',right:'0',top:'600px',textAlign:'center',fontFamily:F.dot,fontSize:'56px',color:'#fff',opacity:0},W,'PRESS START');H.wait(2500,()=>H.a(ps,[{opacity:1},{opacity:0}],{d:1000,e:'steps(2,jump-none)',i:Infinity}));H.abs({left:'0',right:'0',top:'800px',textAlign:'center',fontFamily:F.dot,fontSize:'26px',color:'#888'},W,'© 2026 NOBU MOVIE');
  for(let i=0;i<12;i++){const s=H.abs({left:Math.round(rnd(100,1500)/8)*8+'px',top:Math.round(rnd(60,560)/8)*8+'px',width:'8px',height:'8px',background:'#fff'},W);H.a(s,[{opacity:0},{opacity:1},{opacity:0}],{d:rnd(600,1200),dl:rnd(0,1500),e:'steps(3)',i:Infinity})}
  H.abs({inset:'0',background:'repeating-linear-gradient(rgba(0,0,0,.2) 0 2px,transparent 2px 4px)',pointerEvents:'none'});H.abs({inset:'0',background:'radial-gradient(ellipse,transparent 55%,rgba(0,0,0,.7))',pointerEvents:'none'})}});

defA({no:'29',cat:'GENRE',name:'サスペンス劇場',en:'Suspense Theater',lead:'2時間サスペンスのような、夜の海に赤いタイトルがズームで迫り、不穏な和音が響く。',loop:7000,bg:'#020409',
use:'<b>謎解き企画・推理ゲーム・ドッキリの種明かし</b>の冒頭に。誰もが知る「あの不穏な始まり」で笑いと緊張を誘えます。',
tips:['タイトルは赤い明朝体の太字を、奥から手前へ一気にズームさせる','断崖や夜の海のシルエットを背景に置くと、一気にそれらしく','「ジャジャジャーン」の和音に合わせて、タイトルを止めます'],
p:`2時間サスペンスドラマの冒頭のような、夜の断崖と暗い海を背景に、赤いタイトルが奥から手前へズームで迫って止まる「サスペンスシアター」のオープニングを作ってください。
・タイトル：「{T}」
・背景：深夜の海。上は濃紺の空に満月（雲がかかって、ときどき隠れる）、下は黒い海（月の光の反射が揺れる）。左に断崖のシルエット
・波：海面に、白い細い波の線がゆっくり寄せては返す
・0.5〜1.5秒：カメラがゆっくり断崖に寄る（scale 1 → 1.08）
・1.5〜2.0秒：タイトルを、赤 #D10000 の太い明朝体（Shippori Mincho B1 800、白いにじみ）で、奥から手前へ一気にズーム（scale 0.1 → 1.15 → 1、0.5秒）して画面中央に止める
・2.0秒：止まった瞬間に、画面全体を一瞬赤く染めて（不透明度0.3）戻す。タイトルの両脇に、白い縦書きで「湯けむり」「殺人事件」などの副題
・3.5秒：タイトルの下に、小さく「〜断崖に消えた、ある企画の謎〜」
・尺：7秒`,
run(H,t){const W=H.abs({inset:'0'});H.abs({inset:'0',background:'linear-gradient(#050a1f,#0d1a3a 55%,#020409 56%)'},W);const mo=dot(H,1150,200,70,'#f4f0dc',W,{boxShadow:'0 0 60px #f4f0dc'});const cl=H.abs({left:'900px',top:'170px',width:'500px',height:'70px',borderRadius:'35px',background:'#1a2340',filter:'blur(6px)'},W);H.a(cl,[{transform:'translateX(-300px)'},{transform:'translateX(300px)'}],{d:7000,e:E.lin});
  for(let i=0;i<10;i++){const r=H.abs({left:1150+rnd(-120,120)+'px',top:520+i*35+'px',width:rnd(60,180)+'px',height:'4px',background:'#f4f0dc',opacity:.5},W);H.a(r,[{opacity:.15,transform:'translateX(0)'},{opacity:.6,transform:'translateX(20px)'},{opacity:.15,transform:'translateX(0)'}],{d:rnd(1500,2500),i:Infinity})}
  for(let i=0;i<4;i++){const w=H.abs({left:'0',right:'0',top:560+i*80+'px',height:'2px',background:'rgba(255,255,255,.3)'},W);H.a(w,[{transform:'translateY(0) scaleX(.6)'},{transform:'translateY(14px) scaleX(1)'},{transform:'translateY(0) scaleX(.6)'}],{d:3000,dl:i*400,i:Infinity})}
  const svg=H.svg(1600,900,W);H.sv('path',{d:'M0 900 L0 300 L120 310 L260 380 L330 470 L380 560 L420 900 Z',fill:'#000'},svg);H.a(W,[{transform:'scale(1)'},{transform:'scale(1)',offset:.07},{transform:'scale(1.08)',offset:.22},{transform:'scale(1.08)'}],{d:7000,e:'ease-in-out'});
  const B=H.box();const tt=H.el('div',{fontFamily:F.min,fontWeight:'800',fontSize:titleSz(t,170,950)+'px',color:'#d10000',textShadow:'0 0 20px rgba(255,255,255,.5),0 0 4px #fff',whiteSpace:'nowrap'},B,t);H.a(tt,[{transform:'scale(.1)',opacity:0},{transform:'scale(1.15)',opacity:1,offset:.8},{transform:'scale(1)',opacity:1}],{d:500,dl:1500,e:E.in});
  const red=H.abs({inset:'0',background:'#d10000',opacity:0});H.a(red,[{opacity:.35},{opacity:0}],{d:500,dl:2000,f:'none'});[['湯けむり',150],['殺人事件',1400]].forEach(([s,x])=>{const v=H.abs({left:x+'px',top:'300px',writingMode:'vertical-rl',fontFamily:F.min,fontWeight:'800',fontSize:'48px',color:'#fff'},null,s);H.a(v,[{opacity:0},{opacity:1}],{d:500,dl:2100})});
  const sub=H.abs({left:'0',right:'0',top:'620px',textAlign:'center',fontFamily:F.min,fontSize:'34px',color:'#fff'},null,'〜断崖に消えた、ある企画の謎〜');H.a(sub,[{opacity:0},{opacity:1}],{d:800,dl:3500})}});

defA({no:'30',cat:'GENRE',name:'フィルムのカウントダウン',en:'Film Leader',lead:'古い映写機の始まりのような、5・4・3・2・1のカウントと回る扇形、そしてタイトル。',loop:7500,bg:'#1b1b1b',
use:'<b>レトロな映像・思い出のホームビデオ・自主映画の上映</b>の冒頭に。「カタカタ」と回る映写機の音が聞こえてくるような始まり。',
tips:['数字のまわりを、時計の針のように回る扇形が見せ場','フィルムの傷・ちらつき・ゆれを重ねると、一気に本物らしく','最後の「1」の後に一瞬真っ白なコマを入れてからタイトルへ'],
p:`古い映写機でフィルムを上映するときの始まりのような、5・4・3・2・1のカウントダウン（フィルムリーダー）のあとに、タイトルが映る「フィルムリーダー」のオープニングを作ってください。
・タイトル：「{T}」
・背景：セピアがかった灰色。画面の中央に、二重の白い円と十字の照準線
・0.0〜5.0秒：円の中央に、大きな数字（5 → 4 → 3 → 2 → 1、太いセリフ体、黒）を1秒ずつ表示。同時に、円の中で12時から時計回りに、暗い灰色の扇形が1秒で1周する（conic-gradient を回す）
・画面全体に、フィルムのちらつき（明るさ 0.9〜1.1 を0.05秒ごと）、縦の細い傷（白い線、ランダムに現れる）、小さなゴミ（黒い点）、上下の小さなゆれ（±3px）を重ねる
・5.0秒：真っ白なコマを0.1秒
・5.1〜7.0秒：セピア調の画面に、タイトルを細身のセリフ体（Playfair Display、こげ茶、字間広め）で中央にフェードイン。下に「THE END … OR THE BEGINNING」
・尺：7.5秒`,
run(H,t){const W=H.abs({inset:'0',background:'#9a9184'});H.abs({left:'500px',top:'150px',width:'600px',height:'600px',borderRadius:'50%',border:'6px solid #f2ede4',boxSizing:'border-box'},W);H.abs({left:'560px',top:'210px',width:'480px',height:'480px',borderRadius:'50%',border:'4px solid #f2ede4',boxSizing:'border-box'},W);H.abs({left:'0',right:'0',top:'449px',height:'3px',background:'#f2ede4'},W);H.abs({left:'799px',top:'0',bottom:'0',width:'3px',background:'#f2ede4'},W);
  const sw=H.abs({left:'563px',top:'213px',width:'474px',height:'474px',borderRadius:'50%'},W);const num=H.abs({left:'0',right:'0',top:'250px',textAlign:'center',fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:'340px',lineHeight:'1',color:'#1b1b1b'},W,'5');
  H.raf(s=>{if(s<5){const n=5-Math.floor(s);num.textContent=n;const a=(s%1)*360;sw.style.background=`conic-gradient(rgba(40,40,40,.55) 0deg ${a}deg,transparent ${a}deg)`;W.style.filter=`sepia(.4) brightness(${rnd(.9,1.1).toFixed(2)})`;W.style.transform=`translateY(${rnd(-3,3)}px)`}
    else if(s<5.1){W.style.background='#fff';num.textContent='';sw.style.background='none'}else{W.style.opacity=0}});
  for(let i=0;i<6;i++){const sc=H.abs({left:rnd(0,1600)+'px',top:'0',bottom:'0',width:'2px',background:'rgba(255,255,255,.6)',opacity:0});H.a(sc,[{opacity:0},{opacity:.8},{opacity:0}],{d:200,dl:rnd(0,4800),f:'none'})}for(let i=0;i<20;i++){const d=dot(H,rnd(0,1600),rnd(0,900),rnd(2,6),'#222',null,{opacity:0});H.a(d,[{opacity:.8},{opacity:0}],{d:100,dl:rnd(0,5000),f:'none'})}
  const T=H.abs({left:'0',right:'0',top:'0',bottom:'0',background:'#d9c9a8',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',opacity:0});H.el('div',{fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:titleSz(t,140,1100)+'px',color:'#3b2a1a',letterSpacing:'.1em'},T,t);H.el('div',{fontFamily:F.serif,fontSize:'28px',letterSpacing:'.4em',color:'#6b5338',marginTop:'20px'},T,'THE END … OR THE BEGINNING');
  H.a(T,[{opacity:0},{opacity:1}],{d:1200,dl:5100})}});
