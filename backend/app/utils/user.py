from typing import Annotated
from fastapi import Depends, status, HTTPException
from .password import verify
from api.deps import get_db
from .oauth2 import oauth2_scheme
from sqlalchemy.ext.asyncio.session import AsyncSession


async def get_current_user(
    token: Annotated[str, Depends(oauth2_scheme)], db: AsyncSession = Depends(get_db)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    user = await UserCrud.get_by_attribute(db, User.email, token.email)
    if user is None:
        raise credentials_exception
    return user


async def authenticate_user(
    email: str, password: str, db: AsyncSession = Depends(get_db)
):
    user = await UserCrud.get_by_attribute(db, User.email, email)
    if not user:
        return False
    if not await verify(password, user.hashed_password):
        return False
    return user
