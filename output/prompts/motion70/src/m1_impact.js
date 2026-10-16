/* ===== IMPACT 01-10 ===== */
const fs=(t,max,w)=>Math.round(Math.min(max,w/Math.max(1,[...t].length)));
const BIG=(H,t,css,parent)=>H.el('div',Object.assign({fontFamily:F.heavy,fontSize:fs(t,260,1300)+'px',lineHeight:'1.05',whiteSpace:'nowrap'},css||{}),parent,t);

def({no:'01',cat:'IMPACT',name:'ショックウェーブ',en:'Shock Wave',lead:'叩きつけて、光って、揺れる。冒頭の1語に。',
text:'限界突破',loop:3200,bg:'#0b0b0d',
use:'動画の<b>最初の0.5秒</b>。サムネと同じ言葉を叩きつけると、スクロールの指が止まります。決め台詞・章タイトルにも。',
tips:['着地の瞬間（0.38秒）に効果音「ドン」を合わせると迫力が倍になります','光の色を白→ブランドカラーに変えるだけで印象が変わります','言葉は4〜6文字が最も映えます。長い場合は2行に分けて'],
p:`画面中央に「{T}」を1語だけ置き、"叩きつける"ように登場させてください。
・背景：#0B0B0D の単色。文字：白、フォント Dela Gothic One、画面幅の約80%の大きさ
・0.00〜0.38秒：文字を scale 3.2／blur 24px／透明 → scale 1／blur 0／不透明 へ。イージング cubic-bezier(.7,0,.84,0)（加速しながら叩きつける）
・0.38秒（着地の瞬間）に3つ同時に起こす
　① 画面全体を白で一瞬光らせる（不透明度0.9→0、0.25秒）
　② 文字の中心から白い線の円（線幅10px）が6倍まで広がりながら消える（0.7秒）
　③ 画面全体を上下左右ランダムに最大14px、0.32秒揺らす
・2.4秒から：文字を scale 1.15 へ拡大しつつ blur 16px で0.5秒かけて消す
・尺：3.2秒でループ`,
run(H,t){const B=H.box();const w=BIG(H,t,{},B);
  H.a(w,[{transform:'scale(3.2)',filter:'blur(24px)',opacity:0},{transform:'scale(1)',filter:'blur(0)',opacity:1}],{d:380,e:E.in});
  const r=H.abs({width:'300px',height:'300px',left:'650px',top:'300px',border:'10px solid #fff',borderRadius:'50%',opacity:0});
  H.a(r,[{transform:'scale(.2)',opacity:1},{transform:'scale(6)',opacity:0}],{d:700,dl:380});
  const fl=H.abs({inset:'0',background:'#fff',opacity:0});H.a(fl,[{opacity:.9},{opacity:0}],{d:250,dl:380,f:'none'});
  H.shake(B,380,14,320);
  H.a(w,[{transform:'scale(1)',filter:'blur(0)',opacity:1},{transform:'scale(1.15)',filter:'blur(16px)',opacity:0}],{d:500,dl:2400,e:E.in,f:'forwards'});
}});

