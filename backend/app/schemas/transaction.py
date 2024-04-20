from datetime import datetime
from decimal import Decimal
from typing import Optional

from pydantic import BaseModel, ConfigDict

from .common import PaymentMethodEnum, StatusEnum, TypeOpEnum


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
