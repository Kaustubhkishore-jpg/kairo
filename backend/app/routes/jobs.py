from fastapi import APIRouter, HTTPException
from app.services.job_service import search_jobs

router = APIRouter(
    prefix="/jobs",
    tags=["Jobs"]
)


@router.get("/search")
def get_jobs(role: str):

    try:

        jobs = search_jobs(
            target_role=role,
            keywords=[]
        )

        return {
            "success": True,
            "count": len(jobs),
            "jobs": jobs
        }

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )