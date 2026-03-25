

# SEO Hardening: Netlify Prerendering + Meta Tag Cleanup

## What This Does
Enables Netlify's built-in prerendering so search engine bots (Google, Bing, etc.) receive fully-rendered static HTML snapshots instead of a blank React shell. This gives you the SEO benefits of static HTML while keeping the React SPA for real users.

## Changes

### 1. Create `netlify.toml`
Add prerendering configuration:
- Enable Netlify's bot-aware prerendering (serves static HTML to crawlers)
- Set proper SPA redirect rules as a backup to `_redirects`
- Add security headers (X-Frame-Options, etc.)

### 2. Update `src/components/SEOHead.tsx`
- Add a `noIndex` optional prop (defaults to `false`)
- When `true`, sets `<meta name="robots" content="noindex, nofollow">`
- This replaces the hardcoded `index, follow` on pages like Thank You

### 3. Update `src/pages/ThankYou.tsx`
- Pass `noIndex={true}` to SEOHead (thank-you page should not be indexed — already blocked in robots.txt but belt-and-suspenders)

## Why This Is the Best Option
- Zero framework migration needed (no Astro/Next.js)
- Googlebot sees fully-rendered HTML with all meta tags, JSON-LD, and content
- Real users still get the fast React SPA experience
- Works immediately on Netlify deploy with no build changes

