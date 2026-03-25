

# Round 3: Convert Hot Tub + Installation Pages to React

## What Gets Built
7 new React page components + 7 new routes in App.tsx.

## Files to Create

| File | Source | Key Sections |
|------|--------|-------------|
| `src/pages/HotTubServices.tsx` | hot-tub-services.html | Video hero (hot-tub-video.mp4), content block w/ image, 6 service cards, CTA band linking to hot-tub-repair, 6 FAQs, ServiceAreaLinks |
| `src/pages/HotTubRepair.tsx` | hot-tub-repair.html | page-hero, content block w/ image, 6 "common repairs" cards, CTA band linking to hot-tub-services, 6 FAQs (w/ internal Link), ServiceAreaLinks |
| `src/pages/LinerInstallation.tsx` | liner.html | page-hero, content block w/ image, 4 process cards, before/after comparison (2-col), 9-image gallery (3-col), 5 FAQs, ServiceAreaLinks |
| `src/pages/PumpInstallation.tsx` | pumps.html | page-hero, 4 pump type packages in 2x2 grid (one "Recommended" featured), 5 FAQs, ServiceAreaLinks |
| `src/pages/FilterInstallation.tsx` | filter.html | page-hero, 3 filter packages (one "Most Popular" featured), 4 warning sign cards, 5 FAQs, ServiceAreaLinks |
| `src/pages/HeaterInstallation.tsx` | heater-installation.html | page-hero, text-only content block, 3 heater type cards, text-only content block, CTA band, 4 FAQs, ServiceAreaLinks |
| `src/pages/SafetyCovers.tsx` | safety-covers.html | page-hero, content block w/ image + internal links, 2 cover type cards (mesh/solid w/ internal links), 4 process cards, reversed content block (direction:rtl/ltr), CTA band, 5 FAQs, ContactForm, ServiceAreaLinks |

## File to Modify

**`src/App.tsx`** -- Add 7 imports and routes:
```
/hot-tub-services.html     → HotTubServices
/hot-tub-repair.html       → HotTubRepair
/liner.html                → LinerInstallation
/pumps.html                → PumpInstallation
/filter.html               → FilterInstallation
/heater-installation.html  → HeaterInstallation
/safety-covers.html        → SafetyCovers
```

## Implementation Pattern
Same as Rounds 1-2 (established in PoolRepair.tsx, etc.):
- Wrap in `<Layout>`, use `<SEOHead>` with JSON-LD schemas from each HTML `<head>`
- FAQ accordion via `useState` + `toggleFaq` pattern
- Internal links via `<Link to="...">`
- Reuse `<ServiceAreaLinks>` and `<ContactForm>` components
- All unique body content (between nav and footer) converted to JSX
- Inline styles preserved as `style={{}}` objects

## Notable Page-Specific Details
- **HotTubServices**: Uses `hero-video` class with `hot-tub-video.mp4` and `hot-tub-poster.jpg` (same pattern as homepage video hero)
- **PumpInstallation**: `packages__grid` with `grid-template-columns: repeat(2, 1fr)` override and `max-width:860px`
- **SafetyCovers**: Reversed content block uses `style={{direction:'rtl'}}` on outer div with `style={{direction:'ltr'}}` on children; includes `<ContactForm>` component

