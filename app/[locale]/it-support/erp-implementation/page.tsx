// app/[locale]/it-support/erp-implementation/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function ERPImplementation({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/erpimplementation.png",
      heading: t("erpimplementation.heading_1"),
      text: t("erpimplementation.text_1"),
      button: t("erpimplementation.button_1"),
      textcolor: "#0000",
    },
  ];

  const questions = [
    {
      question: t("erpimplementation.question1"),
      answer: t("erpimplementation.answer1"),
    },
    {
      question: t("erpimplementation.question2"),
      answer: t("erpimplementation.answer2"),
    },
    {
      question: t("erpimplementation.question3"),
      answer: t("erpimplementation.answer3"),
    },
    {
      question: t("erpimplementation.question4"),
      answer: t("erpimplementation.answer4"),
    },
    {
      question: t("erpimplementation.question5"),
      answer: t("erpimplementation.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#ecf3f8"];

  const imagetext = (
    <>
      {t("erpimplementation.text_2")}
      <br />
      <br />
      {t("erpimplementation.text_3")}
    </>
  );

  const imagetext2 = (
    <>
      <li>{t("erpimplementation.listitem1")}</li>
      <li>{t("erpimplementation.listitem2")}</li>
      <li>{t("erpimplementation.listitem3")}</li>
      <li>{t("erpimplementation.listitem4")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("erpimplementation.listitem5")}</li>
      <li>{t("erpimplementation.listitem6")}</li>
      <li>{t("erpimplementation.listitem7")}</li>
      <li>{t("erpimplementation.listitem8")}</li>
      <li>{t("erpimplementation.listitem9")}</li>
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
        "Transform Your Operations with a Scalable ERP System – Let's Connect!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("erpimplementation.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/erpimplementation2.png"
        borderWidth="2px"
        borderColor="#c7dcec"
      />

      <ImageSection
        heading={t("erpimplementation.heading_3")}
        text={imagetext2}
        imageUrl="/assets/images/erpimplementation3.png"
        leftColor="#0D69AD"
        rightColor="#0D69AD"
        textColor="#fff"
      />
      <InfoSection
        heading={t("erpsolutions.heading_3")}
        cards={cards}
        columns={3}
      />

      <ImageSection
        heading={t("erpimplementation.heading_4")}
        text={imagetext3}
        imageUrl="/assets/images/erpimplementation4.png"
        leftColor="#e7f0f7"
        rightColor="#e7f0f7"
        textColor="#000"
      />

      <ProcessFlow
        heading="Our Process"
        steps={[
          { title: "Assessment", icon: "/assets/icons/itsupport8.svg" },
          {
            title: "Customization",
            icon: "/assets/icons/erpimplementation2.svg",
          },
          {
            title: "Data migration",
            icon: "/assets/icons/erpimplementation3.svg",
          },
          {
            title: "Integration",
            icon: "/assets/icons/erpimplementation4.svg",
          },
          {
            title: "Testing & Deployment",
            icon: "/assets/icons/erpimplementation5.svg",
          },
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
