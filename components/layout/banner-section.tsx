// components/layout/banner-section.tsx
"use client";

import React, { useState, useEffect } from "react";

type Slide = {
  heading: string;
  text?: string;
  backgroundImage: string;
};

type BannerSectionProps = {
  slides: Slide[];
};

const BannerSection: React.FC<BannerSectionProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-32 py-12">
      <div
        className="relative bg-cover bg-center w-full h-[300px] md:h-[400px] lg:h-[600px] max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
        }}
        role="img"
        aria-label={slides[currentSlide].heading}
      >
        <div className="absolute inset-0 z-0" />
        {/*  bg-black/40  */}
        <div className="relative z-10 text-center text-white px-6 md:px-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {slides[currentSlide].heading}
          </h1>
          <p className="text-sm sm:text-base">{slides[currentSlide].text}</p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
