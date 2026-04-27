# Bridge Global Talent Partners — bridgegtp.com

Production website for **Bridge Global Talent Partners** — premium executive search and graduate trainee programs for companies operating in Africa.

**Stack:** Next.js 14 App Router · TypeScript · Tailwind CSS · MDX · React 18

---

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Command | Description |
| --- | --- |
| `npm run dev` | Local dev server with fast refresh |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run type-check` | TypeScript check |

---

## Site map

| Route | What lives there |
| --- | --- |
| `/` | Homepage — Hero → Services → Who We Are → Africa View → CTA |
| `/about` | About page (the editorial thesis) |
| `/executive-talent` | Executive Talent service page (Hero → Proof → What → Why → CTA) |
| `/graduate-trainee` | Graduate Trainee service page (Hero → Proof → What → Why → Case Study → CTA) |
| `/contact` | Speak to Us — contact form with interest routing |
| `/blog` | Insights index with categories sidebar |
| `/blog/[slug]` | Individual blog post (MDX) |
| `/blog/category/[slug]` | Category archive |
| `/sitemap.xml` | Auto-generated, includes all routes + blog posts |
| `/robots.txt` | Auto-generated |
| `/opengraph-image` | Auto-generated 1200×630 OG image |

---

## Editing content

### Site-wide config
**`lib/site-config.ts`** — single source of truth. Domain, social URLs, contact email, tagline. Changing `SITE_URL` here updates canonical URLs, sitemap, robots.txt, OG image URL, and every JSON-LD block in one go.

### Service-page copy
- `/executive-talent` → `app/executive-talent/page.tsx`
- `/graduate-trainee` → `app/graduate-trainee/page.tsx`

Copy is hardcoded as JSX strings in each page. To edit, open the page file and edit the strings directly. They're labelled with comments matching the section names from the brief (`WHAT WE DO`, `WHY US`, `CASE STUDY`).

### Blog posts
Posts are MDX files in `content/blog/`. To add a new post:

1. Create `content/blog/your-slug.mdx`
2. Front matter goes at the top:
   ```mdx
   ---
   title: "Your headline"
   description: "One-sentence summary for search engines and previews."
   date: "2026-05-01"
   author: "Bridge Editorial"
   category: "Africa Insights"
   tags: ["talent", "africa"]
   draft: false
   ---

   Body content in **markdown**. Headings with `##` and `###` work,
   as do lists, quotes, and links.
   ```
3. Save. The post appears at `/blog/your-slug` and the slugified category page at `/blog/category/<slug>`. Sitemap and category sidebar update automatically.
4. Set `draft: true` to hide a post from production but keep it visible in `npm run dev`.

### Client logos
**`lib/clients.ts`** — list of companies with logos rendered in the proof bar. Add a new entry:
```ts
{
  name: 'New Co',
  slug: 'new-co',
  logo: '/clients/new-co.svg',
  url: 'https://newco.com',
  bg: 'light',  // or 'dark' if the logo is white-on-dark
}
```
Drop the logo file in `public/clients/`.

> **One missing logo right now:** Initio Capital. The PDF brief listed `initiocapital.com` but no logo was provided. The entry in `lib/clients.ts` has an empty `logo` path and is filtered out of the rendered list. Drop a logo into `public/clients/initio.png` (or `.svg`) and update `lib/clients.ts` line 38 to enable it.

### Real photography (in progress)

The `WhoWeAre`, `graduate-trainee`, and `about` components currently render **gradient placeholders** where real candidate / cohort / presentation photos will go. Each placeholder has a `label` describing what the photo should be (e.g. "Cohort 04 induction").

**To swap placeholders for real photos:**
1. Drop images into `public/photos/` (e.g. `public/photos/cohort-04-induction.jpg`)
2. In each component, replace the `<ImagePlaceholder ... />` JSX with `<Image src="/photos/cohort-04-induction.jpg" ... />` from `next/image`
3. Always include a meaningful `alt` attribute and explicit `width`/`height` (or `fill` with a sized parent)

> **Important — privacy:** any identifiable person in a photo on this site needs explicit, written consent for public use. This applies especially to candidate photos and the Starks Associate case study. Photo consent is not a code concern but it is a legal one — verify with each subject before going live.

---

## Design system

### Colours (Tailwind utilities)
| Token | Value | Use |
| --- | --- | --- |
| `navy` | `#0D1B4B` | Primary brand colour |
| `navy-700` | `#0A1538` | Card backgrounds on dark sections |
| `navy-800` | `#070E26` | Deep section backgrounds |
| `navy-900` | `#040818` | Footer |
| `red` | `#E53935` | Primary CTAs, accents |
| `gold` | `#C9A961` | Highlights, eyebrows, italic text accents |
| `cream` | `#FAF8F4` | Light section backgrounds (warmer than pure white) |

