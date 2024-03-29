"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./../page.module.css";
import Image from "next/image";
import display from "../../../public/assets/display-removebg.png";
import wave from "../../../public/assets/wave.png";

import Nav from "./Nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Header = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 100; // Start from the right side
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible); // Toggle visibility state
  };
  let direction = -1;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.5,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    });
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }

    gsap.set(firstText.current, { xPercent: xPercent });

    gsap.set(secondText.current, { xPercent: xPercent });

    requestAnimationFrame(animate);

    xPercent += 0.1 * direction;
  };

  return (
    <div>
      <div className={styles.main}>
        <Nav />
        <div className="flex flex-row justify-center items-center">
          <Image
            className="h-[754.37px] relative bottom-0 w-[601px]"
            src={display}
            alt="display-picture"
          />
          <div className="border right-0 absolute cursor-pointer bg-[#0B0C0E] rounded-l-[64px] rounded-r-[0px] w-fit gap-[1rem] px-[20px] h-[95.14px] flex items-center justify-center">
            <Image
              className="animate-pulse"
              src={wave}
              alt="wave-icon"
              onClick={handleClick}
            />
            {visible && (
              <p id="slide" className="text-[#FFFFFF] slide text-[40px] leading-[48px] font-[800]">
                I'm Tolulope
              </p>
            )}
          </div>
          <div className={styles.sliderContainer}>
            <div ref={slider} className={styles.slider}>
              <p
                ref={firstText}
                className="text-[#F4F7FA] text-[80px] md:text-[180.38px] capitalize leading-[180.45px] font-[900] text-left"
              >
                Front-end Developer -
              </p>
              <p
                ref={secondText}
                className="text-[#F4F7FA] text-[80px] md:text-[180.38px] capitalize leading-[180.45px] font-[900] text-left"
              >
                Freelance Developer -
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
