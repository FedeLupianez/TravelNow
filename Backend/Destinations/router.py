from fastapi import APIRouter, HTTPException
import json
from utils import get_path

router = APIRouter(prefix="/dest")


@router.get("/get_all")
def get_all():
    try:
        with open(get_path("cards.json"), "r") as file:
            response = {"cards": json.load(file)}
            return response
    except Exception:
        raise HTTPException(status_code=300, detail="Error with get_all")
