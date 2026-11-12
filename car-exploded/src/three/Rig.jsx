import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from '../scroll.js'

// Camera gently orbits + rises as the machine comes apart.
export default function Rig() {
  const { camera } = useThree()
  const tgt = useRef(new THREE.Vector3(0, 0.5, 0))
  const des = new THREE.Vector3()

  useFrame((state) => {
    const p = scroll.p
    const ang = -0.5 + p * 1.3 + state.pointer.x * 0.25
    const radius = 7.4 + p * 2.2
    const height = 1.4 + p * 2.4 + state.pointer.y * 0.4
    des.set(Math.sin(ang) * radius, height, Math.cos(ang) * radius)
    camera.position.lerp(des, 0.06)
    tgt.current.lerp(new THREE.Vector3(0, 0.5 + p * 0.5, 0), 0.06)
    camera.lookAt(tgt.current)
  })
  return null
}
