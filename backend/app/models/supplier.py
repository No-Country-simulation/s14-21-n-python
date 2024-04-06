from core.database import Base

from sqlalchemy.orm import Mapped, mapped_column


class Supplier(Base):
    __tablename__ = "supplier"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    phone: Mapped[str]
    address: Mapped[str]

    # transactions: Mapped["Transaction"] = relationship('Transaction', back_populates='supplier')
