import type { FlooringId, KitchenId, Prefs, StyleId, TimeOfDay, UnitPlan, View } from "./types";
import type { Hotspot } from "./interior";
import { STYLE_DEFAULTS, WALL_SWATCHES } from "./materials";
import { PENTHOUSE_FLOOR, TYPICAL_FLOORS, areaLabel, describeFloor, unitCode } from "./layout";

export interface UIHandlers {
  onGotoTower: () => void;
  onGotoFloor: (f: number) => void;
  onGotoUnit: (floor: number, unitId: string) => void;
  onCam: (cam: "dollhouse" | "walk") => void;
  onPrefs: (p: Prefs) => void;
  onBook: (data: { name: string; phone: string; unit: string }) => void;
  onTime: (t: TimeOfDay) => void;
  onCloseSpec?: () => void;
}

export class HUD {
  root: HTMLElement;
  prefs: Prefs;
  view: View = { kind: "tower", hoverFloor: null };
  tv: boolean;
  plans: Record<string, UnitPlan>;
  handlers: UIHandlers;
  private formOpen = false;
  private currentUnit = "";
  time: TimeOfDay = "morning";
  spec: Hotspot | null = null;

  constructor(
    root: HTMLElement,
    prefs: Prefs,
    plans: Record<string, UnitPlan>,
    tv: boolean,
    handlers: UIHandlers,
  ) {
    this.root = root;
    this.prefs = { ...prefs };
    this.plans = plans;
    this.tv = tv;
    this.handlers = handlers;
    if (tv) document.body.classList.add("tv");
  }

  setView(v: View) {
    this.view = v;
    document.body.classList.toggle("walking", v.kind === "flat" && v.cam === "walk");
    this.render();
  }

  setHoverFloor(f: number | null) {
    if (this.view.kind === "tower") {
      this.view = { ...this.view, hoverFloor: f };
      this.updateFloorButtons();
    }
  }

  setTime(t: TimeOfDay) {
    this.time = t;
    this.render();
  }

  showSpec(h: Hotspot) {
    this.spec = h;
    this.render();
  }

  closeSpec() {
    this.spec = null;
    this.render();
    this.handlers.onCloseSpec?.();
  }

  toast(msg: string) {
    let t = this.root.querySelector(".toast") as HTMLElement | null;
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      this.root.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    setTimeout(() => t && t.classList.remove("show"), 3200);
  }

  render() {
    const v = this.view;
    this.root.innerHTML = "";
    this.root.appendChild(this.topbar());
    const disc = document.createElement("div");
    disc.className = "disclaimer";
    disc.textContent = "Illustrative visualisation, not the finished unit. Sample tower for Lead Setu — not a real project.";
    this.root.appendChild(disc);

    if (this.tv) {
      const b = document.createElement("div");
      b.className = "tv-badge";
      b.textContent = "TV / kiosk mode";
      this.root.appendChild(b);
    }

    const hint = document.createElement("div");
    hint.className = "hint";
    hint.innerHTML = this.hintText();
    this.root.appendChild(hint);

    this.root.appendChild(this.timePill());
    if (this.spec) this.root.appendChild(this.specCard());

    if (v.kind === "tower") this.root.appendChild(this.floorRail());
    if (v.kind === "flat") this.root.appendChild(this.panel());

    // joystick
    const joy = document.createElement("div");
    joy.className = "joy-wrap";
    joy.innerHTML = `<div class="joy-base" id="joy-base"><div class="joy-knob" id="joy-knob"></div></div>`;
    this.root.appendChild(joy);

    const ch = document.createElement("div");
    ch.className = "crosshair";
    this.root.appendChild(ch);

    if (this.formOpen) this.root.appendChild(this.form());

    const toast = document.createElement("div");
    toast.className = "toast";
    this.root.appendChild(toast);

    this.bindTvKeys();
  }

