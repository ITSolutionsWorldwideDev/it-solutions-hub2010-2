// app/[locale]/page.tsx

import AnimationArea from "@/components/layout/home/AnimationArea";
import BlogCarousel from "@/components/layout/home/BlogCarousel";
import ContactSection from "@/components/layout/home/ContactSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AnimationArea />
        <BlogCarousel locale={locale} />
        <ContactSection />
      </main>
    </>
  );
}

// interface LocalePageProps {
//   params: { locale: string };
// }
// { params }: LocalePageProps

/* export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <>
      <BlogCarousel locale={locale} />
    </>
  );
} */
/* 

import type { Metadata } from 'next';
export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
  const { locale } = params;

  return {
    title: `Home | ${locale.toUpperCase()} | IT Solutions`,
    description: 'Localized home page description',
  };
}; */
