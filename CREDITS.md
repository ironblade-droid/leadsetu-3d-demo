# Credits and licences — Lead Setu 3D Walkthrough

Every third-party asset in this demo is **CC0 1.0** (public domain). Credit is not required; we list it anyway.

## Floor plans

From the [Innerscene Drawing Library](https://www.innerscene.com/tools/library/drawings/tag/floor-plans), CC0-1.0. Retrieved 13 November 2026, Asia/Calcutta. See `public/data/sources.json` and `public/plans/`.

- [2BHK apartment plan drawing](https://www.innerscene.com/tools/library/drawings/2bhk-apartment-plan-drawing-fa91d145)
- [Three-bedroom apartment — 105 m²](https://www.innerscene.com/tools/library/drawings/three-bedroom-apartment-105-m2-73915b15)
- [3BHK house first floor plan](https://www.innerscene.com/tools/library/drawings/3bhk-house-first-floor-plan-60-x-120-ft-north-facing-plot-dc0667a4) (used as the penthouse, with a terrace approximation)

## Furniture (v3)

Show-flat furniture is **original procedural PBR geometry** written for this demo (`src/furniture.ts`, placements in `src/planner.ts`): bevelled and rounded boxes (`RoundedBoxGeometry` from three.js examples), cylindrical legs, fabric / velvet (`MeshPhysicalMaterial` sheen) / leather-style and wood materials, a canvas-tile kitchen backsplash, a modular handleless kitchen with chimney and hob, a platform bed with an upholstered headboard, a sliding-door laminate wardrobe, and bathroom ceramics. Modern and Minimal use clean contemporary Indian-apartment pieces. Luxury uses the same contemporary silhouettes with velvet, brass and marble tops — not carved Victorian. Traditional Indian may add a wood-framed sofa, fluted legs and a small mandir.

A programmatic AABB check (`src/occupancy.ts`, `npm run check:layout`) fails the build if furniture overlaps, blocks a 60 cm doorway, or sits the coffee table outside a 40–45 cm gap from the sofa front.

### Still used from Poly Haven (CC0)

- `potted_plant_04.glb` — [Potted Plant 04](https://polyhaven.com/a/potted_plant_04) by James Ray Cock. Instanced as corner plants.

### Poly Haven glTF catalog (CC0, on disk, not placed in v3)

The files below remain in `public/models/` from an earlier pass (1K glTF, Draco + WebP, ~5.4 MB, retrieved 13 November 2026, Asia/Calcutta). They are **not** used for Modern, Minimal or Luxury: several read as Victorian / Gothic (notably `sofa_03`, `Sofa_01`, `sofa_02`, `GothicBed_01`, `ornate_mirror_01`, `painted_wooden_cabinet`). They are kept for possible Traditional accents or a later swap, and are listed for licence completeness.


| File | Asset | Author |
| --- | --- | --- |
| `sofa_03.glb` | [Sofa 03](https://polyhaven.com/a/sofa_03) | Fran Calvente |
| `Sofa_01.glb` | [Sofa 01](https://polyhaven.com/a/Sofa_01) | Kirill Sannikov |
| `sofa_02.glb` | [Sofa 02](https://polyhaven.com/a/sofa_02) | Kirill Sannikov |
| `modern_coffee_table_01.glb` | [Modern Coffee Table 01](https://polyhaven.com/a/modern_coffee_table_01) | Amin |
| `CoffeeTable_01.glb` | [Coffee Table 01](https://polyhaven.com/a/CoffeeTable_01) | Fernando Quinn |
| `ArmChair_01.glb` | [Arm Chair 01](https://polyhaven.com/a/ArmChair_01) | Kirill Sannikov |
| `Ottoman_01.glb` | [Ottoman 01](https://polyhaven.com/a/Ottoman_01) | Caspian Fortune |
| `dining_chair_02.glb` | [Dining Chair 02](https://polyhaven.com/a/dining_chair_02) | James Ray Cock |
| `WoodenChair_01.glb` | [Wooden Chair 01](https://polyhaven.com/a/WoodenChair_01) | Jake Mobley |
| `round_wooden_table_01.glb` | [Round Wooden Table 01](https://polyhaven.com/a/round_wooden_table_01) | Ulan Cabanilla |
| `WoodenTable_01.glb` | [Wooden Table 01](https://polyhaven.com/a/WoodenTable_01) | Ethan Place |
| `GothicBed_01.glb` | [Gothic Bed 01](https://polyhaven.com/a/GothicBed_01) | Kirill Sannikov |
| `ClassicNightstand_01.glb` | [Classic Nightstand 01](https://polyhaven.com/a/ClassicNightstand_01) | Kirill Sannikov |
| `ClassicConsole_01.glb` | [Classic Console 01](https://polyhaven.com/a/ClassicConsole_01) | Kirill Sannikov |
| `side_table_01.glb` | [Side Table 01](https://polyhaven.com/a/side_table_01) | James Ray Cock |
| `painted_wooden_cabinet.glb` | [Painted Wooden Cabinet](https://polyhaven.com/a/painted_wooden_cabinet) | Kirill Sannikov |
| `hanging_picture_frame_01.glb` | [Hanging Picture Frame 01](https://polyhaven.com/a/hanging_picture_frame_01) | James Ray Cock |
| `hanging_picture_frame_02.glb` | [Hanging Picture Frame 02](https://polyhaven.com/a/hanging_picture_frame_02) | James Ray Cock |
| `modern_ceiling_lamp_01.glb` | [Modern Ceiling Lamp 01](https://polyhaven.com/a/modern_ceiling_lamp_01) | James Ray Cock |
| `Chandelier_01.glb` | [Chandelier 01](https://polyhaven.com/a/Chandelier_01) | Kirill Sannikov |
| `ornate_mirror_01.glb` | [Ornate Mirror 01](https://polyhaven.com/a/ornate_mirror_01) | James Ray Cock |
| `electric_stove.glb` | [Electric Stove](https://polyhaven.com/a/electric_stove) | Kuutti Siitonen |
| `potted_plant_04.glb` | [Potted Plant 04](https://polyhaven.com/a/potted_plant_04) | James Ray Cock |

The packed catalog on disk is about **5.4 MB**. Only the potted plant is instantiated in v3; kitchens, beds, sofas, bathrooms and the rest of the furniture are the procedural set above, tinted with the same Poly Haven PBR wood / marble / fabric materials.

## Textures and HDRI

From [Poly Haven](https://polyhaven.com), CC0. See `public/textures/CREDITS.txt`.

- Floor, wall and ground textures as listed in that file (wood, marble, tile, terracotta, granite, plaster, concrete, grass, paving).
- Indoor studio HDRI: [Studio Small 08](https://polyhaven.com/a/studio_small_08) by Greg Zaal, 1K HDR, in `public/hdris/studio_small_08_1k.hdr`. Used only as a reflection environment.
- City / skyline HDRI: [Modern Buildings 2](https://polyhaven.com/a/modern_buildings_2) by Alexander Scholten, 1K HDR, in `public/hdris/modern_buildings_2_1k.hdr`. Used as the sky (window views). Morning / golden hour / night change exposure, rotation and intensity; there is no separate night-city HDRI.
- Fabric weave (normal + roughness only): [Fabric Pattern 07](https://polyhaven.com/a/fabric_pattern_07) by Rob Tuytel, 1K JPEG, CC0. Applied to sofas, beds, curtains and mattresses; colour is a style tint, not the original gingham albedo.
- Veined white marble: [Marble001](https://ambientcg.com/a/Marble001) from ambientCG, CC0, 1K JPEG. Used for the Marble flooring option.
- Brushed metal (normal + roughness): [Metal032](https://ambientcg.com/a/Metal032) from ambientCG, CC0, 1K JPEG. Used for brushed-brass and matte-black hardware.

## Runtime

- [three.js](https://threejs.org) 0.170, MIT
- Draco decoder from the three.js examples, Apache 2.0 / Google Draco licence, self-hosted in `public/draco/`

## v4 presentation (original)

Skirting boards, living/master cove ceilings with recessed downlights, folded curtains, contact-AO decals, and procedural wall-art canvases are original geometry and generated textures, not third-party models. GTAO is the three.js 0.170 example pass (`three/examples/jsm/postprocessing/GTAOPass.js`, MIT), used on desktop/high-tier GPUs only.


## v5 additions (13 November 2026, Asia/Calcutta)

### HDRIs (Poly Haven, CC0)

- [Shanghai Bund](https://polyhaven.com/a/shanghai_bund) — 1K HDR, night-city skyline used as the walk-mode and exterior night sky. Day sky remains [Modern Buildings 2](https://polyhaven.com/a/modern_buildings_2). Indoor reflections remain [Studio Small 08](https://polyhaven.com/a/studio_small_08) by Greg Zaal.

### Floors (Poly Haven, CC0)

- [Oak Wood Planks](https://polyhaven.com/a/oak_wood_planks) — light matte European oak (`oakplank_diff/nor/rough.jpg`, roughness 0.6). Replaces the orange glossy `wood_floor_deck` on living-room Wood flooring.

### Furniture models (CC0, on disk, being wired)

`public/models/v5/` — [3dassets.dev](https://3dassets.dev) packs *Bedroom and Living Room Furniture* and *Fitted Kitchen and Bathroom Builder*, licence **CC0 1.0 Universal**. AI-generated untextured glTF (Muse Spark / T3 Code); style tints and scanned PBR maps are applied at runtime. Credit is not required.

The earlier Victorian Poly Haven set in `public/models/` is no longer the show-flat catalog; removal follows the furniture swap.

### Trees and podium

Podium trees in this pass are instanced procedural meshes with CC0 bark (oak/wood maps) and a tinted plant material, not a third-party glTF — a real CC0 tree will be preferred if a compressed glTF fits the budget.
