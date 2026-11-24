import { LogoMark } from "./Logo";

const tools = ["React", "Next.js", "TypeScript", "Node.js", "NestJS", "MongoDB", "AWS", "Tailwind CSS"];

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="px-[20px] lg:px-[80px] py-[96px] md:py-[128px]"
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="text-[14px] font-[700] uppercase tracking-[0.14em] text-[#455CE9]">
            About
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-display text-[#0B0C0E] text-[36px] md:text-[52px] leading-[1.1] font-[700] tracking-[-0.02em]"
          >
            About Tolulope Olatunji
          </h2>
          <div className="mt-10 hidden lg:flex items-center gap-5 rounded-[24px] bg-[#0B0C0E] p-8">
            <LogoMark tone="paper" className="h-14 w-auto" />
            <p className="font-display text-[20px] leading-[1.35] text-[#F4F7FA]">
              Software that people can depend on, every day.
            </p>
          </div>
        </div>

        <div className="text-[18px] md:text-[20px] leading-[1.7] text-[#3C3D3E]">
          <p className="font-display text-[22px] md:text-[28px] leading-[1.4] font-[500] text-[#0B0C0E]">
            I build websites and web apps that help businesses win customers,
            get paid online and run smoothly.
          </p>
          <p className="mt-6">
            I&apos;m a software engineer and web developer based in Nigeria.
            For over 4 years I&apos;ve built websites and software for
            businesses and organisations. Today I help run a national
            government platform that more than 58,000 professionals use to
            register and pay online, so I know what it takes to build
            something people can depend on every day.
          </p>
          <p className="mt-6">
            I explain things in plain language, test everything before it
            goes live, and stay around after launch. I work with businesses in
            Nigeria, across Africa and around the world, in person or
            remotely.
          </p>

          <h3 className="mt-10 text-[15px] font-[700] uppercase tracking-[0.12em] text-[#0B0C0E]">
            Tools I work with
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {tools.map((t) => (
              <li
                key={t}
                className="rounded-full border border-[#0B0C0E]/15 bg-white px-4 py-2 text-[15px] font-[500] text-[#0B0C0E]"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
