---
name: audit-fe
description: Audit frontend dependencies (web + design-system), update outdated packages, and run tests to verify nothing breaks.
allowed-tools: Bash, Read, Grep, Glob
---

Audit and update frontend dependencies across both `web/` and `design-system/`, then verify everything still works.

## Process

### 1. Check outdated dependencies

Run these in parallel:

```bash
cd web && pnpm outdated 2>&1 || true
```

```bash
cd design-system && pnpm outdated 2>&1 || true
```

Categorize updates by risk:

- **Patch** (`x.x.PATCH`) — safe to update
- **Minor** (`x.MINOR.x`) — usually safe; check changelogs for breaking changes
- **Major** (`MAJOR.x.x`) — requires careful review; do NOT auto-update

### 2. Check for security vulnerabilities

```bash
cd web && pnpm audit 2>&1 || true
```

```bash
cd design-system && pnpm audit 2>&1 || true
```

### 3. Report findings

Show a summary table:

- Package name
- Current → available
- Update type (patch / minor / major)
- Risk assessment (safe / review needed / breaking)

Flag any security advisories prominently.

### 4. Update with user approval

Default recommendation:

- Auto-apply **patch** updates
- Recommend **minor** updates with confirmation
- Flag **major** updates for manual review

For approved updates:

```bash
cd design-system && pnpm update <packages>
cd ../web && pnpm update <packages>
```

> Always update `design-system/` first — `web/` depends on it through workspace `file:` refs.

### 5. Rebuild Design System

```bash
cd design-system && pnpm install && pnpm build:packages
```

### 6. Lint, typecheck, test, build

```bash
cd design-system && pnpm typecheck && pnpm validate:tokens
cd ../web && pnpm lint && pnpm test && pnpm build
```

### 7. Report results

Summarize: which packages updated, lint/typecheck/test/build outcomes, any leftover issues.

## Rules

- Always update `design-system/` before `web/` (dependency order)
- Never force-update major versions without user approval
- If something breaks after an update, attempt to fix; if not, roll back with `git checkout -- <file>` and report
- Do not edit `pnpm-lock.yaml` manually
- Run `pnpm install` after any `package.json` changes
