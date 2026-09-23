import { iWorkout } from "@/types/workoutType";
import Image from "next/image";
import React from "react";

const WorkoutsDetailsPage = async ({
  params,
}: {
  params: Promise<{ params: string }>;
}) => {
  const { id } = await params;

  const getData = async (): Promise<iWorkout> => {
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    const data = await res.json();
    console.log(data);
    return data;
  };

  const workout = await getData();
  console.log("WorkoutsDetailsPage : ",workout);

  return (
    <main className="min-h-screen bg-[#0b0d10] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        {/* Left Image */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-800 ">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Side */}
        <div>
          <h1 className="text-3xl font-black uppercase sm:text-4xl">
            {workout.name}
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            {workout.description}
          </p>

          {/* Muscle Groups */}
          <div className="mt-5 flex gap-2">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#b7ff00] px-4 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Details */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-800 bg-[#12151b]">
            <div className="flex justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase text-gray-500">
                Equipment
              </span>
              <span className="text-sm text-gray-200">{workout.equipment}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase text-gray-500">
                Difficulty
              </span>
              <span className="text-sm text-gray-200">
                {workout.difficulty}
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase text-gray-500">
                Sets
              </span>
              <span className="text-sm text-gray-200">{workout.sets}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase text-gray-500">
                Reps
              </span>
              <span className="text-sm text-gray-200">{workout.reps}</span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase text-gray-500">
                Duration
              </span>
              <span className="text-sm text-gray-200">
                {workout.duration} min
              </span>
            </div>

            <div className="flex justify-between border-b border-gray-800 px-5 py-4">
              <span className="text-xs font-semibold uppercase text-gray-500">
                Calories
              </span>
              <span className="text-sm text-gray-200">
                {workout.caloriesBurned} kcal
              </span>
            </div>

            <div className="flex justify-between px-5 py-4">
              <span className="text-xs font-semibold uppercase text-gray-500">
                Rating
              </span>
              <span className="text-sm text-gray-200">{workout.rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="mb-5 text-lg font-bold uppercase">Instructions</h2>

            <ol className="space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-gray-400"
                >
                  <span>{index + 1}.</span>
                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-xl bg-[#b7ff00] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#a6e900]">
              Add to today&apos;s plan
            </button>

            <button className="rounded-xl border border-gray-700 px-6 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-white">
              Save for later
            </button>
          </div>
        </div>
      </div>
    </main>
    
  );
};

export default WorkoutsDetailsPage;
