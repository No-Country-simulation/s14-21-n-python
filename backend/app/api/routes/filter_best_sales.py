from fastapi import APIRouter, Depends
from datetime import date
from api.dependencies.auth import validate_authenticate_user
from crud.transaction import TransactionCrud
from api.dependencies.db import get_session
from schemas.product import BestSellingProductsResponse, ProductResponse
from sqlalchemy.ext.asyncio.session import AsyncSession


router = APIRouter()


@router.get(
    "/{business_id}/best-selling-products/",
    response_model=List[Tuple[str, int]],
)
async def get_best_selling_products(
    business_id: int,
    start_date: date,
    end_date: date | None = None,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    # Lógica para obtener los productos más vendidos
    best_selling_products = await TransactionCrud(
        db
    ).get_best_selling_products_in_time_range(start_date, end_date)

    if not best_selling_products:
        return []

    # products_data = []
    # for product, total_quantity_sold in best_selling_products:
    #     product_data = ProductResponse(
    #         name=product.name, total_quantity_sold=total_quantity_sold
    #     )
    #     products_data.append(product_data)

    # return BestSellingProductsResponse(products=products_data)

    return best_selling_products
