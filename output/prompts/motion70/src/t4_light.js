/* ===== LIGHT 31-40 ===== */
defT({no:'31',cat:'LIGHT',name:'ライトリーク',en:'Light Leak',lead:'フィルムに漏れた暖かい光が画面を横切り、その中で場面が変わる。',d:1200,
use:'<b>思い出・旅・夏・エモいVlog</b>に。フィルムカメラ風の暖かい光で、どんな映像も一気に「エモく」なります。',
tips:['光の色はオレンジ・ピンク・黄色の3色を重ねると本物らしくなります','mix-blend-mode: screen で重ねると、映像が明るく光って見えます','光が一番強い瞬間に切り替えると、つなぎ目が見えません'],
p:`フィルムカメラに光が漏れたような、暖かい光が画面を横切る「ライトリーク」の中でシーンAからシーンBへ切り替えてください。
・時間：1.2秒
・光：大きなぼかした楕円を3つ（#FF7A18、#FF3D7F、#FFD36E。それぞれ幅900〜1300px、ぼかし80px、不透明度0.85）を mix-blend-mode: screen で重ね、左外から右外へ、少しずつ速さを変えて流す
・光の明るさは中央（0.6秒）で最大。そこで全面に #FFE8C7 を不透明度0.7まで重ねる
・0.6秒の瞬間にAを非表示にしてBを表示
・Bは brightness 1.4 → 1 へ0.6秒で落ち着かせる`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const L=H.abs({inset:'0',mixBlendMode:'screen',pointerEvents:'none'},root);
  [['#ff7a18',1300,0],['#ff3d7f',1000,120],['#ffd36e',900,60]].forEach(([c,w,dl],i)=>{const e=H.abs({left:'0',top:150+i*120+'px',width:w+'px',height:'520px',borderRadius:'50%',background:c,filter:'blur(80px)',opacity:.85},L);H.a(e,[{transform:`translateX(${-w-200}px)`},{transform:'translateX(1900px)'}],{d:D-dl,dl:st+dl,e:'cubic-bezier(.45,0,.55,1)'})});
  const W=H.abs({inset:'0',background:'#ffe8c7',opacity:0},root);H.a(W,[{opacity:0},{opacity:.7},{opacity:0}],{d:D,dl:st,e:E.soft});hide(H,A,st+D/2);H.a(B,[{filter:'brightness(1.4)'},{filter:'brightness(1)'}],{d:600,dl:st+D/2})}});

defT({no:'32',cat:'LIGHT',name:'ホワイトアウト',en:'Dip to White',lead:'画面がまぶしく白に溶け、白の中から次の場面が浮かぶ。',d:1000,
use:'<b>回想・天国・夢・結婚式・感動のラスト</b>に。白は「浄化」「希望」「時間の経過」を感じさせます。',
tips:['白にする前に少し明るさを上げる（brightness 1.5）と、光に包まれた感じに','白で0.1〜0.2秒止めると、時間が飛んだ印象が強まります','完全な白より、ごく淡いクリーム色の方がやわらかい'],
p:`画面がまぶしい白に溶けていき、白の中から次の場面が浮かび上がる「ホワイトアウト（ディップ・トゥ・ホワイト）」を作ってください。
・時間：1.0秒。イージング cubic-bezier(.4,0,.2,1)
・0〜0.45秒：シーンAを brightness 1 → 1.6 にしながら、上に重ねた白（#FFFFFF）を不透明度 0 → 1
・0.45〜0.55秒：真っ白で止める。この間にAを非表示、Bを表示
・0.55〜1.0秒：白を不透明度 1 → 0、シーンBを brightness 1.6 → 1、scale 1.04 → 1`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const W=H.abs({inset:'0',background:'#fff',opacity:0},root);H.a(W,[{opacity:0},{opacity:1,offset:.45},{opacity:1,offset:.55},{opacity:0}],{d:D,dl:st,e:E.soft});H.a(A,[{filter:'brightness(1)'},{filter:'brightness(1.6)'}],{d:450,dl:st,e:E.soft});hide(H,A,st+500);
  H.a(B,[{filter:'brightness(1.6)',transform:'scale(1.04)'},{filter:'brightness(1)',transform:'scale(1)'}],{d:450,dl:st+550,e:E.soft})}});

