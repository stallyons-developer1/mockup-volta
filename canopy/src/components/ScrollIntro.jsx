import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IDENTITY, STATEMENT2, INTRO_TITLE, STATEMENT } from '../data/content.js'

// Pinned, multi-screen introduction. Three serif statements reveal
// word-by-word (blur-up), the organic-masked image frames cross-fade AND
// relocate as you scroll, and a 01/02/03 progress ticks along. Original copy,
// original clip shapes, free-licensed imagery.
function Words({ text, accent = [] }) {
  return text.split(' ').map((w, i) => {
    const clean = w.replace(/[^a-z]/gi, '').toLowerCase()
    return (
      <span className="w" key={i}>
        {accent.includes(clean) ? <em>{w}</em> : w}{' '}
      </span>
    )
  })
}

export default function ScrollIntro() {
  const section = useRef(null)
  const stage = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.sintro .w', { opacity: 0, filter: 'blur(6px)', y: 28 })
      gsap.set('.n2, .n3', { opacity: 0, yPercent: 100 })

      const tl = gsap.timeline({
        scrollTrigger: { trigger: section.current, start: 'top top', end: '+=340%', scrub: 1, pin: stage.current, anticipatePin: 1, invalidateOnRefresh: true },
      })
      const show = (sel) => tl.to(sel, { opacity: 1, filter: 'blur(0px)', y: 0, stagger: 0.03, duration: 0.8 })
      const hide = (sel) => tl.to(sel, { opacity: 0, filter: 'blur(6px)', y: -24, stagger: 0.012, duration: 0.5 })

      // ---- SCREEN 1 ----
      show('.s1 .w')
      tl.to('.rail i', { scaleX: 0.08, duration: 0.6 }, '<')
      tl.to({}, { duration: 0.5 })

      // ---- transition 1 → 2 : text/numbers swap first, images follow with a delay ----
      hide('.s1 .w')
      tl.to('.n1', { opacity: 0, yPercent: -100, duration: 0.3 }, '<')
      tl.to('.n2', { opacity: 1, yPercent: 0, duration: 0.3 }, '<')
      tl.to('.rail i', { scaleX: 0.55, duration: 0.6 }, '<')
      // delayed image cross-fade + relocate
      tl.to('.f1 .imgB, .f2 .imgB', { opacity: 1, duration: 0.8 }, '<+=0.45')
      tl.to('.f1', { x: '-18vw', y: '30vh', rotate: -4, duration: 0.9, ease: 'power2.inOut' }, '<')
      tl.to('.f2', { x: '24vw', y: '-26vh', rotate: 4, duration: 0.9, ease: 'power2.inOut' }, '<')
      show('.s2 .w')
      tl.to({}, { duration: 0.5 })

      // ---- transition 2 → 3 : text/numbers first, images relocate after a delay ----
      hide('.s2 .w')
      tl.to('.n2', { opacity: 0, yPercent: -100, duration: 0.3 }, '<')
      tl.to('.n3', { opacity: 1, yPercent: 0, duration: 0.3 }, '<')
      tl.to('.rail i', { scaleX: 1, duration: 0.6 }, '<')
      tl.to('.f1', { x: '-2vw', y: '-5vh', rotate: 2, duration: 0.9, ease: 'power2.inOut' }, '<+=0.45')
      tl.to('.f2', { x: '2vw', y: '0vh', rotate: -2, duration: 0.9, ease: 'power2.inOut' }, '<')
      show('.s3 .w')
      tl.to({}, { duration: 0.4 })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section className="sintro" id="design" ref={section}>
      <div className="sintro__stage" ref={stage}>
        <img className="sintro__leaf" src="/img/canopy-1.jpg" alt="" aria-hidden="true" />

        <div className="sintro__frames">
          <figure className="sintro__frame f1">
            <svg viewBox="0 0 612 824" preserveAspectRatio="xMidYMid meet">
              <defs>
                <clipPath id="morph1" clipPathUnits="userSpaceOnUse">
                  <path d="M612.999 748.068V103C612.999 53.8486 568.667 17.6575 522.631 29.2268L295.544 86.2962C274.234 91.6517 256.362 106.645 246.852 127.146L7.28559 616.516C-13.3912 661.088 11.8848 713.945 58.5972 723.818L525.25 822.446C570.586 832.028 612.999 796.077 612.999 748.068Z" />
                </clipPath>
              </defs>
              <image className="imgA" href="/img/facade-1.jpg" x="-60" y="-30" width="760" height="900" preserveAspectRatio="xMidYMid slice" clipPath="url(#morph1)" />
              <image className="imgB" href="/img/building-light-2.jpg" x="-60" y="-30" width="760" height="900" preserveAspectRatio="xMidYMid slice" clipPath="url(#morph1)" />
            </svg>
          </figure>
          <figure className="sintro__frame f2">
            <svg viewBox="0 0 563 559" preserveAspectRatio="xMidYMid meet">
              <defs>
                <clipPath id="morph2" clipPathUnits="userSpaceOnUse">
                  <path d="M536.07 261.245L562.89 534.277C564.225 547.866 553.215 559.504 539.519 558.983L39.3218 539.961C27.4842 539.511 18.0011 530.038 17.5825 518.245L0.0149346 23.3565C-0.589468 6.32949 17.2665 -5.17794 32.6102 2.35034L523.555 243.229C530.574 246.673 535.308 253.488 536.07 261.245Z" />
                </clipPath>
              </defs>
              <image className="imgA" href="/img/interior-4.jpg" x="-40" y="-40" width="660" height="660" preserveAspectRatio="xMidYMid slice" clipPath="url(#morph2)" />
              <image className="imgB" href="/img/lounge-2.jpg" x="-40" y="-40" width="660" height="660" preserveAspectRatio="xMidYMid slice" clipPath="url(#morph2)" />
            </svg>
          </figure>
        </div>

        <span className="sintro__eyebrow">Canopy — Design</span>

        <div className="sintro__screens">
          <div className="sintro__screen s1">
            <div className="inner">
              <p className="sintro__statement"><Words text={IDENTITY} accent={['canopy', 'tree']} /></p>
            </div>
          </div>
          <div className="sintro__screen s2">
            <div className="inner">
              <p className="sintro__statement"><Words text={STATEMENT2} accent={['canopy', 'breathes']} /></p>
            </div>
          </div>
          <div className="sintro__screen s3">
            <div className="inner">
              <h2 className="sintro__big"><Words text={INTRO_TITLE} accent={['living']} /></h2>
              <p className="sintro__para">
                <Words text={STATEMENT} accent={['value']} />
                <a className="link" href="#availability" data-cursor>Explore apartments ↗</a>
              </p>
            </div>
          </div>
        </div>

        <div className="sintro__prog">
          <span className="rail"><i /></span>
          <span className="nums">
            <span className="n1">01</span>
            <span className="n2">02</span>
            <span className="n3">03</span>
          </span>
        </div>
      </div>
    </section>
  )
}
