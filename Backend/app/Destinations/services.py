from app.dependencies import DB
from pydantic import BaseModel
from app.exceptions import NotFoundException


class ReserveData(BaseModel):
    name: str
    lastname: str
    email: str
    number: str
    dest_id: str


def get_all_dest() -> list[dict]:
    return list(DB.get_all_data("cards").values())


def get_dest_by_id(id: str) -> dict:
    dest = DB.get_by_column("cards", "id", id)
    if not dest:
        raise NotFoundException(f"Destination with id {id} not found")
    return dest


def reserve(data: ReserveData):
    DB.add_data("reserves", data.model_dump())
    DB.commit("reserves")
