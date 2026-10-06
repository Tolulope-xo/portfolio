// Single source of truth for the site's canonical URL and identity,
// shared by metadata, robots.txt, sitemap.xml and JSON-LD.
// Set NEXT_PUBLIC_SITE_URL in the deployment environment to override.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thetolulope.vercel.app";

export const SITE_NAME = "Tolulope Olatunji";

export const AUTHOR = {
  name: "Tolulope Olatunji",
  givenName: "Tolulope",
  familyName: "Olatunji",
  // Other ways people search for the same person.
  alternateNames: ["Olatunji Tolulope"],
  jobTitle: "Software Engineer & Full-Stack Web Developer",
  // The roles this site should be found for, in priority order.
  roles: [
    "Software Engineer",
    "Full-Stack Web Developer",
    "Digital Transformation Consultant",
  ],
  description:
    "Tolulope Olatunji is a software engineer, web developer and digital consultant in Nigeria who builds websites and web apps that help businesses grow.",
  // Where Tolulope is based, and the wider market served.
  country: { name: "Nigeria", code: "NG" },
  areaServed: [
    { "@type": "Country", name: "Nigeria" },
    { "@type": "Continent", name: "Africa" },
    "Worldwide",
  ],
  sameAs: [
    "https://www.linkedin.com/in/Tolulope-olatunji",
    "https://www.twitter.com/Ayo__tomiwa",
    "https://www.github.com/Tolulope-xo",
  ],
};
