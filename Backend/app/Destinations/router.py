from fastapi import APIRouter
import app.Destinations.services as services

router = APIRouter(prefix="/dest")


@router.get("/get_all")
async def get_all():
    data = services.get_all_dest()
    response = {"cards": data}
    return response


@router.get("/get_one/{id}")
async def get_one(id: str):
    data = services.get_dest_by_id(id)
    return data


@router.post("/reserve")
async def reserve(data: services.ReserveData):
    return services.reserve(data)
