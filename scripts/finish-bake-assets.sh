#!/usr/bin/env bash
# Convert raw Cycles bake outputs to phone-budget assets.
# Usage: scripts/finish-bake-assets.sh /tmp/bake-full-v4/2bhk-modern /workspace/leadsetu-3d-demo/public/baked
set -euo pipefail
SRC_PREFIX="${1:?source prefix, e.g. /tmp/bake-full-v4/2bhk-modern}"
DEST="${2:?dest dir}"
SRC_DIR=$(dirname "$SRC_PREFIX")
NAME=$(basename "$SRC_PREFIX")
mkdir -p "$DEST" /tmp/bake-finish
python3 - << PY
from pathlib import Path
from PIL import Image
src = Path("$SRC_DIR")
dest = Path("$DEST")
dest.mkdir(parents=True, exist_ok=True)
total = 0
for png in sorted(src.glob("$NAME-*.png")):
    if "preview" in png.name:
        continue
    webp = dest / (png.stem + ".webp")
    im = Image.open(png)
    if im.mode not in ("RGB", "RGBA"):
        im = im.convert("RGB")
    else:
        im = im.convert("RGB")
    im.save(webp, "WEBP", quality=90, method=4)
    print(f"webp {webp.name} {webp.stat().st_size} {im.size}", flush=True)
    total += webp.stat().st_size
print("webp_total", total, flush=True)
PY
# meshopt only (no prune — prune drops unused TEXCOORD_1)
GLB_IN="${SRC_PREFIX}.glb"
GLB_OUT="${DEST}/${NAME}.glb"
if [[ -f "$GLB_IN" ]]; then
  npx --yes gltf-transform meshopt "$GLB_IN" /tmp/bake-finish/${NAME}-mo.glb
  # inspect TEXCOORD_1 on floor-living
  npx --yes gltf-transform inspect /tmp/bake-finish/${NAME}-mo.glb | rg 'floor-living|TEXCOORD_1' | head -8
  cp /tmp/bake-finish/${NAME}-mo.glb "$GLB_OUT"
  echo "glb $(wc -c < "$GLB_OUT") -> $GLB_OUT"
fi
echo "DONE $DEST"
ls -la "$DEST"/${NAME}*
