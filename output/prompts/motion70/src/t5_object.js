/* ===== OBJECT 41-50 ===== */
defT({no:'41',cat:'OBJECT',name:'ページめくり',en:'Page Turn',lead:'本のページをめくるように、今の場面が左へめくれて次のページへ。',d:1100,
use:'<b>絵本・日記・ストーリー・アルバム</b>に。思い出の写真をめくっていくような、やさしい場面転換。',
tips:['めくれる途中のページに、内側へ向かう影のグラデーションを付けると紙らしくなります','回転軸は左端。めくり角は−110°くらいで消すと自然','下のBに、めくれるページの影を落とすとリアルさが増します'],
p:`本のページをめくるように、今の場面が左端を軸にめくれて、次のページ（シーンB）が現れる「ページめくり」を作ってください。
・時間：1.1秒。イージング cubic-bezier(.65,0,.35,1)
・CSS 3D：親に perspective: 2200px
・シーンA：transform-origin は左端（0 50%）。rotateY 0 → −110°。めくれる途中、Aの上に「右端が暗い」グラデーション（透明 → rgba(0,0,0,.45)）を重ねて紙の陰影を出す
・シーンB（下）：めくれるページの影として、左から右へ動く黒いグラデーション（不透明度0.4 → 0）を重ねる
・Aが −90° を超えたら非表示にする`,
tr(H,root,mk,st,D){root.style.perspective='2200px';const B=mk(1),A=mk(0,{transformOrigin:'0 50%',backfaceVisibility:'hidden'});const sh=H.abs({inset:'0',background:'linear-gradient(90deg,transparent 40%,rgba(0,0,0,.45))',opacity:0},A);
  H.a(A,[{transform:'rotateY(0)'},{transform:'rotateY(-110deg)'}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)'});H.a(sh,[{opacity:0},{opacity:1}],{d:D*.7,dl:st});
  const bs=H.abs({inset:'0',background:'linear-gradient(90deg,rgba(0,0,0,.4),transparent 60%)',opacity:0},B);H.a(bs,[{opacity:.8,transform:'translateX(0)'},{opacity:0,transform:'translateX(-40%)'}],{d:D,dl:st,f:'none'});hide(H,A,st+D)}});

defT({no:'42',cat:'OBJECT',name:'ガラス割れ',en:'Glass Shatter',lead:'今の場面がガラスのように割れて崩れ落ち、奥から次の場面。',d:1300,
use:'<b>衝撃の事実・常識を壊す・ビフォーアフター</b>に。「今までのやり方は終わり」と見せたい場面に。',
tips:['ひびを先に0.15秒見せてから割ると、「割れる」と分かって気持ちいい','破片は10枚前後。多すぎると細かくて何が割れたか分からなくなります','割れる瞬間に効果音と画面の揺れを合わせると迫力が出ます'],
p:`今の場面がガラスのように割れて崩れ落ち、その奥から次の場面が現れる「ガラス割れ」を作ってください。
・時間：1.3秒
・0〜0.15秒：画面中央から放射状に白いひび（SVG、線幅3px）を10本描く
・0.25秒：シーンAを10枚に複製し、それぞれ clip-path: polygon で中心から36°ずつの三角形に切り抜いて「破片」にする
・各破片を 0〜0.2秒のランダムな遅れで、下へ 900〜1200px 落とす（横に −250〜250px、回転 −100〜100°、cubic-bezier(.7,0,.84,0)、0.9秒）
・割れる瞬間に、画面を12px・0.3秒揺らし、白を0.15秒だけ光らせる
・破片の下にはシーンBを置いておく`,
tr(H,root,mk,st,D){const B=mk(1);const W=H.abs({inset:'0'},root);const N=10;const svg=H.svg(1600,900,W);svg.style.zIndex=2;
  for(let i=0;i<N;i++){const a0=i/N*Math.PI*2,a1=(i+1)/N*Math.PI*2;const pt=a=>`${50+300*Math.cos(a)}% ${50+300*Math.sin(a)}%`;const pc=mk(0,{clipPath:`polygon(50% 50%,${pt(a0)},${pt((a0+a1)/2)},${pt(a1)})`},W);W.insertBefore(pc,svg);
    H.a(pc,[{transform:'translate(0,0) rotate(0)'},{transform:`translate(${rnd(-250,250)}px,${rnd(1100,1400)}px) rotate(${rnd(-100,100)}deg)`}],{d:900,dl:st+250+rnd(0,200),e:E.in});hide(H,pc,st+D+100);
    const len=rnd(300,750);const l=H.sv('line',{x1:800,y1:450,x2:800+Math.cos(a0)*len,y2:450+Math.sin(a0)*len,stroke:'#fff','stroke-width':3,'stroke-dasharray':len,'stroke-dashoffset':len},svg);H.a(l,[{strokeDashoffset:len,opacity:1},{strokeDashoffset:0,opacity:1}],{d:150,dl:st});H.a(l,[{opacity:1},{opacity:0}],{d:80,dl:st+250,f:'forwards'})}
  const fl=H.abs({inset:'0',background:'#fff',opacity:0},root);H.a(fl,[{opacity:.7},{opacity:0}],{d:150,dl:st+250,f:'none'});H.shake(W,st+250,12,300)}});

defT({no:'43',cat:'OBJECT',name:'紙破り',en:'Paper Tear',lead:'今の場面が紙のようにギザギザに破れて、左右へ裂けていく。',d:1000,
use:'<b>手作り感・DIY・スクラップブック風</b>の動画に。「本当の姿は…」「中身を公開」のような種明かしにも。',
tips:['破れ目のギザギザは不規則にすると、本物の紙らしくなります','破れ目に白い縁（紙の断面）を付けるのがリアルさのポイント','左右に少し回転させながら裂くと、手で破った感じが出ます'],
p:`今の場面が紙のようにギザギザに破れて、左右へ裂けていく「紙破り」でシーンBを見せてください。
・時間：1.0秒
・破れ目：画面の中央を上から下へ通る、ランダムなギザギザの線（12〜20個の折れ点、左右に ±40px）
・シーンAを2枚複製し、破れ目の左側と右側に clip-path: polygon で切り抜く
・破れ目の両側に、白い紙の断面（幅8px、少しざらついた白 #F4F1EA）を付ける
・左半分は translateX −60% ＋ rotate −6°、右半分は translateX +60% ＋ rotate +6° へ、0.9秒で裂く（cubic-bezier(.65,0,.35,1)）。回転の軸はそれぞれ下の外側の角
・裂ける直前に0.1秒だけ両側を ±6px 引っぱる（ためを作る）`,
tr(H,root,mk,st,D){const B=mk(1);const pts=[];const n=16;for(let i=0;i<=n;i++)pts.push([50+rnd(-2.5,2.5),i/n*100]);
  const left='polygon(0 0,'+pts.map(p=>`${p[0]}% ${p[1]}%`).join(',')+',0 100%)';const right='polygon(100% 0,'+pts.map(p=>`${p[0]}% ${p[1]}%`).join(',')+',100% 100%)';
  const mkHalf=(clip,side)=>{const g=H.abs({inset:'0',clipPath:clip,transformOrigin:side<0?'0 100%':'100% 100%'},root);mk(0,{},g);const svg=H.svg(1600,900,g);H.sv('polyline',{points:pts.map(p=>`${p[0]*16} ${p[1]*9}`).join(' '),fill:'none',stroke:'#f4f1ea','stroke-width':16},svg);return g};
  const L=mkHalf(left,-1),R=mkHalf(right,1);
  [[L,-1],[R,1]].forEach(([g,s])=>H.a(g,[{transform:'translateX(0) rotate(0)'},{transform:`translateX(${-s*6}px) rotate(0)`,offset:.12},{transform:`translateX(${s*60}%) rotate(${s*6}deg)`}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)'}));hide(H,L,st+D);hide(H,R,st+D)}});

defT({no:'44',cat:'OBJECT',name:'ドミノフリップ',en:'Domino Flip',lead:'縦長の板が左から順にパタパタと裏返り、次の場面に変わる。',d:1100,
use:'<b>連続紹介・一覧の切り替え・リズムのある編集</b>に。板が順番に返る動きで、テンポよく次へ進めます。',
tips:['板は8〜12枚がちょうどいい','遅れ（0.06秒）を大きくすると波のように、小さくすると一斉に返る感じに','回転の中盤で板を暗くすると、立体的に見えます'],
p:`画面を縦長の板8枚に分け、左から順にパタパタと裏返って次の場面に変わる「ドミノフリップ」を作ってください。
・時間：1.1秒
・CSS 3D：親に perspective: 2000px
・画面を幅200pxの縦長の板8枚に分ける。各板の表にはシーンAの該当部分、裏にはシーンBの該当部分（rotateY(180°)、backface-visibility: hidden）を表示する（clip-path で板の位置だけを切り抜いた複製を使う）
・各板を rotateY 0 → 180° へ0.6秒で回転（cubic-bezier(.65,0,.35,1)）。左の板から0.06秒ずつ遅らせる
・回転の中盤（90°付近）で板を brightness 0.6 に暗くする`,
tr(H,root,mk,st,D){root.style.perspective='2000px';const N=8,w=1600/N;for(let i=0;i<N;i++){const s=H.abs({left:i*w+'px',top:'0',width:(w+1)+'px',height:'900px',transformStyle:'preserve-3d',transformOrigin:'50% 50%'},root);
  const f=H.abs({inset:'0',overflow:'hidden',backfaceVisibility:'hidden'},s);mk(0,{left:-i*w+'px'},f);const b=H.abs({inset:'0',overflow:'hidden',backfaceVisibility:'hidden',transform:'rotateY(180deg)'},s);mk(1,{left:-i*w+'px'},b);
  H.a(s,[{transform:'rotateY(0)'},{transform:'rotateY(180deg)'}],{d:600,dl:st+i*60,e:'cubic-bezier(.65,0,.35,1)'});[f,b].forEach(x=>H.a(x,[{filter:'brightness(1)'},{filter:'brightness(.6)'},{filter:'brightness(1)'}],{d:600,dl:st+i*60,f:'none'}))}}});

defT({no:'45',cat:'OBJECT',name:'ロールアップ',en:'Roll Up Blind',lead:'ロールスクリーンを巻き上げるように、今の場面が上へ巻き取られる。',d:900,
use:'<b>朝・お店のオープン・幕開け</b>に。シャッターやブラインドが上がる動きで、「始まり」を表現できます。',
tips:['巻き取る棒（ローラー）を描くのがポイント。円柱のようなグラデーションで立体に','巻き上げは最初ゆっくり、途中から速くすると実物らしい','逆に下へ降ろすと「閉店」「おしまい」の表現に'],
p:`ロールスクリーンを巻き上げるように、今の場面が上へ巻き取られて次の場面が見えてくる「ロールアップ」を作ってください。
・時間：0.9秒。イージング cubic-bezier(.65,0,.35,1)
・シーンA：clip-path: inset(0 0 0 0) → inset(0 0 100% 0)（下から上へ巻き取られて短くなる）
・巻き取りの棒（ローラー）：画面幅いっぱい・高さ40pxの円柱（上下に暗く、中央が明るい linear-gradient：#2A2F38 → #9AA3B2 → #2A2F38）を、Aの下端に沿って一緒に上へ動かす。影 0 10px 20px rgba(0,0,0,.5)
・シーンB：下に置いておき、brightness 0.7 → 1 へ明るくする`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const e='cubic-bezier(.65,0,.35,1)';H.a(A,[{clipPath:'inset(0 0 0 0)'},{clipPath:'inset(0 0 100% 0)'}],{d:D,dl:st,e});H.a(B,[{filter:'brightness(.7)'},{filter:'brightness(1)'}],{d:D,dl:st,e});
  const r=H.abs({left:'0',width:'1600px',height:'40px',top:'880px',background:'linear-gradient(#2a2f38,#9aa3b2 50%,#2a2f38)',boxShadow:'0 10px 20px rgba(0,0,0,.5)'},root);H.a(r,[{top:'880px'},{top:'-40px'}],{d:D,dl:st,e})}});

defT({no:'46',cat:'OBJECT',name:'スクイーズライン',en:'Squeeze Line',lead:'場面が横一本の光る線に押しつぶされ、線が開くと次の場面。',d:800,
use:'<b>SF・テクノロジー・ゲームのロード画面</b>に。データが一本に圧縮されて別の画面に展開されるようなクールさ。',
tips:['線になった瞬間に光（白い発光）を強めると、エネルギーを感じさせます','つぶれる前に横に少し伸ばす（scaleX 1.05）とキレが出ます','縦一本にすれば、扉が閉まって開くような表現に'],
p:`場面が横一本の光る線に押しつぶされ、その線が上下に開くと次の場面になっている「スクイーズライン」を作ってください。
・時間：0.8秒
・0〜0.35秒：シーンAを scaleY 1 → 0.004、scaleX 1 → 1.05（cubic-bezier(.7,0,.84,0)）。つぶれるにつれ brightness 1 → 3
・0.35〜0.45秒：画面中央に、白く光る横線（高さ4px、box-shadow 0 0 30px #FFF, 0 0 60px #C6F432）を表示
・0.45〜0.8秒：シーンBを scaleY 0.004 → 1（cubic-bezier(.16,1,.3,1)）、brightness 3 → 1
・背景は黒`,
tr(H,root,mk,st,D){const B=mk(1,{transform:'scaleY(.004)',filter:'brightness(3)'}),A=mk(0);H.a(A,[{transform:'scale(1,1)',filter:'brightness(1)'},{transform:'scale(1.05,.004)',filter:'brightness(3)'}],{d:350,dl:st,e:E.in});
  const ln=H.abs({left:'0',top:'448px',width:'1600px',height:'4px',background:'#fff',boxShadow:'0 0 30px #fff,0 0 60px #c6f432',opacity:0},root);H.a(ln,[{opacity:1},{opacity:1}],{d:120,dl:st+340,f:'none'});
  hide(H,A,st+350);H.a(B,[{transform:'scaleY(.004)',filter:'brightness(3)'},{transform:'scaleY(1)',filter:'brightness(1)'}],{d:350,dl:st+450})}});

defT({no:'47',cat:'OBJECT',name:'テレビオフ',en:'TV Off / On',lead:'古いテレビの電源を切るように、線→点になって消え、また点く。',d:1200,
use:'<b>「チャンネルを変えると…」「場面は変わって」</b>に。レトロな味わいとユーモアのある切り替え。',
tips:['消える順番は「縦につぶれて横線→横に縮んで点→点が消える」','点く時は逆の順番。最初に白く光らせるとブラウン管らしい','テレビの砂嵐（ノイズ）を0.1秒挟むのもアリ'],
p:`古いブラウン管テレビの電源を切るように、場面が「横線→点」になって消え、また逆の順番で点いて次の場面が映る「テレビオフ」を作ってください。
・時間：1.2秒。背景は黒
・電源オフ（0〜0.5秒）：シーンAを scaleY 1 → 0.005（0.2秒）→ scaleX 1 → 0（0.15秒）。同時に brightness 1 → 3。最後に中央に白い点（直径16px、光る）を0.15秒残して消す
・0.5〜0.6秒：真っ暗
・電源オン（0.6〜1.2秒）：シーンBを白い点 → scaleX 0 → 1（0.15秒、高さ0.005のまま横線）→ scaleY 0.005 → 1（0.25秒）。brightness 3 → 1
・画面に走査線（2px間隔の横線、不透明度0.2）を重ねる`,
tr(H,root,mk,st,D){const B=mk(1,{transform:'scale(0,.005)'}),A=mk(0);H.a(A,[{transform:'scale(1,1)',filter:'brightness(1)'},{transform:'scale(1,.005)',filter:'brightness(3)',offset:.57},{transform:'scale(0,.005)',filter:'brightness(3)'}],{d:350,dl:st,e:E.in});hide(H,A,st+350);
  const dot=H.abs({left:'792px',top:'442px',width:'16px',height:'16px',borderRadius:'50%',background:'#fff',boxShadow:'0 0 20px #fff',opacity:0},root);H.a(dot,[{opacity:1},{opacity:0}],{d:150,dl:st+350,f:'none'});H.a(dot,[{opacity:1},{opacity:0}],{d:100,dl:st+600,f:'none'});
  H.a(B,[{transform:'scale(0,.005)',filter:'brightness(3)'},{transform:'scale(1,.005)',filter:'brightness(3)',offset:.375},{transform:'scale(1,1)',filter:'brightness(1)'}],{d:400,dl:st+650,e:E.out});
  H.abs({inset:'0',background:'repeating-linear-gradient(rgba(0,0,0,.2) 0 1px,transparent 1px 3px)',pointerEvents:'none'},root)}});

defT({no:'48',cat:'OBJECT',name:'ディストーション',en:'Distort Warp',lead:'場面がぐにゃりと歪んで溶け、歪みが戻ると別の場面。',d:1000,
use:'<b>めまい・混乱・夢・不思議な世界</b>に。「頭がぐるぐる」「意識が遠のく」などの演出や、MVの幻想的な場面転換に。',
tips:['歪みの強さ（scale）は150前後がピーク。それ以上は形が完全に崩れます','歪みのノイズを少しずつ動かすと、液体のようにうねります','色相を少し回すと、サイケデリックな印象が加わります'],
p:`場面がぐにゃりと歪んで溶けていき、歪みが戻ると別の場面になっている「ディストーションワープ」を作ってください。
・時間：1.0秒
・SVGフィルター：feTurbulence（type=turbulence、baseFrequency 0.008 0.02、numOctaves 2）＋ feDisplacementMap を、AとBの両方にかける
・0〜0.5秒：シーンAにかけた displacement の scale を 0 → 160（cubic-bezier(.7,0,.84,0)）。同時に hue-rotate 0 → 40°、不透明度 1 → 0（後半0.2秒で）
・0.5〜1.0秒：シーンBの scale を 160 → 0（cubic-bezier(.16,1,.3,1)）、hue-rotate 40° → 0、不透明度 0 → 1（前半0.2秒で）
・歪みの間、feTurbulence の seed を0.05秒ごとに変えて、うねりを動かす`,
tr(H,root,mk,st,D){const id='dw'+Math.floor(Math.random()*1e6);const svg=H.svg(1,1,root);const f=H.sv('filter',{id,x:'-10%',y:'-10%',width:'120%',height:'120%'},H.sv('defs',{},svg));const tb=H.sv('feTurbulence',{type:'turbulence',baseFrequency:'0.008 0.02',numOctaves:2,seed:1},f);const dm=H.sv('feDisplacementMap',{in:'SourceGraphic',scale:0},f);
  const B=mk(1,{opacity:0}),A=mk(0);A.style.filter=B.style.filter=`url(#${id})`;
  H.raf(s=>{const t=s*1000-st;if(t<0||t>D+50)return;const k=t/D;let sc;if(k<.5){const q=k/.5;sc=160*q*q*q;A.style.opacity=k>.3?Math.max(0,1-(k-.3)/.2):1;B.style.opacity=k>.3?Math.min(1,(k-.3)/.2):0}else{const q=(k-.5)/.5;sc=160*Math.pow(1-q,3);A.style.opacity=0;B.style.opacity=1}
    dm.setAttribute('scale',Math.max(0,sc).toFixed(1));tb.setAttribute('seed',Math.floor(t/50));root.style.filter=`hue-rotate(${(40*Math.sin(Math.min(1,k)*Math.PI)).toFixed(0)}deg)`;if(k>=1){A.style.filter=B.style.filter=root.style.filter='none';A.style.visibility='hidden'}})}});

defT({no:'49',cat:'OBJECT',name:'インクにじみ',en:'Ink Bleed',lead:'墨や絵の具が紙ににじんで広がるように、次の場面が染み出す。',d:1200,
use:'<b>アート・和風・手描き・クリエイティブ</b>な動画に。にじむ動きは有機的で、イラスト系・書道系の作品紹介と好相性。',
tips:['にじみの起点を3か所に分けると、自然なインクの広がりになります','輪郭をSVGのノイズで少し揺らすと、紙ににじんだ感じが出ます','広がる速さを起点ごとに変えると、より有機的に'],
p:`墨や絵の具が紙ににじんで広がるように、次の場面が3か所から染み出して画面を覆う「インクにじみ」を作ってください。
・時間：1.2秒
・シーンBをAの上に重ね、mask-image に radial-gradient を3つ重ねる（起点は 30% 60%、70% 35%、55% 80% あたり）
・各円の半径を 0 → 120% まで、それぞれ少し違う速さ（0.9〜1.2秒）と開始の遅れ（0〜0.2秒）で広げる。円の縁は8%幅でぼかす
・Bの外側の輪郭に、SVGフィルター（feTurbulence＋feDisplacementMap scale 30）をかけて、にじんだギザギザ感を出す（または輪郭用に黒い墨の層を同じ形で少し先行して広げる）
・墨の層：#111 の同じ形のマスクを、Bより0.08秒先行させて広げ、Bとの境目に墨の縁が見えるようにする`,
tr(H,root,mk,st,D){const A=mk(0);const ink=H.abs({inset:'0',background:'#111'},root);const B=mk(1);const C=[[30,60,0,1.0],[70,35,120,1.1],[55,80,200,.9]];
  const mask=(lead)=>{const s=performance.now();return t=>C.map(([x,y,dl,sp])=>{const k=Math.max(0,Math.min(1,(t-dl-lead)/(D*sp)));const e=1-Math.pow(1-k,3);const r=(e*120).toFixed(1);return `radial-gradient(circle at ${x}% ${y}%,#000 ${r}%,transparent ${(+r+8).toFixed(1)}%)`}).join(',')};
  const mB=mask(80),mI=mask(0);const set=(el,v)=>{el.style.webkitMaskImage=v;el.style.maskImage=v};set(B,mB(-1e4));set(ink,mI(-1e4));
  H.raf(s=>{const t=s*1000-st;if(t<-20||t>D+300)return;set(B,mB(t));set(ink,mI(t))})}});

defT({no:'50',cat:'OBJECT',name:'シェイプワイプ',en:'Shape Wipe',lead:'丸・四角・三角の図形が次々に広がって、最後の図形が次の場面に。',d:1100,
use:'<b>ポップ・キッズ・教育・明るいブランド</b>に。カラフルな図形がリズムよく広がるので、楽しい雰囲気の転換にぴったり。',
tips:['図形の色はシーンBの色と、その補色を交互にするときれい','最後の図形だけ回転させながら広げると、動きにメリハリが出ます','図形を画面の端から出すと、また違ったリズムになります'],
p:`丸・四角・三角の色付き図形が中央から次々に広がっていき、最後の図形の中に次の場面が現れる「シェイプワイプ」を作ってください。
・時間：1.1秒
・図形1：#C6F432 の円。0〜0.45秒で scale 0 → 画面を覆う大きさ（cubic-bezier(.65,0,.35,1)）
・図形2：#38D6FF の正方形（45°回転）。0.15〜0.6秒で同様に広げる
・図形3：#FF8FAB の正三角形（clip-path: polygon(50% 0, 100% 100%, 0 100%)）。0.3〜0.75秒、回転 0 → 90° しながら広げる
・最後：シーンBを clip-path: circle(0% at 50% 50%) → circle(80%) で0.45〜1.1秒に広げ、図形の上に重ねる
・図形がすべて画面を覆ったらAを非表示にし、Bが広がりきったら図形も非表示にする`,
tr(H,root,mk,st,D){const A=mk(0);const e='cubic-bezier(.65,0,.35,1)';const sh=[['#c6f432','50%','none',0],['#38d6ff','0','rotate(45deg)',150],['#ff8fab','0','none',300]];const els=sh.map(([c,r,rot,dl],i)=>{const s=H.abs({left:'500px',top:'150px',width:'600px',height:'600px',background:c,borderRadius:r,clipPath:i===2?'polygon(50% 0,100% 100%,0 100%)':'none',transform:'scale(0)'},root);
    H.a(s,[{transform:`scale(0) ${rot} rotate(0)`},{transform:`scale(${i===2?5:3.8}) ${rot} rotate(${i===2?90:0}deg)`}],{d:450,dl:st+dl,e});return s});
  const B=mk(1,{clipPath:'circle(0% at 50% 50%)'});H.a(B,[{clipPath:'circle(0% at 50% 50%)'},{clipPath:'circle(80% at 50% 50%)'}],{d:650,dl:st+450,e});hide(H,A,st+750);els.forEach(s=>hide(H,s,st+D))}});
