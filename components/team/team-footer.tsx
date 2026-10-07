import Image from "next/image";

const FOOT_LINKS: { heading: string; links: { label: string; href: string | null }[] }[] = [
  {
    heading: "Explore",
    links: [
      { label: "The Team", href: "/team" },
      { label: "Why West Team", href: "/#why" },
      { label: "Local Communities", href: "/#communities" },
      { label: "Meet Tracey", href: "/team/tracey-la-rue" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "The Cap", href: "/#cap" },
    
      
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Sun City West", href: "/#communities" },
      { label: "Sun City", href: "/#communities" },
    ],
  },
];

export function TeamFooter() {
  return (
    <footer className="wt-footer">
      <div className="wt-footer-grid">
        {FOOT_LINKS.map((column) => (
          <div className="wt-footer-col" key={column.heading}>
            <p>{column.heading}</p>
            <nav className="wt-footer-nav" aria-label={`${column.heading} links`}>
              {column.links.map((link) =>
                link.href ? (
                  <a className="wt-footer-link" key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ) : (
                  <span className="wt-footer-link" key={link.label}>
                    {link.label}
                  </span>
                )
              )}
            </nav>
          </div>
        ))}
      </div>

      <div className="wt-footer-bottom">
        <p>© {new Date().getFullYear()} West Team. All rights reserved.</p>
        <p className="wt-eho">
          <span>a HomeSmart affiliated team · Equal Housing Opportunity</span>
          <Image
            src="/images/equal-housing-opportunity-logo-1200w.png"
            alt=""
            width={1130}
            height={1209}
          />
        </p>
      </div>
    </footer>
  );
}