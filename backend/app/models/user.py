# from core.database import Base
# from sqlalchemy import Column, String, Integer
# from sqlalchemy.orm import relationship

# user models go here!
from sqlalchemy import Column, Integer, String, Enum, ForeignKey
from sqlalchemy.orm import relationship
from core.database import Base

class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(50))
    email = Column(String(100), unique=True)
    password = Column(String(100))
    business_id = Column(Integer, ForeignKey('businesses.id'))
    role = Column(Enum('Administrator', 'Employee'))