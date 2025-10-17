// components/layout/banner-section-2.tsx
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

type Slide = {
  heading: string;
  text: string;
  backgroundImage: string;
  button?: string;
  button2?: string;
  button3?: string;
  button4?: string;
  buttonTextColor?:string;
};

type BannerSectionProps = {
  slides: Slide[];
};

const BannerSection2: React.FC<BannerSectionProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) return null;

  const buttonTextColor = slides[currentSlide].buttonTextColor
    ? slides[currentSlide].buttonTextColor
    : "text-black";

  return (
    <div className="relative w-full px-4 sm:px-8 md:px-7 lg:px-32 py-2">
      <div
        className="relative bg-cover bg-center w-full h-[300px] md:h-[400px] lg:h-[600px] max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
        }}
      >
        <div className="relative z-10 text-left text-white px-6 md:px-12">
          <h1 className="uppercase text-xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-4 w-[90%] md:w-[90%] lg:w-1/2">
            {slides[currentSlide].heading}
          </h1>
          <p className="text-sm sm:text-base w-[90%] md:w-[90%] lg:w-1/2">
            {slides[currentSlide].text}
          </p>
          {slides[currentSlide].button ? <div className="flex justify-start gap-4 mt-2">
            <Link
              href="/contact-us" target="_blank" //change for pop-up later
              className={`bg-white ${buttonTextColor} px-4 py-2 rounded font-semibold transition`}
            >
              {slides[currentSlide].button}
              
            </Link>
              
          </div>: ''}
          {slides[currentSlide].button2? <div className="flex justify-start gap-4 mt-2">
            <Link
              href="#"
              className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition`}
            >
              {slides[currentSlide].button2}
              
            </Link>
              
          </div> : ''}
          {slides[currentSlide].button3? <div className="flex justify-start gap-4 mt-2">
            <Link
              href="#"
              className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition`}
            >
              {slides[currentSlide].button3}
              
            </Link>
              
          </div> : ''}
          {slides[currentSlide].button4? <div className="flex justify-start gap-4 mt-2">
            <Link
              href="#"
              className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition`}
            >
              {slides[currentSlide].button4}
              
            </Link>
              
          </div> : ''}
        
        </div>
      </div>
    </div>
  );
};

export default BannerSection2;
