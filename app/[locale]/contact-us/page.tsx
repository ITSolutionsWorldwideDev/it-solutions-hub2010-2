// app/[locale]/contact-us/page.tsx
import dynamicImport from "next/dynamic";
import initServerI18n from "@/utils/serverTranslation";
import BannerSection from "@/components/layout/banner-section";
import ContactCard from "@/components/layout/contact-page-section";

// Lazy load heavy map components below the fold to save main-thread execution time
const LocationMap = dynamicImport(() => import("@/components/layout/location-map"));

export default async function ContactUs({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");
  const slides = [
    {
      backgroundImage: "/assets/images/contactus1.webp",
      heading: t("contactus.heading_1"),
      text: t("contactus.text_1"),
    },
  ];
  return (
    <div>
      <BannerSection slides={slides} />
      <ContactCard locale={locale} />
      <LocationMap />
    </div>
  );
}