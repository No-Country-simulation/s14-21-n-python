from typing import TYPE_CHECKING, List, Optional

from core.database import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.category import Category
    from app.models.product import Product
    from app.models.supplier import Supplier
    from app.models.transaction import Transaction
    from app.models.user import User
else:
    Product = "Product"
    Transaction = "Transaction"
    User = "User"
    Supplier = "Supplier"
    Category = "Category"


class Business(Base):
    __tablename__ = "business"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[Optional[str]]
    address: Mapped[str]
    phone: Mapped[str]

    user: Mapped[User] = relationship(back_populates="business")
    product: Mapped[List[Product]] = relationship(
        back_populates="business",
    )
    transaction: Mapped[List[Transaction]] = relationship(
        back_populates="business",
    )
    supplier: Mapped[List[Supplier]] = relationship(
        back_populates="business",
    )
    category: Mapped[List[Category]] = relationship(
        back_populates="business",
    )
