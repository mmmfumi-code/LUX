/* ===== ARCHITECTURE BOARD 01-10 ===== */
CUR_SEC='b';
const BIMG=[];
const defB=o=>{o.bg='#d5d8de';o.loop=4000;if(BIMG.includes(o.no))o.img='img/b'+o.no+'.jpg';def(o)};
const bx=(H,p,x,y,w,h,css)=>H.abs(Object.assign({left:x+'px',top:y+'px',width:w+'px',height:h+'px'},css||{}),p);
const GLASS='linear-gradient(160deg,rgba(210,230,245,.95),rgba(120,150,175,.9) 60%,rgba(90,110,130,.95))';
const WIN=(c,w,h,gx,gy)=>`repeating-linear-gradient(90deg,transparent 0 ${gx-2}px,${c} ${gx-2}px ${gx}px),repeating-linear-gradient(0deg,transparent 0 ${gy-2}px,${c} ${gy-2}px ${gy}px)`;
const tree=(H,p,x,y,s,c)=>{bx(H,p,x-3,y-s*.3,6,s*.3+2,{background:'#6b5440'});bx(H,p,x-s*.35,y-s*1.1,s*.7,s*.9,{borderRadius:'50%',background:c||'#7d9a6a'})};
const person=(H,p,x,y,c)=>{bx(H,p,x-4,y-34,8,8,{borderRadius:'50%',background:c||'#444'});bx(H,p,x-5,y-26,10,26,{borderRadius:'4px',background:c||'#444'})};
const board=(H,t,o)=>{desk(H);const s=sheet(H,1400,800,{background:o.paper||'#fafaf8'});
  const P=R(H,s,{left:'40px',top:'40px',width:'860px',height:'560px',background:o.sky||'linear-gradient(#cfe0ee,#f2efe8 75%)',overflow:'hidden'});bx(H,P,0,450,860,110,{background:o.ground||'linear-gradient(#c3c8bc,#a9b19c)'});o.draw(H,P);
  T(H,s,{left:'940px',top:'44px',fontFamily:F.sans,fontWeight:'700',fontSize:'12px',letterSpacing:'.35em',color:'#999'},o.k);
  T(H,s,{left:'938px',top:'64px',fontFamily:o.tf||F.min,fontWeight:'800',fontSize:t.length>12?'30px':'38px',color:'#222'},t);
  T(H,s,{left:'940px',top:'124px',width:'420px',whiteSpace:'normal',fontFamily:F.min,fontSize:'15px',lineHeight:'1.85',color:'#444'},o.c);
  const pl=R(H,s,{left:'940px',top:'250px',width:'200px',height:'200px',background:'#fff',border:'1px solid #ddd'});const sv=H.svg(200,200,pl);(o.plan||[[20,20,160,160],[20,20,90,80],[110,20,70,80],[20,100,160,80]]).forEach(r=>H.sv('rect',{x:r[0],y:r[1],width:r[2],height:r[3],fill:'none',stroke:'#333','stroke-width':2},sv));T(H,s,{left:'940px',top:'456px',fontFamily:F.sans,fontSize:'11px',letterSpacing:'.2em',color:'#888'},'PLAN');
  [[1160,250,o.in1||'linear-gradient(135deg,#efe6d8,#c9b291)'],[1160,355,o.in2||'linear-gradient(135deg,#e9eef0,#b8c4c9)']].forEach((q,i)=>R(H,s,{left:q[0]+'px',top:q[1]+'px',width:'200px',height:'95px',background:q[2]}));T(H,s,{left:'1160px',top:'456px',fontFamily:F.sans,fontSize:'11px',letterSpacing:'.2em',color:'#888'},'INTERIOR');
  T(H,s,{left:'940px',top:'500px',fontFamily:F.sans,fontSize:'11px',letterSpacing:'.2em',color:'#888'},'MATERIALS');(o.mat||['#c9a27e','#d8d4cc','#8fa2ad','#5c5c5c']).forEach((c,i)=>R(H,s,{left:940+i*62+'px',top:'524px',width:'48px',height:'48px',borderRadius:'50%',background:c,boxShadow:'inset 0 0 0 1px rgba(0,0,0,.08)'},0,'pop'));
  (o.data||[]).forEach((d,i)=>{T(H,s,{left:40+i*215+'px',top:'628px',fontFamily:F.sans,fontSize:'11px',letterSpacing:'.2em',color:'#999'},d[0]);T(H,s,{left:40+i*215+'px',top:'650px',fontFamily:F.min,fontWeight:'800',fontSize:'20px',color:'#333'},d[1])});
  R(H,s,{left:'40px',top:'712px',width:'1320px',height:'1px',background:'#ccc'});T(H,s,{left:'40px',top:'730px',fontFamily:F.min,fontSize:'14px',color:'#666'},o.foot||'ARCHITECTURE PRESENTATION BOARD');T(H,s,{right:'40px',top:'730px',fontFamily:F.sans,fontSize:'12px',letterSpacing:'.2em',color:'#999'},'A3 / 1:200')};

