// app/[locale]/about-us/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import BannerSection from "@/components/layout/banner-section";
// import { type LocalePageProps } from "@/types/next";
import ImageSection from "@/components/layout/image-section";
import ImageSectionBgBlue from "@/components/layout/image-section-bg-blue";
import FAQSection from "@/components/layout/FAQ-section";
import GetInTouchSection from "@/components/layout/get-in-touch-section";
import MissionVisionSection from "@/components/layout/our-mission-section";

// interface AboutUsPageProps {
//   params: { locale: string };
// }

/* export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return {
    title: t("aboutus.heading_1"),
    description: t("aboutus.text_1"),
  };
} */

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/aboutus.png",
      heading: t("aboutus.heading_1"),
      text: t("aboutus.text_1"),
    },
  ];

  const imagetext = t("aboutus.text_2");

  const imagetext2 = (
    <>
      <h3 className="font-bold">What Drives Us</h3>
      Our core values reflect everything that is important to us; committing to
      our clients with the best of our IT solution services, enhancing work
      operations to increase efficiency, and developing good relationships with
      the clients, partners, and stakeholders. We are dedicated to embracing
      innovation by adapting to modern technology, developing efficient
      solutions, and delivering effective results. We believe in collaboration
      with our team and clients by developing strong partnerships and customized
      solution services. We uphold our standard of integrity by providing
      excellence in the services we provide to produce effective and the best
      results. We believe in establishing a transparent communication channel
      with our clients to
    </>
  );

  const points = [
    {
      title: "Supply Chain Services",
      icon: "/assets/images/aboutus4.png",
    },
    { title: "IT and Cloud Solutions", icon: "/assets/images/aboutus5.png" },
    {
      title: "Digital Marketing & E-commerce",
      icon: "/assets/images/aboutus6.png",
    },
    { title: "Staffing and Support", icon: "/assets/images/aboutus7.png" },
  ];

  const faqData = {
    title: "Frequently asked questions",
    description: "Feel free to make a call to our customer support helpline.",
    faqs: [
      {
        question: " What does your company do?",
        answer:
          "We provide various services, including Supply Chain Management, CRM, ERP, Logistics, IT Support, and Cloud Services. We aim to help businesses improve efficiency, increase growth, and achieve long-term success with customized solutions and expert guidance.",
      },
      {
        question: "What industries do you serve?",
        answer:
          "We work with businesses in various industries, including healthcare, manufacturing, supply chain management, technology, logistics, and finance.",
      },
      {
        question: "How can I get in touch with you?",
        answer:
          "You can email us at  info@itsolutionshub2010.com or call us at +31 10 766 0786. We are always ready to assist you!",
      },
      {
        question: "Do you offer ongoing support after service delivery?",
        answer:
          "Yes, we offer regular, ongoing support after a project's completion and delivery to ensure seamless work operations and long-term success.",
      },
      {
        question: "Do you provide consultations before starting a project?",
        answer:
          "Absolutely! We offer consultations to analyze and understand your requirements, goals, and challenges so we can provide you with the best solutions.",
      },
      {
        question: "How can I learn more about your services?",
        answer:
          "To explore more about our services, please visit our website https://itsolutionshub2010.com/ or feel free to contact us directly for more detailed information.",
      },
      // Add more FAQs as needed
    ],
    helpCenterLink: "/Contact-Us",
    privacyPolicyLink: "",
  };

  return (
    <>
      <BannerSection slides={slides} />

      <ImageSection
        heading={t("aboutus.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/aboutus2.png"
      />
      <MissionVisionSection />
      <ImageSection
        heading="Our Core Values"
        text={imagetext2}
        imageUrl="/assets/images/aboutus3.png"
      />

      <ImageSectionBgBlue
        title="Our Expertise"
        points={points}
        image="/assets/images/aboutus8.png"
      />
      <FAQSection {...faqData} />

      <GetInTouchSection
        locale={locale}
        socialLinks={{
          facebook: "https://www.facebook.com/people/It-Solutions-Hub-2010-PVT-Ltd/100095307775094/?mibextid=kFxxJD",
          twitter: "https://x.com/ITSolution2010",
          instagram: "https://www.instagram.com/itsolutionshub2010/?hl=en",
          linkedin: "https://www.linkedin.com/company/it-solutions-hub-2010/",
        }}
      />
    </>
  );
}
