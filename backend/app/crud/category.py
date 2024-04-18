from crud.abstract import BaseCrud
from models.models import Category


class CategoryCrud(BaseCrud):
    model = Category
