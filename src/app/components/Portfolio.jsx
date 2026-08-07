"use client";
import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Project from "./Project";
import abel from '../../../public/assets/abel.webp'
import skyle from '../../../public/assets/skyle.webp'
import jaga from '../../../public/assets/jaga.webp'
import planet from '../../../public/assets/planet.webp'
import immibuddy from '../../../public/assets/immibuddy.webp'
import alvany from '../../../public/assets/alvany.webp'
import sonani from "../../../public/assets/sonani.webp"
import emgs from "../../../public/assets/emgs.webp"
const Portfolio = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects = [
    {
      title: "EMGS Global",
      post: 'Website Development',
      src: emgs,
      color: "#0B0C0E",
      lin: 'https://www.emgs.global/'
    },
    {
      title: "Immibuddy",
      post: 'Website Development',
      src: immibuddy,
      color: "#000000",
      lin: 'https://immibuddy.com/'
    },
    {
      title: "Skyle Design",
      post: 'Website Development',
      src: skyle,
      color: "#000000",
      lin: 'https://designwithskyle.com/'
    },
    {
      title: "Alvany Energy Limited",
      post: 'Website Development',
      src: alvany,
      color: "#706D63",
      lin: 'https://starlit-fenglisu-2a5111.netlify.app/'

    }, {
      title: "Planet Savers",
      post: 'Website Development',
      src: planet,
      color: "#706D63",
      lin: 'https://planetsaversglobal.com/'

    },
    {
      title: "Jaga Visuals",
      post: 'Website Development',
      src: jaga,
      color: "#8C8C8C",
      lin: 'https://jaga-visuals.netlify.app/'

    },
    {
      title: "Abel Partners",
      post: 'Website Development',
      src: abel,
      color: "#EFE8D3",
      lin: 'https://chic-taiyaki-c8c3c3.netlify.app/'

    },
    {
      title: "Sonani Consulting",
      post: 'Website Development',
      src: sonani,
      color: "#EFE8D3",
      lin: 'https://sonani.netlify.app/'

    },
   
  ];

  return (
    <section   id="portfolio" aria-label="Recent works" className="flex w-[100%]  max-w-[100%] flex-col md:flex-row justify-between items-start my-[10rem] px-[20px] lg:px-[80px]">
      <h2 className="font-display text-[#0B0C0E] w-[100%] mb-[1rem] md:0 max-w-full md:max-w-[40%] text-[40px] leading-[48px] font-[700]">
        Recent Works
      </h2>
      <div className="w-[100%] max-w-[100%] md:max-w-[60%] ">
        <div style={{
            display: 'flex',
           
            alignItems: 'center',
            justifyContent: 'center',
        }}> 
          <div className="w-[1200px] lg:w-[1000px]" style={{
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
             justifyContent: 'center'
          }}>
            {projects.map((project, index) => {
              return (
                <Project
                  index={index}
                  title={project.title}
                  lin={project.lin}
                  post={project.post}
                  setModal={setModal}
                  key={index}
                />
              );
            })}
          </div>
          <Modal modal={modal} projects={projects} />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
