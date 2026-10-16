/* ===== DEPTH 21-30 ===== */
const TEAL='#2ee6c9';

def({no:'21',cat:'DEPTH',name:'テキストトンネル',en:'Text Tunnel',lead:'奥から次々に文字が飛んでくる、終わらないトンネル。',
text:'未来へ',loop:4000,bg:'#031413',
use:'<b>オープニング・タイトルコール・ワープ</b>の表現に。「〇〇の世界へ」「次のステージへ」など、入り込む系の言葉に。',
tips:['層の数を8→14に増やすと密度が上がって吸い込まれ感が強くなります','奥ほど暗く、手前ほど明るくするのが遠近感のコツ','中心を少し上にずらすと「上り坂を進む」感覚になります'],
p:`画面の奥から「{T}」と四角い枠が次々に飛んできて、カメラの横を通り過ぎていく「文字のトンネル」を作ってください。
・背景：#031413
・1つの層：幅1400px×高さ780pxの四角い枠（線幅6px）と、その中央の「{T}」（Dela Gothic One、180px）のセット
・層の色は交互に #2EE6C9 と #FFFFFF。文字は #2EE6C9 の層にだけ入れ、白の層は枠だけにする（重なっても読みやすくするため）
・各層の動き（4秒・無限ループ・等速）：scale 0.05／透明 → scale 0.3 で不透明 → scale 1.6・不透明度0.8 → scale 5／透明（キーフレーム 0 / 15 / 60 / 100%）。イージングは cubic-bezier(.55,0,1,.45)（奥はゆっくり、手前で一気に）
・層は8枚。それぞれ 0.5秒ずつ再生開始をずらし、最初から途切れずに奥から湧いてくるようにする（animation-delay をマイナス値に）
・尺：4秒で完全ループ`,
run(H,t){for(let i=0;i<8;i++){const c=i%2?'#fff':TEAL;const L=H.abs({left:'100px',top:'60px',width:'1400px',height:'780px',border:`6px solid ${c}`,display:'flex',alignItems:'center',justifyContent:'center',boxSizing:'border-box'});
    if(i%2===0)BIG(H,t,{color:c,fontSize:fs(t,180,1000)+'px'},L);
    H.a(L,[{transform:'scale(.05)',opacity:0,offset:0},{transform:'scale(.3)',opacity:1,offset:.15},{transform:'scale(1.6)',opacity:.8,offset:.6},{transform:'scale(5)',opacity:0,offset:1}],{d:4000,e:'cubic-bezier(.55,0,1,.45)',i:Infinity,dl:-i*500,f:'none'})}
}});

def({no:'22',cat:'DEPTH',name:'回転シリンダー',en:'Cylinder Spin',lead:'円柱の表面に貼った文字が、3段で逆回転する。',
text:'回る世界',loop:8000,bg:'#081a1c',
use:'<b>ループ素材・場面のつなぎ・音楽系の背景</b>に。グルグル回ることで「繰り返し」「循環」「時間」を表現できます。',
tips:['段ごとに回転方向を変えるのが単調にしないコツ','裏側を見せない（backface-visibility: hidden）とスッキリ、見せると透明な筒のように','傾き（rotateX）を−12°にすると、上から覗き込む構図になります'],
p:`「{T}」の文字を円柱の表面にぐるりと貼り付け、その円柱を3段重ねて段ごとに逆方向へ回転させる演出を作ってください。
・背景：#081A1C。CSS 3D（perspective: 1600px、transform-style: preserve-3d）を使う
・1段の作り方：「{T}」を1文字ずつに分け、円周を12等分した位置に置く（文字が12個に満たなければくり返す）。各文字は rotateY(30°×番号) translateZ(520px)。文字は Dela Gothic One、140px
・裏側に回った文字は見えないようにする（backface-visibility: hidden）
・3段を縦に並べ（段の間隔170px）、色を上から #2EE6C9 → 白 → #2EE6C9
・回転：1段目と3段目は8秒で rotateY 0→−360°、2段目は8秒で 0→+360°（linear・無限）
・円柱全体を rotateX(−12°) で少し上から見下ろす角度にする
・尺：8秒で完全ループ`,
run(H,t){const P=H.box({perspective:'1600px'});const R=H.el('div',{position:'relative',width:'0',height:'0',transformStyle:'preserve-3d',transform:'rotateX(-12deg)'},P);
  let s=[...t];while(s.length<12)s=s.concat([...t]);s=s.slice(0,12);
  [-170,0,170].forEach((y,ri)=>{const ring=H.el('div',{position:'absolute',left:'0',top:y+'px',transformStyle:'preserve-3d'},R);
    s.forEach((ch,i)=>H.abs({left:'-70px',top:'-70px',width:'140px',height:'140px',textAlign:'center',lineHeight:'140px',fontFamily:F.heavy,fontSize:'130px',color:ri===1?'#fff':TEAL,transform:`rotateY(${i*30}deg) translateZ(520px)`,backfaceVisibility:'hidden'},ring,ch));
    const d=ri===1?360:-360;H.a(ring,[{transform:'rotateY(0deg)'},{transform:`rotateY(${d}deg)`}],{d:8000,e:E.lin,i:Infinity})});
}});

