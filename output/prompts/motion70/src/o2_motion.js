/* ===== OTHER MOTION 21-50 ===== */
const card=(H,w,h,css)=>H.abs(Object.assign({left:800-w/2+'px',top:450-h/2+'px',width:w+'px',height:h+'px',borderRadius:'36px',background:'#1f2c5c',display:'flex',alignItems:'center',justifyContent:'center'},css||{}));

/* ICON */
defO({no:'21',cat:'ICON',name:'いいねバースト',en:'Like Burst',lead:'押した瞬間にハートが弾けて、粒が飛び散る。',loop:2400,
use:'<b>いいね・お気に入り・フォロー</b>のリアクションに。押した気持ちよさが伝わり、つい押したくなるボタンになります。',
tips:['押した瞬間に一度小さくしてから大きくすると「押した感」が出ます','粒は6〜10個、ハートと同じ色＋補色で','数字のカウントアップを添えると、SNSらしさが増します'],
p:`ハートのボタンを押すと、ハートがポンと弾けて、まわりに小さな粒が飛び散る「いいねバースト」のアニメーションを作ってください。
・最初：白い線だけのハート（線幅8px、幅180px）
・0.4秒：押される → scale 1 → 0.7（0.1秒）→ コーラル #FF6B5A で塗りつぶされながら scale 1.25 → 1（0.4秒、cubic-bezier(.34,1.56,.64,1)）
・同時に：ハートの中心から、コーラルとピンクと黄の小さな丸を8個、放射状に飛ばして消す（0.6秒）。コーラルの線の輪（リング）も scale 0.5 → 1.6 で広げて消す
・ハートの右に数字「128」→「129」をカウントアップ（数字は下から押し上がる）
・1.8秒で元の線のハートに戻る
・尺：2.4秒でループ`,
run(H){lab(H,'いいねバースト','Like burst');const svg=H.svg(1600,900);const d='M700 520 C620 470 580 420 580 375 C580 335 610 310 645 310 C675 310 690 330 700 345 C710 330 725 310 755 310 C790 310 820 335 820 375 C820 420 780 470 700 520 Z';
  const ring=H.sv('circle',{cx:700,cy:410,r:120,fill:'none',stroke:CO,'stroke-width':8,opacity:0},svg);ring.style.transformOrigin='700px 410px';const h=H.sv('path',{d,fill:'transparent',stroke:'#fff','stroke-width':8},svg);h.style.transformOrigin='700px 410px';
  H.a(h,[{transform:'scale(1)',fill:'rgba(255,107,90,0)',stroke:'#fff'},{transform:'scale(1)',offset:.16},{transform:'scale(.7)',offset:.2},{transform:'scale(1.25)',fill:CO,stroke:CO,offset:.3},{transform:'scale(1)',fill:CO,stroke:CO,offset:.38},{transform:'scale(1)',fill:CO,stroke:CO,offset:.74},{transform:'scale(1)',fill:'rgba(255,107,90,0)',stroke:'#fff',offset:.8},{transform:'scale(1)',fill:'rgba(255,107,90,0)',stroke:'#fff'}],{d:2400,e:'ease-out'});
  H.a(ring,[{transform:'scale(.5)',opacity:.9},{transform:'scale(1.6)',opacity:0}],{d:600,dl:480,f:'none'});
  for(let i=0;i<8;i++){const a=i/8*Math.PI*2;const p=dot(H,700,410,12,[CO,PK,YE][i%3]);H.a(p,[{transform:'translate(0,0) scale(1)',opacity:0},{opacity:1,offset:.1},{transform:`translate(${Math.cos(a)*190}px,${Math.sin(a)*190}px) scale(.3)`,opacity:0}],{d:600,dl:480,f:'none'})}
  const nw=H.abs({left:'880px',top:'370px',height:'80px',overflow:'hidden',fontFamily:F.smono,fontSize:'70px',lineHeight:'80px',color:'#fff'});const col=H.el('div',{},nw);H.el('div',{},col,'128');H.el('div',{color:CO},col,'129');
  H.a(col,[{transform:'translateY(0)'},{transform:'translateY(0)',offset:.2},{transform:'translateY(-80px)',offset:.32},{transform:'translateY(-80px)',offset:.74},{transform:'translateY(0)',offset:.8},{transform:'translateY(0)'}],{d:2400,e:E.out})}});

