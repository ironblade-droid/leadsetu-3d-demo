#!/usr/bin/env python3
"""Headless Cycles baker for Lead Setu interiors.

    /home/box/apps/blender --background --python scripts/bake_cycles.py -- \
        --scene public/baked/2bhk-modern-scene.json \
        --root /workspace/leadsetu-3d-demo \
        --out /tmp/bake-v6/2bhk-modern \
        --size 2048 --small-size 1536 --samples 96 \
        --time both --skip-preview --save-blend

Produces:
  <out>.glb                   shells + furniture + cabinets + rails + curtains,
                              UV0 albedo, UV1 (TEXCOORD_1) lightmap
  <out>-<room>.png            per-room COMBINED color bake, OIDN-denoised, Filmic
  <out>-night-<room>.png      night bake, same UVs, practicals
  <out>-manifest.json
  <out>-preview.png           Cycles beauty (living), Filmic Medium Contrast
"""
from __future__ import annotations

import argparse, json, math, os, sys, time
from collections import defaultdict
from pathlib import Path

import bmesh
import bpy
from mathutils import Vector

def argv_after_dash():
    if "--" in sys.argv:
        return sys.argv[sys.argv.index("--") + 1 :]
    return sys.argv[1:]


def parse():
    p = argparse.ArgumentParser()
    p.add_argument("--scene", required=True)
    p.add_argument("--root", required=True)
    p.add_argument("--out", required=True, help="output prefix, relative to root or absolute")
    p.add_argument("--size", type=int, default=2048, help="atlas for living")
    p.add_argument("--samples", type=int, default=96)
    p.add_argument("--small-size", type=int, default=1536, help="atlas for non-living rooms")
    p.add_argument("--preview-only", action="store_true")
    p.add_argument("--skip-preview", action="store_true")
    p.add_argument("--save-blend", action="store_true")
    p.add_argument("--rooms", default="", help="comma-separated room ids (default: all)")
    p.add_argument("--time", default="day", choices=("day", "night", "both"))
    p.add_argument("--from-blend", default="", help="open an existing blend (UVs already packed)")
    p.add_argument("--no-filmic", action="store_true", help="save linear 8-bit (debug)")
    return p.parse_args(argv_after_dash())


def reset():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene
    sc.render.engine = "CYCLES"
    sc.cycles.device = "CPU"
    # Beauty-render denoising (preview). Bake itself does not denoise —
    # we run the compositor OIDN node on the float bake after the fact.
    sc.cycles.use_denoising = True
    sc.cycles.denoiser = "OPENIMAGEDENOISE"
    sc.cycles.use_adaptive_sampling = True
    sc.cycles.adaptive_threshold = 0.015
    sc.cycles.sample_clamp_indirect = 8.0
    sc.cycles.sample_clamp_direct = 16.0
    sc.cycles.samples = 96
    sc.cycles.bake_type = "COMBINED"
    sc.render.bake.use_pass_direct = True
    sc.render.bake.use_pass_indirect = True
    sc.render.bake.use_pass_color = True
    sc.render.bake.use_pass_diffuse = True
    sc.render.bake.use_pass_glossy = True
    sc.render.bake.use_pass_emit = True
    sc.render.bake.use_pass_transmission = False
    sc.render.bake.margin = 12
    sc.render.bake.margin_type = "EXTEND"
    sc.render.bake.target = "IMAGE_TEXTURES"
    sc.render.threads_mode = "FIXED"
    sc.render.threads = 8
    sc.render.resolution_x = 1600
    sc.render.resolution_y = 1000
    sc.render.image_settings.file_format = "PNG"
    sc.render.film_transparent = False
    sc.view_settings.view_transform = "Filmic"
    sc.view_settings.look = "Medium Contrast"
    sc.view_settings.exposure = 0.0
    sc.view_settings.gamma = 1.0
    sc.display_settings.display_device = "sRGB"


def world_hdri(path, intensity=1.15):
    world = bpy.data.worlds.get("World") or bpy.data.worlds.new("World")
    bpy.context.scene.world = world
    world.use_nodes = True
    nt = world.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputWorld")
    bg = nt.nodes.new("ShaderNodeBackground")
    bg.inputs["Strength"].default_value = intensity
    if path and Path(path).exists():
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


def add_sun(energy=3.8):
    existing = bpy.data.objects.get("Sun")
    if existing:
        existing.data.energy = energy
        existing.hide_render = energy <= 0
        existing.hide_set(energy <= 0)
        return existing
    bpy.ops.object.light_add(type="SUN", location=(4, -8, 10))
    sun = bpy.context.active_object
    sun.name = "Sun"
    sun.data.energy = energy
    sun.data.angle = math.radians(0.53)
    sun.data.color = (1.0, 0.96, 0.88)
    sun.rotation_euler = (math.radians(48), math.radians(10), math.radians(-20))
    return sun


def set_downlight_energy(scene, night=False):
    for r in scene["rooms"]:
        lamp = bpy.data.objects.get(f"down-{r['id']}")
        if not lamp:
            continue
        kind = r["type"]
        if night:
            lamp.data.energy = 120 if kind == "living" else 90
            lamp.data.color = (1.0, 0.88, 0.68)
        else:
            lamp.data.energy = 40 if kind == "living" else 28
            lamp.data.color = (1.0, 0.95, 0.88)


def setup_night_practicals(scene, root):
    """Dim the sun, swap to a night sky, boost downlights, add floor-lamp points."""
    add_sun(energy=0.0)
    night = root / "public" / "hdris" / "kloppenheim_02_puresky_1k.hdr"
    world_hdri(night, 0.10)
    set_downlight_energy(scene, night=True)
    for p in scene.get("placements") or []:
        kind = (p.get("kind") or "") + " " + (p.get("id") or "")
        if "lamp" not in kind.lower():
            continue
        name = f"practical-{p['id']}"
        existing = bpy.data.objects.get(name)
        if existing:
            existing.hide_render = False
            existing.hide_set(False)
            continue
        bpy.ops.object.light_add(type="POINT", location=(p["x"], p["z"], 1.25))
        L = bpy.context.active_object
        L.name = name
        L.data.energy = 28
        L.data.color = (1.0, 0.82, 0.55)
        L.data.shadow_soft_size = 0.10
    for p in scene.get("placements") or []:
        if p.get("kind") != "kitchen":
            continue
        name = f"practical-uc-{p['id']}"
        if bpy.data.objects.get(name):
            continue
        bpy.ops.object.light_add(type="AREA", location=(p["x"], p["z"], 0.95))
        L = bpy.context.active_object
        L.name = name
        L.data.energy = 35
        L.data.color = (1.0, 0.90, 0.72)
        L.data.size = max(p["w"] * 0.7, 0.5)
        L.data.size_y = 0.08
        L.rotation_euler = (0, 0, p.get("rot") or 0)
    print("NIGHT lights: sun off, kloppenheim 0.10, practicals on", flush=True)


