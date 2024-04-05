from core.database import Base

from sqlalchemy import Integer
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

#Importamos el modelo
from models import Transaction

class Supplier(Base):
    __tablename__ = 'suppliers'

    id = mapped_column(Integer, primary_key=True, increment=True)
    name: Mapped[str]
    phone: Mapped[str]
    address: Mapped[str]

    transactions: Mapped["Transaction"] = relationship('Transaction', back_populates='supplier')
