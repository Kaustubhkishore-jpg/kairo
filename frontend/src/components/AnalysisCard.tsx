import { CheckCircle2, CircleAlert } from "lucide-react";

type AnalysisCardProps = {
  title: string;
  items: string[];
  type: "strength" | "weakness";
};

function AnalysisCard({
  title,
  items,
  type,
}: AnalysisCardProps) {
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
      <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-5 md:mb-6">
        {title}
      </h2>

      <div className="space-y-3 md:space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              flex
              items-start
              gap-3
              md:gap-4
              rounded-2xl
              bg-slate-50
              p-3
              md:p-4
            "
          >
            {type === "strength" ? (
              <CheckCircle2
                className="w-5 h-5 md:w-6 md:h-6 text-green-600 mt-0.5 flex-shrink-0"
              />
            ) : (
              <CircleAlert
                className="w-5 h-5 md:w-6 md:h-6 text-amber-600 mt-0.5 flex-shrink-0"
              />
            )}

            <p className="text-sm md:text-base leading-6 md:leading-7 text-slate-700 break-words">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnalysisCard;