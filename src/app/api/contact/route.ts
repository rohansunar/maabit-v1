import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/app/lib/db";
import Contact from "@/app/models/Contact";
import { sendEmail, createContactNotificationEmail } from "@/app/lib/sendgrid";

export async function POST(request: NextRequest) {
  try {
    // Connect to the database
    await dbConnect();

    // Parse the request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if the email is valid
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Invalid email address" },
        { status: 400 }
      );
    }

    // Create a new contact submission
    const contactSubmission = new Contact({
      name,
      email,
      subject,
      message,
    });

    // Save to database
    await contactSubmission.save();

    // Send email notification
    const emailData = createContactNotificationEmail({
      name,
      email,
      subject,
      message,
    });

    const emailSent = await sendEmail(emailData);

    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
      emailSent,
      data: contactSubmission,
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Error processing your request" },
      { status: 500 }
    );
  }
}
