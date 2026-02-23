import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, topic, message, organization, category, source } = body;

    // Log for now — replace with email service (Resend, Nodemailer, etc.) later
    console.log("📬 Contact form submission:", {
      source,
      name,
      email,
      topic: topic || category,
      organization,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
