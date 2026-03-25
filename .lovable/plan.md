

# Fix: Delete Static HTML Files to Enable React Routing

## What and Why
The 63 static `.html` files in the project root are blocking React Router. Vite serves them directly instead of letting the React app handle the routes. Deleting them lets React take over — pages work in Lovable preview and on Netlify via your existing `_redirects` file.

## What Gets Deleted
All `.html` files in the project root **except**:
- `index.html` (Vite SPA entry point)
- `404.html` (Netlify fallback)

That's 63 files including all service pages, town pages, blog posts, and standalone pages.

## What Stays
- All React components in `src/pages/` (your editable pages)
- `_redirects` (already configured for Netlify)
- `sitemap.xml`, `robots.txt`, `styles.css`
- All images/media assets
- All config files

## No Other Changes
React components, routing in `App.tsx`, and `_redirects` are already correctly set up. This is purely cleanup.

