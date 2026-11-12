"""Capture v2 screenshots and report overlaps/clipping."""
import asyncio, json, sys
from pathlib import Path
from playwright.async_api import async_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:4174/"
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "/workspace/leadsetu-3d-demo/screens")
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

OVERLAP_JS = r"""
() => {
  const vw = window.innerWidth, vh = window.innerHeight;
  const sel = [
    '.topbar', '.menu-pop', '.dock', '.sheet', '.room-dock',
    '.tour-card', '.spec-card', '.joy-wrap', '.zoom-stack',
    '.toast.show', '.modal', '.modal-bg', '.tv-badge',
    '.chip-row', '.hotspot-lab:not(.is-hidden)'
  ].join(',');
  const nodes = [...document.querySelectorAll(sel)].filter((el) => {
    const st = getComputedStyle(el);
    if (st.display === 'none' || st.visibility === 'hidden' || Number(st.opacity) < 0.05) return false;
    if (el.hidden) return false;
    const r = el.getBoundingClientRect();
    return r.width >= 4 && r.height >= 4;
  });
  const box = (el) => {
    const r = el.getBoundingClientRect();
    const name = (el.className && typeof el.className === 'string' ? el.className : el.id || el.tagName)
      .toString().split(' ').slice(0, 3).join('.');
    return { name, x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) };
  };
  const boxes = nodes.map(box);
  const overlaps = [];
  const intersects = (a, b) => {
    const ix = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
    const iy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
    return ix > 8 && iy > 8;
  };
  const isRelated = (i, j) => nodes[i].contains(nodes[j]) || nodes[j].contains(nodes[i]);
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (isRelated(i, j)) continue;
      if (intersects(boxes[i], boxes[j])) overlaps.push([boxes[i], boxes[j]]);
    }
  }
  const clipped = boxes.filter((b) => b.x < -2 || b.y < -2 || b.x + b.w > vw + 2 || b.y + b.h > vh + 2);
  return { vw, vh, overlaps, clipped, boxes };
}
"""


async def wait_api(page, timeout=25000):
    await page.wait_for_function("() => window.__leadsetu && window.__leadsetu.ready", timeout=timeout)


async def settle(page, ms=900):
    await page.wait_for_timeout(ms)


async def shot(page, path: Path, reports: list, tag: str):
    path.parent.mkdir(parents=True, exist_ok=True)
    await page.screenshot(path=str(path), animations="disabled")
    info = await page.evaluate(OVERLAP_JS)
    info["tag"] = tag
    info["file"] = str(path)
    reports.append(info)
    flag = ""
    if info["overlaps"]:
        flag += f"  OVERLAPS={len(info['overlaps'])}"
    if info["clipped"]:
        flag += f"  CLIPPED={len(info['clipped'])}"
    print(f"  {tag}: {path.name}{flag}")
    return info


async def api(page, expr: str):
    return await page.evaluate(f"() => {{ const a = window.__leadsetu; return {expr}; }}")


async def call(page, method: str, *args, wait=1400):
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