/* COMMERCIAL */
defB({no:'01',cat:'COMMERCIAL',name:'都市型の商業施設',en:'Urban Retail Complex',text:'nobu terrace',lead:'ガラスと木のルーバーの外観に、テラスに人が集まる。駅前の小さな商業施設のボード。',
use:'<b>駅前の商業ビル・複合施設・テナントビル</b>の企画提案や、地域の説明会の資料に。',
tips:['外観パースは「人が集まっている夕方」にすると、にぎわいが一瞬で伝わります','ガラス×木のルーバーは、今いちばん好まれる商業施設の外観です','平面図は「テナント」「広場」「通路」くらいの色分けで十分'],
p:`駅前に建つ、都市型の小さな商業施設の建築プレゼンボードを作ってください。
・建物の名前：「{T}」
・建物：地上4階建て。1階は飲食店とベーカリー、2〜3階は雑貨とクリニック、屋上はテラス。鉄骨造
・外観：大きなガラスのファサードに、縦の木のルーバー（格子）をリズムよく配置。1階は道路側に開いたテラス席。屋上に植栽
・メインの外観パース：夕暮れどき、ガラス越しに店内の暖かい明かりが見え、テラスと前の広場に人が集まる。駅前の通りから少し見上げる構図
・まわり：街路樹、歩く人、自転車
・ボードの右側：コンセプト文「まちに、もうひとつの広場を。」と短い説明、1階の平面図（テナント・広場・通路を淡い色で色分け）、内観パースを2枚（吹き抜けのある1階のカフェ／屋上テラス）
・素材サンプル：木のルーバー・ガラス・コンクリート・黒いスチールの丸いサンプル
・ボードの下部：「用途：物販・飲食」「構造：鉄骨造 地上4階」「延床面積：約1,800㎡」の小さなデータ
・ボード全体：白の背景に、黒と木の色の落ち着いたトーン`,
run(H,t){board(H,t,{k:'COMMERCIAL COMPLEX',c:'まちに、もうひとつの広場を。ガラスと木のルーバーが通りに開き、1階のテラスと屋上が人の居場所になる。',sky:'linear-gradient(#5d6f8c,#e9b48a 70%,#f1d2b0)',ground:'linear-gradient(#6c6a66,#4f4d4a)',data:[['USE','物販・飲食'],['STRUCTURE','鉄骨造 地上4階'],['AREA','約1,800㎡'],['SITE','駅前・角地']],
  draw(H,P){bx(H,P,150,110,560,340,{background:GLASS,boxShadow:'inset 0 0 80px rgba(255,190,120,.6)'});bx(H,P,150,110,560,340,{backgroundImage:WIN('rgba(40,40,40,.5)',560,340,80,85)});bx(H,P,150,110,560,340,{backgroundImage:'repeating-linear-gradient(90deg,#9a7350 0 10px,transparent 10px 34px)',opacity:.85});bx(H,P,150,280,560,170,{background:'linear-gradient(rgba(255,200,130,.75),rgba(255,170,90,.6))'});bx(H,P,130,96,600,16,{background:'#2c2c2c'});bx(H,P,160,80,540,18,{background:'linear-gradient(90deg,#6f8f5f,#94b07f)'});
  for(let i=0;i<12;i++)person(H,P,100+i*60+rnd(-10,10),470+rnd(0,40),pick(['#333','#7a4b3a','#2d4a6b']));[[80,452],[790,452]].forEach(q=>tree(H,P,q[0],q[1],90,'#5f7d4f'))}})}});

