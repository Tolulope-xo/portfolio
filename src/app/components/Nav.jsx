import React from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  return (
    <nav
      aria-label="Main"
      className="text-[#0B0C0E] static py-[20px] px-[20px] lg:px-[80px] flex flex-row items-center justify-between mx-0"
    >
      <a
        href="#top"
        className="text-[#0B0C0E] cursor-pointer font-[600] text-[18px] leading-[28.8px]"
      >
        @Tolulope
      </a>
      <div className="flex flex-row gap-[1.5rem] md:gap-[3rem] justify-around">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[#0B0C0E] py-[1rem] cursor-pointer font-[600] text-[18px] leading-[21.6px]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
