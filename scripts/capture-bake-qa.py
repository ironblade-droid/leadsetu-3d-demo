#!/usr/bin/env python3
"""QA screenshots for a baked unit (desk 1280x800 + 412 mobile).

    python3 scripts/capture-bake-qa.py --url http://127.0.0.1:4187/ \
        --prefix baked-v6h --floor 3 --unit 3A --style modern \
        --rooms living,kitchen,bedroom1,bedroom2,bathroom,ensuite
"""
import argparse, asyncio, json
from pathlib import Path
from playwright.async_api import async_playwright

STYLE_PREFS = {
    "modern": {"style": "modern", "flooring": "wood", "wallColor": "#f4f1ea", "kitchen": "white", "furniture": True},
    "luxury": {"style": "luxury", "flooring": "marble", "wallColor": "#f3ebe0", "kitchen": "walnut", "furniture": True},
    "minimal": {"style": "minimal", "flooring": "tile", "wallColor": "#f7f7f5", "kitchen": "white", "furniture": True},
    "traditional": {"style": "traditional", "flooring": "marble", "wallColor": "#f3e6d0", "kitchen": "granite", "furniture": True},
}

ARGS = [
    "--use-gl=angle", "--use-angle=swiftshader", "--enable-webgl",
    "--ignore-gpu-blocklist", "--no-sandbox", "--disable-dev-shm-usage",
    "--enable-unsafe-swiftshader",
]


async def call(page, method, *args, wait=900):
    js = json.dumps(list(args))
    await page.evaluate(
        f"""async () => {{
      const a = window.__leadsetu; const args = {js};
      const r = a['{method}'](...args);
      if (r && typeof r.then === 'function') await r;
    }}"""
    )
    await page.wait_for_timeout(wait)


async def hide(page):
    await page.evaluate(
        """() => {
      if (!document.getElementById('qa-hide')) {
        const s = document.createElement('style');
        s.id = 'qa-hide';
        s.textContent = '.floors-dock,.units-dock,.sheet{display:none!important}';
        document.head.appendChild(s);
      }
    }"""
    )


async def shot(page, out: Path, name: str, w=1280, h=800):
    await hide(page)
    await page.set_viewport_size({"width": w, "height": h})
    await page.wait_for_timeout(800)
    path = out / f"{name}.png"
    await page.screenshot(path=str(path), type="png", timeout=45000)
    fps = await page.evaluate("() => window.__leadsetu.fps && window.__leadsetu.fps()")
    print("wrote", path.name, path.stat().st_size, "fps", fps, flush=True)


async def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--url", default="http://127.0.0.1:4187/")
    ap.add_argument("--out", default="/workspace/leadsetu-3d-demo/screens/v5/bake")
    ap.add_argument("--prefix", required=True)
    ap.add_argument("--floor", type=int, default=3)
    ap.add_argument("--unit", default="3A")
    ap.add_argument("--style", default="modern")
    ap.add_argument("--rooms", default="living,kitchen,bedroom1,bedroom2,bathroom,ensuite")
    ap.add_argument("--night-room", default="living")
    args = ap.parse_args()
    out = Path(args.out)
    out.mkdir(parents=True, exist_ok=True)
    prefs = STYLE_PREFS[args.style]
    rooms = [r.strip() for r in args.rooms.split(",") if r.strip()]

    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path="/usr/bin/google-chrome-stable", args=ARGS, headless=True)
        ctx = await b.new_context(viewport={"width": 1280, "height": 800})
        page = await ctx.new_page()
        page.set_default_timeout(90000)
        await page.goto(args.url, wait_until="domcontentloaded")
        await page.wait_for_function("() => window.__leadsetu && window.__leadsetu.ready", timeout=90000)
        await call(page, "setPrefs", prefs, wait=500)
        await call(page, "gotoFlat", args.floor, args.unit, "walk", wait=10000)
        await hide(page)
        rooms_now = await page.evaluate(
            "() => window.__leadsetu.rooms().map(r => ({id:r.id, name:r.name, type:r.type}))"
        )
        print("rooms", rooms_now, flush=True)
        available = {r["id"] for r in rooms_now}
        for rid in rooms:
            if rid not in available:
                print("MISSING", rid, flush=True)
                continue
            await call(page, "goRoom", rid, wait=2000)
            await shot(page, out, f"{args.prefix}-{rid}-day-desk")
            await shot(page, out, f"{args.prefix}-{rid}-day-412", w=412, h=892)
        if args.night_room and args.night_room in available:
            await call(page, "goRoom", args.night_room, wait=1500)
            await call(page, "setTime", "night", wait=4000)
            await shot(page, out, f"{args.prefix}-{args.night_room}-night-desk")
            await shot(page, out, f"{args.prefix}-{args.night_room}-night-412", w=412, h=892)
            await call(page, "setTime", "morning", wait=1500)
        await ctx.close()
        await b.close()
        print("DONE", flush=True)


asyncio.run(main())
