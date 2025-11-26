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
    text: "Amet morbi enim sodales quis dui, in habitant pharetra...",
    name: "Ralph Edwards",
    role: "Product Designer",
    img: "/assets/images/aboutus/Hellena-thumb.png",
  },
  {
    text: "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla. Lacus, ut congue sagittis vel nisi integer imperdiet a vitae.",
    name: "Hellena John",
    role: "Co-founder",
    img: "/assets/images/aboutus/Hellena-thumb.png",
  },
  {
    text: "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed lorem cursus.",
    name: "David Oshodi",
    role: "Manager",
    img: "/assets/images/aboutus/david-thumb.png",
  },
  {
    text: "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    name: "Charolette Hanlin",
    role: "CEO",
    img: "/assets/images/aboutus/Hellena-thumb.png",
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
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-[20px] shadow-xl p-8 text-black">
                <p className="leading-[160%] mb-6">{item.text}</p>

                <div className="flex items-center gap-4">
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
                      {item.role}
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


/* import type { NextPage } from "next";
import Image from "next/image";

const MaskGroup: NextPage = () => {
  return (
    <div className="w-full h-[664px] relative text-left text-[20px] text-black font-lexend">
      <div className="rounded-[23px] [background:linear-gradient(-90deg,_#000,_#278083)] w-full h-[664px]" />
      <Image
        className="object-cover mix-blend-luminosity"
        fill
        alt="" src="/assets/images/aboutus/bg-copy-1.png"
      />

      <b className="text-[36px] leading-[110%] inline-block text-white text-center w-[728px]">
        Success Stories from Around the World
      </b>

      <div className="absolute top-[155px] left-[calc(50%_-_623px)] w-[1245px] h-[446px]">
        <div className="slider-div absolute top-[0px] left-[calc(50%_-_622.5px)] w-[1245px] overflow-x-auto flex items-center justify-center gap-6">
          <div className="w-96 shadow-[0px_9px_53.7px_rgba(0,_0,_0,_0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
              <div className="self-stretch relative leading-[160%]">
                Amet morbi enim sodales quis dui, in habitant pharetra. Risus id
                fringilla sed adipiscing volutpat sit varius turpis. Sed pretium
                semper rhoncus, tellus semper.
              </div>
              <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-[#467a7e]">
                <Image
                  className="h-16 w-16 rounded-num-100 object-cover"
                  width={64}
                  height={64}
                  sizes="100vw"
                  alt="" src="/assets/images/aboutus/Hellena-thumb.png"
                />
                <div className="flex-1 flex flex-col items-start">
                  <b className="self-stretch relative leading-[160%]">
                    Ralph Edwards
                  </b>
                  <div className="self-stretch relative text-[16px] leading-[140%] text-lightslategray">
                    Product Designer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 shadow-[0px_9px_53.7px_rgba(0,_0,_0,_0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
              <div className="self-stretch relative leading-[160%]">
                Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis
                amet enim. Sit purus venenatis velit semper lectus sed ornare
                quam nulla. Lacus, ut congue sagittis vel nisi integer imperdiet
                a vitae.
              </div>
              <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-[#467a7e]">
                <Image
                  className="h-16 w-16 rounded-num-100 object-cover"
                  width={64}
                  height={64}
                  sizes="100vw"
                  alt="" src="/assets/images/aboutus/Hellena-thumb.png"
                />
                <div className="flex-1 flex flex-col items-start">
                  <b className="self-stretch relative leading-[160%]">
                    Hellena John
                  </b>
                  <div className="self-stretch relative text-[16px] leading-[140%] text-lightslategray">
                    Co-founder
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 shadow-[0px_9px_53.7px_rgba(0,_0,_0,_0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
              <div className="self-stretch relative leading-[160%]">
                A eget sed posuere dui risus habitasse mauris. Venenatis aliquet
                id ultrices a lacus. Pretium vehicula pretium posuere justo sed
                lorem cursus.
              </div>
              <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-[#467a7e]">
                <Image
                  className="h-16 w-16 rounded-num-100 object-cover"
                  width={64}
                  height={64}
                  sizes="100vw"
                  alt="" src="/assets/images/aboutus/david-thumb.png"
                />
                <div className="flex-1 flex flex-col items-start">
                  <b className="self-stretch relative leading-[160%]">
                    David Oshodi
                  </b>
                  <div className="self-stretch relative text-[16px] leading-[140%] text-lightslategray">
                    Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 shadow-[0px_9px_53.7px_rgba(0,_0,_0,_0.12)] rounded-num-20 bg-mediumturquoise overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
              <div className="self-stretch relative leading-[160%]">
                Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis
                amet enim. Sit purus venenatis velit semper lectus sed ornare
                quam nulla. Lacus, ut congue sagittis vel nisi integer imperdiet
                a vitae.
              </div>
              <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18">
                <Image
                  className="h-16 w-16 rounded-num-100 object-cover"
                  width={64}
                  height={64}
                  sizes="100vw"
                  alt="" src="/assets/images/aboutus/Hellena-thumb.png"
                />
                <div className="flex-1 flex flex-col items-start">
                  <b className="self-stretch relative leading-[160%]">
                    Hellena John
                  </b>
                  <div className="self-stretch relative text-[16px] leading-[140%] text-white">
                    Co-founder
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 shadow-[0px_9px_53.7px_rgba(0,_0,_0,_0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
              <div className="self-stretch relative leading-[160%]">
                A eget sed posuere dui risus habitasse mauris. Venenatis aliquet
                id ultrices a lacus. Pretium vehicula pretium posuere justo sed
                lorem cursus.
              </div>
              <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-[#467a7e]">
                <Image
                  className="h-16 w-16 rounded-num-100 object-cover"
                  width={64}
                  height={64}
                  sizes="100vw"
                  alt="" src="/assets/images/aboutus/david-thumb.png"
                />
                <div className="flex-1 flex flex-col items-start">
                  <b className="self-stretch relative leading-[160%]">
                    David Oshodi
                  </b>
                  <div className="self-stretch relative text-[16px] leading-[140%] text-lightslategray">
                    Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 shadow-[0px_9px_53.7px_rgba(0,_0,_0,_0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
              <div className="self-stretch relative leading-[160%]">
                A eget sed posuere dui risus habitasse mauris. Venenatis aliquet
                id ultrices a lacus. Pretium vehicula pretium posuere justo sed
                lorem cursus.
              </div>
              <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-[#467a7e]">
                <Image
                  className="h-16 w-16 rounded-num-100 object-cover"
                  width={64}
                  height={64}
                  sizes="100vw"
                  alt="" src="/assets/images/aboutus/david-thumb.png"
                />
                <div className="flex-1 flex flex-col items-start">
                  <b className="self-stretch relative leading-[160%]">
                    David Oshodi
                  </b>
                  <div className="self-stretch relative text-[16px] leading-[140%] text-lightslategray">
                    Manager
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-96 shadow-[0px_9px_53.7px_rgba(0,_0,_0,_0.12)] rounded-num-20 bg-white overflow-hidden shrink-0 flex flex-col items-start justify-center">
            <div className="self-stretch flex flex-col items-start p-num-32 gap-4">
              <div className="self-stretch relative leading-[160%]">
                Magna egestas aliquet ut integer non. Sed diam enim nibh sit.
                Aliquam laoreet aenean metus nibh eu scelerisque.
              </div>
              <div className="self-stretch flex items-center pt-num-16 px-num-0 pb-num-0 gap-4 text-num-18 text-[#467a7e]">
                <Image
                  className="h-16 w-16 rounded-num-100 object-cover"
                  width={64}
                  height={64}
                  sizes="100vw"
                  alt="" src="/assets/images/aboutus/Hellena-thumb.png"
                />
                <div className="flex-1 flex flex-col items-start">
                  <b className="self-stretch relative leading-[160%]">
                    Charolette Hanlin
                  </b>
                  <div className="self-stretch relative text-[16px] leading-[140%] text-lightslategray">
                    CEO
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default MaskGroup;
 */
