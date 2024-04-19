from pydantic import BaseModel, ConfigDict, EmailStr


class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: EmailStr


class CreateUserSchema(BaseModel):
    name: str | None = None
    email: EmailStr
    password: str


class UserUpdate(BaseModel):
    name: str | None = None
    email: EmailStr | None = None
    business_id: int | None = None

    model_config = ConfigDict(from_attributes=True)


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserSchema(BaseModel):
    id: int
    name: str
    email: EmailStr
    business_id: int | None = None

    class Config:
        from_attributes = True
