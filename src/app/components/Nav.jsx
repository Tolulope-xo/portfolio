"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        open
          ? "bg-[#F4F7FA] shadow-[0_12px_24px_-12px_rgba(11,12,14,0.25)]"
          : scrolled
            ? "bg-[#F4F7FA]/85 backdrop-blur-md shadow-[0_1px_0_rgba(11,12,14,0.08)]"
            : "bg-[#C7D0D9]"
      }`}
    >
      <nav
        aria-label="Main"
        className="flex items-center justify-between px-[20px] lg:px-[80px] h-[72px]"
      >
        <a href="#top" aria-label="Tolulope Olatunji, back to top" className="text-[18px] md:text-[20px]">
          <Logo />
        </a>

        <div className="hidden md:flex items-center gap-[2.5rem]">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[#0B0C0E] font-[600] text-[16px] hover:text-[#455CE9] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-[#0B0C0E] text-[#F4F7FA] rounded-full px-6 py-3 text-[15px] font-[600] hover:bg-[#455CE9] transition-colors"
          >
            Start a project
          </a>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0B0C0E]/20"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-[12px] w-[18px]">
            <span className={`absolute left-0 h-[2px] w-full bg-[#0B0C0E] transition-transform ${open ? "top-[5px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-[5px] h-[2px] w-full bg-[#0B0C0E] transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-[2px] w-full bg-[#0B0C0E] transition-transform ${open ? "top-[5px] -rotate-45" : "top-[10px]"}`} />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!open}
        className="md:hidden px-[20px] pb-6"
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li key={link.href} className="border-t border-[#0B0C0E]/10">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-[20px] font-[600] text-[#0B0C0E]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-2 block text-center bg-[#0B0C0E] text-[#F4F7FA] rounded-full px-6 py-4 text-[16px] font-[600]"
        >
          Start a project
        </a>
      </div>
    </div>
  );
};

export default Nav;
