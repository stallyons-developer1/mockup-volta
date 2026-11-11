import { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from '../scroll.js'
import { CLOTH } from '../data.js'

const clamp01 = (x) => Math.min(1, Math.max(0, x))

// a draped, wrinkled fabric cover that hugs the roof and hangs down to the floor
function makeClothGeometry() {
  const g = new THREE.IcosahedronGeometry(1, 7)
  const p = g.attributes.position
  const v = new THREE.Vector3()
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i)
    const r = Math.hypot(v.x, v.z) || 1e-4
    let x = v.x, y = v.y, z = v.z
    if (y < 0) {
      // lower half becomes a vertical skirt: project out to the footprint rim, then hang down
      const blend = Math.min(1, -y)              // 0 at equator → 1 at the bottom
      const proj = 1 + blend * (1 / r - 1)
      x = v.x * proj; z = v.z * proj; y = v.y * 1.02
    }
    // car-cover footprint + height
    x *= 1.16; z *= 2.55; y *= 0.66
    // soft wrinkles / folds
    const len = Math.hypot(x, z) || 1e-4
    const n = Math.sin(x * 3.0 + z * 1.6) * 0.05 + Math.cos(z * 2.2 - x * 1.4) * 0.04 + Math.sin(x * 6 + z * 4.5) * 0.02
    x += (x / len) * n; z += (z / len) * n; y += Math.sin(x * 5 + z * 3) * 0.02
    p.setXYZ(i, x, y, z)
  }
  g.computeVertexNormals()
  return g
}

export default function Car() {
  const group = useRef()
  const cloth = useRef()
  const { scene } = useGLTF('/models/ferrari.glb', '/draco/')

  const model = useMemo(() => {
    const root = scene.clone(true)
    const paint = new THREE.MeshPhysicalMaterial({ color: '#9e1122', metalness: 0.9, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.8 })
    const metal = new THREE.MeshStandardMaterial({ color: '#2d2d31', metalness: 1, roughness: 0.34, envMapIntensity: 1.4 })
    const chrome = new THREE.MeshStandardMaterial({ color: '#cfd2d6', metalness: 1, roughness: 0.22, envMapIntensity: 1.6 })
    const glass = new THREE.MeshPhysicalMaterial({ color: '#dfe7ee', metalness: 0, roughness: 0.03, transmission: 1, ior: 1.45, thickness: 0.5, transparent: true, opacity: 0.6, envMapIntensity: 1.4 })
    root.traverse((o) => {
      if (!o.isMesh) return
      o.castShadow = true; o.receiveShadow = true
      const n = o.name.toLowerCase()
      if (n === 'body') o.material = paint
      else if (n.startsWith('rim')) o.material = chrome
      else if (n === 'trim') o.material = metal
      else if (n === 'glass') o.material = glass
      else if (o.material) { o.material = o.material.clone(); o.material.envMapIntensity = 1.2 }
    })
    return root
  }, [scene])

  const clothGeo = useMemo(() => makeClothGeometry(), [])

  useFrame(() => {
    const p = scroll.p
    // cloth: fully covering before start, then is "pulled off" backward + down + fades
    if (cloth.current) {
      const t = clamp01((p - CLOTH.start) / (CLOTH.end - CLOTH.start))
      const e = t * t * (3 - 2 * t) // smoothstep
      cloth.current.visible = t < 0.999
      cloth.current.position.set(0, 0.72 + e * 0.35, -e * 10.5) // slide off toward the rear
      cloth.current.rotation.set(e * 0.55, 0, e * 0.22)        // tilt as it's dragged away
      cloth.current.scale.set(1 + e * 0.1, 1 - e * 0.25, 1 + e * 0.5)
      const mat = cloth.current.children[0]?.material
      if (mat) { mat.transparent = true; mat.opacity = 1 - clamp01((e - 0.55) / 0.45) }
    }
    // gentle turntable during the closing "collection" beat
    if (group.current) {
      const turn = clamp01((p - 0.9) / 0.1)
      group.current.rotation.y = turn * 0.4
    }
  })

  return (
    <group ref={group}>
      <primitive object={model} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} />
      {/* draped fabric cover */}
      <group ref={cloth} position={[0, 0.72, 0]}>
        <mesh geometry={clothGeo} castShadow>
          <meshStandardMaterial color="#e3ddcf" roughness={1} metalness={0} envMapIntensity={0.45} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </group>
  )
}
useGLTF.preload('/models/ferrari.glb', '/draco/')
