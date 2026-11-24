# Project notes for coding agents

Personal portfolio of Tolulope Olatunji (Next.js 14 App Router, Tailwind). See `README.md` for setup.

## Brand / logo

- The approved logo package and its SHA-256 checksums live in [`docs/brand/`](docs/brand/README.md).
  Read `docs/brand/README.md` before touching the logo, favicon, apple icon or share card.
- Masters: `docs/brand/tolulope-brand-2026-11-24/01-Logo-Masters/`. Checksums: `docs/brand/SHA256SUMS`.
- Site usage: `src/app/components/Logo.jsx`, `src/app/icon.svg`, `src/app/apple-icon.png`, `src/app/opengraph-image.tsx`.
  Copy geometry from the masters; do not redraw.

## Content

- Projects: `src/app/projects.js` (feeds the Recent Works grid and the ItemList JSON-LD).
  Keep `public/llms.txt` "Selected Projects" in sync. Screenshots are 1200x675 WebP in `public/assets/`.
