import { getContactConfig, resolveRecipient } from "./config";
import { createResendProvider } from "./provider/resend";
import { checkContactRateLimit } from "./rate-limit";
import { parseContactInquiry } from "./schema";
import { buildInquiryEmail } from "./templates/inquiry-email";
import type { ContactInquiryResult } from "./types";

function clientKey(ip: string | null, email: string): string {
  return `${ip ?? "unknown"}:${email.toLowerCase()}`;
}

export async function sendContactInquiry(
  raw: unknown,
  options?: { ip?: string | null },
): Promise<ContactInquiryResult> {
  const parsed = parseContactInquiry(raw);
  if (!parsed.success) {
    return {
      ok: false,
      code: "validation",
      message: parsed.message,
      fields: parsed.fields,
    };
  }

  const inquiry = parsed.data;

  // Honeypot: pretend success so bots don't adapt.
  if (inquiry.website && inquiry.website.trim().length > 0) {
    return { ok: true };
  }

  const rate = checkContactRateLimit(
    clientKey(options?.ip ?? null, inquiry.email),
  );
  if (!rate.allowed) {
    return {
      ok: false,
      code: "rate_limit",
      message: "Too many messages. Please try again later.",
    };
  }

  const config = getContactConfig();
  if (!config.configured || !config.apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return {
      ok: false,
      code: "config",
      message: "Messaging is temporarily unavailable. Please call West Team.",
    };
  }

  const email = buildInquiryEmail(inquiry);
  const provider = createResendProvider(config.apiKey);
  const result = await provider.send({
    to: resolveRecipient(),
    from: config.fromEmail,
    replyTo: inquiry.email,
    subject: email.subject,
    text: email.text,
    html: email.html,
  });

  if (!result.ok) {
    return {
      ok: false,
      code: "provider",
      message: result.message,
    };
  }

  return { ok: true };
}
