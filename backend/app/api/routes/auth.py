from core.config import settings
from typing import Annotated
from datetime import timedelta
from fastapi import APIRouter, Depends, status, HTTPException
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from schemas import Token
from utils import oauth2
from utils.user import is_authenticate


from sqlalchemy.ext.asyncio.session import AsyncSession
from api.dependencies.db import get_session


router = APIRouter(
    tags=["Authentication"],
    responses={404: {"description": "Not found"}},
)


@router.post("/token/", response_model=Token)
async def login(
    user: Annotated[OAuth2PasswordRequestForm, Depends()],
    db: AsyncSession = Depends(get_session),
) -> Token:
    db_user = await is_authenticate(user.username, user.password, db)
    if not db_user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=int(settings["expire_token"]))
    access_token = await oauth2.create_access_token(
        data={"email": db_user.email}, expires_delta=access_token_expires
    )
    return Token(access_token=access_token, token_type="bearer")


# registration
