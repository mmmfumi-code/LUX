/* ===== ILLUST 01-30 ===== */
CUR_SEC='i';
const GPT='<b>◎</b> ChatGPT（画像生成）',GEM='<b>◎</b> Gemini',GPTo='ChatGPT（画像生成）',GEMo='Gemini',MJ='Midjourney（英語版）',FF='Adobe Firefly',CV='Canva AI';
const EXIMG=['01','02','03','04','05','06','07','08','09','11','15'];
const defI=o=>{o.text='';o.loop=0;if(EXIMG.includes(o.no))o.img='img/i'+o.no+'.jpg';def(o)};

/* BASIC */
defI({no:'01',cat:'BASIC',name:'画風チェンジの基本形',en:'Style Transfer Template',lead:'どんな画風にも使える「型」。まずはこれで変換のコツをつかむ。',
before:'人物が写ったスナップ写真',after:'構図と顔立ちはそのまま、指定した画風のイラスト',kw:['構図キープ','顔立ちキープ','線と塗りを指定','色数を指定'],pal:['#2b2d42','#8d99ae','#edf2f4','#ef233c','#ffd166'],tools:[GPT,GEM,FF],
use:'<b>すべての変換の土台</b>です。【スタイル】の1行を書き換えるだけで、水彩にもアニメにもなります。迷ったらここから始めてください。',
tips:['「線」「塗り」「色」「光」「背景」の5項目を指定すると、仕上がりのブレが一気に減ります','似なかったら「顔のパーツの位置と大きさは写真のまま」と追加で送る','最初は【スタイル】を短く、慣れたら細かく足していく'],
p:`【スタイル】やわらかいタッチのイラスト（ここを好きな画風に書き換える）
【描き方】
・線：輪郭に細めの線を入れる（太さは均一、色は濃い茶色）
・塗り：影は1段階だけのシンプルな塗り
・色：写真の色を少し明るく、彩度を少し上げる
・光：写真の光の向きを保つ
・背景：写真と同じ場所を、同じ画風で簡略化して描く
【必ず残すもの】顔の形とパーツの位置、髪型、服の形と色、ポーズ、写真の構図
【避けるもの】写真のような質感、顔の形が変わること、余計な人物や物の追加`,
enp:'Redraw the attached photo as a soft illustration. Keep the exact composition, pose, face shape, hairstyle and outfit. Thin uniform brown outlines, simple one-step cel shading, slightly brighter and more saturated colors, same lighting direction, simplified background in the same style. No photorealism, no extra people.'});

defI({no:'02',cat:'BASIC',name:'背景だけイラストにする',en:'Illustrated Background Only',lead:'人物は写真のまま、背景だけを絵本のような世界に描き変える。',
before:'街中・部屋など、ごちゃついた背景の写真',after:'人物は実写のまま、背景だけ手描きイラストの世界',kw:['人物はそのまま','背景だけ変換','合成感をなくす','光を合わせる'],pal:['#f4a261','#e9c46a','#2a9d8f','#264653','#fefae0'],tools:[GPT,GEM,FF],
use:'<b>プロフィール写真・SNS投稿・サムネイル</b>に。人物はリアルなまま、背景を変えるだけで「おしゃれな写真」に変わります。',
tips:['「人物の輪郭のまわりに不自然な縁を出さない」と入れると合成感が消えます','背景の色を、服の色の補色にすると人物が際立ちます','背景のテーマ（森・宇宙・海など）を一言で指定すると狙いどおりに'],
p:`【スタイル】写っている人物は写真のまま一切変えず、背景だけを手描きの絵本のようなイラストに描き変える
【描き方】
・人物：顔・髪・服・肌の質感をすべて写真のまま残す（イラスト化しない）
・背景：元の背景と同じ奥行きと配置を保ちつつ、水彩とクレヨンを混ぜたようなやさしいイラストに
・色：背景はあたたかいパステル調（オレンジ・黄・緑）
・光：人物にあたっている光の向きと色に、背景の光を合わせる
・境目：人物の輪郭のまわりに白い縁やぼやけを出さず、自然になじませる
【避けるもの】人物の顔や体の変化、合成したような不自然な境目`,
enp:'Keep the person in the attached photo completely photorealistic and unchanged. Replace only the background with a warm hand-drawn storybook illustration (watercolor and crayon texture, pastel orange, yellow and green), keeping the same depth and layout. Match the lighting on the person. Seamless edges, no halo.'});

defI({no:'03',cat:'BASIC',name:'人物だけイラストにする',en:'Illustrated Person Only',lead:'背景は写真のまま、人物だけをアニメ調のキャラクターに。',
before:'旅行先・カフェなどで撮った人物写真',after:'実写の風景の中に、アニメ調のキャラになった本人',kw:['背景は実写','人物だけ変換','影を落とす','サイズ感キープ'],pal:['#ffb4a2','#e5989b','#b5838d','#6d6875','#ffcdb2'],tools:[GPT,GEM],
use:'<b>旅行の記念写真・SNSのネタ投稿</b>に。「実写の世界にアニメのキャラがいる」違和感が面白く、バズりやすい表現です。',
tips:['「人物の足元に、実写の影を落とす」と入れると、その場にいる感じが出ます','人物の大きさと位置が変わらないよう「写真と同じサイズ・位置で」と明記','キャラの画風は11〜20のアニメ系から選んで組み合わせても◎'],
p:`【スタイル】背景は写真のまま一切変えず、写っている人物だけを日本のアニメ調のキャラクターに描き変える
【描き方】
・人物：顔立ち・髪型・服装・ポーズの特徴を残したまま、くっきりした線とアニメ塗り（影2段階）のキャラクターにする
・大きさと位置：写真の人物とまったく同じ大きさ・同じ位置に描く
・なじませ方：人物の足元や体の下に、写真の光に合った実写らしい影を落とす
・背景：写真のまま（色・ピント・ボケ感を変えない）
【避けるもの】背景のイラスト化、人物の大きさや向きの変化`,
enp:'Keep the background of the attached photo photorealistic and unchanged. Turn only the person into a Japanese anime-style character with clean lineart and two-tone cel shading, keeping face features, hairstyle, outfit and pose. Same size and position as in the photo. Add a realistic cast shadow matching the scene lighting.'});

defI({no:'04',cat:'BASIC',name:'塗り絵（線画）にする',en:'Coloring Page Lineart',lead:'写真をくっきりした黒い線だけの塗り絵に。子どもと遊べる。',
before:'家族・ペット・お気に入りの景色の写真',after:'白い紙に黒い線だけの、塗りやすい塗り絵',kw:['白黒の線画','塗りやすい太さ','影なし','A4印刷向け'],pal:['#ffffff','#e5e5e5','#999999','#333333','#000000'],tools:[GPT,GEM,CV],
use:'<b>子ども向けの塗り絵・お絵かきの下絵・ワークショップ</b>に。家族やペットの写真が、世界にひとつの塗り絵になります。',
tips:['線の太さを「3〜4px相当」と指定すると、子どもでも塗りやすい','細かすぎる背景は「簡略化して」と入れると塗り絵として使いやすくなります','A4で印刷するなら比率を「縦長（3:4）」に'],
p:`【スタイル】子どもが塗りやすい、白い紙に黒い線だけの「塗り絵（線画）」
【描き方】
・線：黒一色、太さは均一でやや太め（3〜4px相当）。線は途切れずに閉じた形にして、色を塗る範囲がはっきり分かるようにする
・塗り：一切塗らない。影・グレー・ハッチング（斜線）も入れない
・細部：髪の毛や服のしわは、主要な線だけに簡略化する
・背景：主要な形だけを残して簡略化。細かい模様は省く
・紙：真っ白な背景
【避けるもの】色、グレーの影、細かすぎる線、ぼやけた線`,
enp:'Convert the attached photo into a clean black and white coloring page. Bold uniform black outlines (3-4px), closed shapes, no shading, no gray, no hatching. Simplify hair, clothing folds and background details. Pure white background, printable.'});

