"""Capture v5 exterior + night-balcony QA shots."""
import asyncio, json, sys
from pathlib import Path
from playwright.async_api import async_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:4177/"
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "/workspace/leadsetu-3d-demo/screens/v5")
OUT.mkdir(parents=True, exist_ok=True)

CHROME_ARGS = [
    "--use-gl=angle",
    "--use-angle=swiftshader",
    "--enable-webgl",
    "--ignore-gpu-blocklist",
    "--no-sandbox",
    "--disable-dev-shm-usage",
    "--enable-unsafe-swiftshader",
]

async def wait_api(page, timeout=60000):
    await page.wait_for_function("() => window.__leadsetu && window.__leadsetu.ready", timeout=timeout)

async def settle(page, ms=1000):
    await page.wait_for_timeout(ms)

async def call(page, method, *args, wait=1600):
    js_args = json.dumps(list(args))
    await page.evaluate(
        f"""async () => {{
          const a = window.__leadsetu;
          const args = {js_args};
          const r = a['{method}'](...args);
          if (r && typeof r.then === 'function') await r;
        }}"""
    )
    await settle(page, wait)

async def shot(page, name, w, h):
    # Nudge viewport so WebGL presents a fresh frame (do NOT use animations=disabled).
    await page.set_viewport_size({"width": w + 1, "height": h})
    await page.wait_for_timeout(80)
    await page.set_viewport_size({"width": w, "height": h})
    await page.wait_for_timeout(220)
    path = OUT / f"{name}.png"
    await page.screenshot(path=str(path), type="png")
    print("wrote", path, flush=True)
    return path

async def run_viewport(browser, w, h, tag):
    context = await browser.new_context(
        viewport={"width": w, "height": h},
        device_scale_factor=2 if w < 800 else 1,
    )
    page = await context.new_page()
    page.set_default_timeout(60000)
    await page.goto(URL, wait_until="domcontentloaded")
    await wait_api(page)
    await settle(page, 2500)  # let intro / HDRI settle
    await call(page, "setSheet", False, wait=400)

    # Hero golden (marketing)
    await call(page, "gotoTower", wait=800)
    await call(page, "setTime", "golden", wait=1200)
    await call(page, "setCamPose", [36, 13.5, 50], [13.7, 8, 10.6], wait=600)
    await shot(page, f"ext-golden-hero-{tag}", w, h)

    # Low 3/4 showing podium + lobby + porte-cochère
    await call(page, "setCamPose", [32, 6.5, -28], [13.7, 5, 4], wait=600)
    await shot(page, f"ext-golden-entrance-{tag}", w, h)

    # North balconies + pool
    await call(page, "setCamPose", [13.7, 8, 48], [13.7, 10, 12], wait=600)
    await shot(page, f"ext-golden-pool-{tag}", w, h)

    # Morning
    await call(page, "setTime", "morning", wait=1000)
    await call(page, "setCamPose", [36, 13.5, 50], [13.7, 8, 10.6], wait=500)
    await shot(page, f"ext-morning-hero-{tag}", w, h)

    # Night hero + entrance
    await call(page, "setTime", "night", wait=1200)
    await call(page, "setCamPose", [36, 13.5, 50], [13.7, 8, 10.6], wait=500)
    await shot(page, f"ext-night-hero-{tag}", w, h)
    await call(page, "setCamPose", [32, 6.5, -28], [13.7, 5, 4], wait=500)
    await shot(page, f"ext-night-entrance-{tag}", w, h)

    # Floor hover outline
    await call(page, "setTime", "golden", wait=800)
    await call(page, "setCamPose", [36, 13.5, 50], [13.7, 8, 10.6], wait=400)
    await call(page, "highlightFloor", 4, wait=600)
    await shot(page, f"ext-hover-f4-{tag}", w, h)

    # Night interiors: balcony, living, master of 2BHK 3A
    await call(page, "setTime", "night", wait=400)
    await call(page, "setPrefs", {"style": "modern"}, wait=200)
    await call(page, "gotoFlat", 3, "3A", "walk", wait=2000)
    rooms = await page.evaluate("() => window.__leadsetu.rooms().map(r => ({id:r.id, type:r.type, name:r.name}))")
    print("rooms", rooms, flush=True)
    balc = next((r["id"] for r in rooms if r["type"] == "balcony"), None)
    living = next((r["id"] for r in rooms if r["type"] == "living"), None)
    master = next((r["id"] for r in rooms if r["type"] == "bedroom" and "master" in (r.get("name") or "").lower()), None)
    if not master:
        master = next((r["id"] for r in rooms if r["type"] == "bedroom"), None)
    if balc:
        await call(page, "goRoom", balc, wait=1600)
        await shot(page, f"night-balcony-{tag}", w, h)
    if living:
        await call(page, "goRoom", living, wait=1600)
        await shot(page, f"night-living-{tag}", w, h)
    if master:
        await call(page, "goRoom", master, wait=1600)
        await shot(page, f"night-master-{tag}", w, h)

    # Day living oak
    await call(page, "setTime", "morning", wait=800)
    if living:
        await call(page, "goRoom", living, wait=1400)
        await shot(page, f"day-living-oak-{tag}", w, h)
    if master:
        await call(page, "goRoom", master, wait=1400)
        await shot(page, f"day-master-{tag}", w, h)
    baths = [r["id"] for r in rooms if r["type"] == "bathroom"]
    if baths:
        await call(page, "goRoom", baths[0], wait=1400)
        await shot(page, f"day-bath-{tag}", w, h)

    fps = await page.evaluate("() => window.__leadsetu.fps()")
    ao = await page.evaluate("() => window.__leadsetu.ao()")
    print("fps", fps, "ao", ao, flush=True)
    await context.close()
    return {"fps": fps, "ao": ao, "tag": tag}

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path="/usr/bin/google-chrome-stable",
            args=CHROME_ARGS,
            headless=True,
        )
        reports = []
        reports.append(await run_viewport(browser, 412, 915, "412"))
        reports.append(await run_viewport(browser, 1280, 800, "desk"))
        (OUT / "qa-meta.json").write_text(json.dumps(reports, indent=2))
        await browser.close()
        print("DONE", reports)

asyncio.run(main())
