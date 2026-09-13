import { NextRequest, NextResponse } from "next/server";
import { contactSchema, sanitizeInput } from "@/lib/validations/contact";
import { checkRateLimit } from "@/lib/security/rate-limit";

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction & Rate Limiting
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

    const rateLimit = checkRateLimit(ip, 5, 10 * 60 * 1000); // 5 requests per 10 minutes
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Too many messages sent. Please wait a few minutes before trying again.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 2. Parse & Validate request body
    const body = await req.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const issues = result.error.issues.map((i) => ({
        field: i.path.join("."),
        message: i.message,
      }));
      return NextResponse.json(
        { error: "Validation failed", details: issues },
        { status: 400 }
      );
    }

    const { name, email, subject, message, website_url_hp } = result.data;

    // 3. Bot Defense (Honeypot Trap)
    // If the hidden field has any value, a scraper or bot filled it out.
    // Return 200 OK silently to prevent bot adaptation, but discard the payload!
    if (website_url_hp && website_url_hp.trim().length > 0) {
      console.warn(`[Bot Defense] Honeypot triggered from IP: ${ip}`);
      return NextResponse.json(
        { success: true, message: "Message received successfully." },
        { status: 200 }
      );
    }

    // 4. Sanitize sanitized inputs
    const cleanName = sanitizeInput(name);
    const cleanEmail = sanitizeInput(email);
    const cleanSubject = sanitizeInput(subject);
    const cleanMessage = sanitizeInput(message);

    const recipientEmail = process.env.CONTACT_EMAIL_TO || "jonathansaputra03@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    // 5. Check if email provider is configured
    if (!resendApiKey) {
      console.warn(
        `[Contact Form] Submission received from ${cleanName} (${cleanEmail}), but RESEND_API_KEY is not configured.`
      );
      return NextResponse.json(
        {
          error:
            "Email service is not yet configured on this deployment (missing RESEND_API_KEY in environment variables). Please email Jonathan directly at " +
            recipientEmail +
            " or click the mail link below.",
          isConfigMissing: true,
          directEmail: recipientEmail,
        },
        { status: 503 }
      );
    }

    // 6. Send Email via Resend REST API (pure HTTP fetch, zero extra dependencies)
    const fromAddress =
      process.env.CONTACT_EMAIL_FROM || "Portfolio Contact <onboarding@resend.dev>";

    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromAddress,
        to: [recipientEmail],
        reply_to: cleanEmail,
        subject: `[Portfolio] ${cleanSubject} — from ${cleanName}`,
        text: `You received a new message from your portfolio contact form:\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n\n---\nHit reply in your email client to respond to ${cleanName} (${cleanEmail})`,
        html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Portfolio Message</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; padding: 24px 16px; margin: 0;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
    <div style="background-color: #0f172a; padding: 20px 24px; color: #ffffff;">
      <h2 style="margin: 0; font-size: 18px; font-weight: 700; letter-spacing: -0.02em;">
        New Message from Portfolio Website
      </h2>
      <p style="margin: 4px 0 0 0; font-size: 12px; color: #94a3b8; font-family: monospace;">
        portfolio-nine-blond-74.vercel.app
      </p>
    </div>
    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 85px;">Sender:</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${cleanName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Email:</td>
          <td style="padding: 8px 0;">
            <a href="mailto:${cleanEmail}" style="color: #0284c7; text-decoration: none; font-weight: 500;">
              ${cleanEmail}
            </a>
          </td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Subject:</td>
          <td style="padding: 8px 0; color: #0f172a;">${cleanSubject}</td>
        </tr>
      </table>

      <div style="padding: 16px; background-color: #f8fafc; border-left: 4px solid #0284c7; border-radius: 6px;">
        <p style="margin: 0 0 8px 0; font-size: 11px; text-transform: uppercase; font-weight: 700; color: #64748b; letter-spacing: 0.05em;">
          Message:
        </p>
        <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${cleanMessage}</p>
      </div>

      <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #f1f5f9; text-align: center;">
        <a href="mailto:${cleanEmail}?subject=Re:%20${encodeURIComponent(cleanSubject)}" style="display: inline-block; background-color: #0284c7; color: #ffffff; padding: 10px 20px; font-size: 13px; font-weight: 600; border-radius: 6px; text-decoration: none;">
          Reply to ${cleanName}
        </a>
      </div>
    </div>
    <div style="background-color: #f8fafc; padding: 12px 24px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #94a3b8; text-align: center;">
      Received on ${new Date().toLocaleString("en-US", { timeZone: "Asia/Jakarta" })} WIB
    </div>
  </div>
</body>
</html>`,
      }),
    });

    const resendData = await resendRes.json();

    if (!resendRes.ok) {
      console.error("[Resend API Error]:", resendData);
      return NextResponse.json(
        {
          error:
            resendData.message ||
            "Failed to deliver email through the mail provider. Please email directly to " +
              recipientEmail,
        },
        { status: 502 }
      );
    }

    console.log(
      `[Contact Form] Email successfully dispatched to ${recipientEmail} via Resend. ID: ${resendData.id}`
    );

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your message has been sent successfully to Jonathan's inbox. I will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "An unexpected internal error occurred. Please try again later." },
      { status: 500 }
    );
  }
}
