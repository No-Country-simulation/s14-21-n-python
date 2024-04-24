from api.routes import (
    auth,
    business,
    hello,
    user,
    transaction,
    category,
    products,
    supplier,
)
from fastapi import APIRouter
from api.routes import hello, auth, user
from api.routes import filter_best_sales

api_router = APIRouter()
api_router.include_router(hello.router)

api_router.include_router(
    auth.router,
    prefix="/api/auth",
    tags=["Authentication"],
    responses={404: {"description": "Not found"}},
)

api_router.include_router(
    user.router,
    prefix="/api/users",
    tags=["Users"],
    responses={404: {"description": "Not found"}},
)
api_router.include_router(
    products.router,
    prefix="/api/businesses",
    tags=["Products"],
    responses={404: {"description": "Not found"}},
)

api_router.include_router(
    business.router,
    prefix="/api/businesses",
    tags=["Businesses"],
    responses={404: {"description": "Not found"}},
)

api_router.include_router(
    transaction.router,
    prefix="/api/businesses",
    tags=["Transaction"],
    responses={404: {"description": "Not found"}},
)

api_router.include_router(
    category.router,
    prefix="/api/businesses",
    tags=["Category"],
    responses={404: {"description": "Not found"}},
)

api_router.include_router(
    supplier.router,
    prefix="/api/businesses",
    tags=["Supplier"],
    responses={404: {"description": "Not found"}},
)


api_router.include_router(
    filter_best_sales.router,
    prefix="/api/businesses",
    tags=["Filter"],
    responses={404: {"description": "Not found"}},
)
