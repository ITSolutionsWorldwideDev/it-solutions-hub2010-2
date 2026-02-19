// components/ui/ISO-Section3.tsx

import Image from "next/image";

const ISO_Section3 = () => {
  return (
    <section className="w-full bg-linear-to-br from-gray-50 to-cyan-50/30 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            What This Means for You
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            When you work with IT Solutions Worldwide, you gain:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <ValueCard
            title="Faster and more reliable project delivery"
            img="/assets/icons/guarantee.png"
          />
          <ValueCard
            title="Improved system stability and performance"
            img="/assets/icons/settings.png"
          />
          <ValueCard
            title="Secure IT infrastructure and data handling"
            img="/assets/icons/lock.png"
          />
          <ValueCard
            title="Predictable service quality"
            img="/assets/icons/certificate.png"
          />
          <ValueCard
            title="A trusted partner aligned with global standards"
            img="/assets/icons/standard.png"
          />
        </div>
        <div className="bg-teal-600 text-white rounded-2xl p-8 text-center max-w-5xl mx-auto">
          <p className="text-lg leading-relaxed">
            Our ISO certifications are not just badges—they directly impact the
            way we plan, execute, and deliver your projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ISO_Section3;

function ValueCard({ title, img }: { title: string; img: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
        <Image src={img} alt={title} width={24} height={24} />
      </div>

      <p className="text-gray-800 font-medium leading-relaxed">{title}</p>
    </div>
  );
}