  private topbar(): HTMLElement {
    const bar = document.createElement("div");
    bar.className = "topbar";
    bar.innerHTML = `
      <a class="brand" href="#" data-tv="brand">
        <svg width="28" height="28" viewBox="0 0 36 36" fill="none" aria-hidden="true">
          <path d="M6 22 L18 8 L30 22" stroke="currentColor" stroke-width="2.2"/>
          <path d="M10 22 L18 13.5 L26 22" stroke="currentColor" stroke-width="2.2"/>
          <circle cx="18" cy="25.5" r="2.2" fill="currentColor"/>
        </svg>
        <span class="full">Lead Setu</span>
      </a>
      <div class="crumbs"></div>
      <button class="cta" type="button" data-tv="cta" data-action="book">Book site visit</button>
    `;
    const crumbs = bar.querySelector(".crumbs")!;
    crumbs.appendChild(this.crumbs());
    bar.querySelector(".brand")!.addEventListener("click", (e) => {
      e.preventDefault();
      this.handlers.onGotoTower();
    });
    bar.querySelector("[data-action=book]")!.addEventListener("click", () => this.openForm());
    return bar;
  }

  private crumbs(): HTMLElement {
    const wrap = document.createElement("div");
    wrap.style.display = "flex";
    wrap.style.alignItems = "center";
    wrap.style.gap = "6px";
    wrap.style.flexWrap = "wrap";
    const v = this.view;
    const addBtn = (label: string, fn: () => void, here = false) => {
      if (here) {
        const s = document.createElement("span");
        s.className = "crumb-here";
        s.textContent = label;
        wrap.appendChild(s);
      } else {
        const b = document.createElement("button");
        b.type = "button";
        b.textContent = label;
        b.addEventListener("click", fn);
        wrap.appendChild(b);
      }
    };
    const sep = () => {
      const s = document.createElement("span");
      s.className = "crumb-sep";
      s.textContent = "›";
      wrap.appendChild(s);
    };
    addBtn("Tower", () => this.handlers.onGotoTower(), v.kind === "tower");
    if (v.kind === "floor" || v.kind === "flat") {
      sep();
      addBtn(describeFloor(v.floor), () => this.handlers.onGotoFloor(v.floor), v.kind === "floor");
    }
    if (v.kind === "flat") {
      sep();
      const [fl, ...rest] = [v.floor, v.unitId.replace(/^\d+/, "")];
      const suffix = v.unitId.replace(/^\d+/, "");
      const plan = this.planForUnit(v.unitId);
      addBtn(`${v.unitId} ${plan?.name ?? ""}`.trim(), () => {}, true);
      void fl; void rest; void suffix;
    }
    return wrap;
  }

  planForUnit(unitId: string): UnitPlan | undefined {
    if (unitId.endsWith("PH")) return this.plans.penthouse;
    if (unitId.endsWith("C")) return this.plans["3bhk"];
    return this.plans["2bhk"];
  }

  private floorRail(): HTMLElement {
    const rail = document.createElement("div");
    rail.className = "floors";
    rail.setAttribute("role", "listbox");
    rail.setAttribute("aria-label", "Floors");
    const hover = this.view.kind === "tower" ? this.view.hoverFloor : null;
    for (let f = 1; f <= TYPICAL_FLOORS + 1; f++) {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.floor = String(f);
      b.dataset.tv = `floor-${f}`;
      if (f === PENTHOUSE_FLOOR) {
        b.innerHTML = `<span class="ph">PH</span>`;
        b.title = "Penthouse";
      } else {
        b.textContent = String(f);
      }
      if (hover === f) b.classList.add("hov");
      b.addEventListener("mouseenter", () => this.setHoverFloor(f));
      b.addEventListener("click", () => this.handlers.onGotoFloor(f));
      rail.appendChild(b);
    }
    return rail;
  }

  private updateFloorButtons() {
    const hover = this.view.kind === "tower" ? this.view.hoverFloor : null;
    this.root.querySelectorAll(".floors button").forEach((b) => {
      const f = Number((b as HTMLElement).dataset.floor);
      b.classList.toggle("hov", f === hover);
    });
  }

