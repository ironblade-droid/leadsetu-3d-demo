#!/usr/bin/env python3
"""Headless Cycles baker for Lead Setu interiors and the tower shell.

    /home/box/apps/blender --background --python scripts/bake_cycles.py -- \
        --scene public/baked/2bhk-modern-scene.json \
        --root /workspace/leadsetu-3d-demo \
        --out public/baked/2bhk-modern \
        --size 1536 --samples 128

Produces:
  <out>.glb              room shells + furniture, UV0 albedo, UV1 lightmap
  <out>-<room>.webp      per-room irradiance (neutral-albedo DIFFUSE)
  <out>-manifest.json    paths, sizes, bake settings
  <out>-preview.png      Cycles beauty of the living room (for QA)
"""
from __future__ import annotations

import argparse, json, math, os, sys, time
from pathlib import Path

import bpy
from mathutils import Vector

# ---------------------------------------------------------------------------
# CLI (Blender passes args after "--")
# ---------------------------------------------------------------------------

def argv_after_dash():
    if "--" in sys.argv:
        return sys.argv[sys.argv.index("--") + 1 :]
    return sys.argv[1:]

def parse():
    p = argparse.ArgumentParser()
    p.add_argument("--scene", required=True)
    p.add_argument("--root", required=True)
    p.add_argument("--out", required=True, help="output prefix, relative to root or absolute")
    p.add_argument("--size", type=int, default=1536)
    p.add_argument("--samples", type=int, default=128)
    p.add_argument("--small-size", type=int, default=1024, help="atlas for non-living rooms")
    p.add_argument("--preview-only", action="store_true")
    p.add_argument("--skip-preview", action="store_true")
    p.add_argument("--save-blend", action="store_true")
    p.add_argument("--rooms", default="", help="comma-separated room ids (default: all)")
    return p.parse_args(argv_after_dash())

# ---------------------------------------------------------------------------
# Setup
# ---------------------------------------------------------------------------

def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene
    sc.render.engine = "CYCLES"
    sc.cycles.device = "CPU"
    sc.cycles.use_denoising = True
    sc.cycles.denoiser = "OPENIMAGEDENOISE"
    sc.cycles.use_adaptive_sampling = True
    sc.cycles.adaptive_threshold = 0.02
    sc.cycles.samples = 128
    sc.cycles.bake_type = "DIFFUSE"
    sc.render.bake.use_pass_direct = True
    sc.render.bake.use_pass_indirect = True
    sc.render.bake.use_pass_color = False
    sc.render.bake.margin = 8
    sc.render.bake.target = "IMAGE_TEXTURES"
    sc.render.threads_mode = "FIXED"
    sc.render.threads = 8
    sc.render.resolution_x = 1600
    sc.render.resolution_y = 1000
    sc.render.image_settings.file_format = "PNG"
    sc.render.film_transparent = False
    sc.view_settings.view_transform = "Filmic"
    sc.view_settings.look = "Medium High Contrast"


def world_hdri(path: Path, intensity=1.15):
    world = bpy.data.worlds.new("World")
    bpy.context.scene.world = world
    world.use_nodes = True
    nt = world.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputWorld")
    bg = nt.nodes.new("ShaderNodeBackground")
    bg.inputs["Strength"].default_value = intensity
    if path.exists():
        env = nt.nodes.new("ShaderNodeTexEnvironment")
        env.image = bpy.data.images.load(str(path))
        coord = nt.nodes.new("ShaderNodeTexCoord")
        mapn = nt.nodes.new("ShaderNodeMapping")
        mapn.inputs["Rotation"].default_value[2] = math.radians(20)
        nt.links.new(coord.outputs["Generated"], mapn.inputs["Vector"])
        nt.links.new(mapn.outputs["Vector"], env.inputs["Vector"])
        nt.links.new(env.outputs["Color"], bg.inputs["Color"])
    else:
        bg.inputs["Color"].default_value = (0.55, 0.7, 0.95, 1)
    nt.links.new(bg.outputs["Background"], out.inputs["Surface"])


def add_sun():
    # South-west morning sun (windows on z=0 face -Y in Blender).
    bpy.ops.object.light_add(type="SUN", location=(4, -8, 10))
    sun = bpy.context.active_object
    sun.name = "Sun"
    sun.data.energy = 3.8
    sun.data.angle = math.radians(0.53)
    sun.data.color = (1.0, 0.96, 0.88)
    # Point toward the living windows from the south
    sun.rotation_euler = (math.radians(48), math.radians(10), math.radians(-20))
    return sun


# ---------------------------------------------------------------------------
# Materials
# ---------------------------------------------------------------------------

NEUTRAL = (0.80, 0.80, 0.80, 1)


