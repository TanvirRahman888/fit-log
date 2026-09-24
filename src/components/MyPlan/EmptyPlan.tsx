type PlanTab = "plan" | "saved";
import Link from "next/link";

const EmptyPlan = ({
  activeTab,
}: {
  activeTab: PlanTab;
}) => {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 px-5 text-center">
      <h2 className="text-lg font-black uppercase">
        Nothing here yet
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        {activeTab === "plan"
          ? "Browse the library and add a lift to get today moving."
          : "Save workouts from the library to view them here."}
      </p>

      <Link
        href="/workouts"
        className="mt-6 rounded-full bg-[#b7ff00] px-6 py-3 text-sm font-semibold text-black"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default EmptyPlan;