defI({no:'05',cat:'BASIC',name:'季節を変える',en:'Season Swap',lead:'同じ場所・同じ構図のまま、夏を冬に、春を秋に描き変える。',
before:'夏に撮った公園・街・家の前の写真',after:'同じ構図のまま、雪が積もった冬のイラスト',kw:['構図キープ','季節の要素を追加','光の色を変える','服装も季節に'],pal:['#e0fbfc','#c2dfe3','#9db4c0','#5c6b73','#253237'],tools:[GPT,GEM,FF],
use:'<b>季節のあいさつ・年賀状・お店の季節告知</b>に。同じ写真を4季節ぶん作ると、SNSのシリーズ投稿にもなります。',
tips:['「光の色」まで変えるのがコツ（冬は青白く、秋は夕方のオレンジ）','人物がいる場合は「服装も季節に合わせて」と追加','4季節を1枚にまとめる（4分割）のも人気です'],
p:`【スタイル】写真と同じ場所・同じ構図・同じアングルのまま、季節を「冬」に変えたイラスト（季節は書き換え可：春・夏・秋・冬）
【描き方】
・季節の要素：屋根や地面、木の枝に雪を積もらせ、空からやさしく雪を降らせる。吐く息を白く
・光：冬の午後らしい、青白くやわらかい光
・色：全体を寒色寄りに。窓や街灯だけ暖かいオレンジで灯す
・人物：顔と体はそのまま、服装をコート・マフラーなど冬の装いに変える
・画風：やわらかい水彩タッチのイラスト
【避けるもの】建物や道の形・位置の変化、構図の変化`,
enp:'Redraw the attached photo as the same place, same composition and camera angle, but in winter: snow on roofs, ground and branches, gentle snowfall, visible breath, pale blue soft afternoon light, cool palette with warm orange windows and street lamps. People keep their faces and poses but wear coats and scarves. Soft watercolor illustration.'});

defI({no:'06',cat:'BASIC',name:'昼を夜のネオン街に',en:'Day to Neon Night',lead:'昼間の街の写真を、ネオンが光るエモい夜景イラストに。',
before:'昼間の商店街・駅前・ビルの写真',after:'看板がネオンに光る、雨上がりの夜の街',kw:['夜景化','ネオン','濡れた路面の反射','シネマティック'],pal:['#0b0f2b','#3a0ca3','#f72585','#4cc9f0','#ffd166'],tools:[GPT,GEM,MJ],
use:'<b>音楽・MVのサムネ、エモいSNS投稿、ゲームの背景素材</b>に。ありふれた街の写真が、映画のワンシーンに変わります。',
tips:['「雨上がりで路面が濡れている」と入れると、ネオンの反射が映えて一気にエモくなります','ネオンの色はピンク×水色が定番、紫×オレンジでレトロに','看板の文字は崩れやすいので、文字は入れない指示が安全'],
p:`【スタイル】写真の街並みを、ネオンが光る雨上がりの夜の街に描き変えたシネマティックなイラスト
【描き方】
・時間：深夜。空は深い紺〜紫のグラデーション
・光：看板・窓・街灯をネオン（ピンク #F72585、水色 #4CC9F0、黄色）で光らせ、まわりに光のにじみ（グロー）を出す
・路面：雨上がりで濡れていて、ネオンの光が反射して縦に伸びる
・空気：うっすら霧がかかり、光の筋が見える
・構図：建物の形・配置・遠近は写真のまま
・看板の文字：読める文字は入れず、光る模様だけにする
【避けるもの】昼間の光、建物の形の変化、読める文字`,
enp:'Transform the attached daytime street photo into a cinematic rainy night scene. Deep navy-purple sky, neon signs and windows glowing pink (#F72585), cyan (#4CC9F0) and yellow with soft bloom, wet asphalt with long neon reflections, light fog and light rays. Keep buildings, layout and perspective identical. No readable text on signs.'});

defI({no:'07',cat:'BASIC',name:'服装・髪型だけ変える',en:'Outfit Change',lead:'顔とポーズはそのまま、服や髪型だけを着せ替える。',
before:'正面に近い人物の全身〜上半身の写真',after:'同じ顔・同じポーズで、別の衣装を着たイラスト',kw:['顔キープ','ポーズキープ','着せ替え','コスプレ風'],pal:['#22223b','#4a4e69','#9a8c98','#c9ada7','#f2e9e4'],tools:[GPT,GEM],
use:'<b>コスプレの試着・制服や衣装のイメージ確認・キャラ作り</b>に。「この服を着たらどう見える？」をすぐに試せます。',
tips:['衣装は「色・素材・形」の3点で指定すると思いどおりになりやすい','髪型も変えるなら「髪の長さと色」を具体的に','実写のまま着せ替えたいときは、【スタイル】を「写真のまま」に変える'],
p:`【スタイル】顔・表情・体型・ポーズは写真のまま、服装と髪型だけを変えたイラスト
【変更内容】（書き換えて使う）
・服装：深い紺色のブレザーに、白いシャツと赤いネクタイの制服（素材はウール）
・髪型：肩までの長さ、こげ茶色、ゆるいウェーブ
【描き方】
・顔：目・鼻・口の形と位置、肌の色を写真のまま残す
・ポーズ：手足の位置・体の向きを写真のまま
・画風：きれいな線と、やわらかい影のアニメ風イラスト
・背景：写真の背景をそのまま同じ画風で
【避けるもの】顔立ちの変化、体型の変化、ポーズの変化`,
enp:'Keep the face, expression, body shape and pose of the person in the attached photo. Change only the outfit to a navy wool blazer school uniform with white shirt and red tie, and the hair to shoulder-length dark brown loose waves. Clean anime-style illustration with soft shading, same background redrawn in the same style.'});

defI({no:'08',cat:'BASIC',name:'古い写真をカラーで蘇らせる',en:'Restore & Colorize',lead:'色あせたモノクロ写真を、鮮やかなカラーのイラストに描き起こす。',
before:'昔のモノクロ写真・色あせた家族写真',after:'傷やシミが消え、当時の色を想像して塗られたイラスト',kw:['修復','カラー化','傷・シミ除去','当時の色'],pal:['#d4a373','#faedcd','#fefae0','#ccd5ae','#606c38'],tools:[GPT,GEM],
use:'<b>家族の思い出・ご先祖の写真・地域の昔の写真</b>に。贈り物や、法事・記念日のスライドショーにも喜ばれます。',
tips:['写真に写っている時代（昭和30年代など）を書くと、服や物の色が自然になります','「本人の顔は変えずに」を強めに入れるのが大切','イラストではなく写真のまま修復したいなら【スタイル】を「写真として修復」に'],
p:`【スタイル】古いモノクロ写真を修復し、当時の色を想像してカラーで描き起こしたイラスト
【描き方】
・修復：写真の傷・折り目・シミ・ノイズをすべて消す
・色：写っている時代（例：昭和30年代）にふさわしい、落ち着いた自然な色で塗る。肌は健康的な自然な色
・画風：写真の質感を少し残した、やわらかい手描きの絵画調
・光：写真の光の向きを保つ
・顔：写っている人の顔立ちと表情を一切変えない
【避けるもの】顔の変化、派手すぎる色、現代の物の追加`,
enp:'Restore the attached old black-and-white photo: remove scratches, folds, stains and noise, then colorize it with natural, period-appropriate muted colors (1950s Japan) as a soft hand-painted illustration that keeps a hint of photographic texture. Preserve every face and expression exactly. No modern objects.'});

