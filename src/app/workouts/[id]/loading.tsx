const Loading = () => {
  return (
    <main className="min-h-screen bg-[#0b0d10] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
        {/* Image Skeleton */}
        <div className=" animate-pulse rounded-2xl border border-gray-800 bg-[#15181e]" />

        {/* Right Side Skeleton */}
        <div className="animate-pulse">
          {/* Title */}
          <div className="h-10 w-3/4 rounded-md bg-gray-800" />

          {/* Description */}
          <div className="mt-4 space-y-2">
            <div className="h-4 w-full rounded bg-gray-800" />
            <div className="h-4 w-4/5 rounded bg-gray-800" />
          </div>

          {/* Muscle Groups */}
          <div className="mt-5 flex gap-2">
            <div className="h-7 w-16 rounded-full bg-gray-800" />
            <div className="h-7 w-16 rounded-full bg-gray-800" />
          </div>

          {/* Details Box */}
          <div className="mt-7 overflow-hidden rounded-2xl border border-gray-800 bg-[#12151b]">
            {Array.from({ length: 7 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between border-b border-gray-800 px-5 py-4 last:border-b-0"
              >
                <div className="h-3 w-20 rounded bg-gray-800" />
                <div className="h-3 w-24 rounded bg-gray-800" />
              </div>
            ))}
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <div className="h-5 w-32 rounded bg-gray-800" />

            <div className="mt-5 space-y-4">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="flex gap-3">
                  <div className="h-4 w-4 rounded bg-gray-800" />
                  <div className="h-4 flex-1 rounded bg-gray-800" />
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-3">
            <div className="h-11 w-40 rounded-xl bg-gray-800" />
            <div className="h-11 w-32 rounded-xl bg-gray-800" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Loading;