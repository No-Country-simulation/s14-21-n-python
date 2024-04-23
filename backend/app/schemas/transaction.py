from datetime import date
from decimal import Decimal

from pydantic import BaseModel, ConfigDict
from .common import TypeOpEnum, PaymentMethodEnum, StatusEnum


class TransactionSchema(BaseModel):
    id: int
    business_id: int
    product_id: int | None = None
    supplier_id: int | None = None
    type: TypeOpEnum
    quantity: int
    price: Decimal
    payment_method: PaymentMethodEnum
    status: StatusEnum
    transaction_date: date

    model_config = ConfigDict(from_attributes=True)


class CreateTransaction(BaseModel):
    business_id: int
    product_id: int | None = None
    supplier_id: int | None = None
    type: TypeOpEnum
    quantity: int
    price: Decimal
    payment_method: PaymentMethodEnum
    status: StatusEnum
    transaction_date: date

    model_config = ConfigDict(from_attributes=True)


class UpdateTransaction(BaseModel):
    type: TypeOpEnum | None = None
    quantity: int | None = None
    price: Decimal | None = None
    payment_method: PaymentMethodEnum | None = None
    status: StatusEnum | None = None
    transaction_date: date | None = None

    model_config = ConfigDict(from_attributes=True)
