#!/usr/bin/env node
// HTML を PNG / PDF / 動画(webm) に書き出す。Playwright（グローバル導入済み）を使用。
//
//   node scripts/render.mjs png   <in.html> <out.png>  [--width 1200] [--height 800] [--scale 2] [--full] [--transparent]
//   node scripts/render.mjs pdf   <in.html> <out.pdf>  [--format A3] [--portrait]
//   node scripts/render.mjs board <in.html> <out-basename>   # A3横 PDF + PNG(プレビュー) を同時出力
//   node scripts/render.mjs video <in.html> <out.webm> [--width 1920] [--height 1080] [--duration 15]
//
// HTML 側の約束事:
//   - 日本語フォントは Google Fonts（Noto Sans JP など）を <link> で読み込む
//   - 動画用 HTML は読み込み完了で自動的にアニメーションを開始し、--duration 秒で完結させる
import { existsSync, mkdirSync, renameSync, readdirSync, rmSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { pathToFileURL } from "node:url";

import { launchBrowser, newContext, newPage } from "./lib/browser.mjs";

const [mode, input, output, ...rest] = process.argv.slice(2);
if (!mode || !input || !output) {
  console.error("usage: node scripts/render.mjs <png|pdf|board|video> <in.html> <out> [options]");
  process.exit(1);
}
const opt = {};
for (let i = 0; i < rest.length; i++) {
  const k = rest[i].replace(/^--/, "");
  const v = rest[i + 1];
  if (v === undefined || v.startsWith("--")) opt[k] = true; else { opt[k] = v; i++; }
}
const num = (k, d) => (opt[k] !== undefined ? Number(opt[k]) : d);
const url = pathToFileURL(resolve(input)).href;
const out = resolve(output);
mkdirSync(dirname(out), { recursive: true });

const browser = await launchBrowser();

async function ready(page) {
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.evaluate(() => document.fonts && document.fonts.ready).catch(() => {});
  await page.waitForTimeout(300);
}

try {
  if (mode === "png") {
    const page = await newPage(browser, {
      viewport: { width: num("width", 1200), height: num("height", 800) },
      deviceScaleFactor: num("scale", 2),
    });
    await page.goto(url);
    await ready(page);
    if (opt.transparent) await page.addStyleTag({ content: "html,body{background:transparent!important}" }).catch(() => {});
    await page.screenshot({ path: out, fullPage: !!opt.full, omitBackground: !!opt.transparent });
  } else if (mode === "pdf" || mode === "board") {
    // A3 横 = 420mm x 297mm。96dpi で 1587 x 1123 px
    const portrait = !!opt.portrait;
    const page = await newPage(browser, {
      viewport: portrait ? { width: 1123, height: 1587 } : { width: 1587, height: 1123 },
      deviceScaleFactor: 2,
    });
    await page.goto(url);
    await ready(page);
    const pdfPath = mode === "board" ? `${out}.pdf` : out;
    await page.pdf({
      path: pdfPath,
      format: opt.format || "A3",
      landscape: !portrait,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    if (mode === "board") {
      await page.screenshot({ path: `${out}.png`, fullPage: false });
      console.log(`${pdfPath}\n${out}.png`);
    }
  } else if (mode === "video") {
    const width = num("width", 1920), height = num("height", 1080);
    const tmp = join(dirname(out), `.rec-${Date.now()}`);
    const context = await newContext(browser, {
      viewport: { width, height },
      recordVideo: { dir: tmp, size: { width, height } },
    });
    const page = await context.newPage();
    await page.goto(url);
    await page.waitForTimeout(num("duration", 15) * 1000 + 500);
    await context.close();
    const file = readdirSync(tmp).find((f) => f.endsWith(".webm"));
    renameSync(join(tmp, file), out);
    rmSync(tmp, { recursive: true, force: true });
  } else {
    throw new Error(`unknown mode: ${mode}`);
  }
  if (mode !== "board") console.log(out);
} finally {
  await browser.close();
}
