# Design System — Claude Code Guidelines

The TaskFlow design system. Token-driven theming with MUI v7 wrapper components, React 19, TypeScript.

## Quick reference

```bash
pnpm install                # install all deps
pnpm build:packages         # build themes + components (must run before storybook / web)
pnpm dev:storybook          # storybook on :6006
pnpm typecheck              # tsc --noEmit across packages
pnpm validate:tokens        # zod-validate the token JSON files
pnpm format                 # prettier write
pnpm format:check           # prettier check
```

## Monorepo layout

```
packages/
  themes/        @taskflow/themes      — token loading, zod validation, MUI theme creation
  components/    @taskflow/components  — curated MUI wrapper components
apps/
  storybook/     @taskflow/storybook   — component docs (Storybook 8 + Vite)
scripts/
  validate-tokens.ts                   — zod check across product themes
```

Workspace managed by pnpm. Node 20+ required.

## Architecture

```
JSON tokens → zod validation → MUI theme → component overrides → consumer apps
```

Token tiers:

- **Foundation** — spacing, radius, typography, breakpoints, zIndex
- **Semantic** — palette, elevation
- **Components** — button sizes, field sizes, dialog, table

Two products: `global` (base) and `taskflow` (the demo theme that `extends: "global"`). The registry lives in [packages/themes/src/tokens.ts](packages/themes/src/tokens.ts) (`ProductKey` enum).

Build via `tsup` (ESM + CJS + DTS). React and MUI are externalised. Both packages output to `dist/`.

## Non-negotiable rules

1. **Never prefix components** — export `Button`, not `DSButton`
2. **Always wrap MUI** — never build from scratch; always wrap `@mui/material`
3. **Curate the API** — expose only the props you need, no `{ ...rest }` pass-through
4. **Token-driven styling** — sizing and colors come from theme tokens / MUI overrides, not hardcoded values or inline styles
5. **`sx` is allowed but discouraged** — prefer token / theme changes for system-wide styling
6. **TypeScript strict** — typed interface for every component, JSDoc on every public prop
7. **WCAG 2.1 AA** — keyboard navigation, ARIA attributes, focus indicators
8. **Named exports only** — no default exports

## Adding a component

1. Create `packages/components/src/YourComponent.tsx`
2. Wrap an MUI component with a curated props interface (use `Button.tsx` as the template)
3. Use `React.forwardRef` for DOM access
4. Export the component + props type from `packages/components/src/index.ts`
5. Add `apps/storybook/src/YourComponent.stories.tsx` with `tags: ['autodocs']`

The `design-system-component` agent automates this scaffold.

## Adding a product theme

1. Create `packages/themes/src/tokens/your-product.json` (override only what differs from `global`)
2. Add the new key to `ProductKey` and `tokenRegistry` in [packages/themes/src/tokens.ts](packages/themes/src/tokens.ts)
3. `pnpm validate:tokens`
4. Use via `<ThemeProvider productKey="your-product">`

## Token schema

Defined in [packages/themes/src/schema/tokenSchema.ts](packages/themes/src/schema/tokenSchema.ts) using zod. Top-level shape:

```
{ meta, foundation, semantic, components }
```

Component size tokens use `{ px, py, fontSize, minHeight, radius? }`. Button has `small | medium | large`. Field has `small | medium`.

## Key files

- [packages/themes/src/createTheme.ts](packages/themes/src/createTheme.ts) — maps tokens → MUI theme + component style overrides
- [packages/themes/src/tokens.ts](packages/themes/src/tokens.ts) — registry, merge logic, validation
- [packages/themes/src/schema/tokenSchema.ts](packages/themes/src/schema/tokenSchema.ts) — zod schema
- [packages/themes/src/ThemeProvider.tsx](packages/themes/src/ThemeProvider.tsx) — generic React provider
- [packages/themes/src/NextThemeProvider.tsx](packages/themes/src/NextThemeProvider.tsx) — Next.js App Router provider
- [packages/components/src/index.ts](packages/components/src/index.ts) — barrel export

## Code style

Prettier: single quotes, trailing commas (es5), semicolons, 100-char width, 2-space indent, LF line endings.

This differs from `web/` (double quotes, 80 cols) — match the package you're editing.
