// コンセプト② 着せ替えヘッドボード規格（HEAD DOCK）— 10案の scene JSON を生成する
// usage: node gen-scenes.mjs [C2-01 ...]   （引数なしで全案）
// 出力: C2-XX-hero.scene.json（寝具あり・14度振り）/ C2-XX.scene.json（寝具あり・正面/側面用）
//       C2-XX-frame.scene.json（フレーム＋HB、寝具なし）/ C2-XX-structure.scene.json（支柱だけ＋顔を持ち上げた状態／別の顔2種に差し替えた状態）
// 単位 mm。Y 上、床 y=0。X 幅、Z 長さ。頭側は -Z。
//
// HEAD DOCK 規格（全案共通）: 床に立つ2本の支柱（下端を床梁でつないだ1ユニット）。支柱の芯々ピッチ 940mm（S）を基本に、
// 顔（HBフェイス）は「インセット顔」（支柱の間に落とし込む・幅 約870）か「オーバーレイ顔」（支柱の前に掛ける・幅 約1030）の2種の取り付け位置を持つ。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const DIR = path.dirname(fileURLToPath(import.meta.url));

// ------------------------------------------------------------------ materials（C1 v2 とそろえる）
const MATS = {
  bamboo: { type: "bamboo", color: "#c89c66" },
  bamboo_z: { type: "bamboo", color: "#c89c66", grain: "z" },
  pale: { type: "bamboo", color: "#d6b584" },
  pale_z: { type: "bamboo", color: "#d6b584", grain: "z" },
  carbon: { type: "bamboo", color: "#5b3d28", roughness: 0.5 },
  carbon_z: { type: "bamboo", color: "#5b3d28", grain: "z", roughness: 0.5 },
  carbon_w: { type: "wood", color: "#4f3524", roughness: 0.5 },
  carbon_wz: { type: "wood", color: "#4f3524", grain: "z", roughness: 0.5 },
  smoked: { type: "bamboo", color: "#8a6240" },
  smoked_z: { type: "bamboo", color: "#8a6240", grain: "z" },
  node: { type: "matte", color: "#5e412b", roughness: 0.7 },
  steel: { type: "metal", color: "#232323", roughness: 0.5 },
  shadow: { type: "matte", color: "#2d2a27", roughness: 0.9 },
  recess: { type: "matte", color: "#3a3531", roughness: 0.9 },
  cream: { type: "matte", color: "#efe9df", roughness: 0.8 },
  f_offwhite: { type: "fabric", color: "#ece6db" },
  f_ivory_boucle: { type: "fabric", color: "#e4dccd", seed: 5 },
  f_boucle: { type: "fabric", color: "#d3c2a6", seed: 5 },
  f_oat: { type: "fabric", color: "#cdbc9f" },
  f_clay: { type: "fabric", color: "#a8765a" },
  f_mocha: { type: "fabric", color: "#806350" },
  f_charcoal: { type: "fabric", color: "#55524e" },
  f_sage: { type: "fabric", color: "#a4ad96" },
  f_terracotta: { type: "fabric", color: "#8f5440" },
  f_linen: { type: "fabric", color: "#d9d0c0", seed: 3 },
  mattress: { type: "mattress", color: "#f3f1ec" },
  sheet: { type: "mattress", color: "#f8f7f3", seed: 13 },
  pillow: { type: "fabric", color: "#faf8f4", seed: 9 },
  led: { type: "emissive", color: "#ffd9a0", intensity: 1.6 },
  mark: { type: "matte", color: "#4f8a5b" },
};

const rb = (size, position, material, radius = 8, rotation) => {
  const r = Math.max(1, Math.min(radius, Math.min(...size) / 2 - 1));
  const p = { type: "rbox", size, position, material, radius: r };
  if (rotation) p.rotation = rotation;
  return p;
};
const bx = (size, position, material, rotation) => {
  const p = { type: "box", size, position, material };
  if (rotation) p.rotation = rotation;
  return p;
};
const grp = (parts, position = [0, 0, 0], rotation) => {
  const g = { type: "group", position, parts };
  if (rotation) g.rotation = rotation;
  return g;
};
const cyl = (radius, height, position, material, rotation, extra = {}) => {
  const p = { type: "cylinder", radius, height, position, material, ...extra };
  if (rotation) p.rotation = rotation;
  return p;
};

const MAT_L = 1950, MAT_W = 970, MAT_H = 280;

