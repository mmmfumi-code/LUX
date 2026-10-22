/* ===== WEDDING PROFILE 11-20：シンプル・メルヘン ===== */
CUR_SEC='f';

/* WSIMPLE：シンプル・スタイリッシュ */
defW({no:'11',cat:'WSIMPLE',name:'ミニマルな年表',en:'Minimal Timeline',lead:'1本の細い線の上を、年号とともに写真が流れていく。余白をたっぷり取った、上品でシンプルなプロフィール。',bg:'#fafaf8',
use:'<b>ホテル・レストランの落ち着いた披露宴</b>に。年号と写真だけで構成するので、写真の枚数が多くても少なくても整って見えます。',
tips:['年号は大きく細い数字で。写真よりも年号を主役にすると、ぐっとスタイリッシュになります','コメントは1行20文字まで。説明しすぎないのが上品さのコツ','線の色を会場のテーマカラーにすると、さりげない統一感が出ます'],
p:`1本の細い横線の年表の上を写真が流れていく、余白の美しいミニマルなプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：オフホワイト #FAFAF8、文字はチャコール #2B2B2B、線と年号はグレー #9A9A9A、差し色は1色（例：くすみブルー #7A93AC）
・フォント：数字と英字は Montserrat（200/300）、日本語は Noto Sans JP（300）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 画面の下から3分の1の位置に、左右いっぱいの細い横線（1px）。線の上に年号の目盛りが等間隔に並ぶ
　2. 写真1枚ごとに、年表全体が左へゆっくり流れ、今の年号の目盛りが中央に来て止まる。年号は細い数字で大きく（例「1999」）
　3. 写真は線の上、中央に1枚。写真のまわりに広い余白。写真の下、線の下側に1行のコメント
　4. 章の区切りは、線が一度だけ差し色に変わり、中央に細い文字で「Groom ── ○○」「Bride ── ○○」「Our Story」
　5. ふたりの章では、新郎の線と新婦の線（上下2本）が、出会いの年で1本に合流する
　6. エンディング：線がゆっくり右へ伸びて画面の外へ消え、「and the story continues.」と日付`,
run(H,t){const [a]=nm(t);const S=H.abs({inset:'0',background:'#fafaf8'});const W=H.abs({left:'0',top:'0',width:'4400px',height:'900px'},S);
  H.abs({left:'0',top:'640px',width:'4400px',height:'1px',background:'#9a9a9a'},W);
  [1995,1999,2003,2008,2014,2019].forEach((y,i)=>{const x=800+i*700;H.abs({left:x+'px',top:'632px',width:'1px',height:'16px',background:'#9a9a9a'},W);H.abs({left:x-200+'px',width:'400px',textAlign:'center',top:'40px',fontFamily:"'Montserrat',sans-serif",fontWeight:'200',fontSize:'120px',color:'#2b2b2b'},W,String(y));pho(H,W,x-200,190,400,400,['baby','boy','boy','boy','man','couple'][i]);H.abs({left:x-300+'px',width:'600px',textAlign:'center',top:'670px',fontFamily:F.sans,fontWeight:'300',fontSize:'30px',color:'#2b2b2b'},W,['〇〇県に誕生','七五三','少年野球を始める','中学の入学式','社会人一年目','ふたりが出会う'][i])});
  H.a(W,[{transform:'translateX(0)'},{transform:'translateX(-700px)',offset:.2},{transform:'translateX(-700px)',offset:.3},{transform:'translateX(-1400px)',offset:.5},{transform:'translateX(-1400px)',offset:.6},{transform:'translateX(-2100px)',offset:.8},{transform:'translateX(-2100px)'}],{d:10000,e:E.soft});
  T(H,S,{left:'60px',top:'820px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'24px',letterSpacing:'.3em',color:'#7a93ac'},'GROOM ── '+a.toUpperCase(),300,'fade')}});

defW({no:'12',cat:'WSIMPLE',name:'モノクロのポートレート展',en:'Monochrome Portraits',lead:'すべての写真をモノクロにして、細い明朝の言葉を添える。写真家の個展のような、静かで美しいプロフィール。',bg:'#111',
use:'<b>大人っぽく、しっとり見せたいふたり</b>に。写真の色や画質がバラバラでも、モノクロにすることで統一感が出ます。',
tips:['モノクロにすると、古い写真と最近の写真の差が気にならなくなります','最後の1枚だけカラーに戻すと、そこが一番の見せ場に','言葉は写真の邪魔をしない小さな明朝体で。1枚に1行まで'],
p:`すべての写真をモノクロにして、写真家の個展のように見せる、静かで美しいプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：背景は黒に近い #111、文字は白 #F2F2F2 とグレー #8A8A8A。写真はすべてモノクロ（コントラスト強め）、最後の1枚だけカラー
・フォント：日本語は Shippori Mincho B1（500）、英字は Cormorant Garamond（イタリック）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 写真は画面の左右どちらかに寄せて大きく（縦写真なら縦長のまま）、反対側の余白に小さな文字（年・場所・一言）
　2. 写真は、黒からゆっくり明るくなって現れ、少し寄って、また黒へ消える（フェードイン・アウトのみ。派手な切り替えは使わない）
　3. 章のタイトル：黒い画面に、細い英字のイタリックで「Chapter I ── Groom」と、日本語の名前
　4. ときどき、2枚の写真を左右に並べて、同じ場所・同じポーズの「昔と今」を見せる
　5. エンディング：最後のふたりの写真だけ、モノクロからゆっくりカラーに戻る。下に「Thank you」と日付`,
run(H,t){const [a]=nm(t);const S=H.abs({inset:'0',background:'#111'});
  const ch=H.abs({inset:'0',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'16px'},S);H.el('div',{fontFamily:F.serif,fontStyle:'italic',fontSize:'56px',color:'#f2f2f2'},ch,'Chapter I ── Groom');H.el('div',{fontFamily:F.min,fontSize:'34px',letterSpacing:'.4em',color:'#8a8a8a'},ch,'新郎　'+a);H.a(ch,[{opacity:0},{opacity:1,offset:.2},{opacity:1,offset:.8},{opacity:0}],{d:3000,f:'forwards'});
  const p1=pho(H,S,160,90,560,720,'boy');p1.style.filter='grayscale(1) contrast(1.25)';H.a(p1,[{opacity:0,filter:'grayscale(1) contrast(1.25) brightness(0)'},{opacity:1,filter:'grayscale(1) contrast(1.25) brightness(1)',offset:.3},{opacity:1,offset:.85},{opacity:0}],{d:3800,dl:3000,f:'both'});kb(H,p1,3000,3800);
  [[400,F.serif,'40px','#8a8a8a','2003 ── Summer'],[470,F.min,'34px','#f2f2f2','虫取りに夢中だった、8歳の夏。']].forEach((q,i)=>{const e=H.abs({left:'860px',top:q[0]+'px',fontFamily:q[1],fontStyle:i?'normal':'italic',fontSize:q[2],color:q[3],opacity:0},S,q[4]);fadeIO(H,e,3700+i*400,6600,400)});
  const p2=pho(H,S,420,90,760,720,'couple');H.a(p2,[{opacity:0,filter:'grayscale(1)'},{opacity:1,filter:'grayscale(1)',offset:.3},{opacity:1,filter:'grayscale(0)'}],{d:3000,dl:7000});
  T(H,S,{left:'0',right:'0',top:'830px',textAlign:'center',fontFamily:F.serif,fontStyle:'italic',fontSize:'34px',letterSpacing:'.3em',color:'#f2f2f2'},'Thank you',8600,'fade')}});

defW({no:'13',cat:'WSIMPLE',name:'白い壁のポラロイド',en:'Polaroid Wall',lead:'白い壁に、ポラロイド写真がピンで1枚ずつ留められていく。手書きのメモが添えられた、シンプルでおしゃれなプロフィール。',bg:'#f4f3ef',
use:'<b>カジュアルで洗練された雰囲気にしたいふたり</b>に。写真の枚数が多くても、壁いっぱいに並ぶ最後の画面が圧巻です。',
tips:['ポラロイドは少しずつ角度を変えて貼ると、手作りの温かさが出ます','白い余白の下部に、手書き風のメモ（年・ひとこと）を入れるのがポイント','最後に全部の写真が壁いっぱいに並んだ「引き」の画面を見せると、感動的です'],
p:`白い壁にポラロイド写真が1枚ずつピンで留められていく、シンプルでおしゃれなプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：壁は温かみのある白 #F4F3EF（ほんのり漆喰の質感）、ポラロイドの枠は白、ピンは黒・真鍮色、文字はチャコール
・フォント：手書き風の Klee One（600）、英字は Caveat 風の手書きか Cormorant Garamond（イタリック）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. カメラが壁に近づいた状態から始まり、ポラロイドが1枚ずつ「上からひらりと落ちてきて、ピンで留まる」動き。角度は±6度でばらつかせる
　2. 写真は枠の中でゆっくり現像されるように、白から色が出てくる
　3. ポラロイドの下の余白に、手書き風のメモ（例「'03 夏 虫取り名人」）
　4. 1枚留まるごとに、カメラがゆっくり横へ移動して次の場所へ
　5. 章の区切りでは、壁に細い紐と木のクリップで「GROOM」「BRIDE」「US」の文字カードを吊るす
　6. エンディング：カメラが大きく引いて、壁いっぱいに並んだすべてのポラロイドが見える。中央に「Thank you」のカード`,
run(H,t){const S=H.abs({inset:'0',background:'#f4f3ef'});S.style.backgroundImage='radial-gradient(rgba(0,0,0,.025) 1px,transparent 1px)';S.style.backgroundSize='8px 8px';
  const W=H.abs({left:'0',top:'0',width:'1600px',height:'900px',transformOrigin:'50% 50%'},S);
  const pol=(x,y,r,k,memo,dl)=>{const c=H.abs({left:x+'px',top:y+'px',width:'300px',height:'360px',background:'#fff',boxShadow:'0 10px 20px rgba(0,0,0,.15)',rotate:r+'deg'},W);const p=pho(H,c,18,18,264,264,k);H.a(p,[{filter:'brightness(2.2) saturate(0)'},{filter:'brightness(1) saturate(1)'}],{d:1800,dl:dl+400});
    H.abs({left:'0',right:'0',top:'296px',textAlign:'center',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'26px',color:'#3a3a3a'},c,memo);H.abs({left:'140px',top:'-8px',width:'20px',height:'20px',borderRadius:'50%',background:'radial-gradient(circle at 35% 30%,#e8c97a,#8a6a2f)'},c);
    H.a(c,[{opacity:0,transform:'translateY(-500px) rotate(20deg)'},{opacity:1,transform:'none'}],{d:900,dl,e:E.out})};
  pol(130,120,-5,'baby',"'95 春 誕生",300);pol(470,170,4,'boy',"'03 夏 虫取り名人",1300);pol(810,110,-3,'boy',"'08 中学入学",2300);pol(1150,180,6,'man',"'14 上京",3300);
  pol(300,540,3,'man',"'19 出会い",4300);pol(650,520,-6,'couple',"'22 初めての旅行",5300);pol(1000,560,4,'couple',"'24 プロポーズ",6300);
  H.a(W,[{transform:'scale(1.6) translate(250px,150px)'},{transform:'scale(1.6) translate(-50px,150px)',offset:.35},{transform:'scale(1.4) translate(0,-80px)',offset:.65},{transform:'scale(.95)'}],{d:10000,e:E.soft})}});

defW({no:'14',cat:'WSIMPLE',name:'数字で見るふたり',en:'Infographic',lead:'「出会って2,190日」「交わしたLINE 48,000通」。ふたりの歩みを、おしゃれなインフォグラフィックで見せる。',bg:'#f1efe9',
use:'<b>知的でユーモアのあるプロフィールにしたいふたり</b>に。数字がおもしろいほど、会場から笑いと拍手が起きます。',
tips:['数字は大きく、単位は小さく。カウントアップするだけで見ごたえが出ます','「身長差」「好きな食べ物の一致率」など、ふたりならではの数字を探すのが楽しい','数字が正確でない場合は「約」を付けて、楽しい雰囲気で'],
p:`ふたりの歩みを数字とグラフで見せる、スタイリッシュなインフォグラフィックのプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：背景はベージュグレー #F1EFE9、文字はネイビー #1F2A44、グラフの色は新郎＝くすみブルー #6C8EBF、新婦＝くすみピンク #D59AA0、共通＝ゴールド #C9A24B
・フォント：数字は Montserrat（800）、英字は Montserrat（300）、日本語は Noto Sans JP（500/900）
・全体の流れ：
${PCHAP}
　（それぞれの章を「写真」と「数字のカード」を交互に見せて進める）
・見た目の決まり：
　1. 数字のカード：大きな数字がカウントアップし、その下に小さな説明（例「12 ── 新郎が少年野球を続けた年数」）。横に細い線のアイコン
　2. プロフィールの比較：新郎と新婦を左右に並べ、身長・出身地・血液型・好きな食べ物を、左右対称の横棒グラフや円グラフで
　3. 写真：数字のカードの合間に、写真を正方形で大きく。左下に年号
　4. ふたりの章：「出会ってから ○○日」「一緒に行った旅行 ○回」「交わしたメッセージ 約○通」「ケンカ ○回（仲直り 同じ回数）」を、テンポよくカウントアップ
　5. エンディング：「これから一緒に過ごす日 ∞」と日付`,
run(H,t){const S=H.abs({inset:'0',background:'#f1efe9'});const NV='#1f2a44';
  const card=(x,y,num,unit,lab,col,dl)=>{const c=R(H,S,{left:x+'px',top:y+'px',width:'440px',height:'300px',background:'#fff',borderRadius:'20px',boxShadow:'0 10px 30px rgba(31,42,68,.08)'},dl,'up');const n=H.abs({left:'36px',top:'40px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'110px',lineHeight:'1',color:col},c,'0');H.abs({left:'36px',top:'170px',fontFamily:F.sans,fontWeight:'900',fontSize:'30px',color:NV},c,unit);H.abs({left:'36px',top:'222px',fontFamily:F.sans,fontWeight:'500',fontSize:'22px',color:'#666'},c,lab);
    let v=0;const steps=30;H.wait(dl+200,function tk(){v++;n.textContent=Math.round(num*v/steps).toLocaleString();if(v<steps)H.wait(40,tk)})};
  T(H,S,{left:'90px',top:'60px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'32px',letterSpacing:'.4em',color:'#c9a24b'},'OUR STORY IN NUMBERS',200,'fade');
  card(90,160,2190,'日','出会ってから今日まで','#c9a24b',600);card(580,160,48000,'通','交わしたメッセージ（約）','#6c8ebf',1400);card(1070,160,23,'回','一緒に行った旅行','#d59aa0',2200);
  const cmp=R(H,S,{left:'90px',top:'500px',width:'1420px',height:'330px',background:'#fff',borderRadius:'20px'},3200,'up');
  [['身長',180,158],['好きな食べ物の一致率',82,82],['朝型度',30,90]].forEach((q,i)=>{const y=40+i*95;H.abs({left:'0',right:'0',top:y+'px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'26px',color:NV},cmp,q[0]);const l=H.abs({right:'760px',top:y+40+'px',height:'26px',width:q[1]*3+'px',background:'#6c8ebf',borderRadius:'13px 0 0 13px',transformOrigin:'right'},cmp);const r=H.abs({left:'760px',top:y+40+'px',height:'26px',width:q[2]*3+'px',background:'#d59aa0',borderRadius:'0 13px 13px 0',transformOrigin:'left'},cmp);[l,r].forEach(e=>H.a(e,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:1000,dl:3800+i*300,e:E.out}))});
  H.abs({left:'60px',top:'20px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'24px',color:'#6c8ebf'},cmp,'GROOM');H.abs({right:'60px',top:'20px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'24px',color:'#d59aa0'},cmp,'BRIDE')}});

defW({no:'15',cat:'WSIMPLE',name:'左右の分割画面',en:'Split Screen',lead:'画面を左右に分けて、新郎と新婦が同じ年に何をしていたかを同時に見せる。最後に画面がひとつになる演出が見どころ。',bg:'#ffffff',
use:'<b>同い年・近い年のふたり</b>に。「同じ頃、遠くの町で」という見せ方が、出会いのドラマを引き立てます。',
tips:['左右の写真は、できるだけ同じ年齢・同じ行事（入学式・成人式など）でそろえると比べて楽しい','中央の年号は大きく。左右の写真は少しずらしたタイミングで切り替えるとリズムが出ます','出会った年で、中央の線がゆっくり消えて1枚の写真になる瞬間を、いちばんの見せ場に'],
p:`画面を左右に分けて、新郎と新婦の同じ年の写真を同時に見せる、スタイリッシュな分割画面のプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：白 #FFFFFF、文字は黒 #111、新郎側のラベルはネイビー #2B3A67、新婦側はローズ #C27C88
・フォント：英字と数字は Montserrat（800/300）、日本語は Noto Sans JP（500/900）
・全体の流れ（この作品は、新郎・新婦の生い立ちを「同時に」見せる）：
　・オープニング（20秒）：画面の中央に縦線が引かれ、左に「GROOM」、右に「BRIDE」
　・ふたりの生い立ち（約4分）：同じ年ごとに、左に新郎の写真、右に新婦の写真。中央の上に大きな年号（例「2003」）。左右の写真の下に、それぞれ年齢とひとこと（写真各15枚）
　・出会い（20秒）：出会った年になると、中央の線がゆっくり消えて、1枚のふたりの写真が画面いっぱいに広がる
　・ふたりの歩み（約1分）：画面いっぱいの写真で、出会い〜プロポーズ
　・ゲストへの感謝とエンディング（約50秒）
・見た目の決まり：左右の写真は同じ大きさ・同じ高さにそろえる。切り替えは左右で0.3秒ずらして、縦にスライド`,
run(H,t){const [a,b]=nm(t);const S=H.abs({inset:'0',background:'#fff'});
  const side=(x,ks,col,lab)=>{H.abs({left:x+60+'px',top:'40px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'26px',letterSpacing:'.3em',color:col},S,lab);const box=H.abs({left:x+60+'px',top:'110px',width:'680px',height:'620px',overflow:'hidden'},S);ks.forEach((k,i)=>{const p=pho(H,box,0,0,680,620,k);H.a(p,i===ks.length-1?[{transform:'translateY(100%)'},{transform:'translateY(0)',offset:.15},{transform:'translateY(0)'}]:[{transform:'translateY(100%)'},{transform:'translateY(0)',offset:.15},{transform:'translateY(0)',offset:.85},{transform:'translateY(-100%)'}],{d:3200,dl:i*2800+(x?300:0),e:E.io})});return box};
  side(0,['baby','boy','man'],'#2b3a67','GROOM ── '+a.toUpperCase());side(800,['baby','girl','woman'],'#c27c88','BRIDE ── '+b.toUpperCase());
  const ln=H.abs({left:'799px',top:'0',width:'2px',height:'900px',background:'#111'},S);H.a(ln,[{opacity:1},{opacity:0}],{d:600,dl:8200,f:'forwards'});
  ['1995','2003','2014'].forEach((y,i)=>{const e=H.abs({left:'0',right:'0',top:'750px',textAlign:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'110px',lineHeight:'1',color:'#111',opacity:0},S,y);fadeIO(H,e,i*2800+200,i*2800+2900,300)});
  const one=pho(H,S,0,0,1600,900,'couple');one.style.opacity=0;H.a(one,[{opacity:0,clipPath:'inset(0 50% 0 50%)'},{opacity:1,clipPath:'inset(0 0 0 0)'}],{d:1200,dl:8400,e:E.io})}});

/* WCUTE：メルヘン・かわいい */
defW({no:'16',cat:'WCUTE',name:'くまのぬいぐるみが案内する絵本',en:'Teddy Bear Guide',lead:'ちいさなくまのぬいぐるみが、ページをめくりながらふたりの思い出を紹介してくれる。ゆめかわいいプロフィール。',bg:'#fdf1f4',
use:'<b>かわいい雰囲気が好きなふたり、子どものゲストが多い披露宴</b>に。くまのしぐさに、会場がほっこり笑顔になります。',
tips:['案内役のくまに名前を付けて（例「ノブくま」）、吹き出しで話させると親しみがわきます','くまのしぐさ（手を振る・おじぎ・ジャンプ）を場面ごとに変えると飽きません','ふたりの思い出のぬいぐるみがあれば、その色や形に合わせて描くのもおすすめ'],
p:`ちいさなくまのぬいぐるみが案内役になって、ふたりの思い出を紹介する、ゆめかわいいプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：背景は淡いピンク #FDF1F4 とミント #E6F7F1、くまはキャラメル色 #D9A574（おなかとほっぺは薄いピンク）、リボンはラベンダー #C7B8F5、星とハートは黄色 #FFE08A
・フォント：Zen Maru Gothic（900/500）、英字は Fredoka
・案内役のくま：丸と楕円だけで描いた、オリジナルのくまのぬいぐるみ（実在のキャラクターに似せない）。画面の右下にいて、ふわふわ揺れながら、吹き出しで話す
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 最初に、くまが画面に跳ねて登場し「こんにちは！きょうは ふたりの おはなしを するね」
　2. 写真は、パステルのフレーム（波形のふち・リボン付き）に入れて画面の左〜中央に。写真が変わるたびに、くまが吹き出しでコメント（例「この ころから くいしんぼう だったんだって！」）
　3. 章の区切りでは、くまがページをめくるしぐさをして、画面全体がページのようにめくれる
　4. 背景に、星・ハート・雲の小さなイラストがゆっくり浮かぶ
　5. エンディング：くまがおじぎをして「きてくれて ありがとう！」→ 手を振りながら去っていく`,
run(H,t){const S=H.abs({inset:'0',background:'linear-gradient(135deg,#fdf1f4,#e6f7f1)'});for(let i=0;i<14;i++){const e=H.abs({left:rnd(0,1600)+'px',top:rnd(0,900)+'px',fontSize:rnd(24,50)+'px',color:pick(['#ffe08a','#ffb3c7','#c7b8f5'])},S,pick(['★','♥','☁']));H.a(e,[{translate:'0 0'},{translate:'0 -30px'}],{d:rnd(2000,3500),dir:'alternate',i:Infinity,f:'none',e:E.soft})}
  const fr=H.abs({left:'140px',top:'110px',width:'760px',height:'620px',borderRadius:'40px',background:'#fff',padding:'26px',boxSizing:'border-box',boxShadow:'0 0 0 10px #c7b8f5,0 20px 40px rgba(199,184,245,.4)'},S);const p=pho(H,fr,26,26,708,568,'boy',300,{borderRadius:'24px'});kb(H,p,300,9000);
  H.abs({left:'330px',top:'-40px',width:'100px',height:'60px',background:'#c7b8f5',clipPath:'polygon(0 0,45% 40%,0 100%,100% 0,55% 40%,100% 100%)'},fr);
  const bear=animal(H,S,1180,480,2.4,'#d9a574');H.abs({left:85+'px',top:'230px',width:'120px',height:'100px',borderRadius:'50%',background:'#ffd5c8'},bear);H.a(bear,[{opacity:0,transform:'translateY(300px)'},{opacity:1,transform:'translateY(-40px)',offset:.6},{opacity:1,transform:'none'}],{d:900,dl:200,e:E.out});H.a(bear,[{rotate:'-4deg'},{rotate:'4deg'}],{d:900,dl:1100,i:Infinity,dir:'alternate',f:'none',e:E.soft});
  const sp=(txt,dl,d)=>{const e=H.abs({left:'960px',top:'230px',width:'540px',padding:'26px 30px',boxSizing:'border-box',background:'#fff',borderRadius:'30px',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'36px',lineHeight:'1.5',color:'#8a5a3c',boxShadow:'0 10px 20px rgba(217,165,116,.25)',opacity:0},S,txt);H.a(e,[{opacity:0,transform:'scale(.6)'},{opacity:1,transform:'none',offset:.1},{opacity:1,transform:'none',offset:.9},{opacity:0}],{d,dl,e:E.back})};
  sp('こんにちは！ きょうは ふたりの おはなしを するね',800,3800);sp('この ころから くいしんぼう だったんだって！',4800,4800)}});

defW({no:'17',cat:'WCUTE',name:'パステルのガーランドと風船',en:'Garland & Balloons',lead:'三角の旗のガーランドと、ふわふわ揺れる風船。お誕生日会のように楽しく明るい、パステルのプロフィール。',bg:'#fff7ea',
use:'<b>明るく楽しい披露宴、カジュアルなパーティー形式のウエディング</b>に。家族や友人が多い、にぎやかな会にぴったりです。',
tips:['ガーランドの旗1枚に1文字ずつ入れると、名前やメッセージをかわいく見せられます','風船に年齢の数字（1・2・3…）を入れると、成長が一目で分かって楽しい','色はパステル4〜5色を順番にくり返すと、まとまりのあるにぎやかさに'],
p:`三角の旗のガーランドと風船が揺れる、お誕生日会のように明るいパステルのプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：背景はクリーム #FFF7EA、パステルのピンク #FFC6D3・ミント #BDECD9・水色 #BFE3F7・レモン #FFF0A8・ラベンダー #D9CCF7 をくり返して使う
・フォント：Mochiy Pop One、英字は Fredoka（700）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 画面の上に、三角の旗のガーランドがゆるく弧を描いてかかり、ゆらゆら揺れる。旗1枚に1文字ずつ、章のタイトル（例「N・O・B・U」「Y・U・I」「O・U・R　S・T・O・R・Y」）
　2. 写真は、角の丸いパステル色のフレームに入れて中央に。フレームの角に小さなリボン
　3. 写真の横に、年齢の数字が入った風船が下からふわっと上がってくる（例「3」の風船と「3さい 七五三」）
　4. 写真が変わるときは、紙吹雪がぱっと舞う
　5. エンディング：たくさんの風船が一斉に空へ上がっていき、ガーランドに「THANK YOU」、下に日付`,
run(H,t){const [a]=nm(t);const S=H.abs({inset:'0',background:'#fff7ea'});const cols=['#ffc6d3','#bdecd9','#bfe3f7','#fff0a8','#d9ccf7'];
  const sv=H.svg(1600,200,S);H.sv('path',{d:'M0,40 Q800,150 1600,40',stroke:'#c9a27e','stroke-width':3,fill:'none'},sv);
  const lt=a.toUpperCase().split('');const n=Math.max(lt.length,8);for(let i=0;i<n;i++){const x=80+i*(1440/(n-1));const y=40+110*(1-Math.pow((x-800)/800,2))*.9;const f=H.abs({left:x-50+'px',top:y+'px',width:'100px',height:'110px',background:cols[i%5],clipPath:'polygon(0 0,100% 0,50% 100%)',transformOrigin:'50% 0',display:'flex',justifyContent:'center',paddingTop:'14px',boxSizing:'border-box',fontFamily:"'Fredoka',sans-serif",fontWeight:'700',fontSize:'40px',color:'#7a5a4a'},S,lt[i-Math.floor((n-lt.length)/2)]||'');H.a(f,[{rotate:'-6deg'},{rotate:'6deg'}],{d:1400+i*80,i:Infinity,dir:'alternate',f:'none',e:E.soft})}
  const fr=H.abs({left:'420px',top:'230px',width:'760px',height:'560px',borderRadius:'36px',background:cols[1],padding:'22px',boxSizing:'border-box'},S);const p=pho(H,fr,22,22,716,516,'boy',300,{borderRadius:'22px'});kb(H,p,300,9000);
  const bal=(x,num,c,dl)=>{const b=H.abs({left:x+'px',top:'900px',width:'170px',height:'210px'},S);H.abs({left:'0',top:'0',width:'170px',height:'200px',borderRadius:'50% 50% 48% 48%',background:`radial-gradient(circle at 32% 28%,#fff9 0 10%,transparent 11%),${c}`,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Fredoka',sans-serif",fontWeight:'700',fontSize:'90px',color:'#fff'},b,num);H.abs({left:'84px',top:'200px',width:'2px',height:'200px',background:'#bbb'},b);H.a(b,[{transform:'translateY(0)'},{transform:'translateY(-620px)',offset:.4},{transform:'translateY(-640px) rotate(4deg)',offset:.7},{transform:'translateY(-620px)'}],{d:6000,dl,e:E.out})};
  bal(1240,'8',cols[0],800);bal(160,'3',cols[2],2000);
  T(H,S,{left:'1220px',top:'650px',fontFamily:F.pop,fontSize:'36px',color:'#7a5a4a'},'8さい 夏休み',2600,'pop');
  for(let i=0;i<30;i++){const c=H.abs({left:rnd(300,1300)+'px',top:'-20px',width:'14px',height:'20px',background:pick(cols)},S);H.a(c,[{transform:'translateY(0) rotate(0)'},{transform:`translate(${rnd(-100,100)}px,950px) rotate(${rnd(200,700)}deg)`}],{d:rnd(2500,4000),dl:6000+rnd(0,800),e:E.lin})}}});

defW({no:'18',cat:'WCUTE',name:'お花畑で育つ',en:'Flower Garden',lead:'1年ごとに、土から芽が出て花が咲く。ふたりの成長を、お花畑が育っていく様子に重ねたやさしいプロフィール。',bg:'#eaf6e4',
use:'<b>ガーデンウエディング、花が好きなふたり</b>に。ゆっくり花が咲いていく動きが、両親への感謝のシーンにもよく合います。',
tips:['写真ごとに1本ずつ花が咲く演出にすると、最後に満開のお花畑が完成して感動的','ふたりの誕生花や、会場の装花と同じ花を入れると、ゲストが気づいて喜びます','花の茎がのびる動きはゆっくり（2秒以上）。焦らず育てるのがコツ'],
p:`1年ごとに花が咲いていくお花畑に、ふたりの成長を重ねる、やさしくてかわいいプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：空は淡い水色 #DFF1FB、地面は若草色 #CDE8B5 と土の茶色、花はパステルのピンク・黄色・白・ラベンダー、葉は #8CC084
・フォント：Zen Maru Gothic（500/900）、英字は Great Vibes
・絵のタッチ：水彩のようにやわらかい、丸みのある花のイラスト（Canvas で描く）
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 画面の下に、地面のお花畑の列。写真が変わるごとに、左から順に1本ずつ、芽が出て茎がのびて、花が開く
　2. 写真は、画面の上半分に、丸いフレーム（ふちに小さな花と葉）で
　3. 写真の下に、手書き風のやさしい文字で年齢とひとこと
　4. 新郎の章はピンク以外の花、新婦の章はピンクの花、ふたりの章は2色が混ざった花を咲かせる
　5. ちょうちょが、ときどき写真のまわりを飛ぶ
　6. エンディング：お花畑が満開になり、花びらが風に舞い上がって「ありがとう」と日付`,
run(H,t){const S=H.abs({inset:'0',background:'linear-gradient(#dff1fb 60%,#cde8b5 60%)'});cloud(H,S,180,60,.8);cloud(H,S,1250,90,.7);
  const fr=H.abs({left:'550px',top:'40px',width:'500px',height:'500px',borderRadius:'50%',overflow:'hidden',border:'14px solid #fff',boxShadow:'0 10px 30px rgba(140,192,132,.4)'},S);const p=pho(H,fr,0,0,500,500,'boy',200);kb(H,p,200,9000);
  T(H,S,{left:'0',right:'0',top:'560px',textAlign:'center',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'38px',color:'#5a7a4a'},'5さい　はじめての お花の水やり',900,'fade');
  const cols=['#ffd1dc','#fff1a8','#ffffff','#d9ccf7','#ffb3c7','#bfe3f7'];for(let i=0;i<12;i++){const x=70+i*128,dl=1200+i*600;const st=H.abs({left:x+'px',top:'880px',width:'6px',height:'0',background:'#8cc084',transformOrigin:'bottom'},S);const hgt=rnd(140,220);H.a(st,[{height:'0px',top:'880px'},{height:hgt+'px',top:880-hgt+'px'}],{d:1400,dl,e:E.out});
    const fl=H.abs({left:x-37+'px',top:880-hgt-40+'px',width:'80px',height:'80px'},S);for(let k=0;k<6;k++)H.abs({left:'28px',top:'0',width:'24px',height:'40px',borderRadius:'50%',background:cols[i%6],transformOrigin:'50% 40px',rotate:k*60+'deg',boxShadow:'0 0 0 1px rgba(0,0,0,.03)'},fl);H.abs({left:'28px',top:'28px',width:'24px',height:'24px',borderRadius:'50%',background:'#ffcf5a'},fl);H.a(fl,[{transform:'scale(0) rotate(-90deg)'},{transform:'scale(1) rotate(0)'}],{d:900,dl:dl+1200,e:E.back})}
  const bf=H.abs({left:'0',top:'0',fontSize:'50px',color:'#c7b8f5'},S,'❦');H.a(bf,[{transform:'translate(300px,400px)'},{transform:'translate(700px,250px)'},{transform:'translate(1100px,420px)'},{transform:'translate(1350px,200px)'}],{d:10000,e:E.soft})}});

defW({no:'19',cat:'WCUTE',name:'夜空の星座とお月さま',en:'Starry Constellation',lead:'ひとつずつ灯る星が、ふたりの星座になってつながる。お月さまが見守る、ロマンチックでかわいいプロフィール。',bg:'#1e2150',
use:'<b>夜の披露宴、ロマンチックにしたいふたり</b>に。照明を落とした会場で、星がひとつずつ灯るたびに、うっとりした空気になります。',
tips:['写真を星のように丸く光らせて、星座の点として並べると幻想的です','新郎と新婦の星座がつながって、ハートの形になるラストがおすすめ','月にうさぎのシルエットを入れると、メルヘンさが増します'],
p:`ひとつずつ灯る星がふたりの星座になってつながる、ロマンチックでかわいいプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：夜空は紺 #1E2150 → 紫 #3B2E6E のグラデーション、星は淡い黄色 #FFF3B0、星座の線は白（半透明）、月はクリーム色
・フォント：Zen Maru Gothic（500/900）、英字は Great Vibes
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 画面の右上に、やさしく笑うお月さま（顔のある三日月。うさぎのシルエット付き）。全体を見守っている
　2. 写真1枚ごとに、夜空のどこかに星がひとつ灯り、その星から写真が丸く光りながら大きく現れる。写真の下に、星のような小さな文字で年齢とひとこと
　3. 写真が小さく戻ると、星と星が白い細い線でつながっていく。新郎の章で「新郎座」、新婦の章で「新婦座」の星座が完成する（星座の名前を筆記体で）
　4. ふたりの章では、2つの星座が近づいて、線がつながってハートの形の星座になる
　5. 流れ星が、ときどき空を横切る
　6. エンディング：ハートの星座が明るく光り、「ありがとう」と日付。お月さまがウインク`,
run(H,t){const S=H.abs({inset:'0',background:'linear-gradient(#1e2150,#3b2e6e)'});dots(H,S,90,'#fff3b0');
  const mn=H.abs({left:'1260px',top:'60px',width:'220px',height:'220px',borderRadius:'50%',background:'#fff7d6',boxShadow:'0 0 60px rgba(255,247,214,.6)'},S);H.abs({left:'70px',top:'-20px',width:'220px',height:'220px',borderRadius:'50%',background:'#2a2560'},mn);
  const pts=[[300,620],[420,480],[560,560],[520,700],[700,430]];const sv=H.svg(1600,900,S);
  pts.forEach((q,i)=>{const s=H.abs({left:q[0]-14+'px',top:q[1]-14+'px',width:'28px',height:'28px',borderRadius:'50%',background:'#fff3b0',boxShadow:'0 0 24px #fff3b0',opacity:0},S);H.a(s,[{opacity:0,transform:'scale(0)'},{opacity:1,transform:'scale(1.6)'},{opacity:1,transform:'scale(1)'}],{d:700,dl:600+i*1500,e:E.back});
    if(i){const [x0,y0]=pts[i-1];const l=H.sv('line',{x1:x0,y1:y0,x2:q[0],y2:q[1],stroke:'rgba(255,255,255,.7)','stroke-width':3},sv);const L=Math.hypot(q[0]-x0,q[1]-y0);l.style.strokeDasharray=L;l.animate([{strokeDashoffset:L},{strokeDashoffset:0}],{duration:800,delay:900+i*1500,fill:'both'})}
    if(i<4){const ph=H.abs({left:q[0]-150+'px',top:q[1]-150+'px',width:'300px',height:'300px',borderRadius:'50%',overflow:'hidden',boxShadow:'0 0 60px #fff3b0',opacity:0},S);pho(H,ph,0,0,300,300,['baby','boy','boy','man'][i]);H.a(ph,[{opacity:0,transform:'scale(.1)'},{opacity:1,transform:'scale(1)',offset:.25},{opacity:1,transform:'scale(1)',offset:.75},{opacity:0,transform:'scale(.1)'}],{d:1400,dl:700+i*1500,e:E.out})}});
  T(H,S,{left:'260px',top:'300px',fontFamily:"'Great Vibes',cursive",fontSize:'70px',color:'#fff3b0'},'Groom',7600,'fade');
  const st=H.abs({left:'-100px',top:'100px',width:'140px',height:'3px',background:'linear-gradient(90deg,transparent,#fff)',rotate:'15deg'},S);H.a(st,[{transform:'translate(0,0)'},{transform:'translate(1800px,480px)'}],{d:1400,dl:5200,e:E.in})}});

defW({no:'20',cat:'WCUTE',name:'着せかえ紙人形の成長日記',en:'Paper Doll Diary',lead:'紙で作った人形が、年ごとに服を着がえて大きくなる。切り絵のような手作り感が楽しい、かわいいプロフィール。',bg:'#fbf3e6',
use:'<b>手作り感が好きなふたり、写真が少ないふたり</b>に。紙人形が成長を演じるので、写真がない時代も楽しく埋められます。',
tips:['紙人形は、ふたりの今の髪型や服の色に寄せると「似てる！」と盛り上がります','紙の質感（ふちの白い縁取りと、少しずれた影）を付けると切り絵らしくなります','ランドセル・学ラン・セーラー服など、時代ごとの“着せかえ”がいちばんの見どころ'],
p:`紙で作った着せかえ人形が、年ごとに服を着がえて成長していく、切り絵風のかわいいプロフィールムービー（約6分）を作ってください。
・ふたりの名前：「{T}」
・配色：背景は紙の色 #FBF3E6（うっすら紙のすじ）、パステルの色紙（ピンク・水色・黄色・ミント）、人形の肌はやさしいベージュ
・フォント：Klee One（600）、英字は Fredoka
・絵のタッチ：色紙を切り抜いたような、ふちに白い縁取りと少しずれた影のある平面のイラスト（Canvas で描く）。人形は丸い顔に点の目、ほっぺはピンク
・全体の流れ：
${PCHAP}
・見た目の決まり：
　1. 画面の左側に、新郎（または新婦）の紙人形が立っている。年齢が上がるごとに、人形が少し大きくなり、服が上からひらりと着せかえられる（ベビー服 → 七五三 → ランドセル → 制服 → スーツ／ドレス）
　2. 画面の右側に、その年の写真をマスキングテープで貼る。写真の下に手書き風のコメント
　3. 人形の頭の上に、年齢の数字を切り抜いた色紙で
　4. 章の区切りは、色紙がパタパタとめくれて次の色になる
　5. ふたりの章では、新郎と新婦の紙人形が並んで、手をつなぐ。最後はタキシードとウエディングドレスに着せかえ
　6. エンディング：紙吹雪（色紙の丸）が舞って「ありがとう」と日付`,
run(H,t){const S=H.abs({inset:'0',background:'#fbf3e6'});S.style.backgroundImage='repeating-linear-gradient(90deg,rgba(180,150,110,.05) 0 2px,transparent 2px 9px)';
  const doll=H.abs({left:'240px',top:'180px',width:'360px',height:'640px',transformOrigin:'50% 100%',filter:'drop-shadow(0 0 0 #fff) drop-shadow(6px 6px 0 rgba(0,0,0,.12))'},S);
  H.abs({left:'110px',top:'40px',width:'140px',height:'150px',borderRadius:'50%',background:'#f5d6bd',boxShadow:'0 0 0 6px #fff'},doll);H.abs({left:'104px',top:'26px',width:'152px',height:'70px',borderRadius:'76px 76px 20px 20px',background:'#4a3428'},doll);
  [[150,120],[200,120]].forEach(q=>H.abs({left:q[0]+'px',top:q[1]+'px',width:'10px',height:'10px',borderRadius:'50%',background:'#4a3428'},doll));H.abs({left:'132px',top:'140px',width:'20px',height:'12px',borderRadius:'50%',background:'#ffb3c1',boxShadow:'76px 0 0 #ffb3c1'},doll);
  const outfits=[['#fff1a8','ベビー服'],['#ffc6d3','七五三'],['#bfe3f7','ランドセル'],['#2b3a67','スーツ']];outfits.forEach((o,i)=>{const c=H.abs({left:'80px',top:'190px',width:'200px',height:'360px',borderRadius:'40px 40px 20px 20px',background:o[0],boxShadow:'0 0 0 6px #fff'},doll);H.a(c,[{opacity:0,transform:'translateY(-300px) rotate(-10deg)'},{opacity:1,transform:'none',offset:.12},{opacity:1,transform:'none',offset:.9},{opacity:i===3?1:0}],{d:2500,dl:i*2400,e:E.out,f:i===3?'both':'both'})});
  [80,200].forEach(x=>H.abs({left:x+50+'px',top:'550px',width:'40px',height:'80px',background:'#f5d6bd',boxShadow:'0 0 0 6px #fff'},doll));
  H.a(doll,[{transform:'scale(.6)'},{transform:'scale(.75)',offset:.25},{transform:'scale(.88)',offset:.5},{transform:'scale(1)',offset:.75},{transform:'scale(1)'}],{d:10000,e:'steps(4,start)'});
  ['0','3','7','25'].forEach((n,i)=>{const e=H.abs({left:'380px',top:'60px',width:'110px',height:'110px',borderRadius:'50%',background:['#fff1a8','#ffc6d3','#bfe3f7','#bdecd9'][i],display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Fredoka',sans-serif",fontWeight:'700',fontSize:'60px',color:'#7a5a4a',boxShadow:'0 0 0 6px #fff,6px 6px 0 6px rgba(0,0,0,.1)',opacity:0},S,n);fadeIO(H,e,i*2400,i*2400+2400,200)});
  ['baby','boy','boy','man'].forEach((k,i)=>{const c=H.abs({left:'800px',top:'160px',width:'600px',height:'480px',background:'#fff',padding:'18px',boxSizing:'border-box',rotate:(i%2?3:-3)+'deg',boxShadow:'0 8px 20px rgba(0,0,0,.12)',opacity:0},S);pho(H,c,18,18,564,444,k);H.abs({left:'240px',top:'-16px',width:'130px',height:'34px',background:'rgba(189,236,217,.85)',rotate:'-4deg'},c);H.abs({left:'0',right:'0',top:'500px',textAlign:'center',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'34px',color:'#5a4030'},c,['0さい うまれたよ','3さい 七五三','7さい 小学校に入学','25さい 社会人に'][i]);fadeIO(H,c,i*2400+200,i*2400+2400,300)})}});
