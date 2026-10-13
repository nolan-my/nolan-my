# Nolan Innovation design

The direction is Ink & Cobalt: a light software studio website with restrained blue accents. Keep the website light at all times, regardless of OS preference; do not switch to a dark theme in future refinements. Show real shipped work, keep the hero quiet, and use subtle interaction feedback.

## Color and typography

`src/app/globals.css` is the source of truth for design tokens.

| Role | Color |
| --- | --- |
| Page / text / supporting text | `#f6f7fa` / `#172033` / `#5b6475` |
| Rules / cobalt accent | `#d9dfeb` / `#3458c5` |
| Project surface / text / supporting text | `#edf0f5` / `#24365b` / `#52627f` |
| Contact surface / text / supporting text | `#17243d` / `#f0f3fa` / `#b9c5db` |
| Contact rules | `#425371` |

Use self-hosted Manrope throughout. Medium-weight display text and compact supporting copy establish hierarchy. Keep tracking at or above -0.04em. The font and its OFL license live in `src/app/fonts/`.

The palette and native browser controls always use light mode. The original deep-ink contact section remains a contrasting section within the light website.

## Layout

- Center content in an 80rem frame with fluid gutters.
- Use the text-only Nolan wordmark in both header and footer. Standalone logo assets in `public/brand/` use pure black and white, with transparent versions of both letter colours; retain Manrope ExtraBold (800) and -0.035em tracking.
- The favicon uses the white lowercase “n” from the Manrope ExtraBold wordmark in a black circle, keeping it readable at browser-tab sizes. Keep Apple touch and maskable app icons opaque and square with the same “n” so platforms can apply their own shapes. Next.js metadata files in `src/app/` register the favicon, SVG icon, Apple icon, and web manifest.
- Keep the hero headline-only, with no description or CTA. Display type scales up to 6rem while keeping the Try Lah showcase within the desktop viewport.
- Keep navigation sticky. After 64px of scrolling, contain it in a compact, opaque frame with a fine border. Section anchors clear the header.
- Keep the header's “Let's talk” link as plain text with an arrow, without a filled button background.
- Present Try Lah in a single pale slate showcase with product copy on the left and two upright, vertically staggered phone mockups on the right. Both sides share the same background. Give the phones generous inset space and soft shadows; stack the showcase at 900px so neither side gets squeezed. Asset provenance is in `public/work/SOURCES.md`.
- Stack main sections on mobile while keeping navigation visible and the product screens side by side.
- Use breakpoints at 900px, 600px, and 360px. Controls have 7px corners; the product showcase has 16px corners.
- Use spacing and fine rules for the product, services, and contact. Service entries are informational text, never links or hover targets.

## Content and interaction

The page flows from the offer to Try Lah, three services, then WhatsApp and email contact. The Try Lah count of “20,000 active users and counting” was supplied by the company on 2026-10-13.

Keep content visible on load. Native smooth section scrolling respects reduced motion. Use 160ms control feedback and 240ms header transitions; avoid entrance animations and scroll reveals. The product screens use original lossless PNGs. Size the phones directly in layout, without transforms, perspective, hover movement, or filters on the image layer, to preserve text clarity. Only the project link is clickable. Service entries have no hover styling, arrows, or click behavior. The hero stays headline-only with solid colors and no effects.

The compact header draws on Aceternity UI's [Resizable Navbar](https://ui.aceternity.com/components/resizable-navbar). The phone stage is static, including on hover. The editorial gallery experiment was rejected; retain the split showcase.

Avoid spotlights, glowing borders, saturated full-section accents, and exaggerated 3D movement. Keep Aceternity-inspired interactions restrained.

Maintain visible keyboard focus, the skip link, at least 44px touch targets, external-link announcements, and copy-email success/error feedback. Keep the email link available when clipboard access fails.

Avoid unrelated background effects, repetitive card grids, generic slogans, invented claims, and excessive copy. Development screenshots and review reports are temporary files and should not be committed.
