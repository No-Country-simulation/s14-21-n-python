from typing import List, Optional

from pydantic import BaseModel, ConfigDict

from .product import ProductSchema
from .transaction import TransactionSchema
from .user import UserSchema


class BusinessSchema(BaseModel):
    id: int
    name: Optional[str]
    address: str
    phone: str
    # user: List[UserSchema] | None = []
    # product: List[ProductSchema] | None = []
    # transaction: List[TransactionSchema] | None= []

    # model_config = ConfigDict(from_attributes=True)


class CreateBusinessSchema(BaseModel):
    name: Optional[str]
    address: str
    phone: str


class UpdateBusinessSchema(BaseModel):
    name: Optional[str]
    adress: str
    phone: str
