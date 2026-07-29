type ScoreCardProps = {
  title: string;
  score: number;
  color: string;
};

function ScoreCard({ title, score, color }: ScoreCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 text-center border">
      <h2 className="text-lg font-semibold text-slate-600">
        {title}
      </h2>

      <div
        className={`text-6xl font-bold mt-4 ${color}`}
      >
        {score}
      </div>

      <p className="text-slate-500 mt-2">
        /100
      </p>
    </div>
  );
}

export default ScoreCard;