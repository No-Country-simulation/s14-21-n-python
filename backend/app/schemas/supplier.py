from pydantic import BaseModel, ConfigDict, EmailStr


class SupplierSchema(BaseModel):
    id: int
    business_id: int | None = None
    name: str
    phone: str
    address: str
    email: EmailStr
    cuit: int

    model_config = ConfigDict(from_attributes=True)


class CreateSupplierSchema(BaseModel):
    business_id: int = None
    name: str
    phone: str
    address: str
    email: EmailStr
    cuit: int

    model_config = ConfigDict(from_attributes=True)


class UpdateSupplierSchema(BaseModel):
    name: str
    phone: str
    address: str
    email: EmailStr
    cuit: int

    model_config = ConfigDict(from_attributes=True)
