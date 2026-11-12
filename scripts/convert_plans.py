#!/usr/bin/env python3
"""Blueprint → data pipeline.

Reads the CC0 Innerscene DXF originals (already parsed to intermediate JSON
during development; this script also accepts those intermediates) and writes
structured unit plans in metres: room polygons, wall rectangles, doors, windows.

Wall rectangles, door openings and window openings are taken directly from
the DXF geometry (1:1 mm). Room polygons are traced from those walls and
the room labels / schedule on each drawing. Anything not stated on the
drawing is listed under `approximations`.
"""
from __future__ import annotations
import json, math, os
from pathlib import Path

OUT = Path("/workspace/leadsetu-3d-demo/public/data")
OUT.mkdir(parents=True, exist_ok=True)
M2_TO_SQFT = 10.76391041671

def mm(v): return round(v / 1000.0, 4)

def aa_rect(pts):
    xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
    xmin, xmax, ymin, ymax = min(xs), max(xs), min(ys), max(ys)
    if xmax - xmin < 1 or ymax - ymin < 1:
        return None
    for x, y in pts:
        if min(abs(x - xmin), abs(x - xmax)) > 1 and min(abs(y - ymin), abs(y - ymax)) > 1:
            return None
    return (xmin, ymin, xmax - xmin, ymax - ymin)

def extract_walls(geom, layers):
    walls = []
    for layer in layers:
        for e in geom.get(layer, []):
            if e["type"] == "poly":
                r = aa_rect(e["pts"])
                if r:
                    x, y, w, d = r
                    walls.append({"x": mm(x), "z": mm(y), "w": mm(w), "d": mm(d)})
    return walls

def extract_doors(geom, layers):
    doors = []
    for layer in layers:
        for e in geom.get(layer, []):
            if e["type"] == "line" and len(e["pts"]) == 2:
                (x1, y1), (x2, y2) = e["pts"]
                length = math.hypot(x2 - x1, y2 - y1)
                if length < 400:
                    continue
                doors.append({
                    "ax": mm(x1), "az": mm(y1), "bx": mm(x2), "bz": mm(y2),
                    "width": mm(length),
                })
    return doors

def extract_windows(geom, layers):
    boxes = []
    for layer in layers:
        for e in geom.get(layer, []):
            pts = e.get("pts")
            if not pts:
                continue
            xs = [p[0] for p in pts]; ys = [p[1] for p in pts]
            boxes.append((min(xs), min(ys), max(xs), max(ys)))
    used = [False] * len(boxes)
    openings = []
    for i, b in enumerate(boxes):
        if used[i]:
            continue
        xmin, ymin, xmax, ymax = b
        used[i] = True
        changed = True
        while changed:
            changed = False
            for j, c in enumerate(boxes):
                if used[j]:
                    continue
                cxmin, cymin, cxmax, cymax = c
                if (cxmin <= xmax + 80 and cxmax >= xmin - 80
                        and cymin <= ymax + 80 and cymax >= ymin - 80):
                    xmin = min(xmin, cxmin); ymin = min(ymin, cymin)
                    xmax = max(xmax, cxmax); ymax = max(ymax, cymax)
                    used[j] = True
                    changed = True
        w, d = xmax - xmin, ymax - ymin
        if max(w, d) >= 600 and min(w, d) < 800:
            openings.append({"x": mm(xmin), "z": mm(ymin), "w": mm(w), "d": mm(d)})
    return openings

def poly_area(poly):
    a = 0.0
    for i, (x1, z1) in enumerate(poly):
        x2, z2 = poly[(i + 1) % len(poly)]
        a += x1 * z2 - x2 * z1
    return abs(a) / 2.0

def room(id, name, type_, area, polygon, notes=None):
    r = {
        "id": id, "name": name, "type": type_,
        "area_m2": area,
        "area_m2_from_polygon": round(poly_area(polygon), 2),
        "polygon": polygon,
    }
    if notes:
        r["notes"] = notes
    return r

# ---------------------------------------------------------------------------
# 2BHK — Innerscene 2BHK apartment plan drawing, 11 x 9 m, GIA 99 m2
# ---------------------------------------------------------------------------
d2 = json.load(open("/tmp/plans/2bhk.json"))
walls2 = extract_walls(d2["geom"], ["A-WALL"])
doors2 = extract_doors(d2["geom"], ["A-DOOR"])
wins2 = extract_windows(d2["geom"], ["A-GLAZ"])

