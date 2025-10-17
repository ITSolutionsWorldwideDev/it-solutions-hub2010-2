// app/[locale]/it-support/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import ImageSectionBgBlue from "@/components/layout/image-section-bg-blue";
import BannerSection2 from "@/components/layout/banner-section-2";


export default async function ItSupport({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/itsupport1.png",
      heading: t("itsupport.heading_1"),
      text: t("itsupport.text_1"),
      button: t("scmservices.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("itsupport.text_2")}
      <br />
      <br />
      {t("itsupport.text_3")}
    </>
  );
  const cards = [
    {
      title: t("itsupport.card2_heading_1"),
      description: t("itsupport.card2_text_1"),
    },
    {
      title: t("itsupport.card2_heading_2"),
      description: t("itsupport.card2_text_2"),
    },
    {
      title: t("itsupport.card2_heading_3"),
      description: t("itsupport.card2_text_3"),
    },
  ];

  const cards2 = [
    {
      image: "/assets/images/businessconsultancyicon1.png",
      title: t("itsupport.card_heading_1"),
      description: t("itsupport.card_text_1"),
    },
    {
      image: "/assets/images/businessconsultancyicon2.png",
      title: t("itsupport.card_heading_2"),
      description: t("itsupport.card_text_2"),
    },
    {
      image: "/assets/images/businessconsultancyicon3.png",
      title: t("itsupport.card_heading_3"),
      description: t("itsupport.card_text_3"),
    },
    {
      image: "/assets/images/businessconsultancyicon4.png",
      title: t("itsupport.card_heading_4"),
      description: t("itsupport.card_text_4"),
    },
  ];

  const cards3 = [
    {
      title: t("itsupport.card_heading_1"),
      description: t("itsupport.card_text_1"),
    },
    {
      title: t("itsupport.card_heading_2"),
      description: t("itsupport.card_text_2"),
    },
  ];

  const cards4 = [
    {
      image: "/assets/images/businessconsultancyicon5.png",
      title: t("itsupport.card3_heading_1"),
      description: t("itsupport.card3_text_1"),
    },
    {
      image: "/assets/images/businessconsultancyicon6.png",
      title: t("itsupport.card3_heading_2"),
      description: t("itsupport.card3_text_2"),
    },
  ];

  const questions = [
    {
      question: t("itsupport.question1"),
      answer: t("itsupport.answer1"),
    },
    {
      question: t("itsupport.question2"),
      answer: t("itsupport.answer2"),
    },
    {
      question: t("itsupport.question3"),
      answer: t("itsupport.answer3"),
    },
    {
      question: t("itsupport.question4"),
      answer: t("itsupport.answer4"),
    },
    {
      question: t("itsupport.question5"),
      answer: t("itsupport.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#0D69AD"];

  const points = [
    {
      title: t("itsupport.point1"),
      icon: "/assets/images/itsupport4.png",
    },
    { title: t("itsupport.point2"), icon: "/assets/images/itsupport5.png" },
    { title: t("itsupport.point3"), icon: "/assets/images/itsupport6.png" },
    { title: t("itsupport.point4"), icon: "/assets/images/itsupport7.png" },
  ];

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/itsupport8.png",
      heading: "Ready to Transform Your IT Infrastructure?",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];
  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection
        heading={t("oraclecloud.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/itsupport2.png"
      />

      <InfoSection
        heading={t("itsupport.heading_3")}
        text={t("itsupport.text_4")}
        cards={cards2}
        columns={4}
      />

      <ImageSectionBgBlue
        title={t("itsupport.heading_4")}
        points={points}
        image="/assets/images/itsupport3.png"
        leftColor="#0D69AD"
        rightColor="#ffff"
        iconColor="#0D69AD"
        TextColor="#000"
      />
      <InfoSection
        heading={t("itsupport.heading_5")}
        text={t("itsupport.text_5")}
        cards={cards}
      />

      <InfoSection
        heading={t("itsupport.heading_6")}
        cards={cards4}
        columns={2}
      />
      <ProcessFlow
        heading="Our Proven Process"
        steps={[
          { title: "Assessment", icon: "/assets/icons/itsupport8.svg" },
          { title: "Troubleshooting", icon: "/assets/icons/itsupport9.svg" },
          { title: "Resolution", icon: "/assets/icons/itsupport10.svg" },
          { title: "Maintenance", icon: "/assets/icons/itsupport11.svg" },
          { title: "Optimization", icon: "/assets/icons/itsupport12.svg" },
        ]}
        circleColor="#0D69AD"
        lineColor="#0D69AD"
        textColor="#000"
      />

      <InfoSection
        heading={t("itsupport.heading_5")}
        cards={cards3}
        columns={2}
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
