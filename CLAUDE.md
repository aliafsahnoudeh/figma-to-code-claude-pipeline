# CLAUDE.md

Project-wide guidance loaded into every Claude Code session in this repo.

## Repository overview

TaskFlow — a small project & task manager built as a public demo of a Claude Code pipeline:

- `backend/` — Python 3.13 + FastAPI (in-memory data, no database, no auth)
- `web/` — TypeScript + React 19 + Next.js 16
- `design-system/` — token-driven MUI v7 wrapper components
- `.claude/` — agents, hooks, skills, and the settings template that drive the pipeline
- `docs/` — long-form pipeline documentation (the source of truth for the Medium post)

Package managers: `uv` (backend), `pnpm` (frontend + design system). The three sub-projects are independent — each has its own lockfile and CI surface.

## Commands

### Backend (`backend/`)

```bash
uv sync                                # install deps
uv run ruff check .                    # lint
uv run ruff check --fix .              # lint + autofix
uv run ruff format .                   # format
uv run pytest -q                       # all tests
./scripts/run_local.sh                 # run on :8000
./scripts/test_local.sh tests/test_projects.py::test_create_project   # single test
```

### Frontend (`web/`)

```bash
pnpm install                # install deps
pnpm dev                    # next dev (Turbopack), :3000
pnpm build                  # production build
pnpm lint                   # eslint
pnpm test                   # jest
pnpm test:watch             # jest --watch
```

### Design system (`design-system/`)

```bash
pnpm install
pnpm build:packages          # builds @taskflow/themes and @taskflow/components
pnpm dev:storybook           # Storybook on :6006
pnpm validate:tokens         # zod-validate the token JSON
pnpm typecheck
```

### Repo root

```bash
node scripts/init-claude.js  # bootstrap .claude/settings.local.json from the committed template
```

## Architecture

### Backend — layered, but tiny

```
API (app/api/) → Pydantic schemas (app/schemas/) → in-memory store (app/data/store.py)
```

- Routers are organised by domain (`projects`, `tasks`, `users`) and registered in `app/main.py`
- All handlers are `async def`; the in-memory store is reset on every process start
- No SQLAlchemy, no Alembic, no auth — keep it that way unless the task explicitly requires otherwise

### Frontend — domain-driven (Next.js App Router)

```
web/src/
├── app/                      # routes only (thin pages that call into domains)
└── domains/
    ├── shared/               # cross-cutting (api client, types, header, formatters)
    ├── projects/             # projects dashboard + cards
    └── tasks/                # board view + columns + task cards
```

- New features: find an existing domain or add a new one
- Components are thin; logic lives in `services/use-*.ts` hooks
- Global state via Zustand if needed; `useState` for local
- The HTTP boundary is `domains/shared/services/api-client.ts` — no auth header logic

### Design system

```
JSON tokens → zod validation → MUI theme → wrapper components → consumer apps
```

Two token products: `global` (base) and `taskflow` (the demo theme that extends `global`). All wrapper components live under `packages/components/src/` and are re-exported from `packages/components/src/index.ts`.

## MCP servers

The Figma-to-code pipeline relies on two MCP servers, both declared in [.claude/settings.example.json](.claude/settings.example.json):

### Figma MCP

```bash
claude mcp add figma-local -- npx -y figma-developer-mcp --figma-api-key=YOUR_TOKEN --stdio
```

The `--stdio` flag is mandatory — without it the server runs in HTTP mode and Claude Code cannot speak to it.

### Playwright MCP (used for every frontend change)

```bash
claude mcp add playwright -- npx -y @playwright/mcp
```

Used by Claude to navigate the running app, take screenshots, and visually verify UI changes.

## Git conventions

Conventional Commits: `<type>[scope]: <description>` (imperative, ≤ 72 chars, no period).

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `build`, `ci`, `perf`. Scope is optional — derive from the affected sub-project (`backend`, `web`, `design-system`) or the branch name.

Prefer atomic commits — one logical change per commit. The `/commit` skill enforces this.

## Important rules

- **DO NOT** auto-commit or push unless explicitly asked
- **DO NOT** add excessive comments — self-documenting code only
- **ALWAYS** use Conventional Commits
- **ALWAYS** write code, comments, and docs in English
- **ALWAYS** run tests before considering work complete
- For UI / frontend changes, use the Playwright MCP to visually verify the result before declaring success
