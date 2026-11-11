import { useRef } from 'react'
import { Environment, MeshReflectorMaterial, RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from '../scroll.js'

const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (x) => Math.min(1, Math.max(0, x))

// a glass panel
function Glass({ position, rotation, size }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <meshPhysicalMaterial color="#aebecd" transmission={0.94} roughness={0.06} thickness={0.4}
        ior={1.4} transparent opacity={0.16} metalness={0} side={THREE.DoubleSide} envMapIntensity={1} />
    </mesh>
  )
}
// thin metal frame bar
function Bar({ position, args }) {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color="#17181c" metalness={0.9} roughness={0.35} />
    </mesh>
  )
}

export default function Showroom() {
  const doorL = useRef(), doorR = useRef()

  useFrame(() => {
    // glass room doors swing open during the entry beat (scroll 0.015 → 0.11)
    const o = smooth(clamp01((scroll.p - 0.015) / 0.095))
    if (doorL.current) doorL.current.rotation.y = -o * 1.9
    if (doorR.current) doorR.current.rotation.y = o * 1.9
  })

  const RW = 7, RD = 8, RH = 5 // glass room half-width, half-depth, height

  return (
    <>
      <Environment files="/hdri/studio.hdr" environmentIntensity={0.75} />
      <color attach="background" args={['#080809']} />
      <fog attach="fog" args={['#080809', 20, 60]} />

      {/* lights */}
      <ambientLight intensity={0.22} />
      <spotLight position={[0, 9, 2]} angle={0.55} penumbra={1} intensity={360} distance={40} castShadow
        shadow-mapSize={[2048, 2048]} shadow-bias={-0.0004} color="#fff6ec" />
      <spotLight position={[-8, 6, -7]} angle={0.7} penumbra={1} intensity={130} color="#8fb0ff" />
      <spotLight position={[8, 5, 7]} angle={0.7} penumbra={1} intensity={130} color="#ffd39a" />
      <pointLight position={[0, 4, 9]} intensity={40} color="#fff2df" />

      {/* ---- outer gallery hall ---- */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[120, 120]} />
        <MeshReflectorMaterial resolution={1024} mixBlur={1} mixStrength={5} blur={[400, 120]}
          roughness={0.8} depthScale={1.1} minDepthThreshold={0.3} maxDepthThreshold={1.3}
          color="#0b0b0e" metalness={0.65} mirror={0.4} />
      </mesh>
      {/* ceiling + light strips */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, RH + 1.2, 0]}>
        <planeGeometry args={[120, 120]} />
        <meshStandardMaterial color="#0a0a0d" metalness={0.2} roughness={0.9} side={THREE.DoubleSide} />
      </mesh>
      {[-4, 0, 4].map((x) => (
        <mesh key={x} position={[x, RH + 1.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[1.1, 26]} />
          <meshBasicMaterial color="#fff3e0" toneMapped={false} />
        </mesh>
      ))}
      {/* far back wall of the hall */}
      <mesh position={[0, RH / 2, -26]}>
        <planeGeometry args={[120, RH + 2]} />
        <meshStandardMaterial color="#0c0c10" metalness={0.3} roughness={0.85} />
      </mesh>

      {/* ---- glass pavilion room (contains the car) ---- */}
      <group>
        {/* corner posts */}
        {[[-RW, -RD], [RW, -RD], [-RW, RD], [RW, RD]].map(([x, z], i) => (
          <Bar key={i} position={[x, RH / 2, z]} args={[0.16, RH, 0.16]} />
        ))}
        {/* top + bottom frame rails (front/back/sides) */}
        <Bar position={[0, RH, -RD]} args={[RW * 2, 0.16, 0.16]} />
        <Bar position={[0, RH, RD]} args={[RW * 2, 0.16, 0.16]} />
        <Bar position={[-RW, RH, 0]} args={[0.16, 0.16, RD * 2]} />
        <Bar position={[RW, RH, 0]} args={[0.16, 0.16, RD * 2]} />
        {/* glass: back + two sides */}
        <Glass position={[0, RH / 2, -RD]} rotation={[0, 0, 0]} size={[RW * 2, RH]} />
        <Glass position={[-RW, RH / 2, 0]} rotation={[0, Math.PI / 2, 0]} size={[RD * 2, RH]} />
        <Glass position={[RW, RH / 2, 0]} rotation={[0, -Math.PI / 2, 0]} size={[RD * 2, RH]} />
        {/* front with double glass DOOR (opens) — hinged at the sides */}
        <Glass position={[-RW + 1.6, RH / 2, RD]} rotation={[0, 0, 0]} size={[3.2, RH]} />
        <Glass position={[RW - 1.6, RH / 2, RD]} rotation={[0, 0, 0]} size={[3.2, RH]} />
        {/* door leaves (hinge pivots near the opening gap) */}
        <group ref={doorL} position={[-1.8, 0, RD]}>
          <Glass position={[0.9, RH / 2, 0]} rotation={[0, 0, 0]} size={[1.8, RH - 0.2]} />
          <Bar position={[1.75, RH / 2, 0.02]} args={[0.08, RH - 0.2, 0.08]} />
        </group>
        <group ref={doorR} position={[1.8, 0, RD]}>
          <Glass position={[-0.9, RH / 2, 0]} rotation={[0, 0, 0]} size={[1.8, RH - 0.2]} />
          <Bar position={[-1.75, RH / 2, 0.02]} args={[0.08, RH - 0.2, 0.08]} />
        </group>
        {/* subtle inner platform under the car */}
        <mesh position={[0, 0.02, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[3.6, 64]} />
          <meshStandardMaterial color="#111216" metalness={0.8} roughness={0.3} />
        </mesh>
      </group>
    </>
  )
}