# Room inner polygons traced from DXF walls (250 mm ext, 100 mm int) and
# the labelled room schedule. Areas in m2 are from the drawing's schedule,
# not re-derived (the polygon area is also stored for checking).
plan_2bhk = {
    "id": "2bhk",
    "name": "2 BHK",
    "type": "2BHK",
    "source": {
        "title": "2BHK apartment plan drawing",
        "url": "https://www.innerscene.com/tools/library/drawings/2bhk-apartment-plan-drawing-fa91d145",
        "file": "plans/2bhk-apartment-plan-drawing.dxf",
        "previewOfficial": "plans/2bhk-official.jpg",
        "previewExtracted": "plans/2bhk-extracted.png",
        "license": "CC0-1.0",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
        "author": "Innerscene (original model, released CC0)",
        "retrieved": "2026-11-13",
        "nominal": "11.00 x 9.00 m footprint, 99.0 m² gross internal area, overall height +3.000 m, 200 mm RC slab, external walls 250 mm, internal partitions 100 mm, balcony 4.80 x 1.50 m with a glass balustrade. All stated on the drawing.",
    },
    "units": "m",
    "wallHeight": 2.80,
    "slabThickness": 0.20,
    "overallHeight": 3.00,
    "grossInternalArea_m2": 99.0,
    "area_sqft": round(99.0 * M2_TO_SQFT),
    "bounds": {"min": [0, -1.5], "max": [11, 9]},
    "walls": walls2,
    "doors": doors2,
    "windows": wins2,
    "balcony": {"x": 0.60, "z": -1.50, "w": 4.80, "d": 1.50},
    "rooms": [
        room("living", "Living / dining", "living", 32.3,
             [[0.25, 0.25], [6.55, 0.25], [6.55, 3.25], [9.35, 3.35], [9.35, 4.75], [0.25, 4.75]]),
        room("kitchen", "Kitchen", "kitchen", 12.3,
             [[6.65, 0.25], [10.75, 0.25], [10.75, 3.25], [10.40, 3.35], [9.45, 3.35], [9.45, 3.25], [6.65, 3.25]]),
        room("utility", "Utility", "utility", 3.6,
             [[9.45, 4.85], [10.75, 4.85], [10.75, 6.15], [9.45, 6.15]]),
        room("bedroom1", "Bedroom 1", "bedroom", 15.6,
             [[0.25, 4.85], [4.25, 4.85], [4.25, 8.75], [0.25, 8.75]]),
        room("lobby", "Lobby", "lobby", 2.9,
             [[4.35, 4.85], [6.05, 4.85], [6.05, 6.55], [4.35, 6.55]]),
        room("bathroom", "Bathroom", "bathroom", 3.6,
             [[4.35, 6.65], [6.05, 6.65], [6.05, 8.75], [4.35, 8.75]]),
        room("bedroom2", "Bedroom 2", "bedroom", 12.5,
             [[6.15, 4.85], [9.35, 4.85], [9.35, 8.75], [6.15, 8.75]]),
        room("ensuite", "En-suite", "bathroom", 3.2,
             [[9.45, 6.25], [10.75, 6.25], [10.75, 8.75], [9.45, 8.75]]),
        room("balcony", "Balcony", "balcony", 7.2,
             [[0.60, -1.50], [5.40, -1.50], [5.40, 0.00], [0.60, 0.00]]),
    ],
    "entrance": {"x": 0.25, "z": 4.075, "facing": "E"},  # just inside the west door, looking east
    "approximations": [
        "Door leaf height 2.10 m is not dimensioned on the plan; a typical 2.10 m is used.",
        "Window sill 0.90 m and opening height 1.40 m are not dimensioned on the plan (the section shows overall +3.000 m only); typical residential values are used.",
        "Interior clear height is taken as 2.80 m (overall +3.000 m minus the 200 mm RC slab stated on the drawing).",
        "Room polygons are traced from wall inner faces and the labelled rooms; they may differ by a few centimetres from the schedule areas, which are the figures used for labels.",
    ],
}

