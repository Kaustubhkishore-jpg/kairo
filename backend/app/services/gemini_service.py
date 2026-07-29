import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)


def analyze_resume_with_ai(
    resume_text: str,
    job_description: str = ""
):
    prompt = f"""
You are an expert ATS Resume Reviewer.

Resume:

{resume_text}
"""

    if job_description.strip():
        prompt += f"""

Target Job Description:

{job_description}

Compare the resume against the job description.

Return ONLY valid JSON in this exact format:

{{
  "ats_score": 0,
  "resume_quality": 0,
  "job_match": 0,
  "strengths": [],
  "weaknesses": [],
  "missing_skills": [],
  "missing_keywords": [],
  "suggestions": [],
  "interview_questions": []
}}

Rules:

- ATS Score must be between 0 and 100.
- Resume Quality must be between 0 and 100.
- Job Match must be between 0 and 100.
- Missing keywords should come directly from the job description.
- Suggestions should be tailored to the target job.
- Return JSON only.
"""

    else:
        prompt += """

Analyze the resume only.

Return ONLY valid JSON in this exact format:

{
  "ats_score": 0,
  "resume_quality": 0,
  "job_match": null,
  "strengths": [],
  "weaknesses": [],
  "missing_skills": [],
  "missing_keywords": [],
  "suggestions": [],
  "interview_questions": []
}

Rules:

- ATS Score must be between 0 and 100.
- Resume Quality must be between 0 and 100.
- Analyze the resume only.
- Generate Missing Skills based on the resume only.
- Generate AI Suggestions based on the resume only.
- Generate Interview Questions based on the resume only.
- Do NOT calculate Job Match because no Job Description was provided.
- Set "job_match" to null.
- Set "missing_keywords" to an empty array [].
- Return JSON only.
"""

    try:
        response = client.models.generate_content(
            model="models/gemini-3.5-flash-lite",
            contents=prompt
        )

        text = response.text.strip()

        text = text.replace("```json", "")
        text = text.replace("```", "")
        text = text.strip()

        return json.loads(text)

    except Exception as e:
        print("Gemini Error:", e)
        raise