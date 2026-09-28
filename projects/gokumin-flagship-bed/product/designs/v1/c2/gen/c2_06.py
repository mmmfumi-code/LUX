from lib import *
# C2-06 AJIRO: material. susudake-tone frame, ajiro-woven bamboo headboard, woven basket nightstand, woven lamp
Y = 230; RH = 84; RT = 42
m = M(side={"type": "bamboo", "color": "#8b6a48", "grain": "z"},
      end={"type": "bamboo", "color": "#8b6a48"},
      slat={"type": "bamboo", "color": "#9a7853"},
      leg={"type": "bamboo", "color": "#7a5c3e"},
      rail={"type": "matte", "color": "#3e3024"},
      acc={"type": "bamboo", "color": "#8b6a48"},
      w1={"type": "bamboo", "color": "#e0c89c"},
      w2={"type": "bamboo", "color": "#a9845a"},
      w1z={"type": "bamboo", "color": "#e0c89c", "grain": "z"},
      steel={"type": "metal", "color": "#2a2a2a", "roughness": 0.45},
      shade={"type": "bamboo", "color": "#e0c89c"},
      bulb={"type": "emissive", "color": "#ffd9a0", "intensity": 1.6})
GY = Y - 42
def body():
    return frame(Y, rh=RH, rt=RT, R=10, leg_size=56, leg_inset=105,
                 groove={"from_top": 42, "h": 12, "sides": "LRH"})
def weave_panel(cx, cy, cz, w, h, cell=90, t=12):
    # basket-weave ajiro: each cell holds 3 strips, orientation alternates like a checkerboard
    P = []
    nx, ny = int(w // cell), int(h // cell)
    x0 = cx - nx * cell / 2 + cell / 2
    y0 = cy - ny * cell / 2 + cell / 2
    sw = cell / 3
    for i in range(nx):
        for j in range(ny):
            horiz = (i + j) % 2 == 0
            for k in range(3):
                mat = "w1" if (k + i + j) % 3 else "w2"
                off = (k - 1) * sw
                if horiz:
                    P.append(rb([cell - 4, sw - 3, t], [x0 + i * cell, y0 + j * cell + off, cz + 1], mat, 2))
                else:
                    P.append(rb([sw - 3, cell - 4, t], [x0 + i * cell + off, y0 + j * cell, cz - 1], mat, 2))
    return P
def headboard(lift=0, zs=0):
    zf = -L / 2 - 2 - zs
    P = tongues_head(GY, zf, lift=lift)
    H0, H1 = GY - 40, 1000
    # bamboo frame (outer) + woven infill
    P.append(rb([1000, H1 - H0, 36], [0, (H0 + H1) / 2 + lift, zf - 18], "acc", 10))
    P += weave_panel(0, (Y + 60 + H1 - 40) / 2 + lift, zf + 2, 910, H1 - 40 - (Y + 60))
    return P
def basket(lift=0, out=0, z=-640):
    x0 = W / 2 + 3 + out
    top = Y + 290
    P = [rb([12, top - GY + 30, 90], [x0 + 6, (GY - 30 + top) / 2 + lift, z], "steel", 3),
         rb([14, 12, 80], [x0 - 4, GY + lift, z], "steel", 2)]
    bw, bh, bd = 360, 260, 380
    cx = x0 + 12 + bw / 2
    yb = top - bh
    P.append(rb([bw, 20, bd], [cx, yb + 10 + lift, z], "acc", 6))        # bottom
    P.append(rb([bw, 16, bd], [cx, top - 8 + lift, z], "acc", 6))        # top board
    # woven walls (vertical strips alternating)
    n = 9
    for i in range(n):
        mat = "w1" if i % 2 == 0 else "w2"
        P.append(rb([bw / n - 4, bh - 36, 10], [cx - bw / 2 + (i + 0.5) * bw / n, yb + bh / 2 + lift, z + bd / 2 - 6], mat, 2))
        mat = "w2" if i % 2 == 0 else "w1"
    for i in range(9):
        mat = "w1" if i % 2 == 0 else "w2"
        P.append(rb([10, bh - 36, bd / 9 - 4], [cx + bw / 2 - 6, yb + bh / 2 + lift, z - bd / 2 + (i + 0.5) * bd / 9], mat, 2))
    return P
def woven_lamp(lift=0, out=0):
    x = W / 2 + 12 + out
    z = -860
    P = [cyl(9, 1000 - (GY - 30), [x, (GY - 30 + 1000) / 2 + lift, z], "steel"),
         rb([14, 12, 40], [x - 8, GY + lift, z], "steel", 2),
         cyl(8, 240, [x - 120, 1000 + lift, z], "steel", rot=[0, 0, 90])]
    P.append(cyl(0, 170, [x - 240, 1000 - 70 + lift, z], "shade", rt=70, rbm=95))
    P.append(cyl(60, 6, [x - 240, 1000 - 158 + lift, z], "bulb"))
    return P
def accessories(lift=0, out=0):
    return headboard(lift, zs=out * 1.5) + basket(lift, out) + woven_lamp(lift, out)
save("C2-06", scene(body() + mattress(Y) + accessories(), m, zoom=1.1))
save("C2-06-bare", scene(body() + mattress(Y), m, zoom=1.15))
save("C2-06-structure", scene(body() + accessories(lift=200, out=170), m, zoom=1.05))
