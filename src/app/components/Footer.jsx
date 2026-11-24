import React from "react";
import Contact from "./Contact";
import Logo from "./Logo";

const socials = [
  { href: "https://www.linkedin.com/in/Tolulope-olatunji", label: "LinkedIn" },
  { href: "https://www.twitter.com/Ayo__tomiwa", label: "Twitter" },
  { href: "https://www.github.com/Tolulope-xo", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B0C0E] px-[20px] lg:px-[80px] pt-[96px] md:pt-[128px] pb-[40px]">
      <div className="grid gap-14 lg:grid-cols-2">
        <div className="flex flex-col">
          <p className="text-[14px] font-[700] uppercase tracking-[0.14em] text-[#8B9BF5]">
            Contact
          </p>
          <h2 className="mt-3 font-display text-[#FFFFFF] text-[36px] md:text-[56px] leading-[1.1] font-[700] tracking-[-0.02em]">
            Have something in mind?
            <span className="block text-[#C7D0D9]">Let&apos;s build it together.</span>
          </h2>
          <p className="mt-6 max-w-[460px] text-[18px] leading-[1.6] text-[#C7D0D9]">
            Tell me what you want to build or fix. I&apos;ll reply with
            questions, ideas and a clear next step.
          </p>
        </div>
        <Contact />
      </div>

      <div className="mt-[96px] flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
        <a href="#top" aria-label="Tolulope Olatunji, back to top" className="text-[18px] w-fit">
          <Logo tone="paper" />
        </a>
        <ul className="flex flex-row gap-8">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C7D0D9] text-[16px] font-[500] hover:text-[#FFFFFF] transition-colors"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[14px] text-[#8A96A3]">
          © {new Date().getFullYear()} Tolulope Olatunji
        </p>
      </div>
    </footer>
  );
};

export default Footer;
