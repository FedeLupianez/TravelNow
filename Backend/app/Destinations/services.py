from app.dependencies import DB


def get_all_dest() -> list[dict]:
    return list(DB.get_all_data("cards").values())


def get_dest_by_id(id: str) -> dict:
    return DB.get_by_column("cards", "id", id)
