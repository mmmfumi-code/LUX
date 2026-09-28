from lib import *
# C3-02 KAGE: minimal. 40mm light-bamboo blade edge floating over a recessed black sub-deck (the "shadow"), 4 slim round legs
CL = 125; SUB = 40; E = 40; Y = CL + SUB + E
m = M(edge={"type": "bamboo", "color": "#e3cda8"},
      edge_z={"type": "bamboo", "color": "#e3cda8", "grain": "z"},
      slat={"type": "bamboo", "color": "#e7d4b2"},
      sub={"type": "matte", "color": "#262523", "roughness": 0.85},
      leg={"type": "metal", "color": "#1c1c1c", "roughness": 0.5})
legs = [(sx * 330, z) for sx in (-1, 1) for z in (-560, 560)]
def body(lift=0):
    P = deck(Y + lift, E=E, T=30, R=3, nslat=10, slat_w=44)
    # recessed shadow sub-deck (steel ladder frame inside, black flat skin), 60mm in from the edge
    P.append(rb([W - 120, SUB, L - 120], [0, CL + SUB / 2 + lift, 0], "sub", 4))
    return P
main = body() + leg_units(legs, CL, kind="round", size=38, flange_size=70)
save("C3-02", scene(main + mattress(Y), m, zoom=1.12))
LIFT = 260
save("C3-02-structure", scene(body(LIFT) + leg_units(legs, CL + LIFT, kind="round", size=38, flange_size=70, drop=LIFT), m, zoom=1.1))
save("C3-02-robot", scene(main + mattress(Y) + robot(400, 0), m, zoom=1.15))
if __name__ == "__main__":
    render("C3-02", ["three-quarter", "front", "side"])
    render("C3-02-structure", ["three-quarter"])
    render("C3-02-robot", ["low"])
