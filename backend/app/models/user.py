from typing import TYPE_CHECKING, Optional

from core.database import Base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.business import Business
else:
    Business = "Business"


class User(Base):
    __tablename__ = "user"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[Optional[str]]
    email: Mapped[str] = mapped_column(unique=True)
    password: Mapped[str]

    business_id: Mapped[Optional[int]] = mapped_column(ForeignKey("business.id"))
    business: Mapped[Optional[Business]] = relationship(back_populates="user")
