// app/[locale]/scm-services/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function SCM({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/scm1.png",
      heading: t("scmservices.heading_1"),
      text: t("scmservices.text_1"),
      button: t("scmservices.button_1"),
      buttonTextColor: "#FC4C02",
    },
  ];
  const imagetext = (
    <>
      {t("scmservices.text_2")}
      <br />
      <br />
      {t("scmservices.text_3")}
      <br />
      <br />
      {t("scmservices.text_4")}
    </>
  );

  const imagetext2 = (
    <>
      <li>{t("scmservices.listitem1")}</li>
      <li>{t("scmservices.listitem2")}</li>
      <li>{t("scmservices.listitem3")}</li>
      <li>{t("scmservices.listitem4")}</li>
    </>
  );
  const cards = [
    {
      title: t("scmservices.card_heading_1"),
      description: t("scmservices.card_text_1"),
    },
    {
      title: t("scmservices.card_heading_2"),
      description: t("scmservices.card_text_2"),
    },
    {
      title: t("scmservices.card_heading_3"),
      description: t("scmservices.card_text_3"),
    },
  ];

  const cards2 = [
    {
      image: "/assets/images/scmicon1.png",
      title: t("scmservices.card2_heading_1"),
      description: t("scmservices.card2_text_1"),
    },
    {
      image: "/assets/images/scmicon2.png",
      title: t("scmservices.card2_heading_2"),
      description: t("scmservices.card2_text_2"),
    },
    {
      image: "/assets/images/scmicon3.png",
      title: t("scmservices.card2_heading_3"),
      description: t("scmservices.card2_text_3"),
    },
  ];

  const questions = [
    {
      question: t("scmservices.question1"),
      answer: t("scmservices.answer1"),
    },
    {
      question: t("scmservices.question2"),
      answer: t("scmservices.answer2"),
    },
    {
      question: t("scmservices.question3"),
      answer: t("scmservices.answer3"),
    },
    {
      question: t("scmservices.question4"),
      answer: t("scmservices.answer4"),
    },
    {
      question: t("scmservices.question5"),
      answer: t("scmservices.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FC4C02"];

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/scm4.png",
      heading: "Let’s Optimize Your Supply Chain Today",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection
        heading={t("scmservices.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/scm2.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />
      <InfoSection
        heading={t("scmservices.heading_3")}
        text={t("scmservices.text_5")}
        cards={cards}
      />
      <ImageSection2
        heading={t("scmservices.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/scm3.png"
        leftColor="#FC4C02"
        rightColor="#ffff"
      />
      <InfoSection heading={t("scmservices.heading_5")} cards={cards2} />

      <ProcessFlow
        heading="Our Proven Process"
        subheading="A Streamlined Approach to Supply Chain Excellence"
        steps={[
          {
            title: t("scmservices.processflow1"),
            icon: "/assets/icons/scmicon1.svg",
          },
          {
            title: t("scmservices.processflow2"),
            icon: "/assets/icons/scmicon2.svg",
          },
          {
            title: t("scmservices.processflow3"),
            icon: "/assets/icons/scmicon3.svg",
          },
          {
            title: t("scmservices.processflow4"),
            icon: "/assets/icons/scmicon4.svg",
          },
          {
            title: t("scmservices.processflow5"),
            icon: "/assets/icons/scmicon5.svg",
          },
        ]}
        circleColor="#FC4C02"
        lineColor="#FC4C02"
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
