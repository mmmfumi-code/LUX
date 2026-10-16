/* ===== PLAY 51-60 ===== */
const CANDY=['#ff5d8f','#ffb703','#3ab0ff','#7cd95b','#a78bfa','#ff8c42'];
const rel=(H,el)=>{const r=el.getBoundingClientRect(),s=H.S.getBoundingClientRect(),k=1600/s.width;return{x:(r.left-s.left)*k,y:(r.top-s.top)*k,w:r.width*k,h:r.height*k}};

def({no:'51',cat:'PLAY',name:'ゼリー',en:'Jelly Wobble',lead:'落ちてきた文字がぷるるんと震える。つつくとまた揺れる。',
text:'ぷるぷる新食感',loop:3800,bg:'#fdf6e9',
use:'<b>食べ物・スイーツ・かわいい系</b>に。グルメ動画の商品名、子ども向けコンテンツ、「やわらかい」を伝えたいときに。',
tips:['揺れは「横に広がる→縦に伸びる」を3回くり返し、徐々に小さくするのがゼリーらしさ','文字ごとに色を変えるとお菓子のようなポップさが出ます','揺れの基準点を文字の下端にすると、床に置いたゼリーのように'],
p:`カラフルな「{T}」の文字が上から落ちてきて、ゼリーのように「ぷるるん」と震える演出を作ってください。
・背景：#FDF6E9。文字：Mochiy Pop One、画面幅の約70%
・文字色：1文字ずつ #FF5D8F → #FFB703 → #3AB0FF → #7CD95B → #A78BFA → #FF8C42 の順でくり返す。下に同じ色を暗くした影（0 10px 0）
・落下（0.35秒）：translateY −500px → 0、イージング cubic-bezier(.7,0,.84,0)。文字ごとに0.08秒ずつ遅らせる
・着地後のぷるぷる（0.8秒）：transform-origin は文字の下端。scale を (1.3, 0.7) → (0.8, 1.2) → (1.12, 0.9) → (0.95, 1.05) → (1, 1) と変化させる
・2.2秒：左から順に（0.06秒ずつ）もう一度ぷるぷるさせる（つつかれた感じ。強さは半分）
・3.3秒でフェードアウト、尺3.8秒でループ`,
run(H,t){const B=H.box();const w=H.el('div',{fontFamily:F.pop,fontSize:fs(t,200,1150)+'px',whiteSpace:'nowrap'},B);
  const cs=H.chars(t,w,{transformOrigin:'50% 100%'});const jel=(c,dl,k)=>H.a(c,[{transform:'scale(1,1)'},{transform:`scale(${1+.3*k},${1-.3*k})`},{transform:`scale(${1-.2*k},${1+.2*k})`},{transform:`scale(${1+.12*k},${1-.1*k})`},{transform:`scale(${1-.05*k},${1+.05*k})`},{transform:'scale(1,1)'}],{d:800,dl,e:E.soft,f:'none'});
  cs.forEach((c,i)=>{const col=CANDY[i%CANDY.length];c.style.color=col;c.style.textShadow=`0 10px 0 color-mix(in srgb, ${col} 60%, #000)`;
    const wr=document.createElement('span');wr.style.display='inline-block';c.replaceWith(wr);wr.appendChild(c);
    H.a(wr,[{transform:'translateY(-500px)'},{transform:'translateY(0)'}],{d:350,dl:i*80,e:E.in});jel(c,i*80+350,1);jel(c,2200+i*60,.5)});
  H.a(B,[{opacity:1},{opacity:0}],{d:500,dl:3300,f:'forwards'});
}});

