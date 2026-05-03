"""In-memory seed data for the TaskFlow demo API.

The data is reset on every process start. There is no persistence.
"""

from datetime import UTC, date, datetime, timedelta

from app.schemas.project import Project
from app.schemas.task import Task, TaskPriority, TaskStatus
from app.schemas.user import User


def _now() -> datetime:
    return datetime.now(UTC)


def _today() -> date:
    return date.today()


SEED_USERS: list[User] = [
    User(
        id="u_cyrus",
        name="Cyrus Achaemenid",
        email="cyrus@example.com",
        avatar_url="https://i.pravatar.cc/96?u=cyrus",
    ),
    User(
        id="u_darius",
        name="Darius Hystaspes",
        email="darius@example.com",
        avatar_url="https://i.pravatar.cc/96?u=darius",
    ),
    User(
        id="u_roxana",
        name="Roxana Bactria",
        email="roxana@example.com",
        avatar_url="https://i.pravatar.cc/96?u=roxana",
    ),
    User(
        id="u_atossa",
        name="Atossa Anshan",
        email="atossa@example.com",
        avatar_url="https://i.pravatar.cc/96?u=atossa",
    ),
]


SEED_PROJECTS: list[Project] = [
    Project(
        id="p_website",
        name="Website Refresh",
        description="Marketing site redesign with new brand and CMS migration.",
        color="#6366F1",
        created_at=_now(),
    ),
    Project(
        id="p_mobile",
        name="Mobile App v2",
        description="Native rewrite of the customer mobile app.",
        color="#10B981",
        created_at=_now(),
    ),
    Project(
        id="p_billing",
        name="Billing Platform",
        description="Replace the legacy billing service with usage-based pricing.",
        color="#F59E0B",
        created_at=_now(),
    ),
    Project(
        id="p_research",
        name="User Research",
        description="Quarterly customer interviews and synthesis.",
        color="#EC4899",
        created_at=_now(),
    ),
]


def _task(
    task_id: str,
    project_id: str,
    title: str,
    status: TaskStatus,
    priority: TaskPriority,
    assignee_id: str | None,
    due_in_days: int | None = None,
    tags: list[str] | None = None,
    description: str = "",
) -> Task:
    now = _now()
    return Task(
        id=task_id,
        project_id=project_id,
        title=title,
        description=description,
        status=status,
        priority=priority,
        assignee_id=assignee_id,
        due_date=(_today() + timedelta(days=due_in_days)) if due_in_days is not None else None,
        tags=tags or [],
        created_at=now,
        updated_at=now,
    )


SEED_TASKS: list[Task] = [
    _task(
        "t_1",
        "p_website",
        "Audit current site analytics",
        TaskStatus.DONE,
        TaskPriority.MEDIUM,
        "u_roxana",
        -3,
        ["analytics"],
    ),
    _task(
        "t_2",
        "p_website",
        "Design new landing page",
        TaskStatus.IN_REVIEW,
        TaskPriority.HIGH,
        "u_cyrus",
        2,
        ["design", "landing"],
    ),
    _task(
        "t_3",
        "p_website",
        "Migrate blog content to new CMS",
        TaskStatus.IN_PROGRESS,
        TaskPriority.MEDIUM,
        "u_darius",
        5,
        ["cms"],
    ),
    _task(
        "t_4",
        "p_website",
        "Set up preview environments",
        TaskStatus.TODO,
        TaskPriority.LOW,
        "u_atossa",
        7,
        ["infra"],
    ),
    _task(
        "t_5",
        "p_mobile",
        "Define v2 navigation pattern",
        TaskStatus.IN_PROGRESS,
        TaskPriority.HIGH,
        "u_cyrus",
        4,
        ["ux"],
    ),
    _task(
        "t_6",
        "p_mobile",
        "Implement biometric login",
        TaskStatus.TODO,
        TaskPriority.URGENT,
        "u_atossa",
        10,
        ["auth", "security"],
    ),
    _task(
        "t_7",
        "p_mobile",
        "Crash-free rate dashboard",
        TaskStatus.TODO,
        TaskPriority.MEDIUM,
        "u_darius",
        14,
        ["observability"],
    ),
    _task(
        "t_8",
        "p_billing",
        "Spike: Stripe metered billing",
        TaskStatus.IN_PROGRESS,
        TaskPriority.HIGH,
        "u_atossa",
        3,
        ["spike", "billing"],
    ),
    _task(
        "t_9",
        "p_billing",
        "Migrate legacy invoices",
        TaskStatus.TODO,
        TaskPriority.MEDIUM,
        "u_darius",
        21,
        ["migration"],
    ),
    _task(
        "t_10",
        "p_billing",
        "Tax rules for EU VAT",
        TaskStatus.TODO,
        TaskPriority.HIGH,
        None,
        30,
        ["tax"],
    ),
    _task(
        "t_11",
        "p_research",
        "Recruit 8 SMB users",
        TaskStatus.IN_PROGRESS,
        TaskPriority.MEDIUM,
        "u_roxana",
        6,
        ["recruiting"],
    ),
    _task(
        "t_12",
        "p_research",
        "Synthesize Q3 interviews",
        TaskStatus.DONE,
        TaskPriority.MEDIUM,
        "u_roxana",
        -10,
        ["synthesis"],
    ),
]
