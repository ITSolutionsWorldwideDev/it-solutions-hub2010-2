// components/ui/ISO-Section7.tsx

import Image from "next/image";
import Link from "next/link";

const ISO_Section7 = () => {
  return (
    <section className="w-full bg-linear-to-br from-teal-700 via-teal-600 to-cyan-700 py-20 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
            <Image
              src="/assets/icons/certificate2.png"
              alt="ISO Certified"
              width={40}
              height={40}
            />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Partner With an ISO Certified IT Company
        </h2>

        <p className="text-lg text-teal-100 leading-relaxed mb-10 max-w-2xl mx-auto">
          Choose an IT partner that follows international standards, protects
          your data, and delivers consistent quality.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-3 rounded-xl bg-white text-teal-700 font-semibold shadow-md hover:shadow-lg transition"
          >
            Get in Touch
          </Link>

          <Link
            href="/consultation"
            className="px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-teal-700 transition"
          >
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ISO_Section7;
