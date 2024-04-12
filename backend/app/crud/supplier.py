from crud.abstract import BaseCrud
from models.supplier import Supplier


class SupplierCrud(BaseCrud):
    model = Supplier
