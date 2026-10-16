/* ===== TEXTURE 41-50 ===== */
const PINK='#ff7ac6';
const sample=(t,font,size,step,W,Hh)=>{const c=document.createElement('canvas');c.width=W;c.height=Hh;const x=c.getContext('2d');x.fillStyle='#fff';x.font=`${size}px ${font}`;x.textAlign='center';x.textBaseline='middle';x.fillText(t,W/2,Hh/2);
  const d=x.getImageData(0,0,W,Hh).data;const pts=[];for(let y=0;y<Hh;y+=step)for(let xx=0;xx<W;xx+=step){if(d[(y*W+xx)*4+3]>128)pts.push([xx,y])}return pts};
const fitPx=(t,font,max,width)=>{const c=document.createElement('canvas').getContext('2d');let s=max;c.font=`${s}px ${font}`;const w=c.measureText(t).width;return w>width?Math.floor(s*width/w):s};

def({no:'41',cat:'TEXTURE',name:'グリッチ',en:'RGB Glitch',lead:'赤と青の色ズレ、横に裂けるノイズ。デジタルの故障感。',
text:'SYSTEM ERROR',loop:3000,bg:'#0a0a0c',
use:'<b>エラー・バグ・ゲーム・サイバー</b>系に。「炎上」「ヤバい」「異常事態」などのテロップや、場面転換のノイズにも。',
tips:['常に揺らさず「0.1〜0.3秒の発作」をランダムに起こすのが本物っぽさのコツ','色ズレは赤（#ff2a6d）と青緑（#05d9e8）の組み合わせが定番','走査線を重ねると、モニター越しの質感になります'],
p:`「{T}」の文字が、デジタル機器の故障のように不規則に乱れる「グリッチ」演出を作ってください。
・背景：#0A0A0C。文字：白、Dela Gothic One、画面幅の約75%
・文字を3枚重ねる：①赤 #FF2A6D ②青緑 #05D9E8 ③白（一番上）。①②は mix-blend-mode: screen
・グリッチの発作：0.1〜0.3秒の長さの発作を、0.15〜0.6秒のランダムな間隔で起こす。発作中は毎フレーム
　・赤の層を x方向 −25〜25px、青緑の層をその逆方向へずらす
　・白の層を clip-path: inset() で横の帯（高さ20〜120px）だけに切り抜き、x方向に −60〜60px ずらしたコピーを2〜3本重ねる
　・まれに（20%の確率で）文字全体を skewX 10〜20° にゆがめる
・発作がないときは、すべての層を元の位置にぴったり重ねる
・画面全体に走査線（高さ2pxの黒い線を4px間隔、不透明度0.25）を重ね、ゆっくり下へ流す
・尺：3秒でループ`,
run(H,t){const B=H.box();const sz=fs(t,220,1300);const mk=(c,bl)=>BIG(H,t,{position:'absolute',color:c,fontSize:sz+'px',mixBlendMode:bl||'normal'},B);
  const r=mk('#ff2a6d','screen'),c=mk('#05d9e8','screen'),w=mk('#fff');const sl=[0,1,2].map(()=>{const e=mk('#fff');e.style.opacity=0;return e});
  const scan=H.abs({inset:'-8px 0 0 0',background:'repeating-linear-gradient(rgba(0,0,0,.25) 0 2px,transparent 2px 4px)'});H.a(scan,[{transform:'translateY(0)'},{transform:'translateY(8px)'}],{d:400,e:E.lin,i:Infinity});
  let until=0,next=300;H.raf(s=>{const ms=s*1000;if(ms>next){until=ms+rnd(100,300);next=until+rnd(150,600)}
    if(ms<until){const d=rnd(-25,25);r.style.transform=`translateX(${d}px)`;c.style.transform=`translateX(${-d}px)`;const sk=Math.random()<.2?`skewX(${rnd(10,20)}deg)`:'';w.style.transform=sk;
      sl.forEach(e=>{if(Math.random()<.7){const top=rnd(0,90);e.style.clipPath=`inset(${top}% 0 ${Math.max(0,100-top-rnd(8,30))}% 0)`;e.style.transform=`translateX(${rnd(-60,60)}px)`;e.style.opacity=1}else e.style.opacity=0})}
    else{r.style.transform=c.style.transform=w.style.transform='none';sl.forEach(e=>e.style.opacity=0)}});
}});

