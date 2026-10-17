/* ===== ZOOM 21-30 ===== */
defT({no:'21',cat:'ZOOM',name:'ズームイン',en:'Push In',lead:'今の場面にグッと寄っていき、その勢いのまま次の場面へ。',d:700,
use:'<b>「詳しく見ていきましょう」「中に入ってみると…」</b>のような、深掘りする場面に。説明動画の定番。',
tips:['寄る量は2.5倍前後。寄りすぎると何が起きたか分からなくなります','Bは少し寄った状態（1.4倍）から引いて止めると、勢いがつながります','寄る中心を見せたい物の位置にずらすと、そこに入り込む演出に'],
p:`今の場面にグッと寄っていき、その勢いのまま次の場面に変わる「ズームイン」でシーンAからシーンBへ切り替えてください。
・時間：0.7秒
・シーンA：scale 1 → 2.5、blur 0 → 14px、不透明度 1 → 0（0〜0.45秒、cubic-bezier(.7,0,.84,0)）
・シーンB：scale 1.4 → 1、blur 14px → 0、不透明度 0 → 1（0.3〜0.7秒、cubic-bezier(.16,1,.3,1)）
・AとBは少し重ねてクロスフェードさせる`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);H.a(A,[{transform:'scale(1)',filter:'blur(0)',opacity:1},{transform:'scale(2.5)',filter:'blur(14px)',opacity:0}],{d:450,dl:st,e:E.in});H.a(B,[{transform:'scale(1.4)',filter:'blur(14px)',opacity:0},{transform:'scale(1)',filter:'blur(0)',opacity:1}],{d:400,dl:st+300})}});

defT({no:'22',cat:'ZOOM',name:'ズームアウト',en:'Pull Out',lead:'今の場面が小さく縮んで遠ざかり、背後に次の場面が広がる。',d:900,
use:'<b>「全体を見てみると」「まとめ」「引きの視点」</b>に。細かい話から全体の話へ移るときの切り替え。',
tips:['縮むAの角を丸くすると、スマホ画面やカードのように見えて今っぽい','縮みきる前に消すと、遠くへ飛んでいったように見えます','Bは少し大きい状態から引くと、カメラが下がった感じが出ます'],
p:`今の場面が小さく縮んで遠ざかり、その背後に次の場面が広がる「ズームアウト」でシーンAからシーンBへ切り替えてください。
・時間：0.9秒。イージング cubic-bezier(.65,0,.35,1)
・シーンA（手前）：scale 1 → 0.25、角丸 0 → 40px、影 0 30px 80px rgba(0,0,0,.6)。最後の0.2秒で不透明度 1 → 0
・シーンB（奥）：scale 1.3 → 1、brightness 0.6 → 1
・Aが縮み始めると同時にBが見え始めるようにする`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0,{boxShadow:'0 30px 80px rgba(0,0,0,.6)'});H.a(A,[{transform:'scale(1)',borderRadius:'0',opacity:1},{transform:'scale(.3)',borderRadius:'40px',opacity:1,offset:.78},{transform:'scale(.25)',borderRadius:'40px',opacity:0}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)'});H.a(B,[{transform:'scale(1.3)',filter:'brightness(.6)'},{transform:'scale(1)',filter:'brightness(1)'}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)'})}});

defT({no:'23',cat:'ZOOM',name:'ブラーディゾルブ',en:'Blur Dissolve',lead:'ふんわりぼけて溶け合い、次の場面にピントが合う。',d:900,
use:'<b>回想・夢・やわらかい雰囲気</b>の動画に。ウェディング、Vlog、カフェ紹介など、やさしく場面をつなぎたいときに。',
tips:['ぼかしは30px前後。弱いと普通のフェード、強いと夢のような印象に','明るさを少し上げながらぼかすと、光に包まれる感じになります','ゆっくり（1.2秒以上）にすると、より情緒的に'],
p:`ふんわりとぼけて溶け合いながら、次の場面にピントが合う「ブラーディゾルブ」でシーンAからシーンBへ切り替えてください。
・時間：0.9秒。イージング cubic-bezier(.4,0,.2,1)
・シーンA：blur 0 → 30px、brightness 1 → 1.2、不透明度 1 → 0
・シーンB：blur 30px → 0、brightness 1.2 → 1、不透明度 0 → 1
・AとBは同時に変化させ、真ん中では両方がぼけて重なっているようにする`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);H.a(A,[{filter:'blur(0) brightness(1)',opacity:1},{filter:'blur(30px) brightness(1.2)',opacity:0}],{d:D,dl:st,e:E.soft});H.a(B,[{filter:'blur(30px) brightness(1.2)',opacity:0},{filter:'blur(0) brightness(1)',opacity:1}],{d:D,dl:st,e:E.soft})}});

