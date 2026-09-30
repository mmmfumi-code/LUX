// コンセプト① 起こすだけヘッドボード — 10案の scene JSON を生成する
// usage: node gen-scenes.mjs [C1-01 ...]   （引数なしで全案）
// 出力: C1-XX.scene.json（寝具あり）/ C1-XX-frame.scene.json（フレーム＋HB）/ C1-XX-structure.scene.json（たたんだ状態＋起こす途中）
// 単位 mm。Y 上、床 y=0。X 幅、Z 長さ。頭側は -Z（three-quarter ビューで HB が奥に見える）
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const DIR = path.dirname(fileURLToPath(import.meta.url));

// ------------------------------------------------------------------ materials
const MATS = {
  bamboo: { type: "bamboo", color: "#c89c66" },
  bamboo_z: { type: "bamboo", color: "#c89c66", grain: "z" },
  bamboo_y: { type: "bamboo", color: "#c89c66", grain: "z" },
  pale: { type: "bamboo", color: "#d6b584" },
  pale_z: { type: "bamboo", color: "#d6b584", grain: "z" },
  carbon: { type: "bamboo", color: "#5b3d28", roughness: 0.5 },
  carbon_z: { type: "bamboo", color: "#5b3d28", grain: "z", roughness: 0.5 },
  smoked: { type: "bamboo", color: "#8a6240" },
  smoked_z: { type: "bamboo", color: "#8a6240", grain: "z" },
  carbon_w: { type: "wood", color: "#4f3524", roughness: 0.5 },
  carbon_wz: { type: "wood", color: "#4f3524", grain: "z", roughness: 0.5 },
  steel: { type: "metal", color: "#232323", roughness: 0.5 },
  shadow: { type: "matte", color: "#2d2a27", roughness: 0.9 },
  recess: { type: "matte", color: "#3a3531", roughness: 0.9 },
  cream: { type: "matte", color: "#efe9df", roughness: 0.8 },
  f_offwhite: { type: "fabric", color: "#ece6db" },
  f_boucle: { type: "fabric", color: "#d3c2a6", seed: 5 },
  f_oat: { type: "fabric", color: "#cdbc9f" },
  f_clay: { type: "fabric", color: "#a8765a" },
  f_mocha: { type: "fabric", color: "#806350" },
  f_charcoal: { type: "fabric", color: "#55524e" },
  f_sage: { type: "fabric", color: "#a4ad96" },
  f_terracotta: { type: "fabric", color: "#8f5440" },
  mattress: { type: "mattress", color: "#f3f1ec" },
  sheet: { type: "mattress", color: "#f8f7f3", seed: 13 },
  pillow: { type: "fabric", color: "#faf8f4", seed: 9 },
  led: { type: "emissive", color: "#ffd9a0", intensity: 1.6 },
  mark: { type: "matte", color: "#c4563a" },
};

