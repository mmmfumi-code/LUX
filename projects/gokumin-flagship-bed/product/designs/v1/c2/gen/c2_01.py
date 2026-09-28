from lib import *
# C2-01 SODATSU: royal road. natural bamboo, rail on both sides + head (same-tone darker line)
Y = 230; RH = 80
m = M(side={"type": "bamboo", "color": "#d9b88a", "grain": "z"},
      end={"type": "bamboo", "color": "#d9b88a"},
      slat={"type": "bamboo", "color": "#dcc09a"},
      leg={"type": "bamboo", "color": "#cfae80"},
      rail={"type": "matte", "color": "#8c6f4c", "roughness": 0.6},
      acc={"type": "bamboo", "color": "#d9b88a"},
      acc_z={"type": "bamboo", "color": "#d9b88a", "grain": "z"},
      shade={"type": "matte", "color": "#efe9df"},
      bulb={"type": "emissive", "color": "#ffd9a0", "intensity": 1.6},
      outlet={"type": "matte", "color": "#f2f0ec"},
      steel={"type": "metal", "color": "#2a2a2a", "roughness": 0.45})
GY = Y - 40
def body():
    return frame(Y, rh=RH, rt=40, groove={"from_top": 40, "h": 12, "sides": "LRH"})
def accessories(lift=0, out=0):
    P = []
    P += head_shelf(GY, 600, H=190, D=230, lift=lift, zs=out*1.5)
    # outlet + USB block on shelf top front
    P.append(rb([150, 14, 60], [300, 600 + 190 + 7 + lift, -L / 2 - 60 - out*1.5], "outlet", 3))
    P += side_table(-560, GY, Y + 300, side=1, lift=lift, out=out)
    P += lamp(W / 2 + 12 + out, -640, GY - 30, 980, 250, lift=lift)
    P.append(rb([14, 12, 40], [W / 2 + 4 + out, GY + lift, -640], "steel", 2))
    return P
save("C2-01", scene(body() + mattress(Y) + accessories(), m, zoom=1.1))
save("C2-01-bare", scene(body() + mattress(Y), m, zoom=1.15))
save("C2-01-structure", scene(body() + accessories(lift=200, out=160), m, zoom=1.1))