defT({no:'33',cat:'LIGHT',name:'暗転',en:'Dip to Black',lead:'ゆっくり暗くなり、闇の中から次の場面が現れる。映画の基本。',d:1100,
use:'<b>章の終わり・時間の経過・余韻・シリアスな場面</b>に。いちばん映画的で、どんな映像にも使える基本の切り替え。',
tips:['暗い時間（黒のまま）を0.2秒ほど取ると、場面の区切りがはっきりします','明るくなるときは、暗くなるときより少し速くすると前向きな印象に','黒の中に小さく日付や場所の文字を出すのも効果的'],
p:`ゆっくり暗くなって、闇の中から次の場面が現れる「暗転（ディップ・トゥ・ブラック）」を作ってください。
・時間：1.1秒。イージング cubic-bezier(.4,0,.2,1)
・0〜0.45秒：上に重ねた黒（#000000）を不透明度 0 → 1。同時にシーンAを scale 1 → 1.03（ゆっくり寄りながら暗くなる）
・0.45〜0.65秒：真っ黒で止める。この間にAを非表示、Bを表示
・0.65〜1.1秒：黒を不透明度 1 → 0。シーンBは scale 1.03 → 1`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const K=H.abs({inset:'0',background:'#000',opacity:0},root);H.a(K,[{opacity:0},{opacity:1,offset:.41},{opacity:1,offset:.59},{opacity:0}],{d:D,dl:st,e:E.soft});H.a(A,[{transform:'scale(1)'},{transform:'scale(1.03)'}],{d:450,dl:st});hide(H,A,st+550);H.a(B,[{transform:'scale(1.03)'},{transform:'scale(1)'}],{d:450,dl:st+650})}});

defT({no:'34',cat:'LIGHT',name:'フィルムバーン',en:'Film Burn',lead:'フィルムが焼けるように、端から炎色の光が広がって次の場面へ。',d:1200,
use:'<b>レトロ・ヴィンテージ・映画風</b>の動画に。古いフィルムの質感で、ドキュメンタリーやMVの雰囲気が出ます。',
tips:['焼ける光は「黄→橙→赤→暗い茶」の順に外側へ広がるグラデーションに','チラチラと明るさを揺らすと、炎のゆらめきになります','焼ける中心を画面の端にすると、フィルムの端が焼けた感じに'],
p:`古いフィルムが焼けるように、画面の端から炎色の光が広がり、その中で次の場面に変わる「フィルムバーン」を作ってください。
・時間：1.2秒
・焼ける光：右下を中心にした radial-gradient（中心から #FFF4C2 → #FFB000 → #FF5A00 → #7A1500 → 透明）。mix-blend-mode: screen
・0〜0.6秒：光の半径を 0 → 画面全体を覆う大きさ（150%）へ広げる（cubic-bezier(.7,0,.84,0)）
・0.6秒：画面が光で埋まった瞬間にAを非表示、Bを表示
・0.6〜1.2秒：光を不透明度 1 → 0 へ消す
・光の明るさを、0.05秒ごとに brightness 0.85〜1.15 でランダムに揺らしてゆらめかせる`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const L=H.abs({left:'-800px',top:'-450px',width:'3200px',height:'1800px',mixBlendMode:'screen',background:'radial-gradient(circle at 78% 78%,#fff4c2 0%,#ffb000 14%,#ff5a00 26%,#7a1500 38%,transparent 50%)',transformOrigin:'78% 78%',opacity:0},root);
  H.a(L,[{transform:'scale(0)',opacity:1},{transform:'scale(1.6)',opacity:1,offset:.5},{transform:'scale(1.8)',opacity:0}],{d:D,dl:st,e:E.in});H.wait(st,()=>{let n=0;const f=()=>{L.style.filter=`brightness(${rnd(.85,1.15).toFixed(2)})`;if(++n<24)H.wait(50,f)};f()});hide(H,A,st+D/2)}});

