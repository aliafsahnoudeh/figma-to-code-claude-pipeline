# TaskFlow API

A tiny FastAPI service that backs the TaskFlow demo web app. **In-memory data only** —
the store is reset every time the process starts. No database, no auth.

## Run

```bash
uv sync
./scripts/run_local.sh    # uvicorn on http://localhost:8000
```

OpenAPI docs at <http://localhost:8000/docs>.

## Test

```bash
./scripts/test_local.sh
./scripts/test_local.sh tests/test_projects.py::test_create_project   # single test
```

## Lint / format

```bash
uv run ruff check --fix .
uv run ruff format .
```

## Layout

```
app/
├── main.py             FastAPI app + CORS + router registration + /health
├── api/                routers: projects, tasks, users
├── schemas/            Pydantic models
└── data/
    ├── seed.py         seed users / projects / tasks
    └── store.py        Store singleton with per-resource dicts
tests/
├── conftest.py         AsyncClient fixture + auto reset_store fixture
├── test_health.py
├── test_projects.py
└── test_tasks.py
```

See [`CLAUDE.md`](CLAUDE.md) for the conventions Claude Code follows in this directory.
