import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

/* smoothstep-eased keyframe interpolation: stops = [[p,value], ...] sorted */
function kf(p, stops) {
  if (p <= stops[0][0]) return stops[0][1]
  const n = stops.length
  if (p >= stops[n - 1][0]) return stops[n - 1][1]
  for (let i = 0; i < n - 1; i++) {
    const [pa, va] = stops[i]
    const [pb, vb] = stops[i + 1]
    if (p <= pb) {
      let t = (p - pa) / (pb - pa)
      t = t * t * (3 - 2 * t) // smoothstep
      return va + (vb - va) * t
    }
  }
  return stops[n - 1][1]
}

function Wheel({ accent, progress }) {
  const tilt = useRef()
  const wheel = useRef()
  const core = useRef()
  const sparks = useRef()
  const coreMat = useRef()
  const ringMat = useRef()
  const spokeMats = useRef([])
  const coreLight = useRef()

  const { camera } = useThree()
  const color = useMemo(() => new THREE.Color(accent), [accent])

  const spokes = useMemo(() => Array.from({ length: 6 }, (_, i) => (i / 6) * Math.PI * 2), [])

  const sparkGeo = useMemo(() => {
    const count = 1600
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const r = 2.4 + Math.random() * 7
      const a = Math.random() * Math.PI * 2
      pos[i * 3] = Math.cos(a) * r
      pos[i * 3 + 1] = (Math.random() - 0.5) * 11
      pos[i * 3 + 2] = Math.sin(a) * r - 2
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return g
  }, [])

  useFrame((state, dt) => {
    const p = progress.current
    const t = state.clock.elapsedTime

    // Camera travels: close seed -> pull back -> dive through -> settle finale
    camera.position.z = kf(p, [[0, 3.1], [0.12, 2.9], [0.3, 9], [0.5, 4], [0.7, 8], [0.88, 6], [1, 8.4]])
    camera.position.x = kf(p, [[0, 0], [0.3, -1.2], [0.5, 0.4], [0.75, 1.3], [1, 0]])
    camera.position.y = kf(p, [[0, 0], [0.5, -0.4], [1, 0.5]])
    camera.lookAt(0, 0, 0)

    // Orbit tilt of the whole rig
    if (tilt.current) {
      tilt.current.rotation.x = kf(p, [[0, -0.1], [0.3, -0.38], [0.6, 0.16], [1, -0.22]])
      tilt.current.rotation.y = kf(p, [[0, 0.25], [0.3, 0.75], [0.6, -0.35], [1, 0.5]])
    }

    // Wheel materialises from the core, then spins (scroll-scrubbed = you drive it)
    if (wheel.current) {
      const s = kf(p, [[0, 0.001], [0.08, 0.06], [0.3, 1.06], [0.36, 1], [1, 1]])
      wheel.current.scale.setScalar(s)
      wheel.current.rotation.z = -p * Math.PI * 2 * 6 - t * 0.15
    }

    // Core: the seed charge; pulses, then flares white-hot at the finale
    if (core.current) {
      const cs = kf(p, [[0, 0.55], [0.1, 0.36], [0.85, 0.42], [0.92, 2.3], [1, 0.6]]) + Math.sin(t * 3) * 0.02
      core.current.scale.setScalar(cs)
    }

    // Energy ramps through the ride and spikes at the climax
    const glow = kf(p, [[0, 1.4], [0.3, 2.2], [0.7, 3.2], [0.9, 7], [0.95, 3], [1, 2.6]])
    if (coreMat.current) coreMat.current.emissiveIntensity = glow
    if (ringMat.current) ringMat.current.emissiveIntensity = glow * 0.9
    spokeMats.current.forEach((m) => m && (m.emissiveIntensity = glow * 0.6))
    if (coreLight.current) coreLight.current.intensity = glow * 1.6

    // Speed particles build, streak, then calm
    if (sparks.current) {
      sparks.current.rotation.y += dt * (0.05 + p * 0.5)
      const op = kf(p, [[0, 0], [0.1, 0.25], [0.5, 0.9], [0.8, 1], [1, 0.45]])
      sparks.current.material.opacity = op
    }
  })

  return (
    <group ref={tilt}>
      {/* The seed charge — always present */}
      <mesh ref={core}>
        <sphereGeometry args={[0.34, 32, 32]} />
        <meshStandardMaterial ref={coreMat} color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
      </mesh>
      <pointLight ref={coreLight} position={[0, 0, 1]} intensity={6} distance={11} color={color} />

      {/* The wheel that assembles out of the core */}
      <group ref={wheel}>
        <mesh>
          <torusGeometry args={[2.4, 0.44, 32, 96]} />
          <meshStandardMaterial color="#0c0c10" roughness={0.6} metalness={0.4} />
        </mesh>
        <mesh>
          <torusGeometry args={[2.02, 0.14, 20, 90]} />
          <meshStandardMaterial color="#d7d7dd" roughness={0.16} metalness={1} envMapIntensity={1.5} />
        </mesh>
        <mesh>
          <torusGeometry args={[1.0, 0.05, 16, 80]} />
          <meshStandardMaterial ref={ringMat} color={color} emissive={color} emissiveIntensity={3} toneMapped={false} />
        </mesh>
        {spokes.map((a, i) => (
          <group key={i} rotation={[0, 0, a]}>
            <mesh position={[0, 1.0, 0]}>
              <boxGeometry args={[0.16, 2.0, 0.34]} />
              <meshStandardMaterial color="#9a9aa4" roughness={0.25} metalness={1} envMapIntensity={1.2} />
            </mesh>
            <mesh position={[0, 1.0, 0.18]}>
              <boxGeometry args={[0.05, 1.7, 0.03]} />
              <meshStandardMaterial
                ref={(el) => (spokeMats.current[i] = el)}
                color={color}
                emissive={color}
                emissiveIntensity={2}
                toneMapped={false}
              />
            </mesh>
          </group>
        ))}
        <mesh position={[0, 0, -0.12]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.35, 1.35, 0.06, 64]} />
          <meshStandardMaterial color="#5a5a64" roughness={0.4} metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.55, 0.62, 0.7, 48]} />
          <meshStandardMaterial color="#2a2a30" roughness={0.3} metalness={1} />
        </mesh>
      </group>

      <points ref={sparks} geometry={sparkGeo}>
        <pointsMaterial
          size={0.035}
          color={color}
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </points>
    </group>
  )
}

export default function JourneyScene({ accent = '#c6ff3a', progress }) {
  return (
    <Canvas
      className="journey__canvas"
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ position: [0, 0, 3.1], fov: 45 }}
    >
      <ambientLight intensity={0.35} />
      <spotLight position={[6, 8, 6]} angle={0.4} penumbra={1} intensity={120} color="#ffffff" />
      <spotLight position={[-8, -4, 4]} angle={0.5} penumbra={1} intensity={60} color={accent} />

      <Wheel accent={accent} progress={progress} />

      <Environment resolution={256}>
        <Lightformer form="ring" intensity={2} color={accent} position={[0, 0, -6]} scale={6} />
        <Lightformer form="rect" intensity={3} color="#ffffff" position={[5, 4, 2]} scale={8} />
        <Lightformer form="rect" intensity={2} color="#8891ff" position={[-6, -2, 2]} scale={8} />
        <Lightformer form="circle" intensity={2.5} color="#ffffff" position={[0, 6, 4]} scale={5} />
      </Environment>

      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.85} mipmapBlur intensity={1.4} radius={0.75} />
        <Vignette eskil={false} offset={0.22} darkness={0.92} />
      </EffectComposer>
    </Canvas>
  )
}
