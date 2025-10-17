// app/[locale]/digital-services/ecommerce-development/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import BannerSection2 from "@/components/layout/banner-section-2";
import MarketingBanner from "@/components/ui/marketing-banner";

export default async function EcommerceDevelopment({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/ecommerce1.png",
      heading: t("ecommerce.heading_1"),
      text: t("ecommerce.text_1"),
      button: t("ecommerce.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("ecommerce.text_2")}
      <br />
      <br />
      {t("ecommerce.text_3")}
    </>
  );

  const cards2 = [
    {
      image: "/assets/images/ecommerce6.png",
      title: t("ecommerce.card_heading_1"),
      description: t("ecommerce.card_text_1"),
    },
    {
      image: "/assets/images/ecommerce7.png",
      title: t("ecommerce.card_heading_2"),
      description: t("ecommerce.card_text_2"),
    },
    {
      image: "/assets/images/ecommerce8.png",
      title: t("ecommerce.card_heading_3"),
      description: t("ecommerce.card_text_3"),
    },
    {
      image: "/assets/images/ecommerce9.png",
      title: t("ecommerce.card_heading_4"),
      description: t("ecommerce.card_text_4"),
    },
  ];

  const questions = [
    {
      question: t("ecommerce.question1"),
      answer: t("ecommerce.answer1"),
    },
    {
      question: t("ecommerce.question2"),
      answer: t("ecommerce.answer2"),
    },
    {
      question: t("ecommerce.question3"),
      answer: t("ecommerce.answer3"),
    },
    {
      question: t("ecommerce.question4"),
      answer: t("ecommerce.answer4"),
    },
    {
      question: t("ecommerce.question5"),
      answer: t("ecommerce.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#f6f0fc"];

  const imagetext2 = (
    <>
      <li>{t("ecommerce.listitem1")}</li>
      <li>{t("ecommerce.listitem2")}</li>
      <li>{t("ecommerce.listitem3")}</li>
      <li>{t("ecommerce.listitem4")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("ecommerce.listitem5")}</li>
      <li>{t("ecommerce.listitem6")}</li>
      <li>{t("ecommerce.listitem7")}</li>
      <li>{t("ecommerce.listitem8")}</li>
      <li>{t("ecommerce.listitem9")}</li>
      <li>{t("ecommerce.listitem10")}</li>
    </>
  );

  const imagetext4 = (
    <>
      <li>{t("ecommerce.listitem11")}</li>
      <li>{t("ecommerce.listitem12")}</li>
      <li>{t("ecommerce.listitem13")}</li>
      <li>{t("ecommerce.listitem14")}</li>
    </>
  );

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("ecommerce.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/ecommerce2.png"
        borderWidth="2px"
        borderColor="#f2e8fb"
      />
      <InfoSection
        heading={t("ecommerce.heading_3")}
        cards={cards2}
        columns={4}
      />
      <ImageSection
        heading={t("ecommerce.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/ecommerce3.png"
        leftColor="#f2e8fb"
        rightColor="#f2e8fb"
        textColor="#000"
      />
      <ImageSection2
        heading={t("ecommerce.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/ecommerce4.png"
        borderWidth="2px"
        borderColor="#f2e8fb"
      />
      <ImageSection
        heading={t("ecommerce.heading_6")}
        text={imagetext4}
        imageUrl="/assets/images/ecommerce5.png"
        leftColor="#f2e8fb"
        rightColor="#f2e8fb"
        textColor="#000"
      />
      <ProcessFlow
        heading="Our Proven Process"
        steps={[
          { title: "Planning", icon: "/assets/icons/webdevicon1.svg" },
          { title: "Design", icon: "/assets/icons/webdevicon2.svg" },
          { title: "Development", icon: "/assets/icons/webdevicon3.svg" },
          { title: "Testing", icon: "/assets/icons/webdevicon4.svg" },
          { title: "Launch", icon: "/assets/icons/webdevicon5.svg" },
        ]}
        circleColor="#9B51E0"
        lineColor="#9B51E0"
        textColor="#000"
      />

      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <MarketingBanner
        imageSrc="/assets/images/digital6.png"
        title="Launch & Scale Your Online Store with Expert E-Commerce Solutions"
        description="Get Started Today!"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
      />
    </div>
  );
}
