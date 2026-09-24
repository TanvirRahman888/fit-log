interface PlanSummaryProps {
  exercises: number;
  minutes: number;
  calories: number;
}

const PlanSummary = ({ exercises, minutes, calories }: PlanSummaryProps) => {
  return (
    <div className="mt-8 grid overflow-hidden rounded-2xl border border-white/10 bg-[#12151b] sm:grid-cols-3">
      <div className="px-6 py-6">
        <p className="text-xs text-gray-500">Exercises</p>

        <h2 className="mt-2 text-4xl font-black text-[#b7ff00]">{exercises}</h2>
      </div>

      <div className="border-t border-white/5 px-6 py-6 sm:border-l sm:border-t-0">
        <p className="text-xs text-gray-500">Minutes</p>

        <h2 className="mt-2 text-4xl font-black">{minutes}</h2>
      </div>

      <div className="border-t border-white/5 px-6 py-6 sm:border-l sm:border-t-0">
        <p className="text-xs text-gray-500">Calories</p>

        <h2 className="mt-2 text-4xl font-black">{calories}</h2>
      </div>
    </div>
  );
};

export default PlanSummary;
