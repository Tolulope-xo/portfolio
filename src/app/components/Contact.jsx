"use client";

import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({}) => {

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    fetch("https://formsubmit.co/ajax/olatunjitolulope4@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(() => {
        // Display success toast notification
        toast.success("Thanks! Your message is on its way. I'll reply soon.");
        // Clear form data after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error during form submission:", error);
        // Display error toast notification
        toast.error("Failed to submit form. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
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
