from dotenv import dotenv_values
from app.database import Database
import logging


logging.basicConfig(
    level=logging.INFO, filename="app.log", format="%(asctime)s %(message)s"
)

config = dotenv_values(".env")
YAGMAIL_PWD = config.get("YAGMAIL_PWD")
SEND_EMAIL = False

DB = Database()
logging.info("Database initialized")
