# thetolulope.vercel.app

Personal portfolio of **Tolulope Olatunji** — Full-Stack Developer & Digital Transformation Consultant.

Live site: [thetolulope.vercel.app](https://thetolulope.vercel.app/)

## Stack

- [Next.js 14](https://nextjs.org/) (App Router) with React 18
- [Tailwind CSS](https://tailwindcss.com/) with Inter + Space Grotesk via `next/font`
- GSAP + Framer Motion for the marquee and project-preview animations
- Deployed on [Vercel](https://vercel.com/)

## Highlights

- Structured data (JSON-LD `Person` + `WebSite`), Open Graph image generated at build time, sitemap, robots.txt with AI-crawler allowances, and `llms.txt`
- Accessible by design: semantic landmarks, labeled forms, keyboard-focusable navigation, `prefers-reduced-motion` support
- Project imagery served as compressed WebP

## Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
```

Set `NEXT_PUBLIC_SITE_URL` to override the canonical URL (defaults to the production domain in `src/app/site.ts`).
