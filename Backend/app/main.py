from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.Social.router import router as SocialRouter
from app.Destinations.router import router as DestRouter
import logging

main_app = FastAPI(title="travelnowapi")


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
