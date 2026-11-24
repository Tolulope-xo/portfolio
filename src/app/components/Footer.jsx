import React from "react";
import Contact from "./Contact";
import Logo from "./Logo";
import { AUTHOR } from "../site";

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
            Something not working the way it should?
            <span className="block text-[#C7D0D9]">Let&apos;s figure it out together.</span>
          </h2>
          <p className="mt-6 max-w-[460px] text-[18px] leading-[1.6] text-[#C7D0D9]">
            Describe the problem in your own words, no tech talk needed.
            I&apos;ll reply with questions, first ideas and a clear next
            step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`${AUTHOR.whatsapp.url}?text=${encodeURIComponent("Hi Tolulope, I found your website and would like to talk about a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-[16px] font-[600] text-[#0B0C0E] hover:opacity-90 transition-opacity"
            >
              Chat on WhatsApp
              <span className="sr-only">(opens in a new tab)</span>
            </a>
            <a
              href={`tel:${AUTHOR.whatsapp.e164}`}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-3 text-[16px] font-[600] text-white hover:bg-white hover:text-[#0B0C0E] transition-colors"
            >
              {AUTHOR.whatsapp.display}
            </a>
          </div>
          <p className="mt-4 text-[14px] text-[#8A96A3]">Or use the form. I usually reply within one working day.</p>
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
