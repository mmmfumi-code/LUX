/* ===== TRANSITION 共通 ===== */
CUR_SEC='t';
function scene(H,which,label,parent,css){
  const s=H.abs(Object.assign({left:'0',top:'0',width:'1600px',height:'900px',overflow:'hidden',background:which?'#ff9a3c':'#0f1c2e'},css||{}),parent);
  if(!which){H.abs({inset:'0',backgroundImage:'linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)',backgroundSize:'80px 80px'},s);
    H.abs({right:'160px',top:'130px',width:'260px',height:'260px',borderRadius:'50%',border:'3px solid rgba(255,255,255,.22)'},s);H.abs({left:'140px',bottom:'120px',width:'420px',height:'6px',background:'rgba(255,255,255,.3)'},s)}
  else{H.abs({left:'-140px',bottom:'-200px',width:'640px',height:'640px',borderRadius:'50%',background:'rgba(255,255,255,.2)'},s);H.abs({right:'130px',top:'110px',width:'180px',height:'180px',background:'rgba(15,28,46,.14)',transform:'rotate(12deg)'},s)}
  H.abs({left:'60px',top:'50px',fontFamily:F.mono,fontSize:'26px',letterSpacing:'.2em',color:which?'#0f1c2e':'#fff',opacity:.7},s,which?'SCENE B':'SCENE A');
  const tt=H.box({},s);H.el('div',{fontFamily:F.heavy,fontSize:fs(label,320,1200)+'px',color:which?'#0f1c2e':'#fff',whiteSpace:'nowrap',lineHeight:'1'},tt,label);
  s._title=tt;return s;
}
function defT(o){const D=o.d,half=700+D+700;o.loop=half*2;o.multi=true;o.bg=o.bg||'#000';o.text=o.text||'A B';
  o.p='シーン名：「{T}」（スペースの前がシーンA、後ろがシーンB）\n'+o.p;
  o.run=(H,t,w)=>{const a=w[0]||'A',b=w[1]||'B';
    const phase=(from,to,fw,tw)=>{const root=H.abs({inset:'0',overflow:'hidden'});const mk=(k,css,parent)=>k?scene(H,tw,to,parent||root,css):scene(H,fw,from,parent||root,css);o.tr(H,root,mk,700,D);return root};
    let r=phase(a,b,0,1);H.wait(half,()=>{r.getAnimations({subtree:true}).forEach(x=>x.cancel());r.remove();r=phase(b,a,1,0)})};
  def(o)}
const hide=(H,el,at)=>H.wait(at,()=>{el.style.display='none'});

/* ===== CUT 01-10 ===== */
defT({no:'01',cat:'CUT',name:'ホイップパン',en:'Whip Pan',lead:'カメラを横に振り抜いたように、ブレながら次の場面へ。',d:500,
use:'<b>Vlog・旅動画・テンポの速い編集</b>の定番。場所が変わるとき、「一方その頃…」の切り替えに。',
tips:['ブラーは40px前後。強くするほどカメラを速く振った感じになります','振る方向を「次の場所がある方向」に合わせると、空間がつながって見えます','効果音「シュッ」を中心の時刻に合わせるのが鉄則'],
p:`カメラを横に勢いよく振ったような「ホイップパン」で、シーンAからシーンBへ切り替えてください。
・時間：0.5秒。イージング cubic-bezier(.87,0,.13,1)（真ん中で一番速い）
・シーンA：translateX 0 → −100%、同時に filter: blur(0) → blur(40px)
・シーンB：translateX +100% → 0、同時に blur(40px) → blur(0)
・AとBは同じ速度で隙間なく並んで動く（つなぎ目に黒い隙間を出さない）
・真ん中の時刻に、横方向の白い残像の線（高さ2〜6px、不透明度0.3、20本）を0.15秒だけ重ねてスピード感を足す`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);H.a(A,[{transform:'translateX(0)',filter:'blur(0)'},{transform:'translateX(-1600px)',filter:'blur(40px)'}],{d:D,dl:st,e:E.io});H.a(B,[{transform:'translateX(1600px)',filter:'blur(40px)'},{transform:'translateX(0)',filter:'blur(0)'}],{d:D,dl:st,e:E.io});
  const L=H.abs({inset:'0',pointerEvents:'none'},root);for(let i=0;i<20;i++)H.abs({left:'0',right:'0',top:rnd(0,900)+'px',height:rnd(2,6)+'px',background:'#fff',opacity:.3},L);H.a(L,[{opacity:0},{opacity:1},{opacity:0}],{d:150,dl:st+D/2-75,f:'both'})}});