defI({no:'09',cat:'BASIC',name:'ラフから完成イラストへ',en:'Sketch to Finished Art',lead:'手描きのラフや落書きを、プロが仕上げたような完成イラストに。',
before:'紙に描いたラフ・落書き・棒人間の構図メモ',after:'ラフの構図どおりに清書・着色された完成イラスト',kw:['清書','着色','構図キープ','アイデアを形に'],pal:['#003049','#d62828','#f77f00','#fcbf49','#eae2b7'],tools:[GPT,GEM],
use:'<b>絵が苦手な人のアイデアスケッチ・漫画のネーム・資料の挿絵</b>に。頭の中のイメージを、ラフ1枚から完成させられます。',
tips:['ラフに「ここは空」「これは犬」など文字でメモを書いておくと、AIが正しく読み取ります','画風を指定しないと平均的な絵になるので、必ず【スタイル】を具体的に','気に入らない部分は「左の人物だけ描き直して」と部分指定で直せます'],
p:`【スタイル】添付した手描きのラフ（落書き）を、プロが仕上げたような完成イラストにする
【描き方】
・構図：ラフの人物や物の位置・大きさ・向きをそのまま守る
・読み取り：ラフに書かれたメモ（文字）は、描く内容の指示として読み取り、絵の中には描かない
・線：きれいに清書した、強弱のある線
・塗り：明るい色で、影と光をしっかり入れた丁寧な塗り
・背景：ラフに描かれた場所を、奥行きのある背景として描き込む
【避けるもの】ラフにない大きな要素の追加、構図の変更、メモ文字の描き込み`,
enp:'Turn the attached rough hand-drawn sketch into a polished, professionally finished illustration. Keep the exact positions, sizes and directions of all figures and objects. Treat handwritten notes as instructions and do not draw them. Clean lineart with line weight variation, bright colors with full lighting and shading, detailed background with depth.'});

defI({no:'10',cat:'BASIC',name:'写真からロゴ・アイコン素材',en:'Photo to Simple Icon',lead:'写真の被写体を、ロゴやアイコンに使えるシンプルな図形にする。',
before:'お店の外観・商品・ペット・料理の写真',after:'少ない色と単純な形でできた、ロゴに使える図案',kw:['シンプル化','3色以内','単色背景','ベクター風'],pal:['#1d3557','#457b9d','#a8dadc','#f1faee','#e63946'],tools:[GPT,GEM,CV],
use:'<b>お店のロゴ案・SNSアイコン・ショップカード・ステッカー</b>に。写真の特徴を残したまま、デザイン素材として使える形にします。',
tips:['色数を「3色以内」と決めると、ロゴとして使いやすい図案になります','背景は単色にして、あとで切り抜きやすく','正式なロゴにする場合は、デザイナーにベクター化して整えてもらうと安心'],
p:`【スタイル】写真の主役（人物・動物・建物・商品など）を、ロゴやアイコンに使えるシンプルな図案にする
【描き方】
・形：主役の特徴的なシルエットだけを残し、細部を大胆に省略した単純な形にする
・色：3色以内（例：紺・水色・白）。グラデーションは使わない
・線：線を使う場合は太さを均一に
・構図：主役を中央に大きく、正方形の中にバランスよく収める
・背景：無地の単色
【避けるもの】写真のような質感、細かい模様、4色以上の色、文字`,
enp:'Simplify the main subject of the attached photo into a minimal flat icon suitable for a logo: keep only the characteristic silhouette, bold simplified shapes, maximum 3 flat colors (navy, light blue, white), no gradients, uniform line weight, centered in a square, solid plain background, no text.'});

/* ANIME */
defI({no:'11',cat:'ANIME',name:'セル画アニメ風',en:'Cel Anime',lead:'くっきりした線と2段階の影。今のテレビアニメのような王道スタイル。',
before:'自撮り・友達との写真・推し活の写真',after:'テレビアニメのワンシーンのような、くっきり塗りのキャラ',kw:['アニメ塗り','影2段階','ハイライト','大きな瞳'],pal:['#ffd6e0','#ffb3c6','#8ecae6','#219ebc','#023047'],tools:[GPT,GEM,MJ],
use:'<b>SNSアイコン・推し活・友達へのプレゼント</b>に。いちばん人気で、誰が見ても「アニメになった！」と分かる定番の変換。',
tips:['「影は2段階」「髪にハイライト」と入れると、アニメらしさが一気に増します','目を大きくしすぎると本人に似なくなるので「目は少しだけ大きく」が◎','背景は「背景美術のように」と指定すると、作品のワンシーン感が出ます'],
p:`【スタイル】日本のテレビアニメのワンシーンのような、セル画風のアニメイラスト
【描き方】
・線：くっきりとした黒〜こげ茶の主線。輪郭はやや太く、内側の線は細く
・塗り：アニメ塗り（ベタ塗り＋はっきりした影を2段階）。髪には帯状のツヤ（ハイライト）
・顔：顔立ちの特徴は残しつつ、目は少しだけ大きく、瞳に光を2つ入れる
・色：明るく鮮やか。肌は透明感のある色
・背景：写真の場所を、アニメの背景美術のように描き込む（空はグラデーションと雲）
【避けるもの】写真っぽい質感、顔立ちが別人になること`,
enp:'Redraw the attached photo as a still from a modern Japanese TV anime: crisp dark brown lineart (thicker outer lines), flat cel shading with two hard shadow tones, glossy band highlights on hair, slightly larger eyes with two catchlights, bright saturated colors, background painted like anime background art with gradient sky and clouds. Keep facial features recognizable.'});

