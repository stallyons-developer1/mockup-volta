import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { initScroll, onProgress } from './scroll.js'
import { sample } from './data.js'
import { SportsCar } from './SportsCar.tsx'
import Rig from './Rig.jsx'
import Overlay from './components/Overlay.jsx'

function Studio() {
  return (
    <>
      <Environment files="/studio.hdr" environmentIntensity={1.05} />
      <color attach="background" args={['#0c0d11']} />
      <fog attach="fog" args={['#0c0d11', 18, 46]} />
      <ambientLight intensity={0.7} color="#cdd6e3" />
      <directionalLight position={[5, 9, 6]} intensity={2.2} color="#fff6ec" />
      <spotLight position={[-9, 5, -5]} angle={0.7} penumbra={1} intensity={120} color="#8fb0ff" />
      <pointLight position={[0, 2, 9]} intensity={40} color="#ffffff" distance={28} />
      {/* cheap soft ground shadow (no expensive shadow maps / reflections) */}
      <ContactShadows position={[0, 0, 0]} opacity={0.5} scale={18} blur={2.4} far={6} resolution={512} color="#000000" />
      {/* simple dark floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color="#121319" metalness={0.5} roughness={0.55} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.005, 0]}>
        <ringGeometry args={[3.0, 3.15, 80]} /><meshBasicMaterial color="#d8b36a" toneMapped={false} />
      </mesh>
    </>
  )
}

export default function App() {
  const [st, setSt] = useState({ explode: 0, focus: null })
  const last = useRef({ explode: -1, focus: 'x' })
  useEffect(() => {
    const off = initScroll()
    const un = onProgress((p) => {
      const s = sample(p)
      // throttle: only re-render the car when explode changes meaningfully or focus changes
      if (Math.abs(s.explode - last.current.explode) > 0.004 || s.focus !== last.current.focus) {
        last.current = { explode: s.explode, focus: s.focus }
        setSt({ explode: s.explode, focus: s.focus })
      }
    })
    return () => { off && off(); un() }
  }, [])

  return (
    <>
      <div className="stage">
        <Canvas dpr={[1, 1.5]} camera={{ position: [5.2, 3, 6.8], fov: 42 }}
          gl={{ antialias: true, powerPreference: 'high-performance', toneMapping: 4, toneMappingExposure: 1.05 }}>
          <Suspense fallback={null}>
            <Studio />
            <SportsCar explode={st.explode} focusPart={st.focus} />
          </Suspense>
          <Rig />
        </Canvas>
      </div>
      <Overlay />
      <div className="scroll-driver" style={{ height: '620vh' }} />
    </>
  )
}
