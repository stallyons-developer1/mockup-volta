import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { initScroll } from './scroll.js'
import Showroom from './three/Showroom.jsx'
import Car from './three/Car.jsx'
import Rig from './three/Rig.jsx'
import Overlay from './components/Overlay.jsx'
import Loader from './components/Loader.jsx'

export default function App() {
  useEffect(() => initScroll(), [])

  return (
    <>
      <div className="stage">
        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [0.2, 3.4, 11.5], fov: 42 }}
          gl={{ antialias: true, toneMapping: 4 /* ACESFilmic */, toneMappingExposure: 1.05 }}
        >
          <Suspense fallback={null}>
            <Showroom />
            <Car />
          </Suspense>
          <Rig />
        </Canvas>
      </div>

      <Overlay />
      <Loader />

      {/* tall scroll driver — creates the scroll length for the journey */}
      <div className="scroll-driver" style={{ height: '720vh' }} />
    </>
  )
}
