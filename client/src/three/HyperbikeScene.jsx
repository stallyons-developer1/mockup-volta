import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, Float } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

/* ---------- The hyperbike wheel ---------- */
function Wheel({ accent = '#c6ff3a' }) {
  const spin = useRef()
  const color = useMemo(() => new THREE.Color(accent), [accent])

  const spokes = useMemo(() => {
    const n = 6
    return Array.from({ length: n }, (_, i) => (i / n) * Math.PI * 2)
  }, [])

  useFrame((_, dt) => {
    if (spin.current) spin.current.rotation.z -= dt * 0.55
  })

  return (
    <group ref={spin}>
      {/* Tire */}
      <mesh castShadow>
        <torusGeometry args={[2.4, 0.44, 32, 96]} />
        <meshStandardMaterial color="#0c0c10" roughness={0.65} metalness={0.3} />
      </mesh>

      {/* Outer rim */}
      <mesh>
        <torusGeometry args={[2.02, 0.14, 20, 90]} />
        <meshStandardMaterial color="#d7d7dd" roughness={0.18} metalness={1} envMapIntensity={1.4} />
      </mesh>

      {/* Inner accent ring (glows) */}
      <mesh>
        <torusGeometry args={[1.0, 0.045, 16, 80]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={3.2}
          toneMapped={false}
        />
      </mesh>

      {/* Spokes */}
      {spokes.map((a, i) => (
        <group key={i} rotation={[0, 0, a]}>
          <mesh position={[0, 1.0, 0]}>
            <boxGeometry args={[0.16, 2.0, 0.34]} />
            <meshStandardMaterial color="#9a9aa4" roughness={0.25} metalness={1} envMapIntensity={1.2} />
          </mesh>
          {/* spoke accent inlay */}
          <mesh position={[0, 1.0, 0.18]}>
            <boxGeometry args={[0.05, 1.7, 0.03]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
          </mesh>
        </group>
      ))}

      {/* Brake disc */}
      <mesh position={[0, 0, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[1.35, 1.35, 0.06, 64]} />
        <meshStandardMaterial color="#5a5a64" roughness={0.4} metalness={1} />
      </mesh>

      {/* Hub */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.55, 0.62, 0.7, 48]} />
        <meshStandardMaterial color="#2a2a30" roughness={0.3} metalness={1} />
      </mesh>

      {/* Glowing core */}
      <mesh>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={4} toneMapped={false} />
      </mesh>
      <pointLight position={[0, 0, 1]} intensity={6} distance={9} color={color} />
    </group>
  )
}

/* ---------- Drifting energy particles ---------- */
function Sparks({ accent }) {
  const ref = useRef()
  const color = useMemo(() => new THREE.Color(accent), [accent])
  const geo = useMemo(() => {
    const count = 1400
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.6 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      positions[i * 3] = Math.cos(theta) * r
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9
      positions[i * 3 + 2] = Math.sin(theta) * r - 2
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [])

  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.04
  })

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial
        size={0.035}
        color={color}
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  )
}

/* ---------- Mouse parallax rig ---------- */
function Rig({ children }) {
  const group = useRef()
  useFrame((state) => {
    if (!group.current) return
    const { x, y } = state.pointer
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, 0.5 + x * 0.5, 0.05)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -0.32 + y * 0.3, 0.05)
  })
  return <group ref={group} rotation={[-0.32, 0.5, 0]}>{children}</group>
}

export default function HyperbikeScene({ accent = '#c6ff3a' }) {
  return (
    <Canvas
      className="hero__canvas"
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 8.2], fov: 42 }}
    >
      <ambientLight intensity={0.35} />
      <spotLight position={[6, 8, 6]} angle={0.4} penumbra={1} intensity={120} color="#ffffff" />
      <spotLight position={[-8, -4, 4]} angle={0.5} penumbra={1} intensity={60} color={accent} />

      <Rig>
        <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.5}>
          <Wheel accent={accent} />
        </Float>
        <Sparks accent={accent} />
      </Rig>

      {/* In-scene HDRI built from light panels — no external asset needed */}
      <Environment resolution={256}>
        <Lightformer form="ring" intensity={2} color={accent} position={[0, 0, -6]} scale={6} />
        <Lightformer form="rect" intensity={3} color="#ffffff" position={[5, 4, 2]} scale={8} />
        <Lightformer form="rect" intensity={2} color="#8891ff" position={[-6, -2, 2]} scale={8} />
        <Lightformer form="circle" intensity={2.5} color="#ffffff" position={[0, 6, 4]} scale={5} />
      </Environment>

      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.9} mipmapBlur intensity={1.25} radius={0.7} />
        <Vignette eskil={false} offset={0.25} darkness={0.9} />
      </EffectComposer>
    </Canvas>
  )
}