defT({no:'02',cat:'CUT',name:'ズームバースト',en:'Zoom Burst',lead:'画面へ一気に突っ込み、放射状の光とともに次の場面が弾ける。',d:600,
use:'<b>サビ・盛り上がり・結果発表</b>の直前に。テンションを一段上げたいときの切り替え。',
tips:['放射線（集中線）を一瞬だけ重ねると、突っ込んだ勢いが倍増します','Aを拡大する時間をBの登場より短くすると、キレが出ます','ドラムの「ドン」に中心を合わせると気持ちいい'],
p:`画面の中心へ一気に突っ込むような「ズームバースト」で、シーンAからシーンBへ切り替えてください。
・時間：0.6秒
・0.00〜0.30秒：シーンAを scale 1 → 3、blur 0 → 24px、不透明度 1 → 0（イージング cubic-bezier(.7,0,.84,0)）
・0.25〜0.60秒：シーンBを scale 0.6 → 1、blur 16px → 0、不透明度 0 → 1（イージング cubic-bezier(.16,1,.3,1)）
・0.25秒の瞬間：中心から放射状の白い光（repeating-conic-gradient で白と透明を交互に5°ずつ、中心は透明の円で抜く）を不透明度 0 → 0.8 → 0 で0.3秒、同時に scale 0.8 → 1.6 に広げる`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);H.a(A,[{transform:'scale(1)',filter:'blur(0)',opacity:1},{transform:'scale(3)',filter:'blur(24px)',opacity:0}],{d:300,dl:st,e:E.in});
  H.a(B,[{transform:'scale(.6)',filter:'blur(16px)',opacity:0},{transform:'scale(1)',filter:'blur(0)',opacity:1}],{d:350,dl:st+250});
  const R=H.abs({left:'-400px',top:'-700px',width:'2400px',height:'2400px',background:'radial-gradient(circle,transparent 12%,rgba(0,0,0,0) 12%),repeating-conic-gradient(rgba(255,255,255,.9) 0 5deg,transparent 5deg 10deg)',WebkitMaskImage:'radial-gradient(circle,transparent 14%,#000 30%)',maskImage:'radial-gradient(circle,transparent 14%,#000 30%)',opacity:0},root);
  H.a(R,[{opacity:0,transform:'scale(.8)'},{opacity:.8,offset:.4},{opacity:0,transform:'scale(1.6)'}],{d:300,dl:st+250})}});

defT({no:'03',cat:'CUT',name:'スピンズーム',en:'Spin Zoom',lead:'回転しながら吸い込まれ、逆回転で次の場面が出てくる。',d:800,
use:'<b>ゲーム実況・ダンス・ハイテンションなVlog</b>に。「次の日」「場面転換」を派手に見せたいときに。',
tips:['Aは時計回り、Bは反時計回り（逆方向）にするのがポイント','回転角は180°が派手さの上限。上品にするなら90°','ブラーを足すと、回転の速さがなめらかに見えます'],
p:`回転しながら画面の奥へ吸い込まれ、逆回転で次の場面が現れる「スピンズーム」でシーンAからシーンBへ切り替えてください。
・時間：0.8秒
・前半0.4秒：シーンAを rotate 0 → 180°、scale 1 → 4、blur 0 → 20px、不透明度 1 → 0（イージング cubic-bezier(.7,0,.84,0)）
・後半0.4秒：シーンBを rotate −180° → 0、scale 0.2 → 1、blur 20px → 0、不透明度 0 → 1（イージング cubic-bezier(.16,1,.3,1)）
・背景（AとBの後ろ）は黒`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);H.a(A,[{transform:'rotate(0) scale(1)',filter:'blur(0)',opacity:1},{transform:'rotate(180deg) scale(4)',filter:'blur(20px)',opacity:0}],{d:D/2,dl:st,e:E.in});
  H.a(B,[{transform:'rotate(-180deg) scale(.2)',filter:'blur(20px)',opacity:0},{transform:'rotate(0) scale(1)',filter:'blur(0)',opacity:1}],{d:D/2,dl:st+D/2})}});

