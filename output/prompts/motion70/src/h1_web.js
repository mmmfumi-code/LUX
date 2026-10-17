/* ===== WEBSITE 01-10 ===== */
CUR_SEC='h';
const rise=(H,el,dl,d)=>H.a(el,[{transform:'translateY(40px)',opacity:0},{transform:'translateY(0)',opacity:1}],{d:d||800,dl:dl||0});
const nav=(H,o)=>{const n=H.abs({left:'0',right:'0',top:'0',height:'90px',display:'flex',alignItems:'center',padding:'0 70px',gap:'40px',zIndex:'5',color:o.c||'#fff',fontFamily:o.f||F.zen,fontSize:'18px'},o.parent);
  H.el('div',{fontFamily:o.lf||F.heavy,fontSize:o.ls||'26px',marginRight:'auto',letterSpacing:o.lsp||'0',whiteSpace:'nowrap'},n,o.logo);(o.items||[]).forEach(t=>H.el('div',{opacity:.8,whiteSpace:'nowrap'},n,t));
  if(o.cta)H.el('div',Object.assign({padding:'12px 26px',borderRadius:'999px',background:o.cb||'#fff',color:o.cc||'#000',fontWeight:'700',whiteSpace:'nowrap'},o.ctaCss||{}),n,o.cta);H.a(n,[{opacity:0,transform:'translateY(-20px)'},{opacity:1,transform:'translateY(0)'}],{d:700});return n};
const defH=o=>{o.loop=o.loop||7000;def(o)};

defH({no:'01',cat:'CORP',name:'ダークSaaS',en:'Dark Grid & Glow',lead:'黒地に光のグリッド。AI・ITサービスの「今っぽい」定番。',text:'Flowbase',bg:'#06070b',
use:'<b>AIツール・SaaS・アプリ・IT企業</b>のサービスサイトに。暗い背景に光る要素で、先進性と信頼感を同時に出せます。',
tips:['見出しの一部だけグラデーション文字にするのが今風。全部にかけるとくどくなります','背景のグリッドは不透明度5%以下に。主張させないのがコツ','実際の画面（ダッシュボード）の画像を入れる枠は、少し傾けて浮かせると立体感が出ます'],
p:`AI・SaaS向けの、暗い背景に光るグリッドが映える「ダークSaaS」スタイルのサービスサイトを作ってください。
・サービス名：{T}（業務を自動化するAIツールという想定。コピーは自由に考えてOK）
・配色：背景 #06070B、文字 #F4F5F7、サブ文字 #8A8F9C、アクセント #7C5CFF → #2EE6C9 のグラデーション
・フォント：見出し Noto Sans JP 900、英字と数字は Inter Tight または Space Grotesk
・ファーストビュー：
　・背景に60px間隔の細いグリッド線（不透明度0.05）と、上部中央に紫の大きな光（radial-gradient、ぼかし120px）がゆっくり脈打つ
　・小さなバッジ「NEW｜v2.0 リリース」→ 大見出し2行（2行目だけグラデーション文字）→ 説明文 → ボタン2つ（「無料ではじめる」白塗り／「デモを見る」枠線）
　・下に、少し傾けたダッシュボード画面の枠（角丸20px、ガラス風の枠線、内側にグラフと数字のダミーUI）がふわふわ浮く
・セクション：導入企業ロゴの帯（自動で横に流れる）→ 3つの特徴（アイコン付きカード）→ 使い方3ステップ → 料金表（3プラン、真ん中を強調）→ よくある質問（開閉式）→ 最後のCTA → フッター
・動き：見出しは行ごとに下からマスクで現れる。カードはホバーで縁が光る`,
run(H,t){H.abs({inset:'0',backgroundImage:'linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)',backgroundSize:'60px 60px'});
  const g=H.abs({left:'400px',top:'-300px',width:'800px',height:'600px',borderRadius:'50%',background:'radial-gradient(#7c5cff,transparent 70%)',filter:'blur(60px)',opacity:.7});H.a(g,[{opacity:.5,transform:'scale(1)'},{opacity:.85,transform:'scale(1.1)'},{opacity:.5,transform:'scale(1)'}],{d:4000,e:'ease-in-out',i:Infinity});
  nav(H,{logo:t,items:['機能','料金','導入事例','ブログ'],cta:'無料ではじめる',lf:F.sans});
  const c=H.abs({left:'0',right:'0',top:'140px',display:'flex',flexDirection:'column',alignItems:'center',gap:'22px',textAlign:'center'});
  const bd=H.el('div',{border:'1px solid rgba(255,255,255,.18)',borderRadius:'999px',padding:'6px 18px',fontSize:'17px',color:'#c9c4ff',background:'rgba(124,92,255,.12)'},c,'NEW｜v2.0 リリース');
  const h1=H.el('div',{fontFamily:F.sans,fontWeight:'900',fontSize:'76px',lineHeight:'1.15',color:'#f4f5f7'},c);H.el('div',{},h1,'面倒な定型業務は、');const l2=H.el('div',{backgroundImage:'linear-gradient(90deg,#7c5cff,#2ee6c9)',WebkitBackgroundClip:'text',backgroundClip:'text',color:'transparent'},h1,'AIにまかせよう。');
  const sub=H.el('div',{fontSize:'22px',color:'#8a8f9c'},c,t+' は、毎日の作業を自動でこなすAIアシスタントです。');const bt=H.el('div',{display:'flex',gap:'16px'},c);H.el('div',{padding:'16px 34px',borderRadius:'12px',background:'#fff',color:'#06070b',fontWeight:'700',fontSize:'19px'},bt,'無料ではじめる');H.el('div',{padding:'16px 34px',borderRadius:'12px',border:'1px solid rgba(255,255,255,.3)',fontSize:'19px'},bt,'デモを見る ▶');
  [bd,h1,sub,bt].forEach((e,i)=>rise(H,e,200+i*150));
  const card=H.abs({left:'300px',top:'720px',width:'1000px',height:'420px',borderRadius:'20px',border:'1px solid rgba(255,255,255,.15)',background:'linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.02))',transform:'perspective(1400px) rotateX(18deg)',padding:'30px',display:'flex',gap:'20px'});
  for(let i=0;i<3;i++){const k=H.el('div',{flex:'1',height:'120px',borderRadius:'12px',background:'rgba(255,255,255,.05)',padding:'16px'},card);H.el('div',{fontSize:'14px',color:'#8a8f9c'},k,['処理件数','削減時間','精度'][i]);H.el('div',{fontFamily:F.mono,fontSize:'34px',fontWeight:'700',marginTop:'8px'},k,['12,480','326h','99.2%'][i])}
  H.a(card,[{transform:'perspective(1400px) rotateX(18deg) translateY(120px)',opacity:0},{transform:'perspective(1400px) rotateX(18deg) translateY(0)',opacity:1}],{d:1200,dl:900});H.a(card,[{marginTop:'0px'},{marginTop:'-12px'},{marginTop:'0px'}],{d:3000,dl:2100,e:'ease-in-out',i:Infinity});
}});

