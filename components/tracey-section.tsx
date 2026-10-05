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
          <svg viewBox="0 0 360 280" aria-hidden="true">
            <rect width="360" height="280" fill="#d8b28d" />
            <circle cx="282" cy="58" r="55" fill="#e7c391" />
            <path d="M0 210 90 143l70 45 80-79 120 87v84H0Z" fill="#a76c51" />
            <path
              d="M58 280c6-68 48-101 111-101s102 36 110 101"
              fill="#173444"
            />
            <circle cx="169" cy="105" r="42" fill="#d9aa83" />
            <path
              d="M126 103c2-43 84-54 91 7-21-8-29-19-35-28-13 17-31 26-56 29Z"
              fill="#493629"
            />
            <path d="M120 97c16-29 77-41 103-4-27 6-72 6-103 4Z" fill="#bf3039" />
            <path
              d="M113 98c18-14 92-13 118 2"
              stroke="#173444"
              strokeWidth="5"
              fill="none"
            />
          </svg>
          <div className="portrait-caption">Replace with a real team photo</div>
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