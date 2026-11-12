import type { FlooringId, KitchenId, Prefs, StyleId, TimeOfDay, UnitPlan, View } from "./types";
import type { Hotspot } from "./interior";
import type { RoomStop } from "./rooms";
import { finishLines } from "./rooms";
import { STYLE_DEFAULTS, WALL_SWATCHES } from "./materials";
import {
  PENTHOUSE_FLOOR,
  TYPICAL_FLOORS,
  areaLabel,
  describeFloor,
  slotsForFloor,
  unitCode,
} from "./layout";

export interface UIHandlers {
  onGotoTower: () => void;
  onGotoFloor: (f: number) => void;
  onGotoUnit: (floor: number, unitId: string) => void;
  onCam: (cam: "dollhouse" | "walk") => void;
  onPrefs: (p: Prefs) => void;
  onBook: (data: { name: string; phone: string; unit: string }) => void;
  onTime: (t: TimeOfDay) => void;
  onCloseSpec?: () => void;
  onRoom?: (id: string) => void;
  onTour?: (action: "start" | "stop" | "next" | "prev" | "toggle") => void;
  onZoom?: (dir: 1 | -1) => void;
}

export interface TourState {
  active: boolean;
  playing: boolean;
  index: number;
}

export class HUD {
  root: HTMLElement;
  prefs: Prefs;
  view: View = { kind: "tower", hoverFloor: null };
  tv: boolean;
  plans: Record<string, UnitPlan>;
  handlers: UIHandlers;
  time: TimeOfDay = "morning";
  spec: Hotspot | null = null;
  rooms: RoomStop[] = [];
  currentRoom: string | null = null;
  tour: TourState | null = null;
  sheetOpen = false;
  revealRoomCard = false;

