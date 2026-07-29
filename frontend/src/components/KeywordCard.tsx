import { Search } from "lucide-react";

type KeywordCardProps = {
  keywords: string[];
};

function KeywordCard({ keywords }: KeywordCardProps) {
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
          <Search className="w-5 h-5 md:w-6 md:h-6 text-amber-600" />
        </div>

        <h2 className="text-lg md:text-xl font-bold text-slate-900">
          Missing Keywords
        </h2>
      </div>

      {keywords.length === 0 ? (
        <div className="rounded-2xl bg-green-50 border border-green-200 p-4">
          <p className="text-sm md:text-base text-green-700 font-medium">
            No important keywords are missing.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2 md:gap-3">
          {keywords.map((keyword, index) => (
            <span
              key={index}
              className="
                px-3
                md:px-4
                py-2
                rounded-xl
                bg-amber-50
                border
                border-amber-200
                text-amber-700
                text-sm
                md:text-base
                font-medium
                hover:bg-amber-100
                hover:border-amber-300
                transition-all
                duration-200
                break-all
              "
            >
              {keyword}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default KeywordCard;