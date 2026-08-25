// components/layout/career-growth-section.tsx

import Image from "next/image";

export default function CareerGrowthSection() {
  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          px-6
          py-14
          sm:px-8
          sm:py-16
          lg:px-0
          lg:py-16
        "
      >
        {/* HEADING */}
        <div className="text-center">
          <h2
            className="
              text-[32px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.03em]
              text-[#06282C]
              sm:text-[38px]
              lg:text-[40px]
            "
          >
            A Place Where{" "}
            <span className="text-[#2B8A99]">Careers</span>{" "}
            Actually{" "}
            <span className="text-[#2B8A99]">Grow</span>
          </h2>

          <p
            className="
              mx-auto
              mt-2
              max-w-[700px]
              text-[12px]
              leading-[1.5]
              text-gray-500
              sm:text-[13px]
            "
          >
            We have built the kind of company we always wanted to work at —
            and we keep raising the bar every year.
          </p>
        </div>

        {/* IMAGE COLLAGE */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-3
            sm:grid-cols-2
            lg:grid-cols-[1.55fr_0.72fr_0.72fr]
            lg:grid-rows-[240px_240px]
            lg:gap-3
          "
        >
          {/* LARGE IMAGE — CB1 */}
          <div
            className="
              relative
              min-h-[300px]
              overflow-hidden
              rounded-[14px]
              sm:row-span-2
              lg:min-h-full
            "
          >
            <Image
              src="/assets/images/career/c1.webp"
              alt="Team working together"
              fill
              className="object-cover"
              sizes="
                (min-width: 1024px) 45vw,
                (min-width: 640px) 50vw,
                100vw
              "
            />
          </div>

          {/* SMALL IMAGE — CB2 */}
          <div
            className="
              relative
              min-h-[220px]
              overflow-hidden
              rounded-[14px]
              lg:min-h-full
            "
          >
            <Image
              src="/assets/images/career/c2.webp"
              alt="Technology and workspace"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 22vw, 50vw"
            />
          </div>

          {/* SMALL IMAGE — CB3 */}
          <div
            className="
              relative
              min-h-[220px]
              overflow-hidden
              rounded-[14px]
              lg:min-h-full
            "
          >
            <Image
              src="/assets/images/career/c3.webp"
              alt="Team enjoying time together"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 22vw, 50vw"
            />
          </div>

          {/* SMALL IMAGE — CB4 */}
          <div
            className="
              relative
              min-h-[220px]
              overflow-hidden
              rounded-[14px]
              lg:min-h-full
            "
          >
            <Image
              src="/assets/images/career/c4.webp"
              alt="Modern office workspace"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 22vw, 50vw"
            />
          </div>

          {/* SMALL IMAGE — CB5 */}
          <div
            className="
              relative
              min-h-[220px]
              overflow-hidden
              rounded-[14px]
              lg:min-h-full
            "
          >
            <Image
              src="/assets/images/career/c5.webp"
              alt="Employees collaborating"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 22vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}