defT({no:'35',cat:'LIGHT',name:'レンズフレア',en:'Lens Flare',lead:'まぶしい光がカメラを横切り、光に目がくらんだ一瞬で場面転換。',d:1000,
use:'<b>夏・太陽・青春・スポーツ</b>に。逆光のまぶしさは前向きでドラマチックな印象を与えます。',
tips:['横に伸びる光の筋（アナモルフィック）を1本入れると、映画っぽさが一気に増します','光の進む方向と逆側に小さな輪（ゴースト）を並べるとレンズらしくなります','光の色は白〜水色にするとクール、白〜黄色にすると暖かい印象'],
p:`まぶしい光がカメラを横切り、光に目がくらんだ一瞬で次の場面に変わる「レンズフレア」を作ってください。
・時間：1.0秒
・光の中心：直径300pxの白い円（radial-gradient で中心 #FFFFFF → #FFE6A8 → 透明）を、画面左上から右下へ移動させる（cubic-bezier(.45,0,.55,1)）
・横に伸びる光の筋：光の中心を通る、幅2000px×高さ6pxの横線（中央が白く端が透明、ぼかし4px）を一緒に動かす
・ゴースト：光と画面中心を結ぶ線上の反対側に、半透明の輪（直径40〜120px、線幅3px、#9EE7FF・#FFD27A、不透明度0.4）を4つ並べる
・光が画面中央を通る瞬間（0.5秒）、全面を白で不透明度0.85まで光らせ、そこでAを非表示・Bを表示
・すべて mix-blend-mode: screen`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const L=H.abs({inset:'0',mixBlendMode:'screen',pointerEvents:'none'},root);
  const core=H.abs({left:'-150px',top:'-150px',width:'300px',height:'300px',borderRadius:'50%',background:'radial-gradient(circle,#fff 0%,#ffe6a8 35%,transparent 70%)'},L);const streak=H.abs({left:'-1000px',top:'-3px',width:'2000px',height:'6px',background:'linear-gradient(90deg,transparent,#fff,transparent)',filter:'blur(4px)'},L);
  const path=[{transform:'translate(150px,120px)'},{transform:'translate(1450px,780px)'}];[core,streak].forEach(e=>H.a(e,path,{d:D,dl:st,e:'cubic-bezier(.45,0,.55,1)',f:'none'}));[core,streak].forEach(e=>e.style.transform='translate(-500px,-500px)');
  for(let i=0;i<4;i++){const s=rnd(40,120);const g=H.abs({left:-s/2+'px',top:-s/2+'px',width:s+'px',height:s+'px',borderRadius:'50%',border:`3px solid ${i%2?'#ffd27a':'#9ee7ff'}`,opacity:0},L);const k=.3+i*.25;
    const at=(x,y)=>`translate(${800-(x-800)*k}px,${450-(y-450)*k}px)`;H.a(g,[{transform:at(150,120),opacity:.4},{transform:at(1450,780),opacity:.4}],{d:D,dl:st,e:'cubic-bezier(.45,0,.55,1)',f:'none'})}
  const W=H.abs({inset:'0',background:'#fff',opacity:0},root);H.a(W,[{opacity:0},{opacity:.85},{opacity:0}],{d:500,dl:st+250,e:E.soft});hide(H,A,st+D/2)}});

defT({no:'36',cat:'LIGHT',name:'VHS巻き戻し',en:'VHS Rewind',lead:'ビデオテープを巻き戻すように、ノイズと乱れの中で場面が変わる。',d:1100,
use:'<b>「時間を戻すと…」「〇年前」「回想」</b>に。平成レトロ・ビデオ世代のノスタルジーを演出できます。',
tips:['画面左上に「◀◀ REW」の文字を出すだけで、一気にビデオらしくなります','横の白いノイズの帯（トラッキングノイズ）が上へ流れるのがポイント','色を少しにじませて彩度を下げると、ビデオテープの質感に'],
p:`ビデオテープを巻き戻すように、ノイズと映像の乱れの中で場面が変わる「VHS巻き戻し」を作ってください。
・時間：1.1秒
・全体に、VHSらしい質感を重ねる：走査線（2px間隔の横線）、彩度0.7、赤と青の色にじみ（drop-shadow ±3px）
・0〜1.1秒：画面左上に白い文字「◀◀ REW」（Space Mono、48px、黒い影）を0.25秒ごとに点滅
・0〜0.55秒：シーンAを、0.04秒ごとに上下 ±30px・横方向に skewX ±8° でガタガタ揺らし、白いノイズの帯（高さ60〜140px、不透明度0.6のざらざら）を画面下から上へ速く流す
・0.55秒：Aを非表示にしてBを表示し、同じ揺れとノイズを0.55秒かけて弱めながら止める`,
tr(H,root,mk,st,D){const W=H.abs({inset:'0'},root);const B=mk(1,{},W),A=mk(0,{},W);B.style.visibility='hidden';W.style.filter='saturate(.7) drop-shadow(3px 0 0 rgba(255,0,64,.6)) drop-shadow(-3px 0 0 rgba(0,229,255,.6))';
  const sc=H.abs({inset:'0',background:'repeating-linear-gradient(rgba(0,0,0,.25) 0 1px,transparent 1px 3px)',opacity:0},root);const rew=H.abs({left:'60px',top:'110px',fontFamily:F.smono,fontSize:'48px',color:'#fff',textShadow:'3px 3px 0 #000',opacity:0},root,'◀◀ REW');
  const nz=H.abs({left:'0',right:'0',height:'120px',top:'900px',background:'repeating-linear-gradient(90deg,rgba(255,255,255,.7) 0 3px,rgba(255,255,255,.1) 3px 9px,rgba(255,255,255,.5) 9px 11px)',opacity:0},root);
  const N=27;for(let i=0;i<=N;i++)H.wait(st+i*40,()=>{const k=i<N/2?1:(N-i)/(N/2);if(i===Math.floor(N/2)){A.style.visibility='hidden';B.style.visibility='visible'}
    const el=i<N/2?A:B;el.style.transform=i===N?'none':`translateY(${rnd(-30,30)*k}px) skewX(${rnd(-8,8)*k}deg)`;sc.style.opacity=i===N?0:1;rew.style.opacity=i===N?0:(Math.floor(i/6)%2?0:1);nz.style.opacity=i===N?0:.6*k+.2;nz.style.top=(900-((i*90)%1100))+'px';nz.style.height=rnd(60,140)+'px';
    if(i===N)W.style.filter='none'})}});

