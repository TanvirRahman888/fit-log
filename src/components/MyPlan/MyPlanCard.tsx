"use client";

import { iWorkout } from "@/types/workoutType";
import Image from "next/image";
import Link from "next/link";

interface MyPlanCardProps {
  workout: iWorkout;
  showDoneButton: boolean;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
}

const MyPlanCard = ({
  workout,
  showDoneButton,
  onDone,
  onRemove,
}: MyPlanCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#12151b] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>

        <div>
          <h3 className="font-bold uppercase">{workout.name}</h3>

          <p className="mt-1 text-xs text-gray-500">{workout.equipment}</p>

          <div className="mt-2 flex gap-4 text-xs text-gray-300">
            <span>⏱ {workout.duration} min</span>

            <span>🔥 {workout.caloriesBurned} kcal</span>

            <span>☆ {workout.rating}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-gray-700 px-5 py-2 text-xs"
        >
          View Details
        </Link>

        {showDoneButton && (
          <button
            onClick={() => onDone(workout.id)}
            className="rounded-full bg-[#b7ff00] px-5 py-2 text-xs font-semibold text-black"
          >
            ✓ Mark as Done
          </button>
        )}

        <button
          onClick={() => onRemove(workout.id)}
          className="h-9 w-9 rounded-full text-gray-500 hover:text-white"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default MyPlanCard;
