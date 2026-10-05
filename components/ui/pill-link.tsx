import type { ReactNode } from "react";

type PillLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
};

export function PillLink({ href, children, variant = "solid" }: PillLinkProps) {
  return (
    <a href={href} className={variant === "outline" ? "pill outline" : "pill"}>
      {children}
    </a>
  );
}