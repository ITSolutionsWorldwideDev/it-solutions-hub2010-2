"use client";
import { motion } from "framer-motion";
import { LazyOnView } from "@/components/LazyOnView";
import dynamic from "next/dynamic";

const ExpandingCards = dynamic(() => import("./ExpandingCards"), { ssr: false });

// PinnedProgressSection ko chhod do jaisa hai — pin calc issue hai
const PinnedProgressSection = dynamic(
  () => import("./AnimationComponents").then(mod => mod.PinnedProgressSection),
  { ssr: false }
);

export default function AnimationArea() {
  return (
    <>
      <div className="xl:max-h-fit container xl:max-w-[1200px] mx-auto text-center py-20">
        <motion.h2 /* ... same ... */>
          <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
            OUR SERVICES
          </span>
        </motion.h2>
        <ExpandingCards />
      </div>

      {/* --- OUR CLIENTS SECTION (COMMENTED OUT) ---
      <div className="max-h-[400px] flex flex-col justify-center items-center bg-cover bg-center w-full pt-20">
        <div className="container mx-auto">
          <motion.h2>
            <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
              Our Clients
            </span>
          </motion.h2>
          <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-medium text-[#175864] w-11/12 lg:w-8/12 mx-auto">
            Empowering Customers, Automating Success Smart Solutions for Smarter Businesses
          </h2>

          <LazyOnView
            loader={() => import("./AnimationComponents").then(mod => ({ default: mod.LogosSlider }))}
            fallback={<div className="h-40 md:h-52" />}
          />
        </div>
      </div>
      --- END OUR CLIENTS SECTION --- */}

      <div className="container xl:max-w-[1200px] mx-auto text-center py-20">
        {/* ✅ GSAP ScrollTrigger stagger - view-gated */}
        <LazyOnView
          loader={() => import("./AnimationComponents").then(mod => ({ default: mod.AnimatedList }))}
          fallback={<div className="h-screen" />}
        />
      </div>

      <div
        className="flex flex-col justify-center items-center bg-cover bg-center w-full"
        style={{ backgroundImage: `url(/assets/images/backgrounds/clients-section-radial-bg.webp)` }}
      >
        <div className="container px-4 sm:px-6 lg:px-8 place-items-center">
          {/* ✅ FunFacts - already IntersectionObserver use karta hai internally for animation,
              lekin JS load abhi bhi eager hai. LazyOnView se JS load bhi gate hoga */}
          <LazyOnView
            loader={() => import("./AnimationComponents").then(mod => ({ default: mod.FunFacts }))}
            fallback={<div className="min-h-[250px]" />}
          />
        </div>
      </div>

      <PinnedProgressSection />

      <LazyOnView
        className="w-full relative left-1/2 -translate-x-1/2"
        loader={() => import("./AnimationComponents").then(mod => ({ default: mod.AnimatedGlobe }))}
        fallback={
          <div className="flex items-center justify-center h-[90vh] md:h-[40rem] w-full bg-[#175864]">
            <h2 className="text-center text-xl md:text-4xl font-bold text-white px-4">
              Delivering Excellence In Your Country
            </h2>
          </div>
        }
      />
    </>
  );
}