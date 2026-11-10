import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scrollState, band } from './scrollState.js'

/* ---------- shared soft-point material ---------- */
const VERT = `
  attribute float aSize; attribute float aPhase; attribute vec3 aColor;
  uniform float uTime; uniform float uPixel; uniform float uOpacity;
  varying vec3 vC; varying float vA;
  void main(){
    vC = aColor;
    float tw = 0.6 + 0.4*sin(uTime*1.6 + aPhase*6.2831);
    vA = tw * uOpacity;
    vec4 mv = modelViewMatrix * vec4(position,1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSize * uPixel * (110.0 / -mv.z) * (0.7+0.5*tw), 1.0, 15.0);
  }
`
const FRAG = `
  varying vec3 vC; varying float vA;
  void main(){
    vec2 c = gl_PointCoord-0.5; float d = length(c);
    float core = smoothstep(0.5,0.1,d);
    float glow = smoothstep(0.5,0.0,d)*0.3;
    float a = (core+glow)*vA;
    if(a<0.01) discard;
    gl_FragColor = vec4(vC, a);
  }
`
const PAL = ['#f6eedf', '#f3d38a', '#d4c5f0', '#c4b0ff', '#ffffff'].map((c) => new THREE.Color(c))

function makeGeo(n, posFn, palBias = 2.2) {
  const pos = new Float32Array(n * 3), size = new Float32Array(n), phase = new Float32Array(n), col = new Float32Array(n * 3)
  for (let i = 0; i < n; i++) {
    const [x, y, z, s] = posFn(i, n)
    pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z
    size[i] = s ?? (Math.random() * 1.2 + 0.4)
    phase[i] = Math.random()
    const c = PAL[Math.floor(Math.pow(Math.random(), palBias) * PAL.length)]
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
  }
  const g = new THREE.BufferGeometry()
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
  g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
  g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1))
  g.setAttribute('aColor', new THREE.BufferAttribute(col, 3))
  return g
}
function uniforms() {
  return { uTime: { value: 0 }, uPixel: { value: Math.min(typeof window !== 'undefined' ? devicePixelRatio : 1, 2) }, uOpacity: { value: 0 } }
}
function Mat({ u }) {
  return <shaderMaterial uniforms={u} vertexShader={VERT} fragmentShader={FRAG} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
}

/* ---------- Mongolfiera (hot-air balloon of particles) ---------- */
export function Balloon() {
  const grp = useRef(), u = useMemo(uniforms, [])
  const geo = useMemo(() => makeGeo(1500, (i, n) => {
    if (i < n * 0.78) { // envelope (tapered sphere)
      const phi = Math.acos(1 - 2 * ((i % 400) / 400)) * 0.92
      const theta = i * 2.399963
      const r = 1.0
      const y = Math.cos(phi) * r * 1.25 + 0.4
      const taper = y < 0.4 ? Math.max(0.15, 1 + (y - 0.4) * 0.9) : 1
      return [Math.sin(phi) * Math.cos(theta) * r * taper, y, Math.sin(phi) * Math.sin(theta) * r * taper, Math.random() * 1 + 0.3]
    }
    // basket + ropes
    const t = Math.random()
    if (t < 0.4) { const a = Math.random() * 6.28; return [Math.cos(a) * 0.2, -1.5 + Math.random() * 0.2, Math.sin(a) * 0.2, Math.random() + 0.5] }
    const rp = Math.floor(Math.random() * 4), a = rp / 4 * 6.28
    const k = Math.random()
    return [Math.cos(a) * (0.6 * (1 - k) + 0.2 * k), -0.6 - k * 0.9, Math.sin(a) * (0.6 * (1 - k) + 0.2 * k), 0.4]
  }), [])
  useFrame((s, dt) => {
    u.uTime.value = s.clock.elapsedTime
    const vis = band(scrollState.progress, 0.03, 0.17, 0.05)
    u.uOpacity.value = THREE.MathUtils.lerp(u.uOpacity.value, vis, 0.08)
    if (grp.current) { grp.current.rotation.y += dt * 0.15; grp.current.position.y = -0.3 + Math.sin(s.clock.elapsedTime * 0.5) * 0.15 }
  })
  return (
    <group ref={grp} position={[3.4, -0.3, -2]} scale={1.4}>
      <points geometry={geo}><Mat u={u} /></points>
    </group>
  )
}

