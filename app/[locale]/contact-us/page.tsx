// app/[locale]/contact-us/page.tsx
import initServerI18n from "@/utils/serverTranslation";
import BannerSection from "@/components/layout/banner-section";
import ContactCard from "@/components/layout/contact-page-section";
import LocationMap from "@/components/layout/location-map";
// import Herosection from '../../components/Herosection2';
// import ContactSection from '../../components/Contact';
// import LocationMap from '../../components/Location';

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
      backgroundImage: "/assets/images/contactus1.png",
      heading: t("contactus.heading_1"),
      text: t("contactus.text_1"),
    },
  ];
  return (
    <div>
      <BannerSection slides={slides} />
      <ContactCard locale={locale} />
      <LocationMap />

      {/* <Herosection slides={slides} />
      <ContactSection />
      <LocationMap /> */}
    </div>
  );
}