def({no:'52',cat:'PLAY',name:'ドミノ倒し',en:'Domino Fall',lead:'文字のタイルが、パタパタパタと連鎖して倒れていく。',
text:'連鎖反応',loop:3800,bg:'#1d2a1a',
use:'<b>連鎖・波及・バズ・口コミ</b>の表現に。「1つの行動が次々に…」という話の導入や、テンポのいいオチに。',
tips:['倒れる角度は隣のタイルに当たる角度（約70°）で止め、最後の1枚だけ90°まで倒すとリアル','倒れる速さを加速（ease-in）にすると重力を感じます','最初の1枚を押す「指」や「ボール」を足すと物語になります'],
p:`「{T}」の1文字ずつが白いタイルに書かれて並び、左から順にドミノ倒しのように連鎖して倒れていく演出を作ってください。
・背景：#1D2A1A。床の線（#3E5A37、高さ6px）
・タイル：1文字ごとに幅150px×高さ240px、背景 #FFFFFF、角丸12px、影 6px 6px 0 #0E150D。文字は #1D2A1A、Dela Gothic One、120px。タイルの間隔60px
・0.0〜0.5秒：タイルが下から順に起き上がる（scaleY 0→1、下基準、0.06秒ずつ遅らせる）
・0.9秒：1枚目が右下の角を軸に右へ倒れ始める。各タイルは rotate 0 → 68°（最後の1枚だけ 90°）へ0.32秒、イージング cubic-bezier(.55,0,1,.45)
・次のタイルは前のタイルが当たる瞬間（0.12秒後）に倒れ始める
・最後のタイルが倒れた瞬間、#7CD95B で「完了！」を右上にポンと出す（scale 0→1、cubic-bezier(.34,1.56,.64,1)）
・3.2秒で全体をフェードアウト、尺3.8秒でループ`,
run(H,t){const B=H.box({flexDirection:'column'});const row=H.el('div',{display:'flex',gap:'60px',alignItems:'flex-end',position:'relative'},B);const n=[...t].length;const W=Math.min(150,(1300-60*(n-1))/n);
  H.el('div',{width:Math.min(1500,n*(W+60)+200)+'px',height:'6px',background:'#3e5a37'},B);
  const tiles=[...t].map((ch,i)=>{const tl=H.el('div',{width:W+'px',height:W*1.6+'px',background:'#fff',borderRadius:'12px',boxShadow:'6px 6px 0 #0e150d',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:W*.8+'px',color:'#1d2a1a',transformOrigin:'100% 100%'},row,ch);
    H.a(tl,[{transform:'scaleY(0)'},{transform:'scaleY(1)'}],{d:300,dl:i*60,e:E.back});return tl});
  tiles.forEach((tl,i)=>H.a(tl,[{transform:'rotate(0deg)'},{transform:`rotate(${i===n-1?90:68}deg)`}],{d:320,dl:900+i*120,e:'cubic-bezier(.55,0,1,.45)',f:'forwards'}));
  const done=H.abs({right:'-40px',top:'-150px',fontFamily:F.pop,fontSize:'72px',color:'#7cd95b'},row,'完了！');H.a(done,[{transform:'scale(0)'},{transform:'scale(1)'}],{d:400,dl:900+(n-1)*120+320,e:E.back});
  H.a(B,[{opacity:1},{opacity:0}],{d:500,dl:3200,f:'forwards'});
}});

