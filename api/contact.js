import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str = "") {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name = "",
      email = "",
      phone = "",
      interest = "",
      message = "",
    } = req.body || {};

    // Trim values
    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();
    const cleanInterest = interest.trim();
    const cleanMessage = message.trim();

    // Validation
    if (!cleanName || !cleanEmail || !cleanMessage) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required",
      });
    }

    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    // Escape HTML
    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safePhone = escapeHtml(cleanPhone);
    const safeInterest = escapeHtml(cleanInterest);
    const safeMessage = escapeHtml(cleanMessage);

    // ==========================
    // SEND EMAIL TO ADMIN
    // ==========================
    const { error: adminError } = await resend.emails.send({
      from: "SportsEdge Enquiries <contact@energenix.store>",
      to: ["anantahazra.bdn@gmail.com"],
      replyTo: cleanEmail,
      subject: cleanInterest
        ? `New Enquiry - ${safeInterest}`
        : `New Website Enquiry from ${safeName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;">
          <h2>New Website Enquiry</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${
            safePhone || "Not Provided"
          }</p>
          <p><strong>Interest:</strong> ${
            safeInterest || "General Enquiry"
          }</p>

          <hr>

          <h3>Message</h3>
          <p style="white-space:pre-wrap;">
            ${safeMessage}
          </p>
        </div>
      `,
    });

    if (adminError) {
      console.error("Admin Email Error:", adminError);

      return res.status(500).json({
        success: false,
        message: "Unable to send enquiry",
      });
    }

    // ==========================
    // SEND AUTO REPLY
    // ==========================
    const { error: customerError } = await resend.emails.send({
      from: "SportsEdge <contact@energenix.store>",
      to: [cleanEmail],
      subject: "We've Received Your Enquiry",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;">
          <h2>Hello ${safeName},</h2>

          <p>
            Thank you for contacting SportsEdge.
            We have successfully received your enquiry.
          </p>

          <p>
            Our team will review your request and get back to you
            as soon as possible.
          </p>

          <hr>

          <h3>Your Submission</h3>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Interest:</strong> ${
            safeInterest || "General Enquiry"
          }</p>

          <br>

          <p>
            Regards,<br>
            <strong>SportsEdge Team</strong>
          </p>
        </div>
      `,
    });

    if (customerError) {
      console.error(
        "Customer Confirmation Email Error:",
        customerError
      );
    }

    return res.status(200).json({
      success: true,
      message: "Enquiry submitted successfully",
    });
  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}