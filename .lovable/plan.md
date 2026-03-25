

# Fix: Add Missing Routes and Clean URL Support

## Problem
Three categories of broken navigation:

1. **Clean URLs don't work** (`/liners`, `/pool-maintenance`, `/about`, etc.) — the `_redirects` file is Netlify-only and doesn't apply in the Lovable preview or any non-Netlify host. React Router only has `.html` routes registered.

2. **7 non-blog-prefixed HTML pages have no route** — these are alternate URLs (without the `blog-` prefix) that should redirect to the blog versions:
   - `green-pool-water-fix.html`
   - `when-to-open-pool-massachusetts.html`
   - `pool-maintenance-checklist.html`
   - `best-pool-service-2025-businessrate-award.html`
   - `best-pool-service-2026-businessrate-benchmark-award.html`
   - `best-pool-cleaning-service-massachusetts-2025-2026.html`
   - `best-pool-service-southern-new-england-2026.html`

3. **`_redirects` is incomplete** — missing clean URL entries for ~15 pages.

## Fix (single file: `src/App.tsx`)

Add **duplicate routes without `.html`** for every page, so both `/liner.html` and `/liner` work. Also add redirect routes for the 7 non-blog-prefixed pages using `Navigate`.

### Changes

**Add clean URL routes** — for every existing `.html` route, add a matching route without the extension. Example:
```tsx
<Route path="/liner.html" element={<LinerInstallation />} />
<Route path="/liner" element={<LinerInstallation />} />
```

This covers all ~30 service/info pages, all 21 town pages, all 15 blog posts, and the 2 standalone pages.

**Add redirect routes for non-blog-prefixed pages** using React Router's `Navigate`:
```tsx
<Route path="/green-pool-water-fix.html" element={<Navigate to="/blog-green-pool-water-fix.html" replace />} />
<Route path="/when-to-open-pool-massachusetts.html" element={<Navigate to="/blog-when-to-open-pool-massachusetts.html" replace />} />
<Route path="/pool-maintenance-checklist.html" element={<Navigate to="/blog-pool-maintenance-checklist.html" replace />} />
<Route path="/best-pool-service-2025-businessrate-award.html" element={<Navigate to="/blog-best-pool-service-2025-businessrate-award.html" replace />} />
<Route path="/best-pool-service-2026-businessrate-benchmark-award.html" element={<Navigate to="/blog-best-pool-service-2026-businessrate-benchmark-award.html" replace />} />
<Route path="/best-pool-cleaning-service-massachusetts-2025-2026.html" element={<Navigate to="/blog-best-pool-cleaning-service-massachusetts-2025-2026.html" replace />} />
<Route path="/best-pool-service-southern-new-england-2026.html" element={<Navigate to="/blog-best-pool-service-southern-new-england-2026.html" replace />} />
```

**Update `_redirects`** — add missing clean URL entries for completeness on Netlify.

### Implementation approach

Rather than duplicating every Route line, use a helper pattern:
```tsx
// Helper: register both /path.html and /path
const DualRoute = ({ path, element }) => (
  <>
    <Route path={`${path}.html`} element={element} />
    <Route path={path} element={element} />
  </>
);
```

Or simply list all routes with both variants in the Routes block.

## Files to modify
1. `src/App.tsx` — Add ~50 clean URL routes + 7 redirect routes
2. `_redirects` — Add missing entries for complete Netlify coverage

## No content changes
All page components, town data, and blog posts are correctly built. This is purely a routing fix.

