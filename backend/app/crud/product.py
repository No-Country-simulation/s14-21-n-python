from app.crud.abstract import BaseCrud
from app.models.product import Product


class ProductCrud(BaseCrud):
    model = Product
