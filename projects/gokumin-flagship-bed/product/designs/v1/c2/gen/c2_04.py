from lib import *
# C2-04 TSUKI: trend. graige fabric sleeves clipped on the rail (dress-up), arched fabric headboard, round moon table
Y = 235; RH = 90; RT = 40
m = M(side={"type": "bamboo", "color": "#d6b98f", "grain": "z"},
      end={"type": "bamboo", "color": "#d6b98f"},
      slat={"type": "bamboo", "color": "#dcc09a"},
      leg={"type": "bamboo", "color": "#cdb088"},
      rail={"type": "matte", "color": "#9c8e7c"},
      fab={"type": "fabric", "color": "#9d9286"},
      fab2={"type": "fabric", "color": "#a99e91"},
      acc={"type": "bamboo", "color": "#d6b98f"},
      steel={"type": "metal", "color": "#8f877c", "roughness": 0.5})
GY = Y - 45
def body():
    return frame(Y, rh=RH, rt=RT, R=10, leg_type="round", leg_size=56, leg_inset=120,
                 groove={"from_top": 45, "h": 12, "sides": "LRH"})
def sleeves(lift=0, out=0):
    P = []
    seg = L / 3
    for zc in (-seg, 0, seg):
        for sx in (1, -1):
            P.append(rb([22, RH + 16, seg - 14], [sx * (W / 2 + 11 + out), Y - RH / 2 + 4 + lift, zc], "fab", 11))
    P.append(rb([W + 44, RH + 16, 22], [0, Y - RH / 2 + 4 + lift, L / 2 + 11 + out], "fab", 11))
    return P
def arch(lift=0, zs=0):
    zf = -L / 2 - 2 - zs
    P = []
    for sx in (-1, 1):
        P.append(rb([70, Y + 120 - GY + 30, 12], [sx * 300, (GY - 30 + Y + 120) / 2 + lift, zf - 6], "steel", 3))
        P.append(rb([90, 12, 14], [sx * 300, GY + lift, zf + 7], "steel", 2))
    zp = zf - 12 - 40
    P.append(bx([1000, 560, 80], [0, Y + 60 + 280 + lift, zp], "fab2"))
    P.append(grp([cyl(500, 80, [0, 0, 0], "fab2", rot=[90, 0, 0])], pos=[0, Y + 620 + lift, zp], scale=[1, 0.46, 1]))
    return P
def moon_table(lift=0, out=0, z=-640):
    x0 = W / 2 + 3 + out
    top = Y + 290
    return [rb([12, top - GY + 30, 90], [x0 + 6, (GY - 30 + top) / 2 + lift, z], "steel", 3),
            rb([14, 12, 80], [x0 - 4, GY + lift, z], "steel", 2),
            rb([200, 40, 12], [x0 + 100, top - 44 + lift, z], "steel", 3),
            cyl(215, 26, [x0 + 215, top - 13 + lift, z], "acc"),
            cyl(200, 3, [x0 + 215, top + 1 + lift, z], "fab")]
def accessories(lift=0, out=0):
    return sleeves(lift * 0.0, out * 0.9) + arch(lift, zs=out * 1.5) + moon_table(lift, out)
save("C2-04", scene(body() + mattress(Y) + accessories(), m, zoom=1.1))
save("C2-04-bare", scene(body() + mattress(Y), m, zoom=1.15))
save("C2-04-structure", scene(body() + accessories(lift=200, out=170), m, zoom=1.05))
