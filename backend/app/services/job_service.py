import os
import requests
import re
import html
from dotenv import load_dotenv

load_dotenv()

JOOBLE_API_KEY = os.getenv("JOOBLE_API_KEY")
SERPAPI_API_KEY = os.getenv("SERPAPI_API_KEY")
def clean_text(text: str):
    if not text:
        return ""

    text = html.unescape(text)
    text = re.sub(r"<[^>]*>", "", text)
    text = re.sub(r"\s+", " ", text)

    return text.strip()


def search_jooble_jobs(target_role: str, keywords: list[str]):

    if not JOOBLE_API_KEY:
        print("JOOBLE_API_KEY not found.")
        return []

    url = f"https://jooble.org/api/{JOOBLE_API_KEY}"

    query = target_role

    if keywords:
        query += " " + " ".join(keywords[:3])

    payload = {
        "keywords": query,
        "location": "India"
    }

    try:
        response = requests.post(url, json=payload)
        response.raise_for_status()

        data = response.json()

        jobs = []

        for job in data.get("jobs", []):

            jobs.append({
                "title": job.get("title", ""),
                "company": job.get("company", ""),
                "location": job.get("location", ""),
               "description": clean_text(job.get("snippet", "")),
                "apply_link": job.get("link", ""),
                "source": "Jooble"
            })

        return jobs

    except Exception as e:
        print("Jooble Error:", e)
        return []



#def search_serpapi_jobs(target_role: str, keywords: list[str]):

    if not SERPAPI_API_KEY:
        print("SERPAPI_API_KEY not found.")
        return []

    query = target_role

    if keywords:
        query += " " + " ".join(keywords[:3])

    params = {
        "engine": "google_jobs",
        "q": query,
        "location": "India",
        "api_key": SERPAPI_API_KEY,
    }

    try:
        response = requests.get(
            "https://serpapi.com/search.json",
            params=params,
            timeout=30,
        )

        response.raise_for_status()

        data = response.json()
      

        jobs = []

        for job in data.get("jobs_results", []):

            apply_link = ""

            if job.get("related_links"):
                apply_link = job["related_links"][0].get("link", "")

            jobs.append({
                "title": job.get("title", ""),
                "company": job.get("company_name", ""),
                "location": job.get("location", ""),
                "description": clean_text(job.get("description", "")),
                "apply_link": apply_link,
                "source": "Google Jobs",
            })

        return jobs

    except Exception as e:
        print("SerpAPI Error:", e)
        return []


def merge_jobs(*job_lists):
    jobs = []

    for job_list in job_lists:
        jobs.extend(job_list)

    return jobs


def remove_duplicates(jobs):
    unique = []
    seen = set()

    for job in jobs:
        key = (
            job.get("title", ""),
            job.get("company", "")
        )

        if key not in seen:
            seen.add(key)
            unique.append(job)

    return unique

def search_jobs(target_role: str, alternate_roles: list[str]):

    all_jobs = []

    roles = [target_role]

    if alternate_roles:
        roles.extend(alternate_roles)

    # Remove duplicates and empty roles
    roles = list(dict.fromkeys([role.strip() for role in roles if role.strip()]))

    for role in roles:

        print(f"Searching jobs for: {role}")

        jooble_jobs = search_jooble_jobs(role, [])

        all_jobs.extend(jooble_jobs)

    all_jobs = remove_duplicates(all_jobs)

    return all_jobs