def({no:'42',cat:'TEXTURE',name:'ネオン点灯',en:'Neon Sign',lead:'パチ、パチッ…と瞬いて灯るネオン管。1文字だけ調子が悪い。',
text:'OPEN 24H',loop:4400,bg:'#160d14',
use:'<b>夜・バー・ナイトライフ・レトロ</b>な場面に。深夜配信のタイトル、お店の紹介、エモい夜景Vlogに。',
tips:['光は text-shadow を4〜5層、半径を倍々に重ねると本物のネオンに','1文字だけ遅れて点く「接触不良」が、リアルさと愛嬌を両立させます','背景にレンガの目地を薄く描くと、看板っぽさが増します'],
p:`ネオン管の看板が「パチ、パチッ」と瞬いてから灯り、1文字だけ接触不良でチカチカする演出を作ってください。
・背景：#160D14 に、目地の線（rgba(255,255,255,.04)、横120px×縦60pxのレンガ模様）を薄く描く
・文字：「{T}」、Noto Sans JP の400（細め）を使い、文字色 #FFE6F4。画面幅の約60%
・点灯時の光：text-shadow を5層重ねる（0 0 6px #FFF, 0 0 14px #FF7AC6, 0 0 30px #FF7AC6, 0 0 60px #FF2A9D, 0 0 110px #FF2A9D）
・消灯時：文字色 #3A2333、光なし
・点灯の流れ：0.4秒で一瞬点く(0.06秒)→消える→0.7秒で点く(0.1秒)→消える→0.95秒から点きっぱなし
・接触不良：右から2番目の文字だけ、2.0秒から 0.05〜0.15秒の不規則な間隔で6回ほど消灯・点灯をくり返してから安定
・点いている間、全体の明るさを 0.96〜1.0 でごくわずかに揺らし続ける（電気のゆらぎ）
・尺：4.4秒でループ`,
run(H,t){H.abs({inset:'0',backgroundImage:'linear-gradient(rgba(255,255,255,.04) 2px,transparent 2px),linear-gradient(90deg,rgba(255,255,255,.04) 2px,transparent 2px)',backgroundSize:'120px 60px'});
  const B=H.box();const w=H.el('div',{fontFamily:F.sans,fontWeight:'400',fontSize:fs(t,240,1100)+'px',whiteSpace:'nowrap'},B);const cs=H.chars(t,w);
  const ON={color:'#ffe6f4',textShadow:'0 0 6px #fff,0 0 14px #ff7ac6,0 0 30px #ff7ac6,0 0 60px #ff2a9d,0 0 110px #ff2a9d'},OFF={color:'#3a2333',textShadow:'none'};
  const set=(e,on)=>Object.assign(e.style,on?ON:OFF);cs.forEach(e=>set(e,0));
  [[400,1],[460,0],[700,1],[800,0],[950,1]].forEach(([ms,on])=>H.wait(ms,()=>cs.forEach(e=>set(e,on))));
  const bad=cs[Math.max(0,cs.length-2)];let tm=2000;for(let i=0;i<12;i++){tm+=rnd(50,150);const on=i%2===1||i===11;H.wait(tm,()=>set(bad,on))}
  H.raf(()=>{w.style.filter=`brightness(${rnd(.96,1).toFixed(3)})`});
}});

