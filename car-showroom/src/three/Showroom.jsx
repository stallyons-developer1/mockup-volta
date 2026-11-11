import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import * as THREE from 'three'

function GlassWall({ position, rotation, size = [10, 5] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <meshPhysicalMaterial
        color="#9fb2c4" transmission={0.92} roughness={0.08} thickness={0.5} ior={1.4}
        transparent opacity={0.22} metalness={0} side={THREE.DoubleSide} envMapIntensity={0.8}
      />
    </mesh>
  )
}

export default function Showroom() {
  return (
    <>
      <Environment files="/hdri/studio.hdr" environmentIntensity={0.9} />
      <color attach="background" args={['#0a0a0c']} />
      <fog attach="fog" args={['#0a0a0c', 14, 34]} />

      {/* lights */}
      <ambientLight intensity={0.25} />
      <spotLight position={[0, 9, 2]} angle={0.5} penumbra={1} intensity={340} distance={30} castShadow
        shadow-mapSize={[2048, 2048]} shadow-bias={-0.0004} color="#fff6ec" />
      <spotLight position={[-7, 6, -6]} angle={0.6} penumbra={1} intensity={120} color="#9ab4ff" />
      <spotLight position={[7, 5, 6]} angle={0.6} penumbra={1} intensity={120} color="#ffd9a0" />

      {/* reflective showroom floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[80, 80]} />
        <MeshReflectorMaterial
          resolution={1024} mixBlur={1} mixStrength={6} blur={[400, 100]}
          roughness={0.85} depthScale={1.1} minDepthThreshold={0.3} maxDepthThreshold={1.2}
          color="#0c0c10" metalness={0.6} mirror={0.35}
        />
      </mesh>

      {/* glass pavilion walls */}
      <GlassWall position={[0, 2.5, -8]} rotation={[0, 0, 0]} size={[16, 6]} />
      <GlassWall position={[-7.5, 2.5, 0]} rotation={[0, Math.PI / 2, 0]} size={[16, 6]} />
      <GlassWall position={[7.5, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]} size={[16, 6]} />

      {/* soft ceiling light strip */}
      <mesh position={[0, 6, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3, 10]} />
        <meshBasicMaterial color="#fff3e0" toneMapped={false} opacity={0.6} transparent />
      </mesh>
    </>
  )
}
