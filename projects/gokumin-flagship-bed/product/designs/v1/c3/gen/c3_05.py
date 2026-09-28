from lib import *
# C3-05 NOBI: function. one telescopic leg unit = 3 clearances (125/180/250) by push-button; under-bed rolling trays at 180/250
E = 70
m = M(edge={"type": "bamboo", "color": "#c9a878"},
      edge_z={"type": "bamboo", "color": "#c9a878", "grain": "z"},
      slat={"type": "bamboo", "color": "#d4b687"},
      outer={"type": "metal", "color": "#3a3d40", "roughness": 0.45},
      inner={"type": "metal", "color": "#b9bcbf", "roughness": 0.3},
      btn={"type": "matte", "color": "#d98a3a"},
      tray={"type": "matte", "color": "#dedbd5", "roughness": 0.85},
      trayfront={"type": "bamboo", "color": "#c9a878"},
      caster={"type": "matte", "color": "#2a2a2a"})
legs = six_legs(160, (-680, 0, 680))
def tele(x, z, cl, top_gap=0):
    # outer sleeve fixed 100mm under the socket, inner tube slides out below
    top = cl - top_gap
    P = [cyl(34, 8, [x, top - 4, z], "flange"),
         cyl(28, 100, [x, top - 58, z], "outer"),
         cyl(33, 12, [x, top - 20, z], "btn")]      # push-button collar
    inner_h = top - 108
    if inner_h > 0:
        P.append(cyl(22, inner_h, [x, inner_h / 2 + 4, z], "inner"))
    P.append(cyl(26, 4, [x, 2, z], "felt"))
    if top_gap:
        P.append(cyl(12, 26, [x, top + 13, z], "flange"))
    return P
def body(cl, lift=0):
    return deck(cl + E + lift, E=E, T=40, R=8)
def trays(cl, pull=380):
    # two rolling trays that slide out sideways (x), between the leg rows; one pulled out toward the camera
    P = []
    th = cl - 30
    for i, zc in enumerate((-340, 340)):
        px = 60 + (pull if i == 1 else 0)
        P.append(rb([640, th - 30, 560], [px, 20 + (th - 30) / 2 + 4, zc], "tray", 10))
        P.append(rb([16, th - 26, 560], [px + 328, 20 + (th - 26) / 2 + 2, zc], "trayfront", 5))
        for cx in (-1, 1):
            for cz in (-1, 1):
                P.append(cyl(14, 20, [px + cx * 280, 12, zc + cz * 240], "caster", rot=[90, 0, 0]))
    return P
CL = 180
main = body(CL) + sum([tele(x, z, CL) for (x, z) in legs], [])
save("C3-05", scene(main + mattress(CL + E) + trays(CL), m, zoom=1.12))
# structure: deck lifted; legs shown at the three settings (foot pair 125 / middle pair 180 / head pair 250)
LIFT = 300
st = body(250, LIFT - 125)
for (x, z) in legs:
    cl = {680: 125, 0: 180, -680: 250}[z]
    st += tele(x, z, cl)
save("C3-05-structure", scene(st, m, zoom=1.1))
low = body(125) + sum([tele(x, z, 125) for (x, z) in legs], [])
save("C3-05-robot", scene(low + mattress(125 + E) + robot(400, 330), m, zoom=1.15))
if __name__ == "__main__":
    render("C3-05", ["three-quarter", "front", "side"])
    render("C3-05-structure", ["three-quarter"])
    render("C3-05-robot", ["low"])
