from crud.abstract import BaseCrud
from models.category import Category


class CategoryCrud(BaseCrud):
    model = Category
