// components/ui/certification-banner.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type Button = {
  label: string;
  href: string;
  variant?: "primary" | "outline";
};

type CertificationBannerProps = {
  title: string;
  mainHeading: string;
  description: string;
  text?: string;
  textColor?: string;
  bgColor?: string;
  buttons?: Button[];
};

export default function CertificationBanner({
  title,
  mainHeading,
  description,
  text,
  textColor = "text-white",
  bgColor = "bg-gradient-to-br from-teal-700 via-teal-600 to-cyan-700",
  buttons = [],
}: CertificationBannerProps) {
  return (
    <section className={`w-full ${bgColor} py-20 rounded-2xl shadow-lg my-8`}>
      <div className="max-w-5xl mx-auto px-6 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Image
            src="/assets/icons/standard2.png"
            alt="Certification"
            width={20}
            height={20}
          />
          <span className="text-sm font-medium">{title}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold mb-6">{mainHeading}</h2>

        <p className="text-base md:text-lg max-w-2xl mx-auto text-teal-100 leading-relaxed">
          {description}
        </p>

        {text && <h3 className="text-lg font-semibold mt-6">{text}</h3>}

        {buttons.length > 0 && (
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`px-8 py-3 rounded-xl font-semibold transition shadow-md ${
                  button.variant === "outline"
                    ? "border-2 border-white text-white hover:bg-white hover:text-teal-700"
                    : "bg-white text-teal-700 hover:bg-teal-800 hover:text-white"
                }`}
              >
                {button.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
