import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from './scroll.js'
import { sample } from './data.js'

export default function Rig() {
  const { camera } = useThree()
  const tgt = useRef(new THREE.Vector3(0, 0.8, 0))
  const dp = new THREE.Vector3(), dt = new THREE.Vector3()

  useFrame((state) => {
    const s = sample(scroll.p)
    dp.set(s.cam[0], s.cam[1], s.cam[2])
    dt.set(s.tgt[0], s.tgt[1], s.tgt[2])
    // subtle parallax from pointer
    dp.x += state.pointer.x * 0.5
    dp.y += state.pointer.y * 0.35
    camera.position.lerp(dp, 0.08)
    tgt.current.lerp(dt, 0.09)
    camera.lookAt(tgt.current)
  })
  return null
}
