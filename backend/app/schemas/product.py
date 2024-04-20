from datetime import datetime
from decimal import Decimal

from pydantic import BaseModel, ConfigDict


class ProductSchema(BaseModel):
    id: int
    business_id: int
    category_id: int
    brand: str
    name: str
    stock: int
    description: str
    minimum_stock: int | None = None
    original_price: Decimal
    purchase_date: datetime | None = None
    expiration_date: datetime | None = None

    model_config = ConfigDict(from_attributes=True)
