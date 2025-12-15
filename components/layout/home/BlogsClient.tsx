// components/layout/home/BlogsClient.tsx
"use client";

import { useEffect, useState } from "react";
import BlogCard from "@/components/layout/home/BlogCard";
import { BlogEntry } from "@/types/blogs";

interface ApiResponse {
  items: BlogEntry[];
  totalPages: number;
  currentPage: number;
}

const PAGE_SIZE = 20;

export default function BlogsClient({
  locale,
  title,
}: {
  locale: string;
  title: string;
}) {
  const [blogs, setBlogs] = useState<BlogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const res = await fetch(
        `/api/blogs?page=${page}&limit=${PAGE_SIZE}`,
        { cache: "no-store" },
      );
      const data: ApiResponse = await res.json();
      setBlogs(data.items);
      setLoading(false);
    };

    load();
  }, [page]);

  if (loading) return <p>Loading blogs...</p>;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} post={blog} locale={locale} />
        ))}
      </div>
    </div>
  );
}
