from lib import *
# C3-09 TERASU: slightly challenging. "show the floor": a warm 2700K downlight line under the deck lights the floor
# (motion sensor, no colour change). charcoal bamboo, legs recessed 200mm and blacked out.
CL = 125; E = 70; Y = CL + E
m = M(edge={"type": "bamboo", "color": "#3e3a36"},
      edge_z={"type": "bamboo", "color": "#3e3a36", "grain": "z"},
      slat={"type": "bamboo", "color": "#4a4541"},
      leg={"type": "matte", "color": "#161616", "roughness": 0.9},
      led={"type": "emissive", "color": "#ffcf8a", "intensity": 2.2},
      pool={"type": "emissive", "color": "#f6d7a4", "intensity": 0.55},
      pool2={"type": "emissive", "color": "#f1dcb8", "intensity": 0.35})
legs = six_legs(200, (-640, 0, 640))
def body(lift=0, light=True):
    P = deck(Y + lift, E=E, T=40, R=8)
    if light:
        # LED line recessed 60mm inside the edge on the underside, facing down
        yb = CL + lift - 2
        for sx in (-1, 1):
            P.append(bx([10, 3, L - 180], [sx * (W / 2 - 60), yb, 0], "led"))
        for sz in (-1, 1):
            P.append(bx([W - 130, 3, 10], [0, yb, sz * (L / 2 - 60)], "led"))
    return P
def pool(k=1.0):
    # soft warm light pool on the floor: stacked ellipses, brightest in the middle
    P = []
    n = 7
    for i in range(n):
        t = i / (n - 1)
        r = 560 - 330 * t           # half-width
        col = ["#e9e2d4", "#ece1cc", "#efdfc2", "#f2ddb8", "#f5dbae", "#f7d8a3", "#f9d598"][i]
        P.append({"type": "cylinder", "radius": r, "height": 0.4, "position": [0, 0.3 + i * 0.3, 0],
                  "scale": [1, 1, (L / 2 + 120 - 120 * t) / r],
                  "material": {"type": "emissive", "color": col, "intensity": (0.18 + 0.1 * i) * k}})
    return P
main = body() + leg_units(legs, CL, kind="sq", size=50)
save("C3-09", scene(main + mattress(Y) + pool(0.8), m, zoom=1.12))
LIFT = 260
save("C3-09-structure", scene(body(LIFT) + leg_units(legs, CL + LIFT, kind="sq", size=50, drop=LIFT), m, zoom=1.1))
night = scene(main + mattress(Y) + pool(1.4) + robot(400, 330), m, zoom=1.15, bg="#34322f", shadow=0.35,
              light={"key": 0.5, "fill": 0.25, "rim": 0.3, "hemi": 0.25})
save("C3-09-robot", night)
if __name__ == "__main__":
    render("C3-09", ["three-quarter", "front", "side"])
    render("C3-09-structure", ["three-quarter"])
    render("C3-09-robot", ["low"])