const rb = (size, position, material, radius = 8, rotation) => {
  const p = { type: "rbox", size, position, material, radius };
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

// ------------------------------------------------------------------ frame（三つ折りデッキ）
// 3区画（頭・腰・足）を折り目のすき間 gap で分けた「厚い縁のデッキ」。脚は奥まった台座（影）に見せる
function frame(o = {}) {
  const W = o.W ?? 1010, L = o.L ?? 1970, legH = o.legH ?? 150, railH = o.railH ?? 70;
  const r = o.radius ?? 12, gap = o.gap ?? 6, mat = o.mat ?? "bamboo_z";
  const lip = o.lip ?? 0;
  const parts = [];
  const seg = L / 3;
  for (let i = 0; i < 3; i++) {
    const zc = -L / 2 + seg * (i + 0.5);
    parts.push(rb([W, railH + lip, seg - gap], [0, legH + (railH + lip) / 2, zc], mat, r));
  }
  if (o.base === "plinth") {
    // 奥まった台座（影のすき間）
    const inset = o.inset ?? 40;
    parts.push(bx([W - inset * 2, legH, L - inset * 2], [0, legH / 2, 0], o.baseMat ?? "shadow"));
  } else if (o.base === "legs") {
    const lr = o.legR ?? 28, lm = o.legMat ?? "bamboo";
    const xs = [-(W / 2 - 90), W / 2 - 90];
    const zs = o.legZ ?? [-L / 2 + 110, -L / 6, L / 6, L / 2 - 110];
    for (const x of xs) for (const z of zs) parts.push(cyl(lr, legH, [x, legH / 2, z], lm, null, { radiusBottom: lr * 0.78 }));
  } else if (o.base !== "none") {
    // 既定: 大きく奥まったダークの脚ユニット（浮いて見える）
    const inset = o.inset ?? 110;
    parts.push(rb([W - inset * 2, legH - 4, L - inset * 2 - 40], [0, (legH - 4) / 2 + 4, 0], o.baseMat ?? "shadow", 6));
  }
  return { parts, deckTop: legH + railH, W, L, legH, railH: railH + lip, lip };
}

// ------------------------------------------------------------------ bedding（THE GOKUMIN 想定＋枕2＋掛け布団＋スロー）
function bedding(deckTop, o = {}) {
  const y0 = deckTop, top = y0 + MAT_H;
  const zHead = -MAT_L / 2 + (o.headInset ?? 0);
  const throwMat = o.throwMat ?? "f_oat";
  const duvetMat = o.duvetMat ?? "sheet";
  const parts = [];
  // マットレス（ユーロトップ風: 本体＋トップ層）
  parts.push(rb([MAT_W, MAT_H - 60, MAT_L], [0, y0 + (MAT_H - 60) / 2, zHead + MAT_L / 2], "mattress", 40));
  parts.push(rb([MAT_W - 10, 64, MAT_L - 10], [0, top - 32, zHead + MAT_L / 2], "mattress", 30));
  // 掛け布団（上面＋両サイドの垂れ）: 頭側 550mm を折り返し
  const dz0 = zHead + 520, dz1 = zHead + MAT_L + 40, dl = dz1 - dz0, dzc = (dz0 + dz1) / 2;
  const dw = MAT_W + 90;
  parts.push(rb([dw, 70, dl], [0, top + 30, dzc], duvetMat, 30));
  parts.push(rb([34, 250, dl - 20], [-(dw / 2 - 17), top - 90, dzc], duvetMat, 16));
  parts.push(rb([34, 250, dl - 20], [dw / 2 - 17, top - 90, dzc], duvetMat, 16));
  parts.push(rb([dw - 20, 250, 34], [0, top - 90, dz1 - 17], duvetMat, 16));
  // 折り返し
  parts.push(rb([dw + 4, 90, 230], [0, top + 44, dz0 + 110], duvetMat, 40));
  // スロー（足元の帯）
  const tz = zHead + MAT_L - 330;
  parts.push(rb([dw + 40, 86, 440], [0, top + 70, tz], throwMat, 30));
  parts.push(rb([30, 300, 440], [-(dw / 2 + 12), top - 80, tz], throwMat, 14));
  parts.push(rb([30, 300, 440], [dw / 2 + 12, top - 80, tz], throwMat, 14));
  // 枕2つ（奥は立てかけ、手前は寝かせる）
  const pb = o.pillowBack ?? "pillow", pf = o.pillowFront ?? "pillow";
  parts.push(rb([580, 320, 140], [0, top + 140, zHead + 125], pb, 64, [-26, 0, 0]));
  parts.push(rb([580, 130, 400], [0, top + 62, zHead + 360], pf, 62, [-10, 0, 0]));
  if (o.cushion) parts.push(rb([420, 300, 120], [0, top + 150, zHead + 310], o.cushion, 55, [-14, 0, 0]));
  return parts;
}

// ------------------------------------------------------------------ helpers for HB
// 頭側の端 zEnd（フレームの頭側の端）。HB 下部＝床着地の脚フラップ（床〜deckTop）＋上部パネル（deckTop のヒンジ軸で起こす）
// angle: 0=起こした状態（もたれ角 lean で後ろに傾く）／90=たたんだ状態（デッキの上に伏せる）
function hinged(upperParts, lowerParts, { deckTop, zEnd, t, lean = 7, angle = 0 }) {
  const zc = zEnd - t / 2;
  const rot = angle === 0 ? -lean : angle;
  // 上部パネルはヒンジ軸（前面の下端＝zEnd, deckTop）で回す: 軸を group 原点に置く
  const upper = grp(upperParts, [0, deckTop, zEnd], [rot, 0, 0]);
  const lower = grp(lowerParts, [0, 0, 0]);
  return { parts: [lower, upper], zc };
}

// ------------------------------------------------------------------ designs
// 各案: build(state) → parts。state = "use" | "frame" | "fold" | "raise"
const D = {};

// C1-01 王道「OKOSU」: 竹フラットパネル・床から850・角R・7度
D["C1-01"] = {
  name: "OKOSU",
  build(state) {
    const f = frame({ W: 1040, railH: 76, legH: 150, lip: 40, mat: "bamboo_z", radius: 14 });
    const H = 850, t = 52, W = 1040;
    const up = H - f.deckTop;
    const upper = [
      rb([W, up, t], [0, up / 2, -t / 2], "bamboo", 26),
      // 上端の厚い笠木（小口を見せる）
      rb([W + 10, 40, t + 18], [0, up - 20, -t / 2 - 4], "bamboo", 16),
    ];
    const lower = [rb([W, f.deckTop - 6, t], [0, (f.deckTop - 6) / 2 + 6, -f.L / 2 - t / 2], "bamboo", 12)];
    return assemble(f, upper, lower, t, state, { lean: 7, throwMat: "f_clay", pillowFront: "f_oat" });
  },
};

// C1-02 ミニマル「HIRA」: 縁と同じ見付けで L 字に続く薄いパネル。高さ780
D["C1-02"] = {
  name: "HIRA",
  build(state) {
    const f = frame({ railH: 60, legH: 170, mat: "pale_z", radius: 8, inset: 150, gap: 3 });
    const H = 780, t = 36, W = 1010;
    const up = H - f.deckTop;
    const upper = [rb([W, up, t], [0, up / 2, -t / 2], "pale", 10)];
    const lower = [rb([W - 300, f.deckTop - 10, t], [0, (f.deckTop - 10) / 2 + 10, -f.L / 2 - t / 2], "shadow", 6)];
    return assemble(f, upper, lower, t, state, { lean: 5, throwMat: "f_oat", duvetMat: "sheet", pillowFront: "f_oat" });
  },
};

// C1-03 プレミアム「SUMI」: 炭化竹・縦の畝・厚い縁・台座で浮かせる。高さ900
D["C1-03"] = {
  name: "SUMI",
  build(state) {
    const f = frame({ railH: 110, legH: 120, mat: "carbon_wz", radius: 18, base: "plinth", inset: 60 });
    const H = 900, t = 64, W = 1030;
    const up = H - f.deckTop;
    const n = 17, pitch = (W - 60) / n;
    const upper = [
      rb([W, up, t - 22], [0, up / 2, -t / 2 - 11], "carbon", 20),
      { type: "array", count: n, step: [pitch, 0, 0],
        of: rb([pitch - 12, up - 70, 26], [-(W - 60) / 2 + pitch / 2, up / 2 - 5, -8], "carbon", 12) },
      rb([W + 16, 46, t + 24], [0, up - 23, -t / 2 - 6], "carbon", 18),
    ];
    const lower = [rb([W, f.deckTop - 6, t], [0, (f.deckTop - 6) / 2 + 6, -f.L / 2 - t / 2], "carbon", 14)];
    return assemble(f, upper, lower, t, state, { lean: 8, throwMat: "f_charcoal", duvetMat: "sheet", pillowFront: "f_mocha" });
  },
};

// C1-04 トレンド「MARU」: アーチ形。竹の縁取り＋オフホワイトのブークレ張り。頂部950
D["C1-04"] = {
  name: "MARU",
  build(state) {
    const f = frame({ railH: 80, legH: 150, mat: "bamboo_z", radius: 30, base: "legs", legR: 30, legZ: [-985 + 120, -330, 330, 985 - 120] });
    const H = 950, t = 40, W = 1010, R = W / 2;
    const up = H - f.deckTop; // 700
    const rectH = up - R; // アーチの直線部
    const upper = [
      // 竹のアーチ枠（背面）
      rb([W, rectH + 10, t], [0, (rectH + 10) / 2, -t / 2 - 50], "bamboo", 16),
      cyl(R, t, [0, rectH, -t / 2 - 50], "bamboo", [90, 0, 0], { radialSegments: 96 }),
      // ブークレのクッション（前面、ひと回り小さい）
      rb([W - 120, rectH, 70], [0, rectH / 2 + 30, -35], "f_boucle", 30),
      cyl(R - 60, 70, [0, rectH + 30, -35], "f_boucle", [90, 0, 0], { radialSegments: 96 }),
    ];
    const lower = [rb([W, f.deckTop - 6, t], [0, (f.deckTop - 6) / 2 + 6, -f.L / 2 - t / 2 - 50], "bamboo", 12)];
    return assemble(f, upper, lower, t + 70, state, { lean: 6, throwMat: "f_clay", pillowFront: "f_boucle", pillowBack: "pillow" });
  },
};

// C1-05 機能特化「NICHE」: 上端に奥行80の薄型ニッチ＋読書灯・USB-C モジュール。下部は洗える布クッション。高さ950
D["C1-05"] = {
  name: "NICHE",
  build(state) {
    const f = frame({ railH: 80, legH: 150, mat: "bamboo_z", radius: 12 });
    const H = 950, t = 90, W = 1010;
    const up = H - f.deckTop;
    const shelfH = 150;
    const upper = [
      // 背板
      rb([W, up, 30], [0, up / 2, -t + 15], "bamboo", 14),
      // 布クッション（下部）
      rb([W - 40, up - shelfH - 40, 60], [0, (up - shelfH - 40) / 2 + 10, -30], "f_charcoal", 28),
      // ニッチの箱（上部）
      rb([W, 24, t], [0, up - 12, -t / 2], "bamboo", 10),
      rb([W, 24, t], [0, up - shelfH, -t / 2], "bamboo", 10),
      rb([24, shelfH, t], [-W / 2 + 12, up - shelfH / 2 - 6, -t / 2], "bamboo", 8),
      rb([24, shelfH, t], [W / 2 - 12, up - shelfH / 2 - 6, -t / 2], "bamboo", 8),
      // 仕切り（中央にモジュール）
      rb([180, shelfH - 30, t - 20], [0, up - shelfH / 2 - 6, -t / 2 - 8], "steel", 6),
      cyl(8, 4, [-40, up - shelfH / 2, -18], "cream", [90, 0, 0]),
      cyl(8, 4, [40, up - shelfH / 2, -18], "cream", [90, 0, 0]),
      // 読書灯（左右の天板下）
      rb([120, 8, 40], [-330, up - 30, -30], "led", 3),
      rb([120, 8, 40], [330, up - 30, -30], "led", 3),
    ];
    const lower = [rb([W, f.deckTop - 6, t], [0, (f.deckTop - 6) / 2 + 6, -f.L / 2 - t / 2], "bamboo", 12)];
    return assemble(f, upper, lower, t, state, { lean: 0, throwMat: "f_charcoal", pillowFront: "f_offwhite" });
  },
};

// C1-06 素材特化「AJIRO」: 竹の網代（あじろ）編みパネル。燻し竹。高さ860
D["C1-06"] = {
  name: "AJIRO",
  build(state) {
    const f = frame({ railH: 90, legH: 140, mat: "smoked_z", radius: 14, base: "plinth", inset: 70 });
    const H = 860, t = 48, W = 1010;
    const up = H - f.deckTop;
    const upper = [rb([W, up, t - 12], [0, up / 2, -t / 2 - 6], "carbon", 18)];
    // 網代: 市松に縦3本・横3本のひごを交互に配置
    const cols = 7, rows = 4;
    const iw = W - 70, ih = up - 80;
    const cw = iw / cols, ch = ih / rows;
    for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
      const cx = -iw / 2 + cw * (i + 0.5), cy = 40 + ch * (j + 0.5);
      const vert = (i + j) % 2 === 0;
      for (let k = 0; k < 3; k++) {
        if (vert) upper.push(rb([cw / 3 - 5, ch - 6, 10], [cx - cw / 3 + (cw / 3) * k, cy, -3], "smoked", 3));
        else upper.push(rb([cw - 6, ch / 3 - 5, 10], [cx, cy - ch / 3 + (ch / 3) * k, -3], "pale", 3));
      }
    }
    upper.push(rb([W + 12, 34, t + 16], [0, up - 17, -t / 2 - 2], "smoked", 14));
    const lower = [rb([W, f.deckTop - 6, t], [0, (f.deckTop - 6) / 2 + 6, -f.L / 2 - t / 2], "smoked", 12)];
    return assemble(f, upper, lower, t, state, { lean: 7, throwMat: "f_sage", pillowFront: "f_oat" });
  },
};