def setup_day_lights(scene, root):
    hdri = root / "public" / scene["textures"]["hdri"]
    world_hdri(hdri, 0.95)
    add_sun(energy=3.8)
    set_downlight_energy(scene, night=False)
    for o in bpy.data.objects:
        if o.name.startswith("practical-"):
            o.hide_render = True
            o.hide_set(True)
    print("DAY lights: sun 3.8, kloofendal 0.95", flush=True)


NEUTRAL = (0.80, 0.80, 0.80, 1)
SHELL_KINDS = ("floor", "ceil", "wall")
FURN_KINDS = ("furn", "frame", "curtain", "rail", "cabinet", "counter")
BAKE_KINDS = SHELL_KINDS + FURN_KINDS


def hex_rgba(h, linear=True):
    h = (h or "#ffffff").lstrip("#")
    r, g, b = int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16)
    def lin(c):
        c = c / 255.0
        return c ** 2.2 if linear else c
    return (lin(r), lin(g), lin(b), 1)


def principled(name, color, roughness=0.7, metallic=0.0, tex=None, alpha=1.0, rough_tex=None):
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
        if hasattr(mat, "shadow_method"):
            mat.shadow_method = "HASHED"
    if tex:
        img = bpy.data.images.load(str(tex))
        img.colorspace_settings.name = "sRGB"
        nimg = nt.nodes.new("ShaderNodeTexImage")
        nimg.image = img
        nimg.interpolation = "Smart"
        nimg.projection = "FLAT"
        coord = nt.nodes.new("ShaderNodeTexCoord")
        mapn = nt.nodes.new("ShaderNodeMapping")
        mapn.inputs["Scale"].default_value = (1.6, 1.6, 1.6)
        nt.links.new(coord.outputs["UV"], mapn.inputs["Vector"])
        nt.links.new(mapn.outputs["Vector"], nimg.inputs["Vector"])
        nt.links.new(nimg.outputs["Color"], pr.inputs["Base Color"])
        if rough_tex and Path(rough_tex).exists():
            rimg = bpy.data.images.load(str(rough_tex))
            rimg.colorspace_settings.name = "Non-Color"
            nr = nt.nodes.new("ShaderNodeTexImage")
            nr.image = rimg
            nr.interpolation = "Smart"
            nt.links.new(mapn.outputs["Vector"], nr.inputs["Vector"])
            nt.links.new(nr.outputs["Color"], pr.inputs["Roughness"])
    else:
        pr.inputs["Base Color"].default_value = color
    nt.links.new(pr.outputs["BSDF"], out.inputs["Surface"])
    mat["ls_is_shell"] = 1
    return mat


def glass_mat():
    mat = bpy.data.materials.new("Glass")
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()
    out = nt.nodes.new("ShaderNodeOutputMaterial")
    tr = nt.nodes.new("ShaderNodeBsdfTransparent")
    tr.inputs["Color"].default_value = (0.75, 0.85, 0.92, 1)
    gl = nt.nodes.new("ShaderNodeBsdfGlass")
    gl.inputs["IOR"].default_value = 1.45
    gl.inputs["Roughness"].default_value = 0.04
    gl.inputs["Color"].default_value = (0.85, 0.92, 0.95, 1)
    mix = nt.nodes.new("ShaderNodeMixShader")
    lp = nt.nodes.new("ShaderNodeLightPath")
    nt.links.new(lp.outputs["Is Shadow Ray"], mix.inputs["Fac"])
    nt.links.new(gl.outputs["BSDF"], mix.inputs[1])
    nt.links.new(tr.outputs["BSDF"], mix.inputs[2])
    nt.links.new(mix.outputs["Shader"], out.inputs["Surface"])
    mat.blend_method = "BLEND"
    return mat


def mesh_from_pydata(name, verts, faces, collection=None):
    mesh = bpy.data.meshes.new(name)
    mesh.from_pydata(verts, [], faces)
    mesh.update()
    obj = bpy.data.objects.new(name, mesh)
    (collection or bpy.context.collection).objects.link(obj)
    return obj


def floor_from_poly(name, poly, z, collection, mat):
    verts = [(p[0], p[1], z) for p in poly] + [(p[0], p[1], z - 0.04) for p in poly]
    n = len(poly)
    area = 0.0
    for i in range(n):
        x1, y1 = poly[i]
        x2, y2 = poly[(i + 1) % n]
        area += x1 * y2 - x2 * y1
    if area < 0:
        poly = list(reversed(poly))
        verts = [(p[0], p[1], z) for p in poly] + [(p[0], p[1], z - 0.04) for p in poly]
    faces = [tuple(range(n))]
    faces.append(tuple(range(2 * n - 1, n - 1, -1)))
    for i in range(n):
        a, b = i, (i + 1) % n
        faces.append((a + n, b + n, b, a))
    obj = mesh_from_pydata(name, verts, faces, collection)
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


def dist_to_poly(poly, x, y):
    if point_in_poly(poly, x, y):
        return 0.0
    best = 1e9
    n = len(poly)
    for i in range(n):
        x1, y1 = poly[i]
        x2, y2 = poly[(i + 1) % n]
        vx, vy = x2 - x1, y2 - y1
        l2 = vx * vx + vy * vy
        t = 0.0 if l2 == 0 else max(0.0, min(1.0, ((x - x1) * vx + (y - y1) * vy) / l2))
        px, py = x1 + t * vx, y1 + t * vy
        d = math.hypot(x - px, y - py)
        if d < best:
            best = d
    return best


def ensure_coll(name):
    c = bpy.data.collections.get(name) or bpy.data.collections.new(name)
    if c.name not in bpy.context.scene.collection.children:
        bpy.context.scene.collection.children.link(c)
    return c


def link_to(obj, collection):
    for c in list(obj.users_collection):
        c.objects.unlink(obj)
    collection.objects.link(obj)


def nearest_room(rooms, x, y):
    best, bd = rooms[0]["id"], 1e9
    for r in rooms:
        cx, cy = poly_centroid(r["polygon"])
        d = (cx - x) ** 2 + (cy - y) ** 2
        if point_in_poly(r["polygon"], x, y):
            d *= 0.05
        if d < bd:
            best, bd = r["id"], d
    return best


def nearest_livable(rooms, x, y):
    """Prefer a livable room over a balcony/terrace so the living's south
    window (on the balcony threshold) gets frames and curtains in the
    living atlas, not the balcony's."""
    livable = [r for r in rooms if r["type"] not in ("balcony", "terrace")]
    return nearest_room(livable or rooms, x, y)


