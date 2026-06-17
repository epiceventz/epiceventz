import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  eventType?: string;
  eventDate?: string;
  eventLocation?: string;
  budget?: string;
  message?: string;
};

const requiredFields: Array<keyof ContactPayload> = ["name", "email", "eventType", "budget", "message"];

function value(payload: ContactPayload, key: keyof ContactPayload) {
  return String(payload[key] || "").trim();
}

function buildEmailHtml(payload: ContactPayload) {
  const rows: Array<[string, string]> = [
    ["Name", value(payload, "name")],
    ["Email", value(payload, "email")],
    ["Phone", value(payload, "phone") || "Not provided"],
    ["Company", value(payload, "company") || "Not provided"],
    ["Event Type", value(payload, "eventType")],
    ["Event Date", value(payload, "eventDate") || "Not provided"],
    ["Event Location", value(payload, "eventLocation") || "Not provided"],
    ["Budget", value(payload, "budget")],
    ["Message", value(payload, "message")]
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111827">
      <h2>New Epic Eventz Inquiry</h2>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:720px">
        ${rows
          .map(
            ([label, item]) => `
              <tr>
                <td style="border:1px solid #e5e7eb;font-weight:700;width:180px">${label}</td>
                <td style="border:1px solid #e5e7eb;white-space:pre-wrap">${item}</td>
              </tr>`
          )
          .join("")}
      </table>
    </div>
  `;
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const missing = requiredFields.filter((field) => !value(payload, field));

  if (missing.length > 0) {
    return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmails = (process.env.CONTACT_TO_EMAIL || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Epic Eventz Website <onboarding@resend.dev>";

  if (!resendApiKey || toEmails.length === 0) {
    return NextResponse.json(
      { message: "The contact form is not configured yet. Please call or email Epic Eventz directly." },
      { status: 503 }
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: toEmails,
      reply_to: value(payload, "email"),
      subject: `New Epic Eventz Inquiry: ${value(payload, "eventType")}`,
      html: buildEmailHtml(payload)
    })
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: "We could not send the inquiry right now. Please call or email Epic Eventz directly." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Thanks. Your inquiry has been sent to the Epic Eventz team." });
}
