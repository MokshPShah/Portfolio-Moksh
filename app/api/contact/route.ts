import { NextResponse } from "next/server";
const nodemailer = require('nodemailer');

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // The Custom HTML Email Template
    const emailHtml = `
      <div style="font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #0A0A0A; color: #f3f4f6; border: 1px solid #1f2937; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);">
        
        <div style="background-color: #111827; padding: 30px 24px; border-bottom: 3px solid #3B82F6; text-align: center;">
          <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">New Portfolio Inquiry</h2>
          <p style="margin: 8px 0 0 0; color: #9ca3af; font-size: 14px;">You have received a new message from your website.</p>
        </div>

        <div style="padding: 32px 24px;">
          
          <div style="background-color: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h3 style="margin: 0 0 16px 0; color: #3B82F6; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid #1f2937; padding-bottom: 8px;">Sender Details</h3>
            <div style="margin-bottom: 12px;">
              <strong style="color: #ffffff; display: inline-block; width: 70px;">Name:</strong> 
              <span style="color: #d1d5db;">${name}</span>
            </div>
            <div style="margin-bottom: 12px;">
              <strong style="color: #ffffff; display: inline-block; width: 70px;">Email:</strong> 
              <a href="mailto:${email}" style="color: #3B82F6; text-decoration: none; font-weight: 500;">${email}</a>
            </div>
            <div>
              <strong style="color: #ffffff; display: inline-block; width: 70px;">Subject:</strong> 
              <span style="color: #d1d5db;">${subject}</span>
            </div>
          </div>

          <div style="background-color: #111827; border: 1px solid #1f2937; border-radius: 8px; padding: 20px;">
            <h3 style="margin: 0 0 16px 0; color: #3B82F6; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid #1f2937; padding-bottom: 8px;">Message</h3>
            <p style="margin: 0; line-height: 1.6; color: #e5e7eb; font-size: 15px; white-space: pre-wrap;">${message}</p>
          </div>

        </div>

        <div style="background-color: #111827; padding: 20px 24px; text-align: center; border-top: 1px solid #1f2937;">
          <p style="margin: 0; color: #6b7280; font-size: 12px;">This is an automated notification from your Next.js Portfolio.<br/>Reply directly to this email to respond to <span style="color: #9ca3af;">${name}</span>.</p>
        </div>
        
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Inquiry: ${subject}`, // Cleaner subject line
      html: emailHtml, // Replaced the basic HTML with our styled template
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}