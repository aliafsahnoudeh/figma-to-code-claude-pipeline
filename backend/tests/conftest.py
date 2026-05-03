from collections.abc import AsyncIterator

import pytest
from httpx import ASGITransport, AsyncClient

from app.data.store import store
from app.main import app


@pytest.fixture(autouse=True)
def reset_store() -> None:
    store.reset()


@pytest.fixture
async def client() -> AsyncIterator[AsyncClient]:
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as ac:
        yield ac