defB({no:'02',cat:'COMMERCIAL',name:'郊外のショッピングモール',en:'Suburban Mall',text:'nobu mall',lead:'大きな木の庇と広場、たっぷりの緑。家族で一日過ごせる郊外型モールのボード。',
use:'<b>郊外型ショッピングセンター・道の駅・アウトレット</b>などの企画や、自治体・地域への提案資料に。',
tips:['郊外型は「広さ」と「緑」が伝わるよう、少し高い位置から見下ろす構図に','入口の大きな庇（ひさし）は、施設の顔。木の質感を強調します','配置図に駐車場・広場・遊び場を入れると、使われ方がイメージできます'],
p:`郊外に建つショッピングモールの建築プレゼンボードを作ってください。
・建物の名前：「{T}」
・建物：地上2階建ての横に長い商業施設。中央に大きなエントランス。スーパー・専門店・フードコート・子どもの遊び場。鉄骨造
・外観：白い外壁と大きなガラス。エントランスには、木の格子で組んだ大きな庇（ひさし）が広場の上に張り出す。屋上や壁面に緑
・メインの外観パース：晴れた休日の昼、少し高い位置から見下ろす構図。手前に芝生の広場と噴水、家族連れ、奥に整然とした駐車場と樹木
・ボードの右側：コンセプト文「家族の休日が、ここに集まる。」と短い説明、配置図（建物・駐車場・広場・遊び場を淡い色で色分け）、内観パースを2枚（天窓のある吹き抜けのモール通路／フードコート）
・素材サンプル：木の格子・白い外壁・ガラス・芝生
・ボードの下部：「用途：物販・飲食・サービス」「構造：鉄骨造 地上2階」「駐車台数：約800台」
・ボード全体：白い背景に、緑と木の明るいトーン`,
run(H,t){board(H,t,{k:'SHOPPING CENTER',c:'家族の休日が、ここに集まる。木の大屋根の下の広場を中心に、買い物と遊びと食事がひとつながりになる。',ground:'linear-gradient(#a7c08b,#8fab73)',data:[['USE','物販・飲食'],['STRUCTURE','鉄骨造 地上2階'],['PARKING','約800台'],['SITE','郊外・幹線道路沿い']],plan:[[10,60,180,70],[10,60,60,70],[130,60,60,70],[70,140,60,50],[10,10,180,40]],
  draw(H,P){bx(H,P,40,250,780,200,{background:'#f4f2ee'});bx(H,P,40,330,780,120,{background:GLASS,opacity:.9});bx(H,P,40,330,780,120,{backgroundImage:WIN('rgba(60,60,60,.4)',780,120,60,60)});bx(H,P,40,236,780,18,{background:'linear-gradient(90deg,#7e9b68,#9bb886)'});
  bx(H,P,280,290,300,40,{background:'repeating-linear-gradient(90deg,#b98b5e 0 14px,#d4ab7d 14px 22px)',transform:'perspective(400px) rotateX(30deg)',boxShadow:'0 20px 30px rgba(0,0,0,.15)'});bx(H,P,330,470,200,40,{borderRadius:'50%',background:'radial-gradient(#cfe7f5,#8fc2e0)'});
  for(let i=0;i<14;i++)person(H,P,120+i*48+rnd(-10,10),500+rnd(0,40),pick(['#e07a5f','#3d5a80','#444','#81b29a']));[[40,452],[200,470],[680,470],[820,452]].forEach(q=>tree(H,P,q[0],q[1],100,'#6a8f55'))}})}});

defB({no:'03',cat:'COMMERCIAL',name:'路面のカフェ店舗',en:'Street-front Café',text:'café nobu',lead:'大きなガラス窓と木の扉、白い外壁。通りに開いた、小さなカフェの店舗ボード。',
use:'<b>カフェ・ベーカリー・美容室・小さなお店</b>の店舗デザインの提案や、内装業者・物件オーナーへの説明に。',
tips:['店舗は「通りから見た正面」の構図が基本。入りやすさが伝わります','夕方〜夜の明かりが灯った外観は、お店の雰囲気がいちばん伝わります','内観パースはカウンター側と客席側の2枚あると、イメージが固まります'],
p:`路面に建つ小さなカフェの、店舗デザインのプレゼンボードを作ってください。
・お店の名前：「{T}」
・建物：木造平屋（一部ロフト）。間口8m・奥行12mの路面店。20席
・外観：白いしっくいの外壁、大きなガラス窓、木の大きな扉、黒い細いスチールのフレーム。入口の上に小さな布のオーニング（日よけ）と、真鍮の小さな看板。窓辺に植栽
・メインの外観パース：夕方、店内の暖かい明かりがガラス越しに見える。通りの正面からの構図。店先に小さなベンチと黒板の看板、歩く人
・ボードの右側：コンセプト文「通りに、ひと休みの灯りを。」と短い説明、平面図（カウンター・客席・厨房・トイレ）、内観パースを2枚（木のカウンターと焙煎機／窓際の客席）
・素材サンプル：しっくい・オーク材・真鍮・テラゾーの床
・ボードの下部：「用途：飲食店」「構造：木造平屋」「客席：20席」
・ボード全体：生成りの背景に、白・木・黒の上品なトーン`,
run(H,t){board(H,t,{k:'CAFE / STORE DESIGN',paper:'#f7f3ec',c:'通りに、ひと休みの灯りを。大きな窓と木の扉が通りに開き、焙煎の香りとともに人を迎え入れる。',sky:'linear-gradient(#7c8aa3,#e7b994 70%)',ground:'linear-gradient(#8c8478,#6e675d)',mat:['#f1ece2','#c9a27e','#b08d57','#d9d3c7'],data:[['USE','飲食店'],['STRUCTURE','木造平屋'],['SEATS','20席'],['FRONTAGE','間口 8m']],in1:'linear-gradient(135deg,#d9b48b,#8a6243)',
  draw(H,P){bx(H,P,180,170,500,280,{background:'#f1ece2'});bx(H,P,220,250,260,170,{background:'linear-gradient(rgba(255,205,140,.95),rgba(230,150,80,.85))',border:'6px solid #222',boxSizing:'border-box'});bx(H,P,520,240,110,210,{background:'linear-gradient(90deg,#8a6243,#b58a5e)',border:'5px solid #222',boxSizing:'border-box'});bx(H,P,200,214,300,30,{background:'repeating-linear-gradient(90deg,#3c4b3f 0 30px,#f1ece2 30px 60px)',clipPath:'polygon(0 0,100% 0,96% 100%,4% 100%)'});bx(H,P,280,186,140,22,{background:'#b08d57',color:'#222',fontSize:'14px',textAlign:'center',lineHeight:'22px',fontFamily:F.serif,fontWeight:'700'}).textContent='café';
  bx(H,P,660,380,60,70,{background:'#2a2a2a',border:'3px solid #8a6243',boxSizing:'border-box'});bx(H,P,230,420,180,26,{background:'#8a6243'});[[150,452],[740,452]].forEach(q=>tree(H,P,q[0],q[1],80,'#6a8459'));person(H,P,80,520,'#3d3d3d');person(H,P,780,530,'#7a4b3a')}})}});

