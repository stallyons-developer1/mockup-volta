import { useMemo, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

// scroll 0..1 across the first viewport, shared with the 3D scene.
const scroll = { v: 0 }

const vertexShader = `
  uniform float uTime;
  uniform vec3 uPointer;
  uniform float uSize;
  uniform float uScroll;
  attribute float aRandom;
  varying float vGlow;
  varying float vRand;
  void main() {
    vec3 pos = position;
    vec3 dir = normalize(pos + 0.001);
    // shimmer / breathing
    float t = uTime * 0.8 + aRandom * 6.2831;
    pos += dir * sin(t) * 0.07 * (0.4 + aRandom);
    // cursor repulsion — particles flee the pointer, forming a ripple
    vec3 toP = pos - uPointer;
    float d = length(toP);
    float push = 1.0 / (d * d + 0.3);
    float pushD = min(push, 2.5);
    pos += normalize(toP) * pushD * 0.5;
    // scroll dissolve — the sculpture streams apart as you scroll
    pos += dir * uScroll * (0.9 + aRandom * 1.8);
    vGlow = min(push, 2.5);
    vRand = aRandom;
    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * (1.0 + vGlow * 0.8) * (9.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`

const fragmentShader = `
  varying float vGlow;
  varying float vRand;
  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float a = smoothstep(0.5, 0.0, length(uv));
    if (a < 0.03) discard;
    vec3 gold = vec3(1.0, 0.74, 0.3);
    vec3 red  = vec3(1.0, 0.25, 0.12);
    vec3 col = mix(red, gold, vRand);
    col += vGlow * 0.5;
    gl_FragColor = vec4(col, a);
  }
`

function Sculpture({ scrollRef }) {
  const group = useRef()
  const solid = useRef()
  const mat = useRef()
  const tmp = useMemo(() => new THREE.Vector3(), [])

  // Particle cloud sampled on a torus-knot surface.
  const geo = useMemo(() => {
    const src = new THREE.TorusKnotGeometry(1.5, 0.5, 360, 46, 2, 3)
    const pos = src.attributes.position
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', pos.clone())
    const rand = new Float32Array(pos.count)
    for (let i = 0; i < pos.count; i++) rand[i] = Math.random()
    g.setAttribute('aRandom', new THREE.BufferAttribute(rand, 1))
    src.dispose()
    return g
  }, [])

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uPointer: { value: new THREE.Vector3(999, 999, 999) },
    uSize: { value: 2.3 },
    uScroll: { value: 0 },
  }), [])

  useFrame((state, dt) => {
    const s = scrollRef.v
    if (group.current) {
      group.current.rotation.y += dt * 0.12
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.25, 0.05)
      group.current.updateMatrixWorld()
    }
    if (mat.current) {
      mat.current.uniforms.uTime.value = state.clock.elapsedTime
      mat.current.uniforms.uScroll.value = s
      tmp.set(state.pointer.x * 3.6, state.pointer.y * 2.6, 0.6)
      if (group.current) group.current.worldToLocal(tmp)
      mat.current.uniforms.uPointer.value.copy(tmp)
    }
    if (solid.current) {
      solid.current.rotation.y += dt * 0.12
      solid.current.scale.setScalar(1.42 * (1 - s * 0.3))
    }
  })

  return (
    <group ref={group}>
      {/* glossy molten core */}
      <mesh ref={solid} scale={1.42}>
        <torusKnotGeometry args={[1.5, 0.5, 220, 32, 2, 3]} />
        <meshStandardMaterial color="#2a0d06" metalness={1} roughness={0.14} envMapIntensity={2.6} emissive="#4a1205" emissiveIntensity={0.3} />
      </mesh>
      {/* glowing particle shell */}
      <points geometry={geo} scale={1.42}>
        <shaderMaterial
          ref={mat}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  )
}

function Embers() {
  const ref = useRef()
  const geo = useMemo(() => {
    const N = 900
    const pos = new Float32Array(N * 3)
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14
      pos[i * 3 + 2] = (Math.random() - 0.5) * 9 - 3
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return g
  }, [])
  useFrame((_, dt) => {
    if (!ref.current) return
    const p = ref.current.geometry.attributes.position.array
    for (let i = 1; i < p.length; i += 3) { p[i] += dt * 0.5; if (p[i] > 7) p[i] = -7 }
    ref.current.geometry.attributes.position.needsUpdate = true
  })
  return (
    <points ref={ref} geometry={geo}>
      <pointsMaterial size={0.035} color="#ff8a3a" transparent opacity={0.55} depthWrite={false} blending={THREE.AdditiveBlending} toneMapped={false} />
    </points>
  )
}

function Dolly({ scrollRef }) {
  const { camera } = useThree()
  useFrame(() => {
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, 5.4 - scrollRef.v * 1.6, 0.08)
    camera.lookAt(0, 0, 0)
  })
  return null
}

export default function HeroScene() {
  const scrollRef = useRef(scroll).current
  useEffect(() => {
    const onScroll = () => { scrollRef.v = Math.min(1, window.scrollY / window.innerHeight) }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollRef])

  return (
    <Canvas className="hero__canvas" dpr={[1, 1.8]} camera={{ position: [0, 0, 5.4], fov: 44 }} gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}>
      <ambientLight intensity={0.35} />
      <spotLight position={[6, 6, 6]} angle={0.4} penumbra={1} intensity={120} color="#ffd9a0" />
      <spotLight position={[-7, -3, 2]} angle={0.5} penumbra={1} intensity={80} color="#ff2d2d" />
      <pointLight position={[0, 1, 5]} intensity={40} distance={14} color="#ffe0b0" />

      <Dolly scrollRef={scrollRef} />
      <Sculpture scrollRef={scrollRef} />
      <Embers />

      <Environment resolution={256}>
        <Lightformer form="ring" intensity={3} color="#ff6a1a" position={[0, 0, -5]} scale={7} />
        <Lightformer form="rect" intensity={3} color="#ffb23e" position={[5, 3, 2]} scale={8} />
        <Lightformer form="rect" intensity={2} color="#ff2d2d" position={[-6, -2, 2]} scale={8} />
        <Lightformer form="circle" intensity={2} color="#ffffff" position={[0, 5, 3]} scale={4} />
      </Environment>

      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.6} mipmapBlur intensity={1.4} radius={0.75} />
        <Vignette eskil={false} offset={0.2} darkness={0.9} />
      </EffectComposer>
    </Canvas>
  )
}
