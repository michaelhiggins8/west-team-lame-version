import Link from "next/link";
import type { ReactNode } from "react";

type PillLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
};

/** Internal paths go through next/link; mailto:, tel:, and off-site URLs stay anchors. */
function isInternalHref(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

export function PillLink({ href, children, variant = "solid" }: PillLinkProps) {
  const className = variant === "outline" ? "pill outline" : "pill";

  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}
