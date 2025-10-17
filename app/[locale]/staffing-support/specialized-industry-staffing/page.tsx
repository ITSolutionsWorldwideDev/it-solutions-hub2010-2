// app/[locale]/staffing-support/specialized-industry-staffing/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";
import { ClientLogosSlider } from "@/components/layout/home/AnimationComponents";

export default async function SpecializedIndustryStaffing({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/industrystaffing.png",
      heading: t("industrystaffing.heading_1"),
      text: t("industrystaffing.text_1"),
      button: t("industrystaffing.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("industrystaffing.text_2")}
      <br />
      <br />
      {t("industrystaffing.text_3")}
    </>
  );
  const cards = [
    {
      title: t("industrystaffing.card_heading_1"),
      description: t("industrystaffing.card_text_1"),
    },
    {
      title: t("industrystaffing.card_heading_2"),
      description: t("industrystaffing.card_text_2"),
    },
    {
      title: t("industrystaffing.card_heading_2"),
      description: t("industrystaffing.card_text_2"),
    },
  ];

  const questions = [
    {
      question: t("remotestff.question1"),
      answer: t("remotestff.answer1"),
    },
    {
      question: t("remotestff.question2"),
      answer: t("remotestff.answer2"),
    },
    {
      question: t("remotestff.question3"),
      answer: t("remotestff.answer3"),
    },
    {
      question: t("remotestff.question4"),
      answer: t("remotestff.answer4"),
    },
    {
      question: t("remotestff.question5"),
      answer: t("remotestff.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#eef8f9"];

  const imagetext2 = (
    <>
      <li>{t("industrystaffing.listitem1")}</li>
      <li>{t("industrystaffing.listitem2")}</li>
      <li>{t("industrystaffing.listitem3")}</li>
      <li>{t("industrystaffing.listitem4")}</li>
      <li>{t("industrystaffing.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("industrystaffing.listitem6")}</li>
      <li>{t("industrystaffing.listitem7")}</li>
      <li>{t("industrystaffing.listitem8")}</li>
      <li>{t("industrystaffing.listitem9")}</li>
      <li>{t("industrystaffing.listitem10")}</li>
    </>
  );



  const slidesData2 = [
    {
      backgroundImage: "/assets/images/industrystaffing5.png",
      heading:
        "Find Top Talent with the Expertise Your Industry Needs – Reach Out Today!",
      buttonText: "Get Started Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("industrystaffing.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/industrystaffing2.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
      />
      <InfoSection
        heading={t("industrystaffing.heading_3")}
        cards={cards}
        columns={3}
      />
      <ImageSection
        heading={t("industrystaffing.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/industrystaffing3.png"
        leftColor="#ebf2f3"
        rightColor="#ebf2f3"
      />
      <ImageSection2
        heading={t("industrystaffing.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/industrystaffing4.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
      />
      {/* <LogosSlider images={logos} /> */}
      <ClientLogosSlider />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#278083"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
