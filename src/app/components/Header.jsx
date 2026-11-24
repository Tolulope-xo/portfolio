"use client";

import React, { useRef, useEffect } from "react";
import styles from "./../page.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { projects } from "../projects";
import { AUTHOR } from "../site";

const stats = [
  { value: "58,000+", label: "people use a platform I help run" },
  { value: "4+ years", label: "building for real businesses" },
  { value: `${projects.length}`, label: "solutions and websites delivered" },
];

const Header = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  const xPercent = useRef(100);
  const direction = useRef(-1);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const tween = gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction.current = e.direction * -1),
      },
      x: "-500px",
    });

    let frame;
    const animate = () => {
      if (xPercent.current < -100) {
        xPercent.current = 0;
      } else if (xPercent.current > 0) {
        xPercent.current = -100;
      }
      if (firstText.current && secondText.current) {
        gsap.set(firstText.current, { xPercent: xPercent.current });
        gsap.set(secondText.current, { xPercent: xPercent.current });
      }
      xPercent.current += 0.1 * direction.current;
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frame);
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <header id="top">
      <div className={`${styles.main} flex flex-col`}>
        <div className="flex flex-1 flex-col justify-center px-[20px] pt-[48px] pb-[140px] md:pb-[220px] lg:px-[80px]">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F4F7FA]/70 px-4 py-2 text-[14px] font-[600] text-[#0B0C0E] mb-6">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#1F9D55]" />
            Available for new projects
          </p>
          {/* The name and the role share one h1 so the page's main heading
              answers both "Tolulope Olatunji" and role searches. */}
          <h1 className="max-w-[960px]">
            <span className="block font-sans text-[#3C3D3E] text-[18px] md:text-[22px] font-[500] mb-4">
              Hi, I&apos;m Tolulope Olatunji <span aria-hidden="true">👋</span>
            </span>
            <span className="block font-display text-[#0B0C0E] text-[42px] leading-[1.05] md:text-[76px] font-[700] tracking-[-0.02em]">
              Digital Transformation Consultant
            </span>
            <span className="block font-display text-[#3C3D3E] text-[22px] md:text-[32px] leading-[1.2] font-[500] mt-3">
              with a software engineering background
            </span>
          </h1>
          <p className="text-[#3C3D3E] text-[18px] md:text-[22px] leading-[1.6] font-[400] mt-6 max-w-[640px]">
            I help businesses understand what&apos;s really slowing them
            down, then design the processes and build the software that fix
            it, made for how you actually work. Based in Nigeria, working
            with clients across Africa and around the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10">
            <a
              href={AUTHOR.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center bg-[#0B0C0E] text-[#F4F7FA] rounded-full px-8 py-4 text-[16px] md:text-[18px] font-[600] hover:bg-[#455CE9] transition-colors"
            >
              Book a free call
              <span className="sr-only"> (opens Calendly in a new tab)</span>
            </a>
            <a
              href="#portfolio"
              className="text-center border border-[#0B0C0E] text-[#0B0C0E] rounded-full px-8 py-4 text-[16px] md:text-[18px] font-[600] hover:bg-[#0B0C0E] hover:text-[#F4F7FA] transition-colors"
            >
              See my work
            </a>
          </div>
          <p className="mt-4 text-[15px] text-[#3C3D3E]">
            Free, no obligation. Talk me through the problem and leave with
            clear next steps.
          </p>
          <ul className="mt-12 grid grid-cols-3 gap-4 md:gap-10 max-w-[760px] border-t border-[#0B0C0E]/15 pt-6">
            {stats.map((s) => (
              <li key={s.label}>
                <p className="font-display text-[24px] md:text-[36px] font-[700] text-[#0B0C0E] leading-none">
                  {s.value}
                </p>
                <p className="mt-2 text-[13px] md:text-[15px] leading-[1.4] text-[#3C3D3E]">
                  {s.label}
                </p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.sliderContainer} aria-hidden="true">
          <div ref={slider} className={styles.slider}>
            <p
              ref={firstText}
              className="font-display text-[#F4F7FA] text-[80px] md:text-[170px] capitalize leading-none font-[700] text-left"
            >
              Digital Transformation -
            </p>
            <p
              ref={secondText}
              className="font-display text-[#F4F7FA] text-[80px] md:text-[170px] capitalize leading-none font-[700] text-left"
            >
              Process Design - Software Engineering -
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
