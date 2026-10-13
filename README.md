# Nolan Innovation

The website for Nolan Innovation, a software studio building custom software, web applications, and digital products.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Lucide React

## Getting started

Install dependencies and start the development server:

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
bun dev      # Start the development server
bun run build # Create a production build
bun start    # Start the production server
bun run lint # Run ESLint
```

## Project structure

```text
src/app/       App Router pages, layout, and global styles
public/        Try Lah identity and showcase assets
```

Use Bun and commit dependency changes with `bun.lock`.

The approved visual direction is documented in [DESIGN.md](DESIGN.md). Showcase image sources are recorded in [public/work/SOURCES.md](public/work/SOURCES.md); the font license is in `src/app/fonts/OFL.txt`.
