from core.database import Base

from sqlalchemy import Integer
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column

#Importamos el modelo
from models import Product


class Category(Base):
    __tablename__ = 'categories'

    id = mapped_column(Integer, primary_key=True, increment=True)
    name: Mapped[str]
    description: Mapped[str]

    products: Mapped["Product"] = relationship('Product', back_populates='category')