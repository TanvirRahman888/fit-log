"use client";
import { iWorkout } from "@/types/workoutType";
import { createContext, ReactNode, useState } from "react";

interface WorkoutContextType {
  plan: iWorkout[];
  setPlan: React.Dispatch<React.SetStateAction<iWorkout[]>>;
  savePlan: iWorkout[];
  setSavePlan: React.Dispatch<React.SetStateAction<iWorkout[]>>;
}

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<iWorkout[]>([]);
  const [savePlan, setSavePlan] = useState<iWorkout[]>([]);

  const values = {
    plan,
    setPlan,
    savePlan,
    setSavePlan,
  };
  return (
    <WorkoutContext.Provider value={values}>{children}</WorkoutContext.Provider>
  );
};
