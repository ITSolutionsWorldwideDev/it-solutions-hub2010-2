// app/[locale]/blogs/page.tsx
import BlogsClient from "@/components/layout/home/BlogsClient";
import initServerI18n from "@/utils/serverTranslation";


export default async function BlogsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return <BlogsClient locale={locale} title={t("latest_blogs", "Latest Blogs")} />;
}

/* "use client";

import { useEffect, useState } from "react";
import initServerI18n from "@/utils/serverTranslation";
// import { loadBlogs } from "@/lib/loadBlogs";
import BlogCard from "@/components/layout/home/BlogCard";

type Props = {
  params: {
    locale: string;
  };
};

type BlogSection = {
  title?: string;
  subtitle?: string;
  content: string;
  image?: string;
};

type BlogData = {
  title: string;
  date: string;
  description?: string;
  featuredImage?: string;
  sections: BlogSection[];
};

type BlogEntry = {
  slug: string;
  content: BlogData;
  date: Date;
};

interface ApiResponse {
  items: BlogSection[];
  totalResults: number;
  pageSize: number;
  currentPage: number;
  totalPages: number;
}

const PAGE_SIZE = 20;

export default async function Blogs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // const { locale } = params;
  // const blogs = await loadBlogs();

  const [Blogs, setBlogs] = useState<BlogSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBlogs = async (page = 1) => {
    setLoading(true);
    try {

      const res = await fetch(
        `/api/blogs?page=${page}&limit=${PAGE_SIZE}`,
        {
          cache: "no-store",
        },
      );
      const data: ApiResponse = await res.json();
      setBlogs(data.items || []);
      setTotalPages(data.totalPages);
      setCurrentPage(data.currentPage);
    } catch (err) {
      console.error("Failed to load Blogs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  if (loading) return <p>Loading Blogs...</p>;

  const i18nInstance = await initServerI18n(locale);
  const t = await i18nInstance.getFixedT(locale, "common");

  return (
    <div className="container mx-auto">
      <main className="flex-1 p-8 min-h-screen">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("latest_blogs", "Latest Blogs")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Blogs.map((blog) => (
            <BlogCard key={blog.slug} post={blog} locale={locale} />
          ))}
        </div>
      </main>
    </div>
  );
} */

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
