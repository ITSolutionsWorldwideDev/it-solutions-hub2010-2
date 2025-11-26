// components/layout/aboutus-process-flow.tsx
"use client";

import Image from "next/image";
import React from "react";

interface Step {
  icon: string;
  title: string;
  description: string;
}

interface AboutUsProcessFlowProps {
  steps: Step[];
  circleColor: string;
  lineColor: string;
  textColor: string;
  heading: string;
  subheading?: string;
}

const AboutUsProcessFlow: React.FC<AboutUsProcessFlowProps> = ({
  steps,
  circleColor,
  lineColor,
  textColor,
  heading,
  subheading,
}) => {
  return (
    <section
      className="text-center max-w-[1152px] mx-auto py-12 px-4 mb-[60px]"
      aria-label="Process Flow"
    >
      <h2
        className="text-2xl md:text-3xl font-bold mb-2"
        style={{ color: textColor }}
      >
        {heading}
      </h2>
      <p className="text-base md:text-lg mb-6" style={{ color: textColor }}>
        {subheading}
      </p>

      <div className="relative flex flex-col md:flex-row items-center md:justify-between md:space-x-4">
        {/* Dashed Connecting Line (for desktop view only) */}

        <div className="absolute w-full margin: 0rem 10rem; top-0">
          <div
            className="absolute bg-contain bg-center w-full h-[300px] bg-no-repeat"
            /* md:h-[400px] lg:h-[600px] max-w-6xl  */
            style={{
              backgroundImage: `url('/assets/images/aboutus/vector_1.png')`,
            }}
            role="img"
          ></div>
        </div>
        {/* <div
          className="absolute md:inset-0 hidden md:flex items-center"
          style={{
            borderTop: `2px dashed ${lineColor}`,
            top: "50%",
            transform: "translateY(-50%)",
            background:
          }}
          aria-hidden="true"
        /> */}

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center mb-8 md:mb-0 w-full md:w-auto odd:top-[80px] even:top-[40px] first:top-[0px]"
          >
            {/* Step Circle with Icon */}
            <div
              className="w-40 h-40 flex items-center justify-center rounded-full mb-2 border-2"
              style={{ borderColor: circleColor, backgroundColor: "#467a7e" }}
            >
              <div className="w-[64px] relative">
                <span className="text-xs font-medium text-gray-500 rounded-full p-2 border-1 absolute top-[-40px] right-[-40px] bg-white">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                <Image
                  src={step.icon}
                  alt={step.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Step Title + Number */}
            <div className="text-center">
              <p
                className="text-sm md:text-base font-semibold mb-1"
                style={{ color: textColor }}
              >
                {step.title}
              </p>
              <span style={{ opacity: 0.6 }}>{step.description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsProcessFlow;
