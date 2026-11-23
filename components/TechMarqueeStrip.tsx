"use client";

interface TechItem {
  name: string;
  dotClass: string;
}

const TECH_MARQUEE_ITEMS: TechItem[] = [
  { name: "CSS", dotClass: "bg-purple-400" },
  { name: "Tailwind CSS", dotClass: "bg-cyan-400" },
  { name: "JavaScript", dotClass: "bg-amber-400" },
  { name: "React", dotClass: "bg-sky-400" },
  { name: "Next.js", dotClass: "bg-slate-200" },
  { name: "Node.js", dotClass: "bg-lime-400" },
  { name: "Express.js", dotClass: "bg-orange-400" },
  { name: "MongoDB", dotClass: "bg-emerald-400" },
  { name: "Canva", dotClass: "bg-teal-400" },
  { name: "CapCut", dotClass: "bg-fuchsia-400" },
  { name: "Postman", dotClass: "bg-rose-400" },
];

export default function TechMarqueeStrip() {
  const repeatedItems = [...TECH_MARQUEE_ITEMS, ...TECH_MARQUEE_ITEMS];

  return (
    <div
      aria-label="Technologies marquee"
      className="group relative w-full overflow-hidden border-y border-slate-800/80 bg-[#08121E]/85 py-3.5 backdrop-blur-xs"
    >
      {/* Left & Right edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#08121E] to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#08121E] to-transparent sm:w-20" />

      <div className="flex w-max items-center animate-tech-marquee group-hover:[animation-play-state:paused]">
        {repeatedItems.map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex shrink-0 items-center gap-2.5 px-5 text-sm font-medium tracking-wide text-slate-200 transition-colors hover:text-amber-300"
          >
            <span
              className={`h-2 w-2 rounded-full shadow-[0_0_8px_currentColor] ${item.dotClass}`}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes techMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-tech-marquee {
          animation: techMarquee 26s linear infinite;
        }
      `}</style>
    </div>
  );
}