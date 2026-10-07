import Image from "next/image";
import { Wrap } from "@/components/ui/wrap";

const FOOT_LINKS = [
  
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
  
];

const VALUES = ["Experience", "Integrity", "Results"];

export function SiteFooter() {
  return (
    <footer>
      <Wrap className="foot">
        <div className="foot-top">
          <div>
            <a className="foot-brand" href="#top" aria-label="West Team home">
              <Image
                className="foot-mark"
                src="/brand/west-team-mark.png"
                alt=""
                width={900}
                height={900}
              />
              <span className="foot-wordmark">
                <span className="foot-wordmark-ink">WEST</span>{" "}
                <span className="foot-wordmark-red">TEAM</span>
              </span>
            </a>
            <p className="foot-tagline">
              Real estate for Sun City and Phoenix-area 55+ communities.
            </p>
            <p className="foot-values">
              <span className="foot-values-rule" aria-hidden />
              {VALUES.map((value, index) => (
                <span className="foot-values-item" key={value}>
                  {index > 0 && (
                    <span className="foot-values-star" aria-hidden>
                      ✱
                    </span>
                  )}
                  {value}
                </span>
              ))}
              <span className="foot-values-rule" aria-hidden />
            </p>
          </div>

          <nav className="foot-nav" aria-label="Footer navigation">
            {FOOT_LINKS.map((link) =>
              link.href ? (
                <a className="foot-link" key={link.label} href={link.href}>
                  {link.label}
                </a>
              ) : (
                <span className="foot-link" key={link.label}>
                  {link.label}
                </span>
              )
            )}
            <p className="foot-copy">
              {new Date().getFullYear()} West Team. All rights reserved.
            </p>
          </nav>
        </div>

        <div className="foot-meta">
          <p className="foot-meta-item">
            <Image
              className="foot-meta-logo"
              src="/brand/HS_logo.png"
              alt=""
              width={512}
              height={512}
            />
            <span>a HomeSmart affiliated team</span>
          </p>
          <p className="foot-meta-item foot-meta-equal">
            <Image
              className="foot-meta-logo"
              src="/images/equal-housing-opportunity-logo-1200w.png"
              alt="Equal Housing Opportunity"
              width={1130}
              height={1209}
            />
            <span>Equal Housing Opportunity</span>
          </p>
        </div>
      </Wrap>
    </footer>
  );
}