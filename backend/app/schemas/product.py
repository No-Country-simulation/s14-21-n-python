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


class CreateProductSchema(BaseModel):
    business_id: int
    category_id: int
    brand: str
    name: str
    stock: int
    description: str | None = None
    minimum_stock: int | None = None
    original_price: Decimal
    purchase_date: datetime | None = None
    expiration_date: datetime | None = None


class UpdateProduct(BaseModel):
    stock: int | None = None
    description: str | None = None
    minimum_stock: int | None = None


### Agregado (refactorizar)

from pydantic import BaseModel
from typing import List

class ProductResponse(BaseModel):
    name: str
    total_quantity_sold: int

class BestSellingProductsResponse(BaseModel):
    products: List[ProductResponse]