def({no:'53',cat:'PLAY',name:'マグネット',en:'Magnet Snap',lead:'散らばった文字がカチッと吸い寄せられ、反発してまた散る。',
text:'引き寄せる力',loop:4200,bg:'#f2f7ee',
use:'<b>集客・魅力・引き寄せ・チームワーク</b>に。「ファンを引き寄せる〇〇」「バラバラが1つに」という話に。',
tips:['吸い寄せは少し行き過ぎて戻る（back）ことで「カチッ」と磁力を感じます','散らばり時に文字を回転させておくと、整列したときの気持ちよさが増します','反発の瞬間に画面を少し揺らすと迫力が出ます'],
p:`バラバラに散らばった「{T}」の文字が、磁石に吸い寄せられるように一列にカチッと整列し、その後反発して再び散る演出を作ってください。
・背景：#F2F7EE。文字：#1D2A1A、Dela Gothic One、画面幅の約70%。整列したとき文字の下に #7CD95B のバー（高さ14px）
・初期状態：各文字を画面内のランダムな位置（中心から x ±650px、y ±320px）、ランダムな角度（−120〜120°）、大きさ0.6〜1.2倍に置き、不透明度0.5
・0.3秒：一斉に整列位置へ吸い寄せる。0.6秒、イージング cubic-bezier(.34,1.56,.64,1)（少し行き過ぎて戻る）。文字ごとに 0〜0.12秒のランダムな遅れ
・整列した瞬間（0.9秒）：#7CD95B のバーが中央から左右に伸び、画面を6px揺らす
・2.6秒：中心から外へ反発。各文字を中心からの方向に 500〜900px、回転 ±180°、不透明度0 へ0.7秒（cubic-bezier(.16,1,.3,1)）
・尺：4.2秒でループ`,
run(H,t){const B=H.box({flexDirection:'column',gap:'20px'});const w=H.el('div',{fontFamily:F.heavy,fontSize:fs(t,220,1150)+'px',color:'#1d2a1a',whiteSpace:'nowrap'},B);const cs=H.chars(t,w);
  const bar=H.el('div',{width:'1000px',height:'14px',background:'#7cd95b',borderRadius:'7px'},B);H.a(bar,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:400,dl:900,e:E.out});H.a(bar,[{opacity:1},{opacity:0}],{d:300,dl:2600,f:'forwards'});
  cs.forEach((c,i)=>{const from=`translate(${rnd(-650,650)}px,${rnd(-320,320)}px) rotate(${rnd(-120,120)}deg) scale(${rnd(.6,1.2)})`;const a=rnd(0,Math.PI*2);
    H.a(c,[{transform:from,opacity:.5},{transform:'translate(0,0) rotate(0) scale(1)',opacity:1}],{d:600,dl:300+rnd(0,120),e:E.back});
    H.a(c,[{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${Math.cos(a)*rnd(500,900)}px,${Math.sin(a)*rnd(300,600)}px) rotate(${rnd(-180,180)}deg)`,opacity:0}],{d:700,dl:2600,f:'forwards'})});
  H.shake(B,900,6,250);
}});

def({no:'54',cat:'PLAY',name:'風船',en:'Balloon Float',lead:'風船に乗った文字がふわふわ浮かび、最後の1個がパンッ！',
text:'おめでとう',loop:5200,bg:'#bfe6ff',
use:'<b>お祝い・誕生日・記念日・達成</b>に。「〇周年」「誕生日おめでとう」、ちょっとしたオチをつけたいときに。',
tips:['風船ごとに揺れの周期を少しずつ変えると、自然にふわふわして見えます','割れる瞬間に紙吹雪と「パン！」の文字を出すとさらに楽しい','風船の色はパステルより原色寄りの方が画面映えします'],
p:`「{T}」の1文字ずつが色とりどりの風船に書かれていて、画面下からふわふわ浮かんできて、最後に1つだけ割れる演出を作ってください。
・背景：#BFE6FF（空色）。白い雲（角丸の白い楕円の組み合わせ）を2つ、ゆっくり横に流す
・風船：1文字ごとに幅170px×高さ200pxの楕円（border-radius: 50%）。色は #FF5D8F, #FFB703, #3AB0FF, #7CD95B, #A78BFA を順に。左上に白いハイライト（不透明度0.35）。下に小さな三角の結び目と、長さ220pxの細いひも（#666、1.5px）
・風船の文字：白、Mochiy Pop One、110px
・0.0〜1.6秒：各風船が画面下（+700px）から目標の高さまで上昇。イージング cubic-bezier(.16,1,.3,1)、風船ごとに0.12秒ずつ遅らせる
・上昇後：各風船を translateY ±14px・rotate ±4° で揺らし続ける（周期は 2.2〜3.0秒で風船ごとに変える）
・3.6秒：最後の風船を scale 1 → 1.25（0.15秒）→ 0（0.06秒）で割り、その位置に「パン！」の文字と、8枚の紙吹雪を飛ばす。割れた風船の文字は下へ落ちる
・尺：5.2秒でループ`,
run(H,t){[[200,140,26000],[1100,90,32000]].forEach(([x0,y,d])=>{const cl=H.abs({left:x0+'px',top:y+'px',width:'260px',height:'80px',background:'#fff',borderRadius:'60px',boxShadow:'60px -30px 0 10px #fff, 130px 0 0 0 #fff'});H.a(cl,[{transform:'translateX(0)'},{transform:'translateX(-300px)'}],{d,e:E.lin})});
  const B=H.box();const row=H.el('div',{display:'flex',gap:'26px'},B);const cs=[...t];const n=cs.length;const W=Math.min(170,(1400-26*(n-1))/n);
  const bl=cs.map((ch,i)=>{const col=CANDY[i%5];const g=H.el('div',{position:'relative',display:'flex',flexDirection:'column',alignItems:'center'},row);
    const b=H.el('div',{width:W+'px',height:W*1.18+'px',borderRadius:'50%',background:col,position:'relative',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontFamily:F.pop,fontSize:W*.65+'px'},g);
    H.abs({left:'18%',top:'14%',width:'22%',height:'26%',borderRadius:'50%',background:'#fff',opacity:.35},b);const tx=H.el('span',{},b,ch);
    H.el('div',{width:'0',height:'0',borderLeft:'10px solid transparent',borderRight:'10px solid transparent',borderBottom:`14px solid ${col}`,marginTop:'-4px'},g);
    const str=H.el('div',{width:'1.5px',height:'220px',background:'#666'},g);
    H.a(g,[{transform:'translateY(700px)'},{transform:'translateY(0)'}],{d:1600,dl:i*120,e:E.out});
    H.a(b,[{transform:'translateY(0) rotate(0)'},{transform:`translateY(-14px) rotate(${i%2?4:-4}deg)`},{transform:'translateY(0) rotate(0)'}],{d:2200+i*160,e:'ease-in-out',i:Infinity,dl:1600});
    return{g,b,tx,str}});
  const L=bl[n-1];H.wait(3600,()=>{L.b.getAnimations().forEach(a=>a.cancel());H.a(L.b,[{transform:'scale(1)'},{transform:'scale(1.25)',offset:.7},{transform:'scale(0)'}],{d:210,e:E.in,f:'forwards'});
    H.a(L.str,[{opacity:1},{opacity:0}],{d:300,dl:200,f:'forwards'});
    const p=rel(H,L.b);const pan=H.abs({left:p.x-40+'px',top:p.y-30+'px',fontFamily:F.pop,fontSize:'90px',color:'#ff5d8f',WebkitTextStroke:'4px #fff'},null,'パン！');H.a(pan,[{transform:'scale(0) rotate(-10deg)'},{transform:'scale(1) rotate(-10deg)'}],{d:300,dl:200,e:E.back});
    const ft=H.abs({left:p.x+p.w/2-30+'px',top:p.y+p.h/2-60+'px',fontFamily:F.pop,fontSize:W*.65+'px',color:CANDY[(n-1)%5]},null,cs[n-1]);H.a(ft,[{transform:'translateY(0) rotate(0)'},{transform:'translateY(700px) rotate(200deg)'}],{d:1100,dl:200,e:E.in,f:'forwards'});
    for(let k=0;k<8;k++){const q=H.abs({left:p.x+p.w/2+'px',top:p.y+p.h/2+'px',width:'16px',height:'10px',background:CANDY[k%6]});H.a(q,[{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${rnd(-200,200)}px,${rnd(-200,120)}px) rotate(${rnd(-300,300)}deg)`,opacity:0}],{d:900,dl:200})}});
}});