defI({no:'12',cat:'ANIME',name:'90年代レトロアニメ風',en:'90s Retro Anime',lead:'少しくすんだ色、フィルムのざらつき。懐かしいビデオアニメの雰囲気。',
before:'夕方の街・部屋・人物の写真',after:'90年代のビデオアニメのような、くすんだ色とざらつきのある絵',kw:['レトロ','くすみカラー','フィルムグレイン','セル画の質感'],pal:['#3d405b','#e07a5f','#f2cc8f','#81b29a','#f4f1de'],tools:[GPT,MJ,GEM],
use:'<b>シティポップのMV・エモいSNS投稿・レトロ好きのアイコン</b>に。平成レトロブームで、若い世代にも人気のスタイル。',
tips:['「フィルムのざらつき」「わずかな色ズレ」を入れると、ビデオ映像らしい懐かしさが出ます','夕方のオレンジ〜紫の空と相性が抜群','画面の比率を4:3にすると、さらに当時っぽくなります'],
p:`【スタイル】1990年代のビデオアニメ（OVA）のような、懐かしいレトロアニメ調のイラスト
【描き方】
・線：やや太めで少しだけ揺らぎのある主線
・塗り：セル画風のベタ塗りと影。影はやや青みがかった色
・色：少しくすんだ（彩度を落とした）色。夕焼けのオレンジ・紫・ピンクを多めに
・質感：フィルムのざらつき（グレイン）、わずかな色のにじみ、少しだけぼやけた輪郭
・顔：顔立ちを残しつつ、当時のアニメらしい細めのあご・大きめの瞳
・背景：写真の場所を、手描きの背景画のように
【避けるもの】今どきのくっきりしたデジタル塗り、鮮やかすぎる色`,
enp:'Redraw the attached photo as a frame from a 1990s Japanese OVA anime: slightly thick, subtly wobbly lineart, cel shading with bluish shadows, muted desaturated palette with sunset orange, purple and pink, film grain, slight chromatic bleed and softness, hand-painted background, retro character proportions. Keep the person recognizable. 4:3 framing.'});

defI({no:'13',cat:'ANIME',name:'少女漫画風',en:'Shoujo Manga',lead:'キラキラの瞳、花と光のトーン。ときめく少女漫画の1コマに。',
before:'カップル・友達・自撮りの写真',after:'花びらとキラキラに囲まれた、少女漫画の1ページ',kw:['キラキラの瞳','花のトーン','繊細な線','ときめき'],pal:['#ffe5ec','#ffc2d1','#ffb3c6','#fb6f92','#ffffff'],tools:[GPT,MJ,GEM],
use:'<b>カップル写真・結婚式・記念日のプレゼント</b>に。ロマンチックな演出で、贈り物として特に喜ばれる変換です。',
tips:['「背景に花びらとキラキラのトーン」で一気に少女漫画らしくなります','モノクロにすると漫画本のページらしく、カラーにすると表紙イラストらしくなります','瞳の描き込みを強調すると、ときめき度が上がります'],
p:`【スタイル】昔ながらの少女漫画のような、繊細でロマンチックなイラスト
【描き方】
・線：細く繊細な線。まつ毛を長く、髪の毛は流れるような細い線で
・瞳：大きく、星や光をたくさん描き込んだキラキラの瞳
・塗り：淡いパステル調の水彩風の塗り
・背景：写真の背景の代わりに、バラの花びら・光の玉・キラキラのトーンを散らす
・表情：写真の表情を、少しだけやさしく
・顔：顔立ちの特徴は残す
【避けるもの】太い線、暗い色、写真の背景をそのまま残すこと`,
enp:'Redraw the attached photo as a classic romantic shoujo manga illustration: delicate thin lines, long eyelashes, flowing fine hair strands, huge sparkling eyes full of stars and light, soft pastel watercolor coloring, background replaced with rose petals, light orbs and sparkle screentones. Keep facial features recognizable.'});

defI({no:'14',cat:'ANIME',name:'少年漫画（白黒）',en:'Shounen Manga B&W',lead:'白黒の力強い線、スクリーントーン、集中線。熱いバトル漫画の1コマ。',
before:'スポーツ・ガッツポーズ・真剣な表情の写真',after:'集中線とトーンで迫力が出た、白黒の漫画の1コマ',kw:['白黒','スクリーントーン','集中線','力強い線'],pal:['#000000','#333333','#777777','#bbbbbb','#ffffff'],tools:[GPT,GEM],
use:'<b>スポーツの決定的瞬間・部活の思い出・ネタ画像</b>に。日常の写真が、熱い漫画のクライマックスに変わります。',
tips:['「背景に集中線」で迫力が倍増。スピード線にすると動きが出ます','擬音（ドン！など）を入れたい場合は【避けるもの】から「文字」を外して、入れたい擬音を指定','トーンは「網点」と指定すると、より本物の漫画らしく'],
p:`【スタイル】日本の少年漫画の1コマのような、白黒の迫力あるイラスト
【描き方】
・線：黒のインクで描いたような力強い線。強弱をはっきりつける
・影：黒ベタと、網点のスクリーントーン（グレーの点の模様）で表現する
・背景：写真の背景の代わりに、中心（人物）に向かう集中線を描く
・表情：写真の表情を、少しだけ力強く・真剣に
・顔：顔立ちの特徴は残す
・色：白と黒とグレーのトーンだけ
【避けるもの】カラー、やわらかい水彩、文字（擬音を入れたい場合はここを外す）`,
enp:'Redraw the attached photo as a black and white shounen manga panel: bold inked lines with strong weight variation, solid black fills and halftone dot screentones for shading, intense radial speed lines in the background focused on the person, slightly more determined expression. Pure black, white and gray tones only. Keep features recognizable. No text.'});

defI({no:'15',cat:'ANIME',name:'ちびキャラ',en:'Chibi Character',lead:'2〜3頭身のデフォルメキャラに。かわいさ全振りの人気スタイル。',
before:'全身が写った人物・家族・ペットとの写真',after:'頭が大きく手足が短い、2〜3頭身のかわいいキャラ',kw:['2〜3頭身','デフォルメ','まるいシルエット','スタンプ向き'],pal:['#fff1e6','#fde2e4','#fad2e1','#bee1e6','#cddafd'],tools:[GPT,GEM,CV],
use:'<b>LINEスタンプ・SNSアイコン・グッズ・名刺</b>に。家族全員をちびキャラにして並べるのも大人気です。',
tips:['「2頭身」か「3頭身」かで印象が大きく変わります（2頭身＝赤ちゃんっぽく、3頭身＝少し大人っぽく）','服の色やメガネなど、本人の目印になる特徴を必ず残すよう指示','白背景にしておくと、あとで切り抜いてスタンプにしやすい'],
p:`【スタイル】2.5頭身のかわいいデフォルメキャラクター（ちびキャラ）
【描き方】
・体型：頭を大きく、体と手足を短くした2.5頭身。全体のシルエットは丸く
・顔：目は大きく丸く、鼻は小さな点か省略、ほっぺに薄いピンクの丸
・特徴：髪型・髪色・服の色・メガネやアクセサリーなど、本人の目印になる特徴は必ず残す
・線：やや太めで均一な、やわらかい色の線
・塗り：明るいパステル調、影は1段階だけ
・背景：白、または淡い単色
【避けるもの】リアルな頭身、細かすぎる描き込み、本人の特徴が消えること`,
enp:'Turn the person in the attached photo into a cute 2.5-head-tall chibi character: big round head, short body and limbs, round silhouette, big round eyes, tiny or no nose, pink cheek blush. Keep identifying features: hairstyle, hair color, outfit colors, glasses and accessories. Soft uniform outlines, bright pastel colors, single-step shading, plain white background.'});

