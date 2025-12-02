// app/[locale]/logistics/career/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import ImageSection from "@/components/layout/image-section";
import ImageSection2 from "@/components/layout/image-section-2";
import BannerSection from "@/components/layout/banner-section";

import CardSection from "@/components/layout/card-section";
import CareerJobsSection from "@/components/layout/career-jobs";

export default async function Career({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  const slides = [
    {
      backgroundImage: "/assets/images/career1.png",
      heading: t("career.heading_1"),
    },
  ];

  return (
    <div>
      <BannerSection slides={slides} />
      <ImageSection
        heading={t("career.heading_2")}
        text={t("career.text_2")}
        imageUrl="/assets/images/career2.png"
      />
      <ImageSection2
        heading={t("career.heading_3")}
        // subtitle={t("career.subtitle_2")}
        text={t("career.text_3")}
        imageUrl="/assets/images/career3.png"
      />
      <CardSection heading={t('career.heading_4')} text={t('career.text_4')} />
      <CareerJobsSection />
    </div>
  );
}
