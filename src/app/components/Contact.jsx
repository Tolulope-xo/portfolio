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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

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
      .then((data) => {
        console.log("Response Data:", data);
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
      });
  };
  return (
    <div   id="contact" className="flex flex-col w-full max-w-[100%]  md:items-center justify-start md:justify-center ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="">
            <div className="mb-[12px]">
              <input
                type="text"
                id="name"
                name="name"
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
              <input
                value={formData.email}
                onChange={handleInputChange}
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="bg-transparent border-b outline-none max-w-[100%] w-full  border-b-[#FFFFFF] text-[#FFFFFF] h-[91px] text-[18px] leading-[37.8px] font-[600]  md:w-[624px]"
              />
            </div>
            <div className="my-[12px]">
              <input
                value={formData.phone}
                onChange={handleInputChange}
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone number"
                className="bg-transparent border-b outline-none border-b-[#FFFFFF] text-[#FFFFFF] h-[91px] text-[18px] leading-[37.8px] font-[600] max-w-[100%] w-[100%] md:w-[624px]"
              />
            </div>
          </div>
          <div className="my-[12px]">
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
          <div className="bg-[#F4F7FA] mt-[25px]  flex flex-row justify-self-end cursor-pointer border rounded-r-[48px] rounded-l-[48px] justify-items-end items-center justify-center content-end w-[190px] h-[70px]">
            <input
              type="submit"
              className="text-[#0B0C0E] text-[18px] leading-[22px] font-[800]"
              defaultValue="Submit"
            />
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
