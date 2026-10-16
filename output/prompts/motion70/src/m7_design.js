/* ===== DESIGN 61-70 ===== */
const BLU='#5aa9ff';

def({no:'61',cat:'DESIGN',name:'マスクリビール',en:'Line Mask Reveal',lead:'見えない枠の下から、行ごとにスッとせり上がる。',
text:'伝わる 動画は 文字で決まる',multi:true,loop:4200,bg:'#f3f6fa',
use:'<b>キャッチコピー・結論・見出し</b>に。最も汎用的な「品のいい」文字出し。企業PR、解説動画のまとめ、どんなジャンルにも馴染みます。',
tips:['イージング cubic-bezier(.16,1,.3,1) が「上質さ」の正体。これだけは変えない','行の遅れは0.12〜0.18秒。速すぎると一塊に、遅すぎると間延びします','最後の行だけ色を変えると、結論が自然に目に入ります'],
p:`複数行のコピーが、行ごとに「見えない枠」の下からスッとせり上がって現れる、上品なマスクリビールを作ってください。
・背景：#F3F6FA。文字：#0F1B2D、Noto Sans JP 900、1行の高さ150px（文字120px）、左揃え。画面の左から200pxの位置
・「{T}」をスペースで区切り、1語＝1行にする。最後の行だけ色 #2B7BE4
・コピーの上に小さな見出しラベル「KEY MESSAGE」（JetBrains Mono、28px、#5AA9FF、文字間0.2em）。左に長さ40pxの線
・仕組み：各行を overflow: hidden の枠に入れ、中の文字を translateY 110% → 0 へ動かす
・出方：0.2秒から、行ごとに0.15秒ずつ遅らせて0.8秒。イージング cubic-bezier(.16,1,.3,1)
・ラベルは最初に、左の線が scaleX 0→1、文字が不透明度0→1
・3.2秒から、同じ順番で translateY 0 → −110% へ0.6秒で抜ける（cubic-bezier(.7,0,.84,0)）
・尺：4.2秒でループ`,
run(H,t,w){if(!w.length)w=[t];const box=H.abs({left:'200px',top:'50%',transform:'translateY(-50%)',display:'flex',flexDirection:'column'});
  const lab=H.el('div',{display:'flex',alignItems:'center',gap:'16px',fontFamily:F.mono,fontSize:'28px',color:BLU,letterSpacing:'.2em',marginBottom:'24px'},box);const ln=H.el('span',{width:'40px',height:'3px',background:BLU,transformOrigin:'0 50%'},lab);const lt=H.el('span',{},lab,'KEY MESSAGE');
  H.a(ln,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:500});H.a(lt,[{opacity:0},{opacity:1}],{d:500,dl:150});
  w.forEach((s,i)=>{const m=H.el('div',{overflow:'hidden',height:'150px'},box);const el=H.el('div',{fontFamily:F.sans,fontWeight:'900',fontSize:fs(s,120,1250)+'px',lineHeight:'150px',color:i===w.length-1?'#2b7be4':'#0f1b2d',whiteSpace:'nowrap'},m,s);
    H.a(el,[{transform:'translateY(110%)'},{transform:'translateY(0)'}],{d:800,dl:200+i*150});H.a(el,[{transform:'translateY(0)'},{transform:'translateY(-110%)'}],{d:600,dl:3200+i*100,e:E.in,f:'forwards'})});
  H.a(lab,[{opacity:1},{opacity:0}],{d:400,dl:3200,f:'forwards'});
}});

