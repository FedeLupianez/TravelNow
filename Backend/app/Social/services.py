from pydantic import BaseModel
from app.dependencies import DB


class contact_data(BaseModel):
    name: str = ""
    last_name: str = ""
    email: str = ""
    subject: str = ""
    message: str = ""


def save_contact(contact: contact_data):
    try:
        DB.add_data("contacts", contact.model_dump())
        DB.commit("contacts")
        return True
    except Exception as error:
        print("error al guardar el contacto : ", error)
        return False


def get_contacts():
    return DB.get_all_data("contacts")

