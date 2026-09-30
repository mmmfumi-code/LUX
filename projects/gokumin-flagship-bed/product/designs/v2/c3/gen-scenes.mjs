// コンセプト③ ヘッドボードが脚になるフローティング — 10案の scene JSON を生成する
// usage: node gen-scenes.mjs [C3-01 ...]   （引数なしで全案）
// 出力: C3-XX-hero.scene.json（寝具あり・14度振り）/ C3-XX.scene.json（寝具あり・正面/側面用）
//       C3-XX-frame.scene.json（フレーム＋HB、寝具なし）
//       C3-XX-structure.scene.json（分解: HBユニット／持ち上げた本体／足元台座）
//       C3-XX-under.scene.json（寝具あり＋床下のロボット掃除機。low ビューで描く）
// 単位 mm。Y 上、床 y=0。X 幅、Z 長さ。頭側は -Z。
//
// 共通構造: 本体（三つ折りの竹デッキ）は床から浮いていて、頭側は HB ユニットの2本の脚の「受け」に載り、
// 足元側は外周から 250mm 以上内側の台座1つだけで支える。床下有効 = デッキ下面の高さ（130〜180mm）。
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const DIR = path.dirname(fileURLToPath(import.meta.url));

// ------------------------------------------------------------------ materials（C1・C2 v2 とそろえる）
const MATS = {
  bamboo: { type: "bamboo", color: "#c89c66" },
  bamboo_z: { type: "bamboo", color: "#c89c66", grain: "z" },
  pale: { type: "bamboo", color: "#d6b584" },
  pale_z: { type: "bamboo", color: "#d6b584", grain: "z" },
  carbon: { type: "bamboo", color: "#5b3d28", roughness: 0.5 },
  carbon_z: { type: "bamboo", color: "#5b3d28", grain: "z", roughness: 0.5 },
  carbon_w: { type: "wood", color: "#4f3524", roughness: 0.5 },
  carbon_wz: { type: "wood", color: "#4f3524", grain: "z", roughness: 0.5 },
  steel: { type: "metal", color: "#232323", roughness: 0.5 },
  shadow: { type: "matte", color: "#2d2a27", roughness: 0.9 },
  recess: { type: "matte", color: "#3a3531", roughness: 0.9 },
  glass: { type: "glass", color: "#d8dcdc" },
  cream: { type: "matte", color: "#efe9df", roughness: 0.8 },
  f_offwhite: { type: "fabric", color: "#ece6db" },
  f_boucle: { type: "fabric", color: "#d6c6ab", seed: 5 },
  f_oat: { type: "fabric", color: "#cdbc9f" },
  f_clay: { type: "fabric", color: "#a8765a" },
  f_mocha: { type: "fabric", color: "#806350" },
  f_charcoal: { type: "fabric", color: "#55524e" },
  f_sage: { type: "fabric", color: "#a4ad96" },
  f_linen: { type: "fabric", color: "#d9d0c0", seed: 3 },
  f_greige: { type: "fabric", color: "#cfc5b5", seed: 7 },
  tatami: { type: "fabric", color: "#bdb383", seed: 21 },
  heri: { type: "fabric", color: "#3b3a36", seed: 4 },
  mattress: { type: "mattress", color: "#f3f1ec" },
  sheet: { type: "mattress", color: "#f8f7f3", seed: 13 },
  pillow: { type: "fabric", color: "#faf8f4", seed: 9 },
  led: { type: "emissive", color: "#ffd9a0", intensity: 1.6 },
  mark: { type: "matte", color: "#4f8a5b" },
  robot: { type: "matte", color: "#2b2b2d", roughness: 0.6 },
  robot_top: { type: "glossy", color: "#3c3c40" },
};

