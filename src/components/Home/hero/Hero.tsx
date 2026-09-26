import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="mx-auto my-8 w-[calc(100%-2rem)] overflow-hidden rounded-xl bg-slate-900 sm:my-12">
      <div className="flex w-full flex-col items-center gap-8 px-5 py-8 sm:px-8 sm:py-10 lg:flex-row-reverse lg:justify-between lg:px-14 lg:py-12">
        
        {/* Hero Image */}
        <div className="flex w-full justify-center lg:w-1/2">
          <Image
            src="/banner.png"
            alt="Workout exercise illustration"
            width={400}
            height={600}
            priority
            className="h-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[400px]"
          />
        </div>

        {/* Hero Content */}
        <div className="w-full min-w-0 text-center lg:w-1/2 lg:text-left">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>

          <p className="mx-auto my-4 max-w-xl text-sm leading-6 text-[#9CA3AF] sm:text-base lg:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="btn border-none bg-[#9AE600] text-black hover:bg-[#99e600b7]"
          >
            BROWSE WORKOUTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;