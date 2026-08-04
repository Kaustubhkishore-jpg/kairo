from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.analyze import router as analyze_router
from app.routes.jobs import router as jobs_router

app = FastAPI(title="KAIRO API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(analyze_router)
app.include_router(jobs_router)


@app.get("/")
def root():
    return {
        "message": "Welcome to KAIRO API"
    }