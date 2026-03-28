

# Fix: Remove `.html` Extensions from All Internal Links

## Problem
All navigation links throughout the app use `.html` extensions (e.g., `/pool-maintenance.html`). In Lovable's Vite dev server, clicking these causes a full-page reload instead of a smooth React Router client-side navigation — Vite tries to find and serve an actual `.html` file, which doesn't exist. This makes it look like only the landing page works.

The `_redirects` file is a Netlify-only feature and has no effect in Lovable preview. The real fix is to make all internal `<Link>` components use clean URLs (e.g., `/pool-maintenance`), which React Router already handles.

## Changes (7 files)

### 1. `src/components/Navigation.tsx`
Strip `.html` from all `href` values in `navItems` and `locationItems` arrays, and from standalone `<Link to="...">` elements (~84 occurrences).

### 2. `src/components/MobileMenu.tsx`
Strip `.html` from all `<Link to="...">` props.

### 3. `src/components/Layout.tsx`
Strip `.html` from all `<Link to="...">` props.

### 4. `src/components/Footer.tsx`
Strip `.html` from all `<Link to="...">` props.

### 5. `src/components/FinalCTA.tsx`
Strip `.html` from the contact link.

### 6. `src/components/ServiceAreaLinks.tsx`
Strip `.html` from any links (if present).

### 7. `src/components/ContactForm.tsx`
Strip `.html` from any thank-you redirect (if present).

## What Stays Unchanged
- `App.tsx` routes — already support both `/path` and `/path.html`
- `_redirects` — still needed for Netlify production
- `netlify.toml` — still needed for prerendering
- All page content files

## Result
Navigation works in both Lovable preview (clean URLs via React Router) and Netlify production (`.html` URLs handled by `_redirects` fallback + React Router).

