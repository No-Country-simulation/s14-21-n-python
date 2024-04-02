from fastapi import FastAPI
from .api.main import router as api_router


app = FastAPI()

# Include API routes
app.include_router(api_router)


