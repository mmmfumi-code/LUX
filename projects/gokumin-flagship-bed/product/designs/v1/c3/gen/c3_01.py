from lib import *
# C3-01 UKI: mainstream floating deck. natural bamboo 70mm edge band, 6 black square leg units inset 150mm, clearance 125mm
CL = 125; E = 70; Y = CL + E
m = M(edge={"type": "bamboo", "color": "#d9b88a"},
      edge_z={"type": "bamboo", "color": "#d9b88a", "grain": "z"},
      slat={"type": "bamboo", "color": "#dfc39a"},
      leg={"type": "metal", "color": "#1f1f1f", "roughness": 0.55})
legs = six_legs(150, (-680, 0, 680))
main = deck(Y, E=E, T=40, R=8) + leg_units(legs, CL, kind="sq", size=50)
save("C3-01", scene(main + mattress(Y), m, zoom=1.12))
# structure: deck lifted, leg units pulled down out of their sockets
LIFT = 260
expl = deck(Y + LIFT, E=E, T=40, R=8) + leg_units(legs, CL + LIFT, kind="sq", size=50, drop=LIFT, lift_deck=0)
save("C3-01-structure", scene(expl, m, zoom=1.1))
# robot passing under (low view)
save("C3-01-robot", scene(main + mattress(Y) + robot(410, 330), m, zoom=1.15))
if __name__ == "__main__":
    render("C3-01", ["three-quarter", "front", "side"])
    render("C3-01-structure", ["three-quarter"])
    render("C3-01-robot", ["low"])
