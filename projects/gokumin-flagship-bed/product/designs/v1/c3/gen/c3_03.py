from lib import *
# C3-03 RIN: premium. thick carbonized-bamboo tray band (110mm) with mattress sunk 40mm, brass hairline, legs blacked out deep inside
CL = 125; E = 84; Y = CL + E; TRAY = 30; YS = Y - TRAY
m = M(edge={"type": "bamboo", "color": "#4f3526"},
      edge_z={"type": "bamboo", "color": "#4f3526", "grain": "z"},
      slat={"type": "bamboo", "color": "#5c3f2d"},
      brass={"type": "metal", "color": "#b89660", "roughness": 0.35},
      leg={"type": "matte", "color": "#141414", "roughness": 0.9})
legs = six_legs(200, (-640, 0, 640))
def body(lift=0):
    P = deck(Y + lift, E=E, T=50, R=12, slats=False, beam_h=E - TRAY - 26)
    seg = L / 3
    for zc in (-seg, 0, seg):
        pitch = (seg - 20) / 8
        z0 = zc - seg / 2 + 10 + pitch / 2
        P.append(arr(8, [0, 0, pitch], rb([W - 104, 16, 60], [0, YS - 8 + lift, z0], "slat", 3)))
        # brass hairline on the long sides
        for sx in (-1, 1):
            P.append(bx([2, 3, seg - 40], [sx * (W / 2 + 0.8), CL + 30 + lift, zc], "brass"))
    for zs in (-1, 1):
        P.append(bx([W - 40, 3, 2], [0, CL + 30 + lift, zs * (L / 2 + 0.8)], "brass"))
    return P
main = body() + leg_units(legs, CL, kind="sq", size=60, flange="flange")
save("C3-03", scene(main + mattress(YS), m, zoom=1.12))
LIFT = 280
save("C3-03-structure", scene(body(LIFT) + leg_units(legs, CL + LIFT, kind="sq", size=60, drop=LIFT), m, zoom=1.1))
save("C3-03-robot", scene(main + mattress(YS) + robot(380, 320), m, zoom=1.15))
if __name__ == "__main__":
    render("C3-03", ["three-quarter", "front", "side"])
    render("C3-03-structure", ["three-quarter"])
    render("C3-03-robot", ["low"])