def({no:'55',cat:'PLAY',name:'てくてく行進',en:'Walking Letters',lead:'文字たちが、ぴょこぴょこ歩いて画面に入ってくる。',
text:'おさんぽ日和',loop:4400,bg:'#fff8e7',
use:'<b>Vlog・散歩・お出かけ・ゆるい日常</b>に。ほのぼのした動画のタイトルや、キャラクター感を出したいときに。',
tips:['歩くたびに左右に傾ける（±8°）と、てくてく感が一気に出ます','1文字ずつ0.15秒遅らせると、行列に並んで歩いて見えます','止まった後に全員でぴょんと跳ねると、かわいい締めになります'],
p:`「{T}」の文字たちが、1文字ずつぴょこぴょこ歩いて画面の右から入ってきて、整列したら全員でぴょんと跳ねる演出を作ってください。
・背景：#FFF8E7。地面の線（#E8D9B5、高さ8px、角丸）
・文字：#2B2B2B、Mochiy Pop One、画面幅の約60%。各文字の足元に小さな楕円の影
・歩き方：各文字を translateX +1500px → 0 へ1.8秒で移動（ほぼ等速、最後だけ減速：cubic-bezier(.3,0,.4,1)）。文字ごとに0.15秒ずつ遅らせる
・歩いている間（0.3秒周期のくり返し）：translateY 0 → −36px → 0（ぴょこっ）＋ rotate −8° と +8° を1歩ごとに交互に
・到着したら傾きと上下を0に戻す
・全員そろった0.3秒後：全員同時に translateY −80px のジャンプ（0.45秒、着地で scale(1.15,0.85) に潰れて戻る）
・3.8秒でフェードアウト、尺4.4秒でループ`,
run(H,t){const B=H.box({flexDirection:'column'});const row=H.el('div',{display:'flex',fontFamily:F.pop,fontSize:fs(t,190,1000)+'px',color:'#2b2b2b'},B);H.el('div',{width:'1300px',height:'8px',borderRadius:'4px',background:'#e8d9b5',marginTop:'6px'},B);
  const n=[...t].length;[...t].forEach((ch,i)=>{const mv=H.el('div',{display:'inline-block'},row);const hop=H.el('div',{display:'inline-block',transformOrigin:'50% 100%'},mv);H.el('span',{whiteSpace:'pre'},hop,ch);
    const dl=i*150;H.a(mv,[{transform:'translateX(1500px)'},{transform:'translateX(0)'}],{d:1800,dl,e:'cubic-bezier(.3,0,.4,1)'});
    const steps=6;const k=[];for(let s=0;s<steps;s++){const r=s%2?8:-8;k.push({transform:`translateY(0) rotate(${r}deg)`,offset:s/steps},{transform:`translateY(-36px) rotate(${r}deg)`,offset:(s+.5)/steps})}k.push({transform:'translateY(0) rotate(0)',offset:1});
    H.a(hop,k,{d:1800,dl,e:E.lin,f:'none'});const jt=1800+(n-1)*150+300;
    H.a(hop,[{transform:'translateY(0) scale(1)'},{transform:'translateY(-80px) scale(1)',offset:.45},{transform:'translateY(0) scale(1.15,.85)',offset:.8},{transform:'translateY(0) scale(1)'}],{d:450,dl:jt,e:E.soft,f:'none'})});
  H.a(B,[{opacity:1},{opacity:0}],{d:500,dl:3800,f:'forwards'});
}});

