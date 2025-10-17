// app/[locale]/supply-health-check/page.tsx
import initServerI18n from "@/utils/serverTranslation";
import BannerSection from "@/components/layout/banner-section";
import SCMForm from "@/components/layout/scm/scm-form";

export default async function SCMPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");
  const translations = i18nInstance.getResourceBundle(locale, 'common');
  
  const slides = [
    {
      backgroundImage: "/assets/images/Supply_check_background_Image.png",
      heading:"Supply Chain Health Check",
    //   heading: t("supplyChainHealthCheckHeading") || "Supply Chain Health Check",
    },
  ];

  return (
    <div>
      <BannerSection slides={slides} />
      <SCMForm locale={locale} translations={translations} />
    </div>
  );
}
