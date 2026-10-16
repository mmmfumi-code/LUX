/* ===== FLOW 11-20 ===== */
const track=(H,parent,unit,n,css)=>{const tr=H.el('div',Object.assign({display:'flex',whiteSpace:'nowrap',width:'max-content'},css||{}),parent);for(let i=0;i<n;i++)H.el('span',{paddingRight:'.4em'},tr,unit);return tr};

def({no:'11',cat:'FLOW',name:'無限マーキー',en:'Infinite Marquee',lead:'巨大な文字の帯が、斜めに・交互に流れ続ける。',
text:'NEW ARRIVAL 新作入荷',loop:6000,bg:'#f5c518',
use:'<b>ショップ告知・新商品・セール</b>の背景に。上に商品写真を重ねるだけで、ファッション広告のような画になります。',
tips:['塗り文字とフチだけの文字を交互にすると、単調にならずリズムが出ます','帯を −8° 傾けるのが今っぽさのポイント','速度は行ごとに倍・半分の関係にすると、継ぎ目なくループします'],
p:`画面いっぱいに「{T}」の巨大な文字の帯を5段並べ、段ごとに逆方向へ無限に流す演出を作ってください。
・背景：#F5C518。文字色：#111。フォント：Dela Gothic One、1段の高さ180px
・段の中身：「{T}」を4回くり返して横に並べ、もう1組を後ろにつなげて継ぎ目のないループにする
・段のスタイル：奇数段は塗りつぶし、偶数段は塗りなしで #111 の4pxフチだけ（-webkit-text-stroke）
・流れる方向：奇数段は左へ、偶数段は右へ。速度は 1段目・3段目・5段目が6秒で1組分、2段目・4段目が6秒で2組分（倍速）。等速（linear）
・5段まとめた全体を −8° 傾け、画面からはみ出すくらい大きく配置する
・尺：6秒で完全ループ`,
run(H,t){const G=H.abs({left:'-300px',top:'-260px',width:'2200px',transform:'rotate(-8deg)',display:'flex',flexDirection:'column',gap:'10px'});
  for(let i=0;i<6;i++){const row=H.el('div',{overflow:'visible'},G);const odd=i%2===0;
    const tr=track(H,row,t,8,{fontFamily:F.heavy,fontSize:'180px',lineHeight:'1.05',color:odd?'#111':'transparent',WebkitTextStroke:odd?'0':'4px #111'});
    const dist=odd?'-25%':'-50%';H.a(tr,odd?[{transform:'translateX(0)'},{transform:`translateX(${dist})`}]:[{transform:`translateX(${dist})`},{transform:'translateX(0)'}],{d:6000,e:E.lin,i:Infinity})}
}});

def({no:'12',cat:'FLOW',name:'クロステープ',en:'Caution Tape',lead:'警告テープ2本がX字に交差し、逆向きに流れる。',
text:'工事中 COMING SOON',loop:8000,bg:'#1a1a1a',
use:'<b>準備中・近日公開・注意喚起</b>に。チャンネルのリニューアル告知、「ここから先ネタバレ」の注意テロップにも。',
tips:['テープの角度は12°と−9°のように「わずかに非対称」にすると自然','テープの縁に黒黄のしま模様を入れると一気に工事現場らしくなります','テープ色を赤×白にすると「立入禁止（事件）」の雰囲気に'],
p:`黄色い警告テープ2本がX字に交差し、それぞれ逆方向に文字を流し続ける演出を作ってください。
・背景：#1A1A1A
・テープ：高さ130px、色 #F5C518。上下の縁に、黒と黄の45°のしま模様（幅24px）を高さ14pxで入れる
・テープの文字：「{T}」＋「 ／ 」を8回くり返す。#111、Dela Gothic One、高さ70px
・テープ1は +12°、テープ2は −9° に傾け、画面中央で交差させる（テープ2を手前に、影 0 10px 30px rgba(0,0,0,.5)）
・登場：0.0〜0.7秒でテープ1が左から、0.2〜0.9秒でテープ2が右から、画面外からスライドイン（イージング cubic-bezier(.16,1,.3,1)）
・流れ：テープ1の文字は左へ、テープ2の文字は右へ、4秒で1組分を等速で無限ループ
・尺：8秒でループ`,
run(H,t){const stripe='repeating-linear-gradient(45deg,#111 0 12px,#f5c518 12px 24px)';
  [[12,-1,0],[-9,1,200]].forEach(([deg,dir,dl],i)=>{const tape=H.abs({left:'-300px',top:'385px',width:'2200px',height:'130px',background:'#f5c518',transform:`rotate(${deg}deg)`,boxShadow:i?'0 10px 30px rgba(0,0,0,.5)':'none',overflow:'hidden',display:'flex',alignItems:'center'});
    H.abs({left:0,right:0,top:0,height:'14px',background:stripe},tape);H.abs({left:0,right:0,bottom:0,height:'14px',background:stripe},tape);
    const tr=track(H,tape,t+' ／',8,{fontFamily:F.heavy,fontSize:'70px',color:'#111'});
    H.a(tape,[{transform:`rotate(${deg}deg) translateX(${dir*2200}px)`},{transform:`rotate(${deg}deg) translateX(0)`}],{d:700,dl});
    H.a(tr,dir<0?[{transform:'translateX(0)'},{transform:'translateX(-25%)'}]:[{transform:'translateX(-25%)'},{transform:'translateX(0)'}],{d:4000,e:E.lin,i:Infinity})});
}});

