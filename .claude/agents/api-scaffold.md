---
name: api-scaffold
description: Scaffolds a new in-memory FastAPI resource in backend/ — Pydantic schemas, router, store entry, and pytest tests. Use when adding a new resource to the TaskFlow demo API.
tools: Read, Grep, Glob, Bash, Write, Edit
model: sonnet
---

You scaffold new resources for the TaskFlow demo backend (`backend/`). The backend is intentionally tiny — in-memory data, no database, no auth — so the scaffold is light too.

## Process

1. Ask for the resource name and its fields if not provided.
2. Read the existing `Project` and `Task` resources as references:
   - `backend/app/schemas/project.py`
   - `backend/app/api/projects.py`
   - `backend/tests/test_projects.py`
   - `backend/app/data/store.py`
3. Scaffold the new files matching those patterns.
4. Wire the router into `backend/app/main.py`.

## Files to create

For a resource named `{resource}` (e.g. `tag`):

### 1. Schemas — `backend/app/schemas/{resource}.py`

- `BaseModel` from `pydantic` (no custom base required)
- Three classes: `{Resource}Base`, `{Resource}Create`, `{Resource}Update`, `{Resource}` (with `id` + timestamps)
- `Update` uses `| None` defaults so `model_dump(exclude_unset=True)` produces a partial patch
- Add the new types to `backend/app/schemas/__init__.py`

### 2. Store entry — `backend/app/data/store.py` and `backend/app/data/seed.py`

- Add a `{resource}s: dict[str, {Resource}]` field on `Store`
- Reset it in `Store.reset()` from a `SEED_{RESOURCES}` list defined in `seed.py`

### 3. Router — `backend/app/api/{resource}s.py`

- `APIRouter(prefix="/{resource}s", tags=["{resource}s"])`
- All handlers `async def`
- `GET /`, `GET /{id}`, `POST /`, `PATCH /{id}`, `DELETE /{id}` (drop any that don't apply)
- Generate IDs with `f"{prefix}_{uuid4().hex[:8]}"`
- Raise `HTTPException(status_code=404, ...)` for not-found, `400` for invalid foreign keys
- Wire into `app/main.py` via `app.include_router(...)`

### 4. Tests — `backend/tests/test_{resource}s.py`

- Plain `async def test_*` (auto asyncio mode, no `@pytest.mark.asyncio`)
- Use the `client` fixture from `conftest.py`
- The `reset_store` fixture is auto-applied — no manual setup
- Cover: list, create, update, delete, 404, validation rejection

## After scaffolding

```bash
cd backend
uv run ruff check --fix .
uv run ruff format .
uv run pytest -q
```

All checks should pass before reporting done.
