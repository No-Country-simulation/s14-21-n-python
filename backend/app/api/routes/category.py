from typing import List

from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.category import CategoryCrud
from fastapi import APIRouter, Depends, status
from schemas.category import CategorySchema, CreateCategory, UpdateCategory
from sqlalchemy.ext.asyncio.session import AsyncSession

router = APIRouter()


@router.post(
    "/{business_id}/categories/",
    status_code=status.HTTP_201_CREATED,
    response_model=CategorySchema,
)
async def create_category(
    business_id: int,
    category_create: CreateCategory,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    new_category = await CategoryCrud(db).create(
        category_create.model_copy(update={"business_id": business_id})
    )

    return new_category


@router.get(
    "/{business_id}/categories/{category_id}/",
    status_code=status.HTTP_200_OK,
    response_model=CategorySchema,
)
async def get_category_id(
    category_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    category = await CategoryCrud(db).get(category_id)

    return category


@router.get(
    "/{business_id}/categories/",
    status_code=status.HTTP_200_OK,
    response_model=List[CategorySchema],
)
async def get_all_categories(
    business_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    categories = await CategoryCrud(db).get_all()

    return categories


@router.delete(
    "/{business_id}/categories/{category_id}/", status_code=status.HTTP_200_OK
)
async def delete_category(
    business_id: int,
    category_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    await CategoryCrud(db).delete(category_id)


@router.put("/{business_id}/categories/{category_id}/", status_code=status.HTTP_200_OK)
async def update_user(
    business_id: int,
    category_id: int,
    update_category: UpdateCategory,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    user = await CategoryCrud(db).update(category_id, update_category)
    return user
