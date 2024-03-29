"use client";
import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Project from "./Project";
import abel from '../../../public/assets/abel.png'
import skyle from '../../../public/assets/skyle.png'
import jaga from '../../../public/assets/jaga.png'
const Portfolio = () => { 
  const [modal, setModal] = useState({ active: false, index: 0 });

  const projects = [
    {
      title: "Skyle Design",
      post: 'Website Development',
      src: skyle,
      color: "#000000",
      lin: 'https://designwithskyle.com/'
    },
    {
      title: "Jaga Visuals",
      post: 'Website Development',
      src: jaga,
      color: "#8C8C8C",
      lin: 'https://jagavisuals.com/'

    },
    {
      title: "Abel Partners",
      post: 'Website Development',
      src: abel,
      color: "#EFE8D3",
      lin: 'https://chic-taiyaki-c8c3c3.netlify.app/'

    },
    {
      title: "Artsy",
      post: 'Website Development',
      src: abel,
      color: "#706D63",
      lin: 'https://chic-taiyaki-c8c3c3.netlify.app/'

    },
  ];

  return (
    <div   id="portfolio" className="flex w-[100%]  max-w-[100%] flex-col md:flex-row justify-between items-start my-[10rem] px-[20px] lg:px-[80px]">
      <h2 className="text-[#0B0C0E] w-[100%] mb-[1rem] md:0 max-w-full md:max-w-[40%] text-[40px] leading-[48px] font-[900]">
        Recent Works
      </h2>
      <div className="w-[100%] max-w-[100%] md:max-w-[60%] ">
        <main style={{
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
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