defT({no:'37',cat:'LIGHT',name:'フリッカー',en:'Flicker Cut',lead:'古い蛍光灯のようにチカチカ明滅し、明滅の中で場面が入れ替わる。',d:800,
use:'<b>ホラー・ミステリー・不穏な空気</b>に。「何かが起きる」予感を作れるので、ドッキリや怪談の場面転換に。',
tips:['明滅の間隔は不規則に（0.03〜0.12秒）するのが不気味さのコツ','暗いコマを多めにすると怖く、明るいコマを多めにすると派手になります','最後の1回だけ長めに暗くしてからBを出すと、ためが生まれます'],
p:`古い蛍光灯のようにチカチカと不規則に明滅し、明滅の中で場面が入れ替わる「フリッカー」を作ってください。
・時間：約0.8秒
・0.03〜0.12秒のランダムな間隔で、画面の明るさを brightness 0.15（暗い）と 1.3（明るい）で交互に切り替える（フェードなし）
・前半はシーンA、後半はシーンBを表示。切り替わりの前後数コマは、AとBが交互に一瞬だけ映るようにする
・最後は0.15秒真っ暗にしてから、シーンBを brightness 1 で安定させる`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);B.style.visibility='hidden';let t=st,i=0;const seq=[];while(t<st+D-150){seq.push(t);t+=rnd(30,120)}
  seq.forEach((tm,j)=>H.wait(tm,()=>{const p=j/seq.length;const showB=p>.65||(p>.4&&Math.random()<.5);A.style.visibility=showB?'hidden':'visible';B.style.visibility=showB?'visible':'hidden';root.style.filter=`brightness(${j%2?1.3:.15})`}));
  H.wait(st+D-150,()=>{root.style.filter='brightness(0)';A.style.visibility='hidden';B.style.visibility='visible'});H.wait(st+D,()=>{root.style.filter='none'})}});

defT({no:'38',cat:'LIGHT',name:'アイリス',en:'Iris Out & In',lead:'丸い穴がすぼまって閉じ、また開くと次の場面。昔の映画の手法。',d:1200,
use:'<b>オチ・おしまい・レトロなコメディ</b>に。サイレント映画やアニメの「おしまい」の演出で、クスッと笑わせられます。',
tips:['閉じる中心を人物の顔に合わせると、「この人に注目」の演出になります','閉じきる直前（小さな丸）で0.2秒止めると、昔のアニメらしさが出ます','丸の代わりに星やハートの形にしても楽しい'],
p:`丸い穴がすぼまって画面が閉じ、また丸く開くと次の場面になっている「アイリスアウト＆イン」を作ってください。
・時間：1.2秒
・背景は黒（#000）
・0〜0.5秒：シーンAに clip-path: circle(75% at 50% 50%) → circle(6% at 50% 50%)（cubic-bezier(.65,0,.35,1)）
・0.5〜0.65秒：小さな丸のまま止める
・0.65〜0.75秒：丸を circle(0%) まで閉じて真っ暗に。この瞬間にAを非表示、Bを表示
・0.75〜1.2秒：シーンBに clip-path: circle(0% at 50% 50%) → circle(75% at 50% 50%)（cubic-bezier(.16,1,.3,1)）`,
tr(H,root,mk,st,D){const B=mk(1,{clipPath:'circle(0% at 50% 50%)'}),A=mk(0);H.a(A,[{clipPath:'circle(75% at 50% 50%)'},{clipPath:'circle(6% at 50% 50%)',offset:.67},{clipPath:'circle(6% at 50% 50%)',offset:.87},{clipPath:'circle(0% at 50% 50%)'}],{d:750,dl:st,e:'cubic-bezier(.65,0,.35,1)'});
  H.a(B,[{clipPath:'circle(0% at 50% 50%)'},{clipPath:'circle(75% at 50% 50%)'}],{d:450,dl:st+750});hide(H,A,st+750)}});

