// app/[locale]/scm-services/scm-execution/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
// import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function SCMExecution({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/supplychainexecution.png",
      heading: t("supplychainexecution.heading_1"),
      text: t("supplychainexecution.text_1"),
      button: t("scmservices.button_1"),
    },
  ];
  const imagetext = (
    <>
      {t("supplychainexecution.text_2")}
      <br />
      {t("supplychainexecution.text_3")}
    </>
  );

  const cards2 = [
    {
      image: "/assets/images/supplychainexecutionicon1.png",
      title: t("supplychainexecution.card_heading_1"),
      description: t("supplychainexecution.card_text_1"),
    },
    {
      image: "/assets/images/supplychainexecutionicon2.png",
      title: t("supplychainexecution.card_heading_2"),
      description: t("supplychainexecution.card_text_2"),
    },
    {
      image: "/assets/images/supplychainexecutionicon3.png",
      title: t("supplychainexecution.card_heading_3"),
      description: t("supplychainexecution.card_text_3"),
    },
    {
      image: "/assets/images/supplychainexecutionicon4.png",
      title: t("supplychainexecution.card_heading_4"),
      description: t("supplychainexecution.card_text_4"),
    },
  ];

  const questions = [
    {
      question: t("supplychainexecution.question1"),
      answer: t("supplychainexecution.answer1"),
    },
    {
      question: t("supplychainexecution.question2"),
      answer: t("supplychainexecution.answer2"),
    },
    {
      question: t("supplychainexecution.question3"),
      answer: t("supplychainexecution.answer3"),
    },
    {
      question: t("supplychainexecution.question4"),
      answer: t("supplychainexecution.answer4"),
    },
    {
      question: t("supplychainexecution.question5"),
      answer: t("supplychainexecution.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FC4C02"];

  const imagetext2 = (
    <>
      <li>{t("supplychainexecution.listitem1")}</li>

      <li>{t("supplychainexecution.listitem2")}</li>

      <li>{t("supplychainexecution.listitem3")}</li>

      <li>{t("supplychainexecution.listitem4")}</li>

      <li>{t("supplychainexecution.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("supplychainexecution.listitem6")}</li>

      <li>{t("supplychainexecution.listitem7")}</li>

      <li>{t("supplychainexecution.listitem8")}</li>

      <li>{t("supplychainexecution.listitem9")}</li>

      <li>{t("supplychainexecution.listitem10")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/supplychainexecution5.png",
      heading:
        "Unlock Faster, More Reliable Deliveries – Get Started with Supply Chain Execution Excellence!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("supplychainexecution.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/supplychainexecution2.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

      <InfoSection
        heading={t("supplychainexecution.heading_3")}
        cards={cards2}
        columns={4}
      />

      <ImageSection
        heading={t("supplychainexecution.heading_4")}
        text={t("supplychainexecution.text_4")}
        imageUrl="/assets/images/supplychainexecution3.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

      <ImageSection2
        heading={t("supplychainexecution.heading_5")}
        text={imagetext2}
        imageUrl="/assets/images/businessconsultancy4.png"
        leftColor="#FC4C02"
        rightColor="#ffff"
      />

      <ImageSection
        heading={t("supplychainexecution.heading_6")}
        text={imagetext3}
        imageUrl="/assets/images/supplychainexecution4.png"
        borderWidth="2px"
        borderColor="#fed4c2"
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