def build_shells(scene, mats, root_coll):
    h = float(scene["wallHeight"])
    rooms = scene["rooms"]
    shells = {r["id"]: {"room": r, "objs": []} for r in rooms}
    colls = {r["id"]: ensure_coll(f"room-{r['id']}") for r in rooms}

    for r in rooms:
        rid = r["id"]
        poly = r["polygon"]
        kind = r["type"]
        fmat = mats["tile"] if kind in ("bathroom", "utility", "kitchen", "lobby", "hall") else (
            mats["terra"] if kind in ("terrace", "balcony") else mats["floor"]
        )
        fl = floor_from_poly(f"floor-{rid}", poly, 0.008, colls[rid], fmat)
        fl["ls_room"] = rid
        fl["ls_shell"] = "floor"
        shells[rid]["objs"].append(fl)
        # Open to the sky — no ceiling over a balcony or terrace.
        if kind not in ("terrace", "balcony"):
            ce = floor_from_poly(f"ceil-{rid}", poly, h - 0.01, colls[rid], mats["ceiling"])
            ce["ls_room"] = rid
            ce["ls_shell"] = "ceil"
            shells[rid]["objs"].append(ce)

        cx, cy = poly_centroid(poly)
        bpy.ops.object.light_add(type="AREA", location=(cx, cy, h - 0.08))
        lamp = bpy.context.active_object
        lamp.name = f"down-{rid}"
        lamp.data.energy = 40 if kind == "living" else 28
        lamp.data.size = 0.55
        lamp.data.color = (1.0, 0.95, 0.88)
        lamp.data.spread = math.radians(160)
        lamp.rotation_euler = (0, 0, 0)
        for c in list(lamp.users_collection):
            c.objects.unlink(lamp)
        colls[rid].objects.link(lamp)

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
        rid = nearest_livable(rooms, cx, cy)
        # Glass stays in the scene for lighting (sun through, slight tint)
        # but is NOT marked ls_shell, so it is not baked or exported —
        # the walkthrough sees the three.js sky through the opening.
        gsx, gsy = (length - 0.04, 0.03) if along_x else (0.03, length - 0.04)
        g = box(f"glass-{i}", cx, cy, WIN_SILL + WIN_H / 2, gsx, gsy, WIN_H - 0.06, colls[rid], mats["glass"])
        g["ls_room"] = rid
        for zoff, zh, tag in ((WIN_SILL, 0.05, "sill"), (WIN_SILL + WIN_H, 0.05, "head")):
            frsx, frsy = (length, 0.07) if along_x else (0.07, length)
            fr = box(f"frame-{rid}-{i}-{tag}", cx, cy, zoff, frsx, frsy, zh, colls[rid], mats["frame"])
            fr["ls_room"] = rid
            fr["ls_shell"] = "frame"
            shells[rid]["objs"].append(fr)
        if along_x:
            for sxoff, tag in ((-length / 2, "L"), (length / 2, "R")):
                jm = box(f"frame-{rid}-{i}-{tag}", cx + sxoff, cy, WIN_SILL + WIN_H / 2,
                         0.05, 0.07, WIN_H, colls[rid], mats["frame"])
                jm["ls_room"] = rid
                jm["ls_shell"] = "frame"
                shells[rid]["objs"].append(jm)
        else:
            for syoff, tag in ((-length / 2, "L"), (length / 2, "R")):
                jm = box(f"frame-{rid}-{i}-{tag}", cx, cy + syoff, WIN_SILL + WIN_H / 2,
                         0.07, 0.05, WIN_H, colls[rid], mats["frame"])
                jm["ls_room"] = rid
                jm["ls_shell"] = "frame"
                shells[rid]["objs"].append(jm)

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
    for c in cutters:
        c.hide_render = True
        c.hide_set(True)

    assign_walls_to_touching_rooms(shells, rooms, colls)
    add_curtains(scene, mats, shells, colls)
    add_rails(scene, mats, shells, colls)
    return shells


def apply_booleans(shells, cutters):
    wall_objs = []
    for sh in shells.values():
        wall_objs.extend([o for o in sh["objs"] if o.get("ls_shell") == "wall"])
    for wall in wall_objs:
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
                try:
                    mod.solver = "EXACT"
                except Exception:
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
                print("boolean EXACT failed on", wall.name, e, "- retry FAST", flush=True)
                for m in list(wall.modifiers):
                    wall.modifiers.remove(m)
                for c in cutters:
                    mc = c.matrix_world
                    cc = [mc @ Vector(v) for v in c.bound_box]
                    cmn = Vector((min(v.x for v in cc), min(v.y for v in cc), min(v.z for v in cc)))
                    cmx = Vector((max(v.x for v in cc), max(v.y for v in cc), max(v.z for v in cc)))
                    if (cmn.x <= wmx.x and cmx.x >= wmn.x and
                        cmn.y <= wmx.y and cmx.y >= wmn.y and
                        cmn.z <= wmx.z and cmx.z >= wmn.z):
                        mod = wall.modifiers.new(f"cutf-{c.name}", "BOOLEAN")
                        mod.operation = "DIFFERENCE"
                        mod.solver = "FAST"
                        mod.object = c
                try:
                    for m in list(wall.modifiers):
                        bpy.ops.object.modifier_apply(modifier=m.name)
                except Exception as e2:
                    print("boolean FAST also failed on", wall.name, e2, flush=True)
            wall.select_set(False)


def rooms_touching(obj, rooms, margin=0.16):
    mw = obj.matrix_world
    corners = [mw @ Vector(v) for v in obj.bound_box]
    xs = [c.x for c in corners]
    ys = [c.y for c in corners]
    xmin, xmax, ymin, ymax = min(xs), max(xs), min(ys), max(ys)
    samples = [
        (xmin, ymin), (xmax, ymin), (xmin, ymax), (xmax, ymax),
        ((xmin + xmax) / 2, (ymin + ymax) / 2),
        ((xmin + xmax) / 2, ymin), ((xmin + xmax) / 2, ymax),
        (xmin, (ymin + ymax) / 2), (xmax, (ymin + ymax) / 2),
    ]
    hits = []
    for r in rooms:
        poly = r["polygon"]
        for x, y in samples:
            if dist_to_poly(poly, x, y) <= margin:
                hits.append(r["id"])
                break
    return hits


def keep_faces_toward(obj, cx, cy, z=1.4):
    """Drop faces that point away from the room centroid."""
    mesh = obj.data
    bm = bmesh.new()
    bm.from_mesh(mesh)
    bm.faces.ensure_lookup_table()
    target = Vector((cx, cy, z))
    mw = obj.matrix_world
    rot = mw.to_3x3()
    to_del = []
    for f in bm.faces:
        c = mw @ f.calc_center_median()
        n = (rot @ f.normal).normalized()
        toward = target - c
        if toward.length < 1e-6 or n.dot(toward.normalized()) < 0.05:
            to_del.append(f)
    if to_del and len(to_del) < len(bm.faces):
        bmesh.ops.delete(bm, geom=to_del, context="FACES")
        bm.to_mesh(mesh)
        mesh.update()
    bm.free()