defB({no:'04',cat:'COMMERCIAL',name:'木造のオフィスビル',en:'Timber Office Building',text:'nobu office',lead:'縦の木のフィンと、緑のテラス。環境にやさしい、これからのオフィスビルのボード。',
use:'<b>本社ビル・オフィス・研究施設・ZEB（省エネ建築）</b>の企画や、社内・投資家への構想説明に。',
tips:['木造・省エネの建物は、断面図で「光と風の流れ」を矢印で見せるのが効果的','縦のフィン（羽板）が並ぶ外観は、上品で日差しも遮る、今どきのデザイン','各階のテラスに緑を入れると、働く人の気持ちよさが伝わります'],
p:`木造（CLT）のオフィスビルの建築プレゼンボードを作ってください。
・建物の名前：「{T}」
・建物：地上7階建てのオフィスビル。1階にカフェとロビー、最上階に社員ラウンジとテラス。木造と鉄骨のハイブリッド構造。省エネ（ZEB）
・外観：外周に縦の木のフィン（羽板）を規則正しく並べ、各階の角にテラスと植栽。足元はガラス張りで開放的
・メインの外観パース：晴れた朝、交差点から見上げる構図。木のフィンに朝日が当たり、テラスの緑が映える。足元に歩く人と街路樹
・ボードの右側：コンセプト文「木に包まれて、働く。」と短い説明、断面図（光と風の流れを矢印で示したダイアグラム）、内観パースを2枚（木の天井が見える執務フロア／緑のある最上階のラウンジ）
・素材サンプル：CLT（木の板）・ガラス・アルミ・植栽
・ボードの下部：「用途：事務所」「構造：木造＋鉄骨造 地上7階」「延床面積：約6,000㎡」「省エネ：ZEB Ready」
・ボード全体：白い背景に、木の色と緑のさわやかなトーン`,
run(H,t){board(H,t,{k:'TIMBER OFFICE',c:'木に包まれて、働く。縦の木のフィンが日差しをやわらげ、各階のテラスが働く人に緑と風を届ける。',sky:'linear-gradient(#a9cfe8,#eef4f6 75%)',mat:['#d9b48b','#bcd2de','#c7c7c7','#7d9a6a'],data:[['USE','事務所'],['STRUCTURE','木造＋鉄骨 7階'],['AREA','約6,000㎡'],['ENERGY','ZEB Ready']],plan:[[20,20,160,160],[20,20,160,30],[20,60,160,30],[20,100,160,30],[20,140,160,40]],
  draw(H,P){bx(H,P,260,20,340,430,{background:GLASS});bx(H,P,260,20,340,430,{backgroundImage:'repeating-linear-gradient(90deg,#c99c6b 0 10px,transparent 10px 26px)'});for(let i=0;i<7;i++){bx(H,P,250,20+i*60,360,6,{background:'#e8e2d8'});bx(H,P,540,30+i*60,70,14,{background:'#7d9a6a',borderRadius:'8px 8px 0 0'})}bx(H,P,260,390,340,60,{background:'linear-gradient(rgba(255,230,190,.9),rgba(220,200,170,.9))'});
  [[150,452],[200,470],[700,452],[760,470]].forEach(q=>tree(H,P,q[0],q[1],100,'#6a8f55'));for(let i=0;i<6;i++)person(H,P,300+i*50,500+rnd(0,30))}})}});

