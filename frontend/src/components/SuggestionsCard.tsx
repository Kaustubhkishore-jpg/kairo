import { Lightbulb } from "lucide-react";

type SuggestionsCardProps = {
  suggestions: string[];
};

function SuggestionsCard({ suggestions }: SuggestionsCardProps) {
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
      "
    >
      <div className="flex items-center gap-3 mb-5 md:mb-6">
        <div className="bg-amber-100 p-2 md:p-3 rounded-xl">
          <Lightbulb className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
        </div>

        <h2 className="text-lg md:text-xl font-bold text-slate-900">
          AI Suggestions
        </h2>
      </div>

      {suggestions.length === 0 ? (
        <p className="text-sm md:text-base text-slate-500">
          No suggestions available.
        </p>
      ) : (
        <div className="space-y-3 md:space-y-4">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="
                flex
                items-start
                gap-3
                md:gap-4
                rounded-2xl
                bg-indigo-50
                p-3
                md:p-4
              "
            >
              <div className="bg-amber-100 p-2 rounded-lg flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-amber-600" />
              </div>

              <p className="text-sm md:text-base leading-6 md:leading-7 text-slate-700 break-words">
                {suggestion}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SuggestionsCard;