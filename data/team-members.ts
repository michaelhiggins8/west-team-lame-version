export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  licenseNumber: string;
  /**
  
  Optional Google Place ID for this agent’s Google Business / Maps profile.
  When set, the team card and profile link out to their Google reviews page.
  Find IDs via: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
  */
  googlePlaceId?: string;
  };
  
  export const teamMembers: TeamMember[] = [
  {
  id: "vonnie-bayard",
  name: "Vonnie Bayard",
  role: "Real Estate Agent",
  bio: "Vonnie is a Sun City West–based REALTOR® specializing in West Valley 55+ communities. Her 30-plus years as a transactional paralegal bring strong contract knowledge, attention to detail, and clear communication to every purchase and sale.",
  image: "/team_head_shots/Vonnie_Bayard.jpg",
  licenseNumber: "#SA679281000",
  googlePlaceId: "ChIJJVgLqDwRsCYRGcXu8c4_2Ns",
  },
  {
  id: "paula-barrett-ruiz",
  name: "Paula Barrett Ruiz",
  role: "Real Estate Agent",
  bio: "Paula is a dual-state broker licensed in Arizona and California who began her real estate career in 1986. An SRES®, GRI, and e-PRO® professional, she specializes in Corte Bella, Sun City West, Sun City, and The Grand, with deep expertise in contracts, compliance, and negotiation.",
  image: "/team_head_shots/Paula_Barrett_Ruiz.jpg",
  licenseNumber: "#BR700738000",
  },
  {
  id: "tracey-la-rue",
  name: "Tracey La Rue",
  role: "Team Lead",
  bio: "Tracey brings more than two decades of real estate experience, along with a background in sales, customer service, title insurance, and residential brokerage. She holds ABR®, SRES®, SFR®, and C2EX credentials and guides buyers, sellers, seniors, and investors across the Phoenix metropolitan area.",
  image: "/team_head_shots/Tracey_La_Rue.jpg",
  licenseNumber: "#sa706540000",
  googlePlaceId: "ChIJr9aA4sxaB2IRVd80y2HSqOA",
  },
  {
  id: "doug-burnham",
  name: "Doug Burnham",
  role: "Real Estate Agent",
  bio: "Doug is an Arizona associate broker with more than two decades of real estate experience. Working throughout Sun City, Sun City West, Surprise, Peoria, and the broader West Valley, he helps clients evaluate their options and navigate each transaction with an experienced, practical perspective.",
  image: "/team_head_shots/Doug_Burnham.webp",
  licenseNumber: "#BR543928000",
  },
  {
  id: "judy-burnham",
  name: "Judy Burnham",
  role: "Real Estate Agent",
  bio: "Judy is an experienced West Valley REALTOR® who works alongside Doug Burnham and serves clients in Sun City, Sun City West, Peoria, and nearby communities. Her recent sales activity is concentrated in the Sun Cities, giving her detailed familiarity with local homes and neighborhoods.",
  image: "/team_head_shots/Judy_Burnham.webp",
  licenseNumber: "#SA543927000",
  },
  {
  id: "janelle-carmichael",
  name: "Janelle Carmichael",
  role: "Real Estate Agent",
  bio: "An Arizona native, Janelle specializes in the Northwest Valley and the Sun City communities. She works with buyers and sellers in Peoria, Sun City, and Sun City West, combining lifelong local knowledge with a service-focused approach.",
  image: "/team_head_shots/Janelle_Carmichael.webp",
  licenseNumber: "#SA687843000",
  googlePlaceId: "ChIJtdHoueBDK4cR3fkPHBeW4Bg",
  },
  {
  id: "craig-cross-jr",
  name: "Craig Cross Jr.",
  role: "Real Estate Agent",
  bio: "Craig is a long-established Arizona REALTOR® with extensive experience listing and selling homes in Sun City West and Surprise. His years in the local market give clients practical insight into property values, neighborhood differences, and the details of age-qualified communities.",
  image: "/team_head_shots/Craig_Cross.webp",
  licenseNumber: "#SA532304000",
  },
  {
  id: "paulette-ezell",
  name: "Paulette Ezell",
  role: "Real Estate Agent",
  bio: "After careers in education, marketing, and desktop publishing, Paulette moved into real estate and now specializes in 55+ communities across the West Valley. She uses strong listening, communication, and organizational skills to help buyers and sellers understand paperwork, weigh decisions, and navigate smooth transitions.",
  image: "/team_head_shots/Paulette_Ezell.webp",
  licenseNumber: "#SA678300000",
  googlePlaceId: "ChIJ8w19xpA6ow8RUHzDqF_gGRs",
  },
  {
  id: "patty-frisbie",
  name: "Patty Frisbie",
  role: "Real Estate Agent",
  bio: "Patty focuses on residential sales in Sun City West, with additional experience in Sun City and Sun City Grand. She works across houses, townhomes, and condos, helping buyers and sellers navigate the distinct property types and lifestyle considerations found in the West Valley’s active-adult communities.",
  image: "/team_head_shots/Patty_Frisbie.webp",
  licenseNumber: "#SA687537000",
  },
  {
  id: "john-gambino",
  name: "John Gambino",
  role: "Real Estate Agent",
  bio: "John is an Arizona broker with more than 20 years in the real estate field. Based in Sun City West, he focuses on Sun City West, Sun City, and the surrounding West Valley, bringing seasoned market knowledge to both buyers and sellers.",
  image: "/team_head_shots/John_Gambino.jpg",
  licenseNumber: "#br717289000",
  },
  {
  id: "judy-gillum",
  name: "Judy Gillum",
  role: "Real Estate Agent",
  bio: "Licensed in Arizona since 2013, Judy has experience with residential sales and new-construction properties across the Valley and Pinal County. Her recent work includes larger-lot homes in Casa Grande, Queen Creek, and San Tan Valley, alongside traditional resale transactions.",
  image: "/team_head_shots/Judy_Gillum.webp",
  licenseNumber: "#SA649304000",
  },
  {
  id: "bruce-gillum",
  name: "Bruce Gillum",
  role: "Real Estate Agent",
  bio: "Bruce is a Sun City West–based Arizona REALTOR® serving buyers and sellers in the West Valley. His work includes homes in the Sun Cities and surrounding active-adult communities, where he helps clients compare properties and manage the transaction from offer through closing.",
  image: "/team_head_shots/Bruce_Gillum.jpg",
  licenseNumber: "#SA670940000",
  },
  {
  id: "billy-heinzman",
  name: "Billy Heinzman",
  role: "Real Estate Agent",
  bio: "Billy brings a Southern California commercial real estate background and has worked closely with his mother, Lona King, on a high volume of Arizona transactions. He combines modern marketing, responsive service, and hands-on buyer representation throughout Sun City West and the broader West Valley.",
  image: "/team_head_shots/Billy_Heinzman.png",
  licenseNumber: "#SA670458000",
  },
  {
  id: "jeanette-hochstatter",
  name: "Jeanette Hochstatter",
  role: "Real Estate Agent",
  bio: "Jeanette is a full-time Sun City West resident, SRES®, and ABR® who specializes in West Valley active-adult communities. She brings more than 30 years of real estate investing experience and a prior 33-year career as an eye doctor, healthcare administrator, and small-business owner.",
  image: "/team_head_shots/Jeanette_Hochstatter.jpg",
  licenseNumber: "#SA686678000",
  googlePlaceId: "ChIJYQdzn81bK4cRefFsQz1uHBI",
  },
  {
  id: "andrea-hochstetter",
  name: "Andrea Hochstetter",
  role: "Real Estate Agent",
  bio: "Andrea focuses on the West Valley and the retirement communities of Sun City and Sun City West. Her experience spans houses, condos, townhomes, and manufactured homes, and she represents buyers and sellers throughout Sun City West, Surprise, and nearby communities.",
  image: "/team_head_shots/andrea-hochstetter.jpg",
  licenseNumber: "#SA702026000",
  googlePlaceId: "ChIJR49hm_NbK4cRM2vqWfHD4Kc",
  },
  {
  id: "pete-karstedt",
  name: "Pete Karstedt",
  role: "Real Estate Agent",
  bio: "Pete is a HomeSmart REALTOR® whose recent work is centered in Sun City West. He represents buyers and sellers across a range of homes, from attached residences to expanded golf-course properties, and brings detailed familiarity with the community’s neighborhoods, models, and market.",
  image: "/team_head_shots/Peter_Karstedt.webp",
  licenseNumber: "#SA675252000",
  },
  {
  id: "lona-king",
  name: "Lona King",
  role: "Real Estate Agent",
  bio: "Lona has more than 20 years of Sun City West real estate experience, preceded by 10 years with Del Webb in customer relations and as a senior contracts coordinator. An ABR®, CNE, e-PRO®, and SRES® professional, she is known for deep knowledge of Del Webb floor plans and active-adult communities.",
  image: "/team_head_shots/Lona_King.png",
  licenseNumber: "#SA543779000",
  googlePlaceId: "ChIJq6pazkhbK4cReFzyABS2bZc",
  },
  {
  id: "mary-ann-michaels",
  name: "Mary Ann Michaels",
  role: "Real Estate Agent",
  bio: "Mary Ann is a longtime Arizona REALTOR® with experience in both the East and West Valleys. Her transaction history includes Fountain Hills and Sun City-area properties, allowing her to help clients compare established neighborhoods, retirement communities, and different parts of the greater Phoenix market.",
  image: "/team_head_shots/Mary_Ann_Michaels.jpg",
  licenseNumber: "#SA527869000",
  },
  {
  id: "karen-mcmillan",
  name: "Karen McMillan",
  role: "Real Estate Agent",
  bio: "Karen is an Arizona-licensed HomeSmart REALTOR® based in Sun City West and serving buyers and sellers throughout the West Valley. She provides attentive support with home searches, property marketing, and the day-to-day coordination required to move a purchase or sale toward closing.",
  image: "/team_head_shots/karen-mcmillan.jpg",
  licenseNumber: "#SA716053000",
  },
  {
  id: "rick-mohn",
  name: "Rick Mohn",
  role: "Real Estate Agent",
  bio: "Rick is an Arizona associate broker with roughly 25 years of real estate experience. Based in Sun City West, he works with houses, townhomes, and condos across the Sun Cities and West Valley, representing both buyers and sellers and frequently collaborating on local listings.",
  image: "/team_head_shots/rick-mohn.jpg",
  licenseNumber: "#BR111507000",
  },
  {
  id: "laura-robinson",
  name: "Laura Robinson",
  role: "Real Estate Agent",
  bio: "Laura is a HomeSmart REALTOR® serving the Phoenix metropolitan area, with transaction experience in Scottsdale, Phoenix, Cave Creek, Peoria, and Surprise. She works with both traditional homes and 55+ properties, helping clients navigate a wide range of locations and price points.",
  image: "/team_head_shots/laura_robinson.jpg",
  licenseNumber: "#SA717716000",
  },
  {
  id: "gloria-rosebery",
  name: "Gloria Rosebery",
  role: "Real Estate Agent",
  bio: "Born and raised in Arizona, Gloria has worked full-time in real estate since 2019 and specializes in the active-adult communities of Sun City and Sun City West. She holds SRES® and ABR® designations and serves clients in English and Spanish across the West Valley.",
  image: "/team_head_shots/Gloria_Rosebery.jpg",
  licenseNumber: "#SA687681000",
  googlePlaceId: "ChIJR7NtaEJDK4cRWhyUBgmAZSE",
  },
  {
    id: "cameron-mcdaniel",
    name: "Cameron Mcdaniel",
    role: "Real Estate Agent",
    bio: "Arizona native working in real estate for the last 3 years, specializing in the west valley.",
    image: "/team_head_shots/cameron-mcdaniel.jpg",
    licenseNumber: "#SA692441000",
    },
  ];
  
  export function getTeamMember(id: string): TeamMember | undefined {
  return teamMembers.find((member) => member.id === id);
  }
  
  export function getTeamMemberInitials(name: string): string {
  return name
  .split(/\s+/)
  .filter(Boolean)
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();
  }