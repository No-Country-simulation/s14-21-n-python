from core.database import Base
from sqlalchemy.orm import Mapped, mapped_column


class Category(Base):
    __tablename__ = "category"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    description: Mapped[str]

    # products: Mapped["Product"] = relationship('Product', back_populates='category')
