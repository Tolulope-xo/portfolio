import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL, SITE_NAME, AUTHOR } from "./site";
import { projects } from "./projects";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});


const description = AUTHOR.description;
const title = `${AUTHOR.name} | Digital Transformation Consultant & Software Engineer in ${AUTHOR.country.name}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: SITE_NAME,
  keywords: [
    AUTHOR.name,
    ...AUTHOR.alternateNames,
    "Digital Transformation Consultant",
    "Digital Transformation Consultant in Nigeria",
    "Digital Transformation Consultant in Africa",
    "Business Process Improvement",
    "Process Automation Consultant",
    "Software Engineer",
    "Web Developer",
    "Full-Stack Developer",
    "Full-Stack Web Developer",
    "Digital Consultant",
    "Software Engineer in Nigeria",
    "Software Engineer Nigeria",
    "Full-Stack Web Developer in Nigeria",
    "Web Developer in Nigeria",
    "Web Developer in Africa",
    "React Developer",
    "Next.js Developer",
    "NestJS Developer",
    "TypeScript Developer",
  ],
  authors: [{ name: AUTHOR.name, url: SITE_URL }],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
    locale: "en_US",
    firstName: AUTHOR.givenName,
    lastName: AUTHOR.familyName,
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ayo__tomiwa",
    creator: "@Ayo__tomiwa",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": AUTHOR.country.code,
    "geo.placename": AUTHOR.country.name,
  },
  // Search Console / Bing Webmaster ownership tokens, set in the deployment
  // environment. Omitted from the page when unset.
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ??
      "y8DOq6uO4uR4c9q-2vBSRY36zv9MTlz_MiDRc7LaUhU",
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

const services = [
  "Digital transformation consulting",
  "Business process mapping and redesign",
  "Process automation and custom software",
  "Full-stack web application development",
  "Website development",
  "Payment integration",
];

// Structured data so search engines and AI assistants (Google AI Overviews,
// ChatGPT, Claude, Perplexity) can identify the person and site behind the page.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR.name,
      givenName: AUTHOR.givenName,
      familyName: AUTHOR.familyName,
      alternateName: AUTHOR.alternateNames,
      description,
      jobTitle: AUTHOR.roles,
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      mainEntityOfPage: { "@id": `${SITE_URL}/#profilepage` },
      address: {
        "@type": "PostalAddress",
        addressCountry: AUTHOR.country.code,
      },
      workLocation: { "@type": "Country", name: AUTHOR.country.name },
      sameAs: AUTHOR.sameAs,
      hasOccupation: AUTHOR.roles.map((role) => ({
        "@type": "Occupation",
        name: role,
      })),
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service },
        areaServed: AUTHOR.areaServed,
      })),
      knowsAbout: [
        "Digital transformation",
        "Business process improvement",
        "Process automation",
        "Software engineering",
        "Web development",
        "Full-stack development",
        "React",
        "Next.js",
        "NestJS",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "AWS",
        "CI/CD",
        "Payment integration",
        "AI-augmented software development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      alternateName: `${AUTHOR.name} — Portfolio`,
      description,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profilepage`,
      url: SITE_URL,
      name: title,
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      primaryImageOfPage: `${SITE_URL}/opengraph-image`,
      inLanguage: "en",
    },
    {
      // The "Recent Works" section, one CreativeWork per portfolio project.
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projects`,
      name: `Recent works by ${AUTHOR.name}`,
      url: `${SITE_URL}/#portfolio`,
      numberOfItems: projects.length,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: project.title,
          description: `${project.post} by ${AUTHOR.name}: ${project.blurb}`,
          genre: project.post,
          url: project.lin,
          image: `${SITE_URL}${project.image}`,
          creator: { "@id": `${SITE_URL}/#person` },
        },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className={`bg-[#F4F7FA] scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`}
      lang="en"
    >
       <body className="font-sans antialiased">
       <script
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
       />
       <a
         href="#top"
         className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#0B0C0E] focus:px-5 focus:py-3 focus:text-[#F4F7FA]"
       >
         Skip to content
       </a>
       <Nav />
       <Header />
       <main id="main">{children}</main>
       <Footer />

      </body>
    </html>
  )
}