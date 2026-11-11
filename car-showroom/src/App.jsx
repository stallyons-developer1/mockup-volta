import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { initScroll } from './scroll.js'
import { ROOMS, roomZ, STOPS } from './data.js'
import Showroom from './three/Showroom.jsx'
import Car from './three/Car.jsx'
import Rig from './three/Rig.jsx'
import Overlay from './components/Overlay.jsx'
import Loader from './components/Loader.jsx'

export default function App() {
  useEffect(() => initScroll(), [])
  // scroll length scales with the number of rooms
  const height = 140 + ROOMS.length * 190

  return (
    <>
      <div className="stage">
        <Canvas shadows dpr={[1, 2]} camera={{ position: STOPS[0].pos, fov: 42 }}
          gl={{ antialias: true, toneMapping: 4, toneMappingExposure: 1.05 }}>
          <Suspense fallback={null}>
            <Showroom />
            {ROOMS.map((room, i) => (
              <Car key={i} color={room.color} position={[0, 0, roomZ(i)]} />
            ))}
          </Suspense>
          <Rig />
        </Canvas>
      </div>

      <Overlay />
      <Loader />
      <div className="scroll-driver" style={{ height: `${height}vh` }} />
    </>
  )
}
