from lib import *
# C2-05 MOTO: function specialized "bedside power station". charcoal bamboo body, steel station with bamboo tops
Y = 230; RH = 80; RT = 40
m = M(side={"type": "bamboo", "color": "#4a4540", "grain": "z"},
      end={"type": "bamboo", "color": "#4a4540"},
      slat={"type": "bamboo", "color": "#58524b"},
      leg={"type": "metal", "color": "#1f1f1f", "roughness": 0.5},
      rail={"type": "metal", "color": "#9a9a96", "roughness": 0.35},
      acc={"type": "bamboo", "color": "#d6b88c"},
      steel={"type": "metal", "color": "#1f1f1f", "roughness": 0.5},
      outlet={"type": "matte", "color": "#f2f0ec"},
      slot={"type": "matte", "color": "#141414"},
      shade={"type": "metal", "color": "#1f1f1f", "roughness": 0.5},
      bulb={"type": "emissive", "color": "#ffd9a0", "intensity": 1.6})
GY = Y - 40
def body():
    return frame(Y, rh=RH, rt=RT, leg_type="sq", leg_size=44, leg_inset=110,
                 groove={"from_top": 40, "h": 12, "sides": "LRH"})
def station(lift=0, zs=0):
    zf = -L / 2 - 2 - zs
    P = []
    WS = 1300
    for sx in (-1, 1):
        P.append(rb([40, 830 - (GY - 30), 14], [sx * 420, (GY - 30 + 830) / 2 + lift, zf - 7], "steel", 3))
        P.append(rb([90, 12, 14], [sx * 420, GY + lift, zf + 7], "steel", 2))
        P.append(rb([40, 14, 250], [sx * 420, 612 + lift, zf - 14 - 125], "steel", 3))
        P.append(rb([40, 14, 280], [sx * 420, 790 + lift, zf - 14 - 140], "steel", 3))
    zc = zf - 14 - 140
    P.append(rb([WS, 24, 280], [0, 809 + lift, zc], "acc", 6))                  # top board
    P.append(rb([WS - 100, 18, 250], [0, 628 + lift, zf - 14 - 125], "acc", 5))  # lower shelf
    P.append(rb([240, 6, 16], [-300, 822 + lift, zc + 60], "slot", 2))            # phone slot
    P.append(rb([240, 6, 16], [300, 822 + lift, zc + 60], "slot", 2))
    # power bar under the top board, facing the bed
    P.append(rb([520, 60, 50], [0, 767 + lift, zf - 14 - 25], "steel", 6))
    for i, x in enumerate((-180, -60, 60, 180)):
        P.append(rb([70, 34, 4], [x, 767 + lift, zf - 14 + 1], "outlet", 3))
    # swing lamp at right end
    P += lamp(560, zc, 821 + lift, 1080 + lift, 260, dirx=-1, post="steel")
    # cable duct under the deck along the head rail
    P.append(rb([860, 50, 60], [0, Y - RH - 30 + lift, zf - 40], "steel", 6))
    return P
def side_hook(lift=0, out=0, z=-120):
    x0 = W / 2 + 3 + out
    return [rb([12, 150, 300], [x0 + 6, GY + 40 + lift, z], "steel", 3),
            rb([14, 12, 80], [x0 - 4, GY + lift, z], "steel", 2),
            rb([60, 12, 300], [x0 + 36, GY + 110 + lift, z], "acc", 3)]
def accessories(lift=0, out=0):
    return station(lift, zs=out * 1.5) + side_hook(lift, out)
save("C2-05", scene(body() + mattress(Y) + accessories(), m, zoom=1.08))
save("C2-05-bare", scene(body() + mattress(Y), m, zoom=1.15))
save("C2-05-structure", scene(body() + accessories(lift=200, out=170), m, zoom=1.05))
