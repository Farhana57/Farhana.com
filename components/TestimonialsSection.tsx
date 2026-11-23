"use client";

import BookPageSection from "./BookPageSection";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  projectLabel: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Farhana delivered our full-stack business website cleanly and on schedule. The layout, responsiveness, and inquiry flow worked smoothly across desktop and mobile.",
    name: "MD. Ataur Rahman Khan",
    role: "Founder & CEO, UptoTechSyl",
    projectLabel: "UptoTechSyl & Web Delivery",
  },
  {
    quote:
      "She translated our export trade requirements into a clear, fast, and reliable web platform with great attention to detail and post-launch support.",
    name: "Management Team",
    role: "Zaman Traders BD",
    projectLabel: "zamantradersbd.com",
  },
  {
    quote:
      "The portfolio and appointment information site was built with care, clarity, and mobile usability in mind so patients can find key details effortlessly.",
    name: "Dr. Nurjahan Mukti",
    role: "Consultant Specialist (Gynae & Obs)",
    projectLabel: "drnurjahanmukti.com",
  },
];

export default function TestimonialsSection() {
  return (
    <BookPageSection
      id="testimonials"
      className="border-t border-stone-200/80 dark:border-slate-800"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0f13f5] dark:text-amber-400">
              CLIENT &amp; TEAM FEEDBACK
            </p>
            <h2 className="mt-0.5 text-3xl font-bold tracking-tight text-[#18181B] dark:text-white sm:text-4xl">
              Trusted by{" "}
              <span className="font-serif italic font-normal text-[#0f25f3] dark:text-amber-300">
                Clients
              </span>{" "}
              &amp; Collaborators
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Feedback from real business, agency, and specialist web projects
            focused on clarity, responsiveness, and dependable execution.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.name + item.projectLabel}
              className="flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] dark:border-slate-800 dark:bg-[#0B192C]/90 dark:shadow-[0_14px_34px_rgba(0,0,0,0.45)] dark:hover:border-amber-400/45 dark:hover:shadow-[0_20px_46px_rgba(0,0,0,0.65)]"
            >
              <div>
                {/* Rating & Project Tag */}
                <div className="flex items-center justify-between gap-2">
                  <div
                    aria-label="5 out of 5 stars"
                    className="flex items-center gap-0.5 text-xs text-amber-500 dark:text-amber-400"
                  >
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <span className="rounded-full border border-slate-200/90 bg-slate-100/90 px-2.5 py-0.5 font-mono text-[10px] font-medium text-slate-600 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300">
                    {item.projectLabel}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <footer className="mt-6 border-t border-slate-200/80 pt-4 dark:border-slate-800">
                <div className="text-sm font-bold text-[#18181B] dark:text-white">
                  {item.name}
                </div>
                <div className="mt-0.5 font-mono text-[11px] text-slate-500 dark:text-slate-400">
                  {item.role}
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </BookPageSection>
  );
}