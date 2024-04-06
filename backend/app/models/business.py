from core.database import Base
from typing import Optional
from sqlalchemy import Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship

# Importamos el modelo
from models import User, Product, Transaction


class Business(Base):
    __tablename__ = "business"

    id = mapped_column(Integer, primary_key=True, increment=True, unique=True)
    name: Mapped[Optional[str]]
    address: Mapped[str]
    phone: Mapped[str]

    user: Mapped["User"] = relationship("User", back_populates="business")
    products: Mapped["Product"] = relationship("Product", back_populates="business")
    transactions: Mapped["Transaction"] = relationship(
        "Transaction", back_populates="business"
    )
