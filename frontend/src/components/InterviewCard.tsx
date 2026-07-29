type InterviewCardProps = {
  questions: string[];
};

function InterviewCard({ questions }: InterviewCardProps) {
  return (
    <div
      className="
        bg-white/80
        backdrop-blur-xl
        border
        border-white/40
        rounded-3xl
        shadow-lg
        hover:shadow-2xl
        transition-all
        duration-300
        p-5
        md:p-6
        mt-6
        md:mt-8
      "
    >
      <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-5 md:mb-6">
        Interview Questions
      </h2>

      {questions.length === 0 ? (
        <p className="text-sm md:text-base text-slate-500">
          No interview questions generated.
        </p>
      ) : (
        <div className="space-y-3 md:space-y-4">
          {questions.map((question, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border
                border-slate-200
                p-4
                hover:bg-slate-50
                transition-all
                duration-200
              "
            >
              <div className="text-sm md:text-base font-semibold text-indigo-600 mb-2">
                Question {index + 1}
              </div>

              <p className="text-sm md:text-base leading-6 md:leading-7 text-slate-700 break-words">
                {question}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InterviewCard;