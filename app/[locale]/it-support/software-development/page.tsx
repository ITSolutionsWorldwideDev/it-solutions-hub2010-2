// app/[locale]/it-support/software-development/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
// import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";
import ImageSectionBgBlue from "@/components/layout/image-section-bg-blue";

export default async function SoftwareDevelopment({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/softwaredev1.png",
      heading: t("softwaredev.heading_1"),
      text: t("softwaredev.text_1"),
      button: t("softwaredev.button_1"),
      textcolor: "#0000",
    },
  ];

  const cards = [
    {
      title: t("softwaredev.card_heading_1"),
      description: t("softwaredev.card_text_1"),
    },
    {
      title: t("softwaredev.card_heading_2"),
      description: t("softwaredev.card_text_2"),
    },
    {
      title: t("softwaredev.card_heading_3"),
      description: t("softwaredev.card_text_3"),
    },
    {
      title: t("softwaredev.card_heading_4"),
      description: t("softwaredev.card_text_4"),
    },
    {
      title: t("softwaredev.card_heading_5"),
      description: t("softwaredev.card_text_5"),
    },
  ];

  const questions = [
    {
      question: t("softwaredev.question1"),
      answer: t("softwaredev.answer1"),
    },
    {
      question: t("softwaredev.question2"),
      answer: t("softwaredev.answer2"),
    },
    {
      question: t("softwaredev.question3"),
      answer: t("softwaredev.answer3"),
    },
    {
      question: t("softwaredev.question4"),
      answer: t("softwaredev.answer4"),
    },
    {
      question: t("softwaredev.question5"),
      answer: t("softwaredev.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#ecf3f8"];

  const imagetext2 = (
    <>
      <li>{t("softwaredev.listitem1")}</li>
      <li>{t("softwaredev.listitem2")}</li>
      <li>{t("softwaredev.listitem3")}</li>
      <li>{t("softwaredev.listitem4")}</li>
      <li>{t("softwaredev.listitem5")}</li>
    </>
  );

  const points = [
    {
      title: t("softwaredev.point1"),
    },
    { title: t("softwaredev.point2") },
    { title: t("softwaredev.point3") },
    { title: t("softwaredev.point4") },
  ];

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/itsupport8.png",
      heading: "Transform Your Ideas into Powerful Software – Contact Us Now!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection
        heading={t("softwaredev.heading_2")}
        text={imagetext2}
        imageUrl="/assets/images/softwaredev2.png"
      />
      <InfoSection heading={t("softwaredev.heading_3")} cards={cards} />

      <ProcessFlow
        heading={t("softwaredev.heading_4")}
        steps={[
          { title: "Assessment", icon: "/assets/icons/itsupport8.svg" },
          { title: "Planning", icon: "/assets/icons/softwaredev3.svg" },
          { title: "Implementation", icon: "/assets/icons/softwaredev4.svg" },
          { title: "Optimization", icon: "/assets/icons/softwaredev5.svg" },
          { title: "Support", icon: "/assets/icons/softwaredev6.svg" },
        ]}
        circleColor="#0D69AD"
        lineColor="#0D69AD"
        textColor="#000"
      />
      <ImageSectionBgBlue
        title={t("softwaredev.heading_5")}
        points={points}
        image="/assets/images/softwaredev3.png"
        leftColor="#0D69AD"
        rightColor="#ffff"
        iconColor="#ffff"
        TextColor="#000"
      />

      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#0D69AD"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
