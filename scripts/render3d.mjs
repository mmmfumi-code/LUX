#!/usr/bin/env node
// プロダクトの3Dコンセプトレンダー。部品を寸法（mm）で組み立てた scene JSON を PNG に描画する。
//
//   node scripts/render3d.mjs <scene.json> <out-basename> [--views three-quarter,front,side] [--width 1600 --height 1200]
//
// 出力: <out-basename>-<view>.png（views を1つだけ指定した場合は <out-basename>.png）
// ビュー: three-quarter / three-quarter-left / front / side / top / low / high
// scene JSON の書き方は scripts/render3d/README.md を参照。画像に文字は入らない（テキストはボード側で組む）。
import { createServer } from "node:http";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { execSync } from "node:child_process";
import { join, extname, dirname, resolve, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { launchBrowser, newContext } from "./lib/browser.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const appDir = join(here, "render3d");
if (!existsSync(join(appDir, "node_modules", "three"))) {
  console.log("three.js をインストールしています…");
  execSync("npm install --no-audit --no-fund", { cwd: appDir, stdio: "inherit" });
}

const args = process.argv.slice(2);
const pos = args.filter((a, i) => !a.startsWith("--") && !(args[i - 1] || "").startsWith("--"));
const [scenePath, outBase] = pos;
if (!scenePath || !outBase) {
  console.error("usage: node scripts/render3d.mjs <scene.json> <out-basename> [--views three-quarter,front] [--width 1600 --height 1200]");
  process.exit(1);
}
const opt = (k, d) => (args.includes(`--${k}`) ? args[args.indexOf(`--${k}`) + 1] : d);
const scene = JSON.parse(await readFile(scenePath, "utf8"));
if (opt("width")) scene.canvas = { ...(scene.canvas || {}), width: Number(opt("width")) };
if (opt("height")) scene.canvas = { ...(scene.canvas || {}), height: Number(opt("height")) };
const views = (opt("views", (scene.views || ["three-quarter"]).join(","))).split(",").map((s) => s.trim()).filter(Boolean);
const W = scene.canvas?.width || 1600, H = scene.canvas?.height || 1200;

const TYPES = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json" };
const server = createServer(async (req, res) => {
  try {
    const p = normalize(join(appDir, decodeURIComponent(new URL(req.url, "http://x").pathname)));
    if (!p.startsWith(appDir)) throw 0;
    const f = (await stat(p)).isDirectory() ? join(p, "index.html") : p;
    res.writeHead(200, { "content-type": TYPES[extname(f)] || "application/octet-stream" });
    res.end(await readFile(f));
  } catch { res.writeHead(404); res.end(); }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));

const browser = await launchBrowser();
try {
  const ctx = await newContext(browser, { viewport: { width: W, height: H } });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
  await page.goto(`http://127.0.0.1:${server.address().port}/`);
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 30000 }).catch(() => {
    throw new Error(`3D の初期化に失敗しました: ${errors.join(" / ")}`);
  });
  await mkdir(dirname(resolve(outBase)), { recursive: true });
  for (const v of views) {
    const dataUrl = await page.evaluate(async ({ s, v }) => {
      document.body.innerHTML = "";
      return window.__render(s, v);
    }, { s: scene, v });
    const file = views.length === 1 ? `${outBase}.png` : `${outBase}-${v}.png`;
    await writeFile(file, Buffer.from(dataUrl.split(",")[1], "base64"));
    console.log(`✓ ${file}`);
  }
  if (errors.length) console.log(`⚠ ${errors.slice(0, 3).join(" / ")}`);
} finally {
  await browser.close();
  server.close();
}
