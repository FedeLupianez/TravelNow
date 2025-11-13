from app.dependencies import DB
from pydantic import BaseModel


class ReserveData(BaseModel):
    name: str
    lastname: str
    email: str
    number: str
    dest_id: str


def get_all_dest() -> list[dict]:
    return list(DB.get_all_data("cards").values())


def get_dest_by_id(id: str) -> dict:
    return DB.get_by_column("cards", "id", id)


def reserve(data: ReserveData):
    DB.add_data("reserves", data.model_dump())
    DB.commit("reserves")
