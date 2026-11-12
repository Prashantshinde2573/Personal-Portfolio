import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { SmoothScroll } from './components/lib.jsx'
import Hero, { Nav, MobileMenu } from './components/Hero.jsx'
import { Trust, LogoMarquee, WhyCustom, Creatives, Services, Work, Impact, About, FAQ, Contact, Footer, MobileCTA } from './components/Sections.jsx'
import { NAV } from './data.js'

function useActiveSection() {
  const [active, setActive] = useState(null)
  useEffect(() => {
    const on = () => {
      const mid = window.innerHeight * 0.35
      let cur = null
      NAV.forEach((n) => {
        const el = document.querySelector(n.href)
        if (!el) return
        const r = el.getBoundingClientRect()
        if (r.top <= mid && r.bottom > mid) cur = n.href
      })
      setActive(cur)
    }
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return active
}

export default function App() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])

  return (
    <SmoothScroll>
      <motion.div className="progress" style={{ scaleX: progress }} />
      <Nav active={active} open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
      <main>
        <Hero />
        <Trust />
        <LogoMarquee />
        <Work />
        <WhyCustom />
        <Impact />
        <Services />
        <Creatives />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </SmoothScroll>
  )
}
