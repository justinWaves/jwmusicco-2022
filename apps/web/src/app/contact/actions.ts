"use server";

import { Resend } from "resend";

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  // service-specific extras
  extras?: Record<string, string>;
};

export type SendResult =
  | { ok: true }
  | { ok: false; error: string };

function buildHtml(data: ContactFormData): string {
  const extrasHtml = data.extras
    ? Object.entries(data.extras)
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 0;color:#888;font-size:13px;width:160px;vertical-align:top">${k}</td><td style="padding:6px 0;font-size:13px;color:#222">${v}</td></tr>`
        )
        .join("")
    : "";

  return `
    <div style="font-family:system-ui,sans-serif;max-width:560px;margin:0 auto;padding:24px">
      <h2 style="margin:0 0 20px;font-size:20px;font-weight:500;color:#111">
        New inquiry — ${data.subject}
      </h2>
      <table style="border-collapse:collapse;width:100%">
        <tr>
          <td style="padding:6px 0;color:#888;font-size:13px;width:160px">Name</td>
          <td style="padding:6px 0;font-size:13px;color:#222">${data.name}</td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#888;font-size:13px">Email</td>
          <td style="padding:6px 0;font-size:13px;color:#222">
            <a href="mailto:${data.email}" style="color:#b45309">${data.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:6px 0;color:#888;font-size:13px">Service</td>
          <td style="padding:6px 0;font-size:13px;color:#222">${data.subject}</td>
        </tr>
        ${extrasHtml}
      </table>

      <hr style="margin:20px 0;border:none;border-top:1px solid #e5e5e5" />

      <h3 style="margin:0 0 10px;font-size:14px;font-weight:500;color:#888;text-transform:uppercase;letter-spacing:.06em">
        Message
      </h3>
      <p style="margin:0;font-size:14px;line-height:1.7;color:#333;white-space:pre-wrap">${data.message}</p>

      <hr style="margin:24px 0;border:none;border-top:1px solid #e5e5e5" />
      <p style="margin:0;font-size:12px;color:#aaa">Sent from jwmusicco.com · Reply to this email to respond directly.</p>
    </div>
  `;
}

export async function sendContactEmail(data: ContactFormData): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Dev fallback — log the inquiry and succeed silently so the form still works
    console.log("[contact] RESEND_API_KEY not set — inquiry received:", data);
    return { ok: true };
  }

  // Lazy-initialize so the module never throws on load if the key is missing
  const resend = new Resend(apiKey);
  const RECIPIENT = process.env.CONTACT_EMAIL ?? "justin@jwmusicco.com";
  const FROM_ADDRESS = process.env.RESEND_FROM ?? "JW Music Co <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [RECIPIENT],
      replyTo: data.email,
      subject: `New inquiry: ${data.subject} — ${data.name}`,
      html: buildHtml(data),
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return { ok: false, error: error.message };
    }

    return { ok: true };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact] Unexpected error:", message);
    return { ok: false, error: message };
  }
}
