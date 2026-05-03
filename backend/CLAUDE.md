# Backend — Claude Code Guidelines

A tiny FastAPI demo backend backing the TaskFlow web app. **No database. No auth. Data is in-memory and reset on every process restart.** Keep it that way unless the task explicitly requires otherwise.

## Code style

Functional, async-first, minimal comments — self-documenting code only.

### Naming

- Files: `snake_case.py`
- Classes: `PascalCase`
- Functions / variables: `snake_case`
- Constants: `UPPER_SNAKE_CASE`

### Imports

stdlib → third-party → local (`app.*` absolute imports). Module-level only — do not import inside functions. Ruff handles ordering.

### Type hints

Required on every function signature.

## Pydantic

- Use `BaseModel` from `pydantic` directly — there is no custom base class
- For partial-update schemas, use `| None` defaults and read with `model_dump(exclude_unset=True)`
- Use Pydantic schemas instead of raw dicts for nested fields
- Don't use the `alias` option in fields

## API layer

- All route handlers are `async def`
- Routers are declared per domain in `app/api/{resource}s.py` and included in `app/main.py`
- Use `HTTPException` directly for `404` (not found) and `400` (validation / unknown FK)
- Generate IDs with `f"{prefix}_{uuid4().hex[:8]}"` (e.g. `p_…`, `t_…`)

## Data store

- `app/data/store.py` defines `Store` (a class with `dict[str, T]` collections per resource) and exports a singleton `store`
- `app/data/seed.py` defines the initial data; `Store.reset()` reloads it
- Tests reset the store automatically via the `reset_store` fixture in `conftest.py`

## Testing

Pytest with `asyncio_mode = "auto"` — do **NOT** use `@pytest.mark.asyncio`.

- Plain `async def test_*` functions only — no test classes
- Use the `client: AsyncClient` fixture from `conftest.py`
- The `reset_store` fixture is auto-applied — no manual setup
- Verify the in-memory store after writes, not just response codes
- Use `@pytest.mark.parametrize` for variations

```python
from httpx import AsyncClient

from app.data.store import store


async def test_create_project(client: AsyncClient) -> None:
    response = await client.post("/projects", json={"name": "Beta"})
    assert response.status_code == 201
    body = response.json()
    assert body["id"] in store.projects
```

## Lint / format

```bash
uv run ruff check --fix .
uv run ruff format .
uv run pytest -q
```

## When the demo grows

If the task genuinely requires persistence, auth, or external services, ask first — those are conscious scope changes, not defaults.
