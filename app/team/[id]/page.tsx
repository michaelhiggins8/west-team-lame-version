import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTeamMember, getTeamMemberInitials, teamMembers } from "@/data/team-members";
import { MemberPhoto } from "@/components/team/member-photo";
import { googleReviewsUrl } from "@/components/team/team-card";

type MemberPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return teamMembers.map((member) => ({ id: member.id }));
}

export async function generateMetadata({
  params,
}: MemberPageProps): Promise<Metadata> {
  const { id } = await params;
  const member = getTeamMember(id);
  if (!member) return { title: "The Team | West Team" };

  return {
    title: `${member.name} | West Team`,
    description: member.bio,
  };
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { id } = await params;
  const member = getTeamMember(id);
  if (!member) notFound();

  const initials = getTeamMemberInitials(member.name);
  const reviewsHref = member.googlePlaceId
    ? googleReviewsUrl(member.googlePlaceId)
    : null;
  const contactHref = `/contact?member=${member.id}&memberName=${encodeURIComponent(member.name)}`;

  return (
    <div className="wt-profile-shell">
      <Link className="wt-profile-back" href="/team">
        <svg
          width="14"
          height="14"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10.5 2.5L5 8l5.5 5.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        All agents
      </Link>

      <div className="wt-profile-grid">
        <div className="wt-profile-media">
          <MemberPhoto
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            initials={initials}
          />
        </div>

        <div>
          <h1 className="wt-profile-name">{member.name}</h1>
          <p className="wt-profile-role">{member.role}</p>

          <div className="wt-profile-detail">
            <span className="wt-profile-detail-label">Arizona License</span>
            <span>{member.licenseNumber}</span>
          </div>

          <p className="wt-profile-bio">{member.bio}</p>

          <div className="wt-profile-actions">
            <Link className="wt-btn wt-btn-inverse" href={contactHref}>
              Request an introduction
            </Link>
            {reviewsHref && (
              <a
                className="wt-btn wt-btn-ghost"
                href={reviewsHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Google reviews
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}