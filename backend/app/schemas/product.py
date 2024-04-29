from datetime import date
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
    purchase_date: date | None = None
    expiration_date: date | None = None

    model_config = ConfigDict(from_attributes=True)


class CreateProductSchema(BaseModel):
    business_id: int | None = None
    category_id: int
    brand: str
    name: str
    stock: int
    description: str | None = None
    minimum_stock: int | None = None
    original_price: Decimal
    purchase_date: date | None = None
    expiration_date: date | None = None


class UpdateProduct(BaseModel):
    stock: int | None = None
    description: str | None = None
    minimum_stock: int | None = None


class ProductResponse(BaseModel):
    name: str
    original_price: Decimal
    stock: int
    description: str | None = None
    quantity: int
