from fastapi import APIRouter, UploadFile, File, Form, HTTPException
from app.services.pdf_service import extract_text_from_pdf
from app.services.gemini_service import analyze_resume_with_ai

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

        analysis = analyze_resume_with_ai(
            resume_text,
            job_description
        )

        print("4. Gemini finished")

        return analysis

    except Exception as e:
        print("Backend Error:", e)
        raise HTTPException(status_code=500, detail=str(e))