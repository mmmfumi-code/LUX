#!/usr/bin/env node
// A3横プロダクトデザイン・プレゼンボード生成
//
//   node scripts/board.mjs <boards.json> [--only 01,03] [--no-render]
//
// boards.json と同じフォルダに次を出力する:
//   board-01.html / .png / .pdf  …  board-10.*   各案のボード
//   overview.html / .png / .pdf                   10案の一覧ボード（"overview": true のとき）
//   boards-all.pdf                                全ボードをまとめたPDF（一覧 → 01 … 10）
//
// 画像とテキストは分離する: 画像（main_visual など）には文字を入れず、日本語はすべてこのHTMLで組む。
// 画像パスは boards.json のあるフォルダからの相対パス。存在しない画像は「IMAGE」のプレースホルダーになる。
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, resolve, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const CSS = readFileSync(join(here, "..", "templates", "board", "board.css"), "utf8");
const FONTS =
  '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
  '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600&family=Noto+Sans+JP:wght@300;400;500;700&display=block" rel="stylesheet">';

const args = process.argv.slice(2);
const jsonPath = args.find((a) => !a.startsWith("--"));
if (!jsonPath) {
  console.error("usage: node scripts/board.mjs <boards.json> [--only 01,03] [--no-render]");
  process.exit(1);
}
const onlyIdx = args.indexOf("--only");
const only = onlyIdx >= 0 ? args[onlyIdx + 1].split(",") : null;
const noRender = args.includes("--no-render");

const outDir = dirname(resolve(jsonPath));
const data = JSON.parse(readFileSync(jsonPath, "utf8"));
const warnings = [];

const esc = (s) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const br = (s) => esc(s).replace(/\n/g, "<br>");

function img(src, cls = "", alt = "") {
  if (!src) return `<div class="img empty ${cls}"></div>`;
  if (!existsSync(resolve(outDir, src))) {
    warnings.push(`画像が見つかりません: ${src}`);
    return `<div class="img empty ${cls}"></div>`;
  }
  return `<div class="img ${cls}"><img src="${esc(src)}" alt="${esc(alt)}"></div>`;
}
const label = (n, en, ja) =>
  `<div class="lbl"><span class="n">${n}</span><span class="en">${en}</span><span class="ja">${ja}</span></div>`;

// 文字数の目安（超えたら警告。ボードからはみ出さないための上限）
const LIMITS = { tagline: 40, concept: 120, background: 100, problem: 40, feature_text: 50, structure: 90, scene: 70, advantage: 55, caption: 30 };
function check(no, field, s, max) {
  if (s && [...String(s)].length > max) warnings.push(`案${no} ${field}: ${[...String(s)].length}字（目安 ${max}字以内）`);
}

function header(d, b) {
  return `
  <header class="hd">
    <div class="no">${esc(b.no)}</div>
    <div class="title">
      <div class="type"><b>${esc(b.type_en || "")}</b>${b.type_en ? " — " : ""}${esc(b.type || "")}</div>
      <div class="name">${esc(b.name)}${b.name_ja ? `<small>${esc(b.name_ja)}</small>` : ""}</div>
    </div>
    <div class="tagline">${br(b.tagline)}</div>
    <div class="meta">${esc(d.project || "")}<br>${esc(d.date || "")}<br>${esc(d.version || "")}</div>
  </header>`;
}

function footer(d, b, page, total) {
  return `
  <footer class="ft">
    <span>${esc(d.studio || "AI Design Studio")} — Product Design Proposal</span>
    <span class="ev">${b.evidence ? "根拠: " + esc(b.evidence) : ""}</span>
    <span>${String(page).padStart(2, "0")} / ${String(total).padStart(2, "0")}</span>
  </footer>`;
}