defT({no:'39',cat:'LIGHT',name:'グラデーションワイプ',en:'Soft Gradient Wipe',lead:'やわらかいグラデーションの境目が流れて、ふわっと次の場面に。',d:1000,
use:'<b>上品・ナチュラル・ビューティー系</b>に。くっきりしたワイプより柔らかいので、コスメ・カフェ・ウェディングに。',
tips:['境目のぼかし幅（30%）を広げるほど柔らかく、狭めるほどシャープに','斜め（120°）に流すと、自然光が差し込むような印象に','流れる方向を被写体の視線の方向に合わせると自然'],
p:`やわらかいグラデーションの境目が画面を流れていき、ふわっと次の場面に変わる「グラデーションワイプ」を作ってください。
・時間：1.0秒。イージング cubic-bezier(.65,0,.35,1)
・シーンBをAの上に重ね、mask-image: linear-gradient(120deg, #000 40%, transparent 70%) をかける（境目のぼかし幅30%）
・mask-size を 300% 100% にし、mask-position を 100% 0（Bが見えない）→ 0% 0（Bが全部見える）へ動かす
・境目が通るあたりに、白い光（不透明度0.25、ぼかし40px）を一緒に通過させる`,
tr(H,root,mk,st,D){const A=mk(0),B=mk(1,{WebkitMaskImage:'linear-gradient(120deg,#000 40%,transparent 70%)',maskImage:'linear-gradient(120deg,#000 40%,transparent 70%)',WebkitMaskSize:'300% 100%',maskSize:'300% 100%',WebkitMaskPosition:'100% 0',maskPosition:'100% 0'});
  H.raf(s=>{const k=Math.max(0,Math.min(1,(s*1000-st)/D));const e=k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;const pos=(100-100*e).toFixed(1)+'% 0';B.style.webkitMaskPosition=pos;B.style.maskPosition=pos;if(k>=1){B.style.webkitMaskImage=B.style.maskImage='none'}});
  const g=H.abs({left:'0',top:'-200px',width:'300px',height:'1300px',background:'#fff',opacity:.25,filter:'blur(40px)',transform:'rotate(30deg)'},root);H.a(g,[{left:'-500px'},{left:'1900px'}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)',f:'none'});g.style.left='-800px'}});

defT({no:'40',cat:'LIGHT',name:'ライトスイープ',en:'Light Sweep',lead:'まばゆい光の帯が斜めに走り抜け、通り過ぎた所から次の場面に。',d:800,
use:'<b>商品紹介・ロゴ・高級感</b>のある場面に。光沢が走るような切り替えで、プレミアムな印象を与えます。',
tips:['光の帯の芯は真っ白、外側は淡い色にすると、まぶしく見えます','帯の幅は画面の15%前後がきれい','帯が通ったあとのBに、少しだけ光の名残（明るさ1.2→1）を残すと上品'],
p:`まばゆい光の帯が斜めに走り抜け、光が通り過ぎた所から次の場面に変わっていく「ライトスイープ」を作ってください。
・時間：0.8秒。イージング cubic-bezier(.65,0,.35,1)
・光の帯：幅240px、高さは画面より大きく、rotate(20°)。中心が白 #FFFFFF、外側が #FFE9A8 → 透明 のグラデーション。box-shadow 0 0 80px #FFF
・帯を画面の左外から右外へ通過させる
・シーンBをAの上に重ね、clip-path: polygon で「帯が通過した左側」だけを見せる（帯と同じ速さ・同じ角度の斜めの境目）
・帯が通過したあとのBは brightness 1.25 → 1 へ0.4秒で戻す`,
tr(H,root,mk,st,D){const A=mk(0),B=mk(1,{clipPath:'polygon(-30% 0,-20% 0,-30% 100%,-40% 100%)'});const k=[{clipPath:'polygon(-30% 0,-15% 0,-31% 100%,-40% 100%)'},{clipPath:'polygon(-30% 0,130% 0,114% 100%,-40% 100%)'}];H.a(B,k,{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)'});
  H.a(B,[{filter:'brightness(1.25)'},{filter:'brightness(1)'}],{d:400,dl:st+D});
  const band=H.abs({left:'0',top:'-300px',width:'240px',height:'1500px',background:'linear-gradient(90deg,transparent,#ffe9a8 30%,#fff 50%,#ffe9a8 70%,transparent)',boxShadow:'0 0 80px #fff',transform:'rotate(20deg)'},root);
  H.a(band,[{left:'-480px'},{left:'1840px'}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)',f:'none'});band.style.left='-800px'}});
