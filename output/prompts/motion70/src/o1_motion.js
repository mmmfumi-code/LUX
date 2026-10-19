/* ===== OTHER MOTION 01-20 ===== */
CUR_SEC='o';
const NV='#142047',CO='#ff6b5a',YE='#ffc93c',TE='#2ec4b6',PK='#ff8fab',BL='#4d96ff',WH='#ffffff';
const defO=o=>{o.bg=o.bg||NV;o.text=o.text??'';o.loop=o.loop||3000;def(o)};
const lab=(H,ja,en)=>{const l=H.abs({left:'48px',bottom:'36px',fontFamily:F.sans,fontWeight:'700',fontSize:'30px',color:'rgba(255,255,255,.85)'},null);H.el('span',{},l,ja);H.el('span',{fontWeight:'400',fontSize:'20px',marginLeft:'14px',opacity:.6,fontFamily:F.mono},l,en);return l};
const dot=(H,x,y,r,c,p,css)=>H.abs(Object.assign({left:x-r+'px',top:y-r+'px',width:2*r+'px',height:2*r+'px',borderRadius:'50%',background:c},css||{}),p);
const ground=(H,y)=>H.abs({left:'0',right:'0',top:y+'px',height:'4px',background:'rgba(255,255,255,.15)'});

/* PRINCIPLE */
defO({no:'01',cat:'PRINCIPLE',name:'アンティシペーション',en:'Anticipation',lead:'動く前に、いったん逆へ縮んで「ため」をつくる。',loop:2600,
use:'<b>ボタン・アイコン・キャラクターの動き出し</b>に。「ため」があるだけで、動きに意思と勢いが生まれます。',
tips:['ための時間は本番の動きの1/3くらいが目安','縮む方向は、これから進む方向の逆にする','止まる瞬間に少し行き過ぎると、さらに生き生きします'],
p:`四角いキャラクター（角丸の四角、コーラル #FF6B5A、中に白い三角の矢印）が、動く前に「ため」をつくってから右へ飛び出す「アンティシペーション（予備動作）」のアニメーションを作ってください。
・最初は画面左（x=20%）に置く
・0.0〜0.4秒（ため）：左へ30px下がりながら、横に scale(0.8, 1.15) で縮む。イージング ease-in-out
・0.4〜0.75秒（本番）：一気に右（x=75%）へ移動し、移動中は scale(1.25, 0.85) に伸びる。イージング cubic-bezier(.16,1,.3,1)
・0.75〜1.1秒：到着後、少し行き過ぎて戻る（scale 1.05 → 1）
・動いている間、後ろに白い短い線（スピード線）を3本出す
・尺：2.6秒でループ（最後に元の位置へフェードで戻す）`,
run(H){lab(H,'アンティシペーション','Anticipation');const b=H.abs({left:'280px',top:'360px',width:'180px',height:'180px',borderRadius:'36px',background:CO,display:'flex',alignItems:'center',justifyContent:'center'});
  H.el('div',{width:'0',height:'0',borderTop:'34px solid transparent',borderBottom:'34px solid transparent',borderLeft:'52px solid #fff',marginLeft:'12px'},b);
  H.a(b,[{transform:'translateX(0) scale(1,1)',offset:0},{transform:'translateX(-30px) scale(.8,1.15)',offset:.15,easing:'ease-in-out'},{transform:'translateX(840px) scale(1.25,.85)',offset:.29,easing:E.out},{transform:'translateX(860px) scale(1.05,.97)',offset:.36},{transform:'translateX(840px) scale(1,1)',offset:.42},{transform:'translateX(840px) scale(1,1)',offset:.85,opacity:1},{transform:'translateX(840px)',opacity:0,offset:.95},{transform:'translateX(0)',opacity:0,offset:.96},{transform:'translateX(0)',opacity:1,offset:1}],{d:2600,e:E.lin});
  for(let i=0;i<3;i++){const l=H.abs({left:'500px',top:390+i*50+'px',width:'160px',height:'8px',borderRadius:'4px',background:'#fff',opacity:0});H.a(l,[{opacity:0,transform:'translateX(0)'},{opacity:.8,offset:.4},{opacity:0,transform:'translateX(500px)'}],{d:400,dl:400+i*40,e:E.out})}}});

defO({no:'02',cat:'PRINCIPLE',name:'フォロースルー',en:'Follow-through',lead:'体が止まっても、しっぽや髪は少し遅れて止まる。',loop:2800,
use:'<b>キャラクター・旗・リボン・髪</b>など、柔らかい部分を持つものの動きに。リアルさと楽しさが一気に増します。',
tips:['先端に行くほど遅れを大きくすると自然','止まった後に1〜2回揺れ戻すと柔らかさが出ます','本体は硬く、付属物は柔らかく動かすのが原則'],
p:`丸いキャラクター（ティール #2EC4B6 の円、白い目）と、その後ろについた3つの丸いしっぽ（大きい順に黄 #FFC93C）が、右へ移動して止まる「フォロースルー」のアニメーションを作ってください。
・本体：画面左から右へ0.6秒で移動して止まる（cubic-bezier(.16,1,.3,1)）
・しっぽ：本体と同じ動きを、根元から順に0.06秒・0.12秒・0.18秒遅れて追いかける。止まるとき、本体より前に少し行き過ぎてから戻る（各しっぽ：行き過ぎ 20px・14px・8px）
・本体が止まった瞬間、本体を scale(1.1, 0.9) → 1 で軽く弾ませる
・1.6秒後、同じ動きで左へ戻る
・尺：2.8秒でループ`,
run(H){lab(H,'フォロースルー','Follow-through');const parts=[[-262,24,YE,180,8],[-200,34,YE,120,14],[-120,46,YE,60,20],[0,90,TE,0,0]];
  parts.forEach(([dx,r,c,dl,os],i)=>{const e=dot(H,420+dx,450,r,c);if(i===3){dot(H,110,70,16,'#fff',e);dot(H,116,70,7,NV,e)}
    H.a(e,[{transform:'translateX(0)'},{transform:`translateX(${700+os}px)`,offset:.22},{transform:'translateX(700px)',offset:.3},{transform:'translateX(700px)',offset:.57},{transform:`translateX(${-os}px)`,offset:.79},{transform:'translateX(0)',offset:.87},{transform:'translateX(0)'}],{d:2800,dl,e:'cubic-bezier(.16,1,.3,1)'})});}});

