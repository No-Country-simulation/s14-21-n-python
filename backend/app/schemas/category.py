from pydantic import BaseModel, ConfigDict


class CategorySchema(BaseModel):
    id: int
class CreateCategory(BaseModel):
    business_id: int | None = None
    product_id: int | None = None
    name: str
    description: str | None

    model_config = ConfigDict(from_attributes=True)


class UpdateCategory(BaseModel):
    business_id: int | None = None
    product_id: int | None = None
    name: str | None = None
    description: str | None