def({no:'13',cat:'FLOW',name:'ウェーブ',en:'Sine Wave',lead:'文字がひとつずつ波打ち、ゆらゆら揺れ続ける。',
text:'ゆるっと夏休み',loop:4800,bg:'#11131c',
use:'<b>ゆるい・楽しい・リラックス</b>した雰囲気づくりに。Vlogのタイトル、夏・海・音楽系のテロップに。',
tips:['波の高さ60pxは大きめ。上品にしたいなら20〜30pxに','文字ごとに色相を少しずつずらすと、虹色の波になります','影も一緒に動かす代わりに、影だけ縮めると「跳ねている」感が出ます'],
p:`「{T}」の文字が1文字ずつ、波のように上下にゆらゆら揺れ続ける演出を作ってください。
・背景：#11131C。文字：#F5C518、Mochiy Pop One、画面幅の約70%
・各文字：translateY 0 → −60px → 0 を1.2秒で無限ループ。イージング ease-in-out
・文字ごとに0.1秒ずつ位相をずらす（animation-delay をマイナス値で指定して、最初から波の形にする）
・同時に、各文字の真下に楕円の影（幅は文字の80%、高さ16px、rgba(0,0,0,.5)、ぼかし6px）を置き、文字が上がるほど影を scale 0.6 まで小さく薄くする
・尺：4.8秒（1.2秒の4周）で継ぎ目なくループ`,
run(H,t){const B=H.box();const w=H.el('div',{fontFamily:F.pop,fontSize:fs(t,200,1150)+'px',color:'#f5c518',display:'flex'},B);
  [...t].forEach((ch,i)=>{const col=H.el('div',{display:'flex',flexDirection:'column',alignItems:'center'},w);const c=H.el('span',{display:'inline-block',whiteSpace:'pre'},col,ch);
    const sh=H.el('div',{width:'80%',height:'16px',borderRadius:'50%',background:'rgba(0,0,0,.6)',filter:'blur(6px)',marginTop:'10px'},col);
    const o={d:1200,e:'ease-in-out',i:Infinity,dl:-i*100};H.a(c,[{transform:'translateY(0)'},{transform:'translateY(-60px)'},{transform:'translateY(0)'}],o);
    H.a(sh,[{transform:'scale(1)',opacity:1},{transform:'scale(.6)',opacity:.4},{transform:'scale(1)',opacity:1}],o)});
}});

