"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { iWorkout } from "@/types/workoutType";
import React, { useContext } from "react";

const AddToPlan = ({ workout }: { workout: iWorkout }) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    return null;
  }

  const { plan, setPlan } = context;

  const handleAddToPlan = () => {
    alert("Clicked");
    const isAlreadyAdded = plan.some((item) => item.id === workout.id);

    if (isAlreadyAdded) {
      alert("Already Added");
      return;
    }

    setPlan([...plan, workout]);
    alert(`Added : ${workout.name}`);
    console.log(plan);
  };

  return (
    <button
      className="rounded-xl bg-[#b7ff00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#a7e900c6]"
      onClick={handleAddToPlan}
    >
      Add to today&apos;s plan
    </button>
  );
};

export default AddToPlan;