defH({no:'02',cat:'CORP',name:'グラスモーフィズム',en:'Glass Fintech',lead:'色の光の上に、すりガラスのカード。お金・アプリ系の上品な定番。',text:'Mint Pay',bg:'#0b1022',
use:'<b>フィンテック・家計簿アプリ・会員サービス</b>に。すりガラスのカードは、スマホアプリのような親しみと高級感を両立します。',
tips:['すりガラスは「背景に色の光があること」が前提。単色背景では効果が出ません','カードの縁に1pxの白い半透明の線を入れると、ガラスの厚みが出ます','数字は等幅フォントにすると、カウントアップ時にガタつきません'],
p:`色の光の上にすりガラスのカードが浮かぶ「グラスモーフィズム」スタイルの、アプリ紹介サイトを作ってください。
・サービス名：{T}（家計簿・キャッシュレス決済アプリという想定）
・配色：背景 #0B1022、光 #5EE6A8・#7FB8FF・#FF8FAB（大きなぼかし円、ゆっくり漂う）、文字 #FFFFFF
・フォント：見出し Zen Kaku Gothic New 700、数字 JetBrains Mono
・ファーストビュー：左に見出し「お金の流れが、ひと目でわかる。」と説明文、App Store／Google Play 風のボタン2つ。右に、すりガラスのカードを3枚重ねて浮かせる（backdrop-filter: blur(24px)、背景 rgba(255,255,255,.08)、縁 1px rgba(255,255,255,.25)、角丸28px）
　・カード1：今月の残高（数字がカウントアップ）とミニグラフ
　・カード2：最近の支払い3件
　・カード3：貯金目標の進捗リング
・セクション：アプリの3つの特徴 → 画面の紹介（スマホ枠が横にスライド）→ 利用者の声（3枚のカード）→ セキュリティの説明 → ダウンロードCTA → フッター
・動き：カードはマウスの位置に合わせて少し傾く（3Dチルト）。光の円はゆっくり位置を変え続ける`,
run(H,t){[['#5ee6a8',200,500,1],['#7fb8ff',1000,150,-1],['#ff8fab',1100,650,1]].forEach(([c,x,y,d])=>{const b=H.abs({left:x+'px',top:y+'px',width:'520px',height:'520px',borderRadius:'50%',background:c,filter:'blur(90px)',opacity:.55,transform:'translate(-50%,-50%)'});H.a(b,[{transform:'translate(-50%,-50%)'},{transform:`translate(${-50+d*12}%,${-50-d*10}%)`},{transform:'translate(-50%,-50%)'}],{d:7000,e:'ease-in-out',i:Infinity})});
  nav(H,{logo:'◎ '+t,items:['機能','安全性','料金'],cta:'ダウンロード',lf:F.zen,ls:'28px'});
  const L=H.abs({left:'110px',top:'230px',width:'640px',display:'flex',flexDirection:'column',gap:'26px'});const h=H.el('div',{fontFamily:F.zen,fontWeight:'700',fontSize:'70px',lineHeight:'1.2'},L,'お金の流れが、\nひと目でわかる。');h.style.whiteSpace='pre-line';
  const s=H.el('div',{fontSize:'22px',color:'rgba(255,255,255,.75)'},L,'レシートを撮るだけで家計簿が完成。'+t+'で、毎月の「なんとなく」をなくしましょう。');const bt=H.el('div',{display:'flex',gap:'14px'},L);['App Store','Google Play'].forEach(x=>H.el('div',{padding:'14px 26px',borderRadius:'14px',background:'#fff',color:'#0b1022',fontWeight:'700',fontSize:'18px'},bt,'▶ '+x));[h,s,bt].forEach((e,i)=>rise(H,e,200+i*150));
  const glass=(x,y,w,hh,dl)=>{const g=H.abs({left:x+'px',top:y+'px',width:w+'px',height:hh+'px',borderRadius:'28px',background:'rgba(255,255,255,.08)',border:'1px solid rgba(255,255,255,.25)',backdropFilter:'blur(24px)',WebkitBackdropFilter:'blur(24px)',padding:'28px',boxShadow:'0 30px 60px rgba(0,0,0,.25)'});H.a(g,[{transform:'translateY(60px) rotate(-3deg)',opacity:0},{transform:'translateY(0) rotate(0)',opacity:1}],{d:1000,dl});return g};
  const c1=glass(880,200,520,260,500);H.el('div',{fontSize:'18px',opacity:.7},c1,'今月の残高');const num=H.el('div',{fontFamily:F.mono,fontWeight:'700',fontSize:'64px',margin:'6px 0 14px'},c1,'¥0');const gsv=H.svg(460,70,c1,{position:'relative'});H.sv('polyline',{points:'0,60 60,48 120,52 180,30 240,36 300,18 360,24 460,6',fill:'none',stroke:'#5ee6a8','stroke-width':4},gsv);
  const c2=glass(980,500,440,250,750);H.el('div',{fontSize:'18px',opacity:.7,marginBottom:'10px'},c2,'最近の支払い');[['カフェ','−¥620'],['電車','−¥230'],['書店','−¥1,540']].forEach(([a,b])=>{const r=H.el('div',{display:'flex',justifyContent:'space-between',fontSize:'22px',padding:'8px 0',borderBottom:'1px solid rgba(255,255,255,.12)'},c2);H.el('span',{},r,a);H.el('span',{fontFamily:F.mono},r,b)});
  H.raf(s=>{const k=Math.min(1,Math.max(0,(s-.8)/1.6));const e=1-Math.pow(1-k,4);num.textContent='¥'+Math.round(248300*e).toLocaleString()});
}});