def({no:'23',cat:'DEPTH',name:'キューブローテート',en:'Cube Rotate',lead:'立方体がカチッと回るたびに、面の言葉が切り替わる。',
text:'見る 知る 試す 続ける',multi:true,loop:4000,bg:'#0a0d10',
use:'<b>手順・ステップ・4つのポイント</b>の紹介に。「〇〇の4ステップ」の章扉や、サービスの特徴紹介に。',
tips:['回転0.4秒＋静止0.6秒のリズムが「カチッ」と気持ちいい比率','面ごとに色を変えると、どの面か一目で分かります','縦回転（rotateX）にするとスロットのような印象に'],
p:`立方体が90°ずつ「カチッ」と回転し、そのたびに正面の言葉が切り替わる演出を作ってください。
・背景：#0A0D10。CSS 3D（perspective: 2000px、transform-style: preserve-3d）
・立方体：1辺500px。前・右・後・左の4面に「{T}」をスペースで区切った語を1語ずつ配置
・面のデザイン：1・3面目は背景 #2EE6C9・文字 #0A0D10、2・4面目は背景 #10282A・文字 #2EE6C9。文字は Dela Gothic One、面に収まる最大サイズ
・回転：0.6秒止まる → 0.4秒で rotateY −90°（イージング cubic-bezier(.87,0,.13,1)）をくり返し、4回で1周
・回転中だけ立方体を scale 0.9 に縮めて、止まると1に戻す（重さが出る）
・立方体全体を rotateX(−18°) で少し上から見る角度に
・尺：4秒で完全ループ`,
run(H,t,w){w=w.slice(0,4);while(w.length<4)w.push(w[w.length-1]||t);const P=H.box({perspective:'2000px'});
  const C=H.el('div',{position:'relative',width:'500px',height:'500px',transformStyle:'preserve-3d'},P);
  w.forEach((s,i)=>{const alt=i%2;H.abs({inset:'0',display:'flex',alignItems:'center',justifyContent:'center',background:alt?'#10282a':TEAL,color:alt?TEAL:'#0a0d10',fontFamily:F.heavy,fontSize:fs(s,200,430)+'px',transform:`rotateY(${i*90}deg) translateZ(250px)`,backfaceVisibility:'hidden'},C,s)});
  const k=[];for(let i=0;i<4;i++){k.push({transform:`rotateX(-18deg) rotateY(${-90*i}deg) scale(1)`,offset:i/4},{transform:`rotateX(-18deg) rotateY(${-90*i}deg) scale(1)`,offset:i/4+.15},{transform:`rotateX(-18deg) rotateY(${-90*i-45}deg) scale(.9)`,offset:i/4+.2})}
  k.push({transform:'rotateX(-18deg) rotateY(-360deg) scale(1)',offset:1});
  H.a(C,k,{d:4000,e:E.lin,i:Infinity});
}});

