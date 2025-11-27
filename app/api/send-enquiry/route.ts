// app/api/send-enquiry/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import pool from "@/lib/db"; // your PostgreSQL/MySQL pool

export async function POST(req: NextRequest) {
  try {

    const data = await req.json();
    const { name, email, phone, city, country, service, option } = data;

    if (!email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Save form data to database

    const query = `
      INSERT INTO public.enquiry_form
      (name, email, phone, city, country, service, option, created_at, updated_at, status)
      VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), NOW(), 1)
      RETURNING enquiry_id
    `;

    const values = [
      name || "",
      email,
      phone || "",
      city || "",
      country || "",
      service || "",
      option || "",
    ];

    const result = await pool.query(query, values);
    const enquiry_id = result.rows?.[0]?.enquiry_id;

    // Configure mail transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    //   logger: true,
    //   debug: true,
      pool: true, // enable connection pooling
      maxConnections: 3, // up to 3 concurrent SMTP connections
      maxMessages: 10, // reuse each connection for up to 10 emails
    });

    // Email
    const mailBody = {
      from: `"IT Solutions Hub2010 Enquiry" <${process.env.SMTP_USER}>`,
      to: process.env.HR_EMAIL,
      cc: process.env.CC_EMAIL,
      subject: `New Enquiry from ${name || "Unknown User"}`,
      html: `
        <p>Dear <strong>Manager</strong>,</p>
        <p>You have received a new enquiry.</p>

        <p><strong>Enquiry Details:</strong></p>

        <ul>
          <li><strong>Name:</strong> ${name || "-"}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || "-"}</li>
          <li><strong>Country:</strong> ${country || "-"}</li>
          <li><strong>City:</strong> ${city || "-"}</li>
        </ul>

        <p><strong>Selected Service:</strong> ${service || "Not selected"}</p>
        <p><strong>Selected Option:</strong> ${option || "Not selected"}</p>

        <br/>
        <p><strong>Enquiry ID:</strong> ${enquiry_id}</p>
        `,
    };

    await transporter.sendMail(mailBody);

    return NextResponse.json({
      message: "Enquiry submitted successfully!",
      enquiry_id,
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Something went wrong." },
      { status: 500 }
    );
  }
}