def({no:'02',cat:'IMPACT',name:'スタンプ連打',en:'Stamp Rush',lead:'判子を3回押す。結論や評価をリズムで決める。',
text:'決定 完売 採用',multi:true,loop:3600,bg:'#efebe3',
use:'レビュー動画の<b>評価発表</b>、「結論」「完売」「合格」など断定したい場面。紙の背景なので、ビジネス系・書類系の動画と相性が良いです。',
tips:['角度は±12°の範囲でバラすと「手で押した感」が出ます','3つ目だけ少し大きく押すと締まります','インクのかすれは「SVGのfeTurbulenceでかすれを足して」と追い指示'],
p:`紙のような背景に、朱色のハンコで言葉を3回「ポン、ポン、ポン」と押していく演出を作ってください。
・背景：#EFEBE3（生成りの紙）。ハンコ色：#E0352B
・押す言葉：「{T}」（スペース区切りで3語。1語ずつ順に押す）
・ハンコの形：角丸6pxの四角い枠（線幅12px）の中に、Dela Gothic One の文字。枠も文字も同じ朱色
・押す位置：画面中央を基準に、左上・中央・右下へずらして重ねる。角度は −12°〜+12° でランダム
・1語の押し方（0.16秒）：scale 2.6／透明 → scale 1／不透明。イージング cubic-bezier(.7,0,.84,0)。着地の瞬間に画面を最大8px・0.25秒揺らす
・押すタイミング：0.0秒／0.7秒／1.4秒。3つ目だけ1.2倍の大きさ
・3.0秒で全体を0.4秒フェードアウトし、尺3.6秒でループ`,
run(H,t,w){w=w.slice(0,3);while(w.length<3)w.push(w[0]||t);const B=H.box();
  const pos=[[-330,-150,-9],[30,0,7],[330,150,-4]];
  w.forEach((s,i)=>{const sc=i===2?1.2:1;const st=H.abs({left:'50%',top:'50%',transform:`translate(-50%,-50%) translate(${pos[i][0]}px,${pos[i][1]}px) rotate(${pos[i][2]}deg) scale(${sc})`},B);
    const inner=H.el('div',{border:'12px solid #e0352b',borderRadius:'6px',color:'#e0352b',fontFamily:F.heavy,fontSize:fs(s,150,700)+'px',lineHeight:'1',padding:'18px 30px',whiteSpace:'nowrap',mixBlendMode:'multiply'},st,s);
    H.a(inner,[{transform:'scale(2.6)',opacity:0},{transform:'scale(1)',opacity:1}],{d:160,dl:i*700,e:E.in});
    H.shake(B,i*700+160,8,250)});
  H.a(B,[{opacity:1},{opacity:0}],{d:400,dl:3000,f:'forwards'});
}});

def({no:'03',cat:'IMPACT',name:'パンチイン',en:'Punch Through',lead:'言葉がこちらへ飛び込み、突き抜けて次へ。',
text:'今日から 本気で 変わる',multi:true,loop:3400,bg:'#0b0b0d',
use:'3語のキャッチコピーを<b>テンポよく畳みかける</b>とき。モチベーション系、セミナー告知、商品のベネフィット3連発に。',
tips:['語の切り替え間隔0.8秒はBPM150の曲と相性が良いです','背景色を語ごとに反転させると、カット割りしたような勢いが出ます','最後の語だけ長く止めると「結論」として残ります'],
p:`「{T}」をスペースで区切った語を1つずつ、画面の奥から手前へ飛び込ませ、そのままカメラを突き抜けて次の語に切り替える演出を作ってください。
・フォント：Dela Gothic One、画面幅の約75%の大きさ
・背景色を語ごとに切り替える：1語目 #0B0B0D（文字白）→ 2語目 #FF4B3E（文字黒）→ 3語目 #0B0B0D（文字白）
・各語の登場（0.24秒）：scale 0.2／透明 → scale 1。イージング cubic-bezier(.34,1.56,.64,1)（少し行き過ぎて戻る）
・各語の退場（0.24秒）：登場から0.56秒後に scale 1 → 7／透明 へ。イージング cubic-bezier(.7,0,.84,0)
・語の間隔：0.8秒。最後の語だけ退場させずに1.2秒止める
・尺：3.4秒でループ`,
run(H,t,w){if(!w.length)w=[t];const B=H.box();const bgs=['#0b0b0d','#ff4b3e','#0b0b0d'],fg=['#fff','#111','#fff'];
  w.forEach((s,i)=>{H.wait(i*800,()=>{H.S.style.background=bgs[i%3]});
    const el=BIG(H,s,{position:'absolute',color:fg[i%3],fontSize:fs(s,280,1200)+'px'},B);
    H.a(el,[{transform:'scale(.2)',opacity:0},{transform:'scale(1)',opacity:1}],{d:240,dl:i*800,e:E.back});
    if(i<w.length-1)H.a(el,[{transform:'scale(1)',opacity:1},{transform:'scale(7)',opacity:0}],{d:240,dl:i*800+560,e:E.in,f:'forwards'});
    else H.a(el,[{opacity:1},{opacity:0}],{d:300,dl:i*800+1800,f:'forwards'});});
}});

