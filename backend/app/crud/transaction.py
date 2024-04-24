from typing import Optional, List, Tuple
from sqlalchemy import select, func, desc
from models.models import Transaction, Product
from crud.abstract import BaseCrud
from datetime import date


class TransactionCrud(BaseCrud):
    model = Transaction

    async def get_best_selling_products_in_time_range(
        self, start_date: date, end_date: Optional[date] = None
    ) -> Optional[List[Tuple[Product, int]]]:
        if end_date is None:
            end_date = start_date

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

        best_selling_products = result.scalars().all()

        # Si no hay ventas en el rango de tiempo dado, devuelve None
        if not best_selling_products:
            return None

        # Determina la cantidad máxima de ventas
        max_quantity = best_selling_products[0][1]

        # Filtra los productos que tienen la cantidad máxima de ventas
        best_selling_products = [
            (product, quantity)
            for product, quantity in best_selling_products
            if quantity == max_quantity
        ]

        # Si hay más de un producto con la cantidad máxima de ventas, devuélvelos todos
        if len(best_selling_products) > 1:
            return best_selling_products
        else:
            # Si solo hay un producto con la cantidad máxima de ventas, devuelve solo ese producto
            return best_selling_products[0] if best_selling_products else None
