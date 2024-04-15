import os
from datetime import datetime, timedelta, timezone
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from schemas import TokenData  # <- Ver schemas

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = os.getenv("EXPIRE_TOKEN")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def create_access_token(data: dict, expires_delta: timedelta | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(
            minutes=ACCESS_TOKEN_EXPIRE_MINUTES
        )
    to_encode.update({"exp": expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

    return encoded_jwt


async def verify_token(token: str, credentials_exception):

    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")  # <- puede ser con el id tambien
        if username is None:
            raise credentials_exception
        token_data = TokenData(
            username=username
        )  # <-viene del schema(cambiar cuando este creado)
    except JWTError:
        raise credentials_exception

    return token_data
