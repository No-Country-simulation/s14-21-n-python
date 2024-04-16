from fastapi import APIRouter
from api.routes import hello, auth, user

api_router = APIRouter()
api_router.include_router(hello.router)

api_router.include_router(auth.router)
api_router.include_router(user.router)