// ------------------------------------------------------------------ frame（P1 竹デッキ・三つ折り。HB なしの本体）
function frame(o = {}) {
  const W = o.W ?? 1010, L = o.L ?? 1990, legH = o.legH ?? 160, railH = o.railH ?? 84;
  const r = o.radius ?? 14, gap = o.gap ?? 4, mat = o.mat ?? "bamboo_z";
  const lip = o.lip ?? 36;
  const parts = [];
  const seg = L / 3;
  for (let i = 0; i < 3; i++) {
    const zc = -L / 2 + seg * (i + 0.5);
    parts.push(rb([W, railH + lip, seg - gap], [0, legH + (railH + lip) / 2, zc], mat, r));
  }
  const base = o.base ?? "shadow";
  if (base === "plinth") {
    const inset = o.inset ?? 40;
    parts.push(bx([W - inset * 2, legH, L - inset * 2], [0, legH / 2, 0], o.baseMat ?? "shadow"));
  } else if (base === "block") {
    // 角の丸い竹のブロック脚（奥まった位置に6本）
    const bw = o.blockW ?? 90, inx = o.inset ?? 70;
    const xs = [-(W / 2 - inx - bw / 2), W / 2 - inx - bw / 2];
    const zs = [-L / 2 + inx + bw / 2, 0, L / 2 - inx - bw / 2];
    for (const x of xs) for (const z of zs) parts.push(rb([bw, legH, bw], [x, legH / 2, z], o.legMat ?? "bamboo", 20));
  } else if (base === "shadow") {
    const inset = o.inset ?? 110;
    parts.push(rb([W - inset * 2, legH - 4, L - inset * 2 - 40], [0, (legH - 4) / 2 + 4, 0], o.baseMat ?? "shadow", 6));
  }
  return { parts, deckTop: legH + railH, rimTop: legH + railH + lip, W, L, legH, railH: railH + lip, lip, mat, r };
}

// ------------------------------------------------------------------ bedding（C1 v2 と同じ: THE GOKUMIN 280mm＋枕2＋掛け布団＋スロー）
function bedding(deckTop, o = {}) {
  const y0 = deckTop, top = y0 + MAT_H;
  const zHead = -MAT_L / 2 + (o.headInset ?? 0);
  const throwMat = o.throwMat ?? "f_oat";
  const duvetMat = o.duvetMat ?? "sheet";
  const parts = [];
  parts.push(rb([MAT_W, MAT_H - 60, MAT_L], [0, y0 + (MAT_H - 60) / 2, zHead + MAT_L / 2], "mattress", 40));
  parts.push(rb([MAT_W - 10, 64, MAT_L - 10], [0, top - 32, zHead + MAT_L / 2], "mattress", 30));
  const dz0 = zHead + 520, dz1 = zHead + MAT_L + 40, dl = dz1 - dz0, dzc = (dz0 + dz1) / 2;
  const dw = MAT_W + 90;
  parts.push(rb([dw, 70, dl], [0, top + 30, dzc], duvetMat, 30));
  parts.push(rb([34, 250, dl - 20], [-(dw / 2 - 17), top - 90, dzc], duvetMat, 16));
  parts.push(rb([34, 250, dl - 20], [dw / 2 - 17, top - 90, dzc], duvetMat, 16));
  parts.push(rb([dw - 20, 250, 34], [0, top - 90, dz1 - 17], duvetMat, 16));
  parts.push(rb([dw + 4, 90, 230], [0, top + 44, dz0 + 110], duvetMat, 40));
  const tz = zHead + MAT_L - 330;
  parts.push(rb([dw + 40, 86, 440], [0, top + 70, tz], throwMat, 30));
  parts.push(rb([30, 300, 440], [-(dw / 2 + 12), top - 80, tz], throwMat, 14));
  parts.push(rb([30, 300, 440], [dw / 2 + 12, top - 80, tz], throwMat, 14));
  const pb = o.pillowBack ?? "pillow", pf = o.pillowFront ?? "pillow";
  parts.push(rb([580, 320, 140], [0, top + 140, zHead + 125], pb, 64, [-26, 0, 0]));
  parts.push(rb([580, 130, 400], [0, top + 62, zHead + 360], pf, 62, [-10, 0, 0]));
  return parts;
}