def principled(name, color, roughness=0.7, metallic=0.0, tex=None, alpha=1.0):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    pr = nt.nodes.new("ShaderNodeBsdfPrincipled")
    pr.inputs["Roughness"].default_value = roughness
    pr.inputs["Metallic"].default_value = metallic
    if alpha < 1:
        pr.inputs["Alpha"].default_value = alpha
        mat.blend_method = "BLEND"
        mat.shadow_method = "HASHED" if hasattr(mat, "shadow_method") else mat.blend_method
    if tex:
        img = bpy.data.images.load(str(tex))
        img.colorspace_settings.name = "sRGB"
        nimg = nt.nodes.new("ShaderNodeTexImage")
        nimg.image = img
        nimg.interpolation = "Smart"
        # tile
        nimg.projection = "FLAT"
        coord = nt.nodes.new("ShaderNodeTexCoord")
        mapn = nt.nodes.new("ShaderNodeMapping")
        mapn.inputs["Scale"].default_value = (1.6, 1.6, 1.6)
        nt.links.new(coord.outputs["UV"], mapn.inputs["Vector"])
        nt.links.new(mapn.outputs["Vector"], nimg.inputs["Vector"])
        nt.links.new(nimg.outputs["Color"], pr.inputs["Base Color"])
    else:
        pr.inputs["Base Color"].default_value = color
    nt.links.new(pr.outputs["BSDF"], out.inputs["Surface"])
    # Store a pointer so the baker can attach an Image node later
    mat["ls_is_shell"] = 1
    return mat


def glass_mat():
    mat = bpy.data.materials.new("Glass")
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    # Transparent for shadows so sun enters; slight tint for beauty
    tr = nt.nodes.new("ShaderNodeBsdfTransparent")
    tr.inputs["Color"].default_value = (0.75, 0.85, 0.92, 1)
    gl = nt.nodes.new("ShaderNodeBsdfGlass")
    gl.inputs["IOR"].default_value = 1.45
    gl.inputs["Roughness"].default_value = 0.04
    gl.inputs["Color"].default_value = (0.85, 0.92, 0.95, 1)
    mix = nt.nodes.new("ShaderNodeMixShader")
    # In Cycles, Light Path / Is Shadow Ray → transparent
    lp = nt.nodes.new("ShaderNodeLightPath")
    nt.links.new(lp.outputs["Is Shadow Ray"], mix.inputs["Fac"])
    nt.links.new(gl.outputs["BSDF"], mix.inputs[1])
    nt.links.new(tr.outputs["BSDF"], mix.inputs[2])
    nt.links.new(mix.outputs["Shader"], out.inputs["Surface"])
    mat.blend_method = "BLEND"
    return mat


# ---------------------------------------------------------------------------
# Mesh helpers (Blender is Z-up: three.js (x,y,z) → (x, z, y))
# ---------------------------------------------------------------------------

def mesh_from_pydata(name, verts, faces, collection=None):
    mesh = bpy.data.meshes.new(name)
    mesh.from_pydata(verts, [], faces)
    mesh.update()
    obj = bpy.data.objects.new(name, mesh)
    (collection or bpy.context.collection).objects.link(obj)
    return obj


def floor_from_poly(name, poly, z, collection, mat):
    # poly is three.js XZ; Blender XY. Extrude a thin slab downward.
    verts = [(p[0], p[1], z) for p in poly] + [(p[0], p[1], z - 0.04) for p in poly]
    n = len(poly)
    # ensure CCW in XY for upward normal on top
    area = 0.0
    for i in range(n):
        x1, y1 = poly[i]
        x2, y2 = poly[(i + 1) % n]
        area += x1 * y2 - x2 * y1
    if area < 0:
        poly = list(reversed(poly))
        verts = [(p[0], p[1], z) for p in poly] + [(p[0], p[1], z - 0.04) for p in poly]
        area = -area
    faces = [tuple(range(n))]  # top
    faces.append(tuple(range(2 * n - 1, n - 1, -1)))  # bottom, reversed
    for i in range(n):
        a, b = i, (i + 1) % n
        faces.append((a + n, b + n, b, a))
    obj = mesh_from_pydata(name, verts, faces, collection)
    # World-XY planar UVs, 1 m = 0.45 UV so oak planks read at a natural scale
    uv = obj.data.uv_layers.new(name="UVMap")
    for li, loop in enumerate(obj.data.loops):
        vx, vy, vz = obj.data.vertices[loop.vertex_index].co
        uv.data[li].uv = (vx * 0.45, vy * 0.45)
    if mat:
        obj.data.materials.append(mat)
    return obj


def box(name, cx, cy, cz, sx, sy, sz, collection, mat):
    """Axis-aligned box, centre (cx,cy,cz), size sx,sy,sz — Blender XYZ."""
    bpy.ops.mesh.primitive_cube_add(size=1, location=(cx, cy, cz))
    obj = bpy.context.active_object
    obj.name = name
    obj.scale = (sx, sy, sz)
    bpy.ops.object.transform_apply(scale=True)
    if mat:
        obj.data.materials.clear()
        obj.data.materials.append(mat)
    # move to collection
    if collection and obj.name not in collection.objects:
        for c in list(obj.users_collection):
            c.objects.unlink(obj)
        collection.objects.link(obj)
    return obj


