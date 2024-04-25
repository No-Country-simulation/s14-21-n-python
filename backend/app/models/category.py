from typing import TYPE_CHECKING, List

from core.database import Base
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.business import Business
    from app.models.product import Product
else:
    Product = "Product"
    Business = "Business"


class Category(Base):
    __tablename__ = "category"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    description: Mapped[str | None]

    product: Mapped[List[Product]] = relationship(
        "Product",
        back_populates="category",
    )

    business_id: Mapped[int] = mapped_column(ForeignKey("business.id"))
    business: Mapped[Business] = relationship(
        back_populates="category",
    )
