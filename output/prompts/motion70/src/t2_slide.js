/* ===== SLIDE 11-20 ===== */
const IOS='cubic-bezier(.65,0,.35,1)';

defT({no:'11',cat:'SLIDE',name:'プッシュ',en:'Push',lead:'次の場面が、今の場面を横へ押し出して入ってくる。',d:700,
use:'<b>どんな動画にも合う基本の切り替え</b>。スライド資料の解説、手順の「次へ」、時間の経過に。',
tips:['迷ったらこれ。イージングを真ん中で速くするだけで、素人っぽさが消えます','押し出す方向は「話が進む方向（右→左）」に統一すると見やすい','縦方向（下から上）にすると、SNSのスワイプのような印象に'],
p:`次の場面が今の場面を横へ押し出して入ってくる「プッシュ」でシーンAからシーンBへ切り替えてください。
・時間：0.7秒。イージング cubic-bezier(.65,0,.35,1)
・シーンA：translateX 0 → −100%
・シーンB：translateX +100% → 0
・AとBはぴったりくっついたまま同じ速さで動き、間に隙間を出さない`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);H.a(A,[{transform:'translateX(0)'},{transform:'translateX(-100%)'}],{d:D,dl:st,e:IOS});H.a(B,[{transform:'translateX(100%)'},{transform:'translateX(0)'}],{d:D,dl:st,e:IOS})}});

defT({no:'12',cat:'SLIDE',name:'スライドオーバー',en:'Slide Over',lead:'次の場面が下からスッと重なり、今の場面は奥へ沈む。',d:750,
use:'<b>アプリ紹介・スマホ画面・SNSのストーリー</b>のような見せ方に。重なる動きで「追加される情報」を表現できます。',
tips:['奥へ沈むAを少し暗くする（brightness 0.6）と、奥行きが生まれます','Bの上端に影を付けると、紙が重なったように見えます','横から重ねるとページ送り、下からだとシートが出る印象'],
p:`次の場面が下からスッと重なってきて、今の場面は奥へ沈んでいく「スライドオーバー」でシーンAからシーンBへ切り替えてください。
・時間：0.75秒。イージング cubic-bezier(.16,1,.3,1)
・シーンB（手前）：translateY +100% → 0。上端に影（0 −20px 60px rgba(0,0,0,.45)）
・シーンA（奥）：scale 1 → 0.92、filter: brightness(1) → brightness(0.6)
・Aは動かさず、その場で奥へ沈むように見せる`,
tr(H,root,mk,st,D){const A=mk(0),B=mk(1,{boxShadow:'0 -20px 60px rgba(0,0,0,.45)'});H.a(B,[{transform:'translateY(100%)'},{transform:'translateY(0)'}],{d:D,dl:st});H.a(A,[{transform:'scale(1)',filter:'brightness(1)'},{transform:'scale(.92)',filter:'brightness(.6)'}],{d:D,dl:st,f:'none'})}});

defT({no:'13',cat:'SLIDE',name:'スライドリビール',en:'Slide Reveal',lead:'今の場面が横へ抜けると、その下に次の場面が待っている。',d:750,
use:'<b>種明かし・正体・中身の公開</b>に。カーテンを引くように見せると、「実は…」がドラマチックになります。',
tips:['下のBを少しだけ引いておく（scale 1.08 → 1）と、待っていた感じが出ます','Aの右端に影を付けると、1枚の板が抜けていくように見えます','抜ける速さは最初ゆっくり→最後速い（ease-in）でも面白い'],
p:`今の場面が横へ抜けていくと、その下に次の場面が待っている「スライドリビール」でシーンAからシーンBへ切り替えてください。
・時間：0.75秒。イージング cubic-bezier(.65,0,.35,1)
・シーンB（奥）：最初から下に置いておき、scale 1.08 → 1 へゆっくり引く
・シーンA（手前）：translateX 0 → −100%。右端に影（20px 0 60px rgba(0,0,0,.5)）
・Bは動かさず、Aだけが抜けていく`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0,{boxShadow:'20px 0 60px rgba(0,0,0,.5)'});H.a(A,[{transform:'translateX(0)'},{transform:'translateX(-100%)'}],{d:D,dl:st,e:IOS});H.a(B,[{transform:'scale(1.08)'},{transform:'scale(1)'}],{d:D+300,dl:st})}});

