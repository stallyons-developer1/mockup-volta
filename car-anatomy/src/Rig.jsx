import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { stage, samplePose } from './site.js'

// aspect below which we start pulling back so the wide car still fits
const REF_ASPECT = 1.1

export default function Rig() {
  const { camera, size } = useThree()
  const look = useRef(new THREE.Vector3(0, 0.6, 0))
  const dp = new THREE.Vector3(), dt = new THREE.Vector3()

  useFrame((state, dt2) => {
    const p = samplePose(stage.t)
    const k = 1 - Math.pow(0.0001, dt2)
    const aspect = size.width / Math.max(1, size.height)
    // On narrow/portrait screens the horizontal FOV shrinks and the wide car gets
    // cropped — dolly the camera back along the SAME view direction so the whole car
    // fits (uniform offset scale keeps the composition angle, just further away).
    const fit = Math.min(3.2, Math.max(1, REF_ASPECT / aspect))
    // ...and tilt down so the car rises into the upper portion, leaving the lower
    // half for the stacked text/cards (standard portrait layout).
    const upShift = (fit - 1) * 1.25
    dp.set(p.cam[0] - p.tgt[0], p.cam[1] - p.tgt[1], p.cam[2] - p.tgt[2]).multiplyScalar(fit)
    dp.x += p.tgt[0] + state.pointer.x * 0.35
    dp.y += p.tgt[1] + state.pointer.y * 0.22
    dp.z += p.tgt[2]
    dt.set(p.tgt[0], p.tgt[1] - upShift, p.tgt[2])
    camera.position.lerp(dp, k)
    look.current.lerp(dt, k)
    camera.lookAt(look.current)
  })
  return null
}
