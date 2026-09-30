// 3Dレンダー（文字なし）からディテール・シーン用の部分を切り出す（元画像の実寸ピクセル座標）
//   node crop.mjs <crops.json>   … [{ "src": "...png", "out": "...png", "x":0,"y":0,"w":0,"h":0 }]
import { launchBrowser, newContext } from "/home/user/LUX/scripts/lib/browser.mjs";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
const spec = resolve(process.argv[2]);
const base = dirname(spec);
const list = JSON.parse(readFileSync(spec, "utf8"));
const browser = await launchBrowser();
const ctx = await newContext(browser, { viewport: { width: 2400, height: 1400 }, deviceScaleFactor: 2 });
const pg = await ctx.newPage();
for (const c of list) {
  const src = "data:image/png;base64," + readFileSync(resolve(base, c.src)).toString("base64");
  await pg.setContent(`<html><body style="margin:0"><img id=i src="${src}" style="display:block"></body></html>`);
  await pg.waitForFunction(() => document.getElementById("i").complete);
  await pg.screenshot({ path: resolve(base, c.out), clip: { x: c.x, y: c.y, width: c.w, height: c.h } });
  console.log("✓", c.out);
}
await browser.close();
