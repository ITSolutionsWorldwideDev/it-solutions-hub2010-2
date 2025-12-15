// app/api/blogs/route.ts
import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const slug = searchParams.get("slug");
  const id = searchParams.get("id");

  try {
    /* -------------------------
       DETAIL MODE
    -------------------------- */
    if (slug || id) {
      const query = `
        SELECT
          slug,
          title,
          content,
          imageurl,
          created_at
        FROM blogs
        WHERE ${slug ? "slug = $1" : "blog_id = $1"}
        LIMIT 1
      `;

      const value = slug ?? id;
      const result = await pool.query(query, [value]);

      if (!result.rows.length) {
        return NextResponse.json(
          { error: "Blog not found" },
          { status: 404 }
        );
      }

      const blog = result.rows[0];

      return NextResponse.json({
        slug: blog.slug,
        date: blog.created_at,
        content: {
          title: blog.title,
          description: blog.content, // HTML
          featuredImage: blog.imageurl,
        },
      });
    }

    /* -------------------------
       LIST MODE
    -------------------------- */
    const page = Number(searchParams.get("page") || 1);
    const limit = Number(searchParams.get("limit") || 20);
    const offset = (page - 1) * limit;

    const listQuery = `
      SELECT
        blog_id,
        slug,
        title,
        content,
        imageurl,
        created_at
      FROM blogs
      where published =1
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;

    const countQuery = `SELECT COUNT(*) FROM blogs where published =1`;

    const [blogs, count] = await Promise.all([
      pool.query(listQuery, [limit, offset]),
      pool.query(countQuery),
    ]);

    return NextResponse.json({
      items: blogs.rows.map((row) => ({
        slug: row.slug,
        date: row.created_at,
        content: {
          title: row.title,
          description: row.content,
          featuredImage: row.imageurl,
        },
      })),
      totalResults: Number(count.rows[0].count),
      pageSize: limit,
      currentPage: page,
      totalPages: Math.ceil(
        Number(count.rows[0].count) / limit
      ),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}


/* export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 20);
  const offset = (page - 1) * limit;

  try {
    const query = `
      SELECT 
        blog_id,
        title,
        slug,
        content,
        imageurl,
        created_at
      FROM blogs
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `;

    const countQuery = `SELECT COUNT(*) FROM blogs`;

    const [blogs, count] = await Promise.all([
      pool.query(query, [limit, offset]),
      pool.query(countQuery),
    ]);

    return NextResponse.json({
      items: blogs.rows.map((row) => ({
        slug: row.slug,
        date: row.created_at,
        content: {
          title: row.title,
          description: row.content, // HTML string
          sections: [],
          featuredImage: row.imageurl,
        },
      })),
      totalResults: Number(count.rows[0].count),
      pageSize: limit,
      currentPage: page,
      totalPages: Math.ceil(Number(count.rows[0].count) / limit),
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
} */

/* import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

function escape(str: string) {
  return str.replace(/'/g, "''");
} */

// -------------------------
// GET (list or single blog)
// -------------------------
/* export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("limit") || "20", 10);
  const offset = (page - 1) * pageSize;
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");

  try {

    const whereClauses: string[] = [];
    if (search) {
      const keyword = escape(search.toLowerCase());
      whereClauses.push(
        `(LOWER(i.title) LIKE '%${keyword}%' OR LOWER(i.content) LIKE '%${keyword}%')`,
      );
    }

    const whereClause = whereClauses.length
      ? `WHERE ${whereClauses.join(" AND ")}`
      : "";

    let sortingOrder = "ORDER BY i.created_at DESC";
    if (sort === "nameDesc") sortingOrder = "ORDER BY i.title DESC";
    else if (sort === "dateAsc") sortingOrder = "ORDER BY i.created_at ASC";

    const query = `
        SELECT 
            i.blog_id, i.title, i.slug, i.content, i.imageurl,i.created_at,i.published,i.author_id,
            u.username AS author_username, 
            u.email AS author_email 
        FROM blogs AS i
        LEFT JOIN users AS u ON u.user_id = i.author_id
        ${whereClause}
        ${sortingOrder}
        LIMIT ${pageSize} OFFSET ${offset}
        `;

    const countQuery = `SELECT COUNT(i.blog_id) FROM blogs AS i ${whereClause}`;

    const [result, countResult] = await Promise.all([
      pool.query(query),
      pool.query(countQuery),
    ]);

    const data = {
      items: result.rows,
      totalResults: parseInt(countResult.rows[0].count, 10),
      pageSize,
      currentPage: Math.floor(offset / pageSize) + 1,
      totalPages: Math.ceil(parseInt(countResult.rows[0].count, 10) / pageSize),
    };

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 },
    );
  }
} */
