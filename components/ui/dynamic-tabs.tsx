// components/ui/dynamic-tabs.tsx
"use client";

import { useState } from "react";

type DynamicTabsProps = {
  headingh2?: string;
  headings: string[];
  content: string[];
  activeColor?: string;
  inactiveColor?: string;
};

export default function DynamicTabs({
  headingh2,
  headings,
  content,
  activeColor = "#F59E0B", // golden orange
  inactiveColor = "#F3F4F6", // light gray
}: DynamicTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-12 max-w-[1152px] mx-auto">
      {headingh2 && (
        <h2 className="text-center text-2xl font-bold mx-4 mb-6">
          {headingh2}
        </h2>
      )}

      <div className="flex flex-col md:flex-row mx-5 md:mx-5 lg:mx-auto mt-4">
        {/* Sidebar with tab buttons */}
        <div className="flex flex-col space-y-2 w-full md:w-1/4">
          {headings.map((heading, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                backgroundColor:
                  activeIndex === index ? activeColor : inactiveColor,
              }}
              className={`p-4 text-left rounded-lg shadow transition duration-300 cursor-pointer ${
                activeIndex === index ? "text-white" : "text-black"
              }`}
            >
              {heading}
            </button>
          ))}
        </div>

        {/* Content display area */}
        <div className="mt-4 md:mt-0 md:w-3/4 md:pl-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            {content[activeIndex]}
          </p>
        </div>
      </div>
    </section>
  );
}
