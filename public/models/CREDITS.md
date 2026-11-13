# Credits and licences — Lead Setu 3D Walkthrough

Every third-party asset in this demo is **CC0 1.0** (public domain). Credit is not required; we list it anyway.

## Floor plans

From the [Innerscene Drawing Library](https://www.innerscene.com/tools/library/drawings/tag/floor-plans), CC0-1.0. Retrieved 13 November 2026, Asia/Calcutta. See `public/data/sources.json` and `public/plans/`.

- [2BHK apartment plan drawing](https://www.innerscene.com/tools/library/drawings/2bhk-apartment-plan-drawing-fa91d145)
- [Three-bedroom apartment — 105 m²](https://www.innerscene.com/tools/library/drawings/three-bedroom-apartment-105-m2-73915b15)
- [3BHK house first floor plan](https://www.innerscene.com/tools/library/drawings/3bhk-house-first-floor-plan-60-x-120-ft-north-facing-plot-dc0667a4) (used as the penthouse, with a terrace approximation)

## Furniture models (glTF)

Show-flat furniture is the CC0 3dassets.dev set in `v5/` (wired for every style, retinted per preset). Corner plants remain Poly Haven `potted_plant_04`. The earlier Victorian Poly Haven set has been deleted.

Site trees in `trees/` are from Quaternius Ultimate Nature Pack, CC0 1.0 (https://quaternius.com/packs/ultimatenature.html).

### Historical note — removed Poly Haven Victorian set

The files below were previously self-hosted and have been removed.

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

The packed catalog is about **5.4 MB** and is shared by every flat (lazy-loaded once, then instanced). Fitted kitchen cabinets, a modern show-flat bed, and bathroom ceramics (WC, basin, shower, tub) are original procedural pieces with Poly Haven PBR materials — there was no suitable modern CC0 glTF for a fitted kitchen run or a contemporary bathroom set that would sit next to these models.

## Textures and HDRI

From [Poly Haven](https://polyhaven.com), CC0. See `public/textures/CREDITS.txt`.

- Floor, wall and ground textures as listed in that file (wood, marble, tile, terracotta, granite, plaster, concrete, grass, paving).
- Indoor studio HDRI: [Studio Small 08](https://polyhaven.com/a/studio_small_08) by Greg Zaal, 1K HDR, in `public/hdris/studio_small_08_1k.hdr`. Used only as a reflection environment (the sky stays a solid colour so morning, golden hour and night still read clearly).

## Runtime

- [three.js](https://threejs.org) 0.170, MIT
- Draco decoder from the three.js examples, Apache 2.0 / Google Draco licence, self-hosted in `public/draco/`