  private panel(): HTMLElement {
    const p = document.createElement("aside");
    p.className = "panel";
    p.innerHTML = `
      <h2>Your preferences</h2>
      <p class="lede">Changes apply live. These finishes are illustrative.</p>
      <section>
        <h3>Style preset</h3>
        <div class="seg" data-seg="style">
          ${this.segBtn("style", "modern", "Modern")}
          ${this.segBtn("style", "luxury", "Luxury")}
          ${this.segBtn("style", "minimal", "Minimal")}
          ${this.segBtn("style", "traditional", "Traditional Indian")}
        </div>
      </section>
      <section>
        <h3>Flooring</h3>
        <div class="seg" data-seg="flooring">
          ${this.segBtn("flooring", "marble", "Marble")}
          ${this.segBtn("flooring", "wood", "Wood")}
          ${this.segBtn("flooring", "tile", "Tile")}
        </div>
      </section>
      <section>
        <h3>Wall colour</h3>
        <div class="swatches"></div>
      </section>
      <section>
        <h3>Kitchen finish</h3>
        <div class="seg" data-seg="kitchen">
          ${this.segBtn("kitchen", "white", "White")}
          ${this.segBtn("kitchen", "walnut", "Walnut")}
          ${this.segBtn("kitchen", "black", "Matte black")}
          ${this.segBtn("kitchen", "granite", "Granite")}
        </div>
      </section>
      <section class="toggle">
        <label for="fur">Furniture</label>
        <input id="fur" type="checkbox" ${this.prefs.furniture ? "checked" : ""} data-tv="fur"/>
      </section>
      <section>
        <h3>View</h3>
        <div class="seg" data-seg="cam">
          ${this.view.kind === "flat" && this.view.cam === "dollhouse"
            ? `<button type="button" class="on" data-cam="dollhouse" aria-pressed="true">Dollhouse</button>`
            : `<button type="button" data-cam="dollhouse" aria-pressed="false">Dollhouse</button>`}
          ${this.view.kind === "flat" && this.view.cam === "walk"
            ? `<button type="button" class="on" data-cam="walk" aria-pressed="true">Walk through</button>`
            : `<button type="button" data-cam="walk" aria-pressed="false">Walk through</button>`}
        </div>
      </section>
    `;
    p.querySelectorAll("[data-style]").forEach((b) =>
      b.addEventListener("click", () => {
        const id = (b as HTMLElement).dataset.style as StyleId;
        const d = STYLE_DEFAULTS[id];
        this.prefs = { ...this.prefs, style: id, flooring: d.flooring, wallColor: d.wall, kitchen: d.kitchen };
        this.handlers.onPrefs(this.prefs);
        this.render();
      }),
    );
    p.querySelectorAll("[data-flooring]").forEach((b) =>
      b.addEventListener("click", () => {
        this.prefs = { ...this.prefs, flooring: (b as HTMLElement).dataset.flooring as FlooringId };
        this.handlers.onPrefs(this.prefs);
        this.render();
      }),
    );
    p.querySelectorAll("[data-kitchen]").forEach((b) =>
      b.addEventListener("click", () => {
        this.prefs = { ...this.prefs, kitchen: (b as HTMLElement).dataset.kitchen as KitchenId };
        this.handlers.onPrefs(this.prefs);
        this.render();
      }),
    );
    p.querySelectorAll("[data-cam]").forEach((b) =>
      b.addEventListener("click", () => {
        this.handlers.onCam((b as HTMLElement).dataset.cam as "dollhouse" | "walk");
      }),
    );
    const sw = p.querySelector(".swatches")!;
    for (const s of WALL_SWATCHES) {
      const btn = document.createElement("button");
      btn.className = "swatch" + (this.prefs.wallColor.toLowerCase() === s.color.toLowerCase() ? " on" : "");
      btn.style.background = s.color;
      btn.title = s.name;
      btn.type = "button";
      btn.dataset.tv = `wall-${s.id}`;
      btn.addEventListener("click", () => {
        this.prefs = { ...this.prefs, wallColor: s.color };
        this.handlers.onPrefs(this.prefs);
        this.render();
      });
      sw.appendChild(btn);
    }
    p.querySelector("#fur")!.addEventListener("change", (e) => {
      this.prefs = { ...this.prefs, furniture: (e.target as HTMLInputElement).checked };
      this.handlers.onPrefs(this.prefs);
    });
    return p;
  }

