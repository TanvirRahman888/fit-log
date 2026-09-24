"use client";
import { iWorkout } from "@/types/workoutType";
import { createContext, ReactNode, useEffect, useState } from "react";

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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("fitlog-workouts");

      if (storedData) {
        const parsedData = JSON.parse(storedData);
        setPlan(parsedData.plan || []);
        setSavePlan(parsedData.savePlan || []);
      }
    } catch (error) {
      console.error("Failed to load workouts:", error);
    }
    setIsLoaded(true);
  }, []);


  // Save data to localStorage
  useEffect(() => {
    if (!isLoaded) {
      return;
    }

    const data = {
      plan,
      savePlan,
    };

    localStorage.setItem("fitlog-workouts", JSON.stringify(data));
  }, [plan, savePlan, isLoaded]);

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
