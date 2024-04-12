from crud.abstract import BaseCrud
from models.business import Business


class BusinessCrud(BaseCrud):
    model = Business