def({no:'43',cat:'TEXTURE',name:'筆書き',en:'Brush Ink',lead:'墨がにじみながら、縦書きの文字が一画ずつ書かれていく。',
text:'一期一会',loop:4800,bg:'#f4efe4',
use:'<b>和風・書道・季節の挨拶・座右の銘</b>に。年賀動画、日本文化の紹介、「今年の抱負」などに。',
tips:['上から下へのマスク＋ぼかしを組み合わせると、筆で書いた感じが出ます','最後に朱色の落款（ハンコ）を押すと作品として締まります','背景に薄い和紙の繊維ノイズを足すと、より本物らしく'],
p:`縦書きの「{T}」が、墨のにじみとともに上から一文字ずつ書かれていく演出を作ってください。
・背景：#F4EFE4（和紙）。SVGの feTurbulence で薄い繊維のノイズ（不透明度0.08）を重ねる
・文字：Yuji Syuku（毛筆風）、色 #1A1A1A、縦書き（writing-mode: vertical-rl）、画面の高さの約80%に収まる大きさ
・1文字の書き方（0.55秒）：clip-path: inset(0 0 100% 0) → inset(0 0 0 0)（上から下へ現れる）。同時に filter: blur(6px)→blur(0)、不透明度 0.4→1（墨がにじんで定着する）
・文字ごとに0.45秒ずつ遅らせる
・書き終わったら0.3秒後、文字の左下に朱色 #C8102E の四角い落款（90px角、角丸6px、中に白で「印」）を scale 1.6→1 でポンと押す
・4.2秒でフェードアウト、尺4.8秒でループ`,
run(H,t){const svg=H.svg(1600,900,null,{opacity:.08});const id='wn'+Math.floor(Math.random()*1e6);const f=H.sv('filter',{id},H.sv('defs',{},svg));H.sv('feTurbulence',{type:'fractalNoise',baseFrequency:'.8 .05',numOctaves:3},f);H.sv('rect',{width:1600,height:900,filter:`url(#${id})`},svg);
  const B=H.box();const n=[...t].length;const sz=Math.min(200,720/n);const col=H.el('div',{writingMode:'vertical-rl',fontFamily:F.brush,fontSize:sz+'px',color:'#1a1a1a',lineHeight:'1.1',position:'relative'},B);
  const cs=H.chars(t,col);cs.forEach((c,i)=>H.a(c,[{clipPath:'inset(0 0 100% 0)',filter:'blur(6px)',opacity:.4},{clipPath:'inset(0 0 0 0)',filter:'blur(0px)',opacity:1}],{d:550,dl:i*450,e:E.soft}));
  const st=H.abs({left:'-130px',bottom:'0',width:'90px',height:'90px',background:'#c8102e',borderRadius:'6px',color:'#fff',fontFamily:F.min,fontSize:'52px',display:'flex',alignItems:'center',justifyContent:'center',writingMode:'horizontal-tb'},col,'印');
  H.a(st,[{transform:'scale(1.6)',opacity:0},{transform:'scale(1)',opacity:1}],{d:200,dl:(n-1)*450+850,e:E.in});
  H.a(B,[{opacity:1},{opacity:0}],{d:500,dl:4200,f:'forwards'});
}});

def({no:'44',cat:'TEXTURE',name:'ヒート',en:'Heat & Embers',lead:'文字が熱を帯びて揺らめき、火の粉が舞い上がる。',
text:'激アツ',loop:4000,bg:'#120804',
use:'<b>熱い・情熱・激辛・ゲームの熱戦</b>に。「激アツ展開」「本気の勝負」など、テンションを上げたい場面に。',
tips:['光の層を毎フレーム少しずつ揺らすと、炎のゆらめきになります','火の粉は左右にふらつかせながら上昇させるとリアル','文字色を白に近い黄色にすると「高温」に見えます'],
p:`「{T}」の文字が炎の熱を帯びて揺らめき、まわりから火の粉が舞い上がる演出を作ってください。
・背景：#120804、画面下から上へ #3A1206 → 透明 のグラデーションで熱気を表現
・文字：Dela Gothic One、画面幅の約60%、色 #FFF2D0
・炎の光：text-shadow を4層（黄 #FFD34D、橙 #FF8A1F、赤 #FF3D00、暗赤 #8A1200）、上方向へ伸ばす。各層の y方向のずれ（−4〜−40px）とぼかし（10〜60px）を、毎フレーム ±20% の範囲でランダムに揺らす
・陽炎：文字に SVGフィルター（feTurbulence＋feDisplacementMap scale 8）をかけ、ノイズを毎フレーム上へずらして揺らめかせる
・火の粉：Canvasで60個。画面下から上へ毎秒 80〜200px で上昇、左右に sin 波でふらつき、上るほど小さく暗くなって消えたら下から再出現。色 #FFB347、直径2〜5px、光（shadowBlur 12）
・尺：4秒でループ（火の粉は途切れず続く）`,
run(H,t){H.abs({inset:'0',background:'linear-gradient(0deg,#3a1206,rgba(58,18,6,0) 70%)'});
  const c=H.canvas();const x=c.getContext('2d');const P=[...Array(60)].map(()=>({x:rnd(0,1600),y:rnd(0,900),v:rnd(80,200),r:rnd(2,5),p:rnd(0,6)}));let last=0;
  const svg=H.svg(1,1,null,{position:'absolute'});const id='ht'+Math.floor(Math.random()*1e6);const f=H.sv('filter',{id},H.sv('defs',{},svg));const tb=H.sv('feTurbulence',{type:'fractalNoise',baseFrequency:'0.02 0.06',numOctaves:2,seed:3},f);H.sv('feDisplacementMap',{in:'SourceGraphic',scale:8},f);
  const B=H.box();const el=BIG(H,t,{color:'#fff2d0',fontSize:fs(t,240,1000)+'px',filter:`url(#${id})`},B);
  H.raf(s=>{const dt=Math.min(.05,s-last);last=s;const j=()=>rnd(.8,1.2);el.style.textShadow=`0 ${-4*j()}px ${10*j()}px #ffd34d,0 ${-12*j()}px ${24*j()}px #ff8a1f,0 ${-24*j()}px ${40*j()}px #ff3d00,0 ${-40*j()}px ${60*j()}px #8a1200`;
    tb.setAttribute('seed',Math.floor(s*12)%50);
    x.clearRect(0,0,1600,900);P.forEach(p=>{p.y-=p.v*dt;if(p.y<-10){p.y=910;p.x=rnd(0,1600)}const k=p.y/900;x.globalAlpha=Math.max(0,k);x.fillStyle='#ffb347';x.shadowColor='#ff8a1f';x.shadowBlur=12;x.beginPath();x.arc(p.x+Math.sin(s*2+p.p)*20,p.y,p.r*(.4+k*.6),0,7);x.fill()})});
}});