def({no:'62',cat:'DESIGN',name:'蛍光マーカー',en:'Highlighter Sweep',lead:'大事な言葉に、蛍光ペンがシュッと引かれる。',
text:'作業時間が 半分 になる',multi:true,loop:4000,bg:'#ffffff',
use:'<b>解説・ビジネス・教育</b>動画の要点に。文章の中の「ここだけ覚えて」を1語だけ光らせると、記憶に残ります。',
tips:['マーカーは文字の下半分〜2/3だけに引くと、本物の蛍光ペンに見えます','わずかに傾ける（−1.5°）と手で引いた感じになります','強調語だけ少し大きくする（1.1倍）と、マーカーとの相乗効果が出ます'],
p:`文章の中の大事な1語に、蛍光ペンのマーカーがシュッと引かれて強調される演出を作ってください。
・背景：#FFFFFF。文字：#1F2937、Noto Sans JP 900、画面幅いっぱいに1行で
・文章：「{T}」をスペースで区切り、つなげて1行に表示する。2番目の語を「強調語」にする
・0.0〜0.5秒：文章全体を translateY 24px → 0 でフェードイン
・0.8秒：強調語の後ろに、黄色 #FFE14D のマーカー（文字の高さの下60%、角を少し丸く、−1.5°傾ける）を左から右へ scaleX 0→1 で0.45秒（cubic-bezier(.65,0,.35,1)）。マーカーの端は少しかすれさせる（右端を透明にするグラデーション）
・1.3秒：強調語を scale 1 → 1.1、色を #111 に（0.3秒、cubic-bezier(.34,1.56,.64,1)）
・強調語の上に小さく「POINT」のラベル（JetBrains Mono、#5AA9FF）を下からポンと出す
・3.4秒でフェードアウト、尺4秒でループ`,
run(H,t,w){if(w.length<2)w=['',t,''];const B=H.box();const line=H.el('div',{fontFamily:F.sans,fontWeight:'900',fontSize:fs(w.join(''),120,1350)+'px',color:'#1f2937',whiteSpace:'nowrap',display:'flex',alignItems:'baseline'},B);
  H.a(line,[{transform:'translateY(24px)',opacity:0},{transform:'translateY(0)',opacity:1}],{d:500});
  w.forEach((s,i)=>{if(i!==1){H.el('span',{},line,s);return}const k=H.el('span',{position:'relative',display:'inline-block',margin:'0 .1em'},line);
    const mk=H.abs({left:'-.08em',right:'-.08em',bottom:'.02em',height:'60%',background:'linear-gradient(90deg,#ffe14d 92%,rgba(255,225,77,.4))',borderRadius:'.12em',transform:'rotate(-1.5deg) scaleX(0)',transformOrigin:'0 50%'},k);
    const tx=H.el('span',{position:'relative',display:'inline-block'},k,s);const lab=H.abs({left:'50%',top:'-.55em',fontFamily:F.mono,fontWeight:'700',fontSize:'.26em',color:BLU,letterSpacing:'.15em',transform:'translateX(-50%)'},k,'POINT');
    H.a(mk,[{transform:'rotate(-1.5deg) scaleX(0)'},{transform:'rotate(-1.5deg) scaleX(1)'}],{d:450,dl:800,e:'cubic-bezier(.65,0,.35,1)'});
    H.a(tx,[{transform:'scale(1)',color:'#1f2937'},{transform:'scale(1.1)',color:'#111'}],{d:300,dl:1300,e:E.back});
    H.a(lab,[{transform:'translate(-50%,20px)',opacity:0},{transform:'translate(-50%,0)',opacity:1}],{d:300,dl:1400,e:E.back})});
  H.a(B,[{opacity:1},{opacity:0}],{d:500,dl:3400,f:'forwards'});
}});

def({no:'63',cat:'DESIGN',name:'ブロックリビール',en:'Block Reveal',lead:'色の板が走り抜けた跡に、文字が残っている。',
text:'CHAPTER 01 はじめに',multi:true,loop:3800,bg:'#0e1a2b',
use:'<b>章タイトル・目次・セクションの区切り</b>に。長い解説動画の章立てに使うと、視聴者が「今どこか」を見失いません。',
tips:['板が文字を覆いきった瞬間に文字を出すのが、きれいに見える唯一のコツ','2行目の板を別の色にして0.15秒遅らせると、リズムが生まれます','板の動きは「伸びる0.4秒＋縮む0.4秒」が基本'],
p:`色の板が左から伸びて文字の場所を覆い、右へ縮んで抜けると、その跡に文字が現れている「ブロックリビール」を作ってください。
・背景：#0E1A2B。画面左寄せ（左から200px）で2行
・1行目：「{T}」の最初の語（またはスペース区切りの1・2語目）を、JetBrains Mono の太字、60px、#5AA9FF
・2行目：残りの語を、Noto Sans JP 900、170px、白
・各行の板：その行の文字と同じ幅・高さの長方形。1行目は #5AA9FF、2行目は白
・板の動き：①左端を基準に scaleX 0 → 1（0.4秒）②右端を基準に scaleX 1 → 0（0.4秒）。どちらもイージング cubic-bezier(.87,0,.13,1)
・板が完全に覆った瞬間（0.4秒の時点）に、その行の文字を表示する（それまでは不透明度0）
・1行目は0.2秒、2行目は0.35秒から開始
・3.0秒から、同じ板の動きで今度は文字を隠して消す
・尺：3.8秒でループ`,
run(H,t,w){if(!w.length)w=[t];let a,b;if(w.length>=3){a=w.slice(0,2).join(' ');b=w.slice(2).join(' ')}else{a=w.length>1?w[0]:'';b=w[w.length-1]}
  const box=H.abs({left:'200px',top:'50%',transform:'translateY(-50%)',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'18px'});
  const row=(s,css,col,dl)=>{const r=H.el('div',{position:'relative'},box);const tx=H.el('div',Object.assign({whiteSpace:'nowrap',opacity:0},css),r,s);const bl=H.abs({inset:'0',background:col,transform:'scaleX(0)'},r);
    const sweep=(d0,show)=>{H.a(bl,[{transform:'scaleX(0)',transformOrigin:'0 50%'},{transform:'scaleX(1)',transformOrigin:'0 50%'}],{d:400,dl:d0,e:E.io,f:'none'});H.a(bl,[{transform:'scaleX(1)',transformOrigin:'100% 50%'},{transform:'scaleX(0)',transformOrigin:'100% 50%'}],{d:400,dl:d0+400,e:E.io,f:'none'});H.wait(d0+400,()=>{tx.style.opacity=show?1:0})};
    sweep(dl,1);sweep(3000+dl-200,0)};
  if(a)row(a,{fontFamily:F.mono,fontWeight:'700',fontSize:'60px',color:BLU,letterSpacing:'.08em'},BLU,200);row(b,{fontFamily:F.sans,fontWeight:'900',fontSize:fs(b,170,1250)+'px',color:'#fff',lineHeight:'1.15'},'#fff',350);
}});

