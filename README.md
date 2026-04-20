# Bridge Global Talent Partners — Next.js

Production-grade corporate website for **Bridge Global Talent Partners** — a premium executive search and talent development firm for Africa and emerging markets.

**Stack:** Next.js 14 (App Router) · TypeScript · Tailwind CSS · React 18

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Scripts:**

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server with fast refresh |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint (Next.js recommended rules) |
| `npm run type-check` | TypeScript check without emit |

---

## Before deploying — change these two things

1. **Production domain** — `lib/site-config.ts` is already set to `https://bridgegtp.com`:
   ```ts
   export const SITE_URL = 'https://bridgegtp.com';
   ```
   If the domain ever changes, that's the only edit needed — canonical URLs, sitemap, robots.txt, OG tags, and every JSON-LD block read from this constant.

2. **Social handles and contact email** — also in `lib/site-config.ts`. LinkedIn is currently a best-guess slug, confirm it matches the actual company page:
   ```ts
   social: {
     linkedin: 'https://www.linkedin.com/company/bridge-global-talent-partners',
     twitter: 'https://twitter.com/bridgegtp',
   },
   contact: {
     email: 'hello@bridgegtp.com',
   },
   ```

Everything else — structured data, OG image, sitemap — picks these up automatically.

---

## SEO features wired in

**Metadata (per-page and root):**
- Title template with automatic suffix (`%s · Bridge Global Talent Partners`)
- Description, keywords, author, publisher
- Canonical URL via `alternates.canonical`
- `metadataBase` so Next resolves relative OG/image URLs correctly
- Open Graph tags (title, description, locale, type, images)
- Twitter Card tags (`summary_large_image`)
- Robots directives (index + follow, `max-image-preview: large`)

**Structured data (JSON-LD):**
- `Organization` schema in the root layout (name, logo, description, social links, contact point, area served)
- `WebSite` schema (enables sitelinks search box)
- `ProfessionalService` schema with `hasOfferCatalog` listing the three services (on the homepage)

**Discovery:**
- `app/sitemap.ts` → dynamic `/sitemap.xml`
- `app/robots.ts` → dynamic `/robots.txt` pointing to the sitemap
- `app/opengraph-image.tsx` → server-generated 1200×630 OG image at `/opengraph-image`

**Semantic HTML:**
- Single `<h1>` (in the hero), nested `<h2>`/`<h3>` for the heading hierarchy
- `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<nav>` used semantically
- `aria-labelledby` on every section pointing to its heading
- `aria-current`, `aria-expanded`, `aria-controls`, `role="tab"` etc. on interactive elements
- Descriptive `alt` text on all images, `aria-hidden` on decorative ones

**Performance:**
- `next/font/local` for Montserrat and Lato — automatic subsetting, preload, `display: swap`, variable fonts
- `next/image` for all images with explicit dimensions, `priority` on the nav logo (LCP element), AVIF/WebP negotiation
- Server Components by default — only `Nav`, `Leaderboard`, and `Join` are client components (they have interactive state)
- Long cache headers on `/fonts` and `/assets` via `next.config.mjs`
- Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy)
- `poweredByHeader: false`, `compress: true`

---

## Mobile and accessibility

- **Mobile menu:** full-screen overlay, body-scroll-lock while open, Escape-to-close, auto-focus on the first link, closes on navigation
- **Leaderboard responsive strategy:** on `md+` renders as a 6-column data table; on smaller screens collapses into stacked cards so no content is hidden
- **Touch targets:** interactive elements are 44×44 px minimum
- **Mobile input hints:** every `<input>` has `type`, `inputMode`, and `autocomplete` set correctly so the phone keyboard matches
- **Reduced motion:** `prefers-reduced-motion` media query disables all transitions and animations
- **Fluid type:** `clamp()` on every heading across breakpoints
- **Focus states:** visible ring on every tabbable element, no `outline: none` anywhere
- **Colour contrast:** all body text meets WCAG AA (4.5:1) against its background; large text meets AAA

