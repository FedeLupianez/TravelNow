from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from app.Social.router import router as SocialRouter
from app.Destinations.router import router as DestRouter
from app.exceptions import NotFoundException
import logging

main_app = FastAPI(title="travelnowapi")


@main_app.exception_handler(NotFoundException)
async def not_found_exception_handler(request: Request, exc: NotFoundException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"message": f"{exc.detail}"},
    )


@main_app.exception_handler(Exception)
async def generic_exception_handler(request: Request, exc: Exception):
    logging.error(f"An unexpected error occurred: {exc}")
    return JSONResponse(
        status_code=500,
        content={"message": "An unexpected internal server error occurred."},
    )


main_app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Métodos permitidos
    allow_headers=["*"],
)
main_app.include_router(SocialRouter)
main_app.include_router(DestRouter)
logging.info("Server started")

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(main_app, host="0.0.0.0", port=8080)
