// components/ui/ISO-Section5.tsx

import Image from "next/image";

const ISO_Section5 = () => {
  const commitments = [
    { title: "Regular Internal Audits", img: "/assets/icons/audit2.png" },
    {
      title: "External Certification Audits",
      img: "/assets/icons/certificate3.png",
    },
    {
      title: "Continuous Process Improvement",
      img: "/assets/icons/moving-up2.png",
    },
    {
      title: "Staff Training and Awareness",
      img: "/assets/icons/global2.png",
    },
    {
      title: "Ongoing Performance Monitoring",
      img: "/assets/icons/truct2.png",
    },
  ];

  return (
    <section className="w-full bg-linear-to-br from-teal-700 to-cyan-700 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            More Than Certification, A Commitment
          </h2>
          <p className="text-lg text-teal-100 mt-4 max-w-3xl mx-auto">
            ISO certification is not a one-time achievement. We maintain it
            through:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {commitments.map((item) => (
            <CommitmentCard
              key={item.title}
              title={item.title}
              img={item.img}
            />
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-teal-100 leading-relaxed">
            This ensures we stay aligned with evolving industry standards and
            client expectations.
          </p>
        </div>
      </div>
    </section>
  );
};

function CommitmentCard({ title, img }: { title: string; img: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition">
      <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center">
        <Image src={img} alt={title} width={24} height={24} />
      </div>

      <p className="font-semibold text-white leading-relaxed">{title}</p>
    </div>
  );
}

export default ISO_Section5;
