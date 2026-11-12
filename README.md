# Lead Setu 3D Home Walkthrough — sample demo

An interactive, browser-based 3D walkthrough of a sample eight-storey tower, built from freely licensed 2D floor plans. Intended to sit on a developer website (an iframe) and, with `?tv=1`, on a sales-office smart TV. A **Book site visit** button captures a lead locally and has a clear hook for the Lead Setu API.

This is a **sample**, not a real project, and not a production embed on leadsetu.com. Visualisations are illustrative.

## Open the demo

Public demo: **https://ironblade-droid.github.io/leadsetu-3d-demo/**  
TV mode: **https://ironblade-droid.github.io/leadsetu-3d-demo/?tv=1**

Locally:

```bash
npm install
npm run dev      # http://localhost:5173
npm run build
npm run preview  # http://localhost:4173
```

TV / kiosk mode: add `?tv=1` (large UI, arrow keys + Enter, walk with the D-pad).

## Embed on a website

```html
<iframe
  src="https://ironblade-droid.github.io/leadsetu-3d-demo/"
  allow="pointer-lock; fullscreen"
  title="Lead Setu 3D Home Walkthrough"
  style="width:100%;height:720px;border:0;border-radius:12px;"
></iframe>
```

For kiosk / smart TV:

```html
<iframe
  src="https://ironblade-droid.github.io/leadsetu-3d-demo/?tv=1"
  allow="pointer-lock; fullscreen"
  title="Lead Setu 3D walkthrough (TV mode)"
  style="width:100%;height:100vh;border:0;"
></iframe>
```

## How to use it

1. **Tower** — drag to orbit. Hover or click a floor (or use the floor list) to highlight and enter it.
2. **Floor** — the floor is isolated, cut away, with labelled flats (unit number, 2 BHK / 3 BHK / Penthouse, area in sq ft). Click a flat.
3. **Flat** — dollhouse (orbit, roof off) or first-person walkthrough. Gold pins mark the kitchen, a bathroom, and a balcony or terrace when the plan has one; click a pin to fly the camera there and open a spec card (sizes from the drawing, finishes from the current preferences). Click or tap the floor to walk to that spot.
4. **Preferences** (in a flat) — style preset (Modern, Luxury, Minimal, Traditional Indian), flooring (marble, wood, tile), wall colour, kitchen finish, furniture on/off. Changes apply live.
5. **Time of day** — Morning, Golden hour, or Night, from any view. At night, interior ceiling lights come on and tower windows pick up a warm glow.
6. **Onboarding** — a three-tip carousel on the loading screen (walk, click-to-move, finishes) with a Start exploring button; it auto-dismisses after a few seconds so it never blocks the demo.
7. **Book site visit** — name, phone, unit of interest (pre-filled). Submissions are stored in `localStorage` under `leadsetu-3d-demo-leads` and logged to the console. There is a TODO in the form and in `src/ui.ts` (`storeLead`) for `POST`ing to the Lead Setu API.

### Controls

| | Desktop | Mobile | TV remote (`?tv=1`) |
|---|---|---|---|
| Orbit | Drag, scroll to zoom | Drag | Not needed; menus are D-pad driven |
| Choose floor / flat | Click | Tap | ↑↓ floors, ←→ flats, Enter to open |
| Walk | Click to look (pointer lock), WASD or arrows, Shift to go faster. Click the floor to walk there. | Left joystick to move, drag on the right to look, tap the floor to walk there | ↑ walk, ↓ back, ←→ turn, Enter dollhouse |
| Hotspots | Click a gold pin or its label | Tap a pin | — |
| Time of day | Morning / Golden hour / Night pill | Same | Focus the pill, Enter |
| Back | Breadcrumb, or Esc | Breadcrumb | Esc |

## Tower programme

- Floors **1–7**: two 2 BHK flats (A, B) and one 3 BHK (C), around a lift-and-stair core.
- Floor **8**: a single penthouse with its own terrace, set back on the roof of floor 7, with a wraparound roof deck.
- Unit numbers: `1A`, `1B`, `1C` … `7C`, and `8PH`.
- Exterior floor-to-floor height is **3.15 m**, a design choice for the tower (not taken from the unit plans). Interiors use each plan’s own clear height.

