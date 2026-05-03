# TaskFlow web

The Next.js 16 + React 19 frontend for the TaskFlow demo. UI is built exclusively from
the local design system (`@taskflow/components`, `@taskflow/themes`).

## Prerequisites

- Node.js 20+
- pnpm 8+
- The design system built: `cd ../design-system && pnpm install && pnpm build:packages`

## Setup

```bash
pnpm install
```

The API URL defaults to `http://localhost:8000` and can be overridden via
`NEXT_PUBLIC_API_URL`.

## Run

```bash
pnpm dev          # next dev (Turbopack), http://localhost:3000
pnpm build        # production build
```

## Tests

```bash
pnpm test          # jest
pnpm test:watch
```

Tests are co-located with their source (`Component.test.tsx`).

## Layout

```
src/
├── app/                      Next.js App Router pages (thin)
└── domains/
    ├── shared/               api client, types, header, formatters
    ├── projects/             projects dashboard + cards
    └── tasks/                board view + columns + task cards
```

See [`CLAUDE.md`](CLAUDE.md) for the conventions Claude Code follows in this directory.
