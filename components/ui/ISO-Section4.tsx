// components/ui/ISO-Section4.tsx
import Image from "next/image";

const ISO_Section4 = () => {
  const services = [
    { title: "Software & Web Development", img: "/assets/icons/code.png" },
    {
      title: "IT Consulting and Support",
      img: "/assets/icons/global.png",
    },
    {
      title: "Cloud and Infrastructure Services",
      img: "/assets/icons/cloud.png",
    },
    { title: "Cybersecurity Solutions", img: "/assets/icons/standard.png" },
    {
      title: "Quality Assurance and Testing",
      img: "/assets/icons/guarantee.png",
    },
    { title: "Post-Launch Support", img: "/assets/icons/performance.png" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How We Apply ISO Standards in Our Work
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We embed ISO principles across all services:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              img={service.img}
            />
          ))}
        </div>

        <div className="rounded-2xl border border-cyan-200 bg-linear-to-r from-cyan-50 to-teal-50 p-8 text-center max-w-5xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            From requirement analysis to final delivery and post-launch support,
            every step follows ISO-compliant procedures.
          </p>
        </div>
      </div>
    </section>
  );
};

function ServiceCard({ title, img }: { title: string; img: string }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 flex items-center gap-4 hover:bg-gray-100 transition">
      <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center">
        <Image src={img} alt={title} width={20} height={20} />
      </div>

      <p className="font-semibold text-gray-800">{title}</p>
    </div>
  );
}

export default ISO_Section4;
