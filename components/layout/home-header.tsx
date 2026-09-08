// components/layout/home-header.tsx
"use client";

import Link from "next/link";
import AnimatedBorderCard from "./home/AnimatedBorderCard";
import NavbarHome from "./nav-bar-home";
import SegmentTabs from "./home/SegmentTabComponent";

export default function Header() {
  const bgVideoUrl = "/assets/images/backgrounds/hero-section-bg.mp4";
  const fallbackImage = "/assets/images/backgrounds/hero-section-bg.png";

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Video (Desktop/Tablet only) / Fallback Image (Mobile & Base) */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${fallbackImage})` }}
      >
        <video
          className="w-full h-full object-cover hidden md:block"
          src={bgVideoUrl}
          poster={fallbackImage}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-[-1]" />

        <NavbarHome />

        {/* Hero Content */}
        <div className="relative z-1 flex flex-col items-center justify-center text-center text-white px-4 pt-20">
          <h1 className="text-[45px] sm:text-6xl/tight lg:text-7xl/tight 2xl:text-8xl/tight font-bold mb-8 w-full sm:w-10/12 lg:w-8/12 xl:w-9/12">
            Empowering Businesses with Smart IT Solutions
          </h1>

          {/* Subheading */}
          <div className="flex flex-col lg:flex-row items-center lg:space-x-4 mb-12 ">
            <div className="flex items-center space-x-2 text-sm uppercase text-[16px] sm:text-lg/tight lg:text-lg/tight 2xl:text-3xl/tight">
              <span>Innovate</span>
              <span className="inline-block">|</span>
              <span>Automate</span>
              <span className="inline-block">|</span>
              <span>Succeed</span>
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/contact-us" target="_blank">
            <button className="bg-[#175864] hover:bg-white text-white hover:text-black px-6 py-3 rounded-lg font-medium transition-colors cursor-pointer">
              Get FREE Consultation
            </button>
          </Link>

          <SegmentTabs />
        </div>
      </div>
    </div>
  );
}