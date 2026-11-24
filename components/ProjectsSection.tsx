"use client";

import { useState } from "react";
import BookPageSection from "./BookPageSection";

type ProjectCategory = "All" | "Client & Full-Stack" | "Portfolios";

interface ProjectCaseStudy {
  id: string;
  category: Exclude<ProjectCategory, "All">;
  tag: string;
  title: string;
  shortDesc: string;
  liveUrl: string;
  image: string;
  techStack: string[];
  accentDotClass: string;
  overview: string;
  challenge: string;
  solution: string;
  highlights: string[];
}

const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "zaman-traders",
    category: "Client & Full-Stack",
    tag: "EXPORT & MERN SYSTEM",
    title: "Zaman Traders BD",
    shortDesc:
      "Full-stack export business platform with product showcase, inquiry flow, and responsive layout.",
    liveUrl: "https://www.zamantradersbd.com/",
    image: "/zaman-traders.png",
    techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    accentDotClass: "bg-emerald-500",
    overview:
      "A professional web presence and product showcase for Zaman Traders BD, built to present export offerings clearly and support direct buyer inquiries.",
    challenge:
      "Organizing structured product details, maintaining fast load speed across devices, and giving visitors an effortless way to connect for trade inquiries.",
    solution:
      "Engineered a responsive React and Tailwind CSS frontend paired with a Node.js and MongoDB backend for structured data handling and smooth inquiry workflows.",
    highlights: [
      "Full-stack architecture with React, Tailwind CSS, Node.js, and MongoDB",
      "Mobile-first responsive layout optimized for international and local visitors",
      "Deployed on production hosting with clean navigation and direct contact access",
    ],
  },
  {
    id: "uptotechsyl",
    category: "Client & Full-Stack",
    tag: "IT AGENCY & NEXT.JS APP",
    title: "UptoTechSyl",
    shortDesc:
      "Modern agency and tech solutions platform highlighting web, digital, and branding capabilities.",
    liveUrl: "https://uptotechsyl.com/",
    image: "/uptotechsyl.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "REST API"],
    accentDotClass: "bg-amber-400",
    overview:
      "A modern agency web platform built to showcase services, company identity, and client-ready digital solutions with crisp typography and interactive sections.",
    challenge:
      "Presenting multiple service tracks cleanly without overwhelming visitors while keeping transitions fast and visually consistent.",
    solution:
      "Built modular Next.js and Tailwind CSS sections with clear visual hierarchy, strong call-to-actions, and responsive performance across desktop and mobile.",
    highlights: [
      "Built with Next.js for fast page transitions and modern SEO structure",
      "Clear service positioning and direct client inquiry touchpoints",
      "Consistent dark/light visual polish and responsive grid layout",
    ],
  },
  {
    id: "dr-nurjahan-mukti",
    category: "Client & Full-Stack",
    tag: "HEALTHCARE & PORTFOLIO",
    title: "Dr. Nurjahan Mukti",
    shortDesc:
      "Patient-friendly specialist portfolio and chamber/appointment information portal.",
    liveUrl: "https://drnurjahanmukti.com/",
    image: "/dr-nurjahan-mukti.png",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    accentDotClass: "bg-rose-400",
    overview:
      "A trustworthy, easy-to-navigate portfolio and appointment information website designed for a specialist consultant so patients can quickly find chamber and profile details.",
    challenge:
      "Making medical credentials, chamber schedules, and consultation contact options clear and reassuring on smaller smartphone screens.",
    solution:
      "Developed a clean React and TypeScript interface focused on readability, structured schedule cards, and instant access to appointment details.",
    highlights: [
      "Crafted with React and TypeScript for type-safe, maintainable UI components",
      "Patient-focused layout with clear chamber information and contact flow",
      "Smooth mobile experience for quick access on smartphones",
    ],
  },
  {
    id: "portfolio-nine",
    category: "Portfolios",
    tag: "PERSONAL PORTFOLIO • VERCEL",
    title: "Farhana Portfolio (Next.js Edition)",
    shortDesc:
      "Modern personal developer portfolio showcasing projects, skills, and direct contact pathways.",
    liveUrl: "https://farhana-portfolio-nine.vercel.app/",
    image: "/portfolio-nine.png",
    techStack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    accentDotClass: "bg-sky-400",
    overview:
      "A dedicated personal portfolio build focused on clean visual presentation, project highlights, and responsive navigation across devices.",
    challenge:
      "Structuring portfolio sections and project previews so recruiters and clients can scan work quickly without clutter.",
    solution:
      "Designed a structured Next.js layout with responsive spacing, clear typography, and fast edge delivery on Vercel.",
    highlights: [
      "Responsive layout tailored for desktop and mobile viewing",
      "Clean section hierarchy highlighting development work and contact links",
      "Deployed on Vercel with fast loading performance",
    ],
  },
  {
    id: "portfolio-github",
    category: "Portfolios",
    tag: "PORTFOLIO • GITHUB PAGES",
    title: "My Portfolio (Classic Edition)",
    shortDesc:
      "Foundational web portfolio built and published on GitHub Pages to present early work and profile.",
    liveUrl: "https://farhana57.github.io/my-portfolio/",
    image: "/portfolio-github.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    accentDotClass: "bg-teal-400",
    overview:
      "An earlier portfolio iteration created to showcase foundational frontend work, personal profile details, and project links online.",
    challenge:
      "Delivering a lightweight, reliable static portfolio site with straightforward deployment via GitHub Pages.",
    solution:
      "Built with clean HTML, CSS, and JavaScript and hosted directly on GitHub Pages for accessible sharing.",
    highlights: [
      "Lightweight frontend build hosted on GitHub Pages",
      "Clear showcase of foundational web development milestones",
      "Accessible direct link for profile and work review",
    ],
  },
  {
    id: "portfolio-farhanacom",
    category: "Portfolios",
    tag: "INTERACTIVE PORTFOLIO • SAAS UI",
    title: "Farhana.com Portfolio",
    shortDesc:
      "Full showcase portfolio featuring interactive SaaS UI preview, journey milestones, and live projects.",
    liveUrl: "https://farhanacom.vercel.app/",
    image: "/portfolio-farhanacom.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Light/Dark UI"],
    accentDotClass: "bg-amber-400",
    overview:
      "An interactive portfolio experience combining project case studies, a SaaS dashboard preview, timeline milestones, and adaptive light/dark styling.",
    challenge:
      "Balancing rich interactive components, light/dark theme support, and smooth mobile responsiveness across multiple sections.",
    solution:
      "Implemented modular Next.js and Tailwind CSS components with mobile-first spacing, fixed top navigation, and interactive state previews.",
    highlights: [
      "Interactive SaaS dashboard showcase with tab and workspace state switching",
      "Adaptive Light & Dark mode support with responsive mobile layout",
      "Featured live work and milestone timeline in one cohesive experience",
    ],
  },
];

