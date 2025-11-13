from fastapi import APIRouter, HTTPException
import json
from app.utils import get_path

router = APIRouter(prefix="/dest")


@router.get("/get_all")
async def get_all():
    try:
        with open(get_path("cards.json"), "r", encoding="utf-8-sig") as file:
            data = json.load(file)
            data = list(data.values())
            response = {"cards": data}
            return response
    except Exception:
        raise HTTPException(status_code=300, detail="Error with get_all")
