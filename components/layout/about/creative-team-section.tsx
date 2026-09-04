import React from "react";
import TeamMember from "./TeamMember";
import initServerI18n from "@/utils/serverTranslation";

export default async function CreativeTeamSection({ locale }: { locale: string }) {
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");
  
  const team = [
    {
      name: "Sheetal Devi",
      role: "(co-founder)",
      bg_image: "/assets/images/profile/member_bg_red.png",
      image: "/assets/images/profile/Sheetal_Devi1.png",
      bio: "Sheetal Devi founded the company in 2018 with a clear goal: help businesses work smarter through practical technology and supply-chain solutions.",
      bio2: "What began as a small consultancy has now grown into a two-branch operation in the Netherlands and South Asia, delivering AI-driven systems, digital automation, and operational improvements to clients world wide. With deep experience in logistics, warehousing, and supply-chain optimization, Sheetal leads the company with a focus on efficiency, innovation, and creating solutions that genuinely move businesses forward.",
    },
    {
      name: "Zeb Raja",
      role: "(co-founder)",
      bg_image: "/assets/images/profile/member_bg_blue.png",
      image: "/assets/images/profile/ZEb_Raja1.png",
      bio: "Zeb Raja is the co-founder and Head of Marketing at IT Solutions Hub 2010, responsible for shaping the company's brand, digital presence, and growth strategy. With a background spanning transport, IT, and digital marketing, he combines operational understanding with sharp commercial insight to drive high-impact marketing initiatives.",
      bio2: "Zeb leads the company’s global marketing direction—building strong client relationships, developing data-driven campaigns, and positioning the company as a forward-thinking provider of AI, tech, and outsourcing solutions. His experience across international markets helps the brand connect with diverse audiences and scale effectively.",
    },
  {
  name: "Ahmed",
  role: "HR & Operations Manager",
  department: "HR",
  bg_image: "/assets/images/profile/member_bg_yellow.png",
  image: "/assets/images/profile/Ahmed1.png", 
  bio: "As HR & Operations Manager...",
},

    {
      name: "Amer",
      role: "Senior Full Stack Developer",
      department: "IT",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      image: "/assets/images/profile/amer1.png",
      bio: "Amer is a Senior Full Stack Developer with more than 12 years of experience delivering complex, cloud-based web applications. Specializing in the MEAN stack (MongoDB, Express.js, Angular, Node.js), he builds scalable, high-performance systems using microservices, API-driven architecture, and modern CI/CD pipelines.",
      bio2: "With hands-on expertise in AWS and Azure, Amer designs and deploys reliable solutions that support growth and heavy workloads. He brings solid leadership to development teams, mentors junior engineers, and works efficiently within agile environments to ensure smooth delivery of enterprise-grade projects. Amer is known for his Agile engineering approach, strong problem-solving skills, and consistent track record of achieving outstanding client satisfaction.",
    },
  ];

  return (
    <div className="w-full max-w-7xl relative text-center text-black font-lexend mx-auto my-12 py-3 md:py-4 lg:py-12 px-4 md:px-4 lg:px-5">
      <div className="flex flex-col items-center">
        <div className="text-[32px] md:text-[40px] font-semibold inline-block">
          <span>{t("aboutus.creative_team_heading")}</span>
        </div>
        <div className="text-xl opacity-[0.6] pt-1">{t("aboutus.creative_team_subheading")}</div>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center py-6 w-full">
        {team.map((member) => (
          <div key={member.name} className="flex justify-center w-full">
            <TeamMember {...member} />
          </div>
        ))}
      </section>
    </div>
  );
}