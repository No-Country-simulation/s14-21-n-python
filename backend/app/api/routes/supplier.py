from typing import List

from api.dependencies.auth import validate_authenticate_user
from api.dependencies.db import get_session
from crud.supplier import SupplierCrud
from fastapi import APIRouter, Depends, status
from schemas.supplier import CreateSupplierSchema, SupplierSchema, UpdateSupplierSchema
from sqlalchemy.ext.asyncio.session import AsyncSession

router = APIRouter()


@router.post(
    "/{business_id}/suppliers/",
    status_code=status.HTTP_201_CREATED,
    response_model=SupplierSchema,
)
async def create_supplier(
    business_id: int,
    supplier_create: CreateSupplierSchema,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    new_supplier = await SupplierCrud(db).create(
        supplier_create.model_copy(update={"business_id": business_id})
    )

    return new_supplier


@router.get(
    "/{business_id}/suppliers/{supplier_id}/",
    status_code=status.HTTP_200_OK,
    response_model=SupplierSchema,
)
async def get_supplier_id(
    business_id: int,
    supplier_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    supplier = await SupplierCrud(db).get(supplier_id)

    return supplier


@router.get(
    "/{business_id}/suppliers/",
    status_code=status.HTTP_200_OK,
    response_model=List[SupplierSchema],
)
async def get_all_suppliers(
    business_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    suppliers = await SupplierCrud(db).get_all()

    return suppliers


@router.delete(
    "/{business_id}/suppliers/{supplier_id}/", status_code=status.HTTP_200_OK
)
async def delete_supplier(
    business_id: int,
    supplier_id: int,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    await SupplierCrud(db).delete(supplier_id)


@router.put("/{business_id}/suppliers/{supplier_id}/", status_code=status.HTTP_200_OK)
async def update_supplier(
    business_id: int,
    supplier_id: int,
    update_transaction: UpdateSupplierSchema,
    db: AsyncSession = Depends(get_session),
    current_user: str = Depends(validate_authenticate_user),
):
    supplier = await SupplierCrud(db).update(supplier_id, update_transaction)

    return supplier
