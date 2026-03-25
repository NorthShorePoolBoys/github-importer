

# Plan: Convert All Static HTML Pages to React

## Overview
Your project has ~60 static HTML files that all share identical navigation, topbar, footer, and floating CTA. The unique content is the middle sections of each page. We'll extract shared elements into reusable React components and create a route for every page.

## Important Consideration
This is a very large conversion (60+ pages). Due to the size, it will need to be done in **multiple rounds** — roughly 5-8 pages per round. I'll prioritize the most important pages first.

## Architecture

```text
src/
├── components/
│   ├── Layout.tsx          ← Topbar + Nav + MobileMenu + Footer + FloatingCTA
│   ├── TopBar.tsx
│   ├── Navigation.tsx      ← Desktop nav with dropdowns
│   ├── MobileMenu.tsx      ← Accordion mobile nav
│   ├── Footer.tsx
│   ├── FloatingPhone.tsx
│   ├── FinalCTA.tsx        ← Shared "Your pool deserves..." section
│   ├── PageHero.tsx        ← Reusable hero section
│   └── SEOHead.tsx         ← Helmet wrapper for meta/structured data
├── pages/
│   ├── Index.tsx           ← Homepage
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Blog.tsx
│   ├── Locations.tsx
│   ├── PoolMaintenance.tsx
│   ├── PoolOpenings.tsx
│   ├── PoolClosings.tsx
│   ├── ... (all service pages)
│   ├── locations/
│   │   ├── Peabody.tsx
│   │   ├── Danvers.tsx
│   │   └── ... (21 location pages)
│   └── blog/
│       ├── GreenPoolWaterFix.tsx
│       └── ... (blog posts)
├── App.tsx                 ← All routes defined
└── styles.css              ← Keep existing CSS as-is
```

## Approach
1. **Keep your existing `styles.css` as-is** — no rewrite to Tailwind. The CSS is well-structured and working. We'll import it globally.
2. **Use `react-helmet-async`** for per-page SEO meta tags, structured data (JSON-LD), and canonical URLs.
3. **Shared Layout component** wraps every page with topbar, nav, footer, and floating CTA.
4. **Each HTML file becomes a React component** containing only the unique body content (everything between nav and footer).
5. **React Router routes** map to the same URL paths (e.g., `/pool-maintenance.html` stays the same via the `_redirects` file or direct route matching).

## Execution Order (batched)
1. **Round 1**: Layout components (TopBar, Nav, MobileMenu, Footer, FloatingPhone, FinalCTA, Layout) + Homepage
2. **Round 2**: Core service pages (pool-maintenance, pool-openings, pool-closings, pool-repair, pool-chemistry, salt-water-pool-service)
3. **Round 3**: Hot tub + Installation pages (hot-tub-services, hot-tub-repair, liner, pumps, filter, heater-installation, safety-covers)
4. **Round 4**: Repair + Leak Detection pages (pool-pump-repair, heater-repair, filter-repair, liner-repair, skimmer-repair, leak-detection, residential-leak-detection, trenchless-pipe-repair)
5. **Round 5**: About, Contact, Locations, Blog index, 404
6. **Round 6-8**: Location pages (21 town pages) + Blog posts (12 posts)

## Technical Details
- Install `react-helmet-async` for SEO head management
- GTM script added once in `index.html` (the Vite entry point), not repeated per page
- All routes added to `App.tsx` with `.html` extension matching for SEO continuity
- Structured data (JSON-LD) injected per page via Helmet
- Nav dropdown interactivity converted from vanilla JS to React state

Shall I proceed with Round 1 (shared layout components + homepage)?

