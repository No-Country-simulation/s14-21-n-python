from pydantic import BaseModel, ConfigDict, EmailStr


class SupplierSchema(BaseModel):
    id: int
    name: str
    phone: str
    address: str
    email: EmailStr
    cuit: int

    model_config = ConfigDict(from_attributes=True)