// ------------------------------------------------------------------ HEAD DOCK（支柱ユニット）
// f の頭側の端 zEnd の後ろに立つ。gap = デッキ端から支柱前面までの距離（オーバーレイ顔の厚み分をあける）
function dock(f, o = {}) {
  const pitch = o.pitch ?? 940, pw = o.pw ?? 70, pd = o.pd ?? 100, ph = o.ph ?? 700;
  const mat = o.mat ?? "bamboo", gap = o.gap ?? 6;
  const zEnd = -f.L / 2;
  const zc = zEnd - gap - pd / 2;
  const parts = [];
  for (const s of [-1, 1]) {
    const x = s * pitch / 2;
    if (o.round) {
      parts.push(cyl(pw / 2, ph, [x, ph / 2, zc], mat, null, { radialSegments: 48 }));
      for (const ny of o.nodes ?? []) parts.push(cyl(pw / 2 + 3, 9, [x, ny, zc], "node", null, { radialSegments: 48 }));
      parts.push(cyl(pw / 2 - 4, 6, [x, ph + 3, zc], "node", null, { radialSegments: 48 }));
    } else {
      parts.push(rb([pw, ph, pd], [x, ph / 2, zc], mat, o.r ?? 14));
    }
    if (o.mark) parts.push(cyl(7, 4, [x, o.markY ?? 330, zc + pd / 2 + 1], "mark", [90, 0, 0]));
  }
  // 床梁（支柱の下端をつなぐ。デッキの下に隠れる）＋デッキのソケットへ差し込む2本の舌
  if (!o.noBeam) parts.push(rb([pitch, 46, 60], [0, 33, zc], o.beamMat ?? "shadow", 8));
  parts.push(rb([60, 40, 160], [-pitch / 2 + 120, f.legH - 30, zEnd + 60], "shadow", 6));
  parts.push(rb([60, 40, 160], [pitch / 2 - 120, f.legH - 30, zEnd + 60], "shadow", 6));
  return { parts, zc, zFront: zc + pd / 2, zBack: zc - pd / 2, pitch, pw, pd, ph, inner: pitch - pw };
}

// ------------------------------------------------------------------ HB フェイス（P2 規格）
// ローカル座標: 原点 = 顔の下端・中央・前面。顔は -Z 方向へ厚み t。
const FACE = {
  flat(w, h, { mat = "bamboo", t = 40, r = 18, cap = true } = {}) {
    const p = [rb([w, h, t], [0, h / 2, -t / 2], mat, r)];
    if (cap) p.push(rb([w + 8, 36, t + 12], [0, h - 18, -t / 2 - 2], mat, 14));
    return p;
  },
  channel(w, h, { mat = "f_oat", t = 100, n = 7 } = {}) {
    const p = [rb([w, h, 30], [0, h / 2, -t + 15], mat, 16)];
    const cw = w / n;
    for (let i = 0; i < n; i++) p.push(rb([cw - 6, h - 14, t - 26], [-w / 2 + cw * (i + 0.5), h / 2, -(t - 26) / 2 - 2], mat, 40));
    return p;
  },
  niche(w, h, { mat = "bamboo", cush = "f_charcoal", t = 100 } = {}) {
    const sh = 150;
    return [
      rb([w, h, 24], [0, h / 2, -t + 12], mat, 12),
      rb([w, 22, t], [0, h - 11, -t / 2], mat, 8),
      rb([w, 22, t], [0, h - sh, -t / 2], mat, 8),
      rb([22, sh, t], [-w / 2 + 11, h - sh / 2, -t / 2], mat, 6),
      rb([22, sh, t], [w / 2 - 11, h - sh / 2, -t / 2], mat, 6),
      rb([w - 30, h - sh - 30, 66], [0, (h - sh - 30) / 2 + 10, -33], cush, 30),
    ];
  },
  sudare(w, h, { mat = "smoked", alt = "bamboo", t = 50, back = "f_linen" } = {}) {
    const p = [
      rb([w, 34, t], [0, 17, -t / 2], mat, 10),
      rb([w, 34, t], [0, h - 17, -t / 2], mat, 10),
      rb([w - 10, h - 50, 14], [0, h / 2, -t + 7], back, 6),
    ];
    const pitch = 23, n = Math.floor((h - 70) / pitch);
    const y0 = (h - (n - 1) * pitch) / 2;
    for (let i = 0; i < n; i++) p.push(cyl(10, w - 24, [0, y0 + i * pitch, -t / 2 + 6], i % 6 === 3 ? alt : mat, [0, 0, 90], { radialSegments: 20 }));
    return p;
  },
  slabs(w, h, { mat = "f_ivory_boucle", t = 120, n = 2 } = {}) {
    const p = [], sw = w / n;
    for (let i = 0; i < n; i++) p.push(rb([sw - 14, h, t], [-w / 2 + sw * (i + 0.5), h / 2, -t / 2], mat, 60));
    return p;
  },
  kumo(w, h, { mat = "f_clay", t = 110, n = 4 } = {}) {
    const r = w / (2 * n);
    const rectH = h - r;
    const p = [rb([w - 2, rectH, t - 12], [0, rectH / 2, -t / 2], mat, 40)];
    for (let i = 0; i < n; i++) p.push(cyl(r, t, [-w / 2 + r * (2 * i + 1), h - r, -t / 2], mat, [90, 0, 0], { radialSegments: 72 }));
    return p;
  },
  panels(w, h, { mat = "f_offwhite", t = 90, n = 5 } = {}) {
    const p = [rb([w, h, 26], [0, h / 2, -t + 13], mat, 12)];
    const pw = w / n;
    for (let i = 0; i < n; i++) p.push(rb([pw - 10, h - 12, t - 22], [-w / 2 + pw * (i + 0.5), h / 2, -(t - 22) / 2 - 2], mat, 34));
    return p;
  },
  tiles(w, h, { colors, rows = 2, cols = 3, t = 92, gap = 12, back = "carbon" } = {}) {
    const p = [rb([w, h, 20], [0, h / 2, -t + 10], back, 8)];
    const tw = (w - gap * (cols + 1)) / cols, th = (h - gap * (rows + 1)) / rows;
    let k = 0;
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const x = -w / 2 + gap + tw / 2 + i * (tw + gap);
      const y = gap + th / 2 + j * (th + gap);
      p.push(rb([tw, th, t - 22], [x, y, -(t - 22) / 2 - 1], colors[k++ % colors.length], 58));
    }
    return p;
  },
  cushion(w, h, { mat = "f_offwhite", t = 80, r = 36 } = {}) {
    return [rb([w, h, t], [0, h / 2, -t / 2], mat, r)];
  },
};

