import { PillLink } from "@/components/ui/pill-link";
import { Wrap } from "@/components/ui/wrap";

const NAV_LINKS = [
  { href: "#why", label: "Why West Team" },
  { href: "#communities", label: "Local Communities" },
  { href: "#cap", label: "The Cap" },
  { href: "#tracey", label: "Meet Tracey" },
];

export function SiteHeader() {
  return (
    <header className="topbar">
      <Wrap
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <a className="brand" href="#top" aria-label="West Team home">
          <span className="brand-mark">W</span>
          <span>
            <span className="brand-name">West Team</span>
            <span className="brand-sub">HomeSmart · Sun City West</span>
          </span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <PillLink href="#contact">Let’s talk</PillLink>
        </nav>
      </Wrap>
    </header>
  );
}