def({no:'56',cat:'PLAY',name:'ボヨヨン',en:'Spring Drop',lead:'天井から吊られた文字が落ちてきて、バネでボヨヨンと弾む。',
text:'お知らせ',loop:3400,bg:'#ffe066',
use:'<b>お知らせ・注目・ちょっと聞いて</b>に。真面目な告知をやわらかく見せたいとき、子ども向け・ファミリー向けの動画に。',
tips:['跳ね返りの高さを毎回およそ半分にしていくと、自然なバネの減衰になります','一番下に来た瞬間だけ文字を横に潰すと、弾力が強調されます','吊りひもをジグザグのバネにすると、さらにおもちゃっぽく'],
p:`天井からひもで吊られた「{T}」の看板が落ちてきて、バネのようにボヨヨンと上下に弾んで止まる演出を作ってください。
・背景：#FFE066
・看板：白い角丸（24px）の板、太い黒フチ（8px #222）、影 0 14px 0 #222。中に「{T}」（#222、Mochiy Pop One、画面幅の約45%）
・ひも：看板の上端の左右2か所から、画面の上端まで伸びる黒い線（#222、6px）。看板と一緒に動く（看板の上に十分長い線を付けておく）
・落下とバネ：translateY を −900px → 40 → −60 → 26 → −16 → 8 → −3 → 0（キーフレームの位置 0 / 28 / 44 / 58 / 70 / 81 / 91 / 100%）で1.6秒。各区間は ease-in-out
・一番下に来た瞬間（28%・58%の位置）だけ、看板を scale(1.12, 0.88) に潰す
・止まった後、1.0秒かけて rotate −2° → 2° → 0 でゆらっと揺れる
・2.9秒で上へ引き上げて退場（translateY → −900px、0.4秒、cubic-bezier(.7,0,.84,0)）
・尺：3.4秒でループ`,
run(H,t){const B=H.box();const sign=H.el('div',{position:'relative',background:'#fff',border:'8px solid #222',borderRadius:'24px',boxShadow:'0 14px 0 #222',padding:'30px 70px',fontFamily:F.pop,fontSize:fs(t,170,700)+'px',color:'#222',whiteSpace:'nowrap'},B,t);
  ['18%','78%'].forEach(l=>H.abs({left:l,bottom:'100%',width:'6px',height:'900px',background:'#222'},sign));
  H.a(sign,[{transform:'translateY(-900px) scale(1)',offset:0},{transform:'translateY(40px) scale(1.12,.88)',offset:.28},{transform:'translateY(-60px) scale(1)',offset:.44},{transform:'translateY(26px) scale(1.06,.94)',offset:.58},{transform:'translateY(-16px)',offset:.7},{transform:'translateY(8px)',offset:.81},{transform:'translateY(-3px)',offset:.91},{transform:'translateY(0)',offset:1}],{d:1600,e:'ease-in-out'});
  H.a(B,[{transform:'rotate(0)'},{transform:'rotate(-2deg)'},{transform:'rotate(2deg)'},{transform:'rotate(0)'}],{d:1000,dl:1600,e:'ease-in-out',f:'none'});
  H.a(sign,[{transform:'translateY(0)'},{transform:'translateY(-900px)'}],{d:400,dl:2900,e:E.in,f:'forwards'});
}});

