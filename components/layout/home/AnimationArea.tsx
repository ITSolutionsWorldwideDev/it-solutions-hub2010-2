"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { LazyOnView } from "@/components/LazyOnView";

const ExpandingCards = dynamic(() => import("./ExpandingCards"), { ssr: false });
const LogosSlider = dynamic(() => import("./AnimationComponents").then(mod => mod.LogosSlider), { ssr: false });
const AnimatedList = dynamic(() => import("./AnimationComponents").then(mod => mod.AnimatedList), { ssr: false });
const FunFacts = dynamic(() => import("./AnimationComponents").then(mod => mod.FunFacts), { ssr: false });

// GSAP pin section — WAPAS normal dynamic, lazy-view-gate nahi karna (pin calc break ho raha tha)
const PinnedProgressSection = dynamic(
  () => import("./AnimationComponents").then(mod => mod.PinnedProgressSection),
  { ssr: false }
);

export default function AnimationArea() {
  return (
    <>
      <div className="xl:max-h-fit container xl:max-w-[1200px] mx-auto text-center py-20">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
            OUR SERVICES
          </span>
        </motion.h2>
        <ExpandingCards />
      </div>

      <div className="max-h-[400px] flex flex-col justify-center items-center bg-cover bg-center w-full pt-20">
        <div className="container mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <span className="bg-[#175864] text-white px-4 py-1 rounded-md inline-block">
              Our Clients
            </span>
          </motion.h2>
          <h2 className="text-center text-2xl md:text-3xl lg:text-3xl font-medium text-[#175864] w-11/12 lg:w-8/12 mx-auto">
            Empowering Customers, Automating Success Smart Solutions for Smarter Businesses
          </h2>
          <LogosSlider />
        </div>
      </div>

      <div className="container xl:max-w-[1200px] mx-auto text-center py-20">
        <AnimatedList />
      </div>

      <div
        className="flex flex-col justify-center items-center bg-cover bg-center w-full"
        style={{ backgroundImage: `url(/assets/images/backgrounds/clients-section-radial-bg.webp)` }}
      >
        <div className="container px-4 sm:px-6 lg:px-8 place-items-center">
          <FunFacts />
        </div>
      </div>

      <PinnedProgressSection />

      {/* Sirf Globe lazy-gated rehne dena — sabse bhaari (three.js + three-globe + h3-js) */}
      <LazyOnView
        className="w-full relative left-1/2 -translate-x-1/2"
        loader={() =>
          import("./AnimationComponents").then((mod) => ({ default: mod.AnimatedGlobe }))
        }
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