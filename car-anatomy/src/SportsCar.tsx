import React from "react";
import * as THREE from "three";

// ============================================================ TYPES
export interface SportsCarProps { explode?: number; focusPart?: string | null; }
interface PartProps {
  name: string;
  position: [number, number, number];
  offset?: [number, number, number];
  explode: number;
  focused: boolean;
  children: React.ReactNode;
}

// ============================================================ PART INFO
export const CAR_PARTS = [
  { name: "body-shell", description: "Main aerodynamic body shell — a single stressed panel that gives the car its signature silhouette." },
  { name: "hood", description: "Front panel over the frunk; vented to extract heat and push the nose down at speed." },
  { name: "roof-cabin", description: "Roof, windshield and cabin greenhouse — lightweight glass kept low over the roll axis." },
  { name: "left-door", description: "Left passenger door with frameless glass and a flush electronic handle." },
  { name: "right-door", description: "Right passenger door with frameless glass and a flush electronic handle." },
  { name: "front-bumper", description: "Front bumper and splitter assembly — channels air to the radiators and generates downforce." },
  { name: "rear-bumper-diffuser", description: "Rear bumper with an aggressive multi-fin diffuser that seals the underbody airflow." },
  { name: "front-left-wheel", description: "Front-left forged alloy wheel on a low-mass tyre over a carbon-ceramic brake." },
  { name: "front-right-wheel", description: "Front-right forged alloy wheel on a low-mass tyre over a carbon-ceramic brake." },
  { name: "rear-left-wheel", description: "Rear-left drive wheel — wider tyre to put the engine's torque to the road." },
  { name: "rear-right-wheel", description: "Rear-right drive wheel — wider tyre to put the engine's torque to the road." },
  { name: "engine-block", description: "Mid-mounted engine assembly with exposed cylinders — the beating heart of the machine." },
  { name: "driver-seat", description: "Driver's one-piece bucket seat, carbon-shelled and wrapped in hand-stitched leather." },
  { name: "passenger-seat", description: "Passenger bucket seat, mirroring the driver's for perfect symmetry." },
  { name: "dashboard-steering", description: "Dashboard, digital instrument cluster and squared-off racing steering wheel." },
  { name: "rear-spoiler", description: "Active rear wing that trims drag on the straights and adds grip under braking." },
  { name: "left-headlight", description: "Left LED matrix headlight — adaptive beams that read the road ahead." },
  { name: "right-headlight", description: "Right LED matrix headlight — adaptive beams that read the road ahead." },
  { name: "left-taillight", description: "Left rear LED light bar with integrated brake and indicator signatures." },
  { name: "right-taillight", description: "Right rear LED light bar with integrated brake and indicator signatures." },
  { name: "chassis-floor", description: "Lower structural chassis and floor — the backbone every other part mounts to." },
] as const;

// ============================================================ MATERIALS
const COLORS = {
  red: "#c71927", redDark: "#850e19", black: "#17191d", rubber: "#101113",
  metal: "#aeb5bd", silver: "#c9cdd2", glass: "#263f50", white: "#ffffff",
  headlight: "#d9f5ff", tail: "#ff202b", seat: "#292b30", engine: "#626970",
};
function standardMaterial(color: string, metalness = 0, roughness = 0.5, dim = false) {
  return (
    <meshStandardMaterial color={dim ? "#242424" : color} metalness={metalness}
      roughness={roughness} transparent={dim} opacity={dim ? 0.18 : 1} />
  );
}

// ============================================================ PART GROUP
function Part({ name, position, offset = [0, 0, 0], explode, focused, children }: PartProps) {
  return (
    <group name={name} position={[
      position[0] + offset[0] * explode,
      position[1] + offset[1] * explode,
      position[2] + offset[2] * explode,
    ]}>
      {children}
    </group>
  );
}

