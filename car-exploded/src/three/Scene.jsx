import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'

export default function Scene() {
  return (
    <>
      <Environment files="/hdri/studio.hdr" environmentIntensity={1.0} />
      <color attach="background" args={['#0b0c10']} />
      <fog attach="fog" args={['#0b0c10', 16, 42]} />

      <ambientLight intensity={0.4} color="#cdd6e3" />
      <spotLight position={[0, 10, 4]} angle={0.5} penumbra={1} intensity={420} distance={40} castShadow
        shadow-mapSize={[2048, 2048]} shadow-bias={-0.0004} color="#fff6ec" />
      <spotLight position={[-10, 5, -6]} angle={0.7} penumbra={1} intensity={160} color="#8fb0ff" />
      <spotLight position={[10, 5, 6]} angle={0.7} penumbra={1} intensity={160} color="#ffce98" />
      <pointLight position={[0, 1.5, 8]} intensity={40} color="#ffffff" distance={26} />

      {/* reflective studio floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <MeshReflectorMaterial resolution={1024} mixBlur={1} mixStrength={7} blur={[320, 90]}
          roughness={0.55} depthScale={1} minDepthThreshold={0.3} maxDepthThreshold={1.2}
          color="#101118" metalness={0.8} mirror={0.45} />
      </mesh>
      {/* glowing base ring */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.18, 0]}>
        <ringGeometry args={[2.9, 3.05, 96]} />
        <meshBasicMaterial color="#d8b36a" toneMapped={false} />
      </mesh>
    </>
  )
}
