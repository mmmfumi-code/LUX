from lib import *
# C3-06 SUMI: material. one-piece shell molded from bamboo fibre + bamboo charcoal composite (seamless, wipeable), natural bamboo slats, fin legs
CL = 125; E = 70; Y = CL + E
m = M(shell={"type": "matte", "color": "#55544f", "roughness": 0.75},
      slat={"type": "bamboo", "color": "#d6b98c"},
      fin={"type": "matte", "color": "#4a4945", "roughness": 0.75},
      seam={"type": "matte", "color": "#2f2e2b"})
legs = six_legs(170, (-660, 0, 660))
def body(lift=0):
    y = Y - E / 2 + lift
    P = []
    seg = L / 3
    for zc in (-seg, 0, seg):
        P.append(rb([W, E, seg - 3], [0, y, zc], "shell", 24))
        pitch = (seg - 70) / 9
        z0 = zc - seg / 2 + 35 + pitch / 2
        P.append(arr(9, [0, 0, pitch], rb([W - 110, 10, 50], [0, Y + 3 + lift, z0], "slat", 3)))
    return P
def fins(yb, drop=0):
    P = []
    for (x, z) in legs:
        top = yb - drop
        P.append(rb([24, top - 4, 200], [x, (top - 4) / 2 + 2, z], "fin", 8))
        P.append(rb([20, 3, 190], [x, 1.5, z], "felt", 1))
        if drop:
            P.append(rb([14, 26, 80], [x, top + 13, z], "flange", 3))
    return P
main = body() + fins(CL)
save("C3-06", scene(main + mattress(Y + 8), m, zoom=1.12))
LIFT = 260
save("C3-06-structure", scene(body(LIFT) + fins(CL + LIFT, drop=LIFT), m, zoom=1.1))
save("C3-06-robot", scene(main + mattress(Y + 8) + robot(400, 330), m, zoom=1.15))
if __name__ == "__main__":
    render("C3-06", ["three-quarter", "front", "side"])
    render("C3-06-structure", ["three-quarter"])
    render("C3-06-robot", ["low"])
