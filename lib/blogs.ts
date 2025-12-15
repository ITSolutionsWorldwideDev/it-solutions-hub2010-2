import pool from "@/lib/db";

export async function getBlogBySlug(slug: string) {
  const query = `
    SELECT
      slug,
      title,
      content,
      imageurl,
      created_at
    FROM blogs
    WHERE slug = $1
    LIMIT 1
  `;

  const result = await pool.query(query, [slug]);

  if (!result.rows.length) {
    return null;
  }

  const blog = result.rows[0];

  return {
    slug: blog.slug,
    date: blog.created_at,
    content: {
      title: blog.title,
      description: blog.content, // HTML
      featuredImage: blog.imageurl,
    },
  };
}
