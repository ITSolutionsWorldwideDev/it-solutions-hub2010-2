// app/[locale]/logistics/logistics-&-supply-chain-specialists/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function LogisticSupplyChainSpecialists({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/logandsupply1.png",
      heading: t("logandsupplychain.heading_1"),
      text: t("logandsupplychain.text_1"),
      button: t("logandsupplychain.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = <>{t("logandsupplychain.text_2")}</>;
  const cards = [
    {
      title: t("logandsupplychain.card_heading_1"),
    },
    {
      title: t("logandsupplychain.card_heading_2"),
    },
    {
      title: t("logandsupplychain.card_heading_3"),
    },
    {
      title: t("logandsupplychain.card_heading_4"),
    },
  ];

  const questions = [
    {
      question: t("logandsupplychain.question1"),
      answer: t("logandsupplychain.answer1"),
    },
    {
      question: t("logandsupplychain.question2"),
      answer: t("logandsupplychain.answer2"),
    },
    {
      question: t("logandsupplychain.question3"),
      answer: t("logandsupplychain.answer3"),
    },
    {
      question: t("logandsupplychain.question4"),
      answer: t("logandsupplychain.answer4"),
    },
    {
      question: t("logandsupplychain.question5"),
      answer: t("logandsupplychain.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FEAE3D"];

  const imagetext2 = (
    <>
      <li>{t("logandsupplychain.listitem1")}</li>
      <li>{t("logandsupplychain.listitem2")}</li>
      <li>{t("logandsupplychain.listitem3")}</li>
      <li>{t("logandsupplychain.listitem4")}</li>
      <li>{t("logandsupplychain.listitem5-1")}</li>
      <li>{t("logandsupplychain.listitem6-1")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("logandsupplychain.listitem5")}</li>
      <li>{t("logandsupplychain.listitem6")}</li>
      <li>{t("logandsupplychain.listitem7")}</li>
      <li>{t("logandsupplychain.listitem8")}</li>
      <li>{t("logandsupplychain.listitem9")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/logandsupply5.png",
      heading:
        "Optimize Your Supply Chain for Maximum Efficiency - Get in Touch Today!",
      buttonText: "Get Started Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("logandsupplychain.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/logandsupply2.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection
        heading={t("logandsupplychain.heading_3")}
        text={imagetext2}
        imageUrl="/assets/images/logandsupply3.png"
        leftColor="#FEAE3D"
        rightColor="#FEAE3D"
        textColor="#ffff"
      />
      <InfoSection
        heading={t("logandsupplychain.heading_4")}
        cards={cards}
        columns={4}
      />
      <ImageSection
        heading={t("logandsupplychain.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/logandsupply4.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#FEAE3D"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
