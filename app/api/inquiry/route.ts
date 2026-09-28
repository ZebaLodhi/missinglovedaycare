import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  parentName: z.string().trim().min(2, "Please tell us your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  childName: z.string().trim().max(80).optional().or(z.literal("")),
  program: z.string().trim().max(80).optional().or(z.literal("")),
  startDate: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
  website: z.string().max(0).optional(), // honeypot — handled before validation
});

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; drop those quietly rather than showing an error.
  if (typeof body === "object" && body !== null && "website" in body && body.website) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const parsed = inquirySchema.safeParse(body);

  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
    return NextResponse.json({ error: first }, { status: 400 });
  }

  const inquiry = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO_EMAIL;
  const from = process.env.INQUIRY_FROM_EMAIL;

  // Without mail credentials the inquiry is logged rather than emailed, so the
  // form still works in development. See README.md before going live.
  if (!apiKey || !to || !from) {
    console.warn("[inquiry] Mail is not configured; inquiry logged only.", inquiry);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const lines = [
    `Parent: ${inquiry.parentName}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || "—"}`,
    `Child: ${inquiry.childName || "—"}`,
    `Program: ${inquiry.program || "Not sure yet"}`,
    `Preferred start: ${inquiry.startDate || "—"}`,
    "",
    inquiry.message || "(no message)",
  ];

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: inquiry.email,
        subject: `Tour request — ${inquiry.parentName}`,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("[inquiry] Mail provider rejected the request.", await res.text());
      return NextResponse.json(
        { error: "We could not send your message. Please call us instead." },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error("[inquiry] Mail request failed.", err);
    return NextResponse.json(
      { error: "We could not send your message. Please call us instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
