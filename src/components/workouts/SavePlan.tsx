'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { iWorkout } from '@/types/workoutType';
import React, { useContext } from 'react';

const SavePlan = ({ workout }: { workout: iWorkout }) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    return null;
  }

  const { savePlan, setSavePlan } = context;

  const handleSaveForLater = () => {
    alert("Clicked");
    const isAlreadyAdded = savePlan.some((item) => item.id === workout.id);

    if (isAlreadyAdded) {
      alert("Already Added");
      return;
    }

    setSavePlan([...savePlan, workout]);
    alert(`Added : ${workout.name}`);
    console.log(savePlan);
  };

  return (
    <button
      className="rounded-xl border px-6 py-3 text-sm font-semibold  transition hover:bg-slate-800"
      onClick={handleSaveForLater}
    >
      Save for later
    </button>
  );
};

export default SavePlan;