import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey || apiKey === "your_resend_api_key_here") {
            console.error("Email Error: RESEND_API_KEY is not configured in .env.local");
            return NextResponse.json(
                { error: "Contact service not configured" },
                { status: 503 }
            );
        }

        const resend = new Resend(apiKey);
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const { error: resendError } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: "nisargpatel02.np@gmail.com",
            subject: `New Portfolio Message from ${name}`,
            replyTo: email,
            html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1F2A44;">
          <h2 style="color: #2C7A7B; border-bottom: 1px solid #E2E8F0; padding-bottom: 10px;">New Portfolio Inquiry</h2>
          <p><strong>Sender:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <div style="margin-top: 20px; padding: 15px; background: #F7F9FC; border-radius: 8px;">
            <strong>Message:</strong><br/>
            ${message}
          </div>
        </div>
      `,
        });

        if (resendError) {
            console.error("Resend Service Error:", resendError);
            return NextResponse.json(
                { error: "Failed to send email" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Fatal API Error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
