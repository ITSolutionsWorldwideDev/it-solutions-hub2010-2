// app/[locale]/staffing-support/remote-&-virtual-staffing/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import InfoSection from "@/components/layout/info-section";
import ImageSection2 from "@/components/layout/image-section-2";
import FAQSection2 from "@/components/layout/FAQ-section-2";
import ConsultationSection from "@/components/layout/consultation-section";
import BannerSection2 from "@/components/layout/banner-section-2";
import { ClientLogosSlider } from "@/components/layout/home/AnimationComponents";

export default async function RemoteVirtualStaffing({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/remotestaff1.png",
      heading: t("remotestff.heading_1"),
      text: t("remotestff.text_1"),
      button: t("remotestff.button_1"),
      textcolor: "#0000",
    },
  ];
  const imagetext = (
    <>
      {t("remotestff.text_2")}
      <br />
      <br />
      {t("remotestff.text_3")}
    </>
  );
  const cards = [
    {
      title: t("remotestff.card_heading_1"),
      description: t("remotestff.card_text_1"),
    },
    {
      title: t("remotestff.card_heading_2"),
      description: t("remotestff.card_text_2"),
    },
  ];

  const questions = [
    {
      question: t("remotestff.question1"),
      answer: t("remotestff.answer1"),
    },
    {
      question: t("remotestff.question2"),
      answer: t("remotestff.answer2"),
    },
    {
      question: t("remotestff.question3"),
      answer: t("remotestff.answer3"),
    },
    {
      question: t("remotestff.question4"),
      answer: t("remotestff.answer4"),
    },
    {
      question: t("remotestff.question5"),
      answer: t("remotestff.answer5"),
    },
  ];

  const gradientColors = ["#ffffff", "#f3f4f6", "#eef8f9"];

  const imagetext2 = (
    <>
      <li>{t("remotestff.listitem1")}</li>
      <li>{t("remotestff.listitem2")}</li>
      <li>{t("remotestff.listitem3")}</li>
      <li>{t("remotestff.listitem4")}</li>
      <li>{t("remotestff.listitem5")}</li>
    </>
  );

  const imagetext3 = (
    <>
      <li>{t("remotestff.listitem6")}</li>
      <li>{t("remotestff.listitem7")}</li>
      <li>{t("remotestff.listitem8")}</li>
      <li>{t("remotestff.listitem9")}</li>
      <li>{t("remotestff.listitem10")}</li>
    </>
  );

  const slidesData2 = [
    {
      backgroundImage: "/assets/images/staffingsupport4.png",
      heading:
        "Find Skilled Remote Professionals to Grow Your Business – Reach Out Today!",
      buttonText: "Get Started Now",
      buttonLink: "/contact-us",
    },
  ];

  return (
    <div>
      <BannerSection2 slides={slides} />
      <ImageSection2
        heading={t("remotestff.heading_2")}
        text={imagetext}
        imageUrl="/assets/images/remotestaff2.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
      />
      <InfoSection
        heading={t("remotestff.heading_3")}
        cards={cards}
        columns={2}
      />
      <ImageSection
        heading={t("remotestff.heading_4")}
        text={imagetext2}
        imageUrl="/assets/images/remotestaff3.png"
        leftColor="#ebf2f3"
        rightColor="#ebf2f3"
      />
      <ImageSection2
        heading={t("remotestff.heading_5")}
        text={imagetext3}
        imageUrl="/assets/images/remotestaff4.png"
        borderWidth="2px"
        borderColor="#ebf2f3"
      />
      {/* <LogosSlider images={logos} /> */}
      <ClientLogosSlider />
      <FAQSection2 questions={questions} gradientColors={gradientColors} />
      <ConsultationSection
        slides={slidesData2}
        hoverBgColor="#12E193"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
}
