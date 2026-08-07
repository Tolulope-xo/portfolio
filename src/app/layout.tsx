import type { Metadata } from "next";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SITE_URL, SITE_NAME, AUTHOR } from "./site";

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


const description =
  "Full-stack developer (React, Next.js, NestJS, AWS) and digital transformation consultant. Deputy technical authority on a national government regulatory platform serving 58,000+ users.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Tolulope Olatunji — Full-Stack Developer & Digital Transformation Consultant",
  description,
  keywords: [
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "AWS",
    "Digital Transformation Consultant",
    "Tolulope Olatunji",
  ],
  authors: [{ name: AUTHOR.name, url: SITE_URL }],
  creator: AUTHOR.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${AUTHOR.name} — ${AUTHOR.jobTitle}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    site: "@Ayo__tomiwa",
    creator: "@Ayo__tomiwa",
    title: `${AUTHOR.name} — ${AUTHOR.jobTitle}`,
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
};

// Structured data so search engines and AI assistants (Google AI Overviews,
// ChatGPT, Claude, Perplexity) can identify the person and site behind the page.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: AUTHOR.name,
      jobTitle: AUTHOR.jobTitle,
      url: SITE_URL,
      image: `${SITE_URL}/assets/display-removebg.png`,
      sameAs: AUTHOR.sameAs,
      knowsAbout: [
        "React",
        "Next.js",
        "NestJS",
        "TypeScript",
        "Node.js",
        "MongoDB",
        "AWS",
        "CI/CD",
        "Digital transformation",
        "Payment integration",
        "AI-augmented software development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
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
       <Header/>

        <main  >{children}</main>
        <Footer/>

      </body>
    </html>
  )
}