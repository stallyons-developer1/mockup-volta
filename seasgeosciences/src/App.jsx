import { useState } from 'react'
import useSmoothScroll from './hooks/useSmoothScroll.js'
import Cursor from './components/Cursor.jsx'
import Loader from './components/Loader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Clarity from './components/Clarity.jsx'
import ImageBubble from './components/ImageBubble.jsx'
import Values from './components/Values.jsx'
import Services from './components/Services.jsx'
import GlobalReach from './components/GlobalReach.jsx'
import Safety from './components/Safety.jsx'
import Heritage from './components/Heritage.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useSmoothScroll()
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="app">
      <Cursor />
      {!loaded && <Loader onDone={() => setLoaded(true)} />}
      <Nav />
      <main>
        <Hero />
        <Clarity />
        <ImageBubble />
        <Values />
        <Services />
        <GlobalReach />
        <Safety />
        <Heritage />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
