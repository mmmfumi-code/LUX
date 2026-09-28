from lib import *
# C3-04 KUMO: trend. greige tone-on-tone, pebble-rounded plan (R150 corners), soft 80mm edge, 6 pebble legs
CL = 125; E = 64; Y = CL + E
DW, DL, PR = 1040, 2010, 130
m = M(edge={"type": "matte", "color": "#a99d8c", "roughness": 0.85},
      slat={"type": "bamboo", "color": "#dcc29c"},
      leg={"type": "matte", "color": "#8f8475", "roughness": 0.8},
      seam={"type": "matte", "color": "#8d8376"})
legs = six_legs(190, (-660, 0, 660))
def body(lift=0):
    y = Y - E / 2 + lift
    P = [rb([DW, E, DL - 2 * PR], [0, y, 0], "edge", 5),
         rb([DW - 2 * PR, E, DL], [0, y, 0], "edge", 5)]
    for sx in (-1, 1):
        for sz in (-1, 1):
            P.append(cyl(PR, E, [sx * (DW / 2 - PR), y, sz * (DL / 2 - PR)], "edge"))
    seg = DL / 3
    for zc in (-seg, 0, seg):
        pitch = (seg - 60) / 8
        z0 = zc - seg / 2 + 30 + pitch / 2
        P.append(arr(8, [0, 0, pitch], rb([DW - 170, 10, 58], [0, Y + 4 + lift, z0], "slat", 3)))
    for zs in (-1, 1):
        for sx in (-1, 1):
            P.append(bx([3, E - 18, 3], [sx * (DW / 2 + 0.5), y, zs * seg / 2], "seam"))
        P.append(bx([DW - 40, 2, 4], [0, Y + 0.5 + lift, zs * seg / 2], "seam"))
    return P
def pebbles(yb, drop=0):
    P = []
    for (x, z) in legs:
        top = yb - drop
        P.append(rb([96, top - 6, 96], [x, (top - 6) / 2 + 3, z], "leg", 40))
        P.append(cyl(40, 4, [x, 2, z], "felt"))
        if drop:
            P.append(cyl(16, 26, [x, top + 13, z], "flange"))
    return P
main = body() + pebbles(CL)
save("C3-04", scene(main + mattress(Y + 9), m, zoom=1.12))
LIFT = 260
save("C3-04-structure", scene(body(LIFT) + pebbles(CL + LIFT, drop=LIFT), m, zoom=1.1))
save("C3-04-robot", scene(main + mattress(Y + 9) + robot(400, 330), m, zoom=1.15))
if __name__ == "__main__":
    render("C3-04", ["three-quarter", "front", "side"])
    render("C3-04-structure", ["three-quarter"])
    render("C3-04-robot", ["low"])