  private segBtn(attr: string, value: string, label: string): string {
    const on =
      (attr === "style" && this.prefs.style === value) ||
      (attr === "flooring" && this.prefs.flooring === value) ||
      (attr === "kitchen" && this.prefs.kitchen === value);
    return `<button type="button" data-${attr}="${value}" data-tv="${attr}-${value}" class="${on ? "on" : ""}" aria-pressed="${on}">${label}</button>`;
  }


  private timePill(): HTMLElement {
    const wrap = document.createElement("div");
    wrap.className = "time-pill";
    wrap.setAttribute("role", "radiogroup");
    wrap.setAttribute("aria-label", "Time of day");
    const opts: { id: TimeOfDay; label: string }[] = [
      { id: "morning", label: "Morning" },
      { id: "golden", label: "Golden hour" },
      { id: "night", label: "Night" },
    ];
    for (const o of opts) {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.time = o.id;
      b.dataset.tv = `time-${o.id}`;
      b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", String(this.time === o.id));
      if (this.time === o.id) b.classList.add("on");
      b.textContent = o.label;
      b.addEventListener("click", () => this.handlers.onTime(o.id));
      wrap.appendChild(b);
    }
    return wrap;
  }

  private specCard(): HTMLElement {
    const h = this.spec!;
    const card = document.createElement("aside");
    card.className = "spec-card";
    const areaSqft = Math.round(h.area_m2 * 10.7639);
    const finish = this.specFinish(h);
    card.innerHTML = `
      <button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>
      <div class="spec-k">${this.specKindLabel(h.kind)}</div>
      <h2>${escapeAttr(h.title)}</h2>
      <p class="spec-area">${h.area_m2.toFixed(1)} m² · ${areaSqft.toLocaleString()} sq ft · as labelled on the drawing</p>
      ${finish}
      ${h.note ? `<p class="spec-note">${escapeAttr(h.note)}</p>` : ""}
    `;
    card.querySelector(".spec-close")!.addEventListener("click", () => this.closeSpec());
    return card;
  }

  private specKindLabel(k: Hotspot["kind"]): string {
    if (k === "kitchen") return "Kitchen finish";
    if (k === "bath") return "Bathroom";
    return "Outlook";
  }

  private specFinish(h: Hotspot): string {
    const kitchen: Record<KitchenId, string> = {
      white: "White",
      walnut: "Walnut",
      black: "Matte black",
      granite: "Granite",
    };
    const floor: Record<FlooringId, string> = {
      marble: "Marble",
      wood: "Wood",
      tile: "Tile",
    };
    if (h.kind === "kitchen") {
      return `<p class="spec-fin"><span>Cabinets &amp; counter</span><b>${kitchen[this.prefs.kitchen]}</b></p>
        <p class="spec-hint">Change this live under Kitchen finish in Your preferences.</p>`;
    }
    if (h.kind === "bath") {
      return `<p class="spec-fin"><span>Floor</span><b>${floor[this.prefs.flooring]}</b></p>
        <p class="spec-fin"><span>Walls</span><b>Follow the wall colour in Your preferences</b></p>
        <p class="spec-hint">Sizes are taken from the room polygon on the source plan.</p>`;
    }
    return `<p class="spec-fin"><span>From the plan</span><b>${escapeAttr(h.roomName)}</b></p>
      <p class="spec-hint">Outlook is illustrative. The drawing is the source of the size; the view itself is a visualisation.</p>`;
  }

