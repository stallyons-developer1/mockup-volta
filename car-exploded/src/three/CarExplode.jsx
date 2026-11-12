import { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from '../scroll.js'

const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (x) => Math.min(1, Math.max(0, x))

// group meshes into layers and give each an explode direction
function categorize(name) {
  const n = name.toLowerCase()
  if (/wheel|tire|rim|brake|nuts|centre/.test(n)) return 'wheel'
  if (/glass|wiper/.test(n)) return 'glass'
  if (/^lights$|lights_red|leds|^light/.test(n)) return 'light'
  if (/leather|carpet|interior|carbon_fibre_trim/.test(n)) return 'interior'
  if (/metal|plastic_gray|grill/.test(n)) return 'chassis'
  return 'shell' // body, chrome, carbon_fibre, yellow_trim, trim, blue
}
function offsetFor(cat, pos) {
  const sx = Math.sign(pos.x || 1), sz = Math.sign(pos.z || 1)
  switch (cat) {
    case 'wheel': return new THREE.Vector3(sx * 1.9, -0.05, sz * 0.25)
    case 'glass': return new THREE.Vector3(0, 2.55, 0)
    case 'light': return new THREE.Vector3(0, 0.55, sz * 1.5)
    case 'interior': return new THREE.Vector3(0, 0.18, 0)
    case 'chassis': return new THREE.Vector3(0, -0.7, 0)
    default: return new THREE.Vector3(0, 1.55, 0) // shell
  }
}

export default function CarExplode() {
  const group = useRef()
  const { scene } = useGLTF('/models/ferrari.glb', '/draco/')

  const { flat, parts } = useMemo(() => {
    const src = scene.clone(true)
    src.updateWorldMatrix(true, true)
    const paint = new THREE.MeshPhysicalMaterial({ color: '#9e1122', metalness: 0.9, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.8 })
    const flat = new THREE.Group()
    const meshes = []
    src.traverse((o) => { if (o.isMesh) meshes.push(o) })
    const parts = []
    meshes.forEach((m) => {
      m.castShadow = true; m.receiveShadow = true
      if (m.name.toLowerCase() === 'body') m.material = paint
      else if (m.material) { m.material = m.material.clone(); m.material.envMapIntensity = 1.3 }
      flat.attach(m) // preserves world transform
      const cat = categorize(m.name)
      parts.push({ mesh: m, base: m.position.clone(), off: offsetFor(cat, m.position) })
    })
    return { flat, parts }
  }, [scene])

  useFrame((state) => {
    const e = smooth(clamp01(scroll.p / 0.92))
    for (const p of parts) {
      p.mesh.position.copy(p.base).addScaledVector(p.off, e)
    }
    if (group.current) {
      // slow turntable + slight bob
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.12) * 0.12 + scroll.p * 0.5
    }
  })

  return <group ref={group} position={[0, -0.2, 0]}><primitive object={flat} /></group>
}
useGLTF.preload('/models/ferrari.glb', '/draco/')
