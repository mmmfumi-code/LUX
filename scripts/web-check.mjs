#!/usr/bin/env node
// Webサイトを Desktop / Tablet / Mobile で確認する。
//
//   node scripts/web-check.mjs <site-dir> <out-dir> [--video] [--base /repo-name]
//
// - <site-dir> を簡易サーバー（localhost）で配信し、3つの画面サイズで開く
// - ページを少しずつスクロールしてスクロールアニメーションを発火させてから、全体のスクリーンショットを撮る
// - 各セクション（section[id]）のスクリーンショット、ファーストビュー、（--video）スクロールの動画も保存
// - 横スクロールの発生、コンソールエラー、読み込み失敗、alt のない画像、小さすぎるタップ領域、
//   見出し構造、表示にかかった時間を report.md にまとめる
import { createServer } from "node:http";
import { readFile, stat, mkdir, writeFile, rename, readdir, rm } from "node:fs/promises";
import { join, extname, resolve, normalize } from "node:path";
import { launchBrowser, newContext } from "./lib/browser.mjs";

const args = process.argv.slice(2);
const [siteDir, outDir] = args.filter((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--base");
if (!siteDir || !outDir) {
  console.error("usage: node scripts/web-check.mjs <site-dir> <out-dir> [--video] [--base /repo-name]");
  process.exit(1);
}
const withVideo = args.includes("--video");
const base = args.includes("--base") ? args[args.indexOf("--base") + 1] : "";
const root = resolve(siteDir);
const out = resolve(outDir);
await mkdir(out, { recursive: true });

const DEVICES = [
  { name: "desktop", width: 1440, height: 900, scale: 1, mobile: false },
  { name: "tablet", width: 834, height: 1194, scale: 1, mobile: true },
  { name: "mobile", width: 390, height: 844, scale: 2, mobile: true },
];

// ---------------------------------------------------------------- static server
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".mjs": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".txt": "text/plain; charset=utf-8", ".svg": "image/svg+xml", ".png": "image/png",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".avif": "image/avif", ".gif": "image/gif",
  ".ico": "image/x-icon", ".mp4": "video/mp4", ".webm": "video/webm", ".woff2": "font/woff2", ".woff": "font/woff",
  ".glb": "model/gltf-binary", ".gltf": "model/gltf+json", ".hdr": "application/octet-stream",
};
const server = createServer(async (req, res) => {
  try {
    let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (base && p.startsWith(base)) p = p.slice(base.length) || "/";
    let file = normalize(join(root, p));
    if (!file.startsWith(root)) throw new Error("forbidden");
    if ((await stat(file).catch(() => null))?.isDirectory()) file = join(file, "index.html");
    if (!(await stat(file).catch(() => null)) && !extname(file)) file += ".html";
    const body = await readFile(file);
    res.writeHead(200, { "content-type": TYPES[extname(file).toLowerCase()] || "application/octet-stream" });
    res.end(body);
  } catch {
    const nf = await readFile(join(root, "404.html")).catch(() => "Not Found");
    res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
    res.end(nf);
  }
});
await new Promise((r) => server.listen(0, "127.0.0.1", r));
const url = `http://127.0.0.1:${server.address().port}${base}/`;

// ---------------------------------------------------------------- checks
const browser = await launchBrowser();
const report = [`# Web チェック結果`, ``, `- 対象: ${siteDir}`, `- 日時: ${new Date().toISOString()}`, ``];
let problems = 0;

async function scrollThrough(page) {
  const h = await page.evaluate(() => document.documentElement.scrollHeight);
  const vh = page.viewportSize().height;
  for (let y = 0; y < h; y += Math.round(vh * 0.6)) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(250);
  }
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  await page.waitForTimeout(600);
}

