from api.dependencies.db import get_session
from crud.user import UserCrud
from fastapi import Depends
from sqlalchemy.ext.asyncio.session import AsyncSession

from .password import verify


async def is_authenticate(
    email: str, password: str, db: AsyncSession = Depends(get_session)
):
    user = await UserCrud(db).get_by_attribute("email", email)
    if not user:
        return False
    if not await verify(password, user.password):
        return False
    return user
