// app/[locale]/oracle-cloud/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import ImageSectionBgBlue from "@/components/layout/image-section-bg-blue";
import ImageSection2 from "@/components/layout/image-section-2";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function OracleCloud({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/oraclecloud1.png",
      heading: t("oraclecloud.heading_1"),
      text: t("oraclecloud.text_1"),
      button: t("oraclecloud.button_1"),
      buttonTextColor: "#C10C1B",
    },
  ];
  const imagetext = (
    <>
      {t("oraclecloud.text_2")}
      <br />
      <br />
      {t("oraclecloud.text_3")}
    </>
  );
  const cards = [
    {
      title: t("oraclecloud.card2_heading_1"),
      description: t("oraclecloud.card2_text_1"),
    },
    {
      title: t("oraclecloud.card2_heading_2"),
      description: t("oraclecloud.card2_text_2"),
    },
    {
      title: t("oraclecloud.card2_heading_3"),
      description: t("oraclecloud.card2_text_3"),
    },
  ];

  const cards2 = [
    {
      image: "/assets/images/oraclecloud3.png",
      title: t("oraclecloud.card_heading_1"),
      description: t("oraclecloud.card_text_1"),
    },
    {
      image: "/assets/images/oraclecloud4.png",
      title: t("oraclecloud.card_heading_2"),
      description: t("oraclecloud.card_text_2"),
    },
    {
      image: "/assets/images/oraclecloud5.png",
      title: t("oraclecloud.card_heading_3"),
      description: t("oraclecloud.card_text_3"),
    },
    {
      image: "/assets/images/oraclecloud6.png",
      title: t("oraclecloud.card_heading_4"),
      description: t("oraclecloud.card_text_4"),
    },
  ];

  const cards3 = [
    {
      image: "/assets/images/oraclecloud3.png",
      title: t("oraclecloud.card3_heading_1"),
      description: t("oraclecloud.card3_text_1"),
    },
    {
      image: "/assets/images/oraclecloud4.png",
      title: t("oraclecloud.card3_heading_2"),
      description: t("oraclecloud.card3_text_2"),
    },
  ];

  const questions = [
    {
      question: t("oraclecloud.question1"),
      answer: t("oraclecloud.answer1"),
    },
    {
      question: t("oraclecloud.question2"),
      answer: t("oraclecloud.answer2"),
    },
    {
      question: t("oraclecloud.question3"),
      answer: t("oraclecloud.answer3"),
    },
    {
      question: t("oraclecloud.question4"),
      answer: t("oraclecloud.answer4"),
    },
    {
      question: t("oraclecloud.question5"),
      answer: t("oraclecloud.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#f9e9eb"];

  const imagetext2 = (
    <>
      <li>{t("oraclecloud.listitem1")}</li>
      <li>{t("oraclecloud.listitem2")}</li>
      <li>{t("oraclecloud.listitem3")}</li>
      <li>{t("oraclecloud.listitem4")}</li>
    </>
  );

  const points = [
    {
      title: t("oraclecloud.point1"),
      icon: "/assets/images/oraclecloud8.png",
    },
    { title: t("oraclecloud.point2"), icon: "/assets/images/oraclecloud9.png" },
    {
      title: t("oraclecloud.point3"),
      icon: "/assets/images/oraclecloud10.png",
    },
    {
      title: t("oraclecloud.point4"),
      icon: "/assets/images/oraclecloud11.png",
    },
  ];

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/oraclecloud13.png",
      heading: "Drive Sales and Growth with a Customized CRM - Contact Us Now!",
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
        imageUrl="/assets/images/oraclecloud2.png"
      />
      <InfoSection
        heading={t("oraclecloud.heading_3")}
        text={t("oraclecloud.text_4")}
        cards={cards2}
        columns={4}
      />

      <ImageSectionBgBlue
        title={t("oraclecloud.heading_4")}
        points={points}
        image="/assets/images/oraclecloud7.png"
        leftColor="#C10C1B"
        rightColor="#ffff"
        iconColor="#C10C1B"
        TextColor="#000"
      />
      <InfoSection
        heading={t("oraclecloud.heading_5")}
        text={t("oraclecloud.text_5")}
        cards={cards}
      />
      <InfoSection
        heading={t("oraclecloud.heading_6")}
        cards={cards3}
        columns={2}
      />

      <ProcessFlow
        heading="Effortless Transition to Oracle Cloud"
        steps={[
          { title: "Assessment", icon: "/assets/icons/oracleicon1.svg" },
          { title: "Planning", icon: "/assets/icons/oracleicon2.svg" },
          { title: "Data migration", icon: "/assets/icons/oracleicon3.svg" },
          { title: "Optimization", icon: "/assets/icons/oracleicon4.svg" },
          { title: "Management", icon: "/assets/icons/oracleicon5.svg" },
        ]}
        circleColor="#C10C1B"
        lineColor="#C10C1B"
        textColor="#000"
      />

      <ImageSection2
        heading={t("oraclecloud.heading_7")}
        text={imagetext2}
        imageUrl="/assets/images/oraclecloud12.png"
      />

      <FAQSection2
        heading={t("oraclecloud.heading_8")}
        questions={questions}
        gradientColors={gradientColors}
      />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#C10C1B"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
