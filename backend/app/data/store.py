"""Simple in-memory store. Not thread-safe; meant for a single-process demo."""

from app.data.seed import SEED_PROJECTS, SEED_TASKS, SEED_USERS
from app.schemas.project import Project
from app.schemas.task import Task
from app.schemas.user import User


class Store:
    def __init__(self) -> None:
        self.users: dict[str, User] = {}
        self.projects: dict[str, Project] = {}
        self.tasks: dict[str, Task] = {}
        self.reset()

    def reset(self) -> None:
        self.users = {u.id: u for u in SEED_USERS}
        self.projects = {p.id: p for p in SEED_PROJECTS}
        self.tasks = {t.id: t for t in SEED_TASKS}


store = Store()
