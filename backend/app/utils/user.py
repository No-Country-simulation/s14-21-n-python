from typing import Annotated
from fastapi import Depends, status, HTTPException
from .password import verify
from api.deps import get_db
from .oauth2 import oauth2_scheme

from app.schemas import UserInDB  # <--- ver schemas

######################### Ver bien donde ubicar esto


async def get_user(db, username: str):
    if username in db:
        user_dict = db[username]
        return UserInDB(**user_dict)


async def get_current_user(token: Annotated[str, Depends(oauth2_scheme)]):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    user = get_user(get_db, username=token.username)
    if user is None:
        raise credentials_exception
    return user


async def authenticate_user(get_db, username: str, password: str):
    user = get_user(get_db, username)
    if not user:
        return False
    if not verify(password, user.hashed_password):
        return False
    return user