def assign_walls_to_touching_rooms(shells, rooms, colls):
    """Every wall that touches a room goes into that room atlas, inward face only."""
    all_walls = []
    for sh in shells.values():
        for o in list(sh["objs"]):
            if o.get("ls_shell") == "wall":
                all_walls.append(o)
                sh["objs"].remove(o)
    room_by_id = {r["id"]: r for r in rooms}
    for wall in all_walls:
        touching = rooms_touching(wall, rooms)
        if not touching:
            touching = [wall.get("ls_room")] if wall.get("ls_room") else []
        print(f"  wall {wall.name} touches {touching}", flush=True)
        for rid in touching:
            obj = wall.copy()
            obj.data = wall.data.copy()
            obj.name = f"wall-{rid}-{wall.name}"
            link_to(obj, colls[rid])
            r = room_by_id[rid]
            rcx, rcy = poly_centroid(r["polygon"])
            keep_faces_toward(obj, rcx, rcy)
            obj["ls_room"] = rid
            obj["ls_shell"] = "wall"
            shells[rid]["objs"].append(obj)
        wall["ls_shell"] = ""
        wall.hide_render = True
        wall.hide_set(True)


def add_curtains(scene, mats, shells, colls):
    fabric = principled("Curtain", hex_rgba("#3d4a58"), 0.9)
    rod_mat = mats["frame"]
    wall_h = float(scene["wallHeight"])
    height = min(2.15, wall_h - 0.35)
    zc = 0.25 + height / 2
    rooms = scene["rooms"]
    for i, w in enumerate(scene["windows"]):
        along_x = w["w"] >= w["d"]
        cx, cy = w["x"] + w["w"] / 2, w["z"] + w["d"] / 2
        rid = nearest_livable(rooms, cx, cy)
        coll = colls[rid]
        rcx, rcy = poly_centroid(next(r for r in rooms if r["id"] == rid)["polygon"])
        folds = 6
        if along_x:
            half = max(0.2, w["w"] * 0.18)
            zin = cy + (0.10 if rcy > cy else -0.10)
            for side, px in (("L", cx - w["w"] / 2 + half / 2), ("R", cx + w["w"] / 2 - half / 2)):
                for fi in range(folds):
                    t = (fi + 0.5) / folds
                    wave = math.sin(fi * 1.35) * 0.018
                    ww = (half / folds) * 1.2
                    lx = px - half / 2 + t * half
                    obj = box(f"curtain-{rid}-{i}-{side}-{fi}", lx, zin + wave, zc,
                              ww, 0.03, height, coll, fabric)
                    obj["ls_room"] = rid
                    obj["ls_shell"] = "curtain"
                    shells[rid]["objs"].append(obj)
            rod = box(f"rod-{rid}-{i}", cx, zin, 0.25 + height + 0.03,
                      w["w"] + 0.14, 0.025, 0.025, coll, rod_mat)
            rod["ls_room"] = rid
            rod["ls_shell"] = "frame"
            shells[rid]["objs"].append(rod)
        else:
            half = max(0.2, w["d"] * 0.18)
            xin = cx + (0.10 if rcx > cx else -0.10)
            for side, py in (("L", cy - w["d"] / 2 + half / 2), ("R", cy + w["d"] / 2 - half / 2)):
                for fi in range(folds):
                    t = (fi + 0.5) / folds
                    wave = math.sin(fi * 1.35) * 0.018
                    dd = (half / folds) * 1.2
                    ly = py - half / 2 + t * half
                    obj = box(f"curtain-{rid}-{i}-{side}-{fi}", xin + wave, ly, zc,
                              0.03, dd, height, coll, fabric)
                    obj["ls_room"] = rid
                    obj["ls_shell"] = "curtain"
                    shells[rid]["objs"].append(obj)
            rod = box(f"rod-{rid}-{i}", xin, cy, 0.25 + height + 0.03,
                      0.025, w["d"] + 0.14, 0.025, coll, rod_mat)
            rod["ls_room"] = rid
            rod["ls_shell"] = "frame"
            shells[rid]["objs"].append(rod)
        print(f"  curtains window {i} -> {rid}", flush=True)


def add_rails(scene, mats, shells, colls):
    metal = principled("RailMetal", (0.55, 0.55, 0.58, 1), 0.28, metallic=0.85)
    for r in scene["rooms"]:
        if r["type"] not in ("balcony", "terrace"):
            continue
        rid = r["id"]
        poly = r["polygon"]
        h = 1.05
        coll = colls[rid]
        n = len(poly)
        for i in range(n):
            a, b = poly[i], poly[(i + 1) % n]
            dx, dy = b[0] - a[0], b[1] - a[1]
            length = math.hypot(dx, dy)
            if length < 0.3:
                continue
            mx, my = (a[0] + b[0]) / 2, (a[1] + b[1]) / 2
            skip = False
            for other in scene["rooms"]:
                if other["type"] in ("balcony", "terrace"):
                    continue
                if dist_to_poly(other["polygon"], mx, my) < 0.12:
                    skip = True
                    break
            if skip:
                continue
            ang = math.atan2(dy, dx)
            rail = box(f"rail-{rid}-{i}", mx, my, h, length, 0.04, 0.03, coll, metal)
            rail.rotation_euler[2] = ang
            rail["ls_room"] = rid
            rail["ls_shell"] = "rail"
            shells[rid]["objs"].append(rail)
            posts = max(2, math.floor(length / 1.4) + 1)
            for pi in range(posts):
                u = 0.5 if posts == 1 else pi / (posts - 1)
                px, py = a[0] + dx * u, a[1] + dy * u
                post = box(f"rail-{rid}-{i}-p{pi}", px, py, h / 2, 0.04, 0.04, h, coll, metal)
                post["ls_room"] = rid
                post["ls_shell"] = "rail"
                shells[rid]["objs"].append(post)
        print(f"  rails {rid}", flush=True)


def import_gltf(path):
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


def local_box(name, parent, lx, ly, lz, sx, sy, sz, coll, mat, rid, kind="cabinet"):
    o = box(name, 0, 0, 0, sx, sy, sz, coll, mat)
    o.parent = parent
    o.location = (lx, ly, lz)
    o.rotation_euler = (0, 0, 0)
    o.scale = (1, 1, 1)
    o["ls_room"] = rid
    o["ls_shell"] = kind
    return o


