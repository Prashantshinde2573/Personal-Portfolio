import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { A, SplitWords, Magnetic, ArrowRight, EASE } from './lib.jsx'
import { NAV, CONTACT } from '../data.js'

export function Burger({ open, setOpen }) {
  return (
    <button className={`burger ${open ? 'on' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
      <i /><i />
    </button>
  )
}

export function MobileMenu({ open, setOpen }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div className="mmenu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.35, ease: EASE }}>
          {NAV.map((n, i) => (
            <motion.div key={n.href} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i + 0.05, ease: EASE, duration: 0.5 }}>
              <A href={n.href} onClick={() => setOpen(false)}>{n.label}</A>
            </motion.div>
          ))}
          <A href="#contact" className="btn btn-black btn-lg" onClick={() => setOpen(false)}>Start a project</A>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

/* Clean sticky top bar */
export function Nav({ active, open, setOpen }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <motion.header className={`nav ${scrolled ? 'scrolled' : ''}`} initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}>
      <div className="container nav__in">
        <A href="#top" className="nav__logo"><span className="nav__mark">PS</span>Prashant Shinde</A>
        <nav className="nav__links">
          {NAV.map((n) => <A key={n.href} href={n.href} className={active === n.href ? 'on' : ''}>{n.label}</A>)}
        </nav>
        <div className="nav__right">
          <A href={CONTACT.whatsapp} className="btn btn-white nav__wa">WhatsApp</A>
          <A href="#contact" className="btn btn-black">Contact me</A>
          <Burger open={open} setOpen={setOpen} />
        </div>
      </div>
    </motion.header>
  )
}

export default function Hero() {
  // gentle mouse parallax for the illustration
  const mx = useMotionValue(0), my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 }), sy = useSpring(my, { stiffness: 60, damping: 18 })
  const lx = useTransform(sx, (v) => v * -14)
  const onMove = (e) => {
    if (!window.matchMedia('(hover:hover)').matches) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5); my.set((e.clientY - r.top) / r.height - 0.5)
  }

  return (
    <section className="hero" id="top" onMouseMove={onMove}>
      <motion.div className="hero__panel"
        initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: EASE }}>
        <motion.div className="hero__bg" style={{ x: lx }} aria-hidden="true"
          initial={{ scale: 1.12 }} animate={{ scale: 1.02 }} transition={{ duration: 2.4, ease: EASE }}>
          <img src="img/hero-bg.jpg" alt="" />
        </motion.div>
        <div className="hero__tint" aria-hidden="true" />

        <div className="hero__center">
          <h1 className="hero__h">
            <SplitWords text="Websites & Apps Built For Your Business" delay={0.3} stagger={0.07} />
          </h1>
          <motion.p className="hero__p" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9, ease: EASE }}>
            From Shopify stores to full restaurant software, I build custom websites and business apps around how you work, made to win you more customers.
          </motion.p>
          <motion.div className="hero__cta" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95, duration: 0.9, ease: EASE }}>
            <Magnetic><A href="#contact" className="btn btn-black btn-lg">Book a free call <ArrowRight /></A></Magnetic>
          </motion.div>
        </div>

        <div className="hero__stage">
          <motion.div className="hero__side hero__side--l" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 1, ease: EASE }}>
            <span className="avail"><i />Available for new projects</span>
            <div className="hero__stack">
              {['Custom apps', 'Shopify', 'Webflow', 'WordPress', 'Reels & banners'].map((t) => <span key={t}>{t}</span>)}
            </div>
          </motion.div>


          <motion.div className="hero__side hero__side--r" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 1, ease: EASE }}>
            <div className="hero__meta"><b>Prashant Shinde</b><span>Frontend Developer · Pune</span></div>
            <A href={CONTACT.whatsapp} className="btn btn-white">Chat on WhatsApp</A>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
