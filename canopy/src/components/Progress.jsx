import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Progress() {
  const fill = useRef(null)
  useEffect(() => {
    const set = gsap.quickSetter(fill.current, 'scaleX')
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      set(h > 0 ? window.scrollY / h : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])
  return <div className="prog"><i ref={fill} /></div>
}
