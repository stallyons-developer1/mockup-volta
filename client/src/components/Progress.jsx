import { useEffect, useRef } from 'react'
import gsap from 'gsap'

// Top scroll-progress rail that fills as you move through the page.
export default function Progress() {
  const fill = useRef(null)

  useEffect(() => {
    const setter = gsap.quickSetter(fill.current, 'scaleX')
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setter(h > 0 ? window.scrollY / h : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div className="progress">
      <div className="progress__fill" ref={fill} />
    </div>
  )
}
