// app/[locale]/oracle-cloud/cloud-data-&-ai-solutions/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function CloudDataAISolutions({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/clouddata1.png",
      heading: t("clouddata.heading_1"),
      text: t("clouddata.text_1"),
      button: t("clouddata.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("clouddata.text_2")}
      <br />
      <br />
      {t("clouddata.text_3")}
    </>
  );
  const cards = [
    {
      title: t("clouddata.card_heading_1"),
      description: t("clouddata.card_text_1"),
    },
    {
      title: t("clouddata.card_heading_2"),
      description: t("clouddata.card_text_2"),
    },
    {
      title: t("clouddata.card_heading_3"),
      description: t("clouddata.card_text_3"),
    },
    {
      title: t("clouddata.card_heading_4"),
      description: t("clouddata.card_text_4"),
    },
    {
      title: t("clouddata.card_heading_5"),
      description: t("clouddata.card_text_5"),
    },
    // {
    //   title: t("clouddata.card_heading_6"),
    //   description: t("clouddata.card_text_6"),
    // },
    // {
    //   title: t("clouddata.card_heading_7"),
    //   description: t("clouddata.card_text_7"),
    // },
  ];

  const questions = [
    {
      question: t("cloudtransformation.question1"),
      answer: t("cloudtransformation.answer1"),
    },
    {
      question: t("cloudtransformation.question2"),
      answer: t("clouddata.answer2"),
    },
    {
      question: t("cloudtransformation.question3"),
      answer: t("cloudtransformation.answer3"),
    },
    {
      question: t("cloudtransformation.question4"),
      answer: t("cloudtransformation.answer4"),
    },
    {
      question: t("cloudtransformation.question5"),
      answer: t("cloudtransformation.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#f9e9eb"];

  const imagetext2 = (
    <>
      <li>{t("clouddata.listitem1")}</li>
      <li>{t("clouddata.listitem2")}</li>
      <li>{t("clouddata.listitem3")}</li>
      <li>{t("clouddata.listitem4")}</li>
      <li>{t("clouddata.listitem5")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/clouddata4.png",
      heading:
        "Optimize Performance & Scalability with Cloud AI Solutions - Schedule a Consultation!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("clouddata.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/clouddata2.png"
        borderWidth="2px"
        borderColor="#f9e7e8"
      />
      <InfoSection
        heading={t("clouddata.heading_3")}
        text={t("clouddata.text_4")}
        cards={cards}
        columns={4}
      />

      <ImageSection
        heading={t("clouddata.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/clouddata3.png"
        leftColor="#f9e7e8"
        rightColor="#f9e7e8"
        textColor="#000"
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
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#C10C1B"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
