# Sutryva Technologies — Company Website

Official marketing site for **Sutryva Technologies Pvt Ltd**, built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4.

## Stack

- **Next.js 16** — App Router, Turbopack
- **TypeScript**
- **Tailwind CSS v4** — CSS-first theme config (brand tokens in `app/globals.css`)
- **lucide-react** — icon set

## Brand System

Graphite + Cobalt palette, locked in `app/globals.css` under `@theme`:

| Token | Hex | Use |
|---|---|---|
| `cobalt` | `#2F6FED` | Primary — CTAs, links |
| `deep-cobalt` | `#1E3A8A` | Primary hover/depth |
| `lime` | `#C6FF3D` | Accent — live/success states |
| `amber` | `#F59E0B` | Alerts only |
| `graphite-900` | `#14171C` | Base dark background |
| `graphite-50` | `#F5F6F8` | Light surface |

## SEO

- Full metadata via Next.js Metadata API (`app/layout.tsx`) — title template, OG tags, Twitter cards
- JSON-LD `Organization` structured data
- `app/robots.ts` and `app/sitemap.ts` — auto-generated `/robots.txt` and `/sitemap.xml`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Project Structure

```
app/
  layout.tsx      # Root layout + SEO metadata + JSON-LD
  page.tsx         # Homepage - assembles all sections
  globals.css      # Tailwind v4 theme + brand tokens
  robots.ts        # robots.txt generator
  sitemap.ts       # sitemap.xml generator
components/
  Nav.tsx          # Client component - mobile menu state
  Hero.tsx
  LogosStrip.tsx
  Services.tsx
  Process.tsx
  ProofOfWork.tsx
  Founder.tsx
  CTA.tsx
  Footer.tsx
  Icons.tsx        # Custom brand SVG icons (GitHub/LinkedIn/X)
```

## Deploy

Recommended: [Vercel](https://vercel.com) - zero-config for Next.js App Router projects.

```bash
npx vercel
```

---

(c) Sutryva Technologies Pvt Ltd
