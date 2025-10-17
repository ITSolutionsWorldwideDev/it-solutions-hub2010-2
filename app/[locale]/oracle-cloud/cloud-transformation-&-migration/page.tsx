// app/[locale]/oracle-cloud/cloud-transformation-&-migration/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function CloudTransformationMigration({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/cloudtransformation1.png",
      heading: t("cloudtransformation.heading_1"),
      text: t("cloudtransformation.text_1"),
      button: t("cloudtransformation.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("cloudtransformation.text_2")}
      <br />
      {t("cloudtransformation.text_3")}
      <br />
      {t("cloudtransformation.text_4")}
    </>
  );
  const cards = [
    {
      title: t("cloudtransformation.card_heading_1"),
      description: t("cloudtransformation.card_text_1"),
    },
    {
      title: t("cloudtransformation.card_heading_2"),
      description: t("cloudtransformation.card_text_2"),
    },
    {
      title: t("cloudtransformation.card_heading_3"),
      description: t("cloudtransformation.card_text_3"),
    },
    {
      title: t("cloudtransformation.card_heading_4"),
      description: t("cloudtransformation.card_text_4"),
    },
    {
      title: t("cloudtransformation.card_heading_5"),
      description: t("cloudtransformation.card_text_5"),
    },
    {
      title: t("cloudtransformation.card_heading_6"),
      description: t("cloudtransformation.card_text_6"),
    },
    {
      title: t("cloudtransformation.card_heading_7"),
      description: t("cloudtransformation.card_text_7"),
    },
  ];

  const questions = [
    {
      question: t("cloudtransformation.question1"),
      answer: t("cloudtransformation.answer1"),
    },
    {
      question: t("cloudtransformation.question2"),
      answer: [
        <li key="1">{t("cloudtransformation.answer_list_1")}</li>,
        <li key="2">{t("cloudtransformation.answer_list_2")}</li>,
        <li key="3">{t("cloudtransformation.answer_list_3")}</li>,
        <li key="4">{t("cloudtransformation.answer_list_4")}</li>,
      ],
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
      <li>{t("cloudtransformation.listitem1")}</li>
      <li>{t("cloudtransformation.listitem2")}</li>
      <li>{t("cloudtransformation.listitem3")}</li>
      <li>{t("cloudtransformation.listitem4")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("cloudtransformation.listitem5")}</li>
      <li>{t("cloudtransformation.listitem6")}</li>
      <li>{t("cloudtransformation.listitem7")}</li>
      <li>{t("cloudtransformation.listitem8")}</li>
      <li>{t("cloudtransformation.listitem9")}</li>
    </>
  );

  const imagetext4 = (
    <>
      <li>{t("cloudtransformation.listitem10")}</li>
      <li>{t("cloudtransformation.listitem11")}</li>
      <li>{t("cloudtransformation.listitem12")}</li>
      <li>{t("cloudtransformation.listitem13")}</li>
      <li>{t("cloudtransformation.listitem14")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/oraclecloud13.png",
      heading:
        "Transform Your IT Infrastructure with Expert Cloud Migration-Get live on the cloud now!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("cloudtransformation.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/cloudtransformation2.png"
        borderWidth="2px"
        borderColor="#f9e7e8"
      />

      <ImageSection
        heading={t("cloudtransformation.heading_3")}
        text={imagetext2}
        imageUrl="/assets/images/cloudtransformation3.png"
        leftColor="#f9e7e8"
        rightColor="#f9e7e8"
        textColor="#000"
      />
      <InfoSection
        heading={t("cloudtransformation.heading_4")}
        text={t("cloudtransformation.text_4")}
        cards={cards}
        columns={4}
      />

      <ImageSection2
        heading={t("cloudtransformation.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/cloudtransformation4.png"
        borderWidth="2px"
        borderColor="#f9e7e8"
      />

      <ProcessFlow
        heading="Our Process"
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

      <ImageSection
        heading={t("cloudtransformation.heading_6")}
        text={imagetext4}
        imageUrl="/assets/images/cloudtransformation5.png"
        leftColor="#f9e7e8"
        rightColor="#f9e7e8"
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