def({no:'14',cat:'FLOW',name:'うねるリボン',en:'Ribbon Path',lead:'波打つ帯の上を、文字が途切れず流れていく。',
text:'夜を越えて、また明日',loop:6000,bg:'#0f0f12',
use:'<b>MV・エンディング・エモい場面</b>に。歌詞や名言を1行で流すと、それだけで映像作品のような質感になります。',
tips:['帯の振幅（上下の幅）を大きくするほどダイナミックに','帯を2本にして色違い・逆方向にすると、より複雑で華やか','文字は明朝体にすると一気に叙情的になります'],
p:`画面を横切る1本の太いリボン（帯）が波のようにうねり、その上を「{T}」が途切れずに流れていく演出を作ってください。
・背景：#0F0F12
・リボン：SVGのパス。太さ130px、色 #F5C518、線端は丸く。y = 450 + 140·sin(x·0.005 + 時間·1.6) の波形を毎フレーム計算し直して、うねらせる
・文字：同じパスに沿って textPath で配置。「{T}」＋「　」をくり返して帯を埋める。色 #111、Shippori Mincho B1 の太字、大きさ64px、帯の中心に沿うよう dominant-baseline: middle
・文字の流れ：startOffset を毎秒140pxずつ減らして左へ流し、1組分ずれたら元に戻して継ぎ目なくループ
・尺：6秒でループ（うねりも文字も途切れず続く）`,
run(H,t){const svg=H.svg(1600,900);const id='rb'+Math.floor(Math.random()*1e6);
  const band=H.sv('path',{fill:'none',stroke:'#f5c518','stroke-width':130,'stroke-linecap':'round'},svg);
  const guide=H.sv('path',{id,fill:'none'},svg);
  const tx=H.sv('text',{fill:'#111','font-size':64,'font-family':"Shippori Mincho B1, serif",'font-weight':800,'dominant-baseline':'middle'},svg);
  const tp=H.sv('textPath',{href:'#'+id},tx);tp.textContent=(t+'　').repeat(12);
  const unit=H.sv('text',{'font-size':64,'font-family':"Shippori Mincho B1, serif",'font-weight':800,opacity:0},svg);unit.textContent=t+'　';let U=0;
  H.raf(s=>{if(!U)U=unit.getComputedTextLength()||600;let d='';for(let x=-100;x<=1700;x+=20){const y=450+140*Math.sin(x*.005+s*1.6);d+=(x===-100?'M':'L')+x+' '+y.toFixed(1)}
    band.setAttribute('d',d);guide.setAttribute('d',d);tp.setAttribute('startOffset',(-((s*140)%U)).toFixed(1))});
}});

def({no:'15',cat:'FLOW',name:'縦書き潮流',en:'Vertical Current',lead:'縦書きの列が、上へ下へと交互に流れる和の表現。',
text:'温故知新',loop:6000,bg:'#f3efe6',
use:'<b>和風・旅館・日本酒・伝統工芸</b>の紹介に。歴史解説や、京都・奈良などの旅動画のオープニングに。',
tips:['中央の1列だけ朱色にすると、視線がそこに集まります','流れる速さを列ごとに少しずつ変えると、川の流れのような揺らぎが出ます','背景に薄い和紙の繊維を足すと高級感が増します'],
p:`縦書きの文字列が7列並び、列ごとに上下交互に流れ続ける和風の演出を作ってください。
・背景：#F3EFE6（和紙色）。文字：#1A1A1A、Shippori Mincho B1（太さ800）、縦書き（writing-mode: vertical-rl）
・各列の中身：「{T}」＋「・」を8回くり返し、もう1組を後ろにつなげて継ぎ目のないループにする
・列の配置：画面幅いっぱいに等間隔で7列。中央の列だけ文字を1.6倍・色 #C8102E（朱）
・流れ：奇数列は上へ、偶数列は下へ。6秒で1組分（中央列だけ6秒で半組分＝ゆっくり）、等速で無限ループ
・画面の上下端に、背景色から透明へのグラデーション（高さ120px）をかけて、文字が霧の中から現れて消えるようにする
・尺：6秒で完全ループ`,
run(H,t){const R=H.abs({inset:'0',display:'flex',justifyContent:'space-evenly',alignItems:'flex-start',overflow:'hidden'});
  for(let i=0;i<7;i++){const mid=i===3;const col=H.el('div',{writingMode:'vertical-rl',fontFamily:F.min,fontWeight:'800',fontSize:(mid?110:68)+'px',color:mid?'#c8102e':'#1a1a1a',whiteSpace:'nowrap',lineHeight:'1'},R);
    col.textContent=(t+'・').repeat(16);const up=i%2===0;const dist=mid?'-25%':'-50%';
    H.a(col,up?[{transform:'translateY(0)'},{transform:`translateY(${dist})`}]:[{transform:`translateY(${dist})`},{transform:'translateY(0)'}],{d:6000,e:E.lin,i:Infinity})}
  H.abs({left:0,right:0,top:0,height:'120px',background:'linear-gradient(#f3efe6,rgba(243,239,230,0))'});H.abs({left:0,right:0,bottom:0,height:'120px',background:'linear-gradient(rgba(243,239,230,0),#f3efe6)'});
}});

