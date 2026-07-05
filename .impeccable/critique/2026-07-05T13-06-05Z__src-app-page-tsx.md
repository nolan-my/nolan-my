---
target: existing Nolan Innovation landing page
total_score: 25
p0_count: 0
p1_count: 3
timestamp: 2026-07-05T13-06-05Z
slug: src-app-page-tsx
---
## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of system status | 2 | Email copy lacks visible text feedback and failure handling. |
| 2 | Match system / real world | 3 | Plain language, but vague positioning and an undisclosed WhatsApp destination. |
| 3 | User control and freedom | 3 | Simple anchors work, but external tabs and clipboard behavior are imposed. |
| 4 | Consistency and standards | 3 | Cohesive styling; CTA treatments and destinations are inconsistent. |
| 5 | Error prevention | 2 | Clipboard and third-party contact paths assume success. |
| 6 | Recognition rather than recall | 3 | Main actions are visible, but copied state and channel behavior require inference. |
| 7 | Flexibility and efficiency | 3 | Direct navigation and contact paths are efficient. |
| 8 | Aesthetic and minimalist design | 3 | Clean, but generic decoration and empty space do not build brand value. |
| 9 | Error recovery | 1 | Clipboard failure is silent and has no fallback. |
| 10 | Help and documentation | 2 | Visitors lack engagement expectations and sufficient project context. |
| **Total** | | **25/40** | **Acceptable, significant improvement needed** |

## Anti-Patterns Verdict

**LLM assessment:** Moderately AI-looking. The page avoids gradients, glass cards, and bloated copy, but falls into the equally saturated restrained-tech-studio template: blurred fixed header, giant centered system-sans headline, muted subhead, paired blue arrow CTAs, orbital circles, numbered ruled lists, and an oversized generic contact close. It is competent but anonymous.

**Deterministic scan:** Unavailable. The installed detector entrypoint ran but failed because its bundled detector implementation is missing. No clean result or finding count can be claimed.

**Visual overlays:** Unavailable. The critique browser backend was unavailable, so mutable injection could not be confirmed and no user-visible overlay was produced. Source and CSS review were used as the fallback signal.

## Overall Impression

This looks like a clean template, not a high-end studio with a point of view. The typography and spacing are orderly, but the page spends its largest visual moments on generic slogans and decorative circles while the actual work receives two thin text rows. Minimalism is being used to conceal a lack of evidence. The biggest opportunity is to make shipped work the visual and emotional peak.

## What's Working

- The information architecture is direct: work, capabilities, contact.
- Accessibility fundamentals are stronger than average: semantic headings, focus-visible styles, reduced-motion support, reasonable targets, and a live region.
- Responsive rules are compact and intentional, with rows and capability columns adapting without a separate mobile implementation.

## Priority Issues

### [P1] Work does not prove the brand claim

**Why it matters:** Buyers and investors cannot tell whether Try Lah and Next Passkey WebAuthn are owned products, client work, experiments, or open source. There is no role, constraint, outcome, traction, date, or technical evidence.

**Fix:** Turn each project into an on-page evidence block with one decisive visual and a factual mini-case: problem, Nolan's role, and result. Keep outbound links secondary.

**Suggested command:** `/impeccable layout`, then `/impeccable clarify`.

### [P1] Positioning copy is interchangeable

**Why it matters:** “Beyond the build,” “thoughtful software,” “real problems,” and “made to fit” could describe hundreds of studios. Removing the logo leaves nothing recognizably Nolan.

**Fix:** Replace the hero with a concrete, falsifiable offer: what Nolan builds, for whom, and the actual operating advantage. Remove capability claims that cannot be supported by evidence.

**Suggested command:** `/impeccable clarify`.

### [P1] Contact asks for trust before earning it

**Why it matters:** “Start a conversation” silently opens WhatsApp, gives no response expectation, and the email-copy action can fail without feedback.

**Fix:** Name the WhatsApp channel, add one concise response expectation, make email a `mailto:` link, and keep copy as a secondary action with visible success and failure states.

**Suggested command:** `/impeccable harden`.

### [P2] Visual identity is generic rather than premium

**Why it matters:** System sans, paper white, Apple blue, centered composition, and orbital circles reproduce a common tech-studio aesthetic. The orbit is decorative AI garnish with no relationship to the company or work.

**Fix:** Remove the orbits. Establish one owned visual principle through product imagery, a custom typographic move, or a precise system diagram derived from the actual work. Motion should reveal evidence, not replay generic entrance fades.

**Suggested command:** `/impeccable typeset`, then `/impeccable animate`.

### [P2] Mobile hides evaluation paths

**Why it matters:** Mobile navigation removes Work and Capabilities, showing only “Get in touch.” It prioritizes conversion before visitors can establish trust.

**Fix:** Keep Work visible beside contact or provide a minimal accessible menu. Reduce the 44rem hero so evidence arrives sooner.

**Suggested command:** `/impeccable adapt`.

## Persona Red Flags

**Jordan, first-time buyer:** Learns only that Nolan makes “thoughtful software.” The hero does not say who it serves or why it is credible. Project links eject Jordan to third-party sites before enough context is established.

**Riley, stress tester:** Clipboard denial causes an unhandled rejection with no feedback. External project and contact availability are assumed. Repeated copy clicks can race state-reset timers.

**Casey, mobile visitor:** The mobile header removes Work, the hero delays evidence, and primary proof requires opening external tabs on a potentially slow connection. Negative-margin project descriptions are fragile under longer text or localization.

**Investor or client evaluator:** Two unlabeled projects, no outcomes, no traction, no operator identity, no ownership labels, no engagement model, and no institutional reassurance make capability difficult to assess.

## Minor Observations

- `.site-shell { overflow: hidden; }` can clip focus outlines; use horizontal clipping only if needed.
- Anchored sections lack `scroll-margin-top` for the fixed header.
- All `.reveal` animations start on page load, so below-fold motion finishes before users see it. This is not scroll animation.
- The two hero CTAs have equal weight, so there is no clear primary action.
- DESIGN.md is missing, leaving the visual rationale undocumented.

## Questions to Consider

- If the logo disappeared, what would make this unmistakably Nolan?
- Why is the largest moment a slogan instead of a shipped result?
- Are you selling engineering services, showcasing owned ventures, or building investor credibility? Which one leads?
- If visitors never open an external project link, have they learned enough to trust Nolan with money or critical software?
