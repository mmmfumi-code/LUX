from lib import *
# C2-07 MEMORI: UX. walnut-tone body, light aluminium rail band with 100mm scale marks, green lock tabs,
# rail on all four sides (foot too), one-hand lever accessories
Y = 230; RH = 84; RT = 42
m = M(side={"type": "bamboo", "color": "#6b4a33", "grain": "z"},
      end={"type": "bamboo", "color": "#6b4a33"},
      slat={"type": "bamboo", "color": "#7a5840"},
      leg={"type": "bamboo", "color": "#5a3e2b"},
      rail={"type": "metal", "color": "#cfcac0", "roughness": 0.35, "metalness": 0.6},
      tick={"type": "matte", "color": "#2a2622"},
      lock={"type": "matte", "color": "#6f9a74"},
      acc={"type": "bamboo", "color": "#6b4a33"},
      steel={"type": "metal", "color": "#cfcac0", "roughness": 0.35, "metalness": 0.6},
      shade={"type": "matte", "color": "#efe9df"},
      bulb={"type": "emissive", "color": "#ffd9a0", "intensity": 1.6},
      throw={"type": "fabric", "color": "#8a8f86"})
GY = Y - 42
def body():
    P = frame(Y, rh=RH, rt=RT, R=10, leg_size=54, leg_inset=100,
              groove={"from_top": 42, "h": 18, "sides": "LRHF"})
    seg = L / 3
    for zc in (-seg, 0, seg):
        for sx in (1, -1):
            P.append(arr(6, [0, 0, 100], bx([3, 8, 4], [sx * (W / 2 + 2.3), GY + 13, zc - 250], "tick")))
    P.append(arr(9, [100, 0, 0], bx([4, 8, 3], [-400, GY + 13, L / 2 + 2.3], "tick")))
    return P
def lock_tab(x, y, z, side=1, axis="x"):
    if axis == "x":
        return [rb([10, 40, 26], [x + side * 5, y, z], "lock", 4)]
    return [rb([26, 40, 10], [x, y, z], "lock", 4)]
def table(lift=0, out=0, z=-620):
    P = side_table(z, GY, Y + 300, top="acc", br="steel", depth=360, width=380, lift=lift, out=out)
    P += lock_tab(W / 2 + 16 + out, GY + 20 + lift, z + 30)
    return P
def lamp_left(lift=0, out=0, z=-760):
    x = -(W / 2 + 12 + out)
    P = lamp(x, z, GY - 30, 1000, 240, dirx=1, post="steel", lift=lift)
    P.append(rb([14, 12, 40], [x + 8, GY + lift, z], "steel", 2))
    P += lock_tab(x - 8, GY + 20 + lift, z + 30, side=-1)
    return P
def foot_bar(lift=0, out=0):
    zf = L / 2 + 2 + out * 1.5
    P = []
    for sx in (-1, 1):
        P.append(rb([40, 520 - (GY - 30), 12], [sx * 380, (GY - 30 + 520) / 2 + lift, zf + 6], "steel", 3))
        P.append(rb([90, 12, 14], [sx * 380, GY + lift, zf - 7], "steel", 2))
        P += lock_tab(sx * 380, GY + 20 + lift, zf + 14, axis="z")
    P.append(cyl(16, 820, [0, 520 + lift, zf + 20], "acc", rot=[0, 0, 90]))
    # folded throw over the bar
    P.append(rb([600, 260, 30], [0, 520 - 120 + lift, zf + 40], "throw", 12))
    P.append(rb([600, 40, 60], [0, 530 + lift, zf + 20], "throw", 18))
    return P
def accessories(lift=0, out=0):
    return table(lift, out) + lamp_left(lift, out) + foot_bar(lift, out)
save("C2-07", scene(body() + mattress(Y) + accessories(), m, zoom=1.08))
save("C2-07-bare", scene(body() + mattress(Y), m, zoom=1.15))
save("C2-07-structure", scene(body() + accessories(lift=200, out=170), m, zoom=1.05))
# close-up of the rail scale + lock (detail)
det = body()[:0]
