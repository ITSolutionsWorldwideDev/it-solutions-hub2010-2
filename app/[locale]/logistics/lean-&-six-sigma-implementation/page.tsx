// app/[locale]/logistics/lean-&-six-sigma-implementation/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import ImageSection2 from "@/components/layout/image-section-2";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";
import DynamicTabs from "@/components/ui/dynamic-tabs";

export default async function LeanSixSigmaImplementation({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const headings = [
    t("leansixsigma.dynamic_card_heading_1"),
    t("leansixsigma.dynamic_card_heading_2"),
    t("leansixsigma.dynamic_card_heading_3"),
    t("leansixsigma.dynamic_card_heading_4"),
  ];

  const content = [
    t("leansixsigma.dynamic_card_text_1"),
    t("leansixsigma.dynamic_card_text_2"),
    t("leansixsigma.dynamic_card_text_3"),
    t("leansixsigma.dynamic_card_text_4"),
  ];

  const slides = [
    {
      backgroundImage: "/assets/images/leansix1.png",
      heading: t("leansixsigma.heading_1"),
      text: t("leansixsigma.text_1"),
      button: t("leansixsigma.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("leansixsigma.text_2")}
      <br />
      <br />
      {t("leansixsigma.text_3")}
    </>
  );

  const questions = [
    {
      question: t("leansixsigma.question1"),
      answer: t("leansixsigma.answer1"),
    },
    {
      question: t("leansixsigma.question2"),
      answer: t("leansixsigma.answer2"),
    },
    {
      question: t("leansixsigma.question3"),
      answer: t("leansixsigma.answer3"),
    },
    {
      question: t("leansixsigma.question4"),
      answer: t("leansixsigma.answer4"),
    },
    {
      question: t("leansixsigma.question5"),
      answer: t("leansixsigma.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FEAE3D"];

  const imagetext2 = (
    <>
      <li>{t("leansixsigma.listitem1")}</li>
      <li>{t("leansixsigma.listitem2")}</li>
      <li>{t("leansixsigma.listitem3")}</li>
      <li>{t("leansixsigma.listitem4")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <ul className="list-decimal ml-5">
        <li>{t("leansixsigma.listitem5")}</li>
        <li>{t("leansixsigma.listitem6")}</li>
        <li>{t("leansixsigma.listitem7")}</li>
        <li>{t("leansixsigma.listitem8")}</li>
        <li>{t("leansixsigma.listitem9")}</li>
      </ul>
    </>
  );

  const imagetext4 = (
    <>
      {t("leansixsigma.text_4")}
      <ul className="list-decimal ml-5">
        <li>{t("leansixsigma.listitem10")}</li>
        <li>{t("leansixsigma.listitem11")}</li>
        <li>{t("leansixsigma.listitem12")}</li>
        <li>{t("leansixsigma.listitem13")}</li>
        <li>{t("leansixsigma.listitem14")}</li>
      </ul>
    </>
  );

  const imagetext5 = (
    <>
      {t("leansixsigma.text_5")}
      <ul className="list-decimal ml-5 mt-4">
        <li>{t("leansixsigma.listitem15")}</li>
        <li>{t("leansixsigma.listitem16")}</li>
        <li>{t("leansixsigma.listitem17")}</li>
        <li>{t("leansixsigma.listitem18")}</li>
        <li>{t("leansixsigma.listitem19")}</li>
        <li>{t("leansixsigma.listitem20")}</li>
      </ul>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/leansix8.png",
      heading:
        "Drive Efficiency and Quality - Implement Lean & Six Sigma Today!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("leansixsigma.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/leansix2.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection
        heading={t("leansixsigma.heading_3")}
        text={imagetext2}
        imageUrl="/assets/images/leansix3.png"
        leftColor="#FEAE3D"
        rightColor="#FEAE3D"
        textColor="#ffff"
      />
      <DynamicTabs
        headingh2={t("leansixsigma.heading_4")}
        headings={headings}
        content={content}
        activeColor="#F59E0B"
        inactiveColor="#F3F4F6"
      />
      <ImageSection
        heading={t("leansixsigma.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/leansix4.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection2
        heading={t("leansixsigma.heading_6")}
        text={imagetext4}
        imageUrl="/assets/images/leansix5.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection
        heading={t("leansixsigma.heading_7")}
        text={imagetext5}
        imageUrl="/assets/images/leansix6.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />

      <ImageSection2
        heading={t("leansixsigma.heading_8")}
        text={t("leansixsigma.text_6")}
        imageUrl="/assets/images/leansix7.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
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
