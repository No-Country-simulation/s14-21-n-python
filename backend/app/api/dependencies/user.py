from typing import Annotated
from fastapi import Depends, HTTPException, status
from sqlalchemy.ext.asyncio.session import AsyncSession
from crud.user import UserCrud
from utils.oauth2 import verify_token, oauth2_scheme
from models.user import User
from .db import get_session


async def get_current_user(
    token: str = Depends(oauth2_scheme), db: AsyncSession = Depends(get_session)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Invalid authentication credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token_data = await verify_token(token, credentials_exception)
    user = await UserCrud(db).get_by_attribute("email", token_data.email)
    if user is None:
        raise credentials_exception
    return user


CurrentUserDep = Annotated[User, Depends(get_current_user)]