def kitchen_run(p, coll, mats, shells, rid):
    """Match src/furniture.ts kitchenRun: base, seams, quartz, splash, wall cabs, hob or sink."""
    x, y = p["x"], p["z"]
    length, depth = p["w"], p["d"]
    rot = p.get("rot") or 0
    has_hob = "hob" in (p.get("variant") or "")
    bpy.ops.object.empty_add(location=(x, y, 0), rotation=(0, 0, rot))
    empty = bpy.context.active_object
    empty.name = f"krun-{rid}-{p['id']}"
    link_to(empty, coll)
    empty["ls_room"] = rid

    def add(name, lx, ly, lz, sx, sy, sz, mat, kind="cabinet"):
        o = local_box(name, empty, lx, ly, lz, sx, sy, sz, coll, mat, rid, kind)
        shells[rid]["objs"].append(o)
        return o

    add(f"{p['id']}-base", 0, 0.01, 0.43, length, depth - 0.02, 0.86, mats["cabinet"])
    doors = max(2, round(length / 0.55))
    for i in range(1, doors):
        lx = -length / 2 + (length / doors) * i
        add(f"{p['id']}-seam-{i}", lx, depth / 2 - 0.005, 0.42, 0.008, 0.01, 0.72, mats["frame"], "frame")
    add(f"{p['id']}-top", 0, 0.01, 0.885, length + 0.02, depth + 0.03, 0.05, mats["counter"], "cabinet")
    splash_h = 0.58
    add(f"{p['id']}-splash", 0, -depth / 2 + 0.02, 0.91 + splash_h / 2,
        length, 0.02, splash_h, mats["splash"], "cabinet")
    wall_h, wall_y = 0.62, 2.05
    if has_hob:
        gap = 0.85
        side = (length - gap) / 2
        if side > 0.35:
            add(f"{p['id']}-wc-L", -length / 2 + side / 2, -0.02, wall_y,
                side - 0.02, depth - 0.12, wall_h, mats["cabinet"])
            add(f"{p['id']}-wc-R", length / 2 - side / 2, -0.02, wall_y,
                side - 0.02, depth - 0.12, wall_h, mats["cabinet"])
        add(f"{p['id']}-hob", 0, 0.02, 0.91 + 0.03, 0.68, 0.5, 0.03, mats["hob"], "cabinet")
        add(f"{p['id']}-canopy", 0, -0.02, 1.58, 0.78, 0.48, 0.10, mats["steel"], "cabinet")
        add(f"{p['id']}-flare", 0, -0.02, 1.50, 0.70, 0.42, 0.08, mats["darksteel"], "cabinet")
        add(f"{p['id']}-duct", 0, -depth / 2 + 0.16, 2.15, 0.26, 0.22, 1.05, mats["steel"], "cabinet")
    else:
        add(f"{p['id']}-wc", 0, -0.02, wall_y, length - 0.04, depth - 0.12, wall_h, mats["cabinet"])
        add(f"{p['id']}-sink", 0, 0.04, 0.91 - 0.04, 0.48, 0.36, 0.12, mats["steel"], "cabinet")
        add(f"{p['id']}-water", 0, 0.04, 0.91 + 0.02, 0.40, 0.28, 0.02, mats["water"], "cabinet")
        add(f"{p['id']}-tap", 0, -depth / 2 + 0.16, 0.91 + 0.16, 0.03, 0.03, 0.20, mats["darksteel"], "frame")
    print(f"  kitchen run {p['id']} hob={has_hob} at={(x, y)} rot={rot:.2f}", flush=True)
    return empty


def place_furniture(scene, root, mats, shells):
    furn_coll = ensure_coll("furniture")
    placed = []
    for p in scene["placements"]:
        rid = p.get("roomId") or nearest_room(scene["rooms"], p["x"], p["z"])
        coll = bpy.data.collections.get(f"room-{rid}") or furn_coll
        x, y, w, d, h, rot = p["x"], p["z"], p["w"], p["d"], p["h"], p["rot"]
        fpath = p.get("file")
        kind = p["kind"]
        if kind == "kitchen":
            placed.append(kitchen_run(p, coll, mats, shells, rid))
            continue
        if fpath:
            full = root / "public" / "models" / fpath
            if full.exists():
                imported = import_gltf(full)
                meshes = [o for o in imported if o.type == "MESH"]
                bpy.ops.object.empty_add(location=(0, 0, 0))
                empty = bpy.context.active_object
                empty.name = f"furn-{rid}-{p['id']}"
                for o in imported:
                    o.parent = empty
                mn, size = bbox_world(meshes)
                for o in imported:
                    o.location.z -= mn.z
                sx = (w / size.x) if size.x > 1e-4 else 1
                sy = (d / size.y) if size.y > 1e-4 else 1
                sz = (h / size.z) if size.z > 1e-4 and h > 0 else 1
                sca = min(sx, sy)
                if sca > 20 or sca < 0.01:
                    print(f"  SCALE CLAMP {p['id']} raw={sca:.3f} size={tuple(size)} want={(w, d, h)}", flush=True)
                    sca = max(0.01, min(sca, 8))
                empty.scale = (sca, sca, sca)
                empty.location = (x, y, 0)
                empty.rotation_euler[2] = rot
                bpy.context.view_layer.update()
                print(f"  furn {p['id']} {kind} scale={sca:.3f} at={(x, y)} size={tuple(round(c, 2) for c in size)}", flush=True)
                for o in [empty] + imported:
                    for c in list(o.users_collection):
                        c.objects.unlink(o)
                    coll.objects.link(o)
                empty["ls_room"] = rid
                empty["ls_shell"] = "furn"
                for m in meshes:
                    m.name = f"furn-{rid}-{p['id']}-{m.name[:40]}"
                    m["ls_room"] = rid
                    m["ls_shell"] = "furn"
                    if rid in shells:
                        shells[rid]["objs"].append(m)
                placed.append(empty)
                continue
        color = mats["cabinet"] if kind in ("kitchen", "fridge", "cabinet") else (
            mats["ceramic"] if kind in ("shower", "toilet", "basin", "vanity") else mats["wood"]
        )
        obj = box(f"furn-{rid}-{p['id']}", x, y, h / 2, w, d, h, coll, color)
        obj.rotation_euler[2] = rot
        obj["ls_room"] = rid
        obj["ls_shell"] = "furn"
        if rid in shells:
            shells[rid]["objs"].append(obj)
        placed.append(obj)
    return placed


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
    """One island per connected coplanar face group. Skips slab backs."""
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


def furniture_island(obj):
    """One atlas rectangle per furniture mesh, no bpy.ops (smart_project
    crashed Blender 4.5 on high-poly glTF after leaving edit mode).

    Prefer a normalized copy of UV0 when it looks unique; otherwise
    fall back to a world-plane projection of every loop.
    """
    ensure_uv2(obj)
    mesh = obj.data
    src = mesh.uv_layers[0] if mesh.uv_layers else None
    uvs = []
    if src is not None and len(src.data) > 0:
        # Copy to plain floats first — holding BMLoopUV references after
        # a mesh update is what segfaulted the previous listcomp.
        raw = [(li, float(src.data[li].uv[0]), float(src.data[li].uv[1]))
               for li in range(len(src.data))]
        us = [u for _, u, _ in raw]
        vs = [v for _, _, v in raw]
        min_u, max_u = min(us), max(us)
        min_v, max_v = min(vs), max(vs)
        du = max(max_u - min_u, 1e-6)
        dv = max(max_v - min_v, 1e-6)
        # If UV0 is degenerate (all at one point), fall through to planar.
        if du > 1e-4 and dv > 1e-4:
            uvs = [(li, (u - min_u) / du, (v - min_v) / dv) for li, u, v in raw]
    if not uvs:
        mw = obj.matrix_world
        coords = [mw @ v.co for v in mesh.vertices]
        xs = [c.x for c in coords]; ys = [c.y for c in coords]; zs = [c.z for c in coords]
        span = (max(xs)-min(xs), max(ys)-min(ys), max(zs)-min(zs))
        # Project onto the two longest axes.
        axes = sorted(((span[0], 0), (span[1], 1), (span[2], 2)), reverse=True)
        a, b = axes[0][1], axes[1][1]
        mins = (min(xs), min(ys), min(zs))
        dus = (max(span[a], 1e-6), max(span[b], 1e-6))
        for li, loop in enumerate(mesh.loops):
            c = coords[loop.vertex_index]
            xyz = (c.x, c.y, c.z)
            uvs.append((li, (xyz[a] - mins[a]) / dus[0], (xyz[b] - mins[b]) / dus[1]))
    mn, size = bbox_world([obj])
    w = max(min(max(size.x, size.y), 3.5), 0.20)
    h = max(min(max(size.z, min(size.x, size.y)), 2.8), 0.20)
    return uvs, w, h


