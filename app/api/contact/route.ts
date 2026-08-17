// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // 1. Extract form data sent from the client
    const formData = await req.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const subject = formData.get("subject")?.toString();
    const message = formData.get("message")?.toString();
    const captchaToken = formData.get("g-recaptcha-response")?.toString();

    if (!email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // 2. Verify Google reCAPTCHA token
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    // If you want to enforce reCAPTCHA strictly:
    if (secretKey) {
      if (!captchaToken) {
        return NextResponse.json(
          { error: "Please complete the reCAPTCHA verification." },
          { status: 400 }
        );
      }

      const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;
      const recaptchaRes = await fetch(verificationUrl, { method: "POST" });
      const recaptchaResult = await recaptchaRes.json();

      if (!recaptchaResult.success) {
        return NextResponse.json(
          { error: "Robot verification failed. Please try again." },
          { status: 400 }
        );
      }
    }

    // 3. Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      pool: true,
      maxConnections: 3,
      maxMessages: 10,
    });

    const mailBody = {
      from: `"IT Solutions Hub2010 Contact" <${process.env.SMTP_USER}>`,
      to: process.env.MK_EMAIL,
      cc: process.env.CC_EMAIL,
      subject: `New Contact Message: ${subject || "Unknown User"}`,
      html: `
        <h2>New Contact Form Message</h2>
        <ul>
          <li><strong>Name:</strong> ${name || "-"}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <br/>
        <p><strong>Subject:</strong> ${subject || "Not selected"}</p>
        <br/>
        <p><strong>Message:</strong> ${message || "Not selected"}</p>
      `,
    };

    // 4. Send Email
    await transporter.sendMail(mailBody);

    return NextResponse.json({
      ok: true,
      success: true,
      message: "Contact submitted successfully!",
    });
  } catch (err: any) {
    console.error("Email error:", err);
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