import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" border-t border-white/10 bg-[#0b0d10]">
      <div className="container mx-auto px-5 py-10 sm:px-6 lg:px-10">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-black tracking-wide text-white"
            >
              FIT<span className="text-[#b7ff00]">LOG</span>
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              Build better habits, track your workouts and stay consistent
              with your fitness journey.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                {/* Location */}
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#b7ff00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                {/* Email */}
                <svg
                  className="h-4 w-4 shrink-0 text-[#b7ff00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

                <a
                  href="mailto:hello@fitlog.com"
                  className="transition hover:text-white"
                >
                  hello@fitlog.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                {/* Phone */}
                <svg
                  className="h-4 w-4 shrink-0 text-[#b7ff00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z" />
                </svg>

                <a
                  href="tel:+8801700000000"
                  className="transition hover:text-white"
                >
                  +880 1700-000000
                </a>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Follow us
            </h3>

            <div className="flex gap-3 md:justify-end">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#b7ff00]/40 hover:bg-[#b7ff00]/10 hover:text-[#b7ff00]"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v2H6v4h3v9h4v-9h3.3l.7-4H13V9c0-.7.3-1 1-1Z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#b7ff00]/40 hover:bg-[#b7ff00]/10 hover:text-[#b7ff00]"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="#"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#b7ff00]/40 hover:bg-[#b7ff00]/10 hover:text-[#b7ff00]"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.2 2H22l-8.3 9.5L23.5 22h-7.7l-6-7.8L3 22H-.8l8.8-10L-1.5 2h7.9l5.4 7.1L18.2 2Zm-1.3 18h2.1L5.2 3.9H3Z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition hover:border-[#b7ff00]/40 hover:bg-[#b7ff00]/10 hover:text-[#b7ff00]"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.68a9.5 9.5 0 0 1 2.5.34c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FITLOG. All rights reserved.</p>

          <div className="flex gap-5">
            <Link href="#" className="transition hover:text-gray-300">
              Privacy
            </Link>

            <Link href="#" className="transition hover:text-gray-300">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;