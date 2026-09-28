from lib import *
# C3-10 KUU: concept. the bed appears to hover: clear polycarbonate legs recessed 250mm, 150mm clearance,
# and the robot vacuum lives under the bed (charging dock built into the foot end).
CL = 150; E = 60; Y = CL + E
m = M(edge={"type": "bamboo", "color": "#e0c69e"},
      edge_z={"type": "bamboo", "color": "#e0c69e", "grain": "z"},
      slat={"type": "bamboo", "color": "#e6cfab"},
      under={"type": "matte", "color": "#f1ede6", "roughness": 0.8},
      clear={"type": "glass", "color": "#e8f1f3"},
      dock={"type": "matte", "color": "#e6e2db", "roughness": 0.7},
      dockpad={"type": "metal", "color": "#9a9a98", "roughness": 0.4})
legs = [(sx * 250, z) for sx in (-1, 1) for z in (-560, 560)]
def body(lift=0):
    return deck(Y + lift, E=E, T=34, R=10, nslat=9, slat_w=52)
def clear_legs(yb, drop=0):
    P = []
    for (x, z) in legs:
        top = yb - drop
        P.append(cyl(40, top - 4, [x, (top - 4) / 2 + 2, z], "clear"))
        P.append(cyl(36, 3, [x, 1.5, z], "clear"))
        if drop:
            P.append(cyl(14, 26, [x, top + 13, z], "clear"))
    return P
def dock(park=True):
    # low charging dock hung from the underside at the foot end (nothing stands on the floor except the robot)
    P = [rb([360, 40, 90], [0, CL - 20, L / 2 - 170], "dock", 12),
         rb([120, 6, 30], [0, CL - 43, L / 2 - 200], "dockpad", 3)]
    if park:
        P += robot(0, L / 2 - 400)
    return P
main = body() + clear_legs(CL) + dock()
save("C3-10", scene(main + mattress(Y), m, zoom=1.12))
LIFT = 260
save("C3-10-structure", scene(body(LIFT) + clear_legs(CL + LIFT, drop=LIFT) + [grp(dock(False), (0, LIFT, 0))], m, zoom=1.1))
save("C3-10-robot", scene(main + mattress(Y), m, zoom=1.15))
if __name__ == "__main__":
    render("C3-10", ["three-quarter", "front", "side"])
    render("C3-10-structure", ["three-quarter"])
    render("C3-10-robot", ["low"])
