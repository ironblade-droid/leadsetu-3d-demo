/**
 * Dump a 2BHK (or other) unit + style as JSON for the Blender Cycles baker.
 *   npx tsx scripts/export-bake-scene.ts [planId] [style]
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve } from "node:path";
import { planUnit } from "../src/planner.ts";
import type { Prefs, UnitPlan } from "../src/types.ts";

const ROOT = resolve(import.meta.dirname, "..");

const STYLE_DEFAULTS: Record<string, { flooring: Prefs["flooring"]; wall: string; kitchen: Prefs["kitchen"] }> = {
  modern: { flooring: "wood", wall: "#f4f1ea", kitchen: "white" },
  luxury: { flooring: "marble", wall: "#f3ebe0", kitchen: "walnut" },
  minimal: { flooring: "tile", wall: "#f7f7f5", kitchen: "white" },
  traditional: { flooring: "marble", wall: "#f3e6d0", kitchen: "granite" },
};

/** kind (from planRoom) → model file under public/models/, modern preset. */
const KIND_FILE: Record<string, string> = {
  sofa: "v5/sofa_3seat.glb",
  "sofa-chaise": "v5/chaise.glb",
  armchair: "v5/armchair_lounge.glb",
  coffee: "v5/coffee_rect.glb",
  ottoman: "v5/cushions.glb",
  tv: "v5/console.glb",
  diningTable: "v5/dining_table6.glb",
  diningChair: "v5/dining_chair_uphol.glb",
  bed: "v5/bed_double.glb",
  nightstand: "v5/nightstand.glb",
  wardrobe: "v5/wardrobe_sliding.glb",
  console: "v5/console.glb",
  cabinet: "v5/chest_drawers.glb",
  chest: "v5/chest_drawers.glb",
  sideTable: "v5/console.glb",
  lamp: "v5/lamp_floor.glb",
  plant: "potted_plant_04.glb",
  rug: "v5/rug_wool.glb",
  toilet: "v5/wc_close.glb",
  basin: "v5/basin_round.glb",
  vanity: "v5/vanity_800.glb",
  fridge: "v5/kit_fridge_housing.glb",
  stool: "v5/dining_chair_timber.glb",
  // kitchen / shower stay procedural boxes in the baker
};

const planId = process.argv[2] ?? "2bhk";
const style = (process.argv[3] ?? "modern") as Prefs["style"];
const plan = JSON.parse(readFileSync(resolve(ROOT, `public/data/${planId}.json`), "utf8")) as UnitPlan;
const d = STYLE_DEFAULTS[style];
const prefs: Prefs = { style, flooring: d.flooring, wallColor: d.wall, kitchen: d.kitchen, furniture: true };
const { placements, issues } = planUnit(plan, prefs);

const scene = {
  planId,
  style,
  prefs,
  wallHeight: plan.wallHeight,
  bounds: plan.bounds,
  walls: plan.walls,
  doors: plan.doors,
  windows: plan.windows,
  balcony: plan.balcony,
  rooms: plan.rooms,
  placements: placements.map((p) => ({
    ...p,
    file: KIND_FILE[p.kind] ?? null,
  })),
  issues,
  textures: {
    oakDiff: "textures/oakplank_diff.jpg",
    oakNor: "textures/oakplank_nor.jpg",
    oakRough: "textures/oakplank_rough.jpg",
    hdri: "hdris/kloofendal_43d_clear_puresky_1k.hdr",
  },
};

const outDir = resolve(ROOT, "public/baked");
mkdirSync(outDir, { recursive: true });
const out = resolve(outDir, `${planId}-${style}-scene.json`);
writeFileSync(out, JSON.stringify(scene, null, 2));
console.log("wrote", out, "placements", placements.length, "rooms", plan.rooms.length, "issues", issues.length);