// 顔を置く: 下端・前面の位置と、もたれ角（下端を軸に後ろへ倒す）
const place = (parts, { x = 0, y0, z, lean = 0 }) => grp(parts, [x, y0, z], [-lean, 0, 0]);

// ------------------------------------------------------------------ 共通の組み立て
// d.body() → { f, dk, mods, bed }（mods = 支柱に付くモジュール）
// d.face(v, ctx) → [placed parts]（v=0 がメインの顔、1・2 が差し替えの顔）
function assemble(d, state, v = 0) {
  const b = d.body();
  const parts = [...b.f.parts, ...b.dk.parts, ...(b.mods ?? [])];
  if (state === "dock") {
    // 支柱だけ＋メインの顔を真上に持ち上げた状態（落とし込む前）
    parts.push(grp(d.face(0, b), [0, d.lift ?? 520, 0]));
    return parts;
  }
  parts.push(...[].concat(d.face(v, b)));
  if (state === "use") parts.push(...bedding(b.f.deckTop, b.bed ?? {}));
  return parts;
}

// ------------------------------------------------------------------ designs
const D = {};

// C2-01 王道「KIGAE」: 縦のチャネルキルト（オーバーレイ顔）・オート・床から850・もたれ6度。支柱は顔の裏に隠れる
D["C2-01"] = {
  name: "KIGAE",
  body() {
    const f = frame({ railH: 84, legH: 160, lip: 36, mat: "bamboo_z", radius: 16 });
    const dk = dock(f, { pitch: 900, pw: 64, pd: 90, ph: 700, gap: 110 });
    return { f, dk, bed: { throwMat: "f_mocha", pillowFront: "f_oat" } };
  },
  face(v, { f }) {
    const y0 = f.deckTop + 10, H = 850, w = 1030, z = -f.L / 2 - 4, h = H - y0;
    if (v === 1) return [place(FACE.flat(w, h, { mat: "bamboo", t: 50 }), { y0, z, lean: 6 })];
    if (v === 2) return [place(FACE.niche(w, h + 60, { cush: "f_clay" }), { y0, z, lean: 3 })];
    return [place(FACE.channel(w, h, { mat: "f_oat", t: 104, n: 7 }), { y0, z, lean: 6 })];
  },
};

