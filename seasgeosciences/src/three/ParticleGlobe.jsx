import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Points distributed on a sphere (fibonacci) + a soft inner cloud → a "world" of data points.
export default function ParticleGlobe({ count = 2600 }) {
  const surface = useRef()
  const cloud = useRef()

  const [surfPos, cloudPos] = useMemo(() => {
    const s = new Float32Array(count * 3)
    const c = new Float32Array(Math.floor(count / 2) * 3)
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      s[i * 3] = Math.cos(theta) * r
      s[i * 3 + 1] = y
      s[i * 3 + 2] = Math.sin(theta) * r
    }
    for (let i = 0; i < c.length / 3; i++) {
      const rr = 0.35 + Math.random() * 0.55
      const th = Math.random() * Math.PI * 2
      const ph = Math.acos(2 * Math.random() - 1)
      c[i * 3] = Math.sin(ph) * Math.cos(th) * rr
      c[i * 3 + 1] = Math.cos(ph) * rr
      c[i * 3 + 2] = Math.sin(ph) * Math.sin(th) * rr
    }
    return [s, c]
  }, [count])

  useFrame((state, dt) => {
    const t = state.clock.elapsedTime
    if (surface.current) {
      surface.current.rotation.y += dt * 0.08
      surface.current.rotation.x = Math.sin(t * 0.15) * 0.12
      const px = state.pointer.x * 0.25
      const py = state.pointer.y * 0.25
      surface.current.rotation.z = px * 0.3
      surface.current.position.x = THREE.MathUtils.lerp(surface.current.position.x, px * 0.4, 0.04)
      surface.current.position.y = THREE.MathUtils.lerp(surface.current.position.y, py * 0.4, 0.04)
    }
    if (cloud.current) cloud.current.rotation.y -= dt * 0.04
  })

  return (
    <group scale={1.55}>
      <points ref={surface}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={surfPos.length / 3} array={surfPos} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.013} color="#1863dc" transparent opacity={0.95} sizeAttenuation depthWrite={false} />
      </points>
      <points ref={cloud}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={cloudPos.length / 3} array={cloudPos} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.02} color="#6fa3ee" transparent opacity={0.4} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    </group>
  )
}