---

## Project structure

```
bridge-gtp/
├── app/
│   ├── layout.tsx                 ← Root layout: fonts, metadata, JSON-LD (Org + WebSite)
│   ├── page.tsx                   ← Homepage, page metadata, ProfessionalService JSON-LD
│   ├── globals.css                ← Tailwind + component utilities + tokens
│   ├── sitemap.ts                 ← Dynamic /sitemap.xml
│   ├── robots.ts                  ← Dynamic /robots.txt
│   └── opengraph-image.tsx        ← Edge-generated /opengraph-image (1200×630 PNG)
├── components/
│   ├── Nav.tsx                    ← 'use client' — sticky nav + mobile menu + scroll-spy
│   ├── Hero.tsx                   ← Navy hero with H1, CTAs, 3 teaser cards
│   ├── Offerings.tsx              ← 3-column services on gray bg
│   ├── About.tsx                  ← 2-col: statement + paragraphs, navy callout aside
│   ├── GTProgram.tsx              ← 4-step progress rail + callout + who-it's-for card
│   ├── ForCompanies.tsx           ← Navy section, 3 translucent numbered cards
│   ├── Leaderboard.tsx            ← 'use client' — tabs + filters + table/cards
│   ├── Join.tsx                   ← 'use client' — track picker + form + success state
│   └── Footer.tsx                 ← Dark footer with watermark + 4-col links
├── lib/
│   ├── site-config.ts             ← ★ Single source of truth — edit domain here
│   └── leaderboard-data.ts        ← Leaderboard dataset + types
├── public/
│   ├── fonts/                     ← Montserrat (Bold, SemiBold) + Lato (5 weights)
│   └── assets/logos/              ← 11 SVG variants (8 originals + 3 cropped)
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Design tokens

All tokens live in `tailwind.config.ts` (colours, shadows, font families) and `app/globals.css` (CSS custom properties, component utilities). No magic hex values scattered across components.

**Colours:**
- `navy` (`#0B2C4A`) + `.dark`, `.mid`, `.light` shades
- `red` (`#E53935`) + `.dark`, `.light`, `.muted` shades
- Gray scale: 50/100/300/500/700/900

**Typography:**
- Heading: Montserrat Bold (700), SemiBold (600) — served locally via `next/font`
- Body: Lato Thin/Light/Regular/Italic — served locally via `next/font`
- The `--font-montserrat` and `--font-lato` CSS variables are wired into Tailwind's `font-heading` and `font-body` utilities

**Component utilities** (in `globals.css`):
- `.btn-primary`, `.btn-ghost` — CTAs
- `.eyebrow`, `.eyebrow-white` — the red section labels
- `.section`, `.section-tight` — vertical padding scale
- `.section-title`, `.section-intro` — typography patterns
- `.pill` — rounded tag pills
- `.form-label`, `.form-input` — dark-background form controls

---

## Deployment — GitHub + Render

