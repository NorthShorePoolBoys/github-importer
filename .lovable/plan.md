

# Round 2: Convert Core Service Pages to React

## Pages to Create (7 total)
1. `src/pages/PoolMaintenance.tsx` — pool-maintenance.html
2. `src/pages/PoolOpenings.tsx` — pool-openings.html
3. `src/pages/PoolClosings.tsx` — pool-closings.html
4. `src/pages/PoolRepair.tsx` — pool-repair.html
5. `src/pages/PoolChemistry.tsx` — pool-chemistry.html
6. `src/pages/SaltWaterPoolService.tsx` — salt-water-pool-service.html
7. `src/pages/AboveGroundPoolInstallation.tsx` — above-ground-pool-installation.html

## Shared Components to Extract
Two patterns repeat across all pages and should be extracted into reusable components:

- **`src/components/ServiceAreaLinks.tsx`** — The "We provide this service across the North Shore" section with 7 town link pills (Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield). Identical on every page.

- **`src/components/ContactForm.tsx`** — The contact form + info sidebar (appears on saltwater and above-ground pages, and will repeat on future pages). Netlify form with name, phone, email, service, town, message fields.

## Per-Page Structure
Each page follows the same pattern established in Round 1:
- Wrapped in `<Layout>` component (provides topbar, nav, mobile menu, footer, floating CTA)
- `<SEOHead>` with title, description, canonical URL, and JSON-LD schemas (LocalBusiness, Service, FAQPage, BreadcrumbList)
- Unique body content converted from HTML to JSX (sections between nav and footer)
- FAQ sections use React state for accordion toggle (same pattern as Index.tsx)
- All internal links use `<Link to="...">` from react-router-dom

## Route Registration
Add all 7 routes to `App.tsx`:
```
/pool-maintenance.html
/pool-openings.html
/pool-closings.html
/pool-repair.html
/pool-chemistry.html
/salt-water-pool-service.html
/above-ground-pool-installation.html
```

## Key Content Notes
- **Pool Maintenance**: Has video hero (like homepage), 2 pricing packages (Basic/Deluxe), before/after images, 4 "every visit" cards, 6 FAQs
- **Pool Openings**: Has video hero, 3 pricing packages, content blocks, 6 FAQs
- **Pool Closings**: Uses `page-hero` (no video), 3 packages with images, 6 FAQs
- **Pool Repair**: Uses `page-hero`, 3 content blocks (crack/tile/pipe), 4 warning sign cards, CTA band, 6 FAQs
- **Pool Chemistry**: Uses `page-hero`, content block, 6 chemistry parameter cards, 6 FAQs
- **Saltwater**: Uses `page-hero`, content blocks, 6 service cards, CTA band, 5 FAQs, contact form
- **Above-Ground**: Uses `page-hero`, content blocks, gallery, 5 process cards, CTA band, 6 FAQs, contact form, service area links

## Technical Details
- `dangerouslySetInnerHTML` not needed; all content is directly converted to JSX
- Inline styles from HTML preserved as React `style={{}}` objects
- `&amp;` becomes `&`, HTML entities converted to JSX equivalents
- `onclick="toggleFaq(this)"` replaced with React `onClick` + `useState`

