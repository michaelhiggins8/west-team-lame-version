import type { ElementType, ReactNode } from "react";

type SiteContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * Fluid page shell — full width with viewport-scaled gutters.
 * Pair full-bleed media outside this wrapper; no max-width cap.
 */
export function SiteContainer({
  children,
  className = "",
  as: Tag = "div",
}: SiteContainerProps) {
  return (
    <Tag className={["site-container", className].filter(Boolean).join(" ")}>
      {children}
    </Tag>
  );
}
