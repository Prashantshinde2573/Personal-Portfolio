export const CONTACT = {
  email: 'prashantshinde2573@gmail.com',
  phone: '+91 91305 61382',
  whatsapp: 'https://wa.me/919130561382',
  linkedin: 'https://www.linkedin.com/in/prashant-shinde-8bb027290',
  instagram: 'https://www.instagram.com/hey_prashant.exe/',
}

export const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#why', label: 'Why custom' },
  { href: '#process', label: 'Process' },
  { href: '#services', label: 'Services' },
  { href: '#creatives', label: 'Creatives' },
  { href: '#about', label: 'About' },
]

// g = brand gradient used for the card backdrop / orbs
export const PROJECTS = [
  {
    key: 'restropi', name: 'Restropi', url: 'https://restropi.com/', domain: 'restropi.com',
    type: 'Custom app + website', place: 'India', isNew: true, logo: 'logos/restropi.png', shot: 'shots/restropi.jpg', full: 'shots/restropi-full.jpg', dur: 6,
    desc: 'A restaurant and café management app: billing with UPI QR and GST, kitchen orders, tables, QR ordering, stock and staff. I built both the app and the website.',
    tags: ['Custom app', 'Web app', 'Website'],
    g: 'radial-gradient(120% 120% at 85% 10%, #bbf7d0 0%, #34d399 30%, #065f46 64%, #03140e 100%)',
  },
  {
    key: 'savy', name: 'Savy GreenTech', url: 'https://savygreentech.com/', domain: 'savygreentech.com',
    type: 'Corporate website', place: 'India', logo: 'logos/savy.png', shot: 'shots/savy.jpg', full: 'shots/savy-full.jpg', dur: 6,
    desc: 'A corporate site for an electric-vehicle maker that has built golf carts, e-rickshaws and campus EVs since 2014.',
    tags: ['Corporate', 'Responsive UI', 'EV'],
    g: 'radial-gradient(120% 120% at 85% 10%, #d9f99d 0%, #4ade80 28%, #0e7490 62%, #052e2b 100%)',
  },
  {
    key: 'noomf', name: 'Noomf', url: 'https://noomf.com/', domain: 'noomf.com',
    type: 'Shopify store', place: 'UK', logo: 'logos/noomf.png', shot: 'shots/noomf.jpg', full: 'shots/noomf-full.jpg', dur: 6,
    desc: 'A Shopify store for a mushroom-coffee brand, with custom product pages, bundles, subscriptions and smoother shipping flows.',
    tags: ['Shopify', 'Liquid', 'JavaScript'],
    g: 'radial-gradient(120% 120% at 85% 10%, #fde68a 0%, #fb923c 30%, #9a3412 65%, #2a1205 100%)',
  },
  {
    key: 'ivb', name: 'Build With IVB', url: 'https://www.buildwithivb.com/', domain: 'buildwithivb.com',
    type: 'Webflow site', place: 'India', logo: 'logos/ivb.png', shot: 'shots/ivb.jpg', full: 'shots/ivb-full.jpg', dur: 4,
    desc: 'A responsive site for a new-gen college for entrepreneurs, taken from Figma to pixel-perfect Webflow with reusable components.',
    tags: ['Webflow', 'HTML/CSS', 'JavaScript'],
    g: 'radial-gradient(120% 120% at 85% 10%, #ccfbf1 0%, #2dd4bf 30%, #0f766e 62%, #071a1a 100%)',
  },
  {
    key: 'kulkarni', name: 'Kulkarni Law Firm', url: 'https://kulkarnilawfirm.com/', domain: 'kulkarnilawfirm.com',
    type: 'WordPress site', place: 'USA', logo: 'logos/kulkarni.png', shot: 'shots/kulkarni.jpg', full: 'shots/kulkarni-full.jpg', dur: 5,
    desc: 'A WordPress site for a firm advising FDA-regulated companies, with a pixel-perfect build plus performance, SEO and UX work.',
    tags: ['WordPress', 'SEO', 'Performance'],
    g: 'radial-gradient(120% 120% at 85% 10%, #c7d2fe 0%, #6366f1 30%, #312e81 62%, #0b0a24 100%)',
  },
  {
    key: '247around', name: '247around', url: 'https://247around.com/', domain: '247around.com',
    type: 'WordPress site', place: 'India', logo: 'logos/247around.png', shot: 'shots/247around.jpg', full: 'shots/247around-full.jpg', dur: 4,
    desc: 'A custom, responsive WordPress UI for an after-sales service platform, owned end to end from first layout to final QA.',
    tags: ['WordPress', 'Custom UI', 'End-to-end'],
    g: 'radial-gradient(120% 120% at 85% 10%, #fecdd3 0%, #f87171 28%, #0f766e 66%, #04201d 100%)',
  },
  {
    key: 'optimizer', name: 'Image Optimizer', url: 'https://personal-img-optimizer.netlify.app/', domain: 'personal-img-optimizer.netlify.app',
    type: 'React web app', place: 'Side project', logo: null, shot: 'shots/optimizer.jpg', full: 'shots/optimizer-full.jpg', dur: 0,
    desc: 'A bulk image compressor and renamer that runs in the browser, so files never leave your device. Prototyped with AI, refined by hand.',
    tags: ['React', 'AI-assisted', 'Privacy-first'],
    g: 'radial-gradient(120% 120% at 85% 10%, #f5d0fe 0%, #c084fc 30%, #581c87 64%, #12061f 100%)',
  },
]