def({no:'64',cat:'DESIGN',name:'タイル組み上げ',en:'Tile Assemble',lead:'バラバラのタイルが飛んできて、1枚のタイトルに組み上がる。',
text:'PROJECT',loop:4200,bg:'#0d1b2a',
use:'<b>プロジェクト名・チーム紹介・完成発表</b>に。「みんなで作り上げた」ストーリーや、ロゴ・タイトルの組み上がりに。',
tips:['タイルの数は横6×縦3が見やすい。細かくするほど「パズル」っぽく','飛んでくる順番をランダムにすると、組み上がる瞬間の気持ちよさが増します','最後に光の帯を1回走らせると「完成」の合図になります'],
p:`横長のタイトル「{T}」を、6列×3行のタイルに分割し、バラバラの位置から飛んできたタイルが組み上がって1枚になる演出を作ってください。
・背景：#0D1B2A
・タイトル板：幅1400px×高さ420px、背景 #5AA9FF、文字 #0D1B2A（Dela Gothic One、板に収まる最大サイズ）
・分割：板を6×3＝18枚のタイルに分け、各タイルは overflow: hidden で、中に板全体を「タイルの位置ぶんずらして」置く（並べると1枚の絵になる）
・初期状態：各タイルを、元の位置から x ±900px・y ±500px・translateZ −800px のランダムな位置、rotateX/rotateY ±180°、不透明度0 に置く（親に perspective: 1600px）
・0.2〜1.4秒：各タイルを元の位置へ0.9秒で戻す（cubic-bezier(.16,1,.3,1)）。開始は0〜0.5秒のランダムな遅れ
・組み上がったら（1.6秒）：板の上を白い光の帯（幅15%、角度110°、不透明度0.6）が左から右へ0.6秒で通過
・3.0秒：タイルが逆の動きで、ランダムな方向へ飛び散る（0.7秒、cubic-bezier(.7,0,.84,0)）
・尺：4.2秒でループ`,
run(H,t){const P=H.box({perspective:'1600px'});const W=H.el('div',{position:'relative',width:'1400px',height:'420px',transformStyle:'preserve-3d'},P);const C=6,R=3,tw=1400/C,th=420/R;const sz=fs(t,330,1300);
  for(let r=0;r<R;r++)for(let c=0;c<C;c++){const tl=H.abs({left:c*tw+'px',top:r*th+'px',width:tw+'px',height:th+'px',overflow:'hidden'},W);
    H.abs({left:-c*tw+'px',top:-r*th+'px',width:'1400px',height:'420px',background:BLU,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:sz+'px',color:'#0d1b2a',whiteSpace:'nowrap'},tl,t);
    const from=`translate3d(${rnd(-900,900)}px,${rnd(-500,500)}px,-800px) rotateX(${rnd(-180,180)}deg) rotateY(${rnd(-180,180)}deg)`;const to=`translate3d(${rnd(-900,900)}px,${rnd(-500,500)}px,-800px) rotateX(${rnd(-180,180)}deg) rotateY(${rnd(-180,180)}deg)`;
    H.a(tl,[{transform:from,opacity:0},{transform:'none',opacity:1}],{d:900,dl:200+rnd(0,500)});H.a(tl,[{transform:'none',opacity:1},{transform:to,opacity:0}],{d:700,dl:3000+rnd(0,200),e:E.in,f:'forwards'})}
  const sh=H.abs({inset:'0',background:'linear-gradient(110deg,transparent 42%,rgba(255,255,255,.6) 50%,transparent 58%)',backgroundSize:'250% 100%',backgroundPosition:'150% 0',pointerEvents:'none'},W);
  H.a(sh,[{backgroundPosition:'150% 0'},{backgroundPosition:'-50% 0'}],{d:600,dl:1600,e:E.soft,f:'none'});
}});

