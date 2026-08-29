# h-aesthetic studio — website

Next.js (App Router) + TypeScript. No CSS framework — design tokens and
component styling live in `app/globals.css`, matching the brand's editorial,
architectural direction (see project knowledge docs for the full brief).

## Status
Visual system for the homepage is approved. Dedicated pages (Studio, Work,
Process, Journal, Contact, Start a Project) are stubbed and awaiting real
content — see `components/PageStub.tsx`. No CMS, ecommerce, auth, or AI
features are wired up yet, per project scope.

## Getting started
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Content rules (do not violate)
No fabricated clients, testimonials, projects, statistics, awards, team
bios, or pricing anywhere in this codebase. Where real content is missing,
use the shared `<ComingSoon />` pattern already used on the homepage — never
placeholder data that looks real. All copy currently in the codebase traces
back to the approved brand documents.

## Deploying
Push to GitHub, then connect the repo to Vercel (or your host of choice) —
zero extra config needed for a default Next.js app.
```bash
git init
git add .
git commit -m "Initial homepage + stub pages"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

## Swapping in real photography/video
Every visual "plate" is intentionally a placeholder (see `Hero.tsx`,
`StudioSection.tsx`, `ComingSoon.tsx` cinematic variant). Replace the SVG
`.film-frame` content with an `<Image>` or `<video>` — the surrounding frame,
caption and layout are already built to accommodate it without restructuring.
