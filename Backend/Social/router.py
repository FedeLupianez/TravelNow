from fastapi import APIRouter
import Social.services as services
import yagmail
from dependencies import YAGMAIL_PWD, SEND_EMAIL


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
    status = services.save_contact(message)
    return {"detail": "message sent"}


@router.get("/get_all")
async def get_all():
    pass