# ---------------------------------------------------------------------------
# 3BHK — Innerscene three-bedroom apartment 105 m2, 10.5 x 10 m
# ---------------------------------------------------------------------------
d3 = json.load(open("/tmp/plans/3bhk.json"))
walls3 = extract_walls(d3["geom"], ["WALLS"])
doors3 = extract_doors(d3["geom"], ["DOORS"])
wins3 = extract_windows(d3["geom"], ["WINDOWS"])

plan_3bhk = {
    "id": "3bhk",
    "name": "3 BHK",
    "type": "3BHK",
    "source": {
        "title": "Three-bedroom apartment - 105 m2",
        "url": "https://www.innerscene.com/tools/library/drawings/three-bedroom-apartment-105-m2-73915b15",
        "file": "plans/three-bedroom-apartment-105-m2.dxf",
        "previewOfficial": "plans/3bhk-official.jpg",
        "previewExtracted": "plans/3bhk-extracted.png",
        "license": "CC0-1.0",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
        "author": "Innerscene (original model, released CC0)",
        "retrieved": "2026-11-13",
        "nominal": "10.50 x 10.00 m footprint, 105.0 m², wall height 2700 mm (all stated on the drawing). External walls 200 mm, internal 120 mm (measured from the DXF).",
    },
    "units": "m",
    "wallHeight": 2.70,
    "slabThickness": 0.20,
    "overallHeight": 2.90,
    "grossInternalArea_m2": 105.0,
    "area_sqft": round(105.0 * M2_TO_SQFT),
    "bounds": {"min": [0, 0], "max": [10.5, 10.0]},
    "walls": walls3,
    "doors": doors3,
    "windows": wins3,
    "rooms": [
        room("living", "Living / kitchen", "living", 21.7,
             [[0.20, 0.20], [4.77, 0.20], [4.77, 4.94], [0.20, 4.94]],
             "Open living and kitchen as drawn; kitchen counters sit on the north wall of this room."),
        room("bedroom1", "Bedroom 1", "bedroom", 21.7,
             [[0.20, 5.06], [4.77, 5.06], [4.77, 9.80], [0.20, 9.80]]),
        room("hall", "Hall", "hall", 13.0,
             [[4.89, 0.20], [6.24, 0.20], [6.24, 9.80], [4.89, 9.80]]),
        room("bathroom", "Bathroom / utility", "bathroom", 12.4,
             [[6.36, 0.20], [10.30, 0.20], [10.30, 3.34], [6.36, 3.34]]),
        room("bedroom2", "Bedroom 2", "bedroom", 12.1,
             [[6.36, 3.46], [10.30, 3.46], [10.30, 6.54], [6.36, 6.54]]),
        room("bedroom3", "Bedroom 3", "bedroom", 12.4,
             [[6.36, 6.66], [10.30, 6.66], [10.30, 9.80], [6.36, 9.80]]),
    ],
    "entrance": {"x": 5.56, "z": 0.80, "facing": "N"},
    "approximations": [
        "Door leaf height 2.10 m is not on the plan; a typical 2.10 m is used.",
        "Window sill 0.90 m and opening height 1.40 m are not on the plan; typical residential values are used.",
        "This plan has no balcony; none was added.",
        "The drawing combines living and kitchen in one 21.7 m² room; that is how it is modelled.",
        "Room polygons are traced from wall inner faces; schedule areas on the drawing are used for labels.",
    ],
}

# ---------------------------------------------------------------------------
# Penthouse — Innerscene Indian 3BHK G+1 house FIRST FLOOR (has terrace)
# No dedicated CC0 'penthouse apartment' plan was found. This is a real
# Indian first-floor plan with a 26' x 22' terrace and a rear balcony.
# ---------------------------------------------------------------------------
dp = json.load(open("/tmp/plans/ind_ff.json"))
wallsp = extract_walls(dp["geom"], ["A-WALL"])
doorsp = extract_doors(dp["geom"], ["A-DOOR"])
winsp = extract_windows(dp["geom"], ["A-GLAZ"])

# Convert feet-inch room sizes stated on the drawing to metres for the record
def ft(*parts):
    # ft('13','1') → 13'1"
    if len(parts) == 1:
        return parts[0] * 0.3048
    return (parts[0] + parts[1] / 12.0) * 0.3048

