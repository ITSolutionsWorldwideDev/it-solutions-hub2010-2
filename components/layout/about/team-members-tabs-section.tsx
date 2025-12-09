// components/layout/about/team-members-tabs-section.tsx
"use client";
import type { NextPage } from "next";
import { useState } from "react";
import ProfilePgTeamMember from "./profile-page-team-members";

const TeamMembersTabsSection: NextPage = () => {
  const team = [
    {
      name: "Ritban",
      role: "Business Consultant",
      bg_image: "/assets/images/profile/member_bg_red.png",
      image: "/assets/images/profile/avatar.png",
      // /assets/images/profile/team_member_1.png
      bio: "Ritban helps our clients turn complex supply chain, logistics, and e-commerce challenges into smart, actionable solutions. With more than 7 years of experience, including ERP implementations on Oracle Cloud, NetSuite, and Oracle mobile apps, he ensures projects are efficient, user-friendly, and deliver real business impact.",
      bio2: "",
    },

    {
      name: "Tasmia",
      role: "Back-Office Recruiter",
      department: "HR",
      bg_image: "/assets/images/profile/member_bg_yellow.png",
      // image: "/assets/images/profile/team_member_2.png",
      image: "/assets/images/profile/business-women.png",
      bio: "Tasmia supports our international clients with remote back-office recruitment, delivering fast, reliable, and high-quality hiring support. She’s known for her innovative approach, strong candidate screening skills, and commitment to keeping operations running smoothly.",
      bio2: "",
    },
    {
      name: "Mutahar",
      role: "UI/UX & Art Director",
      department: "Designer",
      bg_image: "/assets/images/profile/member_bg_red.png",
      // image: "/assets/images/profile/team_member_8.png",
      image: "/assets/images/profile/avatar.png",
      bio: "Mutahar Ali Khan is a UI/UX & Art Director with more than 5 years of experience in the creative industry, blending design innovation, strategic thinking, and leadership to craft user-centered digital products. Skilled in branding, visual design, motion graphics, and UX strategy, he leads multidisciplinary teams to align design outcomes with business goals.",
      bio2: "Mutahar has guided digital transformations across AI, Blockchain, NFTs, and immersive technologies, ensuring creativity and usability are central to every project. His work focuses on creating visually compelling, impactful experiences that drive engagement and business success.",
    },
    {
      name: "Cheila",
      role: "Junior Supply Chain Consultant",
      department: "Supply Chain",
      bg_image: "/assets/images/profile/member_bg_blue.png",
      // image: "/assets/images/profile/team_member_5.png",
      image: "/assets/images/profile/business-women.png",
      bio: "Cheila is an ambitious supply chain consultant passionate about innovation, lean management, and continuous improvement. Focused on delivering sustainable growth and enhancing team performance, she helps clients achieve smarter, more efficient, and high-quality results.",
      bio2: "",
    },
    {
      name: "Jenny",
      role: "Finance ERP consultant",
      department: "IT Specialist",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      // image: "/assets/images/profile/team_member_4.png",
      image: "/assets/images/profile/business-women.png",
      bio: "Jenny helps clients streamline financial operations and get the most from their ERP systems. With expertise in Oracle, NetSuite, and Odoo, she delivers smart, efficient, and scalable solutions that drive business growth.",
      bio2: "",
    },
    {
      name: "Rob",
      role: "Sales & Business Developer",
      department: "Supply Chain",
      bg_image: "/assets/images/profile/member_bg_blue.png",
      // image: "/assets/images/profile/team_member_4.png",
      image: "/assets/images/profile/avatar.png",
      bio: "Rob drives growth by connecting clients with the right solutions. With a knack for building relationships and spotting opportunities, he helps businesses scale and succeed.",
      bio2: "",
    },
    {
      name: "Hareesh",
      role: "IT Application Manager",
      department: "IT Manager",
      bg_image: "/assets/images/profile/member_bg_green.png",
      // image: "/assets/images/profile/team_member_4.png",
      image: "/assets/images/profile/avatar.png",
      bio: "Hareesh is a technology-driven professional with more than 14 years of experience leading digital transformation across Oil & Gas, Construction, Retail, and Hospitality. Passionate about innovation, he leverages his expertise to implement IT solutions that streamline operations, boost efficiency, and create real impact for organizations.",
      bio2: "",
    },
    {
      name: "Ammar",
      role: "PPC specialist",
      department: "IT Specialist",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      // image: "/assets/images/profile/team_member_4.png",
      image: "/assets/images/profile/avatar.png",
      bio: "Ammar Ahmed is an AI-Empowered Full-Stack Marketing Specialist with over 5+ years of proven experience dedicated to driving high-velocity growth and ensuring 100% client satisfaction to scale ITSolutions globally. He achieves this by unifying organic authority and paid acquisition channels (Meta, Google, LinkedIn, TikTok, Snapchat) through technical mastery of MarTech Automation—expertly implementing Go High Level (GHL) ,N8N to engineer complex sales funnels and accelerate MQL-to-SQL conversion—and Data & AI Integration, utilizing Python for strategic Data Scraping and leveraging LLMs/Generative AI for continuous optimization.",
      bio2: "His approach is grounded in Complete Analytics, providing comprehensive ROI measurement and business optimization  through Seo strategies  & Google Analytics (GA4), Zoho Analytics, and HubSpot Analytics.",
    },
    {
      name: "Haris",
      role: "Data Entry Specialist",
      department: "IT Specialist",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      // image: "/assets/images/profile/team_member_4.png",
      image: "/assets/images/profile/avatar.png",
      bio: "Haris is a dedicated data entry specialist committed to accuracy, efficiency, and perfection. With a keen eye for detail, he ensures data is meticulously organized and error-free, supporting smooth operations and informed decision-making for clients.",
      bio2: "",
    },
    {
      name: "Priyanka",
      role: "Data Analyst",
      department: "IT Specialist",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      // image: "/assets/images/profile/team_member_4.png",
      image: "/assets/images/profile/business-women.png",
      bio: "Priyanka brings positivity and energy to every project and client interaction. She combines her expertise in Oracle Fusion SCM modules, Glovia ERP, and BI analytics tools like Power BI, Tableau, and Excel to turn complex data into actionable insights. Skilled in SQL, PLSQL, Shell scripting, and cloud platforms such as AWS and Azure, she ensures data is accurate, reliable, and ready to support informed business decisions.",
      bio2: "With hands-on experience in Agile Scrum and Waterfall methodologies, and tools like SQL Developer, SQL*Plus, Putty, TFS, JIRA, and BMC Remedy, Priyanka seamlessly bridges technical execution with client needs. Focused on delivering exceptional customer satisfaction, she ensures every analysis and interaction is smooth, supportive, and impactful.",
    },
    {
      name: "Usama",
      role: "Machine Learning Engineer",
      department: "IT Specialist",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      // image: "/assets/images/profile/team_member_4.png",
      image: "/assets/images/profile/avatar.png",
      bio: "Usama is a dynamic Machine Learning Engineer with six years of experience turning complex data into actionable business insights. Skilled in Python programming, machine learning, AI, and advanced data visualization, he specializes in transforming raw data into strategies that drive innovation and growth.",
      bio2: "With a proven track record of managing end-to-end analytical projects, Usama collaborates cross-functionally to optimize processes, enhance efficiency, and unlock new revenue streams. His expertise in applying cutting-edge technologies helps organizations make data-driven decisions and shape long-term strategic direction.",
    },
    {
      name: "Nisar",
      role: "Digital Marketer",
      department: "IT Specialist",
      bg_image: "/assets/images/profile/member_bg_purple.png",
      // image: "/assets/images/profile/team_member_4.png",
      image: "/assets/images/profile/avatar.png",
      bio: "",
      bio2: "",
    },
  ];

  const tabs = [
    "All",
    "Designer",
    "IT Specialist",
    "HR",
    "IT Manager",
    "Supply Chain",
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredTeam =
    activeTab === "All"
      ? team
      : team.filter((member) => member.department === activeTab);

  return (
    <div className="w-full relative text-[84px] text-black font-lexend">
      <div className="">
        <div className="text-black text-center font-lexend text-[70.918px] font-normal leading-normal">
          Meet the Minds Behind the Momentum
        </div>
      </div>

      <div className="mt-10 md:flex justify-center">
        <div className="md:flex gap-6 pb-2 border rounded-full px-6 py-3 shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-1 px-4 text-lg font-semibold transition-all w-1/2 cursor-pointer
          ${
            activeTab === tab
              ? "text-[#467a7e] border-b-2 border-[#467a7e]"
              : "text-gray-500 hover:text-black"
          }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ------------------ TEAM LIST ------------------ */}
      <section className="flex flex-wrap gap-6 justify-center py-12">
        {filteredTeam.length > 0 ? (
          filteredTeam.map((member) => (
            <ProfilePgTeamMember key={member.name} {...member} />
          ))
        ) : (
          <p className="text-center text-gray-500">No team members found.</p>
        )}
      </section>
    </div>
  );
};

export default TeamMembersTabsSection;
