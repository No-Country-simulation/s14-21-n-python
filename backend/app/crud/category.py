from app.crud.abstract import BaseCrud
from app.models.category import Category


class CategoryCrud(BaseCrud):
    model = Category