defT({no:'14',cat:'SLIDE',name:'エラスティック',en:'Elastic Slide',lead:'次の場面が勢いよく飛び込み、ゴムのように行き過ぎて戻る。',d:950,
use:'<b>ポップ・元気・子ども向け・バラエティ</b>に。弾む動きは明るい印象を与えるので、楽しい企画の場面転換に。',
tips:['行き過ぎは6%前後が「弾む」と「ふらつく」の境目','押し出されるAも少しだけ逆方向に揺らすと、ぶつかった感じが出ます','縦方向で使うと「ぴょん」と出てくる感じに'],
p:`次の場面が勢いよく飛び込んできて、ゴムのように行き過ぎてから戻る「エラスティックスライド」でシーンAからシーンBへ切り替えてください。
・時間：0.95秒
・シーンB：translateX を +100% → −6% → +2.5% → −1% → 0（キーフレーム 0 / 45 / 65 / 82 / 100%）。各区間 ease-in-out
・シーンA：Bに押されて translateX 0 → −100%（0〜45%の区間で、cubic-bezier(.65,0,.35,1)）
・Bが行き過ぎたとき、Bの左端に少し影を付けて重なりを見せる`,
tr(H,root,mk,st,D){const A=mk(0),B=mk(1,{boxShadow:'-20px 0 50px rgba(0,0,0,.35)'});H.a(B,[{transform:'translateX(100%)',offset:0},{transform:'translateX(-6%)',offset:.45},{transform:'translateX(2.5%)',offset:.65},{transform:'translateX(-1%)',offset:.82},{transform:'translateX(0)',offset:1}],{d:D,dl:st,e:'ease-in-out'});
  H.a(A,[{transform:'translateX(0)'},{transform:'translateX(-100%)'}],{d:D*.45,dl:st,e:IOS})}});

defT({no:'15',cat:'SLIDE',name:'パララックススライド',en:'Parallax Slide',lead:'背景と文字が違う速さでずれながら、奥行きのある切り替え。',d:900,
use:'<b>旅・風景・ブランド紹介</b>に。背景と手前の要素が別々に動くので、普通のスライドより上質で映画的に見えます。',
tips:['奥（背景）は遅く、手前（文字）は速く動かすのが基本','奥に沈むAを暗くすると、Bが手前に来た感じが強まります','文字だけ少し遅れて止まると、さらに上質に'],
p:`背景と文字が違う速さでずれる「パララックス（視差）スライド」でシーンAからシーンBへ切り替えてください。
・時間：0.9秒。イージング cubic-bezier(.65,0,.35,1)
・シーンA：全体を translateX 0 → −30%（ゆっくり）、filter: brightness(1) → 0.5
・シーンB（手前）：全体を translateX +100% → 0
・シーンBの中の文字（タイトル）は、B本体より遅れて translateX +40% → 0 で動かす（同じ時間、イージング cubic-bezier(.16,1,.3,1)）
・Aの中の文字は、A本体より速く translateX 0 → −60% で抜ける`,
tr(H,root,mk,st,D){const A=mk(0),B=mk(1,{boxShadow:'-30px 0 60px rgba(0,0,0,.4)'});H.a(A,[{transform:'translateX(0)',filter:'brightness(1)'},{transform:'translateX(-30%)',filter:'brightness(.5)'}],{d:D,dl:st,e:IOS,f:'none'});H.a(A._title,[{transform:'translateX(0)'},{transform:'translateX(-60%)'}],{d:D,dl:st,e:IOS,f:'none'});
  H.a(B,[{transform:'translateX(100%)'},{transform:'translateX(0)'}],{d:D,dl:st,e:IOS});H.a(B._title,[{transform:'translateX(40%)'},{transform:'translateX(0)'}],{d:D,dl:st});hide(H,A,st+D)}});

defT({no:'16',cat:'SLIDE',name:'スタックカード',en:'Stack Cards',lead:'次の場面がカードとして下から積み上がり、全画面に広がる。',d:1000,
use:'<b>ランキング・おすすめ紹介・複数商品</b>に。カードを重ねる動きで「次々に紹介していく」流れが作れます。',
tips:['カードの角丸（36px）と少しの傾きで「手で置いた」感じが出ます','広がる前に0.15秒止めると、カードとして認識されやすくなります','Aを少し縮めて暗くすると、カードが手前に積まれた感じに'],
p:`次の場面がカードとして下から積み上がり、そのまま全画面に広がる「スタックカード」でシーンAからシーンBへ切り替えてください。
・時間：1.0秒
・0〜0.5秒：シーンBを、scale 0.78・角丸36px・rotate 3°・影 0 30px 70px rgba(0,0,0,.5) の「カード」の状態で、translateY +110% → 0 へ（cubic-bezier(.16,1,.3,1)）
・同時にシーンAを scale 1 → 0.9、brightness 1 → 0.55
・0.5〜0.65秒：カードのまま止める
・0.65〜1.0秒：Bを scale 1・角丸0・rotate 0 に広げて全画面にする（cubic-bezier(.65,0,.35,1)）`,
tr(H,root,mk,st,D){const A=mk(0),B=mk(1);H.a(B,[{transform:'translateY(110%) scale(.78) rotate(3deg)',borderRadius:'36px',boxShadow:'0 30px 70px rgba(0,0,0,.5)',offset:0},{transform:'translateY(0) scale(.78) rotate(3deg)',borderRadius:'36px',boxShadow:'0 30px 70px rgba(0,0,0,.5)',offset:.5,easing:E.out},{transform:'translateY(0) scale(.78) rotate(3deg)',borderRadius:'36px',offset:.65,easing:IOS},{transform:'translateY(0) scale(1) rotate(0)',borderRadius:'0',boxShadow:'0 0 0 rgba(0,0,0,0)',offset:1}],{d:D,dl:st,e:E.lin});
  H.a(A,[{transform:'scale(1)',filter:'brightness(1)'},{transform:'scale(.9)',filter:'brightness(.55)'}],{d:D*.5,dl:st});hide(H,A,st+D)}});

