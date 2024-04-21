from api.main import api_router
from core.config import settings
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# CORS
app.add_middleware(
    CORSMiddleware,
    # domains must be specified in the .env as a string with a space as delimiter
    allow_origins=[settings["cors_domains"].split(" ")],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allow_headers=["*"],
)

# Include API routes
app.include_router(api_router)