def({no:'65',cat:'DESIGN',name:'スプリットVS',en:'Split Versus',lead:'画面が左右に割れて2つの言葉が対決、中央にVSが落ちる。',
text:'理想 現実',multi:true,loop:4200,bg:'#0b1220',
use:'<b>比較・対決・AとBの違い</b>に。「理想と現実」「初心者とプロ」「iPhone vs Android」など、比べる系の動画の定番。',
tips:['左右の色は「冷たい色×暖かい色」の対比にすると、対立がはっきりします','境界線を斜め（約8°）にすると、ゲームの対戦画面のような勢いが出ます','VSが落ちた瞬間に画面を揺らすと迫力が出ます'],
p:`画面が斜めの境界線で左右に分かれ、2つの言葉が向かい合い、中央に「VS」が落ちてくる対決画面を作ってください。
・背景：#0B1220
・左パネル：#1E3A5F、clip-path: polygon(0 0, 54% 0, 46% 100%, 0 100%)。「{T}」の1語目を白、Dela Gothic One、左パネル中央に
・右パネル：#5AA9FF、clip-path: polygon(54% 0, 100% 0, 100% 100%, 46% 100%)。2語目を #0B1220、Dela Gothic One、右パネル中央に
・0.0〜0.5秒：左パネルは左外から、右パネルは右外からスライドイン（cubic-bezier(.16,1,.3,1)）
・0.5〜0.8秒：各語を scale 1.4・不透明度0 → scale 1 でドンと出す
・0.9秒：中央に「VS」（白、Dela Gothic One、200px、黒フチ10px、−8°傾き）を上から scale 3→1 で落とし、画面を12px・0.3秒揺らす。境界線に沿って白い光の線を走らせる
・3.4秒：左右パネルがそれぞれ外へスライドアウト、VSは scale 0 で消える
・尺：4.2秒でループ`,
run(H,t,w){const a=w[0]||t,b=w[1]||t;const W=H.box();
  const L=H.abs({inset:'0',background:'#1e3a5f',clipPath:'polygon(0 0,54% 0,46% 100%,0 100%)'},W),R=H.abs({inset:'0',background:BLU,clipPath:'polygon(54% 0,100% 0,100% 100%,46% 100%)'},W);
  const la=BIG(H,a,{position:'absolute',left:'0',width:'800px',top:'360px',textAlign:'center',color:'#fff',fontSize:fs(a,180,640)+'px'},L);const rb=BIG(H,b,{position:'absolute',left:'800px',width:'800px',top:'360px',textAlign:'center',color:'#0b1220',fontSize:fs(b,180,640)+'px'},R);
  H.a(L,[{transform:'translateX(-100%)'},{transform:'translateX(0)'}],{d:500});H.a(R,[{transform:'translateX(100%)'},{transform:'translateX(0)'}],{d:500});
  [la,rb].forEach(e=>H.a(e,[{transform:'scale(1.4)',opacity:0},{transform:'scale(1)',opacity:1}],{d:300,dl:500,e:E.in}));
  const ln=H.svg(1600,900,W);const l=H.sv('line',{x1:864,y1:0,x2:736,y2:900,stroke:'#fff','stroke-width':8,'stroke-dasharray':910,'stroke-dashoffset':910},ln);H.a(l,[{strokeDashoffset:910,opacity:1},{strokeDashoffset:0,opacity:1},{strokeDashoffset:0,opacity:0}],{d:500,dl:900});
  const vs=H.abs({left:'0',right:'0',top:'0',bottom:'0',display:'flex',alignItems:'center',justifyContent:'center'},W);const v=H.el('div',{fontFamily:F.heavy,fontSize:'200px',color:'#fff',WebkitTextStroke:'10px #000',paintOrder:'stroke fill',transform:'rotate(-8deg)'},vs,'VS');
  H.a(v,[{transform:'rotate(-8deg) scale(3)',opacity:0},{transform:'rotate(-8deg) scale(1)',opacity:1}],{d:250,dl:900,e:E.in});H.shake(W,1150,12,300);
  H.a(L,[{transform:'translateX(0)'},{transform:'translateX(-100%)'}],{d:500,dl:3400,e:E.in,f:'forwards'});H.a(R,[{transform:'translateX(0)'},{transform:'translateX(100%)'}],{d:500,dl:3400,e:E.in,f:'forwards'});H.a(v,[{transform:'rotate(-8deg) scale(1)'},{transform:'rotate(-8deg) scale(0)'}],{d:300,dl:3400,e:E.in,f:'forwards'});
}});