// C2-02 ミニマル「MONO」: 支柱と顔が同じ面に並ぶ竹のフラット（インセット顔）。目地 4mm。床から800
D["C2-02"] = {
  name: "MONO",
  body() {
    const f = frame({ railH: 70, legH: 170, lip: 0, mat: "pale_z", radius: 10, inset: 150, gap: 3 });
    const dk = dock(f, { pitch: 940, pw: 60, pd: 44, ph: 800, mat: "bamboo", r: 8, gap: 8 });
    return { f, dk, bed: { throwMat: "f_oat", pillowFront: "f_oat" } };
  },
  face(v, { f, dk }) {
    const y0 = f.deckTop - 40, w = dk.inner - 8, z = dk.zFront, h = 800 - y0;
    if (v === 1) return [place(FACE.cushion(w, h - 40, { mat: "f_offwhite", t: 70, r: 30 }), { y0: y0 + 20, z: z + 26, lean: 0 })];
    if (v === 2) return [place(FACE.sudare(w, h, { mat: "pale", alt: "bamboo", t: 44 }), { y0, z, lean: 0 })];
    return [place(FACE.flat(w, h, { mat: "pale", t: 44, r: 8, cap: false }), { y0, z, lean: 0 })];
  },
};

// C2-03 プレミアム「KASANE」: 2層の顔。後ろに炭化竹の背の高いパネル（1050）、前にアイボリーのブークレのスラブ2枚
D["C2-03"] = {
  name: "KASANE",
  body() {
    const f = frame({ railH: 110, legH: 120, lip: 30, mat: "carbon_wz", radius: 18, base: "plinth", inset: 60 });
    const dk = dock(f, { pitch: 900, pw: 70, pd: 100, ph: 700, mat: "carbon", gap: 196 });
    return { f, dk, bed: { throwMat: "f_charcoal", pillowFront: "f_boucle" } };
  },
  face(v, { f }) {
    const zEnd = -f.L / 2;
    const back = (lean = 4) => place([
      rb([1050, 1050 - f.deckTop + 40, 56], [0, (1050 - f.deckTop + 40) / 2, -28], "carbon_w", 30),
      rb([1070, 60, 84], [0, 1050 - f.deckTop + 40 - 30, -40], "carbon_w", 24),
    ], { y0: f.deckTop - 40, z: zEnd - 128, lean });
    const y0 = f.deckTop + 10, h = 790 - y0;
    if (v === 1) return [back(4)];
    if (v === 2) return [back(4), place(FACE.channel(980, h, { mat: "f_mocha", t: 110, n: 6 }), { y0, z: zEnd - 4, lean: 7 })];
    return [back(4), place(FACE.slabs(990, h, { mat: "f_boucle", t: 118 }), { y0, z: zEnd - 4, lean: 8 })];
  },
};

// C2-04 トレンド「KUMO」: 雲のような4つの丸い山のクッション（クレイ）。オーバーレイ顔・頂部900
D["C2-04"] = {
  name: "KUMO",
  body() {
    const f = frame({ railH: 90, legH: 150, lip: 30, mat: "bamboo_z", radius: 34, base: "plinth", inset: 80 });
    const dk = dock(f, { pitch: 900, pw: 64, pd: 90, ph: 700, gap: 116 });
    return { f, dk, bed: { throwMat: "f_oat", pillowFront: "f_clay" } };
  },
  face(v, { f }) {
    const y0 = f.deckTop + 10, w = 1030, z = -f.L / 2 - 4, h = 900 - y0;
    if (v === 1) return [place(FACE.kumo(w, h, { mat: "f_sage", t: 110, n: 2 }), { y0, z, lean: 6 })];
    if (v === 2) return [place(FACE.channel(w, 850 - y0, { mat: "f_offwhite", t: 104, n: 7 }), { y0, z, lean: 6 })];
    return [place(FACE.kumo(w, h, { mat: "f_clay", t: 110, n: 4 }), { y0, z, lean: 6 })];
  },
};

