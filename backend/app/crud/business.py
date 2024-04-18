from crud.abstract import BaseCrud
from models.models import Business


class BusinessCrud(BaseCrud):
    model = Business
