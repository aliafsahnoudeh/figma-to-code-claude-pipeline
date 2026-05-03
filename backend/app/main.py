from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api import projects, tasks, users

app = FastAPI(
    title="TaskFlow API",
    description="Tiny in-memory FastAPI service for the TaskFlow demo app.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(projects.router)
app.include_router(tasks.router)


@app.get("/health", tags=["health"])
async def health() -> dict[str, str]:
    return {"status": "ok"}
