from typing import List

from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.user import UserCrud
from fastapi import APIRouter, Depends, status
from schemas import CreateUserSchema, UserSchema, UserUpdate
from sqlalchemy.ext.asyncio.session import AsyncSession
from utils.password import hash

router = APIRouter()


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=UserSchema)
async def create_user(
    user_create: CreateUserSchema, db: AsyncSession = Depends(get_session)
):
    hashed_password = await hash(user_create.password)
    user_create.password = hashed_password

    new_user = await UserCrud(db).create(user_create)
    print(new_user)
    print(new_user.business)
    return new_user


@router.get("/{user_id}/", status_code=status.HTTP_200_OK, response_model=UserSchema)
async def get_user_id(
    user_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    user = await UserCrud(db).get(user_id)

    return user


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[UserSchema],
)
async def get_all_users(
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    users = await UserCrud(db).get_all()

    return users


@router.delete("/{user_id}/", status_code=status.HTTP_200_OK)
async def delete_user(
    user_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    await UserCrud(db).delete(user_id)


@router.put("/{user_id}/", status_code=status.HTTP_200_OK)
async def update_user(
    user_id: int,
    update_user: UserUpdate,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    user = await UserCrud(db).update(user_id, update_user)
    return user
