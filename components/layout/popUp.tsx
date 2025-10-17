// components/layout/popup.
"use client";

import Image from "next/image";
import LandingForm from "./landing-form";
import React from "react";

interface PopUpProps {
  showPopup: boolean;
  onClose: () => void;
}

const PopUp: React.FC<PopUpProps> = ({ showPopup, onClose }) => {
  if (!showPopup) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div className="relative bg-[#12E193] rounded-lg shadow-lg p-6 w-11/12 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl">
        {/* Logo Header */}
        <div className="flex justify-center mb-4">
          <Image
            src="/assets/images/itww-logo-white.png"
            alt="IT Solutions Worldwide Logo"
            width={180}
            height={60}
            priority
          />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 text-3xl font-bold focus:outline-none cursor-pointer"
          aria-label="Close popup"
        >
          &times;
        </button>

        {/* Contact Form */}
        <LandingForm />
      </div>
    </div>
  );
};

export default PopUp;
