// app/[locale]/blogs/page.tsx

import initServerI18n from "@/utils/serverTranslation";
import { loadBlogs } from "@/lib/loadBlogs";
import BlogCard from "@/components/layout/home/BlogCard";
// import { Metadata } from "next";

type Props = {
  params: {
    locale: string;
  };
};

// export default async function Blogs({ params }: Props) {
export default async function Blogs({
  params,
}: {
  params: Promise<{ locale: string; }>;
}) {
  const { locale } = await params;
  // const { locale } = params;
  const blogs = await loadBlogs();
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return (
    <div className="container mx-auto">
      <main className="flex-1 p-8 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("latest_blogs", "Latest Blogs")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} post={blog} locale={locale} />
          ))}
        </div>
      </main>
    </div>
  );
}

/* 

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i18n = await initServerI18n(params.locale);
  const t = await i18n.getFixedT(params.locale, "common");

  return {
    title: t("latest_blogs", "Latest Blogs"),
    description: t("blog_page_description", "Check out our latest blog posts."),
    openGraph: {
      title: t("latest_blogs", "Latest Blogs"),
      description: t("blog_page_description", "Check out our latest blog posts."),
      url: `https://yourdomain.com/${params.locale}/blogs`,
      images: [
        {
          url: "https://yourdomain.com/og-image.jpg",
          width: 800,
          height: 600,
          alt: "Blog Preview",
        },
      ],
    },
    alternates: {
      canonical: `https://yourdomain.com/${params.locale}/blogs`,
    },
  };
}

 */