defB({no:'05',cat:'COMMERCIAL',name:'木造の保育園',en:'Timber Nursery School',text:'nobu保育園',lead:'小さな切妻屋根が連なる、木のぬくもりの保育園。子どもの目線で描く施設のボード。',
use:'<b>保育園・幼稚園・こども園・児童館・学童</b>などの施設の計画提案や、保護者・自治体への説明資料に。',
tips:['小さな屋根を連ねると、子どものスケールに合った、やさしい建物に見えます','パースには園庭で遊ぶ子どもを入れて、使われている様子を描きます','平面図は保育室・ホール・園庭のつながりが分かれば十分です'],
p:`木造平屋の保育園の建築プレゼンボードを作ってください。
・施設の名前：「{T}」
・建物：木造平屋。定員90名。0〜5歳の保育室、ホール、給食室、事務室。南側に広い園庭
・外観：小さな切妻屋根（三角屋根）が5つ連なる。外壁は明るい木の板張り、深い軒（のき）とウッドデッキが園庭に面する。大きな窓
・メインの外観パース：晴れた午前、園庭側からの構図。デッキと園庭で遊ぶ子どもたち、大きな木、砂場
・ボードの右側：コンセプト文「小さな屋根の下で、のびのび育つ。」と短い説明、平面図（保育室・ホール・園庭のつながりを淡い色で）、内観パースを2枚（木の三角天井の保育室／みんなで集まるホール）
・素材サンプル：杉板・しっくい・芝生・ウッドデッキ
・ボードの下部：「用途：保育所」「構造：木造平屋」「定員：90名」
・ボード全体：生成りの背景に、木と緑のやさしいトーン。手描き風の小さなイラストを少し添えてもよい`,
run(H,t){board(H,t,{k:'NURSERY SCHOOL',paper:'#faf6ee',c:'小さな屋根の下で、のびのび育つ。5つの三角屋根が子どものスケールで連なり、深い軒のデッキが園庭へとつながる。',sky:'linear-gradient(#b9dcf0,#f4f1e6 75%)',ground:'linear-gradient(#b5cf96,#9cb97c)',mat:['#e2c49c','#f2ede3','#9cb97c','#b88d62'],data:[['USE','保育所'],['STRUCTURE','木造平屋'],['CAPACITY','90名'],['GARDEN','南側に広い園庭']],in1:'linear-gradient(160deg,#f2dfc2,#d2ac7c)',
  draw(H,P){for(let i=0;i<5;i++){const x=90+i*140;bx(H,P,x,300,140,150,{background:'linear-gradient(90deg,#d9b88c,#e8cba3)',backgroundImage:'repeating-linear-gradient(90deg,rgba(0,0,0,.06) 0 2px,transparent 2px 14px)'});bx(H,P,x-10,220,160,84,{background:'#5b5148',clipPath:'polygon(50% 0,100% 100%,0 100%)'});bx(H,P,x+25,340,90,80,{background:GLASS})}bx(H,P,70,440,740,14,{background:'#a7835d'});
  tree(H,P,800,452,160,'#6a8f55');for(let i=0;i<9;i++){const x=120+i*70+rnd(-15,15),y=490+rnd(0,40);bx(H,P,x-4,y-24,8,8,{borderRadius:'50%',background:'#5a4636'});bx(H,P,x-5,y-16,10,16,{borderRadius:'3px',background:pick(['#ffadad','#a0d8ef','#ffd97d','#b5e48c'])})}}})}});

/* HOUSE */
defB({no:'06',cat:'HOUSE',name:'和モダンの平屋',en:'Modern Japanese House',text:'nobu邸',lead:'低く伸びる大屋根と、深い軒。庭とつながる、和モダンの平屋のボード。',
use:'<b>注文住宅の提案、工務店・設計事務所のお客さま向け資料、住宅展示場の計画</b>に。',
tips:['平屋は「横に長く、低く」見える構図にすると、落ち着いた美しさが出ます','深い軒と縁側・庭のつながりが、和モダンの見せどころ','夕暮れの、軒下に明かりが灯った時間帯がいちばん映えます'],
p:`和モダンの平屋の住宅のプレゼンボードを作ってください。
・住宅の名前：「{T}」
・建物：木造平屋。延床面積 約100㎡、3LDK。夫婦と子ども2人の4人家族。南側に庭
・外観：低い勾配の大きな片流れ（または切妻）屋根、ガルバリウムのダークグレーの屋根、深い軒。外壁は焼杉（黒い木）としっくい。庭側は大きな木製サッシの窓と縁側（ウッドデッキ）
・メインの外観パース：夕暮れ、庭側からの構図。軒下と室内に暖かい明かり、庭にもみじと石、低い植栽
・ボードの右側：コンセプト文「庭とともに、ゆっくり暮らす。」と短い説明、平面図（LDK・寝室・子ども部屋・縁側・庭）、内観パースを2枚（木の天井と庭が見えるLDK／畳の小上がり）
・素材サンプル：焼杉・しっくい・ひのき・ガルバリウム
・ボードの下部：「用途：専用住宅」「構造：木造平屋」「延床面積：約100㎡」「間取り：3LDK」
・ボード全体：生成りの背景に、黒・木・白の落ち着いた和のトーン`,
run(H,t){board(H,t,{k:'RESIDENCE / ONE-STORY',paper:'#f6f2ea',c:'庭とともに、ゆっくり暮らす。低く伸びる大屋根と深い軒が、室内と庭をひとつにつなぐ。',sky:'linear-gradient(#5f6f8a,#e3a982 72%)',ground:'linear-gradient(#7d8a6a,#5f6b4f)',mat:['#2e2b28','#efe9de','#e2c49c','#5c5f63'],data:[['USE','専用住宅'],['STRUCTURE','木造平屋'],['AREA','約100㎡'],['PLAN','3LDK']],in1:'linear-gradient(135deg,#e8d2b0,#a98257)',
  draw(H,P){bx(H,P,110,300,640,150,{background:'#2e2b28'});bx(H,P,180,320,440,130,{background:'linear-gradient(rgba(255,200,130,.95),rgba(220,140,70,.85))'});bx(H,P,180,320,440,130,{backgroundImage:'repeating-linear-gradient(90deg,transparent 0 106px,#5a4030 106px 110px)'});bx(H,P,640,320,90,130,{background:'#efe9de'});bx(H,P,40,262,780,44,{background:'#3b3e42',clipPath:'polygon(4% 0,96% 0,100% 100%,0 100%)'});bx(H,P,140,440,620,14,{background:'#a7835d'});
  bx(H,P,60,410,40,40,{borderRadius:'50%',background:'#8a8a84'});tree(H,P,790,452,150,'#b5452f');tree(H,P,70,452,90,'#5f7d4f')}})}});