function board(d, b, page, total) {
  const no = b.no;
  ["tagline", "concept", "background"].forEach((k) => check(no, k, b[k], LIMITS[k]));
  (b.problems || []).forEach((p, i) => check(no, `problems[${i}]`, p, LIMITS.problem));
  (b.features || []).forEach((f, i) => check(no, `features[${i}].text`, f.text, LIMITS.feature_text));
  check(no, "structure.text", b.structure?.text, LIMITS.structure);
  check(no, "scene.text", b.scene?.text, LIMITS.scene);
  (b.advantages || []).forEach((a, i) => check(no, `advantages[${i}]`, a.point, LIMITS.advantage));
  (b.details || []).forEach((x, i) => check(no, `details[${i}].caption`, x.caption, LIMITS.caption));
  if ((b.features || []).length > 4) warnings.push(`案${no} features は4つまで`);
  if ((b.cmf || []).length > 4) warnings.push(`案${no} cmf は4色まで`);

  const accent = b.accent || d.accent;
  const details = (b.details || []).slice(0, 2);
  while (details.length < 2) details.push({});

  return `
<section class="board" style="${accent ? `--accent:${esc(accent)}` : ""}">
  ${header(d, b)}
  <main class="bd">
    <div class="cell main">
      ${img(b.main_visual, "", b.name)}
      <div class="spec"><span>${b.size ? `SIZE <b>${esc(b.size)}</b>` : ""}</span><span>${b.price ? `PRICE <b>${esc(b.price)}</b>` : ""}</span></div>
    </div>

    <div class="cell story">
      <div class="concept">${label("01", "Concept", "コンセプト")}<p>${br(b.concept)}</p></div>
      <div>${label("02", "Background", "開発背景")}<p class="muted">${br(b.background)}</p></div>
      <div>${label("03", "User Issues", "ユーザー課題")}<ol>${(b.problems || []).slice(0, 3).map((p) => `<li>${esc(p)}</li>`).join("")}</ol></div>
    </div>

    <div class="cell side">
      <div class="cell scene">${label("04", "Scene", "想定使用シーン")}${img(b.scene?.image, "cover", "使用シーン")}<p class="cap">${esc(b.scene?.text)}</p></div>
      <div class="cell adv">${label("05", "Advantage", "競合優位性")}
        <table>${(b.advantages || []).slice(0, 3).map((a) => `<tr><td class="vs">${esc(a.vs)}</td><td>${esc(a.point)}</td></tr>`).join("")}</table>
      </div>
    </div>

    <div class="cell feat">${label("06", "Function", "機能")}
      <ul>${(b.features || []).slice(0, 4).map((f) => `<li><b>${esc(f.title)}</b><span>${esc(f.text)}</span></li>`).join("")}</ul>
    </div>

    <div class="cell struct">${label("07", "Structure", "構造")}${img(b.structure?.image, "", "構造図")}<p class="cap">${esc(b.structure?.text)}</p></div>

    <div class="cell mat">${label("08", "Material / CMF", "素材・CMF")}
      <table>${(b.materials || []).slice(0, 4).map((m) => `<tr><td>${esc(m.part)}</td><td>${esc(m.material)}${m.note ? `<span class="muted">　${esc(m.note)}</span>` : ""}</td></tr>`).join("")}</table>
      <div class="swatches">${(b.cmf || []).slice(0, 4).map((c) => `
        <div class="sw"><div class="chip" style="background:${esc(c.hex)}"></div>
          <div class="nm">${esc(c.name)}</div><div class="hx">${esc(c.hex)}</div><div class="fn">${esc(c.finish || "")}</div></div>`).join("")}
      </div>
    </div>

    <div class="cell detail">${label("09", "Detail", "ディテール")}
      <div class="pair">${details.map((x) => `<div>${img(x.image, "cover", x.caption)}<p class="cap">${esc(x.caption)}</p></div>`).join("")}</div>
    </div>
  </main>
  ${footer(d, b, page, total)}
</section>`;
}

