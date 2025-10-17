// components/ui/marketing-services.tsx
"use client";
import Image from "next/image";

type Service = {
  image: string;
  title: string;
  points: string[];
};

type MarketingServicesProps = {
  title: string;
  services: Service[];
};

export default function MarketingServices({
  title,
  services,
}: MarketingServicesProps) {
  return (
    <section className="max-w-[1152px] mx-auto p-6 bg-gradient-to-b from-[#bb89ea] to-white rounded-lg text-center">
      <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-3 rounded-lg shadow-md max-w-[500px] mx-auto"
          >
            <div className="relative w-full h-40 overflow-hidden rounded-md">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mt-3 mb-2">
              {service.title}
            </h3>

            <ul className="text-gray-700 text-left list-disc list-inside text-sm">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
