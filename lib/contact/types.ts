export type ContactIntent = "buy" | "sell" | "explore" | "valuation" | "other";

export type ContactSource =
  | "home"
  | "contact"
  | "team"
  | "property"
  | "home-valuation";

export type ContactInquiryInput = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  intent?: ContactIntent;
  source?: ContactSource;
  teamMemberId?: string;
  teamMemberName?: string;
  listingId?: string;
  propertyAddress?: string;
  /** Honeypot — must be empty. */
  website?: string;
};

export type ContactInquiryResult =
  | { ok: true }
  | { ok: false; code: "validation" | "rate_limit" | "config" | "provider"; message: string; fields?: Record<string, string> };