const rb = (size, position, material, radius = 8, rotation) => {
  const r = Math.max(1, Math.min(radius, Math.min(...size) / 2 - 1));
  const p = { type: "rbox", size, position, material, radius: r };
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
// 下端・前面を原点にしたパーツを、もたれ角 lean（度）で後ろへ倒して置く
const place = (parts, { x = 0, y0, z, lean = 0 }) => grp(parts, [x, y0, z], [-lean, 0, 0]);

const MAT_L = 1950, MAT_W = 970, MAT_H = 280;

// ------------------------------------------------------------------ 本体（浮いた竹デッキ＋足元台座）
function deck(o = {}) {
  const W = o.W ?? 1010, L = o.L ?? 1990, clear = o.clear ?? 130;
  const railH = o.railH ?? 90, lip = o.lip ?? 30, r = o.radius ?? 16, mat = o.mat ?? "bamboo_z";
  const gap = o.gap ?? 4;
  const body = [];
  const seg = L / 3;
  for (let i = 0; i < 3; i++) {
    const zc = -L / 2 + seg * (i + 0.5);
    body.push(rb([W, railH + lip, seg - gap], [0, clear + (railH + lip) / 2, zc], mat, r));
  }
  // 下面の影（浮遊感を出す暗い下面。外周から 24mm 内側）
  body.push(rb([W - 48, 6, L - 48], [0, clear - 2, 0], "recess", 3));
  if (o.footLight) body.push(rb([W - 300, 8, 20], [0, clear - 8, L / 2 - 170], "led", 3));
  // 足元台座（外周から 250mm 以上内側）
  const pw = o.pedW ?? 460, pd = o.pedD ?? 700, pInset = o.pedInset ?? 250;
  const pz = L / 2 - pInset - pd / 2;
  const ped = [rb([pw, clear - 6, pd], [0, (clear - 6) / 2, pz], o.pedMat ?? "shadow", 10)];
  return { body, ped, W, L, clear, deckTop: clear + railH, rimTop: clear + railH + lip, zEnd: -L / 2, pz, pw, pd };
}

// HB の脚が本体の頭側を受けるブラケット（左右2点。くさびで落とし込む）
function brackets(f, xs, zLegFront) {
  const p = [];
  for (const x of xs) {
    p.push(rb([70, 26, 150 + (f.zEnd - zLegFront)], [x, f.clear - 15, (zLegFront + f.zEnd + 150) / 2], "steel", 5));
  }
  return p;
}
// 自立用の床の足（薄いスチールの L 足。デッキの下に隠れる）
function feet(f, xs, zBack, len = 260) {
  return xs.map((x) => rb([60, 10, len], [x, 5, zBack + len / 2], "steel", 4));
}

// ------------------------------------------------------------------ 寝具（C1・C2 v2 と同じ: THE GOKUMIN 280mm＋枕2＋掛け布団＋スロー）
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

// ロボット掃除機（直径 340・高さ 92）
function robot(x, z) {
  return [
    cyl(170, 80, [x, 48, z], "robot", null, { radialSegments: 64 }),
    cyl(160, 6, [x, 90, z], "robot_top", null, { radialSegments: 64 }),
    cyl(40, 8, [x, 96, z - 60], "robot", null, { radialSegments: 32 }),
    rb([200, 30, 20], [x, 40, z + 162], "recess", 6),
  ];
}

// ------------------------------------------------------------------ designs
// 各案: d.deck → deck() の引数、d.hb(f) → HB ユニットの部品、d.bed → 寝具の色
const D = {};

// C3-01 王道「TAYUTA」: 竹の台（2本脚＋笠木の敷居）に、オフホワイトの厚い布パネルが載るペデスタル型。床から850・7度
D["C3-01"] = {
  name: "TAYUTA",
  deck: { railH: 96, lip: 30, clear: 130, radius: 18, mat: "bamboo_z" },
  bed: { throwMat: "f_mocha", pillowFront: "f_oat" },
  hb(f) {
    const xs = [-440, 440], zf = f.zEnd - 14, legD = 96, zc = zf - legD / 2;
    const p = [];
    for (const x of xs) p.push(rb([76, 250, legD], [x, 125, zc], "bamboo", 16));
    p.push(rb([1030, 56, 110], [0, 250 + 28, zc - 6], "bamboo", 14)); // 敷居（竹の台）
    p.push(place([rb([1030, 850 - 306, 116], [0, (850 - 306) / 2, -58], "f_greige", 56)], { y0: 306, z: zc + 49, lean: 7 }));
    p.push(...brackets(f, xs, zc + legD / 2), ...feet(f, xs, zc - legD / 2));
    return p;
  },
};

// C3-02 ミニマル「SORI」: ベッド側へ緩く反った竹の一枚板。脚はパネル裏の薄いスチールのブレードに隠し、板だけが浮いて見える。床から800
D["C3-02"] = {
  name: "SORI",
  deck: { railH: 80, lip: 20, clear: 140, radius: 12, mat: "bamboo_z", pedW: 420 },
  bed: { throwMat: "f_oat", pillowFront: "f_oat" },
  hb(f) {
    const p = [];
    const R = 2600, width = 1060, n = 13, h = 800 - 180, t = 40;
    const zChord = f.zEnd - 60; // 両端の前面
    const half = width / 2 / R; // 半角（rad）
    for (let i = 0; i < n; i++) {
      const a = -half + (2 * half) * (i + 0.5) / n;
      const x = R * Math.sin(a);
      const zz = zChord - (R * Math.cos(a) - R * Math.cos(half));
      p.push(rb([width / n + 3, h, t], [x, 180 + h / 2, zz - t / 2], "pale", 2, [0, -a * 180 / Math.PI, 0]));
    }
    // 上下の小口（反りに沿った細い面取りの帯は省略）。脚: パネル裏の黒いブレード
    const xs = [-380, 380];
    const zb = zChord - 70;
    for (const x of xs) p.push(rb([12, 560, 90], [x, 280, zb - 45], "steel", 4));
    p.push(...brackets(f, xs, zb), ...feet(f, xs, zb - 90, 330));
    return p;
  },
};

// C3-03 プレミアム「TAWARA」: 炭化竹の太い2本柱の間に、ブークレの俵形ロール3段を重ねる。床から1000・段ごとに後退してもたれ8度
D["C3-03"] = {
  name: "TAWARA",
  deck: { railH: 120, lip: 30, clear: 130, radius: 20, mat: "carbon_wz", pedMat: "shadow" },
  bed: { throwMat: "f_charcoal", pillowFront: "f_boucle" },
  hb(f) {
    const p = [];
    const xs = [-540, 540], pd = 120, zc = f.zEnd - 150;
    for (const x of xs) {
      p.push(rb([90, 1000, pd], [x, 500, zc], "carbon_w", 18));
      p.push(rb([104, 30, pd + 14], [x, 1000 - 15, zc], "carbon_w", 12));
    }
    // 下の横木（ロールの受け。床から 250）
    p.push(rb([990, 60, 100], [0, 280, zc], "carbon_w", 14));
    const r = 118, L = 860;
    for (let i = 0; i < 3; i++) {
      const y = 310 + r + i * (2 * r - 6);
      const z = zc + 70 - i * 34;
      p.push(cyl(r, L, [0, y, z], "f_boucle", [0, 0, 90], { radialSegments: 64 }));
      // 端のまるみ
      p.push({ type: "sphere", radius: r * 0.98, position: [-L / 2 + r * 0.5, y, z], material: "f_boucle" });
      p.push({ type: "sphere", radius: r * 0.98, position: [L / 2 - r * 0.5, y, z], material: "f_boucle" });
    }
    p.push(...brackets(f, xs.map((x) => x * 0.86), zc + pd / 2), ...feet(f, xs, zc - pd / 2, 200));
    return p;
  },
};

// C3-04 トレンド「MAYU」: 繭（カプセル）形の横長クッション、クレイ。竹の丸い脚2本で浮かせる。頂部880
D["C3-04"] = {
  name: "MAYU",
  deck: { railH: 90, lip: 30, clear: 130, radius: 40, mat: "bamboo_z", pedW: 440 },
  bed: { throwMat: "f_oat", pillowFront: "f_clay" },
  hb(f) {
    const p = [];
    const R = 270, W = 1060, t = 130, yc = 880 - R, zc = f.zEnd - 30 - t / 2;
    const cap = [];
    const bw = W - 2 * R, bev = 26;
    // 芯（全厚）: 半径 R-bev の円2つ＋中央の箱
    cap.push(rb([bw + 2, 2 * (R - bev), t], [0, 0, 0], "f_clay", 4));
    // 外周（厚みを bev*2 減らした一回り大きい面）: 半径 R の円2つ＋中央の箱 → 面取りのような丸み
    cap.push(rb([bw + 2, 2 * R, t - 2 * bev], [0, 0, 0], "f_clay", 4));
    for (const s of [-1, 1]) {
      cap.push(cyl(R - bev, t, [s * bw / 2, 0, 0], "f_clay", [90, 0, 0], { radialSegments: 96 }));
      cap.push(cyl(R, t - 2 * bev, [s * bw / 2, 0, 0], "f_clay", [90, 0, 0], { radialSegments: 96 }));
    }
    p.push(grp(cap, [0, yc, zc], [-6, 0, 0]));
    const xs = [-300, 300];
    for (const x of xs) {
      p.push(cyl(24, yc - 120, [x, (yc - 120) / 2, zc - 20], "bamboo", null, { radiusTop: 26, radiusBottom: 19, radialSegments: 40 }));
    }
    p.push(...brackets(f, xs, zc + t / 2 - 40), ...feet(f, xs, zc - 60, 320));
    return p;
  },
};

// C3-05 機能特化「KIYORA」: 天端が斜めに落ちる“くさび形”（ホコリが積もらない）。チャコール布＋竹の斜めの笠木。床下 180
D["C3-05"] = {
  name: "KIYORA",
  deck: { railH: 84, lip: 30, clear: 180, radius: 16, mat: "bamboo_z", pedW: 440 },
  bed: { throwMat: "f_charcoal", pillowFront: "f_offwhite" },
  hb(f) {
    const p = [];
    const y0 = 300, top = 860, zb = f.zEnd - 160; // 背板の裏面
    // 背板（竹・垂直）
    p.push(rb([1030, top - y0, 36], [0, y0 + (top - y0) / 2, zb + 18], "bamboo", 10));
    // 前面の布パネル: 下端で背板から 118 前へ出し、上端で背板に接する＝天端に平らな面がない“くさび”
    const off = 118, h = top - y0 - 20, lean = Math.atan(off / h) * 180 / Math.PI;
    p.push(place([rb([1030, h, 48], [0, h / 2, -24], "f_charcoal", 22)], { y0, z: zb + 36 + off + 4, lean }));
    // 天端の丸い竹の鼻（ホコリが載らない R）
    p.push(cyl(24, 1040, [0, top - 4, zb + 30], "bamboo", [0, 0, 90], { radialSegments: 40 }));
    // 脚: 竹のブレード（床から背板下端まで）
    const xs = [-470, 470];
    for (const x of xs) p.push(rb([44, y0 + 60, 150], [x, (y0 + 60) / 2, zb + 75], "bamboo", 12));
    p.push(...brackets(f, xs, zb + 150), ...feet(f, xs, zb - 20, 300));
    return p;
  },
};

// C3-06 素材特化「TATAMI」: 樹脂和紙の畳表を張ったパネルに、黒い畳縁。炭化竹の脚。拭ける・カビにくい。床から860
D["C3-06"] = {
  name: "TATAMI",
  deck: { railH: 100, lip: 30, clear: 130, radius: 14, mat: "carbon_wz" },
  bed: { throwMat: "f_sage", pillowFront: "f_linen" },
  hb(f) {
    const p = [];
    const xs = [-455, 455], legD = 80, zc = f.zEnd - 20 - legD / 2;
    for (const x of xs) p.push(rb([80, 860, legD], [x, 430, zc], "carbon", 12));
    const y0 = 250, h = 860 - 20 - y0, w = 830;
    const panel = [
      rb([w + 40, h + 40, 60], [0, h / 2, -30], "heri", 14), // 畳縁（外周）
      rb([w, h, 64], [0, h / 2, -32 + 1], "tatami", 6),
    ];
    // 畳表の目（横の細い筋）
    for (let y = 30; y < h - 10; y += 48) panel.push(rb([w - 6, 3, 2], [0, y, 1.5], "heri", 1));
    p.push(place(panel, { y0: y0 - 20 + 20, z: zc + 30, lean: 5 }));
    p.push(rb([990, 40, 70], [0, 870 - 20, zc], "carbon", 12)); // 笠木（上端の縁取り）
    p.push(...brackets(f, xs, zc + legD / 2), ...feet(f, xs, zc - legD / 2, 280));
    return p;
  },
};

// C3-07 UX改善「SUTTO」: 後ろ脚を開くと自立する“イーゼル”式HBユニット。左右2枚のモカの布パネル（片側ずつ外して洗える）＋竹の背骨。床から830
D["C3-07"] = {
  name: "SUTTO",
  deck: { railH: 90, lip: 34, clear: 130, radius: 22, mat: "bamboo_z" },
  bed: { throwMat: "f_clay", pillowFront: "f_mocha" },
  hb(f) {
    const p = [];
    const xs = [-470, 470], zc = f.zEnd - 60;
    for (const x of xs) {
      p.push(rb([60, 830, 70], [x, 415, zc], "bamboo", 14)); // 前脚（床から830）
      // 後ろ脚（キックスタンド）: 上端のピボットから床へ斜めに
      p.push(rb([50, 720, 44], [x, 360, zc - 150], "bamboo", 12, [-16, 0, 0]));
      p.push(cyl(9, 70, [x, 700, zc - 44], "mark", [0, 0, 90])); // ロックの目印
    }
    p.push(rb([1000, 50, 80], [0, 830 - 25, zc], "bamboo", 14)); // 笠木
    p.push(rb([1000, 44, 70], [0, 250, zc], "bamboo", 12)); // 下の横木
    p.push(rb([50, 530, 60], [0, 530, zc + 5], "bamboo", 12)); // 中央の背骨
    const pw = 420, ph = 520;
    for (const s of [-1, 1]) {
      p.push(place([rb([pw, ph, 96], [0, ph / 2, -48], "f_mocha", 44)], { x: s * 225, y0: 278, z: zc + 90, lean: 5 }));
    }
    p.push(...brackets(f, xs, zc + 35));
    return p;
  },
};

// C3-08 構造革新「MITSU」: 側面が A 字の三角脚で自立するHB。竹の角材を6段積んだ面（最下段がデッキの受け梁を兼ねる）。台座1つと三角形に支える。床から900
D["C3-08"] = {
  name: "MITSU",
  deck: { railH: 96, lip: 30, clear: 140, radius: 16, mat: "bamboo_z", pedW: 500, pedD: 640 },
  bed: { throwMat: "f_mocha", pillowFront: "f_oat" },
  hb(f) {
    const p = [];
    const xs = [-500, 500], zf = f.zEnd - 10;
    for (const x of xs) {
      p.push(rb([56, 900, 70], [x, 450, zf - 35], "bamboo", 12)); // 前脚（垂直）
      p.push(rb([50, 900, 50], [x, 430, zf - 190], "bamboo", 12, [-19, 0, 0])); // 後ろ脚（A字）
      p.push(rb([50, 50, 300], [x, 110, zf - 160], "bamboo", 10)); // 下のつなぎ
    }
    // 積んだ竹の角材（6段、段ごとに小口を見せる）
    const n = 6, bh = 96, gap = 12, y0 = 900 - n * (bh + gap);
    for (let i = 0; i < n; i++) {
      const y = y0 + bh / 2 + i * (bh + gap);
      p.push(rb([944, bh, 74], [0, y, zf - 37 - i * 8], i % 2 ? "bamboo" : "pale", 14));
    }
    // 最下段の受け梁の舌（デッキの下へ）
    p.push(rb([700, 30, 150], [0, f.clear - 16, f.zEnd + 60], "steel", 6));
    return p;
  },
};

// C3-09 少し挑戦的「OBI」: 幅1500・高さ350の横長の布の帯が、細い黒の脚4本で高く浮く。床下に電球色の足元灯（控えめ）。帯の上端780
D["C3-09"] = {
  name: "OBI",
  deck: { railH: 100, lip: 30, clear: 150, radius: 16, mat: "carbon_wz", footLight: true, pedW: 440 },
  bed: { throwMat: "f_oat", pillowFront: "f_offwhite" },
  hb(f) {
    const p = [];
    const W = 1500, H = 360, top = 790, zc = f.zEnd - 30 - 65;
    p.push(place([rb([W, H, 130], [0, H / 2, -65], "f_oat", 60)], { y0: top - H, z: zc + 65, lean: 6 }));
    const xs = [-680, -520, 520, 680];
    for (const x of xs) p.push(cyl(11, top - H + 20, [x, (top - H + 20) / 2, zc - 10], "steel", null, { radialSegments: 24 }));
    p.push(rb([1400, 20, 20], [0, top - H - 10, zc - 10], "steel", 4));
    p.push(...brackets(f, [-440, 440], zc + 40), ...feet(f, [-600, 600], zc - 40, 280));
    return p;
  },
};

// C3-10 コンセプト「HISASHI」: 上端が枕元へせり出す“庇（ひさし）”のHB。庇の下に読書灯。足元の台座はガラスで見えず、HBだけが支えているように見える。床から1100
D["C3-10"] = {
  name: "HISASHI",
  deck: { railH: 70, lip: 24, clear: 150, radius: 14, mat: "bamboo_z", pedMat: "glass", pedW: 440, pedD: 600 },
  bed: { throwMat: "f_oat", pillowFront: "f_oat" },
  hb(f) {
    const p = [];
    const zb = f.zEnd - 110, W = 1080;
    // 左右の袖（床まで降りるブレード脚。前から見ると床近くで細くなる）
    for (const s of [-1, 1]) {
      p.push(rb([50, 1100, 110], [s * (W / 2 - 25), 550, zb + 55], "bamboo", 16));
    }
    p.push(rb([W - 100, 1100 - 240, 40], [0, 240 + (1100 - 240) / 2, zb + 20], "bamboo", 10)); // 背板
    // 庇（上端で前へ 380 せり出す）
    p.push(rb([W, 60, 420], [0, 1100 - 30, zb + 210], "bamboo", 24, [-6, 0, 0]));
    p.push(rb([W - 140, 8, 30], [0, 1100 - 70, zb + 360], "led", 3));
    // 内側の布（オート）
    p.push(place([rb([W - 120, 640, 70], [0, 320, -35], "f_oat", 34)], { y0: 280, z: zb + 40 + 70, lean: 4 }));
    p.push(...brackets(f, [-460, 460], zb + 110), ...feet(f, [-(W / 2 - 25), W / 2 - 25], zb - 40, 300));
    return p;
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

function assemble(d, state) {
  const f = deck(d.deck);
  const hb = d.hb(f);
  if (state === "exploded") {
    // HB ユニットはそのまま、本体を 450 持ち上げて足元へ 250、台座は床と本体の間に
    return [grp(hb, [-1250, 0, 1000]), grp(f.body, [150, 330, 100]), grp(f.ped, [150, 0, 100])];
  }
  const parts = [...f.body, ...f.ped, ...hb];
  if (state === "use" || state === "under") parts.push(...bedding(f.deckTop, d.bed ?? {}));
  if (state === "under") parts.push(...robot(-250, -380), ...robot(-(f.W / 2 + 60), 380));
  return parts;
}

export { D, assemble };

const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(D);
for (const id of ids) {
  const d = D[id];
  const ROT = d.rot ?? 14;
  const useParts = assemble(d, "use");
  fs.writeFileSync(path.join(DIR, `${id}.scene.json`), JSON.stringify({ ...BASE({ fov: 28, margin: 0.86, zoom: 1.0 }), parts: useParts }, null, 1));
  fs.writeFileSync(path.join(DIR, `${id}-hero.scene.json`), JSON.stringify({ ...BASE(), parts: [grp(useParts, [0, 0, 0], [0, ROT, 0])] }, null, 1));
  fs.writeFileSync(path.join(DIR, `${id}-frame.scene.json`), JSON.stringify({ ...BASE({ fov: 28, margin: 0.84, zoom: 1.12 }), parts: [grp(assemble(d, "frame"), [0, 0, 0], [0, ROT, 0])] }, null, 1));
  fs.writeFileSync(path.join(DIR, `${id}-structure.scene.json`), JSON.stringify({ ...BASE({ fov: 28, margin: 0.84, zoom: 1.3 }, { width: 2000, height: 1100 }), parts: [grp(assemble(d, "exploded"), [0, 0, 0], [0, 10, 0])] }, null, 1));
  fs.writeFileSync(path.join(DIR, `${id}-under.scene.json`), JSON.stringify({ ...BASE({ fov: 24, margin: 0.8, zoom: 1.2 }), parts: [grp(assemble(d, "under"), [0, 0, 0], [0, 52, 0])] }, null, 1));
  console.log("wrote", id, d.name);
}