def({no:'66',cat:'DESIGN',name:'線画から塗り',en:'Stroke to Fill',lead:'輪郭線が描かれ、下から色が満ちていく。',
text:'DESIGN',loop:4200,bg:'#0b1320',
use:'<b>ロゴ出し・ブランド名・作品タイトル</b>に。「描く→完成する」の2段階で、制作・クリエイティブ系の動画と好相性。',
tips:['線を描く時間と、塗りが満ちる時間を同じくらいにするとバランスが良い','塗りの上端を波打たせる（SVGで波形のマスク）と液体が満ちるように','線の色と塗りの色を変えると、版画のような味わいが出ます'],
p:`巨大な「{T}」の輪郭線がペンで描かれるように現れ、その後、下から色が満ちて塗りつぶされる演出を作ってください。
・背景：#0B1320
・文字：SVG の <text>、Dela Gothic One、画面幅の約80%
・線画：塗りなし、線 #5AA9FF・線幅3px。stroke-dasharray を十分長く（例：1600）し、stroke-dashoffset 1600 → 0 で1.4秒かけて描く（cubic-bezier(.65,0,.35,1)）。文字ごとに0.1秒ずつ遅らせると、より手描き感が出る
・塗り：同じ位置に塗りつぶしの文字（#5AA9FF）を重ね、clip-path: inset(100% 0 0 0) → inset(0 0 0 0) で、1.4秒から1.0秒かけて下から満たす（cubic-bezier(.16,1,.3,1)）
・塗りの上端に、白い細い光の線（高さ4px、不透明度0.8）を一緒に上昇させる
・満ち終わったら、文字全体を scale 1 → 1.03 へゆっくり拡大し、文字の下に小さく「— since 2026 —」（JetBrains Mono、#5AA9FF）をフェードイン
・3.6秒でフェードアウト、尺4.2秒でループ`,
run(H,t){const svg=H.svg(1600,900);const sz=fitPx(t,"'Dela Gothic One'",330,1300);const G=H.sv('g',{},svg);G.style.transformOrigin='800px 450px';
  const mk=a=>{const e=H.sv('text',Object.assign({x:800,y:450,'text-anchor':'middle','dominant-baseline':'central','font-family':"Dela Gothic One, sans-serif",'font-size':sz},a),G);e.textContent=t;return e};
  const top=450-sz*.55,bot=450+sz*.55;const cid='cf'+Math.floor(Math.random()*1e6);const cp=H.sv('clipPath',{id:cid},H.sv('defs',{},svg));const cr=H.sv('rect',{x:0,y:bot,width:1600,height:0},cp);
  const o=mk({fill:'none',stroke:BLU,'stroke-width':3,'stroke-dasharray':1600,'stroke-dashoffset':1600});const f=mk({fill:BLU,'clip-path':`url(#${cid})`});
  H.a(o,[{strokeDashoffset:1600},{strokeDashoffset:0}],{d:1400,e:'cubic-bezier(.65,0,.35,1)'});
  H.raf(s=>{const k=Math.max(0,Math.min(1,(s-1.4)/1));const e=1-Math.pow(1-k,4);const h=(bot-top)*e;cr.setAttribute('y',bot-h);cr.setAttribute('height',h)});const ln=H.abs({left:'150px',width:'1300px',height:'4px',background:'#fff',opacity:0,top:bot+'px'});
  H.a(ln,[{top:bot+'px',opacity:.8},{top:top+'px',opacity:.8,offset:.95},{top:top+'px',opacity:0}],{d:1000,dl:1400,f:'none'});
  H.a(G,[{transform:'scale(1)'},{transform:'scale(1.03)'}],{d:1400,dl:2400,e:E.soft,f:'forwards'});
  const cap=H.abs({left:'0',right:'0',top:bot+40+'px',textAlign:'center',fontFamily:F.mono,fontSize:'34px',color:BLU,letterSpacing:'.2em'},null,'— since 2026 —');H.a(cap,[{opacity:0},{opacity:1}],{d:600,dl:2500});
  H.wait(3600,()=>[svg,cap].forEach(e=>H.a(e,[{opacity:1},{opacity:0}],{d:500,f:'forwards'})));
}});