def point_in_poly(poly, x, y):
    n = len(poly)
    inside = False
    j = n - 1
    for i in range(n):
        xi, yi = poly[i]
        xj, yj = poly[j]
        if ((yi > y) != (yj > y)) and (x < (xj - xi) * (y - yi) / (yj - yi + 1e-12) + xi):
            inside = not inside
        j = i
    return inside


def poly_centroid(poly):
    a = 0.0
    cx = cy = 0.0
    n = len(poly)
    for i in range(n):
        x1, y1 = poly[i]
        x2, y2 = poly[(i + 1) % n]
        c = x1 * y2 - x2 * y1
        a += c
        cx += (x1 + x2) * c
        cy += (y1 + y2) * c
    if abs(a) < 1e-8:
        return sum(p[0] for p in poly) / n, sum(p[1] for p in poly) / n
    return cx / (3 * a), cy / (3 * a)


# ---------------------------------------------------------------------------
# Scene build
# ---------------------------------------------------------------------------

def ensure_coll(name):
    c = bpy.data.collections.get(name) or bpy.data.collections.new(name)
    if c.name not in bpy.context.scene.collection.children:
        bpy.context.scene.collection.children.link(c)
    return c


def build_shells(scene, mats, root_coll):
    h = float(scene["wallHeight"])
    rooms = scene["rooms"]
    shells = {r["id"]: {"room": r, "objs": []} for r in rooms}
    colls = {r["id"]: ensure_coll(f"room-{r['id']}") for r in rooms}

    # Floors + ceilings
    for r in rooms:
        rid = r["id"]
        poly = r["polygon"]
        kind = r["type"]
        fmat = mats["tile"] if kind in ("bathroom", "utility", "kitchen", "lobby", "hall") else (
            mats["terra"] if kind in ("terrace", "balcony") else mats["floor"]
        )
        fl = floor_from_poly(f"floor-{rid}", poly, 0.008, colls[rid], fmat)
        ce = floor_from_poly(f"ceil-{rid}", poly, h - 0.01, colls[rid], mats["ceiling"])
        # Flip ceiling so the downward face is the visible one — already has a bottom face
        fl["ls_room"] = rid
        ce["ls_room"] = rid
        fl["ls_shell"] = "floor"
        ce["ls_shell"] = "ceil"
        shells[rid]["objs"].extend([fl, ce])

        # Recessed downlight (area) at centroid
        cx, cy = poly_centroid(poly)
        bpy.ops.object.light_add(type="AREA", location=(cx, cy, h - 0.08))
        lamp = bpy.context.active_object
        lamp.name = f"down-{rid}"
        lamp.data.energy = 40 if kind == "living" else 28
        lamp.data.size = 0.55
        lamp.data.color = (1.0, 0.95, 0.88)
        lamp.data.spread = math.radians(160)
        lamp.rotation_euler = (math.pi, 0, 0)  # point down (area default is -Z; in Blender area faces -Z, so rotate?)
        # Default area light emits along local -Z. With no rotation that's downward. Good.
        lamp.rotation_euler = (0, 0, 0)
        for c in list(lamp.users_collection):
            c.objects.unlink(lamp)
        colls[rid].objects.link(lamp)

    # Walls — assign to nearest touching room
    for i, w in enumerate(scene["walls"]):
        wx, wz, ww, wd = w["x"], w["z"], w["w"], w["d"]
        if ww < 0.02 or wd < 0.02:
            continue
        cx, cy = wx + ww / 2, wz + wd / 2
        rid = nearest_room(rooms, cx, cy)
        obj = box(f"wall-{i}", cx, cy, h / 2, ww, wd, h, colls[rid], mats["wall"])
        obj["ls_room"] = rid
        obj["ls_shell"] = "wall"
        shells[rid]["objs"].append(obj)

    # Cut window + door openings with booleans
    cutters = []
    WIN_SILL, WIN_H, DOOR_H = 0.90, 1.40, 2.10
    cut_coll = ensure_coll("cutters")
    for i, w in enumerate(scene["windows"]):
        along_x = w["w"] >= w["d"]
        length = w["w"] if along_x else w["d"]
        thick = max((w["d"] if along_x else w["w"]) + 0.12, 0.2)
        cx, cy = w["x"] + w["w"] / 2, w["z"] + w["d"] / 2
        sx, sy, sz = (length + 0.02, thick, WIN_H + 0.04) if along_x else (thick, length + 0.02, WIN_H + 0.04)
        c = box(f"cut-win-{i}", cx, cy, WIN_SILL + WIN_H / 2, sx, sy, sz, cut_coll, None)
        cutters.append(c)
        # Glass pane
        rid = nearest_room(rooms, cx, cy)
        gsx, gsy = (length - 0.04, 0.03) if along_x else (0.03, length - 0.04)
        g = box(f"glass-{i}", cx, cy, WIN_SILL + WIN_H / 2, gsx, gsy, WIN_H - 0.06, colls[rid], mats["glass"])
        g["ls_room"] = rid
        # Frame
        for zoff, zh in ((WIN_SILL, 0.05), (WIN_SILL + WIN_H, 0.05)):
            frsx, frsy = (length, 0.07) if along_x else (0.07, length)
            fr = box(f"frame-{i}-{zoff}", cx, cy, zoff, frsx, frsy, zh, colls[rid], mats["frame"])
            fr["ls_room"] = rid
            shells[rid]["objs"].append(fr)

    for i, d in enumerate(scene["doors"]):
        ax, az, bx, bz = d["ax"], d["az"], d["bx"], d["bz"]
        mx, my = (ax + bx) / 2, (az + bz) / 2
        dx, dy = bx - ax, bz - az
        length = math.hypot(dx, dy) or d.get("width", 0.9)
        along_x = abs(dx) >= abs(dy)
        thick = 0.28
        sx, sy = (length + 0.04, thick) if along_x else (thick, length + 0.04)
        c = box(f"cut-door-{i}", mx, my, DOOR_H / 2, sx, sy, DOOR_H + 0.04, cut_coll, None)
        cutters.append(c)

    apply_booleans(shells, cutters)
    # Hide cutters
    for c in cutters:
        c.hide_render = True
        c.hide_set(True)
    return shells


