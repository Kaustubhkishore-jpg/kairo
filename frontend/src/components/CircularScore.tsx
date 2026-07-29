import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

type Props = {
  title: string;
  score: number;
};

function CircularScore({ title, score }: Props) {
  let color = "#ef4444";
  let label = "Needs Improvement";

  if (score >= 90) {
    color = "#16a34a";
    label = "Excellent";
  } else if (score >= 80) {
    color = "#22c55e";
    label = "Very Good";
  } else if (score >= 70) {
    color = "#3b82f6";
    label = "Good";
  } else if (score >= 60) {
    color = "#f59e0b";
    label = "Fair";
  }

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
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto">
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            pathColor: color,
            textColor: color,
            trailColor: "#e5e7eb",
            strokeLinecap: "round",
            textSize: "18px",
          })}
        />
      </div>

      <div className="text-center mt-4 md:mt-6">
        <p
          className="font-semibold text-sm md:text-base"
          style={{ color }}
        >
          {label}
        </p>

        <h3 className="mt-2 text-base md:text-lg font-bold text-slate-900">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default CircularScore;