function overview(d, boards, total) {
  const cards = boards.map((b) => `
    <div class="card ${b.recommended ? "rec" : ""}">
      ${b.recommended ? '<span class="badge">RECOMMENDED</span>' : ""}
      ${img(b.main_visual, "", b.name)}
      <div class="row1"><span class="cno">${esc(b.no)}</span><span class="ctype">${esc(b.type)}</span></div>
      <div class="cname">${esc(b.name)}</div>
      <div class="ctag">${esc(b.tagline)}</div>
      <div class="cmeta"><span>${b.price ? `<b>${esc(b.price)}</b>` : ""}</span><span>${b.score != null ? `SCORE <b>${esc(b.score)}</b>` : ""}</span></div>
    </div>`).join("");
  const ov = { no: "00", type: "10案一覧", type_en: "OVERVIEW", name: d.overview_title || "Design Proposals", tagline: d.overview_tagline || "" };
  return `
<section class="board ov">
  ${header(d, ov)}
  <main class="bd">${cards}</main>
  ${footer(d, { evidence: d.overview_evidence }, 1, total)}
</section>`;
}

const page = (title, body) => `<!doctype html>
<html lang="ja"><head><meta charset="utf-8"><title>${esc(title)}</title>${FONTS}<style>${CSS}</style></head>
<body>${body}</body></html>`;

// ---------------------------------------------------------------- build
const boards = data.boards || [];
const hasOverview = data.overview !== false && boards.length > 1;
const total = boards.length + (hasOverview ? 1 : 0);
const files = [];
const sections = [];

if (hasOverview) {
  const sec = overview(data, boards, total);
  sections.push(sec);
  if (!only || only.includes("00") || only.includes("overview")) {
    writeFileSync(join(outDir, "overview.html"), page(`${data.project} — Overview`, sec));
    files.push("overview");
  }
}
boards.forEach((b, i) => {
  const sec = board(data, b, i + 1 + (hasOverview ? 1 : 0), total);
  sections.push(sec);
  if (!only || only.includes(b.no)) {
    const name = `board-${b.no}`;
    writeFileSync(join(outDir, `${name}.html`), page(`${data.project} — ${b.no} ${b.name}`, sec));
    files.push(name);
  }
});
writeFileSync(join(outDir, "boards-all.html"), page(`${data.project} — All Boards`, sections.join("\n")));

if (warnings.length) {
  console.log("⚠ 確認してください:");
  warnings.forEach((w) => console.log("  - " + w));
}

if (noRender) {
  console.log(`HTML を出力しました: ${outDir}`);
  process.exit(0);
}

// ---------------------------------------------------------------- render
const require = createRequire(import.meta.url);
let pw;
try { pw = require("playwright"); } catch { pw = require(join(execSync("npm root -g").toString().trim(), "playwright")); }
const browser = await pw.chromium.launch();
// A3横 = 420 x 297mm = 1587.4 x 1122.5 px (96dpi)。PNG は 2倍（約 3175 x 2245 px）
const ctx = await browser.newContext({ viewport: { width: 1588, height: 1123 }, deviceScaleFactor: 2 });
const pdfOpts = { width: "420mm", height: "297mm", printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 }, preferCSSPageSize: true };

async function open(file) {
  const pg = await ctx.newPage();
  await pg.goto(pathToFileURL(join(outDir, file)).href);
  await pg.waitForLoadState("networkidle").catch(() => {});
  await pg.evaluate(() => document.fonts.ready);
  await pg.waitForTimeout(200);
  // はみ出しチェック: 各セルの中身が枠を超えていないか
  const overflow = await pg.evaluate(() =>
    [...document.querySelectorAll(".cell, .card")]
      .filter((el) => el.scrollHeight > el.clientHeight + 2)
      .map((el) => el.className));
  if (overflow.length) console.log(`⚠ ${file}: 文字があふれています → ${[...new Set(overflow)].join(", ")}`);
  return pg;
}

try {
  for (const name of files) {
    const pg = await open(`${name}.html`);
    await pg.screenshot({ path: join(outDir, `${name}.png`) });
    await pg.pdf({ path: join(outDir, `${name}.pdf`), ...pdfOpts });
    await pg.close();
    console.log(`✓ ${name}.png / ${name}.pdf`);
  }
  const all = await open("boards-all.html");
  await all.pdf({ path: join(outDir, "boards-all.pdf"), ...pdfOpts });
  await all.close();
  console.log(`✓ boards-all.pdf（${total}ページ）`);
} finally {
  await browser.close();
}
