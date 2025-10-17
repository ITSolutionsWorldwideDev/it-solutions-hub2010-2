// app/[locale]/scm-services/scm-consultancy/page.tsx

import initServerI18n from "@/utils/serverTranslation";
// import ImageSection from "@/components/layout/image-section";
// import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function SCMConsultancy({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/scmconsultancy1.png",
      heading: t("scmconsultancy.heading_1"),
      text: t("scmconsultancy.text_1"),
      button: t("scmconsultancy.button_1"),
    },
  ];

  const questions = [
    {
      question: t("scmconsultancy.question1"),
      answer: t("scmconsultancy.answer1"),
    },
    {
      question: t("scmconsultancy.question2"),
      answer: t("scmconsultancy.answer2"),
    },
    {
      question: t("scmconsultancy.question3"),
      answer: t("scmconsultancy.answer3"),
    },
    {
      question: t("scmconsultancy.question4"),
      answer: t("scmconsultancy.answer4"),
    },
    {
      question: t("scmconsultancy.question5"),
      answer: t("scmconsultancy.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FC4C02"];

  const imagetext2 = (
    <>
      <li>{t("scmconsultancy.listitem1")}</li>
      <li>{t("scmconsultancy.listitem2")}</li>
      <li>{t("scmconsultancy.listitem3")}</li>
      <li>{t("scmconsultancy.listitem4")}</li>
      <li>{t("scmconsultancy.listitem5")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/scm4.png",
      heading:
        "Unlock Your Supply Chain Potential – Contact Us for a Free Consultation Today!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("scmconsultancy.heading_2")}
        text={imagetext2}
        imageUrl="/assets/images/scmconsultancy2.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

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
