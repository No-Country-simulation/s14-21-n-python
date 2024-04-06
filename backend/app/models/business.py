from typing import Optional

from core.database import Base

# Importamos el modelo
from sqlalchemy.orm import Mapped, mapped_column


class Business(Base):
    __tablename__ = "business"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[Optional[str]]
    address: Mapped[str]
    phone: Mapped[str]

    # TODO define fields

    # user_id: Mapped[int] =
    # product_id: Mapped[int] =
    # transaction_id: Mapped[int] =

    # user: Mapped["User"] = relationship("User", back_populates="business")
    # product: Mapped["Product"] = relationship("Product", back_populates="business")
    # transaction: Mapped["Transaction"] = relationship(
    #     "Transaction", back_populates="business"
    # )
