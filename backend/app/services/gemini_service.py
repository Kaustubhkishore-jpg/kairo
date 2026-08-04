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
  "target_role": "",
   "job_keywords": [],
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
- "target_role" should contain the single most suitable job title for this candidate based on the resume and the target job description.
- "job_keywords" should contain 5 to 10 important keywords or technologies that best describe the candidate's profile and are useful for finding relevant jobs.
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
  "target_role": "",
   "job_keywords": [],
   "alternate_roles": [],
  "strengths": [],
  "weaknesses": [],
  "missing_skills": [],
  "missing_keywords": [],
  "suggestions": [],
  "interview_questions": []
}

Rules:

Rules:

- ATS Score must be between 0 and 100.
- Resume Quality must be between 0 and 100.
- Analyze the resume only.
- Determine the single best target job role from the resume.
- Return it as "target_role".
- Generate 3 to 5 realistic alternate job roles.
- Return them as "alternate_roles".
- Alternate roles should be closely related to the candidate's experience and skills.
- Generate Missing Skills based on the resume only.
- Generate AI Suggestions based on the resume only.
- Generate Interview Questions based on the resume only.
- Do NOT calculate Job Match because no Job Description was provided.
- Set "job_match" to null.
- Set "missing_keywords" to an empty array [].
- Return ONLY valid JSON.
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

    
def rank_jobs_with_ai(
        resume_text: str,
        jobs: list
):
    if not jobs:
           return []

    jobs_text = ""

    for i, job in enumerate(jobs):

        jobs_text += f"""
Job {i}

Title:
{job.get("title", "")}

Company:
{job.get("company", "")}

Location:
{job.get("location", "")}

Description:
{job.get("description", "")}

---------------------------------------
"""

    prompt = f"""
You are an experienced ATS recruiter.

Candidate Resume:

{resume_text}

Below are job opportunities.

Evaluate each job independently against the candidate's resume.

Do NOT compare jobs with each other.

Score each job only on how well the candidate fits that specific role.

Use this scoring system:

Skills Match ............40
Experience Match........20
Education Match.........10
Domain Match............20
Location Match..........10

Return ONLY valid JSON.

[
  {{
    "job_index": 0,
    "match_score": 0,
    "skills_score": 0,
    "experience_score": 0,
    "education_score": 0,
    "domain_score": 0,
    "location_score": 0,
    "strengths": [],
    "gaps": []
  }}
]

Jobs:

{jobs_text}

Rules:

- Return ONE object for EVERY job.
- job_index MUST match the Job number.
- match_score MUST equal the sum of all scores.
- strengths should contain 2-3 short points.
- gaps should contain only important missing skills.
- Return ONLY valid JSON.
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

        print("Batch Ranking Error:", e)

        return []
    
    