def({no:'16',cat:'FLOW',name:'回転バッジ',en:'Spinning Badge',lead:'円に沿って文字が回り続ける、ステッカー風の丸ロゴ。',
text:'FOLLOW ME',loop:12000,bg:'#1b1b1f',
use:'<b>フォロー誘導・SALEシール・ロゴ演出</b>に。画面の隅に小さく置くだけで、ずっと動く「目印」になります。',
tips:['外側と内側を逆回転にすると、目が離せない立体感が出ます','文字の総量を円周にぴったり合わせる（textLength）と継ぎ目が消えます','中央にアイコンやロゴを置けば、そのままチャンネルの透かしに'],
p:`円に沿って「{T}」が回り続ける、ステッカーのような丸いバッジを作ってください。
・背景：#1B1B1F
・外側のリング：半径300pxの円周に沿って、「{T} ✦ 」を3回くり返した文字を textPath で配置。文字は #F5C518、Dela Gothic One、56px。textLength を円周に合わせて、継ぎ目なく1周させる
・内側のリング：半径190pxの円周に、同じ文字を2回。#FFFFFF、32px、文字間を広めに
・中央：直径240pxの #F5C518 の円。中に「{T}」の最初の1語を #111、Dela Gothic One で
・回転：外側は12秒で時計回りに1周、内側は12秒で反時計回りに1周（どちらも linear・無限）
・中央の円は 2秒周期で scale 1 → 1.06 → 1 と鼓動させる
・尺：12秒で完全ループ`,
run(H,t,w){const svg=H.svg(1600,900);const id='c'+Math.floor(Math.random()*1e6);
  const ring=(r,str,size,fill,dir,ls)=>{const g=H.sv('g',{},svg);g.style.transformOrigin='800px 450px';const pid=id+r;
    H.sv('path',{id:pid,d:`M ${800-r} 450 a ${r} ${r} 0 1 1 ${2*r} 0 a ${r} ${r} 0 1 1 ${-2*r} 0`,fill:'none'},g);
    const tx=H.sv('text',{fill,'font-size':size,'font-family':"Dela Gothic One, sans-serif",'letter-spacing':ls||0},g);const tp=H.sv('textPath',{href:'#'+pid,textLength:(2*Math.PI*r-6).toFixed(0),lengthAdjust:'spacing'},tx);tp.textContent=str;
    H.a(g,[{transform:'rotate(0deg)'},{transform:`rotate(${dir*360}deg)`}],{d:12000,e:E.lin,i:Infinity});};
  ring(300,(t+' ✦ ').repeat(3),56,'#f5c518',1);ring(190,(t+' ✦ ').repeat(2),32,'#fff',-1,4);
  const c=H.abs({left:'680px',top:'330px',width:'240px',height:'240px',borderRadius:'50%',background:'#f5c518',display:'flex',alignItems:'center',justifyContent:'center',color:'#111',fontFamily:F.heavy,fontSize:fs(w[0]||t,64,200)+'px'},null,w[0]||t);
  H.a(c,[{transform:'scale(1)'},{transform:'scale(1.06)'},{transform:'scale(1)'}],{d:2000,e:'ease-in-out',i:Infinity});
}});