def pack_uv2(objs, margin=0.012):
    """Non-overlapping atlas. Shells: coplanar face islands. Furniture:
    one smart-projected rectangle per mesh. Walls get a 1.6x size boost
    so they receive higher texel density than the floor."""
    meshes = [
        o for o in objs
        if o.type == "MESH" and o.data.polygons and o.get("ls_shell") in BAKE_KINDS
    ]
    if not meshes:
        return
    items = []
    for o in meshes:
        ensure_uv2(o)
        layer = o.data.uv_layers["UVLightmap"]
        for d in layer.data:
            d.uv = (0.002, 0.002)
        kind = o.get("ls_shell")
        # Boxes (cabinets, curtains, frames, rails, procedural fallbacks)
        # get coplanar face islands so opposite faces do not share a lightmap.
        # High-poly glTF furniture uses a normalized UV0 as one rectangle.
        use_faces = kind in SHELL_KINDS or kind in ("cabinet", "curtain", "rail", "frame", "counter") \
            or len(o.data.polygons) <= 16
        if use_faces:
            islands = face_islands(o, min_area=0.008 if kind not in SHELL_KINDS else 0.02)
            if not islands:
                print(f"  UV {o.name}: no islands", flush=True)
            for idx, (uvs, w, h, area, ref) in enumerate(islands):
                tag = f"{o.name}#{idx}"
                if kind == "wall":
                    w, h = w * 1.6, h * 1.6
                items.append((o, uvs, w, h, tag, kind))
        else:
            print(f"  UV furn unwrap {o.name} ({len(o.data.polygons)} faces)", flush=True)
            uvs, w, h = furniture_island(o)
            tag = f"{o.name}#obj"
            items.append((o, uvs, w, h, tag, kind))

    def sort_key(it):
        o, _, w, h, tag, kind = it
        pri = 0 if kind == "floor" else 1 if kind == "ceil" else 2 if kind == "wall" else 3
        return (pri, -(w * h))

    items.sort(key=sort_key)
    if not items:
        print("  UV pack: no islands", flush=True)
        return

    def try_pack(S, gap):
        shelves = []
        y_top = 0.0
        positions = []
        for o, uvs, w, h, tag, kind in items:
            placed = False
            for sh in shelves:
                if h <= sh[1] + 1e-8 and sh[2] + w + gap <= S + 1e-8:
                    positions.append((o, uvs, sh[2], sh[0], w, h, tag, kind))
                    sh[2] += w + gap
                    placed = True
                    break
            if not placed:
                if y_top + h > S + 1e-8:
                    return None
                shelves.append([y_top, h, w + gap])
                positions.append((o, uvs, 0.0, y_top, w, h, tag, kind))
                y_top += h + gap
        return positions

    area = sum(w * h for _, _, w, h, _, _ in items)
    S = max(math.sqrt(area) * 1.15, max(max(w, h) for _, _, w, h, _, _ in items))
    positions = None
    for _ in range(28):
        gap = max(S * margin, 0.04)
        positions = try_pack(S, gap)
        if positions:
            break
        S *= 1.15
    if not positions:
        raise RuntimeError("UV shelf pack failed")

    used_w = max(x + w for _, _, x, _, w, _, _, _ in positions)
    used_h = max(y + h for _, _, _, y, _, h, _, _ in positions)
    inner = 1.0 - 2.0 * margin
    scale = inner / max(used_w, used_h)
    rects = []
    for o, uvs, x, y, w, h, tag, kind in positions:
        u0 = margin + x * scale
        v0 = margin + y * scale
        du = w * scale
        dv = h * scale
        layer = o.data.uv_layers["UVLightmap"]
        for li, u, v in uvs:
            u = min(max(u, 0.0), 1.0)
            v = min(max(v, 0.0), 1.0)
            layer.data[li].uv = (u0 + u * du, v0 + v * dv)
        print(
            f"  UV {tag} ({kind}) "
            f"x={u0:.3f}..{u0+du:.3f} y={v0:.3f}..{v0+dv:.3f} "
            f"spans={du:.3f}x{dv:.3f} pack={w:.2f}x{h:.2f}",
            flush=True,
        )
        for r in rects:
            if (u0 < r[2] - 1e-4 and u0 + du > r[0] + 1e-4 and
                    v0 < r[3] - 1e-4 and v0 + dv > r[1] + 1e-4):
                print(f"  WARNING overlap {tag} vs {r[4]}", flush=True)
        rects.append((u0, v0, u0 + du, v0 + dv, tag))
    print(f"  packed {len(positions)} islands  used={used_w*scale:.3f}x{used_h*scale:.3f}", flush=True)


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
        node = None
        for n in nt.nodes:
            if n.type == "TEX_IMAGE" and n.image == img:
                node = n
                break
        if node is None:
            node = nt.nodes.new("ShaderNodeTexImage")
            node.image = img
            node.label = "BAKE_TARGET"
        node.select = True
        nt.nodes.active = node


def denoise_and_tonemap(img, png_path, apply_filmic=True):
    """OIDN on the linear float bake, then Filmic Medium Contrast to 8-bit PNG.

    Cycles bake does not denoise even with use_denoising=True (that's for
    beauty renders). The compositor Denoise node is the supported path.
    The resulting 8-bit sRGB already has Filmic applied, so three.js
    should display it with toneMapped=false (no ACES on top).
    """
    sc = bpy.context.scene
    sc.use_nodes = True
    sc.render.use_compositing = True
    sc.render.use_sequencer = False
    nt = sc.node_tree
    nt.nodes.clear()
    src = nt.nodes.new("CompositorNodeImage")
    src.image = img
    den = nt.nodes.new("CompositorNodeDenoise")
    den.use_hdr = True
    try:
        den.prefilter = "ACCURATE"
    except Exception:
        pass
    comp = nt.nodes.new("CompositorNodeComposite")
    nt.links.new(src.outputs[0], den.inputs[0])
    nt.links.new(den.outputs[0], comp.inputs[0])
    sc.render.resolution_x = int(img.size[0])
    sc.render.resolution_y = int(img.size[1])
    sc.render.resolution_percentage = 100
    png_path = Path(png_path)
    png_path.parent.mkdir(parents=True, exist_ok=True)
    sc.render.filepath = str(png_path)
    sc.render.image_settings.file_format = "PNG"
    sc.render.image_settings.color_mode = "RGB"
    sc.render.image_settings.color_depth = "8"
    sc.render.image_settings.compression = 15
    if apply_filmic:
        sc.view_settings.view_transform = "Filmic"
        sc.view_settings.look = "Medium Contrast"
        sc.view_settings.exposure = 0.0
        sc.view_settings.gamma = 1.0
        sc.display_settings.display_device = "sRGB"
    else:
        sc.view_settings.view_transform = "Raw"
    old = sc.render.engine
    saved = [(o, o.hide_render) for o in bpy.data.objects]
    for o, _ in saved:
        o.hide_render = True
    t0 = time.time()
    try:
        sc.render.engine = "BLENDER_WORKBENCH"
        bpy.ops.render.render(write_still=True)
    finally:
        sc.render.engine = old
        for o, h in saved:
            o.hide_render = h
        sc.view_settings.view_transform = "Filmic"
        sc.view_settings.look = "Medium Contrast"
    print(f"  OIDN+Filmic {png_path.name} in {time.time()-t0:.2f}s", flush=True)
    return png_path