def({no:'57',cat:'PLAY',name:'らくがき強調',en:'Doodle Marks',lead:'赤ペンでぐるっと囲んで、二重線、ビックリマーク。',
text:'ここテストに出る',loop:4200,bg:'#fbfaf6',
use:'<b>勉強・解説・要点のまとめ</b>に。教育系、ノート風の動画、「ここ大事！」を手書き感で伝えたいときに。',
tips:['丸の線はわざと始点と終点をずらして重ねると、手書きらしくなります','線を描く速さは0.5秒前後が「さっと書いた」感じ','方眼ノートの背景にすると、勉強系の雰囲気が一気に出ます'],
p:`ノートに書いた「{T}」を、赤ペンで手書き風にぐるっと囲み、下に二重線、横にビックリマークを書き足していく演出を作ってください。
・背景：#FBFAF6 に、薄い水色（#DCEBF5）の方眼（40px間隔）
・文字：#222、Zen Kaku Gothic New の太字、画面幅の約55%。0.0〜0.3秒でフェードイン
・赤ペン：色 #E5383B、線幅9px、線端は丸く。すべて SVG のパスを stroke-dasharray / stroke-dashoffset で「描く」
　① 0.5秒〜1.1秒：文字全体を囲む楕円。手書き風に、始点と終点が少し重なってはみ出す形（1周＋20°）。線を少しゆらがせる
　② 1.2秒〜1.5秒：文字の下に横線を1本、1.5〜1.8秒にもう1本（少し短く、少し傾ける）
　③ 1.9秒〜2.2秒：右上にビックリマーク「!!」を2本の線と点で描く
　④ 2.3秒：左上に小さな星 ☆ を描いて、scale 0→1.2→1 で弾ませる
・3.6秒でフェードアウト、尺4.2秒でループ`,
run(H,t){H.abs({inset:'0',backgroundImage:'linear-gradient(#dcebf5 1px,transparent 1px),linear-gradient(90deg,#dcebf5 1px,transparent 1px)',backgroundSize:'40px 40px'});
  const sz=fs(t,170,900);const B=H.box();const el=H.el('div',{fontFamily:"'Zen Kaku Gothic New',sans-serif",fontWeight:'700',fontSize:sz+'px',color:'#222',whiteSpace:'nowrap'},B,t);H.a(el,[{opacity:0},{opacity:1}],{d:300});
  const svg=H.svg(1600,900);const pen={fill:'none',stroke:'#e5383b','stroke-width':9,'stroke-linecap':'round','stroke-linejoin':'round'};
  const draw=(d,dl,dur)=>{const p=H.sv('path',Object.assign({d},pen),svg);const L=p.getTotalLength();p.setAttribute('stroke-dasharray',L);p.setAttribute('stroke-dashoffset',L);H.a(p,[{strokeDashoffset:L},{strokeDashoffset:0}],{d:dur,dl,e:E.soft});return p};
  H.wait(20,()=>{const r=rel(H,el);const cx=r.x+r.w/2,cy=r.y+r.h/2,rx=r.w/2+70,ry=r.h/2+50;let d='';for(let a=0;a<=Math.PI*2+.35;a+=.08){const j=Math.sin(a*5)*6;const x=cx+(rx+j)*Math.cos(a-Math.PI*.9),y=cy+(ry+j)*Math.sin(a-Math.PI*.9);d+=(d?'L':'M')+x.toFixed(1)+' '+y.toFixed(1)}
    draw(d,500,600);const y1=r.y+r.h+80;draw(`M ${r.x-10} ${y1} Q ${cx} ${y1+10} ${r.x+r.w+20} ${y1-6}`,1200,300);draw(`M ${r.x+40} ${y1+28} Q ${cx} ${y1+36} ${r.x+r.w-40} ${y1+18}`,1500,300);
    const ex=r.x+r.w+rx-r.w/2+20,ey=r.y-40;draw(`M ${ex} ${ey} L ${ex-8} ${ey+80}`,1900,150);draw(`M ${ex+34} ${ey-4} L ${ex+26} ${ey+76}`,2000,150);draw(`M ${ex-11} ${ey+104} l 1 1`,2100,60);draw(`M ${ex+23} ${ey+100} l 1 1`,2150,60);
    const sx=r.x-rx+r.w/2-10,sy=r.y-50;const st=H.sv('g',{},svg);st.style.transformOrigin=`${sx}px ${sy}px`;let sp='';for(let k=0;k<11;k++){const a=-Math.PI/2+k*Math.PI/5;const rr=k%2?14:34;sp+=(k?'L':'M')+(sx+rr*Math.cos(a)).toFixed(1)+' '+(sy+rr*Math.sin(a)).toFixed(1)}
    H.sv('path',Object.assign({d:sp},pen,{'stroke-width':6}),st);H.a(st,[{transform:'scale(0)'},{transform:'scale(1.2)',offset:.7},{transform:'scale(1)'}],{d:400,dl:2300,e:E.back})});
  H.wait(3600,()=>{[B,svg].forEach(e=>H.a(e,[{opacity:1},{opacity:0}],{d:500,f:'forwards'}))});
}});

