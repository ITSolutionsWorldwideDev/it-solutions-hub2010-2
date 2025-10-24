"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  clientLogos,
  logosSlider,
  howWeWork,
  industriesData,
} from "@/lib/commonData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";

import dynamic from "next/dynamic";

gsap.registerPlugin(ScrollTrigger);

// Props type for SlotDigit
interface SlotDigitProps {
  finalDigit: number;
  direction: "up" | "down";
  duration?: number;
  digitHeight?: number;
  startAnimation: boolean;
}

// Props type for AnimatedNumber
interface AnimatedNumberProps {
  value: number;
  duration?: number;
  digitHeight?: number;
  startAnimation: boolean;
}

// ✅ Dynamically import World (Globe wrapper) without SSR
const World = dynamic(
  () => import("@/components/ui/globe").then((mod) => mod.World),
  {
    ssr: false,
    loading: () => <div>Loading Globe...</div>,
  }
);

const SlotDigit: React.FC<SlotDigitProps> = ({
  finalDigit,
  direction,
  duration = 2000,
  digitHeight = 60,
  startAnimation,
}) => {
  const numbers =
    direction === "up"
      ? [...Array(10).keys(), finalDigit]
      : [...Array(10).keys()].reverse().concat(finalDigit);

  const finalOffset =
    (numbers.length - 1) * digitHeight * (direction === "up" ? -1 : 1);
  // const innerRef = useRef(null);

  const innerRef = useRef<HTMLDivElement | null>(null); // ✅ typed ref

  useEffect(() => {
    if (startAnimation) {
      const timeoutId = setTimeout(() => {
        if (innerRef.current) {
          innerRef.current.style.transform = `translateY(${finalOffset}px)`;
          innerRef.current.style.transition = `transform ${duration}ms ease-out`;
        }
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [finalOffset, duration, startAnimation]);

  return (
    <div
      style={{
        height: `${digitHeight}px`,
        overflow: "hidden",
        display: "flex",
        alignItems: direction === "down" ? "flex-end" : "flex-start",
      }}
    >
      <div ref={innerRef}>
        {numbers.map((num, index) => (
          <div
            key={index}
            style={{
              height: `${digitHeight}px`,
              lineHeight: `${digitHeight}px`,
              textAlign: "center",
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  duration = 2000,
  digitHeight = 60,
  startAnimation,
}) => {
  const strValue = value.toString().padStart(2, "0");

  return (
    <span className="inline-flex lg:text-7xl md:text-5xl text-[50px]">
      {Array.from(strValue).map((char, index) => {
        const digit = parseInt(char, 10);
        const direction = index === 0 ? "up" : "down";
        return (
          <SlotDigit
            key={index}
            finalDigit={digit}
            direction={direction}
            duration={duration}
            digitHeight={digitHeight}
            startAnimation={startAnimation}
          />
        );
      })}
    </span>
  );
};

const DottedLine = () => {
  return (
    <svg
      className="flex-shrink-0 w-28 h-6 sm:w-36 sm:h-6 md:w-28 md:h-8 lg:w-32 lg:h-8"
      viewBox="0 0 200 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="5" fill="#18B0A8" />
      <line
        x1="20"
        y1="10"
        x2="180"
        y2="10"
        stroke="#DDF4F5"
        strokeWidth="3"
        strokeDasharray="6 6"
      />
      <circle cx="190" cy="10" r="5" fill="#16666F" />
    </svg>
  );
};

export function LogosSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      {/* Logos Section */}
      <div className="relative overflow-hidden py-8 whitespace-nowrap">
        {/* Left Gradient Overlay */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full z-10 bg-gradient-to-r from-[white] via-transparent to-transparent"></div>

        {/* Sliding Logos */}
        <div className="inline-block animate-slide">
          {clientLogos.concat(clientLogos).map(({ src, alt }, index) => (
            <img
              key={index}
              src={src}
              alt={alt}
              className="h-16 md:h-20 mx-4 md:mx-6 inline-block"
            />
          ))}
        </div>

        {/* Right Gradient Overlay */}
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full z-10 bg-gradient-to-l from-[white] via-transparent to-transparent"></div>
      </div>
    </div>
  );
}

export function ClientLogosSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <div className="relative overflow-hidden py-8 whitespace-nowrap">
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full z-10 bg-gradient-to-r from-white via-transparent to-transparent" />
        <div className="inline-block animate-slide">
          {logosSlider.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`logo-${index}`}
              className="h-14 md:h-20 mx-4 md:mx-6 inline-block transition-transform duration-300 ease-in-out hover:scale-110 hover:drop-shadow-lg"
            />
          ))}
        </div>

        <div className="absolute top-0 right-0 w-16 md:w-32 h-full z-10 bg-gradient-to-l from-white via-transparent to-transparent" />
      </div>
    </div>
  );
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false); // default to false

  useEffect(() => {
    if (typeof window === "undefined") return; // SSR guard

    const media = window.matchMedia(query);
    setMatches(media.matches); // initial value

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function AnimatedList() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const isTabletOrMobile = useMediaQuery("(max-width: 768px)");

  useGSAP(() => {
    if (!isTabletOrMobile) {
      const itemElements = gsap.utils.toArray(".process-list-item");

      gsap.fromTo(
        itemElements,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.5,
          scrollTrigger: {
            trigger: listRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom center",
        // pin: true,
      });
    }
  }, [isTabletOrMobile]);

  if (isTabletOrMobile) {
    // Render simplified version for tablet or mobile
    return (
      <div className="flex flex-col items-center space-y-0 px-4 pt-0">
        <div
          className="w-[180px] aspect-square flex items-center justify-center font-bold text-white rounded-full shadow-lg"
          style={{ background: "#175864" }}
        >
          <h2 className="w-[58%] text-center text-[clamp(1rem,4vw,2.5rem)]">
            HOW WE WORK?
          </h2>
        </div>
        <div className="w-[320px] lg:w-[569px] md:w-[470px] aspect-square flex items-center justify-center font-normal rounded-full bg-[#29A1B626]">
          <p className="w-[45%] text-center text-[clamp(0.75rem,1.5vw,1.2rem)] leading-tight">
            We start with a quick, free analysis of your architecture, applying
            a pragmatic approach to identify gaps.
            <br />
            <br />
            We propose advanced business models to enhance efficiency,
            scalability, and overall performance.
          </p>
        </div>
        <div className="flex flex-col space-y-6 items-center w-full">
          {howWeWork.map((item, index) => (
            <div
              key={index}
              className="flex flex-col text-2xl font-bold items-center"
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <span className="mt-2 text-[clamp(1rem,2vw,1.5rem)] text-center leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Render animated version for larger screens
  return (
    <div
      className="h-screen flex flex-col items-center space-y-8 md:space-y-0 md:flex-row md:items-start"
      ref={sectionRef}
    >
      <section className="relative flex flex-col items-center md:flex-row md:justify-center lg:-space-x-16 md:-space-x-28 px-4 pt-20">
        <div
          className="w-[280px] lg:w-[345px] aspect-square flex items-center justify-center font-bold text-white rounded-full shadow-lg"
          style={{ background: "#175864" }}
        >
          <h2 className="w-[58%] text-center text-[clamp(1rem,4vw,2.5rem)]">
            HOW WE WORK?
          </h2>
        </div>
        <div className="w-[320px] md:w-[470px] lg:w-[569px] aspect-square flex items-center justify-center font-normal rounded-full bg-[#29A1B626]">
          <p className="w-[45%] text-center text-[clamp(0.75rem,1.5vw,1.2rem)] leading-tight">
            We start with a quick, free analysis of your architecture, applying
            a pragmatic approach to identify gaps.
            <br />
            <br />
            We propose advanced business models to enhance efficiency,
            scalability, and overall performance.
          </p>
        </div>
        <div
          ref={listRef}
          className="flex flex-col items-center md:items-start w-full md:w-auto "
        >
          {howWeWork.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row process-list-item text-2xl font-bold opacity-20 items-center ${item.styles.largeScreens}`}
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
              />
              <DottedLine />
              <span className="ml-2 text-[clamp(1rem,2vw,1.5rem)] text-center md:text-left leading-tight">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function FunFacts() {
  const [startAnimation, setStartAnimation] = useState(false);
  const funFactsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.5, // Adjust this value as needed
      }
    );

    if (funFactsRef.current) {
      observer.observe(funFactsRef.current);
    }

    return () => {
      if (funFactsRef.current) {
        observer.unobserve(funFactsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={funFactsRef}
      className="min-h-[250px] container xl:max-w-[1200px]"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="flex flex-col sm:flex-row w-full justify-between text-white"
        // style={{
        //   gap: '16px', // Add spacing between items for vertical stacking
        // }}
      >
        <div className="flex-1 text-center p-4">
          <h2 className="md:text-3xl text-xl mb-2 font-bold">
            <AnimatedNumber
              value={8}
              duration={2000}
              digitHeight={60}
              startAnimation={startAnimation}
            />
            +
          </h2>
          <p className="text-lg md:text-base sm:text-sm mb-2">
            Years Serving Globally
          </p>
        </div>
        <div className="flex-1 text-center p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
          <h2 className="md:text-3xl text-xl mb-2 font-bold">
            <AnimatedNumber
              value={98}
              duration={2000}
              digitHeight={60}
              startAnimation={startAnimation}
            />
            %
          </h2>
          <p className="text-lg md:text-base sm:text-sm mb-2">
            Customer Satisfaction
          </p>
        </div>
        <div className="flex-1 text-center p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
          <h2 className="md:text-3xl text-xl mb-2 font-bold">
            <AnimatedNumber
              value={90}
              duration={2000}
              digitHeight={60}
              startAnimation={startAnimation}
            />
            +
          </h2>
          <p className="text-lg md:text-base sm:text-sm mb-2">
            Projects Completed
          </p>
        </div>
        <div className="flex-1 text-center p-4 border-t sm:border-t-0 sm:border-l border-gray-300">
          <h2 className="md:text-3xl text-xl mb-2 font-bold">
            <AnimatedNumber
              value={20}
              duration={2000}
              digitHeight={60}
              startAnimation={startAnimation}
            />
            +
          </h2>
          <p className="text-lg md:text-base sm:text-sm mb-2">
            Countries We Serve
          </p>
        </div>
      </div>
    </div>
  );
}

/* export function PinnedProgressSection() {
  const containerRef = useRef(null);
  // const slideRefs = useRef([]);
  // const dotRefs = useRef([]);
  // const svgRef = useRef(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const totalSlides = industriesData.length;
      const totalScrollDuration = 4000;
      const isTabletOrSmaller = window.matchMedia("(max-width: 768px)").matches;

      // 1) Set up the slide timeline with snapping and custom SVG dot onUpdate
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScrollDuration}`,
          pin: true,
          scrub: 1,
          snap: {
            snapTo: "labels",
            duration: { min: 0.2 },
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const currentIndex = Math.floor(self.progress * totalSlides);
            dotRefs.current.forEach((dot, i) => {
              if (i <= currentIndex) {
                // filled circles for past slides
                gsap.to(dot, { opacity: 1, attr: { r: 6 }, duration: 0.3 });
                gsap.set(dot, { stroke: "none", fill: "#0FB6AE" });
              } else if (i === currentIndex + 1) {
                // highlighted double-circle for upcoming slide
                gsap.to(dot, { opacity: 1, attr: { r: 8 }, duration: 0.3 });
                gsap.set(dot, {
                  stroke: "#0FB6AE",
                  strokeWidth: 2,
                  fill: "none",
                });
              } else {
                // hide all later dots
                gsap.to(dot, { opacity: 0, duration: 0.3 });
              }
            });
          },
        },
      });

      // 2) Build slide-in / slide-out animations, labeling each
      industriesData.forEach((slide, i) => {
        const slideEl = slideRefs.current[i];
        if (!slideEl) return;
        const imageEl = slideEl.querySelector(".image-container");
        const textEl = slideEl.querySelector(".text-container");
        const dotEl = dotRefs.current[i];
        const label = `slide-${i}`;

        tl.addLabel(label);

        if (i === 0) {
          gsap.set(imageEl, { x: 0, opacity: 1 });
          gsap.set(textEl, { x: isTabletOrSmaller ? 10 : 100, opacity: 1 });
        } else {
          tl.fromTo(
            imageEl,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            label
          );
          tl.fromTo(
            textEl,
            { x: 200, opacity: 0 },
            {
              x: isTabletOrSmaller ? 10 : 100,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            label
          );
        }

        if (i < totalSlides - 1) {
          const nextLabel = `slide-${i + 1}`;
          tl.to(
            imageEl,
            { x: -100, opacity: 0, duration: 0.5, ease: "power2.in" },
            `${nextLabel}-=0.2`
          );
          tl.to(
            textEl,
            {
              x: isTabletOrSmaller ? 10 : 100,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            },
            `${nextLabel}-=0.2`
          );
          tl.to(
            dotEl,
            {
              backgroundColor: "#cbd5e1",
              scale: 1,
              boxShadow: "none",
              duration: 0.5,
            },
            `${nextLabel}-=0.2`
          );
        }
      });

      // 3) Custom SVG path drawing & dot placement
      if (!svgRef.current) return;

      const svgPath = svgRef.current.querySelector("path");
      if (!svgPath) return;

      const pathLength = svgPath.getTotalLength();

      gsap.set(svgPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(svgPath, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScrollDuration}`,
          scrub: 1,
        },
        ease: "none",
      });

      // position each dot along the custom SVG path
      const spacing = pathLength / industriesData.length;
      dotRefs.current.forEach((dot, i) => {
        const pt = svgPath.getPointAtLength(i * spacing);
        gsap.set(dot, { cx: pt.x, cy: pt.y, opacity: 0 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [industriesData]);

  return (
    <section
      ref={containerRef}
      className="w-[95%] relative h-screen overflow-hidden bg-white"
    >
      
      {industriesData.map((slide, i) => (
        <div
          key={slide.id}
          ref={(el: HTMLDivElement | null) => {
            slideRefs.current[i] = el;
          }}
          className="absolute inset-0 flex flex-wrap md:flex-nowrap items-center justify-between"
        >
          <div className="image-container w-full md:w-1/2 h-2/5 md:h-full flex items-center justify-center z-10">
            <img
              src={slide.image}
              alt={slide.industry}
              className="w-full h-[90%] rounded object-cover"
            />
          </div>
          <div className="text-container w-full md:w-1/2 md:h-full flex flex-col items-start justify-center p-3 md:p-12 md:pl-5 lg:pl-20 xl:pl-40">
            <h2 className="text-xl md:text-3xl 2xl:text-5xl font-bold mb-4">
              {slide.heading}
            </h2>
            <p className="mb-4 2xl:text-2xl">
              <strong className="text-teal-500">{slide.number}</strong>{" "}
              {slide.industry}
            </p>
            <p className="mb-10 lg:w-[30vw] 2xl:text-2xl">{slide.content}</p>


          </div>
        </div>
      ))}


      <div
        className="
    pointer-events-none
    absolute z-0 hidden lg:block

  
    lg:left-[65%] lg:top-[50%]
    lg:w-300 lg:h-300


    xl:left-[65.5%]
    xl:w-[448px] xl:h-[465px]

    2xl:left-[60%]


    transform -translate-x-1/2 -translate-y-1/2
  "
      >
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 448 475"
          fill="none"
        >
          <path
            d="M2,2 A230,230 0 0 1 2,462"
            stroke="#0FB6AE"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {industriesData.map((_, i) => (
            <circle
              key={i}
              r="6"
              fill="#0FB6AE"
              ref={(el: SVGCircleElement | null) => {
                dotRefs.current[i] = el;
              }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
} */

export function PinnedProgressSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(SVGCircleElement | null)[]>([]);
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const totalSlides = industriesData.length;
      const totalScrollDuration = 4000;
      const isTabletOrSmaller = window.matchMedia("(max-width: 768px)").matches;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${totalScrollDuration}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          snap: {
            snapTo: "labels",
            duration: { min: 0.2 },
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const currentIndex = Math.floor(self.progress * totalSlides);
            dotRefs.current.forEach((dot, i) => {
              if (!dot) return;
              if (i <= currentIndex) {
                gsap.to(dot, { opacity: 1, attr: { r: 6 }, duration: 0.3 });
                gsap.set(dot, { stroke: "none", fill: "#0FB6AE" });
              } else if (i === currentIndex + 1) {
                gsap.to(dot, { opacity: 1, attr: { r: 8 }, duration: 0.3 });
                gsap.set(dot, {
                  stroke: "#0FB6AE",
                  strokeWidth: 2,
                  fill: "none",
                });
              } else {
                gsap.to(dot, { opacity: 0, duration: 0.3 });
              }
            });
          },
        },
      });

      industriesData.forEach((slide, i) => {
        const slideEl = slideRefs.current[i];
        if (!slideEl) return;
        const imageEl = slideEl.querySelector(".image-container");
        const textEl = slideEl.querySelector(".text-container");
        const dotEl = dotRefs.current[i];
        const label = `slide-${i}`;

        tl.addLabel(label);

        if (i === 0) {
          gsap.set(imageEl, { x: 0, opacity: 1 });
          gsap.set(textEl, {
            x: isTabletOrSmaller ? 10 : 100,
            opacity: 1,
          });
        } else {
          tl.fromTo(
            imageEl,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            label
          );
          tl.fromTo(
            textEl,
            { x: 200, opacity: 0 },
            {
              x: isTabletOrSmaller ? 10 : 100,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
            },
            label
          );
        }

        if (i < totalSlides - 1) {
          const nextLabel = `slide-${i + 1}`;
          tl.to(
            imageEl,
            { x: -100, opacity: 0, duration: 0.5, ease: "power2.in" },
            `${nextLabel}-=0.2`
          );
          tl.to(
            textEl,
            {
              x: isTabletOrSmaller ? 10 : 100,
              opacity: 0,
              duration: 0.5,
              ease: "power2.in",
            },
            `${nextLabel}-=0.2`
          );
          tl.to(
            dotEl,
            {
              backgroundColor: "#cbd5e1",
              scale: 1,
              boxShadow: "none",
              duration: 0.5,
            },
            `${nextLabel}-=0.2`
          );
        }
      });

      if (!svgRef.current) return;
      const svgPath = svgRef.current.querySelector("path");
      if (!svgPath) return;
      const pathLength = svgPath.getTotalLength();

      gsap.set(svgPath, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(svgPath, {
        strokeDashoffset: 0,
        scrollTrigger: {
          trigger: containerRef.current!,
          start: "top top",
          end: `+=${totalScrollDuration}`,
          scrub: 1,
        },
        ease: "none",
      });

      const spacing = pathLength / industriesData.length;
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const pt = svgPath.getPointAtLength(i * spacing);
        gsap.set(dot, { cx: pt.x, cy: pt.y, opacity: 0 });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-[95%] relative h-screen overflow-hidden bg-white z-10"
    >
      {industriesData.map((slide, i) => (
        <div
          key={slide.id}
          ref={(el) => {
            slideRefs.current[i] = el;
          }}
          className="absolute inset-0 flex items-center justify-between"
        >
          <div className="image-container w-full md:w-1/2 h-2/5 md:h-full flex items-center justify-center z-20">
            <img
              src={slide.image}
              alt={slide.industry}
              className="w-full h-[90%] rounded object-cover"
            />
          </div>
          <div className="text-container w-full md:w-1/2 h-full flex flex-col items-start justify-center p-3 md:p-12 lg:pl-20 xl:pl-40 z-20">
            <h2 className="text-xl md:text-3xl 2xl:text-5xl font-bold mb-4">
              {slide.heading}
            </h2>
            <p className="mb-4 2xl:text-2xl">
              <strong className="text-teal-500">{slide.number}</strong>{" "}
              {slide.industry}
            </p>
            <p className="mb-10 lg:w-[30vw] 2xl:text-2xl">{slide.content}</p>
          </div>
        </div>
      ))}

      <div className="pointer-events-none absolute z-0 hidden lg:block lg:left-[65%] lg:top-[50%] lg:w-[300px] lg:h-[300px] xl:left-[65.5%] xl:w-[448px] xl:h-[465px] 2xl:left-[60%] transform -translate-x-1/2 -translate-y-1/2">
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 448 475"
          fill="none"
        >
          <path
            d="M2,2 A230,230 0 0 1 2,462"
            stroke="#0FB6AE"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {industriesData.map((_, i) => (
            <circle
              key={i}
              r="6"
              fill="#0FB6AE"
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
            />
          ))}
        </svg>
      </div>
    </section>
  );
}

export function AnimatedGlobe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#175864",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#175864",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,1)",
    ambientLight: "#175864",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#14b8a6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center py-20 h-[90vh] md:h-auto bg-[#175864] relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div"
        >
          <h2 className="text-center text-xl md:text-4xl font-bold text-white">
            Delivering Excellence In Your Country
          </h2>
          <p className="text-center text-base md:text-lg font-normal text-neutral-200 max-w-md mt-2 mx-auto">
            Tailored Solutions for Unique Market Needs
          </p>
        </motion.div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent to-[#175864] z-40" />
        <div className="absolute w-full -bottom-1 md:-bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
}