defT({no:'24',cat:'ZOOM',name:'クロスズーム',en:'Cross Zoom',lead:'両方の場面が同じ方向にズームしながら、勢いよく入れ替わる。',d:700,
use:'<b>スポーツ・ドライブ・スピード感のあるVlog</b>に。前へ前へと進んでいく感覚を作れます。',
tips:['Aは「大きくなりながら消え」、Bは「小さい所から大きくなる」と同じ方向に見えます','明るさを中央で上げると、光のトンネルを抜けた感じに','ビートに合わせて連続で使うと疾走感が出ます'],
p:`両方の場面が同じ方向（前へ）にズームしながら勢いよく入れ替わる「クロスズーム」でシーンAからシーンBへ切り替えてください。
・時間：0.7秒
・シーンA：scale 1 → 2、blur 0 → 20px、不透明度 1 → 0（0〜0.4秒、cubic-bezier(.7,0,.84,0)）
・シーンB：scale 0.5 → 1、blur 20px → 0、不透明度 0 → 1（0.3〜0.7秒、cubic-bezier(.16,1,.3,1)）
・切り替わりの中心（0.35秒）で、画面全体の明るさを brightness 1.6 まで一瞬上げる`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);H.a(A,[{transform:'scale(1)',filter:'blur(0) brightness(1)',opacity:1},{transform:'scale(2)',filter:'blur(20px) brightness(1.6)',opacity:0}],{d:400,dl:st,e:E.in});H.a(B,[{transform:'scale(.5)',filter:'blur(20px) brightness(1.6)',opacity:0},{transform:'scale(1)',filter:'blur(0) brightness(1)',opacity:1}],{d:400,dl:st+300})}});

defT({no:'25',cat:'ZOOM',name:'スピンブラー',en:'Spin Blur',lead:'ぼけながら少しだけ回転し、ひねるように次の場面へ。',d:750,
use:'<b>おしゃれなVlog・ファッション・音楽</b>に。スピンズームより控えめで、上品にひねりを入れたいときに。',
tips:['回転は25°程度が上品。45°以上にすると派手になります','拡大を少し入れて回転すると、画面の角が見えません','逆回転で戻ると、同じ場所を行き来している感じになります'],
p:`ぼけながら少しだけ回転して、ひねるように次の場面へ変わる「スピンブラー」でシーンAからシーンBへ切り替えてください。
・時間：0.75秒
・シーンA：rotate 0 → 25°、scale 1 → 1.3、blur 0 → 30px、不透明度 1 → 0（0〜0.45秒、cubic-bezier(.7,0,.84,0)）
・シーンB：rotate −25° → 0、scale 1.3 → 1、blur 30px → 0、不透明度 0 → 1（0.3〜0.75秒、cubic-bezier(.16,1,.3,1)）`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);H.a(A,[{transform:'rotate(0) scale(1)',filter:'blur(0)',opacity:1},{transform:'rotate(25deg) scale(1.3)',filter:'blur(30px)',opacity:0}],{d:450,dl:st,e:E.in});H.a(B,[{transform:'rotate(-25deg) scale(1.3)',filter:'blur(30px)',opacity:0},{transform:'rotate(0) scale(1)',filter:'blur(0)',opacity:1}],{d:450,dl:st+300})}});

defT({no:'26',cat:'ZOOM',name:'デフォーカス',en:'Defocus Bokeh',lead:'ピントが外れて光の玉（ボケ）が浮かび、また合うと別の場面。',d:1100,
use:'<b>夜景・イルミネーション・エモい場面</b>に。カメラのピント送りのような切り替えで、映像作品らしさが出ます。',
tips:['光の玉は大小6〜10個、白〜暖色で半透明にするとカメラのボケらしくなります','ピントが外れている時間を長めにすると、余韻が生まれます','ボケの色をシーンBの色に寄せると、次の場面を予感させられます'],
p:`カメラのピントが外れて光の玉（ボケ）が浮かび、再びピントが合うと別の場面になっている「デフォーカス」を作ってください。
・時間：1.1秒
・0〜0.5秒：シーンAを blur 0 → 40px、brightness 1 → 1.3（cubic-bezier(.4,0,.2,1)）
・0.3〜0.8秒：光の玉を8個、ランダムな位置にふわっと出す。直径80〜260px、色は白・#FFD9A0・#FFB3C1 の半透明（不透明度0.35〜0.6）、ぼかし6px、mix-blend-mode: screen。少しずつ上へ漂わせる
・0.5秒：Aを非表示にして、ぼけた状態のシーンB（blur 40px）に入れ替える
・0.5〜1.1秒：Bを blur 40px → 0、brightness 1.3 → 1。光の玉はフェードアウト`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);H.a(A,[{filter:'blur(0) brightness(1)'},{filter:'blur(40px) brightness(1.3)'}],{d:500,dl:st,e:E.soft});hide(H,A,st+500);H.a(B,[{filter:'blur(40px) brightness(1.3)'},{filter:'blur(0) brightness(1)'}],{d:600,dl:st+500,e:E.soft});
  for(let i=0;i<8;i++){const s=rnd(80,260);const c=H.abs({left:rnd(0,1500)+'px',top:rnd(0,800)+'px',width:s+'px',height:s+'px',borderRadius:'50%',background:pick(['#fff','#ffd9a0','#ffb3c1']),filter:'blur(6px)',mixBlendMode:'screen',opacity:0},root);
    H.a(c,[{opacity:0,transform:'translateY(0)'},{opacity:rnd(.35,.6),offset:.4},{opacity:0,transform:'translateY(-80px)'}],{d:800,dl:st+300})}}});

