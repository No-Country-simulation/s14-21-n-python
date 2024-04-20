from typing import List

from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.category import CategoryCrud
from fastapi import APIRouter, Depends, status
from schemas.category import CreateCategory, CategorySchema, UpdateCategory
from sqlalchemy.ext.asyncio.session import AsyncSession


router = APIRouter()


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=CategorySchema)
async def create_category(
    category_create: CreateCategory,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    new_category = CategoryCrud(db).create(category_create)

    return new_category


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[CategorySchema],
)
async def get_all_categories(
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    categories = await CategoryCrud(db).get_all()

    return categories


@router.delete("/{category_id}/", status_code=status.HTTP_200_OK)
async def delete_category(
    category_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    await CategoryCrud(db).delete(category_id)


@router.put("/{category_id}/", status_code=status.HTTP_200_OK)
async def update_user(
    category_id: int,
    update_category: UpdateCategory,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    user = await CategoryCrud(db).update(category_id, update_category)
    return user
