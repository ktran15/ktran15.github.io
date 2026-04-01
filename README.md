# ktran15.github.io

Personal portfolio (Vite + React + TypeScript) with chapter-themed pages, GSAP + Framer Motion, and GitHub Pages deployment.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

The postbuild step copies `dist/index.html` to `dist/404.html` so client-side routes work on GitHub Pages.

## Customize

- **Identity & links:** `src/content/site.ts`
- **About mosaic:** `src/content/mosaic.ts`
- **Projects:** `src/content/projects.ts` (optional `videoUrl`)
- **Writing:** `src/content/posts.ts`
- **Recipes:** `src/content/recipes.ts`
- **Piano:** `src/content/piano.ts` (embed URLs)
- **Resume:** add `public/resume.pdf`

## GitHub Pages

1. **Settings â†’ Pages â†’ Build and deployment:** source **GitHub Actions**.
2. Push to `main`; workflow: `.github/workflows/deploy.yml`.

## Stack

React Router, GSAP, Framer Motion. Fonts: Fraunces, DM Sans, IBM Plex Mono.
