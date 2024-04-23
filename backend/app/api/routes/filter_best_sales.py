### Agregado refactorizar
from typing import List
from fastapi import APIRouter, Depends
from datetime import date
from crud.transaction import CRUDTransaction
from api.dependencies.db import get_session
from schemas.product import BestSellingProductsResponse, ProductResponse
from sqlalchemy.ext.asyncio.session import AsyncSession


router = APIRouter()

@router.get("/best-selling-products/", response_model=BestSellingProductsResponse)
async def get_best_selling_products(
    start_date: date = None,
    end_date: date = None,
    db: AsyncSession = Depends(get_session)
):
    # Lógica para obtener los productos más vendidos
    best_selling_products = await CRUDTransaction.get_best_selling_products_in_time_range(start_date, end_date)

    products_data = []
    for product, total_quantity_sold in best_selling_products:
        product_data = ProductResponse(name=product.name, total_quantity_sold=total_quantity_sold)
        products_data.append(product_data)

    return BestSellingProductsResponse(products=products_data)