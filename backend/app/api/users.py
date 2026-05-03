from fastapi import APIRouter, HTTPException

from app.data.store import store
from app.schemas.user import User

router = APIRouter(prefix="/users", tags=["users"])


@router.get("", response_model=list[User])
async def list_users() -> list[User]:
    return list(store.users.values())


@router.get("/{user_id}", response_model=User)
async def get_user(user_id: str) -> User:
    user = store.users.get(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user
