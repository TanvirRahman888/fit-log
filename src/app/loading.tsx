const Loading = () => {
  return (
    <main className="container mx-auto px-4">
      {/* Hero Skeleton */}
      <section className="my-12 rounded-xl bg-slate-900 p-8">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row-reverse">
          {/* Hero Image */}
          <div className="w-full max-w-sm animate-pulse rounded-xl bg-slate-800" />

          {/* Hero Content */}
          <div className="w-full lg:w-1/2">
            <div className="h-8 w-4/5 animate-pulse rounded-md bg-slate-800" />

            <div className="mt-3 h-8 w-2/3 animate-pulse rounded-md bg-slate-800" />

            <div className="mt-6 space-y-2">
              <div className="h-3 w-full animate-pulse rounded bg-slate-800" />
              <div className="h-3 w-5/6 animate-pulse rounded bg-slate-800" />
            </div>

            <div className="mt-6 h-10 w-36 animate-pulse rounded-md bg-[#9AE600]/30" />
          </div>
        </div>
      </section>

      {/* Library Skeleton */}
      <section className="my-16">
        {/* Heading */}
        <div className="h-9 w-52 animate-pulse rounded-md bg-slate-800" />

        <div className="mt-3 h-4 w-72 animate-pulse rounded bg-slate-800" />

        {/* Workout Cards */}
        <div className="my-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#15171c]"
            >
              {/* Image */}
              <div className="h-55 w-full animate-pulse bg-slate-800" />

              {/* Content */}
              <div className="p-5">
                {/* Muscle Tags */}
                <div className="flex gap-2">
                  <div className="h-5 w-14 animate-pulse rounded-full bg-slate-700" />
                  <div className="h-5 w-14 animate-pulse rounded-full bg-slate-700" />
                </div>

                {/* Workout Name */}
                <div className="mt-4 h-5 w-3/4 animate-pulse rounded bg-slate-700" />

                {/* Equipment */}
                <div className="mt-2 h-3 w-1/3 animate-pulse rounded bg-slate-800" />

                {/* Divider */}
                <div className="my-4 h-px bg-white/10" />

                {/* Stats */}
                <div className="flex gap-5">
                  <div className="h-3 w-14 animate-pulse rounded bg-slate-800" />
                  <div className="h-3 w-16 animate-pulse rounded bg-slate-800" />
                  <div className="h-3 w-10 animate-pulse rounded bg-slate-800" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Loading;