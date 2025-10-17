// app/[locale]/it-support/automation-services/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
// import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function AutomationServices({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/automationservices1.png",
      heading: t("automationservices.heading_1"),
      text: t("automationservices.text_1"),
      button: t("automationservices.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("automationservices.text_2")}
      <br />
      {t("automationservices.text_3")}
    </>
  );

  const questions = [
    {
      question: t("automationservices.question1"),
      answer: t("automationservices.answer1"),
    },
    {
      question: t("automationservices.question2"),
      answer: t("automationservices.answer2"),
    },
    {
      question: t("automationservices.question3"),
      answer: t("automationservices.answer3"),
    },
    {
      question: t("automationservices.question4"),
      answer: t("automationservices.answer4"),
    },
    {
      question: t("automationservices.question5"),
      answer: t("automationservices.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#ecf3f8"];

  const imagetext2 = (
    <>
      <li>{t("automationservices.listitem1")}</li>
      <li>{t("automationservices.listitem2")}</li>
      <li>{t("automationservices.listitem3")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("automationservices.listitem11")}</li>
      <li>{t("automationservices.listitem12")}</li>
      <li>{t("automationservices.listitem13")}</li>
      <li>{t("automationservices.listitem14")}</li>
      <li>{t("automationservices.listitem15")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/automationservices5.png",
      heading: "Automate and Optimize Your Operations – Reach Out Today!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("automationservices.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/automationservices2.png"
        borderWidth="2px"
        borderColor="#c7dcec"
      />
      <ImageSection
        heading={t("automationservices.heading_3")}
        text={imagetext2}
        imageUrl="/assets/images/automationservices3.png"
        leftColor="#0D69AD"
        rightColor="#0D69AD"
        textColor="#fff"
      />
      <ImageSection2
        heading={t("automationservices.heading_4")}
        text={imagetext3}
        imageUrl="/assets/images/automationservices4.png"
        borderWidth="2px"
        borderColor="#c7dcec"
      />

      <ProcessFlow
        heading="How We Work"
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
