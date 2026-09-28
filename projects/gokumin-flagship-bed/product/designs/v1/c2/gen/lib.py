# C2 scene generator helpers (units mm, Y up, head = -Z, foot = +Z, camera side = +X,+Z)
import json, os
OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W, L = 1000, 1980

def rb(size, pos, mat, r=6):
    return {"type": "rbox", "size": list(size), "position": list(pos), "material": mat, "radius": r}
def bx(size, pos, mat):
    return {"type": "box", "size": list(size), "position": list(pos), "material": mat}
def cyl(r, h, pos, mat, rt=None, rbm=None, rot=None):
    p = {"type": "cylinder", "height": h, "position": list(pos), "material": mat}
    if rt is not None: p["radiusTop"] = rt; p["radiusBottom"] = rbm
    else: p["radius"] = r
    if rot: p["rotation"] = rot
    return p
def grp(parts, pos=(0, 0, 0), rot=None, scale=None):
    g = {"type": "group", "position": list(pos), "parts": parts}
    if rot: g["rotation"] = list(rot)
    if scale: g["scale"] = scale
    return g
def arr(n, step, of):
    return {"type": "array", "count": n, "step": list(step), "of": of}

def mattress(Y, top_mat="mattress_top", body="mattress"):
    # THE GOKUMIN euro-top 28cm: body 230 + top 50
    return [rb([970, 230, 1950], [0, Y + 115, 0], body, 30),
            rb([960, 50, 1940], [0, Y + 230 + 25, 0], top_mat, 26)]

def frame(Y, w=W, l=L, rh=72, rt=38, R=8, side="side", end="end", slat="slat", leg="leg",
          beam="steel", legs=None, leg_type="sq", leg_size=52, leg_inset=95, groove=None,
          nslat=7, slat_w=62, seams=True, felt="felt", foot=True, cross=True):
    P = []
    seg = l / 3
    for i, zc in enumerate([-seg, 0, seg]):
        ln = seg - 4 if seams else seg
        for sx in (-1, 1):
            P.append(rb([rt, rh, ln], [sx * (w / 2 - rt / 2), Y - rh / 2, zc], side, R))
        # slats
        pitch = (seg - 2 * rt - 10) / nslat
        z0 = zc - seg / 2 + rt + 5 + pitch / 2
        P.append(arr(nslat, [0, 0, pitch], rb([w - 2 * rt - 6, 15, slat_w], [0, Y - 10.5, z0], slat, 3)))
        if beam:
            P.append(bx([40, 40, seg - 90], [0, Y - 18 - 20, zc], beam))
    # end rails
    P.append(rb([w - 2 * rt, rh, rt], [0, Y - rh / 2, -l / 2 + rt / 2], end, R))
    if foot:
        P.append(rb([w - 2 * rt, rh, rt], [0, Y - rh / 2, l / 2 - rt / 2], end, R))
    if cross:
        for zs in (-1, 1):
            for d in (-1, 1):
                P.append(rb([w - 2 * rt, rh * 0.7, rt * 0.8], [0, Y - rh * 0.35 - 4, zs * seg / 2 + d * (rt * 0.4 + 3)], end, R * 0.6))
    # legs
    if legs is None:
        xi = w / 2 - leg_inset
        zi = l / 2 - leg_inset - 20
        legs = [(sx * xi, z) for sx in (-1, 1) for z in (-zi, -seg / 2 + 110, seg / 2 - 110, zi)]
    top = Y - rh
    for (x, z) in legs:
        if leg_type == "sq":
            P.append(rb([leg_size, top, leg_size], [x, top / 2, z], leg, 5))
        elif leg_type == "round":
            P.append(cyl(leg_size / 2, top, [x, top / 2, z], leg))
        elif leg_type == "taper":
            P.append(cyl(0, top, [x, top / 2, z], leg, rt=leg_size / 2, rbm=leg_size / 2 * 0.72))
        if felt:
            P.append(cyl(leg_size * 0.42, 5, [x, 2.5, z], felt))
    # rail groove (GOKUMIN RAIL): thin strip on outer faces
    if groove:
        gy = Y - groove.get("from_top", rh / 2)
        gh = groove.get("h", 12)
        gm = groove.get("mat", "rail")
        sides = groove.get("sides", "LRH")
        if "R" in sides or "L" in sides:
            for i, zc in enumerate([-seg, 0, seg]):
                ln = seg - 4 - 2 * R
                for sx, key in ((1, "R"), (-1, "L")):
                    if key in sides:
                        P.append(bx([3, gh, ln], [sx * (w / 2 + 0.6), gy, zc], gm))
        if "H" in sides:
            P.append(bx([w - 2 * R - 4, gh, 3], [0, gy, -l / 2 - 0.6], gm))
        if "F" in sides:
            P.append(bx([w - 2 * R - 4, gh, 3], [0, gy, l / 2 + 0.6], gm))
    return P

