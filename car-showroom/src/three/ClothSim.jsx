import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from '../scroll.js'
import { CLOTH } from '../data.js'

// Real cloth: a grid of verlet particles that drapes over the car under gravity,
// then is physically pulled off the back on reveal. (Classic real-time cloth sim.)
const COLS = 44, ROWS = 32
const W = 2.35, L = 5.4
const GRAV = new THREE.Vector3(0, -0.00075, 0)
const START_Y = 1.42

// simplified car collider (ellipsoids): full hull + cabin bump
const COLLIDERS = [
  { c: new THREE.Vector3(0, 0.46, 0), r: new THREE.Vector3(1.0, 0.62, 2.35) },
  { c: new THREE.Vector3(0, 0.82, -0.1), r: new THREE.Vector3(0.72, 0.46, 1.1) },
]
const clamp01 = (x) => Math.min(1, Math.max(0, x))

export default function ClothSim() {
  const mesh = useRef()
  const settled = useRef(false)

  const sim = useMemo(() => {
    const idx = (c, r) => r * COLS + c
    const pos = [], prev = [], pinned = []
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      const x = -W / 2 + (c / (COLS - 1)) * W
      const z = -L / 2 + (r / (ROWS - 1)) * L
      const p = new THREE.Vector3(x, START_Y, z)
      pos.push(p); prev.push(p.clone()); pinned.push(null)
    }
    const cons = []
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      if (c < COLS - 1) cons.push([idx(c, r), idx(c + 1, r)])
      if (r < ROWS - 1) cons.push([idx(c, r), idx(c, r + 1)])
      if (c < COLS - 1 && r < ROWS - 1) cons.push([idx(c, r), idx(c + 1, r + 1)])
      if (c > 0 && r < ROWS - 1) cons.push([idx(c, r), idx(c - 1, r + 1)])
    }
    const rest = cons.map(([a, b]) => pos[a].distanceTo(pos[b]))
    return { pos, prev, pinned, cons, rest, idx }
  }, [])

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(COLS * ROWS * 3), 3))
    const indices = []
    const idx = (c, r) => r * COLS + c
    for (let r = 0; r < ROWS - 1; r++) for (let c = 0; c < COLS - 1; c++) {
      const a = idx(c, r), b = idx(c + 1, r), d = idx(c, r + 1), e = idx(c + 1, r + 1)
      indices.push(a, d, b, b, d, e)
    }
    g.setIndex(indices)
    return g
  }, [])

  const tmp = new THREE.Vector3()
  const step = () => {
    const { pos, prev, pinned, cons, rest } = sim
    const reveal = clamp01((scroll.p - CLOTH.start) / (CLOTH.end - CLOTH.start))
    // pull-off: pin the rear edge and drag it up + back off the car
    for (let c = 0; c < COLS; c++) {
      const i = (ROWS - 1) * COLS + c
      if (reveal > 0.001) {
        const bx = -W / 2 + (c / (COLS - 1)) * W
        pinned[i] = tmp.set(bx * (1 - reveal * 0.25), 0.45 + reveal * 5.2, L / 2 + reveal * 8.5).clone()
      } else pinned[i] = null
    }
    // integrate
    for (let k = 0; k < pos.length; k++) {
      if (pinned[k]) { pos[k].copy(pinned[k]); prev[k].copy(pinned[k]); continue }
      tmp.copy(pos[k]).sub(prev[k]).multiplyScalar(0.985)
      prev[k].copy(pos[k]); pos[k].add(tmp).add(GRAV)
    }
    // constraints + collision
    for (let iter = 0; iter < 9; iter++) {
      for (let ci = 0; ci < cons.length; ci++) {
        const a = cons[ci][0], b = cons[ci][1], L0 = rest[ci]
        const pa = pos[a], pb = pos[b]
        tmp.copy(pb).sub(pa); const d = tmp.length() || 1e-6; const diff = (d - L0) / d * 0.5
        if (!pinned[a]) pa.addScaledVector(tmp, diff)
        if (!pinned[b]) pb.addScaledVector(tmp, -diff)
      }
      for (let k = 0; k < pos.length; k++) {
        if (pinned[k]) continue
        const p = pos[k]
        if (p.y < 0.03) p.y = 0.03
        for (const col of COLLIDERS) {
          const nx = (p.x - col.c.x) / col.r.x, ny = (p.y - col.c.y) / col.r.y, nz = (p.z - col.c.z) / col.r.z
          const dd = nx * nx + ny * ny + nz * nz
          if (dd < 1 && dd > 1e-6) {
            const s = 1 / Math.sqrt(dd)
            p.set(col.c.x + (p.x - col.c.x) * s, col.c.y + (p.y - col.c.y) * s, col.c.z + (p.z - col.c.z) * s)
          }
        }
      }
    }
  }

  useFrame(() => {
    if (!settled.current) { for (let i = 0; i < 320; i++) step(); settled.current = true }
    else { step(); step() }
    const arr = geo.attributes.position.array
    for (let k = 0; k < sim.pos.length; k++) { arr[k * 3] = sim.pos[k].x; arr[k * 3 + 1] = sim.pos[k].y; arr[k * 3 + 2] = sim.pos[k].z }
    geo.attributes.position.needsUpdate = true
    geo.computeVertexNormals()
    const reveal = clamp01((scroll.p - CLOTH.start) / (CLOTH.end - CLOTH.start))
    if (mesh.current) {
      mesh.current.visible = reveal < 0.997
      mesh.current.material.opacity = 1 - clamp01((reveal - 0.78) / 0.22)
    }
  })

  return (
    <mesh ref={mesh} geometry={geo} castShadow>
      <meshStandardMaterial color="#e6e0d2" roughness={1} metalness={0} side={THREE.DoubleSide} transparent envMapIntensity={0.5} />
    </mesh>
  )
}
