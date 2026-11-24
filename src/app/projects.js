// Single list of portfolio projects, shared by the Recent Works section
// (Portfolio.jsx) and the ItemList JSON-LD in layout.tsx.
// Keep public/llms.txt "Selected Projects" in sync when this list changes.
import abel from "../../public/assets/abel.webp";
import skyle from "../../public/assets/skyle.webp";
import jaga from "../../public/assets/jaga.webp";
import planet from "../../public/assets/planet.webp";
import immibuddy from "../../public/assets/immibuddy.webp";
import alvany from "../../public/assets/alvany.webp";
import sonani from "../../public/assets/sonani.webp";
import emgs from "../../public/assets/emgs.webp";
import dixtoes from "../../public/assets/dixtoes.webp";
import workorganizer from "../../public/assets/workorganizer.webp";
import thriftbid from "../../public/assets/thriftbid.webp";
import helpapply from "../../public/assets/helpapply.webp";

// `src` is the static import used by next/image; `image` is the stable public
// path of the same file, used for absolute URLs in structured data.
// `blurb` is the one-line summary shown on the project card.
export const projects = [
  {
    title: "HelpApply",
    post: "AI Web App",
    blurb:
      "An AI study-abroad assistant that finds courses, checks official university pages for deadlines and requirements, and drafts the application documents.",
    src: helpapply,
    image: "/assets/helpapply.webp",
    color: "#F7F3EE",
    lin: "https://help-apply-kappa.vercel.app/",
  },
  {
    title: "ThriftBid",
    post: "Live Auction Platform",
    blurb: "A live auction marketplace for pre-loved clothing, furniture, tech and books, with real-time bidding.",
    src: thriftbid,
    image: "/assets/thriftbid.webp",
    color: "#F5F1EA",
    lin: "https://thrift-bidding-system-frontend.vercel.app/",
  },
  {
    title: "Dix Toes",
    post: "E-commerce Development",
    blurb: "An online store for handmade leather footwear, with product pages, cart and checkout.",
    src: dixtoes,
    image: "/assets/dixtoes.webp",
    color: "#1A1411",
    lin: "https://dixtoes.vercel.app/",
  },
  {
    title: "Work Organiser",
    post: "Full-Stack Web App",
    blurb: "Turns WhatsApp requests into tasks, filed together with their documents, so nothing gets lost.",
    src: workorganizer,
    image: "/assets/workorganizer.webp",
    color: "#EEF1F4",
    lin: "https://work-organizer-beryl.vercel.app/",
  },
  {
    title: "EMGS Global",
    post: "Website Development",
    blurb: "A company website that presents services clearly and turns visitors into enquiries.",
    src: emgs,
    image: "/assets/emgs.webp",
    color: "#0B0C0E",
    lin: "https://www.emgs.global/",
  },
  {
    title: "Immibuddy",
    post: "Website Development",
    blurb: "A website for an immigration support service, built to explain the process and win sign-ups.",
    src: immibuddy,
    image: "/assets/immibuddy.webp",
    color: "#000000",
    lin: "https://immibuddy.com/",
  },
  {
    title: "Skyle Design",
    post: "Website Development",
    blurb: "A portfolio website for a design studio, built to show off the work.",
    src: skyle,
    image: "/assets/skyle.webp",
    color: "#000000",
    lin: "https://designwithskyle.com/",
  },
  {
    title: "Alvany Energy Limited",
    post: "Website Development",
    blurb: "A corporate website for an energy company.",
    src: alvany,
    image: "/assets/alvany.webp",
    color: "#706D63",
    lin: "https://starlit-fenglisu-2a5111.netlify.app/",
  },
  {
    title: "Planet Savers",
    post: "Website Development",
    blurb: "A website for a sustainability organisation.",
    src: planet,
    image: "/assets/planet.webp",
    color: "#706D63",
    lin: "https://planetsaversglobal.com/",
  },
  {
    title: "Jaga Visuals",
    post: "Website Development",
    blurb: "A portfolio website for a visual content studio.",
    src: jaga,
    image: "/assets/jaga.webp",
    color: "#8C8C8C",
    lin: "https://jaga-visuals.netlify.app/",
  },
  {
    title: "Abel Partners",
    post: "Website Development",
    blurb: "A professional services firm website.",
    src: abel,
    image: "/assets/abel.webp",
    color: "#EFE8D3",
    lin: "https://chic-taiyaki-c8c3c3.netlify.app/",
  },
  {
    title: "Sonani Consulting",
    post: "Website Development",
    blurb: "A consulting firm website.",
    src: sonani,
    image: "/assets/sonani.webp",
    color: "#EFE8D3",
    lin: "https://sonani.netlify.app/",
  },
];
