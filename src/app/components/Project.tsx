"use client";
import React, { useState } from "react";
import Image from "next/image";
import white from "../../../public/assets/white.png";
import black from "../../../public/assets/black.png";
import Link from "next/link";

export default function Project({ index, title, setModal, post, lin }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div
      className="flex flex-row w-[100%] justify-between items-center "
      style={{
        borderTop: "1px solid rgb(201, 201, 201)",
        cursor: "pointer",
        transition: "all 0.2s",
      }}
    >
      <div
        onMouseEnter={() => {
          setModal({ active: true, index });
        }}
        onMouseLeave={() => {
          setModal({ active: false, index });
        }}
        className="cursor-pointer flex-col flex py-[50px] px-[20px] md:px-[100px]"
      >
        <h2
          className="font-[800] text-[30px] md:text-[60px] m-0"
          style={{
            transition: "all 0.4s",
          }}
        >
          {title}
        </h2>
        <h2
          className="font-[600] text-[18px] leading-[21.8px]"
          style={{
            transition: "all 0.4s",
          }}
        >
          {post}
        </h2>
      </div>
      <a href={lin}>
        <div
          onClick={handleClick}
          className={`border border-[#3C3D3E] flex items-center justify-center rounded-[50%] w-[85px] h-[85px] ${
            clicked ? "bg-transparent" : "bg-black"
          }`}
        >
          <Image src={clicked ? black : white} alt="arrow" />
        </div>
      </a>
    </div>
  );
}