defI({no:'16',cat:'ANIME',name:'手描き背景のアニメ映画風',en:'Painterly Anime Film',lead:'空と雲、緑の描き込みが美しい。劇場アニメのような温かいワンシーン。',
before:'田舎の風景・旅先・空が広い写真',after:'手描きの背景美術が美しい、劇場アニメのようなワンシーン',kw:['手描き背景','もくもくの雲','あたたかい光','ノスタルジー'],pal:['#8ecae6','#219ebc','#a7c957','#6a994e','#fefae0'],tools:[GPT,GEM,MJ],
use:'<b>旅行写真・地元の風景・家族の思い出</b>に。特に空や自然が写った写真は、驚くほど美しい一枚に変わります。',
tips:['特定のアニメ会社や監督の名前は出さず、「手描き背景」「もくもくの雲」など特徴で指示するのが安全で確実','夏の午後・夕方など「時間帯」を指定すると、光の色がぐっと良くなります','人物は小さめに描くと、背景の美しさが引き立ちます'],
p:`【スタイル】劇場アニメ映画のワンシーンのような、手描きの背景美術が美しいイラスト
【描き方】
・背景：絵の具で手描きしたような背景美術。空は深い青のグラデーションに、立体的にもくもくと重なる白い入道雲
・自然：草木の緑は、明るい緑と深い緑を細かく描き分け、葉の一枚一枚に光を当てる
・光：夏の午後のあたたかい日差し。光と影のコントラストをはっきり
・人物：やさしい線とシンプルなアニメ塗り。顔立ちの特徴は残す
・空気感：少しノスタルジックで、どこか懐かしい雰囲気
【避けるもの】実在のアニメ作品のキャラクターや場所に似せること、写真の質感`,
enp:'Redraw the attached photo as a scene from a hand-painted Japanese animated feature film: lush painterly background art, deep blue gradient sky with towering layered cumulus clouds, richly detailed greenery with sunlit leaves, warm summer afternoon light with strong contrast, characters with gentle lines and simple anime shading, nostalgic atmosphere. Do not imitate any specific existing film.'});

defI({no:'17',cat:'ANIME',name:'VTuber立ち絵風',en:'VTuber Standing Art',lead:'正面向きの上半身、華やかな衣装と小物。配信者の立ち絵のような一枚。',
before:'正面に近い上半身の写真',after:'配信のアバターのような、華やかな衣装の立ち絵',kw:['立ち絵','正面','華やかな衣装','透過しやすい背景'],pal:['#cdb4db','#ffc8dd','#ffafcc','#bde0fe','#a2d2ff'],tools:[GPT,GEM],
use:'<b>配信者のアバター案・SNSのプロフィール・自分のキャラクター作り</b>に。本格的に依頼する前のイメージ作りにも使えます。',
tips:['「テーマ（例：宇宙・和風・魔法使い）」を1つ決めて衣装に反映させると、キャラが立ちます','背景を単色にすると、切り抜いて配信画面に置きやすくなります','左右対称に近いポーズにすると「立ち絵」らしくなります'],
p:`【スタイル】VTuberの立ち絵のような、正面向き上半身のキャラクターイラスト
【描き方】
・ポーズ：正面〜やや斜め、腰から上。片手を軽く上げるなど、親しみのあるポーズ
・衣装：テーマ（例：星と宇宙）に合わせた華やかなオリジナル衣装。リボンやアクセサリーなどの小物を足す
・顔：写真の顔立ち・髪型・髪色の特徴を残し、アニメ調に整える。瞳は大きくキラキラに
・塗り：グラデーションとハイライトを多用した、つややかで華やかな塗り
・背景：無地の淡いグラデーション（切り抜きやすいように）
【避けるもの】既存のキャラクターや有名な配信者に似せること、ごちゃついた背景`,
enp:'Create a VTuber-style standing illustration (waist-up, facing forward) based on the person in the attached photo: keep face, hairstyle and hair color, anime styling with big sparkling eyes, friendly pose with one hand raised, original glamorous outfit themed on stars and space with ribbons and accessories, glossy gradient shading with highlights, plain soft gradient background for easy cutout. Do not resemble existing characters.'});

defI({no:'18',cat:'ANIME',name:'4コマ漫画にする',en:'Four-panel Comic',lead:'1枚の写真から、起承転結のある4コマ漫画を作る。',
before:'ペット・子ども・日常の1コマの写真',after:'写真の人物やペットが主人公の、オチのある4コマ漫画',kw:['起承転結','4コマ','オチ','フキダシ'],pal:['#ffffff','#f8edeb','#fec5bb','#fcd5ce','#333333'],tools:[GPT,GEM],
use:'<b>ペットや子どもの日常・SNSの連載ネタ・社内報</b>に。写真1枚からストーリーを作れるので、投稿ネタに困りません。',
tips:['ストーリーを自分で決めたいときは、【ストーリー】の4行を書き換える','文字（セリフ）は短く。長いと崩れやすいので1コマ10文字以内に','日本語の文字が崩れる場合は「フキダシは空白に」して、あとで文字を入れる'],
p:`【スタイル】写真の人物（またはペット）が主人公の、縦に4コマ並んだほのぼの4コマ漫画
※この変換では、フキダシの中に短い日本語のセリフを入れてOKです
【ストーリー】（書き換えて使う。空欄ならAIが写真から考える）
・1コマ目（起）：写真と同じ場面で、のんびりしている
・2コマ目（承）：何かを見つけて興味しんしん
・3コマ目（転）：思いがけないハプニングが起きる
・4コマ目（結）：ほっこりするオチ
【描き方】
・画風：やわらかい線のシンプルな漫画。カラーは淡い色で控えめに
・主人公：写真の特徴（顔・毛の色・服）を全コマで同じに保つ
・セリフ：1コマ10文字以内の短いセリフをフキダシに入れる
【避けるもの】コマごとに主人公の見た目が変わること、長いセリフ`,
enp:'Create a vertical 4-panel comic strip starring the person or pet from the attached photo. Panel 1: relaxing in the same scene as the photo. Panel 2: notices something curious. Panel 3: an unexpected small mishap. Panel 4: a heartwarming punchline. Simple soft-line manga style with gentle muted colors, consistent character design in all panels, short speech bubbles (or leave bubbles empty).'});

defI({no:'19',cat:'ANIME',name:'ファンタジーRPGキャラ化',en:'Fantasy RPG Hero',lead:'剣士・魔法使い・僧侶…。自分がRPGの主人公になったら。',
before:'全身〜上半身の人物写真',after:'職業に合った装備をまとった、ファンタジーRPGのキャラ',kw:['ファンタジー','職業（ジョブ）','装備','かっこいいポーズ'],pal:['#14213d','#fca311','#e5e5e5','#6a4c93','#1982c4'],tools:[GPT,GEM,MJ],
use:'<b>ゲーム好きの友達へのプレゼント・SNSのネタ・家族をパーティにする企画</b>に。職業を変えて何枚も作るのが楽しい変換です。',
tips:['職業（剣士・魔法使い・弓使い・僧侶など）を1つ指定するだけで、装備が自動で決まります','家族や友達を1人ずつ違う職業にすると「パーティ」が組めます','背景を「ダンジョン」「草原」「城」などから選ぶと世界観が出ます'],
p:`【スタイル】ファンタジーRPGのキャラクターイラスト
【設定】（書き換えて使う）
・職業：魔法使い
・装備：深い紫のローブ、金の刺しゅう、先端に青い宝石の付いた杖
・背景：古代の遺跡、魔法の光の粒が舞う
【描き方】
・顔：写真の顔立ち・髪型の特徴を残し、少しだけかっこよく（またはかわいく）整える
・ポーズ：杖を構えて呪文を唱える、躍動感のあるポーズ
・画風：ゲームのキャラクターアートのような、描き込みの多い厚塗り
・光：魔法の青い光が顔と装備を照らす
【避けるもの】既存のゲームのキャラクターに似せること、本人の特徴が消えること`,
enp:'Transform the person in the attached photo into a fantasy RPG character: a mage in a deep purple robe with gold embroidery holding a staff topped with a glowing blue gem, casting a spell in a dynamic pose, ancient ruins background with floating magic particles, detailed painterly game character art, blue magical rim light. Keep the face and hairstyle recognizable. Original design.'});

