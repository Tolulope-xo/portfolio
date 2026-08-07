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
        toast.success("Form submitted successfully!");
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
    <div   id="contact" className="flex flex-col w-full max-w-[100%]  md:items-center justify-start md:justify-center ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-[12px]">
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                className="bg-transparent border-b outline-none max-w-[100%] w-full border-b-[#FFFFFF] text-[#FFFFFF] h-[91px] text-[18px] leading-[37.8px] font-[600]  md:w-[624px]"
                required
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="my-[12px]">
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Email"
                className="bg-transparent border-b outline-none max-w-[100%] w-full  border-b-[#FFFFFF] text-[#FFFFFF] h-[91px] text-[18px] leading-[37.8px] font-[600]  md:w-[624px]"
              />
            </div>
            <div className="my-[12px]">
              <label htmlFor="phone" className="sr-only">Phone number</label>
              <input
                value={formData.phone}
                onChange={handleInputChange}
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                placeholder="Phone number (optional)"
                className="bg-transparent border-b outline-none border-b-[#FFFFFF] text-[#FFFFFF] h-[91px] text-[18px] leading-[37.8px] font-[600] max-w-[100%] w-[100%] md:w-[624px]"
              />
            </div>
          </div>
          <div className="my-[12px]">
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              value={formData.message}
              onChange={handleInputChange}
              id="message"
              name="message"
              placeholder="Message"
              required
              className="bg-transparent border-b outline-none border-b-[#FFFFFF] text-[#FFFFFF] h-[199px] text-[18px] leading-[37.8px] font-[600] max-w-[100%] w-[100%] md:w-[624px]"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            aria-busy={isLoading}
            className={`bg-[#F4F7FA] mt-[25px] flex flex-row border rounded-full items-center justify-center w-[190px] h-[70px] text-[#0B0C0E] text-[18px] leading-[22px] font-[700] hover:opacity-90 transition-opacity ${isLoading ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            {isLoading ? "Submitting..." : "Submit"}
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
