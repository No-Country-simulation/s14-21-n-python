from typing import TYPE_CHECKING

from core.database import Base
from sqlalchemy import DateTime, Enum, ForeignKey, Numeric
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.business import Business
    from app.models.product import Product
    from app.models.supplier import Supplier
else:
    Business = "Business"
    Product = "Product"
    Supplier = "Supplier"


class Transaction(Base):
    __tablename__ = "transaction"

    id: Mapped[int] = mapped_column(primary_key=True)
    type: Mapped[Enum] = mapped_column(Enum("Purchase", "Sale", name="payment_type"))
    quantity: Mapped[int]
    price = mapped_column(Numeric(10, 2))
    payment_method: Mapped[Enum] = mapped_column(
        Enum("cash", "card", "transfer", name="payment_method")
    )
    status: Mapped[Enum] = mapped_column(
        Enum(
            "Pending",
            "Approved",
            "In process",
            "Completed",
            "Canceled",
            name="payment_status",
        )
    )
    transaction_date = mapped_column(
        DateTime
    )  # NO ESTOY SEGURO # Yo tampoco, no te preocupes

    product_id: Mapped[int] = mapped_column(ForeignKey("product.id"))
    business_id: Mapped[int] = mapped_column(ForeignKey("business.id"))
    supplier_id: Mapped[int] = mapped_column(ForeignKey("supplier.id"))

    product: Mapped[Product] = relationship(back_populates="transaction", lazy="joined")
    business: Mapped[Business] = relationship(
        back_populates="transaction", lazy="joined"
    )
    supplier: Mapped[Supplier] = relationship(
        back_populates="transaction", lazy="joined"
    )
