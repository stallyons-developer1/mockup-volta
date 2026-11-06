import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

// An original twisting glass tower — stacked navy-glass slabs with bronze
// seams, tapering and rotating as they rise toward a crowning setback.
function Tower({ scrollRef }) {
  const group = useRef()
  const slabs = useMemo(() => {
    const N = 26
    const spacing = 0.44
    const start = -((N - 1) * spacing) / 2
    return Array.from({ length: N }, (_, i) => {
      const t = i / (N - 1)
      return { y: start + i * spacing, rot: i * (Math.PI / 180) * 4.0, scale: 1 - t * 0.3 }
    })
  }, [])

  useFrame((state, dt) => {
    if (!group.current) return
    const s = scrollRef ? scrollRef.v : 0
    group.current.rotation.y += dt * 0.09
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, state.pointer.x * 0.05, 0.04)
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.4, 0.04)
    group.current.position.y = -s * 2.2 // sink slightly as you scroll
  })

  return (
    <group ref={group}>
      {slabs.map((s, i) => (
        <group key={i} position={[0, s.y, 0]} rotation={[0, s.rot, 0]} scale={[s.scale, 1, s.scale]}>
          <mesh>
            <boxGeometry args={[2.1, 0.34, 2.1]} />
            <meshStandardMaterial color="#0c1a2b" metalness={1} roughness={0.07} envMapIntensity={1.8} />
          </mesh>
          <mesh position={[0, 0.185, 0]}>
            <boxGeometry args={[2.16, 0.025, 2.16]} />
            <meshStandardMaterial color="#c6a86a" metalness={1} roughness={0.35} emissive="#6b5021" emissiveIntensity={0.5} toneMapped={false} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

function Motes() {
  const ref = useRef()
  const geo = useMemo(() => {
    const N = 320
    const pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return g
  }, [])
  useFrame((_, dt) => {
    if (!ref.current) return
    const p = ref.current.geometry.attributes.position.array
    for (let i = 1; i < p.length; i += 3) { p[i] += dt * 0.12; if (p[i] > 6) p[i] = -6 }
    ref.current.geometry.attributes.position.needsUpdate = true
  })
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.03} color="#d8c69a" transparent opacity={0.5} depthWrite={false} toneMapped={false} />
    </points>
  )
}

export default function TowerScene({ scrollRef }) {
  return (
    <Canvas
      className="hero__canvas"
      dpr={[1, 1.8]}
      camera={{ position: [3.4, 0.6, 9.5], fov: 40 }}
      gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    >
      <ambientLight intensity={0.3} />
      <spotLight position={[8, 10, 6]} angle={0.4} penumbra={1} intensity={90} color="#ffdca8" />
      <spotLight position={[-8, -2, 4]} angle={0.5} penumbra={1} intensity={40} color="#7fa0c8" />

      <Tower scrollRef={scrollRef} />
      <Motes />

      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} color="#ffd9a0" position={[6, 4, 2]} scale={10} />
        <Lightformer form="rect" intensity={1.6} color="#86a7d6" position={[-7, 2, 2]} scale={10} />
        <Lightformer form="ring" intensity={2} color="#c6a86a" position={[0, 6, -4]} scale={6} />
        <Lightformer form="circle" intensity={1.4} color="#ffffff" position={[0, -4, 5]} scale={5} />
      </Environment>
    </Canvas>
  )
}
