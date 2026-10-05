import { Fragment } from "react";
import { SectionHead } from "@/components/ui/section-head";
import { Wrap } from "@/components/ui/wrap";

const CAP_PARTS = [
  {
    amount: "$8,750",
    label: "West Team cap on eligible agent-originated business",
  },
  { amount: "$3,750", label: "HomeSmart cap" },
];

export function CapSection() {
  return (
    <section className="section cap" id="cap">
      <Wrap>
        <SectionHead
          title="Know the cap before you join."
          lede="Your regular annual commission caps add up to one clear combined ceiling across the West Team and HomeSmart."
        />
        <div className="cap-box">
          <div className="cap-primary">
            <div className="eyebrow">Combined annual cap</div>
            <div className="big-cap">$12,500</div>
            <p>
              West Team + HomeSmart
              <br />
              Paid as you go through transactions, not upfront.
            </p>
          </div>
          <div className="cap-details">
            <div className="cap-equation">
              {CAP_PARTS.map((part, index) => (
                <Fragment key={part.amount}>
                  {index > 0 && <div className="plus">+</div>}
                  <div className="cap-part">
                    <b>{part.amount}</b>
                    <span>{part.label}</span>
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="cap-total">
              <span>Combined annual cap</span>
              <strong>$12,500</strong>
            </div>
            <p className="fineprint">
              From day one, 80% of eligible agent-originated business stays with
              you; the West Team split is 20% of net commission after HomeSmart
              brokerage fees until the team cap. HomeSmart’s $399 transaction fee
              goes toward its cap and stops there. The $99 E&O fee continues on
              every transaction. Applicable monthly team-plan fees and personal
              business expenses are separate.
            </p>
           
          </div>
        </div>
      </Wrap>
    </section>
  );
}