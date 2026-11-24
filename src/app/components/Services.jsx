const services = [
  {
    title: "Business websites",
    body: "A professional site that explains what you do and turns visitors into enquiries.",
  },
  {
    title: "Online stores",
    body: "Sell online with product pages, cart, checkout and payments your customers trust.",
  },
  {
    title: "Custom web apps",
    body: "Turn paperwork and manual processes into simple software your team can use.",
  },
  {
    title: "Payments",
    body: "Online payments wired in carefully, from people who build systems that handle real money.",
  },
  {
    title: "Rescue & speed-up",
    body: "Fix, speed up or take over a website or app that isn't working the way it should.",
  },
  {
    title: "Care after launch",
    body: "Hosting, updates and monitoring, so you're never left stranded once you go live.",
  },
];

const steps = [
  { title: "Talk", body: "You tell me the problem. I ask questions until I understand the goal, not just the feature list." },
  { title: "Plan", body: "A clear scope, price and timeline in plain language, with no tech talk." },
  { title: "Build", body: "Regular previews you can click through, so there are no surprises at the end." },
  { title: "Launch & support", body: "Tested before it goes live, with a backup plan, and support afterwards." },
];

const reasons = [
  "Trusted to help run a live government platform used by 58,000+ people",
  "Experienced with systems that handle real money, so I'm careful with yours",
  "Everything is tested before it goes live",
  "Modern AI tools to deliver faster, without cutting corners",
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="px-[20px] lg:px-[80px] py-[96px] md:py-[128px]"
    >
      <div className="max-w-[720px]">
        <p className="text-[14px] font-[700] uppercase tracking-[0.14em] text-[#455CE9]">
          Services
        </p>
        <h2
          id="services-heading"
          className="mt-3 font-display text-[#0B0C0E] text-[36px] md:text-[52px] leading-[1.1] font-[700] tracking-[-0.02em]"
        >
          What I can build for you
        </h2>
        <p className="mt-5 text-[18px] md:text-[20px] leading-[1.6] text-[#3C3D3E]">
          From a first website to the software that runs your operations, I
          take it from idea to launch and keep it running.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <li
            key={s.title}
            className="group rounded-[20px] bg-white p-7 md:p-8 border border-[#0B0C0E]/[0.06] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(11,12,14,0.35)]"
          >
            <span
              aria-hidden="true"
              className="font-display text-[14px] font-[700] text-[#455CE9]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-6 font-display text-[22px] md:text-[24px] font-[700] text-[#0B0C0E]">
              {s.title}
            </h3>
            <p className="mt-3 text-[16px] leading-[1.6] text-[#3C3D3E]">
              {s.body}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-[96px] grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-[14px] font-[700] uppercase tracking-[0.14em] text-[#455CE9]">
            How we&apos;ll work
          </p>
          <h3 className="mt-3 font-display text-[#0B0C0E] text-[30px] md:text-[40px] leading-[1.15] font-[700] tracking-[-0.02em]">
            A simple process, start to finish
          </h3>
          <ul className="mt-8 space-y-3">
            {reasons.map((r) => (
              <li key={r} className="flex gap-3 text-[16px] leading-[1.6] text-[#3C3D3E]">
                <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-[3px] h-5 w-5 shrink-0 text-[#455CE9]">
                  <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {r}
              </li>
            ))}
          </ul>
        </div>
        <ol className="grid gap-4 sm:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-[20px] bg-[#0B0C0E] p-7 text-[#F4F7FA]">
              <span aria-hidden="true" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#455CE9] font-display text-[15px] font-[700]">
                {i + 1}
              </span>
              <h4 className="mt-5 font-display text-[20px] font-[700]">{s.title}</h4>
              <p className="mt-2 text-[15px] leading-[1.6] text-[#C7D0D9]">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
