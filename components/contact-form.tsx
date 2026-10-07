"use client";

import { useState, type FormEvent } from "react";
import type { ContactIntent, ContactSource } from "@/lib/contact/types";

export type ContactFormProps = {
  source: ContactSource;
  intent?: ContactIntent;
  heading?: string;
  description?: string;
  submitLabel?: string;
  teamMemberId?: string;
  teamMemberName?: string;
  listingId?: string;
  propertyAddress?: string;
  showIntent?: boolean;
  showPhone?: boolean;
  showAddress?: boolean;
  messagePlaceholder?: string;
  messageDefault?: string;
  className?: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const intentOptions: Array<{ value: ContactIntent; label: string }> = [
   { value: "join", label: "Joining" },
  { value: "buy", label: "Buying" },
  { value: "sell", label: "Selling" },
  { value: "explore", label: "Exploring" },
  { value: "valuation", label: "Home valuation" },
  { value: "other", label: "Other" },
];

const fieldClassName =
  "h-12 w-full rounded-lg border border-line bg-cream px-4 text-base text-navy outline-none transition-[border-color,box-shadow] placeholder:text-ink-muted/50 focus:border-navy/30 focus:shadow-[0_0_0_3px_rgba(11,30,51,0.08)]";

const textareaClassName =
  "w-full resize-y rounded-lg border border-line bg-cream px-4 py-3 text-base text-navy outline-none transition-[border-color,box-shadow] placeholder:text-ink-muted/50 focus:border-navy/30 focus:shadow-[0_0_0_3px_rgba(11,30,51,0.08)]";

export function ContactForm({
  source,
  intent: initialIntent,
  heading,
  description,
  submitLabel = "Send message",
  teamMemberId,
  teamMemberName,
  listingId,
  propertyAddress: initialAddress,
  showIntent = false,
  showPhone = true,
  showAddress = false,
  messagePlaceholder = "Buying, selling, or learning about a community…",
  messageDefault,
  className = "",
}: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const isAgentRequest = Boolean(teamMemberId || teamMemberName);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);
    setFieldErrors({});

    const form = event.currentTarget;
    const data = new FormData(form);

    // Prefer locked props / hidden fields so agent context can’t be dropped.
    const lockedMemberId =
      teamMemberId || String(data.get("teamMemberId") ?? "") || undefined;
    const lockedMemberName =
      teamMemberName || String(data.get("teamMemberName") ?? "") || undefined;

    let message = String(data.get("message") ?? "").trim();
    if (lockedMemberName || lockedMemberId) {
      const agent = lockedMemberName ?? "requested agent";
      const idPart = lockedMemberId ? ` | id: ${lockedMemberId}` : "";
      const marker = `*** INTRODUCTION REQUEST FOR SPECIFIC AGENT: ${agent}${idPart} ***`;
      if (!message.includes("INTRODUCTION REQUEST FOR SPECIFIC AGENT")) {
        message = `${marker}\n\n${message}`;
      }
    }

    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message,
      intent: String(data.get("intent") ?? initialIntent ?? "") || undefined,
      propertyAddress:
        String(data.get("propertyAddress") ?? initialAddress ?? "") ||
        undefined,
      website: String(data.get("website") ?? ""),
      source,
      teamMemberId: lockedMemberId,
      teamMemberName: lockedMemberName,
      listingId,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fields?: Record<string, string>;
      };

      if (!response.ok || !json.ok) {
        setStatus("error");
        setFieldErrors(json.fields ?? {});
        setErrorMessage(
          json.message ?? "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(
        "Unable to send right now. Please try again in a moment.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-2xl bg-cream-deep px-6 py-10 text-center ring-1 ring-navy/8 md:px-8 ${className}`}
        role="status"
      >
        <p className="font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          Sent
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-navy">
          {isAgentRequest && teamMemberName
            ? `Introduction to ${teamMemberName} requested.`
            : "Thank you — we’ll be in touch."}
        </h3>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-muted">
          {isAgentRequest && teamMemberName
            ? `West Team received your request to work with ${teamMemberName} and will follow up with a clear next step.`
            : "Your message reached West Team. Expect a clear next step soon."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 inline-flex h-11 items-center justify-center rounded-lg border border-navy/15 bg-cream px-6 text-sm font-semibold text-navy transition-colors hover:border-navy/30"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className={`relative text-left ${className}`}
      noValidate
    >
      {heading || description ? (
        <div className="mb-8">
          {heading ? (
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-tight text-navy text-balance">
              {heading}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-3 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      ) : null}

      {isAgentRequest ? (
        <div
          className="mb-8 rounded-2xl bg-navy px-5 py-5 text-cream sm:px-6"
          role="status"
          aria-live="polite"
        >
          <p className="font-[family-name:var(--font-display)] text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold-soft">
            Specific agent request
          </p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight sm:text-2xl">
            {teamMemberName
              ? `Introduction to ${teamMemberName}`
              : "Introduction to a specific agent"}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cream/75">
            This form is locked to this agent. West Team will see that you asked
            for them by name and will route your introduction accordingly.
          </p>
        </div>
      ) : null}

      {/* Persist agent context even if client props are stripped */}
      {teamMemberId ? (
        <input type="hidden" name="teamMemberId" value={teamMemberId} />
      ) : null}
      {teamMemberName ? (
        <input type="hidden" name="teamMemberName" value={teamMemberName} />
      ) : null}

      {/* Honeypot — hidden from people, visible to naive bots */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-navy">
            Name
          </span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldClassName}
            placeholder="Your name"
            aria-invalid={Boolean(fieldErrors.name)}
          />
          {fieldErrors.name ? (
            <span className="mt-1.5 block text-sm text-brand-red">
              {fieldErrors.name}
            </span>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-navy">
            Email
          </span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClassName}
            placeholder="you@email.com"
            aria-invalid={Boolean(fieldErrors.email)}
          />
          {fieldErrors.email ? (
            <span className="mt-1.5 block text-sm text-brand-red">
              {fieldErrors.email}
            </span>
          ) : null}
        </label>

        {showPhone ? (
          <label className={`block ${showIntent ? "" : "sm:col-span-2"}`}>
            <span className="mb-2 block text-sm font-semibold text-navy">
              Phone <span className="font-normal text-ink-muted">(optional)</span>
            </span>
            <input
              name="phone"
              type="tel"
              autoComplete="tel"
              className={fieldClassName}
              placeholder="(602) 555-0100"
            />
          </label>
        ) : null}

        {showIntent ? (
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-navy">
              I’m interested in
            </span>
            <select
              name="intent"
              defaultValue={initialIntent ?? "join"}
              className={fieldClassName}
            >
              {intentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        ) : null}

        {showAddress ? (
          <label className="block sm:col-span-2">
            <span className="mb-2 block text-sm font-semibold text-navy">
              Property address
            </span>
            <input
              name="propertyAddress"
              type="text"
              autoComplete="street-address"
              defaultValue={initialAddress}
              className={fieldClassName}
              placeholder="Street, Sun City community"
              aria-invalid={Boolean(fieldErrors.propertyAddress)}
            />
          </label>
        ) : null}

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-semibold text-navy">
            {isAgentRequest
              ? `Message about working with ${teamMemberName?.split(" ")[0] ?? "this agent"}`
              : showAddress
                ? "Tell us about your home"
                : "How can we help?"}
          </span>
          <textarea
            name="message"
            required
            rows={showAddress ? 5 : 4}
            className={textareaClassName}
            placeholder={messagePlaceholder}
            defaultValue={messageDefault}
            aria-invalid={Boolean(fieldErrors.message)}
          />
          {fieldErrors.message ? (
            <span className="mt-1.5 block text-sm text-brand-red">
              {fieldErrors.message}
            </span>
          ) : null}
        </label>
      </div>

      <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 items-center justify-center rounded-lg bg-navy px-8 text-base font-semibold text-cream transition-colors hover:bg-navy-soft disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : submitLabel}
        </button>
        <p className="text-sm leading-relaxed text-ink-muted sm:max-w-[18rem] sm:text-right">
          {isAgentRequest && teamMemberName
            ? `Your request will name ${teamMemberName} so the introduction isn’t lost.`
            : "West Team responds to every message personally."}
        </p>
      </div>

      {status === "error" && errorMessage ? (
        <p className="mt-4 text-sm text-brand-red" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
