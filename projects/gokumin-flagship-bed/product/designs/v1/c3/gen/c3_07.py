from lib import *
# C3-07 TATERU: UX. legs are plugged in while the deck stands on its long edge in the box's cradle (no flipping),
# green lock windows, finger-pull recess on the long sides. walnut-tone bamboo.
CL = 125; E = 70; Y = CL + E
m = M(edge={"type": "bamboo", "color": "#6f4d35"},
      edge_z={"type": "bamboo", "color": "#6f4d35", "grain": "z"},
      slat={"type": "bamboo", "color": "#7b573d"},
      leg={"type": "metal", "color": "#222222", "roughness": 0.5},
      ok={"type": "matte", "color": "#3fa66a"},
      pull={"type": "matte", "color": "#2b2019"},
      pulp={"type": "matte", "color": "#c9b999", "roughness": 0.95})
legs = six_legs(150, (-680, 0, 680))
def pulls(Yt, lift=0):
    # finger-pull recess (dark slot) at mid length of each long side, under the edge
    return [bx([4, 22, 220], [sx * (W / 2 + 0.5), Yt - E + 20 + lift, 0], "pull") for sx in (-1, 1)]
def leg_local(x, z, y0=0, plug=False):
    # leg hanging from y0 down to y0-CL (local coords)
    P = [rb([50, CL - 8, 50], [x, y0 - (CL - 8) / 2 - 4 + (0), z], "leg", 5),
         cyl(43, 8, [x, y0 - 4, z], "flange"),
         bx([52, 12, 20], [x, y0 - 24, z], "ok"),      # green lock window band
         cyl(23, 4, [x, y0 - CL + 2, z], "felt")]
    if plug:
        P.append(cyl(16, 26, [x, y0 + 13, z], "flange"))
    return P
main = deck(Y, E=E, T=40, R=8) + pulls(Y)
for (x, z) in legs:
    main += [rb([50, CL - 8, 50], [x, (CL - 8) / 2 + 4, z], "leg", 5), cyl(43, 8, [x, CL - 4, z], "flange"),
             bx([52, 12, 20], [x, CL - 24, z], "ok"), cyl(23, 4, [x, 2, z], "felt")]
save("C3-07", scene(main + mattress(Y), m, zoom=1.12))
# structure: deck standing on its long edge in the pulp cradle; 4 legs plugged, 2 lying ready on the floor
loc = deck(E, E=E, T=40, R=8)
for i, (x, z) in enumerate(legs):
    if i in (2, 5):
        continue
    loc += leg_local(x, z)
st = [grp(loc, (0, 500 + 60, 0), (0, 0, 90))]
for zc in (-620, 620):
    st.append(rb([200, 60, 260], [-35, 30, zc], "pulp", 8))
# two loose legs on the floor, in front
for j, zc in enumerate((820, 980)):
    st.append(grp(leg_local(0, 0, 0, plug=True), (380, 25, zc), (0, 0, 90)))
save("C3-07-structure", scene(st, m, zoom=1.05))
save("C3-07-robot", scene(main + mattress(Y) + robot(400, 330), m, zoom=1.15))
if __name__ == "__main__":
    render("C3-07", ["three-quarter", "front", "side"])
    render("C3-07-structure", ["three-quarter"])
    render("C3-07-robot", ["low"])