def({no:'67',cat:'DESIGN',name:'雑誌の表紙組み',en:'Editorial Grid',lead:'罫線と大小の文字が、拍に合わせて雑誌の表紙のように組まれる。',
text:'新しい 働き方 特集',multi:true,loop:5200,bg:'#eef1f5',
use:'<b>特集・まとめ・企画もの</b>のタイトルに。「〇〇特集」「2026年版まとめ」など、雑誌のように見せたい解説動画に。',
tips:['文字の大きさに極端な差（ジャンプ率）をつけると、一気に雑誌らしくなります','罫線を先に引いてから文字を置くと「組版している」感が出ます','号数・日付・ページ番号などの小さな情報が、本物っぽさを支えます'],
p:`雑誌の表紙のように、罫線と大小の文字が拍に合わせて次々に組まれていく演出を作ってください。
・背景：#EEF1F5。文字色：#0F1B2D。アクセント：#2B7BE4
・グリッド：画面の上下左右に80pxの余白をとり、上から140pxの位置と下から140pxの位置に横罫線（2px）、左から1/3の位置に縦罫線（2px）
・罫線は0.0〜0.6秒で、横線は左から、縦線は上から scale 0→1 で引く（cubic-bezier(.65,0,.35,1)）
・文字の配置（「{T}」をスペースで区切った語を使う）：
　・上段左：「VOL.26 — 2026 AUTUMN」（JetBrains Mono、28px）
　・右側の大きな領域：1語目を Noto Sans JP 900・130px、2語目を Dela Gothic One・260px（アクセント色）で縦に積む
　・左の細い列：3語目を縦書き（writing-mode: vertical-rl）、Shippori Mincho B1・90px
　・下段：「P.001 / 特別号 / 永久保存版」（JetBrains Mono、24px）を左・中・右に
・拍：0.8秒から0.32秒ごとに1要素ずつ表示。各要素は clip-path: inset(0 100% 0 0) → inset(0) で左から現れる（0.4秒、cubic-bezier(.16,1,.3,1)）
・4.6秒でフェードアウト、尺5.2秒でループ`,
run(H,t,w){const a=w[0]||t,b=w[1]||'',c=w[2]||'';const W=H.abs({inset:'0'});const ink='#0f1b2d',ac='#2b7be4';
  const rule=(css,dl,ori)=>{const r=H.abs(Object.assign({background:ink},css),W);H.a(r,[{transform:ori==='v'?'scaleY(0)':'scaleX(0)'},{transform:'none'}],{d:600,dl,e:'cubic-bezier(.65,0,.35,1)'})};
  rule({left:'80px',right:'80px',top:'140px',height:'2px',transformOrigin:'0 50%'},0);rule({left:'80px',right:'80px',bottom:'140px',height:'2px',transformOrigin:'0 50%'},100);rule({left:'560px',top:'140px',bottom:'140px',width:'2px',transformOrigin:'50% 0'},200,'v');
  const items=[];const it=(css,txt)=>{const e=H.abs(Object.assign({color:ink,whiteSpace:'nowrap'},css),W,txt);items.push(e);return e};
  it({left:'80px',top:'90px',fontFamily:F.mono,fontSize:'28px',letterSpacing:'.12em'},'VOL.26 — 2026 AUTUMN');
  it({left:'620px',top:'190px',fontFamily:F.sans,fontWeight:'900',fontSize:fs(a,130,880)+'px'},a);
  if(b)it({left:'610px',top:'360px',fontFamily:F.heavy,fontSize:fs(b,260,900)+'px',color:ac,lineHeight:'1.1'},b);
  if(c)it({left:'200px',top:'190px',writingMode:'vertical-rl',fontFamily:F.min,fontWeight:'800',fontSize:Math.min(90,520/[...c].length)+'px'},c);
  it({left:'80px',bottom:'90px',fontFamily:F.mono,fontSize:'24px',letterSpacing:'.12em'},'P.001');it({left:'0',right:'0',textAlign:'center',bottom:'90px',fontFamily:F.mono,fontSize:'24px',letterSpacing:'.12em'},'特別号');it({right:'80px',bottom:'90px',fontFamily:F.mono,fontSize:'24px',letterSpacing:'.12em'},'永久保存版');
  items.forEach((e,i)=>H.a(e,[{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0 0 0)'}],{d:400,dl:800+i*320}));
  H.a(W,[{opacity:1},{opacity:0}],{d:500,dl:4600,f:'forwards'});
}});

def({no:'68',cat:'DESIGN',name:'名前テロップ',en:'Lower Third',lead:'画面左下に、名前と肩書きがスマートに出て、スッと消える。',
text:'山田 花子／AIコンサルタント',multi:true,loop:5400,bg:'#2a3442',
use:'<b>インタビュー・登場人物紹介・対談</b>に。人が話す動画には必ず要る実用テロップ。肩書きの代わりにSNSアカウント名を入れても。',
tips:['名前と肩書きは「／」で区切って入力すると、2段に分かれます','色の縦棒を先に出すと、視線が自然にテロップへ向きます','出ている時間は「名前を2回読める」3秒前後が目安'],
p:`インタビュー動画で使う、画面左下の「名前テロップ（ローワーサード）」を作ってください。
・背景：映像の代わりに、#2A3442 にぼかした色の円（#5AA9FF と #FF7AC6、直径600px、ぼかし120px、不透明度0.35）を2つ置き、ゆっくり動かす
・テロップの位置：画面の左から120px、下から140px
・構成：「{T}」を「／」で区切り、前を名前、後ろを肩書きにする
　① 縦の色棒：幅10px×高さ170px、#5AA9FF
　② 名前の帯：白、高さ100px。名前は #0F1B2D、Noto Sans JP 900、64px、左右の余白36px
　③ 肩書きの帯：#0F1B2D、高さ58px。肩書きは白、Noto Sans JP 700、32px、文字間0.06em
・出方：
　0.3秒：色棒が scaleY 0 → 1（下基準、0.3秒）
　0.5秒：名前の帯が左から scaleX 0 → 1（0.45秒、cubic-bezier(.16,1,.3,1)）、0.15秒遅れて名前の文字が translateX −30px → 0 でフェードイン
　0.7秒：肩書きの帯と文字が同様に
・消え方：4.2秒から、帯が右基準で scaleX 1 → 0（肩書き→名前の順、0.35秒、cubic-bezier(.7,0,.84,0)）、最後に色棒が上へ縮んで消える
・尺：5.4秒でループ`,
run(H,t,w){const parts=t.split(/[／\/]/);const name=(parts[0]||t).trim(),role=(parts[1]||'').trim();
  [[300,200,BLU,[200,-80]],[1100,400,'#ff7ac6',[-160,60]]].forEach(([x,y,c,[dx,dy]])=>{const b=H.abs({left:x+'px',top:y+'px',width:'600px',height:'600px',borderRadius:'50%',background:c,filter:'blur(120px)',opacity:.35});H.a(b,[{transform:'translate(0,0)'},{transform:`translate(${dx}px,${dy}px)`}],{d:5400,e:'ease-in-out'})});
  const box=H.abs({left:'120px',bottom:'140px',display:'flex',gap:'0'});const bar=H.el('div',{width:'10px',height:role?'170px':'100px',background:BLU,transformOrigin:'50% 100%'},box);const col=H.el('div',{display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'12px'},box);
  const band=(txt,bg,css,dl)=>{const bd=H.el('div',{background:bg,display:'flex',alignItems:'center',padding:'0 36px',transformOrigin:'0 50%',overflow:'hidden',height:css.h},col);const tx=H.el('div',Object.assign({whiteSpace:'nowrap'},css.s),bd,txt);
    H.a(bd,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:450,dl});H.a(tx,[{transform:'translateX(-30px)',opacity:0},{transform:'translateX(0)',opacity:1}],{d:400,dl:dl+150});return bd};
  H.a(bar,[{transform:'scaleY(0)'},{transform:'scaleY(1)'}],{d:300,dl:300});
  const nb=band(name,'#fff',{h:'100px',s:{color:'#0f1b2d',fontFamily:F.sans,fontWeight:'900',fontSize:'64px'}},500);let rb=null;if(role)rb=band(role,'#0f1b2d',{h:'58px',s:{color:'#fff',fontFamily:F.sans,fontWeight:'700',fontSize:'32px',letterSpacing:'.06em'}},700);
  const out=(el,dl)=>H.a(el,[{transform:'scaleX(1)',transformOrigin:'100% 50%'},{transform:'scaleX(0)',transformOrigin:'100% 50%'}],{d:350,dl,e:E.in,f:'forwards'});
  if(rb)out(rb,4200);out(nb,4350);H.a(bar,[{transform:'scaleY(1)',transformOrigin:'50% 0'},{transform:'scaleY(0)',transformOrigin:'50% 0'}],{d:300,dl:4600,e:E.in,f:'forwards'});
}});

def({no:'69',cat:'DESIGN',name:'データ見出し',en:'Stat Callout',lead:'リングが描かれながら、数字が目標値までカウントアップ。',
text:'87% 満足度',multi:true,loop:4600,bg:'#0d1626',
use:'<b>実績・アンケート結果・達成率</b>に。「満足度87%」「リピート率92%」など、数字で信頼を伝える場面に。',
tips:['リングと数字のカウントを同じイージングにすると、ぴったり連動して見えます','数字は等幅フォントにすると、カウント中に横幅がガタつきません','数字の出典（例：2026年 当社調べ n=300）を小さく添えると信頼感が上がります'],
p:`円形のリングが描かれていくのに合わせて、中央の数字が0から目標値までカウントアップする「データ見出し」を作ってください。
・背景：#0D1626
・入力：「{T}」をスペースで区切り、1語目を数字（%付きでも可）、2語目をラベルにする
・リング：直径520px、線幅30px、線端は丸く。下地の円 #1E2C44、進捗の円 #5AA9FF。12時の位置から時計回りに、目標値（%）まで stroke-dashoffset で描く。1.8秒、cubic-bezier(.16,1,.3,1)、0.3秒から開始
・中央の数字：JetBrains Mono の太字、180px、白。リングと同じ時間・同じイージングで 0 → 目標値 までカウントアップ（整数で表示し、% は少し小さく横に）
・ラベル：数字の下に、#8FB8E8、Noto Sans JP 700、44px
・リングの右側に、補足を3行：「回答者 300名」「2026年10月 調査」「※サンプルの数値です」（JetBrains Mono、26px、#8FB8E8）を、0.15秒ずつ遅らせて左からフェードイン
・描き終わった瞬間、リングの先端に白い光の点（直径30px）をパッと光らせる
・4.0秒でフェードアウト、尺4.6秒でループ`,
run(H,t,w){const num=parseFloat((w[0]||t).replace(/[^\d.]/g,''))||0;const pct=Math.min(100,num);const unit=(w[0]||'').replace(/[\d.,\s]/g,'')||'%';const label=w[1]||'';
  const svg=H.svg(1600,900);const cx=620,cy=450,r=260,C=2*Math.PI*r;H.sv('circle',{cx,cy,r,fill:'none',stroke:'#1e2c44','stroke-width':30},svg);
  const pr=H.sv('circle',{cx,cy,r,fill:'none',stroke:BLU,'stroke-width':30,'stroke-linecap':'round','stroke-dasharray':C,'stroke-dashoffset':C,transform:`rotate(-90 ${cx} ${cy})`},svg);
  H.a(pr,[{strokeDashoffset:C},{strokeDashoffset:C*(1-pct/100)}],{d:1800,dl:300});
  const mid=H.abs({left:cx-260+'px',top:cy-130+'px',width:'520px',textAlign:'center'});const n=H.el('div',{fontFamily:F.mono,fontWeight:'700',fontSize:'180px',color:'#fff',lineHeight:'1',fontVariantNumeric:'tabular-nums'},mid);const nv=H.el('span',{},n,'0');H.el('span',{fontSize:'80px'},n,unit);
  H.el('div',{fontFamily:F.sans,fontWeight:'700',fontSize:'44px',color:'#8fb8e8',marginTop:'10px'},mid,label);
  const notes=H.abs({left:'1000px',top:'340px',display:'flex',flexDirection:'column',gap:'18px',fontFamily:F.mono,fontSize:'26px',color:'#8fb8e8'});['回答者 300名','2026年10月 調査','※サンプルの数値です'].forEach((s,i)=>{const e=H.el('div',{},notes,s);H.a(e,[{transform:'translateX(-30px)',opacity:0},{transform:'translateX(0)',opacity:1}],{d:500,dl:900+i*150})});
  const ease=k=>1-Math.pow(1-k,4);H.raf(s=>{const k=Math.max(0,Math.min(1,(s-.3)/1.8));nv.textContent=Math.round(num*ease(k))});
  const ang=(-90+360*pct/100)*Math.PI/180;const dot=H.abs({left:cx+r*Math.cos(ang)-15+'px',top:cy+r*Math.sin(ang)-15+'px',width:'30px',height:'30px',borderRadius:'50%',background:'#fff',boxShadow:'0 0 30px #fff',opacity:0});H.a(dot,[{opacity:1,transform:'scale(1.6)'},{opacity:0,transform:'scale(.6)'}],{d:600,dl:2100,f:'none'});
  H.wait(4000,()=>[svg,mid,notes].forEach(e=>H.a(e,[{opacity:1},{opacity:0}],{d:500,f:'forwards'})));
}});

def({no:'70',cat:'DESIGN',name:'シネマタイトル',en:'Cinematic Tracking',lead:'広がった文字間が静かに締まり、映画のタイトルが浮かび上がる。',
text:'はじまりの物語',loop:5400,bg:'#05070b',
use:'<b>エンディング・作品タイトル・ドキュメンタリー</b>に。この本の締めくくりにふさわしい、静かで格のある型。動画の最初か最後に1回だけ使うのが効果的です。',
tips:['文字間の締まり（トラッキングイン）は4秒以上かけると「映画」の品格になります','明朝体にすると文学的、ゴシックにするとドキュメンタリー寄りに','効果音は使わず、低いドローン音（持続音）だけを合わせるのがおすすめ'],
p:`映画のオープニングのように、大きく広がった文字間が静かに締まりながら「{T}」が浮かび上がる、品のあるタイトル演出を作ってください。
・背景：#05070B。画面の上下に黒い帯（高さ各110px、シネマスコープ比率の黒帯）
・文字：Shippori Mincho B1（太さ800）、#F2F2F0、画面幅の約55%
・トラッキングイン：letter-spacing を 1.2em → 0.12em へ4.2秒かけて締める（cubic-bezier(.16,1,.3,1)）。同時に filter: blur(18px) → blur(0)、不透明度 0 → 1（最初の1.6秒で）
・文字の左右に、細い線（高さ1px、#F2F2F0、不透明度0.5、長さ160px）を1.2秒から中央から外へ伸ばす
・文字の下に小さく「A FILM BY YOU — 2026」（JetBrains Mono、24px、文字間0.4em、#8A8F98）を1.8秒からフェードイン
・全体をゆっくり scale 1 → 1.04 へ5秒かけてズーム（カメラが寄る）
・4.6秒から0.8秒かけて全体をフェードアウト
・尺：5.4秒でループ`,
run(H,t){H.abs({left:0,right:0,top:0,height:'110px',background:'#000',zIndex:'5'});H.abs({left:0,right:0,bottom:0,height:'110px',background:'#000',zIndex:'5'});
  const B=H.box({flexDirection:'column',gap:'36px'});const row=H.el('div',{display:'flex',alignItems:'center',gap:'40px'},B);
  const lnL=H.el('div',{width:'160px',height:'1px',background:'#f2f2f0',opacity:.5,transformOrigin:'100% 50%'},row);
  const el=H.el('div',{fontFamily:F.min,fontWeight:'800',fontSize:Math.min(150,900/[...t].length)+'px',color:'#f2f2f0',whiteSpace:'nowrap'},row,t);
  const lnR=H.el('div',{width:'160px',height:'1px',background:'#f2f2f0',opacity:.5,transformOrigin:'0 50%'},row);
  const sub=H.el('div',{fontFamily:F.mono,fontSize:'24px',letterSpacing:'.4em',color:'#8a8f98'},B,'A FILM BY YOU — 2026');
  H.a(el,[{letterSpacing:'1.2em'},{letterSpacing:'.12em'}],{d:4200});H.a(el,[{filter:'blur(18px)',opacity:0},{filter:'blur(0px)',opacity:1}],{d:1600,e:E.soft});
  [lnL,lnR].forEach(l=>H.a(l,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:1200,dl:1200}));H.a(sub,[{opacity:0},{opacity:1}],{d:900,dl:1800});
  H.a(B,[{transform:'scale(1)'},{transform:'scale(1.04)'}],{d:5000,e:E.lin});H.a(B,[{opacity:1},{opacity:0}],{d:800,dl:4600,f:'forwards'});
}});