defI({no:'20',cat:'ANIME',name:'アニメ風SNSアイコン',en:'Anime Profile Icon',lead:'顔のアップを、丸く切り抜きやすいアニメ風アイコンに。',
before:'顔がはっきり写った自撮り',after:'背景が単色の、丸く切り抜けるアニメ風アイコン',kw:['顔アップ','正方形','単色背景','丸く切り抜ける'],pal:['#a0c4ff','#bdb2ff','#ffc6ff','#fdffb6','#caffbf'],tools:[GPT,GEM,CV],
use:'<b>X・Instagram・LINE・Discordのアイコン</b>に。顔を出さずに「自分らしさ」を出せるので、仕事用のアカウントにも人気です。',
tips:['アイコンは小さく表示されるので、線をやや太く・色をはっきりさせるのがコツ','背景の色は、普段使うテーマカラーにすると統一感が出ます','顔が画面の中央60%に収まるように指定すると、丸く切り抜いても切れません'],
p:`【スタイル】SNSのプロフィールアイコン用の、アニメ風の顔アップイラスト
【描き方】
・構図：正方形。顔と肩の上あたりまで。顔が画面の中央60%に収まるように（丸く切り抜いても切れない）
・顔：写真の顔立ち・髪型・髪色・メガネなどの特徴を残し、アニメ調に。やさしい笑顔
・線：小さく表示しても見えるよう、やや太めの線
・色：はっきりした明るい色。影は1〜2段階
・背景：無地の単色（例：淡い水色 #A0C4FF）。模様は入れない
【避けるもの】細かすぎる描き込み、ごちゃついた背景、顔が端に寄ること`,
enp:'Create a square anime-style social media profile icon from the attached selfie: head and shoulders, face centered within the middle 60% so it survives a circular crop, keep face features, hairstyle, hair color and glasses, gentle smile, slightly thick lines, clear bright colors with 1-2 shading tones, plain solid light blue (#A0C4FF) background.'});

/* TOY / 3D */
defI({no:'21',cat:'TOY',name:'3Dアニメ映画のキャラ風',en:'3D Animated Film',lead:'つやつやの肌、大きな瞳。海外の3Dアニメ映画の登場人物のように。',
before:'家族・子ども・人物の写真',after:'3DCGアニメ映画に出てきそうな、表情豊かなキャラクター',kw:['3DCG','やわらかい質感','大きな瞳','映画のライティング'],pal:['#f4a261','#e76f51','#2a9d8f','#e9c46a','#264653'],tools:[GPT,GEM,MJ],
use:'<b>家族写真・子どもの写真・年賀状</b>に。表情が豊かになり、写真よりも「その人らしさ」が伝わることも。',
tips:['特定の映画会社名は出さず、「3DCGアニメ映画風」「やわらかいサブサーフェス」などの特徴で指示','「映画のポスターのようなライティング」と入れると完成度が上がります','子どもの写真と特に相性が良い変換です'],
p:`【スタイル】海外の3DCGアニメ映画の登場人物のようなキャラクター
【描き方】
・造形：頭と目をやや大きく、表情豊かにデフォルメした3Dキャラクター。顔立ち・髪型・服装の特徴は残す
・質感：肌はやわらかくつややか（光が少し透けるような質感）。髪は束感のある3Dの毛並み。服は布の質感
・光：映画のような柔らかいキーライトと、輪郭を照らすリムライト
・背景：写真の場所を、同じ3DCGの世界として描く。奥はやわらかくぼかす（被写界深度）
・表情：写真の表情を、少しだけ生き生きと
【避けるもの】実在の映画のキャラクターに似せること、リアルな人間の質感`,
enp:'Transform the people in the attached photo into characters from a 3D animated feature film: stylized proportions with slightly larger heads and expressive eyes, keep facial features, hair and outfits, soft glossy skin with subsurface scattering, chunky 3D hair, fabric textures, cinematic soft key light and rim light, background as the same 3D world with shallow depth of field. Original, not resembling existing characters.'});

defI({no:'22',cat:'TOY',name:'フィギュア＆パッケージ',en:'Action Figure Box',lead:'自分がフィギュアになって、透明パッケージに入って売られている。',
before:'全身が写った人物写真',after:'本人そっくりのフィギュアが、小物と一緒に箱に入った商品写真',kw:['フィギュア化','ブリスターパック','付属の小物','商品写真風'],pal:['#e63946','#f1faee','#a8dadc','#457b9d','#1d3557'],tools:[GPT,GEM],
use:'<b>SNSでバズった定番ネタ・自己紹介・退職や誕生日のプレゼント</b>に。付属の小物で「その人らしさ」を表現するのが楽しい。',
tips:['付属の小物（ノートPC・コーヒー・猫など）は、その人の仕事や趣味から3〜4個選ぶ','パッケージの文字を入れたい場合は、名前を短く（英字が崩れにくい）','背景を「おもちゃ売り場の棚」にすると、商品っぽさが増します'],
p:`【スタイル】写真の人物そっくりのアクションフィギュアが、透明なプラスチックのパッケージ（ブリスターパック）に入って売られている商品写真
※この変換では、パッケージに短い文字を入れてOKです
【描き方】
・フィギュア：写真の人物の顔・髪型・服装を再現した、関節のあるプラスチックのフィギュア。つやのある塗装の質感
・パッケージ：厚紙の台紙＋透明なプラスチックのカバー。台紙の上部に名前（例：「TARO」）と、キャッチコピー（例：「CAFE LOVER EDITION」）
・付属の小物：フィギュアの横に、その人らしい小物を3〜4個（例：ノートパソコン、コーヒーカップ、スマホ、猫）をプラスチックの型に並べる
・撮影：商品撮影のような明るい照明、正面から
【避けるもの】顔が別人になること、長い文字`,
enp:'Create a product photo of an action figure of the person in the attached photo, sealed in a blister pack: glossy painted plastic figure with visible joints, same face, hairstyle and outfit; cardboard backing with the name "TARO" and "CAFE LOVER EDITION" at the top; molded slots with 3-4 accessories (laptop, coffee cup, smartphone, cat). Bright studio product lighting, front view.'});

