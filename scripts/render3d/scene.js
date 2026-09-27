// プロダクトの3Dコンセプトレンダー（ブラウザ側）。render3d.mjs から scene JSON を受け取って描画する。
// 単位: mm。Y が上、床は y=0。部品は box / rbox（角丸）/ cylinder / plane / array（繰り返し）/ group。
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const deg = (v) => (v || 0) * Math.PI / 180;

// ---------------------------------------------------------------- procedural textures
function canvasTex(w, h, draw, repeat = [1, 1]) {
  const c = document.createElement("canvas");
  c.width = w; c.height = h;
  draw(c.getContext("2d"), w, h);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(...repeat);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}
function rand(seed) { let s = seed >>> 0; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

// 木目・竹: 繊維方向の縞。竹は節（node）を入れる
function woodTex(color, { bamboo = false, seed = 7 } = {}) {
  const r = rand(seed), base = new THREE.Color(color);
  return canvasTex(512, 512, (g, w, h) => {
    g.fillStyle = `#${base.getHexString()}`; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 180; i++) {
      const y = r() * h, a = 0.03 + r() * 0.07, dark = r() > 0.5;
      g.fillStyle = dark ? `rgba(60,40,20,${a})` : `rgba(255,245,225,${a})`;
      g.fillRect(0, y, w, 0.6 + r() * 2.2);
    }
    if (bamboo) for (let x = 60; x < w; x += 170 + r() * 60) {
      g.fillStyle = "rgba(80,55,25,0.18)"; g.fillRect(x, 0, 3, h);
      g.fillStyle = "rgba(255,240,210,0.15)"; g.fillRect(x + 3, 0, 2, h);
    }
  });
}
function fabricTex(color, seed = 3) {
  const r = rand(seed), base = new THREE.Color(color);
  return canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = `#${base.getHexString()}`; g.fillRect(0, 0, w, h);
    for (let i = 0; i < 9000; i++) {
      g.fillStyle = r() > 0.5 ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)";
      g.fillRect(r() * w, r() * h, 1, 1);
    }
    for (let y = 0; y < h; y += 2) { g.fillStyle = "rgba(0,0,0,0.025)"; g.fillRect(0, y, w, 1); }
  }, [4, 4]);
}

function makeMaterial(spec = {}) {
  const t = spec.type || "matte";
  const color = spec.color || "#cccccc";
  const common = { color, roughness: spec.roughness ?? 0.7, metalness: spec.metalness ?? 0 };
  if (t === "wood" || t === "bamboo") {
    return new THREE.MeshStandardMaterial({ ...common, color: "#ffffff", map: woodTex(color, { bamboo: t === "bamboo", seed: spec.seed || 7 }), roughness: spec.roughness ?? 0.55 });
  }
  if (t === "fabric") return new THREE.MeshStandardMaterial({ ...common, color: "#ffffff", map: fabricTex(color, spec.seed || 3), roughness: spec.roughness ?? 0.95 });
  if (t === "metal") return new THREE.MeshStandardMaterial({ ...common, metalness: spec.metalness ?? 0.85, roughness: spec.roughness ?? 0.3 });
  if (t === "glossy") return new THREE.MeshPhysicalMaterial({ ...common, roughness: spec.roughness ?? 0.15, clearcoat: 1, clearcoatRoughness: 0.1 });
  if (t === "glass") return new THREE.MeshPhysicalMaterial({ ...common, roughness: 0.05, transmission: 0.9, thickness: 10, transparent: true });
  if (t === "emissive") return new THREE.MeshStandardMaterial({ ...common, emissive: spec.emissive || color, emissiveIntensity: spec.intensity ?? 1.5 });
  if (t === "mattress") return new THREE.MeshStandardMaterial({ ...common, color: "#ffffff", map: fabricTex(color, spec.seed || 11), roughness: 0.98 });
  return new THREE.MeshStandardMaterial(common);
}

// ---------------------------------------------------------------- parts
function buildPart(p, mats) {
  const mat = typeof p.material === "object" ? makeMaterial(p.material) : (mats[p.material] || mats.__default);
  let obj;
  switch (p.type) {
    case "box": {
      const [w, h, d] = p.size;
      obj = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
      break;
    }
    case "rbox": {
      const [w, h, d] = p.size;
      const r = Math.min(p.radius ?? 8, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01);
      obj = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, p.segments ?? 4, r), mat);
      break;
    }
    case "cylinder": {
      const rt = p.radiusTop ?? p.radius, rb = p.radiusBottom ?? p.radius;
      obj = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, p.height, p.radialSegments ?? 48), mat);
      break;
    }
    case "sphere": obj = new THREE.Mesh(new THREE.SphereGeometry(p.radius, 48, 32), mat); break;
    case "plane": {
      const [w, d] = p.size;
      obj = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat);
      obj.rotation.x = -Math.PI / 2;
      break;
    }
    case "array": {
      obj = new THREE.Group();
      const n = p.count || 1, step = p.step || [0, 0, 0];
      for (let i = 0; i < n; i++) {
        const child = buildPart(p.of, mats);
        child.position.x += step[0] * i; child.position.y += step[1] * i; child.position.z += step[2] * i;
        obj.add(child);
      }
      break;
    }
    case "group": {
      obj = new THREE.Group();
      (p.parts || []).forEach((c) => obj.add(buildPart(c, mats)));
      break;
    }
    default: throw new Error(`unknown part type: ${p.type}`);
  }
  if (p.position) obj.position.set(...p.position);
  if (p.rotation) obj.rotation.set(obj.rotation.x + deg(p.rotation[0]), deg(p.rotation[1]), deg(p.rotation[2]));
  if (p.scale) obj.scale.set(...(Array.isArray(p.scale) ? p.scale : [p.scale, p.scale, p.scale]));
  obj.traverse((o) => { if (o.isMesh) { o.castShadow = p.castShadow !== false; o.receiveShadow = true; } });
  return obj;
}

