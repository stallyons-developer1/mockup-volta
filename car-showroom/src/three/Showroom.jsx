import { useRef } from 'react'
import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from '../scroll.js'

const smooth = (t) => t * t * (3 - 2 * t)
const clamp01 = (x) => Math.min(1, Math.max(0, x))

function Glass({ position, rotation, size, opacity = 0.14 }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <meshPhysicalMaterial color="#aec0d2" transmission={0.95} roughness={0.05} thickness={0.4}
        ior={1.4} transparent opacity={opacity} metalness={0} side={THREE.DoubleSide} envMapIntensity={1} />
    </mesh>
  )
}
function Bar({ position, args, color = '#1b1c22' }) {
  return (
    <mesh position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.35} />
    </mesh>
  )
}
// emissive light panel / LED strip (cheap "light")
function Panel({ position, rotation, size, color = '#fff2dc', intensity = 1 }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <meshBasicMaterial color={color} toneMapped={false} opacity={intensity} transparent />
    </mesh>
  )
}

export default function Showroom() {
  const doorL = useRef(), doorR = useRef(), keyLight = useRef()

  useFrame(() => {
    const o = smooth(clamp01((scroll.p - 0.015) / 0.095))
    if (doorL.current) doorL.current.rotation.y = -o * 1.9
    if (doorR.current) doorR.current.rotation.y = o * 1.9
    if (keyLight.current) {
      const rev = smooth(clamp01((scroll.p - 0.13) / 0.14))
      keyLight.current.intensity = 60 + rev * 360
    }
  })

  const RW = 7, RD = 8, RH = 5          // glass room
  const HALLW = 26, HALLD = 30, CH = 6.4 // hall

  return (
    <>
      <Environment files="/hdri/studio.hdr" environmentIntensity={1.15} />
      <color attach="background" args={['#0c0d11']} />
      <fog attach="fog" args={['#0c0d11', 26, 70]} />

      {/* ---- lighting ---- */}
      <ambientLight intensity={0.45} color="#cdd6e3" />
      <hemisphereLight args={['#aebdd0', '#14151b', 0.5]} />
      <spotLight ref={keyLight} position={[0, 9, 2]} angle={0.55} penumbra={1} intensity={60} distance={42} castShadow
        shadow-mapSize={[2048, 2048]} shadow-bias={-0.0004} color="#fff6ec" />
      <spotLight position={[-9, 6.5, 8]} angle={0.7} penumbra={1} intensity={150} color="#bcd0ff" distance={46} />
      <spotLight position={[9, 6, -8]} angle={0.7} penumbra={1} intensity={150} color="#ffcf9a" distance={46} />
      <pointLight position={[0, 4.5, 12]} intensity={55} color="#fff2df" distance={34} />
      <pointLight position={[0, 3, -16]} intensity={40} color="#b9c6ff" distance={30} />

      {/* ---- polished floor ---- */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[130, 130]} />
        <MeshReflectorMaterial resolution={1024} mixBlur={0.9} mixStrength={9} blur={[300, 90]}
          roughness={0.5} depthScale={1.0} minDepthThreshold={0.25} maxDepthThreshold={1.2}
          color="#15161c" metalness={0.85} mirror={0.6} />
      </mesh>

      {/* ---- ceiling with recessed light-panel grid ---- */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, CH, 0]}>
        <planeGeometry args={[HALLW * 2, HALLD * 2]} />
        <meshStandardMaterial color="#0e0f14" metalness={0.3} roughness={0.85} side={THREE.DoubleSide} />
      </mesh>
      {Array.from({ length: 5 }).map((_, i) =>
        Array.from({ length: 4 }).map((_, j) => (
          <Panel key={`${i}-${j}`} position={[-9 + j * 6, CH - 0.05, -10 + i * 5]} rotation={[Math.PI / 2, 0, 0]} size={[3.6, 1.0]} color="#fff3e2" />
        ))
      )}

      {/* ---- walls: dark panels + vertical slats + LED strips ---- */}
      {[
        { pos: [0, CH / 2, -HALLD], rot: [0, 0, 0], w: HALLW * 2 },
        { pos: [-HALLW, CH / 2, 0], rot: [0, Math.PI / 2, 0], w: HALLD * 2 },
        { pos: [HALLW, CH / 2, 0], rot: [0, -Math.PI / 2, 0], w: HALLD * 2 },
      ].map((wall, wi) => (
        <group key={wi} position={wall.pos} rotation={wall.rot}>
          <mesh><planeGeometry args={[wall.w, CH + 2]} /><meshStandardMaterial color="#17181e" metalness={0.5} roughness={0.7} /></mesh>
          {/* vertical slats */}
          {Array.from({ length: Math.floor(wall.w / 1.2) }).map((_, s) => (
            <mesh key={s} position={[-wall.w / 2 + 0.6 + s * 1.2, 0, 0.04]}>
              <boxGeometry args={[0.07, CH, 0.07]} />
              <meshStandardMaterial color="#2a2c34" metalness={0.9} roughness={0.4} />
            </mesh>
          ))}
          {/* horizontal LED strips */}
          <Panel position={[0, CH / 2 - 0.4, 0.06]} size={[wall.w, 0.04]} color="#9fb6e8" intensity={0.9} />
          <Panel position={[0, -CH / 2 + 0.25, 0.06]} size={[wall.w, 0.06]} color="#d8b98a" intensity={0.8} />
        </group>
      ))}

      {/* ---- backlit brand wall accent on the far wall ---- */}
      <Panel position={[0, 3.4, -HALLD + 0.15]} size={[10, 0.12]} color="#d8b36a" intensity={1} />
      <Panel position={[0, 1.2, -HALLD + 0.15]} size={[6, 0.05]} color="#d8b36a" intensity={0.7} />

      {/* ---- display platform + glowing LED ring ---- */}
      <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.7, 72]} />
        <meshStandardMaterial color="#101118" metalness={0.85} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3.55, 3.75, 96]} />
        <meshBasicMaterial color="#e8c079" toneMapped={false} />
      </mesh>

      {/* ---- glass pavilion around the car ---- */}
      <group>
        {[[-RW, -RD], [RW, -RD], [-RW, RD], [RW, RD]].map(([x, z], i) => (
          <Bar key={i} position={[x, RH / 2, z]} args={[0.16, RH, 0.16]} color="#23252d" />
        ))}
        <Bar position={[0, RH, -RD]} args={[RW * 2, 0.16, 0.16]} color="#23252d" />
        <Bar position={[0, RH, RD]} args={[RW * 2, 0.16, 0.16]} color="#23252d" />
        <Bar position={[-RW, RH, 0]} args={[0.16, 0.16, RD * 2]} color="#23252d" />
        <Bar position={[RW, RH, 0]} args={[0.16, 0.16, RD * 2]} color="#23252d" />
        {/* LED trim along the top frame */}
        <Panel position={[0, RH - 0.02, -RD]} size={[RW * 2, 0.05]} color="#bcd0ff" intensity={0.9} />
        <Panel position={[-RW, RH - 0.02, 0]} rotation={[0, Math.PI / 2, 0]} size={[RD * 2, 0.05]} color="#bcd0ff" intensity={0.9} />
        <Panel position={[RW, RH - 0.02, 0]} rotation={[0, -Math.PI / 2, 0]} size={[RD * 2, 0.05]} color="#bcd0ff" intensity={0.9} />
        {/* glass walls (3 sides) */}
        <Glass position={[0, RH / 2, -RD]} rotation={[0, 0, 0]} size={[RW * 2, RH]} />
        <Glass position={[-RW, RH / 2, 0]} rotation={[0, Math.PI / 2, 0]} size={[RD * 2, RH]} />
        <Glass position={[RW, RH / 2, 0]} rotation={[0, -Math.PI / 2, 0]} size={[RD * 2, RH]} />
        {/* front fixed glass + double door */}
        <Glass position={[-RW + 1.6, RH / 2, RD]} size={[3.2, RH]} />
        <Glass position={[RW - 1.6, RH / 2, RD]} size={[3.2, RH]} />
        <group ref={doorL} position={[-1.8, 0, RD]}>
          <Glass position={[0.9, RH / 2, 0]} size={[1.8, RH - 0.2]} />
          <Bar position={[1.75, RH / 2, 0.02]} args={[0.08, RH - 0.2, 0.08]} color="#2a2c34" />
        </group>
        <group ref={doorR} position={[1.8, 0, RD]}>
          <Glass position={[-0.9, RH / 2, 0]} size={[1.8, RH - 0.2]} />
          <Bar position={[-1.75, RH / 2, 0.02]} args={[0.08, RH - 0.2, 0.08]} color="#2a2c34" />
        </group>
      </group>
    </>
  )
}
