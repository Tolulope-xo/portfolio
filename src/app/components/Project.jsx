"use client";
import React from "react";
import Image from "next/image";
import white from "../../../public/assets/white.png";

export default function Project({ index, title, setModal, post, lin }) {
  return (
    <div
      className="flex flex-row w-[100%] justify-between items-center "
      style={{
        borderTop: "1px solid rgb(201, 201, 201)",
        transition: "all 0.2s",
      }}
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
    >
      <a
        href={lin}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer flex-col flex py-[50px] px-[20px] md:px-[100px]"
      >
        <h3
          className="font-display font-[700] text-[30px] md:text-[60px] m-0"
          style={{
            transition: "all 0.4s",
          }}
        >
          {title}
        </h3>
        <p
          className="font-[500] text-[18px] leading-[21.8px]"
          style={{
            transition: "all 0.4s",
          }}
        >
          {post}
        </p>
      </a>
      <a
        href={lin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit the ${title} website (opens in a new tab)`}
        className="border border-[#3C3D3E] flex items-center justify-center rounded-[50%] w-[65px] h-[65px] md:w-[85px] md:h-[85px] shrink-0 mr-[20px] bg-black hover:bg-transparent transition-colors group"
      >
        <Image src={white} alt="" className="group-hover:invert" />
      </a>
    </div>
  );
}
