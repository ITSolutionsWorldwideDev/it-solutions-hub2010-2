// components/ui/marketing-banner.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type MarketingBannerProps = {
  imageSrc: string;
  title: string;
  description: string;
  text?: string;
  buttonText?: string;
  buttonText2?: string;
  buttonText3?: string;
  buttonLink?: string;
};

export default function MarketingBanner({
  imageSrc,
  title,
  description,
  text,
  buttonText,
  buttonText2,
  buttonText3,
  buttonLink = "#",
}: MarketingBannerProps) {
  return (
    <section className="max-w-[1152px] mx-auto flex flex-col md:flex-row items-center bg-[#9B51E0] rounded-xl overflow-hidden shadow-lg my-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 relative aspect-[4/3]">
        <Image
          src={imageSrc}
          alt="Marketing Team"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-full p-6 text-white">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="mt-2 text-sm md:text-base">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {buttonText && (
            <Link
              href={buttonLink}
              className="inline-flex items-center px-3 py-2 bg-white text-[#9B51E0] font-medium rounded-lg shadow hover:bg-gray-200 transition"
            >
              {buttonText}
              <span className="ml-2">↗</span>
            </Link>
          )}
          {buttonText2 && (
            <Link
              href={buttonLink}
              className="inline-flex items-center px-3 py-2 bg-white text-[#9B51E0] font-medium rounded-lg shadow hover:bg-gray-200 transition"
            >
              {buttonText2}
              <span className="ml-2">↗</span>
            </Link>
          )}
          {buttonText3 && (
            <Link
              href={buttonLink}
              className="inline-flex items-center px-3 py-2 bg-white text-[#9B51E0] font-medium rounded-lg shadow hover:bg-gray-200 transition"
            >
              {buttonText3}
              <span className="ml-2">↗</span>
            </Link>
          )}
        </div>

        {text && <h3 className="text-lg md:text-lg font-bold mt-3">{text}</h3>}
      </div>
    </section>
  );
}
