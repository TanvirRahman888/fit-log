import Image from "next/image";
import Link from "next/link";
import React from "react";
import WorkoutMenu from "./WorkoutMenu";

const Navbar = () => {

  return (
    <div className="shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="text-[#9AE600] mr-5 lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <WorkoutMenu />
            </ul>
          </div>
          <Link href={"/"} className="text-xl font-bold flex gap-2">
            <Image src="/logo.png" width={25} height={25} alt="" />
            FITLOG
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <WorkoutMenu />
          </ul>
        </div>
        <div className="navbar-end">
          <div className="px-6 py-5">
            <div className="flex items-center gap-8">
              <button className="flex items-center gap-2 text-sm font-medium text-gray-300">
                Plan
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#b7ff00] px-1.5 text-xs font-bold text-black">
                  0
                </span>
              </button>

              <button className="flex items-center gap-2 text-sm font-medium text-gray-400">
                Saved
                <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-600 px-1.5 text-xs text-gray-300">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
