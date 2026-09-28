# C3 scene generator helpers (units mm, Y up, floor y=0, head = -Z, foot = +Z, camera side = +X,+Z)
# Concept 3: floating deck + one-touch leg units + robot-vacuum clearance
import json, os, subprocess
OUT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT = "/home/user/LUX"
W, L = 1000, 1980


def rb(size, pos, mat, r=6):
    return {"type": "rbox", "size": list(size), "position": list(pos), "material": mat, "radius": r}


def bx(size, pos, mat):
    return {"type": "box", "size": list(size), "position": list(pos), "material": mat}


def cyl(r, h, pos, mat, rt=None, rbm=None, rot=None):
    p = {"type": "cylinder", "height": h, "position": list(pos), "material": mat}
    if rt is not None:
        p["radiusTop"] = rt; p["radiusBottom"] = rbm
    else:
        p["radius"] = r
    if rot:
        p["rotation"] = list(rot)
    return p


def grp(parts, pos=(0, 0, 0), rot=None):
    g = {"type": "group", "position": list(pos), "parts": parts}
    if rot:
        g["rotation"] = list(rot)
    return g


def arr(n, step, of):
    return {"type": "array", "count": n, "step": list(step), "of": of}


def mattress(Y, body="mattress", top="mattress_top"):
    # THE GOKUMIN euro-top 28cm (single 970x1950): body 230 + euro top 50
    return [rb([970, 230, 1950], [0, Y + 115, 0], body, 30),
            rb([960, 50, 1940], [0, Y + 230 + 25, 0], top, 26)]


def deck(Y, E=70, T=40, R=8, w=W, l=L, edge="edge", edge_z="edge_z", under="under", slat="slat",
         nslat=8, slat_w=56, seams=True, seam="seam", under_inset=0, slats=True, top_board=None, beam_h=None):
    """Tri-fold floating deck. Y = deck top. Edge band height E. Underside is one flat closed panel
    (no dust-catching ribs on the floor side). Returns parts; underside at Y-E."""
    P = []
    seg = l / 3
    yb = Y - E
    for zc in (-seg, 0, seg):
        ln = seg - (4 if seams else 0)
        for sx in (-1, 1):
            P.append(rb([T, E, ln], [sx * (w / 2 - T / 2), Y - E / 2, zc], edge_z, R))
        if slats:
            pitch = (seg - 20) / nslat
            z0 = zc - seg / 2 + 10 + pitch / 2
            P.append(arr(nslat, [0, 0, pitch], rb([w - 2 * T - 4, 14, slat_w], [0, Y - 9, z0], slat, 3)))
        if top_board:
            P.append(rb([w - 2 * T - 2, 16, ln], [0, Y - 8, zc], top_board, 3))
    # head / foot end bands
    for zs in (-1, 1):
        P.append(rb([w - 2 * T + 2, E, T], [0, Y - E / 2, zs * (l / 2 - T / 2)], edge, R))
    # closed flat underside panel (wipeable), recessed a hair
    ui = under_inset
    P.append(bx([w - 2 * T - 2 * ui, 6, l - 2 * T - 2 * ui], [0, yb + 3 + (0 if ui == 0 else 0), 0], under))
    # internal steel beams (inside the band depth, not below it)
    bh = beam_h if beam_h is not None else max(E - 30, 8)
    P.append(bx([40, bh, l - 120], [-260, yb + 6 + bh / 2, 0], "steel"))
    P.append(bx([40, bh, l - 120], [260, yb + 6 + bh / 2, 0], "steel"))
    if seams:
        for zs in (-1, 1):
            for sx in (-1, 1):
                P.append(bx([T - 6, E - 10, 4], [sx * (w / 2 - T / 2), Y - E / 2, zs * seg / 2], seam))
    return P