// C1-07 UX改善「ICHIDO」: 竹の額縁＋クレイの布クッション（ジッパーで外して洗える）。上端の握り溝で起こすと一挙動でロック。高さ880
D["C1-07"] = {
  name: "ICHIDO",
  build(state) {
    const f = frame({ railH: 80, legH: 150, mat: "bamboo_z", radius: 16 });
    const H = 880, t = 80, W = 1010;
    const up = H - f.deckTop;
    const upper = [
      rb([W, up, 36], [0, up / 2, -t + 18], "bamboo", 20),
      rb([44, up, t], [-W / 2 + 22, up / 2, -t / 2], "bamboo", 16),
      rb([44, up, t], [W / 2 - 22, up / 2, -t / 2], "bamboo", 16),
      rb([W, 70, t], [0, up - 35, -t / 2], "bamboo", 20),
      // 握り溝
      rb([420, 22, 30], [0, up - 32, -2], "recess", 10),
      // 布クッション
      rb([W - 100, up - 110, 70], [0, (up - 110) / 2 + 20, -30], "f_clay", 34),
      // ロックの目印（側面）
      cyl(10, 4, [W / 2 + 1, 40, -t / 2], "mark", [0, 0, 90]),
    ];
    const lower = [
      rb([W, f.deckTop - 6, t], [0, (f.deckTop - 6) / 2 + 6, -f.L / 2 - t / 2], "bamboo", 14),
    ];
    const extra = [
      // 足元の引き出し用の持ち手（くぼみ）
      rb([300, 18, 10], [0, f.legH + f.railH / 2, f.L / 2 + 1], "recess", 6),
    ];
    return assemble(f, upper, lower, t, state, { lean: 7, throwMat: "f_mocha", pillowFront: "f_clay", extra });
  },
};