// ---------------------------------------------------------------- render
export async function render(scene, viewName) {
  const W = scene.canvas?.width || 1600, H = scene.canvas?.height || 1200;
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true, alpha: !!scene.transparent });
  renderer.setPixelRatio(1);
  renderer.setSize(W, H);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = scene.exposure ?? 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);

  const s = new THREE.Scene();
  if (!scene.transparent) s.background = new THREE.Color(scene.background || "#efefec");
  const pmrem = new THREE.PMREMGenerator(renderer);
  s.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  s.environmentIntensity = scene.envIntensity ?? 0.55;

  const mats = { __default: makeMaterial({ color: "#d9d6d0" }) };
  for (const [k, v] of Object.entries(scene.materials || {})) mats[k] = makeMaterial(v);

  const model = new THREE.Group();
  (scene.parts || []).forEach((p) => model.add(buildPart(p, mats)));
  s.add(model);

  // 床（影を受ける）と背景の壁
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3()), center = box.getCenter(new THREE.Vector3());
  const span = Math.max(size.x, size.z, size.y * 1.5);
  if (scene.floor !== false) {
    const floorMat = scene.floorMaterial ? makeMaterial(scene.floorMaterial) : new THREE.ShadowMaterial({ opacity: scene.shadowOpacity ?? 0.16 });
    const floor = new THREE.Mesh(new THREE.PlaneGeometry(span * 8, span * 8), floorMat);
    floor.rotation.x = -Math.PI / 2; floor.position.set(center.x, 0, center.z); floor.receiveShadow = true;
    s.add(floor);
  }

  // ライティング: キー（柔らかい影）＋フィル＋リム
  const L = scene.lighting || {};
  s.add(new THREE.HemisphereLight(L.sky || "#ffffff", L.ground || "#d8d2c8", L.hemi ?? 0.6));
  const key = new THREE.DirectionalLight(L.keyColor || "#fff6ea", L.key ?? 2.2);
  const kd = span * 1.6;
  key.position.set(center.x - kd * 0.45, kd * 1.5, center.z + kd * 0.55);
  key.target.position.copy(center);
  key.castShadow = true;
  key.shadow.mapSize.set(4096, 4096);
  const sc = key.shadow.camera; sc.left = -span; sc.right = span; sc.top = span; sc.bottom = -span; sc.near = 1; sc.far = kd * 4;
  key.shadow.radius = 10; key.shadow.bias = -0.0004; key.shadow.normalBias = 0.8;
  s.add(key, key.target);
  const fill = new THREE.DirectionalLight("#eef3ff", L.fill ?? 0.6); fill.position.set(center.x + kd, kd * 0.5, center.z + kd * 0.3); s.add(fill);
  const rim = new THREE.DirectionalLight("#ffffff", L.rim ?? 0.5); rim.position.set(center.x, kd * 0.6, center.z - kd); s.add(rim);

  // カメラ
  const VIEWS = {
    "three-quarter": { az: 35, el: 22 },
    "three-quarter-left": { az: -35, el: 22 },
    front: { az: 0, el: 6 },
    side: { az: 90, el: 6 },
    top: { az: 0, el: 88 },
    low: { az: 30, el: 6 },
    high: { az: 40, el: 45 },
  };
  const v = typeof viewName === "object" ? viewName : (VIEWS[viewName] || VIEWS["three-quarter"]);
  const fov = scene.camera?.fov ?? 28;
  const cam = new THREE.PerspectiveCamera(fov, W / H, 10, span * 50);
  // 外接球が画面に収まる距離（margin で余白を調整。zoom > 1 で寄る）
  const radius = size.length() / 2;
  const margin = scene.camera?.margin ?? 0.95;
  const fit = (radius / Math.sin(deg(fov) / 2)) * margin / (scene.camera?.zoom || 1) * (W < H ? H / W : 1);
  const az = deg(v.az), el = deg(v.el);
  const target = center.clone();
  cam.position.set(target.x + fit * Math.sin(az) * Math.cos(el), target.y + fit * Math.sin(el), target.z + fit * Math.cos(az) * Math.cos(el));
  cam.lookAt(target);

  renderer.render(s, cam);
  return renderer.domElement.toDataURL("image/png");
}