  private formOpen = false;
  private currentUnit = "";
  private menuOpen = false;

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
    this.watchViewport();
  }

  private watchViewport() {
    const apply = () => {
      const compact = window.innerWidth < 900 || window.innerHeight < 520;
      document.body.classList.toggle("compact", compact);
      document.body.classList.toggle(
        "landscape-short",
        window.innerHeight < 520 && window.innerWidth > window.innerHeight,
      );
      this.syncLayoutVars();
    };
    apply();
    window.addEventListener("resize", apply);
  }

  setView(v: View) {
    const leavingFlat =
      this.view.kind === "flat" && (v.kind !== "flat" || (v.kind === "flat" && v.unitId !== this.view.unitId));
    if (leavingFlat) {
      this.sheetOpen = false;
      this.tour = null;
      this.currentRoom = null;
      this.rooms = [];
      if (v.kind !== "flat") this.spec = null;
    }
    this.menuOpen = false;
    this.view = v;
    document.body.classList.toggle("walking", v.kind === "flat" && v.cam === "walk");
    document.body.classList.toggle("in-flat", v.kind === "flat");
    document.body.classList.toggle("sheet-open", this.sheetOpen && v.kind === "flat");
    this.render();
  }

  setHoverFloor(f: number | null) {
    if (this.view.kind === "tower") {
      this.view = { ...this.view, hoverFloor: f };
      this.root.querySelectorAll(".chip-row [data-floor]").forEach((b) => {
        b.classList.toggle("hov", Number((b as HTMLElement).dataset.floor) === f);
      });
    }
  }

  setTime(t: TimeOfDay) {
    this.time = t;
    this.render();
  }

  setRooms(list: RoomStop[], current?: string | null) {
    this.rooms = list;
    if (current !== undefined) this.currentRoom = current;
    this.render();
  }

  setCurrentRoom(id: string | null, reveal = true) {
    this.currentRoom = id;
    this.revealRoomCard = Boolean(id) && reveal;
    // Room card lives in the collapsed sheet-info; never open the prefs body.
    this.render();
  }

  setTour(t: TourState | null) {
    this.tour = t;
    // Tour card lives in the collapsed sheet-info; leave prefs closed.
    this.render();
  }

  setPrefs(p: Prefs) {
    this.prefs = p;
  }

  setSheet(open: boolean) {
    this.sheetOpen = open;
    this.render();
  }

  showSpec(h: Hotspot) {
    this.spec = h;
    this.currentRoom = null;
    this.revealRoomCard = false;
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
    this.syncLayoutVars();
    setTimeout(() => t && t.classList.remove("show"), 3200);
  }

  render() {
    const v = this.view;
    this.root.innerHTML = "";
    this.root.appendChild(this.topbar());
    if (this.menuOpen) this.root.appendChild(this.overflowMenu());

    if (v.kind === "tower") this.root.appendChild(this.floorsDock());
    else if (v.kind === "floor") this.root.appendChild(this.unitsDock());
    else this.root.appendChild(this.flatSheet());

    this.root.appendChild(this.zoomStack());

    const joy = document.createElement("div");
    joy.className = "joy-wrap";
    joy.innerHTML = `<div class="joy-base" id="joy-base"><div class="joy-knob" id="joy-knob"></div></div>`;
    this.root.appendChild(joy);

    const ch = document.createElement("div");
    ch.className = "crosshair";
    ch.setAttribute("aria-hidden", "true");
    this.root.appendChild(ch);

    if (this.formOpen) this.root.appendChild(this.form());

    const toast = document.createElement("div");
    toast.className = "toast";
    this.root.appendChild(toast);

    document.body.classList.toggle("sheet-open", this.sheetOpen && v.kind === "flat");
    document.body.classList.toggle("form-open", this.formOpen);
    this.syncLayoutVars();
  }

  private syncLayoutVars() {
    requestAnimationFrame(() => {
      const top = this.root.querySelector(".topbar") as HTMLElement | null;
      const bot = this.root.querySelector(".dock, .sheet") as HTMLElement | null;
      const th = top ? Math.ceil(top.getBoundingClientRect().height) : 52;
      let dh = 0;
      const landscape = window.innerHeight < 520 && window.innerWidth > window.innerHeight;
      document.body.classList.toggle("landscape-short", landscape);
      const desktop = window.matchMedia("(min-width: 900px) and (min-height: 560px)").matches;
      const sideSheet =
        (landscape && this.sheetOpen) ||
        (desktop && this.view.kind === "flat");
      const sideRail = desktop && this.view.kind === "tower";
      if (bot && getComputedStyle(bot).display !== "none" && !sideSheet && !sideRail) {
        dh = Math.ceil(bot.getBoundingClientRect().height);
        // A runaway measurement (tall side panel counted as a bottom dock) must never
        // push the joystick or toast off the top of a short landscape screen.
        const cap = Math.round(window.innerHeight * 0.38);
        if (landscape && dh > cap) dh = 16;
      } else if (sideSheet || sideRail) {
        dh = 16;
      }
      const root = document.documentElement;
      root.style.setProperty("--topbar-h", `${th}px`);
      root.style.setProperty("--dock-h", `${dh}px`);
    });
  }

  private topbar(): HTMLElement {
    const bar = document.createElement("header");
    bar.className = "topbar";
    const v = this.view;
    const atTower = v.kind === "tower";
    const now = this.hereLabel();
    bar.innerHTML = `
      <button type="button" class="icon-btn back" data-tv="back" aria-label="Back" ${atTower ? "hidden" : ""}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M15 5 L8 12 L15 19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="crumb-block">
        <span class="mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
            <path d="M6 22 L18 8 L30 22" stroke="currentColor" stroke-width="2.2"/>
            <path d="M10 22 L18 13.5 L26 22" stroke="currentColor" stroke-width="2.2"/>
            <circle cx="18" cy="25.5" r="2.2" fill="currentColor"/>
          </svg>
        </span>
        <div class="crumb-text">
          <div class="crumb-k">Lead Setu</div>
          <div class="crumb-now" title="${escapeAttr(now)}">${escapeAttr(now)}</div>
        </div>
        <nav class="crumbs-full" aria-label="Breadcrumb"></nav>
      </div>
      <button type="button" class="icon-btn menu-btn ${this.menuOpen ? "on" : ""}" data-tv="menu"
        aria-label="Time of day and menu" aria-expanded="${this.menuOpen}" aria-haspopup="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="2"/>
          <path d="M12 3v2.2M12 18.8V21M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3 12h2.2M18.8 12H21M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <button type="button" class="icon-btn cta-icon" data-action="book" data-tv="cta" aria-label="Book a site visit">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="5" width="16" height="15" rx="2.5" stroke="currentColor" stroke-width="2"/>
          <path d="M8 3.5v4M16 3.5v4M4 10h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
      <button type="button" class="cta cta-full" data-action="book-full" data-tv="cta-full">Book site visit</button>
    `;
    const full = bar.querySelector(".crumbs-full")!;
    full.appendChild(this.crumbsFull());
    bar.querySelector(".back")!.addEventListener("click", () => this.goBack());
    bar.querySelector(".menu-btn")!.addEventListener("click", () => {
      this.menuOpen = !this.menuOpen;
      this.render();
    });
    bar.querySelectorAll("[data-action=book], [data-action=book-full]").forEach((b) =>
      b.addEventListener("click", () => this.openForm()),
    );
    return bar;
  }

  private hereLabel(): string {
    const v = this.view;
    if (v.kind === "tower") return "Sample Tower";
    if (v.kind === "floor") return describeFloor(v.floor);
    const plan = this.planForUnit(v.unitId);
    return `${v.unitId} ${plan?.name ?? ""}`.trim();
  }

  private crumbsFull(): HTMLElement {
    const wrap = document.createElement("div");
    wrap.className = "crumbs-inner";
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
      const plan = this.planForUnit(v.unitId);
      addBtn(`${v.unitId} ${plan?.name ?? ""}`.trim(), () => {}, true);
    }
    return wrap;
  }

  goBack() {
    const v = this.view;
    if (this.formOpen) {
      this.closeForm();
      return;
    }
    if (this.menuOpen) {
      this.menuOpen = false;
      this.render();
      return;
    }
    if (this.tour?.active) {
      this.handlers.onTour?.("stop");
      return;
    }
    if (this.sheetOpen) {
      this.sheetOpen = false;
      this.spec = null;
      this.currentRoom = null;
      this.render();
      this.handlers.onCloseSpec?.();
      return;
    }
    if (this.spec || this.currentRoom) {
      this.spec = null;
      this.currentRoom = null;
      this.render();
      this.handlers.onCloseSpec?.();
      return;
    }
    if (v.kind === "flat" && v.cam === "walk") {
      this.handlers.onCam("dollhouse");
      return;
    }
    if (v.kind === "flat") {
      this.handlers.onGotoFloor(v.floor);
      return;
    }
    if (v.kind === "floor") this.handlers.onGotoTower();
  }

  private overflowMenu(): HTMLElement {
    const pop = document.createElement("div");
    pop.className = "menu-pop";
    pop.setAttribute("role", "dialog");
    pop.setAttribute("aria-label", "Time of day");
    const k = document.createElement("div");
    k.className = "menu-k";
    k.textContent = "Time of day";
    pop.appendChild(k);
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
      b.className = this.time === o.id ? "on" : "";
      b.setAttribute("aria-pressed", String(this.time === o.id));
      b.textContent = o.label;
      b.addEventListener("click", () => {
        this.menuOpen = false;
        this.handlers.onTime(o.id);
      });
      pop.appendChild(b);
    }
    if (this.tv) {
      const badge = document.createElement("div");
      badge.className = "tv-badge";
      badge.textContent = "TV / kiosk mode";
      pop.appendChild(badge);
    }
    const hint = document.createElement("p");
    hint.className = "menu-hint";
    hint.innerHTML = this.hintText();
    pop.appendChild(hint);
    return pop;
  }

  private floorsDock(): HTMLElement {
    const dock = document.createElement("div");
    dock.className = "dock floors-dock";
    const row = document.createElement("div");
    row.className = "chip-row";
    row.setAttribute("role", "listbox");
    row.setAttribute("aria-label", "Floors");
    const hover = this.view.kind === "tower" ? this.view.hoverFloor : null;
    for (let f = 1; f <= TYPICAL_FLOORS + 1; f++) {
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.floor = String(f);
      b.dataset.tv = `floor-${f}`;
      b.setAttribute("role", "option");
      if (f === PENTHOUSE_FLOOR) {
        b.innerHTML = `<span class="ph">PH</span>`;
        b.title = "Penthouse";
      } else {
        b.innerHTML = `<span class="chip-lg">${f}</span>`;
        b.title = `Floor ${f}`;
      }
      if (hover === f) b.classList.add("hov");
      b.addEventListener("mouseenter", () => this.setHoverFloor(f));
      b.addEventListener("click", () => this.handlers.onGotoFloor(f));
      row.appendChild(b);
    }
    dock.appendChild(row);
    dock.appendChild(this.dockHint(this.hintText()));
    dock.appendChild(this.disclaimerEl());
    return dock;
  }

  private unitsDock(): HTMLElement {
    const dock = document.createElement("div");
    dock.className = "dock units-dock";
    const v = this.view;
    if (v.kind !== "floor") return dock;
    const row = document.createElement("div");
    row.className = "chip-row unit-row";
    row.setAttribute("role", "listbox");
    row.setAttribute("aria-label", "Flats on this floor");
    const slots = slotsForFloor(v.floor);
    for (const slot of slots) {
      const id = unitCode(v.floor, slot.suffix);
      const plan = this.plans[slot.planId];
      const b = document.createElement("button");
      b.type = "button";
      b.className = "unit-chip";
      b.dataset.unit = id;
      b.dataset.tv = `unit-${id}`;
      if (v.hoverUnit === id) b.classList.add("hov");
      b.innerHTML = `<span class="chip-lg">${id}</span>
        <span class="chip-sub">${slot.typeLabel}<br>${areaLabel(plan)}</span>`;
      b.addEventListener("click", () => this.handlers.onGotoUnit(v.floor, id));
      row.appendChild(b);
    }
    dock.appendChild(row);
    dock.appendChild(this.dockHint(this.hintText()));
    dock.appendChild(this.disclaimerEl());
    return dock;
  }

  /* ---------- rooms + tour ---------- */

  private roomDock(): HTMLElement {
    const dock = document.createElement("div");
    dock.className = "room-dock";
    const row = document.createElement("div");
    row.className = "chip-row room-row";
    row.setAttribute("role", "listbox");
    row.setAttribute("aria-label", "Rooms");

    const tourBtn = document.createElement("button");
    tourBtn.type = "button";
    tourBtn.className = "room-chip tour-btn" + (this.tour?.active ? " on" : "");
    tourBtn.dataset.tv = "tour";
    tourBtn.dataset.action = "tour";
    tourBtn.textContent = this.tour?.active ? "End tour" : "Tour";
    tourBtn.addEventListener("click", () => {
      this.handlers.onTour?.(this.tour?.active ? "stop" : "start");
    });
    row.appendChild(tourBtn);

    for (const r of this.rooms) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "room-chip" + (this.currentRoom === r.id ? " on" : "");
      b.dataset.room = r.id;
      b.dataset.tv = `room-${r.id}`;
      b.textContent = r.short;
      b.title = r.name;
      b.addEventListener("click", () => this.handlers.onRoom?.(r.id));
      row.appendChild(b);
    }
    dock.appendChild(row);
    return dock;
  }

  private tourCard(stop: RoomStop): HTMLElement {
    const card = document.createElement("aside");
    card.className = "tour-card";
    const n = this.rooms.length;
    const i = this.tour?.index ?? 0;
    const playing = this.tour?.playing ?? false;
    const areaSqft = Math.round(stop.area_m2 * 10.7639);
    const fins = finishLines(stop, this.prefs)
      .map((f) => `<p class="spec-fin"><span>${escapeAttr(f.label)}</span><b>${escapeAttr(f.value)}</b></p>`)
      .join("");
    card.innerHTML = `
      <div class="tour-k">Guided tour · ${i + 1} of ${n}</div>
      <h2>${escapeAttr(stop.name)}</h2>
      <p class="spec-area">${stop.area_m2.toFixed(1)} m² · ${areaSqft.toLocaleString("en-IN")} sq ft</p>
      ${fins}
      ${stop.note ? `<p class="spec-note">${escapeAttr(stop.note)}</p>` : ""}
      <div class="tour-nav">
        <button type="button" data-act="prev" data-tv="tour-prev" ${i <= 0 ? "disabled" : ""}>Back</button>
        <button type="button" data-act="toggle" data-tv="tour-play">${playing ? "Pause" : "Play"}</button>
        <button type="button" class="cta" data-act="next" data-tv="tour-next">${i >= n - 1 ? "Done" : "Next"}</button>
      </div>
    `;
    card.querySelector("[data-act=prev]")!.addEventListener("click", () => this.handlers.onTour?.("prev"));
    card.querySelector("[data-act=toggle]")!.addEventListener("click", () => this.handlers.onTour?.("toggle"));
    card.querySelector("[data-act=next]")!.addEventListener("click", () => this.handlers.onTour?.("next"));
    return card;
  }

  private roomCard(stop: RoomStop, closable: boolean): HTMLElement {
    const card = document.createElement("aside");
    card.className = "tour-card room-info";
    const areaSqft = Math.round(stop.area_m2 * 10.7639);
    const fins = finishLines(stop, this.prefs)
      .map((f) => `<p class="spec-fin"><span>${escapeAttr(f.label)}</span><b>${escapeAttr(f.value)}</b></p>`)
      .join("");
    card.innerHTML = `
      ${closable ? `<button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>` : ""}
      <div class="tour-k">${escapeAttr(stop.short)}</div>
      <h2>${escapeAttr(stop.name)}</h2>
      <p class="spec-area">${stop.area_m2.toFixed(1)} m² · ${areaSqft.toLocaleString("en-IN")} sq ft</p>
      ${fins}
      ${stop.note ? `<p class="spec-note">${escapeAttr(stop.note)}</p>` : ""}
    `;
    card.querySelector(".spec-close")?.addEventListener("click", () => {
      this.revealRoomCard = false;
      this.render();
    });
    return card;
  }

  private specCard(h: Hotspot): HTMLElement {
    const card = document.createElement("aside");
    card.className = "tour-card room-info";
    const areaSqft = Math.round(h.area_m2 * 10.7639);
    card.innerHTML = `
      <button type="button" class="spec-close" aria-label="Close" data-tv="spec-close">×</button>
      <div class="tour-k">${h.kind === "kitchen" ? "Kitchen" : h.kind === "bath" ? "Bathroom" : "Outlook"}</div>
      <h2>${escapeAttr(h.title)}</h2>
      <p class="spec-area">${h.area_m2.toFixed(1)} m² · ${areaSqft.toLocaleString("en-IN")} sq ft · as labelled on the drawing</p>
      ${this.specFinish(h)}
      ${h.note ? `<p class="spec-note">${escapeAttr(h.note)}</p>` : ""}
    `;
    card.querySelector(".spec-close")!.addEventListener("click", () => this.closeSpec());
    return card;
  }

  private specFinish(h: Hotspot): string {
    const kitchen: Record<KitchenId, string> = {
      white: "White", walnut: "Walnut", black: "Matte black", granite: "Granite",
    };
    const floor: Record<FlooringId, string> = { marble: "Marble", wood: "Wood", tile: "Tile" };
    if (h.kind === "kitchen") {
      return `<p class="spec-fin"><span>Cabinets &amp; counter</span><b>${kitchen[this.prefs.kitchen]}</b></p>`;
    }
    if (h.kind === "bath") {
      return `<p class="spec-fin"><span>Floor</span><b>${floor[this.prefs.flooring]}</b></p>`;
    }
    return `<p class="spec-fin"><span>From the plan</span><b>${escapeAttr(h.roomName)}</b></p>`;
  }

  /* ---------- prefs sheet ---------- */

  private flatSheet(): HTMLElement {
    const sheet = document.createElement("aside");
    sheet.className = "sheet" + (this.sheetOpen ? " open" : "");
    sheet.setAttribute("aria-label", "Your preferences");

    const handle = document.createElement("button");
    handle.type = "button";
    handle.className = "sheet-handle";
    handle.setAttribute("aria-label", this.sheetOpen ? "Collapse preferences" : "Expand preferences");
    handle.addEventListener("click", () => this.toggleSheet());
    sheet.appendChild(handle);

    const peek = document.createElement("div");
    peek.className = "sheet-peek";

    const cam = document.createElement("div");
    cam.className = "seg cam-seg";
    const isWalk = this.view.kind === "flat" && this.view.cam === "walk";
    cam.innerHTML = `
      <button type="button" data-cam="dollhouse" data-tv="cam-dollhouse" class="${!isWalk ? "on" : ""}" aria-pressed="${!isWalk}">Dollhouse</button>
      <button type="button" data-cam="walk" data-tv="cam-walk" class="${isWalk ? "on" : ""}" aria-pressed="${isWalk}">Walk</button>
    `;
    cam.querySelectorAll("[data-cam]").forEach((b) =>
      b.addEventListener("click", () => this.handlers.onCam((b as HTMLElement).dataset.cam as "dollhouse" | "walk")),
    );
    peek.appendChild(cam);

    const fin = document.createElement("button");
    fin.type = "button";
    fin.className = "sheet-toggle" + (this.sheetOpen ? " on" : "");
    fin.dataset.tv = "finishes";
    fin.setAttribute("aria-expanded", String(this.sheetOpen));
    fin.textContent = this.sheetOpen ? "Close" : "Your preferences";
    fin.addEventListener("click", () => this.toggleSheet());
    peek.appendChild(fin);
    sheet.appendChild(peek);

    // Room chips stay visible when the sheet is collapsed.
    if (this.rooms.length) sheet.appendChild(this.roomDock());

    // Tour / room / spec cards also stay visible when collapsed (prefs stay in the body).
    const info = document.createElement("div");
    info.className = "sheet-info";
    if (this.tour?.active && this.rooms[this.tour.index]) {
      info.appendChild(this.tourCard(this.rooms[this.tour.index]));
    } else if (this.revealRoomCard && this.currentRoom) {
      const stop = this.rooms.find((r) => r.id === this.currentRoom);
      if (stop) info.appendChild(this.roomCard(stop, true));
    } else if (this.spec) {
      info.appendChild(this.specCard(this.spec));
    }
    if (info.childNodes.length) sheet.appendChild(info);

    const body = document.createElement("div");
    body.className = "sheet-body";
    body.appendChild(this.prefsForm());
    sheet.appendChild(body);
    sheet.appendChild(this.disclaimerEl());
    return sheet;
  }

  private toggleSheet() {
    this.sheetOpen = !this.sheetOpen;
    this.render();
  }

  private prefsForm(): HTMLElement {
    const p = document.createElement("div");
    p.className = "prefs";
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

  private zoomStack(): HTMLElement {
    const stack = document.createElement("div");
    stack.className = "zoom-stack";
    stack.innerHTML = `
      <button type="button" class="icon-btn" data-z="in" aria-label="Zoom in" data-tv="zoom-in">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M12 5v14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
        </svg>
      </button>
      <button type="button" class="icon-btn" data-z="out" aria-label="Zoom out" data-tv="zoom-out">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
        </svg>
      </button>
    `;
    stack.querySelector("[data-z=in]")!.addEventListener("click", () => this.handlers.onZoom?.(-1));
    stack.querySelector("[data-z=out]")!.addEventListener("click", () => this.handlers.onZoom?.(1));
    // Hide in walk mode — first-person has no orbit zoom.
    if (this.view.kind === "flat" && this.view.cam === "walk") stack.hidden = true;
    return stack;
  }

  private hintText(): string {
    if (this.tv) {
      if (this.view.kind === "tower")
        return `<b>TV remote</b> · ↑ ↓ a floor · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back`;
      if (this.view.kind === "floor")
        return `<b>TV remote</b> · ← → a flat · <kbd>Enter</kbd> open · <kbd>Esc</kbd> back`;
      if (this.view.kind === "flat" && this.view.cam === "walk")
        return `<b>TV remote</b> · ↑ walk · ↓ back · ← → rooms · <kbd>Enter</kbd> dollhouse · <kbd>Esc</kbd> back`;
      return `<b>TV remote</b> · ← → rooms · <kbd>Enter</kbd> walk through · <kbd>Esc</kbd> back`;
    }
    if (this.view.kind === "tower") return `Drag to orbit. Tap a floor to go in.`;
    if (this.view.kind === "floor") return `Tap a flat to open it. Drag to orbit.`;
    if (this.view.kind === "flat" && this.view.cam === "walk")
      return `Tap a room to fly there. Use the joystick to walk, drag to look.`;
    return `Drag to orbit. Tap a room to walk in, or Guided tour to play through each one.`;
  }

  private dockHint(html: string): HTMLElement {
    const el = document.createElement("p");
    el.className = "dock-hint";
    el.innerHTML = html;
    return el;
  }

  private disclaimerEl(): HTMLElement {
    const el = document.createElement("p");
    el.className = "disclaimer";
    el.textContent = "Illustrative visualisation, not the finished unit. Sample tower for Lead Setu — not a real project.";
    return el;
  }

  planForUnit(unitId: string): UnitPlan | undefined {
    if (unitId.endsWith("PH")) return this.plans.penthouse;
    if (unitId.endsWith("C")) return this.plans["3bhk"];
    return this.plans["2bhk"];
  }

  openForm() {
    this.currentUnit = this.unitOfInterest();
    this.formOpen = true;
    this.menuOpen = false;
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
    bg.addEventListener("click", (e) => {
      if (e.target === bg) this.closeForm();
    });
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
