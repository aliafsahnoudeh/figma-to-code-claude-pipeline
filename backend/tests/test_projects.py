from httpx import AsyncClient

from app.data.store import store


async def test_list_projects_returns_seed_data(client: AsyncClient) -> None:
    response = await client.get("/projects")
    assert response.status_code == 200
    body = response.json()
    assert len(body) == len(store.projects)
    assert {p["id"] for p in body} == set(store.projects.keys())


async def test_get_project_404(client: AsyncClient) -> None:
    response = await client.get("/projects/does-not-exist")
    assert response.status_code == 404


async def test_create_project(client: AsyncClient) -> None:
    response = await client.post(
        "/projects",
        json={"name": "Beta launch", "description": "Q4 beta", "color": "#3B82F6"},
    )
    assert response.status_code == 201
    body = response.json()
    assert body["name"] == "Beta launch"
    assert body["id"] in store.projects


async def test_update_project_partial(client: AsyncClient) -> None:
    response = await client.patch("/projects/p_website", json={"name": "Site v3"})
    assert response.status_code == 200
    assert response.json()["name"] == "Site v3"
    assert store.projects["p_website"].name == "Site v3"


async def test_delete_project_cascades_tasks(client: AsyncClient) -> None:
    response = await client.delete("/projects/p_website")
    assert response.status_code == 204
    assert "p_website" not in store.projects
    remaining = [t for t in store.tasks.values() if t.project_id == "p_website"]
    assert remaining == []
