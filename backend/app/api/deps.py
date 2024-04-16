from typing import AsyncIterator
from sqlalchemy.ext.asyncio.session import async_sessionmaker
from core.database import AsyncSessionLocal


async def get_session() -> AsyncIterator[async_sessionmaker]:
    async with AsyncSessionLocal() as session:
        yield session