def({no:'04',cat:'IMPACT',name:'スラッシュカット',en:'Slash Cut',lead:'一閃で文字が斜めに斬れて、ずれて、戻る。',
text:'一刀両断',loop:3000,bg:'#101012',
use:'「論破」「バッサリ解説」「NG集」など<b>切る・断つ</b>ニュアンスの言葉に。時代劇・ゲーム実況のタイトルにも。',
tips:['斬る線の角度は6°前後が自然。大きくすると派手に、小さくすると上品に','ずれた瞬間に上下で色を変える（上=白、下=赤）と劇的になります','効果音「シャキン」は斬線が走り終わった瞬間に'],
p:`中央の文字「{T}」が、一筋の光で斜めに斬られ、上下にずれてから元に戻る演出を作ってください。
・背景：#101012。文字：白、Dela Gothic One、幅1400px・高さ300pxの枠の中央に配置
・文字は同じものを2枚重ね、clip-path で上半分 polygon(0 0,100% 0,100% 25%,0 75%) と下半分 polygon(0 75%,100% 25%,100% 100%,0 100%) に分ける（斜めの切れ目）
・0.0〜0.3秒：文字全体をフェードイン
・0.5秒：切れ目に沿って、白く光る線（高さ6px、角度 −6°）が左から右へ0.2秒で走る（scaleX 0→1、影で発光）
・0.7秒：上半分を左上へ(−40px,−24px)、下半分を右下へ(40px,24px)、0.3秒でずらす。下半分の文字色を #FF4B3E に変える
・1.9秒：0.4秒で元の位置・元の色に戻す（イージング cubic-bezier(.87,0,.13,1)）
・2.6秒からフェードアウト、尺3.0秒でループ`,
run(H,t){const B=H.box();const wrap=H.abs({width:'1400px',height:'300px',left:'100px',top:'300px'},B);
  const mk=(clip)=>{const h=H.box({clipPath:clip},wrap);BIG(H,t,{fontSize:fs(t,260,1300)+'px',color:'#fff'},h);return h};
  const top=mk('polygon(0 0,100% 0,100% 25%,0 75%)'),bot=mk('polygon(0 75%,100% 25%,100% 100%,0 100%)');
  H.a(wrap,[{opacity:0},{opacity:1}],{d:300});
  const ln=H.abs({left:'0',top:'147px',width:'1400px',height:'6px',background:'#fff',boxShadow:'0 0 18px #fff,0 0 40px #ff4b3e',transform:'rotate(-6.1deg)'},wrap);
  H.a(ln,[{transform:'rotate(-6.1deg) scaleX(0)',transformOrigin:'0 50%',opacity:1},{transform:'rotate(-6.1deg) scaleX(1)',transformOrigin:'0 50%',opacity:1,offset:.7},{transform:'rotate(-6.1deg) scaleX(1)',transformOrigin:'0 50%',opacity:0}],{d:320,dl:500,e:E.out});
  H.a(top,[{transform:'translate(0,0)'},{transform:'translate(-40px,-24px)'}],{d:300,dl:700});
  H.a(bot,[{transform:'translate(0,0)',color:'#fff'},{transform:'translate(40px,24px)'}],{d:300,dl:700});
  H.wait(700,()=>{bot.firstChild.style.color='#ff4b3e'});H.wait(1900,()=>{bot.firstChild.style.transition='color .4s';bot.firstChild.style.color='#fff'});
  H.a(top,[{transform:'translate(-40px,-24px)'},{transform:'translate(0,0)'}],{d:400,dl:1900,e:E.io,f:'forwards'});
  H.a(bot,[{transform:'translate(40px,24px)'},{transform:'translate(0,0)'}],{d:400,dl:1900,e:E.io,f:'forwards'});
  H.a(wrap,[{opacity:1},{opacity:0}],{d:300,dl:2600,f:'forwards'});
}});

