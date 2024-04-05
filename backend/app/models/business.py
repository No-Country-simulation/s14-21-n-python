from sqlalchemy import Column, Integer, String
from core.database import Base
# from sqlalchemy.ext.declarative import declarative_base

# Base = declarative_base()

class Business(Base):
    __tablename__ = 'businesses'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100))
    address = Column(String(255))
    phone = Column(String(20))