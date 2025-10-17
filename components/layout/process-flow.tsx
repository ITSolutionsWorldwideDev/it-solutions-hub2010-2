// components/layout/process-flow.tsx
'use client';

import Image from 'next/image';
import React from 'react';

interface Step {
  icon: string;
  title: string;
}

interface ProcessFlowProps {
  steps: Step[];
  circleColor: string;
  lineColor: string;
  textColor: string;
  heading: string;
  subheading?: string;
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({
  steps,
  circleColor,
  lineColor,
  textColor,
  heading,
  subheading,
}) => {
  return (
    <section className="text-center max-w-[1152px] mx-auto py-12 px-4" aria-label="Process Flow">
      <h2
        className="text-2xl md:text-3xl font-bold mb-2"
        style={{ color: textColor }}
      >
        {heading}
      </h2>
      <p
        className="text-base md:text-lg mb-6"
        style={{ color: textColor }}
      >
        {subheading}
      </p>

      <div className="relative flex flex-col md:flex-row items-center md:justify-between md:space-x-4">
        {/* Dashed Connecting Line (for desktop view only) */}
        <div
          className="absolute md:inset-0 hidden md:flex items-center"
          style={{
            borderTop: `2px dashed ${lineColor}`,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
          aria-hidden="true"
        />

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center mb-8 md:mb-0 w-full md:w-auto"
          >
            {/* Step Circle with Icon */}
            <div
              className="w-24 h-24 flex items-center justify-center rounded-full mb-2 border-2"
              style={{ borderColor: circleColor, backgroundColor: '#fff' }}
            >
              <Image
                src={step.icon}
                alt={step.title}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>

            {/* Step Title + Number */}
            <div className="text-center">
              <p
                className="text-sm md:text-base font-semibold mb-1"
                style={{ color: textColor }}
              >
                {step.title}
              </p>
              <span className="text-xs font-medium text-gray-500">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessFlow;