def({no:'24',cat:'DEPTH',name:'押し出し3D',en:'Extrude Swing',lead:'厚みのある立体文字が、首振りして側面を見せる。',
text:'立体感',loop:4000,bg:'#0c1a1b',
use:'<b>ロゴ・タイトル・チャンネル名</b>に。ゲーム、おもちゃ、ポップな商品紹介。「厚み」があるだけで高級感と存在感が出ます。',
tips:['層の数24で厚み約30px。増やすほど分厚い看板に','側面の色は正面の色を暗くしたものにすると自然な立体に','振れ幅±25°以上にすると、文字の厚みが不自然に見えるので注意'],
p:`厚み（奥行き）のある立体文字「{T}」が、左右にゆっくり首を振って側面を見せる演出を作ってください。
・背景：#0C1A1B
・文字：Dela Gothic One、画面幅の約60%、正面の色 #2EE6C9
・厚み：text-shadow を24層重ねて押し出す。n層目は x方向 −sin(角度)×1.3×n px、y方向 1.2×n px の位置に、#0F6E63 から #06302B へ徐々に暗くなる色で置く（ぼかし0）
・首振り：角度 = 25° × sin(時間×2π/4秒)。毎フレーム、文字に perspective(1200px) rotateY(角度) をかけ、同時に上の text-shadow の x方向も角度に合わせて計算し直す（側面が回転方向に見える）
・最後の層の下に、ぼかし30pxの黒い影を落とす
・尺：4秒でループ`,
run(H,t){const B=H.box({perspective:'1200px'});const el=BIG(H,t,{color:TEAL,fontSize:fs(t,240,1000)+'px'},B);
  const cols=[];for(let i=1;i<=24;i++){const k=i/24;const r=Math.round(15-9*k),g=Math.round(110-62*k),b=Math.round(99-56*k);cols.push(`rgb(${r},${g},${b})`)}
  H.raf(s=>{const a=25*Math.sin(s*Math.PI*2/4);const dx=-Math.sin(a*Math.PI/180)*1.3*3;const sh=cols.map((c,i)=>`${(dx*(i+1)/3).toFixed(1)}px ${(1.2*(i+1)).toFixed(1)}px 0 ${c}`);sh.push(`${(dx*8).toFixed(1)}px 40px 30px rgba(0,0,0,.7)`);
    el.style.textShadow=sh.join(',');el.style.transform=`rotateY(${a.toFixed(2)}deg)`});
}});

def({no:'25',cat:'DEPTH',name:'遠近クロール',en:'Perspective Crawl',lead:'床に書かれた文章が、遠くの地平線へ流れていく。',
text:'第一章 すべては ここから 始まった',multi:true,loop:12000,bg:'#020608',
use:'<b>あらすじ・前回までのあらすじ・プロローグ</b>に。シリーズ動画の冒頭や、プロジェクトの経緯説明に。',
tips:['傾き（rotateX）58°が「床」に見える目安。大きくするほど寝かせた感じに','行間を広くとると、遠くでも読みやすさが保てます','奥へのフェードを強めると、宇宙空間のような余韻が出ます'],
p:`床に書かれた文章が、画面の手前から奥の地平線へ向かって流れていく「遠近クロール」を作ってください。
・背景：#020608。星（白い点、直径1〜3px）を200個ランダムに散らし、ゆっくり瞬かせる
・文章：「{T}」をスペースで区切り、1語＝1行として中央揃えで並べる。1行目だけ見出しとして大きく（120px）、残りは84px。Noto Sans JP 900、色 #2EE6C9、行間1.6
・遠近：文章のブロックを幅1100pxにし、親要素に perspective: 500px、ブロックに rotateX(58°)（下端を手前に倒す）
・流れ：ブロックを translateY 900px → −1600px へ12秒で等速移動させ、手前から奥へ流す
・奥へ行くほど消えるよう、画面上部40%に背景色へのグラデーションのマスクをかける
・尺：12秒でループ`,
run(H,t,w){if(!w.length)w=[t];const c=H.canvas();const x=c.getContext('2d');const st=[...Array(200)].map(()=>[rnd(0,1600),rnd(0,900),rnd(.5,1.5),rnd(0,6)]);
  H.raf(s=>{x.clearRect(0,0,1600,900);st.forEach(p=>{x.globalAlpha=.4+.6*Math.abs(Math.sin(s+p[3]));x.fillStyle='#fff';x.beginPath();x.arc(p[0],p[1],p[2],0,7);x.fill()})});
  const P=H.abs({inset:'0',perspective:'500px',overflow:'hidden',WebkitMaskImage:'linear-gradient(transparent 0%,#000 42%)',maskImage:'linear-gradient(transparent 0%,#000 42%)'});
  const blk=H.abs({left:'250px',width:'1100px',top:'0',textAlign:'center',fontFamily:F.sans,fontWeight:'900',color:TEAL,lineHeight:'1.6',transformOrigin:'50% 100%'},P);
  w.forEach((s,i)=>H.el('div',{fontSize:(i?84:120)+'px'},blk,s));
  H.a(blk,[{transform:'rotateX(58deg) translateY(900px)'},{transform:'rotateX(58deg) translateY(-1600px)'}],{d:12000,e:E.lin});
}});

