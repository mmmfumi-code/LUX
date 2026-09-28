from lib import *
# C2-09 TSUNAGU: a little challenging. the bed grows in SIZE: a half-width side deck hooks into the side rail
# -> single + lounge (daybed) now, or single + half = wider bed later
Y = 230; RH = 80; RT = 40
m = M(side={"type": "bamboo", "color": "#d4b284", "grain": "z"},
      end={"type": "bamboo", "color": "#d4b284"},
      slat={"type": "bamboo", "color": "#dcc09a"},
      leg={"type": "bamboo", "color": "#c9a677"},
      rail={"type": "matte", "color": "#7d6446"},
      steel={"type": "metal", "color": "#2a2a2a", "roughness": 0.45},
      cush={"type": "fabric", "color": "#9aa595"},
      cush2={"type": "fabric", "color": "#aab3a6"})
GY = Y - 40
EW = 620   # extension deck width
def body():
    return frame(Y, rh=RH, rt=RT, groove={"from_top": 40, "h": 12, "sides": "LRH"})
def extension(gap=0, lift=0):
    cx = W / 2 + EW / 2 + gap
    P = []
    ext = frame(Y, w=EW, rh=RH, rt=RT, nslat=6, slat_w=62, leg_inset=90,
                legs=[(sx * (EW / 2 - 90), z) for sx in (-1, 1) for z in (-800, -330, 330, 800)],
                groove={"from_top": 40, "h": 12, "sides": "R"})
    P.append(grp(ext, pos=[cx, lift, 0]))
    # connector plates (hook into both side rails) at 3 points
    for z in (-660, 0, 660):
        P.append(rb([60 + gap * 0.0, 14, 120], [W / 2 + 10 + gap * 0.5, GY + lift * 0.5, z], "steel", 3))
    # lounge cushion + bolsters
    P.append(rb([EW - 20, 150, 1940], [cx, Y + 75 + lift, 0], "cush", 40))
    P.append(cyl(95, 1900, [cx + EW / 2 - 110, Y + 150 + 95 + lift, 0], "cush2", rot=[90, 0, 0]))
    P.append(rb([EW - 180, 120, 380], [cx - 40, Y + 150 + 60 + lift, -780], "cush2", 50))
    return P
save("C2-09", scene(body() + mattress(Y) + extension(), m, zoom=1.05))
save("C2-09-bare", scene(body() + mattress(Y), m, zoom=1.15))
st = body() + extension(gap=260, lift=0)
# in the structure view remove cushions to show the deck: rebuild without cushions
def extension_deck(gap):
    cx = W / 2 + EW / 2 + gap
    ext = frame(Y, w=EW, rh=RH, rt=RT, nslat=6, slat_w=62,
                legs=[(sx * (EW / 2 - 90), z) for sx in (-1, 1) for z in (-800, -330, 330, 800)],
                groove={"from_top": 40, "h": 12, "sides": "R"})
    P = [grp(ext, pos=[cx, 0, 0])]
    for z in (-660, 0, 660):
        P.append(rb([150, 14, 120], [W / 2 + gap / 2, GY + 60, z], "steel", 3))
        P.append(rb([14, 40, 120], [W / 2 + gap / 2 - 70, GY + 40, z], "steel", 3))
        P.append(rb([14, 40, 120], [W / 2 + gap / 2 + 70, GY + 40, z], "steel", 3))
    return P
save("C2-09-structure", scene(body() + extension_deck(300), m, zoom=1.05))
