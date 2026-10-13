# Nolan Innovation design

The approved direction is Ink & Cobalt: a light-only software studio website for founders and businesses. Show real shipped work, keep the offer concise, and make contacting Nolan straightforward.

## Color and typography

`src/app/globals.css` is the source of truth for design tokens.

| Role | Color |
| --- | --- |
| Page / text / supporting text | `#f6f7fa` / `#172033` / `#5b6475` |
| Rules / cobalt accent | `#d9dfeb` / `#3458c5` |
| Project surface / text / supporting text | `#e5ebf7` / `#24365b` / `#52627f` |
| Contact surface / text / supporting text | `#17243d` / `#f0f3fa` / `#b9c5db` |
| Contact rules | `#425371` |

Use self-hosted Manrope throughout. Medium-weight display text and compact supporting copy establish hierarchy. Keep tracking at or above -0.04em. The font and its OFL license live in `src/app/fonts/`.

The page always uses light mode, including when the operating system prefers dark mode. The deep-ink contact section is part of the fixed palette.

## Layout

- Center content in an 80rem frame with fluid gutters.
- Use the text-only Nolan wordmark in both header and footer. Standalone logo assets in `public/brand/` use pure black and white, with transparent versions of both letter colours; retain Manrope ExtraBold (800) and -0.035em tracking.
- The favicon uses the white wordmark in a black circle. Keep Apple touch and maskable app icons opaque and square so platforms can apply their own shapes. Next.js metadata files in `src/app/` register the favicon, SVG icon, Apple icon, and web manifest.
- Keep the hero compact so the Try Lah showcase begins within the desktop viewport.
- Show the two existing Try Lah screenshots inside licensed iPhone 18 Pro frames. Asset provenance is in `public/work/SOURCES.md`.
- Stack main sections on mobile while keeping navigation visible and the product screens side by side.
- Use breakpoints at 900px, 600px, and 360px. Controls have 7px corners; the product stage has 16px corners.
- Reserve shadows for device imagery. Use spacing and fine rules for services and contact.

## Content and interaction

The page flows from the offer to Try Lah, three services, then WhatsApp and email contact. The Try Lah count of “20,000 active users and counting” was supplied by the company on 2026-10-13.

Keep content visible on load. Native smooth section scrolling respects reduced motion. Feedback is limited to short, 160ms interactions; avoid entrance animations and scroll reveals.

Maintain visible keyboard focus, the skip link, at least 44px touch targets, external-link announcements, and copy-email success/error feedback. Keep the email link available when clipboard access fails.

Avoid decorative gradients, repetitive card grids, generic slogans, invented claims, and excessive copy. Development screenshots and review reports are temporary files and should not be committed.
