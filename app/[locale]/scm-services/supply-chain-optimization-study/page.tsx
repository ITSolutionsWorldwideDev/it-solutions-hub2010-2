// app/[locale]/scm-services/supply-chain-optimization-study/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
// import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function SupplyChainOptimizationStudy({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/supplychainoptimizationstudy.png",
      heading: t("supplychainoptimizationstudy.heading_1"),
      text: t("supplychainoptimizationstudy.text_1"),
      button: t("supplychainoptimizationstudy.button_1"),
    },
  ];
  /* const imagetext = (
    <>
      {t('scmservices.text_2')}
      <br />
      <br />
      {t('scmservices.text_3')}
    </>
  ); 
  const cards = [
    {
      title: t('scmservices.card2_heading_1'),
      description: t('scmservices.card2_text_1'),
    },
    {
      title: t('scmservices.card2_heading_2'),
      description: t('scmservices.card2_text_2'),
    },
    {
      title: t('scmservices.card2_heading_3'),
      description: t('scmservices.card2_text_3'),
    },
  ];
   const cards2 = [
    {
      image: '/assets/images/scmicon1.png',
      title: t('scmservices.card_heading_1'),
      description: t('scmservices.card_text_1'),
    },
    {
      image: '/assets/images/scmicon2.png',
      title: t('scmservices.card_heading_2'),
      description: t('scmservices.card_text_2'),
    },
    {
      image: '/assets/images/scmicon3.png',
      title: t('scmservices.card_heading_3'),
      description: t('scmservices.card_text_3'),
    },
  ]; */

  const questions = [
    {
      question: t("supplychainoptimizationstudy.question1"),
      answer: t("supplychainoptimizationstudy.answer1"),
    },
    {
      question: t("supplychainoptimizationstudy.question2"),
      answer: t("supplychainoptimizationstudy.answer2"),
    },
    {
      question: t("supplychainoptimizationstudy.question3"),
      answer: t("supplychainoptimizationstudy.answer3"),
    },
    {
      question: t("supplychainoptimizationstudy.question4"),
      answer: t("supplychainoptimizationstudy.answer4"),
    },
    {
      question: t("supplychainoptimizationstudy.question5"),
      answer: t("supplychainoptimizationstudy.answer5"),
    },
    {
      question: t("supplychainoptimizationstudy.question6"),
      answer: (
        <>
          <ul className="list-disc ml-2">
            <li>{t("supplychainoptimizationstudy.answer6_part1")}</li>
            <li>{t("supplychainoptimizationstudy.answer6_part2")}</li>
            <li>{t("supplychainoptimizationstudy.answer6_part3")}</li>
            <li>{t("supplychainoptimizationstudy.answer6_part4")}</li>
          </ul>
        </>
      ),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FC4C02"];

  const imagetext2 = (
    <>
      <li>{t("supplychainoptimizationstudy.listitem1")}</li>
      <br />
      <li>{t("supplychainoptimizationstudy.listitem2")}</li>
      <br />
      <li>{t("supplychainoptimizationstudy.listitem3")}</li>
      <br />
      <li>{t("supplychainoptimizationstudy.listitem4")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/scm4.png",
      heading:
        "Ready to Optimize? Contact Us for Your Tailored Supply Chain Study!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("supplychainoptimizationstudy.heading_2")}
        text={t("supplychainoptimizationstudy.text_2")}
        imageUrl="/assets/images/supplychainoptimizationstudy2.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

      <ImageSection
        heading={t("supplychainoptimizationstudy.heading_3")}
        text={t("supplychainoptimizationstudy.text_3")}
        imageUrl="/assets/images/supplychainoptimizationstudy3.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

      <ImageSection2
        heading={t("supplychainoptimizationstudy.heading_4")}
        text={t("supplychainoptimizationstudy.text_4")}
        imageUrl="/assets/images/supplychainoptimizationstudy4.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

      <ImageSection
        heading={t("supplychainoptimizationstudy.heading_5")}
        text={t("supplychainoptimizationstudy.text_5")}
        imageUrl="/assets/images/supplychainoptimizationstudy5.png"
        borderWidth="2px"
        borderColor="#fed4c2"
      />

      <ImageSection2
        heading={t("supplychainoptimizationstudy.heading_6")}
        text={imagetext2}
        imageUrl="/assets/images/supplychainoptimizationstudy6.png"
        leftColor="#FC4C02"
        rightColor="#ffff"
      />

      <ProcessFlow
        heading="Our Process"
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