def nearest_room(rooms, x, y):
    best, bd = rooms[0]["id"], 1e9
    for r in rooms:
        cx, cy = poly_centroid(r["polygon"])
        d = (cx - x) ** 2 + (cy - y) ** 2
        # bonus if inside
        if point_in_poly(r["polygon"], x, y):
            d *= 0.05
        if d < bd:
            best, bd = r["id"], d
    return best


def apply_booleans(shells, cutters):
    wall_objs = []
    for sh in shells.values():
        wall_objs.extend([o for o in sh["objs"] if o.get("ls_shell") == "wall"])
    for wall in wall_objs:
        # only cutters that overlap this wall's bbox
        wb = [wall.bound_box[i] for i in range(8)]
        wmin = Vector((min(v[0] for v in wb), min(v[1] for v in wb), min(v[2] for v in wb))) + Vector(wall.location) * 0
        # Use world-space overlap via matrix
        mw = wall.matrix_world
        corners = [mw @ Vector(v) for v in wall.bound_box]
        wmn = Vector((min(v.x for v in corners), min(v.y for v in corners), min(v.z for v in corners)))
        wmx = Vector((max(v.x for v in corners), max(v.y for v in corners), max(v.z for v in corners)))
        used = False
        for c in cutters:
            mc = c.matrix_world
            cc = [mc @ Vector(v) for v in c.bound_box]
            cmn = Vector((min(v.x for v in cc), min(v.y for v in cc), min(v.z for v in cc)))
            cmx = Vector((max(v.x for v in cc), max(v.y for v in cc), max(v.z for v in cc)))
            if (cmn.x <= wmx.x and cmx.x >= wmn.x and
                cmn.y <= wmx.y and cmx.y >= wmn.y and
                cmn.z <= wmx.z and cmx.z >= wmn.z):
                mod = wall.modifiers.new(f"cut-{c.name}", "BOOLEAN")
                mod.operation = "DIFFERENCE"
                mod.solver = "FAST"
                mod.object = c
                used = True
        if used:
            bpy.context.view_layer.objects.active = wall
            wall.select_set(True)
            try:
                for m in list(wall.modifiers):
                    bpy.ops.object.modifier_apply(modifier=m.name)
            except Exception as e:
                print("boolean failed on", wall.name, e, flush=True)
            wall.select_set(False)


# ---------------------------------------------------------------------------
# Furniture
# ---------------------------------------------------------------------------

def import_gltf(path: Path):
    before = set(bpy.data.objects)
    bpy.ops.import_scene.gltf(filepath=str(path))
    return [o for o in bpy.data.objects if o not in before]


def bbox_world(objs):
    pts = []
    for o in objs:
        if o.type != "MESH":
            continue
        for v in o.bound_box:
            pts.append(o.matrix_world @ Vector(v))
    if not pts:
        return Vector((0, 0, 0)), Vector((0.1, 0.1, 0.1))
    mn = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    mx = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    return mn, mx - mn


