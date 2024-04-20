from fastapi import APIRouter
from api.routes import hello, auth, user, category

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
    category.router,
    prefix="/api/categories",
    tags=["Category"],
    responses={404: {"description": "Not found"}},
)
