interface SearchWorkoutsProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchWorkouts = ({
  value,
  onChange,
}: SearchWorkoutsProps) => {
  return (
    <div className="relative w-full max-w-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search workouts..."
        className="w-full rounded-xl border border-white/10 bg-[#12151b] py-2.5 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#b7ff00]/40"
      />
    </div>
  );
};

export default SearchWorkouts;