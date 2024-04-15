from typing import Annotated
from datetime import timedelta
from fastapi import APIRouter, Depends, status, HTTPException
from schemas import Token, UserLogin
from utils import oauth2, user as userAuth  # <--- Ver donde ubicar user
from fastapi.security.oauth2 import OAuth2PasswordRequestForm


from sqlalchemy.ext.asyncio.session import AsyncSession
from api.deps import get_db


router = APIRouter(tags=["Authentication"])


@router.post("/token", response_model=Token)
async def login(
    form_data: Annotated[UserLogin, Depends()],
    db: AsyncSession = Depends(get_db),
) -> Token:
    user = await userAuth.authenticate_user(db, form_data.email, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=oauth2.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = await oauth2.create_access_token(
        data={"sub": user.email}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")


@router.post("/users", status_code=status.HTTP_201_CREATED)
def create_user(user_create: UserSchema, db: Session = Depends(get_db)):
    hashed_password = password.hash(user_create.password)
    user_create.password = hashed_password

    new_user = User(**user_create.model_dump())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
