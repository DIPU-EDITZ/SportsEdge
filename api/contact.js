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

// ==========================
// EMAIL TEMPLATE HELPERS
// ==========================

const BRAND_NAME = "SportsEdge";
const BRAND_COLOR = "#0f172a"; // deep navy
const ACCENT_COLOR = "#16a34a"; // green accent
const BG_COLOR = "#f1f5f9";

function emailShell({ preheader = "", bodyContent = "", footerNote = "" }) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${BRAND_NAME}</title>
    </head>
    <body style="margin:0; padding:0; background-color:${BG_COLOR}; font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;">
      <!-- Preheader (hidden preview text) -->
      <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
        ${preheader}
      </div>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${BG_COLOR}; padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px; background-color:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.08);">

              <!-- Header / Branding -->
              <tr>
                <td style="background-color:${BRAND_COLOR}; padding:28px 32px;">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-size:20px; font-weight:700; color:#ffffff; letter-spacing:0.5px;">
                        ${BRAND_NAME}
                      </td>
                      <td align="right" style="font-size:12px; color:#94a3b8; text-transform:uppercase; letter-spacing:1px;">
                        Enquiry
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Accent bar -->
              <tr>
                <td style="height:4px; background-color:${ACCENT_COLOR}; line-height:4px; font-size:4px;">&nbsp;</td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:36px 32px;">
                  ${bodyContent}
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background-color:#f8fafc; padding:20px 32px; border-top:1px solid #e2e8f0;">
                  <p style="margin:0; font-size:12px; line-height:1.6; color:#94a3b8;">
                    ${footerNote || `This is an automated message from ${BRAND_NAME}. Please do not reply directly to this email.`}
                  </p>
                </td>
              </tr>

            </table>

            <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px; max-width:600px;">
              <tr>
                <td align="center" style="padding:20px 16px 0;">
                  <p style="margin:0; font-size:12px; color:#94a3b8;">
                    &copy; ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.
                  </p>
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
}

function detailRow(label, value) {
  return `
    <tr>
      <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:14px; color:#64748b; width:120px; vertical-align:top;">
        ${label}
      </td>
      <td style="padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:14px; color:${BRAND_COLOR}; font-weight:600; vertical-align:top;">
        ${value}
      </td>
    </tr>
  `;
}

function badge(text) {
  return `
    <span style="display:inline-block; background-color:#dcfce7; color:#15803d; font-size:12px; font-weight:600; padding:4px 12px; border-radius:999px;">
      ${text}
    </span>
  `;
}

function setSecurityHeaders(res) {
  res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), interest-cohort=()');
  res.setHeader('Expect-CT', 'max-age=86400, enforce');
}

export default async function handler(req, res) {
  setSecurityHeaders(res);
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
    const adminBody = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td>
            ${badge("New Enquiry")}
          </td>
        </tr>
      </table>

      <h1 style="margin:0 0 8px; font-size:22px; color:${BRAND_COLOR};">
        New Website Enquiry
      </h1>
      <p style="margin:0 0 28px; font-size:14px; color:#64748b; line-height:1.6;">
        A new enquiry has been submitted through the ${BRAND_NAME} contact form. Details are below.
      </p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
        ${detailRow("Name", safeName)}
        ${detailRow("Email", `<a href="mailto:${safeEmail}" style="color:${ACCENT_COLOR}; text-decoration:none;">${safeEmail}</a>`)}
        ${detailRow("Phone", safePhone || "Not provided")}
        ${detailRow("Interest", safeInterest || "General Enquiry")}
      </table>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc; border-radius:8px; border:1px solid #e2e8f0;">
        <tr>
          <td style="padding:20px 24px;">
            <p style="margin:0 0 10px; font-size:12px; font-weight:700; color:#94a3b8; text-transform:uppercase; letter-spacing:0.5px;">
              Message
            </p>
            <p style="margin:0; font-size:14px; line-height:1.7; color:${BRAND_COLOR}; white-space:pre-wrap;">${safeMessage}</p>
          </td>
        </tr>
      </table>

      <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
        <tr>
          <td style="border-radius:8px; background-color:${ACCENT_COLOR};">
            <a href="mailto:${safeEmail}" style="display:inline-block; padding:12px 24px; font-size:14px; font-weight:600; color:#ffffff; text-decoration:none;">
              Reply to ${safeName}
            </a>
          </td>
        </tr>
      </table>
    `;

    const { error: adminError } = await resend.emails.send({
      from: "SportsEdge Enquiries <contact@sportsedge.net.in>",
      to: ["anantahazra.bdn@gmail.com"],
      replyTo: cleanEmail,
      subject: cleanInterest
        ? `New Enquiry - ${safeInterest}`
        : `New Website Enquiry from ${safeName}`,
      html: emailShell({
        preheader: `New enquiry from ${safeName} (${safeEmail})`,
        bodyContent: adminBody,
        footerNote: `Received via the ${BRAND_NAME} website contact form. Reply directly to this email to respond to ${safeName}.`,
      }),
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
    const customerBody = `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
        <tr>
          <td>
            ${badge("Enquiry Received")}
          </td>
        </tr>
      </table>

      <h1 style="margin:0 0 8px; font-size:22px; color:${BRAND_COLOR};">
        Hi ${safeName}, thanks for reaching out!
      </h1>
      <p style="margin:0 0 24px; font-size:14px; color:#64748b; line-height:1.7;">
        We've successfully received your enquiry and our team is already looking into it.
        You can expect to hear back from us shortly.
      </p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8fafc; border-radius:8px; border:1px solid #e2e8f0; margin-bottom:28px;">
        <tr>
          <td style="padding:20px 24px;">
            <p style="margin:0 0 14px; font-size:12px; font-weight:700; color:#94a3b8; text-transform:uppercase; letter-spacing:0.5px;">
              Your Submission
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
              ${detailRow("Name", safeName)}
              ${detailRow("Email", safeEmail)}
              ${detailRow("Interest", safeInterest || "General Enquiry")}
            </table>
          </td>
        </tr>
      </table>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
        <tr>
          <td style="padding:0;">
            <p style="margin:0 0 10px; font-size:12px; font-weight:700; color:#94a3b8; text-transform:uppercase; letter-spacing:0.5px;">
              Your Message
            </p>
            <p style="margin:0; font-size:14px; line-height:1.7; color:${BRAND_COLOR}; white-space:pre-wrap;">${safeMessage}</p>
          </td>
        </tr>
      </table>

      <p style="margin:0 0 4px; font-size:14px; color:${BRAND_COLOR}; line-height:1.7;">
        If anything changes or you'd like to add more details, just reply to this email.
      </p>

      <p style="margin:28px 0 0; font-size:14px; color:${BRAND_COLOR};">
        Regards,<br>
        <strong>${BRAND_NAME} Team</strong>
      </p>
    `;

    const { error: customerError } = await resend.emails.send({
      from: "SportsEdge Support  <support@sportsedge.net.in>",
      to: [cleanEmail],
      subject: "We've Received Your Enquiry",
      html: emailShell({
        preheader: `Thanks for contacting ${BRAND_NAME} — we've received your enquiry.`,
        bodyContent: customerBody,
      }),
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