def({no:'58',cat:'PLAY',name:'吹き出しポップ',en:'Speech Bubbles',lead:'漫画の吹き出しが、ポン、ポン、ポンと次々に湧き出す。',
text:'え？ マジで！？ 神すぎる',multi:true,loop:4200,bg:'#ffd6e8',
use:'<b>リアクション・口コミ・みんなの声</b>に。商品レビューの感想、コメント紹介、ツッコミ・ボケのテロップに。',
tips:['吹き出しの角度を±8°でバラすと、ワイワイしたにぎやかさが出ます','最後の吹き出しだけトゲトゲ（叫び）の形にすると、オチが強調されます','ポップ音（効果音）を1つずつ合わせると楽しさが倍増'],
p:`漫画の吹き出しが画面のあちこちから次々にポンと湧き出し、それぞれにセリフが入る演出を作ってください。
・背景：#FFD6E8 に、白い水玉（直径14px、60px間隔、不透明度0.5）
・セリフ：「{T}」をスペースで区切った語を、1つの吹き出しに1語ずつ
・吹き出し：白い楕円（黒フチ6px #222）＋ 話し手の方向を指す三角のしっぽ。文字は #222、Mochiy Pop One、80〜110px。最後の吹き出しだけ、黄色 #FFE14D のトゲトゲの「叫び」形（clip-path の星形ポリゴン）で、文字を大きく
・配置：左上・右中・中央下…と重なりすぎないようにずらし、角度は −8〜8° でランダム
・出方：0.45秒ごとに1つずつ。scale 0 → 1.15 → 1（0.35秒、cubic-bezier(.34,1.56,.64,1)）。出た瞬間に吹き出しを小さく揺らす
・全部出たら0.5秒後、全吹き出しが同時にぷるっと震える（scale 1→1.05→1）
・3.6秒でフェードアウト、尺4.2秒でループ`,
run(H,t,w){if(!w.length)w=[t];H.abs({inset:'0',backgroundImage:'radial-gradient(rgba(255,255,255,.5) 7px,transparent 8px)',backgroundSize:'60px 60px'});
  const pos=[[330,230,-7],[1180,330,6],[760,640,-3],[420,620,5],[1250,690,-6]];const n=w.length;const items=[];
  w.forEach((s,i)=>{const last=i===n-1&&n>1;const [x,y,r]=pos[i%5];const g=H.abs({left:x+'px',top:y+'px',transform:`translate(-50%,-50%) rotate(${r}deg)`});
    const fz=last?120:fs(s,100,560);let b;
    if(last){b=H.el('div',{background:'#222',clipPath:'polygon(50% 0,60% 18%,78% 6%,76% 28%,98% 24%,86% 44%,100% 60%,80% 66%,88% 88%,66% 80%,56% 100%,46% 82%,26% 96%,26% 74%,4% 78%,14% 58%,0 40%,20% 34%,12% 12%,34% 20%)',padding:'90px 120px'},g);
      H.abs({inset:'8px',background:'#ffe14d',clipPath:'inherit'},b);H.el('div',{position:'relative',fontFamily:F.pop,fontSize:fs(s,120,520)+'px',color:'#222',whiteSpace:'nowrap'},b,s)}
    else{b=H.el('div',{position:'relative',background:'#fff',border:'6px solid #222',borderRadius:'50%',padding:'50px 70px',fontFamily:F.pop,fontSize:fz+'px',color:'#222',whiteSpace:'nowrap'},g,s);
      H.abs({left:'22%',bottom:'-34px',width:'0',height:'0',borderLeft:'18px solid transparent',borderRight:'18px solid transparent',borderTop:'40px solid #222'},b);H.abs({left:'calc(22% + 7px)',bottom:'-22px',width:'0',height:'0',borderLeft:'11px solid transparent',borderRight:'11px solid transparent',borderTop:'26px solid #fff'},b)}
    H.a(b,[{transform:'scale(0)'},{transform:'scale(1.15)',offset:.7},{transform:'scale(1)'}],{d:350,dl:i*450,e:E.back});items.push(b)});
  const all=(n-1)*450+350+500;items.forEach(b=>H.a(b,[{transform:'scale(1)'},{transform:'scale(1.05)'},{transform:'scale(1)'}],{d:300,dl:all,f:'none'}));
  H.wait(3600,()=>items.forEach(b=>H.a(b.parentNode,[{opacity:1},{opacity:0}],{d:500,f:'forwards'})));
}});

def({no:'59',cat:'PLAY',name:'ころころ',en:'Rolling In',lead:'タイヤのように転がってきた文字が、ちょうどの位置で止まる。',
text:'ころがる毎日',loop:3800,bg:'#e9f7e3',
use:'<b>日常・継続・コツコツ</b>の表現に。「毎日続ける」系の企画、ゆるいトーク動画、雑談配信のタイトルに。',
tips:['転がる距離と回転量を合わせる（移動距離÷文字の円周）と、滑らずに転がって見えます','止まる直前に少し揺り戻すと、重さのある物体に見えます','文字ごとに違う色の丸い台紙を付けると、ボールが転がるように'],
p:`「{T}」の各文字が丸い台紙に乗って、タイヤのように左から転がってきて、ちょうどの位置で止まる演出を作ってください。
・背景：#E9F7E3。床の線（#B5D9A6、高さ6px）
・各文字：直径170pxの円の台紙（#FFFFFF、フチ6px #2F5D24）の中央に文字（#2F5D24、Dela Gothic One、100px）
・転がり方：translateX を −1700px → 0、rotate を −720° → 0 に同時に変化（滑らずに転がるよう、回転量 = 移動距離 ÷ 円周 × 360°）。1.4秒、イージング cubic-bezier(.22,1,.36,1)
・文字ごとに0.1秒ずつ遅らせる。左の文字ほど遠くまで転がるよう、移動距離に「文字の位置 × 200px」を足す
・止まる直前に少し揺り戻す：最後に rotate +8° → 0 の揺れを0.3秒
・止まった文字の下に、小さな砂ぼこり（灰緑の丸3つ）をふわっと出す
・3.2秒でフェードアウト、尺3.8秒でループ`,
run(H,t){const B=H.box({flexDirection:'column'});const row=H.el('div',{display:'flex',gap:'16px'},B);const n=[...t].length;const D=Math.min(170,(1450-16*(n-1))/n);H.el('div',{width:'1450px',height:'6px',background:'#b5d9a6',marginTop:'8px'},B);
  [...t].forEach((ch,i)=>{const c=H.el('div',{width:D+'px',height:D+'px',borderRadius:'50%',background:'#fff',border:'6px solid #2f5d24',boxSizing:'border-box',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:D*.58+'px',color:'#2f5d24'},row,ch);
    const dist=1700+(n-1-i)*200;const rot=-(dist/(Math.PI*D))*360;
    H.a(c,[{transform:`translateX(${-dist}px) rotate(${rot}deg)`},{transform:'translateX(0) rotate(0deg)',offset:.82},{transform:'translateX(0) rotate(8deg)',offset:.9},{transform:'translateX(0) rotate(0deg)'}],{d:1700,dl:i*100,e:'cubic-bezier(.22,1,.36,1)'});
    H.wait(1500+i*100,()=>{const p=rel(H,c);for(let k=0;k<3;k++){const d=H.abs({left:p.x+p.w/2+(k-1)*30+'px',top:p.y+p.h-10+'px',width:'14px',height:'14px',borderRadius:'50%',background:'#9bbf8d'});H.a(d,[{transform:'translate(0,0) scale(.5)',opacity:.9},{transform:`translate(${(k-1)*30}px,-30px) scale(1.2)`,opacity:0}],{d:600})}})});
  H.a(B,[{opacity:1},{opacity:0}],{d:500,dl:3200,f:'forwards'});
}});

