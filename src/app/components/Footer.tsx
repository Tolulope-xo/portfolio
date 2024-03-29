import React from "react";
import Contact from "./Contact";
import Image from "next/image";
import display from "../../../public/assets/display-removebg.png";
const Footer = () => {
  return (
    <div className="bg-[#0B0C0E] flex max-w-[100%]  w-[100%] justify-between  flex-col md:flex-row px-[20px] py-[20px] h-fit lg:px-[80px]">
        <div className="max-w-[100%] place-content-between justify-between flex flex-col w-[100%] md:max-w-[50%] md:w-[100%]">
          <div className="flex flex-col  ">
          <p className="text-[#FFFFFF] text-[30px] md:text-[60px] leading-[72px] font-[900]">
            Have something in mind?
          </p>
          <div className="flex flex-row gap-[20px] items-center ">
            <Image
              className="border bg-[#F4F7FA] rounded-[50%] w-[4.5rem] h-[5rem] flex justify-center items-center"
              src={display}
              alt="display-picture"
            />
            <p className="text-[#FFFFFF] text-[30px] md:text-[50px] leading-[72px] font-[900]">
              Let’s build it together.
            </p>
          </div>
          </div>
          <div className=" hidden md:flex flex-row gap-10 place-self-start">
          <a href="https://www.linkedin.com/in/Tolulope-olatunji" className="text-[#C7D0D9] text-[18px] text-right leading-[28.8px] font-[400]">
              Linkedin
            </a>
            <a href="https://www.twitter.com/Ayo__tomiwa" className="text-[#C7D0D9] text-[18px] text-right leading-[28.8px] font-[400]">
              Twitter
            </a>
            <a href="https://www.github.com/Tolulope-xo" className="text-[#C7D0D9] text-[18px] text-right leading-[28.8px] font-[400]">
              GitHub
            </a>
          </div>
        </div>
        <div className="max-w-[100%] w-[100%] md:max-w-[50%] md:w-[100%]">
        <Contact />
        </div>
        <div className="flex md:hidden mt-[2rem] flex-row gap-10 place-self-end">
            <a href="https://www.linkedin.com/in/Tolulope-olatunji" className="text-[#C7D0D9] text-[18px] text-right leading-[28.8px] font-[400]">
              Linkedin
            </a>
            <a href="https://www.twitter.com/Ayo__tomiwa" className="text-[#C7D0D9] text-[18px] text-right leading-[28.8px] font-[400]">
              Twitter
            </a>
            <a href="https://www.github.com/Tolulope-xo" className="text-[#C7D0D9] text-[18px] text-right leading-[28.8px] font-[400]">
              GitHub
            </a>
          </div>
      </div>
    // </div>
  );
};

export default Footer;
