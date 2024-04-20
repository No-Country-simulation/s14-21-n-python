from typing import List
from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.transaction import TransactionCrud
from fastapi import APIRouter, Depends, status
from schemas.transaction import TransactionSchema, CreateTransaction, UpdateTransaction
from sqlalchemy.ext.asyncio.session import AsyncSession

router = APIRouter()


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=TransactionSchema)
async def create_transaction(
    transaction_create: CreateTransaction,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    new_transaction = await TransactionCrud(db).create(transaction_create)

    return new_transaction


@router.get(
    "/{transaction_id}/",
    status_code=status.HTTP_200_OK,
    response_model=TransactionSchema,
)
async def get_transaction_id(
    transaction_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    transaction = await TransactionCrud(db).get(transaction_id)

    return transaction


@router.get(
    "/",
    status_code=status.HTTP_200_OK,
    response_model=List[TransactionSchema],
)
async def get_all_transactions(
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    transactions = await TransactionCrud(db).get_all()

    return transactions


@router.delete("/{transaction_id}/", status_code=status.HTTP_200_OK)
async def delete_transaction(
    transaction_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    await TransactionCrud(db).delete(transaction_id)


@router.put("/{transaction_id}/", status_code=status.HTTP_200_OK)
async def update_transaction(
    transaction_id: int,
    update_transaction: UpdateTransaction,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):

    transaction = await TransactionCrud(db).update(transaction_id, update_transaction)

    return transaction
