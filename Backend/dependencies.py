from dotenv import dotenv_values

config = dotenv_values(".env")
YAGMAIL_PWD = config.get("YAGMAIL")

