

# Import Pages from GitHub Repo + Fix Navigation

## Problem
When clicking links, pages appear to show the same content (landing page). Two issues:
1. The page files may have subtle content differences from the GitHub repo versions
2. There is no scroll-to-top behavior on route changes — React Router keeps the scroll position, making it look like you're still on the same page

## Plan

### 1. Replace all page files with GitHub repo versions
Download and overwrite every file in `src/pages/` and `src/pages/blog/` from the repo at `https://github.com/NorthShorePoolBoys/github-importer`. This covers 30 page files and 15 blog files.

### 2. Add scroll-to-top on navigation
Create a `ScrollToTop` component that calls `window.scrollTo(0, 0)` on every route change, and add it inside `<BrowserRouter>` in `App.tsx`. This is the most common cause of "every page looks the same" in React SPAs — without it, clicking a nav link changes the route but keeps you scrolled to the same position.

### 3. Also import any updated components
Check and replace `src/components/` files from the repo if they differ (Layout, Navigation, Footer, etc.).

## Technical Details
- Total files to write: ~45 (30 pages + 15 blog posts + potential component updates)
- New file: `src/components/ScrollToTop.tsx`
- Edit: `src/App.tsx` (add `<ScrollToTop />` inside `<BrowserRouter>`)
- All existing routes in `App.tsx` remain unchanged

