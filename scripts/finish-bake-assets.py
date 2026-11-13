#!/usr/bin/env python3
"""Convert raw Cycles bake outputs to phone-budget WebP + meshopt glb."""
import json, subprocess, sys
from pathlib import Path
from PIL import Image

def main():
    if len(sys.argv) < 3:
        print("usage: finish-bake-assets.py SRC_PREFIX DEST")
        sys.exit(2)
    src_prefix = Path(sys.argv[1])
    dest = Path(sys.argv[2])
    src = src_prefix.parent
    name = src_prefix.name
    dest.mkdir(parents=True, exist_ok=True)
    Path("/tmp/bake-finish").mkdir(parents=True, exist_ok=True)
    total = 0
    for png in sorted(src.glob(name + "*.png")):
        if "preview" in png.name:
            continue
        webp = dest / (png.stem + ".webp")
        im = Image.open(png).convert("RGB")
        im.save(webp, "WEBP", quality=90, method=4)
        print(f"webp {webp.name} {webp.stat().st_size} {im.size}", flush=True)
        total += webp.stat().st_size
    print("webp_total", total, flush=True)

    man_src = src / (name + "-manifest.json")
    man = json.loads(man_src.read_text()) if man_src.exists() else {}

    def fix(entry):
        if not entry:
            return
        for rid, info in entry.items():
            wp = dest / Path(info["file"]).name
            if wp.suffix != ".webp" or not wp.exists():
                stem = Path(info.get("png") or info["file"]).stem
                wp = dest / (stem + ".webp")
            if wp.exists():
                info["file"] = wp.name
                info["bytes"] = wp.stat().st_size

    fix(man.get("lightmaps"))
    fix(man.get("nightLightmaps"))

    glb_in = src_prefix.with_suffix(".glb")
    glb_out = dest / (name + ".glb")
    if glb_in.exists():
        tmp = Path("/tmp/bake-finish") / (name + "-mo.glb")
        subprocess.check_call(["npx", "--yes", "gltf-transform", "meshopt", str(glb_in), str(tmp)])
        inspect = subprocess.run(
            ["npx", "--yes", "gltf-transform", "inspect", str(tmp)],
            capture_output=True, text=True,
        )
        for line in inspect.stdout.splitlines():
            if "TEXCOORD" in line or "floor-living" in line or "UVLightmap" in line:
                print(line)
        glb_out.write_bytes(tmp.read_bytes())
        print(f"glb {glb_out.stat().st_size} -> {glb_out}", flush=True)
        man["glb"] = glb_out.name
        man["glbBytes"] = glb_out.stat().st_size

    lm = sum(i.get("bytes", 0) for i in (man.get("lightmaps") or {}).values())
    nm = sum(i.get("bytes", 0) for i in (man.get("nightLightmaps") or {}).values())
    # Initial payload is day atlases + glb. Night is lazy-loaded on first night.
    man["dayBytes"] = lm + man.get("glbBytes", 0)
    man["nightBytes"] = nm
    man["nightMB"] = round(nm / 1024 / 1024, 2)
    man["totalBytes"] = man["dayBytes"]
    man["totalMB"] = round(man["totalBytes"] / 1024 / 1024, 2)
    man["fullBytes"] = lm + nm + man.get("glbBytes", 0)
    man["fullMB"] = round(man["fullBytes"] / 1024 / 1024, 2)
    if man["totalMB"] > 15:
        print("WARNING: initial unit exceeds 15 MB phone budget", flush=True)
    print(
        f"payload day {man['totalMB']} MB (night +{man['nightMB']} MB lazy, full {man['fullMB']} MB)",
        flush=True,
    )
    man_dest = dest / (name + "-manifest.json")
    man_dest.write_text(json.dumps(man, indent=2))
    print("manifest", man_dest, "totalMB", man["totalMB"], flush=True)

if __name__ == "__main__":
    main()
