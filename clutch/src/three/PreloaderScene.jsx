import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import * as THREE from 'three'

// A sphere built from fiery embers — loot.ru's signature loader motif.
function EmberSphere() {
  const ref = useRef()
  const { geo } = useMemo(() => {
    const N = 2600
    const R = 2.3
    const pos = new Float32Array(N * 3)
    const col = new Float32Array(N * 3)
    const gold = new THREE.Color('#ffb23e')
    const red = new THREE.Color('#ff2d2d')
    const golden = Math.PI * (1 + Math.sqrt(5))
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      const jitter = 0.94 + Math.random() * 0.12
      pos[i * 3] = Math.cos(theta) * r * R * jitter
      pos[i * 3 + 1] = y * R * jitter
      pos[i * 3 + 2] = Math.sin(theta) * r * R * jitter
      const c = gold.clone().lerp(red, (y + 1) / 2)
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('color', new THREE.BufferAttribute(col, 3))
    return { geo: g }
  }, [])

  useFrame((state, dt) => {
    if (!ref.current) return
    ref.current.rotation.y += dt * 0.28
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.15
    const s = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.02
    ref.current.scale.setScalar(s)
  })

  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.95} depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
    </points>
  )
}

export default function PreloaderScene() {
  return (
    <Canvas className="preloader__canvas" dpr={[1, 1.8]} camera={{ position: [0, 0, 6], fov: 45 }} gl={{ alpha: true }}>
      <EmberSphere />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.2} mipmapBlur intensity={1.3} radius={0.7} />
      </EffectComposer>
    </Canvas>
  )
}
