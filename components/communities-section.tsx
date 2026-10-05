import Image from "next/image";
import { Wrap } from "@/components/ui/wrap";

const COMMUNITY_SITE_LABEL = "Official community site";
const REC_CENTER_URL = "https://suncitywest.com/palmridgereccenter/";

const PHOTOS = [
  {
    src: "https://suncitywest.com/wp-content/uploads/2023/02/Palm-Ridge-Signage.jpg",
    alt: "Palm Ridge Recreation Center sign in Sun City West",
    title: "Palm Ridge Recreation Center",
    main: true,
    sizes: "(max-width: 850px) 55vw, 24vw",
  },
  {
    src: "https://suncitywest.com/wp-content/uploads/2023/02/Palm-Ridge-Activity-Center-3.jpg",
    alt: "Palm Ridge Activity Center exterior in Sun City West",
    title: "Community life",
    main: false,
    sizes: "(max-width: 850px) 40vw, 18vw",
  },
  {
    src: "https://suncitywest.com/wp-content/uploads/2023/02/Palm-Ridge-Activity-Center.jpg",
    alt: "Palm Ridge Activity Center interior in Sun City West",
    title: "Inside the community",
    main: false,
    sizes: "(max-width: 850px) 40vw, 18vw",
  },
];

const COMMUNITIES = [
  { name: "Sun City West", note: "Our home base" },
  { name: "Sun City", note: "Neighboring community" },
  { name: "Corte Bella", note: "55+ community" },
  { name: "The Grand", note: "55+ community" },
];

const AREA_SIGNALS = [
  { value: "4", label: "recreation centers" },
  { value: "90+", label: "chartered clubs" },
  { value: "7", label: "golf courses" },
];

export function CommunitiesSection() {
  return (
    <section className="section local" id="communities">
      <Wrap className="local-grid">
        <div
          className="local-photos"
          aria-label="Photos from Sun City West and nearby Sun City"
        >
          {PHOTOS.map((photo) => (
            <figure
              className={`local-photo${photo.main ? " local-photo-main" : ""}`}
              key={photo.src}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.sizes}
                loading="eager"
                referrerPolicy="no-referrer"
              />
              <figcaption className="photo-caption">
                <b>{photo.title}</b>
                <span>
                  Photo: Recreation Centers of Sun City West ·{" "}
                  <a href={REC_CENTER_URL} target="_blank" rel="noreferrer">
                    {COMMUNITY_SITE_LABEL}
                  </a>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div>
          <h2>
            Rooted in Sun City West.
            <br />
            Connected across the West Valley.
          </h2>
          <p className="lede">
            Our home base is Sun City West, with local knowledge across nearby
            active-adult communities and the broader Northwest Valley. Learn
            from people who know the neighborhoods, the rhythms and the clients
            who choose to live here.
          </p>
          <div className="community-list">
            {COMMUNITIES.map((community) => (
              <div className="community" key={community.name}>
                {community.name}
                <span>{community.note}</span>
              </div>
            ))}
          </div>
          <div
            className="area-signals"
            aria-label="Sun City West community amenities"
          >
            {AREA_SIGNALS.map((signal) => (
              <div className="area-signal" key={signal.label}>
                <strong>{signal.value}</strong>
                <span>{signal.label}</span>
              </div>
            ))}
          </div>
          
         
        </div>
      </Wrap>
    </section>
  );
}