defT({no:'04',cat:'CUT',name:'グリッチジャンプ',en:'Glitch Jump',lead:'映像がバグったように乱れ、ノイズの中で場面が飛ぶ。',d:520,
use:'<b>テック系・ゲーム・ホラー・サイバー</b>な動画に。「異変」「システム起動」の演出や、話題が急に変わる場面に。',
tips:['乱れは0.05秒刻みで不規則に。一定のリズムだと機械的に見えます','乱れの途中で一瞬だけBを見せる（チラ見せ）と期待感が出ます','色ずれは赤と水色の2色が定番'],
p:`映像がバグったように乱れて、ノイズの中で場面が飛ぶ「グリッチジャンプ」でシーンAからシーンBへ切り替えてください。
・時間：約0.5秒（0.055秒ごとに9コマ）
・各コマで、表示するシーンをランダムに選ぶ（前半はAが多め、後半はBが多め、最後のコマは必ずB）
・各コマで、表示中のシーンに次の乱れをランダムにかける
　・横方向に −80〜80px ずらす
　・clip-path: inset() で高さ10〜40%の横帯だけを残す
　・filter: hue-rotate(0〜180deg) と、drop-shadow で赤 #FF0040 と水色 #00E5FF の色ずれ（±12px）
・最後のコマで乱れをすべて解除し、Bをぴたっと表示する`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);B.style.visibility='hidden';
  for(let k=0;k<=9;k++)H.wait(st+k*55,()=>{const last=k===9;const showB=last||Math.random()<k/9;A.style.visibility=showB?'hidden':'visible';B.style.visibility=showB?'visible':'hidden';const el=showB?B:A;
    if(last){B.style.transform='none';B.style.clipPath='none';B.style.filter='none';return}
    const top=rnd(0,70);el.style.transform=`translateX(${rnd(-80,80)}px)`;el.style.clipPath=Math.random()<.6?`inset(${top}% 0 ${Math.max(0,100-top-rnd(10,40))}% 0)`:'none';const o=rnd(-12,12);el.style.filter=`hue-rotate(${rnd(0,180)}deg) drop-shadow(${o}px 0 0 #ff0040) drop-shadow(${-o}px 0 0 #00e5ff)`})}});

defT({no:'05',cat:'CUT',name:'フラッシュカット',en:'Flash Cut',lead:'カメラのフラッシュのように白く光った瞬間、場面が変わる。',d:420,
use:'<b>決定的瞬間・写真・記念撮影</b>のシーンに。「パシャッ」という効果音と合わせると定番の気持ちよさ。',
tips:['白の上がりは速く（0.12秒）、下がりはゆっくり（0.3秒）が自然','白の代わりに淡い黄色にすると、暖かい思い出の雰囲気に','連続写真のように3回くり返すのもアリ'],
p:`カメラのフラッシュのように白く光った瞬間に場面が変わる「フラッシュカット」でシーンAからシーンBへ切り替えてください。
・時間：約0.42秒
・白い全面レイヤー（#FFFFFF）を、0.12秒で不透明度 0 → 1（イージング cubic-bezier(.7,0,.84,0)）
・真っ白になった瞬間にAを非表示にしてBを表示（Bは scale 1.06 → 1 へ0.4秒でわずかに引く）
・白を0.3秒で不透明度 1 → 0 に戻す（イージング cubic-bezier(.16,1,.3,1)）`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const W=H.abs({inset:'0',background:'#fff',opacity:0},root);
  H.a(W,[{opacity:0},{opacity:1,offset:.29},{opacity:0}],{d:D,dl:st,e:E.lin});hide(H,A,st+120);H.a(B,[{transform:'scale(1.06)'},{transform:'scale(1)'}],{d:400,dl:st+120})}});

defT({no:'06',cat:'CUT',name:'シェイクカット',en:'Shake Cut',lead:'画面が激しく揺れて、揺れの最中に場面がすり替わる。',d:450,
use:'<b>衝撃・地震・ツッコミ・ドッキリ</b>のリアクションに。お笑い系、ゲーム実況の「やられた！」シーンに。',
tips:['揺れ幅は最初が大きく、だんだん小さくするのがリアル','揺れと同時に少しズーム（1.1倍）すると、揺れで画面端が見えません','切り替えは揺れの一番大きい瞬間に'],
p:`画面が激しく揺れ、その最中に場面がすり替わる「シェイクカット」でシーンAからシーンBへ切り替えてください。
・時間：0.45秒
・画面全体（AとBを入れた親）を scale 1.1 に拡大した状態で、0.05秒ごとにランダムに揺らす。揺れ幅は最初 ±50px・回転 ±3°、最後は 0 に向かって小さくする
・揺れの2コマ目（0.1秒）でAを非表示にしてBを表示
・揺れが終わったら scale 1 に戻す`,
tr(H,root,mk,st,D){const W=H.abs({inset:'0'},root);const B=mk(1,{},W),A=mk(0,{},W);const k=[];for(let i=0;i<9;i++){const a=(1-i/9)*50;k.push({transform:`scale(1.1) translate(${rnd(-a,a)}px,${rnd(-a,a)}px) rotate(${rnd(-3,3)*(1-i/9)}deg)`})}k.push({transform:'scale(1)'});
  H.a(W,k,{d:D,dl:st,e:E.lin,f:'none'});hide(H,A,st+100)}});

