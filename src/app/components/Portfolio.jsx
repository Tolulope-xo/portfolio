"use client";
import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Project from "./Project";
import { projects } from "../projects";
const Portfolio = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });


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
