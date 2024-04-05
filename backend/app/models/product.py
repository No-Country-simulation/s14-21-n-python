from sqlalchemy import Column, Integer, String, Date, DECIMAL, ForeignKey
from core.database import Base

class Product(Base):
    __tablename__ = 'products'

    id = Column(Integer, primary_key=True, autoincrement=True)
    business_id = Column(Integer, ForeignKey('businesses.id'))
    brand = Column(String(100))
    name = Column(String(100))
    barcode = Column(String(50))
    stock_quantity = Column(Integer)
    minimum_stock = Column(Integer)
    original_price = Column(DECIMAL(10, 2))
    purchase_date = Column(Date)
    expiration_date = Column(Date)
    category_id = Column(Integer, ForeignKey('category.id'))
