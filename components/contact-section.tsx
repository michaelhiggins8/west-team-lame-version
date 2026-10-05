import { Eyebrow } from "@/components/ui/eyebrow";
import { PillLink } from "@/components/ui/pill-link";
import { Wrap } from "@/components/ui/wrap";

const CONTACT_MAILTO =
  "mailto:WestTeamAZ@gmail.com?subject=West%20Team%20Recruiting%20Conversation";

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <Wrap className="contact-box">
        <div>
          <Eyebrow>Your next step starts with a conversation</Eyebrow>
          <h2>Let’s talk about what you want your business to become.</h2>
          <p>
            Ask about the team, local support, current lead opportunities and the
            cap. We’ll talk honestly about fit and what you need next.
          </p>
        </div>
        <PillLink href={CONTACT_MAILTO}>Email the West Team</PillLink>
      </Wrap>
    </section>
  );
}