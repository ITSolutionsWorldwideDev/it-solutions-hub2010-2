// app/[locale]/logistics/smart-warehouse-solutions/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function SmartWarehouseSolutions({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/smartwarehouse1.png",
      heading: t("smartwarehouse.heading_1"),
      text: t("smartwarehouse.text_1"),
      button: t("smartwarehouse.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("smartwarehouse.text_2")}
      <br />
      <br />
      {t("smartwarehouse.text_3")}
    </>
  );
  const cards = [
    {
      title: t("smartwarehouse.card_heading_1"),
    },
    {
      title: t("smartwarehouse.card_heading_2"),
    },
    {
      title: t("smartwarehouse.card_heading_3"),
    },
    {
      title: t("smartwarehouse.card_heading_4"),
    },
  ];

  const questions = [
    {
      question: t("smartwarehouse.question1"),
      answer: t("smartwarehouse.answer1"),
    },
    {
      question: t("smartwarehouse.question2"),
      answer: t("smartwarehouse.answer2"),
    },
    {
      question: t("smartwarehouse.question3"),
      answer: t("smartwarehouse.answer3"),
    },
    {
      question: t("smartwarehouse.question4"),
      answer: t("smartwarehouse.answer4"),
    },
    {
      question: t("smartwarehouse.question5"),
      answer: t("smartwarehouse.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FEAE3D"];

  const imagetext2 = (
    <>
      <li>{t("smartwarehouse.listitem1")}</li>
      <li>{t("smartwarehouse.listitem2")}</li>
      <li>{t("smartwarehouse.listitem3")}</li>
      <li>{t("smartwarehouse.listitem4")}</li>
      <li>{t("smartwarehouse.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("smartwarehouse.listitem6")}</li>
      <li>{t("smartwarehouse.listitem7")}</li>
      <li>{t("smartwarehouse.listitem8")}</li>
      <li>{t("smartwarehouse.listitem9")}</li>
      <li>{t("smartwarehouse.listitem10")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/logandsupply5.png",
      heading:
        "Enhance Efficiency with Smart Warehouse Solutions - Get Started Today!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("smartwarehouse.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/smartwarehouse2.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <InfoSection
        heading={t("smartwarehouse.heading_3")}
        cards={cards}
        columns={4}
      />
      <ImageSection
        heading={t("smartwarehouse.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/smartwarehouse3.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection2
        heading={t("smartwarehouse.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/smartwarehouse4.png"
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
