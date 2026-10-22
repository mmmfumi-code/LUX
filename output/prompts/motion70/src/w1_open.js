/* ===== WEDDING OPENING 01-10 ===== */
CUR_SEC='e';
const WT='Nobu & Yui';
const nm=t=>{const a=t.split(/\s*[&＆・×]\s*/);return [a[0]||'Nobu',a[1]||'Yui']};
const WINFO_E=`

【ふたりの情報】（分かる範囲で。空欄のところは、仮の文章で作ってください）
・新郎の名前（ローマ字・漢字）：
・新婦の名前（ローマ字・漢字）：
・結婚式の日付・会場：
・ふたりの出会い・思い出のエピソード（3つ）：
・使う写真の枚数：
・ゲストへのひとこと：`;
const WINFO_F=`

【ふたりの情報】（分かる範囲で。空欄のところは、仮の文章で作ってください）
・新郎：名前（ローマ字・漢字）／生年月日／出身地／趣味・特技／家族構成
・新婦：名前（ローマ字・漢字）／生年月日／出身地／趣味・特技／家族構成
・それぞれの写真の枚数と、時代ごとのコメント（例：3歳 七五三。この頃から食いしん坊）：
・ふたりの出会い・交際・プロポーズのエピソード：
・結婚式の日付・会場：
・ゲストへの感謝のメッセージ：`;
const defW=o=>{o.bg=o.bg||'#000';o.text=o.text||WT;o.loop=o.loop||10000;o.p+=(o.sec||CUR_SEC)==='f'?WINFO_F:WINFO_E;def(o)};
/* 写真の仮枠：k = couple / boy / girl / baby / man / woman */
const PHC={couple:['#f7d9c4','#c9a7a0'],boy:['#cfe3f4','#8fb3d9'],girl:['#f9d7e3','#e3a3bd'],baby:['#fff1d6','#f2c98a'],man:['#d9e2ea','#8798ab'],woman:['#f6e3dc','#d2a596']};
const pho=(H,p,x,y,w,h,k,dl,css)=>{k=k||'couple';const c=PHC[k];const b=H.abs(Object.assign({left:x+'px',top:y+'px',width:w+'px',height:h+'px',overflow:'hidden',background:`linear-gradient(160deg,${c[0]},${c[1]})`},css||{}),p);
  const fig=(cx,hr,body,hair,dress)=>{H.abs({left:cx*w-hr+'px',top:h*.36-hr+'px',width:2*hr+'px',height:2*hr+'px',borderRadius:'50%',background:'#f0c9a8',boxShadow:`0 ${-hr*.35}px 0 ${hair}`},b);H.abs({left:cx*w-hr*1.7+'px',top:h*.36+hr*1.15+'px',width:hr*3.4+'px',height:h+'px',borderRadius:`${hr*1.6}px ${hr*1.6}px 0 0`,background:body},b);if(dress)H.abs({left:cx*w-hr*2.3+'px',top:h*.62+'px',width:hr*4.6+'px',height:h+'px',borderRadius:'50% 50% 0 0',background:body},b)};
  const r=Math.min(w,h)*.13;
  if(k==='couple'){fig(.37,r,'#2d3446','#3a2a20');fig(.63,r*.95,'#fffaf3','#4a3326',1)}else if(k==='baby'){fig(.5,r*1.5,'#fff8ec','#5a4030')}else if(k==='boy'||k==='man'){fig(.5,r*(k==='boy'?1.2:1.1),k==='boy'?'#ffcc66':'#2d3446','#2a2420')}else{fig(.5,r*(k==='girl'?1.2:1.1),k==='girl'?'#ff9fbf':'#fffaf3','#4a3326',k==='woman')}
  if(dl!=null)H.a(b,[{opacity:0,transform:'scale(1.06)'},{opacity:1,transform:'scale(1)'}],{d:800,dl});return b};
const kb=(H,el,dl,d)=>H.a(el,[{scale:'1'},{scale:'1.08'}],{d:d||4000,dl:dl||0,e:E.lin});
const fadeIO=(H,el,a,b,d)=>{d=d||500;H.a(el,[{opacity:0},{opacity:1,offset:d/(b-a)},{opacity:1,offset:1-d/(b-a)},{opacity:0}],{d:b-a,dl:a,e:E.lin})};
const dots=(H,p,n,c)=>{for(let i=0;i<n;i++){const d=H.abs({left:rnd(0,1600)+'px',top:rnd(0,900)+'px',width:'3px',height:'3px',borderRadius:'50%',background:c||'#fff'},p);H.a(d,[{opacity:0},{opacity:rnd(.3,.9)},{opacity:0}],{d:rnd(1500,3000),dl:rnd(0,3000),i:Infinity})}};