def({no:'17',cat:'FLOW',name:'スパイラル',en:'Spiral Drain',lead:'渦巻きに沿って、文字が中心へ吸い込まれていく。',
text:'沼にハマる',loop:8000,bg:'#050505',
use:'<b>「沼る」「ハマる」「抜け出せない」</b>系の言葉に。催眠・ミステリー・中毒性のある商品紹介にも。',
tips:['渦の巻き数を増やすほど「吸い込まれ感」が強くなります','文字色を外側から内側へグラデーションにすると奥行きが出ます','逆再生（外へ流す）にすると「広がる・拡散」の表現になります'],
p:`渦巻き（スパイラル）の線に沿って「{T}」がくり返し並び、ゆっくり中心へ吸い込まれていく演出を作ってください。
・背景：#050505
・渦巻き：中心(画面中央)から外へ、半径 r = 30 + 13·θ（θはラジアン、0〜6回転分）のアルキメデス螺旋をSVGパスで作る（外側が始点、中心が終点）
・文字：パスに沿って textPath で「{T}」＋「・」をパスの全長が埋まるまでくり返す（パスの長さ÷1組の長さ＋2回）。Dela Gothic One、44px
・文字色：外側 #F5C518 → 中心 #FF4B3E のグラデーション（SVGの radialGradient を fill に指定）
・流れ：startOffset を毎秒90pxずつ増やして中心へ流し、1組分で戻して継ぎ目なくループ
・全体を 8秒で1周、時計回りにゆっくり回転させる
・尺：8秒でループ`,
run(H,t){const svg=H.svg(1600,900);const id='sp'+Math.floor(Math.random()*1e6);
  const defs=H.sv('defs',{},svg);const g=H.sv('radialGradient',{id:id+'g',cx:800,cy:450,r:520,gradientUnits:'userSpaceOnUse'},defs);H.sv('stop',{offset:'0','stop-color':'#ff4b3e'},g);H.sv('stop',{offset:'1','stop-color':'#f5c518'},g);
  let d='';const TT=Math.PI*2*6;for(let th=TT;th>=0;th-=.05){const r=30+13*th;d+=(th===TT?'M':'L')+(800+r*Math.cos(th)).toFixed(1)+' '+(450+r*Math.sin(th)).toFixed(1)}
  const G=H.sv('g',{},svg);G.style.transformOrigin='800px 450px';H.sv('path',{id,d,fill:'none'},G);
  const tx=H.sv('text',{fill:`url(#${id}g)`,'font-size':44,'font-family':"Dela Gothic One, sans-serif"},G);const tp=H.sv('textPath',{href:'#'+id},tx);const u=H.sv('text',{'font-size':44,'font-family':"Dela Gothic One, sans-serif",opacity:0},svg);u.textContent=t+'・';let U=0;
  const PL=G.querySelector('path').getTotalLength();tp.textContent=(t+'・').repeat(Math.ceil(PL/Math.max(60,u.getComputedTextLength()||200))+2);
  H.raf(s=>{if(!U)U=u.getComputedTextLength()||300;tp.setAttribute('startOffset',(((s*90)%U)-U).toFixed(1))});
  H.a(G,[{transform:'rotate(0deg)'},{transform:'rotate(360deg)'}],{d:8000,e:E.lin,i:Infinity});
}});

