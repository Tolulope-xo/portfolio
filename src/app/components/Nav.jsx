"use client";

import React, { useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {


  return (
    <div>
      <nav className=" text-[#0B0C0E] static py-[20px] px-[20px] lg:px-[80px] flex flex-row items-center justify-between mx-0">
        <div>
          {" "}
          <Link to="">
            <p className="text-[#0B0C0E] cursor-pointer font-[600] text-[18px] leading-[28.8px]">
              {" "}
              @Tolulope
            </p>
          </Link>
        </div>
        <div className="flex flex-row gap-[3rem] justify-around  ">
          <Link
            className="text-[#0B0C0E] py-[1rem] cursor-pointer font-[600] text-[18px] leading-[21.6px]"
            to="about"
            spy={true} smooth={true}
          >
            {" "}
            About
          </Link>
          <Link
            className="text-[#0B0C0E]  py-[1rem] cursor-pointer font-[600] text-[18px] leading-[21.6px]"
            to="portfolio"
            duration={500}
            spy={true} smooth={true}
          >
            Portfolio
          </Link>
          <Link
            className="text-[#0B0C0E]  py-[1rem] cursor-pointer font-[600] text-[18px] leading-[21.6px]"
            to="contact"
            spy={true} smooth={true}
            duration={500}
          >
            {" "}
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
