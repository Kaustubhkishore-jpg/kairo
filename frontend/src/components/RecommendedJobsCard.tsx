type Job = {
  title: string;
  company: string;
  location: string;
  description: string;
  apply_link: string;
  source: string;

  match_score: number;

  strengths?: string[];
  gaps?: string[];
};

type Props = {
  jobs: Job[];
};

function RecommendedJobsCard({ jobs }: Props) {
  if (!jobs || jobs.length === 0) return null;

  const getScoreColor = (score: number) => {
    if (score >= 90) {
      return "bg-green-100 text-green-700";
    }

    if (score >= 75) {
      return "bg-blue-100 text-blue-700";
    }

    if (score >= 60) {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-red-100 text-red-700";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Excellent Match";
    if (score >= 75) return "Strong Match";
    if (score >= 60) return "Good Match";

    return "Low Match";
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Top 10 AI Job Matches
      </h2>

      <p className="text-slate-500 mb-6">
        Ranked by AI based on your resume.
      </p>

      <div className="space-y-6">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-bold text-slate-900">
                    {job.title}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${getScoreColor(
                      job.match_score
                    )}`}
                  >
                    {job.match_score}% • {getScoreLabel(job.match_score)}
                  </span>
                </div>

                <p className="mt-2 text-slate-700 font-medium">
                  {job.company}
                </p>

                <p className="text-sm text-slate-500">
                  {job.location}
                </p>

                <span className="inline-block mt-3 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                  {job.source}
                </span>
              </div>

              <a
                href={job.apply_link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700 transition"
              >
                Apply Now
              </a>
            </div>

            {job.description && (
              <p className="mt-5 text-sm text-slate-600 line-clamp-3">
                {job.description}
              </p>
            )}

            {job.strengths && job.strengths.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-green-700 mb-2">
                  Why this job matches you
                </h4>

                <ul className="space-y-2">
                  {job.strengths.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-slate-700"
                    >
                      ✅ {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.gaps && job.gaps.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-red-700 mb-2">
                  Key Skill Gaps
                </h4>

                <div className="flex flex-wrap gap-2">
                  {job.gaps.map((gap, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700"
                    >
                      {gap}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecommendedJobsCard;