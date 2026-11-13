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

### Show-flat furniture (v5, CC0)

Wired into `furnishFromPlacements` for every style, with per-preset material retints and InstancedMesh for repeated chairs and nightstands. Kitchen runs stay procedural (arbitrary lengths).

- `public/models/v5/` — [3dassets.dev](https://3dassets.dev) packs *Bedroom and Living Room Furniture* and *Fitted Kitchen and Bathroom Builder*, licence **CC0 1.0 Universal**. AI-generated untextured glTF (Muse Spark / T3 Code); style tints and scanned PBR maps are applied at runtime.
- `potted_plant_04.glb` — [Potted Plant 04](https://polyhaven.com/a/potted_plant_04) by James Ray Cock, CC0.

The earlier Poly Haven Victorian / Gothic furniture set (`sofa_03`, `GothicBed_01`, `ornate_mirror_01`, etc.) has been removed from `public/models/`.

### Site trees (CC0)

`public/models/trees/` — [Ultimate Nature Pack](https://quaternius.com/packs/ultimatenature.html) by [Quaternius](https://quaternius.com), licence **CC0 1.0**. Common trees, palms and bushes, instanced on the campus and along the street.

## Textures and HDRI

From [Poly Haven](https://polyhaven.com), CC0. See `public/textures/CREDITS.txt`.

- Floor, wall and ground textures as listed in that file (wood, marble, tile, terracotta, granite, plaster, concrete, grass, paving).
- Indoor studio HDRI: [Studio Small 08](https://polyhaven.com/a/studio_small_08) by Greg Zaal, 1K HDR, in `public/hdris/studio_small_08_1k.hdr`. Used only as a reflection environment.
- Day sky: [Kloofendal 43d Clear Puresky](https://polyhaven.com/a/kloofendal_43d_clear_puresky) by Greg Zaal, 1K HDR. Sky only — the city is a distant 3D silhouette.
- Golden-hour sky: [Qwantani Sunset Puresky](https://polyhaven.com/a/qwantani_sunset_puresky) by Greg Zaal, 1K HDR.
- Night sky: [Kloppenheim 02 Puresky](https://polyhaven.com/a/kloppenheim_02_puresky) by Greg Zaal, 1K HDR (dark blue, stars, moon). Never a city photograph.
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

- [Kloofendal 43d Clear Puresky](https://polyhaven.com/a/kloofendal_43d_clear_puresky), [Qwantani Sunset Puresky](https://polyhaven.com/a/qwantani_sunset_puresky), [Kloppenheim 02 Puresky](https://polyhaven.com/a/kloppenheim_02_puresky) — sky-only 1K HDRs by Greg Zaal. The city is a distant 3D mesh. Indoor reflections remain [Studio Small 08](https://polyhaven.com/a/studio_small_08) by Greg Zaal.

### Floors (Poly Haven, CC0)

- [Oak Wood Planks](https://polyhaven.com/a/oak_wood_planks) — light matte European oak (`oakplank_diff/nor/rough.jpg`, roughness 0.6). Replaces the orange glossy `wood_floor_deck` on living-room Wood flooring.

### Furniture models (CC0, on disk, being wired)

`public/models/v5/` — [3dassets.dev](https://3dassets.dev) packs *Bedroom and Living Room Furniture* and *Fitted Kitchen and Bathroom Builder*, licence **CC0 1.0 Universal**. AI-generated untextured glTF (Muse Spark / T3 Code); style tints and scanned PBR maps are applied at runtime. Credit is not required.

The earlier Victorian Poly Haven set in `public/models/` is no longer the show-flat catalog; removal follows the furniture swap.

### Trees and podium

Podium trees in this pass are instanced procedural meshes with CC0 bark (oak/wood maps) and a tinted plant material, not a third-party glTF — a real CC0 tree will be preferred if a compressed glTF fits the budget.
