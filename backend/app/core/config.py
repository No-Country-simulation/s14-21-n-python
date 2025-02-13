import os

from dotenv import load_dotenv

# from pydantic_settings import BaseSettings


# class Settings(BaseSettings):
#     database_password: str = "postgres"
#     database_username: str = "postgres"
#     database_host: str = "localhost"
#     database_port: str = "5432"
#     database_name: str = "postgres"
#     secret_key: str
#     algorithm: str
#     expire_token: int

#     class Config:
#         env_file = "../../.env"

load_dotenv()

settings = {
    "database_password": os.getenv("DATABASE_PASSWORD"),
    "database_username": os.getenv("DATABASE_USERNAME"),
    "database_host": os.getenv("DATABASE_HOST"),
    "database_port": os.getenv("DATABASE_PORT"),
    "database_name": os.getenv("DATABASE_NAME"),
    "secret_key": os.getenv("SECRET_KEY"),
    "algorithm": os.getenv("ALGORITHM"),
    "expire_token": os.getenv("EXPIRE_TOKEN"),
    "cors_domains": os.getenv("CORS_DOMAINS"),
}
