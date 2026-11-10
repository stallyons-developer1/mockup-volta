import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertex = `
  attribute float aSize;
  attribute float aPhase;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uPixelRatio;
  varying vec3 vColor;
  varying float vTw;
  void main() {
    vColor = aColor;
    float tw = 0.55 + 0.45 * sin(uTime * 1.3 + aPhase * 6.2831);
    vTw = tw;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = clamp(aSize * uPixelRatio * (90.0 / -mv.z) * (0.6 + 0.5 * tw), 1.0, 16.0);
  }
`
const fragment = `
  varying vec3 vColor;
  varying float vTw;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c);
    float core = smoothstep(0.5, 0.12, d);
    float glow = smoothstep(0.5, 0.0, d) * 0.22;
    float a = (core + glow) * (0.4 + 0.6 * vTw);
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor, a);
  }
`

const PALETTE = [
  new THREE.Color('#f6eedf'), // cream
  new THREE.Color('#f3d38a'), // gold
  new THREE.Color('#d4c5f0'), // moon lavender
  new THREE.Color('#c4b0ff'), // purple light
  new THREE.Color('#ffffff'),
]

export default function Starfield({ count = 2600 }) {
  const ref = useRef()
  const mat = useRef()

  const geo = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const size = new Float32Array(count)
    const phase = new Float32Array(count)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50
      pos[i * 3 + 1] = (Math.random() - 0.5) * 36
      pos[i * 3 + 2] = -6 - Math.random() * 26
      size[i] = Math.random() * 1.3 + 0.35
      phase[i] = Math.random()
      const c = PALETTE[Math.floor(Math.pow(Math.random(), 2.2) * PALETTE.length)]
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    g.setAttribute('aSize', new THREE.BufferAttribute(size, 1))
    g.setAttribute('aPhase', new THREE.BufferAttribute(phase, 1))
    g.setAttribute('aColor', new THREE.BufferAttribute(col, 3))
    return g
  }, [count])

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uPixelRatio: { value: Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2) },
  }), [])

  useFrame((state, dt) => {
    uniforms.uTime.value = state.clock.elapsedTime
    if (ref.current) {
      ref.current.rotation.y += dt * 0.012
      // gentle parallax toward pointer
      const px = state.pointer.x * 0.6
      const py = state.pointer.y * 0.4
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, px, 0.03)
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, py, 0.03)
    }
  })

  return (
    <points ref={ref} geometry={geo}>
      <shaderMaterial
        ref={mat}
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