defO({no:'03',cat:'PRINCIPLE',name:'バウンス',en:'Bounce',lead:'落ちて、弾んで、だんだん小さく止まる。重さが伝わる基本。',loop:2600,
use:'<b>アイコンの登場・通知・ボタンのリアクション</b>に。弾み方の大きさで、重い／軽いを表現できます。',
tips:['弾む高さを毎回およそ半分にすると、自然な減衰に','落ちるときは加速、上がるときは減速','着地の瞬間だけ横に潰すと弾力が出ます'],
p:`黄色いボール（黄 #FFC93C、直径110px）が上から落ちて、床で弾みながらだんだん小さくなって止まる「バウンス」のアニメーションを作ってください。
・床：画面の下から30%の位置に、白い半透明の線
・落下と弾み：高さを 100% → 50% → 25% → 12% → 0 と半分ずつ減らしながら4回弾む。落ちるときは cubic-bezier(.55,0,1,.45)（加速）、上がるときは cubic-bezier(0,.55,.45,1)（減速）
・着地の瞬間：ボールを scale(1.25, 0.75) に潰し、すぐ戻す（下端を基準に）
・ボールの真下の床に楕円の影を置き、ボールが高いほど小さく薄くする
・同時にボールを少しずつ右へ転がす（全体で 300px）
・尺：2.6秒でループ`,
run(H){lab(H,'バウンス','Bounce');ground(H,640);const sh=H.abs({left:'595px',top:'630px',width:'120px',height:'24px',borderRadius:'50%',background:'rgba(0,0,0,.35)'});
  const b=dot(H,650,585,55,YE,null,{transformOrigin:'50% 100%'});const hs=[-440,0,-220,0,-110,0,-55,0,0];const k=[];const ofs=[0,.18,.3,.42,.5,.58,.63,.68,1];
  hs.forEach((y,i)=>k.push({transform:`translate(${ofs[i]*300}px,${y}px) scale(${y===0&&i<8?'1.25,.75':'1,1'})`,offset:ofs[i],easing:y===0?'cubic-bezier(0,.55,.45,1)':'cubic-bezier(.55,0,1,.45)'}));
  H.a(b,k,{d:2600,e:E.lin});H.a(sh,hs.map((y,i)=>({transform:`translateX(${ofs[i]*300}px) scale(${1+y/600})`,opacity:.4+y/900,offset:ofs[i]})),{d:2600,e:E.lin})}});

defO({no:'04',cat:'PRINCIPLE',name:'ウィグル',en:'Wiggle',lead:'小刻みに左右へ揺れて、気づいてほしい気持ちを伝える。',loop:2200,
use:'<b>通知ベル・着信・エラー表示・「ここを押して」</b>に。小さく揺らすだけで、目線を引き寄せられます。',
tips:['揺れ幅は±15°くらい、だんだん小さくするのがコツ','揺れの中心を上（ベルの吊り元）にすると自然','揺れた後に音の波紋を出すと「鳴っている」感じに'],
p:`黄色い通知ベル（黄 #FFC93C、SVGで描く）が、小刻みに左右へ揺れて「鳴っている」ことを伝える「ウィグル」のアニメーションを作ってください。
・回転の中心はベルの上端（吊り元）
・揺れ方：0.8秒の間に rotate を 0 → 15° → −13° → 10° → −7° → 4° → 0 と、だんだん小さく揺らす
・揺れている間、ベルの左右に「( )」の形の白い音波の線を2本ずつ出し、外へ広がりながら消す
・揺れの後は1.4秒止まり、またくり返す
・尺：2.2秒でループ`,
run(H){lab(H,'ウィグル','Wiggle');const svg=H.svg(1600,900);const g=H.sv('g',{},svg);g.style.transformOrigin='800px 300px';
  H.sv('path',{d:'M800 300 C700 300 690 400 690 470 L670 560 L930 560 L910 470 C910 400 900 300 800 300 Z',fill:YE},g);H.sv('circle',{cx:800,cy:590,r:32,fill:YE},g);H.sv('circle',{cx:800,cy:292,r:16,fill:YE},g);
  H.a(g,[0,15,-13,10,-7,4,0,0].map((r,i)=>({transform:`rotate(${r}deg)`,offset:i<7?i/6*.36:1})),{d:2200,e:'ease-in-out'});
  [[-1,0],[-1,1],[1,0],[1,1]].forEach(([s,k])=>{const a=H.sv('path',{d:s<0?`M${620-k*40} 380 Q${590-k*40} 450 ${620-k*40} 520`:`M${980+k*40} 380 Q${1010+k*40} 450 ${980+k*40} 520`,fill:'none',stroke:'#fff','stroke-width':10,'stroke-linecap':'round',opacity:0},svg);
    H.a(a,[{opacity:0,transform:'translateX(0)'},{opacity:.9,offset:.3},{opacity:0,transform:`translateX(${s*40}px)`}],{d:800,dl:k*120,e:E.out})})}});

defO({no:'05',cat:'PRINCIPLE',name:'パルス',en:'Pulse',lead:'ドクン、ドクンと脈打ち、波紋が広がる。生きている感じ。',loop:1600,
use:'<b>いいね・ライブ配信中・録音中・注目ボタン</b>に。心臓の鼓動のリズムは、見る人を自然と引き込みます。',
tips:['「ドクン（大）・ドクン（小）・休み」の2拍子にすると心臓らしい','波紋は本体と同じ色で、広がりながら薄くする','速さで気持ちを表現（速い＝ドキドキ、遅い＝穏やか）'],
p:`コーラル色のハート（#FF6B5A）が心臓の鼓動のように脈打ち、そのたびに波紋が広がる「パルス」のアニメーションを作ってください。
・ハート：画面中央、幅260px。SVGで描く
・鼓動：1.6秒周期で scale を 1 → 1.18（0.12秒）→ 1（0.12秒）→ 1.1（0.1秒）→ 1（0.14秒）→ 休み（1.12秒）。「ドクン、ドクン、休み」の2拍子
・1拍目の瞬間に、ハートと同じ形の線（線幅6px、同じ色）を scale 1 → 1.8、不透明度 0.8 → 0 へ0.8秒で広げる
・ハートの中にハイライト（白、不透明度0.35の小さな楕円）
・尺：1.6秒でループ`,
run(H){lab(H,'パルス','Pulse');const svg=H.svg(1600,900);const d='M800 620 C640 520 560 430 560 350 C560 280 615 240 675 240 C730 240 770 275 800 315 C830 275 870 240 925 240 C985 240 1040 280 1040 350 C1040 430 960 520 800 620 Z';
  const rp=H.sv('path',{d,fill:'none',stroke:CO,'stroke-width':6},svg);rp.style.transformOrigin='800px 430px';const h=H.sv('path',{d,fill:CO},svg);h.style.transformOrigin='800px 430px';H.sv('ellipse',{cx:660,cy:320,rx:34,ry:20,fill:'#fff',opacity:.35,transform:'rotate(-30 660 320)'},svg);
  H.a(h,[{transform:'scale(1)'},{transform:'scale(1.18)',offset:.075},{transform:'scale(1)',offset:.15},{transform:'scale(1.1)',offset:.21},{transform:'scale(1)',offset:.3},{transform:'scale(1)'}],{d:1600,e:'ease-in-out'});
  H.a(rp,[{transform:'scale(1)',opacity:.8},{transform:'scale(1.8)',opacity:0}],{d:800,e:E.out})}});

