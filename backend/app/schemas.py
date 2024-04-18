# pydantic based schema based on models go here!
from datetime import datetime
from decimal import Decimal
from enum import Enum
from typing import List, Optional

from pydantic import BaseModel, ConfigDict, EmailStr

# BaseModel, SecretBytes, SecretStr, field_serializer


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: EmailStr


class CreateUserSchema(BaseModel):

    name: str | None = None
    email: EmailStr
    password: str
    business_id: int | None = None
class UserUpdate(BaseModel):
    name: str | None = None
    email: EmailStr | None = None
    business_id: int | None = None

    model_config = ConfigDict(from_attributes=True)


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserSchema(BaseModel):
    id: int
    name: str
    email: EmailStr
    business_id: int | None = None

    class Config:
        from_attributes = True


# vease: https://docs.pydantic.dev/latest/api/networks/#pydantic.networks.EmailStr
# pip install email-validator


class ProductSchema(BaseModel):
    id: int
    business_id: int
    brand: str
    name: str
    stock: int
    minimum_stock: int
    original_price: Decimal
    purchase_date: datetime
    expiration_date: datetime

    model_config = ConfigDict(from_attributes=True)


class CategorySchema(BaseModel):
    id: int
    name: str
    description: str | None

    model_config = ConfigDict(from_attributes=True)


class StatusEnum(str, Enum):
    Pending = "Pending"
    Approved = "Approved"
    In_process = "In process"
    Completed = "Completed"
    Canceled = "Canceled"


class TypeOpEnum(str, Enum):
    Purchase = "Purchase"
    Sale = "Sale"


class PaymentMethodEnum(str, Enum):
    cash = "cash"
    card = "card"
    transfer = "transfer"


# Enum
# vease: https://docs.pydantic.dev/latest/api/standard_library_types/#enumintenum


class TransactionSchema(BaseModel):
    id: int
    business_id: int
    product_id: int
    client_id: Optional[int]
    supplier_id: int
    type_op: TypeOpEnum
    quantity: int
    price: Decimal
    payment_method: PaymentMethodEnum
    status: StatusEnum
    transaction_date: datetime

    model_config = ConfigDict(from_attributes=True)


class SupplierSchema(BaseModel):
    id: int
    name: str
    phone: str
    address: str
    email: EmailStr

    model_config = ConfigDict(from_attributes=True)


class BusinessSchema(BaseModel):
    id: int
    name: Optional[str]
    address: str
    phone: str
    users: List[UserSchema] = []
    products: List[ProductSchema] = []
    transactions: List[TransactionSchema] = []

    model_config = ConfigDict(from_attributes=True)