def({no:'05',cat:'IMPACT',name:'ワードバースト',en:'Word Burst',lead:'1語が弾けて、文字と火花が四方へ散る。',
text:'大爆笑',loop:2800,bg:'#141414',
use:'<b>オチ・爆笑・炎上</b>など「弾ける」瞬間に。リアクション動画のテロップ、ランキングの1位発表直後にも。',
tips:['散る距離を±600px→±1000pxにすると画面外まで飛んで豪快に','火花の色を文字色と変えると、爆発の中心がはっきりします','文字数が多いほど華やか。2文字だと寂しいので4文字以上推奨'],
p:`中央に「{T}」がポンと出て、0.7秒後に文字が1文字ずつバラバラに弾け飛ぶ演出を作ってください。
・背景：#141414。文字：#FFE14D（黄色）、Dela Gothic One、画面幅の約60%
・0.0〜0.3秒：全体を scale 0 → 1 で登場。イージング cubic-bezier(.34,1.56,.64,1)
・1.0秒：爆発。各文字を中心から外へ、x方向 −600〜600px・y方向 −400〜400px のランダムな位置へ、回転 −180〜180°、scale 0.3、透明にしながら0.6秒で飛ばす（イージング cubic-bezier(.16,1,.3,1)）
・同時に中心から白い火花を16本、放射状に飛ばす（幅120px×高さ6pxの線が外へ伸びながら消える、0.5秒）
・爆発の瞬間に画面を10px・0.25秒揺らす
・尺：2.8秒でループ`,
run(H,t){const B=H.box();const w=BIG(H,t,{color:'#ffe14d',fontSize:fs(t,240,1000)+'px'},B);w.textContent='';const cs=H.chars(t,w);
  H.a(w,[{transform:'scale(0)'},{transform:'scale(1)'}],{d:300,e:E.back});
  cs.forEach(c=>H.a(c,[{transform:'translate(0,0) rotate(0) scale(1)',opacity:1},{transform:`translate(${rnd(-600,600)}px,${rnd(-400,400)}px) rotate(${rnd(-180,180)}deg) scale(.3)`,opacity:0}],{d:600,dl:1000}));
  for(let i=0;i<16;i++){const a=i/16*360;const s=H.abs({left:'800px',top:'447px',width:'120px',height:'6px',background:'#fff',borderRadius:'3px',transformOrigin:'0 50%',opacity:0});
    H.a(s,[{transform:`rotate(${a}deg) translateX(40px) scaleX(.2)`,opacity:1},{transform:`rotate(${a}deg) translateX(420px) scaleX(1)`,opacity:0}],{d:500,dl:1000})}
  H.shake(B,1000,10,250);
}});

def({no:'06',cat:'IMPACT',name:'ゴムストレッチ',en:'Rubber Stretch',lead:'縦に引き伸ばされた文字が、ゴムのように縮んで止まる。',
text:'伸びしろ',loop:2800,bg:'#ff4b3e',
use:'「伸びる」「成長」「ストレッチ」など<b>伸び縮み</b>を連想させる言葉に。フィットネス、成長記録、数字が伸びた報告に。',
tips:['伸び率3.5倍→5倍にするとコミカル、2倍にすると上品','文字の下端を基準（transform-origin: bottom）にするのが「床から生える」感のコツ','背景と文字を補色にすると、伸びた瞬間の残像が映えます'],
p:`「{T}」の各文字が、縦にビヨーンと伸びた状態から、ゴムのように縮んで止まる演出を作ってください。
・背景：#FF4B3E。文字：#111、Dela Gothic One、画面幅の約70%
・各文字は文字の下端を基準に縦方向だけ変形させる（transform-origin: 50% 100%）
・1文字の動き（0.9秒）：scaleY 3.5 → 0.7 → 1.15 → 0.95 → 1（キーフレームの位置は 0 / 40 / 65 / 85 / 100%）。同時に scaleX は 0.6 → 1.15 → 0.95 → 1 → 1
・文字ごとに0.07秒ずつ遅らせて左から順に動かす
・2.3秒：全文字を scaleY 0（上から潰れる）へ0.35秒で退場。イージング cubic-bezier(.7,0,.84,0)
・尺：2.8秒でループ`,
run(H,t){const B=H.box();const w=BIG(H,t,{color:'#111',fontSize:fs(t,280,1200)+'px'},B);w.textContent='';const cs=H.chars(t,w,{transformOrigin:'50% 100%'});
  cs.forEach((c,i)=>{H.a(c,[{transform:'scale(.6,3.5)',offset:0},{transform:'scale(1.15,.7)',offset:.4},{transform:'scale(.95,1.15)',offset:.65},{transform:'scale(1,.95)',offset:.85},{transform:'scale(1,1)',offset:1}],{d:900,dl:i*70,e:E.soft});
    H.a(c,[{transform:'scale(1,1)'},{transform:'scale(1.1,0)'}],{d:350,dl:2300,e:E.in,f:'forwards'})});
}});

