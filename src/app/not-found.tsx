import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex flex-1 min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-black px-6">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-2xl text-center">
        
        {/* 404 */}
        <div className="relative">
          <h1 className="select-none text-[120px] font-black leading-none tracking-tighter text-white/5 sm:text-[170px] md:text-[220px]">
            404
          </h1>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 shadow-[0_0_40px_rgba(163,230,53,0.15)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-10 w-10 text-lime-400"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M9 9h.01M15 9h.01" />
                <path d="M9 16c.8-1 1.8-1.5 3-1.5s2.2.5 3 1.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="-mt-3 sm:-mt-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-lime-400">
            Lost your way?
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Page not found
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
            Looks like this page skipped its workout. The page you&apos;re
            looking for doesn&apos;t exist, has been moved, or is taking a rest
            day.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="group flex min-w-[170px] items-center justify-center gap-2 rounded-xl bg-lime-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:bg-lime-300 hover:shadow-[0_0_30px_rgba(163,230,53,0.25)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M19 12H5" />
              </svg>

              Back to Home
            </Link>

            <Link
              href="/"
              className="min-w-[170px] rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-300 transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              Explore FITLOG
            </Link>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mx-auto mt-12 flex max-w-xs items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-xs uppercase tracking-widest text-gray-600">
            FITLOG
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
        </div>
      </div>
    </main>
  );
}