defT({no:'27',cat:'ZOOM',name:'モーションスミア',en:'Motion Smear',lead:'場面が横に引き伸ばされて流れ、伸びが戻ると次の場面。',d:600,
use:'<b>スピード・移動・アクション</b>に。アニメの「スミア（伸びたコマ）」の手法で、勢いのある場面転換になります。',
tips:['伸ばす量は3倍前後。伸ばしすぎると色の帯にしか見えなくなります','横ブラーを足すと、伸びがなめらかになります','縦方向に伸ばすと「落ちる」「上がる」の表現に'],
p:`場面が横方向にびよーんと引き伸ばされて流れ去り、伸びが戻ると次の場面になっている「モーションスミア」でシーンAからシーンBへ切り替えてください。
・時間：0.6秒。イージング cubic-bezier(.87,0,.13,1)
・シーンA：transform-origin は左端。scaleX 1 → 3.5、translateX 0 → −100%、blur 0 → 16px
・シーンB：transform-origin は右端。scaleX 3.5 → 1、translateX +100% → 0、blur 16px → 0
・AとBは同じ時間で同時に動かす`,
tr(H,root,mk,st,D){const B=mk(1,{transformOrigin:'100% 50%'}),A=mk(0,{transformOrigin:'0 50%'});H.a(A,[{transform:'translateX(0) scaleX(1)',filter:'blur(0)'},{transform:'translateX(-100%) scaleX(3.5)',filter:'blur(16px)'}],{d:D,dl:st,e:E.io});H.a(B,[{transform:'translateX(100%) scaleX(3.5)',filter:'blur(16px)'},{transform:'translateX(0) scaleX(1)',filter:'blur(0)'}],{d:D,dl:st,e:E.io})}});

defT({no:'28',cat:'ZOOM',name:'ドロップズーム',en:'Drop Zoom',lead:'今の場面が奥へ沈み込み、次の場面が上から落ちてきて着地。',d:900,
use:'<b>新章・新キャラ登場・重大発表</b>に。上から「ドン」と落ちてくるので、存在感のある登場になります。',
tips:['Bの着地の瞬間に画面を少し揺らすと、重さが伝わります','Aは暗くしながら沈めると、Bとの明暗差で手前感が出ます','着地にわずかなバウンド（0.97→1）を入れると気持ちいい'],
p:`今の場面が奥へ沈み込み、次の場面が上から落ちてきて「ドン」と着地する「ドロップズーム」でシーンAからシーンBへ切り替えてください。
・時間：0.9秒
・シーンA：0〜0.5秒で scale 1 → 0.8、translateY 0 → 60px、brightness 1 → 0.4（cubic-bezier(.65,0,.35,1)）
・シーンB：0.25〜0.75秒で scale 1.5 → 1、不透明度 0 → 1（cubic-bezier(.7,0,.84,0)・加速して落ちる）。着地後に scale 0.97 → 1（0.15秒）で小さくバウンド
・着地の瞬間に、画面全体を最大10pxで0.25秒揺らす`,
tr(H,root,mk,st,D){const A=mk(0),B=mk(1);H.a(A,[{transform:'scale(1) translateY(0)',filter:'brightness(1)'},{transform:'scale(.8) translateY(60px)',filter:'brightness(.4)'}],{d:500,dl:st,e:'cubic-bezier(.65,0,.35,1)'});
  H.a(B,[{transform:'scale(1.5)',opacity:0},{transform:'scale(1)',opacity:1,offset:.77},{transform:'scale(.97)',offset:.88},{transform:'scale(1)',opacity:1}],{d:650,dl:st+250,e:E.in});H.shake(root,st+750,10,250);hide(H,A,st+D)}});

