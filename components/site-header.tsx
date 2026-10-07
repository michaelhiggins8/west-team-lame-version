"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/team", label: "The Team" },
  { href: "/#communities", label: "Communities" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  function isActive(href: string): boolean {
    if (href === "/") return pathname === "/";
    // Anchor links (…/#section) shouldn't drive the active underline — the
    // section link stays marked by its own page's tab on that page.
    if (href.includes("#")) return false;
    if (href.startsWith("/team")) return pathname.startsWith("/team");
    return pathname === href;
  }

  return (
    <header className="wt-topbar">
      <Link className="wt-brand" href="/" aria-label="West Team home">
        <Image
          className="wt-brand-mark"
          src="/brand/west-team-mark.png"
          alt=""
          width={512}
          height={512}
          priority
        />
        <span className="wt-brand-word">
          <span className="wt-brand-name">West Team</span>
          <span className="wt-brand-sub">HomeSmart · Sun City West</span>
        </span>
      </Link>

      <nav className="wt-nav" aria-label="Main navigation">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={[
              "wt-nav-link",
              isActive(link.href) ? "wt-nav-link-active" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="wt-topbar-actions">
        <Link className="wt-pill wt-pill-ember" href="/contact">
          Let’s talk
        </Link>
      </div>
    </header>
  );
}