defT({no:'17',cat:'SLIDE',name:'ロールオーバー',en:'Roll Over',lead:'画面が縦にくるっと転がり、上の面から次の場面が現れる。',d:900,
use:'<b>「次の日」「次のお題」「チャンネル切り替え」</b>に。縦の回転は、テレビのチャンネルを変えたような感覚を生みます。',
tips:['奥行きは画面の高さの半分にすると、正確な立方体になります','回転中に画面を少し縮めると、全体像が見えて立体感が出ます','下から上へ回すと前向き、上から下へ回すと振り返りの印象に'],
p:`立方体を縦に転がすように、シーンAの面からシーンBの面へ切り替える「ロールオーバー」を作ってください。
・時間：0.9秒。イージング cubic-bezier(.65,0,.35,1)
・CSS 3D：親に perspective: 2000px。立方体のグループに transform-style: preserve-3d
・シーンAは translateZ(画面の高さの半分)、シーンBは rotateX(−90°) translateZ(画面の高さの半分) に配置（Bが下の面）
・立方体全体を translateZ(−高さの半分) rotateX(0) → rotateX(90°) へ回転させ、Bが下から起き上がってくるようにする。中盤だけ scale 0.88
・背景は黒`,
tr(H,root,mk,st,D){root.style.perspective='2000px';const C=H.abs({inset:'0',transformStyle:'preserve-3d'},root);const A=mk(0,{transform:'translateZ(450px)',backfaceVisibility:'hidden'},C),B=mk(1,{transform:'rotateX(-90deg) translateZ(450px)',backfaceVisibility:'hidden'},C);
  H.a(C,[{transform:'translateZ(-450px) rotateX(0deg) scale(1)'},{transform:'translateZ(-450px) rotateX(45deg) scale(.88)',offset:.5},{transform:'translateZ(-450px) rotateX(90deg) scale(1)'}],{d:D,dl:st,e:IOS,f:'backwards'});hide(H,A,st+D);H.wait(st+D,()=>{B.style.transform='none'})}});

defT({no:'18',cat:'SLIDE',name:'観音開き',en:'Barn Door',lead:'今の場面が中央から左右に割れて開き、奥から次の場面。',d:850,
use:'<b>オープニング・開店・お披露目・グランドオープン</b>に。扉が開く動きは「いよいよ始まる」感を出せます。',
tips:['開く扉の内側に影を付けると、本物の扉のような厚みが出ます','奥のBを少し引いて（1.15→1）おくと、扉の向こうに吸い込まれる感じに','縦に開く（上下）と、シャッターが開くような印象に'],
p:`今の場面が中央から左右2枚の扉のように開き、奥から次の場面が現れる「観音開き」でシーンAからシーンBへ切り替えてください。
・時間：0.85秒。イージング cubic-bezier(.65,0,.35,1)
・シーンAを2枚複製し、左半分（clip-path: inset(0 50% 0 0)）と右半分（inset(0 0 0 50%)）に分ける
・左の扉は translateX 0 → −50%、右の扉は 0 → +50% へ開く。扉の内側の端に影（各扉の中央側に 0 0 40px rgba(0,0,0,.6)）
・奥のシーンBは scale 1.15 → 1 へ、扉が開くのと同時に引いていく`,
tr(H,root,mk,st,D){const B=mk(1);const L=mk(0,{clipPath:'inset(0 50% 0 0)'}),R=mk(0,{clipPath:'inset(0 0 0 50%)'});const s1=H.abs({left:'770px',top:'0',width:'30px',height:'900px',background:'linear-gradient(90deg,transparent,rgba(0,0,0,.5))',opacity:0},L);const s2=H.abs({left:'800px',top:'0',width:'30px',height:'900px',background:'linear-gradient(-90deg,transparent,rgba(0,0,0,.5))',opacity:0},R);[s1,s2].forEach(x=>H.a(x,[{opacity:0},{opacity:1,offset:.15},{opacity:1}],{d:D,dl:st,f:'none'}));
  H.a(L,[{transform:'translateX(0)'},{transform:'translateX(-50%)'}],{d:D,dl:st,e:IOS});H.a(R,[{transform:'translateX(0)'},{transform:'translateX(50%)'}],{d:D,dl:st,e:IOS});H.a(B,[{transform:'scale(1.15)'},{transform:'scale(1)'}],{d:D,dl:st,e:IOS});hide(H,L,st+D);hide(H,R,st+D)}});

