from typing import TYPE_CHECKING, List

from core.database import Base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.business import Business
    from app.models.transaction import Transaction
else:
    Business = "Business"
    Transaction = "Transaction"


class Supplier(Base):
    __tablename__ = "supplier"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    phone: Mapped[str]
    address: Mapped[str]
    email: Mapped[str]
    is_active: Mapped[bool] = mapped_column(default=True)

    business_id: Mapped[int] = mapped_column(ForeignKey("business.id"))
    business: Mapped[Business] = relationship(
        back_populates="supplier",
    )

    transaction: Mapped[List[Transaction]] = relationship(
        back_populates="supplier",
    )
