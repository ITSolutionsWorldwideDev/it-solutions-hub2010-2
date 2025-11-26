// components/layout/about/tech-stack-section.tsx

"use client";
import type { NextPage } from "next";
import Image from "next/image";

const TechStackSection: NextPage = () => {
  const techStack = [


    { name: "power-bi", icon: "/assets/icons/tech/power-bi.svg" },
    // { name: "FDI", icon: "/assets/icons/tech/g" },
    { name: "MS Fabrics", icon: "/assets/icons/tech/ms_fabric.svg" },
    { name: "Microsoft Dynamics", icon: "/assets/icons/tech/microsoft-dynamics-365.png" },
    { name: "Oracle Cloud", icon: "/assets/icons/tech/oracle-logo.png" },
    { name: "SAP", icon: "/assets/icons/tech/sap.svg" },
    { name: "Odoo", icon: "/assets/icons/tech/odoo_logo.png" },
    { name: "Oracle E-Business Suite", icon: "/assets/icons/tech/oracle-logo.png" },
    { name: "Monday.com", icon: "/assets/icons/tech/monday.com.webp" },
    { name: "Quickbooks", icon: "/assets/icons/tech/quickbooks.png" },
    { name: "Workday", icon: "/assets/icons/tech/workday.svg" },


    { name: "Next.js", icon: "/assets/icons/tech/nextjs.svg" },
    { name: "React", icon: "/assets/icons/tech/react.svg" },
    { name: "TypeScript", icon: "/assets/icons/tech/typescript.svg" },
    { name: "TailwindCSS", icon: "/assets/icons/tech/tailwind.svg" },
    { name: "Node.js", icon: "/assets/icons/tech/nodejs.png" },
    { name: "Figma", icon: "/assets/icons/tech/figma.svg" },
    { name: "MongoDB", icon: "/assets/icons/tech/mongodb.png" },
    { name: "AWS", icon: "/assets/icons/tech/aws.svg" },


    { name: "Adobe", icon: "/assets/icons/tech/adobe.svg" },
    { name: "Adobe Firefly", icon: "/assets/icons/tech/adobefirefly.svg" },
    { name: "AE", icon: "/assets/icons/tech/ae.svg" },
    { name: "Affinity", icon: "/assets/icons/tech/affinity-photo.png" },
    { name: "Affinity Designer.js", icon: "/assets/icons/tech/affinity-designer.png" },
    { name: "Affinity Photo", icon: "/assets/icons/tech/affinityphoto.svg" },
    { name: "Affinity Publisher", icon: "/assets/icons/tech/affinitypublisher.svg" },
    { name: "AI", icon: "/assets/icons/tech/ai.svg" },

    { name: "AI 360", icon: "/assets/icons/tech/ai360.svg" },
    { name: "AI Hub Mix", icon: "/assets/icons/tech/aihubmix.svg" },
    { name: "Analytics", icon: "/assets/icons/tech/analytics.svg" },
    { name: "Android", icon: "/assets/icons/tech/android.png" },
    { name: "Angular", icon: "/assets/icons/tech/angular.svg" },
    { name: "Angular 17", icon: "/assets/icons/tech/angular17.svg" },
    { name: "Anima App", icon: "/assets/icons/tech/animaapp.svg" },
    { name: "ANT D", icon: "/assets/icons/tech/antd.svg" },

    { name: "Ant Group", icon: "/assets/icons/tech/antgroup.svg" },
    { name: "Any Scale", icon: "/assets/icons/tech/anyscale.svg" },
    { name: "Apache", icon: "/assets/icons/tech/apache.svg" },
    { name: "Frame 5", icon: "/assets/icons/tech/Frame 5.svg" },


  ];

  return (
    <div className="w-full relative text-[84px] text-black font-lexend rounded-[49px] bg-[url('/assets/images/profile/tech-stack-bg.png')] bg-cover bg-no-repeat bg-center">
      <div className="text-[var(--Gray-900,#061C3D)] font-lexend text-[50.373px] text-center font-bold leading-[62.967px] tracking-[-1.007px] pt-10">
        Tech Stack
      </div>
      <div className=" my-10  grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-items-center px-6">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group cursor-pointer bg-white p-6 rounded-2xl border hover:border-[#467a7e] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center"
          >
            <div className="relative w-20 h-20 mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 drop-shadow-xl">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                sizes="100%"
                className="object-contain absolute top-[-30px]"
              />
            </div>
            {/* <p className="text-lg font-semibold text-gray-800 group-hover:text-[#467a7e] transition-colors">
              {tech.name}
            </p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
