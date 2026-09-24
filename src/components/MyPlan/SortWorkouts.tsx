"use client";

type SortType = "duration" | "calories" | "rating";

import { Dispatch, SetStateAction } from "react";

interface SortWorkoutsProps {
  sortBy: SortType;
  setSortBy: Dispatch<SetStateAction<SortType>>;
}

const SortWorkouts = ({
  sortBy,
  setSortBy,
}: SortWorkoutsProps) => {
  return (
    <div className="flex items-center gap-3">
      <span className="font-bold text-sm text-white text-nowrap ">
        Sort By
      </span>

      <select
        value={sortBy}
        onChange={(event) =>
          setSortBy(event.target.value as SortType)
        }
        className="select select-sm border border-white/10 bg-[#12151b] text-gray-200"
      >
        <option value="duration">
          Duration
        </option>

        <option value="calories">
          Calories
        </option>

        <option value="rating">
          Rating
        </option>
      </select>
    </div>
  );
};

export default SortWorkouts;