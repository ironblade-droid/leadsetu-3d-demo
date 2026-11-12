/**
 * Fail the build if any planned furniture overlaps, blocks a doorway, or
 * sits the coffee table outside the 40–45 cm sofa gap.
 *
 *   npx tsx scripts/check-layout.ts
 */
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { Prefs, UnitPlan } from "../src/types.ts";
import { UNIT_A, UNIT_B, UNIT_C, UNIT_PH } from "../src/layout.ts";
import { planUnit, STYLES } from "../src/planner.ts";
import { formatIssues } from "../src/occupancy.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function load(name: string): UnitPlan {
  return JSON.parse(readFileSync(resolve(root, "public/data", name), "utf8")) as UnitPlan;
}

function prefs(style: Prefs["style"]): Prefs {
  return { style, flooring: "wood", wallColor: "#f4f1ea", kitchen: "white", furniture: true };
}

async function main() {
  const cases = [
    { plan: load("2bhk.json"), t: UNIT_A, label: "2BHK-A" },
    { plan: load("2bhk.json"), t: UNIT_B, label: "2BHK-B" },
    { plan: load("3bhk.json"), t: UNIT_C, label: "3BHK-C" },
    { plan: load("penthouse.json"), t: UNIT_PH, label: "PH" },
  ];
  let errors = 0;
  for (const c of cases) {
    for (const style of STYLES) {
      const { issues, placements } = planUnit(c.plan, prefs(style), c.t);
      const errs = issues.filter((i) => i.severity === "error");
      const tag = `${c.label}/${style} (${placements.length} pieces)`;
      if (errs.length) {
        console.error(`FAIL ${tag}`);
        console.error(formatIssues(errs));
        errors += errs.length;
      } else {
        console.log(`OK   ${tag}`);
      }
    }
  }
  if (errors) {
    console.error(`\n${errors} layout error(s).`);
    process.exit(1);
  }
  console.log("\nAll layouts clear.");
}
void main();
