// app/[locale]/scm-services/business-consultancy/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function BusinessConsultancy({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/businessconsultancy.png",
      heading: t("businessconsultancy.heading_1"),
      text: t("businessconsultancy.text_1"),
      button: t("businessconsultancy.button_1"),
    },
  ];
  const imagetext = (
    <>
      {t("businessconsultancy.text_2")}
      <br />
      {t("businessconsultancy.text_3")}
      <br />
      {t("businessconsultancy.text_4")}
    </>
  );

  const cards2 = [
    {
      image: "/assets/images/businessconsultencyicon1.png",
      title: t("businessconsultancy.card_heading_1"),
      description: t("businessconsultancy.card_text_1"),
    },
    {
      image: "/assets/images/businessconsultencyicon2.png",
      title: t("businessconsultancy.card_heading_2"),
      description: t("businessconsultancy.card_text_2"),
    },
    {
      image: "/assets/images/businessconsultencyicon3.png",
      title: t("businessconsultancy.card_heading_3"),
      description: t("businessconsultancy.card_text_3"),
    },
    {
      image: "/assets/images/businessconsultencyicon4.png",
      title: t("businessconsultancy.card_heading_4"),
      description: t("businessconsultancy.card_text_4"),
    },
  ];

  const questions = [
    {
      question: t("businessconsultancy.question1"),
      answer: t("businessconsultancy.answer1"),
    },
    {
      question: t("businessconsultancy.question2"),
      answer: t("businessconsultancy.answer2"),
    },
    {
      question: t("businessconsultancy.question3"),
      answer: t("businessconsultancy.answer3"),
    },
    {
      question: t("businessconsultancy.question4"),
      answer: t("scmservices.answer4"),
    },
    {
      question: t("scmservices.question5"),
      answer: t("businessconsultancy.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FC4C02"];

  const imagetext2 = (
    <>
      <li>{t("businessconsultancy.listitem1")}</li>
      <li>{t("businessconsultancy.listitem2")}</li>
      <li>{t("businessconsultancy.listitem3")}</li>
      <li>{t("businessconsultancy.listitem4")}</li>
      <li>{t("businessconsultancy.listitem5")}</li>
    </>
  );
  const imagetext3 = (
    <>
      <li>{t("businessconsultancy.listitem6")}</li>
      <li>{t("businessconsultancy.listitem7")}</li>
      <li>{t("businessconsultancy.listitem8")}</li>
      <li>{t("businessconsultancy.listitem9")}</li>
      <li>{t("businessconsultancy.listitem10")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/businessconsultancy5.png",
      heading:
        "Let's Work Together to Drive Success – Contact Our Consultancy Team Now!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("businessconsultancy.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/businessconsultancy2.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />
      <InfoSection
        heading={t("businessconsultancy.heading_3")}
        cards={cards2}
        columns={4}
      />

      <ImageSection
        heading={t("businessconsultancy.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/businessconsultancy3.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

      <ImageSection2
        heading={t("businessconsultancy.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/businessconsultancy4.png"
        leftColor="#FC4C02"
        rightColor="#ffff"
      />

      <ProcessFlow
        heading="Our Process"
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