  private hintText(): string {
    if (this.tv) {
      if (this.view.kind === "tower")
        return `<b>TV remote</b><br>↑ ↓ choose a floor · <kbd>Enter</kbd> open it · <kbd>Esc</kbd> back`;
      if (this.view.kind === "floor")
        return `<b>TV remote</b><br>← → choose a flat · <kbd>Enter</kbd> walk in · <kbd>Esc</kbd> back to the tower`;
      if (this.view.kind === "flat" && this.view.cam === "walk")
        return `<b>TV remote</b><br>↑ walk · ↓ back · ← → turn · <kbd>Enter</kbd> dollhouse · <kbd>Esc</kbd> back`;
      return `<b>TV remote</b><br>← → orbit · <kbd>Enter</kbd> walk through · <kbd>Esc</kbd> back`;
    }
    if (this.view.kind === "tower")
      return `Drag to orbit. Click a floor — or use the list — to go in.`;
    if (this.view.kind === "floor")
      return `Click a flat to open it. Drag to orbit.`;
    if (this.view.kind === "flat" && this.view.cam === "walk")
      return `Click the floor to walk there. <kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> or the joystick to walk, click to look around. Gold pins open a room’s finishes. <kbd>Esc</kbd> back.`;
    return `Drag to orbit the dollhouse. Click the floor to walk there, or a gold pin for a closer look and a spec card.`;
  }

  openForm() {
    this.currentUnit = this.unitOfInterest();
    this.formOpen = true;
    this.render();
    const name = this.root.querySelector<HTMLInputElement>("#lead-name");
    name?.focus();
  }

  closeForm() {
    this.formOpen = false;
    this.render();
  }

  unitOfInterest(): string {
    const v = this.view;
    if (v.kind === "flat") {
      const plan = this.planForUnit(v.unitId);
      return `${v.unitId} ${plan?.name ?? ""}`.trim();
    }
    if (v.kind === "floor") return describeFloor(v.floor);
    return "Sample Tower (floor not chosen)";
  }

  private form(): HTMLElement {
    const bg = document.createElement("div");
    bg.className = "modal-bg";
    bg.innerHTML = `
      <form class="modal" data-tv-root="form">
        <h2>Book a site visit</h2>
        <p>Leave your name and phone. In the product, this creates a lead in Lead Setu. This demo stores it only in your browser.</p>
        <label for="lead-name">Name</label>
        <input id="lead-name" name="name" required autocomplete="name" data-tv="name"/>
        <label for="lead-phone">Phone</label>
        <input id="lead-phone" name="phone" required inputmode="tel" autocomplete="tel" data-tv="phone"/>
        <label for="lead-unit">Unit of interest</label>
        <input id="lead-unit" name="unit" value="${escapeAttr(this.currentUnit)}" data-tv="unit"/>
        <div class="row">
          <button type="button" class="ghost" data-action="cancel">Cancel</button>
          <button type="submit" class="cta" data-tv="submit">Send request</button>
        </div>
        <p class="hint-api">TODO: POST this payload to the Lead Setu API (name, phone, project, unit, session id) and hand the lead to the existing follow-up pipeline.</p>
      </form>
    `;
    bg.addEventListener("click", (e) => { if (e.target === bg) this.closeForm(); });
    bg.querySelector("[data-action=cancel]")!.addEventListener("click", () => this.closeForm());
    bg.querySelector("form")!.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(e.target as HTMLFormElement);
      const name = String(fd.get("name") || "").trim();
      const phone = String(fd.get("phone") || "").trim();
      const unit = String(fd.get("unit") || "").trim();
      if (!name || !phone) return;
      this.closeForm();
      this.handlers.onBook({ name, phone, unit });
    });
    return bg;
  }

  private bindTvKeys() {
    // TV focus is handled in main via a focus ring on [data-tv] elements.
  }
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
}

export function storeLead(data: { name: string; phone: string; unit: string }) {
  const key = "leadsetu-3d-demo-leads";
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  const row = {
    ...data,
    project: "Lead Setu Sample Tower",
    at: new Date().toISOString(),
    // TODO: POST /api/leads { name, phone, project, unit, sessionId } to Lead Setu
  };
  existing.push(row);
  localStorage.setItem(key, JSON.stringify(existing));
  console.info("[Lead Setu demo] site-visit request (local only)", row);
  return row;
}

export { unitCode, areaLabel };