def({no:'18',cat:'FLOW',name:'はためく旗',en:'Waving Flag',lead:'布の旗に書かれた文字が、風を受けてはためく。',
text:'開幕',loop:4000,bg:'#2f6fc4',
use:'<b>開幕・大会・お祭り・選挙</b>など旗が似合う場面に。運動会や地域イベントの告知動画にも。',
tips:['ゆがみの強さ（displacement scale）30前後が布らしさの目安','風の速さはSVGアニメーションの周期で調整。4秒周期だと穏やかな風','旗の色を国旗や企業カラーにすれば、そのまま式典用に'],
p:`布の旗に「{T}」と書かれていて、風を受けてはためいているように見える演出を作ってください。
・背景：上 #2F6FC4 → 下 #8EC5FF の空のグラデーション
・旗：幅900px×高さ480pxの #C8102E の長方形。左端に灰色の旗竿（幅18px、高さ800px）
・旗の文字：「{T}」、白、Shippori Mincho B1（太さ800）、旗の高さの約55%
・はためき：旗と文字をまとめて1つのグループにし、SVGフィルター（feTurbulence type=turbulence＋feDisplacementMap scale=34）をかける。feTurbulence の baseFrequency を「0.004 0.012 → 0.008 0.02 → 0.004 0.012」と4秒周期で変化させ続ける（SVGの <animate> を使用）
・さらにグループ全体に skewY を 0 → −2° → 0 で4秒周期の揺れを足す
・光沢：旗の上に、白の半透明の帯（幅200px）が左から右へ4秒周期で通り過ぎ、布の陰影に見えるようにする
・尺：4秒でループ`,
run(H,t){const svg=H.svg(1600,900);const id='fl'+Math.floor(Math.random()*1e6);
  const defs=H.sv('defs',{},svg);const f=H.sv('filter',{id,x:'-10%',y:'-10%',width:'120%',height:'120%'},defs);
  const tb=H.sv('feTurbulence',{type:'turbulence',baseFrequency:'0.004 0.012',numOctaves:2,result:'n'},f);H.sv('animate',{attributeName:'baseFrequency',dur:'4s',values:'0.004 0.012;0.008 0.02;0.004 0.012',repeatCount:'indefinite'},tb);
  H.sv('feDisplacementMap',{in:'SourceGraphic',in2:'n',scale:34},f);
  const sky=H.sv('linearGradient',{id:id+'s',x1:0,y1:0,x2:0,y2:1},defs);H.sv('stop',{offset:0,'stop-color':'#2f6fc4'},sky);H.sv('stop',{offset:1,'stop-color':'#8ec5ff'},sky);
  H.sv('rect',{width:1600,height:900,fill:`url(#${id}s)`},svg);H.sv('rect',{x:322,y:80,width:18,height:800,fill:'#9aa0a8',rx:9},svg);
  const g=H.sv('g',{filter:`url(#${id})`},svg);g.style.transformOrigin='340px 450px';
  H.sv('rect',{x:340,y:150,width:900,height:480,fill:'#c8102e'},g);
  const tx=H.sv('text',{x:790,y:400,fill:'#fff','font-size':Math.min(264,820/Math.max(1,[...t].length)),'font-family':"Shippori Mincho B1, serif",'font-weight':800,'text-anchor':'middle','dominant-baseline':'middle'},g);tx.textContent=t;
  const sh=H.sv('rect',{x:340,y:150,width:200,height:480,fill:'#fff',opacity:.16},g);
  H.a(sh,[{transform:'translateX(-200px)'},{transform:'translateX(900px)'}],{d:4000,e:'ease-in-out',i:Infinity});
  H.a(g,[{transform:'skewY(0deg)'},{transform:'skewY(-2deg)'},{transform:'skewY(0deg)'}],{d:4000,e:'ease-in-out',i:Infinity});
}});

def({no:'19',cat:'FLOW',name:'エスカレーター',en:'Diagonal Cascade',lead:'階段状に並んだ文字の段が、斜め上へ流れ続ける。',
text:'まだまだ上がる',loop:5600,bg:'#141414',
use:'<b>上昇・成長・ランクアップ</b>の表現に。売上報告、レベルアップ、「右肩上がり」を視覚化したいときに。',
tips:['段ごとに右へずらす量（80px）を大きくすると急な階段に','流れを逆（下へ）にすると「下落」「転落」の表現に','左端と右端をフェードさせると、無限に続いて見えます'],
p:`「{T}」を階段状に何段も並べ、全体が斜め上へ流れ続ける演出を作ってください。
・背景：#141414。フォント：Dela Gothic One、1段の高さ110px（文字96px）
・段の並び：「{T}」を12段、縦に並べる。各段は1つ上の段より右へ80pxずらす（右下がりの階段）
・段の色を3種類でくり返す：#F5C518 の塗り → 白の塗り → 塗りなしの白フチ3px
・流れ：段の並び全体を、1.4秒で「上へ330px・左へ240px」（3段分）等速で動かし、無限にくり返す（3段ごとに色が一巡するので継ぎ目が出ない）
・画面の上下端に背景色へのグラデーション（高さ160px）をかけ、段が闇から現れて闇へ消えるようにする
・尺：5.6秒でループ`,
run(H,t){const G=H.abs({left:'120px',top:'-200px',display:'flex',flexDirection:'column'});
  const sty=[{color:'#f5c518'},{color:'#fff'},{color:'transparent',WebkitTextStroke:'3px #fff'}];
  for(let i=0;i<15;i++)H.el('div',Object.assign({height:'110px',fontFamily:F.heavy,fontSize:'96px',lineHeight:'110px',whiteSpace:'nowrap',marginLeft:i*80+'px'},sty[i%3]),G,t);
  H.a(G,[{transform:'translate(0,0)'},{transform:'translate(-240px,-330px)'}],{d:1400,e:E.lin,i:Infinity});
  H.abs({left:0,right:0,top:0,height:'160px',background:'linear-gradient(#141414,rgba(20,20,20,0))'});H.abs({left:0,right:0,bottom:0,height:'160px',background:'linear-gradient(rgba(20,20,20,0),#141414)'});
}});