defI({no:'23',cat:'TOY',name:'デフォルメ樹脂フィギュア',en:'Chibi Resin Figure',lead:'頭が大きい手のひらサイズのフィギュアに。机に飾りたくなる。',
before:'全身が写った人物・ペットの写真',after:'丸い台座に立った、頭が大きい樹脂製のミニフィギュア',kw:['大頭身','樹脂の質感','丸い台座','デスク撮影'],pal:['#ffcad4','#f4acb7','#9d8189','#d8e2dc','#ffe5d9'],tools:[GPT,GEM],
use:'<b>推し活・グッズ案・自分のアバター</b>に。机の上で撮ったような写真にすると、「本当に作ったの？」と言われる完成度に。',
tips:['「机の上に置いて、スマホで撮ったような写真」と入れると、リアルさが増します','台座の色をテーマカラーにすると、シリーズで並べたときにかわいい','特定の商品名（商標）は使わず、「デフォルメ樹脂フィギュア」と表現するのが安全'],
p:`【スタイル】写真の人物を、頭が大きい手のひらサイズのデフォルメ樹脂フィギュアにして、机の上で撮影したような写真
【描き方】
・造形：2.5頭身。頭が大きく、目は大きなつぶらな瞳。顔立ち・髪型・服装の特徴を残す
・質感：つややかな樹脂（プラスチック）。髪は大きな束のかたまりで造形し、塗装のツヤを出す
・台座：直径5cmほどの透明または淡い色の丸い台座の上に立たせる
・撮影：木の机の上に置き、横からの自然光。背景はやわらかくぼかす
・ポーズ：写真のポーズを、少しかわいく
【避けるもの】実在の商品名やロゴ、リアルな頭身`,
enp:'Make a photo of a palm-sized chibi resin figure of the person in the attached photo: 2.5-head-tall proportions, large head and big glossy eyes, sculpted chunky hair with painted gloss, keep facial features, hairstyle and outfit, standing on a small clear round base on a wooden desk, natural side window light, blurred background, cute version of the original pose. No brand names or logos.'});

defI({no:'24',cat:'TOY',name:'粘土（クレイ）アニメ風',en:'Claymation',lead:'指のあとが残る粘土でつくった、コマ撮りアニメの人形に。',
before:'人物・ペット・食べ物の写真',after:'粘土をこねて作ったような、指あとの残る人形とジオラマ',kw:['粘土','指のあと','コマ撮り','手づくり感'],pal:['#e9c46a','#f4a261','#e76f51','#8ab17d','#2a9d8f'],tools:[GPT,GEM,MJ],
use:'<b>子ども向けコンテンツ・ほっこり投稿・ストップモーション動画の企画</b>に。手づくりのぬくもりが伝わる人気の画風です。',
tips:['「指のあと」「わずかなでこぼこ」を入れるのが粘土らしさの決め手','背景も粘土のジオラマにすると、世界観が統一されます','目は黒い丸いビーズのようにすると、コマ撮りアニメっぽさが増します'],
p:`【スタイル】粘土をこねて作った、コマ撮り（ストップモーション）アニメの人形とジオラマ
【描き方】
・人形：写真の人物の特徴（髪型・服の色・メガネなど）を残した、ずんぐりした粘土の人形
・質感：粘土の表面に指のあとやわずかなでこぼこ、つやの少ないマットな質感
・顔：目は小さな黒いビーズのよう、ほほは少し赤く
・背景：写真の場所を、粘土と紙で作ったミニチュアのジオラマとして再現する
・光：撮影スタジオのやわらかい照明。小さな影が落ちる
【避けるもの】つるつるのCG質感、リアルな人間の肌`,
enp:'Recreate the attached photo as a claymation stop-motion scene: chunky plasticine puppet of the person keeping hairstyle, outfit colors and glasses, visible fingerprints and slight lumps, matte clay texture, small black bead eyes, rosy cheeks, background rebuilt as a handmade clay and paper miniature diorama, soft studio lighting with small shadows.'});

defI({no:'25',cat:'TOY',name:'ブロック玩具風',en:'Toy Brick Minifigure',lead:'組み立てブロックのおもちゃの人形と世界に。遊び心満点。',
before:'人物・家族・街や建物の写真',after:'四角いブロックで組み立てた世界と、ミニ人形になった本人',kw:['ブロック','ミニ人形','プラスチック','組み立て'],pal:['#d00000','#ffba08','#3f88c5','#032b43','#136f63'],tools:[GPT,GEM,MJ],
use:'<b>家族写真のネタ・子どもへのサプライズ・会社やお店の紹介</b>に。建物の写真をブロックの街にするのも楽しい使い方です。',
tips:['特定のブランド名は出さず、「組み立てブロックのおもちゃ」と表現するのが安全','建物の写真は「ブロックで組み立てたミニチュア」にすると作品感が出ます','人物は「円筒形の頭と、四角い体のミニ人形」と形を指定すると安定します'],
p:`【スタイル】組み立てブロックのおもちゃで作られた世界と、ミニ人形になった人物
【描き方】
・人物：円筒形の頭、四角い胴体、C字型の手を持つ、プラスチックのミニ人形。顔はシンプルなプリントの表情、髪型と服の色・柄は写真の特徴を再現
・世界：写真の背景（建物・道・木など）を、凸のある四角いブロックを組み合わせて再現する
・質感：つやのあるプラスチック。ブロックの凸の形がはっきり見える
・撮影：おもちゃを接写したような、少しぼけた背景と明るい照明
【避けるもの】実在のブランド名・ロゴ、リアルな人間の質感`,
enp:'Rebuild the attached photo as a toy brick world: people become plastic minifigures with cylindrical heads, blocky torsos and C-shaped hands, simple printed faces, hair and outfit colors matching the photo; buildings, roads and trees built from studded interlocking bricks; glossy plastic, close-up toy photography with shallow depth of field and bright lighting. No brand names or logos.'});

defI({no:'26',cat:'TOY',name:'ぬいぐるみ化',en:'Plush Toy',lead:'ふわふわの布とぬい目で、抱きしめたくなるぬいぐるみに。',
before:'ペット・人物・好きなキャラの写真',after:'ふわふわの布でできた、ぬい目のあるぬいぐるみ',kw:['ぬいぐるみ','ふわふわ','ぬい目','フェルト'],pal:['#f6bd60','#f7ede2','#f5cac3','#84a59d','#f28482'],tools:[GPT,GEM],
use:'<b>ペットの写真・推し活・グッズのアイデア</b>に。ペットをぬいぐるみにすると、飼い主さんへの最高のプレゼントになります。',
tips:['「ぬい目」「タグ」を入れると、本物のぬいぐるみのリアルさが出ます','布の素材（ふわふわのボア、フェルト）を指定すると質感が変わります','ベッドやソファの上に置いた写真にすると、生活感があってかわいい'],
p:`【スタイル】写真の人物（またはペット）を、ふわふわの布で作ったぬいぐるみにして撮影したような写真
【描き方】
・形：丸みのある、少しずんぐりしたぬいぐるみ。顔立ち・毛の色・模様・服の特徴を残す
・素材：やわらかいボア生地の毛並み。目は刺しゅうかボタン、口は刺しゅうの糸
・細部：ぬい目が見える。耳の後ろに小さな布のタグ
・撮影：白いシーツのベッドの上に座らせ、窓からのやわらかい自然光
【避けるもの】リアルな動物や人間の質感、プラスチックのようなつや`,
enp:'Turn the person or pet in the attached photo into a soft plush toy and photograph it: rounded chubby shape, keep facial features, fur colors, markings and outfit, fluffy minky fabric, embroidered or button eyes and stitched mouth, visible seams, small fabric tag behind the ear, sitting on a white-sheeted bed in soft window light.'});

