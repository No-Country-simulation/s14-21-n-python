from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    database_password: str = "postgres"
    database_username: str = "postgres"
    database_host: str = "localhost"
    database_port: str = "5432"
    database_name: str = "postgres"
    secret_key: str
    algorithm: str

    class Config:
        env_file = "../../.env"


settings = Settings()
