// components/layout/about/mask-group.tsx
"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "Ik ben erg tevreden met de website die het team voor mij heeft gebouwd en de ondersteuning die ik heb ontvangen. Alles werkt perfect, ze kwamen met goede opties om het nog verder te optimaliseren en de samenwerking kan ik zeker aanbevelen. <br><br>Heel erg bedankt voor al jullie werk, ik waardeer het enorm! <br>Reageren<br><br> ❤️1",
    name: "Babylon Logistics",
    // role: "Product Designer",
    img: "/assets/images/babylon.svg",
  },
  {
    text: "Over the last 2 years, I worked with IT Solutions Worldwide BV on implementing Oracle Cloud in The Netherlands (Albelli) and France (MonAlbum Photo). <br><br>In addition to a great and innovative mind, they are possibly the most hardworking, professional and conscientious team I have ever worked with. If you are looking for sustainable solutions in Supply Chain Management, look no further than IT Solutions Worldwide BV. Their knowledge of issues is unquestionably and the ability to meet the interests of several stakeholders is impeccable.",
    name: "Albelli",
    // role: "Co-founder",
    img: "/assets/images/logos/albelli.png",
  },
];

const MaskGroup: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<any>(null);

  return (
    <div className="relative w-full font-lexend text-white overflow-hidden rounded-[23px]">
      {/* Background Image */}
      <Image
        src="/assets/images/aboutus/bg-copy-1.png"
        alt=""
        fill
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#000000] to-[#278083] opacity-60"></div>

      {/* Heading */}
      <div className="relative z-10 flex justify-center pt-20">
        <b className="text-[36px] leading-[110%] text-center max-w-[720px]">
          Success Stories from Around the World
        </b>
      </div>

      {/* Slider */}
      <div className="relative z-10 mt-14 px-10 pb-20">
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
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[20px] min-h-96 shadow-xl p-8 text-black">
                {/* <p className="leading-[160%] mb-6">{item.text}</p> */}

                <p
                  className="leading-[160%] mb-6 text-center"
                  dangerouslySetInnerHTML={{
                    __html: item.text.replace(/\n/g, "<br>"),
                  }}
                />

                <div className="flex items-center gap-4 bottom-0">
                  <Image
                    src={item.img}
                    width={64}
                    height={64}
                    alt=""
                    className="rounded-full object-cover"
                  />
                  <div>
                    <b className="block leading-[160%]">{item.name}</b>
                    <span className="text-gray-500 text-[16px]">
                      {/* {item.role} */}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Radio Dots */}
        <div className="flex justify-center mt-10 gap-3 z-50 relative">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => swiperRef?.slideTo(index)}
              className={`w-4 h-4 rounded-full border border-white transition-all
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
};

export default MaskGroup;