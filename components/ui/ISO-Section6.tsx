// components/ui/ISO-Section6.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "Is ISO certification mandatory?",
    answer:
      "ISO certification is not legally mandatory, but it demonstrates a strong commitment to quality, security, and international standards.",
  },
  {
    question: "How does ISO certification protect my data?",
    answer:
      "ISO 27001 ensures structured security controls, risk management processes, and strict data handling procedures to safeguard your information.",
  },
  {
    question: "Are your ISO certifications valid internationally?",
    answer:
      "Yes. ISO certifications are globally recognized standards and are valid across international markets.",
  },
  {
    question: "Can clients request ISO documentation?",
    answer:
      "Yes, clients may request relevant certification details or documentation as part of compliance and transparency requirements.",
  },
];

const ISO_Section6 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden transition"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-semibold text-gray-800">
                    {faq.question}
                  </span>

                  <Image
                    src="/assets/icons/plus.png"
                    alt="Toggle"
                    width={20}
                    height={20}
                    className={`transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ISO_Section6;
