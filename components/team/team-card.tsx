import Link from "next/link";
import type { TeamMember } from "@/data/team-members";
import { getTeamMemberInitials } from "@/data/team-members";
import { MemberPhoto } from "@/components/team/member-photo";

/** Google Business / Maps reviews page for a place ID. */
export function googleReviewsUrl(placeId: string): string {
  return `https://www.google.com/maps/place/?q=place_id:${placeId}`;
}

function ReviewsArrow() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M-0.5 1C-0.5 1.41421 0.414214 1 0 1M11.6 0.6L4.5 7.7M11.6 0.6L11.6 5.5M11.6 0.6L6.7 0.6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type TeamCardProps = {
  member: TeamMember;
};

export function TeamCard({ member }: TeamCardProps) {
  const initials = getTeamMemberInitials(member.name);

  return (
    <div className="wt-card">
      <Link
        className="wt-card-link"
        href={`/team/${member.id}`}
        aria-label={`View ${member.name}’s profile`}
      >
        <div className="wt-card-media">
          <MemberPhoto
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            initials={initials}
          />
          {member.role === "Team Lead" && (
            <span className="wt-badge">Team Lead</span>
          )}
        </div>
        <div className="wt-card-body">
          <h3 className="wt-card-name">{member.name}</h3>
          <p className="wt-card-role">{member.role}</p>
        </div>
      </Link>
      <div className="wt-card-meta">
        <span className="wt-card-license">{member.licenseNumber}</span>
        {member.googlePlaceId && (
          <a
            className="wt-card-reviews"
            href={googleReviewsUrl(member.googlePlaceId)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Reviews
            <ReviewsArrow />
          </a>
        )}
      </div>
    </div>
  );
}