def({no:'07',cat:'IMPACT',name:'ヘビードロップ',en:'Heavy Drop',lead:'重たい文字が1つずつ落ちてきて、ズシンと着地。',
text:'重大発表',loop:3400,bg:'#151515',
use:'<b>重大発表・ご報告・お知らせ</b>の頭に。「重さ」が出るので、ニュース性のある内容や真面目な告知に向きます。',
tips:['落下は必ず「加速する」イージング（ease-in）にするのが重さのコツ','着地の潰れ（scaleY 0.75）を強くするほど柔らかく、弱くするほど硬い素材に見えます','土ぼこりの粒の色を床の色に合わせるとなじみます'],
p:`「{T}」の文字が1文字ずつ画面の上から落ちてきて、床に「ズシン」と着地する演出を作ってください。
・背景：#151515。文字：白、Dela Gothic One、画面幅の約70%。文字の下に細い床の線（#444、幅1400px、高さ4px）
・1文字の落下（0.38秒）：translateY −900px → 0。イージング cubic-bezier(.7,0,.84,0)（加速して落ちる）
・着地（0.3秒）：scale(1.25, 0.75) → scale(0.95, 1.05) → scale(1,1)。transform-origin は文字の下端
・着地の瞬間：①画面全体を6px・0.2秒揺らす ②文字の足元から灰色(#888)の小さな丸（直径6〜14px）を左右に6個ずつ飛ばし、0.5秒で消す（土ぼこり）
・文字ごとに0.11秒ずつ遅らせる
・2.9秒でフェードアウト、尺3.4秒でループ`,
run(H,t){const B=H.box({flexDirection:'column'});const w=BIG(H,t,{fontSize:fs(t,260,1300)+'px'},B);w.textContent='';const cs=H.chars(t,w,{transformOrigin:'50% 100%'});
  H.el('div',{width:'1400px',height:'4px',background:'#444',marginTop:'8px'},B);
  cs.forEach((c,i)=>{const dl=i*110;H.a(c,[{transform:'translateY(-900px)'},{transform:'translateY(0)'}],{d:380,dl,e:E.in});
    H.a(c,[{transform:'scale(1.25,.75)'},{transform:'scale(.95,1.05)'},{transform:'scale(1,1)'}],{d:300,dl:dl+380,e:E.out,f:'none'});
    H.shake(B,dl+380,6,200);
    H.wait(dl+380,()=>{const r=c.getBoundingClientRect(),sr=H.S.getBoundingClientRect(),k=1600/sr.width;const cx=(r.left+r.width/2-sr.left)*k,cy=(r.bottom-sr.top)*k;
      for(let j=0;j<12;j++){const sz=rnd(6,14);const d=H.abs({left:cx+'px',top:cy-sz+'px',width:sz+'px',height:sz+'px',borderRadius:'50%',background:'#888'});const dir=j<6?-1:1;
        H.a(d,[{transform:'translate(0,0)',opacity:.9},{transform:`translate(${dir*rnd(40,140)}px,${-rnd(10,60)}px)`,opacity:0}],{d:500})}})});
  H.a(B,[{opacity:1},{opacity:0}],{d:400,dl:2900,f:'forwards'});
}});

