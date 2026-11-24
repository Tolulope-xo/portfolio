"use client";

import React, { useState } from "react";
import Image from "next/image";
import { projects } from "../projects";

const INITIAL = 6;

function ProjectCard({ project, featured, priority }) {
  return (
    <li className={featured ? "md:col-span-2 lg:col-span-3" : undefined}>
      <a
        href={project.lin}
        target="_blank"
        rel="noopener noreferrer"
        className={`group flex h-full flex-col overflow-hidden rounded-[24px] bg-white border border-[#0B0C0E]/[0.06] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(11,12,14,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#455CE9] ${
          featured ? "md:flex-row" : ""
        }`}
      >
        <div
          className={`relative overflow-hidden ${featured ? "md:w-[58%] shrink-0" : ""}`}
          style={{ backgroundColor: project.color }}
        >
          <Image
            src={project.src}
            alt={`Screenshot of the ${project.title} website`}
            sizes={featured ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"}
            priority={priority}
            className="aspect-[16/9] h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className={`flex flex-1 flex-col p-6 md:p-7 ${featured ? "md:justify-center md:p-10" : ""}`}>
          <p className="text-[13px] font-[700] uppercase tracking-[0.12em] text-[#455CE9]">
            {featured ? `New · ${project.post}` : project.post}
          </p>
          <h3
            className={`mt-2 font-display font-[700] text-[#0B0C0E] tracking-[-0.01em] ${
              featured ? "text-[28px] md:text-[40px] leading-[1.1]" : "text-[22px] md:text-[24px]"
            }`}
          >
            {project.title}
          </h3>
          <p className={`mt-3 leading-[1.6] text-[#3C3D3E] ${featured ? "text-[17px] md:text-[18px]" : "text-[15px]"}`}>
            {project.blurb}
          </p>
          <span className="mt-auto pt-6 inline-flex items-center gap-2 text-[15px] font-[600] text-[#0B0C0E]">
            Visit site
            <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
              <path d="M6 14L14 6M7 6h7v7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="sr-only">(opens in a new tab)</span>
          </span>
        </div>
      </a>
    </li>
  );
}

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const [featured, ...rest] = projects;
  const visible = showAll ? rest : rest.slice(0, INITIAL);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="px-[20px] lg:px-[80px] py-[96px] md:py-[128px] bg-[#EAEEF2]"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div className="max-w-[720px]">
          <p className="text-[14px] font-[700] uppercase tracking-[0.14em] text-[#455CE9]">
            Portfolio
          </p>
          <h2
            id="portfolio-heading"
            className="mt-3 font-display text-[#0B0C0E] text-[36px] md:text-[52px] leading-[1.1] font-[700] tracking-[-0.02em]"
          >
            Recent Works
          </h2>
        </div>
        <p className="max-w-[420px] text-[17px] leading-[1.6] text-[#3C3D3E]">
          Live products and websites for startups, businesses and
          organisations. Click any project to visit it.
        </p>
      </div>

      <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard project={featured} featured priority />
        {visible.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>

      {rest.length > INITIAL && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
            className="rounded-full border border-[#0B0C0E] px-8 py-4 text-[16px] font-[600] text-[#0B0C0E] hover:bg-[#0B0C0E] hover:text-[#F4F7FA] transition-colors"
          >
            {showAll ? "Show fewer projects" : `Show all ${projects.length} projects`}
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
