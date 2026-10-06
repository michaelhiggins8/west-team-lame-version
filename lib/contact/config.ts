const DEFAULT_TO = "traceylarue212@gmail.com";
const DEFAULT_FROM = "West Team <onboarding@resend.dev>";

export function getContactConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail =
    process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_TO;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL?.trim() || DEFAULT_FROM;

  return {
    apiKey,
    toEmail,
    fromEmail,
    configured: Boolean(apiKey),
  };
}

/** Always deliver to CONTACT_TO_EMAIL (or the built-in default). Client overrides are ignored. */
export function resolveRecipient(): string {
  return getContactConfig().toEmail;
}
