from crud.abstract import BaseCrud
from models.models import Transaction


class TransactionCrud(BaseCrud):
    model = Transaction