def({no:'60',cat:'PLAY',name:'カラオケ字幕',en:'Karaoke Lyric',lead:'歌詞の色が左から塗り替わり、ボールが文字の上を跳ねる。',
text:'君と見た夏の空 いつまでも忘れない',multi:true,loop:7000,bg:'#1b1033',
use:'<b>歌ってみた・歌詞動画・名言の読み上げ</b>に。読み上げに合わせて色が変わるので、ナレーションの字幕にも使えます。',
tips:['塗り替えの速さを、読み上げや歌の速さ（1文字0.18秒前後）に合わせるのが基本','跳ねるボールは文字1つにつき1回弾ませると、リズムが分かりやすい','2行目は1行目が終わってから塗り始めると、カラオケらしくなります'],
p:`カラオケの字幕のように、歌詞の文字色が左から順に塗り替わり、その上を小さなボールが跳ねていく演出を作ってください。
・背景：#1B1033（夜の紫）。下から #3B1F6E のグラデーション
・歌詞：「{T}」をスペースで区切り、1行目・2行目として2行に表示（2行目は右寄せで少し下げる）。Noto Sans JP 900、96px、文字色は白、黒の太フチ（6px）
・塗り替え：同じ文字のコピーを重ね、色 #FF7AC6（フチは白）にして、clip-path: inset(0 100% 0 0) → inset(0 0 0 0) で左から塗る。速さは1文字0.18秒の等速。1行目が終わったら2行目を塗る
・ボール：直径26pxの #FFE14D の丸。常に「塗り替えの先端」の真上にいて、文字1つ進むごとに1回、高さ50pxで弾む（|sin| の動き）
・各行は0.3秒前に下から translateY 30px → 0 でフェードイン
・全部塗り終わったら1秒止めて、0.5秒でフェードアウト
・尺：7秒でループ`,
run(H,t,w){const l1=w[0]||t,l2=w[1]||'';const B=H.abs({left:'0',right:'0',top:'0',bottom:'0',background:'linear-gradient(transparent 40%,#3b1f6e)'});
  const box=H.abs({left:'150px',right:'150px',top:'470px',display:'flex',flexDirection:'column',gap:'40px'});const CH=0.18;
  const mkLine=(s,align)=>{const wr=H.el('div',{position:'relative',alignSelf:align,fontFamily:F.sans,fontWeight:'900',fontSize:fs(s,96,1300)+'px',whiteSpace:'nowrap',lineHeight:'1.2'},box);
    H.el('div',{color:'#fff',WebkitTextStroke:'6px #000',paintOrder:'stroke fill'},wr,s);const fill=H.abs({left:'0',top:'0',color:'#ff7ac6',WebkitTextStroke:'6px #fff',paintOrder:'stroke fill',clipPath:'inset(0 100% 0 0)'},wr,s);return{wr,fill,n:[...s].length}};
  const L=[mkLine(l1,'flex-start')];if(l2)L.push(mkLine(l2,'flex-end'));
  const ball=H.abs({left:'0',top:'0',width:'26px',height:'26px',borderRadius:'50%',background:'#ffe14d',boxShadow:'0 0 14px #ffe14d',opacity:0});
  let st=400;L.forEach(l=>{l.st=st;H.a(l.wr,[{transform:'translateY(30px)',opacity:0},{transform:'translateY(0)',opacity:1}],{d:300,dl:Math.max(0,st-300)});H.a(l.fill,[{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0 0 0)'}],{d:l.n*CH*1000,dl:st,e:E.lin});st+=l.n*CH*1000});
  const end=st;H.a(box,[{opacity:1},{opacity:0}],{d:500,dl:end+1000,f:'forwards'});
  H.raf(s=>{const ms=s*1000;const l=L.find(q=>ms>=q.st&&ms<q.st+q.n*CH*1000);if(!l){ball.style.opacity=0;return}const r=rel(H,l.wr);const k=(ms-l.st)/(l.n*CH*1000);const ph=(ms-l.st)/(CH*1000);
    ball.style.opacity=1;ball.style.transform=`translate(${r.x+r.w*k-13}px,${r.y-40-50*Math.abs(Math.sin(ph*Math.PI))}px)`});
}});
