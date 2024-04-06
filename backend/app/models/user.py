from core.database import Base
from typing import Optional
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from models import Business


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[Optional[str]]
    email: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str]
    business_id = mapped_column(ForeignKey("business.id"))

    business: Mapped["Business"] = relationship(back_populates="user")
