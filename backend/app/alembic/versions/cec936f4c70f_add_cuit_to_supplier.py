"""add cuit to supplier

Revision ID: cec936f4c70f
Revises: ec7178021723
Create Date: 2024-04-18 22:43:46.486535

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'cec936f4c70f'
down_revision: Union[str, None] = 'ec7178021723'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    pass


def downgrade() -> None:
    pass
