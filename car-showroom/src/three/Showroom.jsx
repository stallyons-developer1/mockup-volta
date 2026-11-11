import { useMemo, useRef } from 'react'
import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { scroll } from '../scroll.js'
import { ROOMS, roomZ, ROOM_DOORS, STOPS } from '../data.js'

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
function Bar({ position, args, color = '#23252d' }) {
  return <mesh position={position}><boxGeometry args={args} /><meshStandardMaterial color={color} metalness={0.9} roughness={0.35} /></mesh>
}
function Panel({ position, rotation, size, color = '#fff2dc', intensity = 1 }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={size} />
      <meshBasicMaterial color={color} toneMapped={false} opacity={intensity} transparent />
    </mesh>
  )
}

const RW = 6.2, RD = 6.5, RH = 5     // glass room half-dims
const HALLW = 9                       // hall half-width
const CH = 6.4                        // ceiling height
const Z_FRONT = 17
const Z_BACK = roomZ(ROOMS.length - 1) - 15
const HALL_LEN = Z_FRONT - Z_BACK
const HALL_MID = (Z_FRONT + Z_BACK) / 2

export default function Showroom() {
  const doors = useRef([])
  const keyLight = useRef()

  useFrame(() => {
    const p = scroll.p
    // per-room doors swing open across their window, close after
    ROOM_DOORS.forEach((win, i) => {
      const d = doors.current[i]
      if (!d) return
      const openIn = smooth(clamp01((p - win.open) / 0.03))
      const closeOut = smooth(clamp01((win.close - p) / 0.02))
      const o = Math.min(openIn, closeOut) * 1.9
      if (d.L) d.L.rotation.y = -o
      if (d.R) d.R.rotation.y = o
    })
    // key spotlight follows the active room (nearest stop with a room)
    if (keyLight.current) {
      let nearest = STOPS[0], bd = Infinity
      for (const s of STOPS) { if (s.room < 0) continue; const d = Math.abs(p - s.p); if (d < bd) { bd = d; nearest = s } }
      const targetZ = roomZ(Math.max(0, nearest.room))
      keyLight.current.position.z = THREE.MathUtils.lerp(keyLight.current.position.z, targetZ, 0.07)
    }
  })

  const ceilingPanels = useMemo(() => {
    const out = []
    const rows = Math.ceil(HALL_LEN / 5)
    for (let r = 0; r < rows; r++) for (let j = 0; j < 3; j++) out.push([-5 + j * 5, Z_FRONT - 2.5 - r * 5])
    return out
  }, [])

  return (
    <>
      <Environment files="/hdri/studio.hdr" environmentIntensity={1.1} />
      <color attach="background" args={['#0c0d11']} />
      <fog attach="fog" args={['#0c0d11', 30, 85]} />

      <ambientLight intensity={0.42} color="#cdd6e3" />
      <hemisphereLight args={['#aebdd0', '#14151b', 0.45]} />
      <spotLight ref={keyLight} position={[0, 9, 0]} angle={0.6} penumbra={1} intensity={340} distance={34} castShadow
        shadow-mapSize={[2048, 2048]} shadow-bias={-0.0004} color="#fff6ec" />
      <pointLight position={[0, 4.5, Z_FRONT]} intensity={60} color="#fff2df" distance={34} />
      <pointLight position={[0, 4, Z_BACK]} intensity={45} color="#b9c6ff" distance={34} />

      {/* polished floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, HALL_MID]} receiveShadow>
        <planeGeometry args={[60, HALL_LEN + 40]} />
        <MeshReflectorMaterial resolution={1024} mixBlur={0.9} mixStrength={9} blur={[300, 90]}
          roughness={0.5} depthScale={1.0} minDepthThreshold={0.25} maxDepthThreshold={1.2}
          color="#15161c" metalness={0.85} mirror={0.6} />
      </mesh>

      {/* ceiling + light panels */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, CH, HALL_MID]}>
        <planeGeometry args={[40, HALL_LEN + 30]} />
        <meshStandardMaterial color="#0e0f14" metalness={0.3} roughness={0.85} side={THREE.DoubleSide} />
      </mesh>
      {ceilingPanels.map(([x, z], k) => (
        <Panel key={k} position={[x, CH - 0.05, z]} rotation={[Math.PI / 2, 0, 0]} size={[3.4, 1.0]} color="#fff3e2" />
      ))}

      {/* long side walls with slats + LED strips */}
      {[-HALLW, HALLW].map((x, wi) => (
        <group key={wi} position={[x, CH / 2, HALL_MID]} rotation={[0, x < 0 ? Math.PI / 2 : -Math.PI / 2, 0]}>
          <mesh><planeGeometry args={[HALL_LEN + 30, CH + 2]} /><meshStandardMaterial color="#17181e" metalness={0.5} roughness={0.7} /></mesh>
          {Array.from({ length: Math.floor((HALL_LEN + 28) / 1.4) }).map((_, s) => (
            <mesh key={s} position={[-(HALL_LEN + 28) / 2 + 0.7 + s * 1.4, 0, 0.04]}>
              <boxGeometry args={[0.07, CH, 0.07]} /><meshStandardMaterial color="#2a2c34" metalness={0.9} roughness={0.4} />
            </mesh>
          ))}
          <Panel position={[0, CH / 2 - 0.4, 0.06]} size={[HALL_LEN + 30, 0.04]} color="#9fb6e8" intensity={0.9} />
          <Panel position={[0, -CH / 2 + 0.25, 0.06]} size={[HALL_LEN + 30, 0.06]} color="#d8b98a" intensity={0.8} />
        </group>
      ))}
      {/* far back wall */}
      <mesh position={[0, CH / 2, Z_BACK - 1]}><planeGeometry args={[40, CH + 2]} /><meshStandardMaterial color="#141519" metalness={0.4} roughness={0.75} /></mesh>
      <Panel position={[0, 3.2, Z_BACK - 0.9]} size={[9, 0.12]} color="#d8b36a" intensity={1} />

      {/* ---- rooms ---- */}
      {ROOMS.map((room, i) => {
        const z = roomZ(i)
        if (!doors.current[i]) doors.current[i] = {}
        return (
          <group key={i} position={[0, 0, z]}>
            {/* frame posts + rails */}
            {[[-RW, -RD], [RW, -RD], [-RW, RD], [RW, RD]].map(([x, zz], k) => <Bar key={k} position={[x, RH / 2, zz]} args={[0.16, RH, 0.16]} />)}
            <Bar position={[0, RH, -RD]} args={[RW * 2, 0.16, 0.16]} />
            <Bar position={[0, RH, RD]} args={[RW * 2, 0.16, 0.16]} />
            <Bar position={[-RW, RH, 0]} args={[0.16, 0.16, RD * 2]} />
            <Bar position={[RW, RH, 0]} args={[0.16, 0.16, RD * 2]} />
            <Panel position={[0, RH - 0.02, -RD]} size={[RW * 2, 0.05]} color="#bcd0ff" intensity={0.9} />
            <Panel position={[-RW, RH - 0.02, 0]} rotation={[0, Math.PI / 2, 0]} size={[RD * 2, 0.05]} color="#bcd0ff" intensity={0.9} />
            <Panel position={[RW, RH - 0.02, 0]} rotation={[0, -Math.PI / 2, 0]} size={[RD * 2, 0.05]} color="#bcd0ff" intensity={0.9} />
            {/* glass: back + sides */}
            <Glass position={[0, RH / 2, -RD]} size={[RW * 2, RH]} />
            <Glass position={[-RW, RH / 2, 0]} rotation={[0, Math.PI / 2, 0]} size={[RD * 2, RH]} />
            <Glass position={[RW, RH / 2, 0]} rotation={[0, -Math.PI / 2, 0]} size={[RD * 2, RH]} />
            {/* front fixed glass + double door */}
            <Glass position={[-RW + 1.4, RH / 2, RD]} size={[2.8, RH]} />
            <Glass position={[RW - 1.4, RH / 2, RD]} size={[2.8, RH]} />
            <group ref={(el) => (doors.current[i].L = el)} position={[-1.6, 0, RD]}>
              <Glass position={[0.8, RH / 2, 0]} size={[1.6, RH - 0.2]} />
              <Bar position={[1.55, RH / 2, 0.02]} args={[0.08, RH - 0.2, 0.08]} color="#2a2c34" />
            </group>
            <group ref={(el) => (doors.current[i].R = el)} position={[1.6, 0, RD]}>
              <Glass position={[-0.8, RH / 2, 0]} size={[1.6, RH - 0.2]} />
              <Bar position={[-1.55, RH / 2, 0.02]} args={[0.08, RH - 0.2, 0.08]} color="#2a2c34" />
            </group>
            {/* platform + glowing ring */}
            <mesh position={[0, 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}><circleGeometry args={[3.5, 64]} /><meshStandardMaterial color="#101118" metalness={0.85} roughness={0.25} /></mesh>
            <mesh position={[0, 0.05, 0]} rotation={[-Math.PI / 2, 0, 0]}><ringGeometry args={[3.35, 3.55, 96]} /><meshBasicMaterial color="#e8c079" toneMapped={false} /></mesh>
            {/* room code */}
            <Panel position={[0, 4.4, -RD + 0.1]} size={[2.2, 0.08]} color="#d8b36a" intensity={0.9} />
          </group>
        )
      })}
    </>
  )
}
