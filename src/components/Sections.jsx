import React, { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion'
import { A, Reveal, SplitWords, Magnetic, Counter, Arrow, ArrowRight, EASE } from './lib.jsx'
import { PROJECTS, SERVICES, STEPS, STATS, FAQS, JOBS, CONTACT, REELS, BANNERS } from '../data.js'

/* ---------------- built on trust (stats + images bento) ---------------- */
function TrustImg({ img, h }) {
  return (
    <div className="trust__img" style={{ height: h }}>
      <img src={img.src} alt={img.alt} loading="lazy" />
    </div>
  )
}
function TrustStat({ s }) {
  return (
    <div className="trust__stat">
      <b><Counter to={s.to} suffix={s.suffix} /></b>
      <h3>{s.title}</h3>
      <p>{s.text}</p>
    </div>
  )
}
export function Trust() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const up = useTransform(scrollYProgress, [0, 1], [40, -40])
  const down = useTransform(scrollYProgress, [0, 1], [-20, 30])
  const stats = [
    { to: 2, suffix: '+', title: 'Years of Experience', text: 'Building websites at Fistbump Digital since 2023.' },
    { to: 15, suffix: '+', title: 'Projects Delivered', text: 'Websites and custom apps for eCommerce, food, education, legal and EV.' },
    { to: 6, suffix: '', title: 'Ways to Build', text: 'Custom apps, Shopify, Webflow, Framer, WordPress and React.' },
    { to: 3, suffix: '', title: 'Countries Served', text: 'Clients across India, the UK and the USA.' },
  ]
  const cols = [
    [{ img: { src: 'img/trust/design.jpg', alt: 'Interface designs on a desktop screen' }, h: 260 }, { stat: stats[2] }],
    [{ stat: stats[0] }, { img: { src: 'img/trust/code.jpg', alt: 'Code on a laptop at a tidy desk' }, h: 260 }],
    [{ img: { src: 'img/trust/call.jpg', alt: 'Video call with clients on a laptop' }, h: 260 }, { stat: stats[3] }],
    [{ stat: stats[1] }, { img: { src: 'img/trust/meeting.jpg', alt: 'Two people discussing a project at a laptop' }, h: 260 }],
  ]
  return (
    <section className="trust" id="trust" ref={ref}>
      <div className="container">
        <div className="trust__head">
          <Reveal as="span" className="pill-label"><i />Proven results</Reveal>
          <h2 className="h2"><SplitWords text="Built On Trust" /></h2>
          <Reveal as="p" className="muted">Built through careful craft and lasting client relationships.</Reveal>
        </div>
        <div className="trust__grid">
          {cols.map((col, ci) => (
            <motion.div key={ci} className="trust__col" style={{ y: ci % 2 ? down : up }}>
              {col.map((it, k) => (
                <Reveal key={k} delay={ci * 0.08 + k * 0.1}>
                  {it.img ? <TrustImg img={it.img} h={it.h} /> : <TrustStat s={it.stat} />}
                </Reveal>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- logo marquee ---------------- */
export function LogoMarquee() {
  const logos = PROJECTS.filter((p) => p.logo)
  const row = [...logos, ...logos, ...logos]
  return (
    <section className="marq">
      <div className="container marq__head">
        <p>Brands I've built websites and apps for</p>
        <span className="muted">India · UK · USA</span>
      </div>
      <div className="marq__mask">
        <div className="marq__track">
          {[0, 1].map((k) => (
            <div className="marq__set" key={k} aria-hidden={k === 1}>
              {row.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener" className="marq__item" tabIndex={k === 1 ? -1 : 0}>
                  <img src={p.logo} alt={k === 0 ? p.name : ''} />
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- why custom (vs same-looking AI sites) ---------------- */
const SAME = ['yoursite.ai', 'theirsite.ai', 'anothersite.ai']
export function WhyCustom() {
  const byKey = Object.fromEntries(PROJECTS.map((p) => [p.key, p]))
  // middle card sits in front, so Restropi goes in the middle
  const real = ['noomf', 'restropi', 'savy'].map((k) => byKey[k])
  return (
    <section className="sec container" id="why">
      <div className="why__head">
        <Reveal as="span" className="kicker">Why custom</Reveal>
        <h2 className="h2"><SplitWords text="Every AI-made site looks the same." /><br /><span className="muted-h"><SplitWords text="Your visitors notice." delay={0.2} /></span></h2>
        <Reveal as="p" className="muted why__p" delay={0.1}>
          One-click AI builders and templates give everyone the same hero, the same gradient and the same words. Visitors have seen it a hundred times, so they scroll past and leave. A site built around your brand earns trust and turns visits into enquiries.
        </Reveal>
      </div>
      <div className="why">
        <Reveal className="why__card why__card--bad">
          <div className="why__visual">
            {SAME.map((d, i) => (
              <motion.div key={d} className="clone"
                initial={{ x: (i - 1) * 90, y: (i - 1) * 18, rotate: (i - 1) * 6 }}
                whileInView={{ x: (i - 1) * 10, y: (i - 1) * -10, rotate: 0 }}
                viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}
                style={{ zIndex: i }}>
                <div className="clone__bar"><i /><i /><i /><span>{d}</span></div>
                <div className="clone__body">
                  <span className="clone__blob" />
                  <b>Unlock your potential with AI</b>
                  <em>Transform your business with innovative solutions</em>
                  <span className="clone__btn">Get started</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="why__label"><span className="why__dot bad">✕</span>Generic AI / template site</div>
          <ul className="why__list">
            <li>Looks like thousands of other sites</li>
            <li>Generic copy that says nothing about you</li>
            <li>Heavy pages that load slowly</li>
            <li>No clear path for visitors to contact you</li>
          </ul>
        </Reveal>
        <Reveal className="why__card why__card--good" delay={0.12}>
          <div className="why__visual">
            {real.map((p, i) => (
              <motion.div key={p.key} className="realshot"
                initial={{ x: 0, rotate: 0, y: 10 }}
                whileInView={{ x: (i - 1) * 120, rotate: (i - 1) * 7, y: Math.abs(i - 1) * 16 }}
                viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
                style={{ zIndex: i === 1 ? 3 : 1 }}>
                <img src={p.shot} alt={`${p.name} website`} loading="lazy" />
              </motion.div>
            ))}
          </div>
          <div className="why__label"><span className="why__dot good">✓</span>Built for your brand</div>
          <ul className="why__list">
            <li>Designed around your business and your customers</li>
            <li>Clear message and calls to action on every page</li>
            <li>Fast and responsive on every device</li>
            <li>Easy for your team to update</li>
          </ul>
        </Reveal>
      </div>
      <Reveal className="why__cta">
        <p>Want a site that doesn't look like everyone else's?</p>
        <Magnetic><A href="#contact" className="btn btn-black btn-lg">Let's talk <ArrowRight /></A></Magnetic>
      </Reveal>
    </section>
  )
}

/* ---------------- services ---------------- */
const IconLayers = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5" /></svg>
)
const IconTag = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z" /><circle cx="7.5" cy="7.5" r="1.5" /></svg>
)
export function Services() {
  const [cur, setCur] = useState(0)
  return (
    <section className="sec container" id="services">
      <div className="sec-head">
        <div>
          <Reveal as="span" className="kicker">Services</Reveal>
          <h2 className="h2"><SplitWords text="What I can build for you" /></h2>
        </div>
        <Reveal as="p" className="muted sec-head__p">Pick what fits your business. I handle the design, build, testing and handover.</Reveal>
      </div>
      <div className="svx">
        <Reveal className="svx__media">
          <img src="img/svc-side.jpg" alt="" aria-hidden="true" />
        </Reveal>
        <div className="svx__grid">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} className={`svx__card ${cur === i ? 'on' : ''}`} delay={(i % 2) * 0.08 + Math.floor(i / 2) * 0.05}>
              <div onMouseEnter={() => setCur(i)} onFocus={() => setCur(i)} className="svx__in">
                <span className="svx__eyebrow">{s.eyebrow}</span>
                <h3>{s.title}</h3>
                <p>{s.lead}</p>
                <div className="svx__chips">
                  <span><IconLayers />{s.chips[0]}</span>
                  <span><IconTag />{s.chips[1]}</span>
                </div>
                <A href={s.href || '#contact'} className="svx__link" aria-label={`${s.cta || 'Discuss'} ${s.title}`}><Arrow size={14} /></A>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- selected work: bento grid with live page views ---------------- */
function ProjectTile({ p, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { amount: 0.5 })
  return (
    <motion.a ref={ref} href={p.url} target="_blank" rel="noopener" className={`tile tile--${p.key} ${inView ? 'inview' : ''}`}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE, delay: (i % 3) * 0.08 }}>
      <div className="tile__media" style={{ background: p.g }}>
        <div className="tile__win">
          <div className="tile__bar2"><i /><i /><i /><span>{p.domain}</span></div>
          <div className="tile__screen">
            <div className="tile__view" style={{ backgroundImage: `url(${p.full})`, '--dur': `${p.dur || 5}s` }} role="img" aria-label={`${p.name} website, full page`} />
          </div>
        </div>
      </div>
      <div className="tile__meta">
        <div className="tile__txt">
          <h3>{p.name}{p.isNew && <em>New</em>}</h3>
          <span>{p.type} · {p.place}</span>
        </div>
        <span className="tile__go"><Arrow size={15} /></span>
      </div>
    </motion.a>
  )
}
export function Work() {
  return (
    <section className="work-dark dark" id="work">
      <div className="container sec">
      <div className="sec-head">
        <div>
          <Reveal as="span" className="kicker">Selected work</Reveal>
          <h2 className="h2"><SplitWords text="Websites and apps for real businesses," /><br /><SplitWords text="live and running today." delay={0.15} /></h2>
        </div>
        <Reveal><Magnetic><A href="#contact" className="btn btn-black btn-lg">Start your project <Arrow /></A></Magnetic></Reveal>
      </div>
      <Reveal as="p" className="muted work__hint">Hover a project to scroll through the real site.</Reveal>
      <div className="bento">
        {PROJECTS.filter((p) => p.key !== 'optimizer').map((p, i) => <ProjectTile key={p.key} p={p} i={i} />)}
      </div>
      </div>
    </section>
  )
}

/* ---------------- impact + process (dark) ---------------- */
export function Impact() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] })
  const line = useTransform(scrollYProgress, [0, 1], [0, 1])
  const wrapRef = useRef(null)
  const { scrollYProgress: enter } = useScroll({ target: wrapRef, offset: ['start end', 'start 30%'] })
  const radius = useTransform(enter, [0, 1], [64, 32])
  const inset = useTransform(enter, [0, 1], ['4%', '0.8%'])
  return (
    <motion.section className="dark-out" id="process" ref={wrapRef}>
      <motion.div className="dark sec">
        <div className="container">
          <div className="sec-head">
            <div>
              <Reveal as="span" className="kicker">Process</Reveal>
              <h2 className="h2"><SplitWords text="A simple process, no surprises" /></h2>
            </div>
            <Reveal><Magnetic><A href="#contact" className="btn btn-black btn-lg">Book a discovery call</A></Magnetic></Reveal>
          </div>
          <div className="steps" ref={ref}>
            <div className="steps__line"><motion.i style={{ scaleX: line }} /></div>
            {STEPS.map((s, i) => (
              <Reveal key={s.n} className="step" delay={i * 0.1}>
                <span className="step__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

/* ---------------- creatives: reels + banners ---------------- */
function Reel({ r, i }) {
  const ref = useRef(null)
  const vid = useRef(null)
  const inView = useInView(ref, { amount: 0.5 })
  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    const v = vid.current
    if (!v) return
    if (inView && !paused) v.play().catch(() => {})
    else v.pause()
  }, [inView, paused])
  const toggleSound = (e) => {
    e.stopPropagation()
    const v = vid.current
    v.muted = !muted; setMuted(!muted)
    if (v.paused) { setPaused(false); v.play().catch(() => {}) }
  }
  return (
    <motion.div ref={ref} className="reel" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}>
      <div className="reel__phone" onClick={() => setPaused(!paused)}>
        <video ref={vid} src={r.src} poster={r.poster} muted loop playsInline preload="metadata" aria-label={`${r.title} ${r.type}`} />
        <span className="reel__notch" />
        {paused && <span className="reel__play" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg></span>}
        <button className="reel__sound" onClick={toggleSound} aria-label={muted ? 'Turn sound on' : 'Turn sound off'}>
          {muted
            ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M23 9l-6 6M17 9l6 6" /></svg>
            : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z" /><path d="M15.5 8.5a5 5 0 010 7M19 5a10 10 0 010 14" /></svg>}
        </button>
      </div>
      <div className="cr__cap"><b>{r.title}</b><span>{r.type}</span></div>
    </motion.div>
  )
}
function Banner({ b, i, onOpen }) {
  return (
    <motion.button type="button" className={`banner banner--${b.key}`} onClick={() => onOpen(b)}
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.08 }}>
      <img src={b.src} alt={b.alt} loading="lazy" />
      <span className="banner__zoom" aria-hidden="true"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg></span>
      <div className="cr__cap cr__cap--over"><b>{b.title}</b><span>{b.type}</span></div>
    </motion.button>
  )
}
export function Creatives() {
  const [open, setOpen] = useState(null)
  useEffect(() => {
    const k = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', k)
    return () => window.removeEventListener('keydown', k)
  }, [])
  return (
    <section className="sec container" id="creatives">
      <div className="sec-head">
        <div>
          <Reveal as="span" className="kicker">Reels, videos &amp; banners</Reveal>
          <h2 className="h2"><SplitWords text="Content that makes people" /><br /><SplitWords text="stop scrolling." delay={0.15} /></h2>
        </div>
        <Reveal as="p" className="muted sec-head__p">Beyond websites and apps, I make reels, SaaS promo videos and custom social media banners for brands. Tap a reel for sound.</Reveal>
      </div>
      <div className="creatives">
        {REELS.map((r, i) => <Reel key={r.key} r={r} i={i} />)}
        {BANNERS.map((b, i) => <Banner key={b.key} b={b} i={i} onOpen={setOpen} />)}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div className="lightbox" onClick={() => setOpen(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.img src={open.src} alt={open.alt} initial={{ scale: 0.92, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.45, ease: EASE }} onClick={(e) => e.stopPropagation()} />
            <button className="lightbox__x" aria-label="Close" onClick={() => setOpen(null)}>✕</button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* ---------------- about ---------------- */
export function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])
  return (
    <section className="sec container" id="about">
      <div className="sec-head">
        <div>
          <Reveal as="span" className="kicker">Experience</Reveal>
          <h2 className="h2"><SplitWords text="The developer behind the work" /></h2>
        </div>
      </div>
      <div className="about">
        <Reveal className="about__photo">
          <div ref={ref} className="about__img"><motion.img style={{ y, scale: 1.18 }} src="img/photo.jpg" alt="Prashant Shinde" loading="lazy" /></div>
          <div className="about__tag"><div><b>Prashant Shinde</b><span>Frontend Developer · Pune</span></div><em><i />Available</em></div>
        </Reveal>
        <div className="about__side">
          <Reveal className="about__intro">
            <p>I turn Figma designs into fast, production-ready websites. <span>I use AI to prototype, research and debug faster, so clients see results sooner and the final build is still crafted by hand.</span></p>
          </Reveal>
          <div className="jobs">
            {JOBS.map((j, i) => (
              <Reveal key={j.role} className="job" delay={i * 0.08}>
                <div><b>{j.role}</b><span>{j.where}</span></div>
                <em className={j.now ? 'now' : ''}>{j.when}</em>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */
export function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="sec container faq" id="faq">
      <div>
        <Reveal as="span" className="kicker">FAQ</Reveal>
        <h2 className="h2"><SplitWords text="Have questions?" /></h2>
        <Reveal as="p" className="muted" style={{ marginTop: 14 }}>If yours isn't here, send me a message on WhatsApp.</Reveal>
        <Reveal style={{ marginTop: 24 }}><A href={CONTACT.whatsapp} className="btn btn-white btn-lg">Ask on WhatsApp</A></Reveal>
      </div>
      <div className="qas">
        {FAQS.map((f, i) => (
          <Reveal key={f.q} className={`qa ${open === i ? 'open' : ''}`} delay={i * 0.05}>
            <button aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {f.q}<span className="pm" />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div className="ans" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: EASE }}>
                  <p>{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* ---------------- contact ---------------- */
export function Contact() {
  const [name, setName] = useState('')
  const [type, setType] = useState('Shopify store')
  const [msg, setMsg] = useState('')
  const [toast, setToast] = useState('')
  const text = `Hi Prashant,${name.trim() ? ` I'm ${name.trim()}.` : ''} I'm looking for: ${type}.${msg.trim() ? `\n\n${msg.trim()}` : ''}`
  const wa = `${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
  const mail = `mailto:${CONTACT.email}?subject=${encodeURIComponent('New project enquiry')}&body=${encodeURIComponent(text)}`
  const copy = async () => {
    try { await navigator.clipboard.writeText(CONTACT.email); setToast('Email copied ✓') } catch { setToast(CONTACT.email) }
    setTimeout(() => setToast(''), 2200)
  }
  const types = [['Shopify store', 'Shopify'], ['Webflow / Framer site', 'Webflow / Framer'], ['WordPress site', 'WordPress'], ['Something else', 'Other']]
  return (
    <section id="contact" className="contact-out">
      <div className="dark cta">
        <div className="cta__orb" aria-hidden="true" />
        <div className="cta__grid">
          <div>
            <Reveal as="span" className="kicker">Let's talk</Reveal>
            <h2 className="h2"><SplitWords text="Have a project? Let's build it together." /></h2>
            <Reveal as="p" className="muted" style={{ marginTop: 16, maxWidth: 420 }}>Tell me what you need. I'll reply with next steps and a rough plan.</Reveal>
            <div className="direct">
              <Reveal><a href={CONTACT.whatsapp} target="_blank" rel="noopener"><span><small>WhatsApp · fastest</small><strong>{CONTACT.phone}</strong></span><em>Chat <Arrow size={12} /></em></a></Reveal>
              <Reveal delay={0.06}><button type="button" onClick={copy}><span><small>Email</small><strong>{CONTACT.email}</strong></span><em>Copy</em></button></Reveal>
              <Reveal delay={0.12}><a href={CONTACT.linkedin} target="_blank" rel="noopener"><span><small>LinkedIn</small><strong>Prashant Shinde</strong></span><em>Connect <Arrow size={12} /></em></a></Reveal>
            </div>
          </div>
          <Reveal className="form" delay={0.1}>
            <form onSubmit={(e) => e.preventDefault()} noValidate>
              <h3>Start a project</h3>
              <p className="muted">About a minute. Your message opens in WhatsApp or email, ready to send.</p>
              <div className="field"><label htmlFor="f-name">Your name</label><input id="f-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" autoComplete="name" /></div>
              <div className="field"><span className="label">What do you need?</span>
                <div className="opts" role="radiogroup">
                  {types.map(([v, l]) => (
                    <button type="button" role="radio" aria-checked={type === v} key={v} className={type === v ? 'on' : ''} onClick={() => setType(v)}>
                      <span>{l}</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="field"><label htmlFor="f-msg">Project details</label><textarea id="f-msg" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Your business, goals and timeline" /></div>
              <div className="form__actions">
                <a className="btn btn-black btn-lg" href={wa} target="_blank" rel="noopener">Send on WhatsApp</a>
                <a className="btn btn-white btn-lg" href={mail}>Send by email</a>
              </div>
              <div className="form__note">I usually reply within 24 hours</div>
            </form>
          </Reveal>
        </div>
      </div>
      <AnimatePresence>{toast && <motion.div className="toast" initial={{ y: 80, x: '-50%' }} animate={{ y: 0, x: '-50%' }} exit={{ y: 80, x: '-50%' }}>{toast}</motion.div>}</AnimatePresence>
    </section>
  )
}

/* ---------------- footer ---------------- */
const SocialIcons = {
  instagram: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
  linkedin: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.5-2.25 3.1V21H9z" /></svg>,
  whatsapp: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"><path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1112 20.5a8.4 8.4 0 01-4.2-1.1z" /><path d="M9 8.6c.2-.5.5-.6.8-.6h.5c.2 0 .4.1.5.4l.6 1.5c.1.2 0 .5-.1.6l-.5.6c.4.9 1.2 1.7 2.1 2.1l.6-.5c.2-.1.4-.2.6-.1l1.5.6c.3.1.4.3.4.5v.5c0 .3-.1.6-.6.8-1.4.6-3.3-.1-4.9-1.6-1.5-1.5-2.2-3.4-1.5-4.8z" fill="currentColor" stroke="none" /></svg>,
  email: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5l8.5 6.5 8.5-6.5" /></svg>,
}
export function Footer() {
  const [email, setEmail] = useState('')
  const quote = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Project enquiry')}&body=${encodeURIComponent(`Hi Prashant,\n\nI'd like to discuss a project. You can reach me at ${email || '(my email)'}.`)}`
  const links = [
    ['#work', 'Our work'], ['#services', 'Services'], ['#process', 'Process'], ['#creatives', 'Reels & banners'],
    ['#why', 'Why custom'], ['#about', 'About me'], ['#faq', 'FAQ'], ['#contact', 'Contact'],
  ]
  const socials = [
    ['instagram', CONTACT.instagram, 'Instagram'], ['linkedin', CONTACT.linkedin, 'LinkedIn'],
    ['whatsapp', CONTACT.whatsapp, 'WhatsApp'], ['email', `mailto:${CONTACT.email}`, 'Email'],
  ]
  return (
    <footer className="foot2">
      <Reveal className="foot2__panel">
        <div className="foot2__brand">
          <A href="#top" className="foot2__logo"><span className="nav__mark foot2__mark">PS</span><span>Prashant<br />Shinde</span></A>
          <p className="foot2__tag">Custom websites and apps<br /><span>for ambitious businesses.</span></p>
          <form className="foot2__form" onSubmit={(e) => { e.preventDefault(); window.location.href = quote }}>
            <label htmlFor="foot-email">Get a free quote</label>
            <div className="foot2__input">
              <input id="foot-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" autoComplete="email" />
              <a href={quote} aria-label="Send enquiry by email"><Arrow size={14} /></a>
            </div>
          </form>
        </div>
        <nav className="foot2__links" aria-label="Footer">
          {links.map(([h, l]) => <A key={h} href={h}>{l}</A>)}
        </nav>
        <div className="foot2__social">
          {socials.map(([k, href, label]) => (
            <a key={k} href={href} target={k === 'email' ? undefined : '_blank'} rel="noopener" aria-label={label} title={label}>{SocialIcons[k]}</a>
          ))}
        </div>
        <div className="foot2__bottom"><span>© 2026 Prashant Shinde · Pune, India</span><span>Service photos: Unsplash</span></div>
      </Reveal>
    </footer>
  )
}

/* ---------------- sticky mobile CTA ---------------- */
export function MobileCTA() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const on = () => {
      const c = document.getElementById('contact')
      setShow(window.scrollY > window.innerHeight * 0.9 && c && c.getBoundingClientRect().top > window.innerHeight * 0.7)
    }
    on(); window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="mcta" initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }} transition={{ duration: 0.45, ease: EASE }}>
          <A href="#contact" className="btn btn-black">Start a project</A>
          <A href={CONTACT.whatsapp} className="btn btn-white">WhatsApp</A>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
