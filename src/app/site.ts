// Single source of truth for the site's canonical URL and identity,
// shared by metadata, robots.txt, sitemap.xml and JSON-LD.
// Set NEXT_PUBLIC_SITE_URL in the deployment environment to override.
// Trailing slashes are stripped so `${SITE_URL}/#person` never becomes "//#person".
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://thetolulope.vercel.app"
).replace(/\/+$/, "");

export const SITE_NAME = "Tolulope Olatunji";

export const AUTHOR = {
  name: "Tolulope Olatunji",
  givenName: "Tolulope",
  familyName: "Olatunji",
  // Other ways people search for the same person.
  alternateNames: ["Olatunji Tolulope"],
  jobTitle: "Digital Transformation Consultant & Software Engineer",
  // The roles this site should be found for, in priority order.
  roles: [
    "Digital Transformation Consultant",
    "Software Engineer",
    "Full-Stack Web Developer",
  ],
  description:
    "Tolulope Olatunji is a digital transformation consultant in Nigeria with a software engineering background, who helps businesses understand their problems and then designs the processes and builds the software that solve them.",
  // WhatsApp, the preferred contact channel for most clients.
  whatsapp: {
    display: "+234 815 500 7898",
    e164: "+2348155007898",
    url: "https://wa.me/2348155007898",
  },
  // Free discovery call booking page.
  bookingUrl: "https://calendly.com/olatunjitolulope4",
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
