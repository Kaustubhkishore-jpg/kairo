type Props = {
  targetRole?: string;
  alternateRoles?: string[];
};

function CareerRecommendationCard({
  targetRole,
  alternateRoles = [],
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md border p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        🎯 AI Career Recommendation
      </h2>

      <p className="text-sm text-slate-500 mb-6">
        Based on your resume, these are the roles that best match your profile.
      </p>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Best Career Match
        </h3>

        <p className="mt-2 text-2xl font-bold text-indigo-600">
          {targetRole || "Not Available"}
        </p>
      </div>

      {alternateRoles.length > 0 && (
        <div className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Alternative Career Paths
          </h3>

          <div className="mt-4 flex flex-wrap gap-3">
            {alternateRoles.map((role, index) => (
              <span
                key={index}
                className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CareerRecommendationCard;