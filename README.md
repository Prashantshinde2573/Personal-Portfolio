# Prashant Shinde — Portfolio (React)

Built with React 18, Vite, Framer Motion and Lenis (smooth scroll).

## Run locally

```bash
npm install
npm run dev      # opens http://localhost:5173
```

## Build for hosting

```bash
npm run build    # creates the dist/ folder
```

Upload the whole `dist/` folder to Netlify, Vercel or any static host. The build uses relative paths, so it also works from a sub-folder.

## Where things live

- `src/data.js` holds all the content: projects, services, process steps, stats, FAQs, experience and contact details. Edit text here.
- `src/components/Hero.jsx` has the hero with the notched navigation, the floating nav and the mobile menu.
- `src/components/Sections.jsx` has every other section.
- `src/styles.css` has all the styles. Colours are CSS variables at the top.
- `public/shots/` holds the project screenshots, `public/logos/` the client logos, and `public/img/` your photo and the service photos (from Unsplash).

To add a project, add an entry to `PROJECTS` in `src/data.js` and drop its screenshot into `public/shots/` and its logo into `public/logos/`.
