// app/[locale]/digital-services/seo-services/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import BannerSection2 from "@/components/layout/banner-section-2";
import MarketingBanner from "@/components/ui/marketing-banner";

export default async function SEOServices({
  params,
}: {
  params: Promise<{ locale: string; }>;
})  {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/seo1.png",
      heading: t("seo.heading_1"),
      text: t("seo.text_1"),
      button: t("seo.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("seo.text_2")}
      <br />
      <br />
      {t("seo.text_3")}
    </>
  );
  const cards = [
    {
      title: t("seo.card_heading_1"),
      description: t("seo.card_text_1"),
    },
    {
      title: t("seo.card_heading_2"),
      description: t("seo.card_text_2"),
    },
    {
      title: t("seo.card_heading_3"),
      description: t("seo.card_text_3"),
    },
    {
      title: t("seo.card_heading_4"),
      description: t("seo.card_text_4"),
    },
  ];

  const questions = [
    {
      question: t("seo.question1"),
      answer: t("seo.answer1"),
    },
    {
      question: t("seo.question2"),
      answer: t("seo.answer2"),
    },
    {
      question: t("seo.question3"),
      answer: t("seo.answer3"),
    },
    {
      question: t("seo.question4"),
      answer: t("seo.answer4"),
    },
    {
      question: t("seo.question5"),
      answer: t("seo.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#f6f0fc"];

  const imagetext2 = (
    <>
      <li>{t("seo.listitem1")}</li>
      <li>{t("seo.listitem2")}</li>
      <li>{t("seo.listitem3")}</li>
      <li>{t("seo.listitem4")}</li>
      <li>{t("seo.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("seo.listitem6")}</li>
      <li>{t("seo.listitem7")}</li>
      <li>{t("seo.listitem8")}</li>
      <li>{t("seo.listitem9")}</li>
      <li>{t("seo.listitem10")}</li>
    </>
  );

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("seo.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/seo2.png"
        borderWidth="2px"
        borderColor="#f2e8fb"
      />
      <InfoSection heading={t("seo.heading_3")} cards={cards} columns={4} />
      <ImageSection
        heading={t("seo.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/seo3.png"
        leftColor="#f2e8fb"
        rightColor="#f2e8fb"
        textColor="#000"
      />
      <ImageSection2
        heading={t("seo.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/seo4.png"
        borderWidth="2px"
        borderColor="#f2e8fb"
      />
      <ProcessFlow
        heading="Our Process"
        steps={[
          { title: "Analyze", icon: "/assets/icons/seoicon1.svg" },
          { title: "Optimize", icon: "/assets/icons/seoicon2.svg" },
          { title: "Rank", icon: "/assets/icons/seoicon3.svg" },
        ]}
        circleColor="#9B51E0"
        lineColor="#9B51E0"
        textColor="#000"
      />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <MarketingBanner
        imageSrc="/assets/images/webdev5.png"
        title="Rank Higher and Drive More Traffic"
        description="Get Started with Our SEO Services Today!"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
      />
    </div>
  );
}
