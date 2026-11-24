// Contact form endpoint: validates the submission and emails it to Tolulope
// through Resend. The recipient and API key live only on the server.
//
// Env:
//   RESEND_API_KEY     required (set in Vercel → Settings → Environment Variables)
//   CONTACT_TO_EMAIL   optional, defaults to the Resend account owner's inbox
//   CONTACT_FROM_EMAIL optional, defaults to Resend's shared sender (works only
//                      for delivering to the account owner until a domain is verified)
import { NextResponse } from "next/server";

const TO = process.env.CONTACT_TO_EMAIL ?? "olatunjitolulope4@gmail.com";
const FROM = process.env.CONTACT_FROM_EMAIL ?? "Portfolio contact <onboarding@resend.dev>";

const LIMITS = { name: 120, email: 200, phone: 40, message: 5000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const clean = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  const name = clean(body.name, LIMITS.name);
  const email = clean(body.email, LIMITS.email);
  const phone = clean(body.phone, LIMITS.phone);
  const message = clean(body.message, LIMITS.message);

  if (!name || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, error: "Please add your name, a valid email and a message." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("contact: RESEND_API_KEY is not set");
    return NextResponse.json({ ok: false, error: "Email is not configured." }, { status: 503 });
  }

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone || "—"],
  ];
  const html = `
    <h2 style="font-family:sans-serif">New enquiry from your website</h2>
    <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#5A646E">${k}</td><td style="padding:4px 0"><strong>${escapeHtml(v)}</strong></td></tr>`
        )
        .join("")}
    </table>
    <p style="font-family:sans-serif;font-size:15px;white-space:pre-wrap;border-left:3px solid #455CE9;padding-left:12px">${escapeHtml(message)}</p>
    <p style="font-family:sans-serif;font-size:13px;color:#5A646E">Reply to this email to answer ${escapeHtml(name)} directly.</p>`;
  const text = `New enquiry from your website\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\n\n${message}`;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        html,
        text,
      }),
      signal: controller.signal,
    });
    if (!res.ok) {
      console.error("contact: Resend error", res.status, await res.text());
      return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("contact: send failed", err);
    return NextResponse.json({ ok: false, error: "Could not send right now." }, { status: 502 });
  } finally {
    clearTimeout(timer);
  }
}
