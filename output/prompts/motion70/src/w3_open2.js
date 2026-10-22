/* ===== WEDDING OPENING 11-20：シンプル・メルヘン ===== */
CUR_SEC='e';
const swap=(H,p,words,css,start,each)=>words.forEach((w,i)=>{const e=H.abs(Object.assign({left:'0',right:'0',textAlign:'center',opacity:0},css),p,w);fadeIO(H,e,start+i*each,start+(i+1)*each,350)});

/* WSIMPLE：シンプル・スタイリッシュ */
defW({no:'11',cat:'WSIMPLE',name:'モノクロのタイポグラフィ',en:'Monochrome Typography',lead:'白い画面に、細い英字が一語ずつ入れ替わる。写真に頼らず、言葉と余白だけで魅せる大人のオープニング。',bg:'#fff',
use:'<b>ホテル・レストランウエディング、落ち着いた大人の披露宴</b>に。写真が少なくても、洗練された始まりにできます。',
tips:['フォントは細い1書体だけ。太さと大きさの差で強弱をつけるのが上品さのコツ','言葉は短い英単語で。「Two / Hearts / One / Day」のように、韻やリズムがある並びにすると心地よい','BGMはピアノやストリングスの静かな曲が合います。言葉の切り替えを拍に合わせて'],
p:`白い画面に細い文字の言葉が入れ替わっていく、モノクロのタイポグラフィのオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：白 #FFFFFF の背景、文字は黒 #111、グレー #9A9A9A。色はこれだけ（写真もモノクロにする）
・フォント：英字は Cormorant Garamond（300 とイタリック）、日本語は Shippori Mincho B1（500）
・動きの決まり：文字は「ふわっと現れて、少し止まって、消える」だけ。字間がゆっくり広がる動き（letter-spacing を少しずつ広げる）を加える。派手な動きはしない
・シーン構成：
　0:00〜0:20　画面中央に細い横線が1本、左から右へ引かれる → 線の上に小さく「Welcome」
　0:20〜1:00　英単語が1つずつ、中央に大きく入れ替わる：「Two」→「Hearts」→「One」→「Day」→「Forever」。それぞれ4秒
　1:00〜1:40　写真（モノクロ）が画面の右半分にゆっくり現れ、左半分に縦書きの日本語の短い言葉（例「出会えたことに、ありがとう。」）
　1:40〜2:20　ふたりの名前を1文字ずつタイプするように表示し、その下に結婚式の日付をローマ数字や英語で（例「October 25, 2025」）
　2:20〜2:50　写真を3枚、細い白い余白で区切って横に並べ、1枚ずつゆっくり寄る
　2:50〜3:00　すべてが消えて、中央に「Thank you for coming.」→ ゆっくり白に溶けて終わる`,
run(H,t){const S=H.abs({inset:'0',background:'#fff'});const ln=H.abs({left:'400px',top:'449px',width:'800px',height:'2px',background:'#111',transformOrigin:'left'},S);H.a(ln,[{transform:'scaleX(0)'},{transform:'scaleX(1)'},{transform:'scaleX(1)',opacity:1,offset:.85},{opacity:0}],{d:2200,e:E.io});
  const wl=H.abs({left:'0',right:'0',top:'400px',textAlign:'center',fontFamily:F.serif,fontStyle:'italic',fontSize:'36px',color:'#9a9a9a',opacity:0},S,'Welcome');fadeIO(H,wl,600,2200,300);
  const ws=['Two','Hearts','One','Day'];ws.forEach((w,i)=>{const e=H.abs({left:'0',right:'0',top:'300px',textAlign:'center',fontFamily:F.serif,fontWeight:'300',fontSize:'200px',color:'#111',opacity:0},S,w);H.a(e,[{opacity:0,letterSpacing:'0em'},{opacity:1,offset:.2},{opacity:1,offset:.8},{opacity:0,letterSpacing:'.12em'}],{d:1500,dl:2200+i*1400,e:E.lin})});
  const nmEl=H.abs({left:'0',right:'0',top:'360px',textAlign:'center',fontFamily:F.serif,fontWeight:'300',fontSize:'120px',letterSpacing:'.1em',color:'#111'},S,'');const ch=[...t];let i=0;H.wait(7900,function tk(){if(i<ch.length){nmEl.textContent+=ch[i++];H.wait(90,tk)}});
  T(H,S,{left:'0',right:'0',top:'530px',textAlign:'center',fontFamily:F.serif,fontStyle:'italic',fontSize:'36px',letterSpacing:'.3em',color:'#9a9a9a'},'October 25, 2025',9000,'fade')}});

