"""Capture v3 room-overview screenshots for self-QA."""
import asyncio, json, sys, os
from pathlib import Path
from playwright.async_api import async_playwright

URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:4175/"
OUT = Path(sys.argv[2] if len(sys.argv) > 2 else "/workspace/leadsetu-3d-demo/screens/v3")
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
  return { vw, vh, overlaps, boxes };
}
"""


async def wait_api(page, timeout=40000):
    await page.wait_for_function("() => window.__leadsetu && window.__leadsetu.ready", timeout=timeout)


async def settle(page, ms=900):
    await page.wait_for_timeout(ms)


async def call(page, method, *args, wait=2000):
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


async def boot(page, url):
    await page.goto(url, wait_until="networkidle", timeout=90000)
    await wait_api(page)
    await page.evaluate("""() => {
      document.getElementById('loading')?.classList.add('done');
      document.body.classList.remove('booting');
    }""")
    await settle(page, 400)


def pick(rooms, pred):
    for r in rooms:
        if pred(r):
            return r
    return None


async def shot(page, path, reports, tag):
    path.parent.mkdir(parents=True, exist_ok=True)
    await page.screenshot(path=str(path), animations="disabled")
    info = await page.evaluate(OVERLAP_JS)
    info["tag"] = tag
    info["file"] = str(path)
    reports.append(info)
    flag = f"  OVERLAPS={len(info['overlaps'])}" if info["overlaps"] else ""
    print(f"  {tag}: {path.name}{flag}", flush=True)


async def rooms_of(page):
    return await page.evaluate("() => window.__leadsetu.rooms().map(r => ({id:r.id, name:r.name, type:r.type, short:r.short, fov:r.fov}))")


async def capture_flat(page, reports, prefix, style, viewport_name, wanted):
    rooms = await rooms_of(page)
    print(f"  {prefix} rooms: {[(r['id'], r['type'], r.get('short')) for r in rooms]}", flush=True)
    mapping = {}
    for key, pred in wanted.items():
        r = pick(rooms, pred)
        if not r:
            print(f"  MISSING room {key}", flush=True)
            continue
        mapping[key] = r
        await call(page, "goRoom", r["id"], wait=2000)
        # Collapsed sheet so furniture is visible
        await page.evaluate("() => window.__leadsetu.setSheet(false)")
        await settle(page, 200)
        await shot(page, OUT / f"{prefix}{key}.png", reports, f"{viewport_name}/{style}/{key}")
    return mapping


async def run(browser, name, w, h, is_touch, reports):
    print(f"\n=== {name} ({w}x{h}) ===", flush=True)
    ctx = await browser.new_context(
        viewport={"width": w, "height": h},
        device_scale_factor=2 if w < 800 else 1,
        is_mobile=is_touch,
        has_touch=is_touch,
        user_agent=(
            "Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 "
            "(KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
            if is_touch else
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        ),
    )
    page = ctx.new_page() if False else await ctx.new_page()
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))
    page.on("console", lambda m: (print(f"  CONSOLE {m.type}: {m.text}", flush=True) if m.type in ("error", "warning") else None))

    await boot(page, URL)

    # --- 2BHK unit 3A, Modern ---
    await call(page, "setPrefs", {
        "style": "modern", "flooring": "wood", "kitchen": "white",
        "wallColor": "#f4f1ea", "furniture": True,
    }, wait=400)
    await call(page, "gotoFlat", 3, "3A", "walk", wait=2500)
    wanted_2 = {
        "living": lambda r: r["type"] == "living",
        "kitchen": lambda r: r["type"] == "kitchen",
        "master": lambda r: r["type"] == "bedroom" and ("1" in (r.get("short") or "") or "Master" in (r.get("short") or "") or r["id"] in ("bedroom1", "master")),
        "bathroom": lambda r: r["type"] == "bathroom",
        "balcony": lambda r: r["type"] == "balcony",
    }
    tag = f"after-{name}-modern-" if name != "412x915" else "after-"
    # Use required names: after-living-412, after-desktop-living, etc.
    if name == "412x915":
        prefix = "after-"
        suffix = "-412-modern"
        # we'll rename in a cleaner way below
    await capture_named(page, reports, name, "modern", wanted_2, unit="2bhk")

    # Luxury on same flat
    await call(page, "setPrefs", {
        "style": "luxury", "flooring": "marble", "kitchen": "walnut",
        "wallColor": "#f3ebe0", "furniture": True,
    }, wait=2500)
    await capture_named(page, reports, name, "luxury", wanted_2, unit="2bhk")

    # --- Penthouse ---
    await call(page, "setPrefs", {
        "style": "modern", "flooring": "wood", "kitchen": "white",
        "wallColor": "#f4f1ea", "furniture": True,
    }, wait=400)
    await call(page, "gotoFlat", 8, "8PH", "walk", wait=2800)
    wanted_ph = {
        "lounge": lambda r: r["type"] == "living",
        "kitchen": lambda r: r["type"] == "kitchen",
        "master": lambda r: r["type"] == "bedroom" and ("Master" in (r.get("short") or "") or r["id"] == "master"),
        "bathroom": lambda r: r["type"] == "bathroom" and ("Master" in (r.get("short") or "") or "master" in r["id"]),
        "terrace": lambda r: r["type"] == "terrace",
        "balcony": lambda r: r["type"] == "balcony",
    }
    await capture_named(page, reports, name, "modern", wanted_ph, unit="ph")

    await call(page, "setPrefs", {
        "style": "luxury", "flooring": "marble", "kitchen": "walnut",
        "wallColor": "#f3ebe0", "furniture": True,
    }, wait=2500)
    await capture_named(page, reports, name, "luxury", wanted_ph, unit="ph")

    if errors:
        print("  PAGE ERRORS:", errors[:8], flush=True)
        reports.append({"tag": f"{name}/errors", "errors": errors})
    await ctx.close()


async def capture_named(page, reports, viewport, style, wanted, unit):
    rooms = await rooms_of(page)
    print(f"  {unit}/{style} rooms: {[(r['id'], r['type'], r.get('short')) for r in rooms]}", flush=True)
    vp_suffix = "412" if viewport == "412x915" else "desktop"
    for key, pred in wanted.items():
        r = pick(rooms, pred)
        if not r:
            print(f"  MISSING {unit}/{key}", flush=True)
            continue
        await call(page, "goRoom", r["id"], wait=2000)
        await page.evaluate("() => window.__leadsetu.setSheet(false)")
        await settle(page, 250)
        # Names:
        # after-living-412-modern, after-desktop-living-modern,
        # after-ph-terrace-412-modern, after-desktop-ph-terrace-luxury, ...
        if unit == "ph":
            roomkey = "terrace" if key == "terrace" else f"ph-{key}"
        else:
            roomkey = key
        if viewport == "412x915":
            fname = f"after-{roomkey}-412-{style}.png"
        else:
            fname = f"after-desktop-{roomkey}-{style}.png"
        await shot(page, OUT / fname, reports, f"{viewport}/{style}/{unit}/{key}")


async def main():
    reports = []
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            executable_path="/usr/bin/google-chrome-stable",
            args=CHROME_ARGS,
        )
        await run(browser, "412x915", 412, 915, True, reports)
        await run(browser, "1280x800", 1280, 800, False, reports)
        await browser.close()
    overlaps = [(r["tag"], r["overlaps"]) for r in reports if r.get("overlaps")]
    errors = [r for r in reports if "errors" in r]
    print("\n======= SUMMARY =======", flush=True)
    print("shots", len([r for r in reports if "file" in r]), flush=True)
    print("overlaps", len(overlaps), flush=True)
    for tag, ov in overlaps:
        print(" ", tag, ov, flush=True)
    if errors:
        print("errors", errors, flush=True)
    (OUT / "v3-report.json").write_text(json.dumps({"overlaps": overlaps, "errors": errors, "all": reports}, indent=2))


if __name__ == "__main__":
    asyncio.run(main())