def({no:'08',cat:'IMPACT',name:'フラッシュカット',en:'Flash Cut',lead:'0.16秒ごとに言葉と色が切り替わる、サブリミナル級の速さ。',
text:'見逃す な 今夜 20時',multi:true,loop:3000,bg:'#000',
use:'<b>告知・カウントダウン・ライブ配信の予告</b>に。短い語を高速で切り替えると、情報量のわりに一瞬で目に入ります。',
tips:['1語0.16秒は「読める限界」の速さ。読ませたい語は最後に置いて止める','白・黒・赤の3色ローテーションが最も強い。ブランド色を1色混ぜても可','光の点滅が苦手な人もいるので、0.1秒より速くはしないのがマナーです'],
p:`「{T}」をスペースで区切った語を、0.16秒ごとに画面いっぱいの文字で高速に切り替える演出を作ってください。
・フォント：Dela Gothic One、画面の高さの約40%の大きさ
・背景と文字色の組み合わせを1語ごとに順番に切り替える：①背景#000・文字白 ②背景#FF4B3E・文字#000 ③背景#FFF・文字#000
・切り替えはフェードなしのハードカット。語ごとに文字の大きさを 0.9〜1.1倍、角度を −3〜3° でランダムに変えて、躍動感を出す
・全語を2周したら、最後の語だけ背景#000・文字#FF4B3E で1.2秒止め、scale 1 → 1.06 へゆっくり拡大
・尺：3.0秒でループ（点滅が速すぎないよう、切り替えは0.1秒より速くしない）`,
run(H,t,w){if(!w.length)w=[t];const B=H.box();const el=BIG(H,'',{},B);const sch=[['#000','#fff'],['#ff4b3e','#000'],['#fff','#000']];
  const seq=[...w,...w];seq.forEach((s,i)=>H.wait(i*160,()=>{const c=sch[i%3];H.S.style.background=c[0];el.style.color=c[1];el.textContent=s;el.style.fontSize=fs(s,360,1400)+'px';el.style.transform=`scale(${rnd(.9,1.1)}) rotate(${rnd(-3,3)}deg)`}));
  const end=seq.length*160;H.wait(end,()=>{const s=w[w.length-1];H.S.style.background='#000';el.style.color='#ff4b3e';el.textContent=s;el.style.fontSize=fs(s,360,1400)+'px';el.style.transform='none';
    H.a(el,[{transform:'scale(1)'},{transform:'scale(1.06)'}],{d:1200,e:E.soft})});
}});

def({no:'09',cat:'IMPACT',name:'集中線ズーム',en:'Speed Lines',lead:'漫画の集中線がチカチカ走り、中央の言葉に視線を集める。',
text:'ここが核心',loop:2600,bg:'#f4f2ee',
use:'<b>「ここ重要」</b>を伝える場面。解説動画のポイント、ゲーム実況の決定的瞬間、漫画風の演出に。',
tips:['線の本数90本前後が漫画らしさの目安。多いほど緊迫感が出ます','毎フレーム線を描き直すと、手描きアニメのチラつきが出ます','文字に白い太フチを付けると、線と重なっても読めます'],
p:`漫画の「集中線」が毎フレーム描き直されてチラつく背景の中央に、「{T}」がズームインする演出を作ってください。
・背景：#F4F2EE。集中線：#111
・集中線は Canvas で描く。毎フレーム、ランダムな角度に90本の細長い三角形を描く。三角形は画面外（半径1200px）から、中心から半径300〜380pxの位置まで伸び、根元の太さは2〜10pxでランダム
・中央の文字：Dela Gothic One、色 #FF4B3E、白い太フチ（14px）＋黒の細フチ（2px）
・0.0〜0.35秒：文字を scale 0.3 → 1。イージング cubic-bezier(.34,1.56,.64,1)
・0.35秒以降：文字を scale 1 → 1.08 へ2秒かけてゆっくり拡大し続ける
・尺：2.6秒でループ`,
run(H,t){const c=H.canvas();const x=c.getContext('2d');
  H.raf(()=>{x.fillStyle='#f4f2ee';x.fillRect(0,0,1600,900);x.fillStyle='#111';for(let i=0;i<90;i++){const a=Math.random()*Math.PI*2,r0=rnd(300,380),w=rnd(.002,.012);
    x.beginPath();x.moveTo(800+Math.cos(a-w)*1200,450+Math.sin(a-w)*1200);x.lineTo(800+Math.cos(a)*r0,450+Math.sin(a)*r0);x.lineTo(800+Math.cos(a+w)*1200,450+Math.sin(a+w)*1200);x.fill()}});
  const B=H.box();const el=BIG(H,t,{color:'#ff4b3e',fontSize:fs(t,220,1100)+'px',WebkitTextStroke:'2px #111',textShadow:'0 0 0 #fff,-7px -7px 0 #fff,7px -7px 0 #fff,-7px 7px 0 #fff,7px 7px 0 #fff,0 9px 0 #fff,0 -9px 0 #fff,9px 0 0 #fff,-9px 0 0 #fff'},B);
  H.a(el,[{transform:'scale(.3)'},{transform:'scale(1)'}],{d:350,e:E.back});
  H.a(el,[{transform:'scale(1)'},{transform:'scale(1.08)'}],{d:2000,dl:350,e:E.soft,f:'none'});
}});

