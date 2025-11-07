from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from Social.router import router as SocialRouter
from Destinations.router import router as DestRouter

app = FastAPI(title="travelnowapi")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(SocialRouter)
app.include_router(DestRouter)