def place_furniture(scene, root: Path, mats, shells):
    furn_coll = ensure_coll("furniture")
    placed = []
    for p in scene["placements"]:
        rid = p.get("roomId") or nearest_room(scene["rooms"], p["x"], p["z"])
        coll = bpy.data.collections.get(f"room-{rid}") or furn_coll
        x, y, w, d, h, rot = p["x"], p["z"], p["w"], p["d"], p["h"], p["rot"]
        fpath = p.get("file")
        kind = p["kind"]
        obj = None
        if fpath:
            full = root / "public" / "models" / fpath
            if full.exists():
                imported = import_gltf(full)
                meshes = [o for o in imported if o.type == "MESH"]
                # parent under an empty
                bpy.ops.object.empty_add(location=(0, 0, 0))
                empty = bpy.context.active_object
                empty.name = f"furn-{p['id']}"
                for o in imported:
                    o.parent = empty
                    # clear the glTF import root rotation later via the empty
                mn, size = bbox_world(meshes)
                # sit on z=0
                for o in imported:
                    o.location.z -= mn.z
                # After Blender's glTF import the axes are Z-up; size.x/y are plan, size.z height.
                sx = (w / size.x) if size.x > 1e-4 else 1
                sy = (d / size.y) if size.y > 1e-4 else 1
                sz = (h / size.z) if size.z > 1e-4 and h > 0 else 1
                sca = min(sx, sy)
                # cm-scale models (size ~100) or metre models (size ~2) both need a sane clamp
                if sca > 20 or sca < 0.01:
                    print(f"  SCALE CLAMP {p['id']} raw={sca:.3f} size={tuple(size)} want={(w,d,h)}", flush=True)
                    sca = max(0.01, min(sca, 8))
                empty.scale = (sca, sca, sca)
                empty.location = (x, y, 0)
                empty.rotation_euler[2] = rot
                bpy.context.view_layer.update()
                print(f"  furn {p['id']} {kind} scale={sca:.3f} at={(x,y)} size={tuple(round(c,2) for c in size)}", flush=True)
                obj = empty
                for o in [empty] + imported:
                    for c in list(o.users_collection):
                        c.objects.unlink(o)
                    coll.objects.link(o)
                empty["ls_room"] = rid
                empty["ls_shell"] = "furn"
                # mark mesh children for baking
                for m in meshes:
                    m["ls_room"] = rid
                    m["ls_shell"] = "furn"
                    if rid in shells:
                        shells[rid]["objs"].append(m)
                placed.append(empty)
                continue
        # Procedural box fallback (kitchen runs, shower, art, bench, …)
        color = mats["cabinet"] if kind in ("kitchen", "fridge", "cabinet") else (
            mats["ceramic"] if kind in ("shower", "toilet", "basin", "vanity") else mats["wood"]
        )
        obj = box(f"furn-{p['id']}", x, y, h / 2, w, d, h, coll, color)
        obj.rotation_euler[2] = rot
        obj["ls_room"] = rid
        obj["ls_shell"] = "furn"
        if rid in shells:
            shells[rid]["objs"].append(obj)
        placed.append(obj)
    return placed


# ---------------------------------------------------------------------------
# UV2 + bake
# ---------------------------------------------------------------------------

def ensure_uv2(obj):
    if obj.type != "MESH":
        return
    uvs = obj.data.uv_layers
    if not uvs:
        uvs.new(name="UVMap")
    if "UVLightmap" not in [u.name for u in uvs]:
        uvs.new(name="UVLightmap")
    uvs["UVLightmap"].active = True
    uvs["UVLightmap"].active_render = False


def _basis(normal):
    helper = Vector((0, 0, 1)) if abs(normal.z) < 0.85 else Vector((1, 0, 0))
    u = normal.cross(helper)
    if u.length < 1e-6:
        u = normal.cross(Vector((0, 1, 0)))
    u.normalize()
    v = normal.cross(u)
    v.normalize()
    return u, v


def face_islands(obj, min_area=0.02):
    """One island per connected coplanar face group. Skips the dark back
    of floor/ceiling slabs (those overwrote the lit face when both were
    projected onto the same XY rectangle)."""
    from collections import defaultdict
    mesh = obj.data
    mw = obj.matrix_world
    rot = mw.to_3x3()
    kind = obj.get("ls_shell")
    coords = [mw @ v.co for v in mesh.vertices]
    normals = [(rot @ p.normal).normalized() for p in mesh.polygons]

    edge_faces = defaultdict(list)
    for pi, p in enumerate(mesh.polygons):
        vs = list(p.vertices)
        for i in range(len(vs)):
            e = tuple(sorted((vs[i], vs[(i + 1) % len(vs)])))
            edge_faces[e].append(pi)
    adj = defaultdict(set)
    for faces in edge_faces.values():
        for a in faces:
            for b in faces:
                if a != b:
                    adj[a].add(b)

    visited = [False] * len(mesh.polygons)
    groups = []
    for i, p in enumerate(mesh.polygons):
        if visited[i]:
            continue
        visited[i] = True
        ref = normals[i]
        # Drop the unlit back of a thin floor/ceiling slab.
        if kind == "floor" and ref.z < 0.5:
            continue
        if kind == "ceil" and ref.z > -0.5:
            continue
        stack = [i]
        group = []
        while stack:
            fi = stack.pop()
            group.append(fi)
            for nb in adj[fi]:
                if not visited[nb] and normals[nb].dot(ref) > 0.92:
                    visited[nb] = True
                    stack.append(nb)
        area = sum(mesh.polygons[fi].area for fi in group)
        if area < min_area:
            continue
        groups.append((group, ref, area))

    islands = []
    for group, ref, area in groups:
        axis_u, axis_v = _basis(ref)
        pts = []
        for fi in group:
            for vi in mesh.polygons[fi].vertices:
                c = coords[vi]
                pts.append((c.dot(axis_u), c.dot(axis_v)))
        us = [p[0] for p in pts]
        vs = [p[1] for p in pts]
        min_u, max_u = min(us), max(us)
        min_v, max_v = min(vs), max(vs)
        w = max(max_u - min_u, 1e-4)
        h = max(max_v - min_v, 1e-4)
        # loops of these faces only
        uvs = []
        for fi in group:
            poly = mesh.polygons[fi]
            for li in range(poly.loop_start, poly.loop_start + poly.loop_total):
                c = coords[mesh.loops[li].vertex_index]
                u = (c.dot(axis_u) - min_u) / w
                v = (c.dot(axis_v) - min_v) / h
                uvs.append((li, u, v))
        islands.append((uvs, w, h, area, ref))
    return islands


