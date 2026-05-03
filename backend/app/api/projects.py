from datetime import UTC, datetime
from uuid import uuid4

from fastapi import APIRouter, HTTPException

from app.data.store import store
from app.schemas.project import Project, ProjectCreate, ProjectUpdate

router = APIRouter(prefix="/projects", tags=["projects"])


@router.get("", response_model=list[Project])
async def list_projects() -> list[Project]:
    return list(store.projects.values())


@router.get("/{project_id}", response_model=Project)
async def get_project(project_id: str) -> Project:
    project = store.projects.get(project_id)
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


@router.post("", response_model=Project, status_code=201)
async def create_project(payload: ProjectCreate) -> Project:
    project = Project(
        id=f"p_{uuid4().hex[:8]}",
        created_at=datetime.now(UTC),
        **payload.model_dump(),
    )
    store.projects[project.id] = project
    return project


@router.patch("/{project_id}", response_model=Project)
async def update_project(project_id: str, payload: ProjectUpdate) -> Project:
    project = store.projects.get(project_id)
    if project is None:
        raise HTTPException(status_code=404, detail="Project not found")
    updated = project.model_copy(update=payload.model_dump(exclude_unset=True))
    store.projects[project_id] = updated
    return updated


@router.delete("/{project_id}", status_code=204)
async def delete_project(project_id: str) -> None:
    if project_id not in store.projects:
        raise HTTPException(status_code=404, detail="Project not found")
    del store.projects[project_id]
    for task_id in [tid for tid, t in store.tasks.items() if t.project_id == project_id]:
        del store.tasks[task_id]
