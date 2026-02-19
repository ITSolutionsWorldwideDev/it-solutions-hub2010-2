// components/ui/BenefitCard.tsx

import Image from "next/image";

export default function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-cyan-100 bg-linear-to-br from-cyan-50 to-teal-50 p-8 transition hover:shadow-lg">
      <Image
        src={icon}
        alt={title}
        width={52}
        height={52}
        className="rounded-lg mb-6 bg-white p-3"
      />

      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