defO({no:'22',cat:'ICON',name:'チェックマーク',en:'Check Draw',lead:'円が描かれ、その中にチェックがシュッと引かれる。完了の合図。',loop:2400,
use:'<b>完了・送信成功・予約完了・タスク達成</b>の表示に。「終わった！」という安心感を、気持ちよく伝えられます。',
tips:['円を描き終わってからチェックを描く「2段階」が気持ちよさの秘訣','チェックの描画はやや速く（0.3秒）','最後に軽く弾ませると達成感が出ます'],
p:`円が描かれて、その中にチェックマークがシュッと引かれる「チェックマーク描画」のアニメーションを作ってください。
・円：直径300px、線幅14px、ティール #2EC4B6。SVG の stroke-dashoffset で 0.0〜0.5秒に描く（12時の位置から時計回り）
・チェック：白、線幅18px、線端は丸く。0.5〜0.8秒に左下から右上へ描く
・描き終わったら、円の中をティールで塗りつぶし（不透明度 0 → 1、0.3秒）、全体を scale 1 → 1.08 → 1 で弾ませる
・下に「完了しました」の文字を下からフェードイン
・尺：2.4秒でループ`,
run(H){lab(H,'チェックマーク','Check draw');const svg=H.svg(1600,900);const g=H.sv('g',{},svg);g.style.transformOrigin='800px 400px';const fillc=H.sv('circle',{cx:800,cy:400,r:150,fill:TE,opacity:0},g);
  const c=H.sv('circle',{cx:800,cy:400,r:150,fill:'none',stroke:TE,'stroke-width':14,'stroke-dasharray':943,'stroke-dashoffset':943,transform:'rotate(-90 800 400)'},g);const ck=H.sv('path',{d:'M730 405 L785 460 L880 350',fill:'none',stroke:'#fff','stroke-width':18,'stroke-linecap':'round','stroke-linejoin':'round','stroke-dasharray':230,'stroke-dashoffset':230},g);
  H.a(c,[{strokeDashoffset:943},{strokeDashoffset:0}],{d:500,e:'ease-in-out'});H.a(ck,[{strokeDashoffset:230},{strokeDashoffset:0}],{d:300,dl:500,e:E.out});H.a(fillc,[{opacity:0},{opacity:1}],{d:300,dl:800});H.a(g,[{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{d:350,dl:800,f:'none'});
  const t=H.abs({left:'0',right:'0',top:'610px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'48px',color:'#fff'},null,'完了しました');H.a(t,[{opacity:0,transform:'translateY(20px)'},{opacity:1,transform:'translateY(0)'}],{d:400,dl:900})}});

defO({no:'23',cat:'ICON',name:'ローディング',en:'Loading Dots',lead:'3つの点がぴょこぴょこ跳ね、輪がくるくる回る「読み込み中」。',loop:2400,
use:'<b>読み込み・送信中・考え中</b>の表示に。待ち時間のイライラを、かわいい動きで和らげます。',
tips:['3つの点は0.15秒ずつ遅らせると波に見えます','回転は等速（linear）がローディングの基本','色を変えるだけで、ブランドに合わせたローディングになります'],
p:`「読み込み中」を表す、3つの点が順番に跳ねるドットと、くるくる回る輪のアニメーションを作ってください。
・左：3つの点（直径40px、コーラル・黄・ティール）が横に並び、0.15秒ずつ遅れて translateY 0 → −50px → 0 で跳ねる（0.6秒周期、ease-in-out）。上がった点は少し大きく
・右：輪のスピナー（直径160px、線幅16px）。ピンクの円弧（円周の1/4）が1秒で1回転（linear）しながら、円弧の長さが 1/4 ⇄ 3/4 に伸び縮みする
・下に「読み込み中」の文字と、「.」「..」「...」がくり返し増える表示
・尺：2.4秒でループ`,
run(H){lab(H,'ローディング','Loading');[CO,YE,TE].forEach((c,i)=>{const d=dot(H,420+i*90,420,20,c);H.a(d,[{transform:'translateY(0) scale(1)'},{transform:'translateY(-50px) scale(1.2)'},{transform:'translateY(0) scale(1)'}],{d:600,dl:i*150,e:'ease-in-out',i:Infinity})});
  const svg=H.svg(1600,900);H.sv('circle',{cx:1060,cy:420,r:80,fill:'none',stroke:'rgba(255,255,255,.12)','stroke-width':16},svg);const a=H.sv('circle',{cx:1060,cy:420,r:80,fill:'none',stroke:PK,'stroke-width':16,'stroke-linecap':'round','stroke-dasharray':'126 377'},svg);a.style.transformOrigin='1060px 420px';
  H.a(a,[{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{d:1000,e:E.lin,i:Infinity});H.a(a,[{strokeDasharray:'126 377'},{strokeDasharray:'377 126'},{strokeDasharray:'126 377'}],{d:1600,e:'ease-in-out',i:Infinity});
  const t=H.abs({left:'0',right:'0',top:'600px',textAlign:'center',fontFamily:F.sans,fontWeight:'700',fontSize:'40px',color:'#fff'},null,'読み込み中');let k=-1;H.raf(s=>{const q=Math.floor(s/.4)%4;if(q!==k){k=q;t.textContent='読み込み中'+'.'.repeat(q)}})}});

defO({no:'24',cat:'ICON',name:'ダウンロード',en:'Download Progress',lead:'矢印が沈んで、バーが満ちて、チェックに変わる。',loop:3600,
use:'<b>ダウンロード・アップロード・インストール</b>の表示に。進み具合と完了が、文字なしでも伝わります。',
tips:['矢印が「下に押し込まれる」動きで始めると、押した感が出ます','バーの進みは一定ではなく、途中で少し止まるとリアル','完了でボタンの色ごと変えると、はっきり伝わります'],
p:`ボタンの中の矢印が下に沈み、進捗バーが 0% から 100% まで満ちて、最後にチェックマークに変わる「ダウンロード」のアニメーションを作ってください。
・ボタン：幅520px×高さ140px、角丸70px、背景 #24356E。左に白い下向き矢印、右に「ダウンロード」の文字
・0.2秒：矢印が下へ20px沈んで戻る（押した感じ）
・0.4〜2.6秒：ボタンの中で、左からティール #2EC4B6 のバーが満ちていく。途中（40%・75%）で少し止まりながら進む。文字は「42%」のように数字に変わる
・2.6秒：100%になったら、ボタン全体がティールになり、矢印がチェックマークに変わって文字が「完了」になる。ボタンを scale 1.05 → 1 で弾ませる
・尺：3.6秒でループ`,
run(H){lab(H,'ダウンロード','Download');const b=card(H,520,140,{borderRadius:'70px',background:'#24356e',overflow:'hidden',justifyContent:'flex-start',gap:'24px',padding:'0 48px'});const bar=H.abs({left:'0',top:'0',bottom:'0',width:'100%',background:TE,transformOrigin:'0 50%',transform:'scaleX(0)'},b);
  const ic=H.el('div',{position:'relative',fontSize:'64px',color:'#fff',width:'60px',textAlign:'center'},b,'↓');const tx=H.el('div',{position:'relative',fontFamily:F.sans,fontWeight:'700',fontSize:'44px',color:'#fff'},b,'ダウンロード');
  H.a(ic,[{transform:'translateY(0)'},{transform:'translateY(20px)'},{transform:'translateY(0)'}],{d:300,dl:200,f:'none'});H.a(bar,[{transform:'scaleX(0)'},{transform:'scaleX(.4)',offset:.35},{transform:'scaleX(.42)',offset:.45},{transform:'scaleX(.75)',offset:.7},{transform:'scaleX(.76)',offset:.78},{transform:'scaleX(1)'}],{d:2200,dl:400,e:'ease-in-out'});
  H.raf(s=>{const m=s*1000;if(m<400)return;if(m<2600){const p=bar.getAnimations()[0];const ct=p&&p.effect.getComputedTiming().progress;const v=Math.round(Number(getComputedStyle(bar).transform.split(',')[0].replace('matrix(',''))*100)||0;tx.textContent=v+'%'}else if(tx.textContent!=='完了'){tx.textContent='完了';ic.textContent='✓';H.a(b,[{transform:'scale(1)'},{transform:'scale(1.05)'},{transform:'scale(1)'}],{d:300,f:'none'})}})}});

defO({no:'25',cat:'ICON',name:'封筒が開く',en:'Envelope Open',lead:'封筒のふたが開いて、中から手紙がひょこっと出てくる。',loop:3000,
use:'<b>メール・お知らせ・招待状・ニュースレター登録</b>に。「お手紙が届いた」わくわく感を演出できます。',
tips:['ふたは上端を軸に、3Dで回転させる（rotateX）と立体感が出ます','手紙はふたが開ききってから出すのが自然','ハートや星のシールを付けると、招待状らしくなります'],
p:`封筒のふたがパカッと開いて、中から手紙がひょこっと出てくる「封筒が開く」アニメーションを作ってください。
・封筒：幅420px×高さ270px、本体はコーラル #FF6B5A、前面の三角形の折り返しは少し暗いコーラル
・ふた：本体の上端にある三角形。transform-origin は上端、0.3〜0.8秒で rotateX 0 → 180°（perspective: 800px）。開いたら本体の後ろに回す
・手紙：白い紙（幅360px）に、灰色の線を3本（文字の代わり）と黄 #FFC93C のハート。0.8〜1.3秒に封筒から上へ160px出てくる（cubic-bezier(.34,1.56,.64,1)）
・ふたの中央に黄色い丸いシール。開くときに外れて落ちる
・2.4秒から逆の順番で閉じる
・尺：3秒でループ`,
run(H){lab(H,'封筒が開く','Envelope');const P=H.abs({left:'590px',top:'360px',width:'420px',height:'270px',perspective:'800px'});
  const back=H.abs({inset:'0',background:'#c94c3f',borderRadius:'8px'},P);const letter=H.abs({left:'30px',top:'20px',width:'360px',height:'230px',background:'#fff',borderRadius:'6px',padding:'30px',boxSizing:'border-box'},P);[0,1,2].forEach(i=>H.el('div',{height:'12px',borderRadius:'6px',background:'#d5d9e6',margin:'0 0 18px',width:[80,100,60][i]+'%'},letter));H.abs({right:'30px',bottom:'24px',fontSize:'44px',color:YE},letter,'♥');
  const front=H.abs({inset:'0',clipPath:'polygon(0 30%,50% 65%,100% 30%,100% 100%,0 100%)',background:CO,borderRadius:'8px'},P);const flap=H.abs({left:'0',top:'0',width:'420px',height:'170px',clipPath:'polygon(0 0,100% 0,50% 100%)',background:'#e85a4c',transformOrigin:'50% 0',zIndex:'3'},P);
  const seal=dot(H,210,150,22,YE,P,{zIndex:'4'});
  H.a(flap,[{transform:'rotateX(0)'},{transform:'rotateX(0)',offset:.1},{transform:'rotateX(180deg)',offset:.27},{transform:'rotateX(180deg)',offset:.8},{transform:'rotateX(0)',offset:.97},{transform:'rotateX(0)'}],{d:3000,e:'ease-in-out'});H.wait(500,()=>{flap.style.zIndex='0'});H.wait(2700,()=>{flap.style.zIndex='3'});
  H.a(seal,[{transform:'translateY(0)',opacity:1},{transform:'translateY(0)',opacity:1,offset:.1},{transform:'translateY(300px) rotate(90deg)',opacity:0,offset:.3},{opacity:0,offset:.96},{transform:'translateY(0)',opacity:1}],{d:3000,e:'ease-in'});
  H.a(letter,[{transform:'translateY(0)'},{transform:'translateY(0)',offset:.27},{transform:'translateY(-160px)',offset:.43},{transform:'translateY(-160px)',offset:.8},{transform:'translateY(0)',offset:.9},{transform:'translateY(0)'}],{d:3000,e:E.back})}});

defO({no:'26',cat:'ICON',name:'再生⇄一時停止',en:'Play / Pause Morph',lead:'三角の再生ボタンが、2本線の一時停止になめらかに変形する。',loop:2400,
use:'<b>動画・音楽プレイヤー・ポッドキャスト</b>のボタンに。形が切り替わるだけでなく「つながって変わる」ので、操作が気持ちよくなります。',
tips:['三角形を2つの台形に分けておくと、2本線にきれいに変形できます','変形中に90°回転させると、ダイナミックな切り替えに','押した瞬間に丸い波紋を出すと、触った感が出ます'],
p:`再生ボタン（三角）と一時停止ボタン（2本線）が、なめらかに変形しながら切り替わる「再生⇄一時停止」のアニメーションを作ってください。
・ボタン：直径260pxの円、背景コーラル #FF6B5A
・アイコン：白。三角形を左右2つの台形に分けて作り、それぞれを clip-path: polygon() で、三角の半分 ⇄ 縦長の長方形 に変形させる
・0.0〜1.0秒：再生（三角）を表示 → 1.0〜1.3秒で一時停止（2本線）へ変形（cubic-bezier(.65,0,.35,1)）。変形中にボタンが scale 0.92 → 1
・2.2〜2.5秒：一時停止から再生へ戻る
・切り替わる瞬間に、ボタンから白い波紋（リング）を広げる
・ボタンの下に、再生中だけ動く音のバー（4本、ティール）
・尺：2.4秒でループ`,
run(H){lab(H,'再生⇄一時停止','Play / pause');const b=dot(H,800,400,130,CO);const L=H.abs({left:'85px',top:'75px',width:'50px',height:'110px',background:'#fff'},b),R=H.abs({left:'135px',top:'75px',width:'50px',height:'110px',background:'#fff'},b);
  const play=[['polygon(20% 0,100% 25%,100% 75%,20% 100%)','polygon(0 25%,100% 50%,100% 50%,0 75%)']],pause=['polygon(0 0,60% 0,60% 100%,0 100%)','polygon(40% 0,100% 0,100% 100%,40% 100%)'];
  const kf=(a,b)=>[{clipPath:a,offset:0},{clipPath:a,offset:.42},{clipPath:b,offset:.54},{clipPath:b,offset:.92},{clipPath:a,offset:1}];H.a(L,kf(play[0][0],pause[0]),{d:2400,e:'cubic-bezier(.65,0,.35,1)'});H.a(R,kf(play[0][1],pause[1]),{d:2400,e:'cubic-bezier(.65,0,.35,1)'});
  H.a(b,[{transform:'scale(1)'},{transform:'scale(1)',offset:.42},{transform:'scale(.92)',offset:.48},{transform:'scale(1)',offset:.54},{transform:'scale(1)'}],{d:2400});const r=dot(H,800,400,130,'transparent',null,{border:'6px solid #fff',boxSizing:'border-box'});H.a(r,[{transform:'scale(1)',opacity:0},{transform:'scale(1)',opacity:.8,offset:.42},{transform:'scale(1.5)',opacity:0,offset:.62},{opacity:0}],{d:2400});
  for(let i=0;i<4;i++){const v=H.abs({left:720+i*45+'px',top:'600px',width:'26px',height:'80px',borderRadius:'13px',background:TE,transformOrigin:'50% 100%'});H.a(v,[{transform:'scaleY(.3)'},{transform:'scaleY(1)'},{transform:'scaleY(.3)'}],{d:500,dl:-i*130,i:Infinity})}}});

defO({no:'27',cat:'ICON',name:'メニュー⇄閉じる',en:'Hamburger to Close',lead:'3本線のメニューが、くるっと×に変わる。',loop:2400,
use:'<b>スマホサイトのメニュー・アプリのナビゲーション</b>に。開く・閉じるの状態を、動きで直感的に伝えられます。',
tips:['真ん中の線は横に縮めて消し、上下の線を45°回転させて×にします','線の端を丸くすると、やわらかい印象に','メニューが開く動きと同時に変形させると一体感が出ます'],
p:`3本線のメニューアイコン（ハンバーガー）が、くるっと回転しながら「×」の閉じるアイコンに変わり、また戻る「メニュー⇄閉じる」のアニメーションを作ってください。
・アイコン：幅220px、白い線3本（太さ24px、角丸12px、間隔60px）
・0.8秒：メニュー → ×
　・真ん中の線：scaleX 1 → 0 で消える（0.2秒）
　・上の線：下へ60px移動して 45° 回転
　・下の線：上へ60px移動して −45° 回転
　・全体を 180° 回転させながら変形（0.5秒、cubic-bezier(.65,0,.35,1)）
・同時に、画面右からメニューのパネル（黄 #FFC93C、項目の線3本）がスライドインする
・2.0秒：逆の動きで元に戻る
・尺：2.4秒でループ`,
run(H){lab(H,'メニュー⇄閉じる','Hamburger');const panel=H.abs({right:'0',top:'0',bottom:'0',width:'520px',background:YE,transform:'translateX(100%)',padding:'200px 70px',boxSizing:'border-box'});[0,1,2].forEach(i=>H.el('div',{height:'26px',borderRadius:'13px',background:NV,margin:'0 0 50px',width:[90,70,80][i]+'%'},panel));
  const G=H.abs({left:'690px',top:'360px',width:'220px',height:'180px'});const ln=[0,1,2].map(i=>H.abs({left:'0',top:i*78+'px',width:'220px',height:'24px',borderRadius:'12px',background:'#fff'},G));
  const t=(a,b)=>[{transform:a,offset:0},{transform:a,offset:.33},{transform:b,offset:.54},{transform:b,offset:.83},{transform:a,offset:1}];const e='cubic-bezier(.65,0,.35,1)';
  H.a(G,t('rotate(0)','rotate(180deg)'),{d:2400,e});H.a(ln[0],t('translateY(0) rotate(0)','translateY(78px) rotate(45deg)'),{d:2400,e});H.a(ln[2],t('translateY(0) rotate(0)','translateY(-78px) rotate(-45deg)'),{d:2400,e});H.a(ln[1],t('scaleX(1)','scaleX(0)'),{d:2400,e});H.a(panel,t('translateX(100%)','translateX(0)'),{d:2400,e})}});

defO({no:'28',cat:'ICON',name:'星の評価',en:'Star Rating',lead:'5つの星が左から順にキラッと埋まっていく。',loop:3000,
use:'<b>レビュー紹介・満足度・ランキング</b>に。数字よりも直感的に「評価が高い」ことが伝わります。',
tips:['星は0.15秒ずつ遅らせて、1つずつ弾ませると気持ちいい','最後の星だけ半分にすると「4.5」なども表現できます','星が埋まるたびに小さな光の粒を出すと華やか'],
p:`5つの星が左から順番に、キラッと弾みながら黄色に埋まっていく「星の評価」のアニメーションを作ってください。
・星：5つを横に並べる（1つの幅140px、間隔30px）。最初は白い線だけ（線幅6px、不透明度0.4）
・0.3秒から：0.18秒おきに1つずつ、黄 #FFC93C で塗りつぶし、scale 0.6 → 1.3 → 1（0.4秒、cubic-bezier(.34,1.56,.64,1)）で弾ませる
・5つ目の星は左半分だけ塗る（評価4.5）
・星が埋まるたびに、まわりに白い小さな光の粒を4つ散らす
・星の下に「4.5」の大きな数字をカウントアップ（0.0 → 4.5）し、「レビュー 1,280件」を小さく添える
・尺：3秒でループ`,
run(H){lab(H,'星の評価','Star rating');const svg=H.svg(1600,900);let sp='';for(let k=0;k<11;k++){const a=-Math.PI/2+k*Math.PI/5,r=k%2?28:70;sp+=(k?'L':'M')+(r*Math.cos(a)).toFixed(1)+' '+(r*Math.sin(a)).toFixed(1)}
  const defs=H.sv('defs',{},svg);const cp=H.sv('clipPath',{id:'halfc'},defs);H.sv('rect',{x:-80,y:-80,width:80,height:160},cp);
  for(let i=0;i<5;i++){const x=450+i*170,y=380;H.sv('path',{d:sp,transform:`translate(${x} ${y})`,fill:'none',stroke:'rgba(255,255,255,.4)','stroke-width':6,'stroke-linejoin':'round'},svg);const g=H.sv('g',{transform:`translate(${x} ${y})`},svg);const f=H.sv('path',{d:sp,fill:YE,'clip-path':i===4?'url(#halfc)':''},g);
    f.style.transformOrigin='0 0';H.a(f,[{transform:'scale(0)'},{transform:'scale(1.3)',offset:.6},{transform:'scale(1)'}],{d:400,dl:300+i*180,e:E.back});
    for(let k=0;k<4;k++){const a=k/4*Math.PI*2+.6;const p=dot(H,x,y,6,'#fff');H.a(p,[{transform:'translate(0,0)',opacity:0},{opacity:1,offset:.2},{transform:`translate(${Math.cos(a)*100}px,${Math.sin(a)*100}px)`,opacity:0}],{d:500,dl:450+i*180,f:'none'})}}
  const n=H.abs({left:'0',right:'0',top:'500px',textAlign:'center',fontFamily:F.smono,fontSize:'110px',color:'#fff'},null,'0.0');H.abs({left:'0',right:'0',top:'640px',textAlign:'center',fontFamily:F.sans,fontSize:'30px',color:'rgba(255,255,255,.6)'},null,'レビュー 1,280件');
  H.raf(s=>{const k=Math.min(1,Math.max(0,(s-.3)/1.1));n.textContent=(4.5*(1-Math.pow(1-k,3))).toFixed(1)})}});

defO({no:'29',cat:'ICON',name:'天気アイコン',en:'Weather Icons',lead:'太陽が回り、雲が流れ、雨がしとしと降る。3つの天気。',loop:4000,
use:'<b>天気予報・お出かけ情報・季節の話題</b>に。止まったアイコンより、ずっと「その日の空気」が伝わります。',
tips:['太陽は光の線だけ回すと、ゆったりした晴れの日に','雲は左右にゆっくり漂わせ、雨粒は等速で落とすのが自然','雷を入れたいときは、0.1秒だけ画面を白く光らせます'],
p:`「晴れ」「くもり」「雨」の3つの天気アイコンが、それぞれ動き続けるアニメーションを作ってください。
・3つを横に並べ、それぞれ丸みのある四角いカード（背景 #1F2C5C）に入れる。下に「晴れ」「くもり」「雨」のラベル
・晴れ：黄 #FFC93C の太陽。中心の円は2秒周期で軽く脈打ち、まわりの8本の光の線は10秒で1回転
・くもり：白い雲が2つ、前後に重なって左右に違う速さで漂う（4秒周期）
・雨：白い雲の下から、水色の雨粒（細長い楕円）が等速で斜めに落ち続ける（0.8秒で落ちきる、12粒を時間差で）
・尺：4秒でループ`,
run(H){lab(H,'天気アイコン','Weather');[['晴れ',300],['くもり',800],['雨',1300]].forEach(([n,x])=>{H.abs({left:x-200+'px',top:'170px',width:'400px',height:'480px',borderRadius:'36px',background:'#1f2c5c'});H.abs({left:x-200+'px',width:'400px',top:'570px',textAlign:'center',fontFamily:F.sans,fontWeight:'700',fontSize:'36px',color:'#fff'},null,n)});
  const sun=dot(H,300,380,70,YE);H.a(sun,[{scale:1},{scale:1.08},{scale:1}],{d:2000,i:Infinity});const rays=H.abs({left:'300px',top:'380px'});for(let i=0;i<8;i++)H.abs({left:'-8px',top:'-150px',width:'16px',height:'44px',borderRadius:'8px',background:YE,transformOrigin:'8px 150px',transform:`rotate(${i*45}deg)`},rays);H.a(rays,[{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{d:10000,e:E.lin,i:Infinity});
  const cloud=(x,y,s,c,p)=>{const g=H.abs({left:x+'px',top:y+'px',transform:`scale(${s})`},p);[[0,30,50],[45,0,65],[100,30,50]].forEach(([dx,dy,r])=>dot(H,dx,dy+20,r,c,g));H.abs({left:'-50px',top:'50px',width:'200px',height:'50px',borderRadius:'25px',background:c},g);return g};
  const c1=cloud(760,330,1,'#cfd8f0'),c2=cloud(700,380,1.1,'#fff');H.a(c1,[{translate:'-20px 0'},{translate:'30px 0'},{translate:'-20px 0'}],{d:4000,e:'ease-in-out',i:Infinity});H.a(c2,[{translate:'20px 0'},{translate:'-30px 0'},{translate:'20px 0'}],{d:4000,e:'ease-in-out',i:Infinity});
  cloud(1250,300,1,'#fff');for(let i=0;i<12;i++){const d=H.abs({left:1230+(i%4)*40+'px',top:'420px',width:'8px',height:'34px',borderRadius:'4px',background:'#7fd3ff',opacity:0});H.a(d,[{transform:'translate(0,0) rotate(15deg)',opacity:1},{transform:'translate(-30px,140px) rotate(15deg)',opacity:0}],{d:800,dl:-i*200,e:E.lin,i:Infinity})}}});

defO({no:'30',cat:'ICON',name:'トグルスイッチ',en:'Toggle Switch',lead:'つまみがプルンと移動して、ON／OFFと背景色が切り替わる。',loop:2400,
use:'<b>設定画面・ダークモード切替・機能のON/OFF</b>の説明に。小さな動きで「切り替わった」ことが確実に伝わります。',
tips:['つまみは移動中だけ横に伸ばすと、ゼリーのような弾力が出ます','ONで色、OFFで灰色にして、状態をはっきり区別','昼夜の切替なら、つまみの中で太陽⇄月を変えると楽しい'],
p:`つまみがプルンと伸びながら移動して、ON／OFFが切り替わる「トグルスイッチ」のアニメーションを作ってください。
・スイッチ：幅440px×高さ220px、角丸110px。OFFは灰色 #3A466E、ONはティール #2EC4B6
・つまみ：直径170pxの白い円。OFFで左、ONで右
・切り替え（0.4秒、cubic-bezier(.65,0,.35,1)）：つまみが移動中だけ幅を 1.4倍に伸ばし、到着で 1 に戻る（ゼリーのような弾力）
・つまみの中のアイコン：OFFは月（灰色）、ONは太陽（黄 #FFC93C）。切り替えで回転しながら入れ替わる
・画面全体の背景も、OFFは暗い紺、ONは少し明るい紺に変わる
・スイッチの下に「OFF」「ON」の文字を切り替え表示
・0.6秒でON、1.8秒でOFFに戻る
・尺：2.4秒でループ`,
run(H){lab(H,'トグルスイッチ','Toggle');const bg=H.abs({inset:'0',background:'#0d1533'});const sw=H.abs({left:'580px',top:'290px',width:'440px',height:'220px',borderRadius:'110px',background:'#3a466e'});const kn=H.abs({left:'25px',top:'25px',width:'170px',height:'170px',borderRadius:'85px',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'80px'},sw);const ic=H.el('span',{color:'#8a93b5'},kn,'☾');
  const t=H.abs({left:'0',right:'0',top:'560px',textAlign:'center',fontFamily:F.smono,fontSize:'60px',color:'#fff'},null,'OFF');const e='cubic-bezier(.65,0,.35,1)';const T=(a,b)=>[{...a,offset:0},{...a,offset:.25},{...b,offset:.42},{...b,offset:.75},{...a,offset:.92},{...a,offset:1}];
  H.a(sw,T({background:'#3a466e'},{background:TE}),{d:2400,e});H.a(bg,T({background:'#0d1533'},{background:'#22336e'}),{d:2400,e});
  H.a(kn,[{transform:'translateX(0)',width:'170px',offset:0},{transform:'translateX(0)',width:'170px',offset:.25},{transform:'translateX(80px)',width:'230px',offset:.33},{transform:'translateX(220px)',width:'170px',offset:.42},{transform:'translateX(220px)',width:'170px',offset:.75},{transform:'translateX(140px)',width:'230px',offset:.83},{transform:'translateX(0)',width:'170px',offset:.92},{transform:'translateX(0)',width:'170px',offset:1}],{d:2400,e:E.lin});
  H.wait(900,()=>{ic.textContent='☀';ic.style.color=YE;t.textContent='ON';H.a(ic,[{transform:'rotate(-180deg) scale(.5)'},{transform:'rotate(0) scale(1)'}],{d:300})});H.wait(2100,()=>{ic.textContent='☾';ic.style.color='#8a93b5';t.textContent='OFF';H.a(ic,[{transform:'rotate(180deg) scale(.5)'},{transform:'rotate(0) scale(1)'}],{d:300})})}});

/* SCENE */
defO({no:'31',cat:'SCENE',name:'分解図',en:'Exploded View',lead:'スマホが層ごとにふわっと分かれて、中身の名前が現れる。',loop:4200,
use:'<b>製品紹介・仕組みの解説・構造の説明</b>に。「中はこうなっている」を、一目で分かりやすく見せられます。',
tips:['斜め上から見た角度（アイソメトリック）にすると立体感が出ます','層の間隔を広げる時間差で、1枚ずつ分かれる様子が見えます','ラベルは線でつないで、層の横に並べると図解らしくなります'],
p:`斜め上から見たスマートフォンが、層ごとにふわっと上下に分かれて、それぞれの部品の名前が現れる「分解図（エクスプロードビュー）」のアニメーションを作ってください。
・スマホ：アイソメトリック（rotateX 55°・rotateZ −45°）で見た、角丸の板を4枚重ねたもの。上から「画面（青 #4D96FF）」「基板（ティール #2EC4B6）」「電池（黄 #FFC93C）」「背面（コーラル #FF6B5A）」
・0.0〜0.5秒：重なった1台のスマホとして表示
・0.6〜1.6秒：層が上下に分かれる（各層の間隔 90px、上の層から0.1秒ずつ遅らせる、cubic-bezier(.16,1,.3,1)）
・分かれたら、各層の右に白い線を引き、その先に名前のラベル（Noto Sans JP 700）を出す
・3.2秒から元の1台に戻る
・尺：4.2秒でループ`,
run(H){lab(H,'分解図','Exploded view');const W=H.abs({left:'560px',top:'200px',width:'400px',height:'500px',perspective:'2000px'});const S=H.abs({inset:'0',transformStyle:'preserve-3d',transform:'rotateX(55deg) rotateZ(-45deg)'},W);
  const L=[['画面',BL],['基板',TE],['電池',YE],['背面',CO]];L.forEach(([n,c],i)=>{const p=H.abs({left:'60px',top:'40px',width:'280px',height:'440px',borderRadius:'40px',background:c,boxShadow:'0 0 0 6px rgba(0,0,0,.15) inset',transform:`translateZ(${-i*14}px)`},S);
    if(i===1)for(let k=0;k<6;k++)H.abs({left:30+(k%2)*120+'px',top:40+Math.floor(k/2)*120+'px',width:'90px',height:'60px',borderRadius:'8px',background:'rgba(0,0,0,.2)'},p);
    H.a(p,[{transform:`translateZ(${-i*14}px)`},{transform:`translateZ(${-i*14}px)`,offset:.14},{transform:`translateZ(${(1.5-i)*170}px)`,offset:.4},{transform:`translateZ(${(1.5-i)*170}px)`,offset:.76},{transform:`translateZ(${-i*14}px)`,offset:.92},{transform:`translateZ(${-i*14}px)`}],{d:4200,dl:i*60,e:E.out});
    const y=230+i*130;const ln=H.abs({left:'960px',top:y+'px',width:'160px',height:'3px',background:'#fff',transformOrigin:'0 50%'});const t=H.abs({left:'1140px',top:y-26+'px',fontFamily:F.sans,fontWeight:'700',fontSize:'40px',color:c},null,n);
    [ln,t].forEach((e,j)=>H.a(e,[{opacity:0,transform:j?'translateX(-20px)':'scaleX(0)'},{opacity:0,offset:.38},{opacity:1,transform:j?'translateX(0)':'scaleX(1)',offset:.46},{opacity:1,offset:.74},{opacity:0,offset:.8},{opacity:0}],{d:4200,dl:i*80}))})}});

defO({no:'32',cat:'SCENE',name:'昼から夜へ',en:'Day to Night',lead:'太陽が沈み、月が昇り、空の色がゆっくり変わっていく。',loop:6000,
use:'<b>1日の流れ・時間の経過・ルーティン紹介</b>に。「朝から夜まで」を、数秒で美しく表現できます。',
tips:['空の色は「水色→オレンジ→紫→紺」の4段階で変えると自然','山を手前・奥の2層にすると、奥行きが出ます','夜になったら星を時間差で瞬かせると、ぐっと情緒的に'],
p:`太陽が山の向こうへ沈み、月が昇って星が瞬き、空の色が昼から夜へゆっくり変わっていく「昼から夜へ」のアニメーションを作ってください。
・手前に山を2層（奥：くすんだ紺、手前：濃い紺）、SVGで描く
・空：上から下へのグラデーション。0秒＝水色、1.5秒＝オレンジとピンクの夕焼け、3秒＝紫、4秒＝紺の夜
・太陽：黄 #FFC93C の円が、画面上部から山の向こうへ弧を描いて沈む（0〜2.5秒）
・月：白い三日月が、2.5秒から反対側の山から昇る
・星：3.5秒から、白い小さな点を40個、時間差で瞬かせる
・5.2秒から全体を昼に戻す
・尺：6秒でループ`,
run(H){lab(H,'昼から夜へ','Day to night');const sky=H.abs({inset:'0'});H.a(sky,[{background:'linear-gradient(#7ec8ff,#cdeeff)'},{background:'linear-gradient(#ff8a5c,#ffc99a)',offset:.25},{background:'linear-gradient(#5b3b8c,#c06c9a)',offset:.5},{background:'linear-gradient(#0d1533,#22336e)',offset:.7},{background:'linear-gradient(#0d1533,#22336e)',offset:.86},{background:'linear-gradient(#7ec8ff,#cdeeff)'}],{d:6000,e:'ease-in-out'});
  const sun=dot(H,0,0,70,YE,null,{boxShadow:'0 0 60px '+YE});H.a(sun,[{transform:'translate(400px,150px)'},{transform:'translate(700px,420px)',offset:.42},{transform:'translate(700px,700px)',offset:.5},{transform:'translate(700px,700px)',offset:.86},{transform:'translate(400px,150px)'}],{d:6000,e:'ease-in'});
  const moon=H.abs({left:'0',top:'0',width:'110px',height:'110px',borderRadius:'50%',boxShadow:'-26px 10px 0 0 #fff'});H.a(moon,[{transform:'translate(1250px,800px)'},{transform:'translate(1250px,800px)',offset:.42},{transform:'translate(1100px,170px)',offset:.7},{transform:'translate(1100px,170px)',offset:.86},{transform:'translate(1250px,800px)'}],{d:6000,e:E.out});
  for(let i=0;i<40;i++){const s=dot(H,rnd(40,1560),rnd(30,420),rnd(2,4),'#fff');H.a(s,[{opacity:0},{opacity:0,offset:.58},{opacity:1,offset:.66},{opacity:.3,offset:.75},{opacity:1,offset:.82},{opacity:0,offset:.88},{opacity:0}],{d:6000,dl:rnd(0,500)})}
  const svg=H.svg(1600,900);H.sv('path',{d:'M0 620 L250 420 L480 600 L760 360 L1080 620 L1320 450 L1600 600 V900 H0Z',fill:'#2c3a6e'},svg);H.sv('path',{d:'M0 760 L320 560 L620 740 L930 540 L1250 760 L1600 620 V900 H0Z',fill:'#18234a'},svg)}});

defO({no:'33',cat:'SCENE',name:'海と船',en:'Sea & Sailboat',lead:'重なった波がゆらゆら揺れ、小さなヨットが波に乗って進む。',loop:6000,
use:'<b>旅行・夏・リゾート・のんびりした雰囲気</b>の動画に。波のゆらぎは、見ているだけで癒やされるループになります。',
tips:['波は3層にして、奥ほど遅く・小さく・淡くするのが奥行きのコツ','船は波の高さに合わせて上下させ、少し傾けると波に乗って見えます','太陽の光の反射（白い横線）を水面に足すと、きらめきが出ます'],
p:`3層の波がゆらゆら揺れ続ける海の上を、小さなヨットが波に乗って進んでいく「海と船」のアニメーションを作ってください。
・空：淡い水色 #CDEEFF。右上に黄色い太陽（直径140px）、白い雲が2つゆっくり流れる
・波：SVGの波線（sin カーブ）を3層。奥：淡い青、中：青 #4D96FF、手前：濃い青。それぞれ横に流し続ける（奥ほど遅く：12秒・8秒・5秒で1周期）
・各層の波の上の縁に、白い細い線（波頭）
・ヨット：白い三角の帆2枚と、コーラル #FF6B5A の船体。中層の波の上で、波の高さに合わせて上下し（±16px）、±6° 傾きながら、6秒で画面左から右へ進む
・水面に太陽の光の反射（白い短い横線）を5本、点滅させる
・尺：6秒でループ`,
run(H){lab(H,'海と船','Sea & sailboat');H.abs({inset:'0',background:'#cdeeff'});dot(H,1300,170,70,YE);const cl=H.abs({left:'200px',top:'120px',width:'220px',height:'60px',borderRadius:'30px',background:'#fff',boxShadow:'60px -24px 0 6px #fff'});H.a(cl,[{transform:'translateX(0)'},{transform:'translateX(300px)'}],{d:6000,e:E.lin});
  const svg=H.svg(1600,900);const wave=(y,amp,len,col)=>{let d=`M-${len} ${y}`;for(let x=-len;x<=1600+len*2;x+=20)d+=` L${x} ${(y+amp*Math.sin(x/len*Math.PI*2)).toFixed(1)}`;d+=` V900 H-${len}Z`;const g=H.sv('g',{},svg);H.sv('path',{d,fill:col},g);H.sv('path',{d:d.split(' V')[0],fill:'none',stroke:'#fff','stroke-width':4,opacity:.8},g);return g};
  const ws=[[560,16,300,'#9ccaff',12000],[620,20,360,BL,8000],[700,26,420,'#2b5fc7',5000]].map(([y,a,l,c,T])=>{const g=wave(y,a,l,c);H.a(g,[{transform:'translateX(0)'},{transform:`translateX(${l}px)`}],{d:T,e:E.lin,i:Infinity});return g});
  const bt=H.svg(200,200,null,{});H.sv('path',{d:'M100 20 L100 140 L30 140 Z',fill:'#fff'},bt);H.sv('path',{d:'M108 40 L108 140 L160 140 Z',fill:'#f1f1f1'},bt);H.sv('path',{d:'M20 145 L180 145 L155 180 L45 180 Z',fill:CO},bt);
  const svg2=H.svg(1600,900);let d=`M-420 700`;for(let x=-420;x<=2440;x+=20)d+=` L${x} ${(700+26*Math.sin(x/420*Math.PI*2)).toFixed(1)}`;d+=' V900 H-420Z';const fg=H.sv('g',{},svg2);H.sv('path',{d,fill:'#2b5fc7'},fg);H.a(fg,[{transform:'translateX(0)'},{transform:'translateX(420px)'}],{d:5000,e:E.lin,i:Infinity});ws[2].remove();
  H.raf(t=>{const x=-150+(t%6)/6*1900;const y=440+16*Math.sin(t*2.2);bt.style.transform=`translate(${x}px,${y}px) rotate(${6*Math.sin(t*2.2+1)}deg)`});
  for(let i=0;i<5;i++){const r=H.abs({left:1150+rnd(-80,80)+'px',top:720+i*30+'px',width:rnd(40,90)+'px',height:'5px',borderRadius:'3px',background:'#fff'});H.a(r,[{opacity:.1},{opacity:.9},{opacity:.1}],{d:rnd(800,1400),i:Infinity})}}});

defO({no:'34',cat:'SCENE',name:'街に明かりが灯る',en:'City Lights',lead:'夜の街のビルの窓に、ひとつずつ明かりが灯っていく。',loop:5000,
use:'<b>夜・都会・仕事終わり・ナイトライフ</b>の表現に。窓の明かりが増えていく様子は、時間の流れと人の気配を感じさせます。',
tips:['窓はランダムな順番で点けると、本物の街らしくなります','明かりの色を黄色とオレンジで混ぜると温かみが出ます','最後に1つ消える窓を入れると、物語が生まれます'],
p:`夜の街のビル群の窓に、ランダムな順番でひとつずつ明かりが灯っていく「街に明かりが灯る」アニメーションを作ってください。
・背景：上 #0D1533 → 下 #22336E のグラデーション、右上に白い月と小さな星
・ビル：高さや幅の違う長方形を8棟並べる（青みの紺系の色を3種類）。屋上にアンテナや給水塔を少し
・窓：各ビルに格子状に並べる（小さな四角）。最初はすべて暗い（#1A244D）
・0.3〜3.5秒：窓をランダムな順番で点灯させる（黄 #FFC93C か オレンジ #FF9F43、不透明度 0 → 1、0.15秒）。点灯した窓のまわりにうっすら光
・ビルの手前の道路に、車のヘッドライト（白い点2つ）が左右に流れる
・4.5秒で全体をフェードアウト
・尺：5秒でループ`,
run(H){lab(H,'街に明かりが灯る','City lights');H.abs({inset:'0',background:'linear-gradient(#0d1533,#22336e)'});H.abs({left:'1300px',top:'90px',width:'90px',height:'90px',borderRadius:'50%',boxShadow:'-20px 8px 0 0 #fff'});for(let i=0;i<30;i++)dot(H,rnd(0,1600),rnd(20,300),rnd(1,3),'#fff',null,{opacity:rnd(.3,1)});
  const W=H.abs({inset:'0'});const bs=[[60,180,420],[260,150,520],[430,200,360],[650,170,600],[840,220,440],[1080,160,560],[1260,190,380],[1460,140,500]];const wins=[];
  bs.forEach(([x,w,h],i)=>{const b=H.abs({left:x+'px',top:820-h+'px',width:w+'px',height:h+'px',background:['#26336b','#1e2a5a','#2d3b78'][i%3]},W);if(i%2)H.abs({left:w/2-3+'px',top:'-50px',width:'6px',height:'50px',background:'#2d3b78'},b);
    for(let r=0;r<Math.floor((h-40)/50);r++)for(let c=0;c<Math.floor((w-20)/40);c++){const wi=H.abs({left:20+c*40+'px',top:30+r*50+'px',width:'22px',height:'28px',background:'#1a244d'},b);wins.push(wi)}});
  wins.sort(()=>Math.random()-.5).forEach((wi,i)=>{if(Math.random()<.75)H.a(wi,[{background:'#1a244d',boxShadow:'none'},{background:Math.random()<.6?YE:'#ff9f43',boxShadow:'0 0 10px rgba(255,201,60,.6)'}],{d:150,dl:300+i/wins.length*3200})});
  H.abs({left:'0',right:'0',top:'820px',height:'80px',background:'#0a1028'});for(let i=0;i<3;i++){const c=H.abs({left:'0',top:850+i*12+'px',display:'flex',gap:'14px'});dot(H,0,0,6,'#fff',c,{position:'relative',left:0,top:0});dot(H,0,0,6,'#fff',c,{position:'relative',left:0,top:0});H.a(c,i%2?[{transform:'translateX(1700px)'},{transform:'translateX(-100px)'}]:[{transform:'translateX(-100px)'},{transform:'translateX(1700px)'}],{d:2500+i*700,dl:-i*600,e:E.lin,i:Infinity})}
  H.a(W,[{opacity:1},{opacity:0}],{d:500,dl:4500,f:'forwards'})}});

defO({no:'35',cat:'SCENE',name:'気球の旅',en:'Hot Air Balloon',lead:'カラフルな気球が、雲の間をふわふわ昇っていく。',loop:6000,
use:'<b>旅・夢・挑戦・新しい門出</b>の表現に。ゆっくり昇っていく気球は、前向きで穏やかな気持ちを伝えます。',
tips:['気球は上昇しながら左右にゆっくり揺らすと、風を感じます','雲を手前と奥の2層にして、手前の雲を速く流すと高さが出ます','気球の模様をストライプにすると、一気にかわいくなります'],
p:`ストライプ模様のカラフルな気球が、雲の間をふわふわと昇っていく「気球の旅」のアニメーションを作ってください。
・空：上 #4D96FF → 下 #CDEEFF のグラデーション
・気球：縦長の丸（幅220px×高さ260px）に、コーラル・黄・ティールの縦ストライプ。下に茶色のかご、つなぐ細い線4本
・動き：画面下から上へ6秒かけて昇る（ease-in-out）。同時に左右に ±40px、±4° でゆっくり揺れる（3秒周期）
・雲：白い雲を奥（小さく、不透明度0.6、ゆっくり下へ流れる）と手前（大きく、速く下へ流れる）の2層。下へ流すことで、気球が昇っているように見せる
・尺：6秒でループ`,
run(H){lab(H,'気球の旅','Hot air balloon');H.abs({inset:'0',background:'linear-gradient(#4d96ff,#cdeeff)'});const cl=(s,o)=>{const g=H.abs({left:'0',top:'0',opacity:o,transform:`scale(${s})`});H.abs({left:'0',top:'0',width:'240px',height:'70px',borderRadius:'35px',background:'#fff',boxShadow:'70px -30px 0 10px #fff,140px -6px 0 0 #fff'},g);return g};
  for(let i=0;i<6;i++){const far=i<3;const c=cl(far?.6:1.2,far?.6:.95);const x=rnd(0,1400);H.a(c,[{translate:`${x}px -200px`},{translate:`${x}px 1000px`}],{d:far?9000:4500,dl:-rnd(0,9000),e:E.lin,i:Infinity})}
  const B=H.abs({left:'690px',top:'0'});const env=H.abs({left:'0',top:'0',width:'220px',height:'260px',borderRadius:'50% 50% 45% 45% / 55% 55% 45% 45%',overflow:'hidden',background:`repeating-linear-gradient(90deg,${CO} 0 44px,${YE} 44px 88px,${TE} 88px 132px)`},B);
  const sv=H.svg(220,140,B,{top:'250px'});[[50,0,85,90],[170,0,135,90],[90,0,95,90],[130,0,125,90]].forEach(([x1,y1,x2,y2])=>H.sv('line',{x1,y1,x2,y2,stroke:'#5b3b2a','stroke-width':3},sv));H.abs({left:'80px',top:'335px',width:'60px',height:'45px',borderRadius:'6px',background:'#8a5a3a'},B);
  H.a(B,[{transform:'translateY(1000px)'},{transform:'translateY(-450px)'}],{d:6000,e:'ease-in-out'});H.a(env.parentNode===B?B:B,[{rotate:'-4deg',translate:'-40px 0'},{rotate:'4deg',translate:'40px 0'},{rotate:'-4deg',translate:'-40px 0'}],{d:3000,e:'ease-in-out',i:Infinity})}});

defO({no:'36',cat:'SCENE',name:'雨と傘',en:'Rainy Day',lead:'しとしと降る雨の中、傘をさした人がてくてく歩く。',loop:4000,
use:'<b>梅雨・天気・しっとりした雰囲気</b>の動画に。雨の日の静けさや、季節の移ろいを表現できます。',
tips:['雨粒は斜めに等速で、たくさん（60本以上）降らせると雨らしい','地面に雨粒が落ちたところに、小さな波紋を出すとリアル','傘の色を1つだけ鮮やかにすると、主役が引き立ちます'],
p:`しとしと雨が降る中を、コーラル色の傘をさした人がてくてく歩いていく「雨と傘」のアニメーションを作ってください。
・背景：灰色がかった紺 #2B3560。地面は少し暗い色、水たまりが2つ
・雨：白い細い線（長さ40px、不透明度0.5）を80本、斜め（15°）に等速で降らせ続ける（0.6〜0.9秒で落ちきる）
・地面に落ちたところに、小さな楕円の波紋を広げて消す
・人物：シンプルなシルエット（紺の体、丸い頭）に、コーラル #FF6B5A の傘。左から右へ4秒で歩く。歩くたびに上下に6px揺れ、足を交互に動かす
・傘の上で雨粒がはねる（小さな白い点）
・水たまりに人物が映る（上下反転、不透明度0.3）
・尺：4秒でループ`,
run(H){lab(H,'雨と傘','Rainy day');H.abs({inset:'0',background:'linear-gradient(#2b3560,#3c4876)'});H.abs({left:'0',right:'0',top:'700px',bottom:'0',background:'#232c52'});[[400,740],[1100,760]].forEach(([x,y])=>H.abs({left:x+'px',top:y+'px',width:'260px',height:'40px',borderRadius:'50%',background:'#3a4878'}));
  const P=H.abs({left:'0',top:'420px'});const umb=H.abs({left:'-20px',top:'0',width:'240px',height:'120px',borderRadius:'120px 120px 0 0',background:CO},P);H.abs({left:'97px',top:'110px',width:'6px',height:'110px',background:'#ddd'},P);dot(H,100,180,32,'#18234a',P);H.abs({left:'70px',top:'205px',width:'60px',height:'90px',borderRadius:'26px',background:'#18234a'},P);
  const legs=[0,1].map(i=>H.abs({left:80+i*24+'px',top:'285px',width:'16px',height:'60px',borderRadius:'8px',background:'#18234a',transformOrigin:'50% 0'},P));legs.forEach((l,i)=>H.a(l,[{transform:'rotate(20deg)'},{transform:'rotate(-20deg)'},{transform:'rotate(20deg)'}],{d:600,dl:i*300,i:Infinity}));
  H.a(P,[{transform:'translate(-250px,0)'},{transform:'translate(1700px,0)'}],{d:4000,e:E.lin});H.a(umb,[{transform:'translateY(0)'},{transform:'translateY(-6px)'},{transform:'translateY(0)'}],{d:300,i:Infinity});
  for(let i=0;i<80;i++){const x=rnd(-100,1700);const r=H.abs({left:x+'px',top:'-50px',width:'2px',height:'40px',background:'#fff',opacity:.5,transform:'rotate(15deg)'});const T=rnd(600,900);H.a(r,[{transform:'translate(0,0) rotate(15deg)'},{transform:'translate(-200px,780px) rotate(15deg)'}],{d:T,dl:-rnd(0,T),e:E.lin,i:Infinity})}
  for(let i=0;i<14;i++){const s=H.abs({left:rnd(0,1600)+'px',top:rnd(705,880)+'px',width:'40px',height:'10px',borderRadius:'50%',border:'2px solid rgba(255,255,255,.5)'});H.a(s,[{transform:'scale(.2)',opacity:1},{transform:'scale(1.4)',opacity:0}],{d:700,dl:-rnd(0,700),i:Infinity})}}});

defO({no:'37',cat:'SCENE',name:'ドライブ',en:'Road Trip',lead:'車が走り、景色が層ごとに違う速さで流れていく。',loop:4000,
use:'<b>旅行・移動・引っ越し・配送サービス</b>の紹介に。車は止まったまま背景を流すだけで、走っている感じが出ます。',
tips:['奥の山はゆっくり、手前の木は速く流す（パララックス）のがコツ','車体を小さく上下に揺らすと、エンジンの振動が出ます','タイヤのホイールを回すのを忘れずに'],
p:`かわいい車が道を走り、背景の景色が層ごとに違う速さで流れていく「ドライブ」のアニメーションを作ってください。
・空：水色、白い雲がゆっくり流れる
・背景の層（すべて右から左へ流し続ける）：遠くの山（くすんだ紫、16秒で1周期）、近くの丘（緑、8秒）、道路わきの木（濃い緑、2秒）、道路の白い破線（0.8秒）
・車：画面の中央やや左に固定。コーラル #FF6B5A の車体、水色の窓、黒いタイヤ（白いホイールを回転させる）。車体を ±3px で小刻みに上下に揺らす
・車の後ろから、白い小さな煙の丸を時々出して消す
・尺：4秒でループ`,
run(H){lab(H,'ドライブ','Road trip');H.abs({inset:'0',background:'#9fd6ff'});const svg=H.svg(1600,900);const layer=(build,T)=>{const g=H.sv('g',{},svg);build(g,0);build(g,1600);H.a(g,[{transform:'translateX(0)'},{transform:'translateX(-1600px)'}],{d:T,e:E.lin,i:Infinity})};
  layer((g,o)=>H.sv('path',{d:`M${o} 560 L${o+200} 380 L${o+420} 540 L${o+640} 340 L${o+900} 560 L${o+1150} 400 L${o+1400} 560 L${o+1600} 450 V900 H${o}Z`,fill:'#8b7bb5'},g),16000);
  layer((g,o)=>H.sv('path',{d:`M${o} 620 Q${o+400} 520 ${o+800} 620 T${o+1600} 620 V900 H${o}Z`,fill:'#5fbf73'},g),8000);
  H.sv('rect',{x:0,y:680,width:1600,height:220,fill:'#3b3f55'},svg);layer((g,o)=>{for(let i=0;i<8;i++)H.sv('rect',{x:o+i*200,y:780,width:100,height:12,fill:'#fff'},g)},800);
  layer((g,o)=>{for(let i=0;i<4;i++){H.sv('rect',{x:o+i*400+180,y:560,width:18,height:120,fill:'#6b4a2f'},g);H.sv('circle',{cx:o+i*400+189,cy:540,r:60,fill:'#2f8a4a'},g)}},2000);
  const car=H.abs({left:'520px',top:'560px',width:'380px',height:'200px'});H.abs({left:'0',top:'60px',width:'380px',height:'90px',borderRadius:'30px',background:CO},car);H.abs({left:'70px',top:'0',width:'220px',height:'80px',borderRadius:'40px 50px 0 0',background:CO},car);H.abs({left:'95px',top:'18px',width:'80px',height:'50px',borderRadius:'14px 0 0 0',background:'#bfe8ff'},car);H.abs({left:'185px',top:'18px',width:'85px',height:'50px',borderRadius:'0 24px 0 0',background:'#bfe8ff'},car);
  [70,300].forEach(x=>{const w=dot(H,x,150,40,'#1b1b2f',car);const sp=H.abs({left:'14px',top:'36px',width:'52px',height:'8px',background:'#fff'},w);H.a(w,[{transform:'rotate(0)'},{transform:'rotate(-360deg)'}],{d:400,e:E.lin,i:Infinity})});
  H.a(car,[{transform:'translateY(0)'},{transform:'translateY(-3px)'},{transform:'translateY(0)'}],{d:200,i:Infinity});for(let i=0;i<3;i++){const s=dot(H,520,700,16,'#fff');H.a(s,[{transform:'translate(0,0) scale(.5)',opacity:.8},{transform:'translate(-160px,-40px) scale(1.6)',opacity:0}],{d:1000,dl:i*1300,i:Infinity})}}});

defO({no:'38',cat:'SCENE',name:'ロケット発射',en:'Rocket Launch',lead:'カウントダウン、煙がもくもく、ロケットが空へ飛び立つ。',loop:5000,
use:'<b>サービス開始・新商品発表・目標達成・スタート</b>の演出に。「いよいよ始まる！」の高揚感を表現できます。',
tips:['発射の直前にロケットを小刻みに震わせると、ためが生まれます','煙は丸をたくさん重ねて、横に広がりながら消すとリアル','上昇は加速（ease-in）にすると、力強く飛んでいく感じに'],
p:`カウントダウンのあと、煙がもくもく広がり、ロケットが空へ飛び立つ「ロケット発射」のアニメーションを作ってください。
・背景：紺 #142047 に白い星。地面に発射台（灰色の土台）
・ロケット：白い胴体、コーラル #FF6B5A の先端と羽、青い丸窓。発射台の上に立っている
・0.0〜1.5秒：画面上部に「3」「2」「1」を0.5秒ずつ大きく表示（Dela Gothic One、scale 1.4 → 1）
・1.2〜1.5秒：ロケットが ±3px で小刻みに震える
・1.5秒：発射。ロケットの下から黄とオレンジの炎（揺らめく三角）と、白い煙の丸を20個、横に広がりながら出す
・1.5〜3.5秒：ロケットが加速しながら画面の上へ飛んでいく（cubic-bezier(.55,0,1,.45)）。後ろに白い煙の尾を残す
・飛び立つ瞬間に画面を8px揺らす
・尺：5秒でループ`,
run(H){lab(H,'ロケット発射','Rocket launch');for(let i=0;i<40;i++)dot(H,rnd(0,1600),rnd(0,600),rnd(1,3),'#fff',null,{opacity:rnd(.3,1)});H.abs({left:'650px',top:'760px',width:'300px',height:'40px',background:'#4a5580'});H.abs({left:'0',right:'0',top:'800px',bottom:'0',background:'#0d1533'});
  const R=H.abs({left:'730px',top:'420px',width:'140px',height:'340px'});const fl=H.abs({left:'40px',top:'300px',width:'60px',height:'140px',background:`linear-gradient(${YE},#ff9f43,transparent)`,clipPath:'polygon(0 0,100% 0,50% 100%)',opacity:0},R);
  H.abs({left:'30px',top:'60px',width:'80px',height:'240px',borderRadius:'40px 40px 10px 10px',background:'#fff'},R);H.abs({left:'30px',top:'40px',width:'80px',height:'80px',borderRadius:'50% 50% 0 0',background:CO},R);dot(H,70,160,22,BL,R,{border:'6px solid #cfd8f0'});
  H.abs({left:'0',top:'220px',width:'40px',height:'90px',background:CO,clipPath:'polygon(100% 0,100% 100%,0 100%)'},R);H.abs({left:'100px',top:'220px',width:'40px',height:'90px',background:CO,clipPath:'polygon(0 0,100% 100%,0 100%)'},R);
  ['3','2','1'].forEach((n,i)=>{const t=H.abs({left:'0',right:'0',top:'90px',textAlign:'center',fontFamily:F.heavy,fontSize:'180px',color:'#fff',opacity:0},null,n);H.a(t,[{transform:'scale(1.4)',opacity:0},{transform:'scale(1)',opacity:1,offset:.3},{opacity:1,offset:.8},{opacity:0}],{d:500,dl:i*500,f:'none'})});
  H.a(R,[...[...Array(8)].map((_,i)=>({transform:`translate(${i%2?3:-3}px,0)`,offset:.24+i*.0075})),{transform:'translate(0,0)',offset:.3},{transform:'translate(0,-1300px)',offset:.7,easing:'cubic-bezier(.55,0,1,.45)'},{transform:'translate(0,-1300px)'}].sort((a,b)=>a.offset-b.offset),{d:5000,e:E.lin});
  H.a(fl,[{opacity:0},{opacity:0,offset:.29},{opacity:1,offset:.31},{opacity:1,offset:.7},{opacity:0,offset:.72},{opacity:0}],{d:5000});H.a(fl,[{transform:'scaleY(1)'},{transform:'scaleY(1.3)'},{transform:'scaleY(1)'}],{d:120,i:Infinity});
  for(let i=0;i<20;i++){const s=dot(H,800,780,rnd(30,60),'#e8ecf7');const dx=rnd(-500,500);H.a(s,[{transform:'translate(0,0) scale(.2)',opacity:0},{opacity:0,offset:.3},{transform:'translate(0,0) scale(.4)',opacity:1,offset:.31},{transform:`translate(${dx}px,${rnd(-80,10)}px) scale(${rnd(1,1.8)})`,opacity:0,offset:.8},{opacity:0}],{d:5000,dl:i*15,e:E.out})}}});

defO({no:'39',cat:'SCENE',name:'木が育つ',en:'Growing Tree',lead:'芽が出て、幹が伸び、枝が広がり、葉と花が咲く。',loop:5600,
use:'<b>成長・継続・SDGs・教育</b>の表現に。「小さな一歩が大きく育つ」ストーリーを、数秒で描けます。',
tips:['幹→枝→葉の順に、線を描くアニメーション（stroke-dashoffset）で育てるのが基本','葉は1枚ずつ時間差でポンと出すと、生命感が出ます','最後に花や実を付けると「実を結ぶ」ストーリーに'],
p:`小さな芽から幹が伸び、枝が広がり、葉と花が次々に咲いて1本の木に育つ「木が育つ」アニメーションを作ってください。
・背景：紺 #142047、地面に丸い丘（緑 #2F8A4A）
・0.0〜0.5秒：丘の上に小さな双葉がポンと出る
・0.5〜1.8秒：茶色の幹が下から上へ伸びる（SVGの太い線、stroke-dashoffset、線幅を根元40px→先端16pxに見えるよう2本重ね）
・1.4〜2.6秒：幹から左右に枝が4本、時間差で伸びる
・2.4〜3.6秒：枝の先と途中に、ティール #2EC4B6 と緑の丸い葉を30枚、ランダムな時間差で scale 0 → 1.2 → 1 でポンと出す
・3.4〜4.2秒：ピンク #FF8FAB と黄の小さな花を10個咲かせる
・4.8秒でフェードアウト
・尺：5.6秒でループ`,
run(H){lab(H,'木が育つ','Growing tree');const svg=H.svg(1600,900);H.sv('ellipse',{cx:800,cy:880,rx:520,ry:140,fill:'#2f8a4a'},svg);const G=H.sv('g',{},svg);
  const line=(d,w,dl,du)=>{const p=H.sv('path',{d,fill:'none',stroke:'#7a4e2d','stroke-width':w,'stroke-linecap':'round'},G);const L=p.getTotalLength();p.setAttribute('stroke-dasharray',L);p.setAttribute('stroke-dashoffset',L);H.a(p,[{strokeDashoffset:L},{strokeDashoffset:0}],{d:du,dl,e:E.out})};
  const sp=H.sv('g',{},G);H.sv('ellipse',{cx:780,cy:740,rx:24,ry:12,fill:'#7cd95b'},sp);H.sv('ellipse',{cx:820,cy:740,rx:24,ry:12,fill:'#7cd95b'},sp);sp.style.transformOrigin='800px 750px';H.a(sp,[{transform:'scale(0)'},{transform:'scale(1)',offset:.08},{transform:'scale(1)',offset:.12},{transform:'scale(0)',offset:.16},{transform:'scale(0)'}],{d:5600});
  line('M800 760 L800 330',40,500,1300);line('M800 600 Q700 560 620 470',18,1400,800);line('M800 560 Q900 520 990 440',18,1600,800);line('M800 440 Q720 400 680 320',14,1800,700);line('M800 420 Q880 380 930 300',14,1900,700);
  for(let i=0;i<30;i++){const a=rnd(0,Math.PI*2),r=rnd(40,260);const c=H.sv('circle',{cx:800+Math.cos(a)*r*1.2,cy:360+Math.sin(a)*r*.6,r:rnd(30,55),fill:pick([TE,'#3fb368','#5fd38a'])},G);c.style.transformBox='fill-box';c.style.transformOrigin='center';H.a(c,[{transform:'scale(0)'},{transform:'scale(1.2)',offset:.7},{transform:'scale(1)'}],{d:400,dl:2400+rnd(0,1200),e:E.back})}
  for(let i=0;i<10;i++){const a=rnd(0,Math.PI*2),r=rnd(40,250);const c=H.sv('circle',{cx:800+Math.cos(a)*r*1.2,cy:360+Math.sin(a)*r*.6,r:14,fill:pick([PK,YE])},G);c.style.transformBox='fill-box';c.style.transformOrigin='center';H.a(c,[{transform:'scale(0)'},{transform:'scale(1)'}],{d:300,dl:3400+rnd(0,800),e:E.back})}
  H.a(G,[{opacity:1},{opacity:0}],{d:600,dl:4800,f:'forwards'})}});

defO({no:'40',cat:'SCENE',name:'飛び出す絵本',en:'Pop-up Book',lead:'本が開くと、山や木がパタパタと起き上がる。',loop:5000,
use:'<b>絵本・子ども向け・物語の始まり・ブランドストーリー</b>に。ページから世界が立ち上がる、わくわくする演出です。',
tips:['起き上がる部品は、下端を軸に rotateX で回すのが基本','奥の部品から順に起こすと、自然な飛び出し方に','起き上がった後に、軽く揺れ戻すと紙らしさが出ます'],
p:`本が開くと、ページの上に山・木・家・太陽の紙のパーツがパタパタと起き上がってくる「飛び出す絵本」のアニメーションを作ってください。
・CSS 3D（perspective: 1400px）。本は少し上から見下ろす角度（rotateX 50°）
・本：左右2ページ。0.0〜0.8秒で、閉じた状態（左ページが右に重なる）から左ページが開く（rotateY 180° → 0、背表紙を軸）
・パーツ（すべて紙の切り抜き風、少し影）：奥から順に、山（紺とティール）、太陽（黄）、木（緑）、家（コーラルの屋根）
・0.9〜2.2秒：パーツが奥から順に0.2秒ずつ遅れて、下端を軸に rotateX 90°（寝ている）→ −10° → 0 で起き上がる（揺れ戻し付き）
・起き上がった太陽はゆっくり回り、木はわずかに揺れる
・4.0秒から逆の順番で倒れて本が閉じる
・尺：5秒でループ`,
run(H){lab(H,'飛び出す絵本','Pop-up book');const P=H.abs({left:'300px',top:'180px',width:'1000px',height:'600px',perspective:'1400px'});const B=H.abs({inset:'0',transformStyle:'preserve-3d',transform:'rotateX(50deg)'},P);
  const right=H.abs({left:'500px',top:'0',width:'500px',height:'600px',background:'#fff5e6',transformStyle:'preserve-3d'},B);const left=H.abs({left:'0',top:'0',width:'500px',height:'600px',background:'#fff0dc',transformOrigin:'100% 50%'},B);
  H.a(left,[{transform:'rotateY(180deg)'},{transform:'rotateY(0)',offset:.16},{transform:'rotateY(0)',offset:.84},{transform:'rotateY(180deg)'}],{d:5000,e:'ease-in-out'});
  const parts=[[-260,'#2c3a6e',420,260,'polygon(0 100%,35% 20%,55% 60%,75% 10%,100% 100%)'],[-120,YE,180,180,'circle(50% at 50% 50%)'],[-40,'#2f8a4a',200,300,'polygon(50% 0,100% 70%,60% 70%,60% 100%,40% 100%,40% 70%,0 70%)'],[40,CO,260,240,'polygon(50% 0,100% 40%,90% 40%,90% 100%,10% 100%,10% 40%,0 40%)']];
  parts.forEach(([y,c,w,h,cp],i)=>{const e=H.abs({left:500-w/2+(i%2?120:-120)+'px',top:300+y-h+'px',width:w+'px',height:h+'px',background:c,clipPath:cp,transformOrigin:'50% 100%',filter:'drop-shadow(0 8px 6px rgba(0,0,0,.25))'},B);
    H.a(e,[{transform:'rotateX(-90deg)'},{transform:'rotateX(-90deg)',offset:.18+i*.04},{transform:'rotateX(10deg)',offset:.3+i*.04},{transform:'rotateX(0)',offset:.36+i*.04},{transform:'rotateX(0)',offset:.78-i*.02},{transform:'rotateX(-90deg)',offset:.84-i*.02},{transform:'rotateX(-90deg)'}],{d:5000,e:'ease-in-out'})})}});

/* INFO */
const axis=(H,x,y,w,h)=>{H.abs({left:x+'px',top:y+h+'px',width:w+'px',height:'3px',background:'rgba(255,255,255,.35)'});for(let i=1;i<=4;i++)H.abs({left:x+'px',top:y+h-i*h/4+'px',width:w+'px',height:'1px',background:'rgba(255,255,255,.08)'})};
defO({no:'41',cat:'INFO',name:'伸びる棒グラフ',en:'Bar Chart Grow',lead:'棒が下から順に伸び、数字がカウントアップする。',loop:4000,
use:'<b>売上・成長率・アンケート結果</b>の紹介に。数字が「伸びていく」様子は、それだけで説得力になります。',
tips:['棒は0.1秒ずつ遅らせて、左から順に伸ばすと読みやすい','一番伝えたい棒だけ色を変えるのが鉄則','数字は棒の伸びと同じイージングでカウントアップ'],
p:`棒が下から順番に伸びて、その上の数字がカウントアップする「伸びる棒グラフ」のアニメーションを作ってください。
・データ（サンプル）：1月 32／2月 45／3月 51／4月 68／5月 74／6月 96
・軸：横軸と、薄い補助線4本。下に月のラベル
・棒：幅90px、角丸（上だけ）12px。1〜5月はティール #2EC4B6、6月だけコーラル #FF6B5A
・0.3秒から：左の棒から0.12秒ずつ遅らせて、高さ 0 → 値 へ0.9秒で伸ばす（cubic-bezier(.16,1,.3,1)、transform-origin は下端）
・各棒の上に、数字を同じタイミング・同じイージングで 0 → 値 にカウントアップ（Space Mono）
・最後に6月の棒の上に「過去最高！」の吹き出しをポンと出す
・左上にタイトル「月別の売上（サンプル）」
・尺：4秒でループ`,
run(H){lab(H,'伸びる棒グラフ','Bar chart');H.abs({left:'240px',top:'70px',fontFamily:F.sans,fontWeight:'900',fontSize:'40px',color:'#fff'},null,'月別の売上（サンプル）');axis(H,240,180,1120,560);
  const d=[32,45,51,68,74,96];const nums=[];d.forEach((v,i)=>{const x=300+i*180,h=v/100*560;const b=H.abs({left:x+'px',top:740-h+'px',width:'90px',height:h+'px',borderRadius:'12px 12px 0 0',background:i===5?CO:TE,transformOrigin:'50% 100%'});H.a(b,[{transform:'scaleY(0)'},{transform:'scaleY(1)'}],{d:900,dl:300+i*120});
    const n=H.abs({left:x-30+'px',width:'150px',textAlign:'center',top:690-h+'px',fontFamily:F.smono,fontSize:'34px',color:'#fff'},null,'0');nums.push([n,v,300+i*120]);H.abs({left:x-30+'px',width:'150px',textAlign:'center',top:'760px',fontFamily:F.sans,fontSize:'28px',color:'rgba(255,255,255,.7)'},null,(i+1)+'月')});
  H.raf(s=>{nums.forEach(([n,v,dl])=>{const k=Math.max(0,Math.min(1,(s*1000-dl)/900));n.textContent=Math.round(v*(1-Math.pow(1-k,4)))})});
  const bb=H.abs({left:'1150px',top:'90px',background:YE,color:NV,fontFamily:F.sans,fontWeight:'900',fontSize:'30px',padding:'12px 22px',borderRadius:'16px'},null,'過去最高！');H.a(bb,[{transform:'scale(0)'},{transform:'scale(1)'}],{d:400,dl:1900,e:E.back})}});

defO({no:'42',cat:'INFO',name:'ドーナツグラフ',en:'Donut Chart',lead:'円が区切りごとに描かれ、内訳のラベルが順に出てくる。',loop:4200,
use:'<b>割合・内訳・シェア・時間の使い方</b>の説明に。全体の中での大きさが、直感的に伝わります。',
tips:['12時の位置から時計回りに描くのが、見慣れた円グラフの読み方','区切りの間に小さな隙間を空けると、すっきり見えます','中央に一番伝えたい数字を置くのがドーナツグラフの強み'],
p:`ドーナツ型の円グラフが区切りごとに順番に描かれ、内訳のラベルが横に出てくる「ドーナツグラフ」のアニメーションを作ってください。
・データ（サンプル）：仕事 40%（コーラル）／睡眠 30%（青 #4D96FF）／自由時間 20%（黄）／その他 10%（ティール）
・ドーナツ：直径480px、太さ80px。SVG の円を区切りごとに stroke-dasharray で作り、12時の位置から時計回りに1区画ずつ描く（各0.5秒、区画の間に2°の隙間）
・各区画が描かれ始めると、右側の凡例（色の丸＋名前＋%）が左からスライドインする
・中央に「24h」と「1日の使い方」を表示
・描き終わったら、一番大きい区画（仕事）だけを少し外へ浮かせる（12px）
・尺：4.2秒でループ`,
run(H){lab(H,'ドーナツグラフ','Donut chart');const svg=H.svg(1600,900);const cx=560,cy=450,r=200,C=2*Math.PI*r;H.sv('circle',{cx,cy,r,fill:'none',stroke:'rgba(255,255,255,.08)','stroke-width':80},svg);
  const d=[['仕事',40,CO],['睡眠',30,BL],['自由時間',20,YE],['その他',10,TE]];let acc=0;d.forEach(([n,v,c],i)=>{const len=C*v/100-C*2/360;const s=H.sv('circle',{cx,cy,r,fill:'none',stroke:c,'stroke-width':80,'stroke-dasharray':`0 ${C}`,transform:`rotate(${-90+acc*3.6} ${cx} ${cy})`},svg);
    H.a(s,[{strokeDasharray:`0 ${C}`},{strokeDasharray:`${len} ${C}`}],{d:500,dl:300+i*500,e:'ease-in-out'});if(i===0){const mid=(-90+v*1.8)*Math.PI/180;H.a(s,[{transform:'translate(0,0)'},{transform:`translate(${Math.cos(mid)*12}px,${Math.sin(mid)*12}px)`}],{d:300,dl:2400})}acc+=v;
    const lg=H.abs({left:'960px',top:280+i*90+'px',display:'flex',alignItems:'center',gap:'18px',fontFamily:F.sans,fontWeight:'700',fontSize:'36px',color:'#fff'});dot(H,0,0,16,c,lg,{position:'relative',left:0,top:0});H.el('span',{width:'200px'},lg,n);H.el('span',{fontFamily:F.smono,color:c},lg,v+'%');H.a(lg,[{opacity:0,transform:'translateX(-30px)'},{opacity:1,transform:'translateX(0)'}],{d:400,dl:300+i*500})});
  H.abs({left:cx-150+'px',width:'300px',top:'390px',textAlign:'center',fontFamily:F.heavy,fontSize:'72px',color:'#fff'},null,'24h');H.abs({left:cx-150+'px',width:'300px',top:'480px',textAlign:'center',fontFamily:F.sans,fontSize:'26px',color:'rgba(255,255,255,.6)'},null,'1日の使い方')}});

defO({no:'43',cat:'INFO',name:'折れ線グラフ',en:'Line Chart Draw',lead:'線が左から描かれ、点がポンポンと乗り、最後の点が光る。',loop:4200,
use:'<b>推移・トレンド・フォロワー数の伸び</b>の説明に。右肩上がりの線が描かれていく様子は、成長を印象的に見せます。',
tips:['線の下をグラデーションで塗ると、量の大きさも伝わります','点は線が通過したタイミングで出すと、気持ちよくそろいます','最後の点だけ大きく・光らせて「今」を強調'],
p:`折れ線グラフの線が左から描かれ、データの点がポンポンと乗っていき、最後の点が光る「折れ線グラフ」のアニメーションを作ってください。
・データ（サンプル）：12か月分 10, 14, 13, 19, 24, 22, 31, 36, 34, 45, 52, 68
・軸と薄い補助線、下に1〜12月のラベル
・線：黄 #FFC93C、線幅8px、角は丸く。0.3〜2.3秒で左から右へ描く（stroke-dashoffset、ease-in-out）
・線の下：黄 → 透明の縦グラデーションで塗り、線と一緒に左から現れる（clip-path）
・点：各データに直径20pxの白い丸。線がその位置を通過した瞬間に scale 0 → 1.4 → 1 で出す
・最後の点：直径36pxにして、黄色の光（波紋）を脈打たせ、横に「+580%」の吹き出し
・尺：4.2秒でループ`,
run(H){lab(H,'折れ線グラフ','Line chart');axis(H,220,160,1160,560);const d=[10,14,13,19,24,22,31,36,34,45,52,68];const pts=d.map((v,i)=>[260+i*100,720-v/70*540]);const svg=H.svg(1600,900);
  const defs=H.sv('defs',{},svg);const lg=H.sv('linearGradient',{id:'lcg',x1:0,y1:0,x2:0,y2:1},defs);H.sv('stop',{offset:0,'stop-color':YE,'stop-opacity':.45},lg);H.sv('stop',{offset:1,'stop-color':YE,'stop-opacity':0},lg);
  const ld='M'+pts.map(p=>p.join(' ')).join(' L');const area=H.sv('path',{d:ld+` L${pts[11][0]} 720 L260 720 Z`,fill:'url(#lcg)'},svg);area.style.clipPath='inset(0 100% 0 0)';H.a(area,[{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0 0 0)'}],{d:2000,dl:300,e:'ease-in-out'});
  const l=H.sv('path',{d:ld,fill:'none',stroke:YE,'stroke-width':8,'stroke-linejoin':'round','stroke-linecap':'round'},svg);const L=l.getTotalLength();l.setAttribute('stroke-dasharray',L);H.a(l,[{strokeDashoffset:L},{strokeDashoffset:0}],{d:2000,dl:300,e:'ease-in-out'});
  pts.forEach(([x,y],i)=>{const last=i===11;const p=dot(H,x,y,last?18:10,last?YE:'#fff');H.a(p,[{transform:'scale(0)'},{transform:'scale(1.4)',offset:.6},{transform:'scale(1)'}],{d:300,dl:300+i/11*2000,e:E.back});H.abs({left:x-30+'px',width:'60px',textAlign:'center',top:'740px',fontFamily:F.sans,fontSize:'22px',color:'rgba(255,255,255,.6)'},null,(i+1)+'')});
  const [lx,ly]=pts[11];const rp=dot(H,lx,ly,18,'transparent',null,{border:'4px solid '+YE,boxSizing:'border-box'});H.a(rp,[{transform:'scale(1)',opacity:.9},{transform:'scale(3)',opacity:0}],{d:1000,dl:2300,i:Infinity});
  const bb=H.abs({left:lx-260+'px',top:ly-30+'px',background:CO,color:'#fff',fontFamily:F.smono,fontSize:'34px',padding:'8px 18px',borderRadius:'14px'},null,'+580%');H.a(bb,[{transform:'scale(0)'},{transform:'scale(1)'}],{d:400,dl:2400,e:E.back})}});

defO({no:'44',cat:'INFO',name:'KPIカウンター',en:'KPI Counters',lead:'3つの大きな数字が同時にカウントアップして止まる。',loop:3800,
use:'<b>実績紹介・会社案内・年間まとめ</b>に。「導入社数」「満足度」など、数字で信頼を伝える場面の定番です。',
tips:['桁の多い数字はカンマを入れ、等幅フォントでガタつきを防ぐ','3つの数字は少しずつ遅らせて止めると、リズムが生まれます','数字の下に小さくアイコンを添えると、意味が伝わりやすい'],
p:`3つの大きな実績の数字が同時にカウントアップして、それぞれピタッと止まる「KPIカウンター」のアニメーションを作ってください。
・3つのカード（幅380px、角丸32px、背景 #1F2C5C）を横に並べる
・中身（サンプル）：①「導入社数」12,800社（ティール）②「満足度」98.2%（黄）③「継続率」94%（コーラル）
・各カード：上に小さなアイコン（丸の中に記号）、中央に大きな数字（Space Mono、100px）、下にラベル
・0.3秒から：カードが下から順に0.1秒ずつ遅れて現れ、数字を 0 → 目標値 へ1.6秒でカウントアップ（ease-out、小数点やカンマも正しく）
・止まった瞬間に、数字を scale 1.1 → 1 で弾ませ、カードの縁を一瞬光らせる
・尺：3.8秒でループ`,
run(H){lab(H,'KPIカウンター','KPI counters');const d=[['導入社数',12800,'社',TE,0,'◎'],['満足度',98.2,'%',YE,1,'♥'],['継続率',94,'%',CO,0,'↻']];const ns=[];
  d.forEach(([n,v,u,c,dec,ic],i)=>{const x=170+i*440;const cd=H.abs({left:x+'px',top:'230px',width:'380px',height:'420px',borderRadius:'32px',background:'#1f2c5c',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'18px'});
    H.el('div',{width:'80px',height:'80px',borderRadius:'50%',background:c,color:NV,fontSize:'44px',display:'flex',alignItems:'center',justifyContent:'center'},cd,ic);const num=H.el('div',{fontFamily:F.smono,fontSize:v>1000?'80px':'100px',color:c},cd,'0');H.el('div',{fontFamily:F.sans,fontWeight:'700',fontSize:'32px',color:'#fff'},cd,n);
    H.a(cd,[{opacity:0,transform:'translateY(40px)'},{opacity:1,transform:'translateY(0)'}],{d:500,dl:300+i*100});H.a(num,[{transform:'scale(1)'},{transform:'scale(1.1)'},{transform:'scale(1)'}],{d:300,dl:1900+i*100,f:'none'});H.a(cd,[{boxShadow:'0 0 0 0 transparent'},{boxShadow:`0 0 0 6px ${c}`},{boxShadow:'0 0 0 0 transparent'}],{d:500,dl:1900+i*100,f:'none'});ns.push([num,v,u,dec,300+i*100])});
  H.raf(s=>ns.forEach(([el,v,u,dec,dl])=>{const k=Math.max(0,Math.min(1,(s*1000-dl)/1600));const x=v*(1-Math.pow(1-k,3));el.textContent=(dec?x.toFixed(1):Math.round(x).toLocaleString())+u}))}});

defO({no:'45',cat:'INFO',name:'地図ピン',en:'Map Pins',lead:'地図の上にピンがポトポト落ちて、ルートの線がつながる。',loop:4400,
use:'<b>店舗一覧・旅のルート・配送エリア・拠点紹介</b>に。「どこにあるか」「どう回るか」を楽しく見せられます。',
tips:['ピンは上から落として、着地で少し弾ませるのが定番','ピンの落ちる順番を、回る順番に合わせると物語になります','ルートの線は点線にすると「道のり」らしくなります'],
p:`簡略化した地図の上に、ピンが上からポトポトと落ちてきて、ピン同士をルートの点線がつないでいく「地図ピン」のアニメーションを作ってください。
・地図：背景 #1F2C5C に、薄い色の陸地（丸みのある不定形、#2C3A6E）と、細い白い道路（不透明度0.15）と川（青、不透明度0.4）
・ピン：しずく型（上が丸、下がとがる）、色はコーラル・黄・ティール・ピンク・青の5本。中に白い丸
・0.3秒から：0.4秒おきに1本ずつ、上から200px落として着地で scale(1.2, 0.8) → 1 で弾ませる。着地点に楕円の影
・各ピンの横に名前（「本店」「駅前店」など、白、小さめ）をフェードイン
・ピンが2本以上になったら、前のピンから次のピンへ白い点線のルートを描く（stroke-dashoffset）
・尺：4.4秒でループ`,
run(H){lab(H,'地図ピン','Map pins');H.abs({inset:'0',background:'#1f2c5c'});const svg=H.svg(1600,900);H.sv('path',{d:'M120 200 Q400 80 760 160 T1460 180 Q1540 420 1400 700 Q1000 820 600 760 Q200 760 140 520 Z',fill:'#2c3a6e'},svg);
  [['M100 450 L1500 420',0],['M600 100 L700 820',0],['M1100 120 Q1000 500 1150 820',0]].forEach(([d])=>H.sv('path',{d,stroke:'#fff','stroke-width':10,opacity:.12,fill:'none'},svg));H.sv('path',{d:'M200 820 Q500 600 820 640 T1500 560',stroke:BL,'stroke-width':18,opacity:.4,fill:'none'},svg);
  const pts=[[320,330,'本店',CO],[640,560,'駅前店',YE],[900,300,'公園通り店',TE],[1180,520,'海辺店',PK],[1380,300,'空港店',BL]];
  pts.forEach(([x,y,n,c],i)=>{const dl=300+i*400;if(i){const [px,py]=pts[i-1];const l=H.sv('path',{d:`M${px} ${py} Q${(px+x)/2} ${Math.min(py,y)-120} ${x} ${y}`,fill:'none',stroke:'#fff','stroke-width':5,'stroke-dasharray':'4 14','stroke-linecap':'round',opacity:.8},svg);const L=l.getTotalLength();const m=H.sv('path',{d:l.getAttribute('d'),fill:'none',stroke:'#1f2c5c','stroke-width':9},svg);m.setAttribute('stroke-dasharray',L);H.a(m,[{strokeDashoffset:0},{strokeDashoffset:-L}],{d:400,dl:dl-100})}
    H.abs({left:x-30+'px',top:y-8+'px',width:'60px',height:'16px',borderRadius:'50%',background:'rgba(0,0,0,.35)'});const p=H.abs({left:x-34+'px',top:y-96+'px',width:'68px',height:'96px',transformOrigin:'50% 100%'});const ps=H.svg(68,96,p);H.sv('path',{d:'M34 96 C10 60 0 45 0 32 A34 34 0 0 1 68 32 C68 45 58 60 34 96 Z',fill:c},ps);H.sv('circle',{cx:34,cy:32,r:13,fill:'#fff'},ps);
    H.a(p,[{transform:'translateY(-200px) scale(1)',opacity:0},{transform:'translateY(0) scale(1,1)',opacity:1,offset:.6,easing:'ease-in'},{transform:'translateY(0) scale(1.2,.8)',offset:.75},{transform:'translateY(0) scale(1)'}],{d:450,dl,e:E.in});
    const t=H.abs({left:x+44+'px',top:y-80+'px',fontFamily:F.sans,fontWeight:'700',fontSize:'28px',color:'#fff'},null,n);H.a(t,[{opacity:0},{opacity:1}],{d:300,dl:dl+300})})}});

defO({no:'46',cat:'INFO',name:'タイムライン',en:'Timeline',lead:'1本の線が伸びながら、年ごとの出来事が順番に現れる。',loop:5000,
use:'<b>会社の沿革・プロジェクトの歩み・自己紹介の経歴</b>に。時間の流れと出来事が、すっきり整理されて伝わります。',
tips:['線を伸ばしながら、到達した点から出来事を出すと、時間が進んで見えます','上下交互にカードを置くと、詰め込んでも読みやすい','最後の点（現在）だけ色を変えて光らせると、今が強調されます'],
p:`横1本の線が左から伸びていき、到達した年の点から出来事のカードが上下交互に現れる「タイムライン」のアニメーションを作ってください。
・線：画面中央の高さ、白、線幅6px。0.3〜3.3秒で左から右へ伸ばす（ease-in-out）
・点と年（サンプル）：2018 創業／2020 1号店オープン／2022 オンライン販売開始／2024 全国10店舗に／2026 海外進出
・線が各点に到達した瞬間：点（直径30px、ティール）を scale 0 → 1.3 → 1 で出し、カード（背景 #1F2C5C、角丸20px、年は黄色の Space Mono、出来事は白）を上下交互に、点から伸びる細い線と一緒に出す
・最後の 2026 の点だけコーラルにして、光の波紋を脈打たせる
・尺：5秒でループ`,
run(H){lab(H,'タイムライン','Timeline');const ln=H.abs({left:'140px',top:'447px',width:'1320px',height:'6px',background:'#fff',borderRadius:'3px',transformOrigin:'0 50%'});H.a(ln,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:3000,dl:300,e:'ease-in-out'});
  const ev=[['2018','創業'],['2020','1号店オープン'],['2022','オンライン販売開始'],['2024','全国10店舗に'],['2026','海外進出']];ev.forEach(([y,t],i)=>{const x=200+i*300;const dl=300+(x-140)/1320*3000;const last=i===4;const up=i%2===0;
    const p=dot(H,x,450,15,last?CO:TE);H.a(p,[{transform:'scale(0)'},{transform:'scale(1.3)',offset:.6},{transform:'scale(1)'}],{d:350,dl,e:E.back});if(last){const r=dot(H,x,450,15,'transparent',null,{border:'4px solid '+CO,boxSizing:'border-box'});H.a(r,[{transform:'scale(1)',opacity:.9},{transform:'scale(3)',opacity:0}],{d:1000,dl:dl+300,i:Infinity})}
    const st=H.abs({left:x-1+'px',top:up?'330px':'470px',width:'3px',height:'100px',background:'rgba(255,255,255,.4)',transformOrigin:up?'50% 100%':'50% 0'});const cd=H.abs({left:x-130+'px',top:up?'180px':'570px',width:'260px',padding:'18px',borderRadius:'20px',background:'#1f2c5c',textAlign:'center',boxSizing:'border-box'});H.el('div',{fontFamily:F.smono,fontSize:'34px',color:YE},cd,y);H.el('div',{fontFamily:F.sans,fontWeight:'700',fontSize:'26px',color:'#fff'},cd,t);
    H.a(st,[{transform:'scaleY(0)'},{transform:'scaleY(1)'}],{d:250,dl:dl+100});H.a(cd,[{opacity:0,transform:`translateY(${up?20:-20}px)`},{opacity:1,transform:'translateY(0)'}],{d:400,dl:dl+250})})}});

defO({no:'47',cat:'INFO',name:'フローチャート',en:'Flow Chart',lead:'箱が順番に現れ、矢印が伸びて、手順の流れがつながる。',loop:4800,
use:'<b>手順の説明・申し込みの流れ・仕組みの図解</b>に。「まずこれ、次にこれ」が、動きで自然に頭に入ります。',
tips:['矢印は箱が出てから伸ばすと、流れの順番がはっきりします','最後のゴールだけ色を変えると、目的が伝わります','分岐（はい／いいえ）を入れると、判断の流れも表現できます'],
p:`手順の箱が順番に現れ、箱と箱の間に矢印が伸びて、流れがつながっていく「フローチャート」のアニメーションを作ってください。
・手順（サンプル）：①申し込み → ②ヒアリング → ③プラン提案 → ④ご契約 → ⑤スタート！
・箱：横に5つ並べる（幅220px×高さ130px、角丸24px、背景 #1F2C5C、白い番号の丸と文字）。最後の「スタート！」だけコーラル #FF6B5A
・0.3秒から：0.6秒おきに、箱を scale 0.8・不透明度0 → 1 で出し、出たら次の箱へ白い矢印（線＋三角）を左から伸ばす（0.3秒）
・矢印が伸びきった瞬間に次の箱を出す
・全部つながったら、1つ目から最後まで、黄色の光の点が矢印に沿って流れる
・尺：4.8秒でループ`,
run(H){lab(H,'フローチャート','Flow chart');const st=['申し込み','ヒアリング','プラン提案','ご契約','スタート！'];st.forEach((t,i)=>{const x=110+i*290,dl=300+i*600;const last=i===4;const b=H.abs({left:x+'px',top:'385px',width:'220px',height:'130px',borderRadius:'24px',background:last?CO:'#1f2c5c',display:'flex',alignItems:'center',justifyContent:'center',gap:'12px',fontFamily:F.sans,fontWeight:'700',fontSize:'28px',color:'#fff'});
    H.el('span',{width:'44px',height:'44px',borderRadius:'50%',background:last?'#fff':YE,color:NV,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.smono,fontSize:'24px'},b,String(i+1));H.el('span',{},b,t);H.a(b,[{transform:'scale(.8)',opacity:0},{transform:'scale(1)',opacity:1}],{d:300,dl,e:E.back});
    if(!last){const a=H.abs({left:x+225+'px',top:'444px',width:'60px',height:'12px',transformOrigin:'0 50%'});H.abs({left:'0',top:'3px',width:'48px',height:'6px',background:'#fff'},a);H.abs({left:'44px',top:'-6px',width:'0',height:'0',borderTop:'12px solid transparent',borderBottom:'12px solid transparent',borderLeft:'16px solid #fff'},a);H.a(a,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:300,dl:dl+300})}});
  const g=dot(H,220,450,12,YE,null,{boxShadow:'0 0 20px '+YE,opacity:0});H.a(g,[{transform:'translateX(0)',opacity:0},{transform:'translateX(0)',opacity:1,offset:.1},{transform:'translateX(1160px)',opacity:1,offset:.9},{transform:'translateX(1160px)',opacity:0}],{d:1400,dl:3300,e:'ease-in-out'})}});

defO({no:'48',cat:'INFO',name:'進捗リング',en:'Progress Rings',lead:'3重のリングが、それぞれの目標まで描かれていく。',loop:4000,
use:'<b>目標の達成率・健康管理・プロジェクトの進み具合</b>に。複数の指標を、1つの図で美しく見せられます。',
tips:['外側ほど大きな目標、内側ほど小さな目標にすると読みやすい','リングの下地を薄く描いておくと、残りが分かります','100%を超えたら、リングを一周以上させて重ねると「達成」が伝わります'],
p:`同心円の3重のリングが、それぞれの目標の割合まで描かれていく「進捗リング」のアニメーションを作ってください。
・リング（サンプル）：外側「運動」82%（コーラル）、中「歩数」64%（黄）、内側「睡眠」95%（ティール）。半径 240px／180px／120px、太さ 44px
・各リングの下地：同じ色の不透明度0.15
・0.3秒から：外側から0.15秒ずつ遅らせて、12時の位置から時計回りに目標の割合まで描く（1.6秒、cubic-bezier(.16,1,.3,1)、線端は丸く）
・右側に凡例：色の丸、名前、% の数字（リングと同じタイミングでカウントアップ）
・描き終わったら、95% の睡眠リングの先端に白い光の点を出す
・尺：4秒でループ`,
run(H){lab(H,'進捗リング','Progress rings');const svg=H.svg(1600,900);const cx=560,cy=450;const d=[['運動',82,CO,240],['歩数',64,YE,180],['睡眠',95,TE,120]];const ns=[];
  d.forEach(([n,v,c,r],i)=>{const C=2*Math.PI*r;H.sv('circle',{cx,cy,r,fill:'none',stroke:c,'stroke-width':44,opacity:.15},svg);const s=H.sv('circle',{cx,cy,r,fill:'none',stroke:c,'stroke-width':44,'stroke-linecap':'round','stroke-dasharray':C,'stroke-dashoffset':C,transform:`rotate(-90 ${cx} ${cy})`},svg);H.a(s,[{strokeDashoffset:C},{strokeDashoffset:C*(1-v/100)}],{d:1600,dl:300+i*150});
    const lg=H.abs({left:'950px',top:320+i*100+'px',display:'flex',alignItems:'center',gap:'20px',fontFamily:F.sans,fontWeight:'700',fontSize:'38px',color:'#fff'});dot(H,0,0,18,c,lg,{position:'relative',left:0,top:0});H.el('span',{width:'140px'},lg,n);const nm=H.el('span',{fontFamily:F.smono,color:c},lg,'0%');ns.push([nm,v,300+i*150])});
  H.raf(s=>ns.forEach(([el,v,dl])=>{const k=Math.max(0,Math.min(1,(s*1000-dl)/1600));el.textContent=Math.round(v*(1-Math.pow(1-k,4)))+'%'}));const a=(-90+95*3.6)*Math.PI/180;const g=dot(H,cx+120*Math.cos(a),cy+120*Math.sin(a),14,'#fff',null,{boxShadow:'0 0 20px #fff'});H.a(g,[{opacity:0},{opacity:1}],{d:300,dl:2200})}});

defO({no:'49',cat:'INFO',name:'立体の棒グラフ',en:'Isometric Bars',lead:'斜め上から見た立体のブロックが、にょきにょき伸びる。',loop:4200,
use:'<b>比較・ランキング・売上のプレゼン</b>に。平面のグラフより目を引き、資料やSNSで映えます。',
tips:['面ごとに明るさを3段階（上・左・右）に変えるだけで立体に見えます','高さの差が大きいほど、伸びる動きのインパクトが増します','一番高いブロックの上に、旗やアイコンを立てると楽しい'],
p:`斜め上から見下ろした（アイソメトリック）立体のブロックが、グラフのようにそれぞれの高さまでにょきにょき伸びる「立体の棒グラフ」のアニメーションを作ってください。
・ブロック：5本、斜めに並べる。各ブロックは上面・左面・右面の3つの面を、同じ色の明・中・暗で塗る（SVG のひし形と平行四辺形で描く）
・色（左から）：ティール、青、黄、ピンク、コーラル。高さ（サンプル）：120・200・160・260・340px
・0.3秒から：左から0.15秒ずつ遅らせて、高さ 0 → 目標 へ1.0秒で伸ばす（cubic-bezier(.34,1.56,.64,1)、少し行き過ぎて戻る）
・各ブロックの上に数字を表示し、伸びに合わせてカウントアップ
・一番高いブロック（コーラル）の上に、白い小さな旗を立てて揺らす
・床に薄いひし形の格子を描く
・尺：4.2秒でループ`,
run(H){lab(H,'立体の棒グラフ','Isometric bars');const svg=H.svg(1600,900);const iso=(x,y)=>[800+(x-y)*0.866,560+(x+y)*0.5];for(let i=-4;i<=4;i++){const a=iso(i*100,-400),b=iso(i*100,400),c=iso(-400,i*100),e=iso(400,i*100);H.sv('line',{x1:a[0],y1:a[1],x2:b[0],y2:b[1],stroke:'rgba(255,255,255,.07)','stroke-width':2},svg);H.sv('line',{x1:c[0],y1:c[1],x2:e[0],y2:e[1],stroke:'rgba(255,255,255,.07)','stroke-width':2},svg)}
  const d=[[TE,120],[BL,200],[YE,160],[PK,260],[CO,340]];const shade=(c,k)=>{const n=parseInt(c.slice(1),16);const f=v=>Math.max(0,Math.min(255,Math.round(v*k)));return `rgb(${f(n>>16)},${f(n>>8&255)},${f(n&255)})`};const items=[];
  d.forEach(([c,h],i)=>{const [cx,cy]=iso(-300+i*150,0);const g=H.sv('g',{},svg);const s=60;const top=H.sv('path',{fill:shade(c,1.1)},g),L=H.sv('path',{fill:shade(c,.85)},g),R=H.sv('path',{fill:shade(c,.65)},g);const t=H.abs({left:cx-60+'px',width:'120px',textAlign:'center',top:'0',fontFamily:F.smono,fontSize:'30px',color:'#fff'},null,'0');items.push({cx,cy,s,top,L,R,t,h,dl:300+i*150,flag:i===4})});
  const flag=H.abs({left:'0',top:'0'});H.abs({left:'0',top:'0',width:'4px',height:'70px',background:'#fff'},flag);const fl=H.abs({left:'4px',top:'0',width:'50px',height:'32px',background:'#fff',clipPath:'polygon(0 0,100% 50%,0 100%)',transformOrigin:'0 50%'},flag);H.a(fl,[{transform:'scaleX(1)'},{transform:'scaleX(.7)'},{transform:'scaleX(1)'}],{d:600,i:Infinity});
  const back=k=>{const c1=1.70158,c3=c1+1;return 1+c3*Math.pow(k-1,3)+c1*Math.pow(k-1,2)};
  H.raf(t=>{items.forEach(o=>{const k=Math.max(0,Math.min(1,(t*1000-o.dl)/1000));const h=o.h*back(k);const {cx,cy,s}=o;const T=[[cx,cy-s*.5-h],[cx+s*.866,cy-h],[cx,cy+s*.5-h],[cx-s*.866,cy-h]];
    o.top.setAttribute('d','M'+T.map(p=>p.join(' ')).join(' L')+'Z');o.L.setAttribute('d',`M${cx-s*.866} ${cy-h} L${cx} ${cy+s*.5-h} L${cx} ${cy+s*.5} L${cx-s*.866} ${cy} Z`);o.R.setAttribute('d',`M${cx+s*.866} ${cy-h} L${cx} ${cy+s*.5-h} L${cx} ${cy+s*.5} L${cx+s*.866} ${cy} Z`);
    o.t.style.top=cy-h-s*.5-50+'px';o.t.textContent=Math.round(o.h*Math.min(1,k));if(o.flag){flag.style.transform=`translate(${cx-2}px,${cy-h-90}px)`;flag.style.opacity=k>.9?1:0}})})}});

defO({no:'50',cat:'INFO',name:'ランキングの入れ替え',en:'Bar Chart Race',lead:'横棒が伸び縮みしながら、順位がぐるぐる入れ替わる。',loop:6000,
use:'<b>人気ランキングの推移・年ごとの比較・SNSでバズる“バーチャートレース”</b>に。順位が入れ替わる瞬間は、つい見入ってしまいます。',
tips:['順位が変わるときは、棒を上下にスライドさせて入れ替えると分かりやすい','右上に大きく年を表示すると、時間の流れが伝わります','項目ごとに色を固定して、どれがどれかを見失わないように'],
p:`横棒グラフの棒が年ごとに伸び縮みし、値の大きい順に上下へ入れ替わっていく「ランキングの入れ替え（バーチャートレース）」のアニメーションを作ってください。
・項目（サンプル）：A・B・C・D・E の5つ。色は コーラル／黄／ティール／ピンク／青 で固定
・データ（サンプル、年ごと）：2022＝A50 B40 C30 D20 E10 → 2023＝A55 B70 C35 D40 E20 → 2024＝A60 B75 C90 D45 E50 → 2025＝A65 B80 C95 D100 E70
・棒：高さ80px、角丸（右だけ）。左に項目名、棒の右端に数値（Space Mono）
・1.2秒ごとに次の年へ：各棒の長さを新しい値へ0.8秒で伸び縮みさせ、同時に値の大きい順に上下の位置を入れ替える（translateY、cubic-bezier(.65,0,.35,1)）
・数値もなめらかに変化させる
・右下に大きく現在の年（Dela Gothic One、不透明度0.4）
・尺：6秒でループ`,
run(H){lab(H,'ランキングの入れ替え','Bar chart race');const names=['A','B','C','D','E'],cols=[CO,YE,TE,PK,BL];const D=[[50,40,30,20,10],[55,70,35,40,20],[60,75,90,45,50],[65,80,95,100,70]];const yr=H.abs({right:'90px',bottom:'80px',fontFamily:F.heavy,fontSize:'160px',color:'rgba(255,255,255,.4)'},null,'2022');
  const rows=names.map((n,i)=>{const r=H.abs({left:'180px',top:'0',width:'1200px',height:'80px'});H.abs({left:'-80px',top:'14px',fontFamily:F.heavy,fontSize:'44px',color:'#fff'},r,n);const b=H.abs({left:'0',top:'0',height:'80px',borderRadius:'0 16px 16px 0',background:cols[i]},r);const v=H.abs({top:'18px',fontFamily:F.smono,fontSize:'36px',color:'#fff'},r);return{r,b,v}});
  const ease=k=>k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2;H.raf(t=>{const seg=Math.min(3,Math.floor(t/1.2));const k=seg>=3?1:ease(Math.min(1,(t-seg*1.2)/.8));const a=D[Math.min(seg,3)],b=D[Math.min(seg+1,3)];yr.textContent=String(2022+Math.min(3,seg+(k>.5?1:0)));
    const cur=a.map((v,i)=>v+(b[i]-v)*(seg>=3?0:k));const rankA=[...a.keys()].sort((x,y)=>a[y]-a[x]),rankB=[...b.keys()].sort((x,y)=>b[y]-b[x]);
    rows.forEach((o,i)=>{const ya=rankA.indexOf(i),yb=rankB.indexOf(i);const y=170+(ya+(yb-ya)*(seg>=3?0:k))*110;o.r.style.transform=`translateY(${y}px)`;const w=cur[i]/100*1000;o.b.style.width=w+'px';o.v.style.left=w+16+'px';o.v.textContent=Math.round(cur[i])})})}});
