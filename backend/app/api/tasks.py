from datetime import UTC, datetime
from uuid import uuid4

from fastapi import APIRouter, HTTPException

from app.data.store import store
from app.schemas.task import Task, TaskCreate, TaskStatus, TaskUpdate

router = APIRouter(prefix="/tasks", tags=["tasks"])


@router.get("", response_model=list[Task])
async def list_tasks(
    project_id: str | None = None,
    status: TaskStatus | None = None,
    assignee_id: str | None = None,
) -> list[Task]:
    tasks = list(store.tasks.values())
    if project_id is not None:
        tasks = [t for t in tasks if t.project_id == project_id]
    if status is not None:
        tasks = [t for t in tasks if t.status == status]
    if assignee_id is not None:
        tasks = [t for t in tasks if t.assignee_id == assignee_id]
    return tasks


@router.get("/{task_id}", response_model=Task)
async def get_task(task_id: str) -> Task:
    task = store.tasks.get(task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    return task


@router.post("", response_model=Task, status_code=201)
async def create_task(payload: TaskCreate) -> Task:
    if payload.project_id not in store.projects:
        raise HTTPException(status_code=400, detail="Unknown project_id")
    if payload.assignee_id is not None and payload.assignee_id not in store.users:
        raise HTTPException(status_code=400, detail="Unknown assignee_id")
    now = datetime.now(UTC)
    task = Task(
        id=f"t_{uuid4().hex[:8]}",
        created_at=now,
        updated_at=now,
        **payload.model_dump(),
    )
    store.tasks[task.id] = task
    return task


@router.patch("/{task_id}", response_model=Task)
async def update_task(task_id: str, payload: TaskUpdate) -> Task:
    task = store.tasks.get(task_id)
    if task is None:
        raise HTTPException(status_code=404, detail="Task not found")
    if payload.assignee_id is not None and payload.assignee_id not in store.users:
        raise HTTPException(status_code=400, detail="Unknown assignee_id")
    updated = task.model_copy(
        update={**payload.model_dump(exclude_unset=True), "updated_at": datetime.now(UTC)},
    )
    store.tasks[task_id] = updated
    return updated


@router.delete("/{task_id}", status_code=204)
async def delete_task(task_id: str) -> None:
    if task_id not in store.tasks:
        raise HTTPException(status_code=404, detail="Task not found")
    del store.tasks[task_id]