defH({no:'03',cat:'CORP',name:'ミニマル・コーポレート',en:'Minimal Corporate',lead:'白い余白と大きな日本語見出し。信頼を語るコンサル・士業向け。',text:'KASUGA & Partners',bg:'#f7f7f5',
use:'<b>コンサル・法律事務所・会計事務所・BtoB企業</b>に。余白を大きくとるだけで「格」が出ます。派手さより信頼を伝えたいときに。',
tips:['見出しは左揃え・特大（画面幅の6〜7%）にして、余白を恐れないこと','色はほぼ黒と白だけ。アクセントは1色を細い線にだけ使います','数字（創業年・実績件数）を大きく見せると、言葉より説得力が出ます'],
p:`余白を大きくとった、上品で信頼感のある「ミニマル・コーポレート」スタイルの企業サイトを作ってください。
・会社名：{T}（経営コンサルティング会社という想定）
・配色：背景 #F7F7F5、文字 #111111、サブ文字 #777777、アクセント #1F4FD8（細い線と小さなラベルだけに使う）
・フォント：見出し Noto Sans JP 700（字間を少し詰める）、英字ラベル JetBrains Mono
・ファーストビュー：左寄せの特大見出し「変化を、成長の理由に。」（画面幅の6.5%）。上に小さく「MANAGEMENT CONSULTING」。下に細い横線（左から伸びる）と、説明文・「お問い合わせ」のテキストリンク（→付き）。右下に「01 戦略／02 組織／03 実行」の縦並びの番号付きメニュー
・セクション：私たちについて（左に大きな数字「1998」創業年、右に文章）→ サービス3つ（番号01〜03と細い罫線で区切る）→ 実績の数字（カウントアップ）→ 代表メッセージ → ニュース一覧 → お問い合わせ → フッター
・動き：見出しは1行ずつマスクで下から現れる。罫線は左から右へ伸びる。それ以外はほとんど動かさない（上品さ優先）`,
run(H,t){nav(H,{logo:t,items:['私たちについて','サービス','実績','採用'],c:'#111',lf:"'Cormorant Garamond',serif",ls:'30px',cta:'お問い合わせ',cb:'#111',cc:'#fff'});
  const L=H.abs({left:'120px',top:'230px',display:'flex',flexDirection:'column',gap:'26px',color:'#111'});H.el('div',{fontFamily:F.mono,fontSize:'17px',letterSpacing:'.2em',color:'#1f4fd8'},L,'MANAGEMENT CONSULTING');
  ['変化を、','成長の理由に。'].forEach((x,i)=>{const m=H.el('div',{overflow:'hidden'},L);const e=H.el('div',{fontFamily:F.sans,fontWeight:'700',fontSize:'104px',lineHeight:'1.15',letterSpacing:'-.02em'},m,x);H.a(e,[{transform:'translateY(110%)'},{transform:'translateY(0)'}],{d:1000,dl:300+i*150})});
  const ln=H.el('div',{width:'620px',height:'1px',background:'#111',transformOrigin:'0 50%'},L);H.a(ln,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:1200,dl:900,e:'cubic-bezier(.65,0,.35,1)'});
  const s=H.el('div',{fontSize:'20px',color:'#777',maxWidth:'620px',lineHeight:'1.8'},L,'事業の転換期にこそ、外からの視点が力になります。戦略づくりから現場の実行まで、伴走します。');rise(H,s,1200);
  const lk=H.el('div',{fontSize:'20px',fontWeight:'700'},L,'お問い合わせ →');rise(H,lk,1350);
  const R=H.abs({right:'120px',bottom:'110px',display:'flex',flexDirection:'column',gap:'18px',color:'#111'});[['01','戦略'],['02','組織'],['03','実行']].forEach(([n,x],i)=>{const r=H.el('div',{display:'flex',gap:'24px',alignItems:'baseline',borderTop:'1px solid #ccc',paddingTop:'14px',width:'340px'},R);H.el('span',{fontFamily:F.mono,color:'#1f4fd8',fontSize:'16px'},r,n);H.el('span',{fontSize:'28px',fontWeight:'700'},r,x);rise(H,r,1400+i*120)});
}});