defB({no:'07',cat:'HOUSE',name:'北欧ナチュラルの2階建て',en:'Nordic Natural House',text:'nobu house',lead:'三角屋根と白い外壁、木のアクセント。明るく暮らしやすい、2階建ての家のボード。',
use:'<b>注文住宅・規格住宅の提案、工務店の商品紹介、住宅展示場</b>に。子育て世代の家づくりに人気のスタイル。',
tips:['シンプルな三角屋根の家は、正面から少し斜めの構図で可愛らしく見えます','白い外壁に木の板を一部だけ張ると、北欧らしいアクセントに','内観は「吹き抜けのリビング」と「キッチン」が、お客さまにいちばん響きます'],
p:`北欧ナチュラルスタイルの2階建て住宅のプレゼンボードを作ってください。
・住宅の名前：「{T}」
・建物：木造2階建て。延床面積 約110㎡、4LDK。子育て世代の家族。小さな庭とウッドデッキ
・外観：シンプルな三角屋根（切妻）、白い塗り壁の外壁に、玄関まわりと2階の一部だけ木の板張り。黒い窓枠の縦長の窓。玄関に小さな庇
・メインの外観パース：晴れた昼、道路側から少し斜めの構図。前庭に芝生とシンボルツリー、自転車、ウッドデッキで遊ぶ子ども
・ボードの右側：コンセプト文「明るい光と、家族の気配。」と短い説明、1階と2階の平面図（並べて）、内観パースを2枚（吹き抜けのあるリビング／対面キッチンとダイニング）
・素材サンプル：白い塗り壁・パイン材・オークの床・黒いアルミ
・ボードの下部：「用途：専用住宅」「構造：木造2階建て」「延床面積：約110㎡」「間取り：4LDK」
・ボード全体：白い背景に、白・木・グレーの明るいトーン`,
run(H,t){board(H,t,{k:'RESIDENCE / NORDIC',c:'明るい光と、家族の気配。三角屋根の吹き抜けに光が降り、リビングから家じゅうに家族の気配が伝わる。',sky:'linear-gradient(#bcdcf0,#f4f3ee 75%)',ground:'linear-gradient(#a9c48c,#8fab73)',mat:['#f4f2ee','#e2c49c','#c9a27e','#2b2b2b'],data:[['USE','専用住宅'],['STRUCTURE','木造2階建て'],['AREA','約110㎡'],['PLAN','4LDK']],plan:[[10,20,85,160],[105,20,85,160],[10,20,85,70],[105,20,40,60]],in1:'linear-gradient(160deg,#fbf6ee,#e2c9a6)',
  draw(H,P){bx(H,P,270,220,320,230,{background:'#f4f2ee'});bx(H,P,250,110,360,116,{background:'#3a3d40',clipPath:'polygon(50% 0,100% 100%,0 100%)'});bx(H,P,270,220,110,230,{background:'repeating-linear-gradient(90deg,#d2ab7c 0 18px,#c39a6a 18px 20px)'});[[420,250],[500,250],[420,340],[500,340]].forEach(q=>bx(H,P,q[0],q[1],46,70,{background:GLASS,border:'4px solid #222',boxSizing:'border-box'}));bx(H,P,300,360,50,90,{background:'#2b2b2b'});
  bx(H,P,590,410,140,40,{background:'#a7835d'});tree(H,P,180,452,160,'#6a8f55');tree(H,P,760,452,90,'#7d9a6a');person(H,P,640,410,'#e07a5f')}})}});

