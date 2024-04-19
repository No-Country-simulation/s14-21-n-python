from typing import List, Optional

from product import ProductSchema
from pydantic import BaseModel, ConfigDict
from transaction import TransactionSchema
from user import UserSchema


class BusinessSchema(BaseModel):
    id: int
    name: Optional[str]
    address: str
    phone: str
    user: List[UserSchema] = []
    product: List[ProductSchema] = []
    transaction: List[TransactionSchema] = []

    model_config = ConfigDict(from_attributes=True)


class CreateBusinessSchema(BaseModel):
    name: Optional[str]
    address: str
    phone: str


class UpdateBusinessSchema(BaseModel):
    name: Optional[str]
    adress: str
    phone: str
    phone: str
