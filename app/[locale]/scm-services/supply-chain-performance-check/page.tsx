// app/[locale]/scm-services/supply-chain-performance-check/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
// import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function SupplyChainPerformanceCheck({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/supplychainperformanceherosection.png",
      heading: t("supplychainperformancecheck.heading_1"),
      text: t("supplychainperformancecheck.text_1"),
      button: t("supplychainperformancecheck.button_1"),
    },
  ];

  const imagetext = (
    <>
      {t("supplychainperformancecheck.text_2")}
      <br />
      <br />
      {t("supplychainperformancecheck.text_3")}
    </>
  );

  const cards2 = [
    {
      image: "/assets/images/supplychainperformanceicon1.png",
      title: t("supplychainperformancecheck.card_heading_1"),
      description: t("supplychainperformancecheck.card_text_1"),
    },
    {
      image: "/assets/images/supplychainperformanceicon2.png",
      title: t("supplychainperformancecheck.card_heading_2"),
      description: t("supplychainperformancecheck.card_text_2"),
    },
    {
      image: "/assets/images/supplychainperformanceicon3.png",
      title: t("supplychainperformancecheck.card_heading_3"),
      description: t("supplychainperformancecheck.card_text_3"),
    },
    {
      image: "/assets/images/supplychainperformanceicon4.png",
      title: t("supplychainperformancecheck.card_heading_4"),
      description: t("supplychainperformancecheck.card_text_4"),
    },
  ];

  const questions = [
    {
      question: t("supplychainperformancecheck.question1"),
      answer: t("supplychainperformancecheck.answer1"),
    },
    {
      question: t("supplychainperformancecheck.question2"),
      answer: t("supplychainperformancecheck.answer2"),
    },
    {
      question: t("supplychainperformancecheck.question3"),
      answer: t("supplychainperformancecheck.answer3"),
    },
    {
      question: t("supplychainperformancecheck.question4"),
      answer: t("supplychainperformancecheck.answer4"),
    },
    {
      question: t("supplychainperformancecheck.question5"),
      answer: t("supplychainperformancecheck.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FC4C02"];

  const imagetext2 = (
    <>
      <li>{t("supplychainperformancecheck.listitem1")}</li>
      <li>{t("supplychainperformancecheck.listitem2")}</li>
      <li>{t("supplychainperformancecheck.listitem3")}</li>
      <li>{t("supplychainperformancecheck.listitem4")}</li>
      <li>{t("supplychainperformancecheck.listitem5")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/supplychainperformancecheck5.png",
      heading:
        "Is Your Supply Chain Performing at Its Best? Get Your SCM Performance Check Now!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("supplychainperformancecheck.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/supplychainperformancecheck2.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

      <InfoSection
        heading={t("supplychainperformancecheck.heading_3")}
        cards={cards2}
        columns={4}
      />

      <ImageSection
        heading={t("supplychainperformancecheck.heading_4")}
        text={t("supplychainperformancecheck.text_4")}
        imageUrl="/assets/images/supplychainperformancecheck3.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

      <ImageSection2
        heading={t("supplychainperformancecheck.heading_5")}
        text={imagetext2}
        imageUrl="/assets/images/supplychainperformancecheck4.png"
        leftColor="#FC4C02"
        rightColor="#ffff"
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
