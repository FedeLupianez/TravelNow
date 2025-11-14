from dotenv import dotenv_values
import os
from app.database import Database
import logging
from dataclasses import dataclass


logging.basicConfig(
    level=logging.INFO, filename="app.log", format="%(asctime)s %(message)s"
)

config = dotenv_values(".env")
YAGMAIL_PWD = config.get("YAGMAIL_PWD")
SEND_EMAIL = False


def get_path(file_name: str) -> str:
    BASE_DIR = os.path.dirname(__file__)
    for base_dir, dirs, files in os.walk(BASE_DIR):
        if file_name in files:
            return os.path.abspath(os.path.join(base_dir, file_name))
    return ""


DB = Database()
logging.info("Database initialized")


@dataclass
class Codes:
    OK: str = "OK"
    BAD_REQUEST: str = "BAD_REQUEST"
    NOT_FOUND: str = "NOT_FOUND"
    SERVER_ERROR: str = "SERVER_ERROR"
