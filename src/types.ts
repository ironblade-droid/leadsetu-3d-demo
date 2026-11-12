export type RoomType =
  | "living" | "kitchen" | "bedroom" | "bathroom" | "lobby"
  | "utility" | "terrace" | "balcony" | "dressing" | "hall" | "linen";

export interface Wall {
  x: number;
  z: number;
  w: number;
  d: number;
}

export interface Door {
  ax: number;
  az: number;
  bx: number;
  bz: number;
  width: number;
}

export interface Room {
  id: string;
  name: string;
  type: RoomType;
  area_m2: number;
  area_m2_from_polygon?: number;
  polygon: [number, number][];
  notes?: string;
}

export interface PlanSource {
  title: string;
  url: string;
  file: string;
  previewOfficial: string;
  previewExtracted: string;
  license: string;
  licenseUrl: string;
  author: string;
  retrieved: string;
  nominal: string;
  companionGroundFloor?: { title: string; url: string; note: string };
}

export interface UnitPlan {
  id: string;
  name: string;
  type: "2BHK" | "3BHK" | "Penthouse";
  source: PlanSource;
  units: "m";
  wallHeight: number;
  slabThickness: number;
  overallHeight: number;
  grossInternalArea_m2: number;
  area_sqft: number;
  terraceArea_m2?: number;
  terraceArea_sqft?: number;
  bounds: { min: [number, number]; max: [number, number] };
  walls: Wall[];
  doors: Door[];
  windows: Wall[];
  balcony?: Wall;
  rooms: Room[];
  entrance: { x: number; z: number; facing: "N" | "S" | "E" | "W" };
  approximations: string[];
}

export type TimeOfDay = "morning" | "golden" | "night";
export type StyleId = "modern" | "luxury" | "minimal" | "traditional";
export type FlooringId = "marble" | "wood" | "tile";
export type KitchenId = "white" | "walnut" | "black" | "granite";

export interface Prefs {
  style: StyleId;
  flooring: FlooringId;
  wallColor: string;
  kitchen: KitchenId;
  furniture: boolean;
}

export interface Transform {
  ox: number;
  oz: number;
  rotY: number;
  mirrorX: boolean;
  mirrorZ: boolean;
  width: number;
  depth: number;
}

export interface Collision {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
}

export type View =
  | { kind: "tower"; hoverFloor: number | null }
  | { kind: "floor"; floor: number; hoverUnit: string | null }
  | { kind: "flat"; floor: number; unitId: string; cam: "dollhouse" | "walk" };
