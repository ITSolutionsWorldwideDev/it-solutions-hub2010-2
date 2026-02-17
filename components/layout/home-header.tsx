// components/layout/home-header.tsx
import Link from "next/link";
import AnimatedBorderCard from "./home/AnimatedBorderCard";
// import { Logo } from "./logo";
import NavbarHome from "./nav-bar-home";
import SegmentTabs from "./home/SegmentTabComponent";
import { useState, useEffect } from "react";

export default function Header() {
  // const isBgLoaded = true;
  // const bgUrl = "/assets/images/backgrounds/hero-section-bg.png";

  const bgVideoUrl = "/assets/images/backgrounds/hero-section-bg.mp4";
  const fallbackImage = "/assets/images/backgrounds/hero-section-bg.png";

  const [isVideoSupported, setIsVideoSupported] = useState(true);

  useEffect(() => {
    const ua = navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(ua)) {
      setIsVideoSupported(true);
    }
  }, []);

  return (
    // <div
    //   className="min-h-[100vh] 2xl:min-h-[100vh] relative bg-cover bg-center w-full pb-10"
    //   style={{
    //     backgroundImage: isBgLoaded ? `url(${bgUrl})` : "none",
    //   }}
    // >
    <div className="relative w-full min-h-screen overflow-hidden">
      {isVideoSupported ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={bgVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      ) : (
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${fallbackImage})` }}
        />
      )}
      <div className="container mx-auto ">
        {/* Semi-transparent overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />

        <NavbarHome />

        {/* Hero Content */}
        <div className="relative z-1 flex flex-col items-center justify-center  text-center text-white px-4 pt-20">
          {/* Animated Border Card */}
          {/* 
          <div className="w-[60px] absolute top-[100%] md:top-2/4 lg:top-[85%] transform -translate-y-1/2 left-4 md:left-10 lg:left-40">
            <AnimatedBorderCard />
          </div>
           */}

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
              {/* 0FB6AE */}
              Get FREE Consultation
            </button>
          </Link>

          <SegmentTabs />
        </div>
      </div>
    </div>
  );
}
