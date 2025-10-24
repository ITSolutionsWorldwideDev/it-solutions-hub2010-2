// components/layout/FAQ-section.tsx
'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqs: FAQItem[];
  helpCenterLink: string;
  privacyPolicyLink: string;
}

const FAQSection = ({
  title,
  description,
  faqs,
  helpCenterLink,
  privacyPolicyLink,
}: FAQSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="faq" className="max-w-6xl mx-auto p-6 py-12" aria-labelledby="faq-heading">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div>
          <div className="mb-8">
            <h1 id="faq-heading" className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex gap-4">
            <Link
              href={helpCenterLink}
              className="flex items-center gap-2 px-4 py-2 bg-[#175864] text-white rounded hover:bg-opacity-90"
              aria-label="Go to Help Center"
            >
              Help Center
            </Link>
            <Link
              href={privacyPolicyLink}
              className="px-4 py-2 border-2 border-[#175864] text-[#175864] rounded hover:bg-[#f0fdfc]"
              aria-label="Read Privacy Policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Right Section: FAQs */}
        <div className="bg-[#175864] text-white rounded-lg shadow p-6">
          <dl className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-white last:border-b-0">
                <dt>
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full py-4 text-left focus:outline-none cursor-pointer"
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <span className="text-xl">
                      {activeIndex === index ? "–" : "+"}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-${index}`}
                  hidden={activeIndex !== index}
                  className="py-2"
                >
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