defH({no:'04',cat:'CORP',name:'モーフィングブロブ',en:'Morphing Blob',lead:'中央でうねる光のかたまり。AI・新規事業の「未来感」を一瞬で。',text:'NOVA AI',bg:'#0a0a12',
use:'<b>AIスタートアップ・新規事業・研究開発・イベント</b>に。形の定まらないブロブは「進化」「可能性」を象徴します。',
tips:['ブロブは border-radius の8つの値をアニメーションさせるだけで作れます','色は2〜3色のグラデーション。紫×ライムなど意外な組み合わせが今っぽい','ブロブの上に見出しを重ねるなら、mix-blend-mode: difference で反転させるとおしゃれ'],
p:`画面中央でゆっくり形を変える光のかたまり（ブロブ）が主役の、「モーフィングブロブ」スタイルのスタートアップサイトを作ってください。
・会社名：{T}（AIの研究開発スタートアップという想定）
・配色：背景 #0A0A12、ブロブ #7C5CFF → #C6F432 → #38D6FF のグラデーション、文字 #FFFFFF
・フォント：見出し Dela Gothic One、英字 Space Grotesk
・ファーストビュー：
　・中央に直径560pxのブロブ。border-radius の8つの値を8秒周期で変化させてうねらせ、同時にゆっくり回転。ぼかし2px、外側に同色の光（box-shadow 0 0 120px）
　・ブロブの上に、特大の英字見出し「THINK BEYOND」（mix-blend-mode: difference）と、日本語のサブコピー「AIで、まだ誰も見たことのない答えを。」
　・画面の四隅に小さな情報（左上ロゴ、右上メニュー、左下「SCROLL ↓」、右下「EST. 2026」）
・セクション：ミッション（大きな文字が1語ずつ明るくなる）→ プロダクト3つ（ホバーでブロブが形を変えるカード）→ チーム紹介 → 採用 → ニュース → フッター
・動き：マウスを動かすとブロブが少し追いかけてくる`,
run(H,t){const b=H.abs({left:'520px',top:'170px',width:'560px',height:'560px',background:'linear-gradient(135deg,#7c5cff,#c6f432 55%,#38d6ff)',boxShadow:'0 0 120px rgba(124,92,255,.6)',filter:'blur(2px)'});
  H.a(b,[{borderRadius:'42% 58% 70% 30% / 45% 45% 55% 55%',transform:'rotate(0deg)'},{borderRadius:'70% 30% 46% 54% / 30% 39% 61% 70%',transform:'rotate(120deg)'},{borderRadius:'31% 69% 39% 61% / 61% 64% 36% 39%',transform:'rotate(240deg)'},{borderRadius:'42% 58% 70% 30% / 45% 45% 55% 55%',transform:'rotate(360deg)'}],{d:8000,e:'ease-in-out',i:Infinity});
  H.a(b,[{opacity:0,scale:.6},{opacity:1,scale:1}],{d:1400,f:'none'});
  nav(H,{logo:t,items:['Research','Product','Careers'],lf:F.heavy});
  const h=H.abs({left:'0',right:'0',top:'330px',textAlign:'center',fontFamily:F.heavy,fontSize:'150px',color:'#fff',mixBlendMode:'difference',letterSpacing:'.02em'},null,'THINK BEYOND');rise(H,h,400,1000);
  const s=H.abs({left:'0',right:'0',top:'540px',textAlign:'center',fontSize:'26px',color:'#fff'},null,'AIで、まだ誰も見たことのない答えを。');rise(H,s,700);
  [['SCROLL ↓',{left:'70px',bottom:'50px'}],['EST. 2026',{right:'70px',bottom:'50px'}]].forEach(([x,c],i)=>{const e=H.abs(Object.assign({fontFamily:F.mono,fontSize:'16px',letterSpacing:'.2em',color:'rgba(255,255,255,.6)'},c),null,x);rise(H,e,900+i*100)});
}});

defH({no:'05',cat:'CORP',name:'ベントーグリッド',en:'Bento Grid',lead:'大小のカードをお弁当箱のように詰める。機能紹介に最適。',text:'Taskly',bg:'#f2f3f7',
use:'<b>アプリ・ガジェット・サービスの機能紹介</b>に。たくさんの情報を、1画面で見やすく整理できます。',
tips:['カードの大きさに「主役1つ＋脇役」の差をつけるのが見やすさのコツ','カードの角丸と余白（gap）は全部同じ値にそろえる','1枚だけ濃い色のカードを入れると、全体が引き締まります'],
p:`大小のカードをお弁当箱のように隙間なく並べる「ベントーグリッド」スタイルの、製品・機能紹介サイトを作ってください。
・製品名：{T}（チームで使うタスク管理アプリという想定）
・配色：背景 #F2F3F7、カード #FFFFFF、文字 #111827、アクセント #5AA9FF、濃いカード #111827（文字白）
・フォント：見出し Noto Sans JP 900、数字 Space Grotesk
・ファーストビュー：上部に中央揃えの見出し「チームの仕事が、ぜんぶここに。」とボタン。その下に、4列×2行のベントーグリッド（gap 16px、角丸24px）
　・大きいカード（2列×2行）：アプリ画面の枠（タスクのリストがゆっくりスクロール）
　・濃いカード：大きな数字「3.2倍」と「作業スピード」
　・アクセント色のカード：「AIが自動で振り分け」とアイコン
　・ほかのカード：連携アプリのアイコン群、利用者数、カレンダー表示など
・セクション：ベントーグリッドの機能紹介（もう1セット）→ 導入事例 → 料金 → FAQ → CTA → フッター
・動き：カードはスクロールで少しずつ時間差で現れる（scale 0.95 → 1、不透明度 0 → 1）。ホバーで少し浮く`,
run(H,t){nav(H,{logo:'▣ '+t,items:['機能','料金','事例'],c:'#111827',lf:F.sans,cta:'無料で試す',cb:'#111827',cc:'#fff'});
  const hd=H.abs({left:'0',right:'0',top:'110px',textAlign:'center',fontFamily:F.sans,fontWeight:'900',fontSize:'56px',color:'#111827'},null,'チームの仕事が、ぜんぶここに。');rise(H,hd,200);
  const G=H.abs({left:'120px',right:'120px',top:'220px',bottom:'40px',display:'grid',gridTemplateColumns:'repeat(4,1fr)',gridTemplateRows:'repeat(2,1fr)',gap:'16px'});
  const card=(css,dl)=>{const c=H.el('div',Object.assign({background:'#fff',borderRadius:'24px',padding:'26px',color:'#111827',overflow:'hidden',position:'relative'},css),G);H.a(c,[{transform:'scale(.92)',opacity:0},{transform:'scale(1)',opacity:1}],{d:700,dl});return c};
  const big=card({gridColumn:'span 2',gridRow:'span 2'},400);H.el('div',{fontWeight:'700',fontSize:'20px',marginBottom:'14px'},big,'今日のタスク');const lst=H.el('div',{display:'flex',flexDirection:'column',gap:'10px'},big);
  ['企画書のレビュー','デザイン確認','取引先へ連絡','週次ミーティング','請求書の送付','新機能のテスト','採用面接の準備','ブログ記事の公開'].forEach((x,i)=>{const r=H.el('div',{display:'flex',gap:'12px',alignItems:'center',background:'#f2f3f7',borderRadius:'12px',padding:'14px 16px',fontSize:'19px'},lst);H.el('span',{width:'20px',height:'20px',borderRadius:'6px',border:'2px solid #5aa9ff',background:i<3?'#5aa9ff':'transparent'},r);H.el('span',{},r,x)});
  H.a(lst,[{transform:'translateY(0)'},{transform:'translateY(-180px)'},{transform:'translateY(0)'}],{d:7000,dl:1000,e:'ease-in-out'});
  const d=card({background:'#111827',color:'#fff'},550);H.el('div',{fontFamily:F.heavy,fontSize:'72px'},d,'3.2倍');H.el('div',{opacity:.7,fontSize:'18px'},d,'作業スピード（当社調べ）');
  const a=card({background:'#5aa9ff',color:'#fff'},650);H.el('div',{fontSize:'44px'},a,'✦');H.el('div',{fontWeight:'900',fontSize:'26px',marginTop:'10px'},a,'AIが自動で\n振り分け').style.whiteSpace='pre-line';
  const ic=card({},750);H.el('div',{fontWeight:'700',fontSize:'18px',marginBottom:'12px'},ic,'連携アプリ');const row=H.el('div',{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'10px'},ic);['#ff8fab','#5ee6a8','#f2c94c','#a78bfa','#38d6ff','#ff9a3c'].forEach(c=>H.el('div',{height:'54px',borderRadius:'14px',background:c},row));
  const u=card({},850);H.el('div',{fontFamily:F.heavy,fontSize:'56px'},u,'12万');H.el('div',{color:'#6b7280',fontSize:'18px'},u,'チームが利用中');
}});