// C2-05 機能特化「HUB」: 見せる電源の支柱（900）。上端に読書灯ヘッド、外側にワイヤレス充電のサイドポッド。顔はチャコールのクッション
D["C2-05"] = {
  name: "HUB",
  body() {
    const f = frame({ railH: 84, legH: 160, lip: 36, mat: "bamboo_z", radius: 14 });
    const dk = dock(f, { pitch: 1010, pw: 80, pd: 110, ph: 900, mat: "bamboo", r: 16, gap: 6 });
    const mods = [];
    for (const s of [-1, 1]) {
      const x = s * dk.pitch / 2;
      // 読書灯ヘッド（差し込みモジュール）
      mods.push(rb([70, 34, 200], [x - s * 10, dk.ph + 17, dk.zc + 50], "steel", 12));
      mods.push(rb([50, 6, 110], [x - s * 10, dk.ph - 1, dk.zc + 90], "led", 3));
      // USB-C（支柱の前面）
      mods.push(rb([14, 6, 4], [x, 560, dk.zFront + 1], "recess", 2));
      mods.push(rb([14, 6, 4], [x, 590, dk.zFront + 1], "recess", 2));
      // サイドポッド（外側に掛ける竹のトレー＋充電パッド）
      const px = x + s * (dk.pw / 2 + 125);
      mods.push(rb([250, 26, 250], [px, 600, dk.zc + 70], "bamboo", 10));
      mods.push(rb([240, 60, 16], [px, 560, dk.zc - 40], "bamboo", 6));
      mods.push(cyl(48, 5, [px, 616, dk.zc + 80], "cream", null, { radialSegments: 48 }));
    }
    return { f, dk, mods, bed: { throwMat: "f_charcoal", pillowFront: "f_offwhite" } };
  },
  face(v, { f, dk }) {
    const y0 = f.deckTop + 10, w = dk.inner - 10, z = dk.zFront + 6, h = 820 - y0;
    if (v === 1) return [place(FACE.niche(w, h, { cush: "f_oat", t: 104 }), { y0, z, lean: 0 })];
    if (v === 2) return [place(FACE.channel(w, h, { mat: "f_clay", t: 100, n: 6 }), { y0, z, lean: 5 })];
    return [
      place(FACE.cushion(w, h - 50, { mat: "f_charcoal", t: 96, r: 40 }), { y0, z, lean: 5 }),
      rb([w, 40, dk.pd - 20], [0, 820 - 20, dk.zc], "bamboo", 12),
    ];
  },
};

// C2-06 素材特化「SUDARE」: 丸竹の支柱（節つき）に、燻し竹の簾の顔。裏は洗えるリネン（リバーシブル）
D["C2-06"] = {
  name: "SUDARE",
  body() {
    const f = frame({ railH: 96, legH: 140, lip: 30, mat: "smoked_z", radius: 14, base: "plinth", inset: 70 });
    const dk = dock(f, { pitch: 960, pw: 84, pd: 84, ph: 900, mat: "smoked", round: true, nodes: [180, 460, 740], gap: 8 });
    return { f, dk, bed: { throwMat: "f_sage", pillowFront: "f_linen" } };
  },
  face(v, { f, dk }) {
    const y0 = f.deckTop + 10, w = dk.inner - 16, z = dk.zc + 25, h = 860 - y0;
    if (v === 1) return [place(FACE.cushion(w, h, { mat: "f_sage", t: 70, r: 30 }), { y0, z: z + 10, lean: 4 })];
    if (v === 2) return [place(FACE.flat(w, h, { mat: "smoked", t: 44, r: 12, cap: false }), { y0, z, lean: 4 })];
    return [place(FACE.sudare(w, h, { mat: "smoked", alt: "pale", t: 50 }), { y0, z, lean: 4 })];
  },
};

// C2-07 UX改善「KAKERU」: 丸い竹のバーを支柱の上端に掛けるだけ。バーにモカのクッションが吊られる。1動作で付け外し
D["C2-07"] = {
  name: "KAKERU",
  body() {
    const f = frame({ railH: 84, legH: 150, lip: 36, mat: "bamboo_z", radius: 20, base: "block", inset: 60 });
    const dk = dock(f, { pitch: 940, pw: 70, pd: 96, ph: 800, mat: "bamboo", r: 30, gap: 8, mark: true, markY: 770 });
    return { f, dk, bed: { throwMat: "f_clay", pillowFront: "f_mocha" } };
  },
  face(v, { f, dk }) {
    const barY = dk.ph + 26, zc = dk.zc, L = dk.pitch + 170;
    const bar = [
      cyl(26, L, [0, barY, zc], "bamboo", [0, 0, 90], { radialSegments: 40 }),
      { type: "sphere", radius: 26, position: [-L / 2, barY, zc], material: "bamboo" },
      { type: "sphere", radius: 26, position: [L / 2, barY, zc], material: "bamboo" },
    ];
    const w = dk.inner - 16, y0 = f.deckTop + 20, h = barY - 40 - y0;
    const mat = v === 1 ? "f_offwhite" : v === 2 ? "f_sage" : "f_mocha";
    const sleeve = rb([w, 84, 84], [0, barY, zc], mat, 40);
    let body;
    if (v === 2) body = FACE.channel(w, h, { mat, t: 92, n: 5 });
    else body = FACE.cushion(w, h, { mat, t: 92, r: 44 });
    return [...bar, sleeve, place(body, { y0, z: zc + 46, lean: 3 })];
  },
};