def({no:'10',cat:'IMPACT',name:'ガラスクラッシュ',en:'Glass Shatter',lead:'文字にヒビが入り、ガラスのように割れて崩れ落ちる。',
text:'常識を壊せ',loop:3200,bg:'#0e1116',
use:'<b>「常識を壊す」「ぶっ壊す」「固定観念」</b>など、破壊がテーマの言葉に。ビフォーアフターの「ビフォー」を壊して次へ繋ぐ転換にも。',
tips:['破片は8〜12枚が見やすい。多すぎると何が割れたか分からなくなります','落下を加速（ease-in）＋回転させると重力感が出ます','割れた後に、次の言葉を同じ位置にフェードインさせると場面転換に使えます'],
p:`中央の「{T}」にヒビが入り、ガラスのように割れて破片が下に崩れ落ちる演出を作ってください。
・背景：#0E1116。文字：白、Dela Gothic One、画面幅の約70%
・0.0〜0.4秒：文字をフェードイン
・0.9秒：画面中央を起点に、白いヒビの線（SVG、線幅3px）を放射状に10本、0.15秒で一気に描く
・1.2秒：文字を割る。文字のレイヤーを10枚複製し、それぞれ clip-path: polygon で中心から放射状の三角形（36°ずつ）に切り抜く
・各破片は 0〜0.2秒のランダムな遅れで、下方向へ 900〜1100px 落下（x方向 −200〜200px、回転 −90〜90°）。0.9秒、イージング cubic-bezier(.7,0,.84,0)
・割れる瞬間に画面を12px・0.3秒揺らし、白を一瞬(0.15秒)光らせる
・尺：3.2秒でループ`,
run(H,t){const N=10,pieces=[];const W=H.box();const svg=H.svg(1600,900,W);
  for(let i=0;i<N;i++){const a0=i/N*Math.PI*2,a1=(i+1)/N*Math.PI*2;const p=[`50% 50%`,`${50+300*Math.cos(a0)}% ${50+300*Math.sin(a0)}%`,`${50+300*Math.cos((a0+a1)/2)}% ${50+300*Math.sin((a0+a1)/2)}%`,`${50+300*Math.cos(a1)}% ${50+300*Math.sin(a1)}%`];
    const b=H.box({clipPath:`polygon(${p.join(',')})`},W);BIG(H,t,{fontSize:fs(t,250,1150)+'px'},b);pieces.push(b);
    const len=rnd(250,700);const l=H.sv('line',{x1:800,y1:450,x2:800+Math.cos(a0)*len,y2:450+Math.sin(a0)*len,stroke:'#fff','stroke-width':3,'stroke-dasharray':len,'stroke-dashoffset':len,opacity:.9},svg);
    H.a(l,[{strokeDashoffset:len,opacity:1},{strokeDashoffset:0,opacity:1}],{d:150,dl:900});H.a(l,[{opacity:1},{opacity:0}],{d:100,dl:1200,f:'forwards'})}
  W.appendChild(svg);
  pieces.forEach(b=>{H.a(b,[{opacity:0},{opacity:1}],{d:400});H.a(b,[{transform:'translate(0,0) rotate(0)'},{transform:`translate(${rnd(-200,200)}px,${rnd(900,1100)}px) rotate(${rnd(-90,90)}deg)`}],{d:900,dl:1200+rnd(0,200),e:E.in,f:'forwards'})});
  const fl=H.abs({inset:'0',background:'#fff',opacity:0});H.a(fl,[{opacity:.7},{opacity:0}],{d:150,dl:1200,f:'none'});
  H.shake(W,1200,12,300);
}});
