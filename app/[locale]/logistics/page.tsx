// app/[locale]/logistics/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";
import ImageSection2 from "@/components/layout/image-section-2";

export default async function Logistics({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/logistics1.png",
      heading: t("logistics.heading_1"),
      text: t("logistics.text_1"),
      button: t("logistics.button_1"),
    },
  ];
  const imagetext = (
    <>
      {t("logistics.text_2")}
      <br />
      <br />
      {t("logistics.text_3")}
    </>
  );
  const cards = [
    {
      title: t("logistics.card_heading_1"),
      description: t("logistics.card_text_1"),
    },
    {
      title: t("logistics.card_heading_2"),
      description: t("logistics.card_text_2"),
    },
    {
      title: t("logistics.card_heading_3"),
      description: t("logistics.card_text_3"),
    },
  ];

  const cards2 = [
    {
      image: "/assets/images/logisticsicon1.png",
      title: t("logistics.card2_heading_1"),
    },
    {
      image: "/assets/images/logisticsicon2.png",
      title: t("logistics.card2_heading_2"),
    },
    {
      image: "/assets/images/logisticsicon3.png",
      title: t("logistics.card2_heading_3"),
    },
    {
      image: "/assets/images/logisticsicon4.png",
      title: t("logistics.card2_heading_3"),
    },
  ];

  const questions = [
    {
      question: t("logistics.question1"),
      answer: t("logistics.answer1"),
    },
    {
      question: t("logistics.question2"),
      answer: t("logistics.answer2"),
    },
    {
      question: t("logistics.question3"),
      answer: t("logistics.answer3"),
    },
    {
      question: t("logistics.question4"),
      answer: t("logistics.answer4"),
    },
    {
      question: t("logistics.question5"),
      answer: t("logistics.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FEAE3D"];

  const imagetext2 = (
    <>
      <li>{t("logistics.listitem1")}</li>
      <li>{t("logistics.listitem2")}</li>
      <li>{t("logistics.listitem3")}</li>
      <li>{t("logistics.listitem4")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/logistics4.png",
      heading:
        "Enhance Your Supply Chain with Scalable Logistics & Warehousing Solutions - Reach Out Today!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection
        heading={t("logistics.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/logistics2.png"
      />

      <InfoSection
        heading={t("logistics.heading_3")}
        text={t("logistics.text_4")}
        cards={cards}
      />

      <ImageSection2
        heading={t("logistics.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/logistics3.png"
        leftColor="#FEAE3D"
        rightColor="#FEAE3D"
        textColor="#ffff"
      />

      <InfoSection
        heading={t("logistics.heading_5")}
        cards={cards2}
        columns={4}
      />

      <ProcessFlow
        heading="Our Process"
        subheading="How Our Logistics Services Work"
        steps={[
          { title: "Assessment", icon: "/assets/icons/logisticsicon1.svg" },
          { title: "Planning", icon: "/assets/icons/logisticsicon2.svg" },
          { title: "Implementation", icon: "/assets/icons/logisticsicon3.svg" },
          { title: "Optimization", icon: "/assets/icons/logisticsicon4.svg" },
          { title: "Support", icon: "/assets/icons/logisticsicon5.svg" },
        ]}
        circleColor="#FEAE3D"
        lineColor="#FEAE3D"
        textColor="#000"
      />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#FEAE3D"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
