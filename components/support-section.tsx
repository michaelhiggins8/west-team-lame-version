import { Wrap } from "@/components/ui/wrap";

const SUPPORT_ITEMS = [
  {
    num: "01",
    title: "Weekly team meetings",
    body: "Tuesdays at 8 AM: share ideas, get local updates and learn from speakers and one another.",
  },
  {
    num: "02",
    title: "Direct guidance",
    body: "Bring questions to Tracey and get a practical perspective from an experienced team lead.",
  },
  {
    num: "03",
    title: "Office & workspace",
    body: "A Sun City West place to meet clients, work and connect with your team.",
  },
  {
    num: "04",
    title: "Floor time & open houses",
    body: "Participate in office floor time and team open houses to meet people and develop relationships.",
  },
];

export function SupportSection() {
  return (
    <section className="section support">
      <Wrap>
        <h2>
          Real people. Practical help.
          <br />A team that knows this market.
        </h2>
        <p className="lede">
          A connected team is built through the everyday things: useful
          conversations, access to a place to work, and people who will talk
          through the next step with you.
        </p>
        <div className="support-grid">
          {SUPPORT_ITEMS.map((item) => (
            <article className="support-item" key={item.num}>
              <span className="num">{item.num}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}