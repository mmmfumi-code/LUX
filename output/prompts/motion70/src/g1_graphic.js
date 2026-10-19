/* ===== GRAPHIC 01-15 ===== */
CUR_SEC='g';
const defG=o=>{o.bg=o.bg||'#d5d8de';o.loop=o.loop||6500;if(GP[o.no])o.p=GP[o.no];if(GIMG.includes(o.no))o.img='img/g'+o.no+'.jpg';def(o)};
const desk=(H,c)=>H.abs({inset:'0',background:c||'radial-gradient(circle at 50% 35%,#eef0f3,#c9cdd4)'});
const sheet=(H,w,h,css,x,y,dl)=>{const s=H.abs(Object.assign({left:(x??(800-w/2))+'px',top:(y??(450-h/2))+'px',width:w+'px',height:h+'px',background:'#fff',overflow:'hidden',boxShadow:'0 30px 60px rgba(0,0,0,.22),0 6px 14px rgba(0,0,0,.12)'},css||{}));H.a(s,[{opacity:0,transform:'translateY(40px) scale(.96)'},{opacity:1,transform:'none'}],{d:700,dl:dl||0});return s};
const A4=(H,css)=>{desk(H);return sheet(H,560,792,css)};
const FX={up:[{opacity:0,transform:'translateY(24px)'},{opacity:1,transform:'none'}],pop:[{opacity:0,transform:'scale(.3)'},{opacity:1,transform:'none'}],fade:[{opacity:0},{opacity:1}],left:[{opacity:0,transform:'translateX(-30px)'},{opacity:1,transform:'none'}],grow:[{transform:'scaleX(0)'},{transform:'none'}],drop:[{opacity:0,transform:'translateY(-40px)'},{opacity:1,transform:'none'}]};
const T=(H,p,css,txt,dl,fx)=>{const e=H.abs(Object.assign({whiteSpace:'nowrap'},css),p,txt);H.a(e,FX[fx||'up'],{d:fx==='pop'?650:800,dl:dl||0,e:fx==='pop'?E.back:E.out});return e};
const R=(H,p,css,dl,fx)=>T(H,p,css,null,dl,fx||'fade');
const burst=(n,a,b)=>{const q=[];for(let i=0;i<n*2;i++){const r=i%2?a:b,th=Math.PI*i/n;q.push(`${(50+r*Math.cos(th)).toFixed(1)}% ${(50+r*Math.sin(th)).toFixed(1)}%`)}return `polygon(${q.join(',')})`};
const bomb=(H,p,x,y,s,c,fc,lines,dl,fs)=>{const w=H.abs({left:x+'px',top:y+'px',width:s+'px',height:s+'px',rotate:'-10deg'},p);H.abs({inset:'0',background:c,clipPath:burst(14,40,50)},w);const tx=H.abs({inset:'0',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,color:fc,lineHeight:'1.05',textAlign:'center',fontSize:(fs||s/5)+'px'},w);lines.forEach((l,i)=>H.el('div',{fontSize:i?'1em':'0.62em'},tx,l));H.a(w,FX.pop,{d:650,dl:dl||0,e:E.back});H.a(w,[{scale:'1'},{scale:'1.08'},{scale:'1'}],{d:900,dl:(dl||0)+700,i:Infinity,f:'none'});return w};
const veg=(H,p,x,y,r,c,leaf,dl)=>{const w=H.abs({left:x-r+'px',top:y-r+'px',width:2*r+'px',height:2*r+'px'},p);H.abs({inset:'0',borderRadius:'50%',background:`radial-gradient(circle at 35% 30%,rgba(255,255,255,.55),transparent 35%),${c}`},w);if(leaf)H.abs({left:r-r*.18+'px',top:-r*.25+'px',width:r*.36+'px',height:r*.5+'px',borderRadius:'50% 50% 50% 0',background:leaf,rotate:'-20deg'},w);H.a(w,FX.pop,{d:650,dl:dl||0,e:E.back});return w};
const yen=(H,p,css,num,dl,unit)=>{const e=T(H,p,Object.assign({fontFamily:F.heavy,lineHeight:'1'},css),null,dl,'pop');H.el('span',{},e,num);H.el('span',{fontSize:'0.4em',marginLeft:'2px'},e,unit||'円');return e};
const fish=(H,p,x,y,w,c,dl)=>{const f=H.abs({left:x+'px',top:y+'px',width:w+'px',height:w*.42+'px'},p);H.abs({left:'0',top:'0',width:w*.78+'px',height:'100%',borderRadius:'50%',background:`linear-gradient(${c},#dfe7ee 70%)`},f);H.abs({right:'0',top:'5%',width:w*.3+'px',height:'90%',background:c,clipPath:'polygon(0 50%,100% 0,85% 50%,100% 100%)'},f);H.abs({left:w*.12+'px',top:w*.12+'px',width:w*.07+'px',height:w*.07+'px',borderRadius:'50%',background:'#123'},f);H.a(f,FX.left,{d:800,dl:dl||0});return f};

/* FLYER：特売 */
defG({no:'01',cat:'FLYER',name:'スーパーの週末特売',en:'Supermarket Weekend Sale',text:'スーパーまるやま',lead:'赤と黄色、価格の爆弾マーク。新聞折込でおなじみの「元気な特売チラシ」。',
use:'<b>スーパー・ドラッグストア・ホームセンター</b>の週末セールや折込チラシに。遠目でも「安い！」が伝わる王道の型です。',
tips:['価格の数字は商品名の3倍以上の大きさに。「円」は小さくすると数字が目立ちます','赤・黄・白の3色＋黒文字にしぼると、にぎやかでも散らかりません','商品写真は角版（四角）より切り抜きのほうが、特売らしい勢いが出ます'],
p:`新聞折込でよく見る、スーパーの「週末大特売」チラシを A4縦（210×297mm）で作ってください。
・店名：「{T}」
・配色：赤 #E60012、黄 #FFE100、白、文字は黒 #1A1A1A。にぎやかだけど3色＋黒にしぼる
・フォント：見出しと価格は Dela Gothic One、商品名は Noto Sans JP 900
・上部（高さ20%）：赤い帯に、黄色の極太文字で「週末大特売」。その下に黄色の角丸の帯で日付「10/25（土）・26（日）」
・右上：黄色のギザギザの爆弾マーク（14角の星形）に「全品 ポイント5倍」を斜め10度で
・中央：商品マス 2列×3段。各マスは白地に黄色の太枠、左に商品の切り抜き写真の枠（丸）、右上に商品名と量（例：たまご 10個入り）、右下に赤い極太の価格「98」＋小さな「円（税込）」
・商品の例：たまご 98円／キャベツ 128円／豚こま 100g 88円／牛乳 1L 158円／バナナ 98円／食パン 99円
・1マスだけ「本日の目玉」として、赤い斜めリボンを付ける
・下部（高さ12%）：赤い帯に白の店名、営業時間「9:00〜21:00」、住所「〇〇市〇〇町0-0-0」、電話「000-000-0000」
・余白は少なめでOK。ただし価格の数字の周りだけはしっかり空けて、遠目でも読めるように`,
run(H,t){const s=A4(H);R(H,s,{left:'0',top:'0',width:'560px',height:'150px',background:'#e60012'},200,'drop');
  T(H,s,{left:'22px',top:'22px',fontFamily:F.heavy,fontSize:'58px',color:'#ffe100',textShadow:'4px 4px 0 #8a0009'},'週末大特売',400,'pop');
  T(H,s,{left:'40px',top:'100px',width:'300px',textAlign:'center',background:'#ffe100',borderRadius:'999px',padding:'4px 0',fontFamily:F.heavy,fontSize:'22px',color:'#e60012'},'10/25（土）・26（日）',650);
  const P=[['たまご','10個入り','98','#f3d9a8'],['キャベツ','1玉','128','#8fcf6a'],['豚こま','100gあたり','88','#f2a2a2'],['牛乳','1000ml','158','#e8eef6'],['バナナ','1房','98','#ffd84d'],['食パン','6枚切','99','#e9b872']];
  P.forEach((q,i)=>{const x=14+(i%2)*272,y=166+Math.floor(i/2)*172;const c=R(H,s,{left:x+'px',top:y+'px',width:'260px',height:'160px',background:'#fff',border:'5px solid #ffe100',boxSizing:'border-box'},800+i*140,'pop');
    veg(H,c,62,78,46,q[3],i===1||i===4?'#3a8f2c':null,900+i*140);T(H,c,{left:'118px',top:'14px',fontFamily:F.sans,fontWeight:'900',fontSize:'24px',color:'#1a1a1a'},q[0],950+i*140);T(H,c,{left:'118px',top:'46px',fontFamily:F.sans,fontSize:'13px',color:'#555'},q[1],1000+i*140);
    yen(H,c,{right:'10px',bottom:'8px',fontSize:'58px',color:'#e60012'},q[2],1200+i*140);
    if(i===0){const rb=R(H,c,{left:'-34px',top:'14px',width:'140px',textAlign:'center',background:'#e60012',color:'#fff',fontFamily:F.heavy,fontSize:'14px',padding:'3px 0',rotate:'-35deg'},1500);rb.textContent='本日の目玉'}});
  bomb(H,s,404,14,146,'#ffe100','#e60012',['全品','ポイント','5倍'],1900,30);
  R(H,s,{left:'0',bottom:'0',width:'560px',height:'96px',background:'#e60012'},300,'fade');
  T(H,s,{left:'24px',bottom:'40px',fontFamily:F.heavy,fontSize:'32px',color:'#fff'},t,2100);
  T(H,s,{left:'24px',bottom:'14px',fontFamily:F.sans,fontSize:'13px',color:'#fff'},'営業時間 9:00〜21:00 ／ 〇〇市〇〇町0-0-0 ／ TEL 000-000-0000',2200)}});

