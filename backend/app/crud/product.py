from crud.abstract import BaseCrud
from models.product import Product


class ProductCrud(BaseCrud):
    model = Product
