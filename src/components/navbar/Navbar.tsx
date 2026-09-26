import Image from "next/image";
import Link from "next/link";
import WorkoutMenu from "./WorkoutMenu";
import NavEndButtons from "./NavEndButtons";

const Navbar = () => {
  return (
    <div className="fixed left-0 top-0 z-50 w-full bg-black shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="mr-5 text-[#9AE600] lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <WorkoutMenu />
            </ul>
          </div>

          <Link href="/" className="flex gap-2 text-xl font-bold">
            <Image
              src="/logo.png"
              width={25}
              height={25}
              alt="FitLog logo"
            />
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
            <NavEndButtons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;