### Typography scale
- `display-title` — Hero H1 (`clamp(40px → 76px)`, weight 700, very tight tracking)
- `section-title` — Section H2 (`clamp(32px → 56px)`)
- `eyebrow` — small uppercase tags (gold by default, red via `.eyebrow-red`, white on dark via `.eyebrow-light`)

### Component utilities (in `app/globals.css`)
- `.btn-primary` / `.btn-secondary` / `.btn-ghost-light` / `.btn-ghost-dark`
- `.card-light` / `.card-dark`
- `.pill` / `.pill-gold`
- `.link-arrow` (animates the `→` on hover)
- `.gold-rule` (decorative 56×2 gold line)
- `.section-y` / `.section-y-tight` (vertical padding scale)
- `.bg-section-cream/-light/-warm/-navy/-deep/-ink` (alternating section backgrounds)

---

## SEO

**Per-page metadata.** Every route exports its own `metadata` object with title, description, and canonical URL. Default title template is `<page> · Bridge Global Talent Partners`.

**Structured data (JSON-LD).** Embedded server-side in `<head>`:
- Root layout — `Organization` + `WebSite`
- Homepage — `ProfessionalService` with `hasOfferCatalog` listing both services
- Service pages — `Service` schema each
- Blog posts — `BlogPosting` schema with author, dates, category
- Blog index — `Blog` schema

**Discovery.**
- `app/sitemap.ts` — dynamic sitemap with all static routes + blog posts + categories
- `app/robots.ts` — points at the sitemap, allows everything by default
- `app/opengraph-image.tsx` — server-generated 1200×630 OG image (Node runtime, works on Netlify out of the box)

**Performance.**
- `next/font/local` for both font families (preloaded, subsetted, `display: swap`)
- `next/image` for every image with explicit dimensions and AVIF/WebP negotiation
- Server Components by default — only `Nav` and `ContactForm` are client components
- 1-year immutable `Cache-Control` on `/fonts` and `/assets`
- Security headers: X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy

---

## Deployment — GitHub + Netlify

