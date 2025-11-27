// app/api/job-applications/route.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import pool from "@/lib/db"; // your PostgreSQL/MySQL pool

// Utility to escape SQL strings
function escape(str: string) {
  return str.replace(/'/g, "''");
}

export async function POST(req: NextRequest) {
  try {
    // Parse incoming multipart/form-data
    const formData = await req.formData();

    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const phone = formData.get("phone")?.toString();
    const address = formData.get("address")?.toString();
    const hear = formData.get("hear")?.toString();
    const job_category = formData.get("job_category")?.toString();
    const message = formData.get("message")?.toString();
    const job_category_id = formData.get("job_category_id")?.toString();
    const resumeFile = formData.get("resume") as File;

    if (!name || !email || !phone || !resumeFile) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Convert resume file to Buffer (for attachment + optional saving)
    const arrayBuffer = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const safeFileName = resumeFile.name.replace(/\s+/g, "_");
    const mimeType = resumeFile.type || "application/octet-stream";

    const query = `
      INSERT INTO job_applications
      (name, email, phone, address, hear, message, job_category_id, job_category, resume_filename, resume_mime, resume_data, created_at, updated_at, published_at)
      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11, NOW(), NOW(), NOW())
      RETURNING job_applications_id
    `;
    const values = [
      name,
      email,
      phone,
      address || "",
      hear || "",
      message || "",
      job_category_id || null,
      job_category || "",
      safeFileName,
      mimeType,
      buffer,
    ];

    const result = await pool.query(query, values);
    const applicationId = result.rows?.[0]?.job_applications_id;

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

    // Email to Applicant
    const applicantMail = {
      from: `"IT Solutions Hub2010 Careers" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Thank You for Reaching Out to IT Solutions Hub2010`,
      html: `
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for contacting IT Solutions Hub 2010 and applying for <strong>${job_category}</strong>. </p>
        
        <p>Your application has been received and forwarded to the relevant department.</p>
        <p>A member of our team will get back to you as soon as possible. We appreciate your interest and the time you've taken to connect with us, 
        whether it's regarding career opportunities, business inquiries, or general information.</p>
        <p>Please note that in case of job applications, shortlisted candidates will be contacted for further steps.</p>
        <p>We thank you once again for reaching out to us.</p><br>
        <p>Best regards,</p>
        <p>HR Department</p>
        <p>IT Solutions Hub 2010</p>
        <p>B-17, Islamabad, Pakistan</p>
        `,
    };

    // Email to HR
    const hrMail = {
      from: `"IT Solutions Hub2010 Careers" <${process.env.SMTP_USER}>`,
      to: process.env.HR_EMAIL,
      cc: process.env.CC_EMAIL,
      subject: `Job application for ${job_category} - ${name}`,
      html: `
            <p>Dear <strong>HR Manager</strong>,</p>
            <p>Here is a job application for the post of <strong>${job_category}</strong>. </p>          
            <p><strong>Applicant details:</strong></p>
            <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Address:</strong> ${address}</li>
                <li><strong>Hear From:</strong> ${hear}</li>
                <li><strong>Message:</strong> ${message}</li>
            </ul>
            <p>The applicant’s resume is attached to this email.</p>
          `,
      attachments: [
        {
          filename: safeFileName,
          content: buffer, // directly attach from uploaded file
          contentType: resumeFile.type || "application/octet-stream",
        },
      ],
    };

    // Send both emails
    // await Promise.all([
    //   transporter.sendMail(applicantMail),
    //   transporter.sendMail(hrMail),
    // ]);

    await transporter.sendMail(applicantMail);
    await transporter.sendMail(hrMail);

    return NextResponse.json({
      message: "Application submitted successfully!",
      job_applications_id: applicationId,
    });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { error: err.message || "Something went wrong." },
      { status: 500 }
    );
  }
}