defH({no:'06',cat:'CREATOR',name:'ネオブルータリズム',en:'Neo Brutalism',lead:'太い黒フチ、原色、ずらした影。個性で記憶に残すクリエイター向け。',text:'MOJI WORKS',bg:'#fff4d6',
use:'<b>個人クリエイター・デザイン事務所・イベント・ポップなブランド</b>に。整いすぎない強さで「この人おもしろそう」と思わせます。',
tips:['影はぼかさず、右下に6〜10pxずらした黒一色にするのが決まり','色は黄色・ピンク・水色など原色を3色まで','わざと少し傾けたステッカー風の要素を1〜2個置くと遊び心が出ます'],
p:`太い黒フチと原色、ずらした黒い影が特徴の「ネオブルータリズム」スタイルのクリエイターサイトを作ってください。
・名前：{T}（デザインとイラストの個人スタジオという想定）
・配色：背景 #FFF4D6、黒 #111111、黄 #FFD23F、ピンク #FF6FB5、水色 #4CC9F0
・フォント：見出し Dela Gothic One、本文 Zen Kaku Gothic New、英字 Space Mono
・共通ルール：主要な要素はすべて「黒フチ3px＋右下へ8pxずらしたぼかしなしの黒い影（8px 8px 0 #111）」。角丸は0か8px
・ファーストビュー：
　・特大見出し「つくるのが、すき。」の一部を黄色の帯で塗る
　・右側に、黒フチのカードを3枚少し傾けて重ねる（作品のサムネ枠：ピンク・水色・黄）
　・「NEW WORK!」と書いた丸いステッカーが回転しながら貼られている
　・画面下に、黒い帯の上を白文字が流れるマーキー「ILLUSTRATION ✦ DESIGN ✦ ANIMATION ✦」
・セクション：作品一覧（黒フチのカードのグリッド、ホバーで影が0になり押し込まれる）→ できること → 料金の目安 → お仕事の流れ → お問い合わせ → フッター
・動き：ボタンやカードはホバーで translate(4px,4px)・影を小さくして「押せる」感じにする`,
run(H,t){const sh='8px 8px 0 #111',bd='3px solid #111';nav(H,{logo:t,items:['WORKS','ABOUT','PRICE'],c:'#111',lf:F.heavy,f:F.smono,cta:'CONTACT',cb:'#ffd23f',cc:'#111',ctaCss:{border:bd,boxShadow:'4px 4px 0 #111',borderRadius:'8px'}});
  const L=H.abs({left:'100px',top:'200px',display:'flex',flexDirection:'column',gap:'28px',color:'#111'});const h=H.el('div',{fontFamily:F.heavy,fontSize:'110px',lineHeight:'1.15'},L);H.el('div',{},h,'つくるのが、');const s2=H.el('div',{display:'inline-block',background:'#ffd23f',border:bd,boxShadow:sh,padding:'0 18px'},h,'すき。');
  H.a(s2,[{transform:'scaleX(0)',transformOrigin:'0 50%'},{transform:'scaleX(1)',transformOrigin:'0 50%'}],{d:600,dl:600,e:E.back});rise(H,h,200);
  const bt=H.el('div',{alignSelf:'flex-start',fontFamily:F.smono,fontSize:'22px',padding:'16px 30px',background:'#ff6fb5',border:bd,boxShadow:sh,borderRadius:'8px'},L,'VIEW WORKS →');rise(H,bt,800);
  [['#ff6fb5',980,190,-6],['#4cc9f0',1100,300,4],['#ffd23f',960,420,-2]].forEach(([c,x,y,r],i)=>{const k=H.abs({left:x+'px',top:y+'px',width:'420px',height:'280px',background:c,border:bd,boxShadow:sh,borderRadius:'8px',transform:`rotate(${r}deg)`});H.a(k,[{transform:`rotate(${r}deg) translateY(80px)`,opacity:0},{transform:`rotate(${r}deg)`,opacity:1}],{d:700,dl:400+i*150,e:E.back})});
  const st=H.abs({left:'1330px',top:'150px',width:'160px',height:'160px',borderRadius:'50%',background:'#fff',border:bd,display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.heavy,fontSize:'24px',textAlign:'center',color:'#111',lineHeight:'1.1'},null,'NEW\nWORK!');st.style.whiteSpace='pre-line';H.a(st,[{transform:'rotate(0)'},{transform:'rotate(360deg)'}],{d:10000,e:E.lin,i:Infinity});
  const mq=H.abs({left:'0',right:'0',bottom:'0',height:'70px',background:'#111',overflow:'hidden',display:'flex',alignItems:'center'});const tr=H.el('div',{display:'flex',whiteSpace:'nowrap',fontFamily:F.smono,fontSize:'26px',color:'#fff'},mq);for(let i=0;i<8;i++)H.el('span',{paddingRight:'40px'},tr,'ILLUSTRATION ✦ DESIGN ✦ ANIMATION ✦');H.a(tr,[{transform:'translateX(0)'},{transform:'translateX(-25%)'}],{d:7000,e:E.lin,i:Infinity});
}});

