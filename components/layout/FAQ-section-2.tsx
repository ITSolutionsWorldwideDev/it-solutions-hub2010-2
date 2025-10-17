// components/layout/FAQ-section-2.tsx
'use client'; // Needed only for App Router with useState

import React, { useState, ReactNode } from 'react';

interface Question {
  question: string;
  answer: string| ReactNode;
}

interface FAQ2Props {
  questions: Question[];
  heading?: string;
  gradientColors?: string[];
}

const FAQSection2: React.FC<FAQ2Props> = ({
  questions,
  heading = 'Frequently Asked Questions',
  gradientColors = ['#ffffff', '#ffffff'],
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="flex justify-center py-12"
      aria-labelledby="faq-heading"
    >
      <div
        className="faq-container p-8 rounded-md w-full max-w-[1152px]"
        style={{
          background: `linear-gradient(to right, ${gradientColors.join(', ')})`,
        }}
      >
        <h2
          id="faq-heading"
          className="text-2xl md:text-3xl font-bold mb-6 text-center"
        >
          {heading}
        </h2>

        <div className="faq-list grid grid-cols-1 md:grid-cols-2 gap-6">
          {questions.map((q, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className={`faq-item border rounded-md p-4 transition duration-300 ${
                  isOpen ? 'bg-white shadow-lg' : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAnswer(index)}
                  role="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3
                    className={`text-lg font-medium ${
                      isOpen ? 'text-black' : 'text-gray-900'
                    }`}
                  >
                    {q.question}
                  </h3>
                  <span
                    className={`text-xl transform transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </div>

                {isOpen && (
                  <p
                    id={`faq-answer-${index}`}
                    className="text-gray-700 mt-3"
                    aria-live="polite"
                  >
                    {q.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection2;