def leg_units(pos, yb, kind="sq", size=50, leg="leg", flange="flange", felt="felt", drop=0, lift_deck=0,
              flange_size=None, collar=None):
    """One-touch leg units plugged into sockets on the flat underside at height yb.
    drop: pull the legs down (exploded view). kind: sq / round / disc / blade"""
    P = []
    fs = flange_size or size + 36
    for (x, z) in pos:
        top = yb - drop
        h = top
        if kind == "sq":
            P.append(rb([size, h - 8, size], [x, (h - 8) / 2 + 4, z], leg, 5))
        elif kind == "round":
            P.append(cyl(size / 2, h - 8, [x, (h - 8) / 2 + 4, z], leg))
        elif kind == "blade":
            P.append(rb([size, h - 8, 26], [x, (h - 8) / 2 + 4, z], leg, 4))
        # socket flange / bayonet plug at the top of the leg
        if flange:
            P.append(cyl(fs / 2, 8, [x, top - 4, z], flange))
            if drop > 0:
                # the plug that goes into the socket
                P.append(cyl(size * 0.32, 26, [x, top + 13, z], flange))
        if collar:
            P.append(cyl(size / 2 + 2, 10, [x, top - 26, z], collar))
        if felt:
            P.append(cyl(size * 0.46, 4, [x, 2, z], felt))
        if drop > 0:
            # socket on the deck underside
            P.append(cyl(size * 0.36, 4, [x, yb + lift_deck - 2, z], "socket"))
    return P


def robot(x, z, mat="robot", top="robot_top", r=172, h=92):
    return [cyl(r, h - 8, [x, (h - 8) / 2 + 4, z], mat),
            cyl(r - 18, 3, [x, h - 2.5, z], top),
            cyl(40, 10, [x - 60, h + 3, z], mat),  # lidar turret (overall ~100mm)
            cyl(r - 3, 4, [x, 2, z], "robot_skirt")]


def scene(parts, materials, zoom=1.1, bg="#ecebe8", margin=0.9, extra=None, shadow=0.2, light=None):
    s = {"canvas": {"width": 1600, "height": 1200}, "background": bg,
         "camera": {"fov": 28, "margin": margin, "zoom": zoom},
         "lighting": light or {"key": 2.3, "fill": 0.6, "rim": 0.55, "hemi": 0.6},
         "shadowOpacity": shadow, "materials": materials, "parts": parts}
    if extra:
        s.update(extra)
    return s


def save(name, sc):
    p = os.path.join(OUT, name + ".scene.json")
    with open(p, "w") as f:
        json.dump(sc, f, ensure_ascii=False, indent=1)
    return p


def render(name, views):
    p = os.path.join(OUT, name + ".scene.json")
    out = os.path.join(OUT, name)
    subprocess.run(["node", "scripts/render3d.mjs", p, out, "--views", ",".join(views)], cwd=ROOT, check=True)


BASE_M = {
    "felt": {"type": "fabric", "color": "#3a3835"},
    "mattress": {"type": "mattress", "color": "#f3f1ec"},
    "mattress_top": {"type": "mattress", "color": "#faf9f6"},
    "steel": {"type": "metal", "color": "#2a2a2a", "roughness": 0.45},
    "under": {"type": "matte", "color": "#2c2b29", "roughness": 0.8},
    "seam": {"type": "matte", "color": "#3a332b"},
    "flange": {"type": "metal", "color": "#232323", "roughness": 0.5},
    "socket": {"type": "metal", "color": "#8a8a88", "roughness": 0.4},
    "robot": {"type": "glossy", "color": "#e9e8e5"},
    "robot_top": {"type": "glossy", "color": "#2d2e30"},
    "robot_skirt": {"type": "matte", "color": "#555555"},
}


def M(**kw):
    m = dict(BASE_M); m.update(kw); return m


def six_legs(inset_x=150, z=(-660, 0, 660)):
    xi = W / 2 - inset_x
    return [(sx * xi, zz) for sx in (-1, 1) for zz in z]
