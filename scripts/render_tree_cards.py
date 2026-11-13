"""Render CC0-quality alpha-card trees in Cycles (headless).

Crossed-card impostors: a photographed-looking tree at a fraction of the
tris of a Poly Haven hero model, within the phone budget.

    /home/box/apps/blender --background --python scripts/render_tree_cards.py -- \
        --out /workspace/leadsetu-3d-demo/public/models/trees/cards
"""
from __future__ import annotations
import math, sys, os
from pathlib import Path
import bpy
from mathutils import Vector

def argv():
    return sys.argv[sys.argv.index("--")+1:] if "--" in sys.argv else sys.argv[1:]

def setup():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    sc = bpy.context.scene
    sc.render.engine = "CYCLES"
    sc.cycles.device = "CPU"
    sc.cycles.samples = 48
    sc.cycles.use_denoising = True
    sc.cycles.denoiser = "OPENIMAGEDENOISE"
    sc.cycles.use_adaptive_sampling = True
    sc.cycles.adaptive_threshold = 0.03
    sc.render.resolution_x = 1536
    sc.render.resolution_y = 2048
    sc.render.film_transparent = True
    sc.render.image_settings.file_format = "PNG"
    sc.render.image_settings.color_mode = "RGBA"
    sc.render.threads_mode = "FIXED"
    sc.render.threads = 8
    sc.view_settings.view_transform = "Filmic"
    sc.view_settings.look = "Medium Contrast"
    # World: soft sky
    w = bpy.data.worlds.new("W")
    sc.world = w
    w.use_nodes = True
    nt = w.node_tree
    nt.nodes.clear()
    bg = nt.nodes.new("ShaderNodeBackground")
    bg.inputs[0].default_value = (0.62, 0.78, 0.95, 1)
    bg.inputs[1].default_value = 1.4
    out = nt.nodes.new("ShaderNodeOutputWorld")
    nt.links.new(bg.outputs[0], out.inputs[0])
    bpy.ops.object.light_add(type="SUN", location=(6, -8, 12))
    sun = bpy.context.active_object
    sun.data.energy = 4.0
    sun.data.color = (1, 0.97, 0.9)
    sun.rotation_euler = (math.radians(50), math.radians(15), math.radians(-25))
    bpy.ops.object.light_add(type="AREA", location=(-4, 6, 6))
    fill = bpy.context.active_object
    fill.data.energy = 80
    fill.data.size = 6
    fill.data.color = (0.7, 0.82, 1.0)


def mat(name, color, roughness=0.8, alpha=1):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    pr = nt.nodes["Principled BSDF"]
    pr.inputs["Base Color"].default_value = color
    pr.inputs["Roughness"].default_value = roughness
    pr.inputs["Specular IOR Level"].default_value = 0.2
    if alpha < 1:
        pr.inputs["Alpha"].default_value = alpha
    return m


def trunk_mat():
    return mat("Bark", (0.18, 0.10, 0.05, 1), 0.85)


def leaf_mat(hue=0.32):
    # Slight variation via a hue
    r, g, b = 0.10 + hue * 0.1, 0.22 + hue * 0.25, 0.07
    return mat("Leaf", (r, g, b, 1), 0.75)


def cone(name, loc, r0, r1, h, mat_, collection=None):
    bpy.ops.mesh.primitive_cone_add(vertices=12, radius1=r0, radius2=r1, depth=h, location=loc)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(mat_)
    return o


def ico(loc, s, mat_, subdiv=1):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=subdiv, radius=s, location=loc)
    o = bpy.context.active_object
    o.data.materials.append(mat_)
    return o


def build_deciduous(seed=1, height=7.5):
    import random
    rng = random.Random(seed)
    bark = trunk_mat()
    leaf = leaf_mat(0.28 + seed * 0.03)
    # Trunk
    bpy.ops.mesh.primitive_cylinder_add(vertices=12, radius=0.18, depth=height * 0.45, location=(0, 0, height * 0.225))
    trunk = bpy.context.active_object
    trunk.data.materials.append(bark)
    # Taper via shapekey-less scale at top — a cone for the upper trunk
    cone("trunk2", (0, 0, height * 0.52), 0.14, 0.05, height * 0.28, bark)
    # Branches + leaf clumps
    clumps = []
    for i in range(14):
        ang = rng.random() * math.tau
        elev = rng.uniform(0.35, 0.95)
        reach = rng.uniform(0.6, 1.9) * (1.15 - 0.4 * elev)
        z = height * elev
        x, y = math.cos(ang) * reach, math.sin(ang) * reach
        # branch
        mid = Vector((x * 0.45, y * 0.45, z - 0.15))
        bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=0.035, depth=reach * 0.85, location=mid)
        br = bpy.context.active_object
        br.data.materials.append(bark)
        direction = Vector((x, y, z + 0.2)) - mid
        br.rotation_euler = direction.to_track_quat("Z", "Y").to_euler()
        # leaf cluster
        cs = rng.uniform(0.55, 1.05)
        c = ico((x, y, z + 0.15), cs, leaf, 2)
        c.scale.z = rng.uniform(0.7, 1.0)
        clumps.append(c)
    # Crown fill
    for i in range(8):
        ang = i / 8 * math.tau + 0.2
        r = rng.uniform(0.3, 1.0)
        ico((math.cos(ang) * r, math.sin(ang) * r, height * 0.78 + rng.uniform(-0.2, 0.3)),
            rng.uniform(0.5, 0.85), leaf, 2)
    return height


