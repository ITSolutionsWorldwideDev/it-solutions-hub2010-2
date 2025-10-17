// app/[locale]/digital-services/social-media-marketing/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import BannerSection2 from "@/components/layout/banner-section-2";
import MarketingBanner from "@/components/ui/marketing-banner";
import { ClientLogosSlider } from "@/components/layout/home/AnimationComponents";

export default async function SocialMediaMarketing({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/socialmedia1.png",
      heading: t("socialmedia.heading_1"),
      text: t("socialmedia.text_1"),
      button: t("socialmedia.button_1"),
      textcolor: "#0000",
    },
  ];

  const imagetext = (
    <>
      {t("socialmedia.text_2")}
      <br />
      {t("socialmedia.text_3")}
    </>
  );

  const cards = [
    {
      title: t("socialmedia.card_heading_1"),
      description: t("socialmedia.card_text_1"),
    },
    {
      title: t("socialmedia.card_heading_2"),
      description: t("socialmedia.card_text_2"),
    },
    {
      title: t("socialmedia.card_heading_3"),
      description: t("socialmedia.card_text_3"),
    },
    {
      title: t("socialmedia.card_heading_4"),
      description: t("socialmedia.card_text_4"),
    },
  ];

  const questions = [
    {
      question: t("socialmedia.question1"),
      answer: t("socialmedia.answer1"),
    },
    {
      question: t("socialmedia.question2"),
      answer: t("socialmedia.answer2"),
    },
    {
      question: t("socialmedia.question3"),
      answer: t("socialmedia.answer3"),
    },
    {
      question: t("socialmedia.question4"),
      answer: t("socialmedia.answer4"),
    },
    {
      question: t("socialmedia.question5"),
      answer: t("socialmedia.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#f6f0fc"];

  const imagetext2 = (
    <>
      <li>{t("socialmedia.listitem1")}</li>
      <li>{t("socialmedia.listitem2")}</li>
      <li>{t("socialmedia.listitem3")}</li>
      <li>{t("socialmedia.listitem4")}</li>
      <li>{t("socialmedia.listitem5")}</li>
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

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("socialmedia.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/socialmedia2.png"
        borderWidth="2px"
        borderColor="#f2e8fb"
      />
      <InfoSection
        heading={t("socialmedia.heading_3")}
        cards={cards}
        columns={4}
      />
      <ImageSection
        heading={t("socialmedia.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/socialmedia3.png"
        leftColor="#f2e8fb"
        rightColor="#f2e8fb"
        textColor="#000"
      />
      {/* <LogosSlider images={logos} headingColor="#9B51E0" /> */}
      <ClientLogosSlider />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <MarketingBanner
        imageSrc="/assets/images/socialmedia4.png"
        title="Boost Your Brand Visibility and Growth on Social Media"
        description="Schedule a Consultation!"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
      />
    </div>
  );
}
