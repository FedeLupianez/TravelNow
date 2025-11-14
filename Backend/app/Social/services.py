from pydantic import BaseModel
from app.dependencies import DB
from app.exceptions import NotFoundException, InternalServerError


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
        raise InternalServerError(detail=str(error))


def get_contacts():
    try:
        return DB.get_all_data("contacts")
    except Exception as error:
        raise InternalServerError(detail=str(error))
