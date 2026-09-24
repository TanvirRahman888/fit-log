"use client";

import { WorkoutContext } from "@/context/WorkoutContext";
import { useContext, useState } from "react";
import PlanSummary from "./PlanSummary";
import PlanTabs from "./PlanTabs";
import SortWorkouts from "./SortWorkouts";
import EmptyPlan from "./EmptyPlan";
import MyPlanCard from "./MyPlanCard";




type PlanTab = "plan" | "saved";
type SortType = "duration" | "calories" | "rating";

const MyPlanClient = () => {
  const context = useContext(WorkoutContext);

  const [activeTab, setActiveTab] =
    useState<PlanTab>("plan");

  const [sortBy, setSortBy] =
    useState<SortType>("duration");

  if (!context) {
    return null;
  }

  const {
    plan,
    setPlan,
    savePlan,
    setSavePlan,
  } = context;

  // Current tab's workouts
  const currentWorkouts =
    activeTab === "plan" ? plan : savePlan;

  // Summary
  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  // Sorting
  const sortedWorkouts = [...currentWorkouts].sort(
    (a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      return b.rating - a.rating;
    }
  );

  // Remove Today's Plan
  const handleRemovePlan = (id: number) => {
    setPlan(
      plan.filter((workout) => workout.id !== id)
    );

    alert("Workout removed");
  };

  // Mark as Done
  const handleMarkDone = (id: number) => {
    setPlan(
      plan.filter((workout) => workout.id !== id)
    );

    alert("Workout marked as done");
  };

  // Remove Saved
  const handleRemoveSaved = (id: number) => {
    setSavePlan(
      savePlan.filter((workout) => workout.id !== id)
    );

    alert("Saved workout removed");
  };

  return (
    <>
      <PlanSummary
        exercises={totalExercises}
        minutes={totalMinutes}
        calories={totalCalories}
      />

      <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <PlanTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <SortWorkouts
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="mt-5">
        {sortedWorkouts.length === 0 ? (
          <EmptyPlan activeTab={activeTab} />
        ) : (
          <div className="space-y-4">
            {sortedWorkouts.map((workout) => (
              <MyPlanCard
                key={workout.id}
                workout={workout}
                showDoneButton={activeTab === "plan"}
                onDone={handleMarkDone}
                onRemove={
                  activeTab === "plan"
                    ? handleRemovePlan
                    : handleRemoveSaved
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