const CATEGORIES: ProjectCategory[] = [
  "All",
  "Client & Full-Stack",
  "Portfolios",
];

function ProjectScreenshotPreview({
  project,
}: {
  project: ProjectCaseStudy;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative mb-5 aspect-[4/3] min-h-[210px] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-900 sm:min-h-[230px] dark:border-slate-700/70">
      {!imgError ? (
        <img
          src={project.image}
          alt={`${project.title} website screenshot`}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#0F2942] via-[#09131E] to-slate-950 p-4 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400">
            {project.tag}
          </span>
          <span className="mt-1.5 text-base font-bold text-white">
            {project.title}
          </span>
          <span className="mt-1 font-mono text-[11px] text-slate-400">
            Add screenshot at public{project.image}
          </span>
        </div>
      )}

      {/* Subtle hover overlay with quick live link */}
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live website`}
        className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-slate-950/65 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span className="inline-flex items-center gap-1 rounded-lg bg-amber-400 px-2.5 py-1 font-mono text-[11px] font-semibold text-slate-950 shadow-md">
          <span>Live Preview</span>
          <span>↗</span>
        </span>
      </a>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] =
    useState<ProjectCaseStudy | null>(null);

  const visibleProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <BookPageSection
      id="projects"
      className="border-t border-stone-200/80 dark:border-slate-800"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.25em] text-[#0932eb] dark:text-amber-400">
              PRODUCTION WORK
            </p>
            <h2 className="mt-0.5 text-3xl font-bold tracking-tight text-[#18181B] dark:text-white sm:text-4xl">
              Featured Live{" "}
              <span className="font-serif italic font-normal text-[#0b1aee] dark:text-amber-300">
                Websites
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            Explore live websites, full-stack builds, and personal portfolio
            editions. Open any case study to inspect how the solution was built.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer rounded-xl px-3.5 py-2 font-mono text-xs font-semibold transition ${
                  isActive
                    ? "bg-[#0f25ee] text-white shadow-xs dark:bg-amber-400 dark:text-slate-950"
                    : "border border-stone-200/90 bg-white text-slate-700 hover:border-amber-400/60 hover:text-slate-950 dark:border-slate-800 dark:bg-[#0B192C]/80 dark:text-slate-300 dark:hover:border-amber-400/40 dark:hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/60 hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)] sm:p-6 dark:border-slate-800 dark:bg-[#0B192C]/90 dark:shadow-[0_14px_34px_rgba(0,0,0,0.45)] dark:hover:border-amber-400/45 dark:hover:shadow-[0_20px_46px_rgba(0,0,0,0.65)]"
            >
              <div>
                {/* Project Screenshot Preview */}
                <ProjectScreenshotPreview project={project} />

                {/* Top Status & Tag */}
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#0f12e4] dark:text-amber-400">
                    {project.tag}
                  </span>
                  <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] text-emerald-600 dark:text-emerald-400">
                    <span
                      className={`h-2 w-2 rounded-full ${project.accentDotClass}`}
                    />
                    LIVE
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="mt-3 text-xl font-bold text-[#18181B] dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.shortDesc}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-200/90 bg-slate-100/90 px-2.5 py-1 font-mono text-[10px] font-medium text-slate-700 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions: Case Study Modal + Live Link */}
              <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-200/80 pt-4 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-xl border border-amber-500/40 bg-amber-400/15 px-3.5 py-2 font-mono text-xs font-semibold text-amber-900 transition hover:bg-amber-400 hover:text-slate-950 dark:text-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950"
                >
                  <span>Case Study</span>
                  <span>↗</span>
                </button>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-[#0f25ee] transition hover:underline dark:text-amber-400"
                >
                  <span>Visit Live</span>
                  <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-[10001] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-700/80 bg-[#0B192C] p-6 text-slate-100 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-400">
                  CASE STUDY • {selectedProject.tag}
                </p>
                <h3
                  id="case-study-title"
                  className="mt-1 text-2xl font-bold text-white"
                >
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close case study"
                className="cursor-pointer rounded-lg border border-slate-700 bg-slate-900/90 px-3 py-1.5 font-mono text-xs text-slate-300 transition hover:border-amber-400 hover:text-amber-300"
              >
                ✕ Close
              </button>
            </div>

            <div className="mt-5 space-y-5 text-sm leading-relaxed text-slate-300">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} case study preview`}
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Overview
                </h4>
                <p className="mt-1.5">{selectedProject.overview}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900/65 p-4">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-rose-300">
                    Challenge
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-900/65 p-4">
                  <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-300">
                    Solution
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Key Highlights
                </h4>
                <ul className="mt-2 space-y-2 text-xs text-slate-200">
                  {selectedProject.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-amber-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-slate-700 bg-slate-900 px-2.5 py-1 font-mono text-[11px] text-amber-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-slate-800 pt-5">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="cursor-pointer rounded-xl border border-slate-700 px-4 py-2 font-mono text-xs text-slate-300 transition hover:border-slate-500 hover:text-white"
              >
                Back to Portfolio
              </button>
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-4 py-2 font-mono text-xs font-semibold text-slate-950 transition hover:bg-amber-300"
              >
                <span>Open Live Website</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </BookPageSection>
  );
}