def({no:'45',cat:'TEXTURE',name:'クロームシャイン',en:'Chrome Shine',lead:'鏡面仕上げの金属文字に、光がキラッと走る。',
text:'PREMIUM',loop:3600,bg:'#08080b',
use:'<b>高級感・プレミアム・限定</b>の表現に。商品のお披露目、会員限定のお知らせ、Y2K・平成レトロなデザインにも。',
tips:['金属のグラデーションは「明→暗→明→暗」と細かく反射を入れるのがコツ','光の帯を斜め（110°）にすると、キラッとした反射に見えます','金色にしたいときは、灰色の部分を #F7E7A1 → #B8860B に置き換え'],
p:`鏡面のクローム（金属）でできた「{T}」の文字に、光の反射がキラッと横切る演出を作ってください。
・背景：#08080B。床に反射させるため、文字の真下に上下反転したコピー（不透明度0.25、下へ行くほど透明になるマスク）を置く
・文字：Dela Gothic One、画面幅の約70%
・金属の質感：文字の塗りを linear-gradient(180deg, #FFFFFF 0%, #C9CED6 30%, #6B7280 48%, #F3F4F6 52%, #9CA3AF 75%, #E5E7EB 100%) にし、background-clip: text で文字だけに適用
・光の反射：文字の上に、透明 → rgba(255,255,255,.95) → 透明 の帯（幅18%、角度110°）を同じく background-clip: text で重ね、background-position を左外から右外へ0.9秒で動かす
・登場：0.0〜0.8秒、文字を perspective(900px) rotateX(70°)・不透明度0 → rotateX(0) に起こす（イージング cubic-bezier(.16,1,.3,1)）
・1.0秒と2.4秒に、光の反射を走らせる
・尺：3.6秒でループ`,
run(H,t){const B=H.box({flexDirection:'column'});const sz=fs(t,240,1200);const metal='linear-gradient(180deg,#fff 0%,#c9ced6 30%,#6b7280 48%,#f3f4f6 52%,#9ca3af 75%,#e5e7eb 100%)';
  const mk=(css)=>{const w=H.el('div',Object.assign({position:'relative'},css),B);const a=BIG(H,t,{fontSize:sz+'px',backgroundImage:metal,WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'},w);
    const s=BIG(H,t,{position:'absolute',left:'0',top:'0',fontSize:sz+'px',backgroundImage:'linear-gradient(110deg,transparent 41%,rgba(255,255,255,.95) 50%,transparent 59%)',backgroundSize:'250% 100%',backgroundRepeat:'no-repeat',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'},w);return [w,s]};
  const [top,sh]=mk({});const [ref,sh2]=mk({transform:'scaleY(-1)',opacity:.25,WebkitMaskImage:'linear-gradient(transparent 40%,#000)',maskImage:'linear-gradient(transparent 40%,#000)',marginTop:'-10px'});
  H.a(top,[{transform:'perspective(900px) rotateX(70deg)',opacity:0},{transform:'perspective(900px) rotateX(0)',opacity:1}],{d:800});H.a(ref,[{opacity:0},{opacity:.25}],{d:800});
  [1000,2400].forEach(dl=>[sh,sh2].forEach(e=>H.a(e,[{backgroundPosition:'150% 0'},{backgroundPosition:'-50% 0'}],{d:900,dl,e:E.soft,f:'none'})));
  [sh,sh2].forEach(e=>e.style.backgroundPosition='150% 0');
}});

def({no:'46',cat:'TEXTURE',name:'ホログラム',en:'Hologram',lead:'虹色に揺らぐ半透明の文字。ちらつく走査線で未来感。',
text:'NEXT ERA',loop:4000,bg:'#05070f',
use:'<b>未来・テクノロジー・SF・メタバース</b>系に。新サービス発表、AI関連の動画、近未来的なブランドに。',
tips:['虹色はパステル寄り（彩度を下げる）にすると上品なホログラムに','時々0.05秒だけ消える「ちらつき」を入れると投影っぽさが増します','下に光の台座（楕円の光）を置くと「投影されている」感が出ます'],
p:`空中に投影されたホログラムのような、虹色に揺らぐ半透明の文字「{T}」を作ってください。
・背景：#05070F。文字の真下に、#7DF9FF の楕円の光（幅900px×高さ60px、ぼかし30px、不透明度0.5）の台座
・文字：Dela Gothic One、画面幅の約60%
・虹色：文字の塗りに linear-gradient(100deg, #FF9FF3, #A0E7FF, #B9FBC0, #FDFFB6, #FF9FF3) を background-size 300% で指定し、background-clip: text。background-position を4秒で端から端へ動かして虹色を流す
・半透明：文字全体の不透明度0.85、mix-blend-mode: screen。0 0 30px rgba(125,249,255,.6) の光
・走査線：文字にだけ横線（2px間隔）のマスクをかけ、マスクを毎秒60pxで下へ流す
・ちらつき：0.8〜2秒の不規則な間隔で、0.05秒だけ不透明度0.3・x方向に 6px ずらす
・全体をゆっくり上下に浮遊（translateY 0 → −12px → 0、4秒）
・尺：4秒でループ`,
run(H,t){H.abs({left:'350px',top:'640px',width:'900px',height:'60px',borderRadius:'50%',background:'#7df9ff',filter:'blur(30px)',opacity:.5});
  const B=H.box();const sz=fs(t,240,1000);const el=BIG(H,t,{fontSize:sz+'px',backgroundImage:'linear-gradient(100deg,#ff9ff3,#a0e7ff,#b9fbc0,#fdffb6,#ff9ff3)',backgroundSize:'300% 100%',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',opacity:.85,filter:'drop-shadow(0 0 30px rgba(125,249,255,.6))',
    WebkitMaskImage:'repeating-linear-gradient(#000 0 2px,rgba(0,0,0,.35) 2px 4px)',maskImage:'repeating-linear-gradient(#000 0 2px,rgba(0,0,0,.35) 2px 4px)',WebkitMaskSize:'100% 4px',maskSize:'100% 4px'},B);
  H.a(el,[{backgroundPosition:'0% 0'},{backgroundPosition:'100% 0'}],{d:4000,e:E.lin,i:Infinity});
  H.a(B,[{transform:'translateY(0)'},{transform:'translateY(-12px)'},{transform:'translateY(0)'}],{d:4000,e:'ease-in-out',i:Infinity});
  let next=800,off=0;H.raf(s=>{const ms=s*1000;el.style.webkitMaskPosition=el.style.maskPosition=`0 ${(s*60)%4}px`;if(ms>next){off=ms+50;next=ms+rnd(800,2000)}
    if(ms<off){el.style.opacity=.3;el.style.translate='6px 0'}else{el.style.opacity=.85;el.style.translate='0 0'}});
}});

def({no:'47',cat:'TEXTURE',name:'LEDサイネージ',en:'LED Dot Matrix',lead:'電光掲示板のドット1粒1粒が光り、文字が流れていく。',
text:'本日のおすすめ 唐揚げ定食 680円',loop:8000,bg:'#050505',
use:'<b>お店の告知・メニュー・案内表示</b>に。商店街・駅・工場などの「現場感」を出したいとき、レトロゲーム風の演出にも。',
tips:['ドットの間隔（15px）を広げるとレトロに、詰めるとくっきり見えます','消えているドットも薄く見せるのが「本物の掲示板」らしさのポイント','色をオレンジから緑（#39FF14）に変えると古い計器や駅の雰囲気に'],
p:`電光掲示板のように、丸いLEDのドットで描かれた「{T}」が右から左へ流れていく演出を作ってください。
・背景：#050505。掲示板の枠：幅1500px×高さ300px、#111、角丸18px、内側の影
・LEDの仕組み：Canvasを使う。まず見えないキャンバスに「{T}」を DotGothic16 の16pxで描き、その1ピクセルを1つのLEDとして扱う（縦16ドット）
・LEDの描画：ドットの間隔15px、直径11pxの円。点灯ドットは #FFB43A に光（shadowBlur 10、#FF8A00）、消灯ドットは #2A1E10
・流れ：文字列を1秒に24ドットずつ左へスクロールさせ、右端から入って左端へ抜けたら、また右端から流す
・枠の左上に小さく「INFORMATION」（JetBrains Mono、#FFB43A、不透明度0.6）
・尺：8秒でループ（スクロールは途切れず続く）`,
run(H,t){const fr=H.abs({left:'50px',top:'300px',width:'1500px',height:'300px',background:'#111',borderRadius:'18px',boxShadow:'inset 0 0 40px #000'});H.abs({left:'70px',top:'250px',fontFamily:F.mono,fontSize:'26px',color:'#ffb43a',opacity:.6,letterSpacing:'.2em'},null,'INFORMATION');
  const c=H.el('canvas',{position:'absolute',left:'50px',top:'300px',width:'1500px',height:'300px'});c.width=1500;c.height=300;const x=c.getContext('2d');
  const off=document.createElement('canvas');const ox=off.getContext('2d');ox.font="16px 'DotGothic16'";const tw=Math.ceil(ox.measureText(t).width)+4;off.width=tw;off.height=16;ox.font="16px 'DotGothic16'";ox.fillStyle='#fff';ox.textBaseline='top';ox.fillText(t,0,0);
  const d=ox.getImageData(0,0,tw,16).data;const cols=98,rows=16,P=15,x0=(1500-cols*P)/2+P/2,y0=(300-rows*P)/2+P/2;
  H.raf(s=>{const sc=Math.floor(s*24)%(tw+cols);x.clearRect(0,0,1500,300);for(let cc=0;cc<cols;cc++){const sx=cc-cols+sc;for(let r=0;r<rows;r++){const on=sx>=0&&sx<tw&&d[(r*tw+sx)*4+3]>110;
    x.fillStyle=on?'#ffb43a':'#2a1e10';x.shadowBlur=on?10:0;x.shadowColor='#ff8a00';x.beginPath();x.arc(x0+cc*P,y0+r*P,5.5,0,7);x.fill()}}});
}});

def({no:'48',cat:'TEXTURE',name:'パーティクル集合',en:'Particle Assemble',lead:'散らばった光の粒が集まって文字になり、また弾けて散る。',
text:'START',loop:4400,bg:'#08060c',
use:'<b>オープニング・ロゴ出し・魔法・誕生</b>の瞬間に。新チャンネルの第1回、新商品の誕生、「はじまり」を表現したいときに。',
tips:['粒の数は2000〜3000個がきれい。多すぎると重くなるので注意','集まるときに少し回転（渦）させると、魔法のような軌跡になります','マウスを近づけると粒が逃げるインタラクションを足すと、Webでも映えます'],
p:`画面中に散らばった光の粒が渦を巻きながら集まって「{T}」の形になり、しばらくして弾けて散る演出を作ってください。
・背景：#08060C。Canvasで描く
・粒の目標位置：見えないキャンバスに「{T}」を Dela Gothic One で画面幅の75%の大きさに描き、5pxおきに文字の上にあるピクセルを取り出して、それぞれを粒の目標位置にする
・粒：3.4px角、色は #FF7AC6 と白をランダムに混ぜ、lighter（加算）合成で光らせる
・0.0〜1.6秒：粒がランダムな位置から目標位置へ移動。イージング cubic-bezier(.16,1,.3,1)。移動中は中心まわりに最大90°の渦を描くように回転させる
・1.6〜2.8秒：文字の形で静止し、各粒が ±1px でかすかに震える
・2.8〜3.8秒：粒が中心から外側へ、ランダムな速さで弾け飛んで消える
・尺：4.4秒でループ`,
run(H,t){const c=H.canvas();const x=c.getContext('2d');const sz=fitPx(t,"'Dela Gothic One'",300,1200);const pts=sample(t,"'Dela Gothic One'",sz,5,1600,900);
  const P=pts.map(p=>({tx:p[0],ty:p[1],sx:rnd(0,1600),sy:rnd(0,900),c:Math.random()<.5?'#ff7ac6':'#fff',v:rnd(400,1400),a:Math.atan2(p[1]-450,p[0]-800)+rnd(-.4,.4)}));
  const ease=k=>1-Math.pow(1-k,4);
  H.raf(s=>{x.globalCompositeOperation='source-over';x.fillStyle='#08060c';x.fillRect(0,0,1600,900);x.globalCompositeOperation='lighter';
    P.forEach(p=>{let X,Y,al=1;if(s<1.6){const k=ease(s/1.6);const rot=(1-k)*Math.PI/2;const ix=p.sx+(p.tx-p.sx)*k-800,iy=p.sy+(p.ty-p.sy)*k-450;X=800+ix*Math.cos(rot)-iy*Math.sin(rot);Y=450+ix*Math.sin(rot)+iy*Math.cos(rot)}
      else if(s<2.8){X=p.tx+rnd(-1,1);Y=p.ty+rnd(-1,1)}else{const k=s-2.8;X=p.tx+Math.cos(p.a)*p.v*k;Y=p.ty+Math.sin(p.a)*p.v*k;al=Math.max(0,1-k)}
      x.globalAlpha=al;x.fillStyle=p.c;x.fillRect(X,Y,3.4,3.4)})});
}});

def({no:'49',cat:'TEXTURE',name:'風化',en:'Sand Dissolve',lead:'文字が右端から砂になって、さらさらと風に飛ばされる。',
text:'さよなら',loop:4600,bg:'#0b0a0d',
use:'<b>別れ・消失・儚さ・終わり</b>の表現に。エンディング、「〇〇は卒業します」、黒歴史を消す…などのネタにも。',
tips:['崩れ始めを文字の端からずらすのが「風化」らしさのポイント','粒を上方向にも少し流すと、灰が舞い上がるような質感に','崩れた後に同じ場所へ次の言葉を出すと、きれいな場面転換に'],
p:`中央の「{T}」が、右端から順に細かい砂粒になって、風に吹かれてさらさらと崩れ去る演出を作ってください。
・背景：#0B0A0D。Canvasで描く
・文字：Dela Gothic One、画面幅の約70%、色 #F2EDE4。見えないキャンバスに描き、3pxおきのピクセルを1粒（3px角の四角）として取り出す
・0.0〜0.4秒：全体をフェードイン
・1.2秒から崩壊：各粒の崩れ始める時刻を「1.2秒 ＋ (右端からの距離 ÷ 文字幅) × 1.4秒 ＋ 0〜0.25秒のランダム」にする（右から左へ崩れる）
・崩れた粒の動き：右上へ風に流される。x方向 毎秒 120〜360px、y方向 毎秒 −40〜−140px、さらに sin 波で小さく揺れる。1.2秒かけて不透明度0へ。色は #F2EDE4 → #C9A27A（砂色）に変化
・尺：4.6秒でループ`,
run(H,t){const c=H.canvas();const x=c.getContext('2d');const sz=fitPx(t,"'Dela Gothic One'",280,1150);const pts=sample(t,"'Dela Gothic One'",sz,3,1600,900);
  let minX=1600,maxX=0;pts.forEach(p=>{minX=Math.min(minX,p[0]);maxX=Math.max(maxX,p[0])});const Wd=Math.max(1,maxX-minX);
  const P=pts.map(p=>({x:p[0],y:p[1],t0:1.2+(maxX-p[0])/Wd*1.4+rnd(0,.25),vx:rnd(120,360),vy:rnd(-140,-40),ph:rnd(0,6)}));
  H.raf(s=>{x.clearRect(0,0,1600,900);const fade=Math.min(1,s/.4);x.fillStyle='#f2ede4';x.globalAlpha=fade;
    P.forEach(p=>{if(s<p.t0){x.fillRect(p.x,p.y,3,3)}});
    x.fillStyle='#c9a27a';P.forEach(p=>{const k=s-p.t0;if(k>=0&&k<1.2){x.globalAlpha=1-k/1.2;x.fillRect(p.x+p.vx*k,p.y+p.vy*k+Math.sin(k*8+p.ph)*6,2.5,2.5)}})});
}});

def({no:'50',cat:'TEXTURE',name:'ブラウン管',en:'CRT Power',lead:'ブツッと点く古いテレビ。走査線と色にじみ、そしてプツン。',
text:'昭和レトロ',loop:4400,bg:'#000',
use:'<b>レトロ・懐かし・昭和/平成</b>の演出に。「あの頃」を振り返る動画、古いゲーム・アニメの話題、場面の開始と終了に。',
tips:['点灯は「横線→縦に開く」、消灯は「縦に潰れる→点になる」の順が本物らしい','赤と青の色にじみを1〜2pxずらすだけで、ブラウン管の質感になります','画面の四隅を暗くする（ビネット）と、テレビの丸みが出ます'],
p:`古いブラウン管テレビの電源が入って「{T}」が映り、最後にプツンと消える演出を作ってください。
・背景：#000。テレビ画面：幅1400px×高さ800px、角丸40px、背景 #11161A
・画面の中身：「{T}」（Dela Gothic One、白、画面幅の60%）。赤 #FF0040 と青 #00E5FF のコピーを左右に2pxずらして重ね（mix-blend-mode: screen）、色にじみを出す
・画面の質感：走査線（横線3px間隔・不透明度0.3）、四隅を暗くするビネット（radial-gradient）、0.1秒ごとにわずかに明るさが変わるちらつき（brightness 0.92〜1.05）
・点灯（0.0〜0.6秒）：画面を scaleX 0・scaleY 0.006 → scaleX 1（0.2秒、白い横線が広がる）→ scaleY 1（0.25秒、縦に開く）。開く瞬間に brightness 3 → 1 で白く光る
・映っている間：文字をごく小さく上下に揺らす（±2px）
・消灯（3.4〜3.9秒）：scaleY 1 → 0.006（0.2秒）→ scaleX 0（0.15秒、点になる）→ 中央の白い点が0.15秒で消える
・尺：4.4秒でループ`,
run(H,t){const tv=H.abs({left:'100px',top:'50px',width:'1400px',height:'800px',borderRadius:'40px',background:'#11161a',overflow:'hidden'});
  const B=H.box({},tv);const sz=fs(t,240,840);BIG(H,t,{position:'absolute',color:'#ff0040',fontSize:sz+'px',transform:'translateX(-2px)',mixBlendMode:'screen'},B);BIG(H,t,{position:'absolute',color:'#00e5ff',fontSize:sz+'px',transform:'translateX(2px)',mixBlendMode:'screen'},B);BIG(H,t,{position:'absolute',color:'#fff',fontSize:sz+'px',mixBlendMode:'screen',opacity:.85},B);
  H.a(B,[{transform:'translateY(-2px)'},{transform:'translateY(2px)'}],{d:120,e:E.lin,i:Infinity,dir:'alternate'});
  H.abs({inset:'0',background:'repeating-linear-gradient(rgba(0,0,0,.3) 0 1px,transparent 1px 3px)'},tv);H.abs({inset:'0',background:'radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.75))'},tv);
  let k=0;H.raf(s=>{const q=Math.floor(s*10);if(q!==k){k=q;tv.style.filter=s>.6&&s<3.4?`brightness(${rnd(.92,1.05).toFixed(2)})`:''}});
  H.a(tv,[{transform:'scale(0,.006)',filter:'brightness(3)',offset:0},{transform:'scale(1,.006)',filter:'brightness(3)',offset:.35},{transform:'scale(1,1)',filter:'brightness(3)',offset:.75},{transform:'scale(1,1)',filter:'brightness(1)',offset:1}],{d:600,e:E.soft,f:'backwards'});
  H.a(tv,[{transform:'scale(1,1)',offset:0},{transform:'scale(1,.006)',offset:.4},{transform:'scale(0,.006)',offset:.7,opacity:1},{transform:'scale(0,.006)',offset:1,opacity:0}],{d:500,dl:3400,e:E.in,f:'forwards'});
  const dot=H.abs({left:'790px',top:'440px',width:'20px',height:'20px',borderRadius:'50%',background:'#fff',boxShadow:'0 0 30px #fff',opacity:0});H.a(dot,[{opacity:1},{opacity:0}],{d:200,dl:3750,f:'none'});
}});
