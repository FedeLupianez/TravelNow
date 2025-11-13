from fastapi import APIRouter, HTTPException
import app.Destinations.services as services

router = APIRouter(prefix="/dest")


@router.get("/get_all")
async def get_all():
    try:
        data = services.get_all_dest()
        response = {"cards": data}
        return response
    except Exception:
        raise HTTPException(status_code=300, detail="Error with get_all")


@router.get("/get_one/{id}")
async def get_one(id: str):
    try:
        data = services.get_dest_by_id(id)
        return data
    except Exception:
        raise HTTPException(status_code=300, detail="Error with get_one")


@router.post("/reserve")
async def reserve(data: services.ReserveData):
    try:
        return services.reserve(data)
    except Exception:
        raise HTTPException(status_code=300, detail="Error with reserve")