defO({no:'06',cat:'PRINCIPLE',name:'モーションパス',en:'Motion Path',lead:'決めた道すじに沿って、向きを変えながら進む。',loop:3400,
use:'<b>紙飛行機・矢印・配送ルート・旅の行程</b>に。点線の道すじと組み合わせると、「ここからここへ」が一目で伝わります。',
tips:['進行方向に向きを合わせる（offset-rotate: auto）のが自然さの鍵','道すじの点線を先に引いておくと、行き先が予告できます','途中で一瞬止めると「経由地」を表現できます'],
p:`白い紙飛行機が、波打つ曲線の道すじ（点線）に沿って、向きを変えながら飛んでいく「モーションパス」のアニメーションを作ってください。
・道すじ：画面の左下から右上へ、大きく2回うねるSVGの曲線。白い点線（線幅4px、点の間隔18px、不透明度0.4）
・0.0〜0.6秒：点線を左から描く（stroke-dashoffset）
・0.4〜2.6秒：紙飛行機（白い三角形2枚の組み合わせ）が道すじに沿って進む。CSS の offset-path と offset-rotate: auto で進行方向を向かせる。イージング ease-in-out
・紙飛行機の後ろに、通った跡の白い実線を少し遅れて引く
・ゴールに着いたら、黄色 #FFC93C の星がポンと出る
・尺：3.4秒でループ`,
run(H){lab(H,'モーションパス','Motion path');const svg=H.svg(1600,900);const d='M180 720 C420 480 560 760 800 520 S1180 300 1420 200';
  const dl=H.sv('path',{d,fill:'none',stroke:'#fff','stroke-width':4,'stroke-dasharray':'2 18','stroke-linecap':'round',opacity:.4},svg);
  const tr=H.sv('path',{d,fill:'none',stroke:'#fff','stroke-width':4,opacity:.8},svg);const L=tr.getTotalLength();tr.setAttribute('stroke-dasharray',L);
  H.a(tr,[{strokeDashoffset:L},{strokeDashoffset:L,offset:.15},{strokeDashoffset:0,offset:.8},{strokeDashoffset:0}],{d:3400,e:'ease-in-out'});
  const pl=H.abs({left:'0',top:'0',width:'0',height:'0',offsetPath:`path("${d}")`,offsetRotate:'auto'});const ps=H.svg(120,80,pl,{left:'-60px',top:'-40px'});H.sv('path',{d:'M0 40 L120 0 L60 80 Z',fill:'#fff'},ps);H.sv('path',{d:'M0 40 L120 0 L48 50 Z',fill:'#cfd8ff'},ps);
  H.a(pl,[{offsetDistance:'0%'},{offsetDistance:'0%',offset:.12},{offsetDistance:'100%',offset:.76},{offsetDistance:'100%'}],{d:3400,e:'ease-in-out'});
  const st=H.abs({left:'1380px',top:'110px',fontSize:'100px',color:YE},null,'★');H.a(st,[{transform:'scale(0)'},{transform:'scale(0)',offset:.76},{transform:'scale(1.3)',offset:.84},{transform:'scale(1)',offset:.9},{transform:'scale(1)'}],{d:3400,e:E.lin})}});

defO({no:'07',cat:'PRINCIPLE',name:'ピンポンループ',en:'Ping-pong Loop',lead:'行って、戻って、また行く。往復するだけの気持ちいいループ。',loop:2400,
use:'<b>ローディング・待ち時間・背景の飾り</b>に。往復の動きは目に優しく、ずっと見ていられるループになります。',
tips:['端で必ずゆっくりにする（ease-in-out）のが気持ちよさの正体','進捗バーを添えると「待っている」感が和らぎます','色を往復で変えると単調になりません'],
p:`ティール色 #2EC4B6 の四角が左右の端を行き来する「ピンポンループ」のアニメーションを作ってください。
・四角：一辺110px、角丸24px。画面中央の高さで、左端（x=15%）と右端（x=85%）を往復
・往復：片道1.2秒、イージング cubic-bezier(.65,0,.35,1)（両端でゆっくり）。CSS の animation-direction: alternate を使う
・移動中、四角を進行方向へ 20° 傾け、端で 0° に戻す
・色：左端でティール、右端で黄 #FFC93C に、往復しながら滑らかに変化
・画面下に細い進捗バー（白、不透明度0.3）を置き、四角の位置に合わせて伸び縮みさせる
・尺：2.4秒（1往復）でループ`,
run(H){lab(H,'ピンポンループ','Ping-pong loop');const b=H.abs({left:'185px',top:'395px',width:'110px',height:'110px',borderRadius:'24px',background:TE});
  H.a(b,[{transform:'translateX(0) rotate(0)',background:TE},{transform:'translateX(560px) rotate(20deg)',offset:.5},{transform:'translateX(1120px) rotate(0)',background:YE}],{d:1200,e:'cubic-bezier(.65,0,.35,1)',i:Infinity,dir:'alternate'});
  const bar=H.abs({left:'240px',top:'640px',width:'1120px',height:'8px',borderRadius:'4px',background:'rgba(255,255,255,.12)'});const f=H.abs({left:'0',top:'0',bottom:'0',width:'100%',borderRadius:'4px',background:'rgba(255,255,255,.5)',transformOrigin:'0 50%'},bar);
  H.a(f,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:1200,e:'cubic-bezier(.65,0,.35,1)',i:Infinity,dir:'alternate'})}});

