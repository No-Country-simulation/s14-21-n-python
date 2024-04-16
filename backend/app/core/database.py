from core.config import settings
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

SQLALCHEMY_DATABASE_URL = f"postgresql+psycopg://{settings['database_username']}:{settings['database_password']}@{settings['database_host']}:{settings['database_port']}/{settings['database_name']}"

async_engine = create_async_engine(url=SQLALCHEMY_DATABASE_URL)

AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    autoflush=False,
    future=True,
)


class Base(DeclarativeBase):
    pass
