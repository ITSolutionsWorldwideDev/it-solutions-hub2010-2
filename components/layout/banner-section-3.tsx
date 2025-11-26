// components/layout/banner-section-3.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

type Slide = {
  heading: string;
  text: string;
  backgroundImage: string;
  backgroundMainImage: string;
  button?: string;
  button2?: string;
  button3?: string;
  button4?: string;
  buttonTextColor?: string;
};

type BannerSectionProps = {
  slides: Slide[];
};

const BannerSection3: React.FC<BannerSectionProps> = ({ slides }) => {
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
    <div className="relative w-full py-2 mt-2">
      <div
        className="relative bg-cover bg-center w-full h-[900px] md:h-[400px] lg:h-[600px] mx-auto rounded-xl shadow-lg overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
        }}
      >
        <div className="relative w-full h-full  z-10 text-left text-white px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 w-full h-full ">
            <div className="relative  self-center">
              <h1 className="bg-linear-to-r from-[#1A2980] to-[#26D0CE] bg-clip-text text-transparent font-lexend text-[54.636px] md:text-[84.636px] font-bold leading-[81.009px] uppercase">
                {slides[currentSlide].heading}
              </h1>
              {/* uppercase text-xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-4 w-[90%] md:w-[90%] lg:w-1/2  */}
              <p className=" text-black font-lexend text-[34.636px] md:text-[61.395px] font-normal leading-[58.764px]">
                {slides[currentSlide].text}
              </p>
              {/* text-sm sm:text-base w-[90%] md:w-[90%] lg:w-1/2 */}
              {slides[currentSlide].button ? (
                <div className=" gap-4 mt-2 inline-flex align-middle sm:w-full" >
                  <Link
                    href="/contact-us"
                    target="_blank" //change for pop-up later
                    className={`transition px-4 py-2 rounded-[10px] bg-[#418F92]  text-base  shrink-0 inline-flex align-middle leading-[50.37px] text-[16.79px]`}
                  >
                    {slides[currentSlide].button}
                    <Image
                      className="w-6 h-6 ml-2 self-center"
                      width={24}
                      height={24}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/outlined-32-arrow-right.svg"
                    />
                  </Link>
                  {/* bg-white ${buttonTextColor} rounded font-semibold  */}
                </div>
              ) : (
                ""
              )}
              {slides[currentSlide].button2 ? (
                <div className=" justify-start gap-4 mt-2 inline-flex align-middle md:ml-10 sm:w-full">
                  <Link
                    href="#"
                    className={`bg-white transition px-4 py-2 rounded-[10px] border border-[#418F92] text-[#418F92]  shrink-0 text-base leading-[50.37px] text-[16.79px] inline-flex align-middle hover:text-[#236B7A]`}
                  >
                    {slides[currentSlide].button2}
                    <Image
                      className="w-6 h-6 ml-2 self-center"
                      width={24}
                      height={24}
                      sizes="100vw"
                      alt=""
                      src="/assets/images/aboutus/outlined-32-arrow-right.svg"
                    />
                  </Link>
                </div>
              ) : (
                ""
              )}

              {slides[currentSlide].button3 ? (
                <div className="flex justify-start gap-4 mt-2">
                  <Link
                    href="#"
                    className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition`}
                  >
                    {slides[currentSlide].button3}
                  </Link>
                </div>
              ) : (
                ""
              )}
              {slides[currentSlide].button4 ? (
                <div className="flex justify-start gap-4 mt-2">
                  <Link
                    href="#"
                    className={`bg-white text-${buttonTextColor} px-4 py-2 rounded font-semibold transition`}
                  >
                    {slides[currentSlide].button4}
                  </Link>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="relative">
              <Image
                className=""
                fill
                alt=""
                src={slides[currentSlide].backgroundMainImage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection3;
