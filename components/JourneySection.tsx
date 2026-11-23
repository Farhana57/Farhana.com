"use client";

import BookPageSection from "./BookPageSection";
import { Award, Briefcase, GraduationCap, Laptop } from "lucide-react";

interface MilestoneItem {
  period: string;
  type: "Experience" | "Certification" | "Education" | "Training";
  title: string;
  org: string;
  location?: string;
  detail: string;
  tags: string[];
  delayMs: number;
}

const milestones: MilestoneItem[] = [
  {
    period: "Feb 2025 - Present",
    type: "Experience",
    title: "Executive Officer & Full-Stack MERN Developer",
    org: "UptoTechSyl",
    location: "Sylhet, Bangladesh",
    detail:
      "Overseeing agency operations, managing full-stack MERN & Next.js projects, building responsive web applications, and handling live deployments.",
    tags: ["MERN Stack", "Next.js", "Web Development", "Operations"],
    delayMs: 0,
  },
  {
    period: "August 22 • Batch 13 • ID: A46899",
    type: "Certification",
    title: "Full-Stack Web Development with JavaScript (MERN)",
    org: "Ostad Platform (Vetted Assessment)",
    location: "Online / Remote",
    detail:
      "Completed comprehensive MERN stack training and assessment with 91.7% in Assignments, covering React, Next.js, Node.js, Express, MongoDB, and UI tools.",
    tags: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB"],
    delayMs: 90,
  },
  {
    period: "Graduated",
    type: "Education",
    title: "Bachelor of Social Science (BSS) Degree",
    org: "Academic Degree & Higher Studies",
    location: "Bangladesh",
    detail:
      "Completed Bachelor of Social Science degree with analytical, research, and communication foundations.",
    tags: ["Social Science", "Higher Education"],
    delayMs: 180,
  },
  {
    period: "Dec 2011",
    type: "Training",
    title: "Basic IT & ICT Literacy Training",
    org: "ICT Division, Bangladesh (LEDP)",
    location: "Bangladesh",
    detail:
      "15 Days (90 Hours) intensive training under Learning and Earning Development Project, Ministry of Posts, Telecommunications and Information Technology (Grade: A).",
    tags: ["IT Literacy", "ICT Skills", "Grade: A"],
    delayMs: 270,
  },
  {
    period: "2010",
    type: "Training",
    title: "Certificate Course in Computer (Basic)",
    org: "Bangladesh Computer College (Moulvibazar Branch)",
    location: "Bangladesh",
    detail:
      "Completed foundational computer certificate course approved by the Government of the People's Republic of Bangladesh.",
    tags: ["Computer Basics", "ICT Literacy"],
    delayMs: 360,
  },
  {
    period: "2010",
    type: "Education",
    title: "Higher Secondary Certificate (HSC)",
    org: "Sylhet Government Women’s College",
    location: "Sylhet, Bangladesh",
    detail:
      "Completed Higher Secondary Certificate (HSC) in Humanities with a strong academic foundation.",
    tags: ["Higher Secondary", "Academic Studies"],
    delayMs: 450,
  },
];

function MilestoneBadgeIcon({ type }: { type: MilestoneItem["type"] }) {
  switch (type) {
    case "Experience":
      return <Briefcase className="h-3.5 w-3.5" />;
    case "Certification":
      return <Award className="h-3.5 w-3.5" />;
    case "Education":
      return <GraduationCap className="h-3.5 w-3.5" />;
    case "Training":
      return <Laptop className="h-3.5 w-3.5" />;
  }
}

export default function JourneySection() {
  return (
    <BookPageSection
      id="journey"
      className="border-t border-stone-200/80 dark:border-slate-800"
    >
      <style jsx global>{`
        @keyframes journeySlideUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-journey-slide {
          animation: journeySlideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
      `}</style>

      <div className="animate-journey-slide mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0920f0] dark:text-[#F59E0B]">
            Education &amp; Credentials
          </p>
          <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#18181B] dark:text-[#F8FAFC]">
            My Journey &amp; Milestones
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#52525B] dark:text-slate-300">
          A complete timeline of my academic background, technical certifications,
          and professional career milestones.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {milestones.map((item) => (
          <article
            key={`${item.title}-${item.period}`}
            style={{ animationDelay: `${item.delayMs}ms` }}
            className="animate-journey-slide group relative flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white/95 p-6 shadow-[0_10px_26px_rgba(15,41,66,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#184cf5] hover:shadow-[0_18px_38px_rgba(13,148,136,0.18)] dark:border-slate-700/80 dark:bg-[#0F2942] dark:shadow-[0_12px_30px_rgba(0,0,0,0.38)] dark:hover:border-[#F59E0B] dark:hover:shadow-[0_20px_42px_rgba(245,158,11,0.18)]"
          >
            <div>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#0D9488]/25 bg-[#0D9488]/10 px-3 py-1 text-xs font-semibold text-[#0c43f5] transition-colors duration-200 group-hover:border-[#0D9488]/50 dark:border-amber-400/25 dark:bg-amber-400/15 dark:text-[#FBBF24] dark:group-hover:border-amber-400/50">
                  <MilestoneBadgeIcon type={item.type} />
                  {item.type}
                </span>

                <span className="rounded-md bg-stone-100 px-2.5 py-1 text-[11px] font-medium text-[#52525B] dark:bg-white/5 dark:text-slate-300">
                  {item.period}
                </span>
              </div>

              <h3 className="text-lg font-bold leading-snug text-[#0f0fe9] transition-colors duration-200 group-hover:text-[#1317f3] dark:text-white dark:group-hover:text-[#FBBF24]">
                {item.title}
              </h3>

              <p className="mt-1.5 text-sm font-semibold text-[#0F2942] dark:text-[#f0b30b]">
                {item.org}
                {item.location ? (
                  <span className="font-normal text-[#71717A] dark:text-slate-400">
                    {" "}
                    • {item.location}
                  </span>
                ) : null}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#52525B] dark:text-slate-300">
                {item.detail}
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-1.5 border-t border-stone-200/70 pt-4 dark:border-slate-700/70">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-stone-200/80 bg-stone-50 px-2.5 py-0.5 text-[11px] font-medium text-[#3F3F46] transition-colors duration-200 group-hover:border-[#0D9488]/30 dark:border-slate-600/60 dark:bg-white/5 dark:text-slate-200 dark:group-hover:border-amber-400/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </BookPageSection>
  );
}