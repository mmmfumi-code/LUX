/* ===== SWITCH 31-40 ===== */
const VIO='#a78bfa';

def({no:'31',cat:'SWITCH',name:'フラップボード',en:'Split-flap Board',lead:'駅の発車標のように、パタパタと文字がめくれて揃う。',
text:'東京行き',loop:4200,bg:'#121016',
use:'<b>行き先・目的地・発表</b>に。旅行動画のタイトル、「次の目的地は…」、空港・駅が舞台の動画に。',
tips:['めくれる回数を文字ごとに増やす（左から順に揃う）のが本物らしさのコツ','パタパタ音の効果音を1枚ごとに鳴らすと臨場感が段違い','板の上下で色を少し変える（上が明るい）と立体に見えます'],
p:`駅や空港の「パタパタ式発車標」のように、各文字の板がめくれながらランダムな文字を経て「{T}」に揃う演出を作ってください。
・背景：#121016
・文字板：1文字ごとに幅180px×高さ240pxの板。背景は上半分 #2A2632、下半分 #221F29、中央に横一本の黒い切れ目（2px）。角丸10px。板どうしの間隔14px
・文字：白、Noto Sans JP 900、170px
・めくれ方：板の上半分がパタンと下へ倒れる動き（rotateX 0 → −90°、回転軸は板の中央、0.08秒）を1回とし、そのたびに文字を「アイウエオ…0〜9」からランダムに入れ替える
・左から n 番目の板は 8 + n×3 回めくれてから正しい文字で止まる（左から順に揃っていく）
・全部揃ったら、板全体の下に #A78BFA の細い線（高さ6px）が左から右へ0.4秒で伸びる
・3.6秒で全体をフェードアウト、尺4.2秒でループ`,
run(H,t){const B=H.box({gap:'14px'});const cs=[...t];const n=cs.length;const W=Math.min(180,1400/n-14),Hh=W*4/3;
  const boards=cs.map(()=>{const b=H.el('div',{position:'relative',width:W+'px',height:Hh+'px',borderRadius:'10px',overflow:'hidden',background:'linear-gradient(#2a2632 50%,#221f29 50%)',perspective:'600px'},B);
    const ch=H.abs({inset:'0',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.sans,fontWeight:'900',fontSize:W*.94+'px',color:'#fff'},b,' ');
    const flap=H.abs({left:0,right:0,top:0,height:'50%',background:'#2a2632',transformOrigin:'50% 100%',opacity:0},b);
    H.abs({left:0,right:0,top:'calc(50% - 1px)',height:'2px',background:'#000'},b);return{ch,flap}});
  boards.forEach((b,i)=>{const flips=8+i*3;for(let k=0;k<=flips;k++)H.wait(k*80,()=>{b.ch.textContent=k===flips?cs[i]:pick([...POOL]);if(k<flips)H.a(b.flap,[{transform:'rotateX(0)',opacity:1},{transform:'rotateX(-90deg)',opacity:1}],{d:80,e:E.in,f:'none'})})});
  const done=(8+(n-1)*3)*80+100;const ln=H.abs({left:'50%',top:`calc(50% + ${Hh/2+30}px)`,width:Math.min(1400,n*(W+14))+'px',height:'6px',background:VIO,transform:'translateX(-50%) scaleX(0)'});
  H.a(ln,[{transform:'translateX(-50%) scaleX(0)'},{transform:'translateX(-50%) scaleX(1)'}],{d:400,dl:done});
  H.a(B,[{opacity:1},{opacity:0}],{d:500,dl:3600,f:'forwards'});H.a(ln,[{opacity:1},{opacity:0}],{d:500,dl:3600,f:'forwards'});
}});