defH({no:'07',cat:'CREATOR',name:'エディトリアル',en:'Editorial Magazine',lead:'雑誌の誌面のような大きな明朝と段組み。メディア・ブログに。',text:'週末の手帖',bg:'#efede8',
use:'<b>Webマガジン・ブログ・メディア・書籍の紹介</b>に。読ませるサイトは、雑誌の作法を借りるだけで一気に上質になります。',
tips:['見出しの明朝と本文のゴシックの組み合わせが、雑誌らしさの基本','号数・日付・ページ番号などの小さな情報が、本物っぽさを支えます','写真の枠は角丸にせず、細い罫線で区切ると誌面らしくなります'],
p:`雑誌の誌面のような、大きな明朝体と段組みが美しい「エディトリアル」スタイルのWebマガジンを作ってください。
・媒体名：{T}（暮らし・旅・食をテーマにしたWebマガジンという想定）
・配色：背景 #EFEDE8、文字 #1B1B1B、罫線 #1B1B1B（1px）、アクセント #B23A2B（ごく一部だけ）
・フォント：見出し Shippori Mincho B1 800、本文 Zen Kaku Gothic New、英字 Cormorant Garamond
・ファーストビュー：
　・上部に雑誌の柱：左「VOL.12」、中央に媒体名（大きな明朝）、右「2026 AUTUMN」。その下に二重の罫線
　・左2/3：特集記事。大きな写真枠（グラデーションで代用）、その上に重ねた縦書きの特大見出し「秋の、ちいさな旅へ。」
　・右1/3：記事一覧（番号・カテゴリ・タイトル・日付を罫線で区切る）
・セクション：特集 → 新着記事（3段組みのグリッド）→ 連載 → 編集部より → メールマガジン登録 → フッター
・動き：罫線は左から伸び、見出しは1文字ずつ上から現れる。写真はスクロールに合わせてゆっくり拡大（パララックス）`,
run(H,t){const ink='#1b1b1b';const top=H.abs({left:'70px',right:'70px',top:'30px',display:'flex',alignItems:'baseline',justifyContent:'space-between',color:ink});H.el('div',{fontFamily:F.serif,fontSize:'22px'},top,'VOL.12');H.el('div',{fontFamily:F.min,fontWeight:'800',fontSize:'58px'},top,t);H.el('div',{fontFamily:F.serif,fontSize:'22px'},top,'2026 AUTUMN');rise(H,top,100);
  [118,126].forEach((y,i)=>{const l=H.abs({left:'70px',right:'70px',top:y+'px',height:'1px',background:ink,transformOrigin:'0 50%'});H.a(l,[{transform:'scaleX(0)'},{transform:'scaleX(1)'}],{d:1000,dl:200+i*120,e:'cubic-bezier(.65,0,.35,1)'})});
  const ph=H.abs({left:'70px',top:'160px',width:'960px',height:'690px',overflow:'hidden'});const img=H.abs({inset:'0',background:'linear-gradient(160deg,#c9a77c,#8a5a3b 45%,#3b2a22)'},ph);H.a(img,[{transform:'scale(1.15)'},{transform:'scale(1)'}],{d:7000,e:E.soft});H.abs({right:'120px',top:'120px',width:'260px',height:'260px',borderRadius:'50%',background:'rgba(255,220,170,.5)',filter:'blur(30px)'},ph);
  const v=H.abs({left:'120px',top:'50px',writingMode:'vertical-rl',fontFamily:F.min,fontWeight:'800',fontSize:'92px',color:'#fff',lineHeight:'1.3'},ph);H.chars('秋の、ちいさな旅へ。',v).forEach((c,i)=>H.a(c,[{transform:'translateY(-30px)',opacity:0},{transform:'translateY(0)',opacity:1}],{d:600,dl:600+i*80}));
  const R=H.abs({left:'1080px',right:'70px',top:'160px',display:'flex',flexDirection:'column',color:ink});H.el('div',{fontFamily:F.serif,fontSize:'22px',letterSpacing:'.1em',marginBottom:'10px'},R,'LATEST STORIES');
  [['旅','海辺の町で、何もしない週末'],['食','土鍋で炊く、新米の朝ごはん'],['暮らし','古道具と暮らす部屋づくり'],['本','秋の夜長に読みたい5冊']].forEach(([c,x],i)=>{const r=H.el('div',{borderTop:'1px solid '+ink,padding:'18px 0',display:'grid',gridTemplateColumns:'48px 1fr',gap:'12px'},R);H.el('div',{fontFamily:F.serif,fontSize:'30px'},r,String(i+1).padStart(2,'0'));const b=H.el('div',{},r);H.el('div',{fontSize:'15px',color:'#b23a2b'},b,c);H.el('div',{fontFamily:F.min,fontWeight:'800',fontSize:'24px',lineHeight:'1.4'},b,x);rise(H,r,700+i*140)});
}});

