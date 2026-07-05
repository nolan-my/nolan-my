# Design System

## Direction

Quiet confidence with work as the visual peak. The interface uses Apple-like product clarity but avoids imitation through evidence-led layouts, large project typography, and a dark proof section rather than decorative effects.

## Color

- Strategy: restrained
- Paper: `oklch(98.2% 0.004 250)`
- Surface: `oklch(94.8% 0.008 250)`
- Ink: `oklch(19% 0.014 250)`
- Muted: `oklch(45% 0.016 250)`
- Line: `oklch(86% 0.01 250)`
- Action blue: `oklch(55% 0.2 252)`
- Proof section: `oklch(17% 0.014 250)`

## Typography

Use the native platform system sans stack. Display text uses tight tracking and strong weight contrast. Body copy stays between 45 and 70 characters per line.

## Layout

- Maximum content width: 76rem
- Fluid horizontal gutter: 1rem to 3rem
- Sections alternate between open light space and the dark proof field
- Avoid card grids; use rules, spacing, and typography for grouping

## Motion

- One hero entrance and a quiet brand signal line on load
- Native scroll-driven reveals for major content groups where supported
- Static content as the fallback
- Expo easing for interaction feedback
- Respect `prefers-reduced-motion`

## Components

- Pill buttons are reserved for primary actions
- Text links use a directional arrow and action blue
- Project rows balance title, one-line description, and a clear destination
- Every interactive element has visible focus, active, and touch-safe states
