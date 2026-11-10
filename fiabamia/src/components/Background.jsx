import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Starfield from '../three/Starfield.jsx'
import ShootingStars from './ShootingStars.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'

// Fixed, full-page atmospheric background: CSS nebula + shooting stars + Three.js starfield.
export default function Background() {
  return (
    <>
      <div className="nebula" aria-hidden="true" />
      <ShootingStars />
      <div className="bg-canvas" aria-hidden="true">
        <ErrorBoundary fallback={null}>
          <Canvas
            camera={{ position: [0, 0, 10], fov: 55 }}
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
          >
            <Suspense fallback={null}>
              <Starfield />
            </Suspense>
          </Canvas>
        </ErrorBoundary>
      </div>
    </>
  )
}
