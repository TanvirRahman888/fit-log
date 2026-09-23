"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WorkoutMenu() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-2">
      <li>
        <Link
          href="/workouts"
          className={`block rounded-full px-5 py-2 text-sm font-semibold transition-all ${
            pathname === "/workouts"
              ? "bg-lime-500/15 text-lime-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/myplan"
          className={`block rounded-full px-5 py-2 text-sm font-semibold transition-all ${
            pathname === "/myplan"
              ? "bg-lime-500/15 text-lime-400"
              : "text-gray-400 hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </li>
    </ul>
  );
}