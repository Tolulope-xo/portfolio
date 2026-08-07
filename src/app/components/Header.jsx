"use client";

import React, { useRef, useEffect } from "react";
import styles from "./../page.module.css";

import Nav from "./Nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

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
    <header>
      <div className={`${styles.main} flex flex-col`}>
        <Nav />
        <div className="flex flex-1 flex-col justify-center px-[20px] pb-[120px] md:pb-[200px] lg:px-[80px]">
          <p className="text-[#3C3D3E] text-[18px] md:text-[22px] font-[500] mb-4">
            Hi, I&apos;m Tolulope Olatunji 👋
          </p>
          <h1 className="font-display text-[#0B0C0E] text-[44px] leading-[1.1] md:text-[76px] font-[700] max-w-[900px]">
            Full-Stack Developer &amp; Digital Transformation Consultant
          </h1>
          <p className="text-[#3C3D3E] text-[18px] md:text-[22px] leading-[1.6] font-[400] mt-6 max-w-[640px]">
            I build and operate production web platforms end-to-end — React and
            Next.js frontends, NestJS backends, and AWS infrastructure trusted
            by 58,000+ users.
          </p>
          <div className="flex flex-row gap-4 mt-10">
            <a
              href="#portfolio"
              className="bg-[#0B0C0E] text-[#F4F7FA] rounded-full px-8 py-4 text-[16px] md:text-[18px] font-[600] hover:opacity-80 transition-opacity"
            >
              See my work
            </a>
            <a
              href="#contact"
              className="border border-[#0B0C0E] text-[#0B0C0E] rounded-full px-8 py-4 text-[16px] md:text-[18px] font-[600] hover:bg-[#0B0C0E] hover:text-[#F4F7FA] transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className={styles.sliderContainer} aria-hidden="true">
          <div ref={slider} className={styles.slider}>
            <p
              ref={firstText}
              className="font-display text-[#F4F7FA] text-[80px] md:text-[170px] capitalize leading-none font-[700] text-left"
            >
              Full-Stack Developer -
            </p>
            <p
              ref={secondText}
              className="font-display text-[#F4F7FA] text-[80px] md:text-[170px] capitalize leading-none font-[700] text-left"
            >
              Transformation Consultant -
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
