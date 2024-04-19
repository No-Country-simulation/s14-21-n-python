from crud.abstract import BaseCrud
from models.models import Product


class ProductCrud(BaseCrud):
    model = Product