// ============================================================ WHEEL
function Wheel({ name, position, offset, explode, focused }: Pick<PartProps, "name" | "position" | "offset" | "explode" | "focused">) {
  const dim = !focused;
  return (
    <Part name={name} position={position} offset={offset} explode={explode} focused={focused}>
      <mesh name={`${name}-tyre`} rotation={[0, 0, Math.PI / 2]} castShadow receiveShadow>
        <cylinderGeometry args={[0.42, 0.42, 0.27, 16]} />
        {standardMaterial(COLORS.rubber, 0, 0.92, dim)}
      </mesh>
      <mesh name={`${name}-rim`} position={[0.145, 0, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.265, 0.265, 0.025, 16]} />
        {standardMaterial(COLORS.silver, 0.9, 0.24, dim)}
      </mesh>
      <mesh name={`${name}-inner-rim`} position={[0.16, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.14, 0.14, 0.03, 16]} />
        {standardMaterial(COLORS.black, 0.7, 0.3, dim)}
      </mesh>
      <mesh name={`${name}-hub`} position={[0.185, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.075, 0.075, 0.045, 12]} />
        {standardMaterial(COLORS.metal, 0.95, 0.2, dim)}
      </mesh>
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        return (
          <mesh key={i} name={`${name}-spoke-${i + 1}`}
            position={[0.17, Math.cos(angle) * 0.145, Math.sin(angle) * 0.145]} rotation={[angle, 0, 0]}>
            <boxGeometry args={[0.035, 0.23, 0.035]} />
            {standardMaterial(COLORS.silver, 0.9, 0.25, dim)}
          </mesh>
        );
      })}
    </Part>
  );
}

// ============================================================ SEAT
function Seat({ dim }: { dim: boolean }) {
  return (
    <>
      <mesh name="seat-base" position={[0, 0.2, 0.05]} castShadow>
        <boxGeometry args={[0.48, 0.16, 0.58]} />{standardMaterial(COLORS.seat, 0.1, 0.8, dim)}
      </mesh>
      <mesh name="seat-back" position={[0, 0.55, -0.17]} rotation={[-0.12, 0, 0]} castShadow>
        <boxGeometry args={[0.47, 0.72, 0.2]} />{standardMaterial(COLORS.seat, 0.1, 0.75, dim)}
      </mesh>
      <mesh name="seat-headrest" position={[0, 0.95, -0.16]}>
        <boxGeometry args={[0.3, 0.19, 0.18]} />{standardMaterial(COLORS.redDark, 0.1, 0.65, dim)}
      </mesh>
    </>
  );
}

