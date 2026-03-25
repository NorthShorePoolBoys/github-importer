

# Rounds 6-8: Convert All Remaining Pages to React

## Summary
35 remaining pages to convert: 21 town/location pages, 12 blog posts, plus 2 standalone pages (thank-you, pool-service-cost-massachusetts).

## Architecture: Data-Driven Town Pages

The 21 town pages follow an **identical structure** with only these differences per town:
- Town name, zip code, neighborhoods
- Hero subtitle text
- Content block paragraphs (local intro, why choose us)
- Nearby town links (3-4 towns)
- Image alt text
- SEO meta/JSON-LD schemas

**Approach**: Create a single `src/pages/TownPage.tsx` component that takes a `townSlug` prop, then define a `townData` config object with all 21 towns' unique content. This avoids 21 nearly-identical 300-line files.

### Town Pages (21)
Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, Marblehead, Swampscott, Lynn, Wakefield, Reading, North Reading, Topsfield, Wenham, Hamilton, Nahant, Georgetown, Boxford, Essex, Ipswich

### Town Page Sections (identical layout)
1. `page-hero` with town-specific title/subtitle
2. Content block with image — local intro
3. 6 service cards grid (same services, town-specific descriptions)
4. Reversed content block — "Why choose us" with nearby town links
5. 3 blog tip cards
6. CTA band
7. Nearby service areas pills (varies per town)
8. ContactForm with `id="contact"`

## Blog Posts (12)

Each blog post is an article page with:
- `page-hero` (label + h1 + intro)
- Article body (`max-width: 760px`) with h2 sections, styled paragraphs, internal links, callout boxes
- Some have numbered step lists, comparison tables, or tip boxes
- JSON-LD: Article + FAQPage + BreadcrumbList + LocalBusiness

| # | File | Source HTML |
|---|------|------------|
| 1 | `BlogGreenPoolWaterFix.tsx` | blog-green-pool-water-fix.html |
| 2 | `BlogWhenToOpenPool.tsx` | blog-when-to-open-pool-massachusetts.html |
| 3 | `BlogPoolMaintenanceChecklist.tsx` | blog-pool-maintenance-checklist.html |
| 4 | `BlogPoolClosingChecklist.tsx` | blog-pool-closing-checklist-massachusetts.html |
| 5 | `BlogPoolMaintenanceCost.tsx` | blog-pool-maintenance-cost-massachusetts.html |
| 6 | `BlogSignsPoolPumpRepair.tsx` | blog-signs-pool-pump-needs-repair.html |
| 7 | `BlogHowToTellPoolLeak.tsx` | blog-how-to-tell-if-pool-has-leak.html |
| 8 | `BlogHowToWinterizeHotTub.tsx` | blog-how-to-winterize-hot-tub.html |
| 9 | `BlogIsSaltwaterPoolWorthIt.tsx` | blog-is-saltwater-pool-worth-it.html |
| 10 | `BlogVinylLinerVsFiberglass.tsx` | blog-vinyl-liner-vs-fiberglass-pool.html |
| 11 | `BlogAboveGroundBuyingGuide.tsx` | blog-above-ground-pool-buying-guide.html |
| 12 | `BlogBestPoolService2025.tsx` | blog-best-pool-service-2025-businessrate-award.html |
| 13 | `BlogBestPoolService2026.tsx` | blog-best-pool-service-2026-businessrate-benchmark-award.html |
| 14 | `BlogBestPoolCleaningMA.tsx` | blog-best-pool-cleaning-service-massachusetts-2025-2026.html |
| 15 | `BlogBestPoolServiceSNE2026.tsx` | blog-best-pool-service-southern-new-england-2026.html |

## Standalone Pages (2)

| File | Source HTML |
|------|------------|
| `ThankYou.tsx` | thank-you.html — confirmation page with 3-step "what happens next", CTA, service links |
| `PoolServiceCost.tsx` | pool-service-cost-massachusetts.html — pricing guide page |

## Files to Create
- `src/data/townData.ts` — Config object for all 21 towns (name, slug, zip, neighborhoods, intro text, nearby towns, SEO schemas)
- `src/pages/TownPage.tsx` — Single data-driven component for all town pages
- 15 blog post pages in `src/pages/blog/`
- `src/pages/ThankYou.tsx`
- `src/pages/PoolServiceCost.tsx`

## Files to Modify
- `src/App.tsx` — Add ~38 new routes (21 town + 15 blog + 2 standalone)
- `_redirects` — Add any missing redirect rules for new routes

## Route Registration

```text
# 21 Town routes (all use TownPage with different slugs)
/pool-service-peabody-ma.html → <TownPage slug="peabody" />
/pool-service-danvers-ma.html → <TownPage slug="danvers" />
... (19 more)

# 15 Blog routes
/blog-green-pool-water-fix.html → BlogGreenPoolWaterFix
/blog-when-to-open-pool-massachusetts.html → BlogWhenToOpenPool
... (13 more)

# 2 Standalone
/thank-you.html → ThankYou
/pool-service-cost-massachusetts.html → PoolServiceCost
```

## Implementation Pattern
Same as Rounds 1-5:
- Wrap in `<Layout>`, `<SEOHead>` with JSON-LD from each HTML `<head>`
- FAQ accordion via `useState` + `toggleFaq`
- Internal links via `<Link to="...">`
- Reuse `<ServiceAreaLinks>`, `<ContactForm>`

## Execution Order
Due to size, this will be implemented in sub-batches:
1. **First**: `townData.ts` + `TownPage.tsx` + 21 town routes (biggest win — eliminates 21 files with one component)
2. **Second**: All 15 blog posts + routes
3. **Third**: ThankYou + PoolServiceCost + final routes + cleanup

