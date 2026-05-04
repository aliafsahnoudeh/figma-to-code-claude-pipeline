# Figma → Code with Claude Code — TaskFlow demo

This repository is a public artifact accompanying the [Medium post(s)](https://medium.com/@aliafsah1988/how-to-turn-claude-code-into-a-figma-to-react-pipeline-that-visually-verifies-its-own-work-030246f600a9) on building a
Figma-to-code pipeline with Claude Code. It deliberately stays small so the pattern is
easy to read end to end:

- A tiny **FastAPI** backend with in-memory data — no database, no auth.
- A **Next.js 16 + React 19** frontend that calls the backend.
- A **token-driven MUI wrapper Design System** (`@taskflow/components`, `@taskflow/themes`).
- A **`.claude/` directory** with the agents, hooks, skills, and settings template that
  drive the AI pipeline.

The point of the repo is not the app itself — it's the **way the Design System, MCP
servers, agents, and hooks compose into a reliable Figma-to-code workflow**.

The long-form write-up lives in
[docs/FIGMA_TO_CODE_PIPELINE.md](docs/FIGMA_TO_CODE_PIPELINE.md). Start there if you
want the architectural argument; come back to the code once you want to see how each
piece is wired up.

## Repository tour

```
backend/          FastAPI + Pydantic + in-memory store + pytest
web/              Next.js App Router, domain-driven src/domains/, Jest + RTL
design-system/    pnpm workspace: @taskflow/themes, @taskflow/components, Storybook
.claude/          agents, hooks, skills, settings template
docs/             FIGMA_TO_CODE_PIPELINE.md — the source for the post
scripts/          init-claude.js bootstrap
```

There are four CLAUDE.md files, scoped per directory — they are auto-loaded into Claude's
context based on which sub-project you're working in:

| File                                               | Scope                                                                 |
| -------------------------------------------------- | --------------------------------------------------------------------- |
| [CLAUDE.md](CLAUDE.md)                             | repo-wide commands, MCP install, git conventions                      |
| [web/CLAUDE.md](web/CLAUDE.md)                     | frontend rules: Design System imports, tokens, visual verify          |
| [backend/CLAUDE.md](backend/CLAUDE.md)             | backend rules: async, Pydantic, in-memory store                       |
| [design-system/CLAUDE.md](design-system/CLAUDE.md) | Design System rules: token schema, wrapper pattern, 8 non-negotiables |

## Setup

Prerequisites: Python 3.13, Node.js 20+, pnpm 8+, [uv](https://docs.astral.sh/uv/).

```bash
# 1. Backend
cd backend && uv sync

# 2. Design system (must build before web)
cd ../design-system && pnpm install && pnpm build:packages

# 3. Web
cd ../web && pnpm install

# 4. Bootstrap Claude Code settings (optional but recommended)
cd .. && node scripts/init-claude.js
```

If you want the Figma MCP, replace `YOUR_TOKEN` in `.claude/settings.local.json` with a
[Figma personal access token](https://www.figma.com/developers/api#access-tokens).

## Run it

In two terminals:

```bash
# Terminal 1 — API (http://localhost:8000)
cd backend && ./scripts/run_local.sh

# Terminal 2 — web (http://localhost:3000)
cd web && pnpm dev
```

Then open http://localhost:3000 — you should see the projects dashboard.
The API is browseable at http://localhost:8000/docs (FastAPI's auto Swagger UI).

## Tests

```bash
# Backend
cd backend && uv run pytest -q

# Frontend
cd web && pnpm test

# Design system tokens
cd design-system && pnpm validate:tokens
```

## License

MIT — feel free to copy any of the patterns into your own projects.
