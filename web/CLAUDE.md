# Frontend — Claude Code Guidelines

## Design system (mandatory)

All UI components must use `@taskflow/components` and `@taskflow/themes`. Check the package exports first before considering anything else.

- Theme: `NextThemeProvider` with `ProductKey.TaskFlow` is wired in [src/app/providers.tsx](src/app/providers.tsx)
- Component catalogue: [`design-system/packages/components/src/index.ts`](../design-system/packages/components/src/index.ts)

### Component selection priority

1. Look in `@taskflow/components` for an existing wrapper
2. Compose existing wrappers
3. Only build a custom component for domain-specific business logic that doesn't have a UI primitive equivalent

### Forbidden

- Direct imports from `@mui/*` — always go through `@taskflow/components`
- Hardcoded `#xxx`, `rgb(...)`, `hsl(...)` color values in `sx` / styles
- Hand-rolled buttons / inputs / dialogs / dropdowns / tooltips — use the DS
- Bypassing the design system for "quick" solutions

### Colors — token table

Always use TaskFlow palette tokens in `sx` and styles:

| Need              | Token                  |
| ----------------- | ---------------------- |
| Black / white     | `common.black` / `common.white` |
| Primary text      | `text.primary`         |
| Secondary text    | `text.secondary`       |
| Disabled text     | `text.disabled`        |
| Page background   | `background.default`   |
| Card / surface bg | `background.paper`     |
| Brand primary     | `primary.main`         |
| Error / Success   | `error.main` / `success.main` |
| Divider           | `divider`              |
| Hover background  | `action.hover`         |

```tsx
// ✅ correct
<Box sx={{ color: "text.primary", bgcolor: "background.paper" }} />

// ❌ wrong
<Box sx={{ color: "#0F172A", bgcolor: "#FFFFFF" }} />
```

For programmatic access (e.g. charts), use `useTheme` from `@taskflow/themes`:

```tsx
const theme = useTheme();
const color = theme.palette.primary.main;
```

Exception: `rgba()` for transparency in `box-shadow` / opacity overlays where no token exists.

## Domain-driven structure

```
src/domains/
├── {domain}/components/   # thin UI, wrap design system components
├── {domain}/services/     # hooks + business logic
└── {domain}/types/        # TypeScript types
```

- Find an existing domain or create a new one for a new feature
- Components stay thin; data fetching and orchestration live in `services/use-*.ts`
- Keep types co-located in the domain

## Code style

### Naming

- Component files: `PascalCase.tsx`
- Service / utility files: `kebab-case.ts`
- Hooks: `use-hook-name.ts` exporting `useHookName`
- Tests: `Component.test.tsx` next to the source
- Types / interfaces: `PascalCase`
- Variables / functions: `camelCase`

### TypeScript

Strict mode. Use `interface` for object shapes, `type` for unions. Path alias `@/*` → `src/*`.

### React patterns

- Functional components only
- Server components by default — `"use client"` only when needed
- Component structure: hooks → handlers → JSX
- Arrow functions for callbacks

### Imports (auto-sorted by Prettier)

React / Next → third-party → `@taskflow/*` → `@/app` → `@/domains` → `@/store` → relative. Separated by blank lines.

### Styling

- Use the design-system components first
- Use the `sx` prop for component-level overrides (palette tokens only — no hex literals)
- No inline `style={{ ... }}` blocks
- **Never** use `!important` — use doubled selectors (e.g. `& .MuiSelect-select.MuiSelect-select`) to win specificity

### Formatting

Prettier: double quotes, 80 cols, 2-space indent, trailing commas, `arrowParens: "avoid"`, `bracketSameLine: true`. Plugin: `@trivago/prettier-plugin-sort-imports`.

## State management

- Global: Zustand stores in `src/store/` if needed (currently no global store is required)
- Local: `useState`

## Visual verification (mandatory)

Every frontend change must be visually verified using the Playwright MCP server before being marked done.

1. Make the change
2. Use Playwright MCP (`browser_navigate`, `browser_take_screenshot`, `browser_snapshot`) to load the affected page and confirm it renders correctly
3. Iterate if anything looks off

Run the API in one terminal (`cd backend && ./scripts/run_local.sh`), the web dev server in another (`pnpm dev`), then drive Playwright at `http://localhost:3000`.

## Figma-to-code workflow

When implementing UI from a Figma URL, follow the design exactly — not approximations.

1. **Extract** — `mcp__figma-local__get_design_context`, `get_metadata`, `get_variable_defs`. Read real values; don't eyeball screenshots.
2. **Implement** — wrap with `@taskflow/components`; map Figma colors to palette tokens.
3. **Visually verify** — Playwright screenshot vs. Figma screenshot, side by side.
4. **Iterate** — fix discrepancies and re-verify until they match.

The `figma-impl` agent encodes this loop and is the right tool to delegate the work to.

## Testing (mandatory)

Jest + React Testing Library. Tests are co-located with the source.

- New `.tsx` / `.ts` files should ship with a `.test.tsx` / `.test.ts` next to them
- Modified files: update the existing test or add one if missing
- Do **NOT** import `@testing-library/jest-dom` — already loaded in `jest.setup.ts`
- Wrap components that read theme tokens in `<NextThemeProvider productKey={ProductKey.TaskFlow}>`

## Troubleshooting

- **`@taskflow/components` import errors** — confirm `transpilePackages: ["@taskflow/components", "@taskflow/themes"]` is set in [next.config.ts](next.config.ts), and that you ran `pnpm build:packages` in `design-system/`.
- **API requests fail** — start the backend (`cd backend && ./scripts/run_local.sh`); CORS allows only `http://localhost:3000`.