defH({no:'08',cat:'CREATOR',name:'横スクロール・ポートフォリオ',en:'Horizontal Gallery',lead:'作品が横一列に流れるギャラリー。写真家・映像作家向け。',text:'Ren Aoki',bg:'#0e0e0e',
use:'<b>写真家・映像作家・建築家・イラストレーター</b>のポートフォリオに。作品を「展示室を歩くように」見せられます。',
tips:['縦スクロールで横に動く仕組み（スクロール連動）にすると、操作が直感的','作品の枠は大きさをそろえず、縦長・横長を混ぜるとリズムが出ます','カーソルを丸い「VIEW」に変えると、作品サイトらしい上質さが出ます'],
p:`作品が横一列に流れていく「横スクロール・ギャラリー」スタイルのポートフォリオサイトを作ってください。
・名前：{T}（フォトグラファーという想定）
・配色：背景 #0E0E0E、文字 #F2F2F2、サブ文字 #777、アクセントなし（作品を主役にする）
・フォント：名前は Cormorant Garamond 700（特大）、日本語は Zen Kaku Gothic New
・ファーストビュー：
　・左上に名前（特大の欧文、画面幅の9%）と「PHOTOGRAPHER — TOKYO」
　・画面中央の帯に、作品の枠（縦長・横長・正方形を混ぜた8枚、グラデーションで写真の代わり）を横一列に並べ、縦スクロールに合わせて横へ移動させる（position: sticky と transform で実装）
　・各作品の下に小さく番号とタイトル「01 — Morning Fog」
　・マウスカーソルを、作品の上では直径90pxの白い丸「VIEW」に変える
・セクション：横スクロールのギャラリー → プロフィール（モノクロの写真枠と経歴）→ 受賞歴・掲載歴のリスト → お問い合わせ（メールアドレスを大きく）→ フッター
・動き：作品はホバーで少し拡大し、ほかの作品が暗くなる`,
run(H,t){nav(H,{logo:'',items:['WORKS','ABOUT','CONTACT'],f:F.serif});const nm=H.abs({left:'70px',top:'40px',fontFamily:F.serif,fontWeight:'700',fontSize:'140px',color:'#f2f2f2',lineHeight:'1'},null,t);rise(H,nm,100,1000);
  const sub=H.abs({left:'76px',top:'190px',fontFamily:F.mono,fontSize:'16px',letterSpacing:'.3em',color:'#777'},null,'PHOTOGRAPHER — TOKYO');rise(H,sub,400);
  const strip=H.abs({left:'70px',top:'290px',display:'flex',gap:'40px',alignItems:'flex-end'});const g=['linear-gradient(160deg,#9db4c0,#5c6b73)','linear-gradient(200deg,#e0c3a0,#7b5e3b)','linear-gradient(180deg,#2b3a42,#0f1416)','linear-gradient(140deg,#c8d5b9,#4f6f52)','linear-gradient(170deg,#f2b5a0,#8f4b3f)','linear-gradient(190deg,#d9d9d9,#555)','linear-gradient(150deg,#a3c4f3,#3a506b)','linear-gradient(200deg,#f1e3c6,#9a7b4f)'];
  const sz=[[360,480],[560,380],[400,400],[340,500],[580,400],[380,460],[520,360],[400,480]];const ttl=['Morning Fog','Harbor','Night Walk','Fern','Dusk','Concrete','Blue Hour','Paper Lantern'];
  sz.forEach(([w,h],i)=>{const it=H.el('div',{display:'flex',flexDirection:'column',gap:'12px'},strip);const im=H.el('div',{width:w+'px',height:h+'px',background:g[i]},it);H.el('div',{fontFamily:F.mono,fontSize:'15px',color:'#999'},it,`${String(i+1).padStart(2,'0')} — ${ttl[i]}`);H.a(it,[{opacity:0,transform:'translateY(40px)'},{opacity:1,transform:'translateY(0)'}],{d:800,dl:500+i*100})});
  H.a(strip,[{transform:'translateX(0)'},{transform:'translateX(-1900px)'}],{d:7000,dl:1200,e:'cubic-bezier(.45,0,.55,1)'});
  const cur=H.abs({left:'0',top:'0',width:'90px',height:'90px',borderRadius:'50%',background:'#fff',color:'#000',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:F.mono,fontSize:'14px',letterSpacing:'.15em',mixBlendMode:'difference'},null,'VIEW');
  H.raf(s=>{cur.style.transform=`translate(${700+260*Math.sin(s*.9)}px,${520+90*Math.sin(s*1.7)}px)`});
}});

