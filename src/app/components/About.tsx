'use client'

import React from "react";
const About = () => {

    return (
    <div id='about' className="flex w-[100%] max-w-[100%] flex-col md:flex-row  justify-between items-start my-[5rem] px-[20px] lg:px-[80px]">
      <h2 className="text-[#0B0C0E] w-[100%] max-w-[40%] text-[40px] leading-[48px] font-[900]">
        About
      </h2>
      <p className="text-[#3C3D3E] w-[100%]max-w-full md:max-w-[60%] text-[18px] md:text-[27px] leading-[37.8px] font-[600]">
       A seasoned frontend developer with three years of industry
        experience. During my journey, I honed my skills by interning at two
        reputable companies, accumulating valuable insights and expertise over
        the span of a year. This hands-on experience not only provided me with a
        solid foundation but also instilled in me the importance of adaptability
        and continuous learning. Through various projects and collaborations, I
        have developed proficiency in crafting intuitive and visually appealing
        user interfaces, ensuring seamless user experiences. I am passionate
        about leveraging technology to solve real-world problems and am eager to
        contribute my skills to your team.
      </p>
    </div>
  );
};

export default About;
