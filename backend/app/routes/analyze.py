from fastapi import APIRouter, UploadFile, File, Form, HTTPException

from app.services.pdf_service import extract_text_from_pdf
from app.services.gemini_service import (
    analyze_resume_with_ai,
    rank_jobs_with_ai,
)
from app.services.job_service import search_jobs

router = APIRouter()


@router.post("/analyze")
async def analyze_resume(
    resume: UploadFile = File(...),
    job_description: str = Form("")
):
    try:
        print("1. Request received")

        file_bytes = await resume.read()
        print("2. File read")

        resume_text = extract_text_from_pdf(file_bytes)
        print("3. PDF extracted")

        # Resume Analysis
        analysis = analyze_resume_with_ai(
            resume_text,
            job_description
        )

        print("4. Gemini Resume Analysis Finished")

        # Search Jobs
        recommended_jobs = search_jobs(
            analysis.get("target_role", ""),
            analysis.get("alternate_roles", [])
        )

        print(f"Jobs Found: {len(recommended_jobs)}")

        # Keep only Top 10 jobs
        recommended_jobs = recommended_jobs[:10]

        print(f"Ranking {len(recommended_jobs)} jobs with ONE Gemini call...")

        # ONE Gemini call to rank all jobs
        rankings = rank_jobs_with_ai(
            resume_text,
            recommended_jobs
        )

        print("Batch Ranking:", rankings)

        # Merge AI scores into jobs
        for result in rankings:

            index = result.get("job_index")

            if index is None:
                continue

            if index >= len(recommended_jobs):
                continue

            recommended_jobs[index]["match_score"] = result.get("match_score", 0)
            recommended_jobs[index]["skills_score"] = result.get("skills_score", 0)
            recommended_jobs[index]["experience_score"] = result.get("experience_score", 0)
            recommended_jobs[index]["education_score"] = result.get("education_score", 0)
            recommended_jobs[index]["domain_score"] = result.get("domain_score", 0)
            recommended_jobs[index]["location_score"] = result.get("location_score", 0)

            recommended_jobs[index]["strengths"] = result.get("strengths", [])
            recommended_jobs[index]["gaps"] = result.get("gaps", [])

        # Sort by highest AI Match Score
        recommended_jobs.sort(
            key=lambda job: job.get("match_score", 0),
            reverse=True
        )

        # Add jobs to response
        analysis["recommended_jobs"] = recommended_jobs

        print("5. Analysis Complete")

        return analysis

    except Exception as e:
        print("Backend Error:", e)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )