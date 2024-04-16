# from typing import Annotated
# from fastapi import HTTPException, Security
# from schemas import UserSchema
# from .user import CurrentUserDep
from fastapi import HTTPException
from .user import CurrentUserDep
from models.user import User


# async def validate_authenticate_user(
#     current_user: Annotated[UserSchema, Security(CurrentUserDep)],
# ):
#     if current_user.disabled:
#         raise HTTPException(status_code=400, detail="Inactive user")
#     return current_user


async def validate_authenticate_user(
    current_user: CurrentUserDep,
) -> User:
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user
