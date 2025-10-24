// components/layout/consultation-section.tsx
'use client';

import React, { useState, useEffect } from 'react';
import PopUp from "./popUp";
import Link from 'next/link';

interface Slide {
  backgroundImage: string;
  heading: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
}

interface ConsultationSectionProps {
  slides: Slide[];
  ctabuttontext?: string;
  popup?: boolean;
  overlayOpacity?: number;
  hoverBgColor?: string;
  hoverTextColor?: string;
  textColor?: string;
}

const ConsultationSection: React.FC<ConsultationSectionProps> = ({
  slides,
  ctabuttontext,
  popup = false,
  overlayOpacity = 0,
  hoverBgColor = '#000',
  hoverTextColor = '#fff',
  textColor = '#000',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-32 py-12">
      <div
        className="relative bg-cover bg-center w-full h-[300px] sm:h-[400px] max-w-6xl mx-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
        }}
        role="img"
        aria-label={slides[currentSlide].heading}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundColor: '#000',
            opacity: overlayOpacity,
          }}
          aria-hidden="true"
        />

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-6 md:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            {slides[currentSlide].heading}
          </h2>
          <p className="text-sm sm:text-base mb-4">{slides[currentSlide].text}</p>

          {/* Slide Button */}
          {slides[currentSlide].buttonText && slides[currentSlide].buttonLink && (
            <Link
              href={slides[currentSlide].buttonLink}
              className={`mt-4 inline-block py-2 px-6 rounded-lg font-semibold shadow-md transition-colors`}
              style={{
                backgroundColor: 'white',
                color: textColor,
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = hoverBgColor;
                (e.target as HTMLElement).style.color = hoverTextColor;
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = 'white';
                (e.target as HTMLElement).style.color = textColor;
              }}
            >
              {slides[currentSlide].buttonText}
            </Link>
          )}

          {/* CTA Button for Popup */}
          {popup && ctabuttontext && (
            <button
              onClick={handlePopupOpen}
              className="mt-4 ml-4 px-4 py-2 rounded font-semibold transition-colors bg-white text-[#175864] hover:bg-gray-200 cursor-pointer"
              type="button"
            >
              {ctabuttontext}
            </button>
          )}
        </div>
      </div>

      {/* Popup */}
      {popup && showPopup && <PopUp showPopup={showPopup} onClose={handlePopupClose} />}
    </section>
  );
};

export default ConsultationSection;