This project is configured to deploy to [Render](https://render.com) from GitHub via a Blueprint file (`render.yaml`). The Node runtime is used throughout (no Edge dependencies), so everything works on Render's standard Web Service.

### First-time setup

1. **Push the repo to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<your-org>/bridgegtp.git
   git push -u origin main
   ```

2. **Create the Render service**
   - Log in to Render → **New +** → **Blueprint**
   - Connect your GitHub account and pick this repository
   - Render reads `render.yaml` and provisions the Web Service automatically
   - First build takes ~3–4 minutes

3. **Point the domain**
   - In Render: your service → **Settings** → **Custom Domains** → add `bridgegtp.com` and `www.bridgegtp.com`
   - At your DNS provider, create a `CNAME` for `www` pointing to the `onrender.com` hostname Render shows you, plus an `ALIAS`/`ANAME` (or `A` record to Render's IP) for the apex
   - Render provisions Let's Encrypt SSL automatically

4. **Verify SEO assets resolve at the live domain**
   - `https://bridgegtp.com/` — site loads
   - `https://bridgegtp.com/sitemap.xml` — sitemap renders
   - `https://bridgegtp.com/robots.txt` — robots file renders
   - `https://bridgegtp.com/opengraph-image` — 1200×630 PNG

5. **Submit to search engines**
   - Google Search Console → add property (domain verification via DNS), submit `sitemap.xml`
   - Bing Webmaster Tools → same

### How the deployment pipeline works

- Every push to `main` on GitHub → Render auto-deploys (`autoDeploy: true` in `render.yaml`)
- Every push and pull request → GitHub Actions runs `type-check` + `lint` + `build` (`.github/workflows/ci.yml`)
- If CI fails on a PR, you'll see a red X in the PR — don't merge until it's green
- Render only deploys what's on the branch set in `render.yaml` (`main` by default)

### Render plan sizing

The Blueprint uses the **Starter** plan ($7/mo). That's fine for a marketing site getting up to ~50k visits/month. If you hit traffic that matters, upgrade in the Render dashboard → **Settings** → **Instance Type**. The Blueprint line to change if you want it in code:

```yaml
plan: starter   # → "standard" or higher for more traffic
```

### Environment variables

None required today — the site is fully static content with one client-side form. When you add env vars (analytics ID, form-submission endpoint, CMS keys), add them to:
1. `render.yaml` under `envVars` — if they're non-secret defaults safe to commit
2. Render dashboard → your service → **Environment** — for secrets
3. `.env.local` — for local dev (already ignored by `.gitignore`)

### Rollback

In Render → your service → **Deploys** tab → pick any previous successful deploy → **Rollback**. Instant.

---

## Alternative hosts

If you ever move off Render:

| Host | Change needed |
| --- | --- |
| **Vercel** | Remove `output: 'standalone'` from `next.config.mjs`, change `runtime: 'nodejs'` back to `runtime: 'edge'` in `app/opengraph-image.tsx`. Everything else works unchanged. |
| **Railway / Fly / any Node host** | No changes needed. `render.yaml` is ignored by other hosts. |
| **Docker / self-hosted** | `output: 'standalone'` is already on. Build with `npm run build` and the runtime bundle is at `.next/standalone/server.js`. Copy `.next/static` and `public/` alongside it in your Dockerfile. |

---

## Adding a new section / page

**New section on the homepage:**
1. Create `components/NewSection.tsx` (Server Component unless it has state)
2. Import and drop it into `app/page.tsx` between the relevant existing sections
3. If it has an `id`, add a matching entry to the `LINKS` array in `components/Nav.tsx`

**New top-level page (e.g. `/about`, `/privacy`):**
1. Create `app/<route>/page.tsx`
2. Export your own `metadata` object (title, description, canonical)
3. Add the route to `app/sitemap.ts`

---

## Performance targets

These are the targets the code is written to hit; measure with Lighthouse after `npm run build && npm start`:

- **Performance ≥ 95** (mobile and desktop)
- **Accessibility ≥ 95**
- **Best Practices ≥ 95**
- **SEO = 100**
- **LCP < 1.8 s** (on a 4G-throttled emulated device)
- **CLS < 0.05**
- **INP < 200 ms**

The LCP element is the hero H1. The hero background is a CSS gradient (no image request). The logo in the nav is priority-loaded and the only image above the fold. Font loading uses `display: swap` with preconnect — no FOIT, minimal FOUT.

---

## Copy / brand voice

Content is lifted verbatim from the brand content document (`Bridge_GTP_Content_Document.docx`). The voice guidelines are summarised in the design-system README. **Never use:** synergy, leverage, ecosystem, disruptive, innovative, headhunter, "we are the best". **Always use:** partner, talent, mandate, placed, assessed, emerging markets, serious.

Full content and voice guidelines are in the original design system ZIP under `project/README.md`.