def pack_uv2(objs, margin=0.015):
    """Non-overlapping atlas: project each shell onto its plane, then shelf-pack
    into 0-1 with uniform texel density. Replaces lightmap_pack (per-face boxes)
    and pack_islands (per-object 0-1, overlapping)."""
    meshes = [
        o for o in objs
        if o.type == "MESH" and o.data.polygons and o.get("ls_shell") in ("floor", "ceil", "wall")
    ]
    if not meshes:
        return
    items = []  # (obj, uvs, w, h, tag)
    for o in meshes:
        ensure_uv2(o)
        # Park every loop in the black margin; lit islands overwrite.
        layer = o.data.uv_layers["UVLightmap"]
        for d in layer.data:
            d.uv = (0.002, 0.002)
        islands = face_islands(o)
        if not islands:
            print(f"  UV {o.name}: no islands", flush=True)
        for idx, (uvs, w, h, area, ref) in enumerate(islands):
            tag = f"{o.name}#{idx}"
            items.append((o, uvs, w, h, tag))

    def sort_key(it):
        o, _, w, h, tag = it
        pri = 0 if o.get("ls_shell") == "floor" else 1 if o.get("ls_shell") == "ceil" else 2
        return (pri, -(w * h))
    items.sort(key=sort_key)
    if not items:
        print("  UV pack: no islands", flush=True)
        return

    def try_pack(S, gap):
        shelves = []  # [y, height, x_cursor]
        y_top = 0.0
        positions = []
        for o, uvs, w, h, tag in items:
            placed = False
            for sh in shelves:
                if h <= sh[1] + 1e-8 and sh[2] + w + gap <= S + 1e-8:
                    positions.append((o, uvs, sh[2], sh[0], w, h, tag))
                    sh[2] += w + gap
                    placed = True
                    break
            if not placed:
                if y_top + h > S + 1e-8:
                    return None
                shelves.append([y_top, h, w + gap])
                positions.append((o, uvs, 0.0, y_top, w, h, tag))
                y_top += h + gap
        return positions

    area = sum(w * h for _, _, w, h, _ in items)
    S = max(math.sqrt(area) * 1.15, max(max(w, h) for _, _, w, h, _ in items))
    positions = None
    for _ in range(24):
        gap = max(S * margin, 0.04)
        positions = try_pack(S, gap)
        if positions:
            break
        S *= 1.15
    if not positions:
        raise RuntimeError("UV shelf pack failed")

    used_w = max(x + w for _, _, x, _, w, _, _ in positions)
    used_h = max(y + h for _, _, _, y, _, h, _ in positions)
    inner = 1.0 - 2.0 * margin
    scale = inner / max(used_w, used_h)
    rects = []
    for o, uvs, x, y, w, h, tag in positions:
        u0 = margin + x * scale
        v0 = margin + y * scale
        du = w * scale
        dv = h * scale
        layer = o.data.uv_layers["UVLightmap"]
        for li, u, v in uvs:
            layer.data[li].uv = (u0 + u * du, v0 + v * dv)
        print(
            f"  UV {tag} ({o.get('ls_shell')}) "
            f"x={u0:.3f}..{u0+du:.3f} y={v0:.3f}..{v0+dv:.3f} "
            f"spans={du:.3f}x{dv:.3f} world={w:.2f}x{h:.2f}m",
            flush=True,
        )
        for r in rects:
            if (u0 < r[2] - 1e-4 and u0 + du > r[0] + 1e-4 and
                    v0 < r[3] - 1e-4 and v0 + dv > r[1] + 1e-4):
                print(f"  WARNING overlap {tag} vs {r[4]}", flush=True)
        rects.append((u0, v0, u0 + du, v0 + dv, tag))


def attach_bake_target(obj, img):
    """Add an Image Texture node (active) so Cycles bakes into img, without changing the look."""
    if obj.type != "MESH":
        return
    if not obj.data.materials:
        mat = principled(f"tmp-{obj.name}", NEUTRAL)
        obj.data.materials.append(mat)
    for slot in obj.data.materials:
        if slot is None:
            continue
        nt = slot.node_tree
        if nt is None:
            continue
        # reuse or create
        node = None
        for n in nt.nodes:
            if n.type == "TEX_IMAGE" and n.image == img:
                node = n
                break
        if node is None:
            node = nt.nodes.new("ShaderNodeTexImage")
            node.image = img
            node.label = "BAKE_TARGET"
            # do not link — bake target only
        node.select = True
        nt.nodes.active = node