try {
  for (const dev of DEVICES) {
    const dir = join(out, dev.name);
    await mkdir(join(dir, "sections"), { recursive: true });
    const ctxOpts = { viewport: { width: dev.width, height: dev.height }, deviceScaleFactor: dev.scale, isMobile: dev.mobile, hasTouch: dev.mobile };
    if (withVideo) ctxOpts.recordVideo = { dir: join(dir, ".rec"), size: { width: dev.width, height: dev.height } };
    const ctx = await newContext(browser, ctxOpts);
    const page = await ctx.newPage();
    const consoleErrors = [], failed = [];
    page.on("console", (m) => m.type() === "error" && consoleErrors.push(m.text()));
    page.on("pageerror", (e) => consoleErrors.push(String(e)));
    page.on("requestfailed", (r) => failed.push(`${r.url()} (${r.failure()?.errorText})`));
    page.on("response", (r) => r.status() >= 400 && failed.push(`${r.url()} (HTTP ${r.status()})`));

    const t0 = Date.now();
    await page.goto(url, { waitUntil: "load" });
    await page.waitForLoadState("networkidle").catch(() => {});
    await page.evaluate(() => document.fonts && document.fonts.ready);
    const loadMs = Date.now() - t0;
    await page.waitForTimeout(800);
    await page.screenshot({ path: join(dir, "first-view.png") });

    await scrollThrough(page);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({ path: join(dir, "full.png"), fullPage: true });

    // セクションごと
    const ids = await page.$$eval("section[id]", (els) => els.map((e) => e.id));
    for (const id of ids) {
      const el = await page.$(`section[id="${id}"]`);
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await el.screenshot({ path: join(dir, "sections", `${id}.png`) }).catch(() => {});
    }

    const audit = await page.evaluate(() => {
      const doc = document.documentElement;
      const overflowX = doc.scrollWidth > window.innerWidth + 1;
      const wide = overflowX
        ? [...document.querySelectorAll("body *")].filter((e) => e.getBoundingClientRect().right > window.innerWidth + 1).slice(0, 5)
            .map((e) => `${e.tagName.toLowerCase()}${e.id ? "#" + e.id : ""}${e.className && typeof e.className === "string" ? "." + e.className.split(" ").slice(0, 2).join(".") : ""}`)
        : [];
      const noAlt = [...document.images].filter((i) => !i.hasAttribute("alt")).map((i) => i.currentSrc || i.src).slice(0, 10);
      const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src).slice(0, 10);
      const small = [...document.querySelectorAll("a, button, [role=button], input, select")]
        .filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && (r.width < 44 || r.height < 44); })
        .map((e) => (e.textContent || e.getAttribute("aria-label") || e.tagName).trim().slice(0, 20)).slice(0, 10);
      const headings = [...document.querySelectorAll("h1,h2,h3")].map((h) => h.tagName);
      return { overflowX, wide, noAlt, broken, small, h1: headings.filter((h) => h === "H1").length, sections: [...document.querySelectorAll("section[id]")].map((s) => s.id), height: doc.scrollHeight };
    });

    await ctx.close();
    if (withVideo) {
      const recDir = join(dir, ".rec");
      const f = (await readdir(recDir)).find((x) => x.endsWith(".webm"));
      if (f) await rename(join(recDir, f), join(dir, "scroll.webm"));
      await rm(recDir, { recursive: true, force: true });
    }

    const issues = [];
    if (audit.overflowX) issues.push(`横スクロールが発生しています（はみ出し要素: ${audit.wide.join(", ") || "不明"}）`);
    if (consoleErrors.length) issues.push(`コンソールエラー ${consoleErrors.length}件: ${consoleErrors.slice(0, 3).join(" / ")}`);
    if (failed.length) issues.push(`読み込み失敗 ${failed.length}件: ${failed.slice(0, 3).join(" / ")}`);
    if (audit.broken.length) issues.push(`表示できない画像: ${audit.broken.join(", ")}`);
    if (audit.noAlt.length) issues.push(`alt のない画像: ${audit.noAlt.join(", ")}`);
    if (audit.h1 !== 1) issues.push(`h1 が ${audit.h1} 個です（1個にする）`);
    if (dev.mobile && audit.small.length) issues.push(`タップ領域が 44px 未満: ${audit.small.join(" / ")}`);
    problems += issues.length;

    report.push(`## ${dev.name}（${dev.width}×${dev.height}）`, ``,
      `- 読み込み完了まで: ${loadMs}ms`, `- ページの高さ: ${audit.height}px`, `- セクション: ${audit.sections.join(" → ") || "（section[id] なし）"}`,
      `- スクリーンショット: ${dev.name}/first-view.png, ${dev.name}/full.png, ${dev.name}/sections/*.png${withVideo ? `, ${dev.name}/scroll.webm` : ""}`,
      issues.length ? `- ⚠ 問題:\n${issues.map((i) => `  - ${i}`).join("\n")}` : `- ✓ 問題は見つかりませんでした`, ``);
    console.log(`${issues.length ? "⚠" : "✓"} ${dev.name}: ${issues.length ? issues.length + "件の問題" : "OK"}`);
  }
} finally {
  await browser.close();
  server.close();
}

report.push(`---`, problems ? `⚠ 合計 ${problems} 件の問題があります。修正して再確認してください。` : `✓ 3サイズとも自動チェックで問題はありませんでした（見た目は必ずスクリーンショットで目視確認すること）。`);
await writeFile(join(out, "report.md"), report.join("\n") + "\n");
console.log(`レポート: ${join(outDir, "report.md")}`);
