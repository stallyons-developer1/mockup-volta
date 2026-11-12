import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { stage, samplePose } from './site.js'

export default function Rig() {
  const { camera } = useThree()
  const look = useRef(new THREE.Vector3(0, 0.6, 0))
  const dp = new THREE.Vector3(), dt = new THREE.Vector3()

  useFrame((state, dt2) => {
    const p = samplePose(stage.t)
    const k = 1 - Math.pow(0.0001, dt2) // frame-rate independent damping
    dp.set(p.cam[0], p.cam[1], p.cam[2])
    // gentle pointer parallax so the shot feels alive
    dp.x += state.pointer.x * 0.35
    dp.y += state.pointer.y * 0.22
    dt.set(p.tgt[0], p.tgt[1], p.tgt[2])
    camera.position.lerp(dp, k)
    look.current.lerp(dt, k)
    camera.lookAt(look.current)
  })
  return null
}
