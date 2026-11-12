import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import { initScroll, onProgress } from './scroll.js'
import { sample } from './data.js'
import { SportsCar } from './SportsCar.tsx'
import Rig from './Rig.jsx'
import Overlay from './components/Overlay.jsx'

function Studio() {
  return (
    <>
      <Environment files="/studio.hdr" environmentIntensity={0.9} />
      <color attach="background" args={['#0c0d11']} />
      <fog attach="fog" args={['#0c0d11', 16, 44]} />
      <ambientLight intensity={0.55} color="#cdd6e3" />
      <spotLight position={[5, 10, 6]} angle={0.5} penumbra={1} intensity={500} distance={44} castShadow
        shadow-mapSize={[2048, 2048]} shadow-bias={-0.0004} color="#fff6ec" />
      <spotLight position={[-9, 5, -5]} angle={0.7} penumbra={1} intensity={160} color="#8fb0ff" />
      <pointLight position={[0, 2, 9]} intensity={50} color="#ffffff" distance={28} />
      {/* reflective studio floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <MeshReflectorMaterial resolution={1024} mixBlur={1} mixStrength={6} blur={[320, 90]}
          roughness={0.6} depthScale={1} minDepthThreshold={0.3} maxDepthThreshold={1.2}
          color="#101118" metalness={0.75} mirror={0.4} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <ringGeometry args={[3.0, 3.15, 96]} /><meshBasicMaterial color="#d8b36a" toneMapped={false} />
      </mesh>
    </>
  )
}

export default function App() {
  const [st, setSt] = useState({ explode: 0, focus: null })
  useEffect(() => {
    const off = initScroll()
    const un = onProgress((p) => { const s = sample(p); setSt({ explode: s.explode, focus: s.focus }) })
    return () => { off && off(); un() }
  }, [])

  return (
    <>
      <div className="stage">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [5.2, 3, 6.8], fov: 42 }}
          gl={{ antialias: true, toneMapping: 4, toneMappingExposure: 1.05 }}>
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
