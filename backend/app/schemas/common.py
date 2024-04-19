from enum import Enum

# Enum
# vease: https://docs.pydantic.dev/latest/api/standard_library_types/#enumintenum


class StatusEnum(str, Enum):
    Pending = "Pending"
    Approved = "Approved"
    In_process = "In process"
    Completed = "Completed"
    Canceled = "Canceled"


class TypeOpEnum(str, Enum):
    Purchase = "Purchase"
    Sale = "Sale"


class PaymentMethodEnum(str, Enum):
    cash = "cash"
    card = "card"
    transfer = "transfer"
