from pydantic import BaseModel, ConfigDict


class CategorySchema(BaseModel):
    id: int
    business_id: int | None = None
    product_id: int | None = None
    name: str
    description: str | None = None

    model_config = ConfigDict(from_attributes=True)


class CreateCategory(BaseModel):
    product_id: int | None = None
    name: str
    description: str | None

    model_config = ConfigDict(from_attributes=True)


class UpdateCategory(BaseModel):
    product_id: int | None = None
    name: str | None = None
    description: str | None
