from core.database import Base

# Importamos el modelo
from sqlalchemy import DateTime, Enum, Numeric
from sqlalchemy.orm import Mapped, mapped_column


class Transaction(Base):
    __tablename__ = "transaction"

    id: Mapped[int] = mapped_column(primary_key=True)
    type: Mapped[Enum] = mapped_column(Enum("Purchase", "Sale"))
    quantity: Mapped[int]
    price = mapped_column(Numeric(10, 2))
    payment_method: Mapped[Enum] = mapped_column(Enum("cash", "card", "transfer"))
    status: Mapped[Enum] = mapped_column(
        Enum("Pending", "Approved", "In process", "Completed", "Canceled")
    )
    transaction_date = mapped_column(
        DateTime
    )  # NO ESTOY SEGURO # Yo tampoco, no te preocupes

    # client_id: Mapped[int] # para que se usa esto?
    # product_id = mapped_column(Integer, ForeignKey('products.id'))
    # business_id = mapped_column(Integer, ForeignKey('businesses.id'))
    # supplier_id = mapped_column(Integer, ForeignKey('suppliers.id'))

    # business: Mapped["Business"] = relationship('Business', back_populates='transactions')
    # supplier: Mapped["Supplier"] = relationship('Supplier', back_populates='transactions')