defT({no:'19',cat:'SLIDE',name:'スラッシュワイプ',en:'Slash Wipe',lead:'斜めの刃が画面を横切り、その跡が次の場面になる。',d:700,
use:'<b>スポーツ・アクション・ゲーム</b>に。斜めの線はスピードと鋭さを感じさせるので、勢いのある場面転換に。',
tips:['刃の角度は20°前後が、鋭さと見やすさのバランスが良い','刃の先端に白い光の線を付けると、斬ったような演出に','2枚の色違いの刃を少しずらして通すと、さらに派手に'],
p:`斜めの刃が画面を左から右へ横切り、刃が通った跡が次の場面になる「スラッシュワイプ」でシーンAからシーンBへ切り替えてください。
・時間：0.7秒。イージング cubic-bezier(.87,0,.13,1)
・シーンBを上に重ね、clip-path: polygon で斜めに切り抜く。開始 polygon(0 0, 0 0, −25% 100%, −25% 100%) → 終了 polygon(0 0, 125% 0, 100% 100%, −25% 100%)（左上から斜めに広がる）
・刃の先端（Bの右端の斜めの辺）に沿って、白い光の線（幅10px、ぼかし8pxの光）を一緒に動かす
・刃の0.06秒前を、#C6F432 の細い帯（幅40px）が先行して通過する`,
tr(H,root,mk,st,D){const A=mk(0);const g=H.abs({inset:'0',background:'#c6f432',clipPath:'polygon(0 0,0 0,-25% 100%,-25% 100%)'},root);const B=mk(1,{clipPath:'polygon(0 0,0 0,-25% 100%,-25% 100%)'});
  const k=[{clipPath:'polygon(0 0,0 0,-25% 100%,-25% 100%)'},{clipPath:'polygon(0 0,125% 0,100% 100%,-25% 100%)'}];H.a(g,k,{d:D,dl:st-60,e:E.io});H.a(B,k,{d:D,dl:st,e:E.io});
  const ln=H.abs({left:'0',top:'-100px',width:'10px',height:'1150px',background:'#fff',boxShadow:'0 0 18px #fff',transform:'rotate(14deg)',transformOrigin:'50% 50%'},root);H.a(ln,[{left:'-200px',opacity:1},{left:'1800px',opacity:1}],{d:D,dl:st,e:E.io,f:'none'});ln.style.opacity=0}});

defT({no:'20',cat:'SLIDE',name:'ストライプワイプ',en:'Stripe Wipe',lead:'横の帯が左右交互に滑り込み、次の場面を組み上げる。',d:900,
use:'<b>ニュース・情報番組・スポーツ中継</b>のような「番組っぽさ」に。テンポのいい解説動画の章替えにも。',
tips:['帯の数は6〜10本がきれい。多いほど細やかに','交互の方向にすると、編み込まれるようなリズムが出ます','帯の遅れ（0.05秒）を大きくすると、波のように見えます'],
p:`横長の帯が左右交互に滑り込んで、次の場面を組み上げる「ストライプワイプ」でシーンAからシーンBへ切り替えてください。
・時間：0.9秒
・シーンBを8本の横帯に分ける（各帯は clip-path: inset() で高さ12.5%ずつ切り抜いたBの複製）
・偶数番目の帯は左から（translateX −100% → 0）、奇数番目は右から（+100% → 0）滑り込ませる
・帯ごとに0.05秒ずつ遅らせ、各帯は0.5秒（イージング cubic-bezier(.16,1,.3,1)）
・すべての帯がそろったら、Aを非表示にする`,
tr(H,root,mk,st,D){const A=mk(0);const N=8;for(let i=0;i<N;i++){const top=i*12.5;const b=mk(1,{clipPath:`inset(${top}% 0 ${100-top-12.5}% 0)`});H.a(b,[{transform:`translateX(${i%2?100:-100}%)`},{transform:'translateX(0)'}],{d:500,dl:st+i*50})}hide(H,A,st+D)}});
