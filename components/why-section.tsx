import { SectionHead } from "@/components/ui/section-head";
import { Wrap } from "@/components/ui/wrap";

const VALUE_CARDS = [
  {
    num: "01 / OWNERSHIP",
    title: "Your name. Your relationships.",
    body: "Keep building the business and client connections that belong to you, with a team around you when questions come up.",
  },
  {
    num: "02 / LOCAL KNOW-HOW",
    title: "Know the neighborhoods.",
    body: "Share insight about Sun City West and the surrounding active-adult communities—what clients ask, what matters, and how the market feels block by block.",
  },
  {
    num: "03 / PEOPLE TO CALL",
    title: "Support in the work.",
    body: "Get direct guidance, exchange ideas with peers and find team open-house opportunities across the West Valley.",
  },
];

export function WhySection() {
  return (
    <section className="section" id="why">
      <Wrap>
        <SectionHead
          
          title={
            <>
              Your business stays yours.
              <br />
              The team helps you grow it.
            </>
          }
          lede="Build your name and client relationships with experienced people nearby—ready to share local knowledge, practical guidance and opportunities to work together."
        />
        <div className="cards">
          {VALUE_CARDS.map((card) => (
            <article className="card" key={card.num}>
              <div className="card-num">{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
       
      </Wrap>
    </section>
  );
}