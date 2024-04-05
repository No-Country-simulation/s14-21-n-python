from sqlalchemy import Column, Integer, String, ForeignKey
from core.database import Base

class Supplier(Base):
    __tablename__ = 'suppliers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))
    phone = Column(String(20))
    address = Column(String(255))
    business_id = Column(Integer, ForeignKey('businesses.id'))