defG({no:'02',cat:'FLYER',name:'八百屋の朝市',en:'Greengrocer Morning Market',text:'八百屋 やおき',lead:'クラフト紙に手書き風の文字。あたたかい「町の八百屋さん」のチラシ。',
use:'<b>八百屋・直売所・マルシェ・農家の販売会</b>に。手作り感で「顔の見えるお店」の安心感が伝わります。',
tips:['手書き風フォント（Klee One、Yuji Syuku）を見出しと価格に使うと一気にお店らしくなります','枠線は点線や少し揺れた線にすると、手作り感が出ます','野菜は丸い形に光を入れるだけでも、遠目には十分「野菜」に見えます'],
p:`町の八百屋さんの「朝市」チラシを、クラフト紙に手書きしたようなあたたかい雰囲気で A4縦 に作ってください。
・店名：「{T}」
・配色：背景はクラフト紙の色 #F3E9D2（うっすら紙の繊維の模様をCSSのノイズで）、メイン緑 #2E7D32、価格の赤 #D84315、文字は焦げ茶 #4E342E
・フォント：見出しは Yuji Syuku（筆の手書き風）、本文と価格は Klee One（えんぴつの手書き風）
・上部：大きな筆文字「朝市」（緑）を中央に。左右に小さく「毎週日曜」「朝7時から」を縦書きで
・その下：「朝どれ・産地直送」と書いた緑のハンコ風の丸を少し傾けて置く
・中央：野菜を3列×2段。各野菜は丸い写真の枠（トマト・きゅうり・とうもろこし・なす・にんじん・かぼちゃ）＋手書きの名前＋赤い手書きの価格（例：トマト 3個 200円）。枠は緑の点線の角丸
・下部：「おひとり様1袋まで 野菜詰め放題 300円」を黄色いマーカーを引いたような帯で強調
・最下部：店名・地図の代わりの簡単な道案内（「〇〇駅から徒歩3分」）・電話 000-000-0000
・全体：少しだけ要素を傾けたり、手描きの矢印や「おすすめ！」の吹き出しを添えて、にぎやかで親しみやすく`,
run(H,t){const s=A4(H,{background:'#f3e9d2',backgroundImage:'radial-gradient(rgba(120,90,50,.08) 1px,transparent 1px)',backgroundSize:'6px 6px'});
  T(H,s,{left:'0',width:'560px',top:'20px',textAlign:'center',fontFamily:F.brush,fontSize:'130px',color:'#2e7d32',lineHeight:'1'},'朝市',300,'pop');
  T(H,s,{left:'60px',top:'30px',writingMode:'vertical-rl',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'24px',color:'#4e342e'},'毎週日曜',600);T(H,s,{right:'60px',top:'30px',writingMode:'vertical-rl',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'24px',color:'#4e342e'},'朝7時から',700);
  const st=T(H,s,{left:'200px',top:'166px',width:'160px',height:'44px',lineHeight:'40px',textAlign:'center',border:'3px solid #2e7d32',borderRadius:'999px',color:'#2e7d32',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'20px',rotate:'-4deg',boxSizing:'border-box'},'朝どれ・産地直送',900,'pop');
  const V=[['トマト','3個','200','#e53935','#2e7d32'],['きゅうり','4本','150','#558b2f',null],['とうもろこし','2本','250','#fbc02d','#7cb342'],['なす','3本','180','#5e35b1','#2e7d32'],['にんじん','1袋','120','#f57c00','#43a047'],['かぼちゃ','1/4','160','#33691e',null]];
  V.forEach((v,i)=>{const x=20+(i%3)*176,y=232+Math.floor(i/3)*196;const c=R(H,s,{left:x+'px',top:y+'px',width:'164px',height:'182px',border:'3px dashed #2e7d32',borderRadius:'18px',boxSizing:'border-box'},1000+i*120,'pop');
    veg(H,c,80,62,44,v[3],v[4],1100+i*120);T(H,c,{left:'0',width:'158px',textAlign:'center',top:'112px',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'19px',color:'#4e342e'},v[0]+' '+v[1],1200+i*120);
    yen(H,c,{left:'0',width:'158px',textAlign:'center',top:'136px',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'34px',color:'#d84315'},v[2],1300+i*120)});
  const bub=T(H,s,{left:'416px',top:'214px',background:'#d84315',color:'#fff',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'16px',padding:'4px 12px',borderRadius:'14px',rotate:'8deg'},'おすすめ！',2000,'pop');
  const mk=R(H,s,{left:'40px',top:'640px',width:'480px',height:'50px',background:'linear-gradient(transparent 30%,#ffe066 30%,#ffe066 90%,transparent 90%)',transformOrigin:'left'},2100,'grow');
  T(H,s,{left:'0',width:'560px',textAlign:'center',top:'648px',fontFamily:"'Klee One',serif",fontWeight:'600',fontSize:'24px',color:'#4e342e'},'野菜詰め放題 1袋300円',2300,'fade');
  R(H,s,{left:'30px',right:'30px',top:'712px',height:'2px',background:'#4e342e',opacity:.4},2300);
  T(H,s,{left:'0',width:'560px',textAlign:'center',top:'724px',fontFamily:F.brush,fontSize:'30px',color:'#2e7d32'},t,2400);
  T(H,s,{left:'0',width:'560px',textAlign:'center',top:'764px',fontFamily:"'Klee One',serif",fontSize:'13px',color:'#4e342e'},'〇〇駅から徒歩3分 ／ TEL 000-000-0000',2500)}});