// C1-08 構造革新「SEBONE」: HB の2本の柱が床に着き、頭側を下から抱える門型の背骨。浮いたモカのクッションパネル。高さ870
D["C1-08"] = {
  name: "SEBONE",
  build(state) {
    // デッキは幅830に絞り、マットレス（970）が左右に70ずつ張り出す。柱はデッキの両脇＝全幅1022に収まる
    const f = frame({ W: 830, railH: 74, legH: 160, mat: "bamboo_z", radius: 12, base: "none" });
    // 足元・中央はソリ型の脚（奥まった位置）。頭側は背骨（柱＋梁）が受ける
    f.parts.push(rb([640, f.legH - 4, 70], [0, (f.legH - 4) / 2 + 4, f.L / 2 - 260], "shadow", 8));
    f.parts.push(rb([640, f.legH - 4, 70], [0, (f.legH - 4) / 2 + 4, 0], "shadow", 8));
    const H = 870, t = 90, W = 830, post = 70, span = 970 + 2 * post + 10;
    const zc = -f.L / 2 - t / 2;
    const dT = f.deckTop;
    const px = 970 / 2 + 5 + post / 2;
    // 下: 柱の根元（床〜デッキ上面）＋柱をつなぐ梁＝床着地の背骨
    const lower = [
      rb([post, dT, t], [-px, dT / 2, zc], "bamboo", 20),
      rb([post, dT, t], [px, dT / 2, zc], "bamboo", 20),
      rb([span, 90, t], [0, 45 + 20, zc], "bamboo", 16),
    ];
    // 上: 柱の上部＋笠木＋浮いたクッション（デッキ上面のヒンジで一緒に起こす）
    const up = H - dT;
    const upper = [
      rb([post, up, t], [-px, up / 2, -t / 2], "bamboo", 20),
      rb([post, up, t], [px, up / 2, -t / 2], "bamboo", 20),
      rb([span + 10, 40, t + 10], [0, up - 20, -t / 2], "bamboo", 16),
      rb([970 - 10, up - 150, 76], [0, (up - 150) / 2 + 70, -40], "f_mocha", 34),
    ];
    return assemble(f, upper, lower, t, state, { lean: 0, throwMat: "f_oat", pillowFront: "f_mocha", fixedLower: true });
  },
};

