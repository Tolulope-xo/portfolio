'use client'

import React from "react";
const About = () => {

    return (
    <section id='about' aria-label="About" className="flex w-[100%] max-w-[100%] flex-col md:flex-row  justify-between items-start my-[5rem] px-[20px] lg:px-[80px]">
      <h2 className="font-display text-[#0B0C0E] w-[100%] max-w-[40%] text-[40px] leading-[48px] font-[700]">
        About Tolulope Olatunji
      </h2>
      <div className="flex flex-col">
      <p className="text-[#3C3D3E] w-[100%] max-w-full text-[18px] md:text-[27px] leading-[37.8px] pb-8 font-[500]">
       Software Engineer, Full-Stack Web Developer &amp; Digital Transformation Consultant | React • Next.js • NestJS • AWS
       </p>
      <p className="text-[#3C3D3E] w-[100%]max-w-full text-[18px] md:text-[27px] leading-[37.8px] pb-4 font-[400]">

I&apos;m Tolulope Olatunji, a software engineer and full-stack web developer based in Nigeria. With 4+ years of professional experience, I build and operate production web platforms end-to-end — from React and Next.js frontends to NestJS and MongoDB backends running on AWS. I currently serve as deputy technical authority on a national government regulatory platform used by over 58,000 registered professionals, where I ship payment-critical backend logic, cut production releases through a gated CI/CD pipeline, and run live incident response and data remediation on a real production system.
</p>

<div className="text-[#3C3D3E] w-[100%] max-w-full pb-8 text-[18px] md:text-[27px] leading-[37.8px] font-[400]">
<h3 className="font-[600]"><span aria-hidden="true">💼</span> Technologies &amp; Skills</h3>
  <ul>
<li>🔹 Frontend: React.js, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS, Redux</li>
<li>🔹 Backend: Node.js, NestJS, MongoDB (Mongoose), REST, GraphQL, WebSockets</li>
<li>🔹 Cloud &amp; DevOps: AWS (Elastic Beanstalk, ECS/Fargate, CloudFront, S3), GitHub Actions CI/CD, release management</li>
<li>🔹 Quality &amp; Safety: regression testing, fail-closed design, incident response, data-protection compliance (NDPA 2023)</li>
<li>🔹 AI Engineering: AI-augmented development with Claude Code — agentic workflows and AI code review wired into CI</li>
</ul>
</div>

<div className="text-[#3C3D3E] w-[100%] pb-8 max-w-full text-[18px] md:text-[27px] leading-[37.8px] font-[400]">
<h3 className="font-[600]"><span aria-hidden="true">✅</span> Web Development &amp; Digital Consulting Services</h3>
<ul>
<li>- Full-stack web application development (React/Next.js + Node/NestJS)</li>
<li>- Digital transformation for organisations moving critical workflows online</li>
<li>- Payment integration and transaction-integrity engineering</li>
<li>- Cloud deployment, CI/CD pipelines and release management on AWS</li>
<li>- Production operations: monitoring, incident response and data remediation</li>
<li>- AI-augmented delivery — faster shipping without sacrificing review quality</li>
</ul>
</div>

<div className="text-[#3C3D3E] w-[100%] pb-8 max-w-full text-[18px] md:text-[27px] leading-[37.8px] font-[400]">
<h3 className="font-[600]"><span aria-hidden="true">💬</span> Why Work With Me?</h3>
<ul>
<li>- Trusted with deputy production authority on a live national government platform</li>
<li>- Track record on systems where mistakes cost real money and real users</li>
<li>- Evidence-first: fixes ship with tests, a rollback plan and live verification</li>
<li>- Clear communication with technical teams and non-technical stakeholders alike</li>
</ul>
</div>

<p className="text-[#3C3D3E] w-[100%] pb-8 max-w-full text-[18px] md:text-[27px] leading-[37.8px] font-[400]">
⭐ Let&apos;s Connect:
Whether it&apos;s a product to build, a platform to modernise, or a team that needs senior full-stack delivery — I&apos;m open to both short-term and long-term engagements.
</p>
<p className="text-[#3C3D3E] w-[100%] max-w-full text-[18px] md:text-[27px] leading-[37.8px] font-[400]">

Looking for a software engineer, a web developer for your next product, or a digital consultant to move a critical workflow online? I work with organisations in Nigeria and across Africa, on-site or remotely — use the contact form below.
      </p>
      </div>
    </section>
  );
};

export default About;
