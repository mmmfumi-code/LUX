from lib import *
# C2-08 WA: structure innovation. the perimeter aluminium profile IS the rail (double groove, all around,
# even the legs hang on it). bamboo slats drop in. accessories: foot bench, under-bed hanging tray, side table
Y = 225; RH = 64; RT = 30
m = M(side={"type": "metal", "color": "#5b5249", "roughness": 0.4, "metalness": 0.7},
      end={"type": "metal", "color": "#5b5249", "roughness": 0.4, "metalness": 0.7},
      slat={"type": "bamboo", "color": "#d9b88a"},
      leg={"type": "bamboo", "color": "#c9a577"},
      rail={"type": "matte", "color": "#2a2622"},
      acc={"type": "bamboo", "color": "#d9b88a"},
      acc_z={"type": "bamboo", "color": "#d9b88a", "grain": "z"},
      steel={"type": "metal", "color": "#5b5249", "roughness": 0.4, "metalness": 0.7},
      bin={"type": "fabric", "color": "#6f6a62"},
      cush={"type": "fabric", "color": "#8e948c"})
G1 = Y - 18; G2 = Y - RH + 16
def body():
    legs_pos = []
    P = frame(Y, rh=RH, rt=RT, R=14, legs=[], nslat=6, slat_w=80, beam="steel", cross=False,
              groove={"from_top": 18, "h": 8, "sides": "LRHF"})
    P += frame(Y, rh=RH, rt=RT, R=14, legs=[], nslat=1, beam=None, cross=False,
               groove={"from_top": RH - 16, "h": 8, "sides": "LRHF"})[-8:]
    # legs hanging on the lower groove (outer face), movable along the rail
    for sx in (-1, 1):
        for z in (-800, -330, 330, 800):
            P.append(rb([22, Y + 4, 110], [sx * (W / 2 + 12), (Y + 4) / 2, z], "leg", 6))
            P.append(rb([14, 10, 30], [sx * (W / 2 + 3), G2, z], "rail", 2))
            P.append(rb([22, 5, 100], [sx * (W / 2 + 12), 2.5, z], "felt", 2))
    return P
def foot_bench(lift=0, out=0):
    zf = L / 2 + 2 + out * 1.5
    D = 360
    P = []
    for sx in (-1, 1):
        P.append(rb([60, 12, 14], [sx * 360, G1 + lift, zf - 7], "rail", 2))
        P.append(rb([60, 440 - (G2 - 20), 12], [sx * 360, (G2 - 20 + 440) / 2 + lift, zf + 6], "steel", 3))
        P.append(rb([36, 440, 90], [sx * 470, 220 + lift, zf + D - 50], "leg", 6))    # front legs
    P.append(rb([1000, 36, D], [0, 440 + 18 + lift, zf + D / 2 + 6], "acc", 8))
    P.append(rb([940, 50, D - 40], [0, 440 + 36 + 25 + lift, zf + D / 2 + 6], "cush", 20))
    return P
def under_tray(lift=0, out=0):
    x0 = W / 2 + 18 + out
    P = []
    for z in (-160, 160):
        P.append(rb([14, 12, 60], [x0 - 10, G2 + lift, z], "rail", 2))
        P.append(rb([10, G2 - 40, 50], [x0 - 4, G2 / 2 + 20 + lift, z], "steel", 3))
    P.append(rb([700, 14, 540], [x0 - 360, 40 + lift, 0], "steel", 4))
    P.append(rb([660, 100, 500], [x0 - 360, 97 + lift, 0], "bin", 14))
    return P
def accessories(lift=0, out=0):
    P = foot_bench(lift, out) + under_tray(lift * 0, out * 3.5)
    P += side_table(-620, G1, Y + 300, top="acc", br="steel", depth=360, width=380, side=1, lift=lift, out=out + 16)
    return P
save("C2-08", scene(body() + mattress(Y) + accessories(), m, zoom=1.02))
save("C2-08-bare", scene(body() + mattress(Y), m, zoom=1.15))
save("C2-08-structure", scene(body() + accessories(lift=200, out=170), m, zoom=1.0))