def scene(parts, materials, zoom=1.1, bg="#ecebe8", margin=0.9, extra=None):
    s = {"canvas": {"width": 1600, "height": 1200}, "background": bg,
         "camera": {"fov": 28, "margin": margin, "zoom": zoom},
         "lighting": {"key": 2.3, "fill": 0.6, "rim": 0.55, "hemi": 0.6},
         "shadowOpacity": 0.2, "materials": materials, "parts": parts}
    if extra: s.update(extra)
    return s

def save(name, sc):
    p = os.path.join(OUT, name + ".scene.json")
    with open(p, "w") as f: json.dump(sc, f, ensure_ascii=False, indent=1)
    return p

BASE_M = {
    "felt": {"type": "fabric", "color": "#3a3835"},
    "mattress": {"type": "mattress", "color": "#f3f1ec"},
    "mattress_top": {"type": "mattress", "color": "#faf9f6"},
    "steel": {"type": "metal", "color": "#2a2a2a", "roughness": 0.45},
}
def M(**kw):
    m = dict(BASE_M); m.update(kw); return m

# ---------------- accessories (all hook into GOKUMIN RAIL on outer faces)
def side_table(z, gy, top_y, top="acc", br="steel", depth=380, width=400, t=22, side=1, lift=0, out=0, r=6):
    x0 = side * (W / 2 + 3 + out)
    P = []
    h = top_y - (gy - 30)
    P.append(rb([12, h, 90], [x0 + side * 6, gy - 30 + h / 2 + lift, z], br, 3))       # hanger plate (tongue at gy)
    P.append(rb([depth, t, width], [x0 + side * (depth / 2), top_y - t / 2 + lift, z], top, r))
    P.append(rb([14, 12, 80], [x0 - side * 4, gy + lift, z], br, 2))   # tongue into the rail
    P.append(rb([depth * 0.55, 50, 12], [x0 + side * (depth * 0.3), top_y - t - 25 + lift, z], br, 3))  # rib
    return P

def lamp(x, z, y0, y1, arm, dirx=-1, post="steel", shade="shade", bulb="bulb", r=9, lift=0):
    P = [cyl(r, y1 - y0, [x, (y0 + y1) / 2 + lift, z], post)]
    P.append(cyl(r * 0.8, arm, [x + dirx * arm / 2, y1 + lift, z], post, rot=[0, 0, 90]))
    sx = x + dirx * arm
    P.append(cyl(0, 90, [sx, y1 - 35 + lift, z], shade, rt=34, rbm=62))
    P.append(cyl(30, 6, [sx, y1 - 82 + lift, z], bulb))
    return P

def tongues_head(gy, zf, xs=(-300, 300), lift=0, mat="steel"):
    return [rb([90, 12, 14], [x, gy + lift, zf + 7], mat, 2) for x in xs]

def head_shelf(gy, bottom, H=190, D=220, mat="acc", post="steel", w=W, lift=0, back=True, t=18, panel="acc", panel_t=22, zs=0, tongue=True):
    # headboard panel hooked into the head rail + open shelf box on top (opening faces the bed)
    P = []
    zf = -L / 2 - 2 - zs
    if tongue: P += tongues_head(gy, zf, lift=lift)
    if panel:
        P.append(rb([w, bottom - (gy - 40), panel_t], [0, (gy - 40 + bottom) / 2 + lift, zf - panel_t / 2], panel, 4))
    else:
        for sx in (-1, 1):
            P.append(rb([50, bottom - (gy - 40) + 20, 14], [sx * (w / 2 - 110), (gy - 40 + bottom + 20) / 2 + lift, zf - 7], post, 3))
    zc = zf - D / 2
    P.append(rb([w, t, D], [0, bottom + t / 2 + lift, zc], mat, 5))
    P.append(rb([w, t, D], [0, bottom + H - t / 2 + lift, zc], mat, 5))
    for sx in (-1, 1):
        P.append(rb([t, H, D], [sx * (w / 2 - t / 2), bottom + H / 2 + lift, zc], mat, 5))
    if back:
        P.append(rb([w - 2 * t, H - 2 * t, 10], [0, bottom + H / 2 + lift, zf - D + 5], mat, 2))
    return P
