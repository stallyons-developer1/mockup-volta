import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { initScroll, onProgress } from './scroll.js'
import Bugatti from './three/Bugatti.jsx'
import Rig from './Rig.jsx'
import BottomNav from './components/BottomNav.jsx'
import Menu from './components/Menu.jsx'
import { BRAND, HERO, OVERVIEW, STATS, DIS_HEAD, DIS_CARDS, ASSEMBLY, SPECS, FOOTER } from './site.js'

// Clean, bright seamless studio — the car sits in light space, camera does the drama.
// (HDRI drives reflections only; a solid bg + fog gives a seamless cyclorama, no muddy horizon.)
function Scene() {
  return (
    <>
      <color attach="background" args={['#edeef2']} />
      <fog attach="fog" args={['#edeef2', 15, 46]} />
      <Environment files="/studio.hdr" environmentIntensity={1.15} />
      <ambientLight intensity={0.55} color="#eef2f8" />
      <directionalLight position={[6, 10, 7]} intensity={3.0} color="#fff8f0" />
      <directionalLight position={[-7, 5, -4]} intensity={1.1} color="#dce8ff" />
      <pointLight position={[0, 3, 9]} intensity={26} color="#ffffff" distance={34} />
      {/* subtle reflective studio floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[160, 160]} />
        <meshStandardMaterial color="#e3e4ea" metalness={0.32} roughness={0.5} envMapIntensity={1} />
      </mesh>
      <ContactShadows position={[0, 0, 0]} opacity={0.56} scale={24} blur={2.8} far={9} resolution={512} color="#14141b" />
    </>
  )
}

const Mark = () => (
  <svg className="topbar__mark" viewBox="0 0 34 14" fill="none" aria-hidden>
    <path d="M1 7 Q6 1 11 7 T21 7 T31 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export default function App() {
  const [launched, setLaunched] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const heroRef = useRef()

  useEffect(() => {
    document.body.classList.toggle('locked', !launched)
    if (!launched) return
    const off = initScroll()
    // hand focus from the hero wordmark to the car: fade the hero out as scroll begins
    // (opacity only — a transform would shift the data-stage marker's rect)
    const un = onProgress((p) => {
      if (heroRef.current) heroRef.current.style.opacity = Math.max(0, 1 - p / 0.06)
    })
    return () => { off && off(); un() }
  }, [launched])

  return (
    <>
      {/* persistent 3D car behind everything */}
      <div className="stage">
        <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.35, 10.1], fov: 40 }}
          gl={{ antialias: true, powerPreference: 'high-performance', toneMapping: 4, toneMappingExposure: 1.05 }}>
          <Suspense fallback={null}>
            <Scene />
            <Bugatti />
          </Suspense>
          <Rig />
        </Canvas>
      </div>

      {/* launch gate */}
      <div className={`gate ${launched ? 'gate--gone' : ''}`}>
        <button className="gate__btn" onClick={() => setLaunched(true)}>
          <span className="gate__sq" />
          <span className="gate__label">Launch Experience</span>
        </button>
      </div>

      {/* top bar */}
      <header className="topbar">
        <div className="topbar__brand">{BRAND}</div>
        <Mark />
      </header>

      <main className="page" id="top">
        {/* 1 · HERO — bright studio, dark type */}
        <section className="sec sec--studio sec--hero" ref={heroRef} style={{ willChange: 'opacity, transform' }}>
          <div className="hero__eyebrow" data-stage>{HERO.eyebrow.split('·')[0]}· <b>Bugatti</b></div>
          <div>
            <div className="hero__word">{HERO.word}<sup>SS</sup></div>
            <div className="scrollcue"><i />{HERO.cta}</div>
          </div>
        </section>

        {/* 2 · OVERVIEW — bright studio, car left */}
        <section className="sec sec--studio" id="overview">
          <div className="panel panel--right" data-stage>
            <span className="eyebrow">{OVERVIEW.eyebrow}</span>
            <h2 className="title">{OVERVIEW.title[0]}<br />{OVERVIEW.title[1]}</h2>
            <p className="lead">{OVERVIEW.lead}</p>
          </div>
        </section>

        {/* 3 · STATS (light, no car) */}
        <section className="sec sec--light">
          <div className="statgrid">
            {STATS.big.map(([v, l]) => (
              <div className="stat" key={l}><b>{v}</b><span>{l}</span></div>
            ))}
            <div className="featuring">
              <h3>Featuring</h3>
              {STATS.featuring.map((f) => <p key={f}>{f}</p>)}
            </div>
          </div>
        </section>

        {/* 4 · ANATOMY — camera flies into subsystems; dark cards read on any lighting */}
        <section className="sec sec--dis" id="anatomy">
          <div className="dis-head">
            <div className="ghost" style={{ top: '18%' }}>{DIS_HEAD.ghost}</div>
            <span className="eyebrow">{DIS_HEAD.eyebrow}</span>
            <h2 className="title">{DIS_HEAD.title}</h2>
          </div>
          {DIS_CARDS.map((c) => (
            <div className="dis-beat" key={c.n}>
              <article className="card" data-stage>
                <span className="card__n">{c.n}</span>
                <span className="eyebrow" style={{ marginLeft: 12 }}>{c.eyebrow}</span>
                <h3 className="card__title">{c.title}</h3>
                <p className="lead">{c.lead}</p>
                <span className="card__cta">{c.cta} <b>›</b></span>
              </article>
            </div>
          ))}
        </section>

        {/* 5 · ASSEMBLY — bright studio, car right */}
        <section className="sec sec--studio">
          <div className="panel panel--left" data-stage>
            <span className="eyebrow">{ASSEMBLY.eyebrow}</span>
            <h2 className="title">{ASSEMBLY.title[0]}<br />{ASSEMBLY.title[1]}</h2>
            <p className="lead">{ASSEMBLY.lead}</p>
          </div>
        </section>

        {/* 6 · SPECS (light, no car) */}
        <section className="sec--specs sec--light" id="specs">
          <div className="ghost" style={{ top: '8%', color: 'rgba(0,0,0,.05)' }}>{SPECS.ghost}</div>
          <div className="specwrap">
            <span className="eyebrow">Full specification</span>
            <h2 className="title" style={{ marginBottom: '2.4rem' }}>{SPECS.title}</h2>
            <dl>
              {SPECS.rows.map(([k, v]) => (
                <div className="specrow" key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </div>
        </section>

        {/* 7 · FOOTER (black, small car right) */}
        <footer className="footer" id="contact">
          <div className="footer__word" data-stage>{BRAND}</div>
          <div className="footer__grid">
            <div className="footer__col">
              <h4>Connect</h4>
              {FOOTER.socials.map((s) => <a key={s} href="#">{s}</a>)}
            </div>
            <div className="footer__col">
              <h4>Explore</h4>
              {FOOTER.links.map((l) => <a key={l} href="#">{l} <b>↗</b></a>)}
            </div>
            <div className="footer__col">
              <h4>Studio</h4>
              <a href="#">{FOOTER.made}</a>
            </div>
          </div>
          <div className="footer__legal"><span>{FOOTER.legal}</span><span>Anatomy of a Machine</span></div>
        </footer>
      </main>

      <BottomNav onMenu={() => setMenuOpen((o) => !o)} menuOpen={menuOpen} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
