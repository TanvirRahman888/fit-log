import { iWorkout } from "@/types/workoutType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkoutsCard = ({ workout }: { workout: iWorkout }) => {
  return (
    <Link href={`/workouts/${workout.id}`}>
      <div className="w-full overflow-hidden rounded-2xl border border-gray-800 bg-[#15171c] transition duration-300 hover:-translate-y-1 hover:border-gray-700">
        {/* Image */}
        <div className="h-50 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            width={300}
            height={200}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">
          {/* Muscle Groups */}
          <div className="mb-4 flex gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#b7ff00] px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Workout Name */}
          <h2 className="text-xl font-extrabold uppercase tracking-wide text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-400">{workout.equipment}</p>

          {/* Divider */}
          <div className="my-4 h-px bg-gray-800" />

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            {/* Duration */}
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>

              <span>{workout.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.5 2s1 3-1 5c-1.7 1.7-3 3.4-3 5.5 0 1.5.7 2.6 1.6 3.4-.1-.4-.1-.8-.1-1.2 0-1.6 1-3 2.5-4.2 0 2 1 3 2 4 1 1 1.5 2.1 1.5 3.2 0 .4-.1.8-.2 1.2C18.3 17.6 20 15 20 12c0-4.8-3.7-8-7.5-10z" />
              </svg>

              <span>{workout.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3z" />
              </svg>

              <span>{workout.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutsCard;
