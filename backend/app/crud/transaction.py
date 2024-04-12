from crud.abstract import BaseCrud
from models.transaction import Transaction


class TransactionCrud(BaseCrud):
    model = Transaction
