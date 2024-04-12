from app.crud.abstract import BaseCrud
from app.models.user import User


class UserCrud(BaseCrud):
    model = User
