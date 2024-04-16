from fastapi import APIRouter, Depends, status
from schemas import UserSchema, UserUpdate
from utils.password import hash
from api.dependencies.db import get_session

from api.dependencies.auth import validate_authenticate_user

from sqlalchemy.ext.asyncio.session import AsyncSession
from crud.user import UserCrud

router = APIRouter(
    prefix="/api/users",
    tags=["users"],
    responses={404: {"description": "Not found"}},
)


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_user(user_create: UserSchema, db: AsyncSession = Depends(get_session)):

    hashed_password = await hash(user_create.password)
    user_create.password = hashed_password

    new_user = await UserCrud(db).create(user_create)

    return new_user


@router.get(
    "/{user_id}/",
    status_code=status.HTTP_200_OK,
    dependencies=[Depends(validate_authenticate_user)],
)
async def get_user_id(user_id: int, db: AsyncSession = Depends(get_session)):

    user = await UserCrud(db).get(user_id)

    return user


@router.get("/", status_code=status.HTTP_200_OK)
async def get_users(db: AsyncSession = Depends(get_session)):
    pass


@router.delete("/{user_id}/", status_code=status.HTTP_200_OK)
async def delete_user(user_id: int, db: AsyncSession = Depends(get_session)):

    await UserCrud(db).delete(user_id)

    return {}


@router.put("/{user_id}/", status_code=status.HTTP_200_OK)
async def update_user(
    user_id: int, update_user: UserUpdate, db: AsyncSession = Depends(get_session)
):

    user = await UserCrud(db).update(user_id, update_user)
    print(f"{user=}")

    return user
