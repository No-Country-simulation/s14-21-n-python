from app.crud.abstract import BaseCrud
from app.models.business import Business


class BusinessCrud(BaseCrud):
    model = Business