defB({no:'08',cat:'HOUSE',name:'都市型の3階建てガレージハウス',en:'Urban Garage House',text:'nobu garage',lead:'狭い敷地を縦に使う、黒い箱のようなガレージハウス。都市の住宅のボード。',
use:'<b>都市部の狭小住宅・ガレージハウス・店舗併用住宅</b>の提案や、趣味を楽しむ家の計画に。',
tips:['狭小住宅は「断面図」で、縦のつながり（吹き抜け・階段）を見せると魅力が伝わります','ガレージの中に車やバイクを描くと、暮らしのイメージが一気に湧きます','黒い外壁＋木の玄関の組み合わせは、都市型住宅の定番'],
p:`都市部の狭い敷地に建つ、3階建てのガレージハウスのプレゼンボードを作ってください。
・住宅の名前：「{T}」
・建物：木造（または鉄骨造）3階建て。敷地 約70㎡、延床面積 約105㎡。1階がビルトインガレージと玄関、2階がLDK、3階が寝室と書斎。屋上テラス
・外観：黒いガルバリウムの外壁の、四角い箱のような形。細長いスリット窓と、2階の大きな窓。玄関の扉とガレージのシャッターだけ木
・メインの外観パース：夜、正面からの構図。ガレージの中に明かりがつき、車とバイクが見える。2階の大きな窓から暖かい明かり
・ボードの右側：コンセプト文「街なかに、自分だけの基地を。」と短い説明、断面図（3層のつながりと吹き抜けを示す）、内観パースを2枚（吹き抜けのある2階LDK／ガレージを眺める土間）
・素材サンプル：黒いガルバリウム・レッドシダー・コンクリート・スチール
・ボードの下部：「用途：専用住宅」「構造：木造3階建て」「延床面積：約105㎡」「駐車：1台＋バイク」
・ボード全体：グレーの背景に、黒・木・コンクリートのクールなトーン`,
run(H,t){board(H,t,{k:'URBAN GARAGE HOUSE',paper:'#f1f1f0',c:'街なかに、自分だけの基地を。黒い箱の中に、ガレージ・リビング・書斎が縦につながる。',sky:'linear-gradient(#20263a,#4a4f66 75%)',ground:'linear-gradient(#5a5a5a,#3e3e3e)',mat:['#2b2b2b','#b5774b','#a9a9a5','#6a6f74'],data:[['USE','専用住宅'],['STRUCTURE','木造3階建て'],['AREA','約105㎡'],['PARKING','1台＋バイク']],plan:[[60,10,80,180],[60,10,80,60],[60,70,80,60],[60,130,80,60]],
  draw(H,P){bx(H,P,140,140,90,310,{background:'#3a3a3a'});bx(H,P,630,170,100,280,{background:'#4a4a4a'});bx(H,P,300,90,260,360,{background:'#232323'});bx(H,P,330,330,200,120,{background:'linear-gradient(rgba(255,210,150,.9),rgba(200,140,80,.8))'});bx(H,P,370,385,90,40,{borderRadius:'10px 10px 4px 4px',background:'#8a1f1f'});bx(H,P,320,200,220,90,{background:'linear-gradient(rgba(255,200,130,.9),rgba(220,140,70,.8))'});bx(H,P,520,110,10,80,{background:'#f2d8b0'});bx(H,P,320,120,180,6,{background:'#f2d8b0'});bx(H,P,540,330,20,120,{background:'#b5774b'})}})}});

/* MANSION */
defB({no:'09',cat:'MANSION',name:'都心のタワーマンション',en:'High-rise Residence',text:'nobu tower',lead:'夜景に浮かぶガラスのタワーと、緑の足元。分譲マンションのパンフレットのようなボード。',
use:'<b>分譲・賃貸マンションの企画、販売パンフレットのイメージ、不動産の事業説明</b>に。',
tips:['タワーは「少し下から見上げる」構図で、高さと迫力を出します','夜景＋窓の明かりは、高級マンションのパンフレットの定番の表現','足元の緑とエントランスを描くと、住む人の安心感が伝わります'],
p:`都心に建つタワーマンションのプレゼンボードを作ってください。
・建物の名前：「{T}」
・建物：地上40階建ての超高層の分譲マンション。約400戸。足元に緑の広場と店舗。最上階にスカイラウンジ
・外観：ガラスと白い縦のラインが美しいスリムなタワー。各階の白いバルコニーが横の線をつくる。低層部は石張りで、大きなエントランスの庇
・メインの外観パース：夕暮れから夜へ変わる時間、街の夜景の中に立つタワーを少し下から見上げる構図。窓の明かりが点々と灯る。足元に緑の広場
・ボードの右側：コンセプト文「空に近い場所で、静かに暮らす。」と短い説明、配置図（タワー・広場・車寄せ）、内観パースを2枚（夜景が見えるリビング／ホテルのようなエントランスロビー）
・素材サンプル：ガラス・白いアルミ・御影石・木
・ボードの下部：「用途：共同住宅」「構造：鉄筋コンクリート造 地上40階」「総戸数：約400戸」
・ボード全体：濃紺の背景に、白と金の細い文字で、高級感のあるトーン`,
run(H,t){board(H,t,{k:'HIGH-RISE RESIDENCE',c:'空に近い場所で、静かに暮らす。ガラスと白い線のスリムなタワーが、夜景の中に凛と立つ。',sky:'linear-gradient(#141c3a,#3b3f6b 60%,#d9926a)',ground:'linear-gradient(#2a2d3a,#1c1e28)',mat:['#bcd2de','#f4f4f4','#8a8580','#c9a27e'],data:[['USE','共同住宅'],['STRUCTURE','RC造 地上40階'],['UNITS','約400戸'],['HEIGHT','約140m']],in1:'linear-gradient(135deg,#1c2442,#e0a070)',
  draw(H,P){[[90,250,120,200],[640,220,130,230],[230,300,80,150]].forEach(q=>{bx(H,P,q[0],q[1],q[2],q[3],{background:'#272b44'});bx(H,P,q[0],q[1],q[2],q[3],{backgroundImage:'radial-gradient(rgba(255,210,140,.8) 1.5px,transparent 2px)',backgroundSize:'14px 18px'})});
  bx(H,P,350,10,180,440,{background:'linear-gradient(90deg,#3a4370,#5b6aa0 50%,#2c3358)'});bx(H,P,350,10,180,440,{backgroundImage:'repeating-linear-gradient(0deg,rgba(255,255,255,.75) 0 2px,transparent 2px 12px)'});for(let i=0;i<40;i++)bx(H,P,356+rnd(0,160),20+rnd(0,400),10,6,{background:'rgba(255,210,140,.9)'});bx(H,P,320,400,240,50,{background:'#8a8580'});tree(H,P,300,452,70,'#3f5a3a');tree(H,P,580,452,70,'#3f5a3a')}})}});

