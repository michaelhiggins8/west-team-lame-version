import { PillLink } from "@/components/ui/pill-link";
import { Wrap } from "@/components/ui/wrap";

export function TraceySection() {
  return (
    <section className="section" id="tracey">
      <Wrap className="tracey">
        <div
          className="portrait"
          role="img"
          aria-label="Placeholder for a photo of Tracey La Rue with the West Team"
        >


            <img src="https://pub-809f46bad55343d4ac62b32ba5094106.r2.dev/IMG_4825%20(1).jpeg"></img>
          
          <div className="portrait-caption">Best meetings in town</div>
        </div>
        <div>
          <h2>
            Experience to share.
            <br />A local team to grow with.
          </h2>
          <p>
            Tracey La Rue brings more than two decades in real estate, former
            California broker experience, and a strong background in sales,
            customer service and title to leading the West Team. She believes
            agents do their best work when they can ask questions, share what
            they know and keep building a business of their own.
          </p>
          <p className="quote">“Your business. Better together.”</p>
          <PillLink href="#contact" variant="outline">
            Get to know Tracey
          </PillLink>
        </div>
      </Wrap>
    </section>
  );
}