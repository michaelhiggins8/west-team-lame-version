import type { ReactNode } from "react";
import { TeamFooter } from "@/components/team/team-footer";

export default function TeamLayout({ children }: { children: ReactNode }) {
  return (
    <div className="wt-root">
      <main>{children}</main>
      <TeamFooter />
    </div>
  );
}