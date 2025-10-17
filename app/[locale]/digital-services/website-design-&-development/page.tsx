// app/[locale]/digital-services/website-design-&-development/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import ProcessFlow from "@/components/layout/process-flow";
import FAQSection2 from "@/components/layout/FAQ-section-2";
// import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";
import MarketingBanner from "@/components/ui/marketing-banner";

export default async function WebsiteDesignDevelopment({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/website1.png",
      heading: t("webdev.heading_1"),
      text: t("webdev.text_1"),
      button: t("webdev.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("webdev.text_2")}
      <br />
      <br />
      {t("webdev.text_3")}
      <br />
      <br />
      {t("webdev.text_4")}
    </>
  );
  const cards = [
    {
      title: t("webdev.card_heading_1"),
      description: t("webdev.card_text_1"),
    },
    {
      title: t("webdev.card_heading_2"),
      description: t("webdev.card_text_2"),
    },
    {
      title: t("webdev.card_heading_3"),
      description: t("webdev.card_text_3"),
    },
    {
      title: t("webdev.card_heading_4"),
      description: t("webdev.card_text_4"),
    },
    {
      title: t("webdev.card_heading_5"),
      description: t("webdev.card_text_5"),
    },
    {
      title: t("webdev.card_heading_6"),
      description: t("webdev.card_text_6"),
    },
  ];

  const questions = [
    {
      question: t("webdev.question1"),
      answer: t("webdev.answer1"),
    },
    {
      question: t("webdev.question2"),
      answer: t("webdev.answer2"),
    },
    {
      question: t("webdev.question3"),
      answer: t("webdev.answer3"),
    },
    {
      question: t("webdev.question4"),
      answer: t("webdev.answer4"),
    },
    {
      question: t("webdev.question5"),
      answer: t("webdev.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#f6f0fc"];

  const imagetext2 = (
    <>
      <li>{t("webdev.listitem1")}</li>
      <li>{t("webdev.listitem2")}</li>
      <li>{t("webdev.listitem3")}</li>
      <li>{t("webdev.listitem4")}</li>
      <li>{t("webdev.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("webdev.listitem6")}</li>
      <li>{t("webdev.listitem7")}</li>
      <li>{t("webdev.listitem8")}</li>
      <li>{t("webdev.listitem9")}</li>
      <li>{t("webdev.listitem10")}</li>
    </>
  );

  return (
    <div>
      <BannerSection2 slides={slides} />

      <ImageSection2
        heading={t("webdev.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/webdev2.png"
        borderWidth="2px"
        borderColor="#f2e8fb"
      />
      <InfoSection heading={t("webdev.heading_3")} cards={cards} columns={4} />
      <ImageSection
        heading={t("webdev.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/webdev3.png"
        leftColor="#f2e8fb"
        rightColor="#f2e8fb"
        textColor="#000"
      />
      <ImageSection2
        heading={t("webdev.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/webdev4.png"
        borderWidth="2px"
        borderColor="#f2e8fb"
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
        imageSrc="/assets/images/webdev5.png"
        title="Transform Your Online Presence With Responsive, Fast, and SEO-Optimized Websites"
        description="Contact Us Today!"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
      />
    </div>
  );
}
