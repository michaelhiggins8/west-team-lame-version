import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { SiteContainer } from "@/components/site-container";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getTeamMember } from "@/data/team-members";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with West Team about buying or selling in Sun City and Phoenix-area 55+ communities.",
};

type ContactPageProps = {
  searchParams: Promise<{
    member?: string;
    memberName?: string;
    listing?: string;
    address?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const listingId = params.listing?.trim() || undefined;
  const propertyAddress = params.address?.trim() || undefined;

  // Resolve agent from data when possible so the request can’t rely on a fragile URL name alone.
  const memberFromId = params.member?.trim()
    ? getTeamMember(params.member.trim())
    : undefined;
  const teamMemberId =
    memberFromId?.id ?? (params.member?.trim() || undefined);
  const teamMemberName =
    memberFromId?.name ?? (params.memberName?.trim() || undefined);

  const fromProperty = Boolean(listingId || propertyAddress);
  const fromTeam = Boolean(teamMemberName || teamMemberId);
  const firstName = teamMemberName?.split(" ")[0];

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-cream py-16 md:py-24">
          <div
            className="pointer-events-none absolute inset-0 bg-sunset-wash opacity-60"
            aria-hidden
          />

          <SiteContainer className="relative">
            <div className="mx-auto max-w-3xl">
              <p className="animate-fade font-[family-name:var(--font-display)] text-xs font-semibold uppercase tracking-[0.28em] text-gold">
                {fromTeam ? "Agent introduction" : "Contact"}
              </p>
              <h1 className="animate-rise mt-4 font-[family-name:var(--font-display)] text-[length:var(--text-display)] font-bold leading-[1.08] tracking-tight text-navy text-balance">
                {fromTeam && teamMemberName
                  ? `Request an introduction to ${teamMemberName}.`
                  : "Let’s talk about your next move."}
              </h1>
              <p className="animate-rise-delay-1 mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
                {fromProperty
                  ? "Ask about this home, schedule a tour, or compare nearby Sun City options."
                  : fromTeam && teamMemberName
                    ? `You’re asking West Team to connect you with ${teamMemberName} specifically. Your message will clearly name them so the introduction doesn’t get lost.`
                    : "Buying, selling, or exploring Sun City living — send a note and we’ll follow up promptly."}
              </p>

              <div className="animate-rise-delay-2 mt-12 max-w-xl">
                <ContactForm
                  source={fromProperty ? "property" : fromTeam ? "team" : "contact"}
                  showIntent={!fromProperty}
                  showPhone
                  teamMemberId={teamMemberId}
                  teamMemberName={teamMemberName}
                  listingId={listingId}
                  propertyAddress={propertyAddress}
                  submitLabel={
                    fromTeam && firstName
                      ? `Request introduction to ${firstName}`
                      : "Send message"
                  }
                  messageDefault={
                    fromTeam && teamMemberName
                      ? `I’d like an introduction to ${teamMemberName}. `
                      : undefined
                  }
                  messagePlaceholder={
                    fromProperty
                      ? "I’d like to learn more about this property…"
                      : fromTeam && teamMemberName
                        ? `Tell West Team why you’d like to work with ${teamMemberName}…`
                        : "Tell us what you’re looking for…"
                  }
                />
              </div>
            </div>
          </SiteContainer>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
