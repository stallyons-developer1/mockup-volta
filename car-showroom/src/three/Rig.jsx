import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from '../scroll.js'
import { STOPS } from '../data.js'

const smooth = (t) => t * t * (3 - 2 * t)

export default function Rig() {
  const { camera } = useThree()
  const target = useRef(new THREE.Vector3(0, 0.5, 0))
  const desPos = useRef(new THREE.Vector3())
  const desTgt = useRef(new THREE.Vector3())
  const a = new THREE.Vector3(), b = new THREE.Vector3()

  useFrame(() => {
    const p = scroll.p
    // find bracketing stops
    let i = 0
    while (i < STOPS.length - 2 && p > STOPS[i + 1].p) i++
    const s0 = STOPS[i], s1 = STOPS[i + 1]
    const span = Math.max(1e-4, s1.p - s0.p)
    const lt = smooth(Math.min(1, Math.max(0, (p - s0.p) / span)))

    desPos.current.set(...s0.pos).lerp(b.set(...s1.pos), lt)
    desTgt.current.set(...s0.tgt).lerp(a.set(...s1.tgt), lt)

    camera.position.lerp(desPos.current, 0.07)
    target.current.lerp(desTgt.current, 0.08)
    camera.lookAt(target.current)
  })
  return null
}
