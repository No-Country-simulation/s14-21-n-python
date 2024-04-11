# from pydantic import BaseModel

# pydantic based schema based on models go here!
from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime
from decimal import Decimal
from enum import Enum

# BaseModel, SecretBytes, SecretStr, field_serializer

class UserSchema(BaseModel):
    id: int
    name: Optional[str]
    email: EmailStr         
    password: str
    business_id: Optional[int]

    class Config:
        orm_mode = True

#vease: https://docs.pydantic.dev/latest/api/networks/#pydantic.networks.EmailStr
#pip install email-validator


class ProductSchema(BaseModel):
    id: int
    business_id: int
    brand: str
    name: str
    barcode: str
    stock: int
    minimum_stock: int
    original_price: Decimal
    purchase_date: datetime
    expiration_date: datetime
    category_id: int

    class Config:
        orm_mode = True


class CategorySchema(BaseModel):
    id: int
    name: str
    description: str
    products: List[ProductSchema] = []

    class Config:
        orm_mode = True


class StatusEnum(str, Enum):
    Pending = 'Pending'
    Approved = 'Approved'
    In_process = 'In process'
    Completed = 'Completed'
    Canceled = 'Canceled'


class TypeOpEnum(str, Enum):
    Purchase = 'Purchase'
    Sale = 'Sale'


class PaymentMethodEnum(str, Enum):
    cash = 'cash'
    card = 'card'
    transfer = 'transfer'

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

    class Config:
        orm_mode = True


class SupplierSchema(BaseModel):
    id: int
    name: str
    phone: str
    address: str
    transactions: List[TransactionSchema] = []

    class Config:
        orm_mode = True


class BusinessSchema(BaseModel):
    id: int
    name: Optional[str]
    address: str
    phone: str
    users: List[UserSchema] = []
    products: List[ProductSchema] = []
    transactions: List[TransactionSchema] = []

    class Config:
        orm_mode = True