def build_palm(height=7.0):
    bark = mat("PalmBark", (0.28, 0.18, 0.08, 1), 0.8)
    leaf = mat("Frond", (0.16, 0.38, 0.12, 1), 0.7)
    bpy.ops.mesh.primitive_cylinder_add(vertices=10, radius=0.13, depth=height * 0.82, location=(0, 0, height * 0.41))
    t = bpy.context.active_object
    t.data.materials.append(bark)
    t.scale.x = 0.85
    # Fronds as long flattened cones
    for i in range(11):
        ang = i / 11 * math.tau
        elev = math.radians(rng_el := (15 + (i % 3) * 18))
        length = 2.2 + (i % 4) * 0.25
        bpy.ops.mesh.primitive_cone_add(vertices=6, radius1=0.18, radius2=0.01, depth=length,
                                        location=(math.cos(ang) * 0.3, math.sin(ang) * 0.3, height * 0.82))
        f = bpy.context.active_object
        f.scale = (1.0, 0.22, 1.0)
        f.data.materials.append(leaf)
        # tip droops
        direction = Vector((math.cos(ang) * math.cos(elev), math.sin(ang) * math.cos(elev), -math.sin(elev) * 0.4))
        f.rotation_euler = direction.to_track_quat("Z", "Y").to_euler()
    return height


def build_bush():
    bark = trunk_mat()
    leaf = leaf_mat(0.35)
    bpy.ops.mesh.primitive_cylinder_add(vertices=8, radius=0.06, depth=0.35, location=(0, 0, 0.18))
    bpy.context.active_object.data.materials.append(bark)
    for i in range(9):
        ang = i / 9 * math.tau
        r = 0.25 + (i % 3) * 0.12
        ico((math.cos(ang) * r, math.sin(ang) * r, 0.45 + (i % 2) * 0.2), 0.38 + (i % 3) * 0.08, leaf, 2)
    ico((0, 0, 0.7), 0.42, leaf, 2)
    return 1.2


def camera_for(height, yaw=0):
    dist = height * 1.15
    loc = (math.sin(yaw) * dist, -math.cos(yaw) * dist, height * 0.5)
    bpy.ops.object.camera_add(location=loc)
    cam = bpy.context.active_object
    look = Vector((0, 0, height * 0.48))
    cam.rotation_euler = (look - Vector(loc)).to_track_quat("-Z", "Y").to_euler()
    cam.data.lens = 50
    cam.data.clip_start = 0.1
    cam.data.clip_end = 80
    # Orthographic-ish: longer lens, framed
    cam.data.type = "ORTHO"
    cam.data.ortho_scale = height * 1.25
    bpy.context.scene.camera = cam
    return cam


def clear_meshes():
    bpy.ops.object.select_all(action="DESELECT")
    for o in list(bpy.data.objects):
        if o.type in ("MESH", "CAMERA"):
            bpy.data.objects.remove(o, do_unlink=True)


def render_card(path: Path, height, yaw):
    cam = camera_for(height, yaw)
    bpy.context.scene.render.filepath = str(path)
    bpy.ops.render.render(write_still=True)
    print("wrote", path, flush=True)
    bpy.data.objects.remove(cam, do_unlink=True)


def main():
    out = Path("/workspace/leadsetu-3d-demo/public/models/trees/cards")
    if "--out" in argv():
        out = Path(argv()[argv().index("--out") + 1])
    out.mkdir(parents=True, exist_ok=True)
    setup()
    # Three deciduous variants, two angles each
    for i, seed in enumerate((1, 2, 3)):
        clear_meshes()
        setup()
        h = build_deciduous(seed, 7.4 + i * 0.3)
        render_card(out / f"tree_{i}_a.png", h, 0)
        render_card(out / f"tree_{i}_b.png", h, math.pi / 2)
    clear_meshes(); setup()
    h = build_palm(7.0)
    render_card(out / "palm_0_a.png", h, 0)
    render_card(out / "palm_0_b.png", h, math.pi / 2)
    clear_meshes(); setup()
    h = build_palm(6.6)
    # slight variation — rotate trunk already unique via frond pattern
    render_card(out / "palm_1_a.png", h, 0.3)
    render_card(out / "palm_1_b.png", h, 0.3 + math.pi / 2)
    clear_meshes(); setup()
    h = build_bush()
    render_card(out / "bush_0_a.png", h + 0.4, 0)
    render_card(out / "bush_0_b.png", h + 0.4, math.pi / 2)
    print("DONE cards", list(out.glob('*.png')), flush=True)

if __name__ == "__main__":
    main()
