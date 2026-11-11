import { useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from '../scroll.js'

const clamp01 = (x) => Math.min(1, Math.max(0, x))

export default function Car() {
  const group = useRef()
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

  useFrame(() => {
    if (group.current) {
      const turn = clamp01((scroll.p - 0.9) / 0.1)
      group.current.rotation.y = turn * 0.4
    }
  })

  return (
    <group ref={group}>
      <primitive object={model} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} />
    </group>
  )
}
useGLTF.preload('/models/ferrari.glb', '/draco/')
