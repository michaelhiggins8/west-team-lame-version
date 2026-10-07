import type { Metadata } from "next";
import { teamMembers } from "@/data/team-members";
import { TeamCard } from "@/components/team/team-card";

export const metadata: Metadata = {
  title: "The Team | West Team",
  description:
    "Meet the HomeSmart West Team in Sun City West, Arizona — experienced agents serving Sun City, Sun City West, and the West Valley’s 55+ communities.",
};

export default function TeamPage() {
  return (
    <>
      <section className="wt-hero">
        <h1 className="wt-page-title">Meet the West Team</h1>
        <p className="wt-lede">
          A close-knit group of real estate agents who live and work in the
          West Valley. Select a member to read their full profile.
        </p>
        <p className="wt-count">{teamMembers.length} agents in the West Valley</p>
      </section>

      <section className="wt-grid" aria-label="Team members">
        {teamMembers.map((member) => (
          <TeamCard key={member.id} member={member} />
        ))}
      </section>
    </>
  );
}