"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import React, { useContext } from "react";

const NavEndButtons = () => {
  const context = useContext(WorkoutContext);
  if (!context) {
    return null;
  }

  const { plan, savePlan } = context;

  return (
    <ul className="flex items-center gap-8">
      <Link href={"/myplan"} >
        <li className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white hover:font-bold">
          Plan
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#b7ff00] px-1.5 text-xs font-bold text-black">
            {plan.length}
          </span>
        </li>
      </Link>

      <Link href={"/myplan"}>
        <li className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white hover:font-bold">
          Saved
          <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-600 px-1.5 text-xs text-gray-300">
            {savePlan.length}
          </span>
        </li>
      </Link>
    </ul>
  );
};

export default NavEndButtons;
