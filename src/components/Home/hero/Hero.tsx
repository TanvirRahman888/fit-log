import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="hero bg-slate-900 container mx-auto rounded-xl my-12 ">
      <div className="hero-content flex-col justify-between lg:flex-row-reverse">
        <Image
          alt="Tailwind CSS hero component"
          src="/banner.png"
          className="max-w-sm rounded-lg"
          width={400}
          height={600}
        />
        <div className="lg:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="py-6 text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.
          </p>
          <Link href={"/workouts"} className="btn bg-[#9AE600] hover:bg-[#99e600b7]">BROWSE WORKOUTS</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
