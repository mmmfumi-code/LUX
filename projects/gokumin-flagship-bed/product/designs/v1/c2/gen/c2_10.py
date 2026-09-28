from lib import *
# C2-10 HEYA: concept. four bamboo posts plugged into the rail corners grow the bed into a small room:
# shelf wall at the head, louvre roof, hanging desk, linen curtain, pendant light
Y = 230; RH = 80; RT = 40
m = M(side={"type": "bamboo", "color": "#c7a273", "grain": "z"},
      end={"type": "bamboo", "color": "#c7a273"},
      slat={"type": "bamboo", "color": "#d3b184"},
      leg={"type": "bamboo", "color": "#b8925f"},
      rail={"type": "matte", "color": "#5e4832"},
      post={"type": "bamboo", "color": "#b8925f"},
      post_z={"type": "bamboo", "color": "#b8925f", "grain": "z"},
      acc={"type": "bamboo", "color": "#d3b184"},
      linen={"type": "fabric", "color": "#d8d0c2"},
      steel={"type": "metal", "color": "#2a2a2a", "roughness": 0.45},
      shade={"type": "bamboo", "color": "#e0c89c"},
      bulb={"type": "emissive", "color": "#ffd9a0", "intensity": 1.8})
GY = Y - 40
H = 2000
def body():
    return frame(Y, rh=RH, rt=RT, groove={"from_top": 40, "h": 12, "sides": "LRHF"})
def room(lift=0, out=0):
    P = []
    px = W / 2 + 30 + out
    pz = L / 2 + 30 + out * 1.3
    for sx in (-1, 1):
        for sz in (-1, 1):
            P.append(rb([56, H, 56], [sx * px, H / 2 + lift, sz * pz], "post", 8))
            P.append(rb([14, 12, 60], [sx * (W / 2 + 4 + out), GY + lift, sz * (L / 2 - 40)], "steel", 2))  # rail tongue
    # top beams
    for sx in (-1, 1):
        P.append(rb([50, 60, 2 * pz + 56], [sx * px, H - 30 + lift, 0], "post_z", 8))
    for sz in (-1, 1):
        P.append(rb([2 * px + 56, 60, 50], [0, H - 30 + lift, sz * pz], "post", 8))
    # louvre roof over the head half
    P.append(arr(7, [0, 0, 130], rb([2 * px, 18, 70], [0, H + 9 + lift, -pz + 90], "acc", 4)))
    # shelf wall between the head posts
    for y in (760, 1100, 1440):
        P.append(rb([2 * px - 56, 22, 240], [0, y + lift, -pz - 90], "acc", 5))
    P.append(rb([2 * px - 56, 900, 14], [0, 1100 + lift, -pz - 205], "acc", 3))
    # desk at the foot end: board between the foot posts, facing away from the bed, on steel brackets
    for sx in (-1, 1):
        P.append(rb([14, 180, 380], [sx * (px - 10), 740 - 13 - 90 + lift, pz + 28 + 200], "steel", 3))
    P.append(rb([2 * px + 56, 26, 460], [0, 740 + lift, pz + 28 + 230 - 28], "acc", 6))
    P.append(rb([2 * px - 56, 160, 16], [0, 740 + 13 + 80 + lift, pz + 28 + 8], "acc", 3))   # low back rail
    # linen curtain on the left side (head half)
    P.append(rb([16, H - 300, 1000], [-px, (H - 300) / 2 + 250 + lift, -pz + 560], "linen", 6))
    # pendant
    P.append(cyl(3, 400, [0, H - 60 - 200 + lift, -560], "steel"))
    P.append(cyl(0, 150, [0, H - 60 - 400 - 60 + lift, -560], "shade", rt=60, rbm=150))
    P.append(cyl(130, 6, [0, H - 60 - 400 - 138 + lift, -560], "bulb"))
    return P
save("C2-10", scene(body() + mattress(Y) + room(), m, zoom=1.0, margin=0.88))
save("C2-10-bare", scene(body() + mattress(Y), m, zoom=1.15))
save("C2-10-structure", scene(body() + room(lift=150, out=150), m, zoom=0.98, margin=0.88))