// C1-09 少し挑戦的「TAKA」: ハイバック1100・両袖のウィング・横のチャネルキルト。チャコール布張りのフレーム
D["C1-09"] = {
  name: "TAKA",
  build(state) {
    const f = frame({ railH: 110, legH: 110, mat: "f_charcoal", radius: 40, base: "plinth", inset: 50 });
    const H = 1100, t = 110, W = 1010;
    const up = H - f.deckTop;
    const upper = [rb([W, up, 50], [0, up / 2, -t + 25], "f_charcoal", 24)];
    const n = 6, ch = (up - 40) / n;
    for (let i = 0; i < n; i++) upper.push(rb([W - 30, ch - 6, 70], [0, 20 + ch * (i + 0.5), -40], "f_charcoal", 34));
    // ウィング（前に 22 度）
    const wing = (s) => grp([rb([70, up - 40, 300], [0, (up - 40) / 2 + 20, 150], "f_charcoal", 30)], [s * (W / 2 + 35), 0, -t + 10], [0, -s * 22, 0]);
    upper.push(wing(-1), wing(1));
    const lower = [rb([W + 60, f.deckTop - 6, t], [0, (f.deckTop - 6) / 2 + 6, -f.L / 2 - t / 2], "f_charcoal", 30)];
    return assemble(f, upper, lower, t, state, { lean: 6, throwMat: "f_terracotta", pillowFront: "f_charcoal", pillowBack: "pillow" });
  },
};

