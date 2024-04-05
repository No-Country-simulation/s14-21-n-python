from core.database import Base
from typing import Optional
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

#Importamos el modelo
from models import Business


class User(Base):
    __tablename__ = 'users'

    id = Mapped[int] = mapped_column(primary_key=True, autoincrement= True, unique= True)
    name: Mapped[Optional[str]]
    email = Mapped[str] = mapped_column(unique=True)
    password = Mapped[str]
    business_id = mapped_column(ForeignKey('businesses.id'))

    business: Mapped["Business"] = relationship(back_populates="users")