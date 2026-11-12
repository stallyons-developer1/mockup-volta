import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { initScroll } from './scroll.js'
import Scene from './three/Scene.jsx'
import CarExplode from './three/CarExplode.jsx'
import Rig from './three/Rig.jsx'
import Overlay from './components/Overlay.jsx'

export default function App() {
  useEffect(() => initScroll(), [])
  return (
    <>
      <div className="stage">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [4, 1.6, 7], fov: 40 }}
          gl={{ antialias: true, toneMapping: 4, toneMappingExposure: 1.05 }}>
          <Suspense fallback={null}>
            <Scene />
            <CarExplode />
          </Suspense>
          <Rig />
        </Canvas>
      </div>
      <Overlay />
      <div className="scroll-driver" style={{ height: '560vh' }} />
    </>
  )
}