// C1-10 コンセプト「HAKO」: たたむとベッド自体が箱になる。開くと箱の壁がワイドHB＋両脇のナイトボックスに。炭化竹×クリーム
D["C1-10"] = {
  name: "HAKO",
  szoom: 0.98,
  build(state) {
    const f = frame({ railH: 180, legH: 60, mat: "carbon_wz", radius: 20, base: "plinth", inset: 30 });
    const H = 800, t = 150, W = 1010, side = 420;
    const up = H - f.deckTop;
    const upper = [
      rb([W, up, t], [0, up / 2, -t / 2], "carbon_w", 24),
      // 内側（クリームの面）
      rb([W - 60, up - 60, 20], [0, up / 2, -8], "cream", 12),
      rb([W - 200, 10, 20], [0, up - 60, -2], "led", 4),
    ];
    const lower = [rb([W, f.deckTop - 6, t], [0, (f.deckTop - 6) / 2 + 6, -f.L / 2 - t / 2], "carbon_w", 16)];
    const zc = -f.L / 2 - t / 2;
    // 両脇: 箱の側板が開いてナイトボックス＋ワイドHBの袖になる
    const nb = (s) => {
      const x = s * (W / 2 + side / 2 + 4);
      return [
        // 箱の側板が開いてワイドHBの袖になる（中央と同じ高さで一続きの壁）
        rb([side, H, t], [x, H / 2, zc], "carbon_w", 22),
        // ナイトボックス（前面に開口）
        rb([side, 440, 380], [x, 220, zc + t / 2 + 190], "carbon_w", 22),
        rb([side - 60, 150, 30], [x, 300, zc + t / 2 + 380 - 12], "recess", 8),
      ];
    };
    const extra = state === "fold" ? [] : [...nb(-1), ...nb(1)];
    return assemble(f, upper, lower, t, state, { lean: 0, throwMat: "f_offwhite", duvetMat: "sheet", pillowFront: "f_oat", extra, foldExtra: "hako" });
  },
};