def({no:'20',cat:'FLOW',name:'ニュースティッカー',en:'News Ticker',lead:'速報ラベル＋見出し＋流れる字幕。報道番組の画面下。',
text:'新サービスが本日スタート',loop:8000,bg:'#22262e',
use:'<b>お知らせ・速報風の告知・ニュース解説</b>に。真面目な内容を「ニュースっぽく」見せると信頼感が出ます。',
tips:['ラベルの「速報」を「LIVE」「NEWS」「独占」に変えるだけで性格が変わります','見出しは止め、下段だけ流すのが読みやすさのコツ','時計を右上に置くと一気に生放送っぽくなります'],
p:`報道番組の画面下にあるような「速報テロップ」を作ってください。
・背景：#22262E（映像の代わり）。右上に白い時計の表示「LIVE 20:00」（JetBrains Mono、赤い●が1秒ごとに点滅）
・下段の構成（画面下から）：
　① 流れる帯：高さ64px、#0B1F44（紺）。白文字で「{T}」＋「　◆　」をくり返し、左へ等速で流す（6秒で1組分）
　② 見出しの帯：高さ120px、白。左端に #C8102E の四角いラベル「速報」（白文字・Noto Sans JP 900）、右に「{T}」を #111・Noto Sans JP 900・64pxで表示
・登場：0.0〜0.5秒で見出しの帯が左から伸びる（scaleX 0→1、左基準）。0.3秒後にラベル、0.5秒後に見出し文字が下から0.4秒でせり上がる
・退場：7.3秒で帯全体を下へ0.5秒でスライドアウト
・尺：8秒でループ`,
run(H,t){const clk=H.abs({right:'60px',top:'50px',fontFamily:F.mono,fontSize:'34px',color:'#fff',display:'flex',alignItems:'center',gap:'14px'});const dot=H.el('span',{width:'18px',height:'18px',borderRadius:'50%',background:'#ff3b30'},clk);H.el('span',{},clk,'LIVE 20:00');
  H.a(dot,[{opacity:1},{opacity:.15}],{d:1000,e:'steps(2)',i:Infinity});
  const W=H.abs({left:'60px',right:'60px',bottom:'60px'});
  const head=H.el('div',{height:'120px',background:'#fff',display:'flex',alignItems:'center',gap:'28px',overflow:'hidden'},W);
  const lab=H.el('div',{background:'#c8102e',color:'#fff',fontFamily:F.sans,fontWeight:'900',fontSize:'52px',height:'120px',display:'flex',alignItems:'center',padding:'0 34px'},head,'速報');
  const hm=H.el('div',{overflow:'hidden',height:'90px'},head);const ht=H.el('div',{color:'#111',fontFamily:F.sans,fontWeight:'900',fontSize:'64px',lineHeight:'90px',whiteSpace:'nowrap'},hm,t);
  const tk=H.el('div',{height:'64px',background:'#0b1f44',overflow:'hidden',display:'flex',alignItems:'center'},W);
  const tr=track(H,tk,t+'　◆　',8,{color:'#fff',fontFamily:F.sans,fontWeight:'700',fontSize:'34px'});
  H.a(head,[{transform:'scaleX(0)',transformOrigin:'0 50%'},{transform:'scaleX(1)',transformOrigin:'0 50%'}],{d:500});
  H.a(lab,[{opacity:0},{opacity:1}],{d:200,dl:300});H.a(ht,[{transform:'translateY(100%)'},{transform:'translateY(0)'}],{d:400,dl:500});
  H.a(tk,[{opacity:0},{opacity:1}],{d:300,dl:600});H.a(tr,[{transform:'translateX(0)'},{transform:'translateX(-25%)'}],{d:6000,e:E.lin,i:Infinity});
  H.a(W,[{transform:'translateY(0)'},{transform:'translateY(320px)'}],{d:500,dl:7300,e:E.in,f:'forwards'});
}});
