from lib import *
# C2-03 YADO: premium hotel. carbonized bamboo thick frame, upholstered headboard + two hanging nightboxes
Y = 245; RH = 100; RT = 50
m = M(side={"type": "bamboo", "color": "#6a4630", "grain": "z"},
      end={"type": "bamboo", "color": "#6a4630"},
      slat={"type": "bamboo", "color": "#7a5238"},
      leg={"type": "bamboo", "color": "#4a3122"},
      rail={"type": "metal", "color": "#8a6a3a", "roughness": 0.4},
      acc={"type": "bamboo", "color": "#6a4630"},
      acc_d={"type": "bamboo", "color": "#4a3122"},
      fab={"type": "fabric", "color": "#b9ada0"},
      steel={"type": "metal", "color": "#2a2a2a", "roughness": 0.45},
      brass={"type": "metal", "color": "#a8844a", "roughness": 0.35})
GY = Y - 50
def body():
    return frame(Y, rh=RH, rt=RT, R=12, leg_size=64, leg_inset=120,
                 groove={"from_top": 50, "h": 10, "sides": "LRH"})
def nightbox(side, z, lift=0, out=0):
    x0 = side * (W / 2 + 3 + out)
    top = Y + 300
    P = [rb([12, top - GY + 30, 110], [x0 + side * 6, (GY - 30 + top) / 2 + lift, z], "steel", 3),
         rb([14, 12, 80], [x0 - side * 4, GY + lift, z], "steel", 2)]
    bw, bh, bd = 440, 200, 400   # x-out, height, z-depth
    cx = x0 + side * (12 + bw / 2)
    P.append(rb([bw, bh, bd], [cx, top - bh / 2 + lift, z], "acc", 10))
    P.append(rb([bw - 40, 4, bd - 40], [cx, top + 2 + lift, z], "acc_d", 2))       # inlay top
    P.append(rb([bw - 60, 90, 6], [cx, top - bh / 2 - 20 + lift, z + bd / 2 + 1], "acc_d", 3))  # drawer front
    P.append(rb([80, 8, 8], [cx, top - bh / 2 + 10 + lift, z + bd / 2 + 6], "brass", 2))       # pull
    return P
def headboard(lift=0, zs=0):
    zf = -L / 2 - 2 - zs
    P = []
    # steel L-brackets from the head rail
    for sx in (-1, 1):
        P.append(rb([60, Y + 160 - GY + 30, 12], [sx * 320, (GY - 30 + Y + 160) / 2 + lift, zf - 6], "steel", 3))
        P.append(rb([90, 12, 14], [sx * 320, GY + lift, zf + 7], "steel", 2))
    P.append(rb([60, 12, 90], [-320, Y + 150 + lift, zf - 50], "steel", 2))
    P.append(rb([60, 12, 90], [320, Y + 150 + lift, zf - 50], "steel", 2))
    # frame panel (bamboo) + three upholstered cushions
    zp = zf - 95
    P.append(rb([1080, 980, 40], [0, Y + 140 + 490 + lift, zp - 20], "acc", 14))
    for i, x in enumerate((-345, 0, 345)):
        P.append(rb([330, 820, 80], [x, Y + 200 + 410 + lift, zp + 40], "fab", 36))
    return P
def accessories(lift=0, out=0):
    return headboard(lift, zs=out * 1.5) + nightbox(1, -700, lift, out) + nightbox(-1, -700, lift, out)
save("C2-03", scene(body() + mattress(Y) + accessories(), m, zoom=1.08))
save("C2-03-bare", scene(body() + mattress(Y), m, zoom=1.15))
save("C2-03-structure", scene(body() + accessories(lift=200, out=170), m, zoom=1.05))
