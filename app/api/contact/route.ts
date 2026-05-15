import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, service, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Appliance Type: ${service || "Not specified"}

Message:
${message}
    `.trim()

    // For now, log the submission (in production, integrate with an email service)
    console.log("Contact form submission to info@myappliancepro.ca:")
    console.log(emailContent)

    // TODO: Integrate with email service (e.g., Resend, SendGrid, or Nodemailer)
    // Example with Resend:
    // await resend.emails.send({
    //   from: "noreply@myappliancepro.ca",
    //   to: "info@myappliancepro.ca",
    //   subject: `New Contact Form: ${firstName} ${lastName}`,
    //   text: emailContent,
    // })

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}
