# Replace the AmaBot icon with the new logo

Swap the old robot-head icon for the newly uploaded one everywhere, plus the whole favicon/app-icon set. The "amabot" wordmark stays exactly as it is, and nothing else on the site changes.

## What changes

- Header (desktop + mobile), footer, hero, section eyebrows, and the Coming Soon modal — all pull the icon from one shared source, so they update together.
- Favicons and app icons: favicon.ico, 16/32/48/96 PNGs, apple-touch-icon, Android/PWA 192 and 512 icons, favicon.png.
- Organization JSON-LD logo reference (points at favicon.png, so it picks up the new art automatically).
- Old icon assets removed once nothing references them.

## What does not change

Layout, spacing, typography, colors, backgrounds, copy, SEO text, structured-data content, animations, navigation, the wordmark, and the OG/Twitter share image (it is a full social banner, not the logo).

## Technical notes

- Upload the new PNG and generate the same responsive set the current icon uses (128/256/384 in AVIF, WebP, PNG) via the assets CDN, then repoint `iconImg` in `src/lib/optimized-images.ts`. Every component reads from there, so no component edits are needed.
- Regenerate the `public/` icon files from the new image with ImageMagick, square-padded with transparency preserved so nothing stretches and it stays sharp at 16px.
- `src/routes/__root.tsx` icon `<link>` tags and `site.webmanifest` keep the same filenames, so no markup changes are required there.
- Delete the now-unused old `src/assets/opt/icon-*` pointers so no fallback can surface the old mark.
- Verify: grep the project for leftover old-icon references, then render key routes at desktop and mobile widths to confirm the new mark appears everywhere.
