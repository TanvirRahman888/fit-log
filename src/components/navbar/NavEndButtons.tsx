"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import React, { useContext } from "react";

const NavEndButtons = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    return null;
  }

  const { plan, savePlan } = context;

  return (
    <div className="flex items-center gap-8">
      <button className="flex items-center gap-2 text-sm font-medium text-gray-300">
        Plan
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#b7ff00] px-1.5 text-xs font-bold text-black">
          {plan.length}
        </span>
      </button>

      <button className="flex items-center gap-2 text-sm font-medium text-gray-400">
        Saved
        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-600 px-1.5 text-xs text-gray-300">
          {savePlan.length}
        </span>
      </button>
    </div>
  );
};

export default NavEndButtons;
