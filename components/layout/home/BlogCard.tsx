// components/layout/home/BlogCard.tsx

import Link from "next/link";
import { BlogEntry } from "@/types/blogs";

type Props = {
  post: BlogEntry;
  locale: string;
};

export default function BlogCard({ post, locale }: Props) {
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const getDescription = () => {
    if (post.content.description) return post.content.description;
    if (post.content.sections?.length) {
      if (post.content.sections[0].content) return post.content.sections[0].content;
      if (post.content.sections[1]?.content) return post.content.sections[1].content;
    }
    return "No description available.";
  };

  const getFeaturedImage = () => {
    if (post.content.featuredImage) return post.content.featuredImage;
    const sectionWithImage = post.content.sections?.find((s) => s.image);
    return sectionWithImage?.image || "/assets/images/default-blog-image.jpg";
  };

  return (
    <article
      className="bg-white shadow-lg rounded-lg p-6 border-gray-200 border flex flex-col lg:flex-row-reverse"
      itemScope
      itemType="http://schema.org/BlogPosting"
    >
      <div className="w-full lg:w-2/4 mb-4 lg:mb-0">
        <img
          src={getFeaturedImage()}
          alt={post.content.title}
          className="w-full h-[350px] object-cover object-center rounded-lg"
          itemProp="image"
        />
      </div>
      <div className="w-full lg:w-2/4 p-4">
        <h2 className="text-lg font-bold mt-2" itemProp="headline">
          {post.content.title}
        </h2>
        <p className="text-gray-600 mt-2" itemProp="description">
          {truncateText(getDescription(), 30)}
        </p>
        <div className="flex items-center mt-4">
          <Link
            href={`/${locale}/blogs/${post.slug}`}
            className="bg-teal-600 text-white px-4 py-2 rounded-lg"
            itemProp="url"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}

