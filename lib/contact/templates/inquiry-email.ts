import type { ContactInquiryParsed } from "../schema";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatTimestamp(): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Phoenix",
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date());
}

function isAgentIntroduction(inquiry: ContactInquiryParsed): boolean {
  return Boolean(inquiry.teamMemberName || inquiry.teamMemberId);
}

function subjectFor(inquiry: ContactInquiryParsed): string {
  if (inquiry.intent === "valuation") {
    return `Home valuation request from ${inquiry.name}`;
  }
  if (inquiry.source === "property" && inquiry.listingId) {
    return `Property inquiry from ${inquiry.name} · MLS ${inquiry.listingId}`;
  }
  if (isAgentIntroduction(inquiry)) {
    const agent = inquiry.teamMemberName ?? inquiry.teamMemberId ?? "agent";
    return `[AGENT REQUEST] Introduction to ${agent} · from ${inquiry.name}`;
  }
  return `New inquiry from ${inquiry.name} — West Team`;
}

function buildRows(inquiry: ContactInquiryParsed): Array<[string, string]> {
  const rows: Array<[string, string]> = [];

  // Agent first when present — so it can’t get buried under contact details.
  if (isAgentIntroduction(inquiry)) {
    rows.push([
      "REQUESTED AGENT",
      inquiry.teamMemberName ?? "(name missing)",
    ]);
    if (inquiry.teamMemberId) {
      rows.push(["Agent profile ID", inquiry.teamMemberId]);
    }
    rows.push([
      "Routing note",
      "Visitor specifically requested this agent. Route the introduction to them — do not treat as a general inquiry.",
    ]);
  }

  rows.push(["Name", inquiry.name], ["Email", inquiry.email]);

  if (inquiry.phone) rows.push(["Phone", inquiry.phone]);
  if (inquiry.intent) rows.push(["Intent", inquiry.intent]);
  if (inquiry.source) rows.push(["Source", inquiry.source]);
  if (inquiry.listingId) rows.push(["Listing ID", inquiry.listingId]);
  if (inquiry.propertyAddress) {
    rows.push(["Property", inquiry.propertyAddress]);
  }
  rows.push(["Received", formatTimestamp()]);

  return rows;
}

function agentBannerHtml(inquiry: ContactInquiryParsed): string {
  if (!isAgentIntroduction(inquiry)) return "";

  const agent = inquiry.teamMemberName ?? inquiry.teamMemberId ?? "this agent";
  const idLine = inquiry.teamMemberId
    ? `<p style="margin:8px 0 0;font-size:13px;opacity:0.8;">Profile ID: ${escapeHtml(inquiry.teamMemberId)}</p>`
    : "";

  return `
    <div style="background:#012438;color:#f9f7f2;padding:18px 20px;border-radius:10px;margin:0 0 24px;">
      <p style="margin:0;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#c4925a;font-weight:700;">Action required · Specific agent</p>
      <p style="margin:10px 0 0;font-size:22px;font-weight:700;line-height:1.25;">Introduction request for ${escapeHtml(agent)}</p>
      <p style="margin:10px 0 0;font-size:14px;line-height:1.45;opacity:0.9;">This visitor asked to work with this agent specifically. Please acknowledge and route to them — do not handle as a general West Team inquiry.</p>
      ${idLine}
    </div>
  `.trim();
}

/**
 * Guarantees the agent request appears in the message body itself,
 * even if email metadata rows are skimmed.
 */
export function ensureAgentRequestInMessage(
  inquiry: ContactInquiryParsed,
): ContactInquiryParsed {
  if (!isAgentIntroduction(inquiry)) return inquiry;

  const agent = inquiry.teamMemberName ?? "requested agent";
  const idPart = inquiry.teamMemberId ? ` | id: ${inquiry.teamMemberId}` : "";
  const marker = `*** INTRODUCTION REQUEST FOR SPECIFIC AGENT: ${agent}${idPart} ***`;

  if (inquiry.message.includes("INTRODUCTION REQUEST FOR SPECIFIC AGENT")) {
    return inquiry;
  }

  return {
    ...inquiry,
    message: `${marker}\n\n${inquiry.message}`,
  };
}

export function buildInquiryEmail(inquiry: ContactInquiryParsed): {
  subject: string;
  text: string;
  html: string;
} {
  const enriched = ensureAgentRequestInMessage(inquiry);
  const rows = buildRows(enriched);
  const subject = subjectFor(enriched);
  const agent = isAgentIntroduction(enriched);

  const text = [
    agent
      ? "=== SPECIFIC AGENT INTRODUCTION REQUEST ==="
      : "New West Team website inquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    enriched.message,
  ].join("\n");

  const htmlRows = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 12px 6px 0;color:#4a6178;vertical-align:top;font-weight:${label === "REQUESTED AGENT" ? "700" : "400"};">${escapeHtml(label)}</td><td style="padding:6px 0;color:#012438;font-weight:600;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const title = agent
    ? "Specific agent introduction request"
    : "New website inquiry";

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;color:#012438;line-height:1.5;">
      <p style="margin:0 0 16px;font-size:14px;letter-spacing:0.08em;text-transform:uppercase;color:#ab6835;font-weight:700;">West Team</p>
      ${agentBannerHtml(enriched)}
      <h1 style="margin:0 0 20px;font-size:22px;font-weight:700;">${escapeHtml(title)}</h1>
      <table style="border-collapse:collapse;margin:0 0 24px;">${htmlRows}</table>
      <p style="margin:0 0 8px;color:#4a6178;font-size:13px;text-transform:uppercase;letter-spacing:0.08em;font-weight:700;">Message</p>
      <p style="margin:0;white-space:pre-wrap;">${escapeHtml(enriched.message)}</p>
    </div>
  `.trim();

  return { subject, text, html };
}