/* ---------- Esplosione (supernova radial burst) ---------- */
export function Supernova() {
  const pts = useRef(), u = useMemo(uniforms, [])
  const data = useMemo(() => {
    const n = 2600, dir = new Float32Array(n * 3), rad = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      const v = new THREE.Vector3().randomDirection()
      dir[i * 3] = v.x; dir[i * 3 + 1] = v.y; dir[i * 3 + 2] = v.z
      rad[i] = 2 + Math.random() * 7
    }
    return { dir, rad, n }
  }, [])
  const geo = useMemo(() => makeGeo(data.n, () => [0, 0, 0, Math.random() * 1.4 + 0.3], 1.6), [data])
  useFrame((s, dt) => {
    u.uTime.value = s.clock.elapsedTime
    const p = scrollState.progress
    const vis = band(p, 0.28, 0.46, 0.06) * 0.7
    u.uOpacity.value = THREE.MathUtils.lerp(u.uOpacity.value, vis, 0.1)
    const burst = Math.min(1, Math.max(0, (p - 0.28) / 0.16))
    const e = 1 - Math.pow(1 - burst, 3)
    const pos = geo.attributes.position.array
    for (let i = 0; i < data.n; i++) {
      const r = e * data.rad[i]
      pos[i * 3] = data.dir[i * 3] * r
      pos[i * 3 + 1] = data.dir[i * 3 + 1] * r
      pos[i * 3 + 2] = data.dir[i * 3 + 2] * r
    }
    geo.attributes.position.needsUpdate = true
    if (pts.current) pts.current.rotation.z += dt * 0.04
  })
  return <points ref={pts} geometry={geo} position={[0, 0, -3]}><Mat u={u} /></points>
}

/* ---------- Albero (glowing tree of light) ---------- */
export function Tree() {
  const grp = useRef(), u = useMemo(uniforms, [])
  const geo = useMemo(() => makeGeo(1700, (i, n) => {
    if (i < n * 0.16) { // trunk
      return [(Math.random() - 0.5) * 0.12, -2.2 + Math.random() * 1.9, (Math.random() - 0.5) * 0.1, Math.random() * 0.8 + 0.4]
    }
    // branches: fan upward+outward, denser & brighter at tips
    const h = Math.pow(Math.random(), 0.6)          // height bias toward top
    const branch = Math.floor(Math.random() * 7)
    const base = (branch / 7) * 6.2831
    const wobble = (Math.random() - 0.5) * 0.9
    const spread = h * 2.6
    const ang = base + wobble
    const y = -0.4 + h * 3.1
    const tip = h > 0.8 ? 1.4 : 0.6                   // glow at tips
    return [Math.sin(ang) * spread + (Math.random() - 0.5) * 0.3, y, Math.cos(ang) * spread * 0.45 + (Math.random() - 0.5) * 0.3, Math.random() * tip + 0.3]
  }, 1.4), [])
  useFrame((s, dt) => {
    u.uTime.value = s.clock.elapsedTime
    const vis = band(scrollState.progress, 0.17, 0.27, 0.05)
    u.uOpacity.value = THREE.MathUtils.lerp(u.uOpacity.value, vis, 0.08)
    if (grp.current) grp.current.rotation.y = Math.sin(s.clock.elapsedTime * 0.2) * 0.12
  })
  return (
    <group ref={grp} position={[-3.6, -1, -2.5]} scale={1.3}>
      <points geometry={geo}><Mat u={u} /></points>
    </group>
  )
}

/* ---------- Scia (flowing star trail) ---------- */
export function Trail() {
  const pts = useRef(), u = useMemo(uniforms, [])
  const n = 1400
  const geo = useMemo(() => makeGeo(n, (i) => {
    const t = i / n
    return [(t - 0.5) * 24, Math.sin(t * 9) * 2.2 - 1 + (Math.random() - 0.5) * 1.2, -3 + (Math.random() - 0.5) * 2, Math.random() * 1.1 + 0.3]
  }), [])
  useFrame((s) => {
    u.uTime.value = s.clock.elapsedTime
    const vis = band(scrollState.progress, 0.14, 0.3, 0.06)
    u.uOpacity.value = THREE.MathUtils.lerp(u.uOpacity.value, vis, 0.08)
    const pos = geo.attributes.position.array
    for (let i = 0; i < n; i++) {
      pos[i * 3] += 0.03
      if (pos[i * 3] > 12) pos[i * 3] = -12
    }
    geo.attributes.position.needsUpdate = true
  })
  return <points ref={pts} geometry={geo}><Mat u={u} /></points>
}
