// app/[locale]/staffing-support/staffing-consulting-services/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";
import { ClientLogosSlider } from "@/components/layout/home/AnimationComponents";

export default async function StaffingConsultingServices({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/staffingconsulting.png",
      heading: t("staffingconsulting.heading_1"),
      text: t("staffingconsulting.text_1"),
      button: t("staffingconsulting.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("staffingconsulting.text_2")}
      <br />
      <br />
      {t("staffingconsulting.text_3")}
    </>
  );
  const cards = [
    {
      title: t("staffingconsulting.card_heading_1"),
      description: t("staffingconsulting.card_text_1"),
    },
    {
      title: t("staffingconsulting.card_heading_2"),
      description: t("staffingconsulting.card_text_2"),
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
      <li>{t("staffingconsulting.listitem1")}</li>
      <li>{t("staffingconsulting.listitem2")}</li>
      <li>{t("staffingconsulting.listitem3")}</li>
      <li>{t("staffingconsulting.listitem4")}</li>
      <li>{t("staffingconsulting.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("staffingconsulting.listitem6")}</li>
      <li>{t("staffingconsulting.listitem7")}</li>
      <li>{t("staffingconsulting.listitem8")}</li>
      <li>{t("staffingconsulting.listitem9")}</li>
      <li>{t("staffingconsulting.listitem10")}</li>
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
      backgroundImage: "/assets/images/industrystaffing5.png",
      heading:
        "Enhance Your Recruitment Process - Get Started with Expert Staffing Consultancy!",
      buttonText: "Get Started Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("staffingconsulting.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/staffingconsulting2.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
      />
      <InfoSection
        heading={t("staffingconsulting.heading_3")}
        cards={cards}
        columns={2}
      />
      <ImageSection
        heading={t("staffingconsulting.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/staffingconsulting3.png"
        leftColor="#ebf2f3"
        rightColor="#ebf2f3"
      />
      <ImageSection2
        heading={t("staffingconsulting.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/staffingconsulting4.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
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
