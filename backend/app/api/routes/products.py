from typing import List

from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.product import ProductCrud
from fastapi import APIRouter, Depends, status
from schemas.product import ProductSchema, CreateProductSchema, UpdateProduct
from sqlalchemy.ext.asyncio.session import AsyncSession
from utils.password import hash

router = APIRouter()


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=ProductSchema)
async def create_user(
    product_create: CreateProductSchema, db: AsyncSession = Depends(get_session)
):
    new_product = await ProductCrud(db).create(product_create)

    return new_product


@router.get(
    "/{product_id}/", status_code=status.HTTP_200_OK, response_model=ProductSchema
)
async def get_product_id(
    product_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    product = await ProductCrud(db).get(product_id)

    return product


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[ProductSchema],
)
async def get_all_users(
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    products = await ProductCrud(db).get_all()

    return products


@router.delete("/{product_id}/", status_code=status.HTTP_200_OK)
async def delete_product(
    product_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    await ProductCrud(db).delete(product_id)


@router.put("/{product_id}/", status_code=status.HTTP_200_OK)
async def update_product(
    product_id: int,
    update_product: UpdateProduct,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    product = await ProductCrud(db).update(product_id, update_product)
    return product
