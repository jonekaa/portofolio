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

    console.log(`[Contact Form] Verified submission from ${cleanName} (${cleanEmail})`);
    console.log(`Subject: ${cleanSubject}`);
    console.log(`Message: ${cleanMessage.substring(0, 100)}...`);

    // In production with RESEND_API_KEY:
    // await resend.emails.send({ from: '...', to: process.env.CONTACT_EMAIL_TO, subject, ... });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
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