defT({no:'07',cat:'CUT',name:'キューブ回転',en:'Cube Rotate',lead:'立方体の面が回るように、立体的に次の場面へ。',d:900,
use:'<b>章立て・ステップ紹介・比較</b>に。「次のポイントは…」のように、同じ流れの中で区切りたいときに。',
tips:['奥行き（translateZ）は画面幅の半分にすると、正確な立方体になります','回転の途中で少し縮める（scale 0.85）と、立方体の全体が見えて立体感が増します','縦方向（rotateX）にすると、エレベーターのような印象に'],
p:`立方体が回るように、シーンAの面からシーンBの面へ立体的に切り替える「キューブ回転」を作ってください。
・時間：0.9秒。イージング cubic-bezier(.65,0,.35,1)
・CSS 3D：親に perspective: 2000px。立方体のグループに transform-style: preserve-3d
・シーンAは translateZ(画面幅の半分)、シーンBは rotateY(90°) translateZ(画面幅の半分) に配置し、立方体の隣り合った面にする
・立方体全体を translateZ(−画面幅の半分) rotateY(0) → rotateY(−90°) へ回転させる。回転の中盤（50%）だけ全体を scale 0.85 に縮める
・背景は黒。各面に、回転に合わせて暗くなる影（黒の不透明度 0 → 0.5）を重ねる`,
tr(H,root,mk,st,D){root.style.perspective='2000px';const C=H.abs({inset:'0',transformStyle:'preserve-3d'},root);const A=mk(0,{transform:'translateZ(800px)',backfaceVisibility:'hidden'},C),B=mk(1,{transform:'rotateY(90deg) translateZ(800px)',backfaceVisibility:'hidden'},C);
  H.a(C,[{transform:'translateZ(-800px) rotateY(0deg) scale(1)'},{transform:'translateZ(-800px) rotateY(-45deg) scale(.85)',offset:.5},{transform:'translateZ(-800px) rotateY(-90deg) scale(1)'}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)',f:'backwards'});
  const sa=H.abs({inset:'0',background:'#000',opacity:0},A),sb=H.abs({inset:'0',background:'#000',opacity:.5},B);H.a(sa,[{opacity:0},{opacity:.5}],{d:D,dl:st,f:'none'});H.a(sb,[{opacity:.5},{opacity:0}],{d:D,dl:st});hide(H,A,st+D);H.wait(st+D,()=>{B.style.transform='none';sb.style.opacity=0})}});

defT({no:'08',cat:'CUT',name:'カードフリップ',en:'Card Flip',lead:'画面がカードのようにくるっと裏返り、裏面が次の場面。',d:900,
use:'<b>答え合わせ・種明かし・ビフォーアフター</b>に。「正解は…」でくるっと裏返すと、クイズ動画が一気に盛り上がります。',
tips:['裏返る途中で画面を少し縮める（0.8倍）と、カードらしさが出ます','角を丸くする（border-radius 30px）と、より「カード」に見えます','横回転は「切り替え」、縦回転は「めくる」印象'],
p:`画面全体が1枚のカードのようにくるっと裏返り、裏面がシーンBになる「カードフリップ」を作ってください。
・時間：0.9秒。イージング cubic-bezier(.65,0,.35,1)
・CSS 3D：親に perspective: 2400px。カードに transform-style: preserve-3d
・表面＝シーンA、裏面＝シーンB（rotateY(180°) で配置）。どちらも backface-visibility: hidden
・カードを rotateY 0 → 180° へ回転。途中（50%）だけ scale 0.8・角丸30px・影 0 40px 80px rgba(0,0,0,.6)
・背景は黒`,
tr(H,root,mk,st,D){root.style.perspective='2400px';const C=H.abs({inset:'0',transformStyle:'preserve-3d'},root);const A=mk(0,{backfaceVisibility:'hidden'},C),B=mk(1,{transform:'rotateY(180deg)',backfaceVisibility:'hidden'},C);
  H.a(C,[{transform:'rotateY(0) scale(1)'},{transform:'rotateY(90deg) scale(.8)',offset:.5},{transform:'rotateY(180deg) scale(1)'}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)'});
  [A,B].forEach(e=>H.a(e,[{borderRadius:'0'},{borderRadius:'30px',offset:.5},{borderRadius:'0'}],{d:D,dl:st,f:'none'}))}});

defT({no:'09',cat:'CUT',name:'RGBスプリット',en:'RGB Split',lead:'画面が赤と青に分解して、ずれが戻ると次の場面になっている。',d:620,
use:'<b>音楽・ファッション・ストリート系</b>の編集に。ビートに合わせると、MVのような切り替えになります。',
tips:['ずれ幅は60px前後が見栄えの限界。大きすぎると何の映像か分からなくなります','縦方向のずれを少し混ぜると、より「壊れた映像」っぽくなります','白黒の映像にかけると、色ずれだけが際立っておしゃれ'],
p:`画面が赤と青の色に分解してずれていき、ずれが戻ると次の場面になっている「RGBスプリット」でシーンAからシーンBへ切り替えてください。
・時間：0.62秒
・前半0.31秒：シーンAに filter: drop-shadow(x 0 0 #FF0040) drop-shadow(−x 0 0 #00E5FF) をかけ、x を 0 → 60px に広げながら、Aの不透明度を 1 → 0（イージング cubic-bezier(.7,0,.84,0)）。同時に scale 1 → 1.08
・後半0.31秒：シーンBに同じ色ずれを x = 60px → 0 でかけながら、不透明度 0 → 1（イージング cubic-bezier(.16,1,.3,1)）。scale 1.08 → 1
・中心の時刻に、画面全体を横に ±20px 1コマだけずらす`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const sh=x=>`drop-shadow(${x}px 0 0 #ff0040) drop-shadow(${-x}px 0 0 #00e5ff)`;
  H.a(A,[{filter:sh(0),opacity:1,transform:'scale(1)'},{filter:sh(60),opacity:0,transform:'scale(1.08)'}],{d:D/2,dl:st,e:E.in});H.a(B,[{filter:sh(60),opacity:0,transform:'scale(1.08)'},{filter:sh(0),opacity:1,transform:'scale(1)'}],{d:D/2,dl:st+D/2});
  H.a(root,[{transform:'translateX(20px)'},{transform:'translateX(-20px)'},{transform:'none'}],{d:90,dl:st+D/2-45,e:'steps(3)',f:'none'})}});

defT({no:'10',cat:'CUT',name:'ストロボ連打',en:'Strobe Cut',lead:'ストロボのように白い閃光とAとBが連打され、Bに落ち着く。',d:700,
use:'<b>ライブ・クラブ・ダンス・スポーツのハイライト</b>に。BPMの速い曲のサビ前に入れると一気に盛り上がります。',
tips:['光の点滅は0.1秒より速くしないのがマナー（光に敏感な人への配慮）','後半に行くほどBの時間を長くすると、自然に落ち着きます','白の代わりにブランドカラーで点滅させると個性が出ます'],
p:`ストロボのように白い閃光とシーンA・シーンBが交互に連打され、最後にBで落ち着く「ストロボ連打」を作ってください。
・時間：0.7秒
・0.1秒ごとに、次の順番でハードカット（フェードなし）で切り替える：A → 白 → B → 白 → A → 白 → B
・白のコマは #FFFFFF の全面。Bのコマは毎回 scale 1.1 → 1 で少し引く
・光の点滅は0.1秒より速くしない（光に敏感な人への配慮）`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const W=H.abs({inset:'0',background:'#fff',visibility:'hidden'},root);B.style.visibility='hidden';
  ['A','W','B','W','A','W','B'].forEach((k,i)=>H.wait(st+i*100,()=>{A.style.visibility=k==='A'?'visible':'hidden';B.style.visibility=k==='B'?'visible':'hidden';W.style.visibility=k==='W'?'visible':'hidden';if(k==='B')H.a(B,[{transform:'scale(1.1)'},{transform:'scale(1)'}],{d:300})}))}});
