// Single source of truth for the site's canonical URL and identity,
// shared by metadata, robots.txt, sitemap.xml and JSON-LD.
// Set NEXT_PUBLIC_SITE_URL in the deployment environment to override.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://tolulope-olatunji.vercel.app";

export const SITE_NAME = "Tolulope Olatunji — Portfolio";

export const AUTHOR = {
  name: "Tolulope Olatunji",
  jobTitle: "Full-Stack Developer & Digital Transformation Consultant",
  sameAs: [
    "https://www.linkedin.com/in/Tolulope-olatunji",
    "https://www.twitter.com/Ayo__tomiwa",
    "https://www.github.com/Tolulope-xo",
  ],
};
