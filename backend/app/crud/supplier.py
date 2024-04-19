from crud.abstract import BaseCrud
from models.models import Supplier


class SupplierCrud(BaseCrud):
    model = Supplier