defG({no:'03',cat:'FLYER',name:'鮮魚の大漁祭り',en:'Fresh Fish Festival',text:'鮮魚 うおまさ',lead:'深い藍色に白い筆文字。漁港の市場のような、迫力ある鮮魚チラシ。',
use:'<b>鮮魚店・回転寿司・海鮮丼のお店・漁港の直売所</b>のイベントに。和の力強さで「新鮮さ」と「お祭り感」が伝わります。',
tips:['筆文字は画面からはみ出すくらい大きく。少し傾けると勢いが出ます','藍色の背景に波の模様（青海波）を薄く敷くと、一気に海らしくなります','価格は黄色、ハンコは朱色。この2色だけを差し色にします'],
p:`鮮魚店の「大漁祭り」チラシを、漁港の市場のような迫力ある和のデザインで A4縦 に作ってください。
・店名：「{T}」
・配色：背景は深い藍色 #0D2B52、波の模様（青海波）を CSS の radial-gradient で不透明度0.1で敷く。文字は白、価格は黄色 #FFD600、ハンコと帯は朱色 #D32F2F
・フォント：見出しは Yuji Syuku（太い筆文字）、価格は Dela Gothic One、本文は Noto Sans JP
・上部：白い筆文字「大漁祭」を、紙面の幅いっぱい・少し右上がりに。右横に朱色の丸いハンコ「本日限り」
・その下：朱色の帯に白文字「朝獲れ鮮魚 産地直送」
・中央：魚の写真の枠を4つ（マグロ・サーモン・アジ・ホタテ）。左に写真、右に名前と黄色の大きな価格。マグロだけ横幅いっぱいの大きなマスにして「本マグロ 中トロ 100g 598円」
・下部：「マグロの解体ショー 11:00〜」を、白い枠で囲んで目立たせる
・最下部：店名（筆文字）、営業時間、住所 〇〇市〇〇町0-0-0、電話 000-000-0000
・全体：余白より迫力優先。でも価格の数字は必ず1番読みやすく`,
run(H,t){const s=A4(H,{background:'#0d2b52'});R(H,s,{inset:'0',backgroundImage:'radial-gradient(circle at 50% 100%,transparent 18px,rgba(255,255,255,.12) 19px,rgba(255,255,255,.12) 21px,transparent 22px,transparent 28px,rgba(255,255,255,.12) 29px,rgba(255,255,255,.12) 31px,transparent 32px)',backgroundSize:'64px 32px'},200);
  T(H,s,{left:'20px',top:'0',fontFamily:F.brush,fontSize:'150px',color:'#fff',rotate:'-4deg',lineHeight:'1.1'},'大漁祭',400,'pop');
  const hk=T(H,s,{left:'448px',top:'40px',width:'90px',height:'90px',borderRadius:'50%',border:'4px solid #d32f2f',color:'#d32f2f',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',fontFamily:F.brush,fontSize:'22px',lineHeight:'1.1',whiteSpace:'normal',rotate:'12deg',boxSizing:'border-box'},'本日限り',900,'pop');
  R(H,s,{left:'0',top:'190px',width:'560px',height:'48px',background:'#d32f2f',transformOrigin:'left'},700,'grow');T(H,s,{left:'0',width:'560px',top:'196px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'26px',color:'#fff',letterSpacing:'.2em'},'朝獲れ鮮魚 産地直送',900);
  const big=R(H,s,{left:'20px',top:'256px',width:'520px',height:'150px',border:'2px solid rgba(255,255,255,.5)',boxSizing:'border-box'},1100,'pop');fish(H,big,16,26,230,'#b71c1c',1200);
  T(H,big,{left:'270px',top:'14px',fontFamily:F.sans,fontWeight:'900',fontSize:'22px',color:'#fff'},'本マグロ 中トロ',1300);T(H,big,{left:'270px',top:'46px',fontFamily:F.sans,fontSize:'14px',color:'#cfe0f5'},'100gあたり',1350);yen(H,big,{left:'270px',top:'68px',fontSize:'70px',color:'#ffd600'},'598',1500);
  [['サーモン','#ff8a65','398'],['アジ','#78909c','98'],['ホタテ','#ffcc80','298']].forEach((f,i)=>{const c=R(H,s,{left:20+i*176+'px',top:'420px',width:'168px',height:'190px',border:'2px solid rgba(255,255,255,.5)',boxSizing:'border-box'},1500+i*150,'pop');fish(H,c,20,16,124,f[1],1600+i*150);
    T(H,c,{left:'0',width:'164px',textAlign:'center',top:'82px',fontFamily:F.sans,fontWeight:'900',fontSize:'20px',color:'#fff'},f[0],1650+i*150);yen(H,c,{left:'0',width:'164px',textAlign:'center',top:'116px',fontSize:'52px',color:'#ffd600'},f[2],1800+i*150)});
  T(H,s,{left:'60px',top:'628px',width:'440px',textAlign:'center',border:'3px solid #fff',padding:'8px 0',fontFamily:F.brush,fontSize:'30px',color:'#fff',boxSizing:'border-box'},'マグロの解体ショー 11:00〜',2300,'pop');
  T(H,s,{left:'0',width:'560px',textAlign:'center',top:'702px',fontFamily:F.brush,fontSize:'38px',color:'#fff'},t,2500);T(H,s,{left:'0',width:'560px',textAlign:'center',top:'758px',fontFamily:F.sans,fontSize:'12px',color:'#cfe0f5'},'営業 8:00〜18:00 ／ 〇〇市〇〇町0-0-0 ／ TEL 000-000-0000',2600)}});

defG({no:'04',cat:'FLYER',name:'夕方のタイムセール',en:'Time Sale',text:'スーパーまるやま',lead:'黒と黄色の工事現場カラー。時間限定の「急げ！」を伝えるチラシ。',
use:'<b>スーパーの夕方セール・閉店セール・家電量販店の時間限定セール</b>に。黒×黄色は「注意を引く」いちばん強い組み合わせです。',
tips:['黒と黄色の斜めストライプは、紙面の上下だけに。全面に使うと目が疲れます','時間（17:00〜19:00）は時計のアイコンとセットにすると一瞬で伝わります','「半額」は赤い丸シールのデザインにすると、お店で見る値引きシールそのものに'],
p:`夕方の「タイムセール」チラシを、黒と黄色の注意を引くデザインで A4縦 に作ってください。
・店名：「{T}」
・配色：黒 #111、黄色 #FFD400、赤 #E53935、白
・フォント：英字の見出しは Anton、日本語と価格は Dela Gothic One
・上下の帯（高さ6%）：黒と黄色の45度の斜めストライプ（repeating-linear-gradient）
・上部：黒い背景に、黄色の巨大な「TIME SALE」（Anton、紙面の幅いっぱい）。その下に白で「夕方だけの、うれしい値段。」
・時間：黄色い円の時計アイコンの横に、「17:00 → 19:00」を白の極太で。下に小さく「毎日開催」
・中央：白い角丸のマスを2列×2段。商品写真の枠、商品名、元の価格に取り消し線、新しい価格を赤の極太で
・各マスの右上に、赤い丸シール「半額」「3割引」を少し傾けて貼る（お店の値引きシール風）
・下部：黄色の帯に黒文字「数量限定・なくなり次第終了」
・最下部：店名（白）、住所 〇〇市〇〇町0-0-0、電話 000-000-0000`,
run(H,t){const s=A4(H,{background:'#111'});const st={left:'0',width:'560px',height:'40px',backgroundImage:'repeating-linear-gradient(45deg,#ffd400 0 22px,#111 22px 44px)'};R(H,s,Object.assign({top:'0'},st),200);R(H,s,Object.assign({bottom:'0'},st),200);
  T(H,s,{left:'0',width:'560px',top:'52px',textAlign:'center',fontFamily:"'Anton',sans-serif",fontSize:'124px',color:'#ffd400',lineHeight:'1',letterSpacing:'.02em'},'TIME SALE',400,'pop');
  T(H,s,{left:'0',width:'560px',top:'190px',textAlign:'center',fontFamily:F.sans,fontWeight:'700',fontSize:'20px',color:'#fff'},'夕方だけの、うれしい値段。',700);
  const ck=R(H,s,{left:'110px',top:'232px',width:'64px',height:'64px',borderRadius:'50%',background:'#ffd400'},900,'pop');const hd=H.abs({left:'30px',top:'10px',width:'4px',height:'24px',background:'#111',transformOrigin:'50% 100%'},ck);H.a(hd,[{rotate:'0deg'},{rotate:'360deg'}],{d:3000,e:E.lin,i:Infinity});H.abs({left:'30px',top:'30px',width:'20px',height:'4px',background:'#111'},ck);
  T(H,s,{left:'190px',top:'234px',fontFamily:F.heavy,fontSize:'44px',color:'#fff'},'17:00 → 19:00',1000,'left');
  [['お刺身盛合せ','980','490','半額'],['からあげ','498','249','半額'],['お弁当各種','598','418','3割引'],['にぎり寿司','880','440','半額']].forEach((q,i)=>{const x=24+(i%2)*262,y=322+Math.floor(i/2)*176;const c=R(H,s,{left:x+'px',top:y+'px',width:'250px',height:'164px',background:'#fff',borderRadius:'14px'},1200+i*150,'pop');
    R(H,c,{left:'14px',top:'14px',width:'90px',height:'90px',borderRadius:'10px',background:'linear-gradient(135deg,#ffe0b2,#ffab91)'},1300+i*150);T(H,c,{left:'116px',top:'16px',fontFamily:F.sans,fontWeight:'900',fontSize:'18px',color:'#111'},q[0],1350+i*150);
    T(H,c,{left:'116px',top:'48px',fontFamily:F.sans,fontSize:'16px',color:'#888',textDecoration:'line-through'},q[1]+'円',1400+i*150);yen(H,c,{left:'110px',top:'86px',fontSize:'56px',color:'#e53935'},q[2],1600+i*150);
    T(H,c,{right:'-10px',top:'-14px',width:'62px',height:'62px',borderRadius:'50%',background:'#e53935',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:q[3].length>2?'14px':'18px',rotate:'12deg',border:'3px solid #fff',boxSizing:'border-box'},q[3],1900+i*150,'pop')});
  R(H,s,{left:'0',top:'680px',width:'560px',height:'40px',background:'#ffd400',transformOrigin:'left'},2300,'grow');T(H,s,{left:'0',width:'560px',top:'684px',textAlign:'center',fontFamily:F.heavy,fontSize:'24px',color:'#111'},'数量限定・なくなり次第終了',2500,'fade');
  T(H,s,{left:'24px',top:'728px',fontFamily:F.heavy,fontSize:'20px',color:'#fff'},t,2600);T(H,s,{right:'24px',top:'734px',fontFamily:F.sans,fontSize:'11px',color:'#bbb'},'〇〇市〇〇町0-0-0 ／ TEL 000-000-0000',2600)}});

defG({no:'05',cat:'FLYER',name:'肉の日の精肉チラシ',en:'Meat Day',text:'精肉のにくまる',lead:'「29日は肉の日」。赤と黒と金で、焼肉屋のような力強さ。',
use:'<b>精肉店・焼肉店・スーパーの精肉売り場・ステーキ店</b>のイベントに。毎月の恒例セールの告知にぴったりです。',
tips:['「肉」の一文字を、筆文字で紙面の主役にするとインパクト抜群','赤は肉の赤に近い深めの赤（#B71C1C）にすると、おいしそうに見えます','金色は細い線とハンコだけに使うと、高級感が出すぎず親しみやすい'],
p:`精肉店の「肉の日（毎月29日）」チラシを、焼肉屋のような赤と黒と金の力強いデザインで A4縦 に作ってください。
・店名：「{T}」
・配色：黒 #141414、深い赤 #B71C1C、金 #C9A24B、白
・フォント：「肉」の文字は Yuji Syuku、見出しと価格は Dela Gothic One、本文は Noto Sans JP
・上部：黒い背景に、赤い大きな円（直径60%）。その中に白い筆文字の「肉」を巨大に。円の外側に金の細い二重線
・円の左上に、白い縦書きで「毎月29日は」、右下に金色で「肉の日」
・中央：黒い背景に、白い細線で区切った商品リスト（4品）。左にお肉の写真の枠、中央に商品名と産地（例：国産 牛カルビ 焼肉用）、右に白の極太価格と金の「100gあたり」
・目玉商品：一番上のマスだけ赤い背景で「黒毛和牛 切り落とし 100g 398円」
・下部：金の枠で囲んだ「お一人様2パックまで」「ポイント2倍」
・最下部：店名、住所 〇〇市〇〇町0-0-0、電話 000-000-0000`,
run(H,t){const s=A4(H,{background:'#141414'});const c=R(H,s,{left:'110px',top:'40px',width:'340px',height:'340px',borderRadius:'50%',background:'#b71c1c',boxShadow:'0 0 0 8px #141414,0 0 0 10px #c9a24b,0 0 0 16px #141414,0 0 0 17px #c9a24b'},300,'pop');
  T(H,c,{left:'0',width:'340px',top:'30px',textAlign:'center',fontFamily:F.brush,fontSize:'250px',color:'#fff',lineHeight:'1'},'肉',700,'pop');
  T(H,s,{left:'50px',top:'40px',writingMode:'vertical-rl',fontFamily:F.sans,fontWeight:'900',fontSize:'30px',color:'#fff'},'毎月29日は',1000,'drop');T(H,s,{right:'40px',top:'300px',fontFamily:F.heavy,fontSize:'44px',color:'#c9a24b'},'肉の日',1200,'pop');
  [['黒毛和牛 切り落とし','国産','398',1],['牛カルビ 焼肉用','国産','298',0],['豚バラ うす切り','国産','138',0],['鶏もも 若鶏','国産','98',0]].forEach((q,i)=>{const y=410+i*70;const r=R(H,s,{left:'24px',top:y+'px',width:'512px',height:'62px',background:q[3]?'#b71c1c':'transparent',borderBottom:'1px solid rgba(255,255,255,.3)',boxSizing:'border-box'},1400+i*140,'left');
    R(H,r,{left:'8px',top:'6px',width:'72px',height:'50px',borderRadius:'6px',background:'linear-gradient(135deg,#e57373,#8d2a2a)'},1450+i*140);T(H,r,{left:'94px',top:'8px',fontFamily:F.sans,fontWeight:'900',fontSize:'20px',color:'#fff'},q[0],1500+i*140);T(H,r,{left:'94px',top:'36px',fontFamily:F.sans,fontSize:'12px',color:'#c9a24b'},q[1]+'・100gあたり',1520+i*140);
    yen(H,r,{right:'10px',top:'6px',fontSize:'46px',color:'#fff'},q[2],1600+i*140)});
  T(H,s,{left:'70px',top:'702px',width:'420px',textAlign:'center',border:'1.5px solid #c9a24b',padding:'6px 0',fontFamily:F.sans,fontWeight:'700',fontSize:'16px',color:'#c9a24b',boxSizing:'border-box'},'お一人様2パックまで ／ ポイント2倍',2300,'fade');
  T(H,s,{left:'24px',top:'752px',fontFamily:F.heavy,fontSize:'20px',color:'#fff'},t,2500);T(H,s,{right:'24px',top:'758px',fontFamily:F.sans,fontSize:'11px',color:'#aaa'},'〇〇市〇〇町0-0-0 ／ TEL 000-000-0000',2500)}});

/* FLYER：上品 */
defG({no:'06',cat:'FLYER',name:'カフェの新メニュー',en:'Café Seasonal Menu',text:'Café nobu',lead:'生成り色に細い明朝と英字。雑誌のような余白の、上品なカフェのお知らせ。',
use:'<b>カフェ・喫茶店・パティスリー</b>の季節メニューの告知や、店頭・レジ横に置くフライヤーに。',
tips:['色は生成り・こげ茶・差し色1色の3色まで。余白が多いほど上品に見えます','英字の筆記体や細いセリフ体を、日本語の明朝体と組み合わせるのが定番','価格は小さく。点線（リーダー）でメニュー名とつなぐと、メニュー表らしさが出ます'],
p:`カフェの「秋の新メニュー」フライヤーを、雑誌のような余白のある上品なデザインで A5縦（148×210mm）で作ってください。
・店名：「{T}」
・配色：背景は生成り #F4EDE4、文字はこげ茶 #4A3B32、差し色はテラコッタ #C47A5A（1か所だけ）
・フォント：英字は Cormorant Garamond（イタリック）、日本語は Shippori Mincho B1、価格は Cormorant Garamond
・上部：小さく「Autumn Seasonal Menu」（イタリック、字間広め）、その下に明朝体で「秋の、ちいさなごほうび。」
・中央：大きな円形の写真の枠（直径55%）。中にラテや焼き菓子の写真が入る想定で、今はベージュ〜ブラウンの円形グラデーション。円の右下に、テラコッタの小さな丸いシール「NEW」
・メニュー：写真の下に3品。「マロンラテ ........ ¥680」のように、メニュー名と価格を点線でつなぐ。各メニューの下に小さな説明（例：栗の甘露煮をのせて）
・下部：細い線で区切り、「10.1 — 11.30」「Open 8:00 – 18:00」「〇〇市〇〇町0-0-0」を小さく横並びに
・最下部：店名を英字の細いセリフ体で中央に
・全体：要素を詰めず、上下左右の余白を大きく（紙面の12%以上）`,
run(H,t){desk(H);const s=sheet(H,560,792,{background:'#f4ede4'});const C='#4a3b32';
  T(H,s,{left:'0',width:'560px',top:'64px',textAlign:'center',fontFamily:F.serif,fontStyle:'italic',fontSize:'22px',letterSpacing:'.25em',color:C},'Autumn Seasonal Menu',300,'fade');
  T(H,s,{left:'0',width:'560px',top:'100px',textAlign:'center',fontFamily:F.min,fontWeight:'500',fontSize:'30px',letterSpacing:'.12em',color:C},'秋の、ちいさなごほうび。',600);
  const ph=R(H,s,{left:'130px',top:'170px',width:'300px',height:'300px',borderRadius:'50%',background:'radial-gradient(circle at 40% 35%,#f1dcc2,#c79a72 55%,#7a5038)'},900,'pop');R(H,ph,{left:'80px',top:'80px',width:'140px',height:'140px',borderRadius:'50%',background:'radial-gradient(circle,#fff6ea,#e9cfae)',boxShadow:'0 0 0 10px rgba(255,255,255,.5)'},1100,'fade');
  T(H,s,{left:'384px',top:'404px',width:'64px',height:'64px',borderRadius:'50%',background:'#c47a5a',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.serif,fontSize:'18px',letterSpacing:'.1em'},'NEW',1400,'pop');
  [['マロンラテ','680','栗の甘露煮をのせて'],['さつまいものタルト','620','焼きたてを、ほんのり温かく'],['ほうじ茶のシフォン','580','香ばしい生クリームとともに']].forEach((m,i)=>{const y=500+i*64;
    const r=T(H,s,{left:'90px',width:'380px',top:y+'px',display:'flex',alignItems:'baseline',gap:'10px',fontFamily:F.min,fontSize:'19px',color:C},null,1500+i*180);H.el('span',{},r,m[0]);H.el('span',{flex:'1',borderBottom:'1.5px dotted rgba(74,59,50,.5)'},r);H.el('span',{fontFamily:F.serif,fontSize:'20px'},r,'¥'+m[1]);
    T(H,s,{left:'90px',top:y+28+'px',fontFamily:F.min,fontSize:'12px',color:'rgba(74,59,50,.7)'},m[2],1600+i*180,'fade')});
  R(H,s,{left:'90px',width:'380px',top:'700px',height:'1px',background:C,opacity:.4,transformOrigin:'left'},2200,'grow');
  T(H,s,{left:'0',width:'560px',top:'712px',textAlign:'center',fontFamily:F.serif,fontSize:'14px',letterSpacing:'.12em',color:C},'10.1 — 11.30　｜　Open 8:00 – 18:00　｜　〇〇市〇〇町0-0-0',2300,'fade');
  T(H,s,{left:'0',width:'560px',top:'742px',textAlign:'center',fontFamily:F.serif,fontWeight:'500',fontSize:'26px',letterSpacing:'.2em',color:C},t,2500,'fade')}});

defG({no:'07',cat:'FLYER',name:'百貨店の物産展',en:'Department Store Fair',text:'nobu百貨店',lead:'濃紺と金、明朝体の縦書き。百貨店の催事らしい、格式あるチラシ。',
use:'<b>百貨店・ショッピングモールの催事、物産展、ギフト展、老舗の記念フェア</b>に。高級感と「行ってみたい」を両立します。',
tips:['金色は文字ではなく「細い線・枠・小さな飾り」に使うと上品','日付は「10.23 wed — 11.4 mon」のように英字で書くと、ぐっと洗練されます','写真の枠は大小をつけて並べると、雑誌の特集ページのような動きが出ます'],
p:`百貨店の「北海道物産展」チラシを、濃紺と金の格式あるデザインで A4縦 に作ってください。
・店名：「{T}」
・配色：濃紺 #1B2A4A、金 #C8A45A（グラデーションで少し光沢）、生成り #F7F3EA、文字は白と濃紺
・フォント：日本語は Shippori Mincho B1（800）、英字と数字は Cormorant Garamond
・上部（高さ45%）：濃紺の背景。右側に金色の縦書きの大見出し「北海道物産展」、左側に白い縦書きで「北の大地の、うまいもの。」
・見出しの上に小さな英字「HOKKAIDO FAIR」（金、字間広め）。紙面の四隅に金の細いL字の飾り
・日付：金の細い線で上下を挟んで「10.23 wed — 11.4 mon」、その下に「本館7階 催事場」
・中央（生成りの背景）：写真の枠を大1つ＋小3つで雑誌のように配置（海鮮丼・スイーツ・ラーメン・チーズ）。各写真の下に明朝体の商品名と、小さな店舗名・価格
・下部：濃紺の帯に「各日 10:00〜20:00（最終日は17:00閉場）」と、金の細枠で「会期中、お買い上げ5,000円ごとに抽選券1枚」
・最下部：店名を明朝体で中央、住所 〇〇市〇〇町0-0-0
・全体：線は細く（0.5〜1px）、余白は広く。派手さより品のよさを優先`,
run(H,t){desk(H);const s=sheet(H,560,792,{background:'#f7f3ea'});const G='linear-gradient(135deg,#e6c983,#b8913f 60%,#e8d39a)',GC='#c8a45a';
  R(H,s,{left:'0',top:'0',width:'560px',height:'360px',background:'#1b2a4a'},200,'fade');
  [[16,16,'0 0'],[504,16,'1 0'],[16,304,'0 1'],[504,304,'1 1']].forEach((c,i)=>R(H,s,{left:c[0]+'px',top:c[1]+'px',width:'40px',height:'40px',borderTop:c[2][2]==='0'?'1px solid '+GC:'none',borderBottom:c[2][2]==='1'?'1px solid '+GC:'none',borderLeft:c[2][0]==='0'?'1px solid '+GC:'none',borderRight:c[2][0]==='1'?'1px solid '+GC:'none'},400+i*80));
  T(H,s,{left:'0',width:'560px',top:'34px',textAlign:'center',fontFamily:F.serif,fontSize:'14px',letterSpacing:'.5em',color:GC},'HOKKAIDO FAIR',500,'fade');
  const h=T(H,s,{left:'310px',top:'62px',writingMode:'vertical-rl',fontFamily:F.min,fontWeight:'800',fontSize:'42px',letterSpacing:'.06em',background:G,WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'},'北海道物産展',700,'drop');
  T(H,s,{left:'200px',top:'90px',writingMode:'vertical-rl',fontFamily:F.min,fontWeight:'500',fontSize:'20px',letterSpacing:'.2em',color:'#fff'},'北の大地の、うまいもの。',1000,'drop');
  T(H,s,{left:'40px',top:'120px',fontFamily:F.serif,fontSize:'26px',color:'#fff',borderTop:'1px solid '+GC,borderBottom:'1px solid '+GC,padding:'4px 0',letterSpacing:'.04em'},'10.23 wed',1200,'left');T(H,s,{left:'40px',top:'176px',fontFamily:F.serif,fontSize:'26px',color:'#fff',borderBottom:'1px solid '+GC,padding:'4px 0',letterSpacing:'.04em'},'— 11.4 mon',1300,'left');T(H,s,{left:'40px',top:'232px',fontFamily:F.min,fontSize:'14px',color:GC},'本館7階 催事場',1400,'fade');
  const ph=[[30,380,300,220,'linear-gradient(135deg,#ffb38a,#e85d3a 60%,#f6d6a8)','海鮮丼','函館 〇〇食堂　¥2,800'],[346,380,184,100,'linear-gradient(135deg,#fff3d6,#f1c27d)','チーズケーキ','十勝 〇〇　¥1,620'],[346,500,184,100,'linear-gradient(135deg,#f4d58d,#c98b2a)','味噌ラーメン','札幌 〇〇　¥1,100']];
  ph.forEach((q,i)=>{R(H,s,{left:q[0]+'px',top:q[1]+'px',width:q[2]+'px',height:q[3]+'px',background:q[4]},1500+i*150,'pop');T(H,s,{left:q[0]+'px',top:q[1]+q[3]+6+'px',fontFamily:F.min,fontWeight:'800',fontSize:i?'14px':'18px',color:'#1b2a4a'},q[5],1650+i*150);T(H,s,{left:q[0]+(i?0:90)+'px',top:q[1]+q[3]+(i?26:10)+'px',fontFamily:F.min,fontSize:'11px',color:'#6b6355'},q[6],1700+i*150,'fade')});
  R(H,s,{left:'0',top:'652px',width:'560px',height:'86px',background:'#1b2a4a'},2100,'fade');T(H,s,{left:'0',width:'560px',top:'664px',textAlign:'center',fontFamily:F.min,fontSize:'15px',color:'#fff',letterSpacing:'.08em'},'各日 10:00〜20:00（最終日は17:00閉場）',2200,'fade');
  T(H,s,{left:'90px',width:'380px',top:'696px',textAlign:'center',border:'1px solid '+GC,padding:'4px 0',fontFamily:F.min,fontSize:'12px',color:GC,boxSizing:'border-box'},'お買い上げ5,000円ごとに抽選券1枚',2300,'fade');
  T(H,s,{left:'0',width:'560px',top:'748px',textAlign:'center',fontFamily:F.min,fontWeight:'800',fontSize:'20px',color:'#1b2a4a',letterSpacing:'.2em'},t,2500,'fade')}});

defG({no:'08',cat:'FLYER',name:'ベーカリーのオープン告知',en:'Boulangerie Opening',text:'Boulangerie nobu',lead:'小麦色とアイボリー。パンのイラストが並ぶ、ぬくもりあるオープンのお知らせ。',
use:'<b>パン屋・焼き菓子店・ドーナツ店・コーヒースタンド</b>の新規オープンやリニューアルの告知に。',
tips:['パンの形は楕円とクープ（切れ目）の線だけで十分かわいく描けます','英字のフランス語風タイトル＋日本語の丸ゴシックで、本格さと親しみやすさを両立','オープン特典（先着100名様にクロワッサン）は丸いスタンプ風にすると目に留まります'],
p:`パン屋の「グランドオープン」チラシを、小麦色とアイボリーのぬくもりあるデザインで A4縦 に作ってください。
・店名：「{T}」
・配色：アイボリー #FBF5EA、小麦色 #D9A55B、こげ茶 #5A3E2B、差し色のオリーブ #7A8B4F
・フォント：英字は Playfair Display（900、イタリックも使う）、日本語は Zen Maru Gothic（500/900）
・上部：小さく「GRAND OPEN」、大きく英字のイタリックで店名、その下に日本語で「まちの、焼きたて。」
・中央：パンのイラスト（SVG で描く。クロワッサン・バゲット・食パン・あんぱん・ベーグル・メロンパン）を2段×3列でかわいく並べる。各パンの下に名前と価格
・日付：小麦色の大きな数字で「10.30 FRI OPEN」、時間「7:30 — 18:00」
・特典：オリーブ色の丸いスタンプ風に「先着100名様 クロワッサン1個プレゼント」
・下部：簡単な地図の代わりに「〇〇駅 西口から徒歩2分」、住所 〇〇市〇〇町0-0-0、電話 000-000-0000、Instagram の @ ID
・全体：角はすべて丸く、線はこげ茶の手描き風（stroke-linecap: round）にして、やさしい雰囲気に`,
run(H,t){desk(H);const s=sheet(H,560,792,{background:'#fbf5ea'});const B='#5a3e2b',W='#d9a55b';
  T(H,s,{left:'0',width:'560px',top:'42px',textAlign:'center',fontFamily:F.sans,fontWeight:'700',fontSize:'14px',letterSpacing:'.5em',color:'#7a8b4f'},'GRAND OPEN',200,'fade');
  T(H,s,{left:'0',width:'560px',top:'66px',textAlign:'center',fontFamily:"'Playfair Display',serif",fontStyle:'italic',fontWeight:'900',fontSize:t.length>14?'44px':'54px',color:B},t,400,'up');
  T(H,s,{left:'0',width:'560px',top:'140px',textAlign:'center',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'500',fontSize:'20px',color:B,letterSpacing:'.2em'},'まちの、焼きたて。',700,'fade');
  const breads=[['クロワッサン','240'],['バゲット','320'],['食パン','420'],['あんぱん','200'],['ベーグル','230'],['メロンパン','190']];
  breads.forEach((b,i)=>{const x=40+(i%3)*166,y=200+Math.floor(i/3)*170;const w=R(H,s,{left:x+'px',top:y+'px',width:'150px',height:'150px'},900+i*130,'pop');
    const sh=[{left:'25px',top:'30px',width:'100px',height:'60px',borderRadius:'50% 50% 40% 40%'},{left:'5px',top:'45px',width:'140px',height:'36px',borderRadius:'30px',rotate:'-12deg'},{left:'35px',top:'20px',width:'80px',height:'78px',borderRadius:'26px 26px 8px 8px'},{left:'35px',top:'26px',width:'80px',height:'70px',borderRadius:'50%'},{left:'35px',top:'26px',width:'80px',height:'70px',borderRadius:'50%'},{left:'32px',top:'24px',width:'86px',height:'72px',borderRadius:'50% 50% 40% 40%'}][i];
    const bd=H.abs(Object.assign({background:i===5?'#f1d48a':`radial-gradient(circle at 40% 30%,#f2c98a,${W} 60%,#b97c35)`,border:'3px solid '+B,boxSizing:'border-box'},sh),w);
    if(i===1)[30,60,90].forEach(cx=>H.abs({left:cx+'px',top:'8px',width:'16px',height:'3px',background:B,borderRadius:'2px',rotate:'-30deg'},bd));
    if(i===4)H.abs({left:'27px',top:'24px',width:'20px',height:'16px',borderRadius:'50%',background:'#fbf5ea',border:'3px solid '+B},bd);
    if(i===5){bd.style.backgroundImage='linear-gradient(45deg,transparent 46%,rgba(90,62,43,.5) 46% 54%,transparent 54%),linear-gradient(-45deg,transparent 46%,rgba(90,62,43,.5) 46% 54%,transparent 54%)';bd.style.backgroundSize='20px 20px'}
    if(i===3)H.abs({left:'30px',top:'24px',width:'14px',height:'14px',borderRadius:'50%',background:B},bd);
    H.el('div',{position:'absolute',left:'0',right:'0',top:'108px',textAlign:'center',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'15px',color:B},w,b[0]);H.el('div',{position:'absolute',left:'0',right:'0',top:'130px',textAlign:'center',fontFamily:"'Playfair Display',serif",fontSize:'14px',color:W},w,'¥'+b[1])});
  T(H,s,{left:'40px',top:'560px',fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:'58px',color:W,lineHeight:'1'},'10.30',1900,'left');T(H,s,{left:'48px',top:'624px',fontFamily:"'Playfair Display',serif",fontWeight:'900',fontSize:'20px',color:B,letterSpacing:'.2em'},'FRI OPEN　7:30 — 18:00',2000,'fade');
  T(H,s,{left:'370px',top:'538px',width:'150px',height:'150px',borderRadius:'50%',border:'3px dashed #fbf5ea',boxShadow:'0 0 0 6px #7a8b4f',background:'#7a8b4f',color:'#fff',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'900',fontSize:'15px',lineHeight:'1.5',whiteSpace:'normal',rotate:'-8deg',boxSizing:'border-box'},'先着100名様\nクロワッサン\nプレゼント',2200,'pop').style.whiteSpace='pre-line';
  R(H,s,{left:'40px',width:'480px',top:'710px',height:'0',borderTop:'2px dashed '+B,opacity:.4},2300);
  T(H,s,{left:'0',width:'560px',top:'726px',textAlign:'center',fontFamily:"'Zen Maru Gothic',sans-serif",fontWeight:'500',fontSize:'13px',color:B,lineHeight:'1.8',whiteSpace:'pre-line'},'〇〇駅 西口から徒歩2分 ／ 〇〇市〇〇町0-0-0\nTEL 000-000-0000 ／ Instagram @nobu_bakery',2400,'fade')}});

defG({no:'09',cat:'FLYER',name:'フラワーショップのギフト案内',en:'Flower Shop Gift',text:'fleur nobu',lead:'淡いピンクとセージグリーン。花びらが舞う、母の日ギフトのご予約案内。',
use:'<b>花屋・ギフトショップ・ハンドメイド雑貨・サロン</b>の季節ギフトや予約受付の告知に。',
tips:['くすみカラー（ピンク・セージ・ベージュ）でまとめると、やわらかく大人っぽい','花のイラストは、円を5〜6枚放射状に並べるだけでも十分きれい','予約締切の日付は、全体の中で唯一はっきりした色にして見落とされないように'],
p:`フラワーショップの「母の日ギフト ご予約受付」チラシを、くすみカラーのやわらかいデザインで A4縦 に作ってください。
・店名：「{T}」
・配色：背景は淡いピンク #F6E4E1、セージグリーン #9DB4A0、ローズ #C97B84、文字はグレーがかったブラウン #5B4B49
・フォント：英字は Cormorant Garamond（イタリック）、日本語は Shippori Mincho B1
・上部：英字のイタリックで「Mother's Day」、その下に明朝体で「ありがとうを、花束にして。」
・中央：アーチ型（上が半円）の大きな写真の枠。中は花束の写真が入る想定で、ピンク〜ローズのグラデーション。枠の周りに SVG で描いた花（花びら5枚）と葉をいくつか重ねて飾る
・商品：アーチの下に3つ横並び（ブーケ S ¥3,300 ／ M ¥5,500 ／ カーネーションの鉢植え ¥4,400）。細い線で区切る
・予約：ローズの細枠で「ご予約締切 5.5 mon」「お渡し 5.9 fri — 5.11 sun」。全国配送OKのアイコン
・最下部：店名（英字の細いセリフ体）、営業時間、住所 〇〇市〇〇町0-0-0、電話 000-000-0000
・動き（Web版を作る場合）：花びらがゆっくり舞い落ちる`,
run(H,t){desk(H);const s=sheet(H,560,792,{background:'#f6e4e1'});const C='#5b4b49';
  const flower=(x,y,r,c,dl)=>{const f=R(H,s,{left:x-r+'px',top:y-r+'px',width:2*r+'px',height:2*r+'px'},dl,'pop');for(let k=0;k<5;k++)H.abs({left:r*.6+'px',top:'0',width:r*.8+'px',height:r+'px',borderRadius:'50% 50% 50% 50%/60% 60% 40% 40%',background:c,transformOrigin:'50% 100%',rotate:k*72+'deg'},f);H.abs({left:r*.75+'px',top:r*.75+'px',width:r*.5+'px',height:r*.5+'px',borderRadius:'50%',background:'#f3d27a'},f);H.a(f,[{rotate:'0deg'},{rotate:'20deg'},{rotate:'0deg'}],{d:4000,i:Infinity,f:'none'});return f};
  T(H,s,{left:'0',width:'560px',top:'50px',textAlign:'center',fontFamily:F.serif,fontStyle:'italic',fontWeight:'500',fontSize:'56px',color:'#c97b84'},"Mother's Day",300,'up');
  T(H,s,{left:'0',width:'560px',top:'128px',textAlign:'center',fontFamily:F.min,fontWeight:'500',fontSize:'20px',letterSpacing:'.18em',color:C},'ありがとうを、花束にして。',600,'fade');
  R(H,s,{left:'130px',top:'180px',width:'300px',height:'330px',borderRadius:'150px 150px 6px 6px',background:'linear-gradient(160deg,#f7c9cf,#c97b84 70%,#9a5560)'},800,'pop');
  [[140,220,34,'#e8a6ae'],[420,260,28,'#fff'],[150,470,40,'#c97b84'],[410,470,32,'#f1b9bf'],[440,200,22,'#c97b84'],[120,350,22,'#fff']].forEach((q,i)=>{R(H,s,{left:q[0]-30+'px',top:q[1]+10+'px',width:'38px',height:'18px',borderRadius:'50%',background:'#9db4a0',rotate:'-30deg'},1000+i*120,'pop');flower(q[0],q[1],q[2],q[3],1050+i*120)});
  [['ブーケ S','¥3,300'],['ブーケ M','¥5,500'],['鉢植え','¥4,400']].forEach((q,i)=>{T(H,s,{left:40+i*160+'px',width:'160px',top:'536px',textAlign:'center',fontFamily:F.min,fontSize:'16px',color:C,borderLeft:i?'1px solid rgba(91,75,73,.3)':'none',boxSizing:'border-box'},q[0],1700+i*120);T(H,s,{left:40+i*160+'px',width:'160px',top:'562px',textAlign:'center',fontFamily:F.serif,fontSize:'22px',color:C},q[1],1750+i*120,'fade')});
  T(H,s,{left:'110px',width:'340px',top:'614px',textAlign:'center',border:'1px solid #c97b84',padding:'10px 0',fontFamily:F.min,fontSize:'15px',lineHeight:'1.8',color:'#c97b84',whiteSpace:'pre-line',boxSizing:'border-box'},'ご予約締切 5.5 mon\nお渡し 5.9 fri — 5.11 sun ／ 全国配送OK',2100,'fade');
  T(H,s,{left:'0',width:'560px',top:'712px',textAlign:'center',fontFamily:F.serif,fontWeight:'500',fontSize:'30px',letterSpacing:'.12em',color:C},t,2300,'fade');T(H,s,{left:'0',width:'560px',top:'756px',textAlign:'center',fontFamily:F.min,fontSize:'11px',color:C},'10:00 – 19:00 ／ 〇〇市〇〇町0-0-0 ／ TEL 000-000-0000',2400,'fade');
  for(let i=0;i<8;i++){const pt=H.abs({left:rnd(0,540)+'px',top:'-20px',width:'14px',height:'10px',borderRadius:'50% 0',background:pick(['#e8a6ae','#fff','#c97b84'])},s);H.a(pt,[{transform:'translate(0,0) rotate(0)'},{transform:`translate(${rnd(-80,80)}px,820px) rotate(${rnd(200,600)}deg)`}],{d:rnd(5000,8000),dl:rnd(0,4000),e:E.lin,i:Infinity})}}});

defG({no:'10',cat:'FLYER',name:'美容クリニックのキャンペーン',en:'Beauty Clinic Campaign',text:'nobu clinic',lead:'ベージュとくすみピンク、モデルの写真。美容雑誌の広告のような、上品なキャンペーンチラシ。',
use:'<b>美容クリニック・アートメイク・エステ・脱毛・まつげサロン</b>のキャンペーンに。高級感と清潔感で「ここなら任せられる」と思ってもらえます。',
tips:['モデル写真は紙面の上半分を大きく使い、文字は写真のない側にまとめます','ベージュ・グレージュ・くすみピンクの3色に、文字はこげ茶。真っ黒を使わないのが上品さのコツ','料金表は細い線だけで組み、キャンペーン価格だけをくすみピンクで目立たせます'],
p:'',
run(H,t){desk(H);const s=sheet(H,560,792,{background:'radial-gradient(circle at 70% 20%,#fbf7f2,#ece3d9 60%,#e2d6ca)'});const C='#5a463c',MV='#b88a8a';
  T(H,s,{right:'-6px',top:'40px',writingMode:'vertical-rl',fontFamily:F.serif,fontWeight:'700',fontSize:'84px',letterSpacing:'.08em',color:'rgba(255,255,255,.75)'},'SPECIAL',200,'fade');
  const ph=R(H,s,{left:'250px',top:'0',width:'250px',height:'400px',background:'linear-gradient(160deg,#efe6dd,#d9c7b8)',overflow:'hidden'},300,'fade');H.abs({left:'40px',top:'40px',width:'190px',height:'300px',borderRadius:'95px 95px 60px 60px',background:'linear-gradient(170deg,#8a5a3c,#5e3a26)'},ph);H.abs({left:'70px',top:'80px',width:'120px',height:'150px',borderRadius:'50% 50% 46% 46%',background:'linear-gradient(160deg,#f6e2d3,#e9c8b2)'},ph);H.abs({left:'50px',top:'290px',width:'170px',height:'140px',borderRadius:'80px 80px 0 0',background:'#f4ede6'},ph);H.abs({left:'60px',top:'190px',width:'40px',height:'90px',borderRadius:'20px',background:'#ecd2bf',rotate:'-20deg'},ph);
  T(H,s,{left:'30px',top:'40px',fontFamily:"'Great Vibes',cursive",fontSize:'40px',color:C},'Medical Art Make',500,'fade');
  T(H,s,{left:'30px',top:'96px',fontFamily:F.min,fontWeight:'800',fontSize:'40px',color:C},'アートメイク',600);T(H,s,{left:'32px',top:'148px',fontFamily:F.serif,fontWeight:'700',fontSize:'22px',letterSpacing:'.1em',color:C},'GUEST ARTIST',700,'fade');
  T(H,s,{left:'32px',top:'190px',fontFamily:F.min,fontSize:'13px',color:C},'メイクに自信がない、時間がかかる…',800,'fade');T(H,s,{left:'32px',top:'214px',fontFamily:F.min,fontWeight:'800',fontSize:'22px',lineHeight:'1.4',color:C,whiteSpace:'pre-line'},'医療アートメイクで\n理想の自分に',900);
  T(H,s,{left:'34px',top:'300px',width:'92px',height:'92px',borderRadius:'50%',background:MV,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',fontFamily:F.min,fontSize:'12px',lineHeight:'1.4',whiteSpace:'pre-line'},'症例件数\n1,500件\n以上',1000,'pop');
  const cp=T(H,s,{left:'400px',top:'330px',width:'136px',height:'136px',borderRadius:'50%',background:'#c99a9a',color:'#fff',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:F.min,boxShadow:'0 6px 20px rgba(90,70,60,.2)'},null,1100,'pop');H.el('div',{fontFamily:"'Great Vibes',cursive",fontSize:'24px'},cp,'Campaign');H.el('div',{fontSize:'12px'},cp,'眉 アートメイク');H.el('div',{fontSize:'24px',fontWeight:'800'},cp,'¥44,000');
  ['パウダー眉','毛並み眉','リップ','アイライン','ほくろ'].forEach((w,i)=>{R(H,s,{left:30+i*100+'px',top:'420px',width:'88px',height:'72px',background:'linear-gradient(135deg,#d8c3b4,#b79c8a)'},1200+i*80,'pop');T(H,s,{left:30+i*100+'px',width:'88px',textAlign:'center',top:'496px',fontFamily:F.min,fontSize:'10px',color:C},w,1250+i*80,'fade')});
  T(H,s,{left:'30px',top:'528px',fontFamily:F.min,fontWeight:'800',fontSize:'16px',color:C},'＋ アートメイク料金表',1500,'fade');
  [['眉（パウダー）','¥60,000','¥45,000'],['リップ','¥88,000','¥64,000'],['アイライン','¥55,000','¥40,000']].forEach((r,i)=>{const y=560+i*36;R(H,s,{left:'30px',width:'500px',top:y+30+'px',height:'1px',background:'rgba(90,70,60,.25)'},1600+i*100);T(H,s,{left:'34px',top:y+'px',fontFamily:F.min,fontSize:'15px',color:C},r[0],1600+i*100,'fade');T(H,s,{left:'250px',top:y+'px',fontFamily:F.min,fontSize:'14px',color:'#9a8a80',textDecoration:'line-through'},r[1],1650+i*100,'fade');T(H,s,{left:'360px',top:y-4+'px',fontFamily:F.min,fontWeight:'800',fontSize:'20px',color:MV},'→ '+r[2],1700+i*100,'fade')});
  R(H,s,{left:'0',bottom:'0',width:'560px',height:'90px',background:'#a98383'},1900,'fade');T(H,s,{left:'0',width:'560px',textAlign:'center',top:'716px',fontFamily:F.serif,fontWeight:'700',fontSize:'26px',letterSpacing:'.2em',color:'#fff'},t,2000,'fade');T(H,s,{left:'0',width:'560px',textAlign:'center',top:'756px',fontFamily:F.min,fontSize:'12px',color:'#fff'},'ご予約・カウンセリングは LINE から',2100,'fade')}});

/* POSTER */
defG({no:'11',cat:'POSTER',name:'北欧家具ショップのポスター',en:'Nordic Furniture Poster',text:'nobu furniture',lead:'セージグリーンとオーク材の色。余白たっぷりの、暮らしを感じる家具ポスター。',
use:'<b>家具店・インテリアショップ・雑貨店・住宅メーカー</b>のフェアや店頭ポスターに。',
tips:['写真（イラスト）は紙面の6割を占めるくらい大きく。文字は控えめに','色は「壁・床・家具」の3色を決めて、文字もその中から選ぶとまとまります','キャッチコピーは短く、句点「。」で終わる一文にすると上品'],
p:`北欧家具ショップの「AUTUMN FAIR」ポスターを、余白たっぷりで暮らしを感じるデザインで B2縦（515×728mm、画面では縦横比を同じに）で作ってください。
・店名：「{T}」
・配色：背景はオフホワイト #F2F0EA、セージグリーン #A8B5A0、オーク材の色 #C9A27E、文字はチャコール #3A3A3A
・フォント：英字は Montserrat（300、字間広め）、日本語は Zen Kaku Gothic New（400/700）
・上部60%：お部屋の写真が入る枠。今は CSS で、セージグリーンの壁・オーク色の床・シンプルな椅子（SVGの線画）・観葉植物・丸いペンダントライトを描いたイラストにする
・その下：日本語のキャッチコピー「暮らしに、余白を。」を大きめに、左寄せ
・英字の「AUTUMN FAIR」と日付「10.1 — 10.31」を細い英字で
・右下：「対象家具 最大20%OFF」「送料無料」を細い枠の中に
・最下部：店名（英字の細い字、字間広め）、住所 〇〇市〇〇町0-0-0、営業時間
・全体：要素は左揃え、余白は紙面の外周に8%以上`,
run(H,t){desk(H);const s=sheet(H,560,792,{background:'#f2f0ea'});const C='#3a3a3a';
  const rm=R(H,s,{left:'40px',top:'40px',width:'480px',height:'440px',background:'#a8b5a0',overflow:'hidden'},300,'fade');R(H,rm,{left:'0',right:'0',bottom:'0',height:'110px',background:'repeating-linear-gradient(90deg,#c9a27e 0 58px,#bf966f 58px 60px)'},500,'up');
  const lamp=R(H,rm,{left:'300px',top:'0',width:'2px',height:'120px',background:C},700,'drop');const sh=R(H,rm,{left:'260px',top:'118px',width:'82px',height:'42px',borderRadius:'42px 42px 0 0',background:'#f2f0ea'},800,'drop');H.a(sh,[{boxShadow:'0 30px 60px rgba(255,240,200,0)'},{boxShadow:'0 40px 90px rgba(255,240,200,.9)'}],{d:2000,dl:1200,dir:'alternate',i:Infinity,f:'none'});
  const ch=R(H,rm,{left:'120px',top:'220px',width:'150px',height:'120px'},1000,'up');H.abs({left:'10px',top:'40px',width:'130px',height:'24px',borderRadius:'12px',background:'#e9e4da'},ch);H.abs({left:'14px',top:'-20px',width:'16px',height:'70px',borderRadius:'8px',background:'#e9e4da'},ch);[20,120].forEach(x=>H.abs({left:x+'px',top:'60px',width:'6px',height:'60px',background:'#8a6a4c',rotate:x<50?'8deg':'-8deg'},ch));
  const pl=R(H,rm,{left:'360px',top:'200px',width:'80px',height:'130px'},1200,'up');[[-30,'#5f7d5a'],[0,'#6f8f69'],[30,'#5f7d5a']].forEach(q=>H.abs({left:'26px',top:'0',width:'28px',height:'80px',borderRadius:'50%',background:q[1],rotate:q[0]+'deg',transformOrigin:'50% 100%'},pl));H.abs({left:'18px',top:'80px',width:'44px',height:'50px',borderRadius:'0 0 10px 10px',background:'#f2f0ea'},pl);
  T(H,s,{left:'40px',top:'510px',fontFamily:F.zen,fontWeight:'700',fontSize:'40px',color:C,letterSpacing:'.08em'},'暮らしに、余白を。',1500);
  T(H,s,{left:'42px',top:'578px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'18px',letterSpacing:'.4em',color:C},'AUTUMN FAIR',1700,'fade');T(H,s,{left:'42px',top:'606px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'26px',letterSpacing:'.12em',color:C},'10.1 — 10.31',1800,'fade');
  T(H,s,{left:'330px',top:'582px',width:'190px',textAlign:'center',border:'1px solid '+C,padding:'10px 0',fontFamily:F.zen,fontSize:'14px',lineHeight:'1.8',color:C,whiteSpace:'pre-line',boxSizing:'border-box'},'対象家具 最大20%OFF\n送料無料',2000,'fade');
  R(H,s,{left:'40px',width:'480px',top:'680px',height:'1px',background:C,opacity:.3},2100);
  T(H,s,{left:'40px',top:'700px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'24px',letterSpacing:'.3em',color:C},t,2200,'fade');T(H,s,{left:'40px',top:'740px',fontFamily:F.zen,fontSize:'11px',color:C},'〇〇市〇〇町0-0-0 ／ 11:00 – 19:00（水曜定休）',2300,'fade')}});

defG({no:'12',cat:'POSTER',name:'美容室のモードポスター',en:'Hair Salon Mode',text:'hair salon nobu',lead:'白黒と大きな細い英字。ファッション誌の表紙のような、美容室のポスター。',
use:'<b>美容室・ヘアサロン・アパレル・セレクトショップ</b>の店頭ポスターや、新スタイル・キャンペーンの告知に。',
tips:['人物写真はモノクロにすると、どんな写真でも一気におしゃれに見えます','極細の英字を巨大にして、人物の頭の後ろに重ねるとファッション誌風','日本語は縦書きで小さく添えるくらいがちょうどいい'],
p:`美容室のポスターを、ファッション誌の表紙のような白黒のモードなデザインで B2縦（画面では縦横比を同じに）で作ってください。
・店名：「{T}」
・配色：白 #FFFFFF、黒 #0E0E0E、グレー #9A9A9A。色はこの3つだけ
・フォント：英字は Montserrat（300、極細を巨大に）、日本語は Shippori Mincho B1
・背景：薄いグレーのグラデーション
・中央：モデルの写真が入る枠（モノクロ）。今は CSS で、横顔のシルエット（頭・ボブヘア・首・肩）を黒〜グレーのグラデーションで描く
・人物の頭の後ろに、極細の英字「NEW STYLE」を紙面の幅いっぱいの大きさで重ねる（人物の手前と奥で文字が交差して見えるように、mix-blend-mode を使う）
・右側：縦書きの明朝体で「髪が変わると、毎日が変わる。」
・左下：「AUTUMN COLLECTION 2025」と「カット＋カラー 初回20%OFF」を小さく
・最下部：店名（英字、字間広め）、住所 〇〇市〇〇町0-0-0、予約は Instagram から
・全体：情報は最小限。写真と文字の大きさのコントラストで見せる`,
run(H,t){desk(H);const s=sheet(H,560,792,{background:'linear-gradient(#f4f4f4,#d9d9d9)'});const K='#0e0e0e';
    const m=R(H,s,{left:'130px',top:'190px',width:'300px',height:'602px'},700,'up');H.abs({left:'60px',top:'40px',width:'180px',height:'230px',borderRadius:'50% 50% 45% 45%',background:'linear-gradient(160deg,#cfcfcf,#7a7a7a)'},m);H.abs({left:'30px',top:'0',width:'240px',height:'250px',borderRadius:'120px 120px 30px 60px',background:'linear-gradient(170deg,#3a3a3a,#0e0e0e)'},m);H.abs({left:'110px',top:'250px',width:'80px',height:'110px',background:'linear-gradient(#9a9a9a,#6a6a6a)'},m);H.abs({left:'0',top:'340px',width:'300px',height:'300px',borderRadius:'150px 150px 0 0',background:'linear-gradient(#2a2a2a,#0e0e0e)'},m);
  T(H,s,{left:'-10px',top:'150px',width:'580px',textAlign:'center',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'118px',lineHeight:'.95',letterSpacing:'-.02em',color:'#fff',mixBlendMode:'difference',whiteSpace:'pre-line'},'NEW\nSTYLE',1100,'fade');
  T(H,s,{right:'34px',top:'80px',writingMode:'vertical-rl',fontFamily:F.min,fontWeight:'500',fontSize:'20px',letterSpacing:'.25em',color:K},'髪が変わると、毎日が変わる。',1400,'drop');
  T(H,s,{left:'30px',top:'600px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'12px',letterSpacing:'.3em',color:'#fff',mixBlendMode:'difference'},'AUTUMN COLLECTION 2025',1700,'fade');T(H,s,{left:'30px',top:'624px',fontFamily:F.min,fontSize:'14px',color:'#fff'},'カット＋カラー 初回20%OFF',1800,'fade');
  R(H,s,{left:'0',bottom:'0',width:'560px',height:'110px',background:'rgba(14,14,14,.92)'},1900,'fade');
  T(H,s,{left:'30px',top:'704px',fontFamily:"'Montserrat',sans-serif",fontWeight:'300',fontSize:'26px',letterSpacing:'.3em',color:'#fff'},t,2100,'fade');T(H,s,{left:'30px',top:'746px',fontFamily:F.min,fontSize:'11px',color:'#9a9a9a'},'〇〇市〇〇町0-0-0 ／ ご予約は Instagram から',2200,'fade')}});

defG({no:'13',cat:'POSTER',name:'町内会の夏祭り',en:'Summer Festival',text:'三丁目町内会',lead:'夜空に提灯と花火。誰でも読める大きな文字の、町内会の夏祭りポスター。',
use:'<b>町内会・自治会・商店街・学校のお祭り、盆踊り、地域イベント</b>に。掲示板で遠くからでも読めるようにしています。',
tips:['日時と場所は、ポスターの中でいちばん大きな「情報」にする（年配の方も読めるように）','提灯は赤と白の楕円に、横線を数本引くだけで提灯らしくなります','花火は放射状の線を円形に並べ、ゆっくり広げると夏の夜の雰囲気に'],
p:`町内会の「夏祭り」ポスターを、夜空に提灯と花火が映える、誰でも読みやすいデザインで A2縦（画面では縦横比を同じに）で作ってください。
・主催：「{T}」
・配色：夜空の紺 #14213D → #3A2E5C のグラデーション、提灯の赤 #E63946、白、黄色 #FFD166
・フォント：見出しは Yuji Syuku（筆文字）、日時と場所は Noto Sans JP 900（大きく太く）
・上部：紙面の横いっぱいに、ひもでつながった提灯を7つ（赤と白を交互に）。ゆっくり揺れる
・空：花火を3つ（黄色・ピンク・水色）。放射状の線を円形に並べ、広がって消えるのを繰り返す
・中央：白い筆文字で大きく「夏祭り」。その上に小さく「第〇回」
・日時：黄色の帯に紺の極太文字で「8月16日（土）17:00〜21:00」。下に「雨天時は翌日に延期」
・場所：白い太字で「会場：〇〇公園（〇〇小学校となり）」
・内容：丸いアイコン付きで「盆踊り」「屋台」「花火」「子どもくじ」の4つを横並び
・最下部：主催者名、お問い合わせ 000-000-0000
・全体：遠くからでも読めるよう、文字は大きく・コントラストを強く`,
run(H,t){desk(H);const s=sheet(H,560,792,{background:'linear-gradient(#14213d,#3a2e5c)'});
  const fw=(x,y,r,c,dl)=>{const f=H.abs({left:x+'px',top:y+'px'},s);for(let k=0;k<16;k++)H.abs({left:'0',top:'0',width:r+'px',height:'3px',borderRadius:'2px',background:`linear-gradient(90deg,transparent,${c})`,transformOrigin:'0 50%',rotate:k*22.5+'deg'},f);H.a(f,[{scale:'.1',opacity:1},{scale:'1',opacity:1,offset:.5},{scale:'1.1',opacity:0}],{d:2200,dl,e:E.out,i:Infinity})};
  fw(110,250,80,'#ffd166',600);fw(450,200,90,'#ff8fab',1300);fw(300,170,60,'#8ecae6',2000);
  const sv=H.svg(560,140,s);H.sv('path',{d:'M0,30 Q280,110 560,30',stroke:'#aaa',fill:'none','stroke-width':2},sv);
  for(let i=0;i<7;i++){const x=40+i*80,y=30+80*(1-Math.pow((x-280)/280,2))*.5;const l=R(H,s,{left:x-22+'px',top:y+'px',width:'44px',height:'58px',transformOrigin:'50% 0'},300+i*100,'drop');H.abs({inset:'0',borderRadius:'45%',background:i%2?'#fff':'#e63946',backgroundImage:'repeating-linear-gradient(transparent 0 9px,rgba(0,0,0,.18) 9px 11px)',boxShadow:`0 0 24px ${i%2?'rgba(255,255,255,.6)':'rgba(230,57,70,.7)'}`},l);H.a(l,[{rotate:'-5deg'},{rotate:'5deg'}],{d:1600+i*90,dir:'alternate',i:Infinity,e:E.soft,f:'none'})}
  T(H,s,{left:'0',width:'560px',top:'330px',textAlign:'center',fontFamily:F.sans,fontWeight:'700',fontSize:'20px',color:'#fff',letterSpacing:'.3em'},'第〇回',800,'fade');
  T(H,s,{left:'0',width:'560px',top:'356px',textAlign:'center',fontFamily:F.brush,fontSize:'120px',color:'#fff',lineHeight:'1',textShadow:'0 0 30px rgba(255,209,102,.5)'},'夏祭り',1000,'pop');
  R(H,s,{left:'30px',width:'500px',top:'500px',height:'60px',background:'#ffd166',transformOrigin:'left'},1400,'grow');T(H,s,{left:'0',width:'560px',top:'510px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'30px',color:'#14213d'},'8月16日（土）17:00〜21:00',1600,'fade');
  T(H,s,{left:'0',width:'560px',top:'566px',textAlign:'center',fontFamily:F.sans,fontSize:'14px',color:'#ffd166'},'雨天時は翌日に延期',1700,'fade');T(H,s,{left:'0',width:'560px',top:'596px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'22px',color:'#fff'},'会場：〇〇公園（〇〇小学校となり）',1800);
  ['盆踊り','屋台','花火','子どもくじ'].forEach((w,i)=>T(H,s,{left:30+i*126+'px',top:'644px',width:'116px',height:'56px',lineHeight:'56px',textAlign:'center',borderRadius:'28px',border:'2px solid #fff',fontFamily:F.sans,fontWeight:'700',fontSize:'18px',color:'#fff',boxSizing:'border-box'},w,2000+i*120,'pop'));
  T(H,s,{left:'0',width:'560px',top:'726px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'22px',color:'#fff'},'主催：'+t,2500);T(H,s,{left:'0',width:'560px',top:'760px',textAlign:'center',fontFamily:F.sans,fontSize:'12px',color:'#ccc'},'お問い合わせ 000-000-0000',2600,'fade')}});

defG({no:'14',cat:'POSTER',name:'保育園の園児募集',en:'Nursery Enrollment',text:'nobu保育園',lead:'パステルカラーと丸い文字。おひさまと雲がにっこりする、やさしい園児募集ポスター。',
use:'<b>保育園・幼稚園・こども園・習い事教室・児童館</b>の募集や見学会の告知に。',
tips:['丸ゴシック（Zen Maru Gothic）と角の丸い図形で、全体をやわらかく','色はパステル4色まで。文字は真っ黒ではなく濃いグレーやこげ茶にするとやさしい','見学会の日程はカレンダー風の四角に入れると、保護者がひと目で分かります'],
p:`保育園の「園児募集・見学会」ポスターを、パステルカラーと丸い文字のやさしいデザインで A3縦（画面では縦横比を同じに）で作ってください。
・園名：「{T}」
・配色：背景はクリーム #FFF8E7、パステルの黄 #FFD97D、ピンク #FFADAD、水色 #A0D8EF、黄緑 #B5E48C、文字はこげ茶 #5C4033
・フォント：Zen Maru Gothic（500/900）。全体を丸い文字で
・上部：にっこり笑うおひさま（黄色い円＋放射状の光＋目と口）と、ふわふわの雲を2つ。ゆっくり上下に揺れる
・見出し：大きな丸文字で「園児募集」。1文字ずつ違うパステル色の丸の上に白抜きで載せる
・その下：「0歳〜5歳 若干名」「2026年4月入園」
・見学会：カレンダー風の角丸の四角を3つ横並び（11/8 土・11/15 土・11/22 土）、その下に「10:00〜11:30 ／ 要予約」
・園の特徴：アイコン付きで3つ（「園庭で毎日外あそび」「給食は手作り」「延長保育 19:00まで」）
・最下部：園名、住所 〇〇市〇〇町0-0-0、電話 000-000-0000、QRコードの枠
・全体：角はすべて丸く、余白は広めに、にぎやかすぎないように`,
run(H,t){desk(H);const s=sheet(H,560,792,{background:'#fff8e7'});const C='#5c4033',MG="'Zen Maru Gothic',sans-serif";
  const sun=R(H,s,{left:'60px',top:'40px',width:'120px',height:'120px'},300,'pop');for(let k=0;k<12;k++)H.abs({left:'56px',top:'-14px',width:'8px',height:'30px',borderRadius:'4px',background:'#ffd97d',transformOrigin:'50% 74px',rotate:k*30+'deg'},sun);H.abs({left:'14px',top:'14px',width:'92px',height:'92px',borderRadius:'50%',background:'#ffd97d'},sun);[38,70].forEach(x=>H.abs({left:x+'px',top:'48px',width:'10px',height:'12px',borderRadius:'50%',background:C},sun));H.abs({left:'44px',top:'66px',width:'32px',height:'16px',borderRadius:'0 0 16px 16px',background:C},sun);H.a(sun,[{rotate:'-6deg'},{rotate:'6deg'}],{d:1800,dir:'alternate',i:Infinity,f:'none',e:E.soft});
  [[330,60,1],[420,130,.7]].forEach((q,i)=>{const c=R(H,s,{left:q[0]+'px',top:q[1]+'px',width:'150px',height:'60px',scale:q[2]},500+i*200,'left');[[0,20,60],[36,0,80],[86,16,60]].forEach(b=>H.abs({left:b[0]+'px',top:b[1]+'px',width:b[2]+'px',height:b[2]+'px',borderRadius:'50%',background:'#fff',boxShadow:'0 4px 0 #a0d8ef'},c));H.a(c,[{translate:'0 0'},{translate:'0 -10px'}],{d:2000+i*500,dir:'alternate',i:Infinity,f:'none',e:E.soft})});
  ['園','児','募','集'].forEach((ch,i)=>{const c=['#ffadad','#a0d8ef','#b5e48c','#ffd97d'][i];T(H,s,{left:40+i*124+'px',top:'200px',width:'110px',height:'110px',borderRadius:'50%',background:c,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:MG,fontWeight:'900',fontSize:'68px',color:'#fff'},ch,800+i*150,'pop')});
  T(H,s,{left:'0',width:'560px',top:'330px',textAlign:'center',fontFamily:MG,fontWeight:'900',fontSize:'24px',color:C},'0歳〜5歳 若干名 ／ 2026年4月入園',1500);
  T(H,s,{left:'0',width:'560px',top:'384px',textAlign:'center',fontFamily:MG,fontWeight:'900',fontSize:'20px',color:'#ff8f8f'},'＼ 見学会 ／',1600,'fade');
  [['11/8','土'],['11/15','土'],['11/22','土']].forEach((d,i)=>{const c=R(H,s,{left:70+i*146+'px',top:'420px',width:'128px',height:'100px',borderRadius:'18px',background:'#fff',boxShadow:'0 4px 0 '+['#ffadad','#a0d8ef','#b5e48c'][i]},1700+i*130,'pop');H.abs({left:'0',top:'0',width:'128px',height:'26px',borderRadius:'18px 18px 0 0',background:['#ffadad','#a0d8ef','#b5e48c'][i]},c);H.el('div',{position:'absolute',left:'0',right:'0',top:'34px',textAlign:'center',fontFamily:MG,fontWeight:'900',fontSize:'36px',color:C},c,d[0]);H.el('div',{position:'absolute',left:'0',right:'0',top:'74px',textAlign:'center',fontFamily:MG,fontSize:'14px',color:C},c,d[1]+'曜日')});
  T(H,s,{left:'0',width:'560px',top:'536px',textAlign:'center',fontFamily:MG,fontWeight:'500',fontSize:'16px',color:C},'10:00〜11:30 ／ 要予約',2100,'fade');
  [['園庭で毎日外あそび','#b5e48c'],['給食は手作り','#ffd97d'],['延長保育 19:00まで','#a0d8ef']].forEach((f,i)=>{T(H,s,{left:'110px',top:584+i*40+'px',fontFamily:MG,fontWeight:'500',fontSize:'18px',color:C,paddingLeft:'36px'},f[0],2200+i*120,'left');R(H,s,{left:'110px',top:588+i*40+'px',width:'24px',height:'24px',borderRadius:'50%',background:f[1]},2200+i*120,'pop')});
  R(H,s,{left:'30px',width:'500px',top:'712px',height:'64px',borderRadius:'32px',background:'#fff'},2500,'fade');T(H,s,{left:'60px',top:'718px',fontFamily:MG,fontWeight:'900',fontSize:'24px',color:C},t,2600);T(H,s,{left:'60px',top:'750px',fontFamily:MG,fontSize:'11px',color:C},'〇〇市〇〇町0-0-0 ／ TEL 000-000-0000',2650,'fade');R(H,s,{left:'464px',top:'718px',width:'52px',height:'52px',background:'repeating-conic-gradient(#5c4033 0 25%,#fff 0 50%) 0 0/13px 13px',borderRadius:'6px'},2700,'pop')}});

defG({no:'15',cat:'POSTER',name:'セミナー告知のチラシ',en:'Seminar Flyer',text:'nobu株式会社',lead:'黄色と紺の2色に、雲形の吹き出しの大見出し。情報が多くてもスッと読める勉強会のチラシ。',
use:'<b>セミナー・勉強会・説明会・講演会・商工会のイベント</b>の告知に。日時・場所・内容・講師と情報が多いチラシを、読みやすく整理できます。',
tips:['色は黄色・紺・白の3色だけ。情報が多いチラシほど、色数をしぼると読みやすくなります','「日時」「場所」「内容」を紺の札（ラベル）にして左にそろえると、ひと目で探せます','講師の顔写真があると参加率が上がります。肩書きと一緒に右下へ'],
p:'',
run(H,t){desk(H);const s=sheet(H,560,792,{background:'#ffd23f'});const NV='#1d2a6b',MG="'Zen Maru Gothic',sans-serif";
  T(H,s,{left:'0',width:'560px',top:'34px',textAlign:'center',fontFamily:MG,fontWeight:'900',fontSize:'18px',color:NV},'＼ 小規模事業者向け ／',200,'fade');
  const cl=R(H,s,{left:'24px',top:'62px',width:'512px',height:'176px',background:'#fff',borderRadius:'90px 70px 80px 60px / 60px 80px 60px 80px'},300,'pop');
  const h=T(H,cl,{left:'0',width:'512px',top:'16px',textAlign:'center',fontFamily:MG,fontWeight:'900',fontSize:'50px',lineHeight:'1.25',color:NV,whiteSpace:'pre-line'},'補助金 活用\n攻略セミナー',500,'pop');
  T(H,s,{left:'0',width:'560px',top:'246px',textAlign:'center',fontFamily:MG,fontWeight:'900',fontSize:'15px',color:NV},'［ 第1回 経営者勉強会 ］',700,'fade');
  T(H,s,{left:'448px',top:'200px',width:'96px',height:'96px',borderRadius:'50%',background:NV,color:'#fff',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:MG,fontWeight:'900',fontSize:'11px',lineHeight:'1.3'},null,900,'pop').innerHTML='初回開催記念<br><span style="font-size:30px">無料</span>';
  T(H,s,{left:'24px',top:'290px',width:'250px',background:NV,color:'#fff',padding:'8px 12px',fontFamily:MG,fontWeight:'900',fontSize:'15px',lineHeight:'1.5',whiteSpace:'pre-line',boxSizing:'border-box'},'補助金を活用して、\nWebを使ったPR活動に',1000,'left');
  T(H,s,{left:'24px',top:'352px',width:'250px',fontFamily:F.sans,fontSize:'11px',lineHeight:'1.7',color:NV,whiteSpace:'normal'},'HPやチラシで集客したい事業者向けに、補助金の概要・活用方法・申請のコツをやさしく解説します。',1100,'fade');
  const ck=R(H,s,{left:'290px',top:'290px',width:'246px',height:'150px',background:'#fff',borderRadius:'26px'},1100,'pop');H.el('div',{position:'absolute',left:'0',right:'0',top:'12px',textAlign:'center',fontFamily:MG,fontWeight:'900',fontSize:'13px',color:NV},ck,'こんな悩みを持つ方におすすめ！');
  ['販路開拓に悩んでいる','集客の時間・人手がない','HPやチラシを活用したい','補助金について知りたい'].forEach((w,i)=>H.el('div',{position:'absolute',left:'18px',top:40+i*25+'px',fontFamily:F.sans,fontSize:'12px',color:NV},ck,'☑ '+w));
  [['日時',null],['場所','nobu株式会社 または Zoom'],['セミナー内容','① 補助金の概要と活用例\n② 申請書作成のポイント\n③ 採択のコツ']].forEach((r,i)=>{const y=[452,532,586][i];T(H,s,{left:'24px',top:y+'px',width:'96px',textAlign:'center',background:NV,color:'#fff',padding:'6px 0',fontFamily:MG,fontWeight:'900',fontSize:'13px'},r[0],1300+i*150,'left');
    if(i===0){const d=T(H,s,{left:'132px',top:y-14+'px',fontFamily:MG,fontWeight:'900',color:NV,lineHeight:'1.1'},null,1350,'fade');d.innerHTML='<span style="font-size:18px">2026/</span><span style="font-size:52px">1/28</span><span style="font-size:16px"> 水</span><br><span style="font-size:16px">14:00 - 15:30</span>'}
    else T(H,s,{left:'132px',top:y+(i===1?2:0)+'px',fontFamily:MG,fontWeight:'900',fontSize:i===1?'17px':'12px',lineHeight:'1.7',color:NV,whiteSpace:'pre-line'},i===1?t+' または Zoom':r[1],1350+i*150,'fade')});
  T(H,s,{left:'330px',top:'552px',background:NV,color:'#fff',padding:'3px 12px',fontFamily:MG,fontWeight:'900',fontSize:'12px'},'講師紹介',1700,'fade');
  [0,1].forEach(i=>{const b=R(H,s,{left:'330px',top:578+i*74+'px',width:'206px',height:'66px',background:'#fff'},1800+i*120,'pop');H.abs({left:'0',top:'0',width:'66px',height:'66px',background:'radial-gradient(circle at 50% 40%,#e9c9b0 0 22%,transparent 23%),radial-gradient(circle at 50% 110%,#2b3550 0 48%,transparent 49%),#dfe6f0'},b);H.el('div',{position:'absolute',left:'76px',top:'12px',fontFamily:F.sans,fontSize:'10px',color:NV},b,'中小企業診断士');H.el('div',{position:'absolute',left:'76px',top:'30px',fontFamily:MG,fontWeight:'900',fontSize:'16px',color:NV},b,'〇〇 〇〇')});
  R(H,s,{left:'24px',top:'700px',width:'512px',height:'72px',background:'#fff',borderRadius:'16px'},2100,'fade');T(H,s,{left:'44px',top:'716px',fontFamily:MG,fontWeight:'900',fontSize:'13px',lineHeight:'1.6',color:NV,whiteSpace:'pre-line'},'お問い合わせはこちら\nまたはSNSで直接連絡をお願いします',2200,'fade');qr(H,s,400,710,52,NV,'#fff',2300);qr(H,s,466,710,52,NV,'#fff',2350)}});

