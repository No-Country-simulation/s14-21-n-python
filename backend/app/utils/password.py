from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


async def hash(password: str):
    return pwd_context.hash(password)


async def verify(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)
