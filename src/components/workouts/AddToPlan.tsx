"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { iWorkout } from "@/types/workoutType";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const AddToPlan = ({ workout }: { workout: iWorkout }) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    return null;
  }

  const { plan, setPlan } = context;

  const handleAddToPlan = () => {
    
    const isAlreadyAdded = plan.some((item) => item.id === workout.id);

    if (isAlreadyAdded) {
      toast.error('Already Added');
      return;
    }

    setPlan([...plan, workout]);
    toast.success(`Added : ${workout.name}`);
    console.log(plan);
  };

  return (
    <button
  disabled={plan.length >= 5}
  onClick={handleAddToPlan}
  className={`rounded-xl px-6 py-3 text-sm font-semibold transition
    ${
      plan.length >= 5
        ? "cursor-not-allowed bg-red-500"
        : "bg-[#b7ff00] text-black hover:bg-[#a7e900c6]"
    }
  `}
>
  {plan.length >= 5
    ? "Plan is full"
    : "Add to today's plan"}
</button>
  );
};

export default AddToPlan;
