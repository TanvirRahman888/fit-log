"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext, useState } from "react";

import PlanSummary from "./PlanSummary";
import PlanTabs from "./PlanTabs";
import SortWorkouts from "./SortWorkouts";
import EmptyPlan from "./EmptyPlan";
import MyPlanCard from "./MyPlanCard";
import SearchWorkouts from "./SearchWorkouts";
import toast from "react-hot-toast";

type PlanTab = "plan" | "saved";

type SortType = "duration" | "calories" | "rating";

const MyPlanClient = () => {
  const context = useContext(WorkoutContext);

  const [activeTab, setActiveTab] = useState<PlanTab>("plan");

  const [sortBy, setSortBy] = useState<SortType>("duration");

  const [search, setSearch] = useState({
    plan: "",
    saved: "",
  });

  if (!context) {
    return null;
  }

  const { plan, setPlan, savePlan, setSavePlan } = context;
  const currentWorkouts = activeTab === "plan" ? plan : savePlan;
  const currentSearch = search[activeTab];

  const filteredWorkouts =
    currentSearch.trim() === ""
      ? currentWorkouts
      : currentWorkouts.filter((workout) => {
          const searchValue = currentSearch.trim().toLowerCase();

          return (
            workout.name.toLowerCase().includes(searchValue) ||
            workout.equipment.toLowerCase().includes(searchValue) ||
            workout.difficulty.toLowerCase().includes(searchValue) ||
            workout.muscleGroups.some((muscle) =>
              muscle.toLowerCase().includes(searchValue),
            )
          );
        });

  const handleSearch = (value: string) => {
    setSearch((previousSearch) => ({
      ...previousSearch,
      [activeTab]: value,
    }));
  };

  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0,
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0,
  );

  // Sort filtered workouts
  const sortedWorkouts = [...filteredWorkouts].sort((a, b) => {
    if (sortBy === "duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  // Remove from Today's Plan
  const handleRemovePlan = (id: number) => {
    const updatedPlan = plan.filter((workout) => workout.id !== id);

    setPlan(updatedPlan);
    toast.success("Workout removed");
  };

  // Mark as Done
  const handleMarkDone = (id: number) => {
    const updatedPlan = plan.filter((workout) => workout.id !== id);

    setPlan(updatedPlan);

    toast("Good Job!", {
      icon: "👏",
    });
  };

  // Remove Saved
  const handleRemoveSaved = (id: number) => {
    const updatedSaved = savePlan.filter((workout) => workout.id !== id);

    setSavePlan(updatedSaved);
    toast.success("Saved workout removed");
  };

  return (
    <>
      {/* Summary */}
      <PlanSummary
        exercises={totalExercises}
        minutes={totalMinutes}
        calories={totalCalories}
      />

      {/* Tabs + Search + Sort */}
      <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
        {/* Tabs */}
        <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Search */}
        <div className="flex-1 lg:px-8">
          <SearchWorkouts value={currentSearch} onChange={handleSearch} />
        </div>

        {/* Sort */}
        <SortWorkouts sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {/* Workout List */}
      <div className="mt-5">
        {currentWorkouts.length === 0 ? (
          <EmptyPlan activeTab={activeTab} />
        ) : sortedWorkouts.length === 0 ? (
          // Search has no result
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 px-5 text-center">
            <h2 className="text-lg font-bold uppercase text-white">
              No workouts found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              No workout matches &quot;
              {currentSearch}&quot;.
            </p>

            <button
              onClick={() => handleSearch("")}
              className="mt-5 cursor-pointer rounded-xl border border-white/10 px-5 py-2 text-sm text-gray-300 transition hover:border-[#b7ff00]/40 hover:text-[#b7ff00]"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedWorkouts.map((workout) => (
              <MyPlanCard
                key={workout.id}
                workout={workout}
                showDoneButton={activeTab === "plan"}
                onDone={handleMarkDone}
                onRemove={
                  activeTab === "plan" ? handleRemovePlan : handleRemoveSaved
                }
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MyPlanClient;
