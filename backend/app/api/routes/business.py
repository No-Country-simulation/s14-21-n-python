from typing import List

from api.dependencies.db import get_session
from crud.business import BusinessCrud
from fastapi import APIRouter, Depends, status
from schemas.busines import BusinessSchema, CreateBusinessSchema
from sqlalchemy.ext.asyncio.session import AsyncSession

router = APIRouter()


@router.get("/", status_code=status.HTTP_200_OK, response_model=List[BusinessSchema])
async def get_all_business(db: AsyncSession = Depends(get_session)):
    businesses = await BusinessCrud(db).get_all()

    return businesses


@router.get("/{business_id}/", status_code=status.HTTP_200_OK)
async def get_business(
    business_id: int,
    db: AsyncSession = Depends(get_session),
    response_model=BusinessSchema,
):
    business = await BusinessCrud(db).get(business_id)

    return business


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_business(
    business_data: CreateBusinessSchema,
    db: AsyncSession = Depends(get_session),
):
    business = await BusinessCrud(db).create(business_data)
    return business


@router.put(
    "/{business_id}/", status_code=status.HTTP_200_OK, response_model=BusinessSchema
)
async def update_business():
    pass


@router.delete("/{business_id}/", status_code=status.HTTP_200_OK)
async def delete_business(
    business_id: int,
    db: AsyncSession = Depends(get_session),
):
    await BusinessCrud(db).delete(business_id)
