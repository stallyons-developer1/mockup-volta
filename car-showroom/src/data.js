// Multi-room showroom: enter the building → a corridor of glass rooms, each with a car.
// Per room: approach → doors open → enter/reveal → exterior & interior features → exit → next room.
// Add/remove ROOMS entries to scale to 5–6 cars (choreography is generated automatically).

export const ROOMS = [
  {
    color: '#9e1122', name: 'Rosso Corsa', code: 'AV-01',
    features: [
      { tag: 'Front', title: 'Sculpted nose & LED matrix', desc: 'Adaptive LED-matrix headlights and an active front splitter channel air into downforce the faster you go.' },
      { tag: 'Aerodynamics', title: 'Wind-shaped flanks', desc: 'Every surface is sculpted in the tunnel; deep side intakes feed cool air to the mid-mounted engine.' },
      { tag: 'Cockpit', title: 'Driver-focused dash', desc: 'A wraparound digital cluster and a squared-off wheel keep every control a fingertip away at 300 km/h.' },
    ],
  },
  {
    color: '#15335f', name: 'Blu Notte', code: 'AV-02',
    features: [
      { tag: 'Front', title: 'Carbon aero splitter', desc: 'A full-carbon front end slices the air and feeds the brakes — track focus wearing a tailored suit.' },
      { tag: 'Wheels', title: 'Forged 20″ alloys', desc: 'Lightweight forged wheels wrap carbon-ceramic brakes — relentless, fade-free stopping, lap after lap.' },
      { tag: 'Cabin', title: 'Midnight leather', desc: 'Hand-stitched navy leather over carbon shells — a cabin that feels like a private jet at speed.' },
    ],
  },
  {
    color: '#c7ccd3', name: 'Argento', code: 'AV-03',
    features: [
      { tag: 'Silhouette', title: 'Liquid-silver body', desc: 'A mirror-polish paint that pours light along every crease — the shape reads even in the dark.' },
      { tag: 'Rear', title: 'Active wing & quad exhaust', desc: 'A deployable rear wing trims drag on the straights; quad titanium pipes give it an unmistakable voice.' },
      { tag: 'Interior', title: 'Driver halo', desc: 'Ambient light rings the cabin; the seats hug you through corners without fatigue on the long drive home.' },
    ],
  },
]

export const SP = 19            // z spacing between rooms
export const roomZ = (i) => -i * SP

function build() {
  const s = []
  // establishing: outside, looking into the lit showroom
  s.push({ pos: [3, 4.2, roomZ(0) + 24], tgt: [0, 2.6, roomZ(0) + 8], phase: 'Entering the Showroom', room: -1 })
  s.push({ pos: [1.4, 3.0, roomZ(0) + 16], tgt: [0, 1.8, roomZ(0) + 4], phase: 'Entering the Showroom', room: -1 })

  ROOMS.forEach((room, i) => {
    const z = roomZ(i)
    s.push({ pos: [2.6, 3.1, z + 12.5], tgt: [0, 1.4, z + 5], phase: room.name, room: i })                                   // approach (doors open)
    s.push({ pos: [4.5, 1.7, z + 6.0], tgt: [0, 0.6, z + 0.4], phase: room.name, room: i })                                  // enter / reveal
    s.push({ pos: [1.9, 0.75, z + 5.6], tgt: [0, 0.6, z + 2.4], phase: room.name, room: i, card: room.features[0], carN: i }) // front
    s.push({ pos: [5.6, 1.0, z + 0.1], tgt: [0, 0.6, z], phase: room.name, room: i, card: room.features[1], carN: i })        // side / aero
    s.push({ pos: [1.35, 1.5, z + 1.0], tgt: [-0.2, 0.98, z + 0.1], phase: room.name, room: i, card: room.features[2], carN: i }) // interior
    s.push({ pos: [1.0, 2.7, z - 8], tgt: [0, 1.5, z - 15], phase: room.name, room: i, exit: true })                          // exit (doors close) → next
  })
  // final: pull back for the collection
  const lastZ = roomZ(ROOMS.length - 1)
  s.push({ pos: [2.5, 3.6, lastZ - 12], tgt: [0, 1.6, lastZ - 4], phase: 'The Collection', room: -1 })

  const n = s.length
  s.forEach((st, idx) => (st.p = idx / (n - 1)))
  return s
}

export const STOPS = build()

// per-room door open window [openP, closeP] (doors swing open across the room's stops)
export const ROOM_DOORS = ROOMS.map((_, i) => {
  const mine = STOPS.filter((s) => s.room === i)
  return { open: mine[0].p - 0.02, close: mine[mine.length - 1].p }
})