def({no:'26',cat:'DEPTH',name:'リングオービット',en:'Orbit Ring',lead:'中央の言葉のまわりを、文字の輪が衛星のように公転。',
text:'GLOBAL',loop:6000,bg:'#05121a',
use:'<b>グローバル・宇宙・テクノロジー</b>系のタイトルに。会社紹介、カンファレンス、IT系のオープニングに。',
tips:['手前の文字は大きく明るく、奥の文字は小さく暗くするのが立体感の正体','輪の傾き（縦のつぶれ率0.28）を大きくすると真横から見た土星のように','2本の輪を逆回転させると原子モデルのような表現に'],
p:`中央の「{T}」のまわりを、文字の輪が斜めに傾いた軌道で公転する演出を作ってください。
・背景：#05121A。中央に「{T}」（Dela Gothic One、画面幅の45%、白）
・輪の文字：「{T} ・ 」を3回くり返した文字列を1文字ずつ分け、円周上に均等に並べる
・軌道の計算（毎フレーム）：角度θの文字は x = 中心 + 620·cos θ、y = 中心 + 620·0.28·sin θ（横長の楕円）。θは6秒で1周増やす
・奥行き：sin θ が正（手前側）のときは scale 1.25・不透明度1・z-index を中央の文字より上、負（奥側）のときは scale 0.6・不透明度0.35・z-index を下にする（sin θ に応じて連続的に変化）
・輪の文字色 #2EE6C9、Dela Gothic One、48px
・中央の文字には、ぼかし40pxの #2EE6C9 の光を不透明度0.35でにじませる
・尺：6秒で完全ループ`,
run(H,t){const ch=[...(t+' ・ ').repeat(3)];const n=ch.length;const ctr=H.box({zIndex:'50'});BIG(H,t,{color:'#fff',fontSize:fs(t,240,720)+'px',textShadow:'0 0 40px rgba(46,230,201,.35)'},ctr);
  const els=ch.map(c=>H.abs({left:'0',top:'0',fontFamily:F.heavy,fontSize:'48px',color:TEAL,whiteSpace:'pre'},null,c));
  H.raf(s=>{const b=s/6*Math.PI*2;els.forEach((e,i)=>{const th=b+i/n*Math.PI*2;const z=Math.sin(th);const x=800+620*Math.cos(th),y=450+620*.28*z;const sc=.6+(z+1)/2*.65;
    e.style.transform=`translate(${x-20}px,${y-30}px) scale(${sc.toFixed(3)})`;e.style.opacity=(.35+(z+1)/2*.65).toFixed(2);e.style.zIndex=z>0?100:1})});
}});

