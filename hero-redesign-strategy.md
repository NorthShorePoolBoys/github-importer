# NORTH SHORE POOL BOYS — HERO SECTION CRO REDESIGN

## CURRENT STATE ANALYSIS

### What's Wrong With the Current Hero
1. **Solid dark background with zero visual proof** — No images, no video, nothing showing actual pool work. Visitors can't "see" the service.
2. **Hero is 1,561px tall** — The embedded form makes the hero absurdly long. Above-the-fold content gets diluted.
3. **H1 misses the money keyword** — "Professional Pool Service for the North Shore" doesn't include "Peabody, MA" which is the primary local SEO target.
4. **No social proof above the fold** — The 4.8 Google rating and awards are buried way down the page. New visitors never see them before bouncing.
5. **Stats say "7 Towns"** — You serve 16+. This undersells your coverage.
6. **Redundant stats** — Appear twice (hero + "At a Glance" sidebar).
7. **Form in the hero is friction** — Too many fields visible immediately creates cognitive overload. The CTA should drive to the form, not embed it.
8. **No urgency** — No seasonal messaging for pool opening season.

---

## 1. HERO HEADLINE
**Old:** "Professional Pool Service for the North Shore"
**New:** "The North Shore's Most Trusted Pool Service"

Why: "Most Trusted" creates social proof positioning. "North Shore" covers the geographic area. The H1 maintains the SEO keyword structure while adding a conversion-focused trust claim backed by the awards.

## 2. HERO SUBHEADLINE
"Award-winning maintenance, repairs, and openings for homeowners across Peabody, Danvers, Beverly, Salem & 16 North Shore towns."

Why: Hits "Peabody" + "Danvers" + "Beverly" + "Salem" for local SEO. "Award-winning" backs the trust claim. "16 North Shore towns" shows scale. Specific services mentioned.

## 3. CTA BUTTONS
- **Primary:** "Get a Free Quote" → scrolls to contact form (teal, large, high contrast)
- **Secondary:** "Call (978) 882-5932" → tel: link (ghost/outline, same size)

Why: Free quote is the #1 conversion action. Phone call is #2 for high-intent visitors. Both above the fold. No form clutter.

## 4. TRUST BADGES (Over the Video)
- ★★★★★ 4.8 Google Rating
- "Best of 2025 & 2026 — Southern New England"
- CPO Certified · Fully Insured
- "We respond within 48 hours"

## 5. HERO VIDEO STRATEGY
- **Autoplay:** Yes — muted, no controls
- **Loop:** Yes — seamless
- **Overlay:** Dark gradient overlay (rgba(11, 22, 36, 0.55)) so white text is legible
- **Poster:** First frame of video as fallback image
- **Mobile:** Show poster image (save bandwidth), hide video on <768px
- **Loading:** lazy, preload="none" on mobile
- **Fade:** Video fades in from opacity 0 → 1 over 1.5s on load

## 6. TEXT OVER VIDEO
The video speaks for itself. The headline, subheadline, CTAs, and trust strip overlay the video. No animated text phrases — that would compete with the headline and hurt readability.

## 7. HERO SECTION LAYOUT

**Desktop (1200px+):**
- Full-width video background, 85vh height (not 100vh — show hint of next section)
- Content left-aligned in a max-width container
- Headline + subheadline + CTAs stacked left
- Trust strip at bottom of hero (horizontal bar)
- Form is REMOVED from hero — placed in its own section below

**Mobile (<768px):**
- Poster image instead of video (performance)
- Full-width, auto height
- Content centered
- Stacked CTAs (full width)
- Trust badges wrap to 2x2 grid

## 8. CONVERSION IMPROVEMENTS ABOVE THE FOLD
1. **Remove the form from the hero** — It makes the hero 1500px+ tall and creates cognitive overload
2. **Add Google rating badge** — "4.8 ★★★★★ on Google" immediately visible
3. **Add award badge** — "Best of 2025 & 2026" creates instant credibility
4. **Seasonal urgency line** — "Pool opening season is here — book now before slots fill up"
5. **Floating phone button** — Already exists, keep it
6. **Sticky CTA bar on scroll** — After scrolling past hero, show a slim "Get a Free Quote | Call Now" bar

## 9. IMPLEMENTATION
See hero-section.html for the complete code.
