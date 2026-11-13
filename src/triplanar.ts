import * as THREE from "three";

/**
 * World-aligned triplanar mapping for MeshStandard / MeshPhysical materials.
 * Albedo, roughness and normal maps are sampled on X/Y/Z planes and blended
 * by the world normal, so UV seams and extruded-plate unwraps don't matter.
 * Used on the tower facade, podium stone, and interior walls.
 */
export function applyTriplanar<T extends THREE.MeshStandardMaterial>(
  mat: T,
  scale = 0.32,
): T {
  const prev = mat.onBeforeCompile;
  mat.userData.tripScale = scale;
  mat.onBeforeCompile = (shader, renderer) => {
    prev?.(shader, renderer);
    shader.uniforms.uTripScale = { value: mat.userData.tripScale ?? scale };
    shader.vertexShader = shader.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
        varying vec3 vTripPos;
        varying vec3 vTripNormal;`,
      )
      .replace(
        "#include <project_vertex>",
        `#include <project_vertex>
        {
          vec4 _tp = vec4(transformed, 1.0);
          vec3 _tn = objectNormal;
          #ifdef USE_INSTANCING
            _tp = instanceMatrix * _tp;
            _tn = mat3(instanceMatrix) * _tn;
          #endif
          vTripPos = (modelMatrix * _tp).xyz;
          vTripNormal = normalize(mat3(modelMatrix) * _tn);
        }`,
      );

    shader.fragmentShader = shader.fragmentShader
      .replace(
        "#include <common>",
        `#include <common>
        varying vec3 vTripPos;
        varying vec3 vTripNormal;
        uniform float uTripScale;

        vec3 tripBlend(vec3 n) {
          vec3 b = pow(abs(n), vec3(4.0));
          return b / (b.x + b.y + b.z + 1e-5);
        }
        vec4 tripSample(sampler2D tex, vec3 p, vec3 b) {
          return texture2D(tex, p.zy) * b.x
               + texture2D(tex, p.xz) * b.y
               + texture2D(tex, p.xy) * b.z;
        }`,
      )
      .replace(
        "#include <map_fragment>",
        `#ifdef USE_MAP
          vec3 _tN = normalize(vTripNormal);
          vec3 _tB = tripBlend(_tN);
          vec3 _tP = vTripPos * uTripScale;
          vec4 sampledDiffuseColor = tripSample(map, _tP, _tB);
          #ifdef DECODE_VIDEO_TEXTURE
            sampledDiffuseColor = vec4(mix(pow(sampledDiffuseColor.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), sampledDiffuseColor.rgb * 0.0773993808, vec3(lessThanEqual(sampledDiffuseColor.rgb, vec3(0.04045)))), sampledDiffuseColor.w);
          #endif
          diffuseColor *= sampledDiffuseColor;
        #endif`,
      )
      .replace(
        "#include <roughnessmap_fragment>",
        `float roughnessFactor = roughness;
        #ifdef USE_ROUGHNESSMAP
          vec3 _rN = normalize(vTripNormal);
          vec3 _rB = tripBlend(_rN);
          vec3 _rP = vTripPos * uTripScale;
          vec4 texelRoughness = tripSample(roughnessMap, _rP, _rB);
          roughnessFactor *= texelRoughness.g;
        #endif`,
      )
      .replace(
        "#include <normal_fragment_maps>",
        `#if defined(USE_NORMALMAP) || defined(USE_NORMALMAP_TANGENTSPACE) || defined(USE_NORMALMAP_OBJECTSPACE)
          vec3 _nN = normalize(vTripNormal);
          vec3 _nB = tripBlend(_nN);
          vec3 _nP = vTripPos * uTripScale;
          vec3 nx = texture2D(normalMap, _nP.zy).xyz * 2.0 - 1.0;
          vec3 ny = texture2D(normalMap, _nP.xz).xyz * 2.0 - 1.0;
          vec3 nz = texture2D(normalMap, _nP.xy).xyz * 2.0 - 1.0;
          nx.xy *= normalScale;
          ny.xy *= normalScale;
          nz.xy *= normalScale;
          // Perturb the world normal along each projection axis and blend.
          vec3 wNorm = normalize(
            vec3(nx.y, nx.x, 0.0) * _nB.x +
            vec3(ny.x, 0.0, ny.y) * _nB.y +
            vec3(0.0, nz.y, nz.x) * _nB.z +
            _nN
          );
          normal = normalize((viewMatrix * vec4(wNorm, 0.0)).xyz);
        #elif defined(USE_BUMPMAP)
          normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd(), faceDirection );
        #endif`,
      );
  };
  const prevKey = mat.customProgramCacheKey.bind(mat);
  mat.customProgramCacheKey = () =>
    `${prevKey()}|triplanar|${mat.userData.tripScale ?? scale}`;
  mat.needsUpdate = true;
  return mat;
}