export const SERVICES = [
  { title: 'Custom business apps', chips: ['Web apps', 'Dashboards'], eyebrow: 'Custom build', lead: 'For businesses that need software built around how they actually work, like Restropi for restaurants.', img: 'shots/restropi.jpg', alt: 'Restropi restaurant app website', wide: true,
    tags: ['Web apps', 'Dashboards', 'Billing & operations', 'Admin panels', 'App + website'] },
  { title: 'Reels, videos & banners', chips: ['Reels', 'Banners'], eyebrow: 'Video & design', lead: 'Short reels, SaaS promo videos and custom social media banners that make people stop scrolling.', img: 'media/banner-restropi-ad.jpg', alt: 'Restropi product banner', wide: true, reverse: true, cta: 'See creatives', href: '#creatives',
    tags: ['Instagram reels', 'SaaS promo videos', 'Social media banners', 'Festive posts', 'Ad creatives'] },
  { title: 'Shopify stores', chips: ['Theme setup', 'Product pages'], eyebrow: 'Shopify', lead: 'For D2C brands that need a store which sells.', img: 'img/svc-shopify.jpg', alt: 'Shopping cart full of parcels',
    tags: ['Theme customisation', 'Product pages', 'Subscriptions', 'Bundles'] },
  { title: 'Webflow & Framer', chips: ['Figma to build', 'CMS'], eyebrow: 'Webflow or Framer', lead: 'For startups that want a site they can edit easily.', img: 'img/svc-webflow.jpg', alt: 'Website design on a laptop and phone',
    tags: ['Figma to build', 'CMS', 'Components', 'Interactions'] },
  { title: 'WordPress sites', chips: ['Corporate sites', 'SEO'], eyebrow: 'WordPress', lead: 'For firms that need credibility and search visibility.', img: 'img/svc-wordpress.jpg', alt: 'Website open on a laptop',
    tags: ['Corporate sites', 'Speed', 'SEO', 'UX fixes'] },
  { title: 'AI prototypes', chips: ['Prototypes', 'User testing'], eyebrow: 'AI + custom', lead: 'For founders who want to test an idea before a full build.', img: 'img/svc-ai.jpg', alt: 'Abstract AI network',
    tags: ['Clickable prototype', 'User testing', 'Fast iteration'] },
]

export const REELS = [
  { key: 'ekambase', title: 'EkamBase', type: 'SaaS promo video', src: 'media/reel-ekambase.mp4', poster: 'media/reel-ekambase.jpg' },
  { key: 'restropi', title: 'Restropi', type: 'Launch teaser reel', src: 'media/reel-restropi.mp4', poster: 'media/reel-restropi.jpg' },
]

export const BANNERS = [
  { key: 'ad', title: 'Restropi', type: 'Product ad banner', src: 'media/banner-restropi-ad.jpg', w: 1600, h: 900, alt: 'Restropi product banner showing the dashboard, QR ordering and features' },
  { key: 'padwa', title: 'EkamBase', type: 'Festive post · Diwali Padwa', src: 'media/banner-ekambase-padwa.jpg', w: 1000, h: 1671, alt: 'EkamBase Diwali Padwa greeting post in Marathi' },
  { key: 'lakshmi', title: 'Restropi', type: 'Festive post · Lakshmi Pujan', src: 'media/banner-restropi-lakshmi.jpg', w: 1000, h: 1333, alt: 'Restropi Lakshmi Pujan greeting post in Marathi' },
]

export const STEPS = [
  { n: '01', title: 'Discovery call', text: 'We go through your goals, audience, platform and timeline, and agree on the scope.' },
  { n: '02', title: 'AI prototype', text: 'You get a quick, clickable prototype, so you react to something real early.' },
  { n: '03', title: 'Pixel-perfect build', text: 'I build the final design to match the mockups, responsive on every device.' },
  { n: '04', title: 'Test & launch', text: 'Cross-device testing, speed and SEO tuning, then a handover you can run with.' },
]

export const STATS = [
  { to: 2, suffix: '+', label: 'Years of experience' },
  { to: 15, suffix: '+', label: 'Projects delivered' },
  { to: 5, suffix: '', label: 'Platforms' },
  { to: 3, suffix: '', label: 'Countries: IN · UK · US' },
]

export const FAQS = [
  { q: 'Can you build from my Figma design?', a: 'Yes. Most of my work is turning Figma designs into pixel-perfect, responsive websites that match the design on every screen.' },
  { q: 'Which platform should I choose?', a: "Shopify if you sell products, Webflow or Framer for a marketing site you can edit easily, and WordPress for content-heavy or SEO-focused sites. I'll help you decide on our first call." },
  { q: 'Do you customise existing Shopify stores?', a: 'Yes. I work on theme sections, layouts, product and collection pages, and storefront features, on an existing theme or a new one.' },
  { q: 'How do you use AI in your work?', a: 'For quick prototypes at kickoff, research, debugging and automating repetitive tasks. You see ideas sooner, and the final build is still done carefully by hand.' },
  { q: 'Can you handle a project on your own?', a: 'Yes. I regularly own projects end to end, from setup and build to testing and handover.' },
]

export const JOBS = [
  { role: 'Junior Front-End Developer', where: 'Fistbump Digital · Shopify, Webflow, Framer, WordPress', when: 'May 2025 – Now', now: true },
  { role: 'Front-End Intern', where: 'Fistbump Digital · Builds, testing, AI prototypes', when: 'Nov 2023 – Apr 2025' },
  { role: 'Master of Computer Applications', where: 'DY Patil Agriculture & Technical University', when: '2021 – 2023' },
]
