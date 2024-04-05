from core.database import Base

from sqlalchemy import Integer, DATETIME, DECIMAL, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

#Importamos el modelo
from models import Business, Category

class Product(Base):
    __tablename__ = 'products'

    id = mapped_column(Integer, primary_key=True, increment=True)
    business_id = mapped_column(Integer, ForeignKey('businesses.id'))
    brand: Mapped[str]
    name: Mapped[str]
    barcode: Mapped[str]
    stock: Mapped[int]
    minimum_stock: Mapped[int]
    original_price: Mapped[DECIMAL] #= mapped_column(Decimal(10, 2))
    purchase_date: Mapped[DATETIME] #no estoy seguro
    expiration_date: Mapped[DATETIME] #no estoy seguro
    category_id = mapped_column(Integer, ForeignKey('categories.id'))

    business: Mapped["Business"] = relationship('Business', back_populates='products')
    category: Mapped["Category"] = relationship('Category', back_populates='products')