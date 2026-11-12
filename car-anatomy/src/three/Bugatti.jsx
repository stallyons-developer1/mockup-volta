import { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { stage, samplePose } from '../site.js'

const smooth = (t) => t * t * (3 - 2 * t)
const GOLDEN = Math.PI * (3 - Math.sqrt(5))
const CENTER = new THREE.Vector3(0, 0.55, 0)

export default function Bugatti() {
  const { scene } = useGLTF('/bugatti.glb', '/draco/')
  const wrap = useRef()

  const { flat, parts } = useMemo(() => {
    const src = scene.clone(true)
    src.updateWorldMatrix(true, true)
    const meshes = []
    src.traverse((o) => { if (o.isMesh) meshes.push(o) })

    const box = new THREE.Box3(), size = new THREE.Vector3(), c = new THREE.Vector3()
    const info = meshes.map((m) => {
      box.setFromObject(m); box.getSize(size); box.getCenter(c)
      return { m, center: c.clone(), size: size.clone() }
    })

    const flat = new THREE.Group()
    const parts = []
    let idx = 0
    info.forEach(({ m, center, size }) => {
      // drop baked ground / shadow planes and floor text decals
      const isFlat = size.y < 0.05
      const isFloorClutter = isFlat && (Math.max(size.x, size.z) > 3.0 || center.y < 0.12)
      if (isFloorClutter) { m.visible = false; return }
      if (m.material && !Array.isArray(m.material)) { m.material = m.material.clone(); m.material.envMapIntensity = 1.3 }
      flat.attach(m)
      // explode direction: radial from car centre, with a deterministic fan for centred panels
      const dir = center.clone().sub(CENTER)
      const horiz = Math.hypot(dir.x, dir.z)
      let hd
      if (horiz > 0.5) hd = new THREE.Vector3(dir.x, 0, dir.z).normalize()
      else { const a = idx * GOLDEN; hd = new THREE.Vector3(Math.cos(a), 0, Math.sin(a)) }
      const off = hd.multiplyScalar(1.5 + horiz * 0.7)
      off.y = dir.y * 2.1 + 0.15
      parts.push({ mesh: m, base: m.position.clone(), off })
      idx++
    })
    return { flat, parts }
  }, [scene])

  useFrame((state, dt) => {
    const pose = samplePose(stage.t)
    // subtle part separation
    const e = smooth(pose.ex)
    for (const p of parts) p.mesh.position.copy(p.base).addScaledVector(p.off, e)
    // car stays centred at the origin; the camera does the moving. just a slow turntable.
    const g = wrap.current
    if (g) {
      const k = 1 - Math.pow(0.0001, dt)
      const idle = Math.sin(state.clock.elapsedTime * 0.1) * 0.025
      g.rotation.y += (pose.rotY + idle - g.rotation.y) * k
    }
  })

  return (
    <group ref={wrap}>
      <primitive object={flat} />
    </group>
  )
}
useGLTF.preload('/bugatti.glb', '/draco/')
