from typing import List

from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.transaction import TransactionCrud
from fastapi import APIRouter, Depends, status
from schemas.transaction import CreateTransaction, TransactionSchema, UpdateTransaction
from sqlalchemy.ext.asyncio.session import AsyncSession

router = APIRouter()


@router.post(
    "/{business_id}/transactions/",
    status_code=status.HTTP_201_CREATED,
    response_model=TransactionSchema,
)
async def create_transaction(
    business_id: int,
    transaction_create: CreateTransaction,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    new_transaction = await TransactionCrud(db).create(
        transaction_create.model_copy(update={"business_id": business_id})
    )

    return new_transaction


@router.get(
    "/{business_id}/transactions/{transaction_id}/",
    status_code=status.HTTP_200_OK,
    response_model=TransactionSchema,
)
async def get_transaction_id(
    business_id: int,
    transaction_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    transaction = await TransactionCrud(db).get(transaction_id)

    return transaction


@router.get(
    "/{business_id}/transactions/",
    status_code=status.HTTP_200_OK,
    response_model=List[TransactionSchema],
)
async def get_all_transactions(
    business_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    transactions = await TransactionCrud(db).get_all()

    return transactions


@router.delete(
    "/{business_id}/transactions/{transaction_id}/", status_code=status.HTTP_200_OK
)
async def delete_transaction(
    business_id: int,
    transaction_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    await TransactionCrud(db).delete(transaction_id)


@router.put(
    "/{business_id}/transactions/{transaction_id}/", status_code=status.HTTP_200_OK
)
async def update_transaction(
    business_id: int,
    transaction_id: int,
    update_transaction: UpdateTransaction,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    transaction = await TransactionCrud(db).update(transaction_id, update_transaction)

    return transaction
