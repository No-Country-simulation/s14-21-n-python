from typing import List, Optional
from pydantic import BaseModel, ConfigDict
from user import UserSchema
from product import ProductSchema
from transaction import TransactionSchema


class BusinessSchema(BaseModel):
    id: int
    name: Optional[str]
    address: str
    phone: str
    users: List[UserSchema] = []
    products: List[ProductSchema] = []
    transactions: List[TransactionSchema] = []

    model_config = ConfigDict(from_attributes=True)
