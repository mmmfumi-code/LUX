# render3d — プロダクトの3Dコンセプトレンダー

部品を寸法（mm）で組み立てた scene JSON を、柔らかい影つきの PNG に描画する（Three.js、ヘッドレス Chromium）。
写真ではなく「形・構造・素材感が伝わるプロダクトレンダー」。画像に文字は入らない。

```
node scripts/render3d.mjs <scene.json> <out-basename> [--views three-quarter,front,side] [--width 1600 --height 1200]
```

- 出力: `<out-basename>-<view>.png`（ビューが1つなら `<out-basename>.png`）
- ビュー: `three-quarter`（右斜め上・標準）/ `three-quarter-left` / `front` / `side` / `top` / `low`（低い視点）/ `high`（高い俯瞰）、または `{"az": 30, "el": 15}`
- 初回は `scripts/render3d/` に three.js を自動インストールする

## scene JSON

```json
{
  "canvas": { "width": 1600, "height": 1200 },
  "background": "#efefec",
  "camera": { "fov": 28, "margin": 0.95, "zoom": 1 },
  "lighting": { "key": 2.2, "fill": 0.6, "rim": 0.5, "hemi": 0.6 },
  "shadowOpacity": 0.16,
  "materials": {
    "bamboo":   { "type": "bamboo",   "color": "#d9b88a" },
    "walnut":   { "type": "wood",     "color": "#6b4a33" },
    "fabric":   { "type": "fabric",   "color": "#8e9a93" },
    "steel":    { "type": "metal",    "color": "#2b2b2b", "roughness": 0.35 },
    "white":    { "type": "matte",    "color": "#f2f0ec" },
    "lacquer":  { "type": "glossy",   "color": "#1d1c1a" },
    "led":      { "type": "emissive", "color": "#ffd9a0", "intensity": 2 },
    "mattress": { "type": "mattress", "color": "#f2f0ec" }
  },
  "parts": [
    { "type": "rbox", "size": [970, 60, 1950], "position": [0, 250, 0], "material": "bamboo", "radius": 8 },
    { "type": "array", "count": 16, "step": [0, 0, 120],
      "of": { "type": "rbox", "size": [890, 18, 80], "position": [0, 288, -895], "material": "bamboo", "radius": 4 } },
    { "type": "cylinder", "radius": 25, "height": 220, "position": [440, 110, 900], "material": "steel" },
    { "type": "group", "position": [0, 0, 0], "rotation": [0, 0, 0], "parts": [ ] }
  ]
}
```

### 座標と部品
- 単位 mm。**Y が上、床は y=0**。X が幅、Z が長さ（奥行き）。`position` は部品の中心
- `box` `[w,h,d]` ／ `rbox`（角丸、`radius`）／ `cylinder`（`radius` または `radiusTop`/`radiusBottom`、`height`）／ `sphere`（`radius`）／ `plane`（床と平行な板 `[w,d]`）
- `array`: `of` の部品を `step` ずつずらして `count` 個並べる（すのこ・スラットなど）
- `group`: 部品をまとめて移動・回転（`rotation` は度数 `[x,y,z]`。折りたたみの途中の状態などに）
- `material` は `materials` のキー、またはその場でオブジェクト指定

### 素材 type
`matte`（既定）/ `wood` / `bamboo`（節入り）/ `fabric` / `mattress` / `metal` / `glossy`（クリア塗装）/ `glass` / `emissive`（発光。LED など）。
`color`・`roughness`・`metalness` で調整。

### コツ
- マットレス（例: 厚み 200mm）を載せた状態と、フレーム単体の両方を描くと伝わりやすい
- 構造を見せる図は、部品を少し離して並べる（分解図）か、`top` / `side` ビューを使う
- 脚の取り付け・折りたたみなどの動きは、状態ごとに別の scene を作って並べる
