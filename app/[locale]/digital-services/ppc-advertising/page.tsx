// app/[locale]/digital-services/ppc-advertising/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import BannerSection2 from "@/components/layout/banner-section-2";
import MarketingBanner from "@/components/ui/marketing-banner";

export default async function PPCAdvertising({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/ppc1.png",
      heading: t("ppc.heading_1"),
      text: t("ppc.text_1"),
      button: t("ppc.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("ppc.text_2")}
      <br />
      <br />
      {t("ppc.text_3")}
    </>
  );
  /* const cards = [
    {
      title: t("scmservices.card2_heading_1"),
      description: t("scmservices.card2_text_1"),
    },
    {
      title: t("scmservices.card2_heading_2"),
      description: t("scmservices.card2_text_2"),
    },
    {
      title: t("scmservices.card2_heading_3"),
      description: t("scmservices.card2_text_3"),
    },
  ]; */

  const cards2 = [
    {
      image: "/assets/images/ppcicon1.png",
      title: t("ppc.card_heading_1"),
      description: t("ppc.card_text_1"),
    },
    {
      image: "/assets/images/ppcicon2.png",
      title: t("ppc.card_heading_2"),
      description: t("ppc.card_text_2"),
    },
    {
      image: "/assets/images/ppcicon3.png",
      title: t("ppc.card_heading_3"),
      description: t("ppc.card_text_3"),
    },
    {
      image: "/assets/images/ppcicon4.png",
      title: t("ppc.card_heading_4"),
      description: t("ppc.card_text_4"),
    },
  ];

  const questions = [
    {
      question: t("ppc.question1"),
      answer: t("ppc.answer1"),
    },
    {
      question: t("ppc.question2"),
      answer: t("ppc.answer2"),
    },
    {
      question: t("ppc.question3"),
      answer: t("ppc.answer3"),
    },
    {
      question: t("ppc.question4"),
      answer: t("ppc.answer4"),
    },
    {
      question: t("ppc.question5"),
      answer: t("ppc.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#f6f0fc"];

  const imagetext2 = (
    <>
      <li>{t("ppc.listitem1")}</li>
      <li>{t("ppc.listitem2")}</li>
      <li>{t("ppc.listitem3")}</li>
      <li>{t("ppc.listitem4")}</li>
      <li>{t("ppc.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("ppc.listitem6")}</li>
      <li>{t("ppc.listitem7")}</li>
      <li>{t("ppc.listitem8")}</li>
      <li>{t("ppc.listitem9")}</li>
      <li>{t("ppc.listitem10")}</li>
    </>
  );

  const imagetext4 = (
    <>
      <li>{t("ppc.listitem11")}</li>
      <li>{t("ppc.listitem12")}</li>
      <li>{t("ppc.listitem13")}</li>
      <li>{t("ppc.listitem14")}</li>
    </>
  );

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("ppc.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/ppc2.png"
        borderWidth="2px"
        borderColor="#f2e8fb"
      />
      <InfoSection heading={t("ppc.heading_3")} cards={cards2} columns={4} />
      <ImageSection
        heading={t("ppc.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/ppc3.png"
        leftColor="#f2e8fb"
        rightColor="#f2e8fb"
        textColor="#000"
      />
      <ImageSection2
        heading={t("ppc.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/ppc4.png"
        borderWidth="2px"
        borderColor="#f2e8fb"
      />
      <ImageSection
        heading={t("ppc.heading_6")}
        text={imagetext4}
        imageUrl="/assets/images/ppc5.png"
        leftColor="#f2e8fb"
        rightColor="#f2e8fb"
        textColor="#000"
      />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <MarketingBanner
        imageSrc="/assets/images/digital6.png"
        title="Get Instant Leads & Higher Conversions with PPC"
        description="Start Your Campaign Today!"
        buttonText="Contact Us Today"
        buttonLink="/contact-us"
      />
    </div>
  );
}
