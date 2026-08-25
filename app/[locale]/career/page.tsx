// app/[locale]/career/page.tsx
import initServerI18n from "@/utils/serverTranslation";
import { Metadata } from "next";

// Correct imports matching components/layout/ folder paths
import CareerHeroSection from "@/components/layout/career-hero-section";
import CtaSplitSection from "@/components/layout/cta-split-section";
import CareerGrowthSection from "@/components/layout/career-growth-section";
import CareerJobsSection from "@/components/layout/career-jobs";
import CareerOpenApplication from "@/components/layout/career-open-application";

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
      {/* CAREER HERO */}
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
        backgroundImage="/assets/images/career/c_bg.webp"
      />

      {/* CTA SPLIT SECTION */}
      <CtaSplitSection
        eyebrow="Our Work · Portfolio"
        heading="Let's Build Something Exceptional Together."
        highlightWord="Exceptional"
        subtext="Tell us about your project. We'll respond within one business day with a tailored proposal."
        imageUrl="/assets/images/career/c-bg1.webp"
        imageAlt="Team collaborating on a project"
        overlayText="Career Open."
      />

      {/* CAREER GROWTH SECTION */}
      <CareerGrowthSection />

      {/* JOBS SECTION */}
      <CareerJobsSection />

      {/* OPEN APPLICATION SECTION */}
      <CareerOpenApplication />
    </div>
  );
}