// app/[locale]/blogs/[slug]/page.tsx
import { loadBlogs } from "@/lib/loadBlogs";
// import initServerI18n from "@/utils/serverTranslation";
import { notFound } from "next/navigation";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const blogs = await loadBlogs();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  // const i18n = await initServerI18n(locale);
  // const t = await i18n.getFixedT(locale, "common");

  return (
    <>
      <div className="max-w-7xl mx-auto p-6 space-y-8 mt-20">
        <h1 className="text-4xl font-bold text-center text-[#12E193]">
          {blog.content.title}
        </h1>
        <p className="text-gray-500 text-sm mb-8">
          {new Date(blog.date).toLocaleDateString(locale)}
        </p>

        {blog.content.sections?.map((section, index) => (
          <div key={index} className="bg-white">
            {section.title && (
              <h2 className="text-2xl font-semibold text-[#12E193]">
                {section.title}
              </h2>
            )}

            {section.image && (
              <img
                className="w-full h-auto object-cover object-top mb-4"
                src={section.image}
                // alt={section.title}
                alt={`Section ${index + 1}`}
              />
            )}

            {section.subtitle && (
              <h3 className="text-lg font-medium text-black">
                {section.subtitle}
              </h3>
            )}

            <p className="text-gray-700 mt-2 mb-4 whitespace-pre-line">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
