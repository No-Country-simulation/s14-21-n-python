from app.crud.abstract import BaseCrud
from app.models.transaction import Transaction


class TransactionCrud(BaseCrud):
    model = Transaction