plan_ph = {
    "id": "penthouse",
    "name": "Penthouse",
    "type": "Penthouse",
    "source": {
        "title": "3BHK house first floor plan, 60 x 120 ft north-facing plot",
        "url": "https://www.innerscene.com/tools/library/drawings/3bhk-house-first-floor-plan-60-x-120-ft-north-facing-plot-dc0667a4",
        "file": "plans/3bhk-house-first-floor-plan.dxf",
        "previewOfficial": "plans/penthouse-official.jpg",
        "previewExtracted": "plans/penthouse-extracted.png",
        "license": "CC0-1.0",
        "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
        "author": "Innerscene (original model, released CC0)",
        "retrieved": "2026-11-13",
        "nominal": "House footprint 40 x 50 ft (12.192 x 15.240 m), 9-inch (230 mm) external walls, 4.5-inch (115 mm) internal walls (measured from the DXF). Room sizes on the drawing are in feet and inches. Terrace 26'-0\" x 22'-0\", rear balcony 14'-0\" x 12'-0\".",
        "companionGroundFloor": {
            "title": "3BHK house ground floor plan, 60 x 120 ft north-facing plot",
            "url": "https://www.innerscene.com/tools/library/drawings/3bhk-house-ground-floor-plan-60-x-120-ft-north-facing-plot-1f1c239f",
            "note": "Not used as the penthouse interior. The kitchen in the source house is on this ground-floor plan; see approximations.",
        },
    },
    "units": "m",
    "wallHeight": 3.00,
    "slabThickness": 0.20,
    "overallHeight": 3.20,
    "grossInternalArea_m2": None,  # filled below
    "area_sqft": None,
    "terraceArea_m2": round(ft(26) * ft(22), 2),
    "bounds": {"min": [0, 0], "max": [12.192, 15.240]},
    "walls": wallsp,
    "doors": doorsp,
    "windows": winsp,
    "rooms": [
        room("terrace", "Terrace", "terrace", round(ft(26) * ft(22), 2),
             [[0.23, 0.23], [7.925, 0.23], [7.925, 6.706], [0.23, 6.706]]),
        room("lobby", "Entrance lobby", "lobby", round(ft(12, 6) * ft(17, 1), 2),
             [[8.155, 0.23], [11.962, 0.23], [11.962, 5.429], [8.155, 5.429]],
             "Drawn as a staircase on the source house plan; treated here as the penthouse's private lift and stair lobby."),
        room("lounge", "Family lounge", "living", round(ft(19, 7) * ft(14, 6), 2),
             [[1.77, 6.936], [7.867, 6.936], [7.867, 11.352], [3.17, 11.352], [3.17, 10.30], [1.77, 10.30]]),
        room("linen", "Linen", "linen", round(ft(5, 1) * ft(5, 1), 2),
             [[0.23, 6.936], [1.65, 6.936], [1.65, 8.50], [0.23, 8.50]]),
        room("toilet2", "Toilet 2", "bathroom", round(ft(5, 1) * ft(7, 7), 2),
             [[0.23, 8.62], [1.65, 8.62], [1.65, 11.03], [0.23, 11.03]]),
        room("bedroom2", "Bedroom 2", "bedroom", round(ft(11, 1) * ft(13, 1), 2),
             [[0.23, 11.582], [3.17, 11.582], [3.17, 15.01], [0.23, 15.01]]),
        room("balcony", "Balcony", "balcony", round(ft(14) * ft(12), 2),
             [[3.40, 11.582], [7.925, 11.582], [7.925, 15.01], [3.40, 15.01]]),
        room("master", "Master bedroom", "bedroom", round(ft(13, 1) * ft(15, 1), 2),
             [[8.155, 11.582], [11.962, 11.582], [11.962, 15.01], [8.155, 15.01]]),
        room("dressing", "Dressing", "dressing", round(ft(6, 7) * ft(7, 7), 2),
             [[8.155, 7.982], [10.001, 7.982], [10.001, 10.306], [8.155, 10.306]]),
        room("masterbath", "Master toilet", "bathroom", round(ft(6, 1) * ft(7, 7), 2),
             [[10.116, 7.982], [11.962, 7.982], [11.962, 10.306], [10.116, 10.306]]),
    ],
    "entrance": {"x": 10.0, "z": 1.2, "facing": "N"},
    "approximations": [
        "No dedicated freely licensed 'penthouse apartment' plan was found. This interior is the CC0 Innerscene Indian 3BHK G+1 house first-floor plan, which already includes a 26' × 22' terrace and a 14' × 12' balcony. It is a house first floor, not a purpose-drawn penthouse apartment.",
        "The staircase on the source plan is treated as a private lift and stair lobby for the penthouse. The stair flight itself is omitted.",
        "The source first floor has no kitchen (the kitchen is on the ground-floor plan of the same house, which was not merged into this layout). An open kitchen counter is placed on the south side of the family lounge, facing the terrace. This kitchen is an approximation, not on this drawing.",
        "Clear ceiling height is not dimensioned on the first-floor plan; 3.00 m is used as a typical value (a luxury penthouse might be taller). Door height 2.10 m, window sill 0.90 m and window opening 1.40 m are likewise typical values, not taken from this sheet.",
        "On the tower, a wraparound roof terrace is added around this 12.192 × 15.240 m footprint so the penthouse can sit on the larger typical-floor plate. The extra terrace is a design addition, not on the source plan.",
        "Room polygons are traced from DXF walls and the labelled sizes in feet and inches; areas used for labels are those sizes converted to m² and sq ft.",
    ],
}

