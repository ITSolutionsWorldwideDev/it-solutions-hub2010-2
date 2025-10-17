// app/[locale]/logistics/warehouse-design-&-layouts/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import ImageSection2 from "@/components/layout/image-section-2";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";

export default async function WarehouseDesignLayouts({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/warehousedesign1.png",
      heading: t("warehousedesign.heading_1"),
      text: t("warehousedesign.text_1"),
      button: t("warehousedesign.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = <>{t("warehousedesign.text_2")}</>;

  const questions = [
    {
      question: t("warehousedesign.question1"),
      answer: t("warehousedesign.answer1"),
    },
    {
      question: t("warehousedesign.question2"),
      answer: t("warehousedesign.answer2"),
    },
    {
      question: t("warehousedesign.question3"),
      answer: t("warehousedesign.answer3"),
    },
    {
      question: t("warehousedesign.question4"),
      answer: t("warehousedesign.answer4"),
    },
    {
      question: t("warehousedesign.question5"),
      answer: t("warehousedesign.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#FEAE3D"];

  const imagetext2 = (
    <>
      <li>{t("warehousedesign.listitem1")}</li>
      <li>{t("warehousedesign.listitem2")}</li>
      <li>{t("warehousedesign.listitem3")}</li>
      <li>{t("warehousedesign.listitem4")}</li>
      <li>{t("warehousedesign.listitem5")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/warehousedesign10.png",
      heading:
        "Maximize Space and Productivity—Start Your Warehouse Design Project with Us Today!",
      buttonText: "Schedule Your Consultation Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("warehousedesign.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/warehousedesign2.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection
        heading={t("warehousedesign.heading_3")}
        text={t("warehousedesign.text_3")}
        imageUrl="/assets/images/warehousedesign3.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection2
        heading={t("warehousedesign.heading_4")}
        text={t("warehousedesign.text_4")}
        imageUrl="/assets/images/warehousedesign4.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection
        heading={t("warehousedesign.heading_5")}
        text={t("warehousedesign.text_5")}
        imageUrl="/assets/images/warehousedesign5.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection2
        heading={t("warehousedesign.heading_6")}
        text={t("warehousedesign.text_6")}
        imageUrl="/assets/images/warehousedesign6.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />

      <ImageSection
        heading={t("warehousedesign.heading_7")}
        text={t("warehousedesign.text_7")}
        imageUrl="/assets/images/warehousedesign7.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection2
        heading={t("warehousedesign.heading_8")}
        text={t("warehousedesign.text_8")}
        imageUrl="/assets/images/warehousedesign8.png"
        borderWidth="2px"
        borderColor="#ffd7a0"
      />
      <ImageSection
        heading={t("warehousedesign.heading_9")}
        text={imagetext2}
        imageUrl="/assets/images/warehousedesign9.png"
        leftColor="#FEAE3D"
        rightColor="#FEAE3D"
        textColor="#ffff"
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