// ------------------------------------------------------------------ assemble per state
function assemble(f, upper, lower, t, state, o = {}) {
  const zEnd = -f.L / 2;
  const parts = [];
  if (state === "use" || state === "frame") {
    parts.push(...f.parts);
    parts.push(grp(upper, [0, f.deckTop, zEnd], [-(o.lean ?? 7), 0, 0]));
    parts.push(...lower);
    if (o.extra) parts.push(...o.extra);
    if (state === "use") parts.push(...bedding(f.deckTop, o));
    return parts;
  }
  if (state === "raise") {
    // デッキは開いた状態、HB を起こす途中（55度）
    parts.push(...f.parts);
    parts.push(grp(upper, [0, f.deckTop, zEnd], [38, 0, 0]));
    // 脚フラップは連動して下りる途中（デッキ下で 40 度）
    if (o.fixedLower) parts.push(...lower);
    else parts.push(grp(lower.map((p) => ({ ...p, position: [p.position[0], p.position[1] - f.deckTop, p.position[2] - zEnd] })), [0, f.deckTop, zEnd], [-40, 0, 0]));
    if (Array.isArray(o.foldExtra)) parts.push(...o.foldExtra);
    if (o.foldExtra === "hako") parts.push(...(o.extra || []).map((p) => ({ ...p, position: [p.position[0] * 1.15, p.position[1], p.position[2]] })));
    return parts;
  }
  if (state === "fold") {
    // 三つ折り: 3区画を Z 字に重ね、最上段の頭側区画の上に HB が伏せて収まる
    const seg = f.L / 3, th = f.railH;
    if (o.foldExtra === "hako") {
      // 箱そのもの
      const Wb = f.W + 20, Hb = th * 1 + 140 + 60;
      parts.push(rb([Wb, 260, seg + 20], [0, 130, 0], "carbon_wz", 22));
      parts.push(rb([Wb - 200, 14, 40], [0, 200, seg / 2 + 10], "recess", 6));
      return parts;
    }
    const mat = f.parts[0].material;
    for (let i = 0; i < 3; i++) parts.push(rb([f.W, th, seg - 6], [0, th / 2 + i * (th + 2), 0], mat, f.parts[0].radius));
    const baseY = 3 * (th + 2);
    // HB（上部パネル）を伏せた状態: パネルの前面が上を向く
    parts.push(grp(upper, [0, baseY, -seg / 2 + 6], [90, 0, 0]));
    return parts;
  }
  throw new Error(state);
}

// ------------------------------------------------------------------ write
const BASE = (camera) => ({
  canvas: { width: 1600, height: 1200 },
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
  const useParts = d.build("use");
  const use = { ...BASE(), parts: useParts };
  const hero = { ...BASE(), parts: [grp(useParts, [0, 0, 0], [0, ROT, 0])] };
  fs.writeFileSync(path.join(DIR, `${id}-hero.scene.json`), JSON.stringify(hero, null, 1));
  const fr = { ...BASE({ fov: 28, margin: 0.84, zoom: 1.12 }), parts: [grp(d.build("frame"), [0, 0, 0], [0, ROT, 0])] };
  // 構造: 左にたたんだ状態、右に起こす途中
  const fold = d.build("fold"), raise = d.build("raise");
  const st = { ...BASE({ fov: 28, margin: 0.8, zoom: d.szoom ?? 1.12 }), parts: [grp(fold, [-1250, 0, 650], [0, 20, 0]), grp(raise, [650, 0, -200], [0, 20, 0])] };
  fs.writeFileSync(path.join(DIR, `${id}.scene.json`), JSON.stringify(use, null, 1));
  fs.writeFileSync(path.join(DIR, `${id}-frame.scene.json`), JSON.stringify(fr, null, 1));
  fs.writeFileSync(path.join(DIR, `${id}-structure.scene.json`), JSON.stringify(st, null, 1));
  console.log("wrote", id, d.name);
}
