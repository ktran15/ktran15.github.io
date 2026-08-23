# ktran15.github.io

My personal site. It is part portfolio and part scrapbook: engineering case studies on one side, photography, piano, the garden, and whatever I baked last weekend on the other.

**Live at [ktran15.github.io](https://ktran15.github.io)**

The goal was a site that reads like a person made it rather than a template. Warm paper colors, photos pinned up like polaroids, a scrapbook that actually opens. No dark-mode-gradient-hero-with-a-glowing-button in sight.

## Stack

| Piece | Choice |
| --- | --- |
| Build | Vite |
| UI | React 18 + TypeScript |
| Routing | React Router (client side) |
| Styling | Plain CSS with custom properties, no framework |
| Fonts | Playfair Display, Source Sans 3 |
| Hosting | GitHub Pages via GitHub Actions |

No animation library, no UI kit, no CSS framework. Three runtime dependencies total. Everything visual is hand-written CSS, which is why the whole bundle is about 250 KB.

## Pages

| Route | What's there |
| --- | --- |
| `/` | Intro, and whatever project is featured |
| `/about` | Career goals, and a mosaic of the stories that shaped me |
| `/projects` | Project index, each card tagged `[Finished]` or `[WIP]` |
| `/projects/:slug` | Full case study: problem, process, outcome, what I learned |
| `/play/scrapbook` | Photography, inside a scrapbook that opens |
| `/play/piano` | Piano, and the LED visualizer running |
| `/play/garden` | The Brooklyn Community Garden |
| `/play/baking` | Recipes I make on repeat |
| `/resume` | Embedded PDF, with a download link |
| `/contact` | Email, GitHub, LinkedIn |

## Where the content lives

Copy and data are kept out of the components on purpose, so updating the site does not mean editing JSX:

| File | Holds |
| --- | --- |
| `src/content/site.ts` | Name, email, links, homepage blurbs, career goals |
| `src/content/projects.ts` | Every project and case study, including `status` and images |
| `src/content/mosaic.ts` | The About page biography tiles |
| `src/content/piano.ts` | Piano video embeds |
| `src/content/recipes.ts` | Baking cards |
| `public/resume.pdf` | The resume itself |

Adding a project means adding one object to `projects.ts`. The index card, the case study page, the status stamp, and the featured slot on the homepage all follow from it.

## Design system

All of it lives at the top of `src/index.css` as custom properties, so the palette changes in one place:

```css
--cream: #faf8f4;   --ink: #2a2522;
--rust:  #c4654a;   --gold: #c49a3a;   --sage: #6a8c6a;
```

The reusable pieces are `.polaroid`, `.paper-card`, `.kraft-card`, `.wavy-rule`, `.btn`, `.tag`, and the `tilt-*` helpers. New sections are built out of those rather than one-off styles, which is what keeps the pages feeling like one site.

## Running it

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Deployment

Push to `main` and [the workflow](.github/workflows/deploy.yml) builds and publishes to GitHub Pages. In the repo settings, Pages must be set to build from **GitHub Actions**.

One wrinkle worth knowing: GitHub Pages has no server to rewrite routes, so loading `/projects/piano-led-visualizer` directly would 404. The `postbuild` step copies `dist/index.html` to `dist/404.html`, which hands the request back to the router and makes deep links work.

## A few deliberate decisions

**There is a Content Security Policy.** It is declared in `index.html` and it is strict: scripts and frames from this origin only, with a single exception for `youtube-nocookie.com` so the piano video can embed. Adding any third-party embed means adding its host there first, or it will fail silently with nothing in the console but a CSP error.

**Images are compressed before they land in `public/`.** Photos come off a camera or phone at 3 to 5 MB each. Anything going into the repo gets resized to roughly what it displays at and re-encoded, which usually lands under 300 KB. It is manual, and it is the difference between a site that loads instantly and one that does not.

**Pages are lazy loaded.** Every route is a `React.lazy` import, so visiting the homepage does not download the scrapbook.

**No blog.** There was a placeholder for one. I was not going to write it, and an empty page that says "coming soon" is worse than no page at all, so it came out.

## Known rough edges

- Project images are placed by hand in `projects.ts`. There is no CMS and no image pipeline, which is fine at this size and would not be at ten times this size.
- Image compression is a manual ffmpeg step rather than part of the build.
- The site is served from `ktran15.github.io` rather than a custom domain.