defO({no:'08',cat:'PRINCIPLE',name:'ストップモーション風',en:'Stop-motion',lead:'わざとコマを減らしてカクカク動かす。手づくりの味。',loop:3000,
use:'<b>手づくり感・クラフト・子ども向け・レトロ</b>な動画に。なめらかすぎない動きが、温かみと個性を生みます。',
tips:['1秒8〜12コマが「コマ撮り」らしさの目安','コマごとに位置や角度をわずかにぶらすと、手で動かした感じに','紙のざらつきや影を足すと、本物の切り絵アニメに近づきます'],
p:`黄色い星（#FFC93C）が、わざとカクカクしたコマ撮り（ストップモーション）風に、画面を横切って跳ねていくアニメーションを作ってください。
・コマ数：1秒に8コマ（0.125秒ごとに位置を更新）。CSS なら steps() を使う
・動き：左から右へ、3回ぴょんぴょん跳ねながら進む（跳ねの高さ 200px）
・コマごとに、位置を ±4px・角度を ±6° ランダムにぶらす（手で動かした感じ）
・星の下に、少しずれた黒い影（不透明度0.3）を付けて、紙を切り抜いたように見せる
・画面右上に小さく「8コマ/秒」の表示
・尺：3秒でループ`,
run(H){lab(H,'ストップモーション風','Stop-motion');H.abs({right:'60px',top:'40px',fontFamily:F.mono,fontSize:'24px',color:'rgba(255,255,255,.6)'},null,'8コマ/秒');
  const s=H.abs({left:'0',top:'0',fontSize:'150px',lineHeight:'1',color:YE,textShadow:'8px 10px 0 rgba(0,0,0,.3)'},null,'★');let f=-1;
  H.raf(t=>{const k=Math.floor((t%3)*8);if(k===f)return;f=k;const p=k/24;const x=150+p*1250;const y=520-Math.abs(Math.sin(p*Math.PI*3))*200;s.style.transform=`translate(${x+rnd(-4,4)}px,${y+rnd(-4,4)}px) rotate(${rnd(-6,6)+p*360}deg)`})}});

defO({no:'09',cat:'PRINCIPLE',name:'スクワッシュ＆ストレッチ',en:'Squash & Stretch',lead:'速いときは伸び、ぶつかると潰れる。柔らかさの基本。',loop:2000,
use:'<b>ゼリーのような弾力・キャラクター・ボタンの押し心地</b>に。伸び縮みで、素材の柔らかさを伝えられます。',
tips:['伸び縮みしても体積（面積）は変えない（縦に1.3倍なら横は0.77倍）','落下中は縦に伸ばし、着地で横に潰すのが基本','硬いものは控えめに、柔らかいものは大胆に'],
p:`ピンク色 #FF8FAB の丸いゼリーが、跳び上がって落ちる間に伸び縮みする「スクワッシュ＆ストレッチ」のアニメーションを作ってください。
・床：画面下から30%の位置
・動き（2秒周期）：
　着地して潰れる scale(1.4, 0.65) → 戻る scale(0.85, 1.2) で跳び上がる → 頂点で scale(1, 1) → 落下中に縦に伸びる scale(0.8, 1.3) → 着地で潰れる
・体積が変わらないよう、縦と横の倍率をかけて約1になるようにする
・transform-origin は下端の中央
・ゼリーに白いハイライトと、黒い点の目を2つ（表情は着地で目を細める）
・尺：2秒でループ`,
run(H){lab(H,'スクワッシュ＆ストレッチ','Squash & stretch');ground(H,660);const w=H.abs({left:'690px',top:'440px',width:'220px',height:'220px',transformOrigin:'50% 100%'});
  const b=H.abs({inset:'0',borderRadius:'50% 50% 46% 46%',background:PK},w);dot(H,70,90,10,'#1b1b2f',b);dot(H,150,90,10,'#1b1b2f',b);H.abs({left:'40px',top:'30px',width:'50px',height:'26px',borderRadius:'50%',background:'#fff',opacity:.5},b);
  H.a(w,[{transform:'translateY(0) scale(1.4,.65)',offset:0},{transform:'translateY(0) scale(.85,1.2)',offset:.12,easing:'cubic-bezier(0,.55,.45,1)'},{transform:'translateY(-300px) scale(1,1)',offset:.45,easing:'cubic-bezier(.55,0,1,.45)'},{transform:'translateY(-40px) scale(.8,1.3)',offset:.9},{transform:'translateY(0) scale(1.4,.65)',offset:1}],{d:2000,e:E.lin,i:Infinity})}});

defO({no:'10',cat:'PRINCIPLE',name:'イージング比較',en:'Easing Compare',lead:'同じ距離でも、緩急で印象はまったく変わる。3つ並べて比べる。',loop:2600,
use:'<b>動きの解説動画・デザインの勉強会・社内共有</b>に。「なぜイージングが大事か」が一目で伝わります。',
tips:['等速（linear）は機械的、ease-outは上品、backは楽しい印象','実務ではまず ease-out（cubic-bezier(.16,1,.3,1)）を基本に','グラフの曲線を横に添えると、さらに分かりやすくなります'],
p:`同じ距離を同じ時間で動く3つの丸を並べて、イージング（緩急）の違いを比べるアニメーションを作ってください。
・3段に分けて、左に名前を表示：「等速 linear」「ゆっくり止まる ease-out」「弾んで止まる back」
・それぞれの丸（直径70px）を、左端から右端まで1.2秒で動かす
　1段目：linear（白）
　2段目：cubic-bezier(.16,1,.3,1)（ティール #2EC4B6）
　3段目：cubic-bezier(.34,1.56,.64,1)（コーラル #FF6B5A）
・各段に、丸の通り道の細い線と、開始・終了の目盛りを描く
・3つ同時にスタートし、ゴールで0.8秒止まってからスタート位置に戻る
・尺：2.6秒でループ`,
run(H){lab(H,'イージング比較','Easing');[['等速 linear','#fff',E.lin],['ゆっくり止まる ease-out',TE,E.out],['弾んで止まる back',CO,E.back]].forEach(([n,c,e],i)=>{const y=250+i*170;
  H.abs({left:'120px',top:y-20+'px',fontFamily:F.sans,fontWeight:'700',fontSize:'28px',color:'rgba(255,255,255,.85)',width:'340px'},null,n);H.abs({left:'500px',top:y+'px',width:'900px',height:'3px',background:'rgba(255,255,255,.15)'});
  [500,1400].forEach(x=>H.abs({left:x+'px',top:y-16+'px',width:'3px',height:'36px',background:'rgba(255,255,255,.3)'}));const d=dot(H,500,y+1,35,c);
  H.a(d,[{transform:'translateX(0)'},{transform:'translateX(900px)'}],{d:1200,e});H.a(d,[{transform:'translateX(900px)',opacity:1},{transform:'translateX(900px)',opacity:0}],{d:300,dl:2000,f:'forwards'})})}});