/* WSTREAM：配信・SNS風 */
defW({no:'01',cat:'WSTREAM',name:'配信サービス風「ウェディング・オリジナル」',en:'Streaming Original',lead:'あの赤いロゴの配信サービスのように、光の帯がほどけてふたりの作品ページが始まる。',
use:'<b>いちばん人気の“配信サービス風”</b>。ゲストが一瞬で「あれだ！」と分かり、拍手から披露宴が始まります。',
tips:['ロゴは配信サービスの文字ではなく、ふたりのイニシャル（N&Y）のモノグラムにするのがポイント','「マッチ度98%」「#感動 #ラブストーリー」など、作品ページの小ネタが笑いを生みます','最後のカウントダウンは、司会者と「入場の合図」を合わせておくと決まります'],
p:`動画配信サービスの冒頭と作品ページの雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：黒 #000、深い赤 #E50914 に近い赤、白、グレー #B3B3B3
・フォント：英字は Bebas Neue、日本語は Noto Sans JP（700/900）
・シーン構成：
　0:00〜0:08　黒い画面の奥から、赤・ピンク・紫の光の帯が集まり、ふたりのイニシャルのモノグラム（例「N&Y」）になって光る。一気に寄って、光の帯がほどけて消える
　0:08〜0:15　白い細い文字で「A WEDDING ORIGINAL」
　0:15〜0:45　作品ページ：背景いっぱいにふたりの写真（ゆっくり寄る）。左下にタイトル（ふたりの名前）、「マッチ度98%」「2025」「全年齢」「シーズン1」、タグ「#感動 #ラブストーリー #ハッピーエンド」、短いあらすじ（出会いのエピソード）
　0:45〜1:15　キャスト紹介：新郎・新婦の写真を左右に並べ、役名（例「主演：新郎 ○○ ／ 役：食いしん坊な優しい人」）
　1:15〜2:30　エピソード一覧：「第1話 出会い」「第2話 はじめてのデート」「第3話 プロポーズ」…5話。各話のサムネイル写真・タイトル・あらすじ（1行）・再生時間を並べ、1話ずつ選ばれて写真が大きく映る
　2:30〜2:50　「次のエピソードがまもなく始まります」と、右下に赤い進行バーが減っていく
　2:50〜3:00　画面中央に「第4話 本日、結婚します。」→ 黒にフェード（ここで新郎新婦が入場）`,
run(H,t){const [a,b]=nm(t);const ini=(a[0]+'&'+b[0]).toUpperCase();
  const L=H.box({},null);for(let i=0;i<40;i++){const r=H.abs({left:rnd(400,1200)+'px',top:'-100px',width:rnd(4,18)+'px',height:'1100px',background:`linear-gradient(${pick(['#e50914','#ff4f8b','#7b2cff','#ff8a3d'])},transparent)`,opacity:.8},L);H.a(r,[{transform:'translateY(-600px) scaleY(.2)',opacity:0},{transform:'translateY(0) scaleY(1)',opacity:.9},{opacity:0}],{d:2200,dl:rnd(0,400)})}
  const lg=H.abs({left:'0',right:'0',top:'290px',textAlign:'center',fontFamily:"'Bebas Neue',sans-serif",fontSize:'300px',lineHeight:'1',color:'#e50914',textShadow:'0 0 40px rgba(229,9,20,.8)'},null,ini);H.a(lg,[{opacity:0,transform:'scale(.6)'},{opacity:1,transform:'scale(1)',offset:.3},{opacity:1,transform:'scale(1.1)',offset:.75},{opacity:0,transform:'scale(4)'}],{d:3000,dl:300,e:E.in});
  const pg=H.abs({inset:'0',opacity:0});H.a(pg,[{opacity:0},{opacity:1}],{d:700,dl:3200});const ph=pho(H,pg,0,0,1600,900,'couple');kb(H,ph,3200,6000);H.abs({inset:'0',background:'linear-gradient(90deg,#000 10%,rgba(0,0,0,.6) 45%,transparent 75%),linear-gradient(transparent 60%,#000)'},pg);
  T(H,pg,{left:'90px',top:'220px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'26px',letterSpacing:'.3em',color:'#e50914'},'A WEDDING ORIGINAL',3600);
  T(H,pg,{left:'86px',top:'260px',fontFamily:"'Bebas Neue',sans-serif",fontSize:'130px',lineHeight:'1',color:'#fff'},t.toUpperCase(),3800);
  T(H,pg,{left:'90px',top:'410px',fontFamily:F.sans,fontWeight:'700',fontSize:'26px',color:'#fff'},null,4200).innerHTML='<span style="color:#46d369">マッチ度98%</span>　2025　<span style="border:1px solid #aaa;padding:0 8px">全年齢</span>　シーズン1';
  T(H,pg,{left:'90px',top:'470px',width:'640px',whiteSpace:'normal',fontFamily:F.sans,fontSize:'24px',lineHeight:'1.6',color:'#ddd'},'大学のサークルで出会ったふたり。すれ違いと笑いの日々の先に、ついに迎える最終話——。',4500,'fade');
  T(H,pg,{left:'90px',top:'610px',fontFamily:F.sans,fontSize:'22px',color:'#b3b3b3'},'#感動　#ラブストーリー　#ハッピーエンド',4800,'fade');
  const bt=T(H,pg,{left:'90px',top:'680px',background:'#fff',color:'#000',fontFamily:F.sans,fontWeight:'900',fontSize:'28px',padding:'14px 40px',borderRadius:'6px'},'▶ 再生',5200,'pop');H.a(bt,[{scale:'1'},{scale:'1.06'},{scale:'1'}],{d:900,dl:6200,i:Infinity,f:'none'})}});

defW({no:'02',cat:'WSTREAM',name:'配信サービス風「おすすめ作品の列」',en:'Streaming Carousel',lead:'青いグラデーションの配信サービスのように、思い出の写真が「作品の列」になって流れる。',bg:'#0f171e',
use:'<b>写真をたくさん見せたいオープニング</b>に。思い出の写真が作品のサムネイルとして並ぶので、写真の多いふたりにぴったりです。',
tips:['列の名前を「ふたりのおすすめ作品」「ゲストのみなさまが出演した作品」にすると、会場が沸きます','サムネイルにゲストとの写真を入れると、自分を見つけたゲストが喜びます','最後に1枚のサムネイルが画面いっぱいに広がって本編へ、が気持ちいい流れです'],
p:`青いグラデーションが特徴の動画配信サービスのホーム画面のような雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：背景は濃い紺 #0F171E、アクセントは水色 #00A8E1、白、グレー #8197A4
・フォント：英字は Montserrat（800）、日本語は Noto Sans JP（700）
・シーン構成：
　0:00〜0:10　水色の細い線が弧を描いて走り、ふたりの名前のロゴに変わる（矢印やほほえみの形は使わない）
　0:10〜0:40　ホーム画面：上に大きなメインの作品（ふたりの写真、タイトル「{T}」、★★★★★、「独占配信」の小さなラベル、「今すぐ観る」ボタン）。自動で3枚が横にスライドして切り替わる
　0:40〜2:20　作品の列を3つ。列ごとに見出しを付けて、写真のサムネイル（16:9、角丸）が右から流れてくる
　　・「ふたりのおすすめ作品」：出会い〜プロポーズまでの写真
　　・「新郎が出演した作品」「新婦が出演した作品」：それぞれの子どもの頃の写真
　　・「ゲストのみなさまが出演した作品」：ゲストとの写真
　　各列で1枚ずつ水色の枠で選ばれ、少し大きくなってタイトル（例「第1話 はじめてのデート」）が出る
　2:20〜2:45　最後に選ばれた1枚が画面いっぱいに広がり、「まもなく配信開始」の文字と、水色の読み込みの円
　2:45〜3:00　「本日、配信開始。」とふたりの名前・日付 → 白い光でフェードアウト`,
run(H,t){const S=H.abs({inset:'0',background:'linear-gradient(#0f171e,#1a242f)'});
  const hero=H.abs({left:'0',top:'0',width:'1600px',height:'420px',overflow:'hidden'},S);const hp=pho(H,hero,0,0,1600,420,'couple',0);kb(H,hp,0,10000);H.abs({inset:'0',background:'linear-gradient(90deg,#0f171e 15%,rgba(15,23,30,.5) 50%,transparent),linear-gradient(transparent 60%,#0f171e)'},hero);
  T(H,hero,{left:'80px',top:'80px',fontFamily:F.sans,fontWeight:'700',fontSize:'18px',color:'#00a8e1',letterSpacing:'.1em'},'独占配信',300);
  T(H,hero,{left:'76px',top:'110px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'86px',color:'#fff'},t,500);
  T(H,hero,{left:'80px',top:'220px',fontFamily:F.sans,fontSize:'24px',color:'#ffc93c'},'★★★★★　2025　ラブストーリー',800,'fade');
  T(H,hero,{left:'80px',top:'280px',background:'#00a8e1',color:'#fff',fontFamily:F.sans,fontWeight:'700',fontSize:'24px',padding:'14px 34px',borderRadius:'6px'},'▶ 今すぐ観る',1100,'pop');
  [['ふたりのおすすめ作品',['couple','couple','couple','couple','couple','couple'],480],['ゲストのみなさまが出演した作品',['man','woman','girl','boy','man','woman'],700]].forEach((r,ri)=>{T(H,S,{left:'60px',top:r[2]-44+'px',fontFamily:F.sans,fontWeight:'700',fontSize:'24px',color:'#fff'},r[0],1400+ri*300);
    const row=H.abs({left:'60px',top:r[2]+'px',display:'flex',gap:'18px'},S);r[1].forEach((k,i)=>{const c=H.abs({position:'relative',width:'267px',height:'150px',flex:'0 0 auto',borderRadius:'8px',overflow:'hidden'},row);pho(H,c,0,0,267,150,k);H.abs({left:'10px',bottom:'8px',fontFamily:F.sans,fontWeight:'700',fontSize:'15px',color:'#fff',textShadow:'0 1px 4px #000'},c,['第1話 出会い','第2話 初デート','第3話 旅行','第4話 同棲','第5話 プロポーズ','第6話 本日'][i])});
    H.a(row,[{transform:'translateX(1600px)'},{transform:'translateX(0)'},{transform:'translateX(-500px)'}],{d:8000,dl:1500+ri*300,e:E.soft});
    if(!ri)H.a(row.children[2],[{outline:'0 solid #00a8e1',scale:'1'},{outline:'4px solid #00a8e1',scale:'1.08'}],{d:400,dl:4800})})}});

defW({no:'03',cat:'WSTREAM',name:'SNSストーリーズ風',en:'Social Stories',lead:'写真共有SNSのストーリーズのように、上の進行バーと一緒にふたりの日常がテンポよく流れる。',bg:'#111',
use:'<b>20〜30代のゲストが多い披露宴</b>に。スマホで毎日見ている画面なので、説明しなくても伝わります。',
tips:['画面は16:9の真ん中に縦長のスマホ画面を置き、左右はぼかした写真で埋めると会場でも見やすい','「質問スタンプ」でゲストからの質問に答える演出は、ほぼ確実にウケます','ハートやコメントが流れるライブ配信風のシーンを最後に入れると盛り上がります'],
p:`写真共有SNSのストーリーズ（縦長の短い投稿が次々に切り替わる画面）の雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・画面：16:9 の中央に、縦長（9:16）のスマホ画面の枠。左右の余白は、今映っている写真を大きくぼかして敷く
・配色：白・黒、アクセントはピンク〜オレンジ〜紫のグラデーション（アイコンの丸い枠）
・フォント：Noto Sans JP（700）、英字は Montserrat
・ストーリーズの見た目：上に細い白い進行バー（ストーリーの数だけ分かれ、1つずつ左から右へ伸びる）、その下に丸いアイコン（グラデーションの枠）とアカウント名（例「nobu_yui_wedding」）と「2時間前」
・シーン構成（1枚6〜8秒、全部で約22枚）：
　0:00〜0:15　「新しいストーリーがあります」の丸いアイコンがタップされて開く
　0:15〜1:00　新郎のストーリー5枚：写真＋手書き風の文字スタンプ（例「新郎です」「趣味：キャンプ」）、位置情報スタンプ風の「📍出身地」
　1:00〜1:45　新婦のストーリー5枚：同じ形で
　1:45〜2:20　ふたりのストーリー：「質問箱」風スタンプ（例「Q. 第一印象は？」→ 次の画面で答え）、アンケートスタンプ（「どっちが先に好きになった？」の2択と％）
　2:20〜2:45　ライブ配信風：「LIVE」の赤いラベル、視聴者数が増え、ハートとコメント（「おめでとう！」「待ってた！」）が下から流れる
　2:45〜3:00　最後のストーリー「このあと、ふたりが入場します」→ 画面を上にスワイプして閉じる動き → 白にフェード`,
run(H,t){const [a,b]=nm(t);const bg=pho(H,null,0,0,1600,900,'couple');bg.style.filter='blur(30px) brightness(.6)';bg.style.transform='scale(1.2)';
  const ph=H.abs({left:'545px',top:'20px',width:'510px',height:'860px',borderRadius:'26px',overflow:'hidden',background:'#000',boxShadow:'0 30px 80px rgba(0,0,0,.6)'});
  const ks=['man','woman','couple','couple'];const lb=[['新郎です','#fff'],['新婦です','#fff'],['Q. 第一印象は？','#000'],['今日、結婚します','#fff']];
  ks.forEach((k,i)=>{const p=pho(H,ph,0,0,510,860,k);p.style.opacity=0;H.a(p,[{opacity:1},{opacity:1}],{d:2400,dl:i*2400,f:'none'});kb(H,p,i*2400,2400);
    const st=H.abs({left:'60px',top:'560px',width:'390px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'34px',color:lb[i][1],background:i===2?'#fff':'transparent',borderRadius:'18px',padding:'14px 0',textShadow:i===2?'none':'0 2px 8px rgba(0,0,0,.6)',opacity:0},ph,lb[i][0]);H.a(st,[{opacity:0,transform:'scale(.6) rotate(-6deg)'},{opacity:1,transform:'scale(1) rotate(-3deg)',offset:.2},{opacity:1,transform:'scale(1) rotate(-3deg)',offset:.95},{opacity:0}],{d:2400,dl:i*2400,e:E.out})});
  const bars=H.abs({left:'14px',right:'14px',top:'12px',display:'flex',gap:'6px'},ph);for(let i=0;i<4;i++){const bb=H.el('div',{flex:'1',height:'4px',borderRadius:'2px',background:'rgba(255,255,255,.4)',overflow:'hidden'},bars);const f=H.el('div',{height:'100%',background:'#fff',transformOrigin:'left'},bb);H.a(f,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:2400,dl:i*2400,e:E.lin})}
  const hd=H.abs({left:'16px',top:'28px',display:'flex',alignItems:'center',gap:'10px'},ph);H.el('div',{width:'44px',height:'44px',borderRadius:'50%',border:'3px solid transparent',background:'linear-gradient(#ddd,#ddd) padding-box,linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf) border-box'},hd);H.el('div',{fontFamily:F.sans,fontWeight:'700',fontSize:'18px',color:'#fff',textShadow:'0 1px 4px #000'},hd,(a+'_'+b+'_wedding').toLowerCase());H.el('div',{fontFamily:F.sans,fontSize:'16px',color:'rgba(255,255,255,.8)'},hd,'2時間前');
  for(let i=0;i<10;i++){const h=H.abs({left:rnd(380,460)+'px',top:'800px',fontSize:rnd(28,46)+'px',color:pick(['#ff3b6b','#ff8fab','#fff'])},ph,'♥');H.a(h,[{opacity:0,transform:'translateY(0)'},{opacity:1},{opacity:0,transform:`translate(${rnd(-60,30)}px,-${rnd(250,450)}px)`}],{d:2000,dl:7400+rnd(0,1800)})}}});

/* WGAME：ゲーム・番組風 */
defW({no:'04',cat:'WGAME',name:'レトロRPG風「ふたりのぼうけん」',en:'Retro RPG Adventure',lead:'ドット絵の勇者と仲間が冒険するように。「やせいの ゲストが あらわれた！」で会場が沸く。',bg:'#000',
use:'<b>ゲーム好きのふたり、男性ゲストが多い披露宴</b>に。モンスター育成RPGや国民的RPGを遊んだ世代なら、誰もが笑顔になります。',
tips:['文字は「ひらがな＋全角スペース」で書くと、レトロゲームらしさが一気に出ます','バトルの選択肢を「たたかう／しゅくふく／ごしゅうぎ／にげる」にすると笑いが起きます','実在のゲームのキャラクターやモンスターは出さず、ふたりのドット絵で作りましょう'],
p:`昔の携帯ゲーム機のRPG（モンスターを集めて育てる冒険ゲームなど）の雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・見た目：ドット絵（1ドット＝6px、くっきり表示：imageSmoothingEnabled = false）。色数は少なめのレトロな配色
・フォント：DotGothic16（日本語のドット文字）。文章は「ひらがな＋全角スペース」で、1文字ずつ表示される
・メッセージウィンドウ：画面下の白い角丸の枠、黒い文字、右下で▼が点滅
・シーン構成：
　0:00〜0:15　タイトル画面：ドット絵の大きなタイトル「{T}」、「バージョン：ウェディング」、「PRESS START」が点滅 → 押される
　0:15〜0:40　オープニング：博士のような人物の代わりに、ふたりの両親のシルエットが「ようこそ！ けっこんしきの せかいへ！」と話す
　0:40〜1:20　フィールド：草むら・道・小さな町のドット絵のマップ。新郎のキャラクターが歩き、新婦のキャラクターと出会う → 「ゆうしゃ ○○は ○○と であった！」
　1:20〜2:10　バトル画面：「やせいの ゲストが あらわれた！」。左上に相手（ゲストのシルエット）、右下に新郎新婦とHPバー。コマンド「たたかう／しゅくふく／ごしゅうぎ／にげる」→「しゅくふく」が選ばれ、「こうかは ばつぐんだ！」
　2:10〜2:40　レベルアップ：「ふたりは けっこんした！」「レベルが あがった！ Lv.30 → Lv.31」、ステータス（やさしさ・たよりがい・えがお が上がる）
　2:40〜3:00　「レポートを かきこんでいます…」→「このあと、ふたりが にゅうじょうします！」→ 白いフラッシュで終わる
・実在のゲームのキャラクター、モンスター、ロゴ、効果音は使わない`,
run(H,t){const [a,b]=nm(t);const S=H.abs({inset:'0',background:'#8fd16a',imageRendering:'pixelated'});
  S.style.backgroundImage='linear-gradient(90deg,rgba(0,0,0,.06) 1px,transparent 1px),linear-gradient(rgba(0,0,0,.06) 1px,transparent 1px)';S.style.backgroundSize='60px 60px';
  H.abs({left:'0',right:'0',top:'360px',height:'120px',background:'#e8d39a'},S);for(let i=0;i<14;i++)H.abs({left:i*120+'px',top:'120px',width:'60px',height:'60px',background:'#3f8f3a',boxShadow:'60px 60px 0 #3f8f3a'},S);
  H.abs({left:'1240px',top:'140px',width:'240px',height:'220px',background:'#f2efe6',boxShadow:'0 -60px 0 -0px #c0392b'},S);H.abs({left:'1330px',top:'280px',width:'60px',height:'80px',background:'#7a4b2a'},S);H.abs({left:'1240px',top:'60px',width:'240px',height:'80px',background:'#c0392b',clipPath:'polygon(50% 0,100% 100%,0 100%)'},S);
  const spr=(c,h)=>{const s=H.abs({width:'60px',height:'78px'},S);H.abs({left:'12px',top:'0',width:'36px',height:'30px',background:'#f0c9a8',boxShadow:`0 -12px 0 ${h}`},s);H.abs({left:'6px',top:'30px',width:'48px',height:'36px',background:c},s);H.abs({left:'12px',top:'66px',width:'12px',height:'12px',background:'#333',boxShadow:'24px 0 0 #333'},s);return s};
  const p1=spr('#3a5bd9','#2a1a10'),p2=spr('#ff7aa8','#5a3a20');p1.style.top='380px';p2.style.top='380px';H.a(p1,[{left:'40px'},{left:'640px'}],{d:3000,e:'steps(15)'});H.a(p2,[{left:'1500px'},{left:'760px'}],{d:3000,e:'steps(15)'});
  const box=H.abs({left:'60px',right:'60px',bottom:'40px',height:'210px',background:'#fff',border:'8px solid #333',borderRadius:'14px',boxShadow:'inset 0 0 0 6px #fff,inset 0 0 0 10px #6a9adf',opacity:0});H.a(box,[{opacity:0},{opacity:1}],{d:10,dl:3100});
  const tx=H.abs({left:'50px',top:'34px',right:'50px',fontFamily:F.dot,fontSize:'44px',lineHeight:'1.6',color:'#222',whiteSpace:'pre-wrap'},box);
  const msgs=[`ゆうしゃ　${a.toUpperCase()}は\n${b.toUpperCase()}と　であった！`,'やせいの　ゲストが\nあらわれた！','▶しゅくふく　　ごしゅうぎ\n　たたかう　　　にげる'];let k=0;
  msgs.forEach((m,mi)=>H.wait(3200+mi*2200,()=>{tx.textContent='';let i=0;const ch=[...m];const tick=()=>{if(i<ch.length){tx.textContent+=ch[i++];H.wait(45,tick)}};tick()}));
  const ar=H.abs({right:'40px',bottom:'20px',fontFamily:F.dot,fontSize:'30px',color:'#222'},box,'▼');H.a(ar,[{opacity:1},{opacity:0}],{d:500,i:Infinity,dir:'alternate'})}});

defW({no:'05',cat:'WGAME',name:'ニュース速報風',en:'Breaking News',lead:'「速報 ふたりが本日結婚」。テレビのニュース番組のテロップと中継で、会場がざわつく。',bg:'#0b1d3a',
use:'<b>年代を問わず楽しめる、定番の面白オープニング</b>に。おじいちゃん・おばあちゃんにも一発で伝わります。',
tips:['「関係者への取材」として、友人や両親のコメントを入れると盛り上がります','画面下を流れるテロップ（ティッカー）に小ネタを仕込むと、気づいた人から笑いが広がります','速報のチャイムは著作権のない効果音を Premiere Pro で後から足しましょう'],
p:`テレビのニュース番組の「速報」の雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：紺 #0B1D3A、ニュースの赤 #D7001D、白、黄色 #FFD400（強調）
・フォント：Noto Sans JP（900/700）、数字は Roboto Condensed
・画面の決まり：左上に番組ロゴ風の「WEDDING NEWS」と「LIVE」の赤いラベル、右上に時刻（本日の日付と時刻）、画面下に白い帯の見出しテロップと、その下に右から左へ流れるニュースのティッカー
・シーン構成：
　0:00〜0:10　放送が切り替わるように画面が乱れて、「ニュース速報」の赤い帯が上からスライド。チャイムが鳴るタイミングで帯が光る
　0:10〜0:30　大きな見出し「速報　{T}さん　本日結婚へ」。背景はスタジオ風の青いグラデーションと世界地図の模様
　0:30〜1:10　「ふたりの経歴」：新郎・新婦の写真に、ニュースの人物紹介のような名前と肩書きのテロップ（例「新郎　○○さん（30）会社員」）
　1:10〜1:50　「なれそめ」の特集：ニュースのフリップ（白いボード）風に、出会い→交際→プロポーズを年表で
　1:50〜2:30　「関係者の声」：友人・両親の写真に、インタビュー風のテロップ（例「新郎の友人は“正直、意外でした”と話しています」）
　2:30〜2:50　中継：「会場から中継です」→ 会場の外観写真に「LIVE」と現地の時刻
　2:50〜3:00　「このあと、ふたりが入場します。引き続き、お楽しみください」→ 番組のエンドカード
・ティッカーの例：「ご祝儀袋の準備を」「スマホはマナーモードに」「このあと乾杯の予定」`,
run(H,t){const S=H.abs({inset:'0',background:'radial-gradient(circle at 70% 40%,#1e4fd8,#0b1d3a 70%)'});S.style.backgroundImage+=',repeating-linear-gradient(90deg,rgba(255,255,255,.04) 0 1px,transparent 1px 80px)';
  const ph=pho(H,S,820,140,640,420,'couple',1200,{borderRadius:'10px',border:'4px solid #fff'});
  const lv=T(H,S,{left:'50px',top:'40px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'30px',color:'#fff'},null,200,'fade');lv.innerHTML='WEDDING NEWS <span style="background:#d7001d;padding:2px 12px;margin-left:10px;font-size:22px">● LIVE</span>';
  T(H,S,{right:'50px',top:'44px',fontFamily:F.sans,fontWeight:'700',fontSize:'26px',color:'#fff'},'本日 12:00',300,'fade');
  const fl=H.abs({left:'0',top:'130px',height:'90px',background:'#d7001d',display:'flex',alignItems:'center',padding:'0 50px',fontFamily:F.sans,fontWeight:'900',fontSize:'52px',color:'#fff'},null,'ニュース速報');H.a(fl,[{transform:'translateX(-100%)'},{transform:'translateX(0)'}],{d:600,dl:400});H.a(fl,[{filter:'brightness(1)'},{filter:'brightness(1.6)'},{filter:'brightness(1)'}],{d:600,dl:1000,i:3,f:'none'});
  const hb=H.abs({left:'0',right:'0',top:'640px',height:'150px',background:'#fff'});H.a(hb,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:500,dl:1800});hb.style.transformOrigin='left';
  H.abs({left:'0',top:'0',width:'30px',height:'150px',background:'#d7001d'},hb);
  T(H,hb,{left:'60px',top:'22px',fontFamily:F.sans,fontWeight:'900',fontSize:'66px',color:'#0b1d3a'},null,2200).innerHTML=`<span style="color:#d7001d">速報</span>　${t}さん　本日結婚へ`;
  const tk=H.abs({left:'0',right:'0',top:'790px',height:'60px',background:'#0b1d3a',overflow:'hidden'});const tt=H.abs({left:'0',top:'10px',whiteSpace:'nowrap',fontFamily:F.sans,fontWeight:'700',fontSize:'30px',color:'#ffd400'},tk,'◆ ご祝儀袋のご準備を　◆ スマートフォンはマナーモードに　◆ このあと乾杯の予定　◆ 新郎、昨夜はよく眠れなかった模様　');H.a(tt,[{transform:'translateX(1600px)'},{transform:'translateX(-1800px)'}],{d:9000,dl:2500,e:E.lin})}});

defW({no:'06',cat:'WSTREAM',name:'メッセージアプリ風',en:'Chat App',lead:'緑の吹き出しのメッセージアプリのように、ふたりのやりとりで物語が進む。「既読」にクスッ。',bg:'#8ab0d4',
use:'<b>写真が少ないふたり</b>にもおすすめ。言葉だけで物語が作れるので、ふたりらしさがいちばん出ます。',
tips:['実際のやりとりを元にすると、ふたりにしか作れないムービーになります（恥ずかしい所はほどほどに）','「既読」がつくまでの“間”が、笑いと感動を生みます','最後にゲストのグループトークに「本日はありがとう」を送る流れは、ほっこりします'],
p:`スマートフォンのメッセージアプリ（緑の吹き出しのトーク画面）の雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・画面：16:9 の中央に、縦長のスマホ画面。左右は淡い水色のグラデーションに、ハートや花の線画がゆっくり漂う
・トーク画面：上にアイコンと相手の名前の帯、背景は淡い青、右側に緑 #8DE055 の吹き出し（自分）、左側に白い吹き出し（相手）と丸いアイコン、吹き出しの横に小さく時刻と「既読」
・フォント：Noto Sans JP（500）。メッセージは1つずつ、入力中の「…」が出てから表示される
・シーン構成：
　0:00〜0:15　スマホのロック画面に通知「新郎：明日、楽しみだね」→ タップしてトーク画面が開く
　0:15〜1:20　出会った頃のやりとり（日付の区切り線「2019年4月10日」付き）：はじめてのメッセージ、デートの約束、ぎこちない敬語
　1:20〜2:00　付き合ってからのやりとり：写真が送られてくる（思い出の写真3枚）、スタンプ風の大きな絵文字（オリジナルのイラスト）
　2:00〜2:30　プロポーズの日のやりとり：「話があるんだけど」「…」（長い間）→「はい！」
　2:30〜2:50　トーク画面が「ゲストのみなさん」というグループに切り替わり、ふたりから「本日は来てくれて、ありがとう！」→ ゲストの名前のアイコンから「おめでとう！」が次々と届く
　2:50〜3:00　「まもなく、ふたりが入場します」の通知 → 画面が暗くなって終わる
・実在のアプリのロゴやスタンプのキャラクターは使わない`,
run(H,t){const [a,b]=nm(t);const ph=H.abs({left:'545px',top:'20px',width:'510px',height:'860px',borderRadius:'30px',overflow:'hidden',background:'#8ab0d4',border:'10px solid #111',boxSizing:'border-box'});
  const hd=H.abs({left:'0',right:'0',top:'0',height:'80px',background:'rgba(255,255,255,.9)',display:'flex',alignItems:'center',padding:'0 24px',fontFamily:F.sans,fontWeight:'700',fontSize:'24px',color:'#222'},ph,'‹　'+b);
  const msgs=[[0,'はじめまして！今日はありがとうございました','21:02'],[1,'こちらこそ！また、ごはん行きませんか？','21:05'],[0,'ぜひ！どこがいいですか？','21:06'],[1,'話があるんだけど','2024.12.24'],[1,'…','',1],[0,'はい！','',2]];
  msgs.forEach((m,i)=>{const me=m[0]===0;const w=H.abs(Object.assign({top:110+i*118+'px',display:'flex',alignItems:'flex-end',gap:'8px',flexDirection:me?'row-reverse':'row'},me?{right:'18px'}:{left:'18px'}),ph);
    if(!me)H.el('div',{width:'46px',height:'46px',borderRadius:'50%',background:'#d9e2ea',flex:'0 0 auto'},w);
    H.el('div',{maxWidth:'310px',background:me?'#8de055':'#fff',borderRadius:'22px',padding:'14px 20px',fontFamily:F.sans,fontSize:m[3]===2?'40px':'22px',fontWeight:m[3]===2?'900':'500',lineHeight:'1.45',color:'#222'},w,m[1]);
    H.el('div',{fontFamily:F.sans,fontSize:'14px',color:'#334',whiteSpace:'pre'},w,me?'既読\n'+m[2]:m[2]);
    H.a(w,[{opacity:0,transform:'translateY(20px) scale(.9)'},{opacity:1,transform:'none'}],{d:400,dl:600+i*1300+(m[3]===2?800:0),e:E.back})});
  for(let i=0;i<14;i++){const h=H.abs({left:pick([rnd(60,480),rnd(1120,1540)])+'px',top:rnd(0,900)+'px',fontSize:rnd(24,44)+'px',color:'rgba(255,255,255,.6)'},null,pick(['♡','✿']));H.a(h,[{transform:'translateY(0)'},{transform:'translateY(-80px)'}],{d:6000,dir:'alternate',i:Infinity,e:E.soft})}}});

defW({no:'07',cat:'WGAME',name:'横スクロールアクションゲーム風',en:'Side-scrolling Action Game',lead:'「PRESS START」から始まる、ドット絵の横スクロールゲーム。思い出のステージをジャンプで進む。',bg:'#5c94fc',
use:'<b>ゲーム好き・子どものゲストが多い披露宴</b>に。音楽が鳴った瞬間に、世代を問わず笑顔になれる演出です。',
tips:['ステージ名を「WORLD 1-1 出会い」「WORLD 2-1 初デート」のようにすると、ゲーム好きが反応します','コインの代わりに「♥」を集めると、結婚式らしくなります','実在のゲームのキャラクター・ブロックの柄・音楽は使わず、オリジナルのドット絵にしましょう'],
p:`昔の家庭用ゲーム機の横スクロールアクションゲームの雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・見た目：ドット絵（1ドット＝6px、くっきり表示）。空は青 #5C94FC、地面はレンガ色のブロック、白い雲、緑の丘
・フォント：英字は Press Start 2P、日本語は DotGothic16
・シーン構成：
　0:00〜0:15　タイトル画面：ドット文字の大きなタイトル「{T}」、「1P 新郎　2P 新婦」の選択、「PRESS START」が点滅 → 決定
　0:15〜0:25　黒い画面に「WORLD 1-1　出会い」と残りの人数「×2」
　0:25〜1:00　ステージ1：新郎のキャラクターが右へ走り、ジャンプしてブロックを叩くと「♥」が飛び出す。画面上に「SCORE」「♥×00」「TIME」。思い出の写真が看板のように背景に立っている
　1:00〜1:40　「WORLD 2-1　はじめてのデート」：新婦のキャラクターと合流して、ふたりで走る。写真入りの土管やブロック
　1:40〜2:20　「WORLD 3-1　プロポーズ」：お城の前で、新郎が指輪を見せる → 花火
　2:20〜2:45　「COURSE CLEAR!」とスコアの集計（♥の数がカウントアップ）
　2:45〜3:00　「NEXT STAGE：披露宴」→「PRESS START で入場」が点滅して終わる
・実在のゲームのキャラクター、ブロックやアイテムのデザイン、ロゴ、音楽は使わない`,
run(H,t){const S=H.abs({inset:'0',background:'#5c94fc',imageRendering:'pixelated'});
  const ground=H.abs({left:'0',top:'780px',width:'3200px',height:'120px',background:'#c84c0c',backgroundImage:'linear-gradient(90deg,rgba(0,0,0,.35) 4px,transparent 4px),linear-gradient(rgba(0,0,0,.35) 4px,transparent 4px)',backgroundSize:'60px 60px'},S);
  const world=H.abs({left:'0',top:'0',width:'3200px',height:'900px'},S);world.appendChild(ground);
  [[200,200],[900,150],[1700,220],[2500,170]].forEach(q=>H.abs({left:q[0]+'px',top:q[1]+'px',width:'180px',height:'50px',borderRadius:'30px',background:'#fff',boxShadow:'50px -24px 0 0 #fff,100px 0 0 0 #fff'},world));
  [[500,'hill'],[1300,'hill'],[2200,'hill']].forEach(q=>H.abs({left:q[0]+'px',top:'640px',width:'280px',height:'140px',borderRadius:'140px 140px 0 0',background:'#00a800'},world));
  [[700,540],[760,540],[820,540],[1500,540],[2300,500]].forEach((q,i)=>{const bl=H.abs({left:q[0]+'px',top:q[1]+'px',width:'60px',height:'60px',background:i===1||i===3?'#ffb30f':'#c84c0c',border:'4px solid #000',boxSizing:'border-box',color:'#000',fontFamily:F.dot,fontSize:'36px',textAlign:'center',lineHeight:'52px'},world,i===1||i===3?'?':'');});
  [[1000,600],[1060,600],[1120,600],[1900,560],[1960,560]].forEach(q=>{const h=H.abs({left:q[0]+'px',top:q[1]+'px',fontFamily:F.dot,fontSize:'44px',color:'#ff2a6d'},world,'♥');H.a(h,[{translate:'0 0'},{translate:'0 -10px'}],{d:400,dir:'alternate',i:Infinity,f:'none'})});
  const sg=pho(H,world,1600,400,240,180,'couple',null,{border:'8px solid #8b5a2b'});H.abs({left:'1700px',top:'580px',width:'40px',height:'200px',background:'#8b5a2b'},world);
  H.a(world,[{transform:'translateX(0)'},{transform:'translateX(-1600px)'}],{d:10000,e:E.lin});
  const pl=H.abs({left:'360px',top:'702px',width:'60px',height:'78px'});H.abs({left:'12px',top:'0',width:'36px',height:'30px',background:'#f0c9a8',boxShadow:'0 -12px 0 #d12'},pl);H.abs({left:'6px',top:'30px',width:'48px',height:'36px',background:'#2a4bd9'},pl);H.abs({left:'6px',top:'66px',width:'18px',height:'12px',background:'#6a3a10',boxShadow:'30px 0 0 #6a3a10'},pl);
  H.a(pl,[{transform:'translateY(0)'},{transform:'translateY(-220px)',offset:.5},{transform:'translateY(0)'}],{d:900,dl:1600,i:4,f:'none',e:'cubic-bezier(.3,0,.7,1)'});
  const hud=H.abs({left:'60px',right:'60px',top:'30px',display:'flex',justifyContent:'space-between',fontFamily:F.dot,fontSize:'34px',color:'#fff',textShadow:'3px 3px 0 #000'},null);H.el('div',{},hud,'SCORE 002025');H.el('div',{},hud,'♥×12');H.el('div',{},hud,'WORLD 1-1 出会い');H.el('div',{},hud,'TIME 300');
  const ti=H.abs({inset:'0',background:'#000',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'30px'});H.el('div',{fontFamily:F.dot,fontSize:'96px',color:'#fff',textShadow:'6px 6px 0 #d12'},ti,t.toUpperCase());const ps=H.el('div',{fontFamily:F.dot,fontSize:'40px',color:'#fff'},ti,'PRESS START');H.a(ps,[{opacity:1},{opacity:0}],{d:350,i:Infinity,dir:'alternate'});H.a(ti,[{opacity:1},{opacity:1,offset:.9},{opacity:0}],{d:1500,f:'forwards'})}});

defW({no:'08',cat:'WGAME',name:'天気予報風',en:'Weather Forecast',lead:'「本日の天気 晴れのち、幸せ」。テレビの天気予報の地図とアイコンで、ほっこり笑える。',bg:'#dfeefa',
use:'<b>和やかな雰囲気にしたい披露宴、親族中心の会</b>に。誰にでも伝わるやさしい笑いのオープニングです。',
tips:['「降水確率（うれし涙）80%」「新郎の緊張指数」など、天気の言葉をもじると楽しくなります','地図には、ふたりの出身地と式場をピンで示すと、遠方のゲストが喜びます','天気キャスターの代わりに、ふたりの写真を右下にワイプで出す演出も人気です'],
p:`テレビの天気予報の雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：空色 #DFEEFA、地図の緑 #A8D5A2、海の青 #7FB8E6、白、太陽のオレンジ #FFB020、雨の青 #3D7BE0
・フォント：Noto Sans JP（900/500）、数字は Roboto
・画面の決まり：左上に「ウェディング天気」のロゴ、右上に日付と時刻、天気アイコンは丸くかわいいオリジナルのイラスト
・シーン構成：
　0:00〜0:15　お天気コーナーのオープニング：雲が左右に開いて、タイトル「本日のウェディング天気」
　0:15〜0:50　全国の天気：日本地図（簡略化したもの）に、新郎の出身地・新婦の出身地・式場の場所にピンと天気アイコン。式場には大きな太陽と「晴れのち幸せ」
　0:50〜1:30　週間予報：ふたりの交際の歴史を、7日間の天気のように並べる（例「出会い：晴れ」「遠距離：くもり」「プロポーズ：快晴」）。各日に写真のワイプ
　1:30〜2:10　本日の詳しい予報：「降水確率（うれし涙）80%」「新郎の緊張指数 MAX」「笑顔の湿度 100%」などを、グラフや針のメーターで
　2:10〜2:40　ふたりのコメント：写真のワイプと「おでかけには、ハンカチをお持ちください」
　2:40〜3:00　「このあと、ふたりが入場します。引き続き、快晴の一日をお楽しみください」→ 雲が閉じて終わる`,
run(H,t){const S=H.abs({inset:'0',background:'linear-gradient(#dfeefa,#f6fbff)'});
  T(H,S,{left:'50px',top:'36px',fontFamily:F.sans,fontWeight:'900',fontSize:'40px',color:'#1e4f8a'},'ウェディング天気',200,'left');T(H,S,{right:'50px',top:'40px',fontFamily:F.sans,fontWeight:'700',fontSize:'30px',color:'#1e4f8a'},'本日 11:30',300,'fade');
  const mp=R(H,S,{left:'60px',top:'130px',width:'760px',height:'700px',borderRadius:'20px',background:'#7fb8e6',overflow:'hidden'},400,'fade');const sv=H.svg(760,700,mp);H.sv('path',{d:'M520,60 C600,60 640,120 600,180 C560,230 520,230 500,300 C480,360 420,380 380,430 C330,490 260,500 210,560 C170,610 120,630 90,600 C60,570 110,520 160,480 C220,430 260,400 300,350 C340,300 380,280 420,220 C460,160 450,60 520,60 Z',fill:'#a8d5a2',stroke:'#fff','stroke-width':4},sv);
  const ic=(x,y,k,lab,dl)=>{const w=R(H,mp,{left:x+'px',top:y+'px',width:'110px',textAlign:'center'},dl,'pop');H.el('div',{fontSize:'64px',lineHeight:'1',color:k==='s'?'#ffb020':'#fff',textShadow:'0 2px 6px rgba(0,0,0,.2)'},w,k==='s'?'☀':'☁');H.el('div',{fontFamily:F.sans,fontWeight:'900',fontSize:'20px',color:'#fff',textShadow:'0 1px 4px rgba(0,0,0,.4)'},w,lab)};
  ic(470,90,'c','新郎の町',900);ic(120,470,'c','新婦の町',1100);const big=R(H,mp,{left:'280px',top:'260px',width:'200px',textAlign:'center'},1400,'pop');H.el('div',{fontSize:'130px',lineHeight:'1',color:'#ffb020',textShadow:'0 0 40px #fff'},big,'☀');H.el('div',{fontFamily:F.sans,fontWeight:'900',fontSize:'26px',color:'#fff',background:'#ff6b5a',borderRadius:'999px',padding:'4px 0'},big,'式場');H.a(big.firstChild,[{rotate:'0deg'},{rotate:'360deg'}],{d:12000,i:Infinity,e:E.lin,f:'none'});
  const card=R(H,S,{left:'860px',top:'130px',width:'680px',height:'700px',borderRadius:'20px',background:'#fff',boxShadow:'0 10px 30px rgba(30,79,138,.15)'},600,'up');
  T(H,card,{left:'40px',top:'36px',fontFamily:F.sans,fontWeight:'900',fontSize:'42px',color:'#1e4f8a'},'本日の天気',1800);T(H,card,{left:'40px',top:'100px',fontFamily:F.sans,fontWeight:'900',fontSize:'64px',color:'#ff8a00'},'晴れのち、幸せ',2100,'pop');
  [['降水確率（うれし涙）','80%','#3d7be0'],['新郎の緊張指数','MAX','#ff5a5a'],['笑顔の湿度','100%','#1aa36f']].forEach((q,i)=>{T(H,card,{left:'40px',top:250+i*110+'px',fontFamily:F.sans,fontWeight:'500',fontSize:'30px',color:'#333'},q[0],2600+i*400,'left');T(H,card,{right:'40px',top:236+i*110+'px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'52px',color:q[2]},q[1],2800+i*400,'pop')});
  T(H,card,{left:'40px',top:'600px',width:'600px',whiteSpace:'normal',fontFamily:F.sans,fontSize:'24px',color:'#555'},'おでかけには、ハンカチをお持ちください。'+t+' より',4400,'fade')}});

/* WSTORY：映画・物語風 */
defW({no:'09',cat:'WSTORY',name:'映画の予告編風',en:'Movie Trailer',lead:'黒い画面に白い文字、「この秋、ふたりの物語が――」。ハリウッド映画の予告編のような王道。',bg:'#000',
use:'<b>しっとり＆かっこよく始めたいふたり</b>に。BGMを壮大な曲にすれば、会場が一気に映画館になります。',
tips:['文字だけの黒い画面と写真を交互に見せるのが、予告編らしさのいちばんのコツ','文字は短く。「この秋——」「ふたりの物語が——」「ついに、完結する」のように3つに分けます','最後は「本日公開」と日付。ここで拍手が起きるよう、少し長めに止めます'],
p:`ハリウッド映画の予告編の雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・見た目：上下に黒い帯（シネマスコープ 2.39:1）、写真はシネマ風の色（暗部は青緑、明部はオレンジ）、フィルムのざらつき、光のにじみ
・フォント：英字は Cinzel（700）、日本語は Shippori Mincho B1（800）
・シーン構成：
　0:00〜0:08　最初に、予告編の前に出る緑の画面の代わりに、白い枠の「この予告編は、すべてのゲストのみなさまに向けて上映されます」の案内カード
　0:08〜0:30　黒い画面に白い文字が1つずつ：「誰にでも、運命の出会いがある。」→ 写真（新郎の子どもの頃）→「そして——」
　0:30〜1:30　写真と文字が交互に、だんだん速く：新郎の生い立ち／新婦の生い立ち／ふたりの出会い／ケンカ／旅行／プロポーズ。写真は2秒ずつ、ゆっくり寄りながら。途中で一度、画面が真っ白に光って止まる「間」を入れる
　1:30〜2:15　キャストの紹介：「主演 ○○（新郎）」「主演 ○○（新婦）」「友情出演 ゲストのみなさま」「特別出演 両家の家族」を、写真と一緒に重厚な文字で
　2:15〜2:40　タイトル：黒い画面から光が差して、金色の文字でふたりの名前のタイトル「{T}」が浮かび上がる
　2:40〜3:00　「本日、公開。」と日付・会場名 → 一度暗転して、小さく「上映開始まで、あと少し。」→ 終わり`,
run(H,t){const S=H.abs({inset:'0',background:'#000'});
  const card=H.abs({inset:'0',display:'flex',alignItems:'center',justifyContent:'center'},S);const cc=H.el('div',{border:'3px solid #fff',padding:'40px 70px',fontFamily:F.min,fontWeight:'800',fontSize:'36px',color:'#fff',textAlign:'center',lineHeight:'1.7'},card,'この予告編は、\nすべてのゲストのみなさまに向けて上映されます');cc.style.whiteSpace='pre-line';H.a(card,[{opacity:0},{opacity:1,offset:.15},{opacity:1,offset:.85},{opacity:0}],{d:2200,f:'forwards'});
  const cine=H.abs({inset:'0',opacity:0});H.a(cine,[{opacity:0},{opacity:1}],{d:10,dl:2300});const p1=pho(H,cine,0,0,1600,900,'boy');p1.style.filter='saturate(.7) contrast(1.1) sepia(.2)';kb(H,p1,2300,2500);H.a(p1,[{opacity:1},{opacity:1,offset:.9},{opacity:0}],{d:2600,dl:2300,f:'both'});
  const p2=pho(H,cine,0,0,1600,900,'couple');p2.style.filter='saturate(.8) contrast(1.1)';p2.style.opacity=0;H.a(p2,[{opacity:0},{opacity:1}],{d:600,dl:5000});kb(H,p2,5000,3000);
  H.abs({left:'0',right:'0',top:'0',height:'115px',background:'#000'},cine);H.abs({left:'0',right:'0',bottom:'0',height:'115px',background:'#000'},cine);
  const tx=(s,a,b,sz)=>{const e=H.abs({left:'0',right:'0',top:'390px',textAlign:'center',fontFamily:F.min,fontWeight:'800',fontSize:(sz||60)+'px',color:'#fff',letterSpacing:'.15em',textShadow:'0 0 20px rgba(0,0,0,.8)',opacity:0},cine,s);fadeIO(H,e,a,b,400)};
  tx('誰にでも、運命の出会いがある。',2500,4700,52);tx('そして——',5100,6300);
  const ttl=H.abs({left:'0',right:'0',top:'330px',textAlign:'center',fontFamily:"'Cinzel',serif",fontWeight:'700',fontSize:'120px',letterSpacing:'.08em',background:'linear-gradient(100deg,#8a6a2f,#f6e3a8 45%,#c9a24b 60%,#8a6a2f)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',opacity:0},null,t.toUpperCase());
  const bk=H.abs({inset:'0',background:'#000',opacity:0});H.a(bk,[{opacity:0},{opacity:1}],{d:600,dl:7000});H.S.appendChild(ttl);H.a(ttl,[{opacity:0,filter:'blur(12px)'},{opacity:1,filter:'blur(0)'}],{d:1200,dl:7500});
  const rl=H.abs({left:'0',right:'0',top:'520px',textAlign:'center',fontFamily:F.min,fontWeight:'800',fontSize:'44px',letterSpacing:'.4em',color:'#fff',opacity:0},null,'本日、公開。');H.a(rl,[{opacity:0},{opacity:1}],{d:800,dl:8400})}});

defW({no:'10',cat:'WSTORY',name:'飛び出す絵本風',en:'Storybook',lead:'「むかしむかし、あるところに…」。手描き風の絵本がめくれて、ふたりの物語が始まる。',bg:'#efe4d0',
use:'<b>子どものゲストが多い披露宴、やさしい雰囲気にしたいふたり</b>に。年配のゲストにも伝わりやすい、温かいオープニングです。',
tips:['文字は手書き風のフォント（Klee One）にすると、絵本らしさが一気に出ます','写真は角を少し丸めて、マスキングテープで貼ったように見せるとかわいくなります','ナレーションをふたりの声で録音して、Premiere Pro で重ねるのもおすすめです'],
p:`手描きの絵本がめくれていく雰囲気で、結婚式のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・見た目：木の机の上に置いた、開いた絵本を真上から見た構図。紙はクリーム色で、ほんのり紙の質感。絵は色えんぴつ・水彩風のやさしいタッチ（Canvas で描く）
・フォント：Klee One（600）。文章はひらがな多めの絵本の言葉で、1文字ずつ浮かぶように表示
・ページのめくり：右ページが左へめくれる立体的な動き（ページの影とたわみ付き）
・シーン構成（見開き1つ15〜20秒）：
　0:00〜0:15　表紙：布張りの表紙に、金の箔押し風のタイトル「ふたりの ものがたり」と「{T}」。表紙が開く
　0:15〜0:35　「むかしむかし、あるところに、げんきな おとこのこが いました」＋新郎の子どもの頃の写真（マスキングテープで貼ったように）
　0:35〜0:55　「となりの まちには、えがおの すてきな おんなのこが いました」＋新婦の写真
　0:55〜1:50　出会い・初デート・プロポーズを3つの見開きで。各ページに写真と、手描きの小さな絵（花・星・ハート）が少しずつ描かれていく
　1:50〜2:30　「ふたりは、たくさんの ひとに ささえられて おおきく なりました」＋家族・友人の写真をアルバムのように数枚
　2:30〜2:50　「そして きょう、ふたりは けっこんします」の見開き。ページから花びらが舞い上がる
　2:50〜3:00　最後のページ「つづきは、このあと ほんぺんで」→ 本が閉じて終わる`,
run(H,t){const S=H.abs({inset:'0',background:'repeating-linear-gradient(90deg,#b98b5e 0 120px,#a97b4e 120px 124px)'});
  const bk=H.abs({left:'160px',top:'90px',width:'1280px',height:'720px',background:'#6b3a2a',borderRadius:'14px',boxShadow:'0 30px 60px rgba(0,0,0,.35)'},S);
  const L=H.abs({left:'20px',top:'20px',width:'620px',height:'680px',background:'linear-gradient(90deg,#fbf5e6 85%,#e8dcc0)',borderRadius:'6px 0 0 6px'},bk);const Rp=H.abs({left:'640px',top:'20px',width:'620px',height:'680px',background:'linear-gradient(90deg,#e8dcc0,#fbf5e6 15%)',borderRadius:'0 6px 6px 0'},bk);
  const p=pho(H,L,110,90,400,300,'boy',800,{rotate:'-3deg',boxShadow:'0 6px 14px rgba(0,0,0,.15)'});H.abs({left:'250px',top:'70px',width:'120px',height:'34px',background:'rgba(255,200,120,.7)',rotate:'4deg'},L);
  const tx=H.abs({left:'70px',top:'440px',width:'480px',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'36px',lineHeight:'1.8',color:'#5a4030'},L);const msg='むかしむかし、あるところに、げんきな おとこのこが いました。';let i=0;const ch=[...msg];H.wait(1200,function tk(){if(i<ch.length){tx.textContent+=ch[i++];H.wait(70,tk)}});
  const p2=pho(H,Rp,110,90,400,300,'girl',null,{rotate:'3deg',boxShadow:'0 6px 14px rgba(0,0,0,.15)'});T(H,Rp,{left:'70px',top:'440px',width:'480px',whiteSpace:'normal',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'36px',lineHeight:'1.8',color:'#5a4030'},'となりの まちには、えがおの すてきな おんなのこが いました。',4600,'fade');
  const fl=H.abs({left:'640px',top:'20px',width:'620px',height:'680px',background:'#fbf5e6',transformOrigin:'0 50%',borderRadius:'0 6px 6px 0',boxShadow:'0 0 40px rgba(0,0,0,.25)'},bk);H.abs({left:'0',right:'0',top:'260px',textAlign:'center',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'44px',color:'#b9875a'},fl,t);
  H.a(fl,[{transform:'perspective(2400px) rotateY(0deg)'},{transform:'perspective(2400px) rotateY(-180deg)'}],{d:1400,dl:3600,e:E.io});H.a(fl,[{opacity:1},{opacity:0}],{d:10,dl:4300});
  for(let k=0;k<12;k++){const f=H.abs({left:rnd(300,1300)+'px',top:'800px',width:'18px',height:'14px',borderRadius:'50% 0',background:pick(['#ffb3c7','#ffd28a','#fff'])},null);H.a(f,[{opacity:0,transform:'translateY(0) rotate(0)'},{opacity:1},{opacity:0,transform:`translateY(-${rnd(400,700)}px) rotate(${rnd(200,500)}deg)`}],{d:3000,dl:6500+rnd(0,2000)})}}});
