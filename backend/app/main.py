from fastapi import FastAPI
from fastapi.middelware.cors import CORSMiddleware
from api.main import api_router


app = FastAPI()

# Configuaracion de CORS
# Lista de origenes que pueden tener acceso
""" origins = [
    "http://localhost:8080",
    "http://localhost:5173",
    "http://localhost:5501",
] """

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],   # (*) Comodin que acepta cualquier solicitud desde cualquier origen
    allow_credentials = True,   # Acepta cookies, tokens, etc.
    allows_methods = ["GET", "POST", "PUT", "DELETE"],   # Métodos HTTP permitidos
    allows_headers = ["*"]   # Cabeceras permitidas
)

# Include API routes
app.include_router(api_router)
