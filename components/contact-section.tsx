import { PillLink } from "@/components/ui/pill-link";
import { Wrap } from "@/components/ui/wrap";

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <Wrap className="contact-box">
        <div>
          <h2>Let’s talk about what you want your business to become.</h2>
          <p>
            Ask about the team, local support, current lead opportunities and the
            cap. We’ll talk honestly about fit and what you need next.
          </p>
        </div>
        <PillLink href="/contact">Email the West Team</PillLink>
      </Wrap>
    </section>
  );
}