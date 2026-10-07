import { z } from "zod";

const emailSchema = z
  .string()
  .trim()
  .email("Enter a valid email address")
  .max(254);

function stripHeaderInjection(value: string): string {
  return value.replace(/[\r\n\0]/g, " ").trim();
}

function emptyToUndefined(value: unknown): unknown {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  return trimmed.length === 0 ? undefined : trimmed;
}

export const contactInquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(100, "Name is too long")
    .transform(stripHeaderInjection),
  email: emailSchema,
  phone: z.preprocess(
    emptyToUndefined,
    z
      .string()
      .trim()
      .max(40, "Phone is too long")
      .transform(stripHeaderInjection)
      .optional(),
  ),
  message: z
    .string()
    .trim()
    .min(1, "Message is required")
    .max(5000, "Message is too long"),
  intent: z
    .enum(["join", "buy", "sell", "explore", "valuation", "other"])
    .optional(),
  source: z
    .enum(["home", "contact", "team", "property", "home-valuation"])
    .optional(),
  teamMemberId: z.preprocess(
    emptyToUndefined,
    z.string().trim().max(80).optional(),
  ),
  teamMemberName: z.preprocess(
    emptyToUndefined,
    z
      .string()
      .trim()
      .max(100)
      .transform(stripHeaderInjection)
      .optional(),
  ),
  listingId: z.preprocess(
    emptyToUndefined,
    z.string().trim().max(80).optional(),
  ),
  propertyAddress: z.preprocess(
    emptyToUndefined,
    z
      .string()
      .trim()
      .max(200)
      .transform(stripHeaderInjection)
      .optional(),
  ),
  website: z.string().max(200).optional(),
}).superRefine((data, ctx) => {
  // Team-sourced introductions must name the specific agent so routing can’t be lost.
  if (data.source === "team" && !data.teamMemberId && !data.teamMemberName) {
    ctx.addIssue({
      code: "custom",
      path: ["teamMemberName"],
      message: "A specific team member is required for introduction requests.",
    });
  }
});

export type ContactInquiryParsed = z.infer<typeof contactInquirySchema>;

export function parseContactInquiry(raw: unknown):
  | { success: true; data: ContactInquiryParsed }
  | { success: false; fields: Record<string, string>; message: string } {
  const result = contactInquirySchema.safeParse(raw);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const fields: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !fields[key]) {
      fields[key] = issue.message;
    }
  }

  return {
    success: false,
    fields,
    message: "Please check the form and try again.",
  };
}