# Enclosed area: all rooms except terrace and balcony
enc = sum(r["area_m2"] for r in plan_ph["rooms"] if r["type"] not in ("terrace", "balcony"))
plan_ph["grossInternalArea_m2"] = round(enc, 1)
plan_ph["area_sqft"] = round(enc * M2_TO_SQFT)
plan_ph["terraceArea_sqft"] = round(plan_ph["terraceArea_m2"] * M2_TO_SQFT)

for plan, fn in [(plan_2bhk, "2bhk.json"), (plan_3bhk, "3bhk.json"), (plan_ph, "penthouse.json")]:
    path = OUT / fn
    path.write_text(json.dumps(plan, indent=2))
    print(f"wrote {path}  walls={len(plan['walls'])} rooms={len(plan['rooms'])} area={plan['area_sqft']} sqft")

# sources index
sources = {
    "retrieved": "2026-11-13",
    "timezone": "Asia/Calcutta",
    "plans": [plan_2bhk["source"], plan_3bhk["source"], plan_ph["source"]],
    "textures": [
        {"name": "wood_floor_deck", "use": "Wood flooring", "url": "https://polyhaven.com/a/wood_floor_deck", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
        {"name": "marble_01", "use": "Marble flooring", "url": "https://polyhaven.com/a/marble_01", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
        {"name": "floor_tiles_06", "use": "Tile flooring", "url": "https://polyhaven.com/a/floor_tiles_06", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
        {"name": "terracotta_floor_tiles", "use": "Terracotta option / traditional floors", "url": "https://polyhaven.com/a/terracotta_floor_tiles", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
        {"name": "granite_tile", "use": "Kitchen granite finish", "url": "https://polyhaven.com/a/granite_tile", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
        {"name": "concrete_wall_003", "use": "Tower concrete facade", "url": "https://polyhaven.com/a/concrete_wall_003", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
        {"name": "concrete_floor_02", "use": "Plaza / lobby concrete", "url": "https://polyhaven.com/a/concrete_floor_02", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
        {"name": "plastered_wall_02", "use": "Interior plaster (tinted)", "url": "https://polyhaven.com/a/plastered_wall_02", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
        {"name": "grass_ground", "use": "Plaza lawn", "url": "https://polyhaven.com/a/grass_ground", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
        {"name": "patterned_paving", "use": "Plaza paving", "url": "https://polyhaven.com/a/patterned_paving", "license": "CC0", "licenseUrl": "https://polyhaven.com/license"},
    ],
    "engine": {
        "three.js": "npm, MIT",
        "pascalEditor": "Not used in this demo. @pascal-app/viewer 1.1.3 requires React 19, React Three Fiber and its own scene graph; vendoring a pinned commit, converting our plan JSON into Pascal's model, self-hosting furniture (runtime CDN is not allowed) and keeping a WebGL path would have delayed a working public demo. This viewer is purpose-built in three.js (WebGL) against our blueprint JSON. Pascal remains a candidate for a later editor evaluation.",
    },
}
(OUT / "sources.json").write_text(json.dumps(sources, indent=2))
print("wrote sources.json")
