from sqlalchemy import Column, Integer, Enum, DECIMAL, Date, ForeignKey
from core.database import Base

class Transaction(Base):
    __tablename__ = 'transactions'

    id = Column(Integer, primary_key=True, autoincrement=True)
    business_id = Column(Integer, ForeignKey('businesses.id'))
    product_id = Column(Integer, ForeignKey('products.id'))
    client_id = Column(Integer)  # assuming there's a client associated with the transaction
    supplier_id = Column(Integer, ForeignKey('suppliers.id'))
    type = Column(Enum('Purchase', 'Sale'))
    quantity = Column(Integer)
    price = Column(DECIMAL(10, 2))
    payment_method = Column(Enum('cash', 'card', 'transfer'))
    status = Column(Enum('Pending', 'Approved', 'In process', 'Completed', 'Canceled'))
    transaction_date = Column(Date)
