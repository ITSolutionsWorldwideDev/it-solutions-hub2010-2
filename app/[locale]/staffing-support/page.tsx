// app/[locale]/staffing-support/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import ImageSectionBgBlue from "@/components/layout/image-section-bg-blue";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function StaffingSupport({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/staffingsupport1.png",
      heading: t("staffingsupport.heading_1"),
      text: t("staffingsupport.text_1"),
      button: t("staffingsupport.button_1"),
      textcolor: "#0000",
    },
  ];

  const imagetext = (
    <>
      {t("staffingsupport.text_2")}
      <br />
      <br />
      {t("staffingsupport.text_3")}
    </>
  );

  const cards2 = [
    {
      image: "/assets/images/staffingsupporticon1.png",
      title: t("staffingsupport.card_heading_1"),
      description: t("staffingsupport.card_text_1"),
    },
    {
      image: "/assets/images/staffingsupporticon2.png",
      title: t("staffingsupport.card_heading_2"),
      description: t("staffingsupport.card_text_2"),
    },
    {
      image: "/assets/images/staffingsupporticon3.png",
      title: t("staffingsupport.card_heading_3"),
      description: t("staffingsupport.card_text_3"),
    },
    {
      image: "/assets/images/staffingsupporticon4.png",
      title: t("staffingsupport.card_heading_4"),
      description: t("staffingsupport.card_text_4"),
    },
  ];

  const questions = [
    {
      question: t("staffingsupport.question1"),
      answer: t("staffingsupport.answer1"),
    },
    {
      question: t("staffingsupport.question2"),
      answer: t("staffingsupport.answer2"),
    },
    {
      question: t("staffingsupport.question3"),
      answer: t("staffingsupport.answer3"),
    },
    {
      question: t("staffingsupport.question4"),
      answer: t("staffingsupport.answer4"),
    },
    {
      question: t("staffingsupport.question5"),
      answer: t("staffingsupport.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#eef8f9"];

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/staffingsupport4.png",
      heading:
        "Build a Stronger Team with Our Staffing Services – Reach Out Today!",
      buttonText: "Get Started Now",
      buttonLink: "/contact-us",
    },
  ];

  const points = [
    {
      title: t("staffingsupport.point1"),
    },
    { title: t("staffingsupport.point2") },
    { title: t("staffingsupport.point3") },
    { title: t("staffingsupport.point4") },
  ];
  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection
        heading={t("staffingsupport.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/staffingsupport2.png"
      />
      <InfoSection
        heading={t("scmservices.heading_3")}
        text={t("scmservices.text_5")}
        cards={cards2}
        columns={4}
      />

      <ImageSectionBgBlue
        title={t("staffingsupport.heading_4")}
        points={points}
        image="/assets/images/staffingsupport3.png"
        leftColor="#00AAB4"
        rightColor="#00AAB4"
        iconColor="#fff"
        TextColor="#fff"
      />

      <ProcessFlow
        heading="How Our Staffing Process Works"
        steps={[
          {
            title: "Understanding your staffing requirements",
            icon: "/assets/icons/staffingsupport1.svg",
          },
          {
            title: "Talent sourcing and screening",
            icon: "/assets/icons/staffingsupport2.svg",
          },
          {
            title: "Interview and selection",
            icon: "/assets/icons/staffingsupport3.svg",
          },
          {
            title: "Onboarding and training support",
            icon: "/assets/icons/staffingsupport4.svg",
          },
          {
            title: "Ongoing workforce management",
            icon: "/assets/icons/staffingsupport5.svg",
          },
        ]}
        circleColor="#00AAB4"
        lineColor="#00AAB4"
        textColor="#000"
      />

      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#FC4C02"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