## 2D plans — sources and licences

All three plans are **CC0-1.0** (public domain) originals from the [Innerscene Drawing Library](https://www.innerscene.com/tools/library/drawings/tag/floor-plans). Retrieved 13 November 2026, Asia/Calcutta. The DXF files and official preview images are in `public/plans/`. The structured JSON (room polygons in metres, walls, doors, windows, room types) is in `public/data/`, produced by `scripts/convert_plans.py` from the DXF geometry (1:1 millimetres).

| Unit | Source | Licence | What was taken from the drawing | Approximations (also listed in each JSON) |
|---|---|---|---|---|
| **2 BHK** (1,066 sq ft) | [2BHK apartment plan drawing](https://www.innerscene.com/tools/library/drawings/2bhk-apartment-plan-drawing-fa91d145), 11 × 9 m, 99.0 m² GIA | CC0-1.0 | Footprint, room schedule and areas, 250 mm external / 100 mm internal walls, +3.000 m overall height, 200 mm RC slab, balcony 4.80 × 1.50 m, door and window openings, wall rectangles | Door height 2.10 m; window sill 0.90 m and opening 1.40 m (not dimensioned). Clear height taken as 2.80 m (overall minus the stated slab). |
| **3 BHK** (1,130 sq ft) | [Three-bedroom apartment — 105 m²](https://www.innerscene.com/tools/library/drawings/three-bedroom-apartment-105-m2-73915b15), 10.5 × 10 m, wall height 2.70 m | CC0-1.0 | Footprint, room labels and areas (including a combined living/kitchen), 200 mm external / 120 mm internal walls (measured from the DXF), openings | Door height 2.10 m; window sill and opening as above. **No balcony on this plan; none was added.** |
| **Penthouse** (1,000 sq ft enclosed + 572 sq ft terrace) | [3BHK house first floor plan, 60 × 120 ft north-facing plot](https://www.innerscene.com/tools/library/drawings/3bhk-house-first-floor-plan-60-x-120-ft-north-facing-plot-dc0667a4), house 40 × 50 ft | CC0-1.0 | The first-floor rooms, 26′ × 22′ terrace, 14′ × 12′ balcony, 9″ / 4.5″ walls, sizes in feet and inches | **No dedicated free “penthouse apartment” plan was found.** This is a house first floor, used because it already has a large terrace. The staircase is treated as a private lift/stair lobby. The source first floor has **no kitchen** (it is on the [ground-floor plan](https://www.innerscene.com/tools/library/drawings/3bhk-house-ground-floor-plan-60-x-120-ft-north-facing-plot-1f1c239f) of the same house, which was not merged in); an open kitchen is placed in the family lounge as an approximation. Clear height 3.00 m is typical, not on this sheet. A wraparound roof terrace was added around the 12.192 × 15.240 m footprint so it can sit on the larger typical-floor plate. |

Sq ft figures for the 2 BHK and 3 BHK are conversions of the plans’ m² (× 10.7639), rounded. The penthouse enclosed area is the sum of the labelled indoor rooms (staircase counted as the lobby), converted the same way.

Wikimedia Commons was checked for Indian apartment plans. The India floor-plan category is mostly temples and public buildings. A 1,395 sq ft plan there is CC BY-SA 4.0 (share-alike), which is a poor fit for this demo, so it was not used.

## Pipeline (blueprint → data → 3D)

1. Download the CC0 DXF.
2. `scripts/convert_plans.py` (uses `ezdxf`) reads wall rectangles, door opening lines and window frames from named layers, and traces room polygons from those walls plus the labelled schedule.
3. The Vite + three.js app extrudes the walls, cuts are already present in the DXF (walls are segmented at openings), places glass and door leaves, and lays furniture by room-type rules.

## How this was built (and Pascal Editor)

The viewer is **three.js (WebGL)**, Vite, TypeScript. Pascal Editor (`@pascal-app/viewer`, MIT, commit `c40a2d3738db57935e89a6cb2b71f19dcce6f38c`) was authorised after a security audit, but it was **not used**. The published package requires React 19, React Three Fiber 9 and three 0.187, and its own scene graph. Vendoring a pinned commit, converting our plan JSON into Pascal’s model, self-hosting furniture (a runtime dependency on editor.pascal.app or its furniture CDN is not allowed) and keeping a WebGL path for phones and TVs would have delayed a working public demo. A purpose-built three.js viewer maps 1:1 onto our blueprint JSON, style presets, TV mode and Lead Setu CTA. Pascal remains a candidate for a later editor evaluation.

Furniture is **procedural** (three.js primitives), not third-party models. Textures are **CC0 from Poly Haven**, self-hosted in `public/textures/`. See `public/textures/CREDITS.txt` and `public/data/sources.json`.

## Lead Setu CTA

`src/ui.ts` → `storeLead()`. Today: append to `localStorage` and `console.info`. The form includes this comment, which is the integration hook:

```ts
// TODO: POST /api/leads { name, phone, project, unit, sessionId } to Lead Setu
```

## Known limitations

- Interiors are a sales visualisation, not an engineering model (no wall layers, no plumbing, no BIM).
- Plan reading is a one-off conversion of three CC0 drawings, with a person (this pipeline) checking the result. It is not a self-serve upload tool.
- The penthouse kitchen, lobby adaptation, wraparound roof deck and several heights are approximations, listed above and in the JSON.
- The three flats on a typical floor are arranged around a core; the 2 BHK plans are rotated or mirrored so their entrances face the core. That arrangement is a design of this sample tower, not on the source sheets (which are individual unit plans).
- Window sill and door heights are typical values where the drawing is silent.
- Lighting is real-time (hemisphere + directional + soft shadows + a room environment), not baked lightmaps.
- Performance targets a mid-range laptop and phone; MeshPhysical glass and 2048-px shadows may be heavy on very low-end devices. There is no Unreal / Pixel Streaming path.
- TV mode is a web page driven by a remote, not a native Android TV kiosk app.
- Pointer lock for mouse-look may be blocked inside a cross-origin iframe unless the embed includes `allow="pointer-lock"`.
- The “Book site visit” path does not call a live Lead Setu API.
- The 3 BHK plan has no balcony; no balcony hotspot is invented for it.
- Typical-floor south-wing facades are a simplified balcony-and-slab treatment, not a fully enclosed curtain wall. Night window glow is stronger on the penthouse’s larger glass than on the typical-floor grid (the openings are small and recessed).
- A three.js PMREM warning (`sigmaRadians` clipped) can appear in the console; it is harmless and comes from the room environment.
- First-person lighting is real-time point lights, not baked; SwiftShader / software WebGL will look flatter than a discrete GPU.

## Screenshots

Captured with Playwright and system Chrome (SwiftShader WebGL) under `screens/`:

| File | View |
|---|---|
| `00-onboarding-tips.png` | Loading screen with tips carousel and Start exploring |
| `01-tower.png` | Tower, morning |
| `01b-tower-night.png` | Tower at night |
| `02-floor.png` | Floor 5 cutaway, 5A / 5B / 5C labelled |
| `03-dollhouse.png` | 5A 2 BHK dollhouse, gold pins |
| `03b-hotspot-kitchen.png` | Kitchen hotspot, camera fly-in, spec card |
| `04-walk.png` | First-person walk through 5A |
| `04b-walk-night.png` | Same, night, interior lights |
| `05-style-luxury.png` | Luxury preset |
| `06-style-traditional.png` | Traditional Indian preset |
| `06b-golden-hour.png` | Golden hour |
| `07-lead-form.png` | Book site visit form (unit pre-filled) |
| `08-lead-toast.png` | Lead saved toast |
| `09-tv-mode.png` | `?tv=1` kiosk chrome |

## Public URL

**https://ironblade-droid.github.io/leadsetu-3d-demo/**

This is a new public GitHub Pages site on the `ironblade-droid` account, not a Lead Setu production repo. Source and a `gh-pages` branch with the built `dist/` live at `https://github.com/ironblade-droid/leadsetu-3d-demo`.
