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
async def create_product(
    business_id: int,
    product_create: CreateProductSchema,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    new_product = await ProductCrud(db).create(
        product_create.model_copy(update={"business_id": business_id})
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
async def get_all_products(
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


### Agregado refactorizar
from fastapi import APIRouter, Depends
from datetime import datetime
from crud.transaction import CRUDTransaction
from api.dependencies.db import get_session
from schemas.product import BestSellingProductsResponse, ProductResponse

router = APIRouter()

@router.get("/best-selling-products/", response_model=BestSellingProductsResponse)
async def get_best_selling_products(
    start_date: datetime = None,
    end_date: datetime = None,
    db: AsyncSession = Depends(get_session)
):
    # Lógica para obtener los productos más vendidos
    best_selling_products = await CRUDTransaction.get_best_selling_products_in_time_range(start_date, end_date)

    products_data = []
    for product, total_quantity_sold in best_selling_products:
        product_data = ProductResponse(name=product.name, total_quantity_sold=total_quantity_sold)
        products_data.append(product_data)

    return BestSellingProductsResponse(products=products_data)