def bake_room(rid, objs, size, samples, out_path: Path):
    meshes = [
        o for o in objs
        if o.type == "MESH" and o.data.polygons and o.get("ls_shell") in ("floor", "ceil", "wall")
    ]
    if not meshes:
        print(f"skip {rid}: no shell meshes", flush=True)
        return None
    pack_uv2(meshes)
    img = bpy.data.images.new(f"LM-{rid}", size, size, alpha=False, float_buffer=True)
    img.colorspace_settings.name = "Non-Color"
    for o in meshes:
        attach_bake_target(o, img)
    sc = bpy.context.scene
    sc.cycles.samples = samples
    bpy.ops.object.select_all(action="DESELECT")
    for o in meshes:
        o.select_set(True)
    bpy.context.view_layer.objects.active = meshes[0]
    # Neutral albedo for irradiance: temporarily set Principled Base Color to grey
    saved = []
    for o in meshes:
        for mat in o.data.materials:
            if not mat or not mat.use_nodes:
                continue
            for n in mat.node_tree.nodes:
                if n.type == "BSDF_PRINCIPLED":
                    # unhook texture, set neutral
                    inp = n.inputs["Base Color"]
                    links = [l for l in mat.node_tree.links if l.to_socket == inp]
                    col = tuple(inp.default_value)
                    saved.append((mat, n, links, col))
                    for l in links:
                        mat.node_tree.links.remove(l)
                    inp.default_value = NEUTRAL
    t0 = time.time()
    print(f"BAKE {rid} {size}px {samples}spp {len(meshes)} meshes …", flush=True)
    bpy.ops.object.bake(type="DIFFUSE", pass_filter={"DIRECT", "INDIRECT"}, margin=8)
    dt = time.time() - t0
    print(f"  done {rid} in {dt:.1f}s", flush=True)
    # restore albedo
    for mat, n, links, col in saved:
        n.inputs["Base Color"].default_value = col
        for l in links:
            try:
                mat.node_tree.links.new(l.from_socket, n.inputs["Base Color"])
            except Exception:
                pass
    # save
    out_path.parent.mkdir(parents=True, exist_ok=True)
    png = out_path.with_suffix(".png")
    img.filepath_raw = str(png)
    img.file_format = "PNG"
    img.save()
    return png, dt, img


# ---------------------------------------------------------------------------
# Preview + export
# ---------------------------------------------------------------------------

def world_bounds():
    pts = []
    for o in bpy.data.objects:
        if o.type != "MESH" or o.hide_render:
            continue
        for v in o.bound_box:
            pts.append(o.matrix_world @ Vector(v))
    if not pts:
        print("NO MESHES", flush=True)
        return
    mn = Vector((min(p.x for p in pts), min(p.y for p in pts), min(p.z for p in pts)))
    mx = Vector((max(p.x for p in pts), max(p.y for p in pts), max(p.z for p in pts)))
    print(f"WORLD BOUNDS min={tuple(round(c,2) for c in mn)} max={tuple(round(c,2) for c in mx)} nmesh={sum(1 for o in bpy.data.objects if o.type=='MESH')}", flush=True)
    return mn, mx

def preview_camera(scene):
    world_bounds()
    living = next((r for r in scene["rooms"] if r["type"] == "living"), scene["rooms"][0])
    poly = living["polygon"]
    cx, cy = poly_centroid(poly)
    print("living centroid", cx, cy, "poly", poly, flush=True)
    # Known-inside living corner (NW, near x=0.25, z=4.75) looking toward the south windows
    cam_x, cam_y, cam_z = 0.85, 4.35, 1.60
    look = Vector((4.6, 1.6, 0.95))
    bpy.ops.object.camera_add(location=(cam_x, cam_y, cam_z))
    cam = bpy.context.active_object
    cam.name = "PreviewCam"
    direction = look - Vector(cam.location)
    cam.rotation_euler = direction.to_track_quat("-Z", "Y").to_euler()
    cam.data.lens = 27
    cam.data.clip_start = 0.05
    cam.data.clip_end = 80
    cam.data.passepartout_alpha = 0
    bpy.context.scene.camera = cam
    print("camera at", tuple(cam.location), "rot", tuple(cam.rotation_euler), "look", tuple(look), flush=True)
    # Exposure
    bpy.context.scene.view_settings.exposure = 0.0
    bpy.context.scene.view_settings.look = "Medium Contrast"
    bpy.context.scene.cycles.sample_clamp_indirect = 8.0
    bpy.context.scene.cycles.sample_clamp_direct = 16.0
    return cam


def export_glb(path: Path):
    # Only export shells + furniture, not lights or cutters
    bpy.ops.object.select_all(action="DESELECT")
    for o in bpy.data.objects:
        if o.type == "MESH" and o.get("ls_shell"):
            o.select_set(True)
    bpy.ops.export_scene.gltf(
        filepath=str(path),
        export_format="GLB",
        use_selection=True,
        export_texcoords=True,
        export_normals=True,
        export_materials="EXPORT",
        export_cameras=False,
        export_lights=False,
        export_yup=True,
        export_apply=True,
        export_image_format="AUTO",
    )