// C2-08 構造革新「NOBIRU」: 床梁が伸びて支柱の間隔を 940→1900 に。ワイドのパネル顔＋両脇の片持ちの竹のトレー
D["C2-08"] = {
  name: "NOBIRU",
  wide: true,
  body(narrow = false) {
    const f = frame({ railH: 84, legH: 160, lip: 36, mat: "bamboo_z", radius: 16, base: "plinth", inset: 50 });
    const dk = dock(f, { pitch: narrow ? 940 : 1900, pw: 80, pd: 100, ph: 700, gap: 100 });
    // 伸縮する床梁（内側の梁が見える）
    dk.parts.push(rb([narrow ? 700 : 1500, 24, 36], [0, 30, dk.zc - 10], "shadow", 6));
    return { f, dk, bed: { throwMat: "f_mocha", pillowFront: "f_offwhite" } };
  },
  face(v, { f, dk }) {
    const z = -f.L / 2 - 4;
    if (v === 1) {
      const y0 = f.deckTop + 10;
      return [place(FACE.channel(1030, 850 - y0, { mat: "f_offwhite", t: 94, n: 7 }), { y0, z, lean: 6 })];
    }
    const y0 = 300, w = 1990, h = 820 - y0;
    const mat = v === 2 ? "f_clay" : "f_linen";
    const parts = [place(FACE.panels(w, h, { mat, t: 94, n: 5 }), { y0, z, lean: 0 })];
    for (const s of [-1, 1]) {
      const x = s * 745;
      parts.push(rb([400, 30, 330], [x, 560, z + 165], "bamboo", 10));
      parts.push(rb([400, 90, 22], [x, 520, z + 320], "bamboo", 8));
    }
    return parts;
  },
};

// C2-09 少し挑戦的「TILE」: 炭化竹の支柱＋格子に、6枚の四角いクッションタイルを好きな色で並べる。1枚ずつ付け替え
D["C2-09"] = {
  name: "TILE",
  body() {
    const f = frame({ railH: 100, legH: 130, lip: 30, mat: "carbon_wz", radius: 16, base: "plinth", inset: 60 });
    const dk = dock(f, { pitch: 970, pw: 70, pd: 100, ph: 930, mat: "carbon", r: 12, gap: 6 });
    return { f, dk, bed: { throwMat: "f_terracotta", pillowFront: "f_sage" } };
  },
  face(v, { f, dk }) {
    const y0 = f.deckTop + 20, w = dk.inner - 10, z = dk.zFront + 4, h = 910 - y0;
    const sets = [
      ["f_terracotta", "f_oat", "f_sage", "f_charcoal", "f_clay", "f_offwhite"],
      ["f_mocha", "f_clay", "f_mocha", "f_clay", "f_mocha", "f_clay"],
      ["f_offwhite", "f_charcoal", "f_offwhite", "f_charcoal", "f_offwhite", "f_charcoal"],
    ];
    return [place(FACE.tiles(w, h, { colors: sets[v], t: 96 }), { y0, z, lean: 3 })];
  },
};