def({no:'32',cat:'SWITCH',name:'スロットリール',en:'Slot Reel',lead:'リールが高速回転し、左から順にガシャンと止まる。',
text:'大当たり',loop:4000,bg:'#17121f',
use:'<b>抽選・ガチャ・運試し・結果発表</b>に。プレゼント企画の当選発表、「今日の運勢」、ランダム企画の決定に。',
tips:['止まる瞬間に少し行き過ぎて戻る（back）と「ガシャン」感が出ます','回転中は縦方向にモーションブラー（blur）をかけるとスピード感が増します','最後に全リールが揃ったら、背景をフラッシュさせると当たり感が出ます'],
p:`スロットマシンのリールのように、各文字が縦に高速回転して、左から順に止まって「{T}」が揃う演出を作ってください。
・背景：#17121F。リール枠：1文字ごとに幅200px×高さ260px、背景 #FFFFFF、角丸16px、内側に上下から影（inset 0 30px 30px −20px rgba(0,0,0,.35)）
・リールの中身：ランダムな文字を20個縦に並べ、最後に正解の文字を置いた縦長の帯。文字は #17121F、Dela Gothic One、180px
・回転：帯を translateY で上から下へ流し、最後の正解文字が枠の中央に来た位置で止める
・止まるタイミング：1つ目のリールは1.2秒、以降0.3秒ずつ遅らせる。イージング cubic-bezier(.34,1.3,.64,1)（少し行き過ぎて戻る）
・回転中は帯に filter: blur(縦方向に強く見えるよう 4px)、止まったら blur 0
・全リールが止まった瞬間：枠の外側に #A78BFA の光（box-shadow 0 0 60px）を0.6秒点滅させる
・尺：4秒でループ`,
run(H,t){const B=H.box({gap:'18px'});const cs=[...t];const n=cs.length;const W=Math.min(200,1400/n-18),Hh=W*1.3;
  cs.forEach((c,i)=>{const fr=H.el('div',{position:'relative',width:W+'px',height:Hh+'px',background:'#fff',borderRadius:'16px',overflow:'hidden'},B);
    const strip=H.abs({left:0,top:0,width:'100%'},fr);const N=20;for(let k=0;k<=N;k++)H.el('div',{height:Hh+'px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:W*.88+'px',color:'#17121f'},strip,k===N?c:pick([...POOL]));
    H.abs({inset:'0',boxShadow:'inset 0 30px 30px -20px rgba(0,0,0,.35),inset 0 -30px 30px -20px rgba(0,0,0,.35)',pointerEvents:'none'},fr);
    const d=1200+i*300;H.a(strip,[{transform:'translateY(0)',filter:'blur(4px)'},{transform:`translateY(${-N*Hh}px)`,filter:'blur(0)'}],{d,e:'cubic-bezier(.34,1.3,.64,1)'});
    H.a(fr,[{boxShadow:'0 0 0 rgba(167,139,250,0)'},{boxShadow:'0 0 60px '+VIO},{boxShadow:'0 0 0 rgba(167,139,250,0)'}],{d:600,dl:1200+(n-1)*300,f:'none'})});
}});

def({no:'33',cat:'SWITCH',name:'タイプ＆修正',en:'Type & Correct',lead:'打って、消して、打ち直す。本音と建前のタイプライター。',
text:'がんばります 休みたい',multi:true,loop:6000,bg:'#f2f0f7',
use:'<b>本音と建前・言い直し・ツッコミ</b>に。1語目を消して2語目に打ち直すだけで、笑いや共感が生まれます。',
tips:['消す速さは打つ速さの2倍にすると「慌てて消した」感じに','打ち直す前に0.5秒ためると、本音が強調されます','1語目と2語目の色を変えると、言い直しが一目で分かります'],
p:`タイプライターのように文字を1文字ずつ打ち、一度消してから別の言葉に打ち直す演出を作ってください。
・背景：#F2F0F7。文字：#1A1625、Noto Sans JP 900、96px。中央左寄せ
・文字の後ろに、点滅するカーソル（幅8px×高さ100px、#A78BFA、0.5秒ごとに表示・非表示）
・流れ：
　① 0.4秒から：「{T}」の1語目を1文字0.12秒で打つ
　② 打ち終わって0.7秒待つ
　③ 1文字0.06秒で後ろから全部消す（バックスペース）
　④ 0.5秒ためる
　⑤ 2語目を1文字0.12秒で打つ。2語目の文字色は #7C3AED
　⑥ 打ち終わったら、2語目の下に #A78BFA の下線（高さ10px）を左から0.3秒で引く
・打つたびに、その文字を translateY 6px → 0 で小さく弾ませる
・尺：6秒でループ`,
run(H,t,w){const a=w[0]||t,b=w[1]||t;const B=H.box();const line=H.el('div',{position:'relative',display:'flex',alignItems:'center',fontFamily:F.sans,fontWeight:'900',fontSize:fs(a.length>b.length?a:b,96,1300)+'px',color:'#1a1625',minHeight:'130px'},B);
  const txt=H.el('span',{display:'inline-flex'},line);const cur=H.el('span',{width:'8px',height:'100px',background:VIO,marginLeft:'8px'},line);H.a(cur,[{opacity:1},{opacity:0}],{d:1000,e:'steps(2,jump-none)',i:Infinity});
  let tm=400;const type=(s,col)=>{[...s].forEach(ch=>{H.wait(tm,()=>{const c=H.el('span',{display:'inline-block',color:col,whiteSpace:'pre'},txt,ch);H.a(c,[{transform:'translateY(6px)'},{transform:'translateY(0)'}],{d:120})});tm+=120})};
  type(a,'#1a1625');tm+=700;[...a].forEach(()=>{H.wait(tm,()=>{txt.lastChild&&txt.lastChild.remove()});tm+=60});tm+=500;type(b,'#7c3aed');
  H.wait(tm,()=>{const u=H.abs({left:'0',bottom:'-6px',height:'10px',background:VIO,width:txt.offsetWidth+'px',transformOrigin:'0 50%'},line);H.a(u,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:300})});
}});

def({no:'34',cat:'SWITCH',name:'オドメーター',en:'Odometer Count',lead:'数字の各桁がくるくる回り、目標の数字でピタッと止まる。',
text:'1,000,000',loop:4400,bg:'#100d17',
use:'<b>実績・登録者数・売上・記録</b>の発表に。「〇万人突破」「累計〇件」など数字で語る場面の定番。',
tips:['下の桁ほど多く回るようにすると、本物のメーターのように見えます','止まった瞬間に単位（人・円・件）をポンと出すと伝わりやすい','カンマは回さず固定するのが読みやすさのコツ'],
p:`車の走行距離メーターのように、数字の各桁が縦に回転して「{T}」でピタッと止まる演出を作ってください。
・背景：#100D17。数字：白、JetBrains Mono の太字、220px、等幅
・各桁：0〜9を縦に並べた帯を、高さ1桁分の窓（overflow: hidden）からのぞかせる。カンマや記号は回さずに固定表示
・回転量：右端（一の位）ほど多く回す。左から n 番目の桁は「(全桁数 − n) + 1」周してから目標の数字で止まる
・止まり方：2.2秒、イージング cubic-bezier(.16,1,.3,1)（最初速く、最後はゆっくり）。各桁の開始を左から0.06秒ずつ遅らせる
・窓の上下に背景色へのグラデーション（高さ40px）をかけて、回る数字が上下で溶けるように
・止まった直後：数字全体の下に #A78BFA の文字で「達成」を、translateY 30px → 0 でフェードイン
・尺：4.4秒でループ`,
run(H,t){const B=H.box({flexDirection:'column',gap:'30px'});const row=H.el('div',{display:'flex',fontFamily:F.mono,fontWeight:'700',fontSize:fs(t,220,1400/0.62)+'px',color:'#fff',lineHeight:'1'},B);
  const sz=parseFloat(row.style.fontSize);const cs=[...t];const digs=cs.filter(c=>/\d/.test(c)).length;let di=0;
  cs.forEach((c,i)=>{if(!/\d/.test(c)){H.el('span',{},row,c);return}const n=di++;const win=H.el('div',{height:sz+'px',overflow:'hidden',position:'relative'},row);
    const strip=H.el('div',{},win);const loops=digs-n+1;const total=loops*10+ +c;for(let k=0;k<=total;k++)H.el('div',{height:sz+'px'},strip,String(k%10));
    H.abs({left:0,right:0,top:0,height:'40px',background:'linear-gradient(#100d17,rgba(16,13,23,0))'},win);H.abs({left:0,right:0,bottom:0,height:'40px',background:'linear-gradient(rgba(16,13,23,0),#100d17)'},win);
    H.a(strip,[{transform:'translateY(0)'},{transform:`translateY(${-total*sz}px)`}],{d:2200,dl:n*60,e:E.out})});
  const lab=H.el('div',{fontFamily:F.heavy,fontSize:'72px',color:VIO},B,'達成');H.a(lab,[{transform:'translateY(30px)',opacity:0},{transform:'translateY(0)',opacity:1}],{d:500,dl:2200+digs*60});
}});

def({no:'35',cat:'SWITCH',name:'デコード',en:'Scramble Decode',lead:'ランダムな記号が左から順に解読され、言葉になる。',
text:'ACCESS GRANTED',loop:4200,bg:'#07060b',
use:'<b>ハッカー・暗号・謎解き・テクノロジー</b>系に。「正体は…」の種明かしや、新機能の発表にも。',
tips:['解読された文字と未解読の文字で色を変えると、進み具合が見えて気持ちいい','記号のプールを「01」だけにすると2進数風、カタカナにするとマトリックス風','1文字あたりの揺らぎ時間を長くすると、より「解読してる感」が出ます'],
p:`ランダムな記号がめまぐるしく変わりながら、左から順に正しい文字に確定して「{T}」になる「デコード（解読）」演出を作ってください。
・背景：#07060B。文字：JetBrains Mono の太字、画面幅いっぱいの大きさ
・確定前の文字：「!<>-_\\/[]{}=+*^?#ｱｲｳｴｵ」からランダムに選んだ記号を、0.04秒ごとに入れ替え続ける。色 #5B4B8A
・確定した文字：白。確定の瞬間だけ #A78BFA に光って（text-shadow 0 0 20px）0.2秒で白に戻る
・タイミング：0.3秒から開始。左から n 番目の文字は 0.3 + n×0.08 秒で確定（最初の0.3秒は全部が記号で揺れている）
・全部確定したら、文字の下に「[ OK ]」を #A78BFA で小さく点滅させる（0.25秒ごと、3回）
・3.6秒で全体を0.4秒フェードアウト、尺4.2秒でループ`,
run(H,t){const B=H.box({flexDirection:'column',gap:'40px'});const row=H.el('div',{fontFamily:F.mono,fontWeight:'700',fontSize:fs(t,170,1450/0.62)+'px',whiteSpace:'pre',display:'flex'},B);
  const sym=[...'!<>-_\\/[]{}=+*^?#ｱｲｳｴｵ'];const cs=[...t];const spans=cs.map(c=>H.el('span',{color:'#5b4b8a'},row,c===' '?' ':pick(sym)));
  const fix=cs.map((c,i)=>300+300+i*80);const ok=H.el('div',{fontFamily:F.mono,fontSize:'40px',color:VIO,opacity:0},B,'[ OK ]');
  H.raf(s=>{const ms=s*1000;spans.forEach((sp,i)=>{if(cs[i]===' ')return;if(ms<fix[i]){if(Math.floor(ms/40)!==sp._k){sp._k=Math.floor(ms/40);sp.textContent=pick(sym)}}else if(!sp._d){sp._d=1;sp.textContent=cs[i];sp.style.color='#fff';H.a(sp,[{color:VIO,textShadow:'0 0 20px '+VIO},{color:'#fff',textShadow:'0 0 0 transparent'}],{d:200})}})});
  const end=fix[fix.length-1];H.a(ok,[{opacity:0},{opacity:1},{opacity:0}],{d:500,dl:end+100,i:3,e:'steps(2,jump-none)',f:'none'});
  H.a(B,[{opacity:1},{opacity:0}],{d:400,dl:3600,f:'forwards'});
}});

def({no:'36',cat:'SWITCH',name:'上下スプリット',en:'Split Reveal',lead:'言葉が上下に割れて開き、裏から次の言葉が現れる。',
text:'昨日まで 今日から',multi:true,loop:4000,bg:'#14111b',
use:'<b>転換・決意・Before→After</b>に。「〇〇は終わり。これからは〇〇」のように、気持ちを切り替える瞬間に。',
tips:['割れる幅（±120px）を大きくすると、裏の言葉がドンと現れます','上下で色を変えたまま割ると、ポスターのようなグラフィックに','割れた半分を画面外まで飛ばすと、より劇的な場面転換に'],
p:`1つ目の言葉が上下半分に割れて開き、その隙間から2つ目の言葉が現れる演出を作ってください。
・背景：#14111B。フォント：Dela Gothic One、画面幅の約65%
・1つ目の言葉：「{T}」の1語目、白。同じものを2枚重ね、上半分（clip-path: inset(0 0 50% 0)）と下半分（inset(50% 0 0 0)）に分ける
・2つ目の言葉：2語目、#A78BFA。1つ目の後ろに、scale 0.85・不透明度0で待機
・0.0〜0.4秒：1つ目の言葉をフェードイン
・1.2秒：上半分を translateY −120px、下半分を +120px へ0.5秒で開く（イージング cubic-bezier(.87,0,.13,1)）。同時に上下とも不透明度を0.25に
・1.3秒：2つ目の言葉を scale 0.85→1・不透明度0→1 で0.5秒、cubic-bezier(.34,1.56,.64,1)
・割れ目に沿って #A78BFA の細い光の線（高さ3px）を0.3秒だけ横に走らせる
・3.4秒で全体をフェードアウト、尺4秒でループ`,
run(H,t,w){const a=w[0]||t,b=w[1]||t;const B=H.box();const sz=fs(a.length>b.length?a:b,250,1100);
  const back=BIG(H,b,{position:'absolute',color:VIO,fontSize:sz+'px'},B);
  const top=H.box({clipPath:'inset(0 0 50% 0)'},B),bot=H.box({clipPath:'inset(50% 0 0 0)'},B);BIG(H,a,{fontSize:sz+'px'},top);BIG(H,a,{fontSize:sz+'px'},bot);
  [top,bot].forEach((h,i)=>{H.a(h,[{opacity:0},{opacity:1}],{d:400});H.a(h,[{transform:'translateY(0)',opacity:1},{transform:`translateY(${i?120:-120}px)`,opacity:.25}],{d:500,dl:1200,e:E.io})});
  H.a(back,[{transform:'scale(.85)',opacity:0},{transform:'scale(1)',opacity:1}],{d:500,dl:1300,e:E.back});
  const ln=H.abs({left:'0',top:'449px',width:'1600px',height:'3px',background:VIO,boxShadow:'0 0 16px '+VIO,opacity:0});H.a(ln,[{transform:'scaleX(0)',opacity:1},{transform:'scaleX(1)',opacity:0}],{d:300,dl:1200,f:'none'});
  H.a(B,[{opacity:1},{opacity:0}],{d:500,dl:3400,f:'forwards'});
}});

def({no:'37',cat:'SWITCH',name:'ワイプ置換',en:'Bar Wipe Swap',lead:'色の帯が横切った瞬間、言葉がすり替わっている。',
text:'検討中 決定',multi:true,loop:3600,bg:'#f1eef8',
use:'<b>見出しの更新・ステータス変更・結論</b>に。「検討中→決定」「赤字→黒字」など、状態の変化を見せたいときに。',
tips:['帯が文字を完全に隠した瞬間に入れ替えるのがコツ（ここがズレると安っぽくなる）','帯を2色重ねて少しずらすと、雑誌の見出しのようなリズムが出ます','帯の速さは0.5秒前後が「シュッ」と気持ちいい'],
p:`紫の帯が左から右へ文字を横切り、通り過ぎると言葉がすり替わっている「ワイプ置換」を作ってください。
・背景：#F1EEF8。文字：#1A1625、Noto Sans JP 900、画面幅の約55%
・1つ目の言葉：「{T}」の1語目。0.0〜0.4秒で translateY 40px → 0 でフェードイン
・1.0秒：文字の高さより少し大きい帯を2本、左から右へ通過させる。1本目 #A78BFA、0.08秒遅れて2本目 #1A1625。帯の動きは「左端から伸びて文字全体を覆う（scaleX 0→1、左基準、0.3秒）→ 右端へ縮んで消える（scaleX 1→0、右基準、0.3秒）」
・2本目の帯が文字を完全に覆った瞬間（1.38秒）に、文字を2語目に入れ替え、色を #7C3AED にする
・2語目の左上に小さなラベル「UPDATE」（JetBrains Mono、#A78BFA）をポンと出す
・3.0秒でフェードアウト、尺3.6秒でループ`,
run(H,t,w){const a=w[0]||t,b=w[1]||t;const B=H.box();const wrap=H.el('div',{position:'relative',padding:'10px 30px'},B);
  const el=H.el('div',{fontFamily:F.sans,fontWeight:'900',fontSize:fs(a.length>b.length?a:b,230,900)+'px',color:'#1a1625',lineHeight:'1.15',whiteSpace:'nowrap'},wrap,a);
  H.a(el,[{transform:'translateY(40px)',opacity:0},{transform:'translateY(0)',opacity:1}],{d:400});
  [[VIO,1000],['#1a1625',1080]].forEach(([c,dl])=>{const bar=H.abs({inset:'0',background:c,transform:'scaleX(0)'},wrap);
    H.a(bar,[{transform:'scaleX(0)',transformOrigin:'0 50%'},{transform:'scaleX(1)',transformOrigin:'0 50%'}],{d:300,dl,e:E.io,f:'none'});
    H.a(bar,[{transform:'scaleX(1)',transformOrigin:'100% 50%'},{transform:'scaleX(0)',transformOrigin:'100% 50%'}],{d:300,dl:dl+300,e:E.io,f:'none'})});
  H.wait(1380,()=>{el.textContent=b;el.style.color='#7c3aed'});
  const lab=H.abs({left:'30px',top:'-40px',fontFamily:F.mono,fontSize:'30px',color:VIO,letterSpacing:'.15em'},wrap,'UPDATE');H.a(lab,[{transform:'scale(0)'},{transform:'scale(1)'}],{d:300,dl:1700,e:E.back});
  H.a(B,[{opacity:1},{opacity:0}],{d:500,dl:3000,f:'forwards'});
}});

def({no:'38',cat:'SWITCH',name:'リキッドモーフ',en:'Liquid Morph',lead:'文字が溶けてくっつき、別の言葉へとろりと変わる。',
text:'夢 目標 現実',multi:true,loop:4500,loopFn:w=>Math.max(1,w.length)*1500,bg:'#000',
use:'<b>変化・成長・変身</b>の表現に。「夢→目標→現実」のように段階的に変わっていく話や、ブランドの世界観づくりに。',
tips:['ぼかし（blur）とコントラスト（contrast）の組み合わせが「溶ける」効果の正体','背景は必ず黒か白の単色に（グラデーションだと効果が崩れます）','溶ける時間を長くすると、より液体っぽく粘ります'],
p:`文字が液体のように溶けてくっつき合いながら、次の言葉へとろりと変化する「リキッドモーフ」を作ってください。
・背景：#000（単色であることが必須）
・仕組み：文字を入れた親要素に filter: contrast(28) をかけ、背景 #000 を指定する。中の各言葉に blur をかけると、輪郭がくっつき合う液体のように見える
・言葉：「{T}」をスペースで区切った語を順番に表示。Dela Gothic One、画面幅の約50%、色 #A78BFA
・1語の流れ（1.5秒）：
　登場 0.5秒：blur 40px・不透明度0 → blur 0・不透明度1
　静止 0.5秒
　退場 0.5秒：blur 0 → blur 40px・不透明度0（次の語の登場と同時に重ねる）
・語が切り替わるとき、前の語と次の語が同時にぼけて混ざり合うように、登場と退場を完全に重ねる
・尺：語数 × 1.5秒でループ`,
run(H,t,w){if(!w.length)w=[t];const B=H.box({filter:'contrast(28)',background:'#000'});
  w.forEach((s,i)=>{const el=BIG(H,s,{position:'absolute',color:VIO,fontSize:fs(s,280,850)+'px'},B);const st=i*1500;
    H.a(el,[{filter:'blur(40px)',opacity:0},{filter:'blur(0px)',opacity:1}],{d:500,dl:i?st-500:0,e:E.soft});
    H.a(el,[{filter:'blur(0px)',opacity:1},{filter:'blur(40px)',opacity:0}],{d:500,dl:st+1000,e:E.soft,f:'forwards'})});
}});

def({no:'39',cat:'SWITCH',name:'ブラインド',en:'Venetian Blind',lead:'ブラインドの羽根が一斉に回転して、言葉が入れ替わる。',
text:'OFF ON',multi:true,loop:4000,bg:'#1a1622',
use:'<b>オンオフ・昼夜・モード切替</b>に。「仕事モード→休日モード」や、場面の時間帯が変わる転換に。',
tips:['羽根の枚数は10〜14枚がきれい。多いほど細やかで上品に','上から順に0.04秒ずつ遅らせると、波打つように回ります','表と裏で背景色も変えると、場面ごと切り替わった印象に'],
p:`窓のブラインドの羽根が一斉に回転し、表の言葉から裏の言葉へ切り替わる演出を作ってください。
・背景：#1A1622。CSS 3D（perspective: 1400px）
・パネル：幅1300px×高さ520px を、横長の羽根12枚（各高さ約43px）に分割
・各羽根の表面：背景 #1A1622、文字は「{T}」の1語目（白、Dela Gothic One、パネル全体に1つの大きな文字）。羽根ごとに、その高さの部分だけを表示する（文字を羽根の位置ぶん上にずらし、overflow: hidden）
・各羽根の裏面：背景 #A78BFA、文字は2語目（#1A1622）。同じ方法で分割し、rotateX(180°)・backface-visibility: hidden
・1.0秒：上の羽根から0.04秒ずつ遅らせて、各羽根を rotateX 0 → 180° へ0.6秒で回転（イージング cubic-bezier(.65,0,.35,1)）
・2.6秒：同じ順番で 180° → 360° へ戻す
・尺：4秒でループ`,
run(H,t,w){const a=w[0]||t,b=w[1]||t;const P=H.box({perspective:'1400px'});const W=H.el('div',{position:'relative',width:'1300px',height:'520px'},P);
  const N=12,h=520/N;const sz=fs(a.length>b.length?a:b,360,1200);
  for(let i=0;i<N;i++){const s=H.abs({left:'0',top:i*h+'px',width:'1300px',height:h+'px',transformStyle:'preserve-3d'},W);
    const face=(txt,bg,fg,back)=>{const f=H.abs({inset:'0',overflow:'hidden',background:bg,backfaceVisibility:'hidden',transform:back?'rotateX(180deg)':'none'},s);
      H.abs({left:'0',top:-i*h+'px',width:'1300px',height:'520px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:sz+'px',color:fg,whiteSpace:'nowrap'},f,txt)};
    face(a,'#1a1622','#fff',0);face(b,VIO,'#1a1622',1);
    H.a(s,[{transform:'rotateX(0deg)'},{transform:'rotateX(180deg)'}],{d:600,dl:1000+i*40,e:'cubic-bezier(.65,0,.35,1)'});
    H.a(s,[{transform:'rotateX(180deg)'},{transform:'rotateX(360deg)'}],{d:600,dl:2600+i*40,e:'cubic-bezier(.65,0,.35,1)',f:'forwards'})}
}});

def({no:'40',cat:'SWITCH',name:'ルーレット選択',en:'Roulette Pick',lead:'候補の言葉が縦にぐるぐる流れ、減速して1つに決まる。',
text:'カレー ラーメン 寿司 焼肉 パスタ',multi:true,loop:5000,bg:'#0f0c15',
use:'<b>今日の〇〇・ランダム決定・くじ引き</b>に。「今日のランチは…」「次の挑戦は…」のような企画もの全般に。',
tips:['候補は5〜8個がちょうどいい。少ないと回っている感じが出ません','止まる直前に1つ手前で一瞬止めてから進める「じらし」を入れると盛り上がります','決定した瞬間、枠を光らせて紙吹雪を少し散らすと完成度が上がります'],
p:`候補の言葉が縦にぐるぐる流れ、だんだん減速して1つに止まる「ルーレット選択」の演出を作ってください。
・背景：#0F0C15
・候補：「{T}」をスペースで区切った語。最後の語を「当選」とする
・表示枠：画面中央に幅1000px×高さ180pxの枠（線 4px #A78BFA、角丸20px）。枠の上下に、前後の候補が小さく薄く見えるように並べる（上下は scale 0.7・不透明度0.3）
・候補の帯：候補を何周もくり返した縦長のリスト（1項目の高さ180px、Noto Sans JP 900、110px、白）
・回転：帯を translateY で上方向へ3.0秒動かし、最後の語が枠の中央でちょうど止まるようにする。イージング cubic-bezier(.12,.8,.2,1)（最初は高速、最後はじわじわ止まる）
・止まった瞬間：枠の中を #A78BFA で塗りつぶし、文字を #0F0C15 に。枠を scale 1 → 1.08 → 1 で弾ませ、枠の左右から紫の小さな四角（12px）を10個ずつ飛ばす
・尺：5秒でループ`,
run(H,t,w){if(w.length<2)w=[t,t];const B=H.box();const view=H.abs({left:'300px',top:'90px',width:'1000px',height:'720px',overflow:'hidden',WebkitMaskImage:'linear-gradient(transparent,#000 30%,#000 70%,transparent)',maskImage:'linear-gradient(transparent,#000 30%,#000 70%,transparent)'});
  const IH=180;const strip=H.abs({left:'0',top:'0',width:'100%'},view);const loops=6;const list=[];for(let l=0;l<loops;l++)w.forEach(s=>list.push(s));
  list.forEach(s=>H.el('div',{height:IH+'px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.sans,fontWeight:'900',fontSize:fs(s,110,900)+'px',color:'#fff'},strip,s));
  const target=list.length-1;const y=-(target*IH)+270;
  H.a(strip,[{transform:`translateY(${270-w.length*IH}px)`},{transform:`translateY(${y}px)`}],{d:3000,e:'cubic-bezier(.12,.8,.2,1)'});
  const fr=H.abs({left:'300px',top:'360px',width:'1000px',height:'180px',border:'4px solid '+VIO,borderRadius:'20px',boxSizing:'border-box',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.sans,fontWeight:'900',fontSize:fs(w[w.length-1],110,900)+'px',color:'#0f0c15'});
  H.wait(3000,()=>{fr.style.background=VIO;fr.textContent=w[w.length-1];H.a(fr,[{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{d:400,e:E.back,f:'none'});
    for(let i=0;i<20;i++){const side=i<10?-1:1;const q=H.abs({left:(side<0?300:1300)+'px',top:'444px',width:'12px',height:'12px',background:VIO});H.a(q,[{transform:'translate(0,0) rotate(0)',opacity:1},{transform:`translate(${side*rnd(60,260)}px,${rnd(-220,220)}px) rotate(${rnd(-200,200)}deg)`,opacity:0}],{d:800})}});
}});