defB({no:'10',cat:'MANSION',name:'緑のテラスの低層マンション',en:'Terraced Low-rise Residence',text:'nobu garden',lead:'階段状のテラスに緑があふれる、5階建ての低層マンション。住宅街になじむボード。',
use:'<b>低層の分譲・賃貸マンション、社宅、シニア向け住宅</b>の企画や、近隣説明会の資料に。',
tips:['上の階ほど後ろに下がる「セットバック」で、テラスが生まれ圧迫感も減ります','テラスにあふれる緑を描くと、暮らしの豊かさが伝わります','住宅街との調和を見せるため、まわりの家並みも少し描きます'],
p:`住宅街に建つ、緑のテラスのある低層マンションのプレゼンボードを作ってください。
・建物の名前：「{T}」
・建物：地上5階建ての分譲マンション。約40戸。上の階ほど少しずつ後ろに下がる階段状（セットバック）で、各階に広いテラス
・外観：白いコンクリートとあたたかい木の格子。各テラスに大きなプランターと植栽が垂れ下がる。1階に中庭とエントランス
・メインの外観パース：晴れた午後、通りの斜め向かいからの構図。テラスの緑があふれ、まわりの戸建ての家並みとなじむ。歩道に街路樹と歩く人
・ボードの右側：コンセプト文「緑のテラスで、空と暮らす。」と短い説明、断面図（階段状のテラスと日当たりを矢印で）、内観パースを2枚（テラスとつながるリビング／中庭）
・素材サンプル：白いコンクリート・木の格子・植栽・タイル
・ボードの下部：「用途：共同住宅」「構造：鉄筋コンクリート造 地上5階」「総戸数：約40戸」
・ボード全体：白い背景に、緑と木のやわらかいトーン`,
run(H,t){board(H,t,{k:'TERRACED RESIDENCE',c:'緑のテラスで、空と暮らす。上の階ほど少しずつ下がる形が、すべての住戸に空と緑のテラスをつくる。',sky:'linear-gradient(#b9dcf0,#f3f2ec 75%)',mat:['#efede8','#c9a27e','#7d9a6a','#b8a99a'],data:[['USE','共同住宅'],['STRUCTURE','RC造 地上5階'],['UNITS','約40戸'],['GREEN','全住戸にテラス']],plan:[[20,150,160,30],[40,115,140,30],[60,80,120,30],[80,45,100,30],[100,10,80,30]],
  draw(H,P){for(let i=0;i<5;i++){const x=140+i*50,w=600-i*100;bx(H,P,x,390-i*70,w,70,{background:'#efede8'});bx(H,P,x+20,402-i*70,w-60,46,{background:GLASS});bx(H,P,x+20,402-i*70,w-60,46,{backgroundImage:'repeating-linear-gradient(90deg,#b98b5e 0 6px,transparent 6px 22px)'});bx(H,P,x-10,382-i*70,w+20,14,{background:'linear-gradient(90deg,#6f8f5f,#94b07f,#6f8f5f)',borderRadius:'7px'})}
  [[60,452],[800,452],[120,470]].forEach(q=>tree(H,P,q[0],q[1],110,'#6a8f55'));bx(H,P,0,370,60,80,{background:'#d9cfc2'});bx(H,P,790,380,70,70,{background:'#cfd6d9'});person(H,P,420,520);person(H,P,480,510,'#7a4b3a')}})}});
