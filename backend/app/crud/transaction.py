from typing import Optional, List
from sqlalchemy import select, func, desc
from schemas.product import ProductResponse
from models.models import Transaction, Product
from crud.abstract import BaseCrud
from datetime import date


class TransactionCrud(BaseCrud):
    model = Transaction

    async def get_best_selling_products_in_time_range(
        self,
        all_products: bool,
        start_date: date,
        end_date: Optional[date] = None,
    ) -> List[ProductResponse]:

        if end_date is None:
            end_date = start_date

        if all_products:
            result = await self.session.execute(
                select(Product, func.sum(Transaction.quantity).label("quantity"))
                .join(Transaction)
                .filter(
                    Transaction.transaction_date >= start_date,
                    Transaction.transaction_date <= end_date,
                )
                .group_by(Product.id)
                .order_by(desc("quantity"))
            )

        elif not all_products:
            result = await self.session.execute(
                select(Product, func.sum(Transaction.quantity).label("quantity"))
                .join(Transaction)
                .filter(
                    Transaction.transaction_date >= start_date,
                    Transaction.transaction_date <= end_date,
                )
                .group_by(Product.id)
                .order_by(desc("quantity"))
                .limit(1)
            )

        best_selling_products = result.fetchall()

        mapped_product = [
            ProductResponse(
                name=product.name,
                original_price=product.original_price,
                stock=product.stock,
                description=product.description,
                quantity=quantity,
            )
            for product, quantity in best_selling_products
        ]

        return mapped_product
