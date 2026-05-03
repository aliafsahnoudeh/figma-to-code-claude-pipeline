from httpx import AsyncClient

from app.data.store import store


async def test_list_tasks_filters_by_project(client: AsyncClient) -> None:
    response = await client.get("/tasks", params={"project_id": "p_billing"})
    assert response.status_code == 200
    body = response.json()
    assert len(body) > 0
    assert all(t["project_id"] == "p_billing" for t in body)


async def test_create_task_rejects_unknown_project(client: AsyncClient) -> None:
    response = await client.post(
        "/tasks",
        json={"project_id": "p_missing", "title": "x"},
    )
    assert response.status_code == 400


async def test_update_task_changes_status(client: AsyncClient) -> None:
    response = await client.patch("/tasks/t_4", json={"status": "in_progress"})
    assert response.status_code == 200
    assert response.json()["status"] == "in_progress"
    assert store.tasks["t_4"].status.value == "in_progress"


async def test_delete_task(client: AsyncClient) -> None:
    response = await client.delete("/tasks/t_1")
    assert response.status_code == 204
    assert "t_1" not in store.tasks