def({no:'27',cat:'DEPTH',name:'Zフライスルー',en:'Z Fly-through',lead:'奥に並んだ言葉の間を、カメラが前進して突き抜ける。',
text:'過去 現在 未来',multi:true,loop:6000,bg:'#020a0b',
use:'<b>時系列・ストーリー・ロードマップ</b>に。「昔→今→これから」のように、順番に進む話の導入に。',
tips:['言葉の間隔（1200px）を詰めると速く、広げるとゆったり進みます','各言葉に枠を付けると「ゲートをくぐる」感覚が強まります','最後の言葉の手前でカメラを止めると、そこが結論として残ります'],
p:`奥行き方向に並んだ言葉の間を、カメラがまっすぐ前進して1語ずつ突き抜けていく演出を作ってください。
・背景：#020A0B。CSS 3D（perspective: 1000px、transform-style: preserve-3d）
・言葉：「{T}」をスペースで区切り、1語目を translateZ(−800px)、2語目を −2000px、3語目を −3200px…と1200pxずつ奥に置く
・各語のデザイン：Dela Gothic One、260px。色は #2EE6C9 と白を交互に。それぞれ幅1300px×高さ620pxの細い枠（線幅4px、同じ色、不透明度0.5）で囲む
・カメラ移動：すべての語を入れた親要素を translateZ 0 → (語数×1200 + 400)px へ、6秒かけて前進させる。イージング cubic-bezier(.65,0,.35,1)
・語がカメラを通り過ぎる直前（距離300px以内）で不透明度を0にして、ちらつきを防ぐ
・尺：6秒でループ`,
run(H,t,w){if(!w.length)w=[t];const P=H.box({perspective:'1000px'});const G=H.el('div',{position:'relative',width:'0',height:'0',transformStyle:'preserve-3d'},P);
  const items=w.map((s,i)=>{const c=i%2?'#fff':TEAL;const z=-800-i*1200;const it=H.abs({left:'-650px',top:'-310px',width:'1300px',height:'620px',display:'flex',alignItems:'center',justifyContent:'center',transform:`translateZ(${z}px)`,border:`4px solid ${c}80`,boxSizing:'border-box'},G);
    BIG(H,s,{color:c,fontSize:fs(s,260,1150)+'px'},it);return [it,z]});
  const total=w.length*1200+400;
  H.raf(s=>{const p=Math.min(1,s/6);const e=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;const cz=e*total;G.style.transform=`translateZ(${cz}px)`;
    items.forEach(([it,z])=>{const dist=-(z+cz);it.style.opacity=dist<300?Math.max(0,dist/300):1})});
}});

