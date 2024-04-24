from typing import TYPE_CHECKING, List, Optional

from core.database import Base
from sqlalchemy import Date, ForeignKey, Integer, Numeric, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.business import Business
    from app.models.category import Category
    from app.models.transaction import Transaction
else:
    Business = "Business"
    Category = "Category"
    Transaction = "Transaction"


class Product(Base):
    __tablename__ = "product"

    id = mapped_column(Integer, primary_key=True)
    business_id = mapped_column(Integer, ForeignKey("businesses.id"))
    brand: Mapped[str] = mapped_column(String(255))
    name: Mapped[str] = mapped_column(String(255))
    stock: Mapped[int]
    description: Mapped[str]
    # https://docs.sqlalchemy.org/en/20/tutorial/metadata.html#declaring-mapped-classes can use old style for now. we'll need to figure out the types later
    minimum_stock = mapped_column(Numeric(10, 2))
    original_price = mapped_column(Numeric(10, 2))
    purchase_date: Mapped[Optional[Date]] = mapped_column(Date)
    expiration_date: Mapped[Optional[Date]] = mapped_column(Date)

    business_id: Mapped[int] = mapped_column(ForeignKey("business.id"))
    business: Mapped[Business] = relationship(
        back_populates="product",
    )
    category_id: Mapped[int] = mapped_column(ForeignKey("category.id"))
    category: Mapped[Category] = relationship(
        back_populates="product",
    )
    transaction: Mapped[List[Transaction]] = relationship(
        back_populates="product",
    )
