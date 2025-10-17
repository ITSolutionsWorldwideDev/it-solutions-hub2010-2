// components/layout/home/BlogCarouselClient.tsx
"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BlogCard from "./BlogCard";
import type { BlogEntry } from "@/types/blogs";

// export default function BlogCarouselClient({ posts }: { posts: any[] }) {

export default function BlogCarouselClient({ posts, locale, }: { posts: BlogEntry[]; locale: string; }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container xl:max-w-[1200px] md:px-5 mx-auto py-10 relative">
      <div className="flex justify-between items-center mb-6 px-4 pr-5 md:pr-0 md:px-0 relative">
        <div>
          <p className="text-sm uppercase tracking-wider mb-2 text-gray-500">
            Blogs
          </p>
          <h2 className="text-teal-700 text-3xl font-bold">
            Stay Ahead With Insights And Trends
          </h2>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: ".blog-prev-btn",
          nextEl: ".blog-next-btn",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="relative"
      >
        {posts.map((post, index) => (
          <SwiperSlide key={index}>
            <BlogCard post={post} locale={locale} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-16 right-4 flex gap-2 z-40">
        <button
          className={`blog-prev-btn w-10 h-10 flex items-center justify-center rounded-full cursor-pointer 
          ${
            activeIndex === 0
              ? "bg-gray-300 text-white"
              : "bg-teal-500 text-white"
          }`}
        >
          ←
        </button>
        <button
          className={`blog-next-btn w-10 h-10 flex items-center justify-center rounded-full cursor-pointer
          ${
            activeIndex === posts.length - 1
              ? "bg-gray-300 text-white"
              : "bg-teal-500 text-white"
          }`}
        >
          →
        </button>
      </div>
    </div>
  );
}
