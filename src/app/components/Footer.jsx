import React from "react";
import Contact from "./Contact";

const socials = [
  { href: "https://www.linkedin.com/in/Tolulope-olatunji", label: "LinkedIn" },
  { href: "https://www.twitter.com/Ayo__tomiwa", label: "Twitter" },
  { href: "https://www.github.com/Tolulope-xo", label: "GitHub" },
];

const SocialLinks = ({ className }) => (
  <div className={className}>
    {socials.map((s) => (
      <a
        key={s.label}
        href={s.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#C7D0D9] text-[18px] text-right leading-[28.8px] font-[400] hover:text-[#FFFFFF] transition-colors"
      >
        {s.label}
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#0B0C0E] flex max-w-[100%]  w-[100%] justify-between  flex-col md:flex-row px-[20px] py-[40px] h-fit lg:px-[80px]">
        <div className="max-w-[100%] place-content-between justify-between flex flex-col w-[100%] md:max-w-[50%] md:w-[100%]">
          <div className="flex flex-col">
          <p className="font-display text-[#FFFFFF] text-[30px] md:text-[56px] leading-[1.2] font-[700]">
            Have something in mind?
          </p>
          <p className="font-display text-[#FFFFFF] text-[30px] md:text-[48px] leading-[1.2] font-[700] mt-2">
            Let&apos;s build it together.
          </p>
          </div>
          <SocialLinks className="hidden md:flex flex-row gap-10 place-self-start" />
        </div>
        <div className="max-w-[100%] w-[100%] md:max-w-[50%] md:w-[100%]">
        <Contact />
        </div>
        <SocialLinks className="flex md:hidden mt-[2rem] flex-row gap-10 place-self-end" />
    </footer>
  );
};

export default Footer;
