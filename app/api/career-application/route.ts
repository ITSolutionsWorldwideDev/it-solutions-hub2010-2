// app/api/career-application/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Transporter created once and reused across requests (module scope),
// instead of creating a brand-new SMTP connection on every submit.
// This avoids "Too many concurrent SMTP connections" errors from the host.
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  pool: true,
  maxConnections: 1, // shared hosting SMTP usually allows very few concurrent conns
  maxMessages: 50,
});

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const expertise = formData.get("expertise") as string;
    const message = formData.get("message") as string;
    const coverLetterFile = formData.get("coverLetter") as File | null;

    if (!email || !name) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Prepare attachment if a cover letter was uploaded
    const attachments = [];
    if (coverLetterFile && coverLetterFile.size > 0) {
      const arrayBuffer = await coverLetterFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments.push({
        filename: coverLetterFile.name,
        content: buffer,
      });
    }

    const mailBody = {
      from: `"Career Open Application" <${process.env.SMTP_USER}>`,
      to: process.env.CAREER_EMAIL,
      cc: process.env.CAREER_CC_EMAIL,
      subject: `New Open Application: ${expertise || "Unspecified"}`,
      html: `
        <h2>New Open Application (Career Page)</h2>
        <ul>
          <li><strong>Name:</strong> ${name || "-"}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || "-"}</li>
          <li><strong>Area of Expertise:</strong> ${expertise || "-"}</li>
        </ul>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message || "-"}</p>
        ${
          coverLetterFile && coverLetterFile.size > 0
            ? `<p><strong>Cover Letter:</strong> Attached (${coverLetterFile.name})</p>`
            : `<p><strong>Cover Letter:</strong> Not provided</p>`
        }
        `,
      attachments,
    };

    const info = await transporter.sendMail(mailBody);
    console.log("DEBUG sendMail accepted:", info.accepted, "rejected:", info.rejected);

    return NextResponse.json({
      ok: true,
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (err: any) {
    console.error("Career application email error:", err);
    return NextResponse.json(
      {
        ok: false,
        success: false,
        error: err.message || "Something went wrong.",
      },
      { status: 500 }
    );
  }
}