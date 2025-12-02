// app/api/jobs-info/route.ts
import { NextRequest, NextResponse } from "next/server";

import pool from "@/lib/db";

function escape(str: string) {
  return str.replace(/'/g, "''");
}

// -------------------------
// GET (list or single jobs-info)
// -------------------------
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const job_info_id = searchParams.get("id");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("limit") || "120", 10);
  const offset = (page - 1) * pageSize;
  const search = searchParams.get("search");
  const sort = searchParams.get("sort");

  try {
    if (job_info_id) {
      const result = await pool.query(
        `SELECT * FROM jobs_infos WHERE job_info_id = $1`,
        [job_info_id],
      );
      return NextResponse.json(result.rows[0] || null, {
        status: result.rows.length ? 200 : 404,
      });
    }

    const whereClauses: string[] = [];

    whereClauses.push(
        `i.published =1 `,
      );

    if (search) {
      const keyword = escape(search.toLowerCase());
      whereClauses.push(
        `(LOWER(i.title) LIKE '%${keyword}%' OR LOWER(i.content) LIKE '%${keyword}%')`,
      );
    }

    const whereClause = whereClauses.length
      ? `WHERE ${whereClauses.join(" AND ")}`
      : "";

    let sortingOrder = "ORDER BY i.updated_at DESC";
    if (sort === "nameDesc") sortingOrder = "ORDER BY i.title DESC";
    else if (sort === "dateAsc") sortingOrder = "ORDER BY i.created_at ASC";

    const query = `
        SELECT 
            i.*, 
            u.username AS author_username, 
            u.email AS author_email 
        FROM jobs_infos AS i
        LEFT JOIN users AS u ON u.user_id = i.created_by
        ${whereClause}
        ${sortingOrder}
        LIMIT ${pageSize} OFFSET ${offset}
        `;
        
    const countQuery = `SELECT COUNT(i.job_info_id) FROM jobs_infos AS i ${whereClause}`;


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
      { error: "Failed to fetch jobs_infos" },
      { status: 500 },
    );
  }
}