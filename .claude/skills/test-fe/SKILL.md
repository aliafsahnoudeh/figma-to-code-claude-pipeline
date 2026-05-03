---
name: test-fe
description: Write or update frontend tests for a given file, following project conventions (Jest + React Testing Library for web/).
allowed-tools: Bash, Read, Grep, Glob, Write, Edit
---

Write (or update) tests for the frontend file specified as `$ARGUMENTS`. If no file is provided, ask the user which file to test.

## Process

### 1. Identify the target

Resolve `$ARGUMENTS` to an absolute path. The web app uses Jest + React Testing Library — this skill is scoped to files under `web/`.

### 2. Read the source file

Understand what it exports (components, hooks, utilities), the prop / parameter shapes, side effects (API calls, routing), and edge / error states.

### 3. Find existing tests

Tests are co-located: `Component.test.tsx` next to `Component.tsx`. If one exists, extend it rather than rewrite from scratch.

### 4. Match a nearby test for style

Read a sibling test in the same domain so imports, describe blocks, assertions, and mocking style stay consistent.

### 5. Write the tests

```tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { NextThemeProvider, ProductKey } from "@taskflow/themes";

import { MyComponent } from "./MyComponent";

function withTheme(ui: React.ReactNode) {
  return (
    <NextThemeProvider productKey={ProductKey.TaskFlow}>{ui}</NextThemeProvider>
  );
}

describe("MyComponent", () => {
  it("renders the title", () => {
    render(withTheme(<MyComponent title="Hello" />));
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("calls onSubmit when the button is clicked", async () => {
    const onSubmit = jest.fn();
    render(withTheme(<MyComponent onSubmit={onSubmit} />));
    await userEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
```

Rules:

- Do NOT import `@testing-library/jest-dom` — already in `jest.setup.ts`
- Prefer accessible queries (`getByRole`, `getByLabelText`, `getByText`)
- Use `userEvent` (not `fireEvent`) for user interactions
- Mock at the boundary (API client, `next/navigation`, Zustand stores)
- Wrap components that read theme tokens with `<NextThemeProvider productKey={ProductKey.TaskFlow}>`
- One behavior per `it` block

### 6. What to test

- **Components** — renders with default props; renders different prop variants; user interactions trigger callbacks; conditional rendering; loading / empty / error states
- **Hooks** — return values for different inputs; state changes after actions; side effects (use `renderHook` from `@testing-library/react`)
- **Utilities** — input → output for normal cases; edge cases; error cases

### 7. Run the tests

```bash
cd web && pnpm test -- --testPathPattern="<test-file-name>"
```

Iterate until green.

### 8. Report

Summarize: file created / updated, number of tests, what's covered, any obvious gaps.

## Rules

- Match neighboring test style exactly
- Don't test framework behavior (React, MUI internals)
- Don't test private internals — test user-visible behavior
- Mock at boundaries, not internal modules
- All tests must pass before reporting done
