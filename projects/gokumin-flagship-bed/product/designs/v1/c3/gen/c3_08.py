from lib import *
# C3-08 HARI: structure. central steel keel (one segment per panel, locked across hinges) carries the load on 3 centre pedestals;
# 4 slim outrigger legs for edge-sitting. Deck edge can be thin (45mm) and floats 185mm above the floor.
CL = 125; KEEL = 32; E = 45; Y = CL + KEEL + E
m = M(edge={"type": "bamboo", "color": "#dcbf94"},
      edge_z={"type": "bamboo", "color": "#dcbf94", "grain": "z"},
      slat={"type": "bamboo", "color": "#e2c7a0"},
      keel={"type": "metal", "color": "#262626", "roughness": 0.45},
      leg={"type": "metal", "color": "#262626", "roughness": 0.5},
      needle={"type": "metal", "color": "#262626", "roughness": 0.4})
seg = L / 3
def body(lift=0):
    P = deck(Y + lift, E=E, T=36, R=6, nslat=9, slat_w=50, beam_h=12)
    for zc in (-seg, 0, seg):
        P.append(rb([140, KEEL, seg - 30], [0, CL + KEEL / 2 + lift, zc], "keel", 6))   # keel segment
        # cross arms that carry the outriggers
    for zs in (-1, 1):
        P.append(rb([640, 20, 60], [0, CL + KEEL - 10 + lift, zs * 750], "keel", 4))
    return P
PED = [(0, -660), (0, 0), (0, 660)]
OUT = [(sx * 300, zs * 750) for sx in (-1, 1) for zs in (-1, 1)]
def legs(yb_keel, yb_arm, drop=0):
    P = []
    for (x, z) in PED:
        top = yb_keel - drop
        P.append(rb([110, top - 6, 110], [x, (top - 6) / 2 + 3, z], "leg", 8))
        P.append(rb([100, 4, 100], [x, 2, z], "felt", 4))
        if drop: P.append(cyl(20, 26, [x, top + 13, z], "flange"))
    for (x, z) in OUT:
        top = yb_arm - drop
        P.append(cyl(14, top - 4, [x, (top - 4) / 2 + 2, z], "needle"))
        P.append(cyl(16, 4, [x, 2, z], "felt"))
        if drop: P.append(cyl(8, 20, [x, top + 10, z], "flange"))
    return P
ARM_B = CL + KEEL - 20
main = body() + legs(CL, ARM_B)
save("C3-08", scene(main + mattress(Y), m, zoom=1.12))
LIFT = 280
save("C3-08-structure", scene(body(LIFT) + legs(CL + LIFT, ARM_B + LIFT, drop=LIFT), m, zoom=1.1))
save("C3-08-robot", scene(main + mattress(Y) + robot(330, 330), m, zoom=1.15))
if __name__ == "__main__":
    render("C3-08", ["three-quarter", "front", "side"])
    render("C3-08-structure", ["three-quarter"])
    render("C3-08-robot", ["low"])
