// 3Dレンダー（文字なし）からディテール用の部分拡大を切り出す
//   node crop.mjs <crops.json>   … [{ "src": "...png", "out": "...png", "x":0,"y":0,"w":0,"h":0 }]
import { launchBrowser, newContext } from "/home/user/LUX/scripts/lib/browser.mjs";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";
const spec = resolve(process.argv[2]);
const base = dirname(spec);
const list = JSON.parse(readFileSync(spec, "utf8"));
const browser = await launchBrowser();
const ctx = await newContext(browser, { viewport: { width: 1600, height: 1200 }, deviceScaleFactor: 2 });
const pg = await ctx.newPage();
for (const c of list) {
  const src = "data:image/png;base64," + readFileSync(resolve(base, c.src)).toString("base64");
  await pg.setContent(`<html><body style="margin:0"><img id=i src="${src}" style="display:block;width:1600px;height:1200px"></body></html>`);
  await pg.waitForFunction(() => document.getElementById("i").complete);
  await pg.screenshot({ path: resolve(base, c.out), clip: { x: c.x, y: c.y, width: c.w, height: c.h } });
  console.log("✓", c.out);
}
await browser.close();
