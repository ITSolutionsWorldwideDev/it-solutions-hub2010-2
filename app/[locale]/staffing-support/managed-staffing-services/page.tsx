// app/[locale]/staffing-support/managed-staffing-services/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";
import { ClientLogosSlider } from "@/components/layout/home/AnimationComponents";

export default async function ManagedStaffingServices({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/managedstaff1.png",
      heading: t("managedstff.heading_1"),
      text: t("managedstff.text_1"),
      button: t("managedstff.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("managedstff.text_2")}
      <br />
      <br />
      {t("managedstff.text_3")}
    </>
  );
  const cards = [
    {
      title: t("managedstff.card_heading_1"),
      description: t("managedstff.card_text_1"),
    },
    {
      title: t("managedstff.card_heading_2"),
      description: t("managedstff.card_text_2"),
    },
  ];

  const questions = [
    {
      question: t("managedstff.question1"),
      answer: t("managedstff.answer1"),
    },
    {
      question: t("managedstff.question2"),
      answer: t("managedstff.answer2"),
    },
    {
      question: t("managedstff.question3"),
      answer: t("managedstff.answer3"),
    },
    {
      question: t("managedstff.question4"),
      answer: t("managedstff.answer4"),
    },
    {
      question: t("managedstff.question5"),
      answer: t("managedstff.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#eef8f9"];

  const imagetext2 = (
    <>
      <li>{t("managedstff.listitem1")}</li>
      <li>{t("managedstff.listitem2")}</li>
      <li>{t("managedstff.listitem3")}</li>
      <li>{t("managedstff.listitem4")}</li>
      <li>{t("managedstff.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("managedstff.listitem6")}</li>
      <li>{t("managedstff.listitem7")}</li>
      <li>{t("managedstff.listitem8")}</li>
      <li>{t("managedstff.listitem9")}</li>
      <li>{t("managedstff.listitem10")}</li>
    </>
  );

  /* const logos = [
    { src: "/assets/images/bol.png" },
    { src: "/assets/images/hitech.png" },
    { src: "/assets/images/jumbosports.png" },
    { src: "/assets/images/albelli.png" },
    { src: "/assets/images/kent.png" },
    { src: "/assets/images/ddgroup.png" },
    { src: "/assets/images/bol.png" },
    { src: "/assets/images/hitech.png" },
    { src: "/assets/images/jumbosports.png" },
    { src: "/assets/images/albelli.png" },
    { src: "/assets/images/kent.png" },
    { src: "/assets/images/ddgroup.png" },
    { src: "/assets/images/bol.png" },
    { src: "/assets/images/hitech.png" },
    { src: "/assets/images/jumbosports.png" },
    { src: "/assets/images/albelli.png" },
    { src: "/assets/images/kent.png" },
    { src: "/assets/images/ddgroup.png" },
  ]; */

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/staffingsupport4.png",
      heading:
        "Streamline Your Hiring Process with Expert Managed Staffing - Get Started Today!",
      buttonText: "Get Started Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("managedstff.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/managedstaff2.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
      />
      <InfoSection
        heading={t("managedstff.heading_3")}
        cards={cards}
        columns={2}
      />
      <ImageSection
        heading={t("managedstff.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/managedstaff3.png"
        leftColor="#ebf2f3"
        rightColor="#ebf2f3"
      />
      <ImageSection2
        heading={t("managedstff.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/managedstaff4.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
      />

      <ProcessFlow
        heading="Our Proven Process"
        subheading="A Streamlined Approach to Supply Chain Excellence"
        steps={[
          { title: "Assessment", icon: "/assets/icons/managedstaff1.svg" },
          { title: "Recruitment", icon: "/assets/icons/managedstaff2.svg" },
          { title: "Onboarding", icon: "/assets/icons/managedstaff3.svg" },
        ]}
        circleColor="#00AAB4"
        lineColor="#00AAB4"
        textColor="#000"
      />
      {/* <LogosSlider images={logos} /> */}
      <ClientLogosSlider />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#175864"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
