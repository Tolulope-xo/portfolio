'use client'

import React from "react";

const text = "text-[#3C3D3E] w-[100%] max-w-full text-[18px] md:text-[27px] leading-[37.8px] font-[400]";

const About = () => {

    return (
    <section id='about' aria-label="About" className="flex w-[100%] max-w-[100%] flex-col md:flex-row  justify-between items-start my-[5rem] px-[20px] lg:px-[80px]">
      <h2 className="font-display text-[#0B0C0E] w-[100%] max-w-[40%] text-[40px] leading-[48px] font-[700]">
        About Tolulope Olatunji
      </h2>
      <div className="flex flex-col">
      <p className="text-[#3C3D3E] w-[100%] max-w-full text-[18px] md:text-[27px] leading-[37.8px] pb-8 font-[500]">
        I build websites and web apps that help businesses win customers, get paid online and run smoothly.
      </p>
      <p className={`${text} pb-8`}>
        I&apos;m Tolulope Olatunji, a software engineer and web developer based in Nigeria. For over 4 years I&apos;ve built websites and software for businesses and organisations. Today I help run a national government platform that more than 58,000 professionals use to register and pay online, so I know what it takes to build something people can depend on every day.
      </p>

      <div className={`${text} pb-8`}>
        <h3 className="font-[600]"><span aria-hidden="true">✅</span> What I Can Do For You</h3>
        <ul>
          <li>- Build a website that looks professional and brings you customers</li>
          <li>- Build an online store so you can sell and get paid online</li>
          <li>- Turn paperwork and manual processes into simple software your team can use</li>
          <li>- Add online payments that you and your customers can trust</li>
          <li>- Fix, speed up or take over a website or app that isn&apos;t working well</li>
          <li>- Keep everything running after launch, so you&apos;re never left stranded</li>
        </ul>
      </div>

      <div className={`${text} pb-8`}>
        <h3 className="font-[600]"><span aria-hidden="true">💬</span> Why Clients Work With Me</h3>
        <ul>
          <li>- Trusted to help run a live government platform used by 58,000+ people</li>
          <li>- Experienced with systems that handle real money, so I&apos;m careful with yours</li>
          <li>- I test everything before it goes live and always have a backup plan</li>
          <li>- I explain things in plain language, with no tech talk</li>
          <li>- I use modern AI tools to deliver faster without cutting corners</li>
        </ul>
      </div>

      <div className={`${text} pb-8`}>
        <h3 className="font-[600]"><span aria-hidden="true">💼</span> Tools I Work With</h3>
        <p>React, Next.js, TypeScript, Node.js, NestJS, MongoDB and AWS.</p>
      </div>

      <p className={text}>
        Have a problem you want solved or an idea you want built? I work with businesses in Nigeria, across Africa and around the world, in person or remotely. Tell me about it using the form below.
      </p>
      </div>
    </section>
  );
};

export default About;