/* SHAPE */
defO({no:'11',cat:'SHAPE',name:'リピーター',en:'Repeater',lead:'1つの図形を回転コピーして、花のような模様に増やす。',loop:3600,
use:'<b>オープニングの飾り・ローディング・お祝い</b>に。1つの形から華やかな模様が生まれる瞬間は、見ていて気持ちいいものです。',
tips:['コピー数は6・8・12がきれいに割り切れます','1つずつ遅らせて出すと「増えていく」様子が見えます','全体をゆっくり回し続けると、ずっと見ていられるループに'],
p:`1つのカプセル型（角丸の細長い図形）を中心のまわりに回転コピーして、花のような模様に増やす「リピーター」のアニメーションを作ってください。
・図形：幅60px×高さ200pxのカプセル。中心から上へ120px離れた位置に置く
・コピー：30°ずつ回転させて12個。色はコーラル・黄・ティール・ピンク・青 #4D96FF の順にくり返す
・0.0〜1.2秒：1個ずつ0.1秒おきに、scale 0 → 1 で出す（cubic-bezier(.34,1.56,.64,1)）
・出そろったら全体を3秒で1回転させ続ける
・右上にコピー数のカウンター「×1 → ×12」を表示（Space Mono）
・尺：3.6秒でループ`,
run(H){lab(H,'リピーター','Repeater');const G=H.abs({left:'800px',top:'450px',width:'0',height:'0'});const cols=[CO,YE,TE,PK,BL];const cnt=H.abs({right:'70px',top:'40px',fontFamily:F.smono,fontSize:'44px',color:YE},null,'×1');
  for(let i=0;i<12;i++){const w=H.abs({left:'0',top:'0',transform:`rotate(${i*30}deg)`},G);const c=H.abs({left:'-30px',top:'-320px',width:'60px',height:'200px',borderRadius:'30px',background:cols[i%5],transformOrigin:'50% 320px'},w);
    H.a(c,[{transform:'scale(0)'},{transform:'scale(1)'}],{d:400,dl:i*100,e:E.back});H.wait(i*100,()=>{cnt.textContent='×'+(i+1)})}
  H.a(G,[{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{d:3000,dl:1200,e:'ease-in-out'})}});

defO({no:'12',cat:'SHAPE',name:'カレイドスコープ',en:'Kaleidoscope',lead:'色とりどりの図形が対称にくるくる回る、万華鏡。',loop:6000,
use:'<b>音楽・MV・お祭り・子ども向け</b>の背景に。対称な模様は、見る人を一瞬で引き込みます。',
tips:['6回対称（60°ずつ）が万華鏡らしい形の基本','層ごとに回転方向を変えると、模様が刻々と変わります','図形の数を増やしすぎると、ごちゃつくので注意'],
p:`色とりどりの図形が6回対称に並び、層ごとに逆回転して模様が変わり続ける「カレイドスコープ（万華鏡）」のアニメーションを作ってください。
・中心に白い小さな円
・層1（中心から120px）：コーラルの円 6個
・層2（220px）：黄色の三角 6個（30°ずらす）
・層3（330px）：ティールの四角 6個 とピンクの円 6個を交互に
・層4（440px）：青 #4D96FF の細長いひし形 12個
・各層を、交互に時計回り・反時計回りに回転させる（6秒〜12秒で1回転、層ごとに速さを変える）
・各図形は自分自身も回転させ、2秒周期で scale 0.8 ⇄ 1.1 に脈打たせる
・尺：6秒でループ`,
run(H){lab(H,'カレイドスコープ','Kaleidoscope');const C=H.abs({left:'800px',top:'450px'});dot(H,0,0,26,'#fff',C);
  [[120,6,'c',CO,0,1],[220,6,'t',YE,30,-1],[330,12,'m',TE,0,1],[440,12,'d',BL,15,-1]].forEach(([r,n,sh,col,off,dir],li)=>{const L=H.abs({left:'0',top:'0'},C);
    for(let i=0;i<n;i++){const a=(i*360/n+off)*Math.PI/180;const x=Math.cos(a)*r,y=Math.sin(a)*r;const c=sh==='m'&&i%2?PK:col;let e;
      if(sh==='c'||(sh==='m'&&i%2))e=dot(H,x,y,32,c,L);else if(sh==='t')e=H.abs({left:x-34+'px',top:y-30+'px',width:'0',height:'0',borderLeft:'34px solid transparent',borderRight:'34px solid transparent',borderBottom:`60px solid ${c}`},L);
      else if(sh==='m')e=H.abs({left:x-28+'px',top:y-28+'px',width:'56px',height:'56px',background:c,borderRadius:'8px'},L);else e=H.abs({left:x-14+'px',top:y-40+'px',width:'28px',height:'80px',background:c,transform:`rotate(${i*30+off+90}deg)`,borderRadius:'50%'},L);
      H.a(e,[{scale:.8},{scale:1.1},{scale:.8}],{d:2000,dl:-i*150,e:'ease-in-out',i:Infinity})}
    H.a(L,[{transform:'rotate(0)'},{transform:`rotate(${dir*360}deg)`}],{d:6000*(li%2+1),e:E.lin,i:Infinity})})}});

defO({no:'13',cat:'SHAPE',name:'ラインボイル',en:'Line Boil',lead:'手描きの線がふるふる震える。アニメのような温かみ。',loop:3000,
use:'<b>手描き風・絵本・ゆるい解説動画</b>に。止まった絵でも「生きている」感じが出て、手づくりの温かさが伝わります。',
tips:['震えの間隔は0.1〜0.15秒（1秒に8コマ前後）が手描きらしい','線の太さも少しずつ変えると、さらに手描き感が増します','止まっている絵にこそ効果的な手法です'],
p:`手描きの線で描いた星と雲が、ふるふると震え続ける「ラインボイル」のアニメーションを作ってください。
・左に黄色の星（線だけ、線幅8px、#FFC93C）、右に白い雲（線だけ、線幅8px）。どちらもSVGで描く
・SVGフィルター（feTurbulence＋feDisplacementMap、scale 6）を線にかけ、0.12秒ごとに feTurbulence の seed を変えて、線をふるふる震わせる
・線の端は丸く（stroke-linecap: round）
・星はゆっくり上下に浮遊、雲はゆっくり左右に漂う（4秒周期）
・尺：3秒でループ`,
run(H){lab(H,'ラインボイル','Line boil');const svg=H.svg(1600,900);const id='lb'+Math.floor(Math.random()*1e6);const f=H.sv('filter',{id},H.sv('defs',{},svg));const tb=H.sv('feTurbulence',{type:'fractalNoise',baseFrequency:'.03',numOctaves:2,seed:1},f);H.sv('feDisplacementMap',{in:'SourceGraphic',scale:8},f);
  let sp='';for(let k=0;k<11;k++){const a=-Math.PI/2+k*Math.PI/5,r=k%2?70:160;sp+=(k?'L':'M')+(560+r*Math.cos(a)).toFixed(0)+' '+(450+r*Math.sin(a)).toFixed(0)}
  const st=H.sv('path',{d:sp,fill:'none',stroke:YE,'stroke-width':10,'stroke-linejoin':'round','stroke-linecap':'round',filter:`url(#${id})`},svg);
  const cl=H.sv('path',{d:'M900 520 Q860 520 860 480 Q860 430 920 440 Q930 370 1010 380 Q1060 330 1120 380 Q1200 370 1200 440 Q1250 450 1240 500 Q1235 520 1200 520 Z',fill:'none',stroke:'#fff','stroke-width':10,'stroke-linejoin':'round',filter:`url(#${id})`},svg);
  H.a(st,[{transform:'translateY(0)'},{transform:'translateY(-30px)'},{transform:'translateY(0)'}],{d:3000,e:'ease-in-out',i:Infinity});H.a(cl,[{transform:'translateX(0)'},{transform:'translateX(30px)'},{transform:'translateX(0)'}],{d:3000,e:'ease-in-out',i:Infinity});
  let k=-1;H.raf(t=>{const q=Math.floor(t/.12);if(q!==k){k=q;tb.setAttribute('seed',q%30)}})}});

defO({no:'14',cat:'SHAPE',name:'シェイプモーフ',en:'Shape Morph',lead:'丸が四角に、四角が三角に。形がなめらかに変身する。',loop:4800,
use:'<b>ロゴの変形・状態の変化・場面のつなぎ</b>に。形が変わるだけで「変化」や「進化」を表現できます。',
tips:['点の数をそろえた多角形どうしだと、きれいにモーフィングできます','形と一緒に色も変えると、変化がはっきりします','変身の途中で少し回転させると、ダイナミックに'],
p:`1つの図形が、円 → 四角 → 三角 → 星 → 円 となめらかに変身し続ける「シェイプモーフ」のアニメーションを作ってください。
・図形は画面中央、幅380px。CSS の clip-path: polygon() を使い、どの形も同じ数（例：20点）の頂点で作って、なめらかに補間する
・形ごとに色も変える：円＝コーラル、四角＝黄、三角＝ティール、星＝ピンク
・1つの形で0.6秒止まり、0.6秒かけて次の形へ（cubic-bezier(.65,0,.35,1)）。変身中は 90° 回転を足す
・形が切り替わるたびに、下に形の名前（Circle / Square / Triangle / Star）を小さく表示
・尺：4.8秒でループ`,
run(H){lab(H,'シェイプモーフ','Shape morph');const N=20;const pts=f=>[...Array(N)].map((_,i)=>f(i/N*Math.PI*2-Math.PI/2));const P=a=>a.map(([x,y])=>`${(50+x*50).toFixed(1)}% ${(50+y*50).toFixed(1)}%`).join(',');
  const circ=pts(a=>[Math.cos(a),Math.sin(a)]);const sq=pts(a=>{const m=Math.max(Math.abs(Math.cos(a)),Math.abs(Math.sin(a)));return[Math.cos(a)/m*.85,Math.sin(a)/m*.85]});
  const tri=pts(a=>{const k=Math.PI/3;const n=Math.cos(k)/Math.cos(((a+Math.PI/2)%(2*k)+2*k)%(2*k)-k);return[Math.cos(a)*n*.95,Math.sin(a)*n*.95+.15]});const star=pts((a)=>{const i=Math.round((a+Math.PI/2)/(Math.PI*2)*N);const r=i%2?.45:1;return[Math.cos(a)*r,Math.sin(a)*r]});
  const shapes=[[circ,CO,'Circle'],[sq,YE,'Square'],[tri,TE,'Triangle'],[star,PK,'Star'],[circ,CO,'Circle']];const el=H.abs({left:'610px',top:'260px',width:'380px',height:'380px'});const nm=H.abs({left:'0',right:'0',top:'690px',textAlign:'center',fontFamily:F.mono,fontSize:'30px',color:'rgba(255,255,255,.7)'});
  const k=[];shapes.forEach(([s,c],i)=>{k.push({clipPath:`polygon(${P(s)})`,background:c,transform:`rotate(${i*90}deg)`,offset:i/4});});
  const kk=[];shapes.forEach((sh,i)=>{if(i<4){kk.push(Object.assign({},k[i],{offset:i/4}),Object.assign({},k[i],{offset:i/4+.125,easing:'cubic-bezier(.65,0,.35,1)'}))}else kk.push(k[i])});H.a(el,kk,{d:4800,e:E.lin});
  shapes.slice(0,4).forEach(([,,n],i)=>H.wait(i*1200,()=>{nm.textContent=n}))}});

defO({no:'15',cat:'SHAPE',name:'惑星の軌道',en:'Orbit',lead:'太陽のまわりを、大きさも速さも違う惑星が回る。',loop:8000,
use:'<b>宇宙・科学・組織図・関係性の図解</b>に。中心と周りの関係を、動きで分かりやすく見せられます。',
tips:['外側の惑星ほどゆっくり回すと自然','軌道の線を薄く描いておくと、動きの道すじが分かりやすい','惑星にラベルを付ければ「サービスの関係図」にも使えます'],
p:`中央の太陽のまわりを、3つの惑星がそれぞれの軌道で回る「惑星の軌道」のアニメーションを作ってください。
・太陽：画面中央、直径160px、黄 #FFC93C。外側に同じ色の光（box-shadow 0 0 80px）が4秒周期でゆっくり脈打つ
・軌道：半径200px・320px・430pxの白い細い円（線幅2px、不透明度0.2）
・惑星：内側から コーラル（直径40px、4秒で1周）、ティール（直径60px、6秒で1周、小さな月が周りを回る）、ピンク（直径50px、8秒で1周、輪がある）
・全体をわずかに傾けた楕円にして（縦 0.55倍）、奥行きを感じさせる。手前を通るときは惑星を少し大きく
・背景に小さな星（白い点）を50個、ゆっくり瞬かせる
・尺：8秒でループ`,
run(H){lab(H,'惑星の軌道','Orbit');for(let i=0;i<50;i++){const s=dot(H,rnd(0,1600),rnd(0,900),rnd(1,3),'#fff');H.a(s,[{opacity:.2},{opacity:1},{opacity:.2}],{d:rnd(1500,3000),dl:-rnd(0,3000),i:Infinity})}
  [200,320,430].forEach(r=>H.abs({left:800-r+'px',top:450-r*.55+'px',width:2*r+'px',height:2*r*.55+'px',borderRadius:'50%',border:'2px solid rgba(255,255,255,.2)',boxSizing:'border-box'}));
  const sun=dot(H,800,450,80,YE,null,{boxShadow:'0 0 80px '+YE,zIndex:5});H.a(sun,[{boxShadow:'0 0 50px '+YE},{boxShadow:'0 0 110px '+YE},{boxShadow:'0 0 50px '+YE}],{d:4000,i:Infinity});
  const pl=[[200,20,CO,4],[320,30,TE,6],[430,25,PK,8]].map(([r,s,c,T])=>{const p=dot(H,0,0,s,c);if(T===8)H.abs({left:'-14px',top:s-4+'px',width:2*s+28+'px',height:'8px',borderRadius:'4px',background:'rgba(255,255,255,.6)'},p);return[p,r,T]});
  const moon=dot(H,0,0,8,'#fff');H.raf(t=>{pl.forEach(([p,r,T])=>{const a=t/T*Math.PI*2;const z=Math.sin(a);p.style.transform=`translate(${800+r*Math.cos(a)}px,${450+r*.55*z}px) scale(${.8+.3*(z+1)/2})`;p.style.zIndex=z>0?10:1;if(T===6){moon.style.transform=`translate(${800+r*Math.cos(a)+50*Math.cos(t*4)}px,${450+r*.55*z+30*Math.sin(t*4)}px)`;moon.style.zIndex=z>0?11:1}})})}});

defO({no:'16',cat:'SHAPE',name:'メタボール',en:'Metaballs',lead:'丸どうしが近づくと、とろりとくっついて一つになる。',loop:4000,
use:'<b>つながり・合体・チームワーク・やわらかいブランド</b>の表現に。液体のような動きで、有機的でおしゃれな印象になります。',
tips:['ぼかし（blur）とコントラスト（contrast）の組み合わせで作れます','背景は単色にするのが必須（グラデーションだと効果が崩れる）','丸の数は3〜5個が見やすい'],
p:`いくつかの丸が近づくと、液体のようにとろりとくっついて一つになり、また離れる「メタボール」のアニメーションを作ってください。
・背景：紺 #142047（単色であることが必須）
・仕組み：丸を入れた親要素に filter: blur(28px) contrast(30) をかけ、背景色も親に指定する（丸の輪郭がくっつき合う）
・丸：コーラル #FF6B5A の円を4つ（直径160〜240px）
・動き：中央に集まってくっつく（1.6秒、cubic-bezier(.65,0,.35,1)）→ 0.4秒止まる → 四方へ離れる（1.6秒）
・集まるときに全体をゆっくり 90° 回転させる
・尺：4秒でループ`,
run(H){lab(H,'メタボール','Metaballs');const gs=H.svg(1,1,null,{width:'0',height:'0'});const fl=H.sv('filter',{id:'goo16'},H.sv('defs',{},gs));H.sv('feGaussianBlur',{in:'SourceGraphic',stdDeviation:18},fl);H.sv('feColorMatrix',{values:'1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -18'},fl);const B=H.abs({inset:'0',filter:'url(#goo16)'});const R=H.abs({left:'800px',top:'450px'},B);
  [[-380,-160,120],[360,-180,100],[-300,200,90],[340,190,110]].forEach(([x,y,r])=>{const d=dot(H,0,0,r,CO,R);H.a(d,[{transform:`translate(${x}px,${y}px)`},{transform:`translate(${x*.12}px,${y*.12}px)`,offset:.4},{transform:`translate(${x*.12}px,${y*.12}px)`,offset:.5},{transform:`translate(${x}px,${y}px)`,offset:.9},{transform:`translate(${x}px,${y}px)`}],{d:4000,e:'cubic-bezier(.65,0,.35,1)'})});
  H.a(R,[{transform:'rotate(0)'},{transform:'rotate(90deg)',offset:.5},{transform:'rotate(90deg)'}],{d:4000,e:'ease-in-out'})}});

defO({no:'17',cat:'SHAPE',name:'ドットの波',en:'Dot Wave',lead:'格子に並んだ点が、波のように順番に上下する。',loop:3000,
use:'<b>音楽・テクノロジー・背景素材</b>に。シンプルな点の集まりでも、波打つだけで「動いている世界」が生まれます。',
tips:['中心からの距離で遅らせると「波紋」、横の位置で遅らせると「波」になります','点の大きさも一緒に変えると立体感が出ます','色を上下の位置に合わせて変えると、より華やかに'],
p:`格子状に並んだ点が、中心から波紋のように順番に上下に揺れる「ドットの波」のアニメーションを作ってください。
・点：横24×縦12の格子、間隔55px、直径14px
・揺れ：各点を translateY 0 → −36px → 0 で1.5秒周期で揺らす（ease-in-out）。開始の遅れを「画面中心からの距離 × 0.004秒」にして、中心から外へ広がる波紋にする
・点の色：上がっているときは黄 #FFC93C、下がっているときはティール #2EC4B6 になるよう、高さに合わせて色を変える
・点の大きさも、上がると1.4倍・下がると0.8倍
・尺：3秒でループ`,
run(H){lab(H,'ドットの波','Dot wave');const ds=[];for(let y=0;y<12;y++)for(let x=0;x<24;x++){const px=168+x*55,py=150+y*55;ds.push([dot(H,px,py,7,TE),Math.hypot(px-800,py-450)])}
  H.raf(t=>{ds.forEach(([d,r])=>{const s=Math.sin((t-r*.004)*Math.PI*2/1.5);d.style.transform=`translateY(${-18-18*s}px) scale(${1.1+.3*s})`;d.style.background=s>0?YE:TE})})}});

defO({no:'18',cat:'SHAPE',name:'らせんドット',en:'Spiral Dots',lead:'ひまわりの種のように並んだ点が、らせんを描いて回る。',loop:6000,
use:'<b>催眠・宇宙・自然・ブランドの背景</b>に。黄金角で並べた点は、自然界と同じ美しい模様をつくります。',
tips:['黄金角（約137.5°）ずつ回して並べると、ひまわりの模様になります','外側ほど点を大きくすると奥行きが出ます','回転をゆっくりにすると、瞑想的な雰囲気に'],
p:`ひまわりの種のように黄金角（137.5°）で並べた点が、らせん模様を描きながらゆっくり回る「らせんドット」のアニメーションを作ってください。
・点：300個。n番目の点を「角度 = n × 137.5°、半径 = 22 × √n」の位置に置く（Canvas で描く）
・点の大きさ：中心は小さく（2px）、外側ほど大きく（9px）
・色：中心から外へ、黄 #FFC93C → コーラル #FF6B5A → ピンク #FF8FAB のグラデーション
・全体を12秒で1回転させ、同時に各点の半径を 1 ⇄ 1.08 倍でゆっくり呼吸させる（3秒周期）
・最初の1.5秒で、中心から外へ順番に点が現れる
・尺：6秒でループ`,
run(H){lab(H,'らせんドット','Spiral dots');const c=H.canvas();const x=c.getContext('2d');const cols=[[255,201,60],[255,107,90],[255,143,171]];const mix=(a,b,k)=>a.map((v,i)=>Math.round(v+(b[i]-v)*k));
  H.raf(t=>{x.clearRect(0,0,1600,900);const N=300;const show=Math.min(N,t/1.5*N);const br=1+.04*(1-Math.cos(t/3*Math.PI*2));for(let n=1;n<show;n++){const a=n*137.5*Math.PI/180+t/12*Math.PI*2;const r=22*Math.sqrt(n)*br;const k=n/N;const col=k<.5?mix(cols[0],cols[1],k*2):mix(cols[1],cols[2],(k-.5)*2);
    x.fillStyle=`rgb(${col})`;x.beginPath();x.arc(800+r*Math.cos(a),450+r*Math.sin(a),2+7*k,0,7);x.fill()}})}});

defO({no:'19',cat:'SHAPE',name:'パーティクル噴水',en:'Particle Fountain',lead:'下から色とりどりの粒が噴き上がり、放物線を描いて落ちる。',loop:4000,
use:'<b>お祝い・達成・オープニング・CTAの後ろ</b>に。華やかで、見る人の気分を上げてくれます。',
tips:['粒の数は150個前後が華やかさと軽さのバランスが良い','重力（下向きの加速）を入れるのが放物線らしさのコツ','粒の形を丸・四角・三角で混ぜると、紙吹雪っぽくなります'],
p:`画面下の中央から、色とりどりの粒（パーティクル）が噴水のように噴き上がり、放物線を描いて落ちる「パーティクル噴水」のアニメーションを作ってください。
・Canvas で描く。毎フレーム3個ずつ、画面下中央から粒を発射し、全体で最大200個
・発射：上向きに速さ 900〜1300px/秒、左右に −350〜350px/秒のランダム。重力 1600px/秒² で引き戻す
・粒：丸・四角・三角をランダム、大きさ 8〜18px、色はコーラル・黄・ティール・ピンク・白。くるくる回転させる
・画面外に出た粒は消して、新しく発射し直す
・噴き出し口に、白い光の円（ぼかし20px）を脈打たせる
・尺：4秒でループ（噴水は途切れず続く）`,
run(H){lab(H,'パーティクル噴水','Particle fountain');const c=H.canvas();const x=c.getContext('2d');const P=[];const cols=[CO,YE,TE,PK,'#fff'];let last=0;
  const g=dot(H,800,900,50,'#fff',null,{filter:'blur(20px)',opacity:.6});H.a(g,[{scale:1},{scale:1.4},{scale:1}],{d:600,i:Infinity});
  H.raf(t=>{const dt=Math.min(.05,t-last);last=t;for(let i=0;i<3&&P.length<200;i++)P.push({x:800,y:900,vx:rnd(-350,350),vy:-rnd(900,1300),s:rnd(8,18),c:pick(cols),sh:Math.floor(rnd(0,3)),r:rnd(0,6),vr:rnd(-8,8)});
    x.clearRect(0,0,1600,900);for(let i=P.length-1;i>=0;i--){const p=P[i];p.vy+=1600*dt;p.x+=p.vx*dt;p.y+=p.vy*dt;p.r+=p.vr*dt;if(p.y>920){P.splice(i,1);continue}
      x.save();x.translate(p.x,p.y);x.rotate(p.r);x.fillStyle=p.c;x.beginPath();if(p.sh===0)x.arc(0,0,p.s/2,0,7);else if(p.sh===1)x.rect(-p.s/2,-p.s/2,p.s,p.s);else{x.moveTo(0,-p.s/2);x.lineTo(p.s/2,p.s/2);x.lineTo(-p.s/2,p.s/2)}x.fill();x.restore()}})}});

defO({no:'20',cat:'SHAPE',name:'図形の行進',en:'Shape Parade',lead:'丸・三角・四角が、ベルトコンベアに乗ってぴょこぴょこ進む。',loop:4000,
use:'<b>工程の説明・仕組みの紹介・子ども向け</b>に。ものが流れていく様子で「つくられていく」感じを表現できます。',
tips:['図形ごとに違う動き（転がる・跳ねる・滑る）にすると楽しい','ベルトの模様も一緒に流すと、動いている感じが強まります','途中に「機械」を置くと、変化する工程も表現できます'],
p:`丸・三角・四角の図形が、ベルトコンベアに乗って左から右へ、それぞれ違う動き方で進んでいく「図形の行進」のアニメーションを作ってください。
・ベルトコンベア：画面下から35%の位置、幅いっぱい、高さ40px。灰色の帯に、白い斜線の模様を左から右へ等速で流す（ローラーの丸も回転させる）
・図形：丸（コーラル、転がりながら進む＝回転）、三角（黄、ぴょこぴょこ跳ねながら進む）、四角（ティール、角を軸にパタンパタンと倒れながら進む）、星（ピンク、くるくる回りながら跳ねる）
・図形は1秒おきに左端から出てきて、4秒で右端まで進んで消える
・尺：4秒でループ（行進は途切れず続く）`,
run(H){lab(H,'図形の行進','Shape parade');const belt=H.abs({left:'0',right:'0',top:'560px',height:'40px',background:'#3a466e',overflow:'hidden'});const st=H.abs({left:'-80px',top:'0',bottom:'0',width:'1800px',background:'repeating-linear-gradient(-45deg,rgba(255,255,255,.18) 0 14px,transparent 14px 40px)'},belt);H.a(st,[{transform:'translateX(0)'},{transform:'translateX(56.6px)'}],{d:400,e:E.lin,i:Infinity});
  const shapes=[(p)=>dot(H,0,0,50,CO,p),(p)=>H.abs({left:'-50px',top:'-50px',width:'0',height:'0',borderLeft:'50px solid transparent',borderRight:'50px solid transparent',borderBottom:'90px solid '+YE},p),(p)=>H.abs({left:'-45px',top:'-45px',width:'90px',height:'90px',background:TE,borderRadius:'10px'},p),(p)=>H.abs({left:'-55px',top:'-70px',fontSize:'110px',lineHeight:'1',color:PK},p,'★')];
  for(let i=0;i<4;i++){const w=H.abs({left:'0',top:'510px'});const inner=H.abs({left:'0',top:'0'},w);shapes[i](inner);H.a(w,[{transform:'translateX(-100px)'},{transform:'translateX(1700px)'}],{d:4000,dl:-i*1000,e:E.lin,i:Infinity});
    const k=[[{transform:'rotate(0)'},{transform:'rotate(1080deg)'}],[{transform:'translateY(0)'},{transform:'translateY(-80px)',offset:.5},{transform:'translateY(0)'}],[{transform:'rotate(0)'},{transform:'rotate(90deg)'}],[{transform:'translateY(0) rotate(0)'},{transform:'translateY(-110px) rotate(180deg)',offset:.5},{transform:'translateY(0) rotate(360deg)'}]][i];
    H.a(inner,k,{d:[4000,500,600,800][i],e:i===1||i===3?'ease-in-out':E.lin,i:Infinity})}}});
