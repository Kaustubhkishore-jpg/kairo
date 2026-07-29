import { Code2 } from "lucide-react";

type SkillsCardProps = {
  skills: string[];
};

function SkillsCard({ skills }: SkillsCardProps) {
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
        <div className="bg-indigo-100 p-2 md:p-3 rounded-xl">
          <Code2 className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
        </div>

        <h2 className="text-lg md:text-xl font-bold text-slate-900">
          Missing Skills
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 md:gap-3">
        {skills.length > 0 ? (
          skills.map((skill, index) => (
            <span
              key={index}
              className="
                px-3
                md:px-4
                py-2
                rounded-xl
                bg-slate-100
                text-slate-700
                text-sm
                md:text-base
                font-medium
                border
                border-slate-200
                hover:bg-indigo-50
                hover:border-indigo-300
                hover:text-indigo-700
                transition-all
                duration-200
                break-all
              "
            >
              {skill}
            </span>
          ))
        ) : (
          <p className="text-sm md:text-base text-slate-500">
            🎉 Great! No missing skills detected.
          </p>
        )}
      </div>
    </div>
  );
}

export default SkillsCard;