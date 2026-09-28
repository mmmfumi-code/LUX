from lib import *
# C2-02 SEN: minimal. hidden rail (shadow-gap groove along the lower edge), thin frame, slim recessed steel legs
Y = 205; RH = 58; RT = 26
m = M(side={"type": "bamboo", "color": "#e2cba6", "grain": "z"},
      end={"type": "bamboo", "color": "#e2cba6"},
      slat={"type": "bamboo", "color": "#e6d2b0"},
      leg={"type": "metal", "color": "#1f1f1f", "roughness": 0.5},
      rail={"type": "matte", "color": "#3b352e", "roughness": 0.9},
      acc={"type": "bamboo", "color": "#e2cba6"},
      rod={"type": "metal", "color": "#1f1f1f", "roughness": 0.5},
      felt={"type": "fabric", "color": "#3a3835"})
GY = Y - RH + 5   # groove sits at the very lower edge = reads as a shadow line
legs = [(sx * 340, z) for sx in (-1, 1) for z in (-660, 0, 660)]
def body():
    return frame(Y, rh=RH, rt=RT, R=3, legs=legs, leg_type="round", leg_size=32, nslat=12, slat_w=40,
                 groove={"from_top": RH - 5, "h": 10, "sides": "LRH"})
def accessories(lift=0, out=0):
    P = []
    zb = -L / 2 - 10 - out * 1.5
    # line headboard: one bamboo plank on two thin rods
    for sx in (-1, 1):
        P.append(cyl(6, 820 - GY, [sx * 380, (GY + 820) / 2 + lift, zb], "rod"))
        P.append(rb([40, 10, 14], [sx * 380, GY + lift, zb + 8], "rod", 2))
    P.append(rb([1000, 110, 18], [0, 790 + lift, zb - 4], "acc", 4))
    # side tray: 12mm plate on a thin steel L
    x0 = W / 2 + 4 + out
    zt = -620
    P.append(rb([8, Y + 300 - GY, 30], [x0 + 4, (GY + Y + 300) / 2 + lift, zt], "rod", 2))
    P.append(rb([260, 8, 30], [x0 + 130, Y + 300 - 16 + lift, zt], "rod", 2))
    P.append(rb([300, 12, 340], [x0 + 150, Y + 300 - 6 + lift, zt], "acc", 3))
    P.append(rb([10, 10, 40], [x0 - 2, GY + lift, zt], "rod", 2))
    return P
save("C2-02", scene(body() + mattress(Y) + accessories(), m, zoom=1.1))
save("C2-02-bare", scene(body() + mattress(Y), m, zoom=1.15))
save("C2-02-structure", scene(body() + accessories(lift=200, out=160), m, zoom=1.1))