def({no:'28',cat:'DEPTH',name:'三つ折りパンフ',en:'Tri-fold Open',lead:'折りたたまれた紙がパタン、パタンと開いて文字が現れる。',
text:'OPEN 新装開店',loop:4200,bg:'#0d1416',
use:'<b>オープン告知・招待状・中身の公開</b>に。「開ける」動きなので、新商品のお披露目やプレゼント企画に合います。',
tips:['開く途中のパネルを暗くする（brightness 0.6）と紙の陰影が出ます','開く順番を左→右→下と増やせば地図のような折り方に','開き切った瞬間に小さく scale 1.03 で弾ませると気持ちいい'],
p:`3枚に折りたたまれたパンフレットが左右に開き、1枚の横長パネルに書かれた「{T}」が現れる演出を作ってください。
・背景：#0D1416。CSS 3D（perspective: 1800px）
・パネル全体：幅1350px×高さ380px、背景 #2EE6C9、文字「{T}」#0A0D10、Dela Gothic One、パネル内で最大サイズ
・パネルを横に3等分（各450px）。各パートは overflow: hidden で、中の文字はパネル全体の位置からずらして表示し、並べると1枚の絵としてつながるようにする
・開き方：最初は左右のパートが中央パートの上に折り重なった状態（左は rotateY(180°)・回転軸は右端、右は rotateY(−180°)・回転軸は左端）
・0.3〜0.9秒：左パートが rotateY 180°→0° で開く。0.7〜1.3秒：右パートが −180°→0° で開く。イージング cubic-bezier(.65,0,.35,1)
・開いている途中は brightness 0.55 → 1 で陰影をつける。裏側は #10282A で塗る
・開き切ったら scale 1 → 1.03 → 1 で軽く弾ませ、2.9秒から逆の順番で閉じる
・尺：4.2秒でループ`,
run(H,t){const P=H.box({perspective:'1800px'});const W=H.el('div',{position:'relative',width:'1350px',height:'380px',transformStyle:'preserve-3d'},P);
  const mk=(i)=>{const p=H.abs({left:i*450+'px',top:'0',width:'450px',height:'380px',transformStyle:'preserve-3d'},W);
    const f=H.abs({inset:'0',overflow:'hidden',background:TEAL,backfaceVisibility:'hidden'},p);
    H.abs({left:-i*450+'px',top:'0',width:'1350px',height:'380px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:fs(t,250,1250)+'px',color:'#0a0d10',whiteSpace:'nowrap'},f,t);
    H.abs({inset:'0',background:'#10282a',transform:'rotateY(180deg)',backfaceVisibility:'hidden'},p);return p};
  mk(1);const L=mk(0),R=mk(2);L.style.transformOrigin='100% 50%';R.style.transformOrigin='0 50%';
  const ease=E.io;const open=(el,from,dl)=>{H.a(el,[{transform:`rotateY(${from}deg)`,filter:'brightness(.55)'},{transform:'rotateY(0deg)',filter:'brightness(1)'}],{d:600,dl,e:'cubic-bezier(.65,0,.35,1)'});
    H.a(el,[{transform:'rotateY(0deg)',filter:'brightness(1)'},{transform:`rotateY(${from}deg)`,filter:'brightness(.55)'}],{d:600,dl:dl===300?3500:2900,e:'cubic-bezier(.65,0,.35,1)',f:'forwards'})};
  open(L,180,300);open(R,-180,700);
  H.a(W,[{transform:'scale(1)'},{transform:'scale(1.03)'},{transform:'scale(1)'}],{d:400,dl:1300,f:'none'});
}});

def({no:'29',cat:'DEPTH',name:'パララックス',en:'Parallax Layers',lead:'遠・中・近の3層が違う速さで流れ、空間が生まれる。',
text:'旅に出よう',loop:6000,bg:'#071416',
use:'<b>旅・移動・ドライブ・電車</b>の動画に。車窓のように流れるので、移動中のVlogや旅行記のタイトルにぴったり。',
tips:['奥の層ほど「小さく・遅く・ぼかす・暗く」の4点セットで距離が出ます','手前の層をフチ文字にすると、奥が透けて見えて奥行きが増します','流れを止めて手前の層だけ止める、という緩急も効果的'],
p:`「{T}」の文字で作った3つの層（遠景・中景・近景）が、それぞれ違う速さで横に流れて奥行きが生まれる演出を作ってください。
・背景：#071416
・遠景：「{T}」を小さく（60px）、#2EE6C9・不透明度0.35・ぼかし3px で画面上部に3行。6秒で文字2個分、左へ等速
・中景：中サイズ（150px）、白、ぼかしなし。画面中央に1行。6秒で文字2個分、左へ等速（文字が大きい分、遠景より速く見える）
・近景：巨大（380px）、塗りなし・#2EE6C9の5pxフチ。画面下部にはみ出すように1行。6秒で文字2個分、左へ等速（最も速く見える）
・各層は「{T}」＋全角スペースを8回くり返し、継ぎ目のないループにする。フォントはすべて Dela Gothic One
・尺：6秒で完全ループ`,
run(H,t){const lay=(top,size,css,n)=>{const r=H.abs({left:'0',top:top+'px',whiteSpace:'nowrap'});const tr=track(H,r,t+'　',8,Object.assign({fontFamily:F.heavy,fontSize:size+'px',lineHeight:'1.1'},css));H.a(tr,[{transform:'translateX(0)'},{transform:'translateX(-25%)'}],{d:6000,e:E.lin,i:Infinity})};
  [40,120,200].forEach((y,i)=>{const r=H.abs({left:-i*140+'px',top:y+'px'});const tr=track(H,r,t+'　',8,{fontFamily:F.heavy,fontSize:'60px',color:TEAL,opacity:'.35',filter:'blur(3px)'});H.a(tr,[{transform:'translateX(0)'},{transform:'translateX(-25%)'}],{d:6000,e:E.lin,i:Infinity})});
  lay(330,150,{color:'#fff'});lay(560,380,{color:'transparent',WebkitTextStroke:'5px '+TEAL});
}});

def({no:'30',cat:'DEPTH',name:'フリップカード',en:'Flip Card',lead:'カードがくるっと裏返り、表と裏で言葉が変わる。',
text:'Before After',multi:true,loop:3600,bg:'#0a1112',
use:'<b>ビフォーアフター・問題と答え・表と裏</b>に。クイズの正解発表、「実は…」の種明かしにも使えます。',
tips:['回転に少し行き過ぎ（overshoot）を入れると、カードの重さが出ます','裏返る瞬間にカードを少し持ち上げる（scale 1.1）と立体感アップ','横回転（rotateY）は「切り替え」、縦回転（rotateX）は「めくる」印象'],
p:`1枚のカードがくるっと裏返り、表面と裏面で違う言葉が見える演出を作ってください。
・背景：#0A1112。CSS 3D（perspective: 1800px）
・カード：幅1000px×高さ540px、角丸28px、影 0 40px 80px rgba(0,0,0,.6)
・表面：背景 #18282A、文字は「{T}」の1語目（白、Dela Gothic One）。左上に小さく「FRONT」（JetBrains Mono、#2EE6C9）
・裏面：背景 #2EE6C9、文字は2語目（#0A1112、Dela Gothic One）。左上に小さく「BACK」。rotateY(180°) で配置し、backface-visibility: hidden
・0.8秒：0.9秒かけて rotateY 0 → 180°。キーフレームで 0% → 60%:190° → 80%:175° → 100%:180° と行き過ぎて戻る。回転の中盤だけ scale 1.1 に持ち上げる
・2.6秒：0.9秒かけて 180° → 360° で表に戻る（同じく行き過ぎあり）
・尺：3.6秒でループ`,
run(H,t,w){const a=w[0]||t,b=w[1]||t;const P=H.box({perspective:'1800px'});const C=H.el('div',{position:'relative',width:'1000px',height:'540px',transformStyle:'preserve-3d'},P);
  const face=(s,bg,fg,lab,back)=>{const f=H.abs({inset:'0',borderRadius:'28px',background:bg,display:'flex',alignItems:'center',justifyContent:'center',backfaceVisibility:'hidden',boxShadow:'0 40px 80px rgba(0,0,0,.6)',transform:back?'rotateY(180deg)':'none'},C);
    H.abs({left:'36px',top:'28px',fontFamily:F.mono,fontSize:'26px',color:back?'#0a1112':TEAL,letterSpacing:'.2em'},f,lab);BIG(H,s,{color:fg,fontSize:fs(s,220,880)+'px'},f)};
  face(a,'#18282a','#fff','FRONT',0);face(b,TEAL,'#0a1112','BACK',1);
  const fl=(f,to,dl)=>H.a(C,[{transform:`rotateY(${f}deg) scale(1)`},{transform:`rotateY(${f+95}deg) scale(1.1)`,offset:.35},{transform:`rotateY(${to+10}deg) scale(1.02)`,offset:.6},{transform:`rotateY(${to-5}deg) scale(1)`,offset:.8},{transform:`rotateY(${to}deg) scale(1)`}],{d:900,dl,e:E.soft,f:'forwards'});
  fl(0,180,800);H.wait(2600,()=>fl(180,360,0));
}});
