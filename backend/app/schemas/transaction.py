from datetime import datetime
from decimal import Decimal
from typing import Optional

from pydantic import BaseModel, ConfigDict
from .common import TypeOpEnum, PaymentMethodEnum, StatusEnum


class TransactionSchema(BaseModel):
    id: int
    business_id: int | None = None
    product_id: int | None = None
    client_id: Optional[int]
    supplier_id: int | None = None
    type_op: TypeOpEnum
    quantity: int
    price: Decimal
    payment_method: PaymentMethodEnum
    status: StatusEnum
    transaction_date: datetime

    model_config = ConfigDict(from_attributes=True)


class CreateTransaction(BaseModel):
    business_id: int | None = None
    product_id: int | None = None
    client_id: Optional[int]
    supplier_id: int | None = None
    type_op: TypeOpEnum
    quantity: int
    price: Decimal | None = None
    payment_method: PaymentMethodEnum
    status: StatusEnum
    transaction_date: datetime

    model_config = ConfigDict(from_attributes=True)


class UpdateTransaction(BaseModel):
    type_op: TypeOpEnum | None = None
    quantity: int | None = None
    price: Decimal | None = None
    payment_method: PaymentMethodEnum | None = None
    status: StatusEnum | None = None
    transaction_date: datetime | None = None

    model_config = ConfigDict(from_attributes=True)