def bake_meshes(rid, meshes, size, samples, out_path, pack=True, apply_filmic=True):
    if not meshes:
        print(f"skip {rid}: no meshes", flush=True)
        return None
    if pack:
        pack_uv2(meshes)
    out_path = Path(out_path)
    img_name = f"LM-{rid}-{out_path.stem}"
    if img_name in bpy.data.images:
        bpy.data.images.remove(bpy.data.images[img_name])
    img = bpy.data.images.new(img_name, size, size, alpha=False, float_buffer=True)
    img.colorspace_settings.name = "Non-Color"
    for o in meshes:
        attach_bake_target(o, img)
    sc = bpy.context.scene
    sc.cycles.samples = samples
    # Denoising a bake through Cycles' beauty denoiser is a no-op and
    # has been seen to keep re-syncing a large scene; we OIDN afterwards.
    sc.cycles.use_denoising = False
    # Join a temporary copy of every target into ONE mesh. Baking 73
    # selected objects in this scene never finished a single target
    # (infinite Synchronize/Initialize loop). A single joined mesh
    # bakes the whole atlas in one Cycles pass; originals are untouched.
    copies = []
    bpy.ops.object.select_all(action="DESELECT")
    for o in meshes:
        o.hide_set(False)
        o.hide_render = False
        c = o.copy()
        c.data = o.data.copy()
        c.name = f"_baketmp_{o.name}"[:60]
        c.parent = None
        c.matrix_world = o.matrix_world.copy()
        bpy.context.scene.collection.objects.link(c)
        c.hide_set(False)
        c.hide_select = False
        c.select_set(True)
        copies.append(c)
    bpy.context.view_layer.objects.active = copies[0]
    if len(copies) > 1:
        bpy.ops.object.join()
    joined = bpy.context.view_layer.objects.active
    joined.name = f"_BAKEJOIN-{rid}"
    # Join often leaves UV0 (albedo) as the active layer. Cycles bakes
    # into the *active* UV — if that is not UVLightmap, the packed atlas
    # stays black (this is what happened on the first joined bake).
    uvs = joined.data.uv_layers
    print("  joined UV layers:", [(u.name, u.active) for u in uvs], "faces", len(joined.data.polygons), flush=True)
    if "UVLightmap" in [u.name for u in uvs]:
        uvs["UVLightmap"].active = True
        layer = uvs["UVLightmap"]
        us = [float(d.uv[0]) for d in layer.data]
        vs = [float(d.uv[1]) for d in layer.data]
        print(f"  joined UVLightmap u={min(us):.3f}..{max(us):.3f} v={min(vs):.3f}..{max(vs):.3f} n={len(us)}", flush=True)
    else:
        print("  ERROR: joined mesh has no UVLightmap", flush=True)
    attach_bake_target(joined, img)
    # Every material slot needs the bake-target node.
    if joined.data.materials:
        for mat in joined.data.materials:
            if mat is None:
                continue
            nt = mat.node_tree
            if nt is None:
                continue
            node = None
            for n in nt.nodes:
                if n.type == "TEX_IMAGE" and n.image == img:
                    node = n
                    break
            if node is None:
                node = nt.nodes.new("ShaderNodeTexImage")
                node.image = img
                node.label = "BAKE_TARGET"
            node.select = True
            nt.nodes.active = node
    bpy.ops.object.select_all(action="DESELECT")
    joined.select_set(True)
    bpy.context.view_layer.objects.active = joined
    # The joined copy sits exactly on the originals. If those stay
    # visible, they occlude every ray and the atlas bakes almost black
    # (0.45% of pixels lit — the first joined-UVLightmap run).
    hidden = []
    for o in meshes:
        hidden.append((o, o.hide_render))
        o.hide_render = True
    t0 = time.time()
    print(f"BAKE {rid} {size}px {samples}spp COMBINED joined from {len(meshes)} meshes ...", flush=True)
    try:
        bpy.ops.object.bake(
            type="COMBINED",
            margin=12,
            margin_type="EXTEND",
        )
    finally:
        for o, h in hidden:
            o.hide_render = h
    dt = time.time() - t0
    print(f"  done {rid} in {dt:.1f}s", flush=True)
    # Join consumed the copies; only the joined object remains. Do not
    # touch the stale copy references (StructRNA ... has been removed).
    try:
        mesh = joined.data
        bpy.data.objects.remove(joined, do_unlink=True)
        if mesh and mesh.users == 0:
            bpy.data.meshes.remove(mesh)
    except (ReferenceError, KeyError) as e:
        print(f"  cleanup note: {e}", flush=True)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    raw = out_path.parent / (out_path.stem + "-raw.exr")
    try:
        img.filepath_raw = str(raw)
        img.file_format = "OPEN_EXR"
        img.save()
        print(f"  raw EXR {raw} {raw.stat().st_size}", flush=True)
    except Exception as e:
        print("  raw EXR save failed", e, flush=True)
    png = denoise_and_tonemap(img, out_path.with_suffix(".png"), apply_filmic=apply_filmic)
    return png, dt, img


def bake_room(rid, objs, size, samples, out_path, pack=True, apply_filmic=True):
    meshes = [
        o for o in objs
        if o.type == "MESH" and o.data.polygons and o.get("ls_shell") in BAKE_KINDS
    ]
    return bake_meshes(rid, meshes, size, samples, out_path, pack=pack, apply_filmic=apply_filmic)


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
    bpy.context.scene.view_settings.exposure = 0.0
    bpy.context.scene.view_settings.look = "Medium Contrast"
    bpy.context.scene.cycles.sample_clamp_indirect = 8.0
    bpy.context.scene.cycles.sample_clamp_direct = 16.0
    return cam


