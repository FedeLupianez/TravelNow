from fastapi import APIRouter
import app.Social.services as services
import yagmail
from app.dependencies import YAGMAIL_PWD, SEND_EMAIL
import logging


router = APIRouter(prefix="/social")
yag = yagmail.SMTP(user="lupianez.federico2023@gmail.com", password=YAGMAIL_PWD)


@router.post("/contact")
async def contact_us(message: services.contact_data):
    # Endpoint que va a enviar el mail al admin
    if SEND_EMAIL:
        yag.send(
            to="lupianez.federico2023@gmail.com",
            subject=message.subject,
            contents=[
                f"mensaje recibido de {message.name} {message.last_name}, email : {message.email}\n{message.message}",
                message.email,
            ],
        )
    services.save_contact(message)
    logging.info(f"message sent : {message.email} {message.subject} {message.message}")
    return {"detail": "message sent"}


@router.get("/get_contacts")
async def get_all():
    contacts = services.get_contacts()
    contacts = list(contacts.values())
    return contacts
