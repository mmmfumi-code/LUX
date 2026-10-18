# イラスト変換 作例画像

- 生成：Figma AI（generate_image / gemini-3.1-flash-image）、ファイル https://www.figma.com/design/TAToJ4Ju65apUAyCqxelO3
- base.jpg：架空の男の子（実在しない人物）の元写真
- iNN.jpg：イラスト変換 No.NN の作例（元写真と同じ特徴を文章で指定して生成した参考イメージ）
- 取り出し方：get_screenshot(maxDimension 800, enableBase64Response) → tool-results の PNG を JPEG 84 で保存
- サイトへの反映：src/i1_illust.js の EXIMG に番号を足して build.py → files に img/iNN.jpg を追加して publish

## 共通の人物指定（SUBJ）
a 9-year-old Japanese boy with short black hair and a soft fringe, round face, big dark brown eyes and a cheerful open smile, wearing a mustard-yellow hoodie over a white t-shirt, navy blue shorts, white socks and red sneakers, holding a blue baseball cap in his right hand, standing full body on a paved path in a sunny park with green trees and a wooden bench

## 生成済み
01〜09、11、15（10/18 に Figma AI の月の上限に達して停止。次のリセットは 2026-11-01）

## 未生成（10〜60）— 各ページの英語版プロンプト（enp）の「the attached photo / person」を SUBJ に置き換えて生成する
- 10 正方形 / 20 正方形 / 30 正方形 / 47 正方形 / 51 横長 / 60 横長 / 18 縦長 / ほかは 768×1024
- 57 は写真に動物がいないため、架空の柴犬で作る（ページに注記）
- 58 は「男の子が描いたクレヨン画」を立体化した絵として作る
