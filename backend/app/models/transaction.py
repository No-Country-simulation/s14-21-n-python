from core.database import Base

from sqlalchemy import Integer, DATETIME, DECIMAL, ForeignKey, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

#Importamos el modelo
from models import Business, Supplier

class Transaction(Base):
    __tablename__ = 'transactions'

    id = mapped_column(Integer, primary_key=True, increment=True)
    business_id = mapped_column(Integer, ForeignKey('businesses.id'))
    product_id = mapped_column(Integer, ForeignKey('products.id'))
    client_id: Mapped[int]
    supplier_id = mapped_column(Integer, ForeignKey('suppliers.id'))
    type: Mapped[Enum] = mapped_column(Enum('Purchase', 'Sale'))
    quantity: Mapped[int]
    price: Mapped[DECIMAL] #= mapped_column(Decimal(10, 2))
    payment_method: Mapped[Enum] = mapped_column(Enum('cash', 'card', 'transfer'))
    status: Mapped[Enum] = mapped_column(Enum('Pending', 'Approved', 'In process', 'Completed', 'Canceled'))
    transaction_date: Mapped[DATETIME] #NO ESTOY SEGURO

    business: Mapped["Business"] = relationship('Business', back_populates='transactions')
    supplier: Mapped["Supplier"] = relationship('Supplier', back_populates='transactions')