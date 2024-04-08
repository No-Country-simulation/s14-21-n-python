from typing import Optional

from core.database import Base
from models import Business
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[Optional[str]]
    email: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str]
    business_id: Mapped[Optional["Business"]] = mapped_column(ForeignKey("business.id"))

    business: Mapped[Optional["Business"]] = relationship(back_populates="user")