The project is configured for [Netlify](https://netlify.com) via `netlify.toml`. Each push to `main` triggers an automatic deploy.

### First-time setup

1. Sign in at https://app.netlify.com/ (use GitHub auth)
2. **Add new site → Import an existing project → GitHub → `forcythe/bridgegtp`**
3. Netlify reads `netlify.toml` and configures the build automatically
4. First build takes ~3–5 minutes; you'll get a URL like `https://bridgegtp-ab12.netlify.app`

### Custom domain

In Netlify: **Site → Domain management → Add a domain you already own → `bridgegtp.com`**

Add `www.bridgegtp.com` as a redirect (Netlify will offer this).

DNS records:
- **Apex**: `A` records to Netlify's load-balancer IPs (Netlify shows them)
- **www**: `CNAME` to `<your-site>.netlify.app`

Or, simpler: point your nameservers at Netlify DNS. Either way, Let's Encrypt SSL is provisioned automatically once DNS resolves.

### CI

`.github/workflows/ci.yml` runs lint + type-check + build on every push and PR. Netlify's deploy is independent — it builds whether CI passed or not, so a CI failure blocks merge but won't block deploy. If you want CI to gate deploys, add Netlify's deploy as a downstream job after CI passes.

### Verify after first deploy

- `https://bridgegtp.com/` — site loads
- `https://bridgegtp.com/sitemap.xml` — sitemap renders
- `https://bridgegtp.com/robots.txt` — robots renders
- `https://bridgegtp.com/opengraph-image` — 1200×630 PNG
- Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools

---

## Project structure

```
bridge-gtp/
├── app/
│   ├── layout.tsx                  Root layout, fonts, metadata, Org + WebSite JSON-LD
│   ├── page.tsx                    Homepage
│   ├── globals.css                 Tailwind + design tokens + component utilities
│   ├── sitemap.ts                  Dynamic /sitemap.xml
│   ├── robots.ts                   Dynamic /robots.txt
│   ├── opengraph-image.tsx         /opengraph-image (1200×630 PNG)
│   ├── about/page.tsx              /about
│   ├── contact/page.tsx            /contact
│   ├── executive-talent/page.tsx   /executive-talent
│   ├── graduate-trainee/page.tsx   /graduate-trainee
│   └── blog/
│       ├── page.tsx                /blog (index)
│       ├── [slug]/page.tsx         /blog/<post-slug>
│       └── category/[slug]/page.tsx /blog/category/<category-slug>
├── components/
│   ├── Nav.tsx                     'use client' — sticky nav, scroll-spy, mobile menu
│   ├── Hero.tsx                    Reusable hero with image-bg or gradient
│   ├── ClientLogoBar.tsx           Static or marquee proof bar
│   ├── ServicesGrid.tsx            Homepage 2-card services block
│   ├── WhoWeAre.tsx                Editorial Block 3
│   ├── AfricaView.tsx              Slim YouTube link section
│   ├── PostCard.tsx                Blog listing card
│   ├── ContactForm.tsx             'use client' — interest-routed form
│   ├── CtaBanner.tsx               Reusable closing CTA
│   └── Footer.tsx                  Dark footer with social icons
├── content/
│   └── blog/
│       └── why-africa-hires-differently.mdx   Starter post
├── lib/
│   ├── site-config.ts              ★ Edit domain, social, contact here
│   ├── clients.ts                  Client logo manifest
│   └── blog.ts                     MDX loading, categories, related posts
├── public/
│   ├── fonts/                      Montserrat + Lato TTFs
│   ├── assets/logos/               Bridge logo variants (Phase 1)
│   └── clients/                    Client logos (Starks, Doss, etc.)
├── netlify.toml                    Netlify build config
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── package.json
└── .github/workflows/ci.yml        GitHub Actions: lint + type-check + build
```

---

## Outstanding work

These are the items expected to land after the initial deploy:

1. **Real photography** — Cohort, presentation, and on-the-ground images from the Drive folder. Drop into `public/photos/` and swap the placeholders in `WhoWeAre.tsx`, `app/graduate-trainee/page.tsx`, and `app/about/page.tsx`.
2. **Initio Capital logo** — Add `public/clients/initio.svg` (or `.png`) and update `lib/clients.ts` line 38 to use it.
3. **Hero background image** — Both service pages use the gradient hero by default. To use a real image instead, pass `bgImage="/photos/your-image.jpg"` to `<Hero ... />` in `app/executive-talent/page.tsx` and `app/graduate-trainee/page.tsx`.
4. **Photo consent verification** — confirm written consent for any identifiable person before going live with their image.
5. **Wire the contact form to a handler** — `components/ContactForm.tsx` currently just shows a success state on submit. Connect to Formspree, Netlify Forms, or your own API endpoint when ready.
6. **Privacy / Terms / Cookies pages** — `/privacy`, `/terms`, `/cookies` are linked in the footer but don't exist as routes yet.
