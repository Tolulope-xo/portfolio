"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AUTHOR } from "../site";

// FormSubmit is slow (40s+ responses seen on 2026-11-24) and answers HTTP 200
// even when it rejects a message, so: check its `success` field, tell the
// visitor when it's slow, and give up after HARD_TIMEOUT_MS with direct
// contact options instead of spinning forever.
const ENDPOINT = "https://formsubmit.co/ajax/olatunjitolulope4@gmail.com";
const SLOW_AFTER_MS = 10000;
const HARD_TIMEOUT_MS = 60000;
const EMAIL = "olatunjitolulope4@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/Tolulope-olatunji";

const emptyForm = { name: "", email: "", phone: "", message: "" };

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  // idle | sending | slow | sent | failed
  const [status, setStatus] = useState("idle");
  const isLoading = status === "sending" || status === "slow";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const controller = new AbortController();
    const slowTimer = setTimeout(() => setStatus("slow"), SLOW_AFTER_MS);
    const hardTimer = setTimeout(() => controller.abort(), HARD_TIMEOUT_MS);

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...formData,
          _subject: `Portfolio enquiry from ${formData.name}`,
          _template: "table",
        }),
        signal: controller.signal,
      });
      const data = await response.json().catch(() => ({}));
      const ok = response.ok && String(data.success) === "true";
      if (!ok) throw new Error(data.message || `HTTP ${response.status}`);

      setStatus("sent");
      setFormData(emptyForm);
      toast.success("Thanks! Your message has been sent. I'll reply soon.");
    } catch (error) {
      console.error("Contact form failed:", error);
      setStatus("failed");
      toast.error("Sorry, your message didn't go through. Please message me on WhatsApp or by email.");
    } finally {
      clearTimeout(slowTimer);
      clearTimeout(hardTimer);
    }
  };

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    `Portfolio enquiry from ${formData.name || "your website"}`
  )}&body=${encodeURIComponent(formData.message)}`;
  const whatsapp = `${AUTHOR.whatsapp.url}?text=${encodeURIComponent(
    formData.message || "Hi Tolulope, I found your website and would like to talk about a project."
  )}`;

  return (
    <div id="contact" className="flex flex-col w-full">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-[12px]">
              <label htmlFor="name" className="block text-[13px] font-[600] uppercase tracking-[0.12em] text-[#8A96A3]">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className="bg-transparent border-b outline-none max-w-[100%] w-full border-b-[#FFFFFF]/40 placeholder:text-[#5A646E] placeholder:font-[400] text-[#FFFFFF] h-[56px] focus:border-b-[#455CE9] transition-colors text-[18px] leading-[37.8px] font-[600]"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="my-[12px]">
            <div>
              <label htmlFor="email" className="block text-[13px] font-[600] uppercase tracking-[0.12em] text-[#8A96A3]">Email</label>
              <input
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="bg-transparent border-b outline-none max-w-[100%] w-full  border-b-[#FFFFFF]/40 placeholder:text-[#5A646E] placeholder:font-[400] text-[#FFFFFF] h-[56px] focus:border-b-[#455CE9] transition-colors text-[18px] leading-[37.8px] font-[600]"
              />
            </div>
            <div className="my-[12px]">
              <label htmlFor="phone" className="block text-[13px] font-[600] uppercase tracking-[0.12em] text-[#8A96A3]">Phone number</label>
              <input
                value={formData.phone}
                onChange={handleInputChange}
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                placeholder="Optional"
                className="bg-transparent border-b outline-none border-b-[#FFFFFF]/40 placeholder:text-[#5A646E] placeholder:font-[400] text-[#FFFFFF] h-[56px] focus:border-b-[#455CE9] transition-colors text-[18px] leading-[37.8px] font-[600] max-w-[100%] w-[100%]"
              />
            </div>
          </div>
          <div className="my-[12px]">
            <label htmlFor="message" className="block text-[13px] font-[600] uppercase tracking-[0.12em] text-[#8A96A3]">Message</label>
            <textarea
              value={formData.message}
              onChange={handleInputChange}
              id="message"
              name="message"
              placeholder="What problem are you trying to solve?"
              required
              className="bg-transparent border-b outline-none border-b-[#FFFFFF]/40 placeholder:text-[#5A646E] placeholder:font-[400] text-[#FFFFFF] h-[140px] pt-3 resize-y focus:border-b-[#455CE9] transition-colors text-[18px] leading-[37.8px] font-[600] max-w-[100%] w-[100%]"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            aria-busy={isLoading}
            className={`bg-[#455CE9] text-white mt-[25px] flex flex-row rounded-full items-center justify-center w-full md:w-[220px] h-[60px] text-[18px] leading-[22px] font-[700] hover:bg-[#F4F7FA] hover:text-[#0B0C0E] transition-colors transition-opacity ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {isLoading ? "Sending..." : "Send message"}
          </button>

          <div aria-live="polite" className="mt-5 text-[15px] leading-[1.6]">
            {status === "slow" && (
              <p className="text-[#C7D0D9]">
                Still sending, the mail service is slow right now. You can
                keep waiting, or reach me directly:
              </p>
            )}
            {status === "failed" && (
              <p className="text-[#FFB4B4]">
                Your message didn&apos;t go through. Nothing you typed is lost,
                send it to me directly:
              </p>
            )}
            {status === "sent" && (
              <p className="text-[#9BE7B8]">
                Message sent. I usually reply within one working day.
              </p>
            )}
            {(status === "slow" || status === "failed") && (
              <div className="mt-3 flex flex-wrap gap-3">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#25D366] px-5 py-2 font-[600] text-[#0B0C0E] hover:opacity-90 transition-opacity"
                >
                  WhatsApp me
                </a>
                <a
                  href={mailto}
                  className="rounded-full border border-white/30 px-5 py-2 font-[600] text-white hover:bg-white hover:text-[#0B0C0E] transition-colors"
                >
                  Email me
                </a>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-5 py-2 font-[600] text-white hover:bg-white hover:text-[#0B0C0E] transition-colors"
                >
                  Message me on LinkedIn
                </a>
              </div>
            )}
          </div>

          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
