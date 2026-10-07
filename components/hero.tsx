import Image from "next/image";
import { PillLink } from "@/components/ui/pill-link";
import { Wrap } from "@/components/ui/wrap";

const HERO_IMAGE = {
  src: "https://suncitywest.com/wp-content/uploads/2023/01/Golf-website-photo.jpg",
  alt: "Sun City West golf course fairway",
};

export function Hero() {
  return (
    <section className="hero">
      <Wrap className="hero-grid">
        <div>

          <h1>
            Your business.
            <br />
            <em>Better together.</em>
          </h1>
          <p className="hero-copy">
            Build your real estate business with a local team that knows Sun City
            West, shares what works, and shows up for one another across the
            West Valley.
          </p>
          <div className="actions">
            <PillLink href="/team">Meet the West Team</PillLink>
            <PillLink href="/contact" variant="outline">
              Talk with Tracey
            </PillLink>
          </div>
         
        </div>
        <div
          className="hero-art"
          role="img"
          aria-label="Illustrated Arizona desert neighborhood with the White Tank Mountains"
        >
          <Image
            className="hero-photo-img"
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            sizes="(max-width: 850px) 100vw, 38vw"
            loading="eager"
            fetchPriority="high"
            referrerPolicy="no-referrer"
          />
          <div className="photo-note">Sun City West · Golf &amp; community</div>
          <div className="event-card">
            <b>Tuesday · 8:00 AM</b>
            <span>Team meeting, shared ideas, local know-how.</span>
          </div>
          <div className="small-label">
            A local course · Sun City West, Arizona
          </div>
        </div>
      </Wrap>
    </section>
  );
}