def export_glb(path):
    bpy.ops.object.select_all(action="DESELECT")
    n = 0
    for o in bpy.data.objects:
        if o.type == "MESH" and o.get("ls_shell") in BAKE_KINDS:
            o.hide_set(False)
            o.select_set(True)
            n += 1
    print(f"EXPORT {n} meshes -> {path}", flush=True)
    kwargs = dict(
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
        export_image_format="NONE",
    )
    try:
        bpy.ops.export_scene.gltf(export_extras=True, **kwargs)
    except TypeError:
        bpy.ops.export_scene.gltf(**kwargs)


def to_webp(png):
    png = Path(png)
    webp = png.with_suffix(".webp")
    try:
        from PIL import Image
        im = Image.open(png)
        if im.mode not in ("RGB", "RGBA"):
            im = im.convert("RGB")
        im.save(webp, "WEBP", quality=90, method=4)
        return webp
    except Exception as e:
        print("webp failed", e, flush=True)
        return png


def shells_from_scene():
    """Rebuild the shells dict from ls_room props (used with --from-blend)."""
    shells = defaultdict(lambda: {"room": None, "objs": []})
    for o in bpy.data.objects:
        if o.type == "MESH" and o.get("ls_shell") in BAKE_KINDS and o.get("ls_room"):
            shells[o["ls_room"]]["objs"].append(o)
    return shells


def make_materials(root, scene):
    oak = root / "public" / scene["textures"]["oakDiff"]
    oak_r = root / "public" / scene["textures"].get("oakRough", "textures/oakplank_rough.jpg")
    wall_hex = scene["prefs"]["wallColor"]
    return {
        "wall": principled("Wall", hex_rgba(wall_hex), 0.86),
        "floor": principled(
            "OakFloor", (0.45, 0.32, 0.16, 1), 0.55,
            tex=oak if oak.exists() else None,
            rough_tex=oak_r if oak_r.exists() else None,
        ),
        "tile": principled("Tile", (0.82, 0.80, 0.76, 1), 0.35),
        "terra": principled("Terra", (0.55, 0.42, 0.28, 1), 0.7),
        "ceiling": principled("Ceiling", (0.92, 0.91, 0.88, 1), 0.9),
        "frame": principled("Frame", (0.12, 0.12, 0.12, 1), 0.4, metallic=0.3),
        "glass": glass_mat(),
        "wood": principled("Wood", (0.35, 0.22, 0.10, 1), 0.55),
        "cabinet": principled("Cabinet", (0.90, 0.88, 0.84, 1), 0.38),
        "counter": principled("Counter", (0.88, 0.86, 0.80, 1), 0.28, metallic=0.06),
        "splash": principled("Splash", (0.86, 0.84, 0.80, 1), 0.45),
        "ceramic": principled("Ceramic", (0.9, 0.9, 0.92, 1), 0.25),
        "hob": principled("Hob", (0.04, 0.04, 0.045, 1), 0.12, metallic=0.35),
        "steel": principled("Steel", (0.72, 0.74, 0.76, 1), 0.28, metallic=0.85),
        "darksteel": principled("DarkSteel", (0.04, 0.045, 0.05, 1), 0.35, metallic=0.7),
        "water": principled("Water", (0.55, 0.65, 0.75, 1), 0.08, metallic=0.0),
    }


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
    from_blend = args.from_blend and Path(args.from_blend).exists()
    if from_blend:
        print("OPEN BLEND", args.from_blend, flush=True)
        bpy.ops.wm.open_mainfile(filepath=str(Path(args.from_blend).resolve()))
        shells = shells_from_scene()
        print("reloaded shells", {k: len(v["objs"]) for k, v in shells.items()}, flush=True)
    else:
        reset()
        bpy.context.scene.cycles.samples = args.samples
        setup_day_lights(scene, root)
        mats = make_materials(root, scene)
        root_coll = ensure_coll("unit")
        shells = build_shells(scene, mats, root_coll)
        place_furniture(scene, root, mats, shells)
        for rid, sh in shells.items():
            kinds = {}
            for o in sh["objs"]:
                k = o.get("ls_shell") or "?"
                kinds[k] = kinds.get(k, 0) + 1
            print(f"ROOM {rid}: {kinds}", flush=True)

    if not args.skip_preview and not from_blend:
        preview_camera(scene)
        preview = out.parent / (out.name + "-preview.png")
        bpy.context.scene.render.filepath = str(preview)
        print("PREVIEW render ...", flush=True)
        t0 = time.time()
        bpy.ops.render.render(write_still=True)
        print(f"  preview in {time.time()-t0:.1f}s -> {preview}", flush=True)

    if args.preview_only:
        if args.save_blend:
            blend = out.parent / (out.name + ".blend")
            bpy.ops.wm.save_as_mainfile(filepath=str(blend))
            print("BLEND", blend, flush=True)
        print("preview-only, skip bake")
        return

    only = {s.strip() for s in args.rooms.split(",") if s.strip()}
    packed = from_blend
    times = ["day", "night"] if args.time == "both" else [args.time]
    apply_filmic = not args.no_filmic

    manifest = {
        "planId": scene["planId"],
        "style": scene["style"],
        "prefs": scene["prefs"],
        "lightmaps": {},
        "nightLightmaps": {},
        "samples": args.samples,
        "engine": "Cycles 4.5.16 OIDN compositor + Filmic Medium Contrast",
        "bakeType": "COMBINED",
        "combinedColor": True,
        "filmic": apply_filmic,
        "toneMapped": False,
        "neutralAlbedo": False,
        "zFlip": True,
        "lightMapIntensity": 1.0,
        "rooms": [
            {
                "id": r["id"],
                "type": r["type"],
                "name": r.get("name", r["id"]),
                "polygon": r["polygon"],
            }
            for r in scene["rooms"]
        ],
    }
    total_bytes = 0

    for when in times:
        if when == "night":
            setup_night_practicals(scene, root)
        else:
            setup_day_lights(scene, root)
        for r in scene["rooms"]:
            rid = r["id"]
            if only and rid not in only:
                print(f"skip {rid}: not in --rooms", flush=True)
                continue
            kind = r["type"]
            size = args.size if kind == "living" else args.small_size
            objs = shells[rid]["objs"] if rid in shells else []
            suffix = f"{out.name}-night-{rid}" if when == "night" else f"{out.name}-{rid}"
            result = bake_room(
                rid, objs, size, args.samples, out.parent / suffix,
                pack=(not packed),
                apply_filmic=apply_filmic,
            )
            if not result:
                continue
            png, dt, _img = result
            webp = to_webp(png)
            sz = webp.stat().st_size if webp.exists() else png.stat().st_size
            total_bytes += sz
            info = {
                "file": webp.name if webp.suffix == ".webp" else png.name,
                "png": png.name,
                "bytes": sz,
                "size": size,
                "seconds": round(dt, 2),
                "type": kind,
                "name": r.get("name", rid),
                "time": when,
            }
            if when == "night":
                manifest["nightLightmaps"][rid] = info
            else:
                manifest["lightmaps"][rid] = info
        packed = True

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
