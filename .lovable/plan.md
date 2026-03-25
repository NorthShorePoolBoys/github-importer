

# Round 4: Convert Repair + Leak Detection Pages to React

## Pages to Create (8 total)

| # | File | Source HTML | Key Sections |
|---|------|------------|-----------|
| 1 | `src/pages/PoolPumpRepair.tsx` | pool-pump-repair.html | page-hero (links to /pumps.html), content block w/ image + internal links, 3 common repairs cards w/ product images, 4 warning sign cards (emoji icons), 6 FAQs, ServiceAreaLinks |
| 2 | `src/pages/HeaterRepair.tsx` | heater-repair.html | page-hero, 6 heater problem cards, content block w/ internal links (heater-installation, town pages), CTA band, 4 FAQs, ServiceAreaLinks |
| 3 | `src/pages/FilterRepair.tsx` | filter-repair.html | page-hero, 4 filter problem cards (w/ internal links to pool-chemistry, filter.html), content block (sand/cartridge/DE details w/ internal link), CTA band, ServiceAreaLinks, 4 FAQs |
| 4 | `src/pages/LinerRepair.tsx` | liner-repair.html | page-hero (links to /liner.html), 4 issue cards, content block (repair vs replace w/ internal link), CTA band, ServiceAreaLinks, 4 FAQs |
| 5 | `src/pages/SkimmerRepair.tsx` | skimmer-repair.html | page-hero, 4 problem cards (w/ internal links to leak-detection, trenchless), content block (MA-specific w/ links to pool-closings, pool-openings), CTA band, ServiceAreaLinks, 4 FAQs |
| 6 | `src/pages/LeakDetection.tsx` | leak-detection.html | page-hero, 6 equipment cards (emoji icons, w/ blog link), content block (common leak sources w/ trenchless link), CTA band, 5 FAQs, ServiceAreaLinks |
| 7 | `src/pages/ResidentialLeakDetection.tsx` | residential-leak-detection.html | page-hero, 6 "what we detect" cards, 6 equipment cards, content block (trenchless repair + 4 pipe type cards + gradient callout), warning signs content block, CTA band, "why choose us" content block (w/ town links), 7 FAQs, ServiceAreaLinks, ContactForm |
| 8 | `src/pages/TrenchlessPipeRepair.tsx` | trenchless-pipe-repair.html | page-hero, content block + 3 benefit cards, content block (how it works w/ leak-detection link), content block (applications w/ town links), CTA band, 5 FAQs, ServiceAreaLinks |

## Route Registration
Add 8 routes to `App.tsx`:
```
/pool-pump-repair.html        → PoolPumpRepair
/heater-repair.html           → HeaterRepair
/filter-repair.html           → FilterRepair
/liner-repair.html            → LinerRepair
/skimmer-repair.html          → SkimmerRepair
/leak-detection.html          → LeakDetection
/residential-leak-detection.html → ResidentialLeakDetection
/trenchless-pipe-repair.html  → TrenchlessPipeRepair
```

## Implementation Pattern
Same as Rounds 1-3:
- Wrap in `<Layout>`, `<SEOHead>` with JSON-LD from each HTML `<head>`
- FAQ accordion via `useState` + `toggleFaq`
- Internal links via `<Link to="...">`
- Reuse `<ServiceAreaLinks>` and `<ContactForm>` (residential-leak-detection only)
- Inline styles preserved as `style={{}}` objects

## Notable Page-Specific Details
- **PoolPumpRepair**: 3 repair cards include product images (impeller, gasket, shaft seal PNGs from Squarespace CDN)
- **ResidentialLeakDetection**: Largest page (~619 lines HTML). Has a gradient callout box (`background: linear-gradient(135deg, var(--teal), var(--pool))`) with a trenchless link, plus its own ContactForm with residential-specific service dropdown options. Custom FinalCTA title: "Don't let a hidden leak become a costly disaster"
- **FilterRepair**: No dedicated FAQ section heading -- uses "Common questions" instead of service-specific title
- **Skimmer/Filter repair pages**: Note these have no footer/final-CTA in their HTML (end with `</script>`) -- Layout component handles that

## Technical Details
- All 8 pages use `page-hero` (no video heroes in this round)
- Emoji characters used directly in JSX (no conversion needed)
- Several pages have `<a href="#contact">` smooth scroll links -- convert to simple `<a href="#contact">` since ContactForm has `id="contact"`

