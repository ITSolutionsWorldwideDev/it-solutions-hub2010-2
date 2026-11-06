// app/[locale]/career/page.tsx
import dynamicImport from "next/dynamic";
import initServerI18n from "@/utils/serverTranslation";
import { Metadata } from "next";

// Keep Hero static for instant LCP on mobile
import CareerHeroSection from "@/components/layout/career-hero-section";

// Lazy load all below-the-fold components to reduce main-thread execution time
const CtaSplitSection = dynamicImport(() => import("@/components/layout/cta-split-section"));
const CareerGrowthSection = dynamicImport(() => import("@/components/layout/career-growth-section"));
const CareerJobsSection = dynamicImport(() => import("@/components/layout/career-jobs"));
const CareerOpenApplication = dynamicImport(() => import("@/components/layout/career-open-application"));

// ISR revalidation time
export const revalidate = 3600;
export const dynamic = "force-static";

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  return {
    title: {
      absolute: "IT & Supply Chain Jobs in Netherlands | Apply Now",
    },
    description:
      "Looking for IT, supply chain or digital marketing jobs in the Netherlands? Explore career opportunities at IT Solutions Worldwide and grow with us.",
  };
}

export default async function Career(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  const { locale } = params;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return (
    <div>
      {/* CAREER HERO - Loaded immediately for optimal LCP */}
      <CareerHeroSection
        eyebrow="Join Our Team"
        heading="Build Your Career. Make Work Matter."
        subtext="Join a global team helping businesses work smarter, move faster, and grow further."
        tags={[
          "Global Team",
          "International Clients",
          "Growing Careers",
          "Real Responsibility",
        ]}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
        backgroundImage="/assets/images/career/c_bg"
      />

      {/* DYNAMICALLY LOADED BELOW-THE-FOLD SECTIONS */}
      <CtaSplitSection
        eyebrow="Our Work · Portfolio"
        heading="Let's Build Something Exceptional Together."
        highlightWord="Exceptional"
        subtext="Tell us about your project. We'll respond within one business day with a tailored proposal."
        imageUrl="/assets/images/career/c-bg1.webp"
        imageAlt="Team collaborating on a project"
        overlayText="Career Open."
      />

      <CareerGrowthSection />

      <CareerJobsSection />

      <CareerOpenApplication />
    </div>
  );
}