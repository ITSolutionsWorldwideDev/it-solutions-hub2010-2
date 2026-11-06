// app/[locale]/about-us/page.tsx
import dynamic from "next/dynamic";
import initServerI18n from "@/utils/serverTranslation";
import BannerSectionAboutUs from "@/components/layout/about/banner-section";

// Above-the-fold component keep static for fast LCP
import Group9319 from "@/components/layout/about/group-9319";

// Below-the-fold components dynamically imported to save main-thread execution
const WhyUsSection = dynamic(() => import("@/components/layout/about/why-us-section"));
const OurMission = dynamic(() => import("@/components/layout/about/our-mission"));
const VisionSection = dynamic(() => import("@/components/layout/vision-section"));
const OurValuesSection = dynamic(() => import("@/components/layout/about/our-values-section"));
const CreativeTeamSection = dynamic(() => import("@/components/layout/about/creative-team-section"));
const AboutUsProcessFlow = dynamic(() => import("@/components/layout/aboutus-process-flow"));
const MaskGroup = dynamic(() => import("@/components/layout/about/mask-group"));
const FAQSection = dynamic(() => import("@/components/layout/FAQ-section"));
const GetInTouchSection = dynamic(() => import("@/components/layout/about/get-in-touch-section"));

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const expertise = [
    {
      icon: "/assets/images/aboutus4.webp",
      title: t("aboutus.expertise_heading_1"),
      description: t("aboutus.expertise_text_1"),
    },
    {
      icon: "/assets/images/aboutus5.webp",
      title: t("aboutus.expertise_heading_2"),
      description: t("aboutus.expertise_text_2"),
    },
    {
      icon: "/assets/images/aboutus6.webp",
      title: t("aboutus.expertise_heading_3"),
      description: t("aboutus.expertise_text_3"),
    },
    {
      icon: "/assets/images/aboutus7.webp",
      title: t("aboutus.expertise_heading_4"),
      description: t("aboutus.expertise_text_4"),
    },
  ];

  const faqData = {
    title: t("aboutus.faq_title"),
    description: t("aboutus.faq_desc"),
    faqs: [
      { question: t("aboutus.question1"), answer: t("aboutus.answer1") },
      { question: t("aboutus.question2"), answer: t("aboutus.answer2") },
      { question: t("aboutus.question3"), answer: t("aboutus.answer3") },
      { question: t("aboutus.question4"), answer: t("aboutus.answer4") },
      { question: t("aboutus.question5"), answer: t("aboutus.answer5") },
      { question: t("aboutus.question6"), answer: t("aboutus.answer6") },
    ],
    helpCenterLink: "/contact-us",
    privacyPolicyLink: "/privacy-policy",
  };

  const slides = [
    {
      backgroundImage: "/assets/images/aboutus/about-us-banner.webp",
      backgroundMainImage: "",
      heading: t("aboutus.banner_heading"),
      text: t("aboutus.banner_text"),
      button: t("aboutus.contactheading"),
      button2: "",
      textcolor: "#0000",
    },
  ];

  const vision = {
    heading: t("aboutus.our_vision_heading"),
    text: t("aboutus.our_vision_text"),
    imageUrl:
      "/assets/images/aboutus/d-0035-a-757-d-44406901-c-3-a-6-f-1-c-10-c-1-f-1-copy-1.webp",
    leftColor: "#278083",
    rightColor: "#000",
  };

  const processFlow = {
    steps: expertise,
    circleColor: "#467a7e",
    lineColor: "#467a7e",
    textColor: "#000",
    heading: t("aboutus.process_flow_heading"),
    subheading: "",
  };

  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <BannerSectionAboutUs slides={slides} />
        <Group9319 />
        <WhyUsSection locale={locale} />
        <OurMission locale={locale} />
        <VisionSection {...vision} />
        <OurValuesSection locale={locale} />
        <CreativeTeamSection locale={locale} />
        <AboutUsProcessFlow {...processFlow} />
        <MaskGroup />
        <FAQSection {...faqData} />
        <GetInTouchSection />
      </div>
    </>
  );
}