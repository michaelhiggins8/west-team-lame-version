import { Wrap } from "@/components/ui/wrap";

const PROOF_ITEMS = [
  { label: "Home base", detail: "Sun City West office" },
  { label: "Stay connected", detail: "Weekly Tuesday meetings" },
  {
    label: "Local leadership",
    detail: "Ranked #1 serving 55+ communities",
  },
  {
    label: "Defined economics",
    detail: "$12,500 combined annual caps",
  },
];

export function ProofBar() {
  return (
    <>
      <div className="proof">
        <Wrap className="proof-grid">
          {PROOF_ITEMS.map((item) => (
            <div className="proof-item" key={item.label}>
              <b>{item.label}</b>
              {item.detail}
            </div>
          ))}
        </Wrap>
      </div>
      
    </>
  );
}