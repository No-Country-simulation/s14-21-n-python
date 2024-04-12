from app.crud.abstract import BaseCrud
from app.models.supplier import Supplier


class SupplierCrud(BaseCrud):
    model = Supplier