// ============================================================ MAIN CAR
export function SportsCar({ explode = 0, focusPart = null }: SportsCarProps) {
  const e = THREE.MathUtils.clamp(explode, 0, 1);
  const isFocused = (name: string) => focusPart === null || focusPart === name;

  return (
    <group name="sports-car" dispose={null}>
      <Part name="body-shell" position={[0, 0.76, 0]} offset={[0, 0.65, 0]} explode={e} focused={isFocused("body-shell")}>
        <mesh name="body-shell-main" castShadow receiveShadow><boxGeometry args={[1.85, 0.43, 3.65]} />{standardMaterial(COLORS.red, 0.55, 0.3, !isFocused("body-shell"))}</mesh>
        {[-1, 1].map((side) => (
          <mesh key={side} name={`body-side-skirt-${side}`} position={[side * 0.94, -0.12, 0]} castShadow>
            <boxGeometry args={[0.1, 0.16, 2.8]} />{standardMaterial(COLORS.black, 0.4, 0.4, !isFocused("body-shell"))}
          </mesh>
        ))}
        <mesh name="rear-body-deck" position={[0, 0.1, -1.35]}><boxGeometry args={[1.7, 0.15, 0.8]} />{standardMaterial(COLORS.red, 0.55, 0.3, !isFocused("body-shell"))}</mesh>
      </Part>

      <Part name="hood" position={[0, 0.98, 1.25]} offset={[0, 0.75, 0.12]} explode={e} focused={isFocused("hood")}>
        <mesh name="hood-panel" castShadow receiveShadow><boxGeometry args={[1.7, 0.13, 1.1]} />{standardMaterial(COLORS.red, 0.55, 0.28, !isFocused("hood"))}</mesh>
        {[-1, 1].map((side) => (
          <mesh key={side} name={`hood-crease-${side}`} position={[side * 0.55, 0.07, 0]}>
            <boxGeometry args={[0.025, 0.012, 0.85]} />{standardMaterial(COLORS.redDark, 0.4, 0.4, !isFocused("hood"))}
          </mesh>
        ))}
      </Part>

      <Part name="roof-cabin" position={[0, 1.12, -0.12]} offset={[0, 1.15, 0]} explode={e} focused={isFocused("roof-cabin")}>
        <mesh name="cabin-roof" position={[0, 0.78, -0.05]} castShadow><boxGeometry args={[1.28, 0.13, 1.35]} />{standardMaterial(COLORS.red, 0.5, 0.3, !isFocused("roof-cabin"))}</mesh>
        <mesh name="front-windshield" position={[0, 0.37, 0.59]} rotation={[-0.47, 0, 0]}><boxGeometry args={[1.42, 0.09, 0.82]} />{standardMaterial(COLORS.glass, 0.65, 0.18, !isFocused("roof-cabin"))}</mesh>
        <mesh name="rear-windshield" position={[0, 0.37, -0.69]} rotation={[0.47, 0, 0]}><boxGeometry args={[1.35, 0.08, 0.7]} />{standardMaterial(COLORS.glass, 0.65, 0.18, !isFocused("roof-cabin"))}</mesh>
        {[-1, 1].map((side) => (
          <React.Fragment key={side}>
            <mesh name={`front-pillar-${side}`} position={[side * 0.66, 0.4, 0.53]} rotation={[-0.47, 0, 0]}><boxGeometry args={[0.09, 0.85, 0.1]} />{standardMaterial(COLORS.red, 0.5, 0.3, !isFocused("roof-cabin"))}</mesh>
            <mesh name={`rear-pillar-${side}`} position={[side * 0.63, 0.4, -0.64]} rotation={[0.47, 0, 0]}><boxGeometry args={[0.09, 0.85, 0.1]} />{standardMaterial(COLORS.red, 0.5, 0.3, !isFocused("roof-cabin"))}</mesh>
          </React.Fragment>
        ))}
      </Part>

      {([-1, 1] as const).map((side) => {
        const name = side === -1 ? "left-door" : "right-door";
        return (
          <Part key={name} name={name} position={[side * 0.96, 0.78, -0.05]} offset={[side * 0.95, 0.05, 0]} explode={e} focused={isFocused(name)}>
            <mesh name={`${name}-panel`} castShadow><boxGeometry args={[0.13, 0.43, 1.3]} />{standardMaterial(COLORS.red, 0.5, 0.3, !isFocused(name))}</mesh>
            <mesh name={`${name}-window-trim`} position={[0, 0.32, 0]}><boxGeometry args={[0.09, 0.025, 1.12]} />{standardMaterial(COLORS.black, 0.5, 0.3, !isFocused(name))}</mesh>
            <mesh name={`${name}-handle`} position={[side * 0.075, 0.06, 0.35]}><boxGeometry args={[0.035, 0.04, 0.2]} />{standardMaterial(COLORS.metal, 0.9, 0.2, !isFocused(name))}</mesh>
          </Part>
        );
      })}

      <Part name="front-bumper" position={[0, 0.59, 1.93]} offset={[0, -0.12, 0.55]} explode={e} focused={isFocused("front-bumper")}>
        <mesh name="front-bumper-main" castShadow><boxGeometry args={[1.95, 0.3, 0.28]} />{standardMaterial(COLORS.black, 0.45, 0.38, !isFocused("front-bumper"))}</mesh>
        <mesh name="front-grille" position={[0, 0, 0.15]}><boxGeometry args={[0.9, 0.13, 0.025]} />{standardMaterial(COLORS.rubber, 0.2, 0.65, !isFocused("front-bumper"))}</mesh>
        {[-1, 1].map((side) => (<mesh key={side} name={`front-air-intake-${side}`} position={[side * 0.67, -0.02, 0.16]}><boxGeometry args={[0.32, 0.15, 0.04]} />{standardMaterial(COLORS.black, 0.2, 0.7, !isFocused("front-bumper"))}</mesh>))}
      </Part>

      <Part name="rear-bumper-diffuser" position={[0, 0.58, -1.92]} offset={[0, -0.12, -0.55]} explode={e} focused={isFocused("rear-bumper-diffuser")}>
        <mesh name="rear-bumper-main" castShadow><boxGeometry args={[1.95, 0.3, 0.3]} />{standardMaterial(COLORS.black, 0.5, 0.4, !isFocused("rear-bumper-diffuser"))}</mesh>
        <mesh name="rear-diffuser"><boxGeometry args={[1.55, 0.12, 0.4]} />{standardMaterial(COLORS.black, 0.7, 0.4, !isFocused("rear-bumper-diffuser"))}</mesh>
        {[-0.5, 0, 0.5].map((x, i) => (<mesh key={i} name={`diffuser-fin-${i + 1}`} position={[x, -0.11, 0]}><boxGeometry args={[0.035, 0.2, 0.4]} />{standardMaterial(COLORS.metal, 0.8, 0.35, !isFocused("rear-bumper-diffuser"))}</mesh>))}
      </Part>

      <Wheel name="front-left-wheel" position={[-1.02, 0.42, 1.32]} offset={[-0.75, 0, 0]} explode={e} focused={isFocused("front-left-wheel")} />
      <Wheel name="front-right-wheel" position={[1.02, 0.42, 1.32]} offset={[0.75, 0, 0]} explode={e} focused={isFocused("front-right-wheel")} />
      <Wheel name="rear-left-wheel" position={[-1.02, 0.42, -1.32]} offset={[-0.75, 0, 0]} explode={e} focused={isFocused("rear-left-wheel")} />
      <Wheel name="rear-right-wheel" position={[1.02, 0.42, -1.32]} offset={[0.75, 0, 0]} explode={e} focused={isFocused("rear-right-wheel")} />

      <Part name="engine-block" position={[0, 0.91, 1.05]} offset={[0, -0.65, 0.3]} explode={e} focused={isFocused("engine-block")}>
        <mesh name="engine-main" castShadow><boxGeometry args={[0.9, 0.38, 0.8]} />{standardMaterial(COLORS.engine, 0.85, 0.35, !isFocused("engine-block"))}</mesh>
        <mesh name="engine-cover" position={[0, 0.22, 0]}><boxGeometry args={[0.65, 0.12, 0.55]} />{standardMaterial(COLORS.redDark, 0.55, 0.35, !isFocused("engine-block"))}</mesh>
        {[-0.25, 0, 0.25].map((x, i) => (<mesh key={i} name={`engine-cylinder-${i + 1}`} position={[x, 0.3, 0]}><cylinderGeometry args={[0.07, 0.07, 0.15, 10]} />{standardMaterial(COLORS.metal, 0.9, 0.3, !isFocused("engine-block"))}</mesh>))}
      </Part>

      <Part name="driver-seat" position={[-0.42, 0.68, -0.25]} offset={[-0.35, -0.5, 0]} explode={e} focused={isFocused("driver-seat")}><Seat dim={!isFocused("driver-seat")} /></Part>
      <Part name="passenger-seat" position={[0.42, 0.68, -0.25]} offset={[0.35, -0.5, 0]} explode={e} focused={isFocused("passenger-seat")}><Seat dim={!isFocused("passenger-seat")} /></Part>

      <Part name="dashboard-steering" position={[0, 1.0, 0.75]} offset={[0, -0.3, 0.5]} explode={e} focused={isFocused("dashboard-steering")}>
        <mesh name="dashboard-main" castShadow><boxGeometry args={[1.6, 0.22, 0.35]} />{standardMaterial(COLORS.black, 0.3, 0.65, !isFocused("dashboard-steering"))}</mesh>
        <mesh name="instrument-screen" position={[-0.35, 0.13, 0.03]}><boxGeometry args={[0.42, 0.13, 0.035]} />{standardMaterial(COLORS.glass, 0.4, 0.2, !isFocused("dashboard-steering"))}</mesh>
        <mesh name="steering-wheel" position={[-0.45, -0.02, 0.34]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.2, 0.025, 10, 20]} />{standardMaterial(COLORS.black, 0.3, 0.55, !isFocused("dashboard-steering"))}</mesh>
        <mesh name="steering-column" position={[-0.45, -0.02, 0.21]}><cylinderGeometry args={[0.035, 0.035, 0.22, 10]} />{standardMaterial(COLORS.metal, 0.8, 0.3, !isFocused("dashboard-steering"))}</mesh>
      </Part>

      <Part name="rear-spoiler" position={[0, 1.12, -2.0]} offset={[0, 0.75, -0.2]} explode={e} focused={isFocused("rear-spoiler")}>
        <mesh name="spoiler-wing" castShadow><boxGeometry args={[1.95, 0.1, 0.35]} />{standardMaterial(COLORS.black, 0.75, 0.25, !isFocused("rear-spoiler"))}</mesh>
        {[-0.65, 0.65].map((x, i) => (<mesh key={i} name={`spoiler-support-${i + 1}`} position={[x, -0.17, 0]}><boxGeometry args={[0.07, 0.35, 0.1]} />{standardMaterial(COLORS.metal, 0.85, 0.25, !isFocused("rear-spoiler"))}</mesh>))}
      </Part>

      {([["left-headlight", -0.58, 0.4, COLORS.headlight], ["right-headlight", 0.58, 0.4, COLORS.headlight]] as const).map(([nm, x, oz, c]) => (
        <Part key={nm} name={nm} position={[x, 0.9, 1.85]} offset={[x < 0 ? -0.15 : 0.15, 0.25, oz]} explode={e} focused={isFocused(nm)}>
          <mesh name={`${nm}-housing`}><boxGeometry args={[0.48, 0.12, 0.13]} />{standardMaterial(COLORS.black, 0.7, 0.25, !isFocused(nm))}</mesh>
          <mesh name={`${nm}-lens`} position={[0, 0, 0.075]}><boxGeometry args={[0.38, 0.055, 0.025]} />{standardMaterial(c, 0.25, 0.15, !isFocused(nm))}</mesh>
        </Part>
      ))}

      {([["left-taillight", -0.62], ["right-taillight", 0.62]] as const).map(([nm, x]) => (
        <Part key={nm} name={nm} position={[x, 0.91, -1.86]} offset={[x < 0 ? -0.15 : 0.15, 0.25, -0.4]} explode={e} focused={isFocused(nm)}>
          <mesh name={`${nm}-housing`}><boxGeometry args={[0.48, 0.12, 0.1]} />{standardMaterial(COLORS.black, 0.7, 0.25, !isFocused(nm))}</mesh>
          <mesh name={`${nm}-lens`} position={[0, 0, -0.06]}><boxGeometry args={[0.38, 0.055, 0.025]} />{standardMaterial(COLORS.tail, 0.25, 0.2, !isFocused(nm))}</mesh>
        </Part>
      ))}

      <Part name="chassis-floor" position={[0, 0.42, 0]} offset={[0, -0.9, 0]} explode={e} focused={isFocused("chassis-floor")}>
        <mesh name="chassis-main" castShadow receiveShadow><boxGeometry args={[1.65, 0.14, 3.25]} />{standardMaterial(COLORS.black, 0.75, 0.5, !isFocused("chassis-floor"))}</mesh>
        {[-0.65, 0.65].map((x, i) => (<mesh key={i} name={`chassis-rail-${i + 1}`} position={[x, -0.1, 0]}><boxGeometry args={[0.1, 0.12, 3.1]} />{standardMaterial(COLORS.metal, 0.8, 0.4, !isFocused("chassis-floor"))}</mesh>))}
      </Part>
    </group>
  );
}