// C2-10 コンセプト「HASHIRA」: HEAD DOCK が床から2000まで伸び、棚・灯り・デスクを抱える「寝室の柱」
D["C2-10"] = {
  name: "HASHIRA",
  lift: 420,
  body() {
    const f = frame({ railH: 84, legH: 160, lip: 36, mat: "bamboo_z", radius: 16, base: "plinth", inset: 50 });
    const dk = dock(f, { pitch: 1090, pw: 80, pd: 110, ph: 2000, mat: "bamboo", r: 14, gap: 6 });
    const mods = [];
    const zc = dk.zc, x1 = dk.pitch / 2, x3 = x1 + 760;
    // 右に3本目の柱（デスクの柱）
    mods.push(rb([80, 2000, 110], [x3, 1000, zc], "bamboo", 14));
    // 上梁
    mods.push(rb([x3 + x1 + 80, 70, 120], [(x3 - x1) / 2, 1965, zc], "bamboo", 16));
    // 棚（ベッドの上）: 1350
    mods.push(rb([dk.pitch - 80, 28, 250], [0, 1350, zc + 70], "bamboo", 8));
    mods.push(rb([dk.pitch - 260, 8, 40], [0, 1332, zc + 150], "led", 3));
    // デスク側: 棚2段＋デスク
    mods.push(rb([680, 28, 280], [(x1 + x3) / 2, 1350, zc + 85], "bamboo", 8));
    mods.push(rb([680, 28, 280], [(x1 + x3) / 2, 1650, zc + 85], "bamboo", 8));
    mods.push(rb([680, 34, 480], [(x1 + x3) / 2, 720, zc + 185], "bamboo", 10));
    mods.push(rb([680, 60, 20], [(x1 + x3) / 2, 680, zc + 415], "bamboo", 6));
    // 左: 小さなトレー
    mods.push(rb([300, 26, 280], [-x1 - 190, 600, zc + 85], "bamboo", 8));
    return { f, dk, mods, bed: { throwMat: "f_oat", pillowFront: "f_oat" } };
  },
  face(v, { f, dk }) {
    const y0 = f.deckTop + 10, w = dk.inner - 12, z = dk.zFront + 6, h = 900 - y0;
    if (v === 1) return [place(FACE.channel(w, h, { mat: "f_clay", t: 100, n: 7 }), { y0, z, lean: 5 })];
    if (v === 2) return [place(FACE.niche(w, h, { cush: "f_oat", t: 104 }), { y0, z, lean: 0 })];
    return [place(FACE.cushion(w, h, { mat: "f_mocha", t: 96, r: 44 }), { y0, z, lean: 5 })];
  },
};

// ------------------------------------------------------------------ write
const BASE = (camera, canvas) => ({
  canvas: canvas ?? { width: 1600, height: 1200 },
  background: "#e6e3de",
  camera: camera ?? { fov: 28, margin: 0.8, zoom: 1.15 },
  lighting: { key: 2.2, fill: 0.7, rim: 0.6, hemi: 0.65 },
  shadowOpacity: 0.2,
  materials: MATS,
});

const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(D);
for (const id of ids) {
  const d = D[id];
  const ROT = d.rot ?? 14;
  const useParts = assemble(d, "use", 0);
  fs.writeFileSync(path.join(DIR, `${id}.scene.json`), JSON.stringify({ ...BASE(), parts: useParts }, null, 1));
  fs.writeFileSync(path.join(DIR, `${id}-hero.scene.json`), JSON.stringify({ ...BASE(), parts: [grp(useParts, [0, 0, 0], [0, ROT, 0])] }, null, 1));
  fs.writeFileSync(path.join(DIR, `${id}-frame.scene.json`), JSON.stringify({ ...BASE({ fov: 28, margin: 0.84, zoom: 1.12 }), parts: [grp(assemble(d, "frame", 0), [0, 0, 0], [0, ROT, 0])] }, null, 1));
  // 構造: 左=支柱だけ＋メインの顔を持ち上げた状態 / 中=差し替えの顔1 / 右=差し替えの顔2
  let a = assemble(d, "dock"), b = assemble(d, "frame", 1), c = assemble(d, "frame", 2);
  if (d.wide) {
    // NOBIRU: 中は床梁を縮めた S 幅（標準の顔）
    const nb = d.body(true);
    b = [...nb.f.parts, ...nb.dk.parts, ...d.face(1, nb)];
  }
  const sp = d.spacing ?? (id === "C2-10" ? 2600 : 1900);
  const st = { ...BASE({ fov: 28, margin: 0.86, zoom: d.szoom ?? 1.38 }, { width: 2000, height: 1100 }),
    parts: [grp(a, [-sp, 0, sp * 0.5], [0, 18, 0]), grp(b, [0, 0, 0], [0, 18, 0]), grp(c, [sp, 0, -sp * 0.5], [0, 18, 0])] };
  fs.writeFileSync(path.join(DIR, `${id}-structure.scene.json`), JSON.stringify(st, null, 1));
  console.log("wrote", id, d.name);
}