def to_webp(png: Path):
    webp = png.with_suffix(".webp")
    try:
        from PIL import Image
        im = Image.open(png)
        # irradiance is linear-ish; save as RGB
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGB")
        im.save(webp, "WEBP", quality=90, method=4)
        return webp
    except Exception as e:
        print("webp failed", e, flush=True)
        return png


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    args = parse()
    root = Path(args.root).resolve()
    scene = json.loads(Path(args.scene).read_text() if Path(args.scene).is_absolute()
                       else (root / args.scene).read_text())
    out = Path(args.out)
    if not out.is_absolute():
        out = root / out
    out.parent.mkdir(parents=True, exist_ok=True)

    t_all = time.time()
    reset()
    bpy.context.scene.cycles.samples = args.samples

    hdri = root / "public" / scene["textures"]["hdri"]
    world_hdri(hdri, 0.95)
    add_sun()

    oak = root / "public" / scene["textures"]["oakDiff"]
    wall_hex = scene["prefs"]["wallColor"]
    def hex_rgb(h):
        h = h.lstrip("#")
        r, g, b = int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
        # sRGB to approx linear
        def lin(c):
            c = c / 255.0
            return c ** 2.2
        return (lin(r), lin(g), lin(b), 1)

    mats = {
        "wall": principled("Wall", hex_rgb(wall_hex), 0.86),
        "floor": principled("OakFloor", (0.45, 0.32, 0.16, 1), 0.55, tex=oak if oak.exists() else None),
        "tile": principled("Tile", (0.82, 0.80, 0.76, 1), 0.35),
        "terra": principled("Terra", (0.55, 0.42, 0.28, 1), 0.7),
        "ceiling": principled("Ceiling", (0.92, 0.91, 0.88, 1), 0.9),
        "frame": principled("Frame", (0.12, 0.12, 0.12, 1), 0.4, metallic=0.3),
        "glass": glass_mat(),
        "wood": principled("Wood", (0.35, 0.22, 0.10, 1), 0.55),
        "cabinet": principled("Cabinet", (0.90, 0.88, 0.84, 1), 0.4),
        "ceramic": principled("Ceramic", (0.9, 0.9, 0.92, 1), 0.25),
    }

    root_coll = ensure_coll("unit")
    shells = build_shells(scene, mats, root_coll)
    place_furniture(scene, root, mats, shells)

    if not args.skip_preview:
        preview_camera(scene)
        preview = out.parent / (out.name + "-preview.png")
        bpy.context.scene.render.filepath = str(preview)
        print("PREVIEW render …", flush=True)
        t0 = time.time()
        bpy.ops.render.render(write_still=True)
        print(f"  preview in {time.time()-t0:.1f}s → {preview}", flush=True)

    if args.preview_only:
        print("preview-only, skip bake")
        return

    manifest = {
        "planId": scene["planId"],
        "style": scene["style"],
        "prefs": scene["prefs"],
        "lightmaps": {},
        "samples": args.samples,
        "engine": "Cycles 4.5.16 OIDN",
        "neutralAlbedo": True,
    }
    total_bytes = 0
    only = {s.strip() for s in args.rooms.split(",") if s.strip()}
    for r in scene["rooms"]:
        rid = r["id"]
        if only and rid not in only:
            print(f"skip {rid}: not in --rooms", flush=True)
            continue
        kind = r["type"]
        size = args.size if kind == "living" else args.small_size
        objs = shells[rid]["objs"]
        result = bake_room(rid, objs, size, args.samples, out.parent / f"{out.name}-{rid}")
        if not result:
            continue
        png, dt, _img = result
        webp = to_webp(png)
        sz = webp.stat().st_size
        total_bytes += sz
        manifest["lightmaps"][rid] = {
            "file": webp.name,
            "png": png.name,
            "bytes": sz,
            "size": size,
            "seconds": round(dt, 2),
            "type": kind,
            "name": r.get("name", rid),
        }

    glb = out.parent / (out.name + ".glb")
    print("EXPORT", glb, flush=True)
    export_glb(glb)
    if glb.exists():
        manifest["glb"] = glb.name
        manifest["glbBytes"] = glb.stat().st_size
        total_bytes += glb.stat().st_size
    manifest["totalBytes"] = total_bytes
    manifest["totalMB"] = round(total_bytes / 1024 / 1024, 2)
    manifest["bakeSeconds"] = round(time.time() - t_all, 1)
    man_path = out.parent / (out.name + "-manifest.json")
    man_path.write_text(json.dumps(manifest, indent=2))
    print("MANIFEST", man_path, "totalMB", manifest["totalMB"], "seconds", manifest["bakeSeconds"], flush=True)
    if args.save_blend:
        blend = out.parent / (out.name + ".blend")
        bpy.ops.wm.save_as_mainfile(filepath=str(blend))
        print("BLEND", blend, flush=True)
    if manifest["totalMB"] > 15:
        print("WARNING: unit exceeds 15 MB phone budget", flush=True)


if __name__ == "__main__":
    main()
