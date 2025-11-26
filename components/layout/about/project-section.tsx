//  components/layout/about/project-section.tsx

"use client";
import Image from "next/image";
import type { NextPage } from "next";

type ProjectSize = "small" | "medium" | "large";

interface Project {
  title: string;
  image: string;
  size: ProjectSize;
}

const projects: Project[] = [
  {
    title: "Creative Portfolio Website",
    image: "/assets/images/profile/portfolio-001.png",
    size: "large",
  },
  {
    title: "Business Dashboard UI",
    image: "/assets/images/profile/portfolio-002.png",
    size: "medium",
  },
  {
    title: "Mobile App Concept",
    image: "/assets/images/profile/portfolio-003.png",
    size: "small",
  },
  {
    title: "SaaS Platform Design",
    image: "/assets/images/profile/portfolio-0004.png",
    size: "medium",
  },
  {
    title: "AI Landing Page",
    image: "/assets/images/profile/portfolio-0004.png",
    size: "large",
  },
];

const sizeClass: Record<ProjectSize, string> = {
  small: "h-[220px]",
  medium: "h-[300px]",
  large: "h-[380px]",
};

const ProjectSection: NextPage = () => {
  return (
    <div className="w-full relative text-[84px] text-black font-lexend">
      <div className="mt-10">
        <div className="text-black text-center font-plusjakartasans text-[34.435px] font-bold leading-normal">
          Explore our recent client success stories and witness our full 360
          transformations come to life
        </div>
      </div>

      {/* MASONRY GRID */}
      <div className="my-10 columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-6 px-6 space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`w-full break-inside-avoid rounded-2xl overflow-hidden group relative ${
              sizeClass[project.size]
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-[#467a7e]/20 backdrop-blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"></div>

            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100%"
                className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Title Overlay */}
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-all z-20">
              {project.title}
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-60 transition-all duration-300 rounded-2xl z-10"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
