from fastapi import APIRouter
from pydantic import BaseModel
import yagmail
from dependencies import YAGMAIL_PWD


router = APIRouter(prefix="/social")
yag = yagmail.SMTP(user="lupianez.federico2023@gmail.com", password=YAGMAIL_PWD)


class contact_data(BaseModel):
    name: str = ""
    last_name: str = ""
    email: str = ""
    subject: str = ""
    message: str = ""


@router.post("/contact")
def contact_us(message: contact_data):
    # Endpoint que va a enviar el mail al admin
    yag.send(
        to="lupianez.federico2023@gmail.com",
        subject=message.subject,
        contents=[
            f"mensaje recibido de {message.name} {message.last_name}, email : {message.email}\n{message.message}",
            message.email,
        ],
    )
    return {"detail": "message sent"}
