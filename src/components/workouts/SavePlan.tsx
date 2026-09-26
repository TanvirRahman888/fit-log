'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import { iWorkout } from '@/types/workoutType';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

const SavePlan = ({ workout }: { workout: iWorkout }) => {
  const context = useContext(WorkoutContext);

  if (!context) {
    return null;
  }

  const { savePlan, setSavePlan } = context;

  const handleSaveForLater = () => {
    const isAlreadyAdded = savePlan.some((item) => item.id === workout.id);

    if (isAlreadyAdded) {
      toast.error('Already Added');
      return;
    }

    setSavePlan([...savePlan, workout]);
    toast.success(`Added for Later : ${workout.name}`);
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