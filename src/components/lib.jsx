import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { motion, useInView, useMotionValue, useSpring, animate, useReducedMotion } from 'framer-motion'

export const EASE = [0.2, 0.8, 0.2, 1]

/* ---------- smooth scroll (Lenis) ---------- */
const ScrollCtx = createContext(null)
export function SmoothScroll({ children }) {
  const [lenis, setLenis] = useState(null)
  const reduce = useReducedMotion()
  useEffect(() => {
    if (reduce) return
    const l = new Lenis({ lerp: 0.1 })
    let id
    const raf = (t) => { l.raf(t); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    setLenis(l)
    return () => { cancelAnimationFrame(id); l.destroy() }
  }, [reduce])
  return <ScrollCtx.Provider value={lenis}>{children}</ScrollCtx.Provider>
}
export function useScrollTo() {
  const lenis = useContext(ScrollCtx)
  return (href) => {
    if (!href || href[0] !== '#') return
    const target = href === '#top' ? 0 : document.querySelector(href)
    if (target === null) return
    if (lenis) lenis.scrollTo(target, { offset: href === '#top' ? 0 : -24, duration: 1.4 })
    else if (target === 0) window.scrollTo({ top: 0, behavior: 'smooth' })
    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 24, behavior: 'smooth' })
  }
}
/** <A href="#work"> scrolls smoothly; external links open in a new tab */
export function A({ href, children, onClick, ...rest }) {
  const scrollTo = useScrollTo()
  const internal = href && href.startsWith('#')
  return (
    <a
      href={href}
      {...(internal ? {} : { target: '_blank', rel: 'noopener' })}
      onClick={(e) => { onClick && onClick(e); if (internal) { e.preventDefault(); scrollTo(href) } }}
      {...rest}
    >{children}</a>
  )
}

/* ---------- reveal on scroll ---------- */
export function Reveal({ children, delay = 0, y = 28, as = 'div', className, style, amount = 0.25 }) {
  const M = motion[as]
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >{children}</M>
  )
}

/* ---------- word-by-word mask reveal ---------- */
export function SplitWords({ text, className, delay = 0, stagger = 0.06, as = 'span', once = true, start = true }) {
  const M = motion[as]
  const words = text.split(' ')
  return (
    <M className={className} aria-label={text}
      initial="hidden" {...(start === true ? { whileInView: 'show', viewport: { once, amount: 0.4 } } : { animate: start ? 'show' : 'hidden' })}
      variants={{ show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}>
      {words.map((w, i) => (
        <span key={i} className="mask" aria-hidden="true">
          <motion.span style={{ display: 'inline-block' }}
            variants={{ hidden: { y: '110%' }, show: { y: '0%', transition: { duration: 1, ease: EASE } } }}>
            {w}
          </motion.span>{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </M>
  )
}

/* ---------- magnetic hover ---------- */
export function Magnetic({ children, strength = 0.3 }) {
  const ref = useRef(null)
  const x = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.4 })
  const y = useSpring(useMotionValue(0), { stiffness: 200, damping: 15, mass: 0.4 })
  const move = (e) => {
    if (!window.matchMedia('(hover:hover)').matches) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * strength)
    y.set((e.clientY - r.top - r.height / 2) * strength)
  }
  const leave = () => { x.set(0); y.set(0) }
  return (
    <motion.span ref={ref} style={{ x, y, display: 'inline-flex' }} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </motion.span>
  )
}

/* ---------- count up ---------- */
export function Counter({ to, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [v, setV] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, to, { duration: 1.6, ease: EASE, onUpdate: (n) => setV(Math.round(n)) })
    return () => c.stop()
  }, [inView, to])
  return <span ref={ref}>{v}{suffix}</span>
}

export const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M5 11L11 5M6 5h5v5" />
  </svg>
)
export const ArrowRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)