defW({no:'12',cat:'WSIMPLE',name:'1本の金の線',en:'Golden Line',lead:'左右から伸びた2本の金の線が、画面の真ん中で出会ってひとつになる。ふたりの人生をシンプルに描く。',bg:'#0f0f12',
use:'<b>シンプルでも感動させたいふたり</b>に。「別々の道が、ひとつになる」というメッセージが、言葉なしで伝わります。',
tips:['線は細く（2〜3px）、ゆっくり。速くすると安っぽく見えます','2本の線が出会う瞬間に、小さな光の粒をはじけさせると、そこが見せ場になります','黒の代わりにネイビーや深い緑の背景にすると、会場の色に合わせやすい'],
p:`2本の金色の線が左右から伸びて、中央で出会ってひとつになる、シンプルでスタイリッシュなオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：背景は黒に近い #0F0F12、線と文字は金色（#C9A24B → #F3E3B5 のグラデーションで光沢）、写真はやや暗く落ち着いたトーン
・フォント：英字は Cinzel（400/700）、日本語は Shippori Mincho B1
・シーン構成：
　0:00〜0:30　左端から新郎の線、右端から新婦の線が、ゆっくりと伸びていく。線は途中で小さな曲がり角や丸い点（人生の出来事）を通り、点のところで小さく年号と出来事が表示される（例「1995 誕生」）
　0:30〜1:30　線の点ごとに、写真が線の上下に小さく現れて消える（新郎側・新婦側で交互に）
　1:30〜2:00　2本の線が中央に近づき、出会う瞬間に光の粒がはじける →「2019 出会い」
　2:00〜2:40　1本になった太い線が、画面の右へ進む。線の上に、ふたりの写真が順に現れる
　2:40〜3:00　線が画面いっぱいの円を描いて、その中にふたりの名前と日付 → ゆっくり暗転
・動きはすべてゆっくり。線の先には、小さく光る点を付ける`,
run(H,t){const S=H.abs({inset:'0',background:'#0f0f12'});const G='linear-gradient(90deg,#c9a24b,#f3e3b5,#c9a24b)';
  const l1=H.abs({left:'0',top:'449px',width:'800px',height:'3px',background:G,transformOrigin:'left',boxShadow:'0 0 12px rgba(243,227,181,.6)'},S);const l2=H.abs({left:'800px',top:'449px',width:'800px',height:'3px',background:G,transformOrigin:'right',boxShadow:'0 0 12px rgba(243,227,181,.6)'},S);
  [l1,l2].forEach(l=>H.a(l,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:4200,e:E.soft}));
  [[200,'1995　誕生',0],[1400,'1996　誕生',1],[420,'2014　上京',0],[1180,'2016　就職',1]].forEach((q,i)=>{const d=H.abs({left:q[0]-7+'px',top:'443px',width:'14px',height:'14px',borderRadius:'50%',background:'#f3e3b5',boxShadow:'0 0 14px #f3e3b5',opacity:0},S);H.a(d,[{opacity:0,transform:'scale(0)'},{opacity:1,transform:'scale(1)'}],{d:400,dl:900+i*700,e:E.back});T(H,S,{left:q[0]-150+'px',width:'300px',textAlign:'center',top:i%2?'480px':'390px',fontFamily:F.min,fontSize:'28px',letterSpacing:'.1em',color:'#c9a24b'},q[1],1100+i*700,'fade')});
  for(let k=0;k<26;k++){const s=H.abs({left:'797px',top:'447px',width:'6px',height:'6px',borderRadius:'50%',background:'#f3e3b5'},S);const a=rnd(0,Math.PI*2),r=rnd(80,260);H.a(s,[{opacity:1,transform:'translate(0,0)'},{opacity:0,transform:`translate(${Math.cos(a)*r}px,${Math.sin(a)*r}px)`}],{d:1600,dl:4200})}
  const c=H.abs({left:'500px',top:'150px',width:'600px',height:'600px',borderRadius:'50%',border:'3px solid #c9a24b',opacity:0},S);H.a(c,[{opacity:0,transform:'scale(.2)'},{opacity:1,transform:'scale(1)'}],{d:1400,dl:5600,e:E.out});
  T(H,S,{left:'0',right:'0',top:'380px',textAlign:'center',fontFamily:"'Cinzel',serif",fontSize:'84px',letterSpacing:'.1em',background:G,WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'},t.toUpperCase(),6600,'fade');T(H,S,{left:'0',right:'0',top:'500px',textAlign:'center',fontFamily:"'Cinzel',serif",fontSize:'30px',letterSpacing:'.4em',color:'#c9a24b'},'10 . 25 . 2025',7400,'fade')}});

defW({no:'13',cat:'WSIMPLE',name:'ホテルの招待状風・黒と金のモノグラム',en:'Luxury Monogram',lead:'黒と金、紋章のようなモノグラム。高級ホテルの招待状を開くような、格式あるオープニング。',bg:'#0b0b0b',
use:'<b>ホテル・ゲストハウスでの格式ある披露宴</b>に。親族や会社関係のゲストが多くても、上品に始められます。',
tips:['モノグラムは、ふたりのイニシャルを重ねて円や月桂樹の枠で囲むと、一気に格式が出ます','金色は面積を小さく。細い線・文字・小さな粒だけに使います','招待状の文面風に「〜様」「謹んでご案内申し上げます」を入れると、ホテルらしい丁寧さに'],
p:`高級ホテルの招待状のような、黒と金のモノグラムが印象的なオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：黒 #0B0B0B、金（#B8913F → #F3E3B5 → #C9A24B の光沢グラデーション）、アイボリー #F4EFE6
・フォント：英字は Cinzel と Great Vibes（筆記体）、日本語は Shippori Mincho B1（500/800）
・シーン構成：
　0:00〜0:20　黒い画面に、金の細い線で描かれた月桂樹の枠が、左右から描かれていく。中央にふたりのイニシャルを重ねたモノグラム（例「N」と「Y」を重ねて）が光とともに現れる
　0:20〜0:50　金の粒がゆっくり舞う中、筆記体で「Welcome to our Wedding」
　0:50〜1:40　招待状のカードが画面中央に現れ、封蝋（金のシーリングスタンプ）が割れて開く。カードの中に、丁寧な日本語のメッセージ（「本日はご多用のところ ご臨席を賜り 誠にありがとうございます」）
　1:40〜2:30　写真を、金の細い額縁に入れて3〜4枚。1枚ずつゆっくり寄り、額縁の下に小さく英字のキャプション
　2:30〜2:50　ふたりの名前（Cinzel で大きく）と日付・会場名
　2:50〜3:00　モノグラムが再び現れて、金の光がゆっくり消えて暗転`,
run(H,t){const [a,b]=nm(t);const S=H.abs({inset:'0',background:'radial-gradient(circle at 50% 45%,#1c1a16,#0b0b0b 65%)'});const G='linear-gradient(110deg,#b8913f,#f3e3b5 45%,#c9a24b 60%,#8a6a2f)';dots(H,S,40,'#f3e3b5');
  const sv=H.svg(1600,900,S);[[1,-1],[-1,1]].forEach(([s],k)=>{for(let i=0;i<8;i++){const ang=(-70+i*20)*Math.PI/180;const x=800+s*Math.cos(ang)*230,y=380+Math.sin(ang)*230;const e=H.sv('ellipse',{cx:x,cy:y,rx:10,ry:24,fill:'none',stroke:'#c9a24b','stroke-width':2,transform:`rotate(${s*(i*20-70)+90} ${x} ${y})`},sv);e.animate([{opacity:0},{opacity:1}],{duration:400,delay:200+i*120,fill:'both'})}});
  const mono=H.abs({left:'0',right:'0',top:'250px',textAlign:'center',fontFamily:"'Cinzel',serif",fontWeight:'700',fontSize:'210px',lineHeight:'1',background:G,WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent',opacity:0},S,a[0].toUpperCase()+b[0].toUpperCase());H.a(mono,[{opacity:0,filter:'blur(10px)'},{opacity:1,filter:'blur(0)'}],{d:1400,dl:1200});
  T(H,S,{left:'0',right:'0',top:'560px',textAlign:'center',fontFamily:"'Great Vibes',cursive",fontSize:'80px',color:'#f3e3b5'},'Welcome to our Wedding',2800,'fade');
  T(H,S,{left:'0',right:'0',top:'690px',textAlign:'center',fontFamily:"'Cinzel',serif",fontSize:'32px',letterSpacing:'.35em',color:'#c9a24b'},t.toUpperCase(),3800,'fade');
  const card=H.abs({left:'520px',top:'140px',width:'560px',height:'620px',background:'#f4efe6',boxShadow:'0 30px 80px rgba(0,0,0,.6)',opacity:0},S);H.a(card,[{opacity:0,transform:'translateY(60px)'},{opacity:1,transform:'none'}],{d:900,dl:6200});
  H.abs({left:'30px',top:'30px',right:'30px',bottom:'30px',border:'1px solid #c9a24b'},card);H.abs({left:'0',right:'0',top:'120px',textAlign:'center',fontFamily:F.min,fontWeight:'500',fontSize:'30px',lineHeight:'2.1',color:'#3a2f22',whiteSpace:'pre-line'},card,'本日はご多用のところ\nご臨席を賜り\n誠にありがとうございます');
  H.abs({left:'0',right:'0',top:'430px',textAlign:'center',fontFamily:"'Great Vibes',cursive",fontSize:'54px',color:'#b8913f'},card,t);const seal=H.abs({left:'235px',top:'510px',width:'90px',height:'90px',borderRadius:'50%',background:'radial-gradient(circle at 35% 30%,#e8c97a,#a07a35)',boxShadow:'0 4px 10px rgba(0,0,0,.3)'},card)}});

defW({no:'14',cat:'WSIMPLE',name:'グリッドと大きな数字',en:'Swiss Grid Kinetic',lead:'白地に黒の格子、大きな日付の数字が動き出す。デザイン誌のような、知的でスタイリッシュな始まり。',bg:'#f2f2f0',
use:'<b>デザインや建築が好きなふたり、モダンな会場</b>に。日付そのものを主役にした、印象に残るオープニングです。',
tips:['フォントは太いゴシック1種類（Montserrat 800 など）。数字を画面からはみ出すほど大きくすると迫力が出ます','差し色は1色だけ（朱色・ブルーなど）。会場の装花の色に合わせると統一感が出ます','写真は格子のマス目に合わせて四角く切り抜くと、デザインが崩れません'],
p:`白地に黒い格子（グリッド）と大きな数字が動く、デザイン誌のようなスタイリッシュなオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：オフホワイト #F2F2F0、黒 #111、差し色は朱色 #E8442E（1か所ずつだけ）
・フォント：Montserrat（800 と 300）、日本語は Noto Sans JP（700）
・画面の決まり：12列×7行の細い黒い格子（線の太さ1px）が画面全体に敷かれ、すべての要素は格子のマス目にぴったり合わせて置く
・シーン構成：
　0:00〜0:15　格子の線が、縦・横の順に一本ずつ素早く引かれていく
　0:15〜0:45　結婚式の日付の数字（例「10」「25」「2025」）が、格子をまたぐほど巨大に、上下からスライドして入れ替わる。数字の一部が朱色
　0:45〜1:30　格子のマス目が開いて、写真が四角く現れる（3〜6マス分）。写真の横のマスに、小さな英字のキャプション（例「01 / FIRST MEET」）
　1:30〜2:20　マス目単位で、写真と文字がパズルのように入れ替わる。テンポよく、拍に合わせて
　2:20〜2:50　ふたりの名前が格子いっぱいに大きく、文字ごとに1マスずつ埋まるように表示
　2:50〜3:00　格子の線が逆の順に消えて、白い画面に小さく日付 → 終わり`,
run(H,t){const S=H.abs({inset:'0',background:'#f2f2f0'});for(let i=1;i<12;i++){const l=H.abs({left:i*133.3+'px',top:'0',width:'1px',height:'900px',background:'#111',transformOrigin:'top'},S);H.a(l,[{transform:'scaleY(0)'},{transform:'scaleY(1)'}],{d:400,dl:i*50})}for(let j=1;j<7;j++){const l=H.abs({left:'0',top:j*128.6+'px',width:'1600px',height:'1px',background:'#111',transformOrigin:'left'},S);H.a(l,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:400,dl:600+j*50})}
  const big=(txt,dl,col)=>{const e=H.abs({left:'60px',top:'60px',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'560px',lineHeight:'1',letterSpacing:'-.04em',color:col||'#111',opacity:0},S,txt);H.a(e,[{opacity:0,transform:'translateY(200px)'},{opacity:1,transform:'none',offset:.2},{opacity:1,transform:'none',offset:.8},{opacity:0,transform:'translateY(-200px)'}],{d:1600,dl,e:E.io})};
  big('10',1100);big('25',2600,'#e8442e');big('2025',4100);
  const ph=pho(H,S,666.6,257,533,386,'couple',5600);H.abs({left:'1213px',top:'270px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'22px',letterSpacing:'.2em',color:'#111'},S,'01 / FIRST MEET');
  [...t.toUpperCase()].forEach((c,i)=>{if(i>11)return;T(H,S,{left:i*133.3+'px',top:'643px',width:'133px',height:'128px',lineHeight:'128px',textAlign:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'800',fontSize:'96px',color:c==='&'?'#e8442e':'#111'},c,7200+i*90,'pop')})}});

defW({no:'15',cat:'WSIMPLE',name:'余白のフォトギャラリー',en:'Gallery White',lead:'白い壁の美術館に、ふたりの写真が1枚ずつ展示されていく。広い余白と細い文字の、静かなオープニング。',bg:'#f6f5f2',
use:'<b>写真がきれいなふたり（前撮り・フォトウェディング）</b>に。写真をいちばん美しく見せる、引き算のデザインです。',
tips:['写真のまわりの余白は、写真と同じくらいの広さを取るのがギャラリーらしく見せるコツ','キャプションは「No.01 / 2019 / Kyoto」のように、作品の展示札風にすると洗練されます','前撮りの写真がある場合は、これがいちばん映えます'],
p:`白い壁の美術館に写真が1枚ずつ展示されていくような、余白の美しいオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：壁はオフホワイト #F6F5F2、文字は濃いグレー #333、展示札は薄いグレー #DDD の細い線
・フォント：英字は Montserrat（300）、日本語は Noto Sans JP（300）
・見た目：写真は画面の中央に、上下左右に大きな余白をとって1枚ずつ。写真の下に、展示札のような小さなキャプション（例「No.03　2019　Kyoto」と短い一言）。写真には薄い影
・カメラ：美術館の中を横に歩いているように、画面全体がゆっくり右から左へ流れ、次の写真が現れる
・シーン構成：
　0:00〜0:20　白い壁に、細い文字で展覧会のタイトル「{T}　Exhibition」と会期（結婚式の日付）
　0:20〜2:30　写真を12〜15枚、1枚ずつ展示（1枚8〜10秒）。ときどき2枚並び・3枚並びの壁もはさむ
　2:30〜2:50　最後の壁に、ふたりの写真を大きく1枚と「Thank you for visiting.」
　2:50〜3:00　画面がゆっくり白くなって終わる`,
run(H,t){const S=H.abs({inset:'0',background:'#f6f5f2'});const W=H.abs({left:'0',top:'0',width:'4800px',height:'900px'},S);
  H.abs({left:'520px',top:'360px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'64px',letterSpacing:'.2em',color:'#333'},W,t);H.abs({left:'524px',top:'460px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'26px',letterSpacing:'.4em',color:'#999'},W,'EXHIBITION — 2025.10.25');
  [['couple','No.01　2019　Kyoto'],['couple','No.02　2021　Okinawa'],['couple','No.03　2024　Tokyo']].forEach((q,i)=>{const x=1900+i*1000;pho(H,W,x,180,600,420,q[0],null,{boxShadow:'0 20px 40px rgba(0,0,0,.12)'});H.abs({left:x+'px',top:'640px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'24px',letterSpacing:'.15em',color:'#333',borderTop:'1px solid #ddd',paddingTop:'14px',width:'600px'},W,q[1])});
  H.a(W,[{transform:'translateX(0)'},{transform:'translateX(0)',offset:.15},{transform:'translateX(-2800px)'}],{d:10000,e:E.soft})}});

/* WCUTE：メルヘン・かわいい */
const cloud=(H,p,x,y,s,c)=>{const w=H.abs({left:x+'px',top:y+'px',width:200*s+'px',height:80*s+'px'},p);[[0,30,80],[50,0,100],[120,25,80]].forEach(q=>H.abs({left:q[0]*s+'px',top:q[1]*s+'px',width:q[2]*s+'px',height:q[2]*s+'px',borderRadius:'50%',background:c||'#fff'},w));return w};
const animal=(H,p,x,y,s,c,ear)=>{const w=H.abs({left:x+'px',top:y+'px',width:120*s+'px',height:150*s+'px'},p);
  if(ear==='rabbit'){[30,70].forEach(ex=>H.abs({left:ex*s-12*s+'px',top:'0',width:24*s+'px',height:60*s+'px',borderRadius:'50%',background:c},w))}else{[22,78].forEach(ex=>H.abs({left:ex*s-16*s+'px',top:22*s+'px',width:32*s+'px',height:32*s+'px',borderRadius:'50%',background:c},w))}
  H.abs({left:10*s+'px',top:40*s+'px',width:100*s+'px',height:90*s+'px',borderRadius:'50%',background:c},w);[40,72].forEach(ex=>H.abs({left:ex*s+'px',top:78*s+'px',width:9*s+'px',height:11*s+'px',borderRadius:'50%',background:'#4a3428'},w));H.abs({left:30*s+'px',top:98*s+'px',width:14*s+'px',height:8*s+'px',borderRadius:'50%',background:'#ffb3c1',boxShadow:`${46*s}px 0 0 #ffb3c1`},w);return w};

defW({no:'16',cat:'WCUTE',name:'森の動物たちの絵本',en:'Forest Friends',lead:'うさぎやくまが、ふたりの名前の旗を持って森を行進する。子どもも大人も笑顔になる、絵本のオープニング。',bg:'#dff0d8',
use:'<b>子どものゲストが多い披露宴、ガーデンウエディング</b>に。かわいい動物たちが、会場をやさしい空気にしてくれます。',
tips:['動物は丸と楕円だけで描くと、ゆるくてかわいい雰囲気になります','ふたりを動物にたとえる（新郎＝くま、新婦＝うさぎ）と、会場から「似てる！」の声が','パステルの色数は4つまで。背景は淡いミントやクリームに'],
p:`森の動物たちがふたりの名前の旗を持って行進する、絵本のようなメルヘンでかわいいオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：淡いミント #DFF0D8、クリーム #FFF8E7、木の緑 #8CC084、うさぎの白、くまの茶 #C8956D、リボンのピンク #FFB3C7
・フォント：Zen Maru Gothic（900/500）、英字は Fredoka（700）
・絵のタッチ：丸と楕円で描いた、ゆるくてかわいい動物（うさぎ・くま・りす・小鳥）。線のない、色だけの絵本風。Canvas で描く
・シーン構成：
　0:00〜0:20　絵本の表紙のように、森の木々が左右から開いて、タイトル「ふたりの けっこんしき」
　0:20〜1:00　森の小道を、動物たちが1匹ずつ跳ねながら行進。くま（新郎役）とうさぎ（新婦役）が、ふたりの名前の旗を持っている
　1:00〜1:50　木の枝にかかった額縁に、ふたりの写真が順に現れる。小鳥が額縁をくわえて運んでくる演出
　1:50〜2:30　動物たちが輪になって踊り、花びらと音符が舞う。中央に「おめでとう！」
　2:30〜2:50　くまとうさぎが向かい合って、ハートが浮かぶ。下にふたりの名前と日付
　2:50〜3:00　「まもなく ふたりが にゅうじょうします」→ 森の木々が閉じて終わる`,
run(H,t){const S=H.abs({inset:'0',background:'linear-gradient(#e6f5ff,#dff0d8 60%)'});cloud(H,S,200,80,1);cloud(H,S,1150,120,.8);
  for(let i=0;i<9;i++){const x=i*200-40;H.abs({left:x+70+'px',top:'470px',width:'26px',height:'140px',background:'#a07a55'},S);H.abs({left:x+'px',top:'300px',width:'170px',height:'210px',borderRadius:'50%',background:i%2?'#8cc084':'#9fd08f'},S)}
  H.abs({left:'0',right:'0',top:'640px',height:'260px',background:'#c4e3a8'},S);H.abs({left:'0',right:'0',top:'700px',height:'80px',background:'#f2e2c0',borderRadius:'40px'},S);
  const par=H.abs({left:'0',top:'560px',width:'1600px',height:'220px'},S);
  const bear=animal(H,par,0,30,1.2,'#c8956d'),rab=animal(H,par,170,30,1.1,'#fff','rabbit'),sq=animal(H,par,330,60,.8,'#e8a87c');
  const flag=H.abs({left:'120px',top:'-80px',width:'240px',height:'70px',background:'#ffb3c7',borderRadius:'10px',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Fredoka',sans-serif",fontWeight:'700',fontSize:'34px',color:'#fff'},par,t);H.abs({left:'230px',top:'-10px',width:'6px',height:'70px',background:'#a07a55'},par);
  H.a(par,[{transform:'translateX(-500px)'},{transform:'translateX(620px)'}],{d:6000,e:E.lin});[bear,rab,sq].forEach((a,i)=>H.a(a,[{translate:'0 0'},{translate:'0 -26px'},{translate:'0 0'}],{d:500,dl:i*120,i:Infinity,f:'none',e:E.soft}));
  const tt=T(H,S,{left:'0',right:'0',top:'120px',textAlign:'center',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'90px',color:'#fff',textShadow:'0 6px 0 #ffb3c7,0 0 30px rgba(255,179,199,.6)'},'ふたりの けっこんしき',300,'pop');
  for(let i=0;i<14;i++){const f=H.abs({left:rnd(0,1600)+'px',top:'-30px',fontSize:rnd(24,44)+'px',color:pick(['#ffb3c7','#fff','#ffd97d'])},S,pick(['✿','♪','❀']));H.a(f,[{transform:'translateY(0) rotate(0)'},{transform:`translateY(950px) rotate(${rnd(180,540)}deg)`}],{d:rnd(5000,8000),dl:6000+rnd(0,3000),e:E.lin})}
  T(H,S,{left:'0',right:'0',top:'260px',textAlign:'center',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'70px',color:'#ff8fab'},'おめでとう！',6500,'pop')}});

defW({no:'17',cat:'WCUTE',name:'パステルのお菓子の国',en:'Sweets Land',lead:'マカロンやケーキが空からぽんぽん降ってきて、ふたりの名前のケーキが完成する。ゆめかわいいオープニング。',bg:'#fde8ef',
use:'<b>かわいいもの好きの新婦、デザートビュッフェのある披露宴</b>に。女性ゲストから「かわいい！」の声が上がります。',
tips:['色はパステルのピンク・ミント・ラベンダー・レモンの4色で統一すると、ゆめかわいい世界に','お菓子が弾んで着地する動き（バウンド）を入れると、楽しさが倍増します','最後のウエディングケーキの上に、ふたりの名前のプレートをのせましょう'],
p:`パステルカラーのお菓子が降ってきて、ふたりのウエディングケーキが完成する、ゆめかわいいオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：背景はピンク #FDE8EF とラベンダー #E8E0F8 のグラデーション、お菓子はパステルのピンク #FFB3C7・ミント #B5EAD7・ラベンダー #C7B8F5・レモン #FFF1A8、白いクリーム
・フォント：Mochiy Pop One、英字は Fredoka（700）
・絵のタッチ：丸みのある、つやつやしたお菓子のイラスト（Canvas で描く。光のハイライトを入れる）
・シーン構成：
　0:00〜0:20　空からマカロン・キャンディ・カップケーキが次々に降ってきて、弾んで着地する
　0:20〜0:50　お菓子の山の上に、タイトル「Sweet Wedding」がクリームで書かれるように現れる
　0:50〜1:50　マカロンの間に、丸く切り抜いたふたりの写真が順に現れる（周りにスプリンクルが散る）
　1:50〜2:30　3段のウエディングケーキが下から1段ずつ積み上がり、いちご・リボン・ハートで飾られていく
　2:30〜2:50　ケーキのいちばん上に、ふたりの名前のチョコプレートがのる。日付も
　2:50〜3:00　キラキラが舞って、「まもなく入場です」→ ピンクの光で終わる`,
run(H,t){const S=H.abs({inset:'0',background:'linear-gradient(160deg,#fde8ef,#e8e0f8)'});const cols=['#ffb3c7','#b5ead7','#c7b8f5','#fff1a8'];
  for(let i=0;i<16;i++){const x=rnd(40,1520),c=pick(cols),mac=H.abs({left:x+'px',top:'-120px',width:'90px',height:'64px'},S);H.abs({left:'0',top:'0',width:'90px',height:'28px',borderRadius:'45px 45px 14px 14px',background:`radial-gradient(circle at 35% 30%,#fff8,transparent 40%),${c}`},mac);H.abs({left:'4px',top:'26px',width:'82px',height:'10px',background:'#fffaf2',borderRadius:'5px'},mac);H.abs({left:'0',top:'36px',width:'90px',height:'28px',borderRadius:'14px 14px 45px 45px',background:c},mac);
    H.a(mac,[{transform:'translateY(0)'},{transform:`translateY(${rnd(760,880)}px)`,offset:.7},{transform:`translateY(${rnd(700,780)}px)`,offset:.85},{transform:`translateY(${rnd(770,830)}px)`}],{d:1400,dl:i*180,e:E.in})}
  T(H,S,{left:'0',right:'0',top:'90px',textAlign:'center',fontFamily:"'Fredoka',sans-serif",fontWeight:'700',fontSize:'110px',color:'#fff',textShadow:'0 6px 0 #ffb3c7,0 12px 20px rgba(255,143,171,.4)'},'Sweet Wedding',2800,'pop');
  const ck=H.abs({left:'560px',top:'0',width:'480px',height:'900px'},S);[[0,620,480,170,'#fffaf2'],[60,470,360,150,'#ffe3ec'],[120,340,240,130,'#fffaf2']].forEach((q,i)=>{const tier=H.abs({left:q[0]+'px',top:q[1]+'px',width:q[2]+'px',height:q[3]+'px',borderRadius:'18px',background:q[4],boxShadow:'inset 0 -14px 0 rgba(255,179,199,.5)'},ck);H.abs({left:'0',top:'0',width:'100%',height:'26px',background:'repeating-radial-gradient(circle at 20px 0,#fff 0 18px,transparent 19px) 0 0/40px 26px'},tier);H.a(tier,[{opacity:0,transform:'translateY(200px)'},{opacity:1,transform:'none'}],{d:700,dl:4400+i*600,e:E.back});for(let k=0;k<4;k++)H.abs({left:30+k*(q[2]-60)/3+'px',top:'40px',width:'26px',height:'26px',borderRadius:'50% 50% 50% 50%/60% 60% 40% 40%',background:'#ff5c7a'},tier)});
  const pl=H.abs({left:'110px',top:'250px',width:'260px',height:'80px',borderRadius:'12px',background:'#6b3f2a',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:"'Fredoka',sans-serif",fontWeight:'700',fontSize:'36px',color:'#fff1d0',opacity:0},ck,t);H.a(pl,[{opacity:0,transform:'translateY(-200px) rotate(-8deg)'},{opacity:1,transform:'none'}],{d:800,dl:6600,e:E.back})}});

defW({no:'18',cat:'WCUTE',name:'シャボン玉の空',en:'Bubble Sky',lead:'青空に浮かぶシャボン玉の中に、ふたりの思い出の写真。ふわふわと漂って、パチンとはじけて次の場面へ。',bg:'#cfe9fb',
use:'<b>ナチュラル・ガーデン・海辺のウエディング</b>に。やさしくて透明感のある、ふんわりしたオープニングです。',
tips:['シャボン玉は、虹色の薄いふちと、白いハイライトの2つで表現するとそれらしく見えます','写真は丸く切り抜いて、シャボン玉の中で少し揺らすと浮遊感が出ます','はじける瞬間に小さな光の粒を散らすと、場面の切り替えが気持ちよくなります'],
p:`青空に浮かぶシャボン玉の中にふたりの写真が入って漂う、透明感のあるかわいいオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：空色 #CFE9FB → 白 のグラデーション、白い雲、シャボン玉のふちは虹色（ピンク・水色・黄色・紫がゆっくり変わる）
・フォント：Zen Maru Gothic（500/900）、英字は Great Vibes
・シャボン玉の見た目：ほぼ透明な円、虹色の細いふち、左上に白いハイライト。中の写真は丸く切り抜き、半透明に重ねる
・シーン構成：
　0:00〜0:20　画面の下から、大小のシャボン玉がたくさん浮かび上がる。雲がゆっくり流れる
　0:20〜0:40　大きなシャボン玉が中央で止まり、中に筆記体で「Welcome」と、ふたりの名前
　0:40〜2:20　写真入りのシャボン玉が1つずつ、ふわふわと揺れながら上がってくる（新郎の写真→新婦の写真→ふたりの写真）。中央で少し止まって、写真の下にひとことコメント。パチンとはじけて光の粒が散り、次のシャボン玉へ
　2:20〜2:50　2つのシャボン玉がくっついて、ハートの形に。中にふたりの写真と日付
　2:50〜3:00　すべてのシャボン玉が一斉にはじけて、白い光で終わる`,
run(H,t){const S=H.abs({inset:'0',background:'linear-gradient(#a9d8f5,#e9f6ff 80%)'});cloud(H,S,100,120,1.2);cloud(H,S,1200,200,.9);const cl=cloud(H,S,600,60,.7);H.a(cl,[{transform:'translateX(0)'},{transform:'translateX(300px)'}],{d:10000,e:E.lin});
  const bub=(x,s,dl,d,k)=>{const b=H.abs({left:x+'px',top:'900px',width:s+'px',height:s+'px',borderRadius:'50%',border:'3px solid transparent',background:'radial-gradient(circle at 30% 25%,rgba(255,255,255,.9) 0 8%,transparent 9%),radial-gradient(circle,rgba(255,255,255,.08) 60%,rgba(255,255,255,.35)) padding-box,conic-gradient(#ffb3c7,#a0e7ff,#fff3a0,#d2b8ff,#ffb3c7) border-box',overflow:'hidden'},S);if(k){const p=pho(H,b,0,0,s,s,k);p.style.opacity='.75';p.style.borderRadius='50%';b.appendChild(H.abs({left:s*.18+'px',top:s*.12+'px',width:s*.2+'px',height:s*.12+'px',borderRadius:'50%',background:'rgba(255,255,255,.8)'},b))}
    H.a(b,[{transform:'translateY(0)'},{transform:`translateY(-${900+s}px) translateX(${rnd(-80,80)}px)`}],{d,dl,e:E.lin});return b};
  for(let i=0;i<18;i++)bub(rnd(0,1550),rnd(40,140),rnd(0,6000),rnd(6000,9000));
  const big=H.abs({left:'550px',top:'200px',width:'500px',height:'500px',borderRadius:'50%',border:'4px solid transparent',background:'radial-gradient(circle at 30% 25%,rgba(255,255,255,.9) 0 6%,transparent 7%),radial-gradient(circle,rgba(255,255,255,.12) 60%,rgba(255,255,255,.4)) padding-box,conic-gradient(#ffb3c7,#a0e7ff,#fff3a0,#d2b8ff,#ffb3c7) border-box',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'},S);
  H.el('div',{fontFamily:"'Great Vibes',cursive",fontSize:'90px',color:'#fff',textShadow:'0 2px 10px rgba(80,140,200,.5)'},big,'Welcome');H.el('div',{fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'40px',color:'#5a8fc0'},big,t);
  H.a(big,[{opacity:0,transform:'translateY(500px) scale(.6)'},{opacity:1,transform:'none',offset:.3},{opacity:1,transform:'translateY(-14px)',offset:.85},{opacity:0,transform:'scale(1.3)'}],{d:5000,dl:400,e:E.soft});
  const pb=H.abs({left:'600px',top:'200px',width:'400px',height:'400px',borderRadius:'50%',overflow:'hidden',border:'4px solid #fff8',opacity:0},S);pho(H,pb,0,0,400,400,'boy');H.a(pb,[{opacity:0,transform:'translateY(500px)'},{opacity:1,transform:'none',offset:.4},{opacity:1,transform:'translateY(-10px)',offset:.9},{opacity:0,transform:'scale(1.4)'}],{d:4000,dl:5600,e:E.soft});
  T(H,S,{left:'0',right:'0',top:'650px',textAlign:'center',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'44px',color:'#5a8fc0'},'しんろう　3さいの なつ',6800,'fade')}});

defW({no:'19',cat:'WCUTE',name:'星空とおとぎ話のお城',en:'Fairytale Castle',lead:'夜空に流れ星、丘の上のお城に明かりが灯る。おとぎ話の始まりのような、魔法のオープニング。',bg:'#1b1640',
use:'<b>夜の披露宴、テーマパーク好きのふたり</b>に。会場の照明を落として流すと、まるで魔法の世界の始まりです。',
tips:['お城はシルエットだけで十分。窓の明かりを1つずつ灯すと物語が動き出します','流れ星の軌跡に、きらきらの粒を残すとおとぎ話らしくなります','実在のテーマパークのお城やロゴには似せず、オリジナルのお城にしましょう'],
p:`夜空の下、丘の上のお城に明かりが灯り、流れ星が名前を描く、おとぎ話のようなオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：夜空は濃い紫 #1B1640 → 群青 #2B3A7A のグラデーション、星と光は淡い金 #FFE9A8、お城のシルエットは紺 #120F2E、窓の明かりは暖かいオレンジ
・フォント：英字は Great Vibes と Cinzel、日本語は Shippori Mincho B1
・シーン構成：
　0:00〜0:20　真っ暗な画面に、星が1つずつまたたき始める。丘の上にお城のシルエットが浮かぶ（実在のお城やテーマパークには似せない、オリジナルの形）
　0:20〜0:45　お城の窓に、下から順に明かりが灯る。お城の上に小さな花火
　0:45〜1:10　流れ星が夜空を横切り、その軌跡がきらきらの粒で筆記体のふたりの名前を描く
　1:10〜2:20　夜空の星座がつながって、星の線で描いた額縁が生まれ、その中にふたりの写真が順に現れる（「Once upon a time…」から始まる短い言葉と一緒に）
　2:20〜2:50　お城の前で花火が大きく上がり、「and they lived happily ever after」と日付
　2:50〜3:00　星の光が集まって画面中央で光り、白くなって終わる`,
run(H,t){const S=H.abs({inset:'0',background:'linear-gradient(#1b1640,#2b3a7a 75%,#3a4a8a)'});dots(H,S,80,'#ffe9a8');
  const ca=H.svg(1600,900,S);H.sv('path',{d:'M0,900 L0,760 C300,700 500,690 800,690 C1100,690 1300,700 1600,760 L1600,900 Z',fill:'#120f2e'},ca);
  const cs=H.abs({left:'640px',top:'360px',width:'320px',height:'340px'},S);[[0,140,70,200],[250,140,70,200],[60,60,200,280],[125,0,70,140]].forEach(q=>H.abs({left:q[0]+'px',top:q[1]+'px',width:q[2]+'px',height:q[3]+'px',background:'#120f2e'},cs));[[0,100,70],[250,100,70],[125,-50,70]].forEach(q=>H.abs({left:q[0]-6+'px',top:q[1]-10+'px',width:q[2]+12+'px',height:'60px',background:'#120f2e',clipPath:'polygon(50% 0,100% 100%,0 100%)'},cs));
  [[30,200],[275,200],[100,150],[200,150],[150,230],[150,60],[100,250],[200,250]].forEach((q,i)=>{const w=H.abs({left:q[0]+'px',top:q[1]+'px',width:'18px',height:'26px',borderRadius:'9px 9px 0 0',background:'#ffb04a',boxShadow:'0 0 14px #ffb04a',opacity:0},cs);H.a(w,[{opacity:0},{opacity:1}],{d:300,dl:1200+i*250})});
  const st=H.abs({left:'-100px',top:'120px',width:'120px',height:'4px',borderRadius:'2px',background:'linear-gradient(90deg,transparent,#fff)',boxShadow:'0 0 12px #fff',rotate:'12deg'},S);H.a(st,[{transform:'translate(0,0)'},{transform:'translate(1800px,380px)'}],{d:1600,dl:3600,e:E.in});
  const nmEl=H.abs({left:'0',right:'0',top:'130px',textAlign:'center',fontFamily:"'Great Vibes',cursive",fontSize:'150px',color:'#ffe9a8',textShadow:'0 0 20px #ffe9a8',clipPath:'inset(0 100% 0 0)'},S,t);H.a(nmEl,[{clipPath:'inset(0 100% 0 0)'},{clipPath:'inset(0 0% 0 0)'}],{d:1600,dl:3800,e:E.lin});
  T(H,S,{left:'0',right:'0',top:'330px',textAlign:'center',fontFamily:F.serif,fontStyle:'italic',fontSize:'40px',letterSpacing:'.2em',color:'#cfd8ff'},'Once upon a time…',5800,'fade');
  for(let k=0;k<3;k++){const fw=H.abs({left:[420,1180,800][k]+'px',top:[440,420,260][k]+'px'},S);for(let j=0;j<14;j++)H.abs({left:'0',top:'0',width:'70px',height:'3px',background:`linear-gradient(90deg,transparent,${['#ffb3c7','#ffe9a8','#a0e7ff'][k]})`,transformOrigin:'0 50%',rotate:j*25.7+'deg'},fw);H.a(fw,[{scale:'.1',opacity:1},{scale:'1',opacity:1,offset:.6},{scale:'1.1',opacity:0}],{d:1600,dl:6800+k*700})}}});

defW({no:'20',cat:'WCUTE',name:'届いた手紙と招待状',en:'Love Letter',lead:'ポストに手紙が届き、封筒が開いてふたりからのメッセージ。切手やスタンプがかわいい、手紙のオープニング。',bg:'#f7efe3',
use:'<b>手作り感を大切にしたいふたり、感謝を伝えたいふたり</b>に。招待状とデザインをそろえると、より統一感が出ます。',
tips:['切手の絵柄に、ふたりの写真や思い出の場所を入れると、細かいところまで楽しめます','消印の日付を結婚式の日にするのがおすすめ','封筒の色は招待状と同じにすると、ゲストが「あ、招待状と一緒だ」と気づいてくれます'],
p:`ポストに届いた手紙が開いて、ふたりからのメッセージが出てくる、かわいい手紙のオープニングムービー（3分）を作ってください。
・ふたりの名前：「{T}」
・配色：背景はクリーム #F7EFE3、封筒はくすみピンク #E8B4B8、便せんは白、切手と消印はネイビー #2E3A59 と赤 #C8454A、差し色に金
・フォント：手書き風の Klee One（600）、英字は Great Vibes
・シーン構成：
　0:00〜0:20　画面の左から、かわいい赤いポストが現れ、手紙がコトンと入る音のタイミングで揺れる
　0:20〜0:40　封筒が画面中央に大きく。宛名は「ゲストのみなさまへ」、切手（ふたりの写真入り）と、結婚式の日付の消印がポンと押される
　0:40〜1:00　封筒のフタが開き、ハートのシーリングスタンプがはずれて、便せんがすっと出てくる
　1:00〜2:20　便せんに、手書き風の文字でメッセージが1文字ずつ書かれていく（例「本日は来てくれて、ありがとう。わたしたちの はじまりの日を、一緒にすごしてください」）。便せんの余白に、ふたりの写真がマスキングテープで貼られていく
　2:20〜2:50　最後に、ふたりの名前のサインと日付。小さなハートの落書き
　2:50〜3:00　便せんが封筒に戻って、封筒が閉じて終わる`,
run(H,t){const S=H.abs({inset:'0',background:'#f7efe3'});S.style.backgroundImage='radial-gradient(rgba(200,180,150,.15) 2px,transparent 2px)';S.style.backgroundSize='30px 30px';
  const env=H.abs({left:'400px',top:'260px',width:'800px',height:'500px',background:'#e8b4b8',borderRadius:'10px',boxShadow:'0 30px 60px rgba(120,80,60,.2)'},S);H.a(env,[{opacity:0,transform:'translateX(-900px) rotate(-10deg)'},{opacity:1,transform:'none'}],{d:900,e:E.out});
  const letter=H.abs({left:'60px',top:'40px',width:'680px',height:'440px',background:'#fff',borderRadius:'6px',boxShadow:'0 4px 10px rgba(0,0,0,.08)'},env);
  const flap=H.abs({left:'0',top:'0',width:'800px',height:'300px',background:'#dba3a8',clipPath:'polygon(0 0,100% 0,50% 100%)',transformOrigin:'50% 0',zIndex:'2'},env);H.abs({left:'0',top:'160px',width:'800px',height:'340px',background:'#e8b4b8',clipPath:'polygon(0 100%,50% 30%,100% 100%)',zIndex:'3'},env);
  H.a(flap,[{transform:'perspective(1200px) rotateX(0)'},{transform:'perspective(1200px) rotateX(180deg)'}],{d:900,dl:2400,e:E.io});H.a(flap,[{zIndex:2},{zIndex:0}],{d:10,dl:2850});
  const seal=H.abs({left:'360px',top:'250px',width:'80px',height:'80px',borderRadius:'50%',background:'radial-gradient(circle at 35% 30%,#e86a74,#a8323c)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'38px',color:'#ffd5d8',zIndex:'4'},env,'♥');H.a(seal,[{opacity:1},{opacity:0,transform:'translateY(60px) rotate(40deg)'}],{d:500,dl:2000});
  const stamp=H.abs({left:'640px',top:'40px',width:'110px',height:'130px',background:'#fff',padding:'8px',boxSizing:'border-box',zIndex:'4',boxShadow:'0 0 0 4px #fff,0 0 0 6px #2e3a59'},env);pho(H,stamp,8,8,94,114,'couple');
  const pm=H.abs({left:'520px',top:'70px',width:'150px',height:'150px',borderRadius:'50%',border:'4px solid #2e3a59',color:'#2e3a59',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'22px',zIndex:'5',opacity:0},env);H.el('div',{},pm,'2025.10.25');H.el('div',{fontSize:'18px'},pm,'WEDDING');H.a(pm,[{opacity:0,transform:'scale(1.8)'},{opacity:.85,transform:'scale(1) rotate(-12deg)'}],{d:300,dl:1200,e:E.in});
  H.a(letter,[{transform:'translateY(0)'},{transform:'translateY(-300px)'}],{d:900,dl:3300,e:E.out});H.a(letter,[{zIndex:1},{zIndex:6}],{d:10,dl:4200});H.a(letter,[{transform:'translateY(-300px)'},{transform:'translateY(-200px) scale(1.15)'}],{d:600,dl:4200});
  const tx=H.abs({left:'50px',top:'50px',width:'580px',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'32px',lineHeight:'1.9',color:'#5a4030'},letter);const msg='本日は 来てくれて、ありがとう。わたしたちの はじまりの日を、一緒に すごしてください。';let i=0;const ch=[...msg];H.wait(4900,function tk(){if(i<ch.length){tx.textContent+=ch[i++];H.wait(80,tk)}});
  T(H,letter,{right:'50px',bottom:'40px',fontFamily:"'Great Vibes',cursive",fontSize:'54px',color:'#c8454a'},t+' ♡',8400,'fade')}});