async def run_viewport(browser, name, w, h, is_touch, reports):
    print(f"\n=== {name} ({w}x{h}) ===")
    prefix = f"v2-{name}-"
    ctx = await browser.new_context(
        viewport={"width": w, "height": h},
        device_scale_factor=2 if w < 800 else 1,
        is_mobile=is_touch,
        has_touch=is_touch,
        user_agent=(
            "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
            if is_touch else None
        ),
    )
    page = await ctx.new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))

    # Onboarding
    await page.goto(URL + "?hold=1", wait_until="networkidle", timeout=60000)
    await wait_api(page)
    await settle(page, 600)
    await shot(page, OUT / f"{prefix}onboarding.png", reports, f"{name}/onboarding")

    # Dismiss and go through the flow
    await page.goto(URL, wait_until="networkidle", timeout=60000)
    await wait_api(page)
    # dismiss loading if still up
    await page.evaluate("""() => {
      document.getElementById('loading')?.classList.add('done');
      document.body.classList.remove('booting');
    }""")
    await settle(page, 1200)
    await shot(page, OUT / f"{prefix}tower.png", reports, f"{name}/tower")

    await call(page, "setTime", "night", wait=700)
    await shot(page, OUT / f"{prefix}tower-night.png", reports, f"{name}/tower-night")
    await call(page, "setTime", "morning", wait=500)

    await call(page, "gotoFloor", 3, wait=1800)
    await shot(page, OUT / f"{prefix}floor.png", reports, f"{name}/floor")
    await shot(page, OUT / f"{prefix}flat-picker.png", reports, f"{name}/flat-picker")

    # 3 BHK dollhouse
    await call(page, "gotoFlat", 3, "3C", "dollhouse", wait=2000)
    await shot(page, OUT / f"{prefix}dollhouse.png", reports, f"{name}/dollhouse")

    # Walk — foyer spawn
    await call(page, "setCam", "walk", wait=1500)
    await shot(page, OUT / f"{prefix}walk.png", reports, f"{name}/walk")

    # Each major room (2-3 shots) + living already maybe foyer
    rooms = await api(page, "a.rooms().map(r => ({id:r.id, name:r.name, type:r.type}))")
    print(f"  rooms: {[r['name'] for r in rooms]}")
    # Pause any tour
    for r in rooms:
        # only photograph a representative set to keep runtime reasonable,
        # but visit every room so we know fly works.
        await call(page, "goRoom", r["id"], wait=1500)
        slug = r["id"].replace(" ", "-")
        # screenshot every room on the primary 412 viewport; others just a few
        if name in ("412x915", "1440x900") or r["type"] in ("living", "kitchen", "bedroom", "foyer"):
            await shot(page, OUT / f"{prefix}room-{slug}.png", reports, f"{name}/room-{slug}")

    # Guided tour (paused so the card is stable)
    await call(page, "startTour", wait=1800)
    await call(page, "setTourPlaying", False, wait=400)
    await shot(page, OUT / f"{prefix}guided-tour.png", reports, f"{name}/guided-tour")
    await call(page, "tourStep", 1, wait=1500)
    await shot(page, OUT / f"{prefix}guided-tour-next.png", reports, f"{name}/guided-tour-next")
    await call(page, "stopTour", wait=400)

    # Sheet collapsed (default) already seen; expand
    await call(page, "setCam", "dollhouse", wait=1200)
    await call(page, "setSheet", False, wait=400)
    await shot(page, OUT / f"{prefix}sheet-collapsed.png", reports, f"{name}/sheet-collapsed")
    await call(page, "setSheet", True, wait=500)
    await shot(page, OUT / f"{prefix}sheet-expanded.png", reports, f"{name}/sheet-expanded")

    # Style + night
    await call(page, "setSheet", False, wait=300)
    await call(page, "setPrefs", {"style": "luxury", "flooring": "marble", "kitchen": "walnut", "wallColor": "#f3ebe0", "furniture": True}, wait=1600)
    await shot(page, OUT / f"{prefix}style-luxury.png", reports, f"{name}/style-luxury")
    await call(page, "setTime", "night", wait=800)
    await call(page, "setCam", "walk", wait=1400)
    # go to living so we see a furnished night room, not a wall
    rooms2 = await api(page, "a.rooms()")
    living = next((r for r in rooms2 if r.get("type") == "living"), rooms2[0] if rooms2 else None)
    if living:
        await call(page, "goRoom", living["id"], wait=1500)
    await shot(page, OUT / f"{prefix}walk-night.png", reports, f"{name}/walk-night")
    await call(page, "setTime", "golden", wait=700)
    await call(page, "setCam", "dollhouse", wait=1200)
    await shot(page, OUT / f"{prefix}golden.png", reports, f"{name}/golden")
    await call(page, "setTime", "morning", wait=400)
    await call(page, "setPrefs", {"style": "traditional", "flooring": "marble", "kitchen": "granite", "wallColor": "#f3e6d0", "furniture": True}, wait=1500)
    await shot(page, OUT / f"{prefix}style-traditional.png", reports, f"{name}/style-traditional")

    # Lead form + toast
    await call(page, "openForm", wait=400)
    await shot(page, OUT / f"{prefix}lead-form.png", reports, f"{name}/lead-form")
    await call(page, "submitLead", "Test Visitor", "9876543210", wait=600)
    await shot(page, OUT / f"{prefix}toast.png", reports, f"{name}/toast")

    if errors:
        print("  PAGE ERRORS:", errors[:5])
        reports.append({"tag": f"{name}/errors", "errors": errors})

    await ctx.close()


async def run_tv(browser, reports):
    print("\n=== TV 1440x900 ===")
    ctx = await browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page = await ctx.new_page()
    await page.goto(URL + "?tv=1", wait_until="networkidle", timeout=60000)
    await wait_api(page)
    await page.evaluate("""() => {
      document.getElementById('loading')?.classList.add('done');
      document.body.classList.remove('booting');
    }""")
    await settle(page, 1400)
    await shot(page, OUT / "v2-tv-tower.png", reports, "tv/tower")
    await call(page, "gotoFloor", 8, wait=1800)
    await call(page, "gotoFlat", 8, "8PH", "dollhouse", wait=2000)
    await shot(page, OUT / "v2-tv-penthouse.png", reports, "tv/penthouse")
    await call(page, "startTour", wait=1800)
    await call(page, "setTourPlaying", False, wait=400)
    await shot(page, OUT / "v2-tv-tour.png", reports, "tv/tour")
    await ctx.close()


async def main():
    reports = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            executable_path="/usr/bin/google-chrome-stable",
            args=CHROME_ARGS,
        )
        await run_viewport(browser, "360x800", 360, 800, True, reports)
        await run_viewport(browser, "412x915", 412, 915, True, reports)
        await run_viewport(browser, "915x412", 915, 412, True, reports)
        await run_viewport(browser, "1440x900", 1440, 900, False, reports)
        await run_tv(browser, reports)
        await browser.close()

    summary = {
        "shots": len([r for r in reports if "file" in r]),
        "overlaps": [(r["tag"], r["overlaps"]) for r in reports if r.get("overlaps")],
        "clipped": [(r["tag"], r["clipped"]) for r in reports if r.get("clipped")],
        "errors": [r for r in reports if "errors" in r],
    }
    out = OUT / "v2-report.json"
    out.write_text(json.dumps({"summary": summary, "all": reports}, indent=2))
    print("\n======= SUMMARY =======")
    print("shots", summary["shots"])
    print("screens with overlaps", len(summary["overlaps"]))
    for tag, ov in summary["overlaps"]:
        print("  ", tag, ov)
    print("screens with clipping", len(summary["clipped"]))
    for tag, cl in summary["clipped"]:
        print("  ", tag, cl)
    if summary["errors"]:
        print("errors", summary["errors"])


if __name__ == "__main__":
    asyncio.run(main())
