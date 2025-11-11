from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Social.router import router as SocialRouter
from Destinations.router import router as DestRouter

app = FastAPI(title="travelnowapi")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:8000"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],  # Métodos permitidos
    allow_headers=["*"],
)
app.include_router(SocialRouter)
app.include_router(DestRouter)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8080)
