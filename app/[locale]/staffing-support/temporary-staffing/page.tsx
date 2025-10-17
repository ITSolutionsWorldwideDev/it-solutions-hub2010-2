// app/[locale]/staffing-support/temporary-staffing/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";
import { ClientLogosSlider } from "@/components/layout/home/AnimationComponents";

export default async function TemporaryStaffing({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/tempstaffing1.png",
      heading: t("tempstaffing.heading_1"),
      text: t("tempstaffing.text_1"),
      button: t("tempstaffing.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("tempstaffing.text_2")}
      <br />
      <br />
      {t("tempstaffing.text_3")}
    </>
  );
  const cards = [
    {
      title: t("tempstaffing.card_heading_1"),
      description: t("tempstaffing.card_text_1"),
    },
    {
      title: t("tempstaffing.card_heading_2"),
      description: t("tempstaffing.card_text_2"),
    },
    {
      title: t("tempstaffing.card_heading_3"),
      description: t("tempstaffing.card_text_3"),
    },
  ];

  const questions = [
    {
      question: t("tempstaffing.question1"),
      answer: t("tempstaffing.answer1"),
    },
    {
      question: t("tempstaffing.question2"),
      answer: t("tempstaffing.answer2"),
    },
    {
      question: t("tempstaffing.question3"),
      answer: t("tempstaffing.answer3"),
    },
    {
      question: t("tempstaffing.question4"),
      answer: t("tempstaffing.answer4"),
    },
    {
      question: t("tempstaffing.question5"),
      answer: t("tempstaffing.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#eef8f9"];

  const imagetext2 = (
    <>
      <li>{t("tempstaffing.listitem1")}</li>
      <li>{t("tempstaffing.listitem2")}</li>
      <li>{t("tempstaffing.listitem3")}</li>
      <li>{t("tempstaffing.listitem4")}</li>
      <li>{t("tempstaffing.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("tempstaffing.listitem6")}</li>
      <li>{t("tempstaffing.listitem7")}</li>
      <li>{t("tempstaffing.listitem8")}</li>
      <li>{t("tempstaffing.listitem9")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/staffingsupport4.png",
      heading: "Hire Skilled Temporary Staff On-Demand - Contact Us Today!",
      buttonText: "Get Started Now",
      buttonLink: "/contact-us",
    },
  ];



  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("tempstaffing.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/tempstaffing2.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
      />
      <InfoSection heading={t("tempstaffing.heading_3")} cards={cards} />
      <ImageSection
        heading={t("tempstaffing.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/tempstaffing3.png"
        leftColor="#ebf2f3"
        rightColor="#ebf2f3"
        textColor="#000"
      />
      <ImageSection2
        heading={t("tempstaffing.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/tempstaffing4.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
      />
      <ProcessFlow
        heading="Our Process"
        steps={[
          { title: "Consult", icon: "/assets/icons/tempstaffingicon1.svg" },
          { title: "Match", icon: "/assets/icons/tempstaffingicon2.svg" },
          { title: "Deploy", icon: "/assets/icons/tempstaffingicon3.svg" },
        ]}
        circleColor="#29A1B6"
        lineColor="#29A1B6"
        textColor="#000"
      />

      {/* <LogosSlider images={logos} /> */}
      <ClientLogosSlider />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#12E193"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
