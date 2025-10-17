// app/[locale]/digital-services/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import BannerSection2 from "@/components/layout/banner-section-2";
import ImageSection2 from "@/components/layout/image-section-2";
import DynamicTabs from "@/components/ui/dynamic-tabs";
import MarketingServices from "@/components/ui/marketing-services";
import MarketingBanner from "@/components/ui/marketing-banner";

export default async function DigitalServices({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/digital1.png",
      heading: t("digitalservices.heading_1"),
      text: t("digitalservices.text_1"),
      button: t("digitalservices.button_1"),
      textcolor: "#0000",
    },
  ];

  const imagetext = (
    <>
      {t("digitalservices.text_2")}
      <br />
      <br />
      {t("digitalservices.text_3")}
    </>
  );

  const questions = [
    {
      question: t("digitalservices.question1"),
      answer: t("digitalservices.answer1"),
    },
    {
      question: t("digitalservices.question2"),
      answer: t("digitalservices.answer2"),
    },
    {
      question: t("digitalservices.question3"),
      answer: t("digitalservices.answer3"),
    },
    {
      question: t("digitalservices.question4"),
      answer: t("digitalservices.answer4"),
    },
    {
      question: t("digitalservices.question5"),
      answer: t("digitalservices.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#f7f2fd"];

  const imagetext2 = (
    <>
      {t("digitalservices.text_4")}
      <br />
      <br />
      {t("digitalservices.text_5")}
    </>
  );

  const headings = [
    t("digitalservices.dynamic_card_heading_1"),
    t("digitalservices.dynamic_card_heading_2"),
    t("digitalservices.dynamic_card_heading_3"),
    t("digitalservices.dynamic_card_heading_4"),
    t("digitalservices.dynamic_card_heading_5"),
  ];

  const content = [
    t("digitalservices.dynamic_card_text_1"),
    t("digitalservices.dynamic_card_text_2"),
    t("digitalservices.dynamic_card_text_3"),
    t("digitalservices.dynamic_card_text_4"),
    t("digitalservices.dynamic_card_text_5"),
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection
        heading={t("digitalservices.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/digital2.png"
      />
      <DynamicTabs
        headingh2={t("digitalservices.heading_4")}
        headings={headings}
        content={content}
        activeColor="#9B51E0"
        inactiveColor="#F3F4F6"
      />

      <MarketingServices
        title="Local And B2B Digital Marketing Services For Every Business"
        services={[
          {
            title: "Local Digital Marketing Services",
            image: "/assets/images/digital3.png",
            points: [
              "Increase visibility within your community.",
              "Stay updated to the regional trends and demands.",
              "Strengthen community connections.",
            ],
          },
          {
            title: "B2B Digital Marketing Services",
            image: "/assets/images/digital4.png",
            points: [
              "Build long-term partnerships with targeted strategies.",
              "Targeted lead generation.",
              "Boost conversion rates.",
            ],
          },
        ]}
      />

      <ImageSection2
        heading={t("digitalservices.heading_5")}
        text={imagetext2}
        imageUrl="/assets/images/digital5.png"
      />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <MarketingBanner
        imageSrc="/assets/images/digital6.png"
        title="Grow Your Business with Data-Driven Digital Marketing - Schedule a Consultation!"
        description="Let's create a custom strategy for your business."
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
      />
    </div>
  );
}
