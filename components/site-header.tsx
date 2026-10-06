import Image from "next/image";
import Link from "next/link";
import { PillLink } from "@/components/ui/pill-link";
import { Wrap } from "@/components/ui/wrap";

/*
 * Root-relative so the nav resolves on every route. Bare "#why" hrefs resolve
 * against the current path, which 404s the scroll target on /contact.
 */
const NAV_LINKS = [
  { href: "/#why", label: "Why West Team" },
  { href: "/#communities", label: "Local Communities" },
  { href: "/#cap", label: "The Cap" },
  { href: "/#tracey", label: "Meet Tracey" },
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
        <Link className="brand" href="/#top" aria-label="West Team home">
          <Image
            className="brand-mark"
            src="/brand/west-team-mark.png"
            alt=""
            width={900}
            height={900}
            priority
          />
          <span>
            <span className="brand-name">West Team</span>
            <span className="brand-sub">HomeSmart · Sun City West</span>
          </span>
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <PillLink href="/contact">Let’s talk</PillLink>
        </nav>
      </Wrap>
    </header>
  );
}