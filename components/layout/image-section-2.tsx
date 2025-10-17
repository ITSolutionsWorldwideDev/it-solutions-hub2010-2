// components/layout/image-section-2.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PopUp from "./popUp";

interface ImageSectionProps {
  imageUrl: string;
  heading: string;
  text: React.ReactNode;
  ctabuttonText?: string;
  buttonText?: string;
  bgButton?: string;
  buttonLink?: string;
  popup?: boolean;
  imageAlign?: "left" | "right";
  leftColor?: string;
  rightColor?: string;
  textColor?: string;
  logoUrl?: string;
  borderWidth?: string;
  borderColor?: string;
}

const ImageSection2 = ({
  imageUrl,
  heading,
  text,
  ctabuttonText,
  buttonText,
  bgButton = "#12E193",
  buttonLink = "/",
  popup = false,
  imageAlign = "left",
  leftColor = "#ffffff",
  rightColor = "#ffffff",
  textColor = "#000000",
  logoUrl,
  borderWidth = "0px",
  borderColor = "transparent",
}: ImageSectionProps) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupOpen = () => setShowPopup(true);
  const handlePopupClose = () => setShowPopup(false);

  const isInternalLink = buttonLink?.startsWith("/");

  const imageComponent = (
    <div className="w-[80%] lg:w-auto self-start ml-2 md:ml-4 lg:ml-0">
      <Image
        src={imageUrl}
        alt={heading || "Image"}
        width={600}
        height={400}
        className="w-full md:h-[500px] lg:h-auto object-top"
      />
    </div>
  );

  const contentComponent = (
    <div className="w-full lg:w-2/3 px-2 md:px-3 lg:px-0">
      <h2
        className="text-3xl lg:text-3xl font-semibold mb-4"
        style={{ color: textColor }}
      >
        {heading}
      </h2>
      <span className="text-lg lg:text-lg" style={{ color: textColor }}>
        {text}
      </span>

      {buttonText && (
        <div className="mt-4">
          {isInternalLink ? (
            <Link
              href={buttonLink}
              className="text-white px-4 py-2 rounded font-semibold"
              style={{ backgroundColor: bgButton }}
            >
              {buttonText}
            </Link>
          ) : (
            <Link
              href={buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white px-4 py-2 rounded font-semibold"
              style={{ backgroundColor: bgButton }}
            >
              {buttonText}
            </Link>
          )}
        </div>
      )}

      {popup && (
        <button
          onClick={handlePopupOpen}
          className="mt-4 bg-[#12E193] text-white px-4 py-2 rounded font-semibold cursor-pointer"
          type="button"
        >
          {ctabuttonText}
        </button>
      )}

      {logoUrl && (
        <div className="mt-4">
          <Image src={logoUrl} alt="Logo" width={360} height={80} />
        </div>
      )}
    </div>
  );

  return (
    <section
      className="mx-auto my-12 py-12 px-4 lg:px-8 rounded-md"
      style={{
        maxWidth: "1152px",
        background: `linear-gradient(to right, ${leftColor}, ${rightColor})`,
        border: `${borderWidth} solid ${borderColor}`,
      }}
    >
      <div
        className={`flex flex-col ${
          imageAlign === "left" ? "lg:flex-row" : "flex-col-reverse lg:flex-row"
        } gap-4 items-center space-y-6 lg:space-y-0 lg:space-x-12`}
      >
        {imageAlign === "left" ? (
          <>
            {imageComponent}
            {contentComponent}
          </>
        ) : (
          <>
            {contentComponent}
            {imageComponent}
          </>
        )}
      </div>

      {popup && showPopup && (
        <PopUp showPopup={showPopup} onClose={handlePopupClose} />
      )}
    </section>
  );
};

export default ImageSection2;
