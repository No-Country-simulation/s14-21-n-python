from app.models.business import Business
from app.models.category import Category
from core.database import Base
from sqlalchemy import DateTime, ForeignKey, Integer
from sqlalchemy.orm import Mapped, mapped_column, relationship


class Product(Base):
    __tablename__ = "product"

    id = mapped_column(Integer, primary_key=True, increment=True)
    business_id = mapped_column(Integer, ForeignKey("businesses.id"))
    brand: Mapped[str]
    name: Mapped[str]
    barcode: Mapped[str]
    stock: Mapped[int]
    minimum_stock: Mapped[int]
    original_price: Mapped[int]
    # https://docs.sqlalchemy.org/en/20/tutorial/metadata.html#declaring-mapped-classes can use old style for now.
    purchase_date = mapped_column(DateTime)
    expiration_date = mapped_column(DateTime)
    category_id = mapped_column(Integer, ForeignKey("categories.id"))

    business: Mapped[Business] = relationship(back_populates="products")
    category: Mapped[Category] = relationship(back_populates="products")
