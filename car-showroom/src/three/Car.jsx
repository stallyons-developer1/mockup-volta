import { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

// One car instance, placed inside a room, in the room's colour.
export default function Car({ color = '#9e1122', position = [0, 0, 0] }) {
  const { scene } = useGLTF('/models/ferrari.glb', '/draco/')

  const model = useMemo(() => {
    const root = scene.clone(true)
    const silver = color === '#c7ccd3'
    const paint = new THREE.MeshPhysicalMaterial({
      color, metalness: silver ? 1 : 0.9, roughness: silver ? 0.18 : 0.28,
      clearcoat: 1, clearcoatRoughness: 0.06, envMapIntensity: 1.9,
    })
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
  }, [scene, color])

  return (
    <group position={position}>
      <primitive object={model} rotation={[0, Math.PI, 0]} />
    </group>
  )
}
useGLTF.preload('/models/ferrari.glb', '/draco/')
