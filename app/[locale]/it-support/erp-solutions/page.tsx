// app/[locale]/it-support/erp-solutions/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function ERPSolutions({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/erpsolutions.png",
      heading: t("erpsolutions.heading_1"),
      text: t("erpsolutions.text_1"),
      button: t("erpsolutions.button_1"),
      textcolor: "#0000",
    },
  ];

  const questions = [
    {
      question: t("erpsolutions.question1"),
      answer: t("erpsolutions.answer1"),
    },
    {
      question: t("erpsolutions.question2"),
      answer: t("erpsolutions.answer2"),
    },
    {
      question: t("erpsolutions.question3"),
      answer: t("erpsolutions.answer3"),
    },
    {
      question: t("erpsolutions.question4"),
      answer: t("erpsolutions.answer4"),
    },
    {
      question: t("erpsolutions.question5"),
      answer: [
        <li key="1">{t("erpsolutions.answer_list_1")}</li>,
        <li key="2">{t("erpsolutions.answer_list_2")}</li>,
        <li key="3">{t("erpsolutions.answer_list_3")}</li>,
        <li key="4">{t("erpsolutions.answer_list_4")}</li>,
      ],
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#ecf3f8"];

  const imagetext = (
    <>
      <br />
      <li>{t("erpsolutions.listitem9")}</li>
      <li>{t("erpsolutions.listitem10")}</li>
      <li>{t("erpsolutions.listitem11")}</li>
      <li>{t("erpsolutions.listitem12")}</li>
      <li>{t("erpsolutions.listitem13")}</li>
    </>
  );

  const imagetext2 = (
    <>
      <li>{t("erpsolutions.listitem5")}</li>
      <li>{t("erpsolutions.listitem6")}</li>
      <li>{t("erpsolutions.listitem7")}</li>
      <li>{t("erpsolutions.listitem8")}</li>
    </>
  );

  const cards = [
    {
      title: t("erpsolutions.card_heading_1"),
      description: t("erpsolutions.card_text_1"),
    },
    {
      title: t("erpsolutions.card_heading_2"),
      description: t("erpsolutions.card_text_2"),
    },
    {
      title: t("erpsolutions.card_heading_3"),
      description: t("erpsolutions.card_text_3"),
    },
  ];

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/erpsolutions6.png",
      heading:
        "Maximize Efficiency and Growth with Our ERP System - Contact Us Now!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("erpsolutions.heading_2")}
        text={t("erpsolutions.text_2")}
        imageUrl="/assets/images/erpsolutions2.png"
      />
      <InfoSection
        heading={t("erpsolutions.heading_3")}
        cards={cards}
        columns={3}
      />

      <ImageSection2
        heading={t("erpsolutions.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/erpsolutions4.png"
      />

      <ImageSection
        heading={t("erpsolutions.heading_5")}
        text={imagetext}
        imageUrl="/assets/images/erpsolutions5.png"
        leftColor="#e7f0f7"
        rightColor="#e7f0f7"
        textColor="#000"
      />

      <ProcessFlow
        heading="Our Process"
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

      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#0D69AD"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