defH({no:'09',cat:'CREATOR',name:'キネティック・ネーム',en:'Kinetic Name',lead:'自分の名前が画面いっぱいに動く。デザイナーの自己紹介サイトに。',text:'SORA',bg:'#e9ff70',
use:'<b>デザイナー・アーティスト・タレント・個人ブランド</b>に。名前そのものをグラフィックにすると、一度で覚えてもらえます。',
tips:['名前は画面幅いっぱい（はみ出すくらい）にするのが迫力のコツ','塗り文字とフチ文字を交互にすると、動いているときにリズムが出ます','背景色は1色に絞り、蛍光色など記憶に残る色を選ぶ'],
p:`自分の名前が画面いっぱいの巨大な文字で動き続ける「キネティック・ネーム」スタイルの自己紹介サイトを作ってください。
・名前：{T}（グラフィックデザイナーという想定）
・配色：背景 #E9FF70（蛍光イエロー）、文字 #111111
・フォント：名前は Dela Gothic One（英字なら Archivo Black でも可）、本文は Zen Kaku Gothic New
・ファーストビュー：
　・名前を画面の高さの約35%の大きさで3段並べる。1段目と3段目は塗り、2段目は黒フチだけ（-webkit-text-stroke 3px）
　・各段は左右逆方向にゆっくり流れ続ける（無限マーキー）
　・マウスの横の位置で、流れる速さと方向が少し変わる
　・中央に、黒い丸いバッジ「HELLO, I'M {T}」が回転しながら浮かぶ
　・左下に「GRAPHIC DESIGNER / TOKYO」、右下に「SCROLL」
・セクション：自己紹介（大きな文字で一文）→ 作品一覧（黒背景に切り替わる）→ スキル → 経歴 → お問い合わせ（名前と同じ巨大な文字で「LET'S TALK」）→ フッター
・動き：スクロールすると名前の段が横に伸びる（scaleX 1 → 1.2）`,
run(H,t){const G=H.abs({left:'-200px',right:'-200px',top:'40px',display:'flex',flexDirection:'column',gap:'0'});
  for(let i=0;i<3;i++){const tr=H.el('div',{display:'flex',whiteSpace:'nowrap',fontFamily:F.heavy,fontSize:'280px',lineHeight:'1',color:i===1?'transparent':'#111',WebkitTextStroke:i===1?'3px #111':'0'},G);for(let k=0;k<8;k++)H.el('span',{paddingRight:'60px'},tr,t);
    H.a(tr,i%2?[{transform:'translateX(-25%)'},{transform:'translateX(0)'}]:[{transform:'translateX(0)'},{transform:'translateX(-25%)'}],{d:14000,e:E.lin,i:Infinity});H.a(tr,[{opacity:0},{opacity:1}],{d:600,dl:i*150})}
  const bd=H.abs({left:'690px',top:'340px',width:'220px',height:'220px',borderRadius:'50%',background:'#111',color:'#e9ff70',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',fontFamily:F.smono,fontSize:'22px',lineHeight:'1.3',padding:'20px'},null,`HELLO,\nI'M ${t}`);bd.style.whiteSpace='pre-line';
  H.a(bd,[{transform:'rotate(-10deg) scale(0)'},{transform:'rotate(-10deg) scale(1)'}],{d:600,dl:700,e:E.back});H.a(bd,[{rotate:'0deg'},{rotate:'360deg'}],{d:12000,e:E.lin,i:Infinity});
  H.abs({left:'70px',bottom:'40px',fontFamily:F.smono,fontSize:'18px',color:'#111'},null,'GRAPHIC DESIGNER / TOKYO');H.abs({right:'70px',bottom:'40px',fontFamily:F.smono,fontSize:'18px',color:'#111'},null,'SCROLL ↓');
}});

defH({no:'10',cat:'CREATOR',name:'サイバーパンク',en:'Cyberpunk HUD',lead:'ネオンとスキャンライン、照準のような枠。ゲーム・配信者向け。',text:'NEON//RAID',bg:'#07040f',
use:'<b>ゲーム実況者・配信者・eスポーツチーム・ゲーム紹介</b>に。ゲームの画面（HUD）のような演出で、世界観に引き込みます。',
tips:['ネオンは「マゼンタ×シアン」の2色が鉄板','四隅のカギ括弧の枠（コーナーマーク）を付けるだけで一気にゲーム画面っぽくなります','見出しのグリッチは常時ではなく、数秒に1回だけにすると上品'],
p:`ネオンとスキャンライン、照準のような枠が特徴の「サイバーパンク」スタイルの、ゲーム配信者サイトを作ってください。
・名前：{T}（ゲーム実況・配信者チームという想定）
・配色：背景 #07040F、マゼンタ #FF2E88、シアン #22F0FF、文字 #EDE9FF
・フォント：見出し Dela Gothic One または Orbitron、数字・ラベル Space Mono
・ファーストビュー：
　・背景：遠近のついた床のグリッド（下半分、マゼンタの線が奥へ流れる）と、画面全体の走査線
　・中央に名前を特大で。マゼンタとシアンの文字を左右に3pxずらして重ね、4秒に1回だけ0.2秒グリッチ
　・その下に「LIVE NOW」の赤い点滅バッジと、配信プラットフォームへのボタン2つ（ネオンの枠線）
　・画面の四隅にカギ括弧のコーナーマーク、左上に「SYS.ONLINE」、右上にリアルタイムの時計
・セクション：メンバー紹介（キャラクターカード風）→ 配信スケジュール（週間表）→ 戦績・数字 → グッズ → スポンサー募集 → フッター
・動き：カードはホバーでネオンが強く光り、少しグリッチする`,
run(H,t){const fl=H.abs({left:'-400px',right:'-400px',top:'460px',height:'900px',perspective:'400px'});const gr=H.abs({inset:'0',backgroundImage:'linear-gradient(rgba(255,46,136,.6) 2px,transparent 2px),linear-gradient(90deg,rgba(255,46,136,.6) 2px,transparent 2px)',backgroundSize:'80px 80px',transform:'rotateX(70deg)',transformOrigin:'50% 0'},fl);H.a(gr,[{backgroundPosition:'0 0'},{backgroundPosition:'0 80px'}],{d:900,e:E.lin,i:Infinity});
  H.abs({left:'0',right:'0',top:'420px',height:'160px',background:'linear-gradient(transparent,#07040f 40%,transparent)'});
  const B=H.abs({left:'0',right:'0',top:'250px',textAlign:'center'});const sz=fs(t,170,1300);const mk=(c,x,bl)=>H.abs({left:'0',right:'0',top:'0',fontFamily:F.heavy,fontSize:sz+'px',color:c,transform:`translateX(${x}px)`,mixBlendMode:bl||'normal'},B,t);
  const a=mk('#ff2e88',-3,'screen'),b=mk('#22f0ff',3,'screen'),c=mk('#ede9ff',0);H.a(B,[{opacity:0},{opacity:1}],{d:600,dl:200});
  H.raf(s=>{const g=(s%4)<.2&&s>1;a.style.transform=`translateX(${g?rnd(-20,20):-3}px)`;b.style.transform=`translateX(${g?rnd(-20,20):3}px)`;c.style.clipPath=g?`inset(${rnd(0,60)}% 0 ${rnd(0,30)}% 0)`:'none'});
  const row=H.abs({left:'0',right:'0',top:'500px',display:'flex',justifyContent:'center',gap:'20px',alignItems:'center'});const lv=H.el('div',{display:'flex',gap:'10px',alignItems:'center',fontFamily:F.smono,fontSize:'20px',color:'#ff2e88'},row);const dt=H.el('span',{width:'14px',height:'14px',borderRadius:'50%',background:'#ff2e88'},lv);H.el('span',{},lv,'LIVE NOW');H.a(dt,[{opacity:1},{opacity:.2}],{d:800,i:Infinity,dir:'alternate'});
  ['WATCH STREAM','JOIN DISCORD'].forEach((x,i)=>H.el('div',{fontFamily:F.smono,fontSize:'20px',padding:'14px 28px',border:`2px solid ${i?'#22f0ff':'#ff2e88'}`,color:'#ede9ff',boxShadow:`0 0 18px ${i?'#22f0ff':'#ff2e88'}`},row,x));rise(H,row,500);
  [[40,40,'0 0'],[1500,40,'90deg'],[40,800,'-90deg'],[1500,800,'180deg']].forEach(([x,y,r])=>{const c=H.abs({left:x+'px',top:y+'px',width:'60px',height:'60px',borderTop:'4px solid #22f0ff',borderLeft:'4px solid #22f0ff',transform:`rotate(${r==='0 0'?0:r})`})});
  H.abs({left:'120px',top:'50px',fontFamily:F.smono,fontSize:'16px',color:'#22f0ff',letterSpacing:'.2em'},null,'SYS.ONLINE');const clk=H.abs({right:'120px',top:'50px',fontFamily:F.smono,fontSize:'16px',color:'#22f0ff'});H.raf(()=>{const d=new Date();clk.textContent=d.toTimeString().slice(0,8)});
  H.abs({inset:'0',background:'repeating-linear-gradient(rgba(0,0,0,.35) 0 1px,transparent 1px 3px)',pointerEvents:'none'});
}});