defT({no:'29',cat:'ZOOM',name:'ワープホール',en:'Warp Hole',lead:'画面の中心に穴が開き、吸い込まれるように次の世界へ。',d:1000,
use:'<b>異世界・ゲームの世界へ・夢の中へ</b>に。「〇〇の世界へようこそ」のようなオープニングにぴったり。',
tips:['穴の縁に光るリングを付けると、ポータル（入口）らしくなります','穴の中のBは大きい状態から縮めると、遠くの世界がのぞいている感じに','穴を画面の外まで広げきるのがポイント（途中で止めない）'],
p:`画面の中心に丸い穴が開き、吸い込まれるように次の世界へ入っていく「ワープホール」でシーンAからシーンBへ切り替えてください。
・時間：1.0秒
・シーンA：scale 1 → 2.6、blur 0 → 10px（加速、cubic-bezier(.7,0,.84,0)）
・シーンB（手前に重ねる）：clip-path: circle(0% at 50% 50%) → circle(80% at 50% 50%) で穴を広げる。同時に穴の中のBは scale 2 → 1（cubic-bezier(.65,0,.35,1)）
・穴の縁に、白と #38D6FF の光るリング（線幅12px、box-shadow 0 0 40px #38D6FF）を穴と同じ大きさで広げる。最後にリングはフェードアウト`,
tr(H,root,mk,st,D){const A=mk(0),B=mk(1,{clipPath:'circle(0% at 50% 50%)'});H.a(A,[{transform:'scale(1)',filter:'blur(0)'},{transform:'scale(2.6)',filter:'blur(10px)'}],{d:D,dl:st,e:E.in,f:'none'});
  H.a(B,[{clipPath:'circle(0% at 50% 50%)',transform:'scale(2)'},{clipPath:'circle(80% at 50% 50%)',transform:'scale(1)'}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)'});
  const R=H.abs({left:'800px',top:'450px',width:'0',height:'0',borderRadius:'50%',border:'12px solid #fff',boxShadow:'0 0 40px #38d6ff, inset 0 0 40px #38d6ff',transform:'translate(-50%,-50%)',opacity:0},root);
  H.a(R,[{width:'0px',height:'0px',opacity:1},{width:'2950px',height:'2950px',opacity:1,offset:.85},{width:'3500px',height:'3500px',opacity:0}],{d:D,dl:st,e:'cubic-bezier(.65,0,.35,1)'});hide(H,A,st+D)}});

defT({no:'30',cat:'ZOOM',name:'タイルディゾルブ',en:'Tile Dissolve',lead:'画面が四角いタイルでランダムに埋まり、めくれると次の場面。',d:1100,
use:'<b>ゲーム・デジタル・テック系</b>に。ピクセルのように細かく切り替わるので、デジタルな世界観と相性抜群。',
tips:['タイルは横16×縦9（正方形）にすると画面にぴったり','タイルの色をAとBの中間色にすると、なめらかにつながります','出る順番を「左上から右下へ」にすると、波のように切り替わります'],
p:`画面が四角いタイルでランダムに埋まっていき、タイルが消えると次の場面になっている「タイルディゾルブ」を作ってください。
・時間：1.1秒
・画面を横16×縦9＝144枚の正方形タイル（各100px角）に分割したレイヤーをAとBの上に重ねる。タイルの色は #38D6FF と #0F1C2E を交互に
・0〜0.5秒：各タイルを、0〜0.4秒のランダムな遅れで scale 0 → 1 に出す（0.12秒、cubic-bezier(.34,1.56,.64,1)）
・0.55秒：全タイルが埋まった瞬間にAを非表示にしてBを表示
・0.6〜1.1秒：各タイルを、0〜0.4秒のランダムな遅れで scale 1 → 0 に消す`,
tr(H,root,mk,st,D){const B=mk(1),A=mk(0);const G=H.abs({inset:'0'},root);for(let y=0;y<9;y++)for(let x=0;x<16;x++){const t=H.abs({left:x*100+'px',top:y*100+'px',width:'101px',height:'101px',background:(x+y)%2?'#38d6ff':'#0f1c2e',transform:'scale(0)'},G);
  H.a(t,[{transform:'scale(0)'},{transform:'scale(1)'}],{d:120,dl:st+rnd(0,400),e:E.back,f:'forwards'});H.a(t,[{transform:'scale(1)'},{transform:'scale(0)'}],{d:120,dl:st+600+rnd(0,400),e:E.in,f:'forwards'})}hide(H,A,st+550)}});
