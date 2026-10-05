import type { ReactNode } from "react";

type SectionHeadProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  lede: ReactNode;
};

export function SectionHead({ eyebrow, title, lede }: SectionHeadProps) {
  return (
    <div className="section-head">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      <p className="lede">{lede}</p>
    </div>
  );
}