defI({no:'27',cat:'TOY',name:'ミニチュアジオラマ',en:'Miniature Diorama',lead:'街の風景を、手のひらに乗るミニチュア模型のように見せる。',
before:'高いところから撮った街・駅・お祭りの写真',after:'模型のように見える、ぼかしの強いミニチュアの世界',kw:['ミニチュア','チルトシフト','模型','俯瞰'],pal:['#ffbe0b','#fb5607','#ff006e','#8338ec','#3a86ff'],tools:[GPT,GEM,MJ],
use:'<b>旅行写真・地元の紹介・観光PR</b>に。高い所から撮った写真ほど、本物の模型のように見えます。',
tips:['「上と下を強くぼかす（チルトシフト）」が模型に見える最大のポイント','色を少し鮮やかにすると、プラスチックの模型らしくなります','人や車は「模型の人形」と書くと、よりおもちゃっぽさが出ます'],
p:`【スタイル】写真の風景を、精巧なミニチュア模型（ジオラマ）を接写したように見せる
【描き方】
・ぼかし：画面の上と下を強くぼかし、中央の帯だけにピントを合わせる（チルトシフト効果）
・質感：建物は樹脂や紙でできた模型の質感。木はスポンジ素材のミニチュアの木
・人や車：小さな模型の人形とミニカーに見えるようにする
・色：彩度とコントラストを少し上げ、おもちゃのような鮮やかさに
・構図：写真の構図をそのまま保つ
【避けるもの】構図の変化、実写の質感がそのまま残ること`,
enp:'Make the attached cityscape photo look like a macro shot of a detailed miniature diorama: strong tilt-shift blur at top and bottom with a sharp middle band, buildings with resin and paper model textures, sponge model trees, people and cars as tiny figurines and toy cars, boosted saturation and contrast. Keep the original composition.'});

defI({no:'28',cat:'TOY',name:'ボクセルアート',en:'Voxel Art',lead:'小さな立方体を積み上げてつくった、ゲームのような3Dの世界に。',
before:'人物・ペット・部屋・建物の写真',after:'小さな立方体（ボクセル）で組み上げた3Dの世界',kw:['ボクセル','立方体','ゲーム風','アイソメトリック視点'],pal:['#7cb518','#5c8001','#fbb02d','#f3de2c','#3d348b'],tools:[GPT,MJ,GEM],
use:'<b>ゲーム好き向けの投稿・部屋や家の記念・子どもとの遊び</b>に。自分の部屋をボクセルにするのも人気です。',
tips:['立方体の大きさ（解像度）を「粗め」にするとレトロに、「細かめ」にすると精巧に','斜め上から見下ろす視点（アイソメトリック）と相性抜群','特定のゲームの名前は出さないのが安全'],
p:`【スタイル】写真の内容を、小さな立方体（ボクセル）を積み上げて作った3Dの世界にする
【描き方】
・形：すべてを同じ大きさの立方体の組み合わせで表現する（人物・物・地面・背景すべて）
・解像度：人物の高さが立方体30個分くらいの、ほどよい粗さ
・色：写真の色を、少しだけ鮮やかな単色の立方体に置き換える（グラデーションなし）
・視点：斜め上から見下ろす視点
・光：やわらかい太陽の光と、立方体の面ごとのはっきりした明暗
・背景：単色の空
【避けるもの】なめらかな曲線、写真の質感、特定のゲームのロゴ`,
enp:'Rebuild the attached photo as voxel art: everything made of equal-sized cubes (people, objects, ground, background), medium resolution (a person is about 30 voxels tall), flat slightly saturated colors per cube, elevated isometric-like view, soft sunlight with clear per-face shading, plain sky background. No smooth curves, no game logos.'});

defI({no:'29',cat:'TOY',name:'カプセルトイ化',en:'Capsule Toy',lead:'ガチャのカプセルから出てきたミニフィギュアに。シリーズ化も◎。',
before:'人物・ペット・好きな食べ物の写真',after:'半透明のカプセルと一緒に並んだ、ミニフィギュア',kw:['カプセル','ミニフィギュア','シリーズ','台紙'],pal:['#ff99c8','#fcf6bd','#d0f4de','#a9def9','#e4c1f9'],tools:[GPT,GEM],
use:'<b>家族や友達の「シリーズ化」・ペットのグッズ案・推し活</b>に。何種類も作って並べると、本物のガチャのように楽しめます。',
tips:['「全5種」のように、家族やペットをシリーズとして並べると楽しい','カプセルは半分開いた状態にすると「出てきた！」感が出ます','台紙の文字は入れない指示にして、あとで自分で入れるのが確実'],
p:`【スタイル】写真の人物（またはペット）が、カプセルトイ（ガチャ）のミニフィギュアになって、開いたカプセルの横に置かれている写真
【描き方】
・フィギュア：高さ4cmくらいの、少しデフォルメされたミニフィギュア。顔・髪型・服装（または毛の色・模様）の特徴を残す
・質感：つや消しのプラスチックに、塗装のムラが少しある質感
・カプセル：半透明のパステルカラーのカプセル（上半分ピンク、下半分透明）が、半分開いた状態で横にある
・撮影：白い机の上、真上に近い斜めの角度から、やわらかい照明
【避けるもの】実在の商品名やロゴ、大きすぎるフィギュア`,
enp:'Create a photo of a capsule-toy mini figure (about 4cm tall, slightly chibi) of the person or pet in the attached photo, keeping face, hair and outfit or fur markings, matte painted plastic with slight paint imperfections, next to a half-open translucent pastel capsule (pink top, clear bottom) on a white desk, high angle, soft lighting. No brand names.'});

defI({no:'30',cat:'TOY',name:'3D絵文字アバター',en:'3D Emoji Avatar',lead:'つるんとした3Dの絵文字のような、まんまるアバターに。',
before:'顔がはっきり写った自撮り',after:'つやつやの3Dアイコンのような、まんまるの顔アバター',kw:['3Dアイコン','つやつや','絵文字風','シンプル'],pal:['#ffd60a','#ffc300','#ff9f1c','#2ec4b6','#cbf3f0'],tools:[GPT,GEM,CV],
use:'<b>ビジネスのプロフィール・社員紹介・Slackやチャットのアイコン</b>に。顔出しせずに親しみやすさを出せます。',
tips:['顔のパーツを最小限（目・眉・口・髪）にすると、絵文字らしさが出ます','表情違い（笑顔・びっくり・ウインク）を何枚か作るとスタンプとしても使えます','背景は透明か単色に'],
p:`【スタイル】写真の人物の顔を、つやつやした3Dの絵文字のようなアバターにする
【描き方】
・形：顔はまるく、頭と首から上だけ。パーツは最小限（目・眉・口・鼻は小さく）
・特徴：髪型・髪色・メガネ・ひげ・アクセサリーなど、本人の目印は必ず残す
・質感：つるんとしたやわらかいプラスチックのような3D。ほんのり光沢
・表情：にっこり笑顔（書き換え可：ウインク・びっくり・考え中）
・光：やわらかいスタジオ照明、下に小さな影
・背景：無地の単色
【避けるもの】リアルな肌の質感、細かすぎる描き込み`,
enp:'Turn the face in the attached selfie into a glossy 3D emoji-style avatar: round head and neck only, minimal features (small eyes, brows, mouth, nose), keep hairstyle, hair color, glasses, facial hair and accessories, smooth soft plastic 3D material with subtle gloss, big friendly smile, soft studio lighting with a small shadow, plain solid background.'});
