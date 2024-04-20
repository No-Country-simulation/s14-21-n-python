from typing import List

from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.product import ProductCrud
from fastapi import APIRouter, Depends, status
from schemas.product import ProductSchema, CreateProductSchema, UpdateProduct
from sqlalchemy.ext.asyncio.session import AsyncSession

router = APIRouter()


@router.post(
    "/{business_id}/products/",
    status_code=status.HTTP_201_CREATED,
    response_model=ProductSchema,
)
async def create_user(
    business_id: int,
    product_create: CreateProductSchema,
    db: AsyncSession = Depends(get_session),
):
    product_create.business_id = business_id
    new_product = await ProductCrud(db).create(
        product_create.model_copy(update={"business": business_id})
    )

    return new_product


@router.get(
    "/{business_id}/products/{product_id}/",
    status_code=status.HTTP_200_OK,
    response_model=ProductSchema,
)
async def get_product_id(
    business_id: int,
    product_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    product = await ProductCrud(db).get(product_id)

    return product


@router.get(
    "/{business_id}/products/",
    status_code=status.HTTP_200_OK,
    response_model=List[ProductSchema],
)
async def get_all_users(
    business_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    products = await ProductCrud(db).get_all()

    return products


@router.delete("/{business_id}/products/{product_id}/", status_code=status.HTTP_200_OK)
async def delete_product(
    business_id: int,
    product_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    await ProductCrud(db).delete(product_id)


@router.put(
    "/{business_id}/products/{product_id}/",
    status_code=status.HTTP_200_OK,
    response_model=ProductSchema,
)
async def update_product(
    business_id: int,
    product_id: int,
    update_product: UpdateProduct,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    product = await ProductCrud(db).update(product_id, update_product)
    return product
