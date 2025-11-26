// components/layout/home/Certification.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const certifications = [
  {
    name: "ISO 9001",
    img: "/assets/icons/tech/ISO 9001.png",
  },
  {
    name: "ISO 270001",
    img: "/assets/icons/tech/ISO 270001.png",
  },
  {
    name: "Compliant",
    img: "/assets/icons/tech/compliant.png",
  },
  {
    name: "Google Ads",
    img: "/assets/icons/tech/google_ads.png",
  },
];

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="container xl:max-w-[1200px] md:px-5 mx-auto py-10 relative">
      <div className="flex justify-between items-center mb-6 px-4 pr-5 md:pr-0 md:px-0 relative">
        <div>
          {/* <p className="text-sm uppercase tracking-wider mb-2 text-gray-500">
            Certification
          </p> */}
          <h2 className="text-teal-700 text-3xl font-bold">
            Certifications
            {/* Stay Ahead With Insights And Trends */}
          </h2>
        </div>
      </div>

      {/* Slider */}
      <div className="relative z-10 mt-14 px-10 pb-20 xl:max-w-[600px] mx-auto">
        <Swiper
          modules={[Navigation, Autoplay]}
          onSwiper={setSwiperRef}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2500, // Auto scroll every 2.5 seconds
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".blog-prev-btn",
            nextEl: ".blog-next-btn",
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="relative"
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {certifications.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="">

                <div className=" items-center gap-4">
                  <Image
                    src={item.img}
                    width={100}
                    height={100}
                    alt=""
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Radio Dots */}
        <div className="flex justify-center mt-10 gap-3 z-50 relative">
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef?.slideTo(index)}
              className={`w-4 h-4 rounded-full border border-black transition-all
                ${
                  activeIndex === index
                    ? "bg-white scale-110"
                    : "bg-transparent opacity-60"
                }`}
            ></button>
          ))}
